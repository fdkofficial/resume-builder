<template>
  <router-view />

</template>
<script>
import { ref } from 'vue';
// import CustomInfo from './components/Includes/CustomInfo.vue'
export default ({
  // components: {
  //   CustomInfo
  // },

  setup() {
    let Path = ref(window.location.pathname);
    const visibleLeft = ref(false);
    const key = ref('')
    return { visibleLeft, Path, key }
  }
})
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
</style>