<template>
    <div class="main-container">
        <google-map v-bind:class="{ open : opened }" v-bind:videos="videos" name="main" v-bind:clustered="true">
        </google-map>
        <div id="side-menu" v-bind:class="{ open : opened }">
            <b-row>
                <nav>
                    <ul class="side-menu-links">
                        <li>
                            <a href="#all">All</a>
                        </li>
                        <li>
                            <a href="#recent">Recent</a>
                        </li>
                        <li>
                            <a href="#best">Best</a>
                        </li>
                    </ul>
                </nav>
            </b-row>
            <h2>{{ menuTitle }}</h2>
            <div class="video-list">
                <video-card v-for="video in videoCards" :key="video._id" :video="video"></video-card>
            </div>
            <fab icon="keyboard_arrow_left" v-on:click.native="toggleMenu" v-bind:class="{ open : opened }"></fab>
        </div>
    </div>
</template>
<script>
import googleMap from './GoogleMap.vue'
import fab from './Fab.vue'
import videoCard from './VideoCard.vue'

export default {
    components: {
        googleMap,
        fab,
        videoCard
    },
    data() {
        return {
            videos: [],
            videoCards: [],
            opened: true,
            menuTitle: 'All Videos'
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
                this.videoCards = this.videoCards.concat(this.videos.slice(1, 20))
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

.main-container {
    overflow: hidden;
}

.google-map {
    top: 74px;
    bottom: 0;
    width: 100%;
    height: auto;
    left: 0;
    transition-property: width;
    transition-duration: 1s;
    position: absolute;
}

.google-map.open {
    width: 50%;
}

#side-menu {
    float: right;
    z-index: 2;
    width: 50%;
    top: 74px;
    bottom: 0;
    margin-right: -50%;
    transition-property: margin;
    transition-duration: 1s;
    height: calc(100vh - 74px);
    overflow: hidden;
}

#side-menu.open {
    margin-right: 0%;
}

.video-list {
    height: 100%;
    overflow: auto;
}

.fab {
    position: absolute;
    bottom: 30px;
    z-index: 200;
    margin-left: -120px;
    transform: rotateZ(0deg);
    transition-property: transform;
    transition-duration: 1s;
}

.fab.open {
    transform: rotateZ(180deg);
}

.side-menu-links {
    list-style: none;
}

.side-menu-links li {
    float: left;
    padding: 0 10px;
}

.side-menu-links li:first-child {
    border-left: none;
    margin-left: -10px;
}
</style>
