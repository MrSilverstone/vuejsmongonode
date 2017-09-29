<template>
  <div>
    <h1>Map</h1>
  </div>
</template>
<script>

export default {
  data() {
    return {
      item: {}
    }
  },
  methods: {
    addItem() {
      let uri = 'http://localhost:4000/items/add';
      this.axios.post(uri, this.item).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>