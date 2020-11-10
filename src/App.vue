<template>
  <div id="nav">
    <router-view></router-view>
    <van-tabbar route class="nav">
        <van-tabbar-item to='/' icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to='/mine' icon="orders-o">资料</van-tabbar-item>
        <van-tabbar-item to='/profile' icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
    export default {
        data() {
            return {
            active: 0,
            };
        },
    };
</script>
<style lang="scss">
// .nav {
//     position: absolute;
//     bottom: 0;
// }
</style>
