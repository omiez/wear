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
                &:hover {
                    background: 98% 93% url(../assets/attack/3.jpeg);
                }
            }
            &.protect-box {
                text-align:right;
                vertical-align: top;
                &:hover {
                    background: 10%  20% / cover no-repeat url(../assets/protect/3.jpg);
                }
            }
            &.escape-box {
                text-align:left;
                vertical-align: bottom;
                &:hover {
                    background: 98% 0 / cover url(../assets/escape/1.jpg);
                }
            }
            &.improvise-box {
                text-align:right;
                vertical-align: bottom;
                &:hover {
                     background: 100%  50% / cover no-repeat url(../assets/improvise/3.jpg);
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
}


</style>
