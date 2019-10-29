<template>
	<view>
		<view class="video">
			<view class="action back" @click="back">
				<text class="cuIcon-back"></text>
			</view>
			<view class="no_wifi">
				<p>你正在使用非WIFI网络</p>
				<button class="continue">继续播放</button>
			</view>

			<video 
			src="../../static/image/12.mp4" 
			:controls="showControls?true:false"
			show-center-play-btn = false
			></video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showControls: true
			}
		},
		methods: {

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
			transform: translate(-50%,-50%);
			-webkit-transform:translate(-50%, -50%);
			z-index: 30;
			margin: auto;
			p {
				font-size:30upx;
				font-family:SourceHanSansCN;
				font-weight:500;
				color:#fff;
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
</style>
