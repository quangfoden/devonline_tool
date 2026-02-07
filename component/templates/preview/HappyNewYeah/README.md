HappyNewYeah Vue wrapper
=========================

Usage
-----

- Import and register the component in your Vue app:

```js
import HappyNewYeahPreview from 'component/templates/preview/HappyNewYeah/HappyNewYeah.vue'

export default {
  components: { HappyNewYeahPreview }
}
```

- The wrapper loads CSS and JS assets from `public/template/HappyNewYeah` at runtime. Keep the original `public/template/HappyNewYeah` folder in place.

Notes
-----
- This is a lightweight wrapper that mounts the original template scripts and styles into a Vue component. To fully convert the project to idiomatic Vue (refactor animations into components, remove global scripts), I can refactor the original JS into Vue composition API code on request.
