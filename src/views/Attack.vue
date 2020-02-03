<template>
	<div class="collection">
		<div class="title">Attack</div>
		<img class="logo-img">
		<div class="video">
			
		</div>
		<div class="caption">
			THE USS SHAW EXPLODES AFTER BEING HIT BY BOMBS
			DURING THE JAPANESE SURPRISE ATTACK ON PEARL
			HARBOR, HAWAII, IN THIS DECEMBER 7, 1941
		</div>
		<div class="collection-info">
				CLOTHING ITEMS BORN ON THE BATTLEFIELD
				<br/>WITH THE NEED FOR PRACTICAL AND
				<br/>CONVENIENT SOLUTIONS TO IMPROVE
				<br/>SOLDIERS' ASSAULT PERFORMANCE.
		</div>
		<div class="items">
			<div v-bind:key="i" v-for="i in 10" class="item"> 
				test 
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.collection {
		padding: 0 10%;
		background: #fff;
		color: #000;
		.title {
			vertical-align: top;
			float:left;
			font-family:'impact';
			font-size: 152px;
			text-transform:uppercase;
			transform-origin: center left;
            transform:scale(1.3,1)
		}

		.logo-img {
			height: 100px;
			width: auto;
			float: right;
			margin-top: 30px;
		}
		.video {
			clear:both;
			background: top / cover url(../assets/germany.jpg) no-repeat;
			width:100%;
			height:500px;
		}
		.caption {
			margin-top:30px;
			font-family:'impact';
			font-size:60px;
			line-height:1;
			text-align:left;
		}
		.collection-info {
			margin-top:30px;
			font-family:'impact';
			font-size:40px;
			line-height:1;
			text-align:left;
			color: #beb7a2;
		}
		.items {
			height: 100vh;
			text-align-last: justify;
			display:flex;
			flex-wrap: wrap;
			flex: 0 1 250px;
			width:100%;

			justify-content: space-between;
			.item {
				width: 300px;
				height:400px;
				background: #000;
				margin: 30px 5px;
			}

		}
	}
</style>