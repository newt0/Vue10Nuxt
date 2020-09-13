---
title: Vuexをはじめから丁寧に(3)~NuxtにおけるVuex~
date: 2020-5-19
tags:
  - Vuex
  - Nuxt.js入門
summary: Nuxt.jsにおけるVuexについて
---

<a href="//af.moshimo.com/af/c/click?a_id=2180371&p_id=898&pc_id=1106&pl_id=11638&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0262/000000011638.jpg" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180371&p_id=898&pc_id=1106&pl_id=11638" width="1" height="1" style="border:none;">

<a href="//af.moshimo.com/af/c/click?a_id=2180365&p_id=2520&pc_id=5570&pl_id=32577&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/1916/000000032577.png" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180365&p_id=2520&pc_id=5570&pl_id=32577" width="1" height="1" style="border:none;">

## この記事で扱うこと

- Vuex のクラシックモードとモジュールモードの違い
- Nuxt.js における Vuex

## Vuex のインストール

Vue.js において Vuex を使うには、Vuex モジュールのインストールが必要でした。

_Vuex のインストールコマンド_
`npm install Vuex`

しかし、Nuxt.js においては予め Vuex がインストールされており、すぐに使うことができます。※1

<a href="//af.moshimo.com/af/c/click?a_id=2008380&p_id=2248&pc_id=4786&pl_id=29771&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/1689/000000029771.jpg" width="468" height="120" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2008380&p_id=2248&pc_id=4786&pl_id=29771" width="1" height="1" style="border:none;">

## クラシックモードとモジュール分割

Nuxt では Vuex は**クラシックモード**と**モジュールモード**が使えます。
クラシックモードでは一つのファイルに store を登録しますが、モジュールモードでは複数のファイルに store を登録します。※2

モジュールモードはファイルごとにストアを定義することができます。
ファイルごとに state・mutations・actions をエクスポートします。

article.js

```JavaScript
export const state = () =>
({
   body:""
})

export const mutations = {
  update(state,text){
    state.body=text
},
}
export const actions = {update(state,text)

  {context.commit({
   type:'update',
   text:text
  })
 }
}
```

アプリケーションの規模が大きくなり管理すべき状態が多くなったときは、モジュールモードを活用するとよいでしょう。

## 備考

※1 これは、「コアでは最小限な構成のみを提供する Vue.js」と、「全部入りのパッケージを提供することで優れた開発者エクスぺリンスを提供する Nuxt.js」それぞれの特徴を端的に象徴していると言えます。

※2 最初はクラシックモードから始める方が分かりやすいと思いますが、実際の開発においてはモジュールモードが主流です。

### 参考文献

<a href="//af.moshimo.com/af/c/click?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4297100916" rel="nofollow"><img src="https://images-fe.ssl-images-amazon.com/images/I/41qzgSLFQwL._SL160_.jpg" alt="" style="border: none;" /><br />Vue.js 入門 基礎から実践アプリケーション開発まで</a><img src="//i.moshimo.com/af/i/impression?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
Vue.js についての書籍は増えてきていますが、問題なのはその殆どが Vuex についての説明を省略していることです。Vue.js や Nuxt.js を用いた実際の開発において Vuex による状態管理は必須ですが、学習の障壁になるとして避けてしまっているのでしょう。私が読んだ中で唯一、Vuex について丁寧に説明していたのが本書です。Vuex 以外の内容も素晴らしいの一言。本書は Vue.js・Nuxt.js の開発に関わるエンジニアや組織にとって必携です。
ただし、全く Vue について未経験という方への第一歩としては内容が本格的すぎるかもしれません。その場合は『Vue.js 超入門』がおすすめです。

<a href="//af.moshimo.com/af/c/click?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB07X6F1C2P" rel="nofollow"><img src="https://images-fe.ssl-images-amazon.com/images/I/51eFKoSgx5L._SL160_.jpg" alt="" style="border: none;" /><br />Vue.js&amp;Nuxt.js 超入門</a><img src="//i.moshimo.com/af/i/impression?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
とにかく分かりやすく、まず概要を把握するために最適の一冊です。「なんとなくで良いので概要を把握する」⇨「より詳細で厳密な理解する」という流れで学ぶとスムーズです。

<a href="//af.moshimo.com/af/c/click?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4873117836" rel="nofollow"><img src="https://images-fe.ssl-images-amazon.com/images/I/51U44SJi3jL._SL160_.jpg" alt="" style="border: none;" /><br />初めての JavaScript 第 3 版 ―ES2015 以降の最新ウェブ開発</a><img src="//i.moshimo.com/af/i/impression?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
JavaScript の根本的な理解ができる、歴史的な良書です。分厚いので手強そうに見えますが、実際はとても親切で分かりやすい作りです。本書も一人一冊は欲しいところです。

<a href="//af.moshimo.com/af/c/click?a_id=2034716&p_id=170&pc_id=185&pl_id=4153&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0068/000000004153.gif" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2034716&p_id=170&pc_id=185&pl_id=4153" width="1" height="1" style="border:none;">

<a href="//af.moshimo.com/af/c/click?a_id=2180370&p_id=1079&pc_id=1563&pl_id=16210&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0343/000000016210.jpg" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180370&p_id=1079&pc_id=1563&pl_id=16210" width="1" height="1" style="border:none;">
