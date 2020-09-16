<template>
  <a-drawer
    :zIndex='100'
    :visible='visible'
    width='90%'
  >
    <template v-slot:title>
      <div :style='{textAlign: "center"}'>
        <a-radio-group :value='tab' @change='actionTabToggle'>
          <a-radio-button value="pc">电脑端</a-radio-button>
          <a-radio-button value="wap" :disabled='false'>移动端</a-radio-button>
        </a-radio-group>
        <div :style="{textAlign:'center',fontSize:'12px',color:'#ccc'}">只是展示逻辑，至于如何渲染可以自己思考,包括表单验证等</div>
      </div>
    </template>
    <div v-if='tab === "pc"' class='lq-preview-cor'>
      <div class='render-widget-list'>
        <LqRenderWidget
          v-for="(v,i) of form"
          :key='i'
          :item='v'
        ></LqRenderWidget>
        <div class="render-form-submit">
          <a-button v-if='form.length' type='primary'>提交</a-button>
          <template v-else>请设置一个字段来展示预览</template>
        </div>
      </div>
    </div>
    <div v-else :style="{textAlign:'center'}">敬请期待</div>
  </a-drawer>
</template>
<script>
import LqRenderWidget from './RenderWidget/LqRenderWidget';
export default {
  components: {
    LqRenderWidget
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    form() {
      return this.$store.state.form.formList.map((v)=>{
        let d = JSON.parse(JSON.stringify(v));
        d.data.value = '';
        return d;
      })
    }
  },
  data() {
    return {
      tab: 'pc',
    }
  },
  methods: {
    actionTabToggle(e) {
      this.tab = e.target.value;
    }
  }
}
</script>