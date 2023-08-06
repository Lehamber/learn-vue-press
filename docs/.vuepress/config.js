module.exports = {
    title: 'Hello VuePress 111',
    description: 'Just playing around',
    base: '/',
    // head: [
    //     ['link', { rel: 'icon', href: '/assets/logo.png' }]
    // ],
    evergreen: true,
    themeConfig: {
        // navbar: false,

        smoothScroll: true,

        lastUpdated: 'Last Updated', // string | boolean

        nav: [
            { text: 'Home', link: '/' },
            { text: '指南', link: '/guide-1/' },
            { text: '插件', link: '/plugins/' },
            {
                text: 'Languages1',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            {
                text: 'Languages2',
                items: [
                    {
                        text: 'Group1', items: [

                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' }
                        ]
                    },
                    {
                        text: 'Group2', items: [
                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' }
                        ]
                    }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],

        displayAllHeaders: true, // 默认值：false

        // sidebar: 'auto', // 根据当前页面的 1 2 3 级标题去生成侧边栏。

        sidebar: {
            '/guide-1/': [
                {
                    title: '指南',   // 必要的
                    // path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2,    // 可选的, 默认值是 1
                    children: [
                        '/guide-1/introduce',
                        '/guide-1/kuai-su-shang-shou',
                        '/guide-1/mu-lu-jie-gou'

                    ]
                },
                {
                    title: '深入',
                    // path: '/guide-1/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    sidebarDepth: 2,
                    children: [
                        // '/guide-1/introduce',


                        '/guide-1/deep-into/mark-down',
                        '/guide-1/deep-into/quan-ju-ji-suan',
                        '/guide-1/deep-into/front-matter',
                        '/guide-1/deep-into/mark-down',
                        '/guide-1/deep-into/quan-ju-ji-suan',
                        '/guide-1/deep-into/yong-jiu-lian-jie',
                    ]
                }
            ],


            '/': [
                '',

            ]
        },

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/lehamber',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',

        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '查看源码'
    }
}