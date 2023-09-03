import{_ as n,o as a,c as s,d as t}from"./app-2477bd15.js";const e={},p=t(`<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h1><p>Dart语言作为一门面向对象的语言，函数在其中占据了非常重要的位置。本文将详细解析如何定义和调用函数，以及箭头语法，高阶函数和闭包等内容。</p><h2 id="_1-函数的定义和调用" tabindex="-1"><a class="header-anchor" href="#_1-函数的定义和调用" aria-hidden="true">#</a> <strong>1. 函数的定义和调用</strong></h2><p>在Dart中，函数可以定义为一段实现特定功能的代码块，可以带有参数和返回值。</p><p>定义函数：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">printHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hello, </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">name</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用函数：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token function">printHello</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Dart&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-箭头语法" tabindex="-1"><a class="header-anchor" href="#_2-箭头语法" aria-hidden="true">#</a> <strong>2. 箭头语法</strong></h2><p>当函数体只有一句话的时候，我们可以使用箭头语法来简化函数的定义。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">printHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Hello, </span><span class="token interpolation"><span class="token punctuation">$</span><span class="token expression">name</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">printHello</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;Dart&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-高阶函数" tabindex="-1"><a class="header-anchor" href="#_3-高阶函数" aria-hidden="true">#</a> <strong>3. 高阶函数</strong></h2><p>高阶函数是指可以接收函数作为参数，或者返回函数的函数。Dart语言支持高阶函数。</p><p>例如，下面的<code>calculate</code>函数接受两个参数和一个函数，然后使用传入的函数来操作参数：</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token keyword">void</span> <span class="token function">calculate</span><span class="token punctuation">(</span>int a<span class="token punctuation">,</span> int b<span class="token punctuation">,</span> <span class="token class-name">Function</span> operation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">operation</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">calculate</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> a <span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-闭包" tabindex="-1"><a class="header-anchor" href="#_4-闭包" aria-hidden="true">#</a> <strong>4. 闭包</strong></h2><p>在Dart中，闭包可以定义为一个函数对象，即使其函数对象的调用在它原始范围之外，也能够访问在它词法范围内的变量。换句话说，闭包是一个能够读取其他函数内部变量的函数。</p><div class="language-dart line-numbers-mode" data-ext="dart"><pre class="language-dart"><code><span class="token class-name">Function</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span>int addBy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>int i<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">&gt;</span> addBy <span class="token operator">+</span> i<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> adder <span class="token operator">=</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">print</span><span class="token punctuation">(</span><span class="token function">adder</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，<code>makeAdder</code>函数返回一个新的函数，这个新的函数能够访问<code>makeAdder</code>函数的内部变量<code>addBy</code>。</p>`,19),o=[p];function c(i,l){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","函数.html.vue"]]);export{r as default};
