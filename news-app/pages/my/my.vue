<template>
	<view class="my">
		<view class="top">
			<view class="left">
				<h4>孙悟空</h4>
				<p class="intro">填写个人简介，让更多人了解你</p>
				<view class="left_bottom">
					<view class="left_item">
						<view class="subNum">6</view>
						<text class="sub">赞</text>
					</view>
					<view class="line"></view>
					<view class="left_item">
						<view class="subNum">66</view>
						<text class="sub">关注</text>
					</view>
					<view class="line"></view>
					<view class="left_item">
						<view class="subNum">666</view>
						<text class="sub">粉丝</text>
					</view>
				</view>
			</view>
			<view class="right">
				<view class="user_icon">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<button class="userinfo">个人资料</button>
			</view>
		</view>
		<view class="center">
			<view class="center_item">
				<image src="../../static/image/xiaoxi.png" mode=""></image>
				<text>消息</text>
			</view>
			<view class="center_item">
				<image src="../../static/image/guanzhu.png" mode=""></image>
				<text>收藏</text>
			</view>
			<view class="center_item">
				<image src="../../static/image/lishi.png" mode=""></image>
				<text>历史</text>
			</view>
			<view class="center_item">
				<image src="../../static/image/pingjia.png" mode=""></image>
				<text>评论</text>
			</view>
		</view>
		<view class="cu-list menu sm-border card-menu margin-top">
			<view class="cu-item arrow" v-for="(item,index) in tablist" :key="index">
				<view class="content">
					<text class="left_i">{{item.title}}</text>
				</view>
				<view class="action">
					<text class="right_i">{{item.more}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tablist:[
					{
						title:"我的话题",
						more:"NEW"
					},
					{
						title:"订阅报刊/杂志",
						more:"点击添加订阅"
					},
					{
						title:"阅读模式",
						more:"常规阅读"
					},
					{
						title:"用户反馈",
						more:""
					},
					{
						title:"帮助与客服",
						more:""
					},
					{
						title:"关于",
						more:"检查更新"
					}
				]
			};
		},
		components: {

		}
	}
</script>

<style lang="scss" scoped>
	.my {
		background-color: #fff;

		.top {
			height: 421upx;
			width: 100%;
			color: #fff;
			padding: 148upx 36upx 63upx;
			background-color: #333;
			display: flex;
			background: url(../../static/image/my_bg.png) no-repeat;
			background-size: 100% 100%;
			justify-content: space-between;

			.left {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				h4 {
					font-size: 36upx;
				}
				.intro {
					font-size: 24upx;
				}
				.left_bottom {
					display: flex;
					justify-content: space-between;
					text-align: center;
					.left_item {
						display: flex;
						justify-content: space-between;
						flex-direction: column;
						height: 80upx;
						.subNum {
							font-size: 30upx;
						}
						.sub {
							font-size: 20upx;
						}
						
					}
					.line {
						height: 100%;
						border-left: 1px solid #fff;
					}
				}
			}
			.right {
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				.user_icon {
					width: 120upx;
					height: 120upx;
					overflow: hidden;
					border-radius: 50%;
					image {
						width: 100%;
						height:100%;
					}
				}
				.userinfo {
					width: 129upx;
					background: transparent;
					font-size: 24upx;
					border:1px solid rgba(255,255,255,1);
					border-radius:10upx;
					text-align: center;
					color: #fff;
					line-height: 50upx;
				}
			}
		}
		.center {
			width:690upx;
			margin: 30upx auto;
			padding: 28upx 50upx;
			height:170upx;
			background:rgba(255,255,255,1);
			box-shadow:0px 0px 10upx 0px rgba(51,51,51,0.22);
			border-radius:10upx;
			display: flex;
			justify-content: space-between;
			.center_item {
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				font-size: 28upx;
				image {
					width: 54upx;
					height: 54upx;
				}
			}
		}
		.left_i {
			color: #333;
			font-size: 30upx;
		}

		.right_i {
			color: #999;
			font-size: 24upx;
		}
	}
</style>
