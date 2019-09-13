# Editor Plugin 개발하기

## Component Wrapping 구조
```javascript
export default {
  data: () => ({
    // Injection value
    value: '',
    scope: '',
    width: 0,
    height: 0,
    color: {
      drop: '',
      sash: '',
      active: '',
      editor: '',
      titleBar: '',
      activity: '',
      statusbar: '',
      font: '',
      fontActive: '',
      contextmenu: '',
      contextmenuActive: '',
      sidebar: '',
      sidebarActive: '',
      tabBar: '',
      tab: '',
      tabActive: '',
    },
  }),
  methods: {
    onChange() {
      this.$emit('change', '')
    },
    onInput() {
      this.$emit('input', '')
    }
  },
}
```

## Data
| Name | Type | Describe |
| --- | --- | --- |
| value | String | editor 데이터 |
| scope | String | 확장자 or 파일이름 |
| width | Number | 너비 |
| height | Number | 높이 |
| color | Object | theme color |

## Emit
| event | Type | Describe |
| --- | --- | --- |
| change | String | editor 데이터 |
| input | String | editor 데이터 |


## 예제 - javascript
### TextEditor.vue
```html
<template>
  <textarea
    class="text-editor"
    :style="`color: ${color.font}; background-color: ${color.editor};`"
    :value="value"
    @change="onChange"
    @input="onInput"
  />
</template>

<script>
  export default {
    name: 'TextEditor',
    data: () => ({
      value: '',
      color: {},
    }),
    methods: {
      onChange(event) {
        this.$emit('change', event.target.value)
      },
      onInput(event) {
        this.$emit('input', event.target.value)
      }
    },
  }
</script>

<style scoped>
  .text-editor {
    width: 100%;
    height: 100%;

    padding: 0;
    border: none;
    resize: none;
    outline: none;
  }
</style>
```
### index.js
```javascript
import TextEditor from './TextEditor'

export default {
  install(command) {
    command.editorAdd({
      component: TextEditor,
      scope: [
        'txt',
      ],
    })
  },
}
```

## 예제 - typescript
### TextEditor.vue
```html
<template>
  <textarea
    class="text-editor"
    :style="`color: ${color.font}; background-color: ${color.editor};`"
    :value="value"
    @change="onChange"
    @input="onInput"
  />
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {Color} from 'vuerd-core';

  @Component
  export default class TextEditor extends Vue {
    private value: string = '';
    private color: Color | any = {};

    private onChange(event: Event) {
      const textarea = event.target as HTMLTextAreaElement;
      this.$emit('change', textarea.value);
    }

    private onInput(event: Event) {
      const textarea = event.target as HTMLTextAreaElement;
      this.$emit('input', textarea.value);
    }

  }
</script>

<style scoped>
  .text-editor {
    width: 100%;
    height: 100%;

    padding: 0;
    border: none;
    resize: none;
    outline: none;
  }
</style>
```

### index.ts
```typescript
import TextEditor from './TextEditor.vue';
import {Command} from 'vuerd-core';

export default {
  install(command: Command) {
    command.editorAdd({
      component: TextEditor,
      scope: [
        'txt',
      ],
    });
  },
};
```

## EditorOption Interface
```typescript
import {Component} from 'vue';
export interface EditorOption {
  component: Component;
  scope: Array<string | RegExp>;
  exclude?: Array<string | RegExp>;
}
```

## EditorOption
| Name | Type | Describe |
| --- | --- | --- |
| component | vue component | vue 컴포넌트 |
| scope | [String \| RegExp] | 파일지정(string 확장자) |
| exclude | [String \| RegExp] | 예외 파일지정(string 확장자) |
