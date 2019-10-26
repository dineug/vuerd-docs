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
