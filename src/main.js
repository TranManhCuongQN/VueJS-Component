import { createApp } from "vue";
import App from "./App.vue";

// Trong Bootstrap 4, jQuery và Popper.js đều là các thư viện cần thiết để sử dụng một số tính năng như modal, carousel, dropdown và nhiều tính năng khác. Do đó, bạn cần phải cài đặt cả hai thư viện này trước khi sử dụng Bootstrap.
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Lưu ý: Khi sử dụng cả jQuery và Popper.js, hãy đảm bảo rằng bạn thêm jQuery trước Popper.js trong trang HTML của bạn. Nếu bạn thêm Popper.js trước jQuery, có thể xảy ra lỗi khi sử dụng các tính năng của Bootstrap.
import "../node_modules/jquery/dist/jquery.js";
import "../node_modules/popper.js/dist/popper.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import AppModal from "./components/AppModal.vue";
const app = createApp(App);
app.component("app-modal", AppModal);

app.mount("#app");
