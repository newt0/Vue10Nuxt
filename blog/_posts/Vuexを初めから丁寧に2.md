---
title: Vuexを初めから丁寧に(2)~Vuexの構成要素と使い方~
date: 2020-5-19
tags:
  - Vue.js入門
  - Vuex

summary: Vuexの本格的な中身について見ていきます
---

<a href="//af.moshimo.com/af/c/click?a_id=2180371&p_id=898&pc_id=1106&pl_id=11638&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0262/000000011638.jpg" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180371&p_id=898&pc_id=1106&pl_id=11638" width="1" height="1" style="border:none;">

<a href="//af.moshimo.com/af/c/click?a_id=2180365&p_id=2520&pc_id=5570&pl_id=32577&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/1916/000000032577.png" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180365&p_id=2520&pc_id=5570&pl_id=32577" width="1" height="1" style="border:none;">

## はじめに

[前の記事](https://qiita.com/kyohei_ai/items/6a1aaf20e8fd3e44f9de)では Vuex を理解するための前提知識(状態管理やデータフローについて)を見てきました。
本記事ではいよいよ、Vuex 本体について入っていきます。

### この記事を読むと

- Vuex の構成要素やその使い方が分かる
- Vuex を用いた本格的なアプリケーション開発に向けた準備が整う

### 想定読者

- Vue.js や Nuxt.js の初級〜中級者
- Vuex を何となく雰囲気で使っている

### 前提知識

- JavaScript 及び Vue.js についての基本知識
  (Vue.js の基本知識がない方は[こちら](https://amzn.to/2vZPB1q)が入門書として最も最適です。)
  [『Vue.js 超入門』(掌田津耶乃/秀和システム)](https://amzn.to/2vZPB1q)
- 状態管理やデータフローについての基礎知識（[一つ目の記事](https://qiita.com/kyohei_ai/items/a6d4dfbacea6b068f6f5)をご覧ください）

## Vuex による状態管理

いよいよ Vuex に入って行きます。

Vuex は Vue アプリケーション向けの状態管理ライブラリです。

Vuex は単なるライブラリとして機能を提供するだけではなく、公式に Vuex を使う際の実装のルールも示しています。
実装のルール、ベストプラクティスを含めて Vuex と捉えると分かりやすいでしょう。
例えば状態の更新はミューテーションでのみ行われるというルールを定められているため、更新処理を探したいときはミューテーション部分を参照すれば OK です。このように、既存のルールに従うだけで良いため、設計や複数人で開発する際のコミュニケーションの手間も省句ことができます。

## ストア

ストアは主にアプリの状態を保持する役割を担います。
その他にも状態管理に関する機能を盛り込んでおり、Vuex の根幹となります。

```
// ストアの作成と代入
cosnt store = new Vuex.Store({オプション})
```

Vuex は**信頼できる唯一の情報源**であることを前提に設計されています。
アプリケーション内で常にただ一つのストアのみが存在するようにします。※1

_※1 一つのディレクトリという意味であり、必ずしもファイルが一つとは限りません。例えば Nuxt.js のモジュールモードにおいてはストア内に複数の JS ファイルが存在します。詳しくはこの記事の後半、および次の記事で扱います。_

<a href="//af.moshimo.com/af/c/click?a_id=2008380&p_id=2248&pc_id=4786&pl_id=29771&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/1689/000000029771.jpg" width="468" height="120" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2008380&p_id=2248&pc_id=4786&pl_id=29771" width="1" height="1" style="border:none;">

## ストアの構成要素

ストアは以下の四つの要素から構成されます。

- アプリの**ステート(State)**
- ステートの一部や、ステートから計算された値を返す**ゲッター(Getter)**
- ステートを更新する**ミューテーション(Mutation)**
- 主に Ajax リクエストのような非同期処理や、LocalStorage への読み書きのような外部 API とのやり取りを行う**アクション(Action)**

ステートは状態、ミューテーションは更新処理に対応します。

規模の大きいアプリを作る際には、上記 4 つの構成要素をモジュール(Module)という単位で分割して見通しを良くします。
アプリの状態を全て一つの場所に置いてしまうと逆に管理が大変になるのではないかと感じるかもしれません。しかしモジュールを使うことで、「信頼できる唯一の情報源」を守りながら状態やそれに関わる更新・取得のロジックを分割し、シンプルに管理を行えます。

## ステート

### ステートの概要

Vuex のステートはアプリ全体の状態を保持するオブジェクトです。
全てのステートは**一つの木構造**として表現されます。
アプリケーションの全ての状態を一つの木としてステートに保持することで、「信頼できる唯一の情報源」として機能します。
しかし、必ずしもアプリケーションの全ての状態を Vuex で管理するべきではありません。
Vuex のステートで管理するべきデータと、そうでないデータの例は下記の通りです。

ステートに適したデータ

- ログイン中のユーザーの情報など、アプリ全体で使用されるデータ
- EC サイトにおける商品の情報など、アプリの複数の場所で使用される可能性のあるデータ

コンポーネント側で持つべきデータ

- マウスポインタがある要素の上に存在するかどうかを、表すフラグ
- ドラッグ中の要素の座標
- 入力中のフォームの値

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
  state: {
count: 10
}
```

ステートはコンポーネントの data オプションに渡された値と同じように変更が追跡されます。
ステートに対して何らかの更新を行うとその変更は自動的にコンポーネントの算出プロパティやテンプレートへと反映されます。
これは Vuex が内部的に Vue のリアクティブシステムを活用して実装されているためです。
また、ステート内の依存関係がリアクティブシステムによって計算されるため、ステート更新時の UI の再描画が必要最小限になるというメリットもあります。

## ゲッター

### ゲッターの概要

ゲッターはステートから別の値を算出するために用いられます。例えばユーザーの操作によって商品のリストを絞り込みたい時にはゲッターで絞り込んだ商品のリストを算出します。
ゲッターを使用することでコンポーネント上で表示のためにステートを計算することが避けられ、異なるコンポーネント間でロジックを再利用できるようになります。

### ゲッターの定義方法

getters オプションに関数をもつオブジェクトを指定することでゲッターを定義します。
コンポーネントの算出プロパティとよく似た機能ですが、引数にステートと他のゲッターが渡され、それらを使った値を返す点が異なります。

### ゲッターの使い方

**ゲッターは store.getters から参照できます。**

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
  state: {
count: 10
},
// gettersオプションでgettersを定義する
getters: {
// ステートから別の値を算出する
squared: (state) => state.count* getters.squared
}
})
```

ゲッターはコンポーネントの computed オプションと同様に評価された値がキャッシュされます。
キャッシュされた値はそのゲッターが依存しているステートが更新されない限り再評価されません。

したがって、よく使用するステートの算出ロジックはゲッターにすることでパフォーマンスの向上が期待できます。一方でゲッターを参照したときに定義した関数が常に実行されるわけではありません。
例えば依存するステートが存在しない時にサーバーから値を取得するというような処理はゲッターの中には書かず、続けて解説するミューテーション、アクションを使って取得とステートへの反映を行います。

## ミューテーション

### ミューテーションの概要

ミューテーションはステートを更新するために用いられます。
**Vuex では規約としてミューテーション以外がステートの更新を行うことを禁止しています。**
ステートの更新をミューテーションのみが行えば、ステートの変更がいつどこで発生したのかを追跡しやすくなります。

### ミューテーションの定義方法

mutations オプションにミューテーション名をキーに持ち、ハンドラー関数を値に持つオブジェクトを指定することでミューテーションを定義できます。
ハンドラー内では第一引数に渡されたステートを更新します。

### ミューテーションの使い方

ミューテーションは直接は呼び出せません。**store.commit にミューテーション名を与えて呼び出します。**
これはイベントの発生と監視によく似ています。
increment というイベントが発生したときに、その名前で登録したミューテーションハンドラーが実行されると考えると分かりやすいです。

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
  state: {
count: 10
},
// gettersオプションでgettersを定義する
getters: {
// ステートから別の値を算出する
squared: (state) => state.count* getters.squared
 },
 mutations: {
// 'incremation'ミューテーションを定義
increment(state) {
state.count = state.count + 1
 }
}
})
```

store.commit の第二引数になんらかの値を与えるとそれがハンドラーの第二引数に渡されます。この値のことを**ペイロード(payload)**※と呼びます。ペイロードを使用することで、同じミューテーションでも渡す値によって異なるステートに更新できます。

ミューテーション内で行う処理は非同期を用いると意図しない動作を引き起こす可能性があるため、全て同期的にする必要があります。
非同期処理を行う必要があるときは次に紹介するアクションを代わりに使用します。

## アクション

### アクションの概要

アクションは非同期処理や外部 API との通信を行い、最終的にミューテーションを呼びだすために用いられます。

### アクションの定義方法

actions オプションにアクション名をキーに持ち、ハンドラー関数を値に持つオブジェクトを指定することでアクションを定義します。

### アクションの使い方

アクションはミューテーションと同様に直接呼び出すことはできません。**store.dispatch にアクション名を渡して呼び出します。**

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
  state: {
count: 10
},
// gettersオプションでgettersを定義する
getters: {
// ステートから別の値を算出する
squared: (state) => state.count* getters.squared
 },
 mutations: {
// 'incremation'ミューテーションを定義
increment(state) {
state.count = state.count + 1
 }
},
// acitionsオプションでアクションを定義する
actions: {
incrementAction(ctx) {
// incrementミューテーションを実行する
ctx.commit('increment')
}
})
```

アクションの定義はミューテーションとよく似ています。ただし、ハンドラーの第一引数にステートではなく**コンテキスト(context)**と呼ばれる特別なオブジェクトが渡される点で異なります。
コンテキストには以下が含まれます。

- state: 現在のステート
- getters: 定義されているゲッター
- dispatch: 他のアクションを実行するメソッド
- commit: ミューテーションを実行するメソッド

state や getters は、例えばデータのロード中にはアクションの処理を行わないというような現在の状態に応じてアクションの処理を切り替えるときに使います。
**dispatch を使うことで、すでに定義してある他のアクションを呼びだせます。**※
これによって共通の処理を一つのアクションにまとめることができますが、使い過ぎるとどのアクションから呼ばれているのか分かりづらくなるので気をつけましょう。
アクションはミューテーションを実行するのに用いられるため、commit が使われることが最も多いでしょう。

以下は Ajax でデータを取得し、そのデータをペイロードに含めたミューテーションを呼び出すアクションを定義している例です。第一引数のコンテキストを分割代入({ commit })することで短い記法で書かれています。また、ミューテーションと同様にアクションも第二引数にペイロードを受け取ります。

```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの定義
const store = new Vuex.Store({
  state: {
count: 10
},
// gettersオプションでgettersを定義する
getters: {
// ステートから別の値を算出する
squared: (state) => state.count* getters.squared
 },
 mutations: {
// 'incremation'ミューテーションを定義
increment(state) {
state.count = state.count + 1
 }
},
// acitionsオプションでアクションを定義する
actions: {
incrementAction(ctx) {
// incrementミューテーションを実行する
ctx.commit('increment')
}
})
```

## おわりに

如何だったでしょうか。簡単に復習してみましょう。

- Vuex はステート、ゲッター、ミューテーション、アクションの 4 つの要素で構成される
- それぞれの要素の定義方法と使い方を覚える

この内容がバッチリでしたら、Vuex の基本的な使い方が頭に入ったことになります。
次の記事では、さらにより実践的な応用知識について見ていきます。例えば Nuxt.js における Vuex の扱いについてです。

### 参考文献

<a href="//af.moshimo.com/af/c/click?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4297100916" rel="nofollow"><img src="https://images-fe.ssl-images-amazon.com/images/I/41qzgSLFQwL._SL160_.jpg" alt="" style="border: none;" /><br />Vue.js 入門 基礎から実践アプリケーション開発まで</a><img src="//i.moshimo.com/af/i/impression?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
Vue.js についての書籍は増えてきていますが、問題なのはその殆どが Vuex についての説明を省略していることです。Vue.js や Nuxt.js を用いた実際の開発において Vuex による状態管理は必須ですが、学習の障壁になるとして避けてしまっているのでしょう。私が読んだ中で唯一、Vuex について丁寧に説明していたのが本書です。Vuex 以外の内容も素晴らしいの一言。本書は Vue.js・Nuxt.js の開発に関わるエンジニアや組織にとって必携です。保存用・実用用・観賞用に 3 冊購入しましょう。あるいは、あなたが経営者の場合はぜひエンジニアに対して一人一冊ずつ買い与えてください。
ただし、全く Vue について未経験という方への第一歩としては内容が本格的すぎるかもしれません。その場合は『Vue.js 超入門』がおすすめです。

<a href="//af.moshimo.com/af/c/click?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB07X6F1C2P" rel="nofollow"><img src="https://images-fe.ssl-images-amazon.com/images/I/51eFKoSgx5L._SL160_.jpg" alt="" style="border: none;" /><br />Vue.js&amp;Nuxt.js 超入門</a><img src="//i.moshimo.com/af/i/impression?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
とにかく分かりやすく、まず概要を把握するために最適の一冊です。「なんとなくで良いので概要を把握する」⇨「より詳細で厳密な理解する」という流れで学ぶとスムーズです。

<a href="//af.moshimo.com/af/c/click?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4873117836" rel="nofollow"><img src="https://images-fe.ssl-images-amazon.com/images/I/51U44SJi3jL._SL160_.jpg" alt="" style="border: none;" /><br />初めての JavaScript 第 3 版 ―ES2015 以降の最新ウェブ開発</a><img src="//i.moshimo.com/af/i/impression?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />
JavaScript の根本的な理解ができる、革命的な良書です。分厚いので手強そうに見えますが、実際はとても親切で分かりやすい作りです。本書も一人一冊は欲しいところです。

<a href="//af.moshimo.com/af/c/click?a_id=2034716&p_id=170&pc_id=185&pl_id=4153&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0068/000000004153.gif" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2034716&p_id=170&pc_id=185&pl_id=4153" width="1" height="1" style="border:none;">

<a href="//af.moshimo.com/af/c/click?a_id=2180370&p_id=1079&pc_id=1563&pl_id=16210&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0343/000000016210.jpg" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180370&p_id=1079&pc_id=1563&pl_id=16210" width="1" height="1" style="border:none;">
