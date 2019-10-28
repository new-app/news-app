<template>
	<view>
		<view class="cu-bar backbar">
			<view class="action">
				<text class="cuIcon-back" @tap="back"></text>
			</view>
			<view class="content text-bold">
				<image src="../../static/image/myac.png" mode="" class="touxiang"></image>
				<text class="author">{{listitem.name}}</text>
			</view>
			<button class="sub">订阅</button>
		</view>
		<view class="article">
			<view class="title">{{listitem.title}}{{idx}}</view>
			<p class="newser">
				<text>{{listitem.name}}</text>
				<text>{{listitem.date}}</text>
			</p>
			<view class="text">
				{{listitem.content}}
			</view>
			<view class="like">
				<button class="btn">喜欢</button>
				<button class="btn">不喜欢</button>
			</view>
		</view>
		<view class="comments">
			<view class="comements_title">
				<view class="line"></view>
				<text>新评论</text>
				<view class="line"></view>
			</view>
			<Comment v-for="(item,index) in listitem.comments" :key="index" :item="item"></Comment>
		</view>
	</view>
</template>

<script>
	import Comment from '../../components/Comment.vue'
	export default {
		data() {
			return {

				listitem: {},
				idx:''
			}
		},
		onLoad: (options) => {
			this.idx = options.index
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
			}
		},
		mounted() {

			uni.request({
				url: "http://rap2api.taobao.org/app/mock/234537/get/subnews",
				success: (res) => {
					// console.log(res.data.subnews)
					this.listitem = res.data.subnews[1]
				}
			})
		},
		methods: {

		},
		components: {
			Comment
		}
	}
</script>

<style lang="scss" scoped>
	p {
		font-size: 40px;
	}

	.backbar {
		background-color: #333;
		position: fixed;
		top: 0;
		left: 0;
		height: 146upx;
		width: 100%;
		color: #fff;
		padding-top: 50upx;
		z-index: 20;

		.content {
			line-height: 60upx;
			display: flex;
			margin-top: 64upx;
			justify-content: center;

			.touxiang {

				width: 48upx;
				height: 48upx;
				border-radius: 50%;
				margin-right: 20upx;

			}

		}

		.sub {
			width: 80upx;
			height: 50upx;
			margin-right: 30upx;
			font-size: 24upx;
			line-height: 50upx;
			text-align: center;
			color: #fff;
			background: linear-gradient(0deg, rgba(250, 244, 185, 1), rgba(198, 147, 57, 1));
			border-radius: 10upx;
		}
	}

	.article {
		background-color: #fff;
		margin-top: 146upx;
		padding: 30upx;

		.title {

			font-size: 36upx;
			font-family: SourceHanSansCN;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			line-height: 48upx;
		}

		.newser {
			padding: 30upx;
			padding-left: 0;
			font-size: 24upx;
			font-family: SourceHanSansCN;
			font-weight: 300;
			color: rgba(51, 51, 51, 1);

			text {
				margin-right: 20upx;
			}
		}

		.text {
			font-size: 28upx;
			font-family: SourceHanSansCN;
			font-weight: 400;
			text-indent: 2em;
			color: rgba(51, 51, 51, 1);
			line-height: 70upx;
		}

		.like {
			padding: 40upx 170upx;
			display: flex;
			justify-content: space-between;

			.btn {
				width: 150upx;
				height: 60upx;
				font-size: 28upx;
				line-height: 60upx;
				background: rgba(255, 255, 255, 1);
				border: 1px solid rgba(201, 201, 201, 1);
				border-radius: 30upx;
			}
		}
	}

	.comments {
		margin-top: 20upx;
		padding-top: 20upx;
		background-color: #fff;

		.comements_title {
			display: flex;
			justify-content: center;
			font-size: 28upx;

			.line {
				width: 50upx;
				margin-top: 18upx;
				border-top: 3upx solid #999;
			}

			text {
				padding: 0 10upx;
			}
		}
	}
</style>
