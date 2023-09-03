import{_ as a,r as t,o as e,c as p,a as n,b as o,e as c,d as i}from"./app-2477bd15.js";const l="/assets/selection_sort-5aa51d89.gif",u={},r=i(`<h1 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h1><p>选择排序（Selection Sort）是一种排序算法，具体来说是一种原地比较排序算法。它的时间复杂度是 O(n^2)，在大型列表上效率低下，并且通常比类似的插入排序表现更差。选择排序以其简单性而闻名，在某些情况下，特别是在辅助内存有限的情况下，它在性能上优于更复杂的算法。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif" alt="算法可视化" tabindex="0" loading="lazy"><figcaption>算法可视化</figcaption></figure><figure><img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif" alt="算法可视化" tabindex="0" loading="lazy"><figcaption>算法可视化</figcaption></figure><h2 id="选择排序流程" tabindex="-1"><a class="header-anchor" href="#选择排序流程" aria-hidden="true">#</a> 选择排序流程</h2><p>选择排序是一种简单直观的排序算法，它的主要思想是在未排序序列中找到最小（或最大）的元素，然后将其放到已排序序列的末尾。以下是选择排序的步骤：</p><ol><li>创建一个函数 <code>selectionSort</code>，它接受一个数组作为参数。</li><li>在 <code>selectionSort</code> 函数内部，使用一个循环遍历未排序序列的所有元素，记为 <code>i</code>，并假设当前元素为最小值。</li><li>在循环中，再嵌套一个循环用于找到未排序序列中的最小元素的索引，从 <code>i+1</code> 到数组末尾。记最小元素索引为 <code>minIndex</code>。</li><li>如果 <code>minIndex</code> 不等于 <code>i</code>，则交换 <code>i</code> 和 <code>minIndex</code> 处的元素，将当前最小元素放到已排序序列的末尾。</li><li>循环结束后，数组将按升序排列。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">selectionSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minIndex <span class="token operator">=</span> j<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>minIndex <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法：</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sortedArray <span class="token operator">=</span> <span class="token function">selectionSort</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sortedArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：[11, 12, 22, 25, 64]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="selection_sort" tabindex="0" loading="lazy"><figcaption>selection_sort</figcaption></figure><h2 id="选择排序优化" tabindex="-1"><a class="header-anchor" href="#选择排序优化" aria-hidden="true">#</a> 选择排序优化</h2><p>这是基本的选择排序算法实现。接下来，我将介绍一种优化方法，称为“双向选择排序”。</p><p>双向选择排序是对传统选择排序的一种改进，它通过同时寻找未排序序列中的最大和最小元素，然后分别将它们放到已排序序列的两端，从而减少了一半的比较次数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bidirectionalSelectionSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> minIndex <span class="token operator">=</span> left<span class="token punctuation">;</span>
    <span class="token keyword">let</span> maxIndex <span class="token operator">=</span> right<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>maxIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        maxIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>minIndex <span class="token operator">!==</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>maxIndex <span class="token operator">===</span> left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果最大元素移到了最小元素的位置，更新最大元素的索引</span>
      maxIndex <span class="token operator">=</span> minIndex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>maxIndex <span class="token operator">!==</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>maxIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>maxIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    left<span class="token operator">++</span><span class="token punctuation">;</span>
    right<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 示例用法：</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sortedArray <span class="token operator">=</span> <span class="token function">bidirectionalSelectionSort</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sortedArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：[11, 12, 22, 25, 64]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>双向选择排序的优化使得每一轮循环可以同时找到最大和最小元素，从而减少了比较次数。这样，在大型数据集上，它的性能优于传统的选择排序算法。</p><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h2><table><thead><tr><th>名称</th><th style="text-align:center;">最佳情况</th><th style="text-align:center;">平均情况</th><th style="text-align:center;">最坏情况</th><th style="text-align:center;">内存</th><th style="text-align:center;">稳定性</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td><strong>选择排序</strong></td><td style="text-align:center;">n^2</td><td style="text-align:center;">n^2</td><td style="text-align:center;">n^2</td><td style="text-align:center;">1</td><td style="text-align:center;">否</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,17),d={href:"https://en.wikipedia.org/wiki/Selection_sort",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=t("ExternalLinkIcon");return e(),p("div",null,[r,n("p",null,[n("a",d,[o("维基百科"),c(s)])])])}const h=a(u,[["render",k],["__file","index.html.vue"]]);export{h as default};
