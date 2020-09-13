---
title: Vuexを初めから丁寧に(1)~Vuexを理解するために必須の前提知識~
date: 2020-5-19
tags:
  - Vue.js入門
  - Vuex

summary: 難解ながら、VueやNuxtを用いた開発で必須のVuex。「なんとなく使っている」状態から脱却しましょう。
---

<a href="//af.moshimo.com/af/c/click?a_id=2180371&p_id=898&pc_id=1106&pl_id=11638&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0262/000000011638.jpg" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180371&p_id=898&pc_id=1106&pl_id=11638" width="1" height="1" style="border:none;">

<a href="//af.moshimo.com/af/c/click?a_id=2180365&p_id=2520&pc_id=5570&pl_id=32577&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/1916/000000032577.png" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180365&p_id=2520&pc_id=5570&pl_id=32577" width="1" height="1" style="border:none;">

## はじめに

### この記事を読むと

- Vuex を理解するために必要な知識を習得できます
- Vuex を学ぶためのマイルストーンが明確となります

### 想定読者

- Vue.js や Nuxt.js の初級〜中級者
- Vuex を何となく雰囲気で使っている

### 前提知識

JavaScript 及び Vue.js についての基本知識があることは前提とします。
(Vue.js の基本知識がない方は[こちら](https://amzn.to/2vZPB1q)が入門書として最も最適です。)
[『Vue.js 超入門』(掌田津耶乃/秀和システム)](https://amzn.to/2vZPB1q)

また JavaScript におけるオブジェクトの使い方にも慣れておくとスムーズでしょう。
([こちら](https://amzn.to/3bzG6oC)の第 9 章が最も良い説明だと思います。）
[『初めての JavaScript 第 3 版 ―ES2015 以降の最新ウェブ開発』(Ethan Brown, 武舎広幸,武舎るみ/オライリージャパン) ](https://amzn.to/3bzG6oC)）

## Vuex の理解が難しい原因

なぜ Vuex が難しいと感じるのでしょうか？
私の場合は**専門用語の意味が省略されている**ことに起因していました。
さらに問題なのは、 「Vuex を理解するためのキーとなる用語」が、**全く違う意味で使われているにも関わらず見た目は一般的な日本語と一緒**なのでなんとなくわかった気になり、「何が分からないのか分からない」状況に陥ることです。
例えば Vuex における **「状態」**は **「アプリケーションが保持するデータ」**のことを指します。
なので、「Vuex は状態管理ライブラリである」「Vuex は状態を管理するために単方向データフローを採用している」といった説明や図解※1 を見ても、肝心の「状態」が分からないので、文章の意味が消化できないまま頭を素通りしていくだけでした。

しかし逆に言うと、用語の意味さえ押さえておけば Vuex はスラスラ理解できます。

※1Vuex データフローの図解
![Vuex図解(Vuex公式ドキュメントより引用)](https://vuex.vuejs.org/vuex.png)

<a href="//af.moshimo.com/af/c/click?a_id=2008380&p_id=2248&pc_id=4786&pl_id=29771&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/1689/000000029771.jpg" width="468" height="120" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2008380&p_id=2248&pc_id=4786&pl_id=29771" width="1" height="1" style="border:none;">

## Vuex を理解するためのツボ

さて、前置きが長くなりましたが本題です。
Vuex を理解するためのポイントはたった 4 つです。

- **用語を正確に理解する**

  - 「状態」
  - 「データフロー」

- **「データフローの設計」と「状態管理」の意義を理解する**

  - 信頼できる唯一の情報源(Single Source of Truth)
  - 単方向フロー(one-way data flow)
  - 情報と取得のカプセル化(Encapsulation of sorce and receiving)

- **Vuex の構成要素の役割と使い方を理解する**

  - State
  - Getters
  - Mutations
  - Actions

- ※「ストアのモジュール分割」は一旦省略します

一つ一つ丁寧に見ていきましょう。

## Vuex に入る前に

いきなり Vuex に入るより、まず状態管理やデータフローの基本知識を押さえておくとスムーズに理解が進みます。

### 「状態」とは

状態とは
**「アプリケーションが保持するデータ」**
のことです。
ユーザーの操作やイベントの発生などによってその値が更新されていきます。

例えば、EC サイトのショッピングカートです。カートは何も入っていない空の状態から始まり、ユーザーが商品をカートに入れる操作を行うことでカートは空の状態に戻り、購入処理が完了します。

規模が大きいアプリケーションは保持する状態の数や、それぞれの組み合わせの数も多くなりそのままでは扱いきれなくなります。

繰り返しになりますが、Vuex において「状態」は普段の日本語とは異なる特別な意味がある言葉なので注意してください。

### データフローとは

「データフロー」とは
**「状態を含む、アプリケーションが持つデータの流れ」**
のことを指します。
具体的には、どこにデータを保持し、データを読み込む時や更新するときはどこからどのように行うのかという点を表すことが多いです。

データフローの設計において、以下の三つのプラクティスが重要です。

### 信頼できる唯一の情報源

**「信頼できる唯一の情報源」(the source of truth)とは、「管理する対象のデータを一箇所に集約することで管理を容易にすることを目的とする設計のパターン」**です。

- どのコンポーネントも同一のデータを参照するため、データや表示の不整合が発生しづらい
- 複数のデータを組み合わせた処理を比較できる容易に実装できる
- データの変更のログ出力、現在のデータの確認などの開発に便利なツールを作りやすい

### 「状態の取得・更新」のカプセル化

**「状態の取得・更新」のカプセル化を行うことで、状態管理のコストを下げることができます。**
例えばカウンターアプリの例では更新処理を store 内に記述することでカプセル化しており、コンポーネント側からは具体的にどのような実装がされているかは隠されています。

- 状態の取得・更新のロジックを様々な場所から利用できる
- 詳細な実装をビューから隠すことで、データ構造や取得、更新処理の変更の影響範囲を小さくする
- デバッグ時に確認する場所が限られるため、デバッグが容易になる

### 単方向データフロー

**単方向データフローにすることで、状態の取得、更新のコードが簡潔になります。**
データが単方向でないと、データの取得と更新の両方を同時にできてしまい、より複雑な処理になり理解が難しくなってしまいます。

- データを取得しつつ更新するといったようなことができなくなり、実装やデバッグが単純になる
- データを取得、更新するために何をするかの選択肢が絞られて、理解が容易なコードをかきやすい

### まとめ

ここまでデータフローの三つのプラクティスを見てきましたが、実は Vuex は先ほど紹介したデータフローのプラクティスを全て満たします。

まず、Vuex はアプリケーションの状態やそれに付随するロジックが一つの場所(ストア)にまとまるように設計されているため、「信頼できる唯一の情報源」を満たします。

また、Vuex において状態の更新はミューテーションでのみ行うことができ、取得に関してもゲッターという機能で詳細な実装は隠蔽できるため「状態の取得と更新」のカプセル化も満たします。

さらに、状態の取得と更新の窓口が異なるため(冒頭の図解をもう一度参照ください)、強制的に実装が単方向データフローになります。

## おわりに

いかがだったでしょうか。Vue や Nuxt で開発を行う方が、Vuex を理解するための助けになれば幸いです。
「状態管理」「データフロー」についてはバッチリですか？
次の記事ではいよいよ Vuex による状態管理について見ていきます。

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
