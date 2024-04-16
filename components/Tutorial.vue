<!-- Please remove this file from your project -->
<template>
  <div id="map-wrap" style="height: 100vh">
    <client-only>
      <l-map :zoom=zoom :center="center">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-for="(point, index) in points" :key="index" :lat-lng="point.latlng">
          <l-popup>{{ point.text }}</l-popup>
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
import geoPoint from '~/api/point.js'

export default {
  name: 'NuxtTutorial',
  data() {
    return {
      zoom: 13,
      center: [49.143592,34.209364],
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution: ''
    };
  },
  computed: {
    points() {
      return geoPoint.points;
    }
  },
}
</script>
