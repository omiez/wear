<template>
  <div class="home">
    <table >
        <tr>
            <td class="attack-box">
                
            </td>
            <td class="protect-box">
                
            </td>
        </tr>
        <tr>
            <td class="escape-box">
                
            </td>
            <td class="improvise-box">
                
            </td>
        </tr>
    </table>
    <div class="logo">
        <span class="helper"/><img src="../assets/war_logo.svg">
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
body,html{
    height: 100%;
    margin: 0;
}
.home{
    padding: 30px;
    height: calc(100% - 60px)
}
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

        &.attack-box:hover {
            background: 98% 93% url(/img/3.d9cb56a7.jpeg);
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
}
.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}
img {
    vertical-align: middle;
}
</style>
