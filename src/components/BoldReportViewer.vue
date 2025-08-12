<template>
  <div>
    <h2>Report Viewer</h2>
    <div id="viewer"></div>
  </div>
</template>
<script>
export default {
  name: "BoldReportViewer",
  mounted() {
    window.$("#viewer").boldReportViewer({
      reportServiceUrl:"https://demos.boldreports.com/services/api/ReportViewer",
      reportPath:'~/Resources/docs/sales-order-detail.rdl'
    });
  },
};
</script>

<style scoped>
#viewer {
  min-height: 600px;
  width: 100%;
}
</style>