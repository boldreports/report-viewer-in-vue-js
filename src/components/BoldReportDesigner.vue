<template>
  <div>
    <h2>Report Designer</h2>
    <div id="designer"></div>
  </div>
</template>
<script>
import { onMounted } from 'vue';
export default {
  name: 'BoldReportDesigner',
  setup() {
    onMounted(() => {
      window.$('#designer').boldReportDesigner({
        serviceUrl: "https://demos.boldreports.com/services/api/ReportingAPI"
      });
    });
  }
};
</script>
<style scoped>
#designer {
  min-height: 600px;
  width: 100%;
}
</style>