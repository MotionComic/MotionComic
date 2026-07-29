import './styles.css';
import { siteConfig } from './config';
import { messages, type Locale } from './i18n';

const STORAGE_KEY = 'mcs-writer-locale';

let locale: Locale = 'en';
let galleryIndex = 0;

function detectLocale(): Locale {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get('lang');
  if (fromQuery === 'zh' || fromQuery === 'en') return fromQuery;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'zh' || saved === 'en') return saved;

  return 'en';
}

function bannerUrl(file: string): string {
  return `${import.meta.env.BASE_URL}banners/${file}`;
}

function setLocale(next: Locale): void {
  locale = next;
  localStorage.setItem(STORAGE_KEY, next);

  const url = new URL(window.location.href);
  url.searchParams.set('lang', next);
  history.replaceState(null, '', url);

  const dict = messages[next];
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  document.title =
    next === 'zh'
      ? 'Motion Comic Studio Writer — 本地 Markdown 小说编辑器'
      : 'Motion Comic Studio Writer — Local Markdown Editor for Fiction';

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', dict['meta.description']);

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as keyof typeof dict;
    const value = dict[key];
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria as keyof typeof dict;
    const value = dict[key];
    if (typeof value === 'string') el.setAttribute('aria-label', value);
  });

  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === next);
  });

  const heroShot = document.querySelector<HTMLImageElement>('[data-shot="hero"]');
  if (heroShot) {
    heroShot.src = bannerUrl(dict.heroShot);
    heroShot.alt = dict['hero.title'];
  }

  const mac = document.querySelector<HTMLAnchorElement>('#download-mac');
  const source = document.querySelector<HTMLAnchorElement>('#download-source');
  if (mac) mac.href = siteConfig.downloadMacUrl;
  if (source) source.href = siteConfig.sourceUrl;

  const support = document.querySelector<HTMLAnchorElement>('#footer-support');
  const privacy = document.querySelector<HTMLAnchorElement>('#footer-privacy');
  if (support) {
    support.href = next === 'zh' ? './support-zh.html' : './support.html';
  }
  if (privacy) {
    privacy.href = next === 'zh' ? './privacy-policy-zh.html' : './privacy-policy-en.html';
  }

  renderFeatures();
  renderFormats();
  renderGallery();
}

function renderFeatures(): void {
  const root = document.querySelector('#feature-grid');
  if (!root) return;
  root.innerHTML = messages[locale].features
    .map(
      (item, index) => `
      <article class="feature-item">
        <span class="feature-index">${String(index + 1).padStart(2, '0')}</span>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>`,
    )
    .join('');
}

function renderFormats(): void {
  const root = document.querySelector('#format-row');
  if (!root) return;
  root.innerHTML = messages[locale].formats
    .map(
      (item) => `
      <article class="format-item">
        <h3>${item.name}</h3>
        <p>${item.body}</p>
      </article>`,
    )
    .join('');
}

function renderGallery(): void {
  const shots = messages[locale].shots;
  const image = document.querySelector<HTMLImageElement>('#gallery-image');
  const caption = document.querySelector('#gallery-caption');
  const dots = document.querySelector('#gallery-dots');
  if (!image || !caption || !dots) return;

  galleryIndex = ((galleryIndex % shots.length) + shots.length) % shots.length;
  const shot = shots[galleryIndex];

  image.src = bannerUrl(shot.src);
  image.alt = shot.caption;
  caption.textContent = shot.caption;

  dots.innerHTML = shots
    .map(
      (_, i) =>
        `<button type="button" class="gallery-dot${i === galleryIndex ? ' is-active' : ''}" data-index="${i}" aria-label="${i + 1}"></button>`,
    )
    .join('');
}

function setupChrome(): void {
  const toggle = document.querySelector('.menu-toggle');
  toggle?.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav a, .header-actions .btn').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === 'zh' || lang === 'en') setLocale(lang);
    });
  });

  document.querySelector('.gallery-nav.prev')?.addEventListener('click', () => {
    galleryIndex -= 1;
    renderGallery();
  });

  document.querySelector('.gallery-nav.next')?.addEventListener('click', () => {
    galleryIndex += 1;
    renderGallery();
  });

  document.querySelector('#gallery-dots')?.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (!target?.classList.contains('gallery-dot')) return;
    const index = Number(target.dataset.index);
    if (Number.isFinite(index)) {
      galleryIndex = index;
      renderGallery();
    }
  });
}

setupChrome();
setLocale(detectLocale());
