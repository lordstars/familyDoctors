<template>
	<div id="app">
		<!--<loading v-show="showLoading"></loading>-->
		<transition name="router-fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	import router from './router'
	//import loading from 'components/loading'
	//import util from './util/util.js'
	//import api from './model/api.js'
	//import appConfigs from './configs'
	//import { mapMutations } from 'vuex'
	export default
	{
		name: 'app',
		data()
		{
			return {
				//    showLoading: false,
				//    titlename: {
				//      'home': '你的标题'
				//    }
			}
		},
		created()
		{
			//拦截路由
			//  router.beforeEach((to, from, next) => {
			//    next();
			//    //初始化滚动事件监听
			//    document.body.scrollTop = 0;
			//    $(document).unbind('scroll');
			//    //运行滚动条滚动
			//    util.allscroll();
			//  });
			//
			//  util.vueEvent.$on("showloading", () => {
			//    this.showLoading = true;
			//  });
			//  util.vueEvent.$on("disloading", () => {
			//    this.showLoading = false;
			//  });
			//  //首次进入页面设置标题
			//  this.firstitle()
		},
		methods:
		{
			//第一次进入页面也判断标题
			//  firstitle(){
			//    let url = window.location.href;
			//    let name = '';
			//    if(url.indexOf('?')!=-1){
			//      name = url.substring(url.indexOf('#')+2,url.indexOf('?'));
			//    }else{
			//      name = url.substring(url.indexOf('#')+2);
			//    }
			//    let _arr = name.split('/');
			//    name = _arr[_arr.length-1];
			//    if(name){
			//      document.title = this.titlename[name]
			//    }
			//  }
		},
		components:
		{
			//  loading
		}
	}
</script>
<style lang="scss" scoped="scoped">
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,body{
	width: 100%;
	height: 100%;
}
.router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .1s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
	/*body {
  overflow-x: hidden;
  min-width: 320px;
}*/
	
	::-webkit-input-placeholder {
		color: #999;
	}
	/*去掉百度地图logo*/
	
	.mapdetail .anchorBL {
		display: none;
	}
	/*文字超出省略号 第二行超出省略*/
	/*
.ellipisis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.ellipisis2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}*/
</style>