<template>
	<view class="news_item">
		<view class="left">
			<h3><text>{{news.classify}}</text>丨{{news.title}}</h3>
			<view class="left_bottom">
				<text class="news_name">{{news.name}}</text>
				<text><text>5</text>分钟前</text>
				<text class="fr" v-if="!news.pushtop"><text>{{news.fav}}</text>人收藏</text>
				<button class="push_top fr" v-else>置顶</button>
			</view>
		</view>
		<view class="right">
			<image :src="news.imgUrl"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			news:Object
		}

	}
</script>

<style scoped lang="scss">
	.news_item {
		display: flex;
		height: 170upx;
		justify-content: space-between;
		margin: 30upx 0 ;
		padding: 0 30upx;
		box-sizing: border-box;

		.left {
			width: 450upx;
			padding: 15upx 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			h3 {
				font-size: 30upx;
				line-height: 48upx;
				font-family: SourceHanSansCN;
				font-weight: 700;
				color: #333;
			}

			.left_bottom {
				color: #666;
				font-size: 24upx;
				.fr {
					float: right;
				}
				.news_name {
					margin-right: 10upx;
				}
				.push_top {
					width: 70upx;
					height: 40upx;
					line-height: 40upx;
					background-color: #fcc4c4;
					color: #ff0000;
					font-size: 24upx;
					font-weight: 300;
				}
			}

		}
		.right {
			width: 216upx;
			border-radius: 10upx;
			height: 170upx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
