<template>
  <div class="markdown-body" v-html="md"></div>
</template>

<script>
  import marked from 'marked'

  export default {
    name: 'MarkDown',
    props: {
      value: {
        type: String,
        default: '',
      }
    },
    computed: {
      md() {
        return marked(this.value)
      }
    },
  }
</script>

<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }

  .markdown-body pre {
    padding: 14px 16px;
    color: white;
    background-color: #23241F;
  }
</style>
