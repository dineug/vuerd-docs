import Vue from 'vue'
import VuerdCore from 'vuerd-core'
import TuiEditor from 'vuerd-plugin-tui.editor'
import ERD, {Vuerd} from 'vuerd-plugin-erd'
import Summernote from 'vuerd-plugin-summernote'
import 'vuerd-core/dist/vuerd-core.css'
import 'vuerd-plugin-tui.editor/dist/vuerd-plugin-tui.editor.css'
import 'vuerd-plugin-erd/dist/vuerd-plugin-erd.css'
import 'vuerd-plugin-summernote/dist/vuerd-plugin-summernote.css'

const dataList = [
  {
    path: "example/default image.png",
    value:
      "https://camo.githubusercontent.com/5e5ea0e4e9840bff621382c9db2ed891cb393d31/68747470733a2f2f76756572642e6769746875622e696f2f76756572642d66726f6e742f766572642e706e67"
  },
  {
    path: "example/default video.mp4",
    value: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    path: "example/default textarea",
    value: "hellow"
  },
  {
    path: "example/tui editor.md",
    value: "# hellow [tui.editor](https://github.com/nhn/tui.editor)"
  },
  {
    path: "example/ERD.vuerd",
    value: '{"canvas":{"width":2000,"height":2000,"scrollTop":0,"scrollLeft":1,"show":{"tableComment":true,"columnComment":true,"columnDataType":true,"columnDefault":true,"columnAutoIncrement":true,"columnPrimaryKey":true,"columnUnique":true,"columnNotNull":true,"relationship":true},"database":"MariaDB","databaseName":"vuerd","canvasType":"ERD"},"table":{"tables":[{"name":"USER","comment":"","columns":[{"name":"id","comment":"","dataType":"BIGINT","default":"","id":"cc3c5114-1800-4d27-8146-9809a82f2fc5","option":{"autoIncrement":true,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}},{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}],"id":"cefa514a-62df-4f7a-ac06-eff40bc8c411","ui":{"active":true,"top":120,"left":130,"widthName":60,"widthComment":60,"zIndex":24}}],"tableFocus":{"focusName":false,"focusComment":false,"focusColumns":[{"selected":false,"focusName":false,"focusDataType":false,"focusNotNull":false,"focusDefault":false,"focusComment":false,"column":{"name":"id","comment":"","dataType":"BIGINT","default":"","id":"cc3c5114-1800-4d27-8146-9809a82f2fc5","option":{"autoIncrement":true,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}},{"selected":true,"focusName":false,"focusDataType":true,"focusNotNull":false,"focusDefault":false,"focusComment":false,"column":{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}}],"currentFocusTable":false,"currentColumn":{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}},"table":{"name":"USER","comment":"","columns":[{"name":"id","comment":"","dataType":"BIGINT","default":"","id":"cc3c5114-1800-4d27-8146-9809a82f2fc5","option":{"autoIncrement":true,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}},{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}],"id":"cefa514a-62df-4f7a-ac06-eff40bc8c411","ui":{"active":true,"top":120,"left":130,"widthName":60,"widthComment":60,"zIndex":24}}},"edit":null,"copyColumns":[],"columnDraggable":null},"memo":{"memos":[]},"relationship":{"relationships":[],"draw":null}}'
  },
  {
    path: "example/summernote.rich",
    value: `
      <h1>hellow</h1>
      <p><a href="https://github.com/summernote/summernote">summernote</a></p>
    `
  }
];

async function findFileByPath(path) {
  let value = "";
  for (const data of dataList) {
    if (data.path === path) {
      value = data.value;
      break;
    }
  }
  return value;
}

async function findTreeBy() {
  return {
    name: "example",
    open: true,
    children: [
      {
        name: "default image.png",
      },
      {
        name: "default video.mp4"
      },
      {
        name: "default textarea"
      },
      {
        name: "tui editor.md"
      },
      {
        name: "ERD.vuerd"
      },
      {
        name: "summernote.rich"
      }
    ]
  };
}

async function save(treeSaves) {}
async function deleteByPaths(paths) {}
async function move(treeMove) {}

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

VuerdCore.use(TuiEditor)
VuerdCore.use(ERD)
VuerdCore.use(Summernote)
Vue.use(VuerdCore)

Vue.component('Vuerd', Vuerd)
