import{_ as o,r as l,o as c,c as i,a as n,e as a,w as t,d as p,b as e}from"./app-2477bd15.js";const u={},r=p('<h1 id="序言" tabindex="-1"><a class="header-anchor" href="#序言" aria-hidden="true">#</a> 序言</h1><blockquote><p>写给前端同学的算法笔记📒，这是去腾讯之前整理的算法笔记，跟着刷一遍，去面试字节、腾讯等其它大厂就轻松多了</p></blockquote><ul><li><p>数据结构和算法的重要性： 算法被称为程序的灵魂，因为优秀的算法能在处理海量数据时保持高速计算能力。计算框架和缓存技术的核心功能就源于算法。在实际工作中，一个高效的算法可以使支持数千万在线用户的服务器程序稳定运行。数据结构和算法也是许多一线IT公司面试的重要部分。如果程序员不想永远只是编写代码，那么就需要花时间研究数据结构和算法。</p></li><li><p>经典的算法面试题： 有一些经典的算法问题常常出现在面试中，如字符串匹配问题、动态规划问题。这些问题涉及到的算法包括暴力匹配、KMP 算法、分治算法、回溯算法、深度优先搜索 (DFS) 和贪心算法。解决这些问题不仅需要理解和掌握相关的算法，还需要能够灵活运用这些算法来优化程序。</p></li><li><p>本笔记📒深入讲解数据结构和算法，内容系统完整，非常适合想要深入理解数据结构和算法的学习者。我们采用了&quot;应用场景 -&gt; 数据结构或算法 -&gt; 剖析原理 -&gt; 分析实现步骤 -&gt; 代码实现&quot;的教学步骤，力求通俗易懂。</p></li><li><p>数据结构和算法的内容介绍： 本课程覆盖了各种数据结构和算法，包括但不限于字符串匹配算法、分治算法、回溯算法、深度优先搜索 (DFS) 和贪心算法。我们会通过具体的应用场，来讲解这些数据结构和算法的原理和实现步骤。</p></li></ul><h2 id="📒笔记目录" tabindex="-1"><a class="header-anchor" href="#📒笔记目录" aria-hidden="true">#</a> 📒笔记目录</h2>',4),d=p(`<h2 id="笔记代码依赖" tabindex="-1"><a class="header-anchor" href="#笔记代码依赖" aria-hidden="true">#</a> 笔记代码依赖</h2><h3 id="comparator" tabindex="-1"><a class="header-anchor" href="#comparator" aria-hidden="true">#</a> Comparator</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Comparator</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 构造函数.
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token operator">*</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">compareFunction</span><span class="token punctuation">]</span></span> - 可以是自定义的比较函数，该函数可以比较自定义的对象.
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">compareFunction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>compare <span class="token operator">=</span> compareFunction <span class="token operator">||</span> Comparator<span class="token punctuation">.</span>defaultCompareFunction<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 默认比较函数。假设 &quot;a&quot; 和 &quot;b&quot; 是字符串或数字。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span>number<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">(</span>string<span class="token operator">|</span>number<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token keyword">static</span> <span class="token function">defaultCompareFunction</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> a <span class="token operator">&lt;</span> b <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查两个变量是否相等。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">equal</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查变量 &quot;a&quot; 是否小于 &quot;b&quot;。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">lessThan</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查变量 &quot;a&quot; 是否大于 &quot;b&quot;。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">greaterThan</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查变量 &quot;a&quot; 是否小于或等于 &quot;b&quot;。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">lessThanOrEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">lessThan</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 检查变量 &quot;a&quot; 是否大于或等于 &quot;b&quot;。
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">a</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">b</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">greaterThanOrEqual</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">greaterThan</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 反转比较顺序。
   */</span>
  <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> compareOriginal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compare<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">compare</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">compareOriginal</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关于我" tabindex="-1"><a class="header-anchor" href="#关于我" aria-hidden="true">#</a> 关于我</h2><p>笔名<code>linwu</code>,一枚前端开发工程师，曾入职腾讯等多家知名互联网公司，后面我会持续分享精品课程，欢迎持续关注</p><h2 id="关注公众号" tabindex="-1"><a class="header-anchor" href="#关注公众号" aria-hidden="true">#</a> 关注公众号</h2><blockquote><p>关注公众号获取代码以及最新教程和文章，也可以联系作者，获取帮助</p></blockquote><figure><img src="https://cdn.jsdelivr.net/gh/linwu-hi/coding-time-typescript@main/docs/.vuepress/public/assets/image/wx.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,8);function k(m,v){const s=l("RouterLink");return c(),i("div",null,[r,n("ul",null,[n("li",null,[a(s,{to:"/lc/docs/data-structures/linked-list.html"},{default:t(()=>[e("数据结构")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"/lc/docs/data-structures/linked-list.html"},{default:t(()=>[e("linked-list")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/doubly-linked-list.html"},{default:t(()=>[e("doubly-linked-list")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/queue.html"},{default:t(()=>[e("queue")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/stack.html"},{default:t(()=>[e("stack")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/hash-table.html"},{default:t(()=>[e("hash-table")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/graph.html"},{default:t(()=>[e("graph")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/heap.html"},{default:t(()=>[e("heap")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/lru-cache.html"},{default:t(()=>[e("lru-cache")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/priority-queue.html"},{default:t(()=>[e("priority-queue")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/disjoint-set.html"},{default:t(()=>[e("disjoint-set")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/bloom-filter.html"},{default:t(()=>[e("bloom-filter")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/data-structures/trie.html"},{default:t(()=>[e("trie")]),_:1})])])]),n("li",null,[a(s,{to:"/lc/docs/algorithms/binary-search.html"},{default:t(()=>[e("算法")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"/lc/docs/algorithms/sorting/bubble-sort.html"},{default:t(()=>[e("排序")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/search/binary-search.html"},{default:t(()=>[e("搜索")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/linked-list/traversal.html"},{default:t(()=>[e("链表")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/stack/preamble.html"},{default:t(()=>[e("栈")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/queue/preamble.html"},{default:t(()=>[e("队列")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/two-pointers/preamble.html"},{default:t(()=>[e("双指针")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/sliding-window/preamble.html"},{default:t(()=>[e("滑动窗口")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/dynamic-programming/preamble.html"},{default:t(()=>[e("动态规划")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/greedy-algorithm/preamble.html"},{default:t(()=>[e("贪心算法")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/string/rabin-karp.html"},{default:t(()=>[e("字符串")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/tree/breadth-first-search.html"},{default:t(()=>[e("树")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/graph/breadth-first-search.html"},{default:t(()=>[e("图")]),_:1})]),n("li",null,[a(s,{to:"/lc/docs/algorithms/statistics/weighted-random.html"},{default:t(()=>[e("统计数据")]),_:1})])])])]),d])}const h=o(u,[["render",k],["__file","preamble.html.vue"]]);export{h as default};
