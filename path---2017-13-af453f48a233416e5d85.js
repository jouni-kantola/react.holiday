webpackJsonp([0xd04575db0d76],{495:function(n,e){n.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/13.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p>Today, we start with a new component!</p>\n<p><span style="font-size: 2em">🎊 🎉 🎊 🎉</span></p>\n<h2>Pokemon</h2>\n<p>Take a stab at writing this component\n<a href="https://codesandbox.io/s/new">in a new sandbox</a> before reading the next\nsection.</p>\n<ul>\n<li>Name the component <code>Pokemon</code></li>\n<li>Make sure it’s a component that can hold <a href="/2017/7/"><code>state</code></a></li>\n<li>Use <code>{ character: null }</code> as the inital state</li>\n<li>Take an <code>id</code> <a href="/2017/4">prop</a>. It’ll be the index of the Pokemon we fetch.</li>\n<li>\n<p>Render <a href="/2017/11">conditionally</a>:</p>\n<ul>\n<li>If <code>state</code> has a <code>character</code>, render <code>this.state.character.name</code></li>\n<li>Otherwise render the message <code>...loading</code></li>\n</ul>\n</li>\n</ul>\n<p><em>(At this point, it should always render <code>...loading</code>)</em></p>\n<h2>Fetch a Pokemon</h2>\n<p>You got it? Great!</p>\n<p>In the workspace below, I’ve included a <code>fetchPokemon</code> function. We’ll use it in\nthe next section.</p>\n<h2>Meet <code>componentDidMount</code></h2>\n<p><code>componentDidMount</code> is a <a href="/2017/5">special power</a> our component has. Speaking\ntechnically, it’s a method on our component class.</p>\n<p>When defined, it’s called when a <code>Pokemon</code> is <em>mounted</em> into the DOM.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">fetchPokemon</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>character<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> character<span class="token punctuation">:</span> character <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<br />\n<p><code>componentDidMount</code> <strong>is the\n<a href="https://reactjs.org/docs/react-component.html#componentdidmount">ideal place to fetch data from a server.</a></strong></p>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and explore fetching data in <code>componentDidMount</code>:</p>\n<ul>\n<li>Fetch a pokemon with a different id</li>\n<li>Log messages from <code>componentDidMount</code> and <code>render</code> observe the order in the\nconsole.</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/wkwjmqnrow" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 13: Gotta fetch 'em all",date:"December 13, 2017"}}},pathContext:{slug:"/2017/13/"}}}});
//# sourceMappingURL=path---2017-13-af453f48a233416e5d85.js.map