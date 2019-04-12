// highlight.js
import Hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css' //样式文件
let Highlight = {}
Highlight.install = function (Vue) {
  Vue.directive('highlight',{
    inserted:(el) =>{
      let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block) => {
        Hljs.highlightBlock(block)
      })
    },
    componentUpdated: (el) =>{
      let blocks = el.querySelectorAll('pre code');
      blocks.forEach((block) => {
        Hljs.highlightBlock(block)
      })
    }
  })
}
export default Highlight