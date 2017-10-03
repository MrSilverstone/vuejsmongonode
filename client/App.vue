<template>
    <div>
        <header-menu v-bind:user="user"></header-menu>
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style>

</style>

<script>
import HeaderMenu from './components/HeaderMenu.vue'

export default {
    components: {
        HeaderMenu,
    },
    data() {
        return {
            user: {
                email: 'louis.mondesir@gmail.com',
                name: 'Louis Mondesir',
                profilePicture: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/17951811_10211666418031224_6621657611393351503_n.jpg?oh=b1d33b84fc793024ad6f3131f2e3b10d&oe=5A40930C'
            }
        }
    }
}
</script>