<template lang="html">
  <div>
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
    <div class="guarantee-container">
          <div class="wrapper">
            <div class="position">
                  <i class="icon-position"></i>
                  <span>您选择的类目&nbsp;:</span>
                  <span>地下城与勇士</span>
                  <em>&gt;</em>
                  <span>游戏币</span>
                  <em>&gt;</em>
                  <span>担保交易</span>
                  <em>&gt;</em>
                  <span>广东区</span>
                  <em>&gt;</em>
                  <span>广东1区</span>
                  <em>&gt;</em>
                  <a href="#" class="back-select-btn">返回重选类目</a>
              </div>
              <div class="publish-main-box">
                  <div class="sell-style clearfix">
                      <div class="sell-style-title fl">出售方式</div>
                      <div class="sell-style-item fl" @click="isClick(1)" :class="{on:isActive == 1}">
                          <i class="sell-style-icon icon01"></i>
                          <span class="sell-style-name">
                              寄售交易
                          </span>
                      </div>
                      <!-- 选中添加on类名 -->
                      <div class="sell-style-item fl" @click="isClick(2)" :class="{on:isActive == 2}">
                          <i class="sell-style-icon icon02"></i>
                          <span class="sell-style-name">
                              担保交易
                          </span>
                      </div>
                      <div class="sell-style-item fl" @click="isClick(3)">
                          <i class="sell-style-icon icon03"></i>
                          <span class="sell-style-name">快速出货</span>
                      </div>
                  </div>
                  <router-view></router-view>

              </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      isActive:'1'

    }
  },
  methods:{
    isClick(index){
        if(index==1){
          this.isActive=1
          this.$router.push({
                                name:'Js'
                              })
        }else if(index==2){
          this.isActive=2
          this.$router.push({
                                name:'Db'
                              })
        }else if(index==3){
          this.$router.push({
                                name:'publishSuccess'
                              })
        }
    }
  }
}
</script>

<style src="@/assets/css/index.css" >

</style>
<style lang="css">






</style>
