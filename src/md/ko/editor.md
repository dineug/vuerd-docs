# Editor Plugin 개발하기

## Component Wrapping 구조
```javascript
export default {
  props: {
    // Injection prop
    value: {
      type: String,
      default: '',
    },
    scope: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    color: {
      type: Object,
      default: () => ({}),
    },
    // Option
    undo: {
      type: Boolean,
      default: false,
    },
    redo: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange() {
      this.$emit('change', '')
    },
    onInput() {
      this.$emit('input', '')
    },
    // Option
    onUndo() {
      this.$emit('undo');
    },
    onRedo() {
      this.$emit('redo');
    },
  },
}
```

## Prop
| Name | Type | Describe |
| --- | --- | --- |
| value | String | editor 데이터 |
| scope | String | 확장자 or 파일이름 |
| width | Number | 너비 |
| height | Number | 높이 |
| focus | Boolean | 현재 focus |
| color | Object | [theme color](https://vuerd.github.io/vuerd-docs/?path=/story/plugin-command--theme) |
| undo | Boolean | undo 상태 |
| redo | Boolean | redo 상태 |

## Emit
| Event | Type | Describe |
| --- | --- | --- |
| change | String | editor 데이터 |
| input | String | editor 데이터 |
| undo |  | undo 실행 |
| redo |  | redo 실행 |


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
    props: {
      value: {
        type: String,
        default: '',
      },
      focus: {
        type: Boolean,
        default: false,
      },
      color: {
        type: Object,
        default: () => ({}),
      },
    },
    watch: {
      focus(value) {
        if (value) {
          this.$el.focus()
        } else {
          this.$el.blur()
        }
      }
    },
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
      name: "TextEditor",
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
  import {Component, Prop, Watch, Vue} from 'vue-property-decorator';
  import {Color} from 'vuerd-core';

  @Component
  export default class TextEditor extends Vue {
    @Prop({type: String, default: ''})
    private value!: string;
    @Prop({type: Object, default: () => ({})})
    private color!: Color;
    @Prop({type: Boolean, default: false})
    private focus!: boolean;

    @Watch('focus')
    private watchFocus(focus: boolean) {
      const textarea = this.$el as HTMLTextAreaElement;
      if (focus) {
        textarea.focus();
      } else {
        textarea.blur();
      }
    }

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
      name: "TextEditor",
      component: TextEditor,
      scope: [
        'txt',
      ],
    });
  },
};
```

## Editor Interface
```typescript
import {Component} from 'vue';
export interface Editor {
  name: string;
  component: Component;
  scope: Array<string | RegExp>;
  exclude?: Array<string | RegExp>;
}
export interface EditorOption {
  undoManager?: boolean;
  readme?: EditorReadme;
}
export interface EditorReadme {
  owner: string;
  repo: string;
}
```

## Editor
| Name | Type | Describe |
| --- | --- | --- |
| name | String | editor 이름 |
| component | vue component | vue 컴포넌트 |
| scope | [String \| RegExp] | 파일지정(string 확장자) |
| exclude | [String \| RegExp] | 예외 파일지정(string 확장자) |
| option | Object | 옵션 |

## Option
| Name | Type | Describe |
| --- | --- | --- |
| undoManager | Boolean | Undo Manager 사용여부 |
| readme | EditorReadme | GitHub Repository README |
