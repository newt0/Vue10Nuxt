module.exports = {
  title: 'VueとNuxtをはじめから',
  description: 'Vue.jsとNuxt.jsを分かりやすく解説するブログです。VueやNuxtをこれから学びたい方も、既に使っているけどヒントが欲しい方も是非ご利用ください。',
  theme: require.resolve('../../'),
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#dateformat
     */

    dateFormat: 'YYYY-MM-DD',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#nav
     */

    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      // {
      //   text: '本サイト',
      //   link: 'https://vue10nuxt.netlify.app/',
      // },
      // {
      //   text: 'Location',
      //   link: '/location/',
      // },
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#footer
     */
    footer: {
      contact: [
        // {
        //   type: 'codepen',
        //   link: '/',
        // },
        // {
        //   type: 'codesandbox',
        //   link: '/',
        // },
        // {
        //   type: 'facebook',
        //   link: '/',
        // },
        // {
        //   type: 'github',
        //   link: '',
        // },
        // {
        //   type: 'gitlab',
        //   link: '/',
        // },
        {
          type: 'instagram',
          link: 'https://www.loverock.fitness/?maf=2757_2187806.36016.0..1319991443.1599996394',
        },
        {
          type: 'linkedin',
          link: 'https://www.freee.co.jp/?referral=moshimo&utm_source=moshimo&utm_medium=affiliate&utm_campaign=acct',
        },
        // {
        //   type: 'mail',
        //   link: '/',
        // },
        {
          type: 'messenger',
          link: 'https://at-engineer.jp/?maf=2520_2180365.32577.0..1319994527.1599996651',
        },
        // {
        //   type:'music',
        //   link:'/'
        // },
        {
          type: 'phone',
          link: 'https://atrrd.valuecommerce.com/resolve/4ca6afec418?u=https%3A%2F%2Fvcentry3.valuecommerce.ne.jp%2Fcgi-bin%2Fcustom%2Fmod01%2Fentry.php%3FITRACK_INFO%3D088432798002388227200913113221%26COOKIE_PATH%3D%2Fcgi-bin%2Fc0000218%2F%26COOKIE_DOMAIN%3D.valuecommerce.ne.jp%26VIEW_URL%3Dhttps%253A%252F%252Fwww.lenovo.com%252Fjp%252Fja%252Fjpad%252Fd%252Fdeals%252Fpromo-offers%26REFERRER%3DaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Z1ZXglRTMlODIlOTIlRTUlODglOUQlRTMlODIlODElRTMlODElOEIlRTMlODIlODklRTQlQjglODElRTUlQUYlQTclRTMlODElQUIzLw%26COOKIE_EXPIRES%3DThu%2C%252012%2520Nov%25202020%252011%3A32%3A21%2520GMT%26vs%3D2749380%26vp%3D884327980%26vcptn%3DAAABdIc8xoWZ1SDwytqoGNQy%26r_vcptn%3Dp%3A1079-a%3A2180370-pc%3A1563-pl%3A16210-sv%3A-ct%3A1599996741-u%3A1319995664%26_v%3D1&iti=088432798002388227200913113221&ct=1599996741253&vcptn=p%3A1079-a%3A2180370-pc%3A1563-pl%3A16210-sv%3A-ct%3A1599996741-u%3A1319995664&ref=http%3A%2F%2Flocalhost%3A8080%2Fvuex%25E3%2582%2592%25E5%2588%259D%25E3%2582%2581%25E3%2581%258B%25E3%2582%2589%25E4%25B8%2581%25E5%25AF%25A7%25E3%2581%25AB3%2F&mid=218&cid=AAABdIc8xoWZ1SDwytqoGNQy&_v=1&vf=iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW%2FAAAAMklEQVQImQEnANj%2FAAEWAP9fXgP%2FRQAI%2FwCQLZn%2F1SDw%2F8Cobv8AbsCo%2F27Sgv%2BbAAD%2FTRoTYHP05%2FIAAAAASUVORK5CYII%3D&pl=7da44j1eJNlY5BSo9z4ofjb75PaK4Vpjt3Q9cUVlOrlve7FZ14xUC550iakAxw63UYOKES5jfzmkqOfkCoq7qKFMvsD7rpwoNJ9z4oYYLzZGgeWy24bT8sjrkRGyC_JxoPyjzA2Oa3xihUxNQRUybYb3tG13VFwKgrmUsc8rL6CVx_UMnGWRtbeBweBur85b_I6KesrJtbJlpMpwoNSUC56MnGWpwoNHHACVZXnN9QhqvSVHW908fxfeLaD.SAuXjodUW2RcFgS_clrAAU.NA5.kL4FeWDv64IucMzFzJLuVr93A6P4WX3NlY5DuY25BNkOxQT13Nldj1Dxq9TxaY_IPUvRb2jS9lF4XVA4.L9.gJ0Nc1lF4A4.Kpukf4.ApLf4.WL901gJ.cFkf4.93B9lF4A4.EOQiSy.aPrRvvpw.7xG',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/vue_nuxt',
        },
        {
          type:'video',
          link:'https://www.video.unext.jp/lp/ppd_contents_h?cid=D33672&utm_medium=a_n&sid=e0TrdgW7ZLFW&adid=IID&utm_source=iid&utm_campaign=a_n'
        },
        {
          type: 'web',
          link: 'https://qiita.com/kyohei_ai',
        },
        // {
        //   type: 'youtube',
        //   link: '/'
        // }
      ],
      copyright: [
        // {
        //   text: 'Privacy Policy',
        //   link: 'https://policies.google.com/privacy?hl=en-US',
        // },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#directories
     */

    directories:[
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:slug',
      },
      {
        id: 'writing',
        dirname: '_writings',
        path: '/',
        itemPermalink: '/:year/:month/:day/:slug',
      },
    ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#frontmatters
     */

    // frontmatters: [
    //   {
    //     id: "tag",
    //     keys: ['tag', 'tags'],
    //     path: '/tag/',
    //   },
    //   {
    //     id: "location",
    //     keys: ['location'],
    //     path: '/location/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#globalpagination
     */

    globalPagination: {
      lengthPerPage: 10,
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#sitemap
     */
    sitemap: {
      hostname: 'https://example.vuepress-theme-blog.ulivz.com/'
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#comment
     */
    comment: {
      service: 'disqus',
      shortname: 'vuepress-plugin-blog',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#newsletter
     */
    // newsletter: {
    //   endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    // },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
     */
    // feed: {
    //   canonical_base: 'https://example.vuepress-theme-blog.ulivz.com/',
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summary
     */

    // summary:false,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#summarylength
     */

    summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#pwa
     */

    pwa:true,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
     */

    paginationComponent: 'SimplePagination',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#smoothscroll
     */
    smoothScroll: true
  },
}
