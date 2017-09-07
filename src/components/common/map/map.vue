//map 组件
<template>
  <div>
    <div id="allmap"></div>
  </div>

</template>
<style>
  #allmap{
    width: 500px;height: 500px;margin:0;font-family:"微软雅黑";
  }
</style>
<script>
  import {MP} from '../../../utils/map'
  export default {
    mounted () {
      this.$nextTick(function () {
        MP("wLCeiRljevH7XQQGSDEbpUsgCTcK0x5H").then( BMap => {
          var map = new BMap.Map("allmap");            // 创建Map实例
          var point = new BMap.Point(116.404, 39.915); // 创建点坐标
          map.centerAndZoom(point,15);
          map.enableScrollWheelZoom();
        })
      })
    }
  }
</script>
