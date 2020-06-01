# @vuepress/theme-blog

[![NPM version](https://badgen.net/npm/v/@vuepress/theme-blog)](https://npmjs.com/package/@vuepress/theme-blog) [![NPM downloads](https://badgen.net/npm/dm/@vuepress/theme-blog)](https://npmjs.com/package/@vuepress/theme-blog)
[![NPM LICENSE](https://badgen.net/npm/license/@vuepress/theme-blog)](https://github.com/vuepressjs/vuepress-theme-blog/blob/master/LICENSE)
 
## Sites

- [Documentation](https://vuepress-theme-blog.ulivz.com) - clone this repo and run `yarn && yarn docs:dev`
- [Live Example](https://example.vuepress-theme-blog.ulivz.com/) - clone this repo and run `yarn && yarn example:dev`
- [Live Example - ULIVZ's space](https://ulivz.com/)
- [Live Example - Billyyyyy3320's space](https://billyyyyy3320.com/)



## Install

```bash
yarn add @vuepress/theme-blog -D
# OR npm install @vuepress/theme-blog -D
```


## Usage

```js
// .vuepress/config.js
module.exports = {
  theme: '@vuepress/blog',
  themeConfig: {
    // Please head documentation to see the available options.
  }
}
```

## Author

**@vuepress/theme-blog** © [ULIVZ](https://github.com/ulivz), Released under the [MIT](./LICENSE) License.<br>

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ULIVZ](https://github.com/ulivz) · Twitter [@_ulivz](https://twitter.com/_ulivz)


# Vuepress QuickStarter
@vuepress/theme-blogを修正して、即座にブログが始められるようにしました。

## インストール
本レポジトリからファイルをダウンロード後、yarnコマンドを実行してnode_modulesをインストールします。
`yarn`

yarn upgradeコマンドを実行してnode_modulesを最新版にします。
`yarn upgrade`

## 使い方
### 動かす
`yarn blog:dev`
(ディレクトリ名はデフォルトのexampleから分かりやすいようにblogに修正しています)

http://localhost:8080/
でローカルサーバーが立ち上がります。
他のプロジェクトで同時にローカルサーバーを起動している際は、念のためそちらを閉じてください。

### build(静的ファイルを出力)
`yarn blog:build`
でblog/.vuepress/distが出力されます。

#### publish directory
blog/.vuepress/dist
Netlify等でホスティングする際はblog/.vuepress/distをdeploy先に指定してください。

## deploy
### NetlifyURL
https://vuepress-blog-quickstarter.netlify.app/

## Google Analitics
Vuepressのプラグインを使う方法より、NetlifyのSnippets Injectionを使う方が簡単で早いです。

## Google Search Console
NetlifyのSnippets Injectionを使うのが一番簡単です。# Vue2Nuxt
