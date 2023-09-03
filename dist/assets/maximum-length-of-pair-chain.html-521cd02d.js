import{_ as n,o as s,c as a,d as p}from"./app-2477bd15.js";const t={},e=p(`<h1 id="最长数对链" tabindex="-1"><a class="header-anchor" href="#最长数对链" aria-hidden="true">#</a> 最长数对链</h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给出 <code>n</code> 个数对。在每一个数对中，第一个数字总是比第二个数字小。</p><p>现在，我们定义一种跟随关系，当且仅当 <code>b &lt; c</code> 时，数对 <code>(c, d)</code> 才可以跟在 <code>(a, b)</code> 后面。我们用这种形式来构造一个数对链。</p><p>给定一个排序后的数对列表，你需要构造出一个最长的数对链。</p><p><strong>注意：</strong></p><ul><li>数对的个数应该大于等于 1 且不超过 <code>n</code>。</li><li>数对 <code>(a, b)</code> 和 <code>(c, d)</code> (其中 <code>a &lt; b</code> 且 <code>c &lt; d</code>) 可以构成一个数对链，当且仅当 <code>b &lt; c</code>。</li></ul><h2 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> 解题步骤</h2><p>为了计算最长数对链，我们可以使用动态规划的思想来解决问题。</p><ol><li><p>排序：首先对给定的数对列表按照第二个数字的升序进行排序，以确保后面的数对始终满足跟随关系。</p></li><li><p>定义状态：我们可以将问题转化为对于每个数对的状态，即以该数对为结尾的最长数对链的长度。令 <code>dp[i]</code> 表示以第 <code>i</code> 个数对为结尾的最长数对链的长度。</p></li><li><p>初始状态：对于每个数对，初始状态为 <code>1</code>，即自身形成长度为 1 的数对链。</p></li><li><p>状态转移方程：对于第 <code>i</code> 个数对，我们需要找到所有在它之前的数对 <code>(a, b)</code>，其中 <code>b &lt; c</code>，并更新 <code>dp[i]</code>。如果存在多个满足条件的数对，我们选择最长的数对链长度进行更新。</p><p>综上所述，我们可以得到状态转移方程为：</p><p><code>dp[i] = max(dp[j] + 1)</code>，其中 <code>0 ≤ j &lt; i</code> 且 <code>pairs[j][1] &lt; pairs[i][0]</code>。</p></li><li><p>最终解：问题的解即为所有 <code>dp[i]</code> 中的最大值。</p></li></ol><p>下面是使用动态规划解决最长数对链问题的算法框架：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">findLongestChain</span><span class="token punctuation">(</span><span class="token parameter">pairs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> pairs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token comment">// 排序</span>
  pairs<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 初始化状态数组</span>
  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 计算最长数对链的长度</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>pairs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> pairs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 返回最长数对链的长度</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>dp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","maximum-length-of-pair-chain.html.vue"]]);export{d as default};
