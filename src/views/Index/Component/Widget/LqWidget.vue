<script>
import LqInput from './LqInput.vue'
import LqTextarea from './LqTextarea.vue'
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons-vue';
export default {
  name: 'LqWidget',
  components: {
    LqInput,
    LqTextarea,
    CopyOutlined,
    DeleteOutlined
  },
  props: {
    item: {
      type: Object,
      required: true
    },
  },
  methods: {
    actionSelectWidget(e) {
      this.$emit("action-select-widget", e);
    },
    actionDeleteWidget(e) {
      this.$emit("action-delete-widget", e);
    },
    actionCopyWidget(e) {
      this.$emit("action-copy-widget", e);
    },
  },
  render(h) {
    let item = this.item;
    let config = item.config;
    let data = item.data;
    let chooseWidget = () => {
      switch (config.tag) {
        case 'inputText': return <LqInput></LqInput>;
        case 'inputTextarea': return <LqTextarea></LqTextarea>;
        default : return '';
      }
    }
    return (
      <div
        className={`widget-view ${item.select ? 'widget-select':''}`}
      >
        <div className="lq-label">
          <span className='label-title'>{data.label}</span>
          {data.request?<span className='label-request'></span>:''}
        </div>
        <div className="lq-desc">{data.desc}</div>
        <div className="lq-widget">
          {chooseWidget()}
        </div>
        <div className="lq-widget-cover" 
          onClick={()=>{this.actionSelectWidget(item)}}
        >
          <i className='btn-delete'><DeleteOutlined  onClick={(event)=>{
            event.stopPropagation();
            this.actionDeleteWidget(item);
          }}/></i>
          <i className='btn-copy'><CopyOutlined  onClick={(event)=>{
            event.stopPropagation();
            this.actionCopyWidget(item);
          }}/></i>
        </div>
      </div>
    )
  }
};
</script>