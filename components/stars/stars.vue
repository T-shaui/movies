<template>
	<view class="star-box">
		<view v-for="(item,index) in itemClasses" :key="index" :class="item" class="star-item"></view>
		<view class="recommended-item-rate" v-if="showNum">
			{{score}}
		</view>
	</view>
</template>

<script>
	const starNum=5;
	const CLS_ON="on"
	const CLS_HELF="helf"
	const ClS_OFF="off"
	export default {
		data(){
			return{
				
			}
		},
		props:{
			score:{		//分数
				type:[Number, String],
				default:''
			},
			showNum:{	//是否显示分数
				type: [Boolean, String],
				default: false
			}
		},
		computed:{
			itemClasses (){
				let result=[];
				let score=Math.floor(this.score) / 2;
				let starOn=Math.floor(score);
				let starHelf=(score-starOn) === 0 ? 0 : 1;
				for(let i = 0; i < starOn;i++){
					result.push(CLS_ON)
				}
				if(starHelf === 1){
					result.push(CLS_HELF)
				}
				while ( result.length < starNum){
					result.push(ClS_OFF)
				}
				return result
			}
		}
	}
</script>

<style>
	.star-box{
		display: flex;
		flex-direction: row;
	}
	.star-item{
		width: 21upx;
		height: 19upx;
		background-size: 100%;
	}
	.star-item image{
		width: 100%;
		height: 100%;
	}
	.on {
	    background-image: url(../../static/img/star24_on@2x.png);
	    background-repeat: no-repeat;
	}
	.helf {
		background-image: url(../../static/img/star24_half@2x.png);
		background-repeat: no-repeat;
	}
	.off {
		background-image: url(../../static/img/star24_off@2x.png);
		background-repeat: no-repeat;
	}
	.recommended-item-rate{
		margin-left: 10upx;
		font-size: 20upx;
		line-height: 20upx;
	}
</style>
