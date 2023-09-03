import{_ as n,o as a,c as s,d as p}from"./app-2477bd15.js";const t={},e=p(`<h1 id="最大和的循环子数组" tabindex="-1"><a class="header-anchor" href="#最大和的循环子数组" aria-hidden="true">#</a> 最大和的循环子数组</h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个由整数数组 <code>nums</code> 组成的循环数组，找到具有最大和的连续子数组（允许循环）。子数组最少包含一个元素。</p><h2 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> 解题步骤</h2><p>为了解决循环子数组的最大和问题，我们可以使用动态规划的思想来解决。</p><ol><li><p>处理普通的最大和子数组问题：首先，我们可以使用动态规划来解决普通的最大和子数组问题，即找到不循环的情况下的最大和子数组。我们可以使用 Kadane&#39;s 算法来处理此问题。</p></li><li><p>处理循环的最大和子数组问题：对于循环数组，存在两种情况：</p><ul><li>情况一：最大和子数组不包含循环的起始点和结束点。在这种情况下，我们可以直接应用步骤 1 中的动态规划算法来计算最大和。</li><li>情况二：最大和子数组包含循环的起始点和结束点。在这种情况下，我们需要使用两次动态规划算法来计算最大和： <ul><li>第一次，我们计算从数组起始位置到数组的倒数第二个位置的最大和，即 <code>maxSum1 = kadane(nums, 0, n-2)</code>，其中 <code>kadane()</code> 是步骤 1 中的动态规划算法。</li><li>第二次，我们计算从数组的第二个位置到数组的末尾位置的最大和，即 <code>maxSum2 = kadane(nums, 1, n-1)</code>。</li></ul></li></ul></li><li><p>取最大和：最后，我们比较两个情况下的最大和，即 <code>maxSum = max(maxSum1, maxSum2)</code>，其中 <code>max()</code> 是取两个数的较大值的函数。</p></li></ol><p>下面是使用动态规划解决最大和的循环子数组问题的算法框架：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxSubarraySum</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 计算不循环的最大和子数组</span>
  <span class="token keyword">function</span> <span class="token function">kadane</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> maxSum <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> currSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> currSum <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      maxSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> currSum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> maxSum<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token comment">// 情况一：最大和子数组不包含循环的起始点和结束点</span>
  <span class="token keyword">const</span> maxSum1 <span class="token operator">=</span> <span class="token function">kadane</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 情况二：最大和子数组包含循环的起始点和结束点</span>
  <span class="token keyword">const</span> maxSum2 <span class="token operator">=</span> <span class="token function">kadane</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 取最大和</span>
  <span class="token keyword">const</span> maxSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum1<span class="token punctuation">,</span> maxSum2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> maxSum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[e];function c(u,l){return a(),s("div",null,o)}const r=n(t,[["render",c],["__file","maximum-sum-circular-subarray.html.vue"]]);export{r as default};