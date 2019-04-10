// highlight.js
import Hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css' //样式文件
let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('div.code');
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}
export default Highlight