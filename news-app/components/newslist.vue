<template>	 
		<view class="newslist">
			<view class="newslist-left">
				<view class="newslist-left1 fs-34">
					{{item.title}}
				</view>
				<view class="newslist-left2">
					<text class="fs-20 nl1-text">{{item.stitle}}</text>
					<text class="nl-text fs-20">{{item.righttile}}</text>
				</view>
			</view>
			<view class="newslist-right">
				<image :src="item.imgurl" mode=""></image>
			</view>
					
		</view>
</template>

<script>
	export default {
		data() {
			return {
  	
			};
		},
		props:["item"],
		onLoad() {
		}
		
	}
</script>

<style lang="scss" scoped>
.newslist{
	display: flex;
	padding: 0 30upx;
	height: 170upx;
	margin-bottom: 40upx;
	.newslist-left{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.newslist-left1{
			width: 504upx;
			margin-top: 20upx;
			color: #333333;
			font-weight: 600;
		}
		.newslist-left2{
			margin-bottom: 14upx;
			display: flex;
			justify-content: space-between;
			.nl1-text{
				color: #666;
			}
			.nl-text{
				margin-right: 21upx;
			}
		}
	}
	.newslist-right{
		width: 200upx;
		height: 170upx;
		border-radius: 10upx;
		image{
			width: 200upx;
			height: 170upx;
		}
	}
}
</style>
