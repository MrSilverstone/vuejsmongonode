<template>
    <div class="col-md-6" :id="video._id">
        <div class="thumbnail">
            <a :href="null" target="_self">
                <img :src="thumbnailUrl" alt="" style="width: 100%" />
            </a>
            <div class="caption">
                <div class="row">
                    <div class="col-md-2 col-sm-2 hidden-xs video-preview-desc">
                        <a :href="null">
                            <img :src="video.user.picture" class="img-responsive img-circle" alt="Cinque Terre">
                        </a>
                    </div>

                    <div class="col-xs-12 col-sm-10 col-md-10">
                        <div class="row">
                            <div class="col-md-10 col-xs-10">
                                <h4 style="text-overflow: ellipsis; white-space: nowrap; max-width: 100%; overflow: hidden;">{{ video.title }}</h4>
                            </div>
                            <div class="col-md-2 col-xs-2 text-right" style="color: #406bf1;">
                                <i onclick="${onClickLink}" class="material-icons like-btn">favorite</i>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-10 col-xs-10">
                                <p style="color: #747474; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; overflow: hidden;">
                                    <i class="material-icons" style="font-size: 14px; margin-right: 5px;">place</i>
                                    17 Rue emile dubois 75014 Paris
                                </p>
                            </div>
                            <div class="col-md-2 col-xs-2 text-right like-count" style="color: #406bf1;">
                                <p>{{ this.video.likeCount }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.video-preview {
    padding: 10px;
}

.thumbnail {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: none;
}

.side-menu-nav {
    list-style: none;
}

.side-menu-nav li {
    display: inline;
    padding: 0 10px;
    border-left: solid 1px black;
}

.side-menu-nav li:first-child {
    border-left: none;
    margin-left: -10px;
}

.side-menu-nav li a {
    color: black;
    text-align: center;
    text-decoration: none;
}

.side-menu-nav li a:hover {
    cursor: pointer;
}

.side-menu-nav>.active>a {
    font-weight: bold;
    color: #406bf1;
}

.thumbnail .caption {
    padding-left: 0;
    padding-right: 0;
}

.no-gutter {
    margin-right: -4px;
    margin-left: -4px;
    padding-right: 15px;
    padding-left: 15px;
}

.no-gutter>[class*="col-"] {
    padding-right: 4px;
    padding-left: 4px;
}

.like-btn {
    cursor: pointer;
}
</style>
<script>
export default {
    name: 'video-card',
    props: ['video'],
    data() {
        return {
            thumbnailUrl: ''
        }
    },
    methods: {

    },
    mounted() {
        this.thumbnailUrl = `http://img.youtube.com/vi/${this.video.youtubeId}/mqdefault.jpg`
    }
}
</script>
