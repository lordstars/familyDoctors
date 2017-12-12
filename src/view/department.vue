<template>
	<div class="department">
		<div class="title">
			<div class="title-left">一级科室</div>
			<div class="title-right">二级科室</div>
		</div>
		<div class="list">
			<div class="left" ref="left">
				<ul>
					<li v-for="(item,index) in left" @click="selectMuen(index,$event)"     :class="{'current':currentIndex===index}">{{item.left}}</li>
				</ul>
			</div>
			<div class="right" ref="right">
				<ul>
					<li v-for="item in left" class="right-list" :key="item.id">
						<h1>{{item.left}}</h1>
						<ul class="inner">
							<router-link to="/"><li v-for="(item2,index) in item.right" @click="confirm(index,$event)" :class="{'active':i==index}" class="innerli" :key="item.id" >{{item2}}</li></router-link>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import mock from "@/util/mock.js"
	import BScroll from 'better-scroll';
	export default
	{
		name: "department",
		data()
		{
			return {
				left: [],
				listHeight:[],
				scrollY:0,
				isActive:false,
				i:"",
				room:""
			}
		},
		computed:{
			currentIndex(){
				for (var i = 0; i < this.listHeight.length; i++) {
					let height1=this.listHeight[i]
					let height2=this.listHeight[i+1]
					if(!height2||(this.scrollY>=height1&&this.scrollY<height2)){
						return i
						console.log(i)
					}
				}
				return 0
			}
		},
		created()
		{
			this.$http(
			{
				method: "get",
				url: "http://test.com"
			}).then((res) =>
			{
				console.log(res)
				console.log(res.body.name);
				this.left = res.body.name
				this.$nextTick(()=>{
					this.initScroll()
					this.caculateHeight()
				})
			})
		},
		methods:{
			initScroll()
			{
				this.leftScroll=new BScroll(this.$refs.left,
				{
					click:true
				});
				this.rightScroll=new BScroll(this.$refs.right,{
					click:true,
					probeType:3
				});
				this.rightScroll.on("scroll",(pos)=>{
					this.scrollY=Math.abs(Math.round(pos.y))
				})
				
			},
			caculateHeight(){
				let rightList=this.$refs.right.getElementsByClassName("right-list")
				let height=0
				this.listHeight.push(height)
				for (var i = 0; i < rightList.length; i++) {
					height+=rightList[i].clientHeight
					this.listHeight.push(height)
				}
			},
			selectMuen(index,$event){
				if(!event._constructed){
					return
				}
				console.log(index)
				let rightList=this.$refs.right.getElementsByClassName("right-list")
				let el=rightList[index]
				this.rightScroll.scrollToElement(el,100)
			},
			confirm(index,$event){
//				this.isActive=true
				this.i=index
//				console.log(event.currentTarget.innerHTML)
				this.room=event.currentTarget.innerHTML
				console.log(this.room)
			}
			
		}
	}
</script>
<style lang="scss">
	*{
		padding: 0;
		margin: 0;
	}
	a{
		text-decoration: none;
	}
@mixin bordered($color) {
		position: relative;
		&:after {
			display: block;
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			border-top: 1px solid $color;
			content: '';
		}
	}
/*去除一像素边框*/
	@mixin bordered-none() {
		&:after {
			display: none;
		}
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	li {
		list-style: none;
	}
	.title{
		display: flex;
		background: #EFEFF4;
		.title-left{
			width: 34%;
			line-height: 2rem;
			padding: 1.1rem 0rem 0.6rem 1.5rem;
			font-size: 1.4rem;
			color: #999999;
		}
		.title-right{
			width: 66%;
			line-height: 2rem;
			padding: 1.1rem 0rem 0.6rem 1.5rem;
			font-size: 1.4rem;
			color: #999999;
		}
	}
	.list {
		display: flex;
		position: absolute;
		top: 3.7rem;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		.left {
			width: 34%;
			ul{
				width: 100%;
				background: #EFEFF4;
				li{
					padding: 1.1rem 0rem 1.2rem 1.5rem;
					color:#333333 ;
					font-size: 1.6rem;
					&.current{
						background: #FFFFFF;
						color: #00AE66;
					}
			}
				}
				
		}
		.right {
			width: 66%;
			.inner{
				li{
					padding:1.1rem 0rem 1.2rem 0rem ;
					margin-left: 1.5rem;
					color: #333333;
					font-size: 1.6rem;
					@include bordered(#E5E5E5);
					&.active{
								color:#00AE66 ;
							}		
				}
			}
		}
	}
	
</style>