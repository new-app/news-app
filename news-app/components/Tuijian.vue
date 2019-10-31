<template>
	<view class="tuijian">
		<view class="top">
			<view class="user">
				<image src="../static/image/guanzhu.png" class="usericon"></image>
				<text class="username">记者小林</text>
				</view>
			<button class="sub_btn">关注</button>
		</view>
		<view class="content">
			<p>这是一段来自未透露姓名的读者的来信</p>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.tuijian {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		margin-top: 20upx;
		.top {
			display: flex;
			justify-content: space-between;
			.user {
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
			.sub_btn {
				width:80upx;
				height:50upx;
				line-height: 50upx;
				text-align: center;
				background:linear-gradient(0deg,rgba(250,244,185,1),rgba(198,147,57,1));
				border-radius:10upx;
				font-size: 24upx;
				font-weight: 300;
				color: #fff;
			}
		}
		.content {
			margin-left: 70upx;
			min-height: 79upx;
			background-color: #fff;
			background:rgba(238,238,238,1);
			border-radius:10upx;
			padding: 30upx;
			margin-top: 15upx;
			margin-bottom: 30upx;
			p {
				font-size:26upx;
				font-family:SourceHanSansCN;
				font-weight:500;
				color:rgba(51,51,51,1);
				line-height:30upx;
			}
		}
	}
</style>
