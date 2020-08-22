# argdown-vue

[Argdown](https://argdown.org) with [Vue.js](https://vuejs.org/), see [demo](https://codesandbox.io/s/dry-water-q96ig).

## Getting started

```
npm install --save argdown-vue
```

Then in your project's main.js you'll need to import and use the library, i.e.

``` javascript
import Vue from 'vue';
import App from './App.vue';
import ArgdownVue from 'argdown-vue';
Vue.use(ArgdownVue);
```

Which will give you access to an ``argdown-map`` component with two parameters, e.g.

```html
<argdown-map :markdown="argument" :options="{views: {source: false}}" />
```

## Notes

I leaned heavily on [this useful tutorial](https://www.telerik.com/blogs/vuejs-how-to-build-your-first-package-publish-it-on-npm) though I had to pin the ``rollup-plugin-vue`` dependency to stick with vue 2.
