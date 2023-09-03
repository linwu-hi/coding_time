import{_ as r,r as d,o as a,c as s,a as t,b as n,e as l,d as i}from"./app-2477bd15.js";const c={},g=i('<h1 id="floyd-warshall-算法" tabindex="-1"><a class="header-anchor" href="#floyd-warshall-算法" aria-hidden="true">#</a> Floyd-Warshall 算法</h1><p>在计算机科学中，<strong>Floyd-Warshall 算法</strong>是一种用于在具有正或负边权重（但没有负循环）的加权图中找到最短路径的算法。该算法的一次执行可以找到所有顶点对之间的最短路径长度（加权之和）。尽管它不返回路径的详细信息，但可以通过对算法进行简单修改来重构路径。</p><h2 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h2><p>Floyd-Warshall 算法比较了图中每对顶点之间的所有可能路径。在图中进行 <code>O(|V|^3)</code> 次比较。这是非常了不起的，因为图中可能有多达 <code>|V|^2</code> 条边，而且需要测试每种边的组合。算法通过逐步改进两个顶点之间的最短路径估计，直到估计达到最优解。</p><p>考虑一个图 <code>G</code>，顶点 <code>V</code> 的编号从 <code>1</code> 到 <code>N</code>。进一步考虑一个函数 <code>shortestPath(i, j, k)</code>，它返回仅使用集合 <code>{1, 2, ..., k}</code> 中的顶点作为中间点的路径，从 <code>i</code> 到 <code>j</code> 的最短路径。现在，给定该函数，我们的目标是找到每个 <code>i</code> 到每个 <code>j</code> 的最短路径，只使用顶点集 <code>{1, 2, ..., N}</code>。</p><figure><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/f9b75e25063384ccca499c56f9a279abf661ad3b" alt="递推公式" tabindex="0" loading="lazy"><figcaption>递推公式</figcaption></figure><p><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/34ac7c89bbb18df3fd660225fd38997079e5e513" alt="递推公式" loading="lazy"><img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/0326d6c14def89269c029da59eba012d0f2edc9d" alt="递推公式" loading="lazy"></p><p>这个公式是 Floyd-Warshall 算法的核心。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>上述算法在下图中的图上执行：</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Floyd-Warshall_example.svg" alt="示例" tabindex="0" loading="lazy"><figcaption>示例</figcaption></figure><p>下表中 <code>i</code> 是行号，<code>j</code> 是列号。</p><p><strong>k = 0</strong></p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;">4</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>1</strong></td><td style="text-align:center;">0</td><td style="text-align:center;">∞</td><td style="text-align:center;">−2</td><td style="text-align:center;">∞</td></tr><tr><td style="text-align:center;"><strong>2</strong></td><td style="text-align:center;">4</td><td style="text-align:center;">0</td><td style="text-align:center;">3</td><td style="text-align:center;">∞</td></tr><tr><td style="text-align:center;"><strong>3</strong></td><td style="text-align:center;">∞</td><td style="text-align:center;">∞</td><td style="text-align:center;">0</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;"><strong>4</strong></td><td style="text-align:center;">∞</td><td style="text-align:center;">−1</td><td style="text-align:center;">∞</td><td style="text-align:center;">0</td></tr></tbody></table><p><strong>k = 1</strong></p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;">4</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>1</strong></td><td style="text-align:center;">0</td><td style="text-align:center;">∞</td><td style="text-align:center;">−2</td><td style="text-align:center;">∞</td></tr><tr><td style="text-align:center;"><strong>2</strong></td><td style="text-align:center;">4</td><td style="text-align:center;">0</td><td style="text-align:center;">2</td><td style="text-align:center;">∞</td></tr><tr><td style="text-align:center;"><strong>3</strong></td><td style="text-align:center;">∞</td><td style="text-align:center;">∞</td><td style="text-align:center;">0</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;"><strong>4</strong></td><td style="text-align:center;">∞</td><td style="text-align:center;">−1</td><td style="text-align:center;">∞</td><td style="text-align:center;">0</td></tr></tbody></table><p><strong>k = 2</strong></p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;">4</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>1</strong></td><td style="text-align:center;">0</td><td style="text-align:center;">∞</td><td style="text-align:center;">−2</td><td style="text-align:center;">∞</td></tr><tr><td style="text-align:center;"><strong>2</strong></td><td style="text-align:center;">4</td><td style="text-align:center;">0</td><td style="text-align:center;">2</td><td style="text-align:center;">∞</td></tr><tr><td style="text-align:center;"><strong>3</strong></td><td style="text-align:center;">∞</td><td style="text-align:center;">∞</td><td style="text-align:center;">0</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;"><strong>4</strong></td><td style="text-align:center;">3</td><td style="text-align:center;">−1</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td></tr></tbody></table><p><strong>k = 3</strong></p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;">4</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>1</strong></td><td style="text-align:center;">0</td><td style="text-align:center;">∞</td><td style="text-align:center;">−2</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;"><strong>2</strong></td><td style="text-align:center;">4</td><td style="text-align:center;">0</td><td style="text-align:center;">2</td><td style="text-align:center;">4</td></tr><tr><td style="text-align:center;"><strong>3</strong></td><td style="text-align:center;">∞</td><td style="text-align:center;">∞</td><td style="text-align:center;">0</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;"><strong>4</strong></td><td style="text-align:center;">3</td><td style="text-align:center;">−1</td><td style="text-align:center;">1</td><td style="text-align:center;">0</td></tr></tbody></table><p><strong>k = 4</strong></p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;">4</th></tr></thead><tbody><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><p><strong>1</strong> | 0 | −1 | −2 | 0 | | <strong>2</strong> | 4 | 0 | 2 | 4 | | <strong>3</strong> | 5 | 1 | 0 | 2 | | <strong>4</strong> | 3 | −1 | 1 | 0 |</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',24),o={href:"https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.youtube.com/watch?v=oNI0rf2P9gE&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=74",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.youtube.com/watch?v=LwJdNfdLF9s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=75",target:"_blank",rel:"noopener noreferrer"};function h(p,b){const e=d("ExternalLinkIcon");return a(),s("div",null,[g,t("ul",null,[t("li",null,[t("a",o,[n("Wikipedia"),l(e)])]),t("li",null,[t("a",y,[n("YouTube (by Abdul Bari)"),l(e)])]),t("li",null,[t("a",x,[n("YouTube (by Tushar Roy)"),l(e)])])])])}const _=r(c,[["render",h],["__file","index.html.vue"]]);export{_ as default};
