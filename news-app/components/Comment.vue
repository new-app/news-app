<template>
	<view class="comment">
	<view class="top">
		<view class="top_left">
			<image :src="item.usericon" class="user_icon"></image>
			<view class="user">
				<p class="user_name">{{item.username}}</p>
				<p class="time">8分钟前</p>
			</view>
		</view>
		<view class="top_right">回复</view>
	</view>
	<p class="bottom">{{item.content}}</p>
	</view>
</template>

<script>
	export default {
	props:['item']
		
	}
</script>

<style scoped lang="scss">
	
	.comment {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 30upx;
		.top {
			height: 50upx;
			display: flex;
			justify-content: space-between;
			.top_left {
				display: flex;
				justify-content: space-between;
				.user_icon {
					width: 48upx;
					height: 48upx;
					margin-right: 20upx;
					border-radius: 50%;
				}
				.user {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.user_name {
						font-size:26upx;
						font-family:SourceHanSansCN;
						font-weight:400;
						color:rgba(51,51,51,1);
					}
					.time {
						font-size:18upx;
						transform: scale;
						font-family:SourceHanSansCN;
						font-weight:300;
						color:rgba(51,51,51,1);
					}
				}
			}
			.top_right {
				font-size:24upx;
				font-family:SourceHanSansCN;
				font-weight:300;
				color:rgba(102,102,102,1);
			}
		}
		.bottom {
			line-height: 50upx;
			margin-left: 68upx;
			font-size:28upx;
			font-family:SourceHanSansCN;
			font-weight:700;
			border-bottom: 1px solid #eee;
			color:rgba(51,51,51,1);
		}
	}
</style>