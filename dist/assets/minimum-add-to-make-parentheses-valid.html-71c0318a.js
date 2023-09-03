import{_ as n,o as s,c as a,d as t}from"./app-2477bd15.js";const p={},o=t(`<h1 id="使括号有效的最少添加" tabindex="-1"><a class="header-anchor" href="#使括号有效的最少添加" aria-hidden="true">#</a> <strong>使括号有效的最少添加</strong></h1><p>给定一个由括号组成的字符串<code>S</code>，通过在字符串中添加最少数量的括号，使得字符串中的每个括号都是有效的。求解需要添加的最少括号数量。</p><p><strong>示例：</strong></p><p>输入：S = &quot;())&quot; 输出：1 解释：在字符串的开头添加一个左括号可以使字符串变为有效的 &quot;())&quot;。</p><p>输入：S = &quot;(((&quot; 输出：3 解释：在字符串的末尾添加三个右括号可以使字符串变为有效的 &quot;((()))&quot;。</p><h2 id="题目分析与解题步骤" tabindex="-1"><a class="header-anchor" href="#题目分析与解题步骤" aria-hidden="true">#</a> <strong>题目分析与解题步骤：</strong></h2><p>这个问题可以使用栈来解决。我们可以遍历字符串中的每个字符，当遇到左括号时将其入栈，当遇到右括号时检查栈顶元素的情况。如果栈为空或栈顶元素不是左括号，则说明当前右括号没有匹配的左括号，需要进行括号添加操作。最后，栈中剩余的左括号数量即为需要添加的最少括号数量。</p><p>解题步骤如下：</p><ol><li><p>创建一个栈<code>stack</code>，用于存储左括号。</p></li><li><p>初始化需要添加的括号数量<code>count</code>为0。</p></li><li><p>遍历字符串<code>S</code>，并执行以下操作：</p><ul><li><p>如果当前字符是左括号，将其入栈。</p></li><li><p>如果当前字符是右括号，检查栈顶元素的情况。如果栈为空或栈顶元素不是左括号，则说明当前右括号没有匹配的左括号，需要进行括号添加操作，将<code>count</code>加1。</p></li><li><p>如果当前字符既不是左括号也不是右括号，则忽略该字符。</p></li></ul></li><li><p>遍历完整个字符串后，栈中剩余的左括号数量即为需要添加的最少括号数量，将其加到<code>count</code>中。</p></li><li><p>返回<code>count</code>作为最终的结果。</p></li></ol><h2 id="javascript解题框架" tabindex="-1"><a class="header-anchor" href="#javascript解题框架" aria-hidden="true">#</a> <strong>JavaScript解题框架：</strong></h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">minAddToMakeValid</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">S</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">S</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> char <span class="token operator">=</span> <span class="token constant">S</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> stack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  count <span class="token operator">+=</span> stack<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个框架中，我们首先定义了一个栈类<code>Stack</code>，其中包含了常用的栈操作方法。然后，我们使用栈来解决使括号有效的最少添加问题。</p><p>在<code>minAddToMakeValid</code>函数中，我们遍历字符串<code>S</code>，根据当前字符的类型进行相应的操作。如果当前字符是左括号，将其入栈。如果当前字符是右括号，则检查栈顶元素的情况，如果栈为空或栈顶元素不是左括号，则说明当前右括号没有匹配的左括号，需要进行括号添加操作，将<code>count</code>加1。最后，遍历完字符串后，将栈中剩余的左括号数量加到<code>count</code>中，得到最终的结果。</p>`,13),e=[o];function c(i,l){return s(),a("div",null,e)}const d=n(p,[["render",c],["__file","minimum-add-to-make-parentheses-valid.html.vue"]]);export{d as default};
