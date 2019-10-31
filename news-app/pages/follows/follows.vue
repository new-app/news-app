<template>
	<view>
		<view class="top">
			<view class="ctitle">
				<text class="cuIcon-back"></text>
				<view class="title">关注</view>
			</view>
			<scroll-view scroll-x class="nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub text-custom " :class="item.isActive?'active':''" v-for="(item,index) in flist" :key="index"
					 @tap="changenews(index)">
						{{item.title}}
						<view class="tabbar" v-show="item.isActive"></view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="recently">
			<view class="rec_top">
				<h3 class="re_title">最近阅读</h3>
				<text class="clearall">清除记录</text>
			</view>
			<view class="rec_list">
				<view class="rec_item" v-for="(item,index) in 3" :key="index">
					<image src="../../static/image/myac.png" class="usericon"></image>
					<text class="username">记者张祥林</text>
				</view>
			</view>
		</view>
		<view class="recently">
			<view class="rec_top">
				<h3 class="re_title">我的关注</h3>
			</view>
			<view class="rec_list">
				<view class="follow_item" v-for="(item,index) in 5" :key="index">
					<image src="../../static/logo.png" class="follow_img"></image>
					<h4 class="follow_title">#科技发展#</h4>
					<p class="update">今日更新</p>
				</view>
				<view class="add">
					<text class="plus">+</text>
					<p class="plus_txt">添加关注</p>
				</view>
			</view>
		</view>
		<view class="recently">
			<view class="rec_top">
				<h3 class="re_title">推荐关注</h3>
			</view>
			<Tuijian v-for="(item,i) in 6" :key="i"></Tuijian>
		</view>

	</view>
</template>

<script>
	import Tuijian from '../../components/Tuijian.vue'
	export default {
		data() {
			return {
				flist: [{
						title: "全部更新",
						isActive: true
					},
					{
						title: "媒体",
						isActive: false
					},
					{
						title: "关注的人",
						isActive: false
					},
				]
			}
		},
		methods: {
			changenews(index) {
				this.flist.forEach(item => {
					item.isActive = false
				})
				this.flist[index].isActive = true

			}
		},
		components: {
			Tuijian
		}
	}
</script>

<style lang="scss" scoped>
	.top {
		height: 226upx;
		padding: 76upx 30upx 20upx;
		background-color: #333;
		color: #fff;

		.ctitle {
			position: relative;

			.cuIcon-back {
				transform: scale(1.5);
				position: absolute;
				left: 0;
				top: 50%;
				margin-top: -13upx;
			}

			.title {
				font-size: 40upx;
				text-align: center;
				font-family: SourceHanSansCN;
				font-weight: 700;
			}
		}

		.nav {

			.text-custom {
				font-size: 30upx;
				font-family: SourceHanSansCN;
				font-weight: 300;
				position: relative;

				&.active {
					font-size: 40upx;
					font-weight: 700;
					color: rgba(0, 252, 255, 1);
					background: linear-gradient(-48deg, rgba(250, 244, 185, 1) 0.2685546875%, rgba(198, 147, 57, 1) 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				.tabbar {
					width: 50upx;
					height: 6upx;
					background: linear-gradient(0deg, rgba(250, 244, 185, 1), rgba(198, 147, 57, 1));
					border-radius: 3upx;
					position: absolute;
					bottom: 10upx;
					left: 50%;
					margin-left: -25upx;
				}
			}
		}
	}

	.recently {
		padding: 40upx 30upx 0;
		background-color: #fff;

		.rec_top {
			display: flex;
			justify-content: space-between;

			h3 {
				font-size: 30upx;
				font-family: SourceHanSansCN;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}

			.clearall {
				font-size: 24upx;
				font-family: SourceHanSansCN;
				font-weight: 300;
				color: rgba(130, 130, 130, 1);
			}
		}

		.rec_list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			padding-top: 30upx;

			.rec_item {
				width: 335upx;
				max-width: 335upx;
				height: 78upx;
				padding: 15upx 10upx;
				background: rgba(238, 238, 238, 1);
				border-radius: 10upx;
				margin-bottom: 20upx;

				.usericon {
					width: 48upx;
					height: 48upx;
					border-radius: 24upx;
					vertical-align: middle;
				}

				.username {
					display: inline-block;
					margin-left: 20upx;
					font-size: 26upx;
					font-family: SourceHanSansCN;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
				}
			}

			.follow_item {
				width: 216upx;
				height: 230upx;
				padding-bottom: 18upx;
				background: rgba(238, 238, 238, 1);
				border-radius: 10upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-bottom: 20upx;

				.follow_img {
					width: 216upx;
					height: 140upx;
				}

				.follow_title {
					text-align: center;
					font-size: 26upx;
					font-family: SourceHanSansCN;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}

				.update {
					font-size: 18upx;
					font-family: SourceHanSansCN;
					font-weight: 300;
					text-align: center;
					color: rgba(102, 102, 102, 1);
				}
			}

			.add {
				width: 216upx;
				height: 230upx;
				background: rgba(238, 238, 238, 1);
				border-radius: 10upx;
				display: flex;
				justify-content: center;
				flex-direction: column;
				text-align: center;
				color: #666;
				font-size: 30upx;

				.plus {
					transform: scale(1.4);
					margin-bottom: 10upx;
				}
			}
		}
	}
</style>
