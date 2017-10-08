<template>
    <div class="main-contenair">
        <google-map v-bind:class="{ open : opened }" v-bind:videos="videos" name="main" v-bind:clustered="true">
        </google-map>
        <div id="side-menu" v-bind:class="{ open : opened }">
            <fab icon="keyboard_arrow_left" v-on:click.native="toggleMenu"></fab>

        </div>
    </div>
</template>
<script>
import googleMap from './GoogleMap.vue'
import fab from './Fab.vue'

export default {
    components: {
        googleMap,
        fab
    },
    data() {
        return {
            videos: [],
            opened: true
        }
    },
    created() {
        this.fetchVideos()
    },

    methods: {
        fetchVideos() {
            const uri = '/videos'
            this.axios.get(uri).then(response => {
                this.videos = response.data
            })
        },
        toggleMenu() {
            this.opened = !this.opened
            this.eventHub.$emit('resize')
        }
    }
}
</script>
<style>
body {
    padding-top: 74px;
}

.google-map {
    top: 74px;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: auto;
    left: 0;
    transition-property: width;
    transition-duration: 1s;
}

.google-map.open {
    width: 50%;
}

#side-menu {
    position: absolute;
    z-index: 2;
    width: 0%;
    top: 74px;
    bottom: 0;
    right: 0;
    transition-property: width;
    transition-duration: 1s;
}

#side-menu.open {
    width: 50%;
}

.fab {
    position: absolute;
    bottom: 30px;
    margin-left: -120px;
}

.fab.open {
    margin-left: -28px;
}
</style>
