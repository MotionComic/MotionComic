# Motion Comic Studio Writer — Official Site

面向 [Motion Comic Studio Writer](https://github.com/thenow/MotionComicStudioWriter) 的官方静态网站，支持中 / 英双语，部署于 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址。右上角可切换中英文；URL 会带上 `?lang=zh` / `?lang=en`。

## 构建

```bash
npm run build
npm run preview
```

默认 `base` 为 `/MotionComicStudioHome/`（GitHub 项目站）。若使用自定义域名或用户站根路径：

```bash
VITE_BASE=/ npm run build
```

## 配置下载链接

编辑 `src/config.ts`：

- `downloadMacUrl`：macOS 安装包 / Release
- `sourceUrl`：源码仓库
- `macAppStoreUrl`：可选 Mac App Store 地址

## 部署到 GitHub Pages

站点必须发布 **Vite 构建产物**（`dist/`），不能直接托管仓库源码，否则会请求 `/src/main.ts` 导致页面空白。

1. 仓库 **Settings → Pages**
2. **Build and deployment → Source** 选 **Deploy from a branch**
3. Branch 选 **`gh-pages`** / **`/`（root）** → Save
4. 推送到 `main` 后，workflow 会自动 `npm run build` 并更新 `gh-pages`

本地手动发布：

```bash
npm run build
touch dist/.nojekyll
# 将 dist 内容推到 gh-pages 分支（见 CI workflow）
```

站点地址：

`https://motioncomic.github.io/MotionComic/`

若仓库名不同，请同步修改 `vite.config.ts` 与 workflow 中的 `VITE_BASE`。

## 素材

- `public/brand/`：应用图标
- `public/banners/`：中英文界面截图（`cn-*.png` / `en-*.png`）
- 根目录 `banner/` 为原始素材备份，构建以 `public/` 为准
