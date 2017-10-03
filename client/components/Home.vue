<template>
    <div>
        <google-map v-bind:videos="videos" name="example">
        </google-map>
        <div id="side-menu">
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
            videos: []
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
}

.side-menu {
    position: absolute;
    z-index: 2;
    width: 50vw;
    height: auto;
}

</style>
