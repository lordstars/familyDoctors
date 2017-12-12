<template>
	<div class="basicInformation"> 
		<div class="step">
			<div class="step-up">
				<div><img src="../../images/img/1.png" alt="" /></div>
				<div class="line"></div>
				<div><img src="../../images/img/2.png" alt="" /></div>
				<div class="line"></div>
				<div><img src="../../images/img/3.png" alt="" /></div>
			</div>
			<div class="step-down">   
				<span>填写基本资料</span>
				<span>上传医师整数</span>
				<span>住院门特资格</span>
			</div>
		</div>
		<div class="section1">
			<div class="row">
				<span class="row-left">医疗机构</span>
				<span class="row-right">请输入医疗机构</span>
			</div>
			<div class="row borderN" >
				<span class="row-left">科室名称</span>
				<span class="row-right">请选择科室</span>
				<span>{{this.$parent.room}}<img src="../../images/img/arrow.png" alt="" class="arrow" @click="go1()"/></span>
			</div>
		</div>
		<div class="empty"></div>
		<div class="section2">
			<div class="row2" >
				<span class="row2-left">头像上传</span>
				<span class="row2-right"><img src="../../images/img/portrait.png" alt="" id="person"/></span>
				<span><img src="../../images/img/arrow.png" alt="" class="arrow"/></span>
			</div>
			<div class="row" >
				<span class="row-left">医师姓名</span>
				<span class="row-right">请选择医师姓名</span>
			</div>
			<div class="row" >
				<span class="row-left">联系电话</span>
				<span class="row-right">请输入联系电话</span>
			</div>
			<div class="row" >
				<span class="row-left">性别</span>
				<span class="row-right">请选择性别</span>
				<span><img src="../../images/img/arrow.png" alt="" class="arrow"/></span>
			</div>
			<div class="row" >
				<span class="row-left">民族</span>
				<span class="row-right">请选择民族</span>
				<span><img src="../../images/img/arrow.png" alt="" class="arrow"/></span>
			</div>
			<div class="row" >
				<span class="row-left">身份证号码</span>
				<span class="row-right">请填写身份证号码</span>
			</div>
			<div class="row" >
				<span class="row-left">出生日期</span>
				<span class="row-right">请选择出生日期</span>
				<span><img src="../../images/img/arrow.png" alt="" class="arrow"/></span>
			</div>
			<div class="row" >
				<span class="row-left">职称</span>
				<span class="row-right">请选择职称</span>
				<span><img src="../../images/img/arrow.png" alt="" class="arrow"/></span>
			</div>
			<div class="row borderN" >
				<span class="row-left">职务</span>
				<span class="row-right">请选择职务</span>
				<span><img src="../../images/img/arrow.png" alt="" class="arrow"/></span>
			</div>
			<div class="empty"></div>
			<div class="row" >
				<span class="row-left">个人简介</span>
				<span class="row-right">请输入个人简介</span>
			</div>
			<div class="row borderN" >
				<span class="row-left">个人擅长</span>
				<span class="row-right">请输入个人擅长</span>
			</div>
		</div>
		<div class="section3">
			<div class="nextButton">
				<router-link to="/uploadDocuments" tag="span">下一步</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default
	{
		name: 'basicInformation',
		data()
		{
			return {
				room:''
			}
		},
		created()
		{
			
		},
		methods:
		{
			go1(){
				this.$router.push("/department")
			}
		},
		mounted()
		{
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
	*{
		padding: 0;
		margin: 0;
	}
/*一像素下边框*/
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
	.step{
		background: #EFEFF4;
	}
	.step-up{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.5rem 6rem 0.5rem 6rem;
		.line{
			width: 8.1rem;
			height: 0.1rem;
			background: #D8D8D8;
			margin: 0rem 0.7rem;
		}
		img{
			width: 1.7rem;
		}
	}
	.step-down{
		display: flex;
		justify-content: space-between;
		padding: 0rem 3.5rem 1.5rem 3.5rem;
		span{
			color: #999999;
			font-size: 1.2rem;
			line-height: 1.6rem;
			text-align: center;
		}
	}
	.row{
		position: relative;
		margin-left: 1.5rem;
		padding-top: 1.1rem;
		padding-bottom: 1.1rem;
		background: #FFFFFF;
		@include bordered(#E5E5E5)
		.row-left{
			display: inline-block;
			width: 11rem;
			line-height: 2.2rem;
			font-size: 1.6rem;
			color: #333333;
		}
		.row-right{
			display: inline-block;
			color: #999999;
		}
	}
	.borderN{
			@include bordered-none()
		}
	.arrow{
		position: absolute;
		width: 0.8rem;
		height: 1.3rem;
		right: 1.5rem;
		top: 50%;
		margin-top: -0.5rem;
	}
	.empty{
		width: 100%;
		height: 1.5rem;
		background:#EFEFF4;
	}
	.section2{
		#person{
			width: 6rem;
			vertical-align: middle;
		}
		.row2{
			display: flex;
			align-items: center;
			margin-left: 1.5rem;
			padding-top: 0.7rem;
		padding-bottom: 0.7rem;
		background: #FFFFFF;
		@include bordered(#E5E5E5)
		.row2-left{
			display: inline-block;
			line-height: 2.2rem;
			font-size: 1.6rem;
			color: #333333;
		}
		.row2-right{
			display: inline-block;
			width: 6rem;
			margin-left: 15rem;
			color: #999999;
		}
		}
	}
	.section3{
		background: #EFEFF4;
		padding: 2rem;
		.nextButton{
			padding: 1.1rem 0rem;
			background: #00AE66;
			border: 2px solid rgba(5,5,5,0.08);
			border-radius: 0.5rem;
			color: #FFFFFF;
			font-size: 1.8rem;
			text-align: center;
		}
	}
</style>