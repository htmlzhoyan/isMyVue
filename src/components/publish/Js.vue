<template lang="html">
  <div class="">
    <div class="sell-tip">
                  <div class="sell-tip-title">
                      <span class="sell-tip-title-left">5173温馨提示：</span>
                      <!-- 默认展开提示，关闭提示添加类名close -->
                    <div class="sell-tip-arrow-box"  :class="{close:isClose}">
                          <span class="arrow-word open-word" @click="isClose=true">收起</span>
                          <span class="arrow-word close-word" @click="isClose=false">展开</span>
                          <i class="icon-arrow"></i>
                      </div>
                      <div class="sell-tip-content">
                          <ul>
                              <li>1、游戏币交易超限会导致订单取消，请您注意<span class="special-color">【角色交易上限】</span>；</li>
                              <li>2、寄售交易有概率触发腾讯<span class="special-color"></span>安全模式，影响出货速度，可选择<span class="special-color">【担保交易】</span>，不受安全模式影响。</li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="sell-style clearfix">
                            <div class="sell-style-title fl">商品信息</div>
                            <p class="sell-style-title-tip fl"><em class="new-star">*</em>为了顺利通过审核，请正确填写以下信息。</p>
                        </div>
                        <form action="">
                              <div class="new-publish-form">
                                  <div class="fed_form">
                                      <ul>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">交易方式：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="radio" value="游戏内交易" class="fed_input" v-model="pickedTrade">
                                                          </label>
                                                          <span class="input-unit">游戏内交易</span>
                                                          <em class="icon-wen"></em>
                                                          <div class="wen-detail">
                                                              <i class="icon-arrow"></i>
                                                              <p>您只需提供有货源的交易账号，工作人员会全程替您完成在线交易。</p>
                                                          </div>
                                                      </div>
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="radio" value="卖家直充" class="fed_input" v-model="pickedTrade">
                                                          </label>
                                                          <span class="input-unit">卖家直充</span>
                                                          <em class="icon-wen"></em>
                                                      </div>
                                                      <div class="input-box">
                                                          <label for="">
                                                                  <input type="radio" value="带号寄售" class="fed_input" v-model="pickedTrade">
                                                              </label>
                                                          <span class="input-unit">带号寄售</span>
                                                          <em class="icon-wen"></em>
                                                      </div>
                                                      <div class="input-box">
                                                          <label for="">
                                                                  <input type="radio" value="在线交易" class="fed_input" v-model="pickedTrade">
                                                              </label>
                                                          <span class="input-unit">在线交易</span>
                                                          <em class="icon-wen"></em>
                                                      </div>
                                                      <span class="input-line-tip">什么是带号寄售？</span>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">元宝物品：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="radio" value="是" class="fed_input" v-model="pickedCoins">
                                                          </label>
                                                          <span class="input-unit">是</span>
                                                      </div>
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="radio" value="否" class="fed_input" v-model="pickedCoins">
                                                          </label>
                                                          <span class="input-unit">否</span>
                                                      </div>
                                                      <span class="input-line-tip">什么是元宝物品？</span>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">单件数量：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="number" value="" class="fed_input" maxlength="10">
                                                          </label>
                                                          <span class="input-unit">万金币</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">本区服参考价：</em></label>
                                                  <div class="right-input-box">
                                                      <span class="input-line-tip">1万金=0.0196元(1元=51.02万金)</span>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">单件售价：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="number" value="" class="fed_input" maxlength="10">
                                                          </label>
                                                          <span class="input-unit">元</span>
                                                      </div>
                                                      <div class="input-box">
                                                          <span class="service-charge">服务费<em class="money">2.00</em>元</span>
                                                          <span class="input-line-tip">了解更多</span>
                                                      </div>
                                                      <div class="input-under-line">
                                                          <div class="input-box">
                                                              <div class="checkbox-css fl">
                                                                  <input type="checkbox" checked="checked" value="">
                                                                  <i class="checkbox-model"></i>
                                                              </div>
                                                              <span class="input-unit">允许还价</span>
                                                              <em class="icon-wen"></em>
                                                          </div>
                                                          <div class="fed_input_box fl">
                                                              <label class="fed_formtit"><em class="new-form-title">最低价：</em><em class="new-star">*</em></label>
                                                              <div class="right-input-box">
                                                                  <div class="input-box">
                                                                      <label for="">
                                                                              <input type="number" value="" class="fed_input" maxlength="10">
                                                                          </label>
                                                                      <span class="input-unit">元</span>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">游戏币单价：</em></label>
                                                  <div class="right-input-box">
                                                      <span class="input-line-tip active">1万金=0.1元（1元=10万金）</span>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">商品标题：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box">
                                                          <div class="fl">
                                                              <label for="">
                                                                  <input class="input-suffix" type="text" value="10000万金=1000元" disabled="">
                                                              </label>
                                                          </div>
                                                          <!-- 模拟select标签 选择时model-select添加active类名-->
                                                          <div class="fl">
                                                              <span class="new-form-title fl">标题后缀：</span>
                                                              <div class="model-select fl">
                                                                  <label for="">
                                                                      <input type="text" class="select-result fed_input" value="请选择">
                                                                  </label>
                                                                  <ul class="model-select-box">
                                                                      <li>【绿色商品，安全迅速】</li>
                                                                      <li>【支付完成，立马发货】</li>
                                                                      <li>【安全可靠，即买即发】</li>
                                                                      <li>【闪电发货，全球最快】</li>
                                                                  </ul>
                                                                  <div class="model-select-arrow"></div>
                                                              </div>
                                                          </div>

                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">发布件数：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="count-box clearfix">
                                                          <!-- 点击变化效果加active -->
                                                          <em class="icon-reduce fl"></em>
                                                          <label for="">
                                                              <input class="count-input fl" type="number" value="1" maxlength="8">
                                                          </label>
                                                          <em class="icon-add active fl"></em>
                                                          <span class="input-unit fl">件</span>
                                                          <p class="count-tip tip fl">注：为确保成功出售，您当前最大发布件数为<span class="tip-color">1</span>件。</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="sell-style clearfix">
                                  <div class="sell-style-title fl">帐号信息</div>
                                  <p class="sell-style-title-tip fl"><span class="tip-color">5173承诺：您提交的帐号资料经过系统加密，绝不外泄，请放心填写！</span></p>
                              </div>
                              <div class="new-publish-form account-info">
                                  <div class="fed_form">
                                      <ul>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">游戏帐号：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box input-info">
                                                          <label for="">
                                                              <input type="text" value="4414585858" class="fed_input">
                                                          </label>
                                                      </div>
                                                      <div class="new-fed-tip fl">
                                                          <!-- 成功的类名是icon-fed-suc(无文字) -->
                                                          <i class="icon icon-fed-fail"></i>
                                                          <span class="new-fed-tip-word">请填写游戏帐号</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">游戏密码：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box input-info">
                                                          <label for="">
                                                              <input type="password" value="123456" class="fed_input">
                                                          </label>
                                                          <!-- 开眼加active -->
                                                          <i class="icon icon-eye active"></i>
                                                      </div>
                                                      <div class="new-fed-tip fl">
                                                          <!-- 成功的类名是icon-fed-suc (无文字)-->
                                                          <i class="icon icon-fed-fail"></i>
                                                          <span class="new-fed-tip-word">密码由6-16个字符组成，区分大小写</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">游戏角色名：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box input-info">
                                                          <label for="">
                                                              <input type="text" value="曹天笑" class="fed_input" maxlength="">
                                                          </label>
                                                      </div>
                                                      <div class="new-fed-tip fl">
                                                          <!-- 成功的类名是icon-fed-suc(无文字) -->
                                                          <i class="icon icon-fed-fail"></i>
                                                          <span class="new-fed-tip-word">首尾不能包含空格，请重新填写</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">发货方式：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="right-input-box">
                                                          <!-- 模拟select标签 选择时model-select添加active类名-->
                                                          <div class="model-select fl">
                                                              <input type="text" class="select-result fed_input" value="请选择" disabled="">
                                                              <ul class="model-select-box">
                                                                  <li>邮寄交易</li>
                                                                  <li>邮寄交易</li>
                                                                  <li>邮寄交易</li>
                                                              </ul>
                                                              <div class="model-select-arrow"></div>
                                                          </div>
                                                          <div class="new-fed-tip fl">
                                                              <!-- 成功的类名是icon-fed-suc (无文字)-->
                                                              <i class="icon icon-fed-suc"></i>
                                                              <span class="new-fed-tip-word">选择邮寄交易邮寄手续费由买家承担</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">二级密码：</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box input-info">
                                                          <label for="">
                                                              <input type="text" value="" class="fed_input" maxlength="">
                                                           </label>
                                                      </div>
                                                      <div class="new-fed-tip fl">
                                                          <!-- 成功的类名是icon-fed-suc -->
                                                          <i class="icon icon-fed-fail"></i>
                                                          <span class="new-fed-tip-word">首尾不能包含空格，请重新填写</span>
                                                          <!-- 正确时的文字 -->
                                                          <span class="new-fed-tip-word">填写您游戏中设置的二级密码</span>
                                                      </div>
                                                  </div>

                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">仓库密码：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box input-info">
                                                          <label for="">
                                                              <input type="text" value="" class="fed_input" maxlength="">
                                                          </label>
                                                      </div>
                                                      <div class="new-fed-tip fl">
                                                          <!-- 成功的类名是icon-fed-suc -->
                                                          <i class="icon icon-fed-fail"></i>
                                                          <span class="new-fed-tip-word">首尾不能包含空格，请重新填写</span>
                                                          <!-- 正确时的文字 -->
                                                          <span class="new-fed-tip-word">填写您游戏中设置的仓库密码，如未设置请填写0000</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">密保信息：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="right-input-box">
                                                          <!-- 模拟select标签 选择时model-select添加active类名-->
                                                          <div class="model-select fl">
                                                              <input type="text" class="select-result fed_input" value="请选择" disabled="">
                                                              <ul class="model-select-box">
                                                                  <li>密保手机</li>
                                                                  <li>密保手机</li>
                                                                  <li>密保手机</li>
                                                              </ul>
                                                              <div class="model-select-arrow"></div>
                                                          </div>
                                                          <div class="new-fed-tip fl">
                                                              <!-- 错误的类名是icon-fed-fail -->
                                                              <i class="icon icon-fed-suc"></i>
                                                              <span class="new-fed-tip-word">订单交易时工作人员会联系您，请您提供管家锁的六位数字</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">帐号类型：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box">
                                                          <label for="">
                                                                  <input type="radio" value="" checked="" class="fed_input">
                                                              </label>
                                                          <span class="input-unit">网易帐号</span>
                                                      </div>
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="radio" value="" class="fed_input">
                                                          </label>
                                                          <span class="input-unit">飞火帐号</span>
                                                      </div>
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="radio" value="" class="fed_input">
                                                          </label>
                                                          <span class="input-unit">盛天帐号</span>
                                                      </div>
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="radio" value="" class="fed_input">
                                                          </label>
                                                          <span class="input-unit">顺网帐号</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">交易暗号：</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box input-info">
                                                          <label for="">
                                                              <input type="text" value="123456" class="fed_input" maxlength="">
                                                          </label>
                                                      </div>
                                                      <div class="new-fed-tip fl">
                                                          <!-- 成功的类名是icon-fed-suc -->
                                                          <i class="icon icon-fed-suc"></i>
                                                          <span class="new-fed-tip-word">注：为确保成功出售，您当前最大发布件数为</span>
                                                          <!-- 错误的文字 -->
                                                          <span class="new-fed-tip-word">首尾不能包含空格，请重新填写</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">游戏密保卡：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="radio" value="" checked="" class="fed_input">
                                                          </label>
                                                          <span class="input-unit">已绑定</span>
                                                      </div>
                                                      <div class="input-box">
                                                          <label for="">
                                                              <input type="radio" value="" class="fed_input">
                                                          </label>
                                                          <span class="input-unit">未绑定</span>
                                                      </div>
                                                      <span class="input-line-tip">为什么要上传密保卡？</span>
                                                      <div class="input-under-line">
                                                          <div class="upload-box">
                                                              <div class="tip"><i class="icon-tip"></i>请确保上传的密保卡图片清晰完整，图片大小需小于1M。图片支持jpg、gif、bmp、png格式</div>
                                                              <div class="upload-line clearfix">
                                                                  <span class="left-title fl">请填写密保卡序列号：</span>
                                                                  <div class="right-input fl">
                                                                      <input type="number" value="" placeholder="">
                                                                  </div>
                                                              </div>
                                                              <div class="upload-line clearfix">
                                                                  <span class="left-title fl">上传图片密保卡：</span>
                                                                  <div class="upload-img fl">
                                                                      <div class="img-box">
                                                                          <span class="span-img">
                                                                              <img src="http://images001.5173cdn.com/images/wj/v1/1m/mb_game_logo07.png" alt="">
                                                                          </span>

                                                                          <!-- <span class="no-img">暂无图片</span> -->
                                                                      </div>
                                                                      <div class="upload-btn">上传图片</div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>

                                      </ul>
                                  </div>
                              </div>
                              <div class="sell-style clearfix">
                                  <div class="sell-style-title fl">服务选项</div>
                              </div>
                              <div class="new-publish-form add-service">
                                  <div class="fed_form">
                                      <ul>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">方便交易时间：</em><em class="new-star">*</em></label>
                                                  <div class="right-input-box">
                                                      <!-- 模拟select标签 选择时model-select添加active类名-->
                                                      <div class="model-select select-time fl">
                                                          <input type="text" class="select-result fed_input" value="30天" disabled="">
                                                          <ul class="model-select-box">
                                                              <li>1天</li>
                                                              <li>2天</li>
                                                              <li>3天</li>
                                                              <li>4天</li>
                                                              <li>5天</li>
                                                              <li>6天</li>
                                                              <li>7天</li>
                                                              <li>8天</li>
                                                              <li>9天</li>
                                                              <li>10天</li>
                                                              <li>11天</li>
                                                              <li>12天</li>
                                                              <li>13天</li>
                                                              <li>14天</li>
                                                              <li>15天</li>
                                                              <li>16天</li>
                                                              <li>17天</li>
                                                          </ul>
                                                          <div class="model-select-arrow"></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">与买家有过联系：</em></label>
                                                  <div class="right-input-box">
                                                      <div class="input-box">
                                                          <label for="">
                                                                  <input type="radio" value="" class="fed_input">
                                                              </label>
                                                          <span class="input-unit">是</span>
                                                      </div>
                                                      <div class="input-box">
                                                          <label for="">
                                                                  <input type="radio" checked="checked" value="" class="fed_input">
                                                              </label>
                                                          <span class="input-unit">否</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                          <li class="clearfix">
                                              <div class="fed_input_box">
                                                  <label class="fed_formtit"><em class="new-form-title">增值服务：</em></label>
                                                  <div class="right-input-box clearfix">
                                                      <div class="add-service-item fl">
                                                          <div class="add-service-item-title">
                                                              <div class="checkbox-css fl">
                                                                  <input type="checkbox" checked="" value="">
                                                                  <i class="checkbox-model"></i>
                                                              </div>
                                                              <span class="title-name ">安心买服务<em>(推荐)</em></span>
                                                              <em class="icon-wen fr"></em>
                                                              <div class="add-service-detail">
                                                                  <i class="icon-arrow"></i>
                                                                  <div class="title">
                                                                      <span>在出售列表中会显示高亮图标</span>
                                                                      <i class="icon icon-ax"></i>
                                                                  </div>
                                                                  <p class="content">安心买服务：买家购买该商品出现被卖家找回、被运营商收回、封号等情况，5173会先给于买家全额退款；并且本网站将根据该用户违规的情节和程度，对违规用户直接作出删除商品信息，限制交易权限甚至冻结用户帐号的处罚。</p>
                                                              </div>
                                                          </div>
                                                          <div class="add-service-item-detail">
                                                              <span>选择该项服务，您的发布单优先展示，出售率可提高100%；买家购买更放心！</span>
                                                          </div>
                                                      </div>
                                                      <div class="add-service-item fl">
                                                          <div class="add-service-item-title">
                                                              <div class="checkbox-css fl">
                                                                  <input type="checkbox" value="">
                                                                  <i class="checkbox-model"></i>
                                                              </div>
                                                              <span class="title-name ">卖家保险</span>
                                                              <em class="icon-wen fr"></em>
                                                          </div>
                                                          <div class="add-service-item-detail">
                                                              <span>选择该项服务并支付保费，你的发布单优先展示。保险后安全商品更利于出售，买家购买更放心。</span>
                                                          </div>
                                                      </div>
                                                      <div class="add-service-item fl">
                                                          <div class="add-service-item-title">
                                                              <div class="checkbox-css fl">
                                                                  <input type="checkbox" value="">
                                                                  <i class="checkbox-model"></i>
                                                              </div>
                                                              <span class="title-name ">1元推广</span>
                                                              <em class="icon-wen fr"></em>
                                                          </div>
                                                          <div class="add-service-item-detail">
                                                              <span>只要1元钱即可享受商品推广服务，买家还能获得免单抽奖机会，商品更好卖！</span>
                                                          </div>
                                                      </div>
                                                      <div class="add-service-item fl">
                                                          <div class="add-service-item-title">
                                                              <div class="checkbox-css fl">
                                                                  <input type="checkbox" value="">
                                                                  <i class="checkbox-model"></i>
                                                              </div>
                                                              <span class="title-name ">无货赔付押金</span>
                                                              <em class="icon-wen fr"></em>
                                                          </div>
                                                          <div class="add-service-item-detail">
                                                              <span>需预交押金，10元/单，您将获得 “无货赔付”标签，提高商品关注度！</span>
                                                          </div>
                                                      </div>
                                                      <div class="add-service-item fl">
                                                          <div class="add-service-item-title">
                                                              <div class="checkbox-css fl">
                                                                  <input type="checkbox" value="">
                                                                  <i class="checkbox-model"></i>
                                                              </div>
                                                              <span class="title-name ">取消包赔</span>
                                                              <em class="icon-wen fr"></em>
                                                          </div>
                                                          <div class="add-service-item-detail">
                                                              <span>优先推荐取消包赔的商品，提高关注度。若交易正常进行，押金将会退还回您的5173账户。</span>
                                                          </div>
                                                          <!-- 取消包赔提示 -->
                                                          <div class="baopei-box">
                                                              <i class="icon-arrow"></i>
                                                              <div class="baopei-tip">
                                                                  <i class="icon-tip"></i>
                                                                  <span>友情提示：为保障您的账户资金安全，请先进行安全验证。</span>
                                                              </div>
                                                              <div class="input-tel clearfix">
                                                                  <div class="input-box">
                                                                      <div class="icon-tel"></div>
                                                                      <input type="tel" value="152****5102" placeholder="请输入电话号码" maxlength="11">
                                                                  </div>
                                                                  <!-- 变背景色加active -->
                                                                  <div class="input-btn active">获取验证码</div>
                                                              </div>
                                                              <div class="code-tip">
                                                                  <i class="icon-tip"></i>
                                                                  <span>短信验证码已发送，有效期15分钟</span>
                                                              </div>
                                                              <div class="input-code clearfix">
                                                                  <div class="input-box">
                                                                      <div class="icon-code"></div>
                                                                      <input type="tel" value="" maxlength="6" placeholder="请输入验证码">
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="next-step-box">
                                  <div class="agreement">
                                      <input type="checkbox" value="">
                                      <span>我同意 <a class="" href="#">《中国网络游戏服务网担保交易协议》</a></span>
                                  </div>
                                  <div class="next-step-btn">
                                      <a href="#">确认无误，立即发布</a>
                                  </div>
                              </div>
                          </form>
  </div>

</template>

<script>
export default {
  data(){
    return{
      isClose:false,
      pickedTrade:'',
      pickedCoins:'',
    }
  },
}
</script>

<style lang="css">
</style>
