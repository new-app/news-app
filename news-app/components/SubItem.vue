<template>
	<view class="sub_item">
		<image :src="subitem.imgUrl" class="item_img" style="opacity:1;"> </image>
		<view class="modul">
			<h4>{{subitem.classify}}</h4>
			<h5>{{subitem.eng}}</h5>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			subitem:Object
		},
		data(){
			return {
				
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.sub_item {
		width: 170upx;
		height: 170upx;
		border-radius: 10upx;
		box-sizing: border-box;
		padding: 0;
		position: relative;
		.item_img {
			width: 100%;
			height: 100%;
			
		}

		.modul {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
			position: absolute;
			top: 0;
			left: 0;
			
			h4 {
				font-size: 30upx;
				font-weight: bold;
				color: #FFFFFF;
				text-align: center;
			}
			h5 {
				transform: scale(0.83);
				font-size: 20upx;
				color: #FFFFFF;
				font-weight: 200;
			}
		}
	
	}
	
</style>
