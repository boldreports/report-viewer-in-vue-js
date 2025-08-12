<template>
  <div>
    <h2>Report Viewer</h2>
    <div id="viewer"></div>
  </div>
</template>
<script>
import { onMounted } from 'vue';
export default {
  name: 'BoldReportViewer',
  setup() {
    onMounted(() => {
      window.$('#viewer').boldReportViewer({
        reportServiceUrl:"https://demos.boldreports.com/services/api/ReportViewer",
        reportPath:'~/Resources/docs/sales-order-detail.rdl'
      });
    });
  }
};
</script>
<style scoped>
#viewer {
  min-height: 600px;
  width: 100%;
}
</style>