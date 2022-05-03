module.exports = {
  title: '你好，小王同学',
  base: '/',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/avatar.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  serviceWorker: true,
  themeConfig: {
    logo: '/avatar.png',  // 左上角logo
    nav: [ // 导航栏配置
      { text: '首页', link: '/' },
      { text: '知识', link: '/knowledge/' },
      { text: '工具', link: '/tools/' },
      {
        text: '个人主页',
        items: [
          //{text:'笔记', link: '/guide/ts/'},// 以 ‘/’结束，默认读取 README.md
          //{text:'其它链接', link: 'https://www.baidu.com/'} // 外部链接
          { text: 'github', link: 'https://github.com/xiao-ding-fan' },
          { text: '语雀', link: 'https://www.yuque.com/wangtongxue-gvdqc' },
          { text: 'gitee', link: 'https://gitee.com/aixuexi0134' },
          { text: '个人博客', link: 'https://xiao-ding-fan.github.io' },
        ]
      }
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 3
  }
};