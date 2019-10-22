<template>
	<view>
		<view class="uni-margin-wrap">
			<!-- bwSwiper -->
			<!-- <bw-swiper :swiperList="bannerList" style="width:100%"></bw-swiper> -->
			<swiper class="swiper" circular :indicator-dots="true" autoplay="true" interval="3000" :duration="500">
				<swiper-item v-for="(item,index) in bannerList" :key="index">
					<view class="swiper-item uni-bg-red">
						<image :src="getImages(item.images.large)" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="recommended">
			<uni-list>
				<uni-list-item title="每日推荐" thumb="../../static/img/my_blue.png" :showArrow="false"/>
			</uni-list>
			<view class="recommended_movie">
				<scroll-view class="recommended-list" scroll-x="true" scroll-left="120">
					<view class="recommended-list-item" v-for="(item,index) in recommendedList" :key="index">
						<image :src="getImages(item.images.small)" mode="" class="recommended-img"></image>
						<view class="recommended-item-name">
							{{item.title}}
						</view>
						<my-star :score="item.rating.average" showNum="true"></my-star>
						<!-- <view class="recommended-item-img">
							<image src="../../static/img/star24_on@2x.png" mode=""></image>
							<image src="../../static/img/star24_on@2x.png" mode=""></image>
							<image src="../../static/img/star24_on@2x.png" mode=""></image>
							<image src="../../static/img/star24_on@2x.png" mode=""></image>
							<image src="../../static/img/star24_half@2x.png" mode=""></image>
							<text class="recommended-item-rate">{{item.rating.average}}</text>
						</view> -->
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theaters">
			<uni-list>
				<uni-list-item title="影院热映" thumb="../../static/img/my_blue.png" rightText="全部" @click="playClickAll"/>
			</uni-list>
			<view class="nowplaying">
				<view v-for="(item,index) in nowPlayingList" :key="index" class="nowplaying-item">
					<image :src="getImages(item.images.large)" mode=""></image>
					<view class="recommended-item-name">
						{{item.title}}
					</view>
					<my-star :score="item.rating" showNum="true"></my-star>
				</view>
			</view>
		</view>
		<view class="coming-soon">
			<uni-list>
				<uni-list-item title="即将上线" thumb="../../static/img/my_blue.png" rightText="全部"/>
			</uni-list>
			<view class="coming-soon_box">
				<view v-for="(item,index) in comingList" :key="index" class="coming-soon_item">
					<image :src="getImages(item.images.large)" mode=""></image>
					<view class="recommended-item-name">
						{{item.title}}
					</view>
					<view class="people">
						{{item.collection}}人想看
					</view>
					<view class="coming-time">
						{{item.pubdate}}
					</view>
				</view>
			</view>
		</view>
		<view class="movies-list">
			<uni-list>
				<uni-list-item title="电影榜单" thumb="../../static/img/my_blue.png" :showArrow="false"/>
			</uni-list>
			<view class="movielist-detail">
				<swiper class="movielist-swiper" circular :indicator-dots="false" :autoplay="false" interval="3000" :duration="500" previous-margin="50upx" next-margin="50upx">
					<swiper-item>
						<view class="swiper-item ">
							<view class="movie-container" :style="{background:('url('+ usImg +') center no-repeat'),backgroundSize:'cover'}">
								<view class="movies-ranking-title">
									<view>每周五更新.共10部</view>
									<view>北美电影票房榜</view>
								</view>
								<view class="movies-ranking">
									<scroll-view scroll-y="true" class="scroll-Y">
										<view class="movie-ranking-text" v-for="(item,index) in usboxList" :key="index">
											<view>{{index+1}}.</view>
											<view class="movie-ranking-name">{{item.subject.title}}</view>
										</view>
									</scroll-view>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<view class="movie-container" :style="{background:('url('+ weeklyImg +') center no-repeat'),backgroundSize:'cover'}">
								<view class="movies-ranking-title">
									<view>每周五更新.共10部</view>
									<view>一周口碑电影榜</view>
								</view>
								<view class="movies-ranking red">
									<scroll-view scroll-y="true" class="scroll-Y">
										<view class="movie-ranking-text" v-for="(item,index) in weeklyList" :key="index">
											<view>{{index+1}}.</view>
											<view class="movie-ranking-name">{{item.subject.title}}</view>
										</view>
									</scroll-view>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item ">
							<view class="movie-container" :style="{background:('url('+ tobImg +') center no-repeat'),backgroundSize:'cover'}">
								<view class="movies-ranking-title">
									<view>豆瓣榜单.共250部</view>
									<view>豆瓣电影Top250</view>
								</view>
								<view class="movies-ranking brown">
									<scroll-view scroll-y="true" class="scroll-Y">
										<view class="movie-ranking-text" v-for="(item,index) in tobList" :key="index">
											<view>{{index+1}}.</view>
											<view class="movie-ranking-name">{{item.title}}</view>
										</view>
									</scroll-view>
								</view>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item ">
							<view class="movie-container" :style="{background:('url('+ newMoviesImg +') center no-repeat'),backgroundSize:'cover'}">
								<view class="movies-ranking-title">
									<view>每周五更新.共10部</view>
									<view>一周新电影</view>
								</view>
								<view class="movies-ranking">
									<scroll-view scroll-y="true" class="scroll-Y">
										<view class="movie-ranking-text" v-for="(item,index) in newMoviesList" :key="index">
											<view>{{index+1}}.</view>
											<view class="movie-ranking-name">{{item.title}}</view>
										</view>
									</scroll-view>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>
<script>
	import {carouselList,nowplaying,coming,weekly,newMovies,us_box} from "@/common/api/index.js"
	// import bwSwiper from '@/components/bw-swiper/bw-swiper.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import myStar from '@/components/stars/stars.vue'
	export default {
		data() {
			return {
				bannerList:[],
				recommendedList:[],
				nowPlayingList:[],
				comingList:[],
				usboxList:[],
				usImg:"",
				weeklyList:[],
				weeklyImg:"",
				tobList:[],
				tobImg:"",
				newMoviesList:[],
				newMoviesImg:[]
			}
		},
		components:{
			uniList,
			uniListItem,
			myStar,
			// bwSwiper
		},
		onLoad:function(){
			this.getBanner()
			this.getRecommended()
			this.getNowPlaying()
			this.getComing()
			this.getUsBox()
			this.getWeekly()
			this.getTop()
			this.getNewMovies()
		},
		methods: {
			getImages(_url){
			    if( _url !== undefined ){
			        let _u = _url.substring( 7 );
			        return 'https://images.weserv.nl/?url=' + _u;
			    }
			},
			getBanner:function(){
				carouselList({
					apikey:"0df993c66c0c636e29ecbb5344252a4a",
					start:"180",
					count:"4"
				}).then(res=>{
					if(res.statusCode == 200){
						this.bannerList = res.data.subjects;
					}
				})
			},
			getRecommended:function(){
				let num = Math.floor(Math.random() * 250);
				carouselList({
					apikey:"0df993c66c0c636e29ecbb5344252a4a",
					start:num,
					count:"8"
				}).then(res=>{
					if(res.statusCode==200){
						this.recommendedList = res.data.subjects;
						this.recommendedList.map(item=>{
							if(Math.floor(item.rating.average) == item.rating.average){
								item.rating.average=item.rating.average+".0"
							}
						})
						
					}
				})
			},
			getNowPlaying:function(){
				nowplaying({
					apikey:"0df993c66c0c636e29ecbb5344252a4a"
				}).then(res=>{
					this.nowPlayingList = res.data.entries.splice(0,6);
				})
			},
			playClickAll:function(){
				uni.navigateTo({
					url: '/pages/movie_list/movie_list?title='+"影院热映电影"
				})
			},
			getComing:function(){
				coming({
					apikey:"0df993c66c0c636e29ecbb5344252a4a"
				}).then(res=>{
					this.comingList = res.data.entries.splice(0,6);
					this.comingList.map((item,index)=>{
						item.pubdate=item.pubdate.split("-")[1]+"月"+item.pubdate.split("-")[2]+"日"
					})
				})
			},
			//电影榜单-北美电影票房榜
			getUsBox:function(){
				us_box({
					apikey:"0df993c66c0c636e29ecbb5344252a4a"
				}).then(res=>{
					this.usboxList=res.data.subjects.splice(0,10);
					this.usImg=this.usboxList[0].subject.images.large
				})
			},
			//一周口碑电影榜
			getWeekly:function(){
				weekly({
					apikey:"0df993c66c0c636e29ecbb5344252a4a"
				}).then(res=>{
					this.weeklyList=res.data.subjects.splice(0,10);
					this.weeklyImg=this.weeklyList[0].subject.images.large
				})
			},
			//豆瓣电影top250
			getTop:function(){
				carouselList({
					apikey:"0df993c66c0c636e29ecbb5344252a4a",
				}).then(res=>{
					this.tobList=res.data.subjects.splice(0,10);
					this.tobImg=this.tobList[0].images.large
				})
			},
			//一周新电影
			getNewMovies:function(){
				newMovies({
					apikey:"0df993c66c0c636e29ecbb5344252a4a",
				}).then(res=>{
					this.newMoviesList=res.data.subjects.splice(0,10);
					this.newMoviesImg=this.newMoviesList[2].images.large
				})
			}
		}
	}
</script>

<style>
	.uni-margin-wrap {
		width:100%;
	}
	.swiper {
		height: 400upx;
	}
	.swiper-item {
		display: block;
		height: 400upx;
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
	image{
		width: 100%;
	}
	.recommended{
		margin-top: 10upx;
		background-color: #fff;
		padding: 0 20upx 20upx 0;
		
	}
	.recommended_movie{
		margin-top: 20upx;
		padding-left: 30upx;
	}
	.recommended-list{
		white-space: nowrap;
		width: 100%;
	}
	.recommended-list-item{
		width: 180upx;
		height: 260upx;
		display: inline-block;
		margin-right: 30upx;
	}
	.recommended-img{
		width: 100%;
		height: 100%;
		border-radius: 5upx;
	}
	.recommended-item-name{
		font-size: 26upx;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.recommended-item-img{
		width: 21upx;
		height: 19upx;
	}
	.recommended-item-img image{
		width: 21upx;
		height: 19upx;
	}
	.recommended-item-rate{
		margin-left: 10upx;
		font-size: 20upx;
	}
	.theaters,.coming-soon{
		margin-top: 10upx;
	}
	.coming-soon{
		/* margin-bottom: 60px; */
	}
	.nowplaying-item, .coming-soon_item{
		width: 200upx;
		height: 370upx;		
	}
	.nowplaying-item{
		width: 200upx;
		height: 340upx !important;	
	}
	.nowplaying-item image,.coming-soon_item image{
		width: 100%;
		height: 260upx;
		border-radius: 5upx;
	}
	.nowplaying,.coming-soon_box{
		background-color: #FFFFFF;
		padding: 30upx 40upx 10upx 40upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.people{
		font-size: 18upx;
		color: #333;
		/* transform:scale(0.8);
		margin-left: -20upx; */
	}
	.coming-time{
		text-align: center;
		font-size: 16upx;
		width: 80upx;
		color: red;
		border: 1upx solid red;
		border-radius: 10upx;
	}
	.movies-list{
		margin-top: 10upx;
		margin-bottom: 10px;
		background-color: #FFFFFF;
	}
	.movielist-swiper{
		height: 300upx;
		margin:0 30upx;
	}
	.movies-list .swiper-item{
		height: 300upx;
	}
	.movielist-detail{
		background: #FFFFFF;
		padding: 30upx 0;
	}
	.movie-container{
		height: 100%;
		width: 95%;
		margin: auto;
		background-color: blue;
		border-radius: 10upx;
		position: relative;
		overflow: hidden;
	}
	.movies-ranking{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 150upx;
		background: #3d464f;
		padding: 20upx 30upx 0;
		box-sizing: border-box;
	}
	.scroll-Y{
		height: 100%;
	}
	.movie-ranking-text{
		height: 30upx;
		line-height: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		color: #FFFFFF;
		font-size: 20upx;
	}
	.movies-ranking-title{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 150upx;
		background: rgba(0,0,0,0.5);
		line-height: 50upx;
		text-align: left;
		box-sizing: border-box;
		padding-left: 30upx;
		padding-top: 20upx;
		color: #FFFFFF;
	}
	.movies-ranking-title view:first-child{
		font-size: 22upx;
	}
	.movies-ranking-title view:last-child{
		font-size: 38upx;
	}
	.red{
		background-color: #5d100a;
	}
	.brown{
		background-color: #270907;
	}
	/*  #ifdef  H5  */
	.movies-list{
		margin-bottom: 60px;
	}
	.coming-time{
		text-align: center;
		font-size: 12upx;
		width: 120upx;
		color: red;
		border: 1upx solid red;
		border-radius: 10upx;
	}
	.nowplaying-item, .coming-soon_item{
		width: 200upx;
		height: 390upx;		
	}
	/*  #endif  */
	
	/*  #ifndef  H5  */
		.movielist-swiper{
			height: 400upx;
			margin:0 30upx;
		}
		.movies-list .swiper-item{
			height: 400upx;
		}
		.movies-ranking{
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 220upx;
			background: #3d464f;
			padding: 20upx 30upx 0;
			box-sizing: border-box;
		}
		.movies-ranking-title{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 185upx;
			background: rgba(0,0,0,0.5);
			line-height: 50upx;
			text-align: left;
			box-sizing: border-box;
			padding-left: 30upx;
			padding-top: 20upx;
			color: #FFFFFF;
		}
		.movies-ranking-title view:first-child{
			font-size: 22upx;
		}
		.movies-ranking-title view:last-child{
			margin-top: 20upx;
			font-size: 46upx;
		}
		.movie-ranking-text{
			display: block;
			height: 40upx;
			line-height: 50upx;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			color: #FFFFFF;
			font-size: 26upx;
			
		}
		.movie-ranking-name{
			text-align: left;
			width: 200upx;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	/*  #endif  */
</style>
