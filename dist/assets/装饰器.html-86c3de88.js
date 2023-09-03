import{_ as n,o as s,c as a,d as t}from"./app-2477bd15.js";const p={},e=t(`<h1 id="装饰器与反射元数据" tabindex="-1"><a class="header-anchor" href="#装饰器与反射元数据" aria-hidden="true">#</a> 装饰器与反射元数据</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>在过去的几年中，JavaScript及其生态系统发生了快速的变化。其中，TypeScript已成为许多开发人员的首选语言。其主要优势在于其静态类型系统，它使我们可以在编译时捕获错误，而不是在运行时。除此之外，TypeScript还为我们提供了许多ES6+特性以及一些其他的独有特性，例如枚举、命名空间和装饰器。</p><h2 id="装饰器简介" tabindex="-1"><a class="header-anchor" href="#装饰器简介" aria-hidden="true">#</a> 装饰器简介</h2><p>在TypeScript中，装饰器是一种特殊类型的声明，可以被附加到类声明，方法，属性，访问器或参数上。装饰器的核心思想是增强已经存在的类、方法、属性等的行为，或者添加新的行为。通过装饰器，我们可以在不改变原始类的定义的情况下，为类添加新的特性。</p><p>在TypeScript中，装饰器使用<code>@expression</code>的形式。其中，<code>expression</code>必须为一个返回函数的表达式，这个函数在运行时会被调用，传入相关的装饰器参数。</p><p>TypeScript支持以下几种类型的装饰器：</p><ul><li>类装饰器</li><li>方法装饰器</li><li>访问器装饰器</li><li>属性装饰器</li><li>参数装饰器</li></ul><h2 id="类装饰器" tabindex="-1"><a class="header-anchor" href="#类装饰器" aria-hidden="true">#</a> 类装饰器</h2><p>类装饰器应用于类的构造函数，用于观察、修改或替换类定义。类装饰器在应用时，会作为函数调用，并将构造函数作为其唯一的参数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Sealed</span><span class="token punctuation">(</span>constructor<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Sealed</span></span>
<span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> greeting<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello, &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>greeting<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法装饰器" tabindex="-1"><a class="header-anchor" href="#方法装饰器" aria-hidden="true">#</a> 方法装饰器</h2><p>方法装饰器应用于方法的属性描述符，并可以用于观察、修改或替换方法定义。当装饰器被调用时，它会接收到三个参数：当前类的原型，方法名，以及该方法的属性描述符。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">Log</span><span class="token punctuation">(</span>target<span class="token operator">:</span> Object<span class="token punctuation">,</span> propertyKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> TypedPropertyDescriptor<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> originalMethod <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 保存原始函数</span>
    descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Arguments: &quot;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">originalMethod</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
       

 <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Result: &quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Log</span></span>
    <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问器装饰器" tabindex="-1"><a class="header-anchor" href="#访问器装饰器" aria-hidden="true">#</a> 访问器装饰器</h2><p>访问器装饰器可以应用于访问器的属性描述符，并可以用于观察、修改或替换访问器的定义。访问器装饰器和方法装饰器有相似的语法。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">ReadOnly</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    descriptor<span class="token punctuation">.</span>writable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> _radius<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>radius<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">ReadOnly</span></span>
    <span class="token keyword">get</span> <span class="token function">radius</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器与反射元数据-1" tabindex="-1"><a class="header-anchor" href="#装饰器与反射元数据-1" aria-hidden="true">#</a> 装饰器与反射元数据</h2><p>为了让装饰器能够更好地工作，TypeScript 提供了反射元数据 API。 这是一个实验性的 API，它允许装饰器在声明时添加元数据。 可以使用 npm 来安装反射元数据 API：</p><blockquote><p>反射元数据（Reflect Metadata）是一个实验性的 API，用于在声明装饰器时执行元数据类型注解和元数据反射。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> reflect-metadata <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，你需要在全局范围内导入反射 API:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token string">&quot;reflect-metadata&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 TypeScript 配置文件 <code>tsconfig.json</code> 中，你需要开启 <code>emitDecoratorMetadata</code> 选项:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;emitDecoratorMetadata&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你就可以在装饰器中使用反射 API 了:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">logType</span><span class="token punctuation">(</span>target <span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> key <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> t <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getMetadata</span><span class="token punctuation">(</span><span class="token string">&quot;design:type&quot;</span><span class="token punctuation">,</span> target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> type: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>t<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">{</span> 
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">logType</span></span>
  <span class="token keyword">public</span> attr1 <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是装饰器的基本原理与应用。装饰器可以使我们的代码更简洁，更易读，也使得我们的代码更易于管理和维护。但是，需要注意的是，装饰器目前还处于实验阶段，如果你决定在生产环境中使用装饰器，你需要了解使用装饰器可能带来的风险。</p><h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2><p>TypeScript的装饰器为我们提供了一种强大的工具，可以在运行时改变类的行为。通过理解装饰器的工作原理，我们可以创造更加强大、灵活且易于维护的应用。</p>`,30),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","装饰器.html.vue"]]);export{r as default};
