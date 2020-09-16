<script>
export default {
  computed: {
    formList(){
      return this.$store.state.form.formList;
    },
    item() {
      const itemIndex = [...this.formList].findIndex(v=>v.select);
      if (itemIndex > -1) {
        return this.formList[itemIndex];
      }
      return null;
    }
  },
  methods: {
    updateData(key, value) {
      let a = [...this.formList];
      let updateItemIndex = a.findIndex(v => v.id === this.item.id);
      if (updateItemIndex>-1) {
        a[updateItemIndex].data[key] = value;
        this.$store.dispatch('form/setFormList', a);
      }
    }
  },
  render() {
    let item = this.item;
    const updateData = this.updateData;
    return (
      item?<div className='widget-setting'>
        <div className="box-item">
          <div className="item-title">标题</div>
          <div className="item-content">
            <a-input 
              value={item.data.label} 
              onInput={(e)=>{updateData('label',e.target.value)}}
            ></a-input>
          </div>
        </div>
        <div className="box-item">
          <div className="item-title">描述</div>
          <div className="item-content">
            <a-textarea 
              value={item.data.desc} 
              onInput={(e)=>{updateData('desc',e.target.value)}}
              autoSize={{minRows:2, maxRows: 2}}
            ></a-textarea>
          </div>
        </div>
        <div className="box-item">
          <div className="item-title">校验</div>
          <div className="item-content">
            <a-checkbox 
              checked={item.data.request} 
              onChange={(e)=>{updateData('request',e.target.checked)}}
            >必填</a-checkbox>
          </div>
        </div>
      </div>
      :<div style={{textAlign:'center',margin: '20px 0'}}>请选择一个字段来设置属性</div>
    )
  }
}
</script>