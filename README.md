# argdown-vue

[Argdown](https://argdown.org) with [Vue.js](https://vuejs.org/).

## Demo

<iframe src="https://codesandbox.io/embed/dry-water-q96ig?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dry-water-q96ig"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

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
