import { createApp, defineComponent, h } from 'vue';
import './../src/globals';

// Bold Reports scripts
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.common.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.widgets.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/bold.report-designer.min';

import App from './App.vue';
import BoldReportViewer from './components/BoldReportViewer.vue';
import BoldReportDesigner from './components/BoldReportDesigner.vue';

const routes = {
  '/': App,
  '/report-viewer': BoldReportViewer,
  '/report-designer': BoldReportDesigner
};

const currentRoute = window.location.pathname;
const RootComponent = defineComponent({
  render() {
    const ViewComponent = routes[currentRoute] || App;
    return h(ViewComponent);
  }
});

createApp(RootComponent).mount('#app');