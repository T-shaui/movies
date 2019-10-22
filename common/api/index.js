import request from '../utils/request'

export function carouselList (data) { // top250
	return request(data, "top250")
}
export function nowplaying (data) { // 首页影院热映
	return request(data, "nowplaying")
}
export function coming (data) {	//即将上映
	return request(data, "coming")
}
export function weekly (data) {	//本周口碑榜
	return request(data, "weekly")
}
export function newMovies (data){ //新片榜
	return request(data, "new_movies")
}
export function us_box (data){ //北美票房榜
	return request(data, "us_box")
}