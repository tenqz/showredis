<template>
  <a-layout has-sider>
    <a-layout-sider
        :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
    >
      <div class="logo">
        <span>ShowRedis</span>
        <p>Keys: {{ countKeys }}</p>
      </div>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import {mapActions} from "vuex"

export default {
  name: "RedisClient",
  data() {
    return {
      countKeys: 0,
    }
  },
  mounted() {
    this.dbSize()
        .then(response => {
          this.countKeys = response.data
        })
  },
  methods: {
    ...mapActions({
      "dbSize": "dbSize"
    })
  },

}
</script>
<style>
.ant-layout-sider {
  background-color: #282828;
}

.logo {
  height: 32px;
  color: #fff;
  text-align: center;
  font-size: 2em;
}
</style>
