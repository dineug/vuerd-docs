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
  option?: RemoteOption;
}

export interface RemoteOption {
  explorerContextmenu?: ExplorerContextmenu[];
}

export interface ExplorerContextmenu {
  name: string;
  children?: ExplorerContextmenu[];
  execute?(selectPaths: string[]): void;
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
| findTreeBy | Function | 파일 트리 데이터 |
| findFileByPath | Function | 파일 데이터 |
| save | Function | 파일 저장 |
| deleteByPaths | Function | 파일 삭제 |
| move | Function | 파일 이동 |

## RemoteOption
| Name | Type | Describe |
| --- | --- | --- |
| explorerContextmenu | [ExplorerContextmenu] | 탐색기 Contextmenu |

## Tree
| Name | Type | Describe |
| --- | --- | --- |
| name | String | 파일 or 폴더 이름 |
| open | Boolean | 폴더 open 여부 |
| children | [Tree] | 폴더 하위 트리 |

## TreeSave
| Name | Type | Describe |
| --- | --- | --- |
| oldPath | String or null | 이름 변경전 path |
| path | String | 변경후 path |
| name | String | 변경후 이름 |
| value | String or undefined | 파일 데이터 |

## TreeMove
| Name | Type | Describe |
| --- | --- | --- |
| fromPaths | [String] | 이동할 paths |
| toPath | String | 이동 위치 path |


## Example - javascript
```javascript
// src/plugins/vuerd-core.js
import Vue from "vue";
import VuerdCore from "vuerd-core";
import "vuerd-core/dist/vuerd-core.css";

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
import "vuerd-core/dist/vuerd-core.css";

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
