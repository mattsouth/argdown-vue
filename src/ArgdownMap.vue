<docs>
A wrapper for the argdown web component with two parameters:
* markdown - the markdown you wish to render - arguments need to be signalled with ```argdown
* options - webComponent options
</docs>

<template>
  <div v-html="argumentHtml"></div>
</template>

<script>
import marked from "marked";
import { addArgdownSupportToMarked } from "@argdown/marked-plugin";

const defaultOptions = {
  "webComponent": {
    "addWebComponentScript": false,
    "addGlobalStyles": false,
    "addWebComponentPolyfill": false
  }
};

export default {
  props: {
    'markdown': String,
    'options': Object
  },
  computed: {
    argumentHtml() {
      return this.markedWithArgdown(this.markdown);
    },
    markedWithArgdown() {
      return addArgdownSupportToMarked(
        marked,
        new marked.Renderer(),
        this.compositeOptions
      );
    },
    compositeOptions() {
      let result = defaultOptions;
      if (this.options) {
        // merge defaultOptions with this.options
        Object.keys(this.options).forEach((key) => {
          result.webComponent[key] = this.options[key];
        });
      }
      return result;
    }
  }
}
</script>
