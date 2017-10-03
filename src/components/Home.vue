<template>
    <div>
        <google-map v-bind:videos="videos" name="example"></google-map>
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
            const uri = 'http://localhost:4000/videos'
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
</style>
