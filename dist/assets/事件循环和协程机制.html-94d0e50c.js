const e=JSON.parse('{"key":"v-08e9e06a","path":"/dart/advance/%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E5%92%8C%E5%8D%8F%E7%A8%8B%E6%9C%BA%E5%88%B6.html","title":"事件循环和协程机制","lang":"zh-CN","frontmatter":{"description":"Dart实现异步的方式同Javascript类似，如果你掌握Javascript的事件循环机制，那么学习Dart的异步机制就非常简单了 在 Dart 中，事件循环和协程是实现异步编程的核心机制。它们使得我们能够以非阻塞的方式处理异步操作，并允许在异步操作期间暂停和继续执行代码。本文将深入探讨 Dart 的事件循环和协程机制，并结合代码示例进行详细说明。...","head":[["meta",{"property":"og:url","content":"https://www.coding-time.cn/dart/advance/%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E5%92%8C%E5%8D%8F%E7%A8%8B%E6%9C%BA%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"编程时光"}],["meta",{"property":"og:title","content":"事件循环和协程机制"}],["meta",{"property":"og:description","content":"Dart实现异步的方式同Javascript类似，如果你掌握Javascript的事件循环机制，那么学习Dart的异步机制就非常简单了 在 Dart 中，事件循环和协程是实现异步编程的核心机制。它们使得我们能够以非阻塞的方式处理异步操作，并允许在异步操作期间暂停和继续执行代码。本文将深入探讨 Dart 的事件循环和协程机制，并结合代码示例进行详细说明。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-26T16:27:49.000Z"}],["meta",{"property":"article:author","content":"linwu"}],["meta",{"property":"article:modified_time","content":"2023-08-26T16:27:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事件循环和协程机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-26T16:27:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"linwu\\",\\"url\\":\\"https://www.coding-time.cn\\",\\"email\\":\\"linwu.hi@gmail.com\\"}]}"]]},"headers":[{"level":2,"title":"协程（Coroutine）","slug":"协程-coroutine","link":"#协程-coroutine","children":[]},{"level":2,"title":"事件循环（Event Loop）","slug":"事件循环-event-loop","link":"#事件循环-event-loop","children":[]},{"level":2,"title":"协程（Coroutine）","slug":"协程-coroutine-1","link":"#协程-coroutine-1","children":[]},{"level":2,"title":"宏任务队列（Macrotask Queue））","slug":"宏任务队列-macrotask-queue","link":"#宏任务队列-macrotask-queue","children":[{"level":3,"title":"1. 定时器事件","slug":"_1-定时器事件","link":"#_1-定时器事件","children":[]},{"level":3,"title":"2. IO 事件","slug":"_2-io-事件","link":"#_2-io-事件","children":[]},{"level":3,"title":"3. UI 事件","slug":"_3-ui-事件","link":"#_3-ui-事件","children":[]}]},{"level":2,"title":"微任务队列（Microtask Queue）","slug":"微任务队列-microtask-queue","link":"#微任务队列-microtask-queue","children":[]},{"level":2,"title":"微任务队列（Microtask Queue）","slug":"微任务队列-microtask-queue-1","link":"#微任务队列-microtask-queue-1","children":[{"level":3,"title":"常见的微任务","slug":"常见的微任务","link":"#常见的微任务","children":[]}]}],"git":{"createdTime":1688871551000,"updatedTime":1693067269000,"contributors":[{"name":"linwu-hi","email":"linwu.hi@gmail.com","commits":2}]},"readingTime":{"minutes":8.72,"words":2615},"filePathRelative":"dart/advance/事件循环和协程机制.md","localizedDate":"2023年7月9日","autoDesc":true}');export{e as data};
