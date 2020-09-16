<template>
  <div class="lq-side-left">
    <div class="cpt-group">
      <p class="group-title">字段</p>
      <ul class='cpt-list'>
        <VueSortable 
          :list='widgetList'
          :sort='false'
          :group="{name: 'sortable-group', pull: 'clone', put: false}"
          draggable='.widget-label'
        >
          <li v-for="(v,i) of widgetList" 
            class='widget-label' 
            :key='i'
          >
            <a><span>{{v.data.label}}</span></a>
          </li>
        </VueSortable>
      </ul>
    </div>
  </div>
</template>
<script>
import {VueDraggableNext} from "vue-draggable-next";
import {widgets} from '../config.js'
export default {
  components: {
    VueSortable: VueDraggableNext,
  },
  data () {
    return {
      widgetList: [...widgets]
    }
  }
}
</script>