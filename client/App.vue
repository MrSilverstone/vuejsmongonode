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

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>

<script>
import Vue from 'vue'
import HeaderMenu from './components/HeaderMenu.vue'

const eventHub = new Vue() // Single event hub

Vue.mixin({
  data: function() {
    return {
      eventHub: eventHub
    }
  }
})


export default {
    components: {
        HeaderMenu,
    },
    methods: {
        auth() {
            const uri = '/users/59daeb3e11e3d143f0d50cac'
            this.axios.get(uri).then(response => {
                this.user = response.data;
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