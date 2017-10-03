<template>
    <div class="main-contenair">
        <google-map v-bind:class="{ open : opened }" v-bind:videos="videos" name="main" v-bind:clustered="true">
        </google-map>
        <div id="side-menu" v-bind:class="{ open : opened }">
            <md-button class="md-fab md-clean" @click="toggleMenu">
                <md-icon v-bind:class="{ open : opened }"> {{ opened ? 'keyboard_arrow_right' : 'keyboard_arrow_left' }}</md-icon>
            </md-button>
        </div>
    </div>
</template>
<script>
import GoogleMap from './GoogleMap.vue'

export default {
    components: {
        GoogleMap
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

.md-fab {
    position: absolute;
    bottom: 30px;
    margin-left: -120px;
}

.md-fab.open {
    margin-left: -28px;
}
</style>
