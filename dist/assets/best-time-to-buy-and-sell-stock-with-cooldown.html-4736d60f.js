import{_ as n,o as s,c as a,e as o}from"./app-0301958d.js";const p={},e=o(`<h1 id="冷冻期下的买卖股票的最佳时机" tabindex="-1"><a class="header-anchor" href="#冷冻期下的买卖股票的最佳时机" aria-hidden="true">#</a> 冷冻期下的买卖股票的最佳时机</h1><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个整数数组 <code>prices</code>，其中第 <code>i</code> 个元素代表某只股票在第 <code>i</code> 天的价格。可以无限次地完成交易（买入和卖出一支股票算作一次交易），但是有一个限制条件：卖出股票后的第二天必须休息（即冷冻期）。求能够获得的最大利润。</p><h2 id="解题步骤" tabindex="-1"><a class="header-anchor" href="#解题步骤" aria-hidden="true">#</a> 解题步骤</h2><p>为了解决冷冻期下的买卖股票的最佳时机问题，我们可以使用动态规划的思想来解决。</p><ol><li>定义状态：我们使用三个一维数组来表示动态规划的状态，分别是 <code>buy</code>、<code>sell</code> 和 <code>cooldown</code>。其中，<code>buy[i]</code> 表示第 <code>i</code> 天结束时，最后一个操作是买入股票所能获得的最大利润；<code>sell[i]</code> 表示第 <code>i</code> 天结束时，最后一个操作是卖出股票所能获得的最大利润；<code>cooldown[i]</code> 表示第 <code>i</code> 天结束时，最后一个操作是休息（冷冻期）所能获得的最大利润。</li><li>初始化状态：将 <code>buy[0]</code> 初始化为 <code>-prices[0]</code>，表示第一天结束时买入股票的利润为负数；<code>sell[0]</code> 和 <code>cooldown[0]</code> 初始化为 <code>0</code>。</li><li>定义状态转移方程： <ul><li>对于 <code>buy[i]</code>，我们可以选择在第 <code>i</code> 天买入股票或者不操作。如果选择买入股票，那么前一天的操作必须是冷冻期，即 <code>buy[i] = cooldown[i-1] - prices[i]</code>。如果选择不操作，那么 <code>buy[i]</code> 与前一天的买入股票利润相同，即 <code>buy[i] = buy[i-1]</code>。</li><li>对于 <code>sell[i]</code>，我们可以选择在第 <code>i</code> 天卖出股票或者不操作。如果选择卖出股票，那么前一天的操作必须是买入股票，即 <code>sell[i] = buy[i-1] + prices[i]</code>。如果选择不操作，那么 <code>sell[i]</code> 与前一天的卖出股票利润相同，即 <code>sell[i] = sell[i-1]</code>。</li><li>对于 <code>cooldown[i]</code>，由于冷冻期的限制，它只能在前一天卖出股票后进入冷冻期，即 <code>cooldown[i] = sell[i-1]</code>。</li></ul></li><li>最终结果：遍历完所有天数后，最大利润为卖出股票所能获得的最大利润，即 <code>maxProfit = sell[n-1]</code>，其中 <code>n</code> 是数组 <code>prices</code> 的长度。</li></ol><p>下面是使用动态规划解决冷冻期下的买卖股票的最佳时机问题的算法框架：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> buy <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> sell <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> cooldown <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  buy<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buy<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>cooldown<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> buy<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sell<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>buy<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> sell<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cooldown<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> sell<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> sell<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[e];function c(l,i){return s(),a("div",null,t)}const d=n(p,[["render",c],["__file","best-time-to-buy-and-sell-stock-with-cooldown.html.vue"]]);export{d as default};