---
title: Vue.js・Nuxt.jsのためのVS Codeカスタマイズ
date: 2020-5-21
tags:
  - Vue.js入門
  - VS Code

summary: VS Codeの真価を引き出すことで、Vue.js・Nuxt.js開発を強力にサポート
---

<a href="//af.moshimo.com/af/c/click?a_id=2180371&p_id=898&pc_id=1106&pl_id=11638&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0262/000000011638.jpg" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180371&p_id=898&pc_id=1106&pl_id=11638" width="1" height="1" style="border:none;">

<a href="//af.moshimo.com/af/c/click?a_id=2180365&p_id=2520&pc_id=5570&pl_id=32577&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/1916/000000032577.png" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180365&p_id=2520&pc_id=5570&pl_id=32577" width="1" height="1" style="border:none;">

## はじめに

テキストエディタの選択肢は増えていますが、**Vue.js や Nuxt.js を用いて開発している方に自信を持っておすすめできるのが VS Code(Visual Studio Code)です。**
そのままでも使いやすい VS Code ですが、いくつか設定を変更したり、拡張機能を追加することでさらに使いやすくなります。
本記事では、Vue.js や Nuxt.js の開発効率を上げるための VS Code のおすすめカスタマイズを紹介します。

### この記事を読むと

- Vue.js や Nuxt.js の開発効率の圧倒的な向上
- 開発者体験の向上によって、データフローやコンポーネントの設計といったより上流の工程に集中できるようになる

### 想定読者

- Vue.js や Nuxt.js の初級〜中級者
- Vue.js や Nuxt.js を用いた開発業務を行っている方

### 前提知識

- JavaScript(ES6)の基本知識(JavaScript について自信がない方は<a href="//af.moshimo.com/af/c/click?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2F4873117836" rel="nofollow">初めての JavaScript 第 3 版 ―ES2015 以降の最新ウェブ開発</a><img src="//i.moshimo.com/af/i/impression?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />が確かな理解を深められる良書です)

- Vue.js についての基本知識
  (Vue.js の基本知識がない方は<a href="//af.moshimo.com/af/c/click?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062&amp;url=https%3A%2F%2Fwww.amazon.co.jp%2Fdp%2FB07X6F1C2P" rel="nofollow">Vue.js&amp;Nuxt.js 超入門</a><img src="//i.moshimo.com/af/i/impression?a_id=1875799&amp;p_id=170&amp;pc_id=185&amp;pl_id=4062" alt="" width="1" height="1" style="border: 0px;" />が入門書として最も最適です)

## VS Code 基本設定

デフォルト設定のままの方が多いですが、カスタマイズすることを強くお勧めします。
変更も簡単ですし、日々のわずかな生産性の向上が積み重なると大きな差を生みます。

### VS Code 基本設定の変更方法

まず変更方法ですが、VS Code 画面左下の歯車アイコン ⇨`Settings`（日本語化していない場合は`設定`）で設定画面が開きます。
参考に、私の設定を公開しておきます。

### VS Code 基本設定のおすすめカスタマイズ

- `Fontsize` = 14
  目への負担を減らすため、フォントは大きめにしています。

- `TabSize` = 2
  タブキーを打った時のインデントをデフォルトの 4 から 2 にしています。

- `Rendor` = white Space All
  空白文字は全て表示しています。

- `Editor: Word Wrap` = on
  一行が長いコードは折り返して表示されて、見やすくなります。

## VS Code 拡張機能

経験豊富なエンジニアでさえ、VS Code の拡張機能を触らない方は少なくないようです。
しかし、自身に適した拡張機能でカスタマイズした VS Code は圧倒的に強力な武器となります。先にご紹介した VS Code 基本設定と比べ物にならないほど、効果を実感することができます。是非お試しください。

### VS Code 拡張機能の変更方法

VS Code 画面左下の歯車をクリックして、「extension」（日本語設定なら「拡張機能」）を選択しましょう。
すると、EXTENSIONS:MARKETPLACE の検索窓が表示されます。
例えば「Vetur」を追加したい場合は,「Vetur」と検索、お目当ての「Vetur」が表示されたら install すれば OK です。簡単ですね。

<a href="//af.moshimo.com/af/c/click?a_id=2008380&p_id=2248&pc_id=4786&pl_id=29771&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/1689/000000029771.jpg" width="468" height="120" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2008380&p_id=2248&pc_id=4786&pl_id=29771" width="1" height="1" style="border:none;">

### VS Code おすすめ拡張機能

#### japanese language packs for visual studio codes

> Japanese Language Pack は VS Code にローカライズされた UI を提供します。

日本語化ができます！VSCode は平易な英語しか使用されていませんが、やはり日本語表示の方が操作が早くなります。

#### open in brawser

> This allows you to open the current file in your default browser or application.

HTML ファイルをブラウザで開けるようになります。

#### partial diff

> Compare (diff) text selections within a file, across files, or to the clipboard

コードの比較が圧倒的にしやすくなります。特にクリップボードから比較できるのが非常に便利です（それまでは比較のためだけにファイルを一時的に作成したりしていました・・・）。

#### duplicate acition

> Ability to duplicate files and directories in VS Code.

VSCode 内で簡単にファイルやディレクトリの複製が可能になります。
Vue ファイルをテンプレとして使いまわしたりするときに便利ですね。

#### GitLens — Git supercharged

> GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.

VS Code から直接、git 操作が簡単にできるようになります。
エンジニアライフが一変するほど便利な拡張機能です。
今までは義務感で commit していたのですが、今は commit メッセージを書くのが楽しくて仕方ないです。
git push や git pull もまばたきするより簡単です。

#### Auto rename tag

> Automatically rename paired HTML/XML tag, same as Visual Studio IDE does.
> ペアとなる HTML タグを自動で rename してくれます。

#### Auto close tag

> This extension allows matching brackets to be identified with colours. The user can define which characters to match, and which colours to use.

HTML の終了タグを自動で追加してくれます。

#### brackets pair colorizer

> This extension allows matching brackets to be identified with colours. The user can define which characters to match, and which colours to use.
> カッコ毎に色を分けてハイライトしてくれます。こちらを入れてから、Vue や Nuxt で(){}のネストを多用しても混乱することがなくなりました

#### Vetur

> Vue tooling for VS Code, powered by vue-language-server.

Vetur は必須といっても過言ではないでしょう。
選択したコンポーネントやファイル名について、「Vue ファイルのどこで定義されたか」や「定義しているコード」を表示してくれます。また、どこでも定義されていないのに使われている変数名を特定するのにも役立ちます。

#### Vue.peek

> This extension extends Vue code editing with Go To Definition and Peek Definition support for components and filenames in single-file components with a .vue extension. It allows quickly jumping to or peeking into files that are referenced as components (from template), or as module imports (from script).

選択したコンポーネントやファイル名について、「Vue ファイルのどこで定義されたか」や「定義しているコード」を表示してくれます。また、どこでも定義されていないのに使われている変数名を特定するのにも役立ちます。

こちらも本当に便利ですね。

#### Vue docs

> Viewing documentation [Vue.js, Vuex, Vue Router, Vue SSR, Vuetify, Nuxt.js, VuePress] in the VS Code!
> This extension extends Vue code editing with Go To Definition and Peek Definition support for components and filenames in single-file components with a .vue extension. It allows quickly jumping to or peeking into files that are referenced as components (from template), or as module imports (from script).

Vue.js や Vuex, Vue Router, Vue SSR, Vuetify, Nuxt.js, VuePress の公式ドキュメントを VSCode 内から直接参照できます。
個人的に、ブラウザで開いているタブの多さと集中力は反比例するので、ドキュメントも VSCode 内で完結するのはありがたいです。

#### JavaScript(ES6)

> This extension contains code snippets for JavaScript in ES6 syntax for Vs Code editor (supports both JavaScript and TypeScript).
> JavaScript(ES6) 用の Snippets 拡張機能です。
> Snippets とはよく使うコードを自動で予測・保管する機能のことです。コードを一文字一文字全て書かなくても良いのは本当に楽ですし、コードのミスも減ります!

#### vuetify vscode

> Vuetify vscode extension

Vuetify 用の Snippets 拡張機能です。

#### ES lint

> Integrates ESLint JavaScript into VS Code.

コードを強力に整形してくれます。特に共同開発において必須です。

#### npm

> npm support for VS Code

npp 用の補助ツールです。npm は Vue.js や Nuxt.js の根幹となる部分の一つですね。

<a href="//af.moshimo.com/af/c/click?a_id=2034716&p_id=170&pc_id=185&pl_id=4153&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0068/000000004153.gif" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2034716&p_id=170&pc_id=185&pl_id=4153" width="1" height="1" style="border:none;">

<a href="//af.moshimo.com/af/c/click?a_id=2180370&p_id=1079&pc_id=1563&pl_id=16210&guid=ON" rel="nofollow"><img src="//image.moshimo.com/af-img/0343/000000016210.jpg" width="728" height="90" style="border:none;"></a><img src="//i.moshimo.com/af/i/impression?a_id=2180370&p_id=1079&pc_id=1563&pl_id=16210" width="1" height="1" style="border:none;">
