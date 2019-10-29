<template>
	<view class="mydetail">
		<view class="mytile">
			<text  class="cuIcon-back t1 fs-30" @click="back"></text>
			<text class="t2 fs-30">分享</text>
		</view>
		<view class="titl">
			<text class="t3">千库日报中文网</text>
			<text class="t4">全方面、各项新闻传播资讯</text>
			<view class="titl1">
				<view class="titl2">
				<text class="ttt">666</text>
				<text class="tt">关注</text>
				</view>
				<view class="xian">					
				</view>
				<view class="titl3">
				<text class="ttt">666</text>
				<text class="tt">粉丝</text>
				</view>
			</view>
			<text class="dy">
				订阅
			</text>
		</view>
		
		<scroll-view scroll-x class="bg-white nav text-center">
			<view class="cu-item" :class="index==TabCur?'text-yellow cur':''"  v-for="(item,index) in tit" :key="index" @tap="tabSelect" :data-id="index">
				{{item}}
			</view>
		</scroll-view>
		<view v-for="(item,index) in tit" :key="index" v-if="index==TabCur" class="bg-white">
			<Newslist  v-for="(item,index) in arr" :key="index" :item="item"></Newslist>	
		</view>
		
		
	</view>
</template>

<script>
	import Newslist from "../../components/newslist.vue"
	export default {
		components:{
			Newslist,
		},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				tit:["文章","动态"],
				arr:[]
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				console.log(this.TabCur);
			},
			back(){
				uni.navigateBack();
			}
		},
		onLoad() {
			uni.request({
				url:"http://rap2api.taobao.org/app/mock/234536/get/home",
						success:(data)=> {						
						this.arr=data.data.data;
					}
						})
		},
	}
</script>

<style lang="scss" scoped>
.mydetail{
	padding-top: 50upx;
	background: url(../../static/image/back2.png) no-repeat;
	background-size: contain;
	.mytile{
		padding-left: 40upx;
		display: flex;
		color: #fff;
		.t1{
			flex:1;
		}
		.t2{
			flex: 8;
			text-align: right;
			margin-right: 40upx;
		}
	}
	.titl{
		display: flex;
		flex-direction: column;
		color: #fff;

		.t3{
			text-align: center;
			font-size:36upx;
			font-family:SourceHanSansCN;
			font-weight:700;
			color:rgba(255,255,255,1);
			line-height:70upx;
		}
		.t4{
			text-align: center;
			font-size:24upx;
			font-family:SourceHanSansCN;
			font-weight:400;
			color:rgba(255,255,255,1);
			line-height:70upx;
		}
		.titl1{
			margin: 0 auto;
			display: flex;
			.titl2{
				display: flex;
				flex-direction: column;
			}
			.xian{
				width:1px;
				height:40upx;
				background:rgba(130,130,130,1);
				margin:15upx 50upx 0;
			}
			.ttt{
				font-size:30upx;
				font-family:SourceHanSansCN;
				font-weight:700;
				color:rgba(255,255,255,1);
				line-height:70upx;
			}
			.tt{
					font-size:10upx;
					font-family:SourceHanSansCN;
					font-weight:400;
					color:rgba(255,255,255,1);
					text-align: center;
				}
			.titl3{
				display: flex;
				flex-direction: column;
				
			}
		}
		.dy{
			margin: 0 auto;
			text-align: center;
			width:80upx;
			line-height: 50upx;
			background:linear-gradient(0deg,rgba(250,244,185,1),rgba(198,147,57,1));
			border-radius:10px;
			margin-bottom: 50upx;
			margin-top: 20upx;
		}
		.aa{
			color: #C69339 !important;
		}
	}
	scroll-view{
		padding-bottom: 30upx;
		background: #fff;
	}
}
</style>
