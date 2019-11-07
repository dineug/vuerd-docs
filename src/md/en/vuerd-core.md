# Component vuerd-core

## Prop
| Name | Type | Describe |
| --- | --- | --- |
| themeName | String | theme name |

## Emit
| Event | Type | Describe |
| --- | --- | --- |
| changeTheme | String | theme name |

## Example - javascript
```html
<template>
  <vuerd-core
    :themeName="themeName"
    @changeTheme="onChangeTheme"
  />
</template>
<script>
  export default {
    data: () => ({
      themeName: "VSCode",
    }),
    methods: {
      onChangeTheme(value) {
        this.themeName = value
      }
    },
  }
</script>
```

## Example - typescript
```html
<template>
  <vuerd-core
    :themeName="themeName"
    @changeTheme="onChangeTheme"
  />
</template>
<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  private themeName: string = "VSCode";
  private onChangeTheme(value: string) {
    this.themeName = value;
  }
}
</script>
```

## vuerd-core plugin use interface
```typescript
export interface Plugin<T> {
  install(command: Command, option?: T): void;
}
```

## use
| Name | Type | Describe |
| --- | --- | --- |
| command | Command | [editor](http://localhost:8000/?path=/story/plugin-command--editor), [theme](https://vuerd.github.io/vuerd-docs/?path=/story/plugin-command--theme), [remote](http://localhost:8000/?path=/story/plugin-command--remote) |
| option | T | plugin option |
