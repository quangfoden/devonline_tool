<template>
  <div class="happy-new-yeah-preview" ref="root">
    <div id="happy-root"></div>
  </div>
</template>

<script>
export default {
  name: 'HappyNewYeahPreview',
  mounted() {
    // Load template CSS from public template folder
    this.loadCss('/template/HappyNewYeah/css/style.css');
    this.loadCss('/template/HappyNewYeah/css/custom.css');

    // Load scripts in order (these are the original template scripts)
    const scripts = [
      '/template/HappyNewYeah/js/MyMath.js',
      '/template/HappyNewYeah/js/Stage.js',
      '/template/HappyNewYeah/js/fscreen.js',
      '/template/HappyNewYeah/js/script.js'
    ];

    // sequentially load to preserve order
    scripts.reduce((p, src) => p.then(() => this.loadScript(src)), Promise.resolve())
      .catch(err => console.error('Failed to load HappyNewYeah scripts', err));
  },
  methods: {
    loadCss(href) {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    },
    loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        s.onload = () => resolve();
        s.onerror = (e) => reject(e);
        document.body.appendChild(s);
      });
    }
  },
  beforeUnmount() {
    // Optional: keep assets loaded to speed up re-mount; remove if you want full cleanup.
  }
}
</script>

<style scoped>
/* Keep container sizing neutral so template CSS can control layout */
.happy-new-yeah-preview { width: 100%; height: 100%; }
#happy-root { width: 100%; height: 100%; }
</style>
