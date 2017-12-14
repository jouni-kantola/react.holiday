webpackJsonp([0x946879211d22],{502:function(n,a){n.exports={data:{site:{siteMetadata:{title:"React 🎄",author:"Michael Chan @chantastic"}},markdownRemark:{id:"/Users/chan/learnreact/react.holiday/src/pages/2017/6.md absPath of file >>> MarkdownRemark",html:'<div class="measure">\n<p>Look at HTML.\nIt lets you handle DOM events inline.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name">onmousenter</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alert(<span class="token punctuation">\'</span>imma...<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span>\n  <span class="token attr-name">onmousleave</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alert(<span class="token punctuation">\'</span>just passing through.<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span>\n  <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alert(<span class="token punctuation">\'</span>do that thing you do!<span class="token punctuation">\'</span>)<span class="token punctuation">"</span></span>\n<span class="token punctuation">></span></span>Do something<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<br />\n<p>I could tell the sordid history that landed this in the “bad practice” bucket but we’d both be bored.</p>\n<p>Suffice to say, folks bent on “good practices” had to jump through hoops to implement safe, reusable, cross-browser event handlers.</p>\n<p>React Events don’t share these trade-offs.</p>\n<h2>Adding event handlers in React</h2>\n<p>Let’s add an <code>onClick</code> (remember to camelCase) to our <code>ClapsCounter</code> from <a href="/2017/5">yesterday</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>\n  <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">" claps!"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n  👏\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3>Look, Ma! No strings!</h3>\n<p>First, you’ll notice that we’re not using strings anymore 🙌 🙌 🙌</p>\n<p>This is a theme in React:\n<strong>fewer strings, more JavaScript.</strong></p>\n<h3>Look, Ma! No DOM handlers!</h3>\n<p>What the fish?\nWhere did our event handler go?</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/button-event-handler-4762394a5a6d7536e73d37247850bfd3-07c6b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 25.115207373271886%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA6UlEQVQY052Py0rDUBCG87wuKiLiouCF2otdCK70HUpQ8BIbK/gSCl2VQJMmzTkxyclJXEg+zynoRjf6wzeLf4b5Z5ymacjzgkB8kEiFVdu2G/4jZ9st6Rh2ryuOPcXwUXPoaU58zemTYaYZGcYG2xsZLvyXb996A8N4mjHwMpyticLSva3oeTkHd4o9V9B7UGZAsuPmDP2C/as3+lNFZ5Jxdv9K96bYLD0y4X0TfvksOZ8JnK9TE1kSLBNWqxiRpqzXKVJI4jhBa00YRiiliMKQxSIgEhV1Xf982ZayLJkvFfPo/dehv+gTyQpomUmh7VEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Button Event Handling in React"\n        title=""\n        src="/static/button-event-handler-4762394a5a6d7536e73d37247850bfd3-fb8a0.png"\n        srcset="/static/button-event-handler-4762394a5a6d7536e73d37247850bfd3-1a291.png 148w,\n/static/button-event-handler-4762394a5a6d7536e73d37247850bfd3-2bc4a.png 295w,\n/static/button-event-handler-4762394a5a6d7536e73d37247850bfd3-fb8a0.png 590w,\n/static/button-event-handler-4762394a5a6d7536e73d37247850bfd3-07c6b.png 868w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>React did the work of making this “bad practice” a “good practice” by adding our event handler at the top of the <code>document</code>.</p>\n<p>This is another React theme:\n<strong>best practices don’t have to be complicated practices.</strong></p>\n<h3>But really, what happened?</h3>\n<p>Magic 🔮👻</p>\n<p>If you <strong>must</strong> know, you can read more about React’s <a href="https://reactjs.org/docs/handling-events.html">Event handling magic</a> and <a href="https://reactjs.org/docs/events.html">Synthetic Events</a>.</p>\n<h2>Tinker with it</h2>\n<p>Use the workspace below and play with events.</p>\n<ul>\n<li>Add a few mouse events.</li>\n<li>For kicks, add a text input. Anything weird happen? Like you can’t type in it? Spooooooky.</li>\n</ul>\n</div>\n<iframe src="https://codesandbox.io/embed/62jmm57zmn" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>',frontmatter:{title:"Day 6: Events aren't events",date:"December 06, 2017"}}},pathContext:{slug:"/2017/6/"}}}});
//# sourceMappingURL=path---2017-6-69363c4db421059e4a9b.js.map