# Theme Plugin Add

## Theme Data Structure
```javascript
{
  drop: '#9da5b4',
  sash: '#80808059',
  active: '#00B3FF',
  editor: '#f3f3f3',
  titleBar: '#f3f3f3',
  activityBar: '#f3f3f3',
  statusbar: '#fafafa',
  font: '#616161',
  fontActive: 'black',
  contextmenu: '#fafafa',
  contextmenuActive: '#f3f3f3',
  sidebar: '#fafafa',
  sidebarActive: '#f3f3f3',
  tabBar: '#fafafa',
  tab: '#fafafa',
  tabActive: '#f3f3f3',
}
```

## titleBar
![titleBar](https://vuerd.github.io/vuerd-docs/images/titleBar.png)
## activityBar
![activityBar](https://vuerd.github.io/vuerd-docs/images/activityBar.png)
## sidebar
![sidebar](https://vuerd.github.io/vuerd-docs/images/sidebar.png)
## contextmenu
![contextmenu](https://vuerd.github.io/vuerd-docs/images/contextmenu.png)
## editor
![editor](https://vuerd.github.io/vuerd-docs/images/editor.png)
## tabBar
![tabBar](https://vuerd.github.io/vuerd-docs/images/tabBar.png)
## tab
![tab](https://vuerd.github.io/vuerd-docs/images/tab.png)
## statusbar
![statusbar](https://vuerd.github.io/vuerd-docs/images/statusbar.png)

## Example - javascript
### index.js
```javascript
export default {
  install(command) {
    command.themeAdd({
      name: 'AtomOneLight',
      color: {
        drop: '#9da5b4',
        sash: '#80808059',
        active: '#00B3FF',
        editor: '#f3f3f3',
        titleBar: '#f3f3f3',
        activityBar: '#f3f3f3',
        statusbar: '#fafafa',
        font: '#616161',
        fontActive: 'black',
        contextmenu: '#fafafa',
        contextmenuActive: '#f3f3f3',
        sidebar: '#fafafa',
        sidebarActive: '#f3f3f3',
        tabBar: '#fafafa',
        tab: '#fafafa',
        tabActive: '#f3f3f3',
      },
    })
  },
}
```

## Example - typescript
### index.ts
```typescript
import {Command} from 'vuerd-core';

export default {
  install(command: Command) {
    command.themeAdd({
      name: 'AtomOneDark',
      color: {
        drop: '#9da5b4',
        sash: '#80808059',
        active: '#0081C3',
        editor: '#282c34',
        titleBar: '#282c34',
        activityBar: '#282c34',
        statusbar: '#21252b',
        font: '#cccccc',
        fontActive: 'white',
        contextmenu: '#21252b',
        contextmenuActive: '#282c34',
        sidebar: '#21252b',
        sidebarActive: '#282c34',
        tabBar: '#21252b',
        tab: '#21252b',
        tabActive: '#282c34',
      },
    });
  },
};
```
