<template>
	<view class="searchindex">
		<view class="cu-bar search">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input  :adjust-position="false" type="text" placeholder="搜索你感兴趣的内容"
				 confirm-type="search"></input>
			</view>
			<text @click="rtn" class="qxtx">取消</text>
		</view>
		<view class="jxmt">
			<view class="text1">
				<text class="text3">精选媒体or作者 </text>
				<text class="text2">换一换</text>
			</view>
			
			<view class="itmbox">
				<view class="itm" v-for="(item,index) in 3" :key="index" @click="jump(index)">
					<view class="itm1" ></view>
					<view class="itm2" >小库小库</view>
					<view class="itm3" >个人简介</view>
					<view class="itm4"  @click.stop=""></view>
				</view>
				<!-- <view class="itm">
					<view class="itm1"></view>
					<view class="itm2">小库小库</view>
					<view class="itm3">个人简介</view>
					<view class="itm4">关注</view>
				</view>
				<view class="itm">
					<view class="itm1"></view>
					<view class="itm2">小库小库</view>
					<view class="itm3">个人简介</view>
					<view class="itm4">关注</view>
				</view> -->
			</view>
			
			<view class="text1">
				<text class="text3">推荐内容</text>
			<text class="text2">换一换</text>
			</view>
			
			<view class="tjcontent" >
				<view class="tjcontent1" v-for="(item,index) in 3" :key="index">
					<view class="tj1"></view>
					<view class="tj2">全球热读榜</view>
					<view class="tj3">今日更新</view>
				</view>
				<!-- <view class="tjcontent1">
					<view class="tj1"></view>
					<view class="tj2">全球热读榜</view>
					<view class="tj3">今日更新</view>
				</view>
				<view class="tjcontent1">
					<view class="tj1"></view>
					<view class="tj2">全球热读榜</view>
					<view class="tj3">今日更新</view>
				</view> -->
			</view>
		</view>
		
		<view class="youlike">猜你喜欢</view>
		<Newslist  v-for="(item,index) in arr" :key="index" :item="item"></Newslist>
	</view>
	
</template>

<script>
	import Newslist from "../newslist.vue"
	export default {
		components:{
			Newslist
		},
		data() {
			return {
				arr:[],
			};
		},
		methods:{
			rtn(){
				uni.navigateBack();
			},
			jump(i){
				console.log(i);
				// uni.navigateTo({
				// 	url: '../../pages/mydetail/mydetail',
				// });
			}
		},
		onLoad() {
			uni.request({
				url:"http://rap2api.taobao.org/app/mock/234536/get/home",
						success:(data)=> {
							
						this.arr=data.data.data;
						uni.showToast({
							title:"加载成功"
						});
					}
						})
		}
		
		
	}
</script>

<style lang="scss">
.searchindex{
	background: #fff;
	.search{
		padding: 50upx 0 20.5upx 0;
		background:#333;
		margin-bottom: 30.5upxs;
		.qxtx{
			color: #fff;
			padding-right: 10upx;
		}
	}
	.jxmt{
		padding: 0 30upx;
		.text1{
			font-size:30upx;
			font-family:SourceHanSansCN;
			font-weight:bold;
			color:rgba(51,51,51,1);
			line-height:70upx;
			display: flex;
			margin-bottom: 29upx;
			.text2{
					width:69upx;
					height:22upx;
					font-size:24upx;
					font-family:SourceHanSansCN;
					font-weight:300;
					color:rgba(130,130,130,1);
					line-height:70upx;
					flex: 1;
					color: #333333;
					
			}
			.text3{
				flex:6;
			}
		}
		
		.itmbox{
			padding-bottom: 40upx;
			display: flex;
			justify-content: space-between;
			.itm{
				width:216upx;
				height:290upx;
				background:rgba(238,238,238,1);
				border-radius:10upx;
				display: flex;
				flex-direction: column;	
				text-align: center;
				justify-content: center;
				.itm1{
					margin: 0 auto;
					width:88upx;
					height:88upx;
					background:rgba(23,161,255,1);
					border-radius:44upx;
				}
				.itm2{
					margin: 20upx 0 10upx 0;
					font-size:28upx;
					font-family:SourceHanSansCN;
					font-weight:600;
					color:rgba(51,51,51,1);
				}
				.itm3{
					font-size:18upx;
					font-family:SourceHanSansCN;
					font-weight:300;
					color:rgba(102,102,102,1);
				}
				.itm4{
					color: #FFFFFF;
					margin: 0 auto;
					line-height: 50upx;
					width:80upx;
					height:50upx;
					background:linear-gradient(0deg,rgba(250,244,185,1),rgba(198,147,57,1));
					border-radius:10px;
					margin-top: 20upx;
				}
			}
			
			
		}
		.tjcontent{
			display: flex;
			justify-content: space-between;
			padding-bottom:40upx ;
				.tjcontent1{
					width:216upx;
					height:240upx;
					background:rgba(238,238,238,1);
					border-radius:10upx;
					text-align: center;
					.tj1{
						width:216upx;
						height:140upx;
						background: red;
					}
					.tj2{
						font-size:26upx;
						font-family:SourceHanSansCN;
						font-weight:600;
						color:rgba(51,51,51,1);
						line-height:60upx;
					}
					.tj3{
						font-size:18upx;
						font-family:SourceHanSansCN;
						font-weight:300;
						color:rgba(102,102,102,1);
					}
				}
			}
	}
	
	.youlike{
		padding-left: 30upx;
		font-size:30upx;
		font-family:SourceHanSansCN;
		font-weight:bold;
		color:rgba(51,51,51,1);
		line-height:70upx;
	}
	
}
</style>
