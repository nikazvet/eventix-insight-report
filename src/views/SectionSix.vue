<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Box from "@/components/Box.vue";
import Table from "@/components/Table.vue";
export default {
  name: "SectionFour",
  components: {
    DefaultLayout,
    Box,
    Table,
  },
};
</script>

<template>
  <DefaultLayout>
    <Box><Table /></Box>
  </DefaultLayout>
</template>

<style scoped></style>
