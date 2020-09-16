<template>
  <div class='lq-side-right'>
    <a-tabs class='lq-side-right-antd-tabs' defaultActiveKey="widgetSetting" :tabBarGutter='0' size='small'>
      <a-tab-pane key="widgetSetting" >
        <template v-slot:tab>
          <div :style="{textAlign:'center'}">字段属性</div>
        </template>
        <LqWidgetSetting></LqWidgetSetting>
      </a-tab-pane>
      <a-tab-pane key="formSetting" >
        <template v-slot:tab>
          <div :style="{textAlign:'center'}">表单属性</div>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<style lang="less">
.lq-side-right-antd-tabs .ant-tabs-nav {
  width: 100%;
  .ant-tabs-tab {
    width: 50%;
  }
}
</style>
<script>
import LqWidgetSetting from './Plane/LqWidgetSetting';
export default {
  components: {
    LqWidgetSetting
  }
}
</script>