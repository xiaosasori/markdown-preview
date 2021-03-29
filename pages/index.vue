<template>
  <div class="main">
    <div class="main-left">
      <textarea v-model="content" spellcheck="false" />
    </div>
    <div class="main-right">
      <!-- eslint-disable-next-line -->
      <div class="markdown-body" v-html="md" />
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
export default {
  data () {
    return {
      content: "# Markdown syntax guide \n\n## Headers\n\n# This is a Heading h1\n## This is a Heading h2 \n###### This is a Heading h6\n\n## Emphasis\n\n*This text will be italic*  \n_This will also be italic_\n\n**This text will be bold**  \n__This will also be bold__\n\n_You **can** combine them_\n\n## Lists\n\n### Unordered\n\n* Item 1\n* Item 2\n* Item 2a\n* Item 2b\n\n### Ordered\n\n1. Item 1\n1. Item 2\n1. Item 3\n  1. Item 3a\n  1. Item 3b\n\n## Images\n\n![This is a alt text.](/image/sample.png \"This is a sample image.\")\n\n## Links\n\nYou may be using [Markdown Live Preview](https://markdownlivepreview.com/).\n\n## Blockquotes\n\n> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.\n>\n>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\n\n## Tables\n\n| Left columns  | Right columns |\n| ------------- |:-------------:|\n| left foo      | right foo     |\n| left bar      | right bar     |\n| left baz      | right baz     |\n\n## Blocks of code\n\n```\nlet message = 'Hello world';\nalert(message);\n```\n\n## Inline code\n\nThis web site is using `markedjs/marked`.",
      md: null
    }
  },
  watch: {
    content: {
      handler: 'getMarkdown',
      immediate: true
    }
  },
  methods: {
    getMarkdown: debounce(function () {
      this.md = this.$md.render(this.content)
    }, 250)
  }
}
</script>

<style>
body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.main {
  height: 100vh;
  display: flex;
  background: rgba(229, 231, 235, 1);
}
.main-left,
.main-right {
  width: 50%;
  overflow: auto;
}
.main-left {
  margin-right: 2px;
}
.main-right {
  margin-left: 2px;
  background-color: white;
  padding: 10px;
}
textarea {
  display: block;
  width: 100%;
  height: 100%;
  padding: 10px;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
