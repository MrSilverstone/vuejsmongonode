<template>
    <nav id="menu" class="navbar navbar-default  navbar-fixed-top">

        <div class="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="map"><img src="/assets/images/logo.png"></a>
        </div>

        <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <template v-if="user">
                    <li>
                        <p class=" button-upload">
                            <a href="upload_page" class="btn">Upload</a>
                        </p>
                    </li>
                </template>

                <!--			<c:if test="${userInfo != null }">
                				
                			</c:if>
                -->
                <li>
                    <p class="button-upload btn-360">
                        <a href="360vr" class="btn">360° VR Earth</a>
                    </p>
                </li>

                <li>
                    <router-link to="/">Map</router-link>
                </li>
                <li>
                    <router-link to="topic">Topic</router-link>
                </li>
                <li>
                    <router-link to="blog">Blog</router-link>
                </li>
                <li>
                    <router-link to="Contest">Contest</router-link>
                </li>
                <template v-if="user">
                    <li><img :src="user.profilePicture" class="img-responsive img-circle img-profile" /></li>
                </template>
                <template v-else>
                    <li><a href="javascript:showLoginMenu()">Signup</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    props: ['user']
}
</script>
<style>
#menu {
    min-height: 74px;
    padding-right: 24px;
    padding-left: 24px;
    background: white;
}

.navbar-brand {
    padding: 0 15px 0px 0px;
    height: 74px;
    line-height: 74px;
}

#menu {
    color: black;
}


.inner-addon {
    position: relative;
}

.left-addon .glyphicon {
    left: 0px;
}

.right-addon .glyphicon {
    right: 0px;
}

.left-addon input {
    padding-left: 30px;
}

.right-addon input {
    padding-right: 30px;
}

#menu-search {
    padding-top: 20px;
}

#menu input {
    height: 38px;
    width: 347px;
    border-radius: 19px;
    background-color: #ffffff;
    border: solid 2px #f3f3f3;
}

a.router-link-exact-active {
    font-weight: bold;
    color: #406bf1;
}

.navbar-default .navbar-nav>li>a.router-link-exact-active {
    font-weight: bold;
    color: #406bf1;
}

.navbar-default .navbar-nav>li>a:hover,
.navbar-default .navbar-nav>li>a:focus {
    color: #406bf1;
    background-color: transparent;
}


.navbar-toggle {
    /* (74px - button height 34px) / 2 = 20px */
    margin-top: 20px;
    padding: 9px 10px !important;
}

.navbar-brand>img {
    height: 100%;
    padding: 22px 22px 22px 0px;
    width: auto;
}

@media ( min-width: 768px) {
    .navbar-nav>li>a {
        /* (74px - line-height of 27px) / 2 = 23.5px */
        padding-top: 23.5px;
        padding-bottom: 23.5px;
        line-height: 27px;
    }
}

.button-upload {
    margin-top: 20px;
    margin-left: 20px;
}

.button-upload .btn:hover,
.button-upload .btn:focus {
    color: white;
}

.button-upload a {
    width: 90px;
    border-radius: 19px;
    background: #406bf1;
    color: white;
}

.btn-360>a.btn {
    width: 100%;
    color: black;
    background: #fbe300;
    font-weight: bold;
}

.btn-360 .btn:hover,
.btn-360 .btn:focus {
    color: black;
}

.side-menu-header {
    margin-top: 15px;
}

.pac-container {
    z-index: 99999;
}

.img-profile {
    padding: 15px;
    height: 74px;
    line-height: 74px;
    cursor: pointer;
}
</style>