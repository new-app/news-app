<template>
	<view class="sub">
		<header>
			<view class="cu-bar search ">
				<view class="search-form">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索你感兴趣的内容"
					 confirm-type="search"></input>
				</view>
			</view>
		</header>
		<view class="top">别再拉了，到顶了</view>
		<view class="box">
			<h3 class="sub_title">订阅分类</h3>
			<scroll-view scroll-x class="bg-white nav navs" scroll-with-animation :scroll-left="scrollLeft">
				<SubItem class="cu-item" v-for="(item,index) in sublist" :key="index" @click="tabSelect" :data-id="index" :subitem="item">
				</SubItem>
			</scroll-view>
		</view>
		<view class="box" v-if="isShow">
			<h3 class="sub_title">活动</h3>
			<view class="activity">
				<image src="../../static/logo.png"></image>
				<view class="ac_text">
					<p class="ac_title">
						中国印象，我在最美古镇
					</p>
					<p class="ac_content">
						<text class="ac_name">张祥林</text>
						<text>等</text>
						<text>76</text>
						<text>位用户正在参与</text>
					</p>
				</view>
				<view class="ac_btn">
					<view class="cu-item" @click="closeAc">
						<text class="lg text-gray cuIcon-close"></text>

					</view>
					<button class="ac_join">立即参与</button>
				</view>
			</view>
		</view>
		<view class="box">
			<h3>订阅新闻</h3>
			<NewsItem v-for="(item,index) in newslist" :news="item" :key="index" @tap="toDetail(index)"></NewsItem>
		</view>
	</view>
</template>

<script>
	import SubItem from "../../components/SubItem.vue"
	import NewsItem from "../../components/NewsItem.vue"
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				sublist: [],
				isShow: true,
				newslist: []
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			closeAc() {
				this.isShow = false
			},
			toDetail(index) {
				console.log(index)
				uni.navigateTo({
					url: '../newsdetail/newsdetail?index=' + index,
					animationType: 'pop-in',
					animationDuration: 200
				})
			}
		},
		mounted() {
			uni.request({
					url: "http://rap2api.taobao.org/app/mock/234537/get/sub",
					success: (res) => {
						this.sublist = res.data.classify

					}
				}),
				uni.request({
					url: "http://rap2api.taobao.org/app/mock/234537/get/subnews",
					success: (res) => {
						let newsArr = res.data.subnews
						// console.log(newsArr);
						newsArr.forEach((item, i) => {
							if (item.pushtop) {
								newsArr.unshift(...newsArr.splice(i, 1))
							}
						})
						this.newslist = newsArr
						// console.log(newsArr)
					}
				})
		},
		components: {
			SubItem,
			NewsItem
		}
	}
</script>

<style lang="scss" scoped>
	header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 20;
		padding-top: 50upx;
		background-color: #333;
		height: 146upx;
		width: 100%;
		box-sizing: border-box;
	}

	.top {
		height: 146upx;
		width: 100%;
	}

	.cu-bar>.search-form>input {
		border-radius: 10upx;
		text-align: center;
	}

	.box {
		h3 {
			padding: 30upx;
			font-weight: bold;
			font-size: 36upx;
		}

		.navs {
			padding-left: 30upx;
			width: 100%;
		}

		.activity {
			padding: 0 30upx;
			display: flex;
			justify-content: space-between;

			>image {
				width: 170upx;
				height: 170upx;
				border-radius: 10upx;
			}

			.ac_text {
				padding-top: 50upx;
				width: 340upx;
				text-align: left;

				.ac_title {
					width: 100%;
					height: 30upx;
					font-size: 30upx;
					font-family: SourceHanSansCN;
					font-weight: 700;
					color: rgba(51, 51, 51, 1);

				}

				.ac_content {
					width: 100%;
					margin-top: 20upx;
					height: 23upx;
					font-size: 24upx;
					font-family: SourceHanSansCN;
					font-weight: 400;
					color: rgba(130, 130, 130, 1);

				}
			}
		}

		.ac_btn {
			display: flex;
			flex-direction: column;
			padding: 20upx 0;
			justify-content: space-between;

			.cu-item {
				text-align: right;
				color: #333333;
				padding-right: 20upx;
				transform: scale(1.5);
			}

			.ac_join {
				width: 131upx;
				height: 50upx;
				color: #FFFFFF;
				line-height: 50upx;
				text-align: center;
				background: linear-gradient(0deg, rgba(250, 244, 185, 1), rgba(198, 147, 57, 1));
				border-radius: 10upx;
			}
		}
	}
</style>
