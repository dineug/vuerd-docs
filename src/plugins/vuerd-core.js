import Vue from "vue";
import VuerdCore from "vuerd-core";
import TuiEditor from "vuerd-plugin-tui.editor";
import ERD, { Vuerd } from "vuerd-plugin-erd";
import Summernote from "vuerd-plugin-summernote";
import Quill from "vuerd-plugin-quill";
import MediumEditor from "vuerd-plugin-medium-editor";
import "vuerd-core/dist/vuerd-core.css";
import "vuerd-plugin-tui.editor/dist/vuerd-plugin-tui.editor.css";
import "vuerd-plugin-erd/dist/vuerd-plugin-erd.css";
import "vuerd-plugin-summernote/dist/vuerd-plugin-summernote.css";
import "vuerd-plugin-quill/dist/vuerd-plugin-quill.css";
import "vuerd-plugin-medium-editor/dist/vuerd-plugin-medium-editor.css";

const dataList = [
  {
    path: "example/default textarea",
    value: "hello"
  },
  {
    path: "example/hello.md",
    value: "# hello [tui.editor](https://github.com/nhn/tui.editor)"
  },
  {
    path: "example/hello.vuerd",
    value:
      '{"canvas":{"width":2000,"height":2000,"scrollTop":0,"scrollLeft":1,"show":{"tableComment":true,"columnComment":true,"columnDataType":true,"columnDefault":true,"columnAutoIncrement":true,"columnPrimaryKey":true,"columnUnique":true,"columnNotNull":true,"relationship":true},"database":"MariaDB","databaseName":"vuerd","canvasType":"ERD"},"table":{"tables":[{"name":"USER","comment":"","columns":[{"name":"id","comment":"","dataType":"BIGINT","default":"","id":"cc3c5114-1800-4d27-8146-9809a82f2fc5","option":{"autoIncrement":true,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}},{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}],"id":"cefa514a-62df-4f7a-ac06-eff40bc8c411","ui":{"active":true,"top":120,"left":130,"widthName":60,"widthComment":60,"zIndex":24}}],"tableFocus":{"focusName":false,"focusComment":false,"focusColumns":[{"selected":false,"focusName":false,"focusDataType":false,"focusNotNull":false,"focusDefault":false,"focusComment":false,"column":{"name":"id","comment":"","dataType":"BIGINT","default":"","id":"cc3c5114-1800-4d27-8146-9809a82f2fc5","option":{"autoIncrement":true,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}},{"selected":true,"focusName":false,"focusDataType":true,"focusNotNull":false,"focusDefault":false,"focusComment":false,"column":{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}}],"currentFocusTable":false,"currentColumn":{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}},"table":{"name":"USER","comment":"","columns":[{"name":"id","comment":"","dataType":"BIGINT","default":"","id":"cc3c5114-1800-4d27-8146-9809a82f2fc5","option":{"autoIncrement":true,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}},{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}],"id":"cefa514a-62df-4f7a-ac06-eff40bc8c411","ui":{"active":true,"top":120,"left":130,"widthName":60,"widthComment":60,"zIndex":24}}},"edit":null,"copyColumns":[],"columnDraggable":null},"memo":{"memos":[]},"relationship":{"relationships":[],"draw":null}}'
  },
  {
    path: "example/hello.summernote.rich",
    value: `<h1>hello</h1><h2><a href="https://github.com/summernote/summernote">summernote</a></h2>`
  },
  {
    path: "example/hello.rich",
    value: `<h1>hello</h1><h2><a href="https://github.com/quill/quill">quill</a></h2>`
  },
  {
    path: "example/hello.medium-editor.rich",
    value: `<h1>hello</h1><h2><a href="https://github.com/yabwe/medium-editor">medium-editor</a></h2>`
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
        name: "default textarea"
      },
      {
        name: "hello.md"
      },
      {
        name: "hello.vuerd"
      },
      {
        name: "hello.rich"
      },
      {
        name: "hello.summernote.rich"
      },
      {
        name: "hello.medium-editor.rich"
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

VuerdCore.use(ERD);
VuerdCore.use(TuiEditor, {
  editorOption: {
    previewStyle: "vertical"
  }
});
VuerdCore.use(Quill);
VuerdCore.use(Summernote, {
  scope: ["summernote.rich"],
  editorOption: {
    toolbar: [
      ["style", ["style"]],
      ["font", ["bold", "underline", "clear"]],
      ["fontname", ["fontname"]],
      ["color", ["color"]],
      ["para", ["ul", "ol", "paragraph"]],
      ["table", ["table"]],
      ["insert", ["link", "picture", "video"]],
      ["view", ["codeview", "help"]]
    ]
  }
});
VuerdCore.use(MediumEditor, {
  scope: ["medium-editor.rich"],
  editorOption: {
    toolbar: {
      allowMultiParagraphSelection: true,
      buttons: [
        "bold",
        "italic",
        "underline",
        "anchor",
        "h2",
        "h3",
        "quote",
        "table"
      ],
      diffLeft: 0,
      diffTop: -10,
      firstButtonClass: "medium-editor-button-first",
      lastButtonClass: "medium-editor-button-last",
      align: "center"
    }
  }
});
Vue.use(VuerdCore);

Vue.component("Vuerd", Vuerd);
