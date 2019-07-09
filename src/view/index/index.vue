<!-- 商品详情 -->
<template>
  <div class="page goods-detail-page">
    <van-button square type="primary">{{$store.state.a}}</van-button>
  </div>
</template>

<script>
import { cs } from '@service'
export default {
  data () {
    return {
      aaa: {}
    };
  },
  created () {
    cs().then((res)=>{
      console.log(res)
    })
  },
  methods: {}
};
</script>
<style lang='less' scoped>
.goods-detail-page {
  width: 100%;
  .wflex(@d:column; @j:center; @a:center);
  .van-cell-group {
    width: 100%;
  }
}
</style>