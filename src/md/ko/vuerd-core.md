# Component vuerd-core
![vuerd-core](https://vuerd.github.io/vuerd-docs/images/vuerd-core.gif)

## Prop
| Name | Type | Describe |
| --- | --- | --- |
| themeName | String | 테마 이름 |

## Emit
| Event | Type | Describe |
| --- | --- | --- |
| changeTheme | String | 테마 이름 |

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
| option | T | 플러그인 옵션 |
