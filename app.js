(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const toggle = document.querySelector('.theme-toggle');
  const label = document.getElementById('theme-label');
  const preferences = ['system', 'light', 'dark'];
  const labels = { system: '跟随系统', light: '浅色模式', dark: '深色模式' };
  let preference = root.dataset.preference || 'system';

  function applyTheme() {
    const theme = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
    root.dataset.theme = theme;
    root.dataset.preference = preference;
    document.querySelectorAll('.theme-picture source[data-light]').forEach(source => {
      source.media = theme === 'light' ? 'all' : 'not all';
    });
    label.textContent = labels[preference];
    document.querySelector('.theme-icon').textContent = theme === 'light' ? '☼' : '☾';
    const next = preferences[(preferences.indexOf(preference) + 1) % preferences.length];
    toggle.setAttribute('aria-label', `当前${labels[preference]}，切换到${labels[next]}`);
    toggle.title = `当前${labels[preference]} · 点击切换到${labels[next]}`;
    document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f2f6fc' : '#0c1425';
  }
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    preference = preferences[(preferences.indexOf(preference) + 1) % preferences.length];
    try { localStorage.setItem('orbit-theme', preference); } catch {}
    applyTheme();
  });
  system.addEventListener('change', () => { if (preference === 'system') applyTheme(); });
  applyTheme();

  const filters = document.querySelector('.filter-bar');
  const projects = Array.from(document.querySelectorAll('.project-card'));
  filters.querySelector('[data-filter="all"] span').textContent = projects.length;
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const category = button.dataset.filter;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    projects.forEach(project => { project.hidden = category !== 'all' && project.dataset.category !== category; });
    const count = projects.filter(project => !project.hidden).length;
    document.getElementById('filter-status').textContent = `已显示 ${count} 个精选项目；更多项目可展开下方目录。`;
  });

  document.querySelectorAll('.data-panel img').forEach(image => {
    const showFallback = () => {
      const panel = image.closest('.data-panel');
      if (panel.querySelector('.image-error')) return;
      const fallback = document.createElement('div');
      fallback.className = 'image-error';
      const link = document.createElement('a');
      link.href = 'https://github.com/fanxing724';
      link.textContent = '星轨卡片暂时没接上，去 GitHub 看看 ↗';
      fallback.append(link);
      image.parentElement.hidden = true;
      panel.append(fallback);
    };
    image.addEventListener('error', showFallback);
    image.addEventListener('load', () => {
      image.parentElement.hidden = false;
      image.closest('.data-panel').querySelector('.image-error')?.remove();
    });
    if (image.complete && !image.naturalWidth) showFallback();
  });
})();
