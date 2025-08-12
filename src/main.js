import Vue from 'vue'
import './globals'



import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.common.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.widgets.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/bold.report-designer.min';

Vue.config.productionTip = false

import App from './App.vue'
import BoldReportViewer from './components/BoldReportViewer.vue'
import BoldReportDesigner from './components/BoldReportDesigner.vue'

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


const routes = {
  '/': App,
  '/report-viewer': BoldReportViewer,
  '/report-designer': BoldReportDesigner
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponent) }
})