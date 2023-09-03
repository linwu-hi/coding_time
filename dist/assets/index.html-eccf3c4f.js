import{_ as n,r as o,o as t,c as l,a as e,b as a,e as r,d as s}from"./app-2477bd15.js";const c={},d=s('<h1 id="克鲁斯卡尔算法" tabindex="-1"><a class="header-anchor" href="#克鲁斯卡尔算法" aria-hidden="true">#</a> 克鲁斯卡尔算法</h1><p>克鲁斯卡尔算法是一种最小生成树算法，它找到连接森林中的任意两棵树的权重最小的边。它是一种贪心算法，在图论中用于在连通的带权图中添加成本递增的边来找到最小生成树。这意味着它找到一组边，形成一个包含每个顶点的树，使得树中所有边的权重之和最小。如果图不连通，则它找到一个最小生成森林（每个连通分量的最小生成树）。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/MST_kruskal_en.gif" alt="Kruskal Algorithm" tabindex="0" loading="lazy"><figcaption>Kruskal Algorithm</figcaption></figure><figure><img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/KruskalDemo.gif" alt="Kruskal Demo" tabindex="0" loading="lazy"><figcaption>Kruskal Demo</figcaption></figure><p>基于欧几里德距离的克鲁斯卡尔算法演示。</p><h2 id="最小生成树" tabindex="-1"><a class="header-anchor" href="#最小生成树" aria-hidden="true">#</a> 最小生成树</h2><p>最小生成树（MST）或最小权重生成树是连接所有顶点的边的子集，没有任何环且具有最小可能的总边权重的连通带权（非）有向图。也就是说，它是一个生成树，其边权重之和尽可能小。更一般地，任何带权无向图（不一定是连通的）都有一个最小生成森林，即其连通分量的最小生成树的并集。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Minimum_spanning_tree.svg" alt="最小生成树" tabindex="0" loading="lazy"><figcaption>最小生成树</figcaption></figure><p>一个平面图及其最小生成树。每条边都带有其权重，这里的权重大致与其长度成比例。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Multiple_minimum_spanning_trees.svg" alt="最小生成树" tabindex="0" loading="lazy"><figcaption>最小生成树</figcaption></figure><p>该图显示了图中可能有多个最小生成树的情况。在图中，下面的两棵树是给定图的两种最小生成树。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',12),p={href:"https://en.wikipedia.org/wiki/Minimum_spanning_tree",target:"_blank",rel:"noopener noreferrer"},u={href:"https://en.wikipedia.org/wiki/Kruskal%27s_algorithm",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.youtube.com/watch?v=fAuF0EuZVCk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.youtube.com/watch?v=71UQH7Pr9kU&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"};function m(_,f){const i=o("ExternalLinkIcon");return t(),l("div",null,[d,e("ul",null,[e("li",null,[e("a",p,[a("维基百科上的最小生成树"),r(i)])]),e("li",null,[e("a",u,[a("维基百科上的克鲁斯卡尔算法"),r(i)])]),e("li",null,[e("a",h,[a("YouTube上的Tushar Roy的克鲁斯卡尔算法"),r(i)])]),e("li",null,[e("a",g,[a("YouTube上的Michael Sambol的克鲁斯卡尔算法"),r(i)])])])])}const b=n(c,[["render",m],["__file","index.html.vue"]]);export{b as default};