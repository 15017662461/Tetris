<template>
  <div class="box"></div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";

const props = defineProps(['type']);

const typeToColorMap = {
  0: "gray",
  1: "black",
  "-1":"black"
}
const color = computed(() => typeToColorMap[props.type] )

</script>
<style scoped>
.box {
  width: 25px;
  height: 25px;
  margin: 2px;
  background-color: v-bind(color);
}
</style>