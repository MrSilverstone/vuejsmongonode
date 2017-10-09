<template>
  <div class="google-map" :id="mapName">
  </div>
</template>
<script>

export default {
  name: 'google-map',
  props: ['name', 'videos', 'clustered'],
  data() {
    return {
      mapName: this.name + "-map",
      map: null,
      markers: null
    }
  },
  mounted() {
    console.log('clustered')
    console.log(this.clustered)

    const element = document.getElementById(this.mapName)
    const options = {
      center: { lat: 22.437283125281404, lng: 151.0738546875001 },
      zoom: 3,
      minZoom: 3
    }
    this.map = new google.maps.Map(element, options);
  },
  created() {
    this.eventHub.$on('resize', this.resize)
  },
  watch: {
    videos: function(v) {
      this.markers = []

      this.videos.forEach(video => {
        const position = new google.maps.LatLng(video.latitude, video.longitude);
        const marker = new google.maps.Marker({
          position,
          youtubeId: video.youtubeId,
          icon: {
            url: `http://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`,
            scaledSize: new google.maps.Size(80, 45)
          }
        })
        this.markers.push(marker)
      })

      const clusterMarkerStyle = [
        {
          url: "images/markers/m1.png",
          textColor: "#FFFFFF",
          width: 53,
          height: 53
        },
        {
          url: "images/markers/m2.png",
          textColor: "#FFFFFF",
          width: 56,
          height: 56
        },
        {
          url: "images/markers/m3.png",
          textColor: "#FFFFFF",
          width: 66,
          height: 66
        },
        {
          url: "images/markers/m4.png",
          textColor: "#FFFFFF",
          width: 78,
          height: 78
        },
        {
          url: "images/markers/m5.png",
          textColor: "#FFFFFF",
          width: 90,
          height: 90
        }
      ]

      const markerCluster = new MarkerClusterer(this.map, this.markers, { styles: clusterMarkerStyle });
    }
  },
  methods: {
    resize() {

      const intervalId = setInterval(() => {
        google.maps.event.trigger(this.map, 'resize')
      }, 200)

      setTimeout(() => {
        clearInterval(intervalId)
      }, 1100) // 1 second animation
    }
  }
}
</script>
<style scoped>

</style>
