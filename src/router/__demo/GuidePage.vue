<template>
  <div class="margin-bottom-xxl">
    <h1>Wellcome to SPA-KIT</h1>
    <h3>
      Tải về:
      <a href="https://github.com/001123/vue-spa-kit/releases" target="_blank">https://github.com/001123/vue-spa-kit/releases</a>
    </h3>
    <h2>Hướng dẫn</h2>
    <blockquote>Đọc kỹ hướng dẫn sử dụng, README.MD ở các thư mục trước khi dùng</blockquote>
    <div>
      <h3>Cấu trúc thư mục src</h3>
      <pre class>
        ├── api <mark> Xử lý API, Bắt sự kiện khi request trước và sau khi call </mark>
        |  ├── afterRequestError.js
        |  ├── afterRequestResolve.js
        |  ├── beforeRequestConfig.js
        |  ├── beforeRequestError.js
        |  ├── index.js <mark> Tạo exprot instance <b>Api</b> từ Axios để call API</mark>
        |  └── _mock <mark> Tạo fake data local cho components</mark>
        |     ├── fake.js
        |     └── test.json
        ├── App.vue <mark> Components ông nội, chứa router</mark>
        ├── components
        |  ├── global <mark> Các components trong thư mục này không cần import, tên file sẽ là tên components <b>*</b>Lưu ý nên đặt tên có bắt đầu bằng <i><b>Global</b></i> để phân biệt với local components </mark>
        |  |  └── GlobalHelloWorld.vue
        |  ├── page <mark> Các component sẽ import ở các router page</mark>
        |  └── demo <mark> Các component dùng để demo, text chức năng, thư viện mới.</mark>
        ├── constants.js <mark><b> CHỨA CONSTANTS ĐỂ CONFIG APP. Không `hardcode` ! </b></mark>
        ├── globalComponents.js <mark> File config webpack require.context để TỰ ĐỘNG import các components trong thư mục `components/global` </mark>
        ├── i18n <mark> Config cho đa ngôn ngữ </mark>
        ├── library <mark> Các library custom cho app </mark>
        |  └── screen-loading
        |     ├── index.js
        |     ├── Loading.vue
        |     └── README.MD
        ├── main.js <mark> Entry của app, config thêm các thư viện. </mark>
        ├── registerServiceWorker.js <mark>Dùng để khai báo service worker </mark>
        ├── router <mark> Thư mục quản lý router </mark>
        |  ├── _router.js <mark> Khai báo, thêm các sự kiện cho router</mark>
        |  ├── _routes.js <mark> Danh sách các routes hiện có của app. * path, name NÊN import từ <b>constants.js</b> </mark>
        |  └── demo <mark> Page để demo, test các thư viện </mark>
        ├── scss
        |  ├── App.scss <mark>Import các thư viện</mark>
        |  ├── config.scss <mark>Config các css variables của base, overwrite css các thư viện</mark>
        |  └── variables.scss <mark>Các biến có trong design</mark>
        ├── store <mark>Quản lý state cho app bằng VueX</mark>
        |  ├── cancelRequestStore.js <mark>Module để cancel các quest khi router change</mark>
        |  └── index.js <mark>Thêm các modules, quản lý global state</mark>
        └── utils
          └── index.js <mark>Thêm các utils funtions cần dùng cho app, tránh lặp code</mark>
      </pre>
    </div>

    <div>
      <h1>Concepts của SPA KIT</h1>

      <h2>Các features kit đã tạo</h2>
      <div>
        <ul>
          <li>Global components sử dụng Component tại các page mà không cần import.</li>
          <li>Router lazyload giảm kích thước bundle</li>
          <li>Cấu trúc thư mục để phát triển, mở rộng app.</li>
          <li>Loading mỗi khi request được gọi (Axios interceptor).</li>
          <li>Config ESLINT, Pretier, babels</li>
        </ul>
      </div>

      <h2>Styling</h2>
      <div>
        <p>Mặc định của trình duyệt, checkout các nhánh để sử dụng các thư viện khác như bootstrap, vuetify, buefy, ...</p>
      </div>

      <h2>Webpack</h2>
      <div>
        <p>
          Sử dụng các plugin
          <b>BundleAnalyzerPlugin</b> để xem thống kê về kích thức app khi build.
        </p>
        <p>
          Chạy lệnh
          <b>yarn stats</b> để xem phân tích của app sau khi build
        </p>
        <p>
          Để thêm các config khác tham khảo document của vue cli tại
          <a href="https://cli.vuejs.org/guide/webpack.html" target="_blank">đây</a>
        </p>

        <p>* Lưu ý khi import nên dùng alias thay vì absolute path</p>
        <p>
          Alias cho thư mục
          <b>src</b> là
          <b>@</b>
        </p>
        <p>Ví dụ:</p>
        <pre>
          import Api from '../../api' // <mark> Không nên </mark>
        </pre>
        <pre>
          import Api from '@/api' // <b style="color:green"> Nên </b>
        </pre>
      </div>

      <h2>Visual code</h2>
      <div>
        <p>
          Để hỗ trợ dev nhanh và thuận tiện hơn, các extensions sẽ cần có sẽ nằm trong file
          <b>.vs-code/extensions.json</b>
        </p>
        <p>
          Tìm hiểu thêm về cách tạo gợi ý extensions cho visual code tại
          <a href="https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions" target="_blank">đây</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
