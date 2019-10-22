<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="true" autoplay="true" interval="3000" :duration="500" previous-margin="50upx" next-margin="50upx">
				<swiper-item>
					<view class="swiper-item ">
						<view class="uni-bg-red">
							A
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<view class="uni-bg-green">
							B
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item ">
						<view class="uni-bg-blue">C</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style>
	.uni-bg-red{
		width: 95%;
		margin: auto;
		background-color: red;
	}
	.uni-bg-green{
		width: 95%;
		margin: auto;
		background-color: green;
	}
	.uni-bg-blue{
		width: 95%;
		margin: auto;
		background-color: blue;
	}
	.uni-margin-wrap {
		width:100%;
		/* margin:0 30upx; */
	}
	.swiper {
		height: 300upx;
		margin:0 30upx;
	}
	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40upx;
		margin-bottom: 0;
	}
	
	.uni-common-mt{
		margin-top:60upx;
		position:relative;
	}
	
	.info {
		position: absolute;
		right:20upx;
	}
</style>
