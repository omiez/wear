<template>
  <div class="home">
    <hr class="horizone" />
    <hr class="vertical" />
    <table >
        <tr>
            <td class="attack-box">
                Attack
            </td>
            <td class="protect-box">
                Protect
            </td>
        </tr>
        <tr>
            <td class="escape-box">
                Escape
            </td>
            <td class="improvise-box">
                Improvise
            </td>
        </tr>
    </table>
    <div class="logo">
        <span class="helper"/><img class="logo-img" src="../assets/war_logo.svg">
        <img class="arrow" src="../assets/arrow.svg">
    </div>
    <div class="categories">
        <section>
            <div>
                <img class="logo-img white">
                <div class="mag-logo" />
<!--                 <svg style="filter: invert();" viewBox="0 0 100 100">
                    <image :href="require('@/assets/war_logo.svg')"></image>
                </svg> -->
                <div class="magazine-cover">
                    
                </div>
            </div>
            <div>
                
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
    src: url(../assets/fonts/Champion-HTF-Middleweight.woff2) format("woff2");
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
    background: #beb7a2;

}
.home{
    padding: 30px;
    height: calc(100% - 60px);
    position: relative;

    table {
        width: 100%;
        height: 100%;
        border: 1px solid #000;
        border-collapse: collapse;
        font-family: 'Helvetica';
        font-size:30px;
        text-transform: uppercase;

        tr {
            height: 50%;
        }
        td {
            width: 50%;
            padding: 20px;
            color: #000;
            &:hover {
                -webkit-text-stroke: 1px #000;
                color: transparent;
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
                background: -9999px -9999px / cover no-repeat url(../assets/protect/3.jpg);
                &:hover {
                    background-position: 10%  20%;
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
        .logo-img {
            vertical-align: middle;
            width: 90%;
            height: 90%;
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
            margin:30px -50px
    }
    .magazine-cover {
        clear: both;
        margin: 0 10px;
        height: 600px;
        background: top / cover url(../assets/germany.jpg) no-repeat;

    }
}


</style>
