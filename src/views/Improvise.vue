<template>
	<div class="collection">
		<div class="title">Improvise</div>
		<img class="logo-img">
		<video class="video" autoplay muted playsinline>
		<source src="../assets/improvise/improvise_compressed.mp4"  type="video/mp4">
		</video>
			

		<div class="caption">
			<p>
				U.S. WAR DEPARTMENT TRAINING FILM (1944) - SOLDIERS
				IMPROVISING IN FIELD CONDITIONS
			</p>
		</div>
		<div class="collection-info">
				<p>
					ITEMS CREATED AS AN ON-FIELD
					<br>IMPROVISATION DURING WARTIME
					<br>UNDER UNUSUAL CONDITIONS AND
					<br>BECAME CLASSIC AND POPULAR.
				</p>
		</div>
		<div class="items">
			<a :href="'improvise'+i+'.pdf'" v-bind:key="i" v-for="i in 3" :class="'item item-item item-'+i">
			<div > 
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
					"RAGLAN SLEEVE",
					"NECKTIE",
					"VICTORY ROLLS",

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
/*			background: top / cover url(../assets/improvise/improvise.mp4) no-repeat;*/
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
					background-image: url(../assets/improvise/i1.png) ;
					background-size: cover;
					&:hover {
						background-image: url(../assets/improvise/io1.png) ;
					}
				}
				&.item-2 {
					background-image: url(../assets/improvise/i2.png);
					&:hover {
						background-image: url(../assets/improvise/io2.png) ;
					}
				}
				&.item-3 {
					background-image: url(../assets/improvise/i3.png);
					&:hover {
						background-image: url(../assets/improvise/io3.png) ;
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