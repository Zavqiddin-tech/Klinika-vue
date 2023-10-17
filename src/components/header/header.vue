<template>
    <div class="header">
        <header-top />
        <div class="container">
            <div class="header-center">
                <header-nav />
                <header-bottom />
            </div>
        </div>
        <div class="header-scroll">
            <div>
                <img src="@/assets/logo/nav-logo.png" alt="">
            </div>
            <header-bottom />
        </div>
    </div>
</template>


<script setup>
import headerTop from './header-comp/header-top.vue'
import headerNav from './header-comp/header-nav.vue'
import headerBottom from './header-comp/header-bottom.vue';

window.addEventListener('scroll', function() {
    let header = document.querySelector(".header")
    header.classList.toggle('sticky', window.scrollY > 0)
})
</script>
<style lang="scss">
    .header {
        width: 100%;
        position: fixed;
        z-index: 100;
        background-color: #fff;
        &.sticky {
            .header-top, .header-center {
                display: none;
            }
            .header-scroll {
                display: flex;
            }
        }
        .header-scroll {
            display: flex;
            align-items: center;
            justify-content: center;
            display: none;
            .header-bottom {
                width: 70%;
            }
        }
        &-center {
            padding-top: 16px;
        }
        &-banner {
            padding-top: 36px;
            background-color: #F9FAFF;;
        }
    }
</style>