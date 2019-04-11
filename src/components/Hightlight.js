// highlight.js
import Hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css' //样式文件
let Highlight = {}

Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('div.code');
    console.log(blocks);
    blocks.forEach((block) => {
      Hljs.configure({useBR: false});
      Hljs.highlightBlock(block)
    })
  })
}
export default Highlight