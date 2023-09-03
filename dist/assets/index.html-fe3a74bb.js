import{_ as i,r as n,o,c as t,a as e,b as r,e as l,d as s}from"./app-2477bd15.js";const c={},d=s('<h1 id="旅行商问题" tabindex="-1"><a class="header-anchor" href="#旅行商问题" aria-hidden="true">#</a> 旅行商问题</h1><p>旅行商问题（TSP）提出了以下问题：「给定一组城市和每对城市之间的距离，求出访问每个城市并返回原始城市的最短可能路径是什么？」</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/1/11/GLPK_solution_of_a_travelling_salesman_problem.svg" alt="旅行商问题" tabindex="0" loading="lazy"><figcaption>旅行商问题</figcaption></figure><p>旅行商问题的解决方案：黑线表示连接每个红点的最短路径。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Weighted_K4.svg" alt="旅行商问题图" tabindex="0" loading="lazy"><figcaption>旅行商问题图</figcaption></figure><p>TSP可以建模为一个无向加权图，其中城市是图的顶点，路径是图的边，路径的距离是边的权重。这是一个最小化问题，要求从指定的顶点开始，经过每个其他顶点恰好一次后返回原始顶点。通常，模型是一个完全图（即每对顶点之间都有一条边相连）。如果两个城市之间不存在路径，可以添加一条任意长的边来完整图形，而不会影响最优路径。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',7),_={href:"https://en.wikipedia.org/wiki/Travelling_salesman_problem",target:"_blank",rel:"noopener noreferrer"};function p(h,g){const a=n("ExternalLinkIcon");return o(),t("div",null,[d,e("ul",null,[e("li",null,[e("a",_,[r("维基百科"),l(a)])])])])}const m=i(c,[["render",p],["__file","index.html.vue"]]);export{m as default};