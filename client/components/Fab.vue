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

</style>
<script>
export default {
    name: 'fab',
    props: ['icon', 'icon_clicked'],
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
            
        }
    }
}
</script>
