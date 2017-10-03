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
.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
}

.fade-enter-active {
    transition-delay: .25s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>

<script>
import HeaderMenu from './components/HeaderMenu.vue'

export default {
    components: {
        HeaderMenu,
    },
    methods: {
        auth() {
            const uri = '/users/59d338c0f35fa629e02d4f9d'
            this.axios.get(uri).then(response => {
                this.user = response.data;
                console.log(this.user)
            })
        }
    },
    data() {
        return {
            user: null
        }
    },
    created() {
        this.auth()
    }
}
</script>