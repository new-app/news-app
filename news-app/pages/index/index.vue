<template>
	<view class="index">
		<view class="cu-bar search">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input  @click="InputFocus"  disabled="disabled" :adjust-position="false" type="text" placeholder="搜索你感兴趣的内容"
				 confirm-type="search"></input>
			</view>
		</view>
		
		<scroll-view scroll-x class="nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in 5" :key="index" @tap="tabSelect"
			 :data-id="index" >
				{{biaoti[index]}}
			</view>
		</scroll-view>
		<Swiper class="sss"></Swiper>
		<Newslist  v-for="(item,index) in arr" :key="index" :item="item"></Newslist>
	</view>
</template>

<script>
	import Swiper from "../../components/swiper.vue"
	import Newslist from "../../components/newslist.vue"
	export default {
		components:{
			Swiper,
			Newslist
		},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				biaoti: ["推荐", "热点", "小视频", "时政", "娱乐"],
				idx: 0,
				arr:[], //主页数据
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id; //点击的第几个 
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60; //left的距离				
			},
			bannerFn(ev) {
				this.idx = ev.detail.current
			},
			InputFocus(){  //点击搜索框跳转
				uni.navigateTo({
					url:"../../components/search/search" 
				})
			},
			titlefn(){
				console.log(1);
			}
			
		},
		onPullDownRefresh() {
			
			uni.request({
				url:"http://rap2api.taobao.org/app/mock/234536/get/home",
						success:(data)=> {
					this.arr=data.data.data;
					uni.stopPullDownRefresh();
					uni.showToast({
						title:"刷新成功"
					});
					}
				})
		},
		
		onLoad() {
			uni.request({
				url:"http://rap2api.taobao.org/app/mock/234536/get/home",
						success:(data)=> {
							
						this.arr=data.data.data;
						console.log(this.arr);
					}
						})
		},
		

	}
</script>

<style lang="scss">
	.index {
		padding-top: 50upx;
		background: url(../../static/image/back.png) no-repeat top;
		background-size: contain;

		.cu-item {
			color: white;
			margin-left: 24upx;

		}

		.cu-item+.cu-item {
			color: white;
			margin-left: 70upx;

		}

	.sss{
		margin-bottom: 100upx;
	}

	}
</style>
