export type Locale = 'zh' | 'en';

type Feature = { title: string; body: string };
type Format = { name: string; body: string };
type Shot = { src: string; caption: string };

export type Dictionary = {
  'meta.description': string;
  'nav.home': string;
  'nav.features': string;
  'nav.formats': string;
  'nav.gallery': string;
  'nav.download': string;
  'nav.cta': string;
  'nav.menu': string;
  'hero.brand': string;
  'hero.title': string;
  'hero.lead': string;
  'hero.ctaPrimary': string;
  'hero.ctaSecondary': string;
  'features.title': string;
  'features.lead': string;
  'formats.title': string;
  'formats.lead': string;
  'gallery.title': string;
  'gallery.lead': string;
  'gallery.prev': string;
  'gallery.next': string;
  'download.title': string;
  'download.lead': string;
  'download.mac': string;
  'download.source': string;
  'download.note': string;
  'footer.copy': string;
  features: Feature[];
  formats: Format[];
  shots: Shot[];
  heroShot: string;
};

export const messages: Record<Locale, Dictionary> = {
  zh: {
    'meta.description':
      'Motion Comic Studio Writer — 面向小说创作者的轻量化本地 Markdown 编辑器。原生 Markdown、故事树与故事线、AI 协同，文稿始终保存在本机。',
    'nav.home': '回到首页',
    'nav.features': '特色',
    'nav.formats': '体裁',
    'nav.gallery': '界面',
    'nav.download': '下载',
    'nav.cta': '获取应用',
    'nav.menu': '打开菜单',
    'hero.brand': 'Motion Comic Studio Writer',
    'hero.title': '面向小说创作者的本地 Markdown 编辑器',
    'hero.lead':
      '轻量、本地、不锁格式。直接打开本机 Markdown，用故事树与故事线稳住长篇逻辑，并与各类 AI 写作工具自由协同。',
    'hero.ctaPrimary': '下载桌面版',
    'hero.ctaSecondary': '了解特色',
    'features.title': '产品特色',
    'features.lead': '从本地读写到情节统筹，再到 AI 协同与隐私掌控——为小说长篇创作而设计。',
    'formats.title': '三种写作体裁',
    'formats.lead': '按作品气质选择范式，用标准 Markdown 起步，结构清晰、可持续迭代。',
    'gallery.title': '真实界面',
    'gallery.lead': '章节写作、故事树、故事线与人物设定——本地工作流一目了然。',
    'gallery.prev': '上一张',
    'gallery.next': '下一张',
    'download.title': '在本机开始创作',
    'download.lead': 'macOS 桌面版，文稿保存在你的设备。把下载链接换成 Release 或 Mac App Store 地址即可上线。',
    'download.mac': '下载 macOS 版',
    'download.source': '查看源码',
    'download.note': '当前为占位链接，请在 src/config.ts 中配置真实地址。',
    'footer.copy': '© Motion Comic Studio Writer',
    features: [
      {
        title: '本地 Markdown，不锁文稿',
        body: '专注本机文件读写。直接打开、编辑电脑上的原生 Markdown 文档，不强制私有格式，不锁定你的稿件——你的文件始终是普通、可迁移的 Markdown。',
      },
      {
        title: '故事树与故事线',
        body: '依托标准 Markdown 实现故事树与故事线：建立故事节点、串联剧情线索，梳理情节脉络，统筹长篇逻辑，减少设定冲突与剧情崩坏。',
      },
      {
        title: '与 AI 写作工具协同',
        body: 'Markdown 通用格式天然适配各类 AI 编辑器。作者与 AI 可在同一套文件上协作，自由对接写作 AI，搭建属于你的创作工作流。',
      },
      {
        title: '隐私由你掌控',
        body: '所有文稿保存在本地设备，不会强制上传云端。创作内容由你全权掌控，保障小说稿件的隐私与安全。',
      },
      {
        title: '章节与双模式写作',
        body: '对话模式沉浸写戏，文本模式直读结构；章节列表、检索与字数统计，让长篇连载也能快速定位与修订。',
      },
      {
        title: '人物、设定与 Git 历史',
        body: '角色库、关系图谱与世界设定稳住出场与立场；内置 Git 保存、差异与历史，迭代可回看、可回滚。',
      },
    ],
    formats: [
      {
        name: '戏剧体',
        body: '场景 + 对白 + 神态，适合强对话与分幕节奏的小说或动态漫改编。',
      },
      {
        name: '叙事体',
        body: '散文叙事与角色声音并重，贴近传统小说写法，适合长篇连载。',
      },
      {
        name: '故事板',
        body: '按镜头/节拍推进画面与对白，连接文字创作与视觉化构思。',
      },
    ],
    shots: [
      { src: 'cn-1.png', caption: '对话模式：用气泡写对白与神态' },
      { src: 'cn-2.png', caption: '文本模式：标准 Markdown 结构清晰可读' },
      { src: 'cn-3.png', caption: '章节管理：检索、排序与字数统计' },
      { src: 'cn-4.png', caption: '人物设定：角色库与出场信息' },
      { src: 'cn-5.png', caption: '关系图谱：人物网络一目了然' },
      { src: 'cn-6.png', caption: '故事线：主线与支线可视化' },
      { src: 'cn-7.png', caption: '世界设定：背景与规则集中管理' },
      { src: 'cn-8.png', caption: '地图视图：空间叙事辅助' },
      { src: 'cn-9.png', caption: '系统设置：主题与语言' },
      { src: 'cn-10.png', caption: '欢迎页：打开或创建本机作品' },
    ],
    heroShot: 'cn-1.png',
  },
  en: {
    'meta.description':
      'Motion Comic Studio Writer — a lightweight local Markdown editor for fiction writers. Native Markdown, Story Tree & Storyline, AI-friendly workflows, manuscripts stay on your Mac.',
    'nav.home': 'Back to top',
    'nav.features': 'Features',
    'nav.formats': 'Formats',
    'nav.gallery': 'Screens',
    'nav.download': 'Download',
    'nav.cta': 'Get the app',
    'nav.menu': 'Open menu',
    'hero.brand': 'Motion Comic Studio Writer',
    'hero.title': 'A lightweight local Markdown editor for fiction writers',
    'hero.lead':
      'Open native Markdown on your Mac—no proprietary lock-in. Map Story Tree and Storylines, connect with AI writing tools, and keep every draft under your control.',
    'hero.ctaPrimary': 'Download for desktop',
    'hero.ctaSecondary': 'See features',
    'features.title': 'Built for long-form fiction',
    'features.lead':
      'Local files, plot structure, AI collaboration, and privacy—designed around how novelists actually write.',
    'formats.title': 'Three writing formats',
    'formats.lead': 'Pick a paradigm that matches your voice—still plain Markdown you can take anywhere.',
    'gallery.title': 'Inside the app',
    'gallery.lead': 'Chapters, Story Tree, Storylines, and cast tools—your local writing workflow on screen.',
    'gallery.prev': 'Previous screenshot',
    'gallery.next': 'Next screenshot',
    'download.title': 'Write on your Mac',
    'download.lead':
      'Desktop for macOS. Manuscripts stay on your device. Point these buttons to your Release or Mac App Store listing.',
    'download.mac': 'Download for macOS',
    'download.source': 'View source',
    'download.note': 'Placeholder links—set real URLs in src/config.ts.',
    'footer.copy': '© Motion Comic Studio Writer',
    features: [
      {
        title: 'Local Markdown, no lock-in',
        body: 'We focus on local file access. Open and edit native Markdown documents on your Mac. There are no proprietary locked formats—you always own your manuscripts.',
      },
      {
        title: 'Story Tree & Storyline',
        body: 'Built on standard Markdown, Story Tree and Storyline help you map plot outlines and link story nodes with narrative threads—keeping long-form writing consistent and reducing contradictions and plot holes.',
      },
      {
        title: 'Ready for AI collaboration',
        body: 'Universal Markdown works with all kinds of AI editors. Write with AI side by side, connect your favorite tools, and build an exclusive creative workflow around files you control.',
      },
      {
        title: 'Privacy by default',
        body: 'All manuscripts are stored locally. No mandatory cloud uploads. You maintain full control and protect the privacy and security of your fiction drafts.',
      },
      {
        title: 'Chapters & dual editing modes',
        body: 'Dialogue mode for immersive scenes, text mode for structure. Chapter lists, search, and character counts keep long serials easy to navigate and revise.',
      },
      {
        title: 'Cast, lore & Git history',
        body: 'Character library, relationship graphs, and world settings keep continuity steady. Built-in Git save, diff, and history let you review and roll back with confidence.',
      },
    ],
    formats: [
      {
        name: 'Dramatic',
        body: 'Scene + dialogue + gesture cues—ideal for dialogue-heavy fiction and motion-comic adaptations.',
      },
      {
        name: 'Narrative',
        body: 'Prose narration with character voice—close to classic novel writing for long-form serials.',
      },
      {
        name: 'Storyboard',
        body: 'Beat-by-beat picture and line notes bridging prose drafting and visual thinking.',
      },
    ],
    shots: [
      { src: 'en-1.png', caption: 'Dialogue mode: write lines and gestures in bubbles' },
      { src: 'en-2.png', caption: 'Text mode: clean, portable Markdown structure' },
      { src: 'en-3.png', caption: 'Chapters: search, sort, and character counts' },
      { src: 'en-4.png', caption: 'Characters: cast library and appearance notes' },
      { src: 'en-5.png', caption: 'Relationships: cast network at a glance' },
      { src: 'en-6.png', caption: 'Storylines: visualize arcs and branches' },
      { src: 'en-7.png', caption: 'World bible: lore and rules in one place' },
      { src: 'en-8.png', caption: 'Map view: spatial storytelling support' },
      { src: 'en-9.png', caption: 'Settings: theme and language' },
      { src: 'en-10.png', caption: 'Welcome: open or create a local project' },
    ],
    heroShot: 'en-1.png',
  },
};
