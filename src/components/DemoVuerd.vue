<template>
  <div class="workspace-vuerd">
    <Vuerd
            :focus="true"
            :undo="undo"
            :redo="redo"
            :width="width"
            :height="height"
            :value="value"
            @input="onInput"
            @change="onChange"
            @undo="onUndo"
            @redo="onRedo"
    />
  </div>
</template>

<script>
  import UndoManager from 'undo-manager'

  export default {
    name: 'DemoVuerd',
    data: () => ({
      width: 2000,
      height: 2000,
      value: '',
      undo: false,
      redo: false,
      undoManager: null
    }),
    methods: {
      onResize() {
        this.width = window.innerWidth
        this.height = window.innerHeight
      },
      callback() {
        this.undo = this.undoManager.hasUndo();
        this.redo = this.undoManager.hasRedo();
      },
      onInput(value) {
        if (this.value !== value) {
          const oldValue = this.value
          this.undoManager.add({
            undo: () => {
              this.value = oldValue
            },
            redo: () => {
              this.value = value
            },
          })
        }
        this.value = value
      },
      onChange(value) {
        if (this.value !== value) {
          const oldValue = this.value
          this.undoManager.add({
            undo: () => {
              this.value = oldValue
            },
            redo: () => {
              this.value = value
            },
          })
        }
        this.value = value
      },
      onUndo() {
        this.undoManager.undo()
      },
      onRedo() {
        this.undoManager.redo()
      },
    },
    created() {
      this.undoManager = new UndoManager()
      this.undoManager.setCallback(this.callback)
    },
    mounted() {
      window.addEventListener('resize', this.onResize)
      window.dispatchEvent(new Event('resize'))
      this.value = '{"canvas":{"width":2000,"height":2000,"scrollTop":0,"scrollLeft":1,"show":{"tableComment":true,"columnComment":true,"columnDataType":true,"columnDefault":true,"columnAutoIncrement":true,"columnPrimaryKey":true,"columnUnique":true,"columnNotNull":true,"relationship":true},"database":"MariaDB","databaseName":"vuerd","canvasType":"ERD"},"table":{"tables":[{"name":"USER","comment":"","columns":[{"name":"id","comment":"","dataType":"BIGINT","default":"","id":"cc3c5114-1800-4d27-8146-9809a82f2fc5","option":{"autoIncrement":true,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}},{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}],"id":"cefa514a-62df-4f7a-ac06-eff40bc8c411","ui":{"active":true,"top":120,"left":130,"widthName":60,"widthComment":60,"zIndex":24}}],"tableFocus":{"focusName":false,"focusComment":false,"focusColumns":[{"selected":false,"focusName":false,"focusDataType":false,"focusNotNull":false,"focusDefault":false,"focusComment":false,"column":{"name":"id","comment":"","dataType":"BIGINT","default":"","id":"cc3c5114-1800-4d27-8146-9809a82f2fc5","option":{"autoIncrement":true,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}},{"selected":true,"focusName":false,"focusDataType":true,"focusNotNull":false,"focusDefault":false,"focusComment":false,"column":{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}}],"currentFocusTable":false,"currentColumn":{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}},"table":{"name":"USER","comment":"","columns":[{"name":"id","comment":"","dataType":"BIGINT","default":"","id":"cc3c5114-1800-4d27-8146-9809a82f2fc5","option":{"autoIncrement":true,"primaryKey":true,"unique":false,"notNull":true},"ui":{"active":false,"pk":true,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}},{"name":"email","comment":"","dataType":"VARCHAR","default":"","id":"615979a8-89e1-44ee-84d8-278af68cf54a","option":{"autoIncrement":false,"primaryKey":false,"unique":false,"notNull":false},"ui":{"active":false,"pk":false,"fk":false,"pfk":false,"widthName":60,"widthComment":60,"widthDataType":60,"widthDefault":60}}],"id":"cefa514a-62df-4f7a-ac06-eff40bc8c411","ui":{"active":true,"top":120,"left":130,"widthName":60,"widthComment":60,"zIndex":24}}},"edit":null,"copyColumns":[],"columnDraggable":null},"memo":{"memos":[]},"relationship":{"relationships":[],"draw":null}}'
    },
    destroyed() {
      window.removeEventListener('resize', this.onResize)
    }
  }
</script>

<style scoped>
  .workspace-vuerd {
    overflow: hidden;
    height: 100vh;
  }
</style>
