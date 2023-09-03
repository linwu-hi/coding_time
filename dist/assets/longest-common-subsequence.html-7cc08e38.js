import{_ as n,o as s,c as a,d as t}from"./app-2477bd15.js";const p={},e=t(`<h1 id="最长公共子序列" tabindex="-1"><a class="header-anchor" href="#最长公共子序列" aria-hidden="true">#</a> 最长公共子序列</h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定两个字符串 <code>text1</code> 和 <code>text2</code>，返回这两个字符串的最长公共子序列的长度。</p><h2 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> 解题步骤</h2><p>为了找到最长公共子序列的长度，我们可以使用动态规划的思想来解决问题。</p><ol><li><p>定义状态：我们可以将问题转化为对于每个字符对 <code>(i, j)</code>，<code>text1</code> 的前 <code>i</code> 个字符和 <code>text2</code> 的前 <code>j</code> 个字符的最长公共子序列的长度。令 <code>dp[i][j]</code> 表示 <code>text1</code> 的前 <code>i</code> 个字符和 <code>text2</code> 的前 <code>j</code> 个字符的最长公共子序列的长度。</p></li><li><p>初始状态：根据题目的约束，当 <code>i</code> 或 <code>j</code> 为 <code>0</code> 时，意味着一个字符串为空，那么最长公共子序列的长度为 <code>0</code>。因此，初始状态为 <code>dp[i][0] = 0</code> 和 <code>dp[0][j] = 0</code>。</p></li><li><p>状态转移方程：对于每个字符对 <code>(i, j)</code>，如果 <code>text1[i]</code> 等于 <code>text2[j]</code>，那么它们必然属于最长公共子序列。因此，我们可以通过将 <code>text1[i]</code> 和 <code>text2[j]</code> 添加到已知的最长公共子序列的末尾来获得一个更长的公共子序列。即 <code>dp[i][j] = dp[i-1][j-1] + 1</code>。如果 <code>text1[i]</code> 不等于 <code>text2[j]</code>，则需要选择 <code>text1</code> 的前 <code>i-1</code> 个字符和 <code>text2</code> 的前 <code>j</code> 个字符的最长公共子序列，以及 <code>text1</code> 的前 <code>i</code> 个字符和 <code>text2</code> 的前 <code>j-1</code> 个字符的最长公共子序列中的较大值。即 <code>dp[i][j] = max(dp[i-1][j], dp[i][j-1])</code>。</p></li><li><p>最终解：问题的解即为 <code>dp[m][n]</code>，其中 <code>m</code> 是 <code>text1</code> 的长度，<code>n</code> 是 <code>text2</code> 的长度。</p></li></ol><p>下面是使用动态规划解决最长公共子序列问题的算法框架：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">longestCommonSubsequence</span><span class="token punctuation">(</span><span class="token parameter">text1<span class="token punctuation">,</span> text2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span> text1<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> text2<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>text1<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> text2<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> dp<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(l,u){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","longest-common-subsequence.html.vue"]]);export{d as default};
