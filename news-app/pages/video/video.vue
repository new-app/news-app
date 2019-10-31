<template>
	<view>
		<view class="video">
			<view class="action back" @click="backlast">
				<text class="cuIcon-back"></text>
			</view>
			<view class="no_wifi" v-if="nowifi">
				<p>你正在使用非WIFI网络</p>
				<button class="continue">继续播放</button>
			</view>

			<video 
			src="../../static/image/birds.mp4" 
			:controls="showControls?true:false" 
			show-center-play-btn=" false"
			 show-fullscreen-btn="false"></video>
		</view>

		<view class="text">
			<h3 class="title">这是视频的title</h3>
			<p class="intro">这是视频的简介，稍微可以多一点，再多一点，再多一点，根据实际要求修改</p>
			<view class="author">
				<view class="user">
					<image src="../../static/logo.png" class="usericon"></image>
					<text class="username">天蓬元帅</text>
				</view>
				<view class="sub">
					<text class="cuIcon-appreciate"></text>
					<text class="subcount">666</text>
				</view>
			</view>
		</view>
		<view class="rec">
			<h4>推荐</h4>
			<view class="rec_list">
				<view class="rec_item" v-for="(item,i) in 3" :key="i">
					
				</view>
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
	let idx = null;
	import Comment from '../../components/Comment.vue'
	export default {
		onLoad: (options) => {
			idx = options.index
		},
		data() {
			return {

				listitem: {},
				nowifi:false,
				showControls:true,
				// idx:idx
				
			}
		},
		
		methods: {
			back() {
				uni.navigateBack()
			}
		},
		mounted() {

			uni.request({
				url: "http://rap2api.taobao.org/app/mock/234537/get/subnews",
				success: (res) => {
					// console.log(idx)
					
					this.listitem = res.data.subnews[1]
				}
			})
		},
		methods: {
			backlast(){
				uni.navigateBack()
			}

		},
		components: {
			Comment
		}
	}
</script>

<style lang="scss" scoped>
	.video {
		position: relative;

		.back {
			position: absolute;
			z-index: 20;
			color: #fff;
			left: 30upx;
			top: 81upx;
			font-size: 40upx !important;

		}

		.no_wifi {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			-webkit-transform: translate(-50%, -50%);
			z-index: 30;
			margin: auto;

			p {
				font-size: 30upx;
				font-family: SourceHanSansCN;
				font-weight: 500;
				color: #fff;
			}

			.continue {
				width: 200upx;
				height: 64upx;
				border-radius: 32upx;
				color: #fff;
				font-size: 24upx;
				text-align: center;
				line-height: 64upx;
				background: transparent;
				border: 1px solid #fff;
				margin: 44upx auto;
			}
		}

		video {
			width: 100%;
			height: 463upx;
		}
	}

	.text {
		padding: 30upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title {
			font-size:30upx;
			font-family:SourceHanSansCN;
			color:rgba(51,51,51,1);
		}
		.intro {
			font-size:24upx;
			font-family:SourceHanSansCN;
			font-weight:300;
			color:rgba(51,51,51,1);
			line-height:48upx;
			margin: 15upx 0;
		}
		.author {
			display: flex;
			justify-content: space-between;
			.user {
				display: flex;
				justify-content: space-between;
				.usericon {
					width:48upx;
					height:48upx;
					background:rgba(23,161,255,1);
					border-radius:24upx;
				}
				.username {
					font-size:26upx;
					margin-left: 30upx;
					font-family:SourceHanSansCN;
					font-weight:400;
					color:rgba(51,51,51,1);
				}
			}
			.sub {
				.subcount {
					font-size:28upx;
					font-family:SourceHanSansCN;
					font-weight:400;
					margin-left: 10upx;
					color:rgba(51,51,51,1);
				}
			}
		}
	}
	.rec {
		padding: 30upx;
		h4 {
			font-size:30upx;
			font-family:SourceHanSansCN;
			font-weight:bold;
			color:rgba(51,51,51,1);
		}
		.rec_list {
			display: flex;
			justify-content: space-between;
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
