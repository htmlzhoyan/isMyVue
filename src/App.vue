<template>
  <!-- 顶部登陆条+快捷菜单条 -->
  <div class="header">
    <div id="J_GlobalTop" data-class="header-wp1180"></div>
    <!--网站Logo+四级联动搜索条-->
    <div class="header_box clearfix header-wp1200">
            <h1 class="logo"><a href="http://www.5173.com" title="中国网络游戏服务网">5173</a></h1>
            <p class="slogan">商品发布</p>
            <!-- 四级联动游戏选择 -->

            <!-- 组件_商品发布进度条 开始 -->
            <div class="wares-box clearfix">
                <ul class="clearfix">
                    <li class="on">
                        <i class="auction-img ico-1"></i>
                        <span class="txt">选择发布商品分类</span>
                        <s class="auction-img"></s>
                    </li>
                    <li class="off">
                        <i class="auction-img ico-2"></i>
                        <span class="txt">填写商品发布信息</span>
                        <s class="auction-img"></s>
                    </li>
                    <li class="off">
                        <i class="auction-img ico-3"></i>
                        <span class="txt">发布成功等待买家购买</span>
                    </li>
                </ul>
            </div>
            <!-- 组件_商品发布进度条 结束 -->
        </div>
    <div id="app">
      <router-view/>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
