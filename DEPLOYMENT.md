# GitHub部署指南

本指南将帮助你将告白网站部署到GitHub Pages上，使其可以公开访问。

## 步骤1：创建GitHub仓库

1. 打开GitHub网站 (https://github.com/) 并登录你的账户
2. 点击右上角的 "+" 图标，选择 "New repository"
3. 在 "Repository name" 中输入一个名称，例如 `for-liuziliang`
4. 选择仓库可见性（公开或私有）
5. 不要勾选 "Initialize this repository with a README" 选项
6. 点击 "Create repository" 按钮

## 步骤2：推送代码到GitHub

1. 打开命令提示符（Windows）或终端（Mac/Linux）
2. 导航到项目文件夹：
   ```bash
   cd c:\Users\fanxing\Documents\trae_projects\bro
   ```
3. 初始化Git仓库：
   ```bash
   git init
   ```
4. 添加所有文件：
   ```bash
   git add .
   ```
5. 提交文件：
   ```bash
   git commit -m "Initial commit"
   ```
6. 连接到GitHub仓库（将 `yourusername` 替换为你的GitHub用户名，`for-liuziliang` 替换为你的仓库名称）：
   ```bash
   git remote add origin https://github.com/yourusername/for-liuziliang.git
   ```
7. 推送代码到GitHub：
   ```bash
   git push -u origin master
   ```

## 步骤3：启用GitHub Pages

1. 回到GitHub仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中点击 "Pages"
4. 在 "Source" 部分，从下拉菜单中选择 "master" 分支
5. 点击 "Save" 按钮
6. 等待几分钟，GitHub将为你部署网站

## 步骤4：访问你的网站

1. 部署完成后，你将看到一个URL，格式为：`https://yourusername.github.io/for-liuziliang/`
2. 点击该URL即可访问你的告白网站
3. 你可以将这个URL分享给刘子梁

## 自定义域名（可选）

如果你想使用自定义域名，可以：

1. 在域名注册商处设置CNAME记录，指向 `yourusername.github.io`
2. 在GitHub Pages设置中添加自定义域名
3. 等待DNS解析完成

## 更新网站内容

如果你需要更新网站内容：

1. 修改本地文件
2. 提交更改：
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. 等待几分钟，GitHub Pages将自动更新

## 故障排除

- 如果网站没有显示，请检查：
  - 是否选择了正确的分支
  - 文件名是否为 `index.html`
  - DNS记录是否正确（如果使用自定义域名）
- 如果图片无法显示，请确保图片路径正确
- 如果动画效果不工作，请检查浏览器控制台是否有错误信息

祝你部署成功！🎉
