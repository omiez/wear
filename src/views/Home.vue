<template>
  <div class="home">
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
    font-family: 'Helvetica';
    font-size:30px;
    text-transform: uppercase;

}
.home{
    padding: 30px;
    height: calc(100% - 60px);
    position: relative;

    table {
        width: 100%;
        height: 100%;
        border-collapse: collapse;
        tr {
            height: 50%;
        }
        td {
            width: 50%;
            border: 1px solid #000;
            padding: 20px;
    
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
                    background: 98% 93% url(../assets/protect/3.jpg);
                }
            }
            &.escape-box {
                text-align:left;
                vertical-align: bottom;
                &:hover {
                    background: 98% 93% url(../assets/escape/3.jpg);
                }
            }
            &.improvise-box {
                text-align:right;
                vertical-align: bottom;
                &:hover {
                    background: 98% 93% url(../assets/improvise/2.jpg);
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
            height: 80%;
        }
        .arrow {
            position: absolute;
            bottom: 50px;
            left: calc(50% - 47px);
            width: 100px;
        }
    }

}

.categories {
    height: 100%;
    background: #000;
    margin: 30px -30px 0;
}


</style>
