# Editor Plugin Development

## Component Wrapping Structure
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
| value | String | editor data |
| scope | String | extension or filename |
| width | Number | width |
| height | Number | height |
| color | Object | theme color |

## Emit
| event | Type | Describe |
| --- | --- | --- |
| change | String | editor data |
| input | String | editor data |


## Example - javascript
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

## Example - typescript
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

## EditorOption interface
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
| component | vue component | vue component |
| scope | [String \| RegExp] | file designation(string extension) |
| exclude | [String \| RegExp] | exception file designation(string extension) |
