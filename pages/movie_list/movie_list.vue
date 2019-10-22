<template>
	<view>
		<scroll-view scroll-y="true" >
			<view v-for="(item,index) in nowPlayingList" :key="index">
				<image :src="getImages(item.images.large)" lazy-load class="list-img"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {nowplaying} from "@/common/api/index.js"
	export default {
		data() {
			return {
				nowPlayingList:[]
			}
		},
		onLoad:function(option){
			 uni.setNavigationBarTitle({
				title:option.title
			});
			this.getNowPlaying()
			console.log('refresh');
		},
		//方法
		methods: {
			getImages(_url){
			    if( _url !== undefined ){
			        let _u = _url.substring( 7 );
			        return 'https://images.weserv.nl/?url=' + _u;
			    }
			},
			getNowPlaying:function(){
				nowplaying({
					apikey:"0df993c66c0c636e29ecbb5344252a4a"
				}).then(res=>{
					this.nowPlayingList = res.data.entries
				})
			},
		}
	}
</script>

<style>
.list-img{
	width: 200upx;
	height: 300upx;
}
</style>
