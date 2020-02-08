<template>
  <div class="home">
    <hr class="horizone" />
    <hr class="vertical" />
    <table >
        <tr>
            
            <td class="attack-box">
                Attack
                <router-link to="attack"/>
            </td>
            
            
            <td class="protect-box">
                Protect
                <router-link to="protect"/>
            </td>
            
        </tr>
        <tr>
            <td class="escape-box">
                Escape
                <router-link to="escape"/>
            </td>
            <td class="improvise-box">
                Improvise
                <router-link to="improvise"/>
            </td>
        </tr>
    </table>
    <div class="logo">
        <span class="helper"/><img class="logo-img" >
        <img class="arrow" src="../assets/arrow.svg">
    </div>
    <div class="categories">
        <section>
            <div>
                <img class="logo-img white">
                <div class="mag-logo"> </div>
<!--                 <svg style="filter: invert();" viewBox="0 0 100 100">
                    <image :href="require('@/assets/war_logo.svg')"></image>
                </svg> -->
                <router-link to="article">
                <div class="magazine-cover">
                    <div class="subtitle">
                        Made in
                    </div>
                    <div class="title">
                        Nazi Germany
                    </div>
                    <div class="catagory-name">
                        Attack
                    </div>
                </div>
               

                <div class="magazine-content">
                    <div class="magazine-column">
                        <div class="magazine-article article-1">
                            <div class="catagory-name">
                                 Improvise
                            </div>
                        </div>
                        <div class="magazine-article article-2">
                            <div class="catagory-name">
                                 Improvise
                            </div>
                        </div>
                    </div>
                    <div class="magazine-column">
                        <div class="magazine-article article-3">
                            <div class="catagory-name">
                                 Improvise
                            </div>
                        </div>
                        <div class="magazine-article article-4">
                            <div class="catagory-name">
                                 Attack
                            </div>
                        </div>
                         <div class="magazine-article article-5">
                            <div class="catagory-name">
                                 Protect
                            </div>
                        </div>

                    </div>
                    
                    
                </div>
                </router-link>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'home',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style lang="scss">
@font-face {
    font-family: 'Champion';
    font-weight: bold;
    src: url(../assets/fonts/Champion-HTF-Heavyweight.woff2) format("woff2");
}
@font-face {
    font-family: 'Champion';
    font-weight: normal;
    src: url(../assets/fonts/Champion-HTF-Middleweight.woff2) format("woff2");
}
@font-face {
    font-family: 'impact';
    font-weight: normal;
    src: url(../assets/fonts/Impact.woff2) format("woff2");
}
@font-face {
    font-family: 'Champion';
    font-weight: lighter;
    src: url(../assets/fonts/Champion-HTF-Lightweight.woff2) format("woff2");
}
@font-face {
    font-family: 'Helvetica';
    src: url(../assets/fonts/Helvetica.woff2) format("woff2");
}

body,html{
    height: 100%;
    margin: 0;
    font-weight: lighter;
    background: #000;

}
a { 
    color: #000;
}
.logo-img {
    vertical-align: middle;
    width: 90%;
    height: 90%;
    content:url("../assets/war_logo.svg");
    width: inherit;
}
.home{
    padding: 30px;
    height: calc(100% - 60px);
    position: relative;
        background: #beb7a2;

    table {
        width: 100%;
        height: 100%;
        border: 1px solid #000;
        border-collapse: collapse;
        font-weight:lighter;
        font-family: 'champion';
        font-size:30px;
        text-transform: uppercase;

        tr {
            height: 50%;
        }
        td {
            width: 50%;
            padding: 20px;
            color: #000;
            position:relative;

            &:hover {
                -webkit-text-stroke: 1px #000;
                color: transparent;
            }
            & > a {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
            }

            &.attack-box {
                text-align:left;
                vertical-align: top;
                background: -9999px -9999px / cover no-repeat url(../assets/attack/3.jpeg);
                &:hover {
                   background-position: 98% 93% ;
                }

            }
            &.protect-box {
                text-align:right;
                vertical-align: top;
                background: -9999px -9999px / cover no-repeat url(../assets/protect/9.jpg);
                &:hover {
                    background-position: 0  40%;
                }
            }
            &.escape-box {
                text-align:left;
                vertical-align: bottom;
                background: -9999px -9999px / cover no-repeat url(../assets/escape/1.jpg);
                &:hover {
                    background-position: 98% 0;
                }
            }
            &.improvise-box {
                text-align:right;
                vertical-align: bottom;
                background: -9999px -9999px / cover no-repeat url(../assets/improvise/3.jpg);
                &:hover {
                     background-position: 100%  50%;
                }
            }
        }
    }
    .logo {
        left: 0;
        position: absolute;
        height: 100%;
        display: block;
        width: 100%;
        top: 0;
        pointer-events: none;
        .helper {
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }

        .arrow {
            position: absolute;
            bottom: 50px;
            left: calc(50% - 47px);
            width: 100px;
        }
    }

    hr.horizone {
        position: absolute;
        width: 100%;
        height: 1px;
        border: none;
        top: calc(50% - 9px);
        left: 0;
        background: #000;
    }
    hr.vertical {
        position: absolute;
        width: 1px;
        height: 100%;
        border: none;
        left: 50%;
        top: -9px;
        background: #000;
    }

}

.categories {
    height: calc(100% + 60px);
    background: #000;
    margin: 30px -30px 0;

    .logo-img.white {
         content:url(../assets/war_logo.svg);
         filter: invert(100%);
         height: 120px;
         display:inline-block;
         float:left;
         margin:30px

    }
    .logo-img.white + div {
            background: 61% 52.1% / auto 280% url(../assets/mag_logo.svg) no-repeat;
            height: 120px;
            width:332px;
            display:inline-block;
            float:left;
            margin:30px -50px;
            z-index: 20;
            position: relative;
    }
    .magazine-cover {
        clear: both;
        margin: 0 10px;
        height: 90vh;
        position: relative;
        background: top / cover url(../assets/germany.jpg) no-repeat;
        transition: all .2s ease-in-out;
                &:hover {transform-origin: center center;
                    transform:scale(1.01,1.01);
                    ;
                }
        overflow: hidden;
        & > div.subtitle {
            position: absolute;
            bottom: 100px;
            left: 50px;
            color: #ffffff;
            font-size: 100px;
            font-family: 'champion';
            font-weight: bold;      
            padding: 20px;
            text-transform: uppercase;
        }
        & > div.title {
            position: absolute;
            bottom: 0;
            left: 50px;
            background:#000;
            color: #ff0000;
            font-size: 100px;
            font-family: 'champion';
            font-weight: bold;      
            padding: 0 20px;
        }
        & > div.catagory-name {
            position: absolute;
            bottom: 0;
            right: 0;
            background:#fff;
            color: #000;
            font-size: 25px;
            font-family: 'impact';
            padding: 10px 20px;
            text-transform: uppercase;
            transform-origin: center right;
            transform:scale(1.3,1)
        }
    }
    .magazine-content {
            background: #000;
    }
    .magazine-column {
        width: 50%;
        display: inline-block;
        vertical-align: top;

    }
    .magazine-article {
        transition: all .2s ease-in-out;
                &:hover {transform-origin: center center;
                    transform:scale(1.01,1.01);
                    ;
                }
        height: 400px;
        margin: 20px 10px;
        background: top / cover url(../assets/germany.jpg) no-repeat;
        position:relative;
        & > div.catagory-name {
            position: absolute;
            bottom: 0;
            right: 0;
            background:#fff;
            color: #000;
            font-size: 25px;
            font-family: 'impact';
            padding: 10px 20px;
            text-transform: uppercase;
            transform-origin: center right;
            transform:scale(1.3,1)
        }
    }
    .article-1 {
        background: top / 100% url(../assets/magazine/wEar3.png) no-repeat;
        height:1000px;
    }
    .article-2 {
        background: top / 100% url(../assets/magazine/wEar.png) no-repeat;
        height:600px
    }
    .article-3 {
        background: top / 100% url(../assets/magazine/wEar1.png) no-repeat;
        height:500px
    }
    .article-4 {
        background: top / 100% url(../assets/magazine/wEar2.png) no-repeat;
        height:700px
    }
    .article-5 {
        background: top / 100% url(../assets/magazine/wEar4.png) no-repeat;
        height:480px
    }
}


</style>
