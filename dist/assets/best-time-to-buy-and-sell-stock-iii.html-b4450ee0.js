import{_ as n,o as s,c as a,d as p}from"./app-2477bd15.js";const t={},o=p(`<h1 id="买卖股票的最佳时机-iii" tabindex="-1"><a class="header-anchor" href="#买卖股票的最佳时机-iii" aria-hidden="true">#</a> 买卖股票的最佳时机 III</h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个数组 <code>prices</code>，它的第 <code>i</code> 个元素 <code>prices[i]</code> 表示一支给定股票第 <code>i</code> 天的价格。设计一个算法来计算你所能获取的最大利润。你最多可以完成 <strong>两笔</strong> 交易。</p><p>**注意：**你不能同时进行多笔交易（即，你必须在再次购买之前出售掉之前的股票）。</p><h2 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> 解题步骤</h2><p>为了计算买卖股票的最佳时机 III，我们可以使用动态规划的思想来解决问题。</p><ol><li><p>定义状态：我们可以将问题转化为对于每个交易日的状态，即持有股票和未持有股票。令 <code>dp[i][j][k]</code> 表示第 <code>i</code> 天，已完成 <code>j</code> 笔交易，并且处于状态 <code>k</code>（0 表示未持有股票，1 表示持有股票）时的最大利润。</p></li><li><p>初始状态：对于第一天，我们有以下初始状态：</p><ul><li><code>dp[0][0][0] = 0</code>，第一天未持有股票时的最大利润为 0。</li><li><code>dp[0][1][0] = 0</code>，第一天完成了一笔交易，但未持有股票时的最大利润为 0。</li><li><code>dp[0][0][1] = -prices[0]</code>，第一天持有股票时的最大利润为买入价格的相反数。</li><li><code>dp[0][1][1] = -prices[0]</code>，第一天完成了一笔交易且持有股票时的最大利润为买入价格的相反数。</li></ul></li><li><p>状态转移方程：对于第 <code>i</code> 天，我们可以进行以下操作：</p><ul><li>如果第 <code>i</code> 天未持有股票且未完成任何交易（<code>k = 0, j = 0</code>），那么最大利润为前一天未持有股票且未完成任何交易的最大利润 <code>dp[i-1][0][0]</code>。</li><li>如果第 <code>i</code> 天未持有股票但已完成一笔交易（<code>k = 0, j = 1</code>），那么最大利润为前一天未持有股票但已完成一笔交易的最大利润 <code>dp[i-1][1][0]</code> 加上在第 <code>i</code> 天卖出股票所得到的利润 <code>prices[i]</code>。</li><li>如果第 <code>i</code> 天持有股票且未完成任何交易（<code>k = 1, j = 0</code>），那么最大利润为前一天持有股票且未完成任何交易的最大利润 <code>dp[i-1][0][1]</code>。</li><li>如果第 <code>i</code> 天持有股票且已完成一笔交易（<code>k = 1, j = 1</code>），那么最大利润为前一天持有股票且已完成一笔交易的最大利润 <code>dp[i-1][1][1]</code> 加上在第 <code>i</code> 天卖出股票所得到的利润 <code>prices[i]</code>。</li></ul><p>综上所述，我们可以得到状态转移方程为：</p><ul><li><code>dp[i][0][0] = dp[i-1][0][0]</code></li><li><code>dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][0][0] - prices[i])</code></li><li><code>dp[i][0][1] = max(dp[i-1][0][1], dp[i-1][1][0] + prices[i])</code></li><li><code>dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][1] - prices[i])</code></li></ul></li><li><p>最终解：问题的解即为最后一天未持有股票且已完成两笔交易时的最大利润，即 <code>dp[n-1][1][0]</code>，其中 <code>n</code> 是交易日的总数。</p></li></ol><p>下面是使用动态规划解决买卖股票的最佳时机 III 问题的算法框架：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[o];function e(u,l){return s(),a("div",null,c)}const k=n(t,[["render",e],["__file","best-time-to-buy-and-sell-stock-iii.html.vue"]]);export{k as default};
