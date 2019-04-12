<template>
  <div class="m-about-page">
      <div class="m-header">
        <div class="m-container">
          <div class="m-img-box">

          </div>
          <div class="m-content-box">
            <p>
              <span class="m-nickname">花粥</span>
              <span class="m-jopname">设计师</span>
            </p>
            <p>
               <span class="m-date">2018年10月10日</span>
            </p>
          </div>
        </div>
      </div>
      <div class="m-body">
        <div class="m-block">
          <h2 class="m-title">iView 的故事</h2>
          <div>
            <p>毕业四年以来，我一直觉得自己是一个很幸运的人，幸运参与过创业，幸运一路有大牛带，幸运开源了 iView 项目。</p><p>2016 年初，我还是一名普通的前端工程师，那时候还是 Vue.js 1.x 的时代，知名度也远不如现在，在大部分人眼中，Vue.js 就是一个轻量级的 Angular。</p><p>我所在的公司是做 to B 业务的，与大部分公司一样，那时主导 jQuery，把 Vue.js 引入团队乃至整个公司，是一件很不易的事，因为不是你自己在用，你要说服所有人用，现在看来，当初的决定是很正确的。如果你有兴趣，欢迎阅读扩展阅读 1，那篇文章详细介绍了我的 Vue.js “推广史”。</p><p>到了 16 年 7 月，我们团队已经完全认可了 Vue.js + Webpack 的技术栈，一直践行至今。一个偶然的机会，公司举办了一个创新大赛，作为可视化团队，我提议做一套自己的组件库。当初也只是一个想法，抱着试试看的态度就报名了。比赛的目的只是呼吁大家创新，后续就没有动作了，但是我没有就此放下，从那时起，几乎全职开发 iView，两年半来，我每天的工作基本就是维护 iView。不得不说，一个成功的开源项目，必须有 leader 的认可和公司的支持，缺一不可。</p><p>那时不比现在，优秀的 Vue.js 组件库非常少，文献更是少得可怜。一开始做 iView 没什么头绪，只是规划了一张 MindNode 脑图，罗列了一期要做的所有组件。这里有一个插曲，因为这张 todo 的脑图有贴在 GitHub 的 Readme，以至于一开始大部分 issues 都是问这个脑图是用什么软件做的，因为做的很好看，索性写了个提问须知，注明了脑图是用 MindNode 制作的。</p><p>起初对开源工作不是很了解，连一个编译工程都搭不起来，想了数日也搞不定。与大部分人一样，一开始也是要参考其它人的开源项目（就像现在很多人参考 iView 是一样的），那是我参考 Vux（移动端的 Vue.js 组件库，当时有 6k star），向作者捐了杯咖啡钱，顺便加了好友（因为是支付宝捐赠，能加好友），请教了工程的问题，这才一步步搭起来，现在想想真是幸运。</p><p>万事开头难，把地基搭好，剩下的都是添砖加瓦的事。差不多 16 年底，iView 一期完成了（43 个组件），也发布了第一个正式版，有了第一批用户（当然，主要还是自己公司），然而在那个时候，又做了一个在今天看来稍晚但正确的决定——支持 Vue.js 2。</p><p>虽然是开源项目，但主要还是先满足自己团队和公司的需求，那个时候所有的项目都是 Vue.js 1.x 的，还没有用 Vue.js 2，但 2.x 已经发布有一段时间了，以至于在 2017 年初，GitHub 有很多 issues 问什么时候支持 2.x。很长一段时间没有升级到 2.x，主要因为要支持公司的项目，而我当时也觉得升级到 2.x 是一个很耗时的工作，就没有支持。后来，有一个人提交了一个非常大的 PR，将所有组件都支持了 2.x，而且只用了一个周末的时间。这件事让我意识到支持 Vue.js 2.x 的重要性了，于是花了 2 周时间研究，并升级到了 2.x（那个 pr 没有直接合并，而是参考，因为很多地方有 bug）。接下来的几个月，都在不断维护新的 iView，使用者也不断增多，社区又重新活跃起来。</p><p>如果当初没有及时转型（现在看来仍然是晚了），还在一味地维护 Vue.js 1.x 版本，那 iView 也许早就完了。有了好的开头，就要不放弃，不抛弃，坚持做下去，认真处理每一个 PR，因为质量是一个开源组件库最重要的，但并不是每一个 PR 都适合 merge，即使作者付出了很多时间提交这个 PR，也会有质量问题。</p><p>有了不错的口碑，在 2018 年继续完善，目前已经是同类产品里功能最丰富的组件库，而且在 18 年的 7 月 28 日（iView 两周年）成功举行了 3.0 发布会，一切都在朝着更好的一面发展着......</p><p>这就是我的 iView 开源的故事，一个成功的开源项目，或许带有一点小幸运，因为如今的同类开源产品已经数不胜数了，不过确实有很多值得分享的地方，如果你打算做一个开源项目，希望下面的些许经验能够帮助到你。</p>
          </div>
        </div>
        <div class="m-block">
          <h2 class="m-title">iView 的故事</h2>
          <div>
            <p>
              服务器：阿里云  我的个人博客之——阿里云空间选择  前往阿里云官网购买>>
            </p>
          </div>
        </div>
      </div>
  </div>
</template>
<style lang='scss'>
.m-about-page{
  max-width: 900px;
  margin: 0 auto;
  .m-header{
    height:250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background:#eee;
    .m-container{
      height: 150px;
      display: flex;
      flex-direction: row;
      .m-img-box{
        flex: 0 0 150px;
        height: 150px;
        background:#888;
        img{
          max-width: 100%;
          max-height: 100%;
        }
      }
      .m-content-box{
        flex: 1;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content:flex-end;
        p{
          margin-top: 10px;
          .m-nickname{
            font-size: 24px;
          }
          .m-jopname{
            margin-left: 5px;
          }
        }
      }
    }
  }
  .m-body{
    margin-top: 30px;
    .m-block{
      margin-bottom: 10px;
    }
  }
}
</style>

