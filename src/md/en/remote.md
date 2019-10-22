# Remote Plugin Use

## Remote Interface
```typescript
export interface Remote {
  name: string;
  findTreeBy(): Promise<Tree>;
  findFileByPath(path: string): Promise<string>;
  save(treeSaves: TreeSave[]): Promise<void>;
  deleteByPaths(paths: string[]): Promise<void>;
  move(treeMove: TreeMove): Promise<void>;
}

export interface Tree {
  name: string;
  open?: boolean;
  children?: Tree[];
}

export interface TreeSave {
  oldPath: string | null;
  path: string;
  name: string;
  value?: string;
}

export interface TreeMove {
  fromPaths: string[];
  toPath: string;
}
```

## Remote
| Name | Type | Describe |
| --- | --- | --- |
| name | String | remote name |
| findTreeBy | Function | tree data |
| findFileByPath | Function | file data |
| save | Function | file save |
| deleteByPaths | Function | file delete |
| move | Function | file move |

## Tree
| Name | Type | Describe |
| --- | --- | --- |
| name | String | file or folder name |
| open | Boolean | folder open |
| children | [Tree] | folder children |

## TreeSave
| Name | Type | Describe |
| --- | --- | --- |
| oldPath | String or null | rename old path |
| path | String | After the change path |
| name | String | After the change name |
| value | String or undefined | file data |

## TreeMove
| Name | Type | Describe |
| --- | --- | --- |
| fromPaths | [String] | move from paths |
| toPath | String | move to path |


## Example - javascript
```javascript
// src/plugins/vuerd-core.js
import Vue from "vue";
import VuerdCore from "vuerd-core";

async function findFileByPath(path) {
  // path: "vuerd-core/public/static/logo.png"
  // file data
  return "";
}

async function findTreeBy() {
  // data tree Structure
  return {
    name: "vuerd-core",
    open: true,
    children: [
      {
        name: "public",
        open: true,
        children: [
          {
            name: "static",
            open: false,
            children: [
              {
                name: "logo.png"
              },
            ]
          },
          {
            name: "index.html"
          }
        ]
      },
      {
        name: "README.md"
      },
      {
        name: "package.json"
      },
      {
        name: "yarn.lock"
      }
    ]
  };
}

async function save(treeSaves) {
  // data save
}

async function deleteByPaths(paths) {
  // data delete
}

async function move(treeMove) {
  // data move
}

VuerdCore.use({
  install(command) {
    command.remoteAdd({
      name: "vuerd",
      findTreeBy,
      findFileByPath,
      save,
      deleteByPaths,
      move
    });
  }
});

Vue.use(VuerdCore);
```


## Example - typescript
```typescript
// src/plugins/vuerd-core.ts
import Vue from "vue";
import VuerdCore, { Command, Tree, TreeMove, TreeSave } from "vuerd-core";

async function findFileByPath(path: string): Promise<string> {
  // path: "vuerd-core/public/static/logo.png"
  // file data
  return "";
}

async function findTreeBy(): Promise<Tree> {
  return {
    name: "vuerd-core",
    open: true,
    children: [
      {
        name: "public",
        open: true,
        children: [
          {
            name: "static",
            open: false,
            children: [
              {
                name: "logo.png"
              },
            ]
          },
          {
            name: "index.html"
          }
        ]
      },
      {
        name: "README.md"
      },
      {
        name: "package.json"
      },
      {
        name: "yarn.lock"
      }
    ]
  } as Tree;
}

async function save(treeSaves: TreeSave[]): Promise<void> {
  // data save
}

async function deleteByPaths(paths: string[]): Promise<void> {
  // data delete
}

async function move(treeMove: TreeMove): Promise<void> {
  // data move
}

VuerdCore.use({
  install(command: Command): void {
    command.remoteAdd({
      name: "vuerd",
      findTreeBy,
      findFileByPath,
      save,
      deleteByPaths,
      move
    });
  }
});

Vue.use(VuerdCore);
```
