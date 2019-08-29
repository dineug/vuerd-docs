<template>
  <VuerdCore v-model="tree"/>
</template>

<script>
  import {read} from '../data/tree'

  export default {
    name: 'Pure',
    data: () => ({
      tree: {
        name: 'vuerd-core',
        open: true,
        children: [
          {
            name: '.git',
            open: false,
            children: [],
          },
          {
            name: 'node_modules',
            open: false,
            children: [],
          },
          {
            name: 'public',
            open: true,
            children: [
              {
                name: 'static',
                open: false,
                children: [
                  {
                    name: 'logo.png',
                    read,
                  },
                ],
              },
              {
                name: 'index.html',
                read,
              },
            ],
          },
          {
            name: '.gitignore',
            read,
          },
          {
            name: 'README.md',
            read,
          },
          {
            name: 'package.json',
            read,
          },
          {
            name: 'vue.config.js',
            read,
          },
          {
            name: 'yarn.lock',
            read,
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
