<script>
import LqSideLeft from './LqSideLeft.vue';
import LqSideCenter from './LqSideCenter.vue';
import LqSideRight from './LqSideRight.vue';
export default {
  render() {
    return (
      <div className='lq-design-ctx'>
        <LqSideLeft></LqSideLeft>
        <LqSideCenter></LqSideCenter>
        <LqSideRight></LqSideRight>
      </div>
    )
  }
}
</script>