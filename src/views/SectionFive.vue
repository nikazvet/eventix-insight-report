<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Box from "@/components/Box.vue";
import Devices from "@/components/Devices/Devices.vue";
import Tablet from "@/components/Devices/Tablet.vue";
import Desktop from "@/components/Devices/Desktop.vue";
export default {
  name: "SectionFive",
  components: {
    DefaultLayout,
    Box,
    Devices,
    Desktop,
    Tablet,
  },
};
</script>

<template>
  <DefaultLayout>
    <!-- <Tablet />
    <Desktop /> -->
    <Devices />
  </DefaultLayout>
</template>

<style scoped></style>
