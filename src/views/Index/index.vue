<style lang="less">
@import url(./index.less);
</style>
<script>
import LqHeader from './Component/LqHeader';
import LqDesignCtx from './Component/LqDesignCtx';
export default {
  components: {
    LqHeader,
    LqDesignCtx
  },
  render() {
    return (
      <div className='form-design'>
        <LqHeader></LqHeader>
        <LqDesignCtx></LqDesignCtx>
      </div>
    )
  }
}
</script> 