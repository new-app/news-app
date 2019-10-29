<template>
	<view class="swp-box">
		<swiper @change="bannerFn" :indicator-dots='false' :autoplay="true" :interval="3000" :duration="1000" >
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/image/banner.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/image/banner.png" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/image/banner.png" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="swpboder1">
			<view :class="idx==0?'swpactive':''"></view>
			<view :class="idx==1?'swpactive':''"></view>
			<view :class="idx==2?'swpactive':''"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			idx: 0,	
			};
		},
		methods: {
			bannerFn(ev) {
				this.idx = ev.detail.current
			}
		},
	}
</script>

<style lang="scss" scoped>
	.swp-box {
		position: relative;
		margin-top: 20upx;
		swiper {
			width: 690upx;
			height: 300upx;
			margin: 0 auto;
			boeder-radus: 10upx;
	
			swiper-item {
				width: 100%;
				height: 100%;
	
				.swiper-item {
					width: 100%;
					height: 100%;
				}
	
			}
	
	
		}
	
		.swpboder1 {
	
			width: 100%;
			position: absolute;
			bottom: -60upx;
			display: flex;
			justify-content: center;
	
			.swpactive {
				background: linear-gradient(-48deg, rgba(250, 244, 185, 1), rgba(198, 147, 57, 1));
			}
	
			view {
				width: 28upx;
				height: 28upx;
				transform: rotateZ(45deg);
				background: rgba(202, 202, 202, 1);
	
				&:nth-of-type(2) {
					margin: 0 30upx;
				}
			}
		}
	}
</style>
