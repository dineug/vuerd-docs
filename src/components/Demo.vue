<template>
  <VuerdCore v-model="tree"/>
</template>

<script>
  export default {
    name: 'Demo',
    data: () => ({
      tree: {
        name: 'example',
        open: true,
        children: [
          {
            name: 'default image.png',
            read: async (path, id) => {
              return 'https://camo.githubusercontent.com/5e5ea0e4e9840bff621382c9db2ed891cb393d31/68747470733a2f2f76756572642e6769746875622e696f2f76756572642d66726f6e742f766572642e706e67';
            },
          },
          {
            name: 'default video.mp4',
            read: async (path, id) => {
              return 'https://www.w3schools.com/html/mov_bbb.mp4';
            },
          },
          {
            name: 'default textarea',
            read: async (path, id) => {
              return 'hellow'
            },
          },
          {
            name: 'tui editor.md',
            read: async (path, id) => {
              return '# hellow [tui.editor](https://github.com/nhn/tui.editor)'
            },
          },
        ],
      },
    }),
    watch: {
      tree(value) {
        console.log(value)
      },
    },
  }
</script>

<style scoped>

</style>
