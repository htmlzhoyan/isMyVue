<template lang="html">
  <div class="Db">
    <div class="sell-tip">
                    <div class="sell-tip-title">
                        <span class="sell-tip-title-left">5173温馨提示：</span>
                        <!-- 默认展开提示，关闭提示添加类名close -->
                        <div class="sell-tip-arrow-box" :class="{close:isClose}" @click="isClose()">
                            <span class="arrow-word open-word">收起</span>
                            <span class="arrow-word close-word">展开</span>
                            <i class="icon-arrow"></i>
                        </div>
                        <div class="sell-tip-content">
                            <ul>
                                <li>1、有客服联系您交易时，请先检查客服是否发送过您的<span class="special-color">完整5173用户名</span>给您核对，没发送完整5173用户名给您核对的，必为假客服。</li>
                                <li>2、近期发现多笔<span class="special-color">卖家交易错人（交易给了相似角色）</span>的案例，请您在交易时看清楚交易角色名及等级，有问题及时联系接手客服。</li>
                                <li>3、游戏币拍卖交易，游戏运营商<span class="special-color">默认收取5%（游戏内有拍卖行优惠券的运营商收取3%，需买家同意）如买家不同意（5%手续费由卖家承担），因拍卖手续费问题导致取消（责任卖家承担）</span>。</li>
                                <li>4、如有买家下单，您接到5173短信或客服电话通知后，请主动加订单接手客服QQ进行交易，感谢您的配合。</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="sell-style clearfix">
                              <div class="sell-style-title fl">商品信息</div>
                              <p class="sell-style-title-tip fl"><em class="new-star">*</em>为了顺利通过审核，请正确填写以下信息。</p>
                          </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isClose:false
    }
  },
  method:{
    isClose(){
      this.isClose = !this.isClose
    }
  }
}
</script>

<style lang="css">
</style>
