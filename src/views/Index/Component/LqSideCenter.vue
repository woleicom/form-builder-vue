<template>
  <div class="lq-side-center">
    <div class='widget-content-cor'>
      <VueSortable
        class='widget-list'
        v-model='formList'
        animation="150"
        ghostClass="widget-view-ghost"
        :group="{name: 'sortable-group', pull: 'clone', put: true}"
        @add='setNewWidgetIndex'
      >
        <LqWidget 
          v-for="v of formList"
          :key='v.id'
          :item='v'
          @action-select-widget='actionSelectWidget'
          @action-copy-widget='actionCopyWidget'
          @action-delete-widget='actionDeleteWidget'
        ></LqWidget>
      </VueSortable>
    </div>
  </div>
</template>
<script>
import {VueDraggableNext} from "vue-draggable-next";
import LqWidget from './Widget/LqWidget'
export default {
  components: {
    VueSortable: VueDraggableNext,
    LqWidget
  },
  data() {
    return {
      newWidgetIndex: -1,
    }
  },
  mounted() {
    this.newWidgetIndex = this.formList.findIndex(v=>v.select);
  },
  computed: {
    formList: {
      get() {
        return this.$store.state.form.formList;
      },
      set(a) {
        if (this.newWidgetIndex> -1) {
          a.forEach(v=>v.select = false);
          a[this.newWidgetIndex] = JSON.parse(JSON.stringify(a[this.newWidgetIndex]));
          a[this.newWidgetIndex].id = new Date().getTime();
          a[this.newWidgetIndex].select = true;
          this.newWidgetIndex = -1;
        } 
        this.$store.dispatch('form/setFormList', a);
      }
    }
  },
  methods: {
    setNewWidgetIndex(evt) {
      this.newWidgetIndex = evt.newIndex;
    },
    actionSelectWidget(item) {
      let a = [...this.formList];
      let selectItemIndex = a.findIndex(v => v.id === item.id);
      if (selectItemIndex>-1) {
        a.forEach(v=>v.select = false);
        a[selectItemIndex].select = true;
        this.$store.dispatch('form/setFormList', a);
      }
    },
    actionCopyWidget(item) {
      let a = [...this.formList];
      let copyItemIndex = a.findIndex(v => v.id === item.id);
      if (copyItemIndex>-1) {
        a.forEach(v=>v.select = false);
        let newItem = JSON.parse(JSON.stringify(a[copyItemIndex]));
        newItem.id = new Date().getTime();
        newItem.select = true;
        a.splice(copyItemIndex + 1, 0, newItem);
        this.$store.dispatch('form/setFormList', a);
      }
    },
    actionDeleteWidget(item) {
      let a = [...this.formList];
      let delItemIndex = a.findIndex(v => v.id === item.id);
      if (delItemIndex>-1) {
        a.forEach(v=>v.select = false);
        a.splice(delItemIndex, 1);
        let selItemIndex = (delItemIndex - 1) < 0 ? 0 : (delItemIndex - 1);
        if (a.length > 0) {
          a[selItemIndex].select = true;
        }
        this.$store.dispatch('form/setFormList', a);
      }
    }
  }
}
</script>