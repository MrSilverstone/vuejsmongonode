<template>
    <div class="fab ripple-effect" @click="ripple">
        <i class="material-icons">{{ icon }}</i>
        <span class='ink' v-bind:class="{ animate: pressed }"></span>
    </div>
    </div>
</template>
<style>
.fab {
    overflow: hidden;
    width: 56px;
    height: 56px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
}

.fab i:hover {
    background-color: rgba(0, 0, 0, 0.1)
}

.fab i {
    color: #406bf1;
    margin: auto;
    padding: 16px;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.15s ease-in-out;
    -o-transition: all 0.15s ease-in-out;
    -moz-transition: all 0.15s ease-in-out;
    -webkit-transition: all 0.15s ease-in-out;
}

.ink {
    display: block;
    position: absolute;
    pointer-events: none;
    border-radius: 50%;

    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);

    background: #fff;
    opacity: 1;
}

.ink {
    border-radius: 50%;
}

.ink.animate {
    -webkit-animation: ripple .5s linear;
    -moz-animation: ripple .5s linear;
    -ms-animation: ripple .5s linear;
    -o-animation: ripple .5s linear;
    animation: ripple .5s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

@-webkit-keyframes ripple {
    100% {
        opacity: 0;
        -webkit-transform: scale(2.5);
        transform: scale(2.5);
    }
}

@-moz-keyframes ripple {
    100% {
        opacity: 0;
        -moz-transform: scale(2.5);
        transform: scale(2.5);
    }
}

@-ms-keyframes ripple {
    100% {
        opacity: 0;
        -ms-transform: scale(2.5);
        transform: scale(2.5);
    }
}

@-o-keyframes ripple {
    100% {
        opacity: 0;
        -o-transform: scale(2.5);
        transform: scale(2.5);
    }
}
</style>
<script>
export default {
    name: 'fab',
    props: ['icon'],
    data() {
        return {
            pressed: false,
            rippleStyle : {
                top: '0px',
                left: '0px'
            }
        }
    },
    methods: {
        ripple(e) {
            this.pressed = true;

            console.log(e)

            var x = e.pageX - rippler.offset().left - ink.width() / 2;
            var y = e.pageY - rippler.offset().top - ink.height() / 2;


            // set .ink diametr
            if (!ink.height() && !ink.width()) {
                var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
                ink.css({ height: d, width: d });
            }

            // get click coordinates


            // set .ink position and add class .animate
            ink.css({
                top: y + 'px',
                left: x + 'px'
            }).addClass("animate");
        }
    }
}
</script>
