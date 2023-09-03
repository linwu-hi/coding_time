import{_ as i,r as o,o as n,c as s,a as e,b as t,e as r,d as c}from"./app-2477bd15.js";const l={},d=c('<h1 id="dijkstra-算法" tabindex="-1"><a class="header-anchor" href="#dijkstra-算法" aria-hidden="true">#</a> Dijkstra 算法</h1><p>Dijkstra 算法是一种用于在图中寻找节点之间最短路径的算法，该图可以表示道路网络等。</p><p>算法存在多个变种；Dijkstra 最初的变种用于找到两个节点之间的最短路径，但更常见的变种将某个节点固定为“源”节点，并找到源节点到图中所有其他节点的最短路径，生成一个最短路径树。</p><figure><img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif" alt="Dijkstra" tabindex="0" loading="lazy"><figcaption>Dijkstra</figcaption></figure><p>Dijkstra 算法用于找到 <code>a</code> 到 <code>b</code> 的最短路径。它选择未访问的具有最低距离的顶点，计算通过它到达每个未访问邻居的距离，并且如果较小则更新邻居的距离。完成邻居的处理后，将其标记为已访问（设置为红色）。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',6),h={href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8",target:"_blank",rel:"noopener noreferrer"};function p(f,k){const a=o("ExternalLinkIcon");return n(),s("div",null,[d,e("ul",null,[e("li",null,[e("a",h,[t("Wikipedia"),r(a)])]),e("li",null,[e("a",_,[t("YouTube 上的 Nathaniel Fan 视频"),r(a)])]),e("li",null,[e("a",u,[t("YouTube 上的 Tushar Roy 视频"),r(a)])])])])}const g=i(l,[["render",p],["__file","index.html.vue"]]);export{g as default};
