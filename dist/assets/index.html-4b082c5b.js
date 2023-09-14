import{_ as t,r as p,o,c,a as n,b as a,e,d as l}from"./app-2d6feb9f.js";const i={},u=l(`<h1 id="布隆过滤器" tabindex="-1"><a class="header-anchor" href="#布隆过滤器" aria-hidden="true">#</a> 布隆过滤器</h1><p><strong>布隆过滤器</strong>是一种空间有效的概率数据结构，设计用来测试一个元素是否在一个集合中。它的设计目标是极快的速度和最小的内存使用，但可能会产生误报。可能会有误报，但不会有漏报 —— 换句话说，查询返回的是&quot;可能在集合中&quot;或&quot;绝对不在集合中&quot;。</p><p>布隆提出这种技术是为了应对那些使用&quot;常规&quot;无误差哈希技术处理会需要不切实际大量内存的源数据的应用。</p><h2 id="算法描述" tabindex="-1"><a class="header-anchor" href="#算法描述" aria-hidden="true">#</a> 算法描述</h2><p>一个空的布隆过滤器是一个包含<code>m</code>位的位数组，所有位都设置为<code>0</code>。还必须定义<code>k</code>个不同的哈希函数，每一个都将某个集合元素映射或哈希到<code>m</code>个数组位置中的一个，生成均匀随机分布。通常，<code>k</code>是一个常数，远小于<code>m</code>，<code>m</code>与要添加的元素数量成比例；<code>k</code>的确切选择和<code>m</code>的比例常数由过滤器预期的误报率确定。</p><p>下面是一个表示集合<code>{x, y, z}</code>的布隆过滤器的例子。彩色箭头显示了每个集合元素映射到的位数组中的位置。元素<code>w</code>不在集合<code>{x, y, z}</code>中，因为它哈希到一个包含<code>0</code>的位数组位置。对于此图，<code>m = 18</code>，<code>k = 3</code>。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Bloom_filter.svg" alt="Bloom Filter" tabindex="0" loading="lazy"><figcaption>Bloom Filter</figcaption></figure><h2 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h2><p>布隆过滤器可以执行两个主要操作：<em>插入</em> 和 <em>搜索</em>。搜索可能会导致误报。删除操作是不可能的。</p><p>换句话说，过滤器可以接收项目。当我们去检查一个项目是否之前已经插入，它可以告诉我们&quot;否&quot;或者&quot;可能&quot;。</p><p>插入和搜索都是<code>O(1)</code>操作。</p><h2 id="构造过滤器" tabindex="-1"><a class="header-anchor" href="#构造过滤器" aria-hidden="true">#</a> 构造过滤器</h2><p>布隆过滤器的创建是通过分配一定的大小。在我们的例子中，我们使用<code>100</code>作为默认长度。所有的位置都初始化为<code>false</code>。</p><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h3><p>在插入过程中，会使用多个哈希函数，我们的例子中使用了<code>3</code>个哈希函数，对输入进行哈希。这些哈希函数输出索引。在每个接收到的索引处，我们简单地将布隆过滤器中的值更改为<code>true</code>。</p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><p>搜索</p><p>在搜索过程中，调用相同的哈希函数并用于哈希输入。然后我们检查在布隆过滤器中接收到的索引是否_全部_为<code>true</code>。如果它们_全部_为<code>true</code>，我们知道布隆过滤器可能已经插入过这个值。</p><p>然而，这并不确定，因为有可能其他之前插入的值将这些位置的值改变为<code>true</code>。这些值并不一定是由当前搜索的项目设为<code>true</code>的。除非只有一个项目被插入，否则无法绝对确定。</p><p>在检查由我们的哈希函数返回的布隆过滤器索引时，如果其中任何一个值为<code>false</code>，我们可以确定地知道该项目之前未被插入。</p><h2 id="误报" tabindex="-1"><a class="header-anchor" href="#误报" aria-hidden="true">#</a> 误报</h2><p>误报的概率由三个因素决定：布隆过滤器的大小，我们使用的哈希函数数量，以及已经插入到过滤器中的项目数量。</p><p>计算误报概率的公式是：</p><p>( 1 - e <sup>-kn/m</sup> ) <sup>k</sup></p><p><code>k</code> = 哈希函数的数量</p><p><code>m</code> = 过滤器大小</p><p><code>n</code> = 插入的项目数量</p><p>这些变量，<code>k</code>，<code>m</code>，和<code>n</code>，应该根据误报的接受程度进行选择。如果选择的值导致的概率过高，那么应该调整这些值并重新计算概率。</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p>布隆过滤器可以用于博客网站。如果目标是只向读者展示他们从未见过的文章，布隆过滤器就很完美。它可以存储基于文章的哈希值。用户阅读了几篇文章后，它们可以被插入到过滤器中。下次用户访问网站时，这些文章可以被从结果中过滤掉。</p><p>一些文章不可避免地会被误过滤掉，但这种成本是可以接受的。只要他们每次访问网站时都能看到新的文章，用户就不会介意看不到几篇文章。</p><h2 id="完整代码" tabindex="-1"><a class="header-anchor" href="#完整代码" aria-hidden="true">#</a> 完整代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">BloomFilter</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">size</span> - 存储区的大小。
   */</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">size <span class="token operator">=</span> <span class="token number">100</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 布隆过滤器的大小直接影响误报的可能性。</span>
    <span class="token comment">// 大小越大，误报的可能性越低。</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>storage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">item</span>
   */</span>
  <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> hashValues <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHashValues</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 将每个hash值索引设置为true。</span>
    hashValues<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">item</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">mayContain</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> hashValues <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getHashValues</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> hashIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> hashIndex <span class="token operator">&lt;</span> hashValues<span class="token punctuation">.</span>length<span class="token punctuation">;</span> hashIndex <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>hashValues<span class="token punctuation">[</span>hashIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 我们知道该项目肯定未被插入。</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 该项可能插入或可能未插入。</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 为过滤器创建数据存储。
   * 我们使用此方法生成存储以封装数据本身并只提供访问
   * 必要方法的接口。
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">size</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> storage <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 将所有索引初始化为false</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> storageCellIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> storageCellIndex <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> storageCellIndex <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      storage<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> storageInterface <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> storage<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        storage<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> storageInterface<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">item</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">hash1</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> charIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> charIndex <span class="token operator">&lt;</span> item<span class="token punctuation">.</span>length<span class="token punctuation">;</span> charIndex <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> char <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>charIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
      hash <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">+</span> hash <span class="token operator">+</span> char<span class="token punctuation">;</span>
      hash <span class="token operator">&amp;=</span> hash<span class="token punctuation">;</span> <span class="token comment">// 转换为32位整数</span>
      hash <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> hash <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">item</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">hash2</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token number">5381</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> charIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> charIndex <span class="token operator">&lt;</span> item<span class="token punctuation">.</span>length<span class="token punctuation">;</span> charIndex <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> char <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>charIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
      hash <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">+</span> hash <span class="token operator">+</span> char<span class="token punctuation">;</span> <span class="token comment">/* hash * 33 + c */</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>hash <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">item</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">hash3</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> charIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> charIndex <span class="token operator">&lt;</span> item<span class="token punctuation">.</span>length<span class="token punctuation">;</span> charIndex <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> char <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>charIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
      hash <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">&lt;&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">-</span> hash<span class="token punctuation">;</span>
      hash <span class="token operator">+=</span> char<span class="token punctuation">;</span>
      hash <span class="token operator">&amp;=</span> hash<span class="token punctuation">;</span> <span class="token comment">// 转换为32位整数</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>hash <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 在输入上运行所有3个哈希函数并返回结果数组。
   *
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">item</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getHashValues</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hash1</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hash2</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hash3</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,34),r={href:"https://en.wikipedia.org/wiki/Bloom_filter",target:"_blank",rel:"noopener noreferrer"},k={href:"http://llimllib.github.io/bloomfilter-tutorial/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://hur.st/bloomfilter/?n=4&p=&m=18&k=3",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.youtube.com/watch?v=bEmBh1HtYrw",target:"_blank",rel:"noopener noreferrer"};function h(b,f){const s=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("维基百科"),e(s)])]),n("li",null,[n("a",k,[a("布隆过滤器实例讲解"),e(s)])]),n("li",null,[n("a",d,[a("计算误报概率"),e(s)])]),n("li",null,[n("a",m,[a("Medium上的布隆过滤器"),e(s)])]),n("li",null,[n("a",v,[a("YouTube上的布隆过滤器"),e(s)])])])])}const y=t(i,[["render",h],["__file","index.html.vue"]]);export{y as default};