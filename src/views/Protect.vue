<template>
	<div class="collection">
		<div class="title">Protect</div>
		<img class="logo-img">
		<video class="video" autoplay muted playsinline>
		<source src="../assets/protect/protect_compressed.mp4"  type="video/mp4">
		</video>
			

		<div class="caption">
			<p>
				CHILDREN IN A VANCOUVER, BRITISH COLUMBIA SCHOOL
				ARE TAUGHT HOW TO USE GAS MASKS DURING 1942
			</p>
		</div>
		<div class="collection-info">
				CLOTHING ITEMS CREATED TO PROTECT
				<br>SOLDIERS' BODY PARTS FROM SABOTAGE,
				<br>COLD, HEAT AND LIGHT EXPOSURE
				<br>DURING MILITARY OPERATIONS IN HARSH
				<br>TERRAIN AND WEATHER.
		</div>
		<div class="items">
			<a :href="'protect'+i+'.pdf'" v-bind:key="i" v-for="i in 8" :class="'item item-'+i">
			<div> 
				<span class="item-caption">{{items[i-1]}}</span>
			</div>
			</a>
			<!-- <div class="item placeholder"></div> -->
		</div>
		<div class="footer">
			<span>MY TARGETS</span>
			<span>MY CART</span>
			<div class="mag-logo"></div>
		</div>
	</div>

</template>

<script>
	module.exports = {
		data: function() {
			return {
				items: [
					"USHANKA",
					"BOMBER JACKET",
					"AVIATOR SUNGLASSES",
					"DUBON COAT",
					"DUFFLE COAT",
					"AVIATOR HAT",
					"TRENCH COAT",
					"HIGH AND TIGHT HAIRCUT"

				]
			}
		}
	}

</script>

<style scoped lang="scss">
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
			margin: 30px;

		}
		.video {
			clear:both;
/*			background: top / cover url(../assets/protect/protect.mp4) no-repeat;*/
			width:100%;
			height:500px;
			object-fit: cover;
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
			display:flex;
			flex-wrap: wrap;
			width:100%;
			padding-bottom:30px;
			justify-content: space-between;

			.item {
				transition: all .2s ease-in-out;
				&:hover {transform-origin: center center;
					transform:scale(1.03,1.03);
					;
				}
				&::before {
					content: '';
					display: inline-block;
					position: absolute;
					right: 0;
					top:0;
					width: 50px;
					height:50px;
					background: right top / contain url(../assets/tartget.svg) no-repeat
				}
				&.placeholder {
					background: transparent;
					opacity: 0;

				}
				.item-caption {
					position: absolute;
					top:calc(100% + 10px);
					width: 100%;
					left: 0;
					text-align:left;
					font-family: impact;
				}
				width: 300px;
				height:400px;
				background: #000;
				margin: 30px 12px;
				position:relative;
				background-size: cover;
				&.item-1 {
					background-image: url(../assets/protect/p1.png) ;
					background-size: cover;
					&:hover {
						background-image: url(../assets/protect/po1.png) ;
					}
				}
				&.item-2 {
					background-image: url(../assets/protect/p2.png);
					&:hover {
						background-image: url(../assets/protect/po2.png) ;
					}
				}
				&.item-3 {
					background-image: url(../assets/protect/p3.png);
					&:hover {
						background-image: url(../assets/protect/po3.png) ;
					}
				}
				&.item-4 {
					background-image: url(../assets/protect/p4.png);
					&:hover {
						background-image: url(../assets/protect/po4.png) ;
					}
				}
				&.item-5 {
					background-image: url(../assets/protect/p5.png);
					&:hover {
						background-image: url(../assets/protect/po5.png) ;
					}
				}
				&.item-6 {
					background-image: url(../assets/protect/p6.png);
					&:hover {
						background-image: url(../assets/protect/po6.png) ;
					}
				}
				&.item-7 {
					background-image: url(../assets/protect/p7.png);
					&:hover {
						background-image: url(../assets/protect/po7.png) ;
					}
				}
				&.item-8 {
					background-image: url(../assets/protect/p8.png);
					&:hover {
						background-image: url(../assets/protect/po8.png) ;
					}
				}
			}

		}

		.footer {
			background: #000;
			height:100px;
			width: 100%;
			left: 0;
			position: absolute;
			color:#fff;
			text-align:left;
			vertical-align: middle;
			font-family: 'champion';
			font-weight: lighter;
			span {
				vertical-align: middle;
    line-height: 100px;
    margin-left:50px;
			}
			.mag-logo {
    width: 200px;
    height: 100px;
    display:inline-block;
    float: right;
				background: center / cover url(../assets/warmag.svg) no-repeat;
		}

		}
	}
</style>