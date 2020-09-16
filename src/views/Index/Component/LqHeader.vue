<script>
import LqPreview from './LqPreview';
export default {
  components: {
    LqPreview
  },
  data() {
    return {
      previewVisible: false,
    }
  },
  render() {
    const actionOpenPreview = () => {
      this.previewVisible = true;
    }
    const actionClosePreview = () => {
      this.previewVisible = false;
    }
    return (
      <div className='lq-header'>
        <p>
          交互仿写“简道云”，开源只提供思路，请勿用到生产环境 <span>碰到好的工作产品会仿写提供简单思路，如果喜欢欢迎star</span>
          <a-button onClick={actionOpenPreview} style={{float: 'right',marginTop:'10px'}}>预览</a-button>
        </p>
        <LqPreview visible={this.previewVisible} onClose={actionClosePreview}></LqPreview>
      </div>
    )
  }
}
</script>