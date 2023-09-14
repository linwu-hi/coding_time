import{_ as p,r as o,o as c,c as l,a as n,b as s,e as t,d as e}from"./app-2d6feb9f.js";const i="/assets/insertion_sort-45d4a397.webp",r={},u=e(`<h1 id="插入排序" tabindex="-1"><a class="header-anchor" href="#插入排序" aria-hidden="true">#</a> 插入排序</h1><p>插入排序（Insertion Sort）是一种简单直观的排序算法。它的工作原理是通过构建有序序列，在未排序的部分中从后向前逐步扫描，找到合适位置并插入元素。插入排序通常采用原地排序（只使用O(1)的额外空间），因此在扫描过程中需要反复将已排序元素向后移动，为新元素提供插入空间。</p><h2 id="基本思想" tabindex="-1"><a class="header-anchor" href="#基本思想" aria-hidden="true">#</a> 基本思想</h2><blockquote><p>插入排序的基本思想是将数组分为已排序和未排序两部分，初始时已排序部分只包含第一个元素，然后依次将未排序部分的元素插入到已排序部分的正确位置，直到所有元素都有序为止。</p></blockquote><h2 id="实现逻辑" tabindex="-1"><a class="header-anchor" href="#实现逻辑" aria-hidden="true">#</a> 实现逻辑</h2><ol><li>从第一个元素开始，将其视为已排序部分。</li><li>取出下一个元素，从后向前扫描已排序部分，找到插入位置。</li><li>如果当前元素大于被比较元素，则将被比较元素向后移动一位。</li><li>重复步骤3，直到找到插入位置。</li><li>将当前元素插入到插入位置后。</li><li>重复步骤2~5，直到所有元素都插入到已排序部分。</li></ol><h2 id="动图演示" tabindex="-1"><a class="header-anchor" href="#动图演示" aria-hidden="true">#</a> 动图演示</h2><figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1178490147784f25948aabf741390277~tplv-k3u1fbpfcp-zoom-1.image" alt="Insertion Sort" tabindex="0" loading="lazy"><figcaption>Insertion Sort</figcaption></figure><h2 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h2><ul><li>平均时间复杂度：O(n^2)</li><li>最坏时间复杂度：O(n^2)</li><li>空间复杂度：O(1)</li><li>排序方式：In-place</li><li>稳定性：稳定排序算法</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 插入排序</span>
<span class="token keyword">function</span> <span class="token function">insertionSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
      j<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> current<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+'" alt="insertion_sort" tabindex="0" loading="lazy"><figcaption>insertion_sort</figcaption></figure>',13),d={href:"https://visualgo.net/zh",target:"_blank",rel:"noopener noreferrer"},k=e(`<blockquote><p>本来自己想写一个，可是太费时间了，外面找了一圈，发现有了，就拿来演示一下</p></blockquote><h2 id="算法优化改进" tabindex="-1"><a class="header-anchor" href="#算法优化改进" aria-hidden="true">#</a> 算法优化改进</h2><h3 id="改进方法1-二分插入排序" tabindex="-1"><a class="header-anchor" href="#改进方法1-二分插入排序" aria-hidden="true">#</a> 改进方法① - 二分插入排序</h3><p>二分插入排序是对直接插入排序的改进，使用二分查找来找到插入位置，从而减少比较的次数。</p><p>改进代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 二分插入排序</span>
<span class="token keyword">function</span> <span class="token function">binaryInsertionSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> current <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> middle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>middle<span class="token punctuation">]</span> <span class="token operator">&gt;</span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        right <span class="token operator">=</span> middle <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        left <span class="token operator">=</span> middle <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> left<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> current<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="改进方法2-希尔排序" tabindex="-1"><a class="header-anchor" href="#改进方法2-希尔排序" aria-hidden="true">#</a> 改进方法② - 希尔排序</h3><p>希尔排序是对插入排序的进一步改进，通过将数组分成多个子序列进行插入排序，逐渐缩小子序列的间隔，最终实现全局的排序。</p><hr><hr><h2 id="复杂度" tabindex="-1"><a class="header-anchor" href="#复杂度" aria-hidden="true">#</a> 复杂度</h2><table><thead><tr><th>名称</th><th style="text-align:center;">最佳情况</th><th style="text-align:center;">平均情况</th><th style="text-align:center;">最坏情况</th><th style="text-align:center;">内存</th><th style="text-align:center;">稳定性</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td><strong>插入排序</strong></td><td style="text-align:center;">n</td><td style="text-align:center;">n<sup>2</sup></td><td style="text-align:center;">n<sup>2</sup></td><td style="text-align:center;">1</td><td style="text-align:center;">是</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,13),h={href:"https://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",rel:"noopener noreferrer"};function v(b,m){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[n("a",d,[s("来源"),t(a)])]),k,n("p",null,[n("a",h,[s("维基百科"),t(a)])])])}const g=p(r,[["render",v],["__file","index.html.vue"]]);export{g as default};