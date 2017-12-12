<template>
	<div class="uploadDocuments">
		<div class="step">
		<div class="step-up">
			<div><img src="../../images/img/4.png" alt="" /></div>
			<div class="line"></div>
			<div><img src="../../images/img/2.png" alt="" /></div>
			<div class="line"></div>
			<div><img src="../../images/img/3.png" alt="" /></div>
		</div>
		<div class="step-down"> <span>填写基本资料</span> <span>上传医师整数</span> <span>住院门特资格</span> </div>
	</div>
	<div class="professional">
		<div class="row"> 
			<span class="row-left">职业证书编号</span> 
			<span class="row-right">请填写职业证书编号</span> 
		</div>
		<div class="row borderN"> 
			<span class="row-left">医师职业证书上传</span> 
		</div>
		<div class="upload">
			<div class="update">
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
	<div class="qualification"> </div>
	</div>
	
</template><script>
	export default
	{
		name: "uploadDocuments",
		data()
		{
			return {}
		}
	}
</script>
<style lang="scss">
	* {
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
	.step {
		background: #EFEFF4;
	}
	.step-up {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1.5rem 6rem 0.5rem 6rem;
		.line {
			width: 8.1rem;
			height: 0.1rem;
			background: #D8D8D8;
			margin: 0rem 0.7rem;
		}
		img {
			width: 1.7rem;
		}
	}
	.step-down {
		display: flex;
		justify-content: space-between;
		padding: 0rem 3.5rem 1.5rem 3.5rem;
		span {
			color: #999999;
			font-size: 1.2rem;
			line-height: 1.6rem;
			text-align: center;
		}
	}
	.row{
		/*position: relative;*/
		margin-left: 1.5rem;
		padding-top: 1.1rem;
		padding-bottom: 1.1rem;
		background: #FFFFFF;
		@include bordered(#E5E5E5)
		.row-left{
			display: inline-block;
			/*width: 11rem;*/
			line-height: 2.2rem;
			font-size: 1.6rem;
			color: #333333;
			padding-right: 15px;
		}
		.row-right{
			display: inline-block;
			color: #999999;
			font-size: 1.6rem;
		}
	}
	.borderN{
			@include bordered-none()
		}
</style>