webpackJsonp([0xb9d77b5dfab6],{505:function(n,s){n.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/18.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p>Gweneth got it right.\n<a href="https://goop.com/work/relationships/conscious-uncoupling-2/">Conscious Uncoupling</a> is a good (for components).</p>\n<p>Let’s explore a new <a href="/2017/12">smooshing</a> technique that makes <code>PokemonPager</code> reusable.</p>\n<h2>Insert component here</h2>\n<p>You can <strong>insert</strong> components into other components via props.</p>\n<p>Because <a href="https://react.holiday/2017/3">components are function</a> and JavaScript functions transportable, we can pass components around.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SomeComponent</span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>OtherComponent<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<br />\n<p>The above might be implemented something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">OtherComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>👋<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">SomeComponent</span> <span class="token operator">=</span> props <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>props.component</span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<br />\n<p><em>(Yes, JSX lets you do that)</em></p>\n<h2>Uncoupling <code>PokemonPager</code></h2>\n<p>Our <code>PokemonPager</code> doesn’t need to be Pokemon specific.\nWith a little work, it could render anything that takes an <code>id</code> prop.</p>\n<p>Let’s uncouple it by <strong>inserting</strong> <code>Pokemon</code> via a <code>component</code> prop.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PokemonPager</span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Pokemon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<br />\n<p>Now update the <code>PokemonPager</code> to render <code>this.props.component</code> where <code>&#x3C;Pokemon /></code> is.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>this.props.component</span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<br />\n<p>Finally, rename <code>PokemonPager</code> to a <code>IdPager</code>, wherever you see it.</p>\n<h2>Smooshing is magic</h2>\n<p>We’re getting to the good stuff.\n<strong>Smooshing</strong> is the magic of React 🧙‍♂️</p>\n<p>This is the first of three <strong>smooshing</strong> patterns we’ll explore this week.</p>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and explore component insertion <strong>smooshing</strong>.</p>\n<ul>\n<li>Create a new component called <code>ShowId</code> and <strong>insert</strong> it into <code>IdPager</code> where <code>Pokemon</code> is now.</li>\n<li>Read the doc on defaultProps. Use your new <code>ShowId</code> component as the <code>defaultProps</code> for <code>omponent</code>.</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/my582lwk4p" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 18: Conscious uncoupling",date:"December 18, 2017"}}},pathContext:{slug:"/2017/18/"}}}});
//# sourceMappingURL=path---2017-18-ec09670ed8bd318fdc43.js.map