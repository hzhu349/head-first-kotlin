(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e){e.exports={main:{preview:"### What will you learn from this book?\n\nHead First Kotlin is a \u2026",content:"### What will you learn from this book?\n\nHead First Kotlin is a complete introduction to coding in Kotlin. This book helps you learn the Kotlin language with a unique method that goes beyond syntax and how-to manuals, and teaches you how to think like a great Kotlin developer. Despite its playful appearance, it's serious stuff. You'll learn everything from language fundamentals, through to collections, generics, lambdas and higher-order functions. And along the way, you'll get to play with both object-oriented and functional programming. If you want to really understand Kotlin, this is the book for you.\n\n### Why does this book look so different?\n\nBased on the latest research in cognitive science and learning theory, Head First Kotlin uses a visually rich format to engage your mind, rather than a text-heavy approach that puts you to sleep. Why waste your time struggling with new concepts? This multi-sensory learning experience is designed for the way your brain really works.\n",basename:"main"}}},111:function(e){e.exports={main:{title:"Source code",preview:"You can download the [source code from \u2026",content:"\n\nYou can download the [source code from Github](https://github.com/dogriffiths/HFKotlin)",basename:"main"}}},113:function(e,t,n){e.exports=n(355)},118:function(e,t,n){},120:function(e,t,n){},33:function(e){e.exports={"2019YearAhead":{title:"The year ahead for Kotlin",author:"Head First Labs",image:"images/11254.jpg",date:"2018-12-01 13:06",tags:["Predictions",2019],preview:"2019 will be the year of Kotlin 1.3. For developers who have been \u2026",content:"\n\n2019 will be the year of Kotlin 1.3. For developers who have been tentatively looking at Kotlin, the introduction of 1.3 means it's the perfect time to jump in with both feet. \n\nWhat are the key features of 1.3? \n\nCo-routines are no longer experimental. They are like lightweight threads which allow code to scale-out efficiently. Scaling always used to be a usability problem; the worse your app was at scaling, the worse the experience was for the users. The cloud has changed all that. Now scalability is a financial problem. The better your app is at scaling, the lower your running costs. \n\n2018 saw much activity in making traditional enterprise Java frameworks--like Spring Boot--more Kotlin-friendly However, newer frameworks like [Ktor](https://github.com/ktorio/ktor) are breathing new life into the server-side. Kotlin co-routines are at the heart of Ktor, alongside an application model that is similar to the Node.js Express library. \n\n2019 is also the year when Kotlin is likely to see significant use beyond the Java world. Multi-platform builds allow you to compile the same code for the JVM, for JavaScript and (using the beta version of Kotlin/Native) for iOS, Linux, Mac, Windows, and WebAssembly. While possible, it's unlikely that many people will choose to build client-side apps entirely in Kotlin. JavaScript would appear to have an increasingly indomitable position in the browser. However, Kotlin is proving itself to be an excellent language for library-builders. The same code can build a library for Java, JavaScript, C, and Swift. \n\nIf you are, for example, a bank  that performs some complex financial calculation on the server. Kotlin allows you to convert that server-code into a Kotlin library which can run on both the server (where processing cycles are expensive) and on the client (where processing cycles are free). Multi-platform builds can improve the experience for your users, and also take some of the load off your server.\n\nFinally, looking beyond Kotlin 1.3, 2019 is also the year when the language is likely to acquire features to catch bugs at compile time. Keep a lookout for features that reduce/eliminate shared mutable state in concurrent code, and also for first-class immutability support in the language. \n\nArchitects and tech leads should start to pay very serious attention to Kotlin in the year ahead.",iso8601Date:"2018-12-01T13:06:00+00:00",basename:"2019YearAhead"},Another:{title:"Merry Christmas",author:"David Griffiths",date:"2018-12-25 13:06",tags:["Example"],preview:"Ding-dong merrily on high....",content:"\nDing-dong merrily on high....\n\n",iso8601Date:"2018-12-25T13:06:00+00:00",basename:"Another"},LinksOfTheWeek:{title:"Links of the week Nov 3rd, 2018",author:"David Griffiths",date:"2018-11-03 11:11",tags:["Example"],preview:"Here are the most interesting Kotlin articles we've found  this \u2026",content:"\nHere are the most interesting Kotlin articles we've found  this week:\n\n## Kotlin Native released in Beta\n\nKotlin Native is Kotlin's pathway to non-Java platforms like iOS. Kotlin Native works by compiling Kotlin code down to a format supported by the LLVM (Low-Level Virtual Machine). The LLVM compiler framework can then compiled that code to native code for pretty much any platform.\n\nHere's the [announcement](https://blog.jetbrains.com/kotlin/2018/08/kotlin-native-0-8-2/#comments)\n\n## 7 things any Java developer should know\n\n[A nice intro](https://medium.com/digitalfrontiers/7-things-any-java-developer-should-know-when-starting-with-kotlin-6062d12aa902) for Java developers converting over to Kotlin.\n\nAnd of course the big one...\n\n## Kotlin 1.3 released\n\nSee the announcement [here](https://blog.jetbrains.com/kotlin/2018/10/kotlin-1-3/)",iso8601Date:"2018-11-03T11:11:00+00:00",basename:"LinksOfTheWeek"}}},333:function(e,t,n){},335:function(e,t,n){},337:function(e,t,n){},339:function(e,t,n){},34:function(e){e.exports={10:{name:10,title:"generics",subtitle:"Know your Ins from your Outs",image:"images/11148.jpg",preview:"Some content goes here",content:"\nSome content goes here\n",basename:"10"},11:{name:11,title:"lambdas & higher-order functions",subtitle:"Treating Code like Data",image:"images/11333.jpg",preview:"Some content goes here",content:"\nSome content goes here\n",basename:"11"},12:{name:12,title:"built-in higher-order functions",subtitle:"Power Up your Code",image:"images/11142.jpg",preview:"Some content goes here",content:"\nSome content goes here\n",basename:"12"},13:{name:"App I",title:"testing",subtitle:"Hold your Code to Account",image:"images/11199.jpg",preview:"Some content goes here",content:"\nSome content goes here\n",basename:"13"},14:{name:"App II",title:"leftovers",subtitle:"The Top Ten Things we didn't cover",image:"images/11287.jpg",preview:"Some content goes here",content:"\nSome content goes here\n",basename:"14"},"01":{name:1,title:"getting started",subtitle:"A Quick Dip",image:"images/11254.jpg",preview:"## Kotlin is making waves\nFrom it\u2019s first official release, Kotlin \u2026",content:"\n## Kotlin is making waves\nFrom it\u2019s first official release, Kotlin has impressed programmers with its **friendly syntax, conciseness, flexibility and power**. In this book, we\u2019ll teach you how to **build your own Kotlin applications**, and we\u2019ll start by getting you to build a basic application and run it. Along the way, you\u2019ll meet some of Kotlin\u2019s basic syntax, such as *statements, loops and conditional branching*. Your journey has just begun...\n\n## Chapter headings...\n\n* Welcome to Kotlinville\n* You can use Kotlin nearly everywhere\n* What we\u2019ll do in this chapter\n* Sharpen your pencil (Exercise)\n* Sharpen your pencil (Solution)\n* Install IntelliJ IDEA (Community Edition)\n* Let's build a basic application\n* You've just created your first Kotlin project\n* Add a new Kotlin file to the project\n* Anatomy of the main function\n* Add the main function to App.kt\n* Test drive\n* What can you say in the main function?\n* Loop and loop and loop...\n* A loopy example\n* Conditional branching\n* Using *if* to return a value\n* Update the main function\n* Code magnets (Exercise)\n* Using the Kotlin interactive shell\n* You can add multi-line code snippets to the REPL\n* Be the Compiler (Exercise)\n* Be the Compiler (Solution)\n* Mixed Messages (Exercise)\n* Mixed Messages (Solution)\n* Code magnets (Solution)\n* Your Kotlin Toolbox\n\n",basename:"01"},"02":{name:2,title:"basic types and variables",subtitle:"Being a Variable",image:"images/11120.jpg",preview:"## There\u2019s one thing all code depends on\u2014variables \n\rSo in this \u2026",content:"\n## There\u2019s one thing all code depends on\u2014variables \n\rSo in this chapter, we\u2019re going to look under the hood, and show you how **Kotlin variables really work**. You\u2019ll discover Kotlin\u2019s **basic types**, such as *Ints*, *Floats* and *Booleans*, and learn how the Kotlin compiler can **cleverly infer a variable\u2019s type from the value it\u2019s given**. You\u2019ll find out how to use **String templates** to construct complex Strings with very little code, and you\u2019ll learn how to create **arrays** to hold multiple values. Finally, you\u2019ll discover *why objects are so important to life in Kotlinville*.",basename:"02"},"03":{name:3,title:"functions",subtitle:"Getting Out of Main",image:"images/11114.jpg",preview:"## It\u2019s time to take it up a notch, and learn about functions.\n\rSo \u2026",content:"\n## It\u2019s time to take it up a notch, and learn about functions.\n\rSo far, all the code you\u2019ve written has been inside your application\u2019s main function. But if you want to write code that\u2019s better organized and easier to maintain, you need to know how to split your code into separate functions. In this chapter, you\u2019ll learn how to write functions and interact with your application by building a game. You\u2019ll discover how to write compact single expression functions. Along the way you\u2019ll find out how to iterate through ranges and collections using the powerful for loop.",basename:"03"},"04":{name:4,title:"classes and objects",subtitle:"A Bit of Class",image:"images/11240.jpg",preview:"## It\u2019s time we looked beyond Kotlin\u2019s basic types \n\rSooner or \u2026",content:"\n## It\u2019s time we looked beyond Kotlin\u2019s basic types \n\rSooner or later, you\u2019re going to want to use something more than Kotlin\u2019s basic types. And that\u2019s where classes come in. Classes are templates that allow you to create your own types of objects, and define their properties and functions. Here, you\u2019ll learn how to design and define classes, and how to use them to create new types of objects. You\u2019ll meet constructors, initializer blocks, getters and setters, and you\u2019ll discover how they can be used to protect your properties. Finally, you\u2019ll learn how data hiding is built into all Kotlin code, saving you time, effort and a multitude of keystrokes.\n",basename:"04"},"05":{name:5,title:"superclasses and subclasses",subtitle:"Using your Inheritance",image:"images/11165.jpg",preview:"## Ever found yourself thinking that an object\u2019s type would be \u2026",content:"\n## Ever found yourself thinking that an object\u2019s type would be perfect if you could just change a few things?\n\rWell, that\u2019s one of the advantages of inheritance. Here, you\u2019ll learn how to create subclasses, and inherit the properties and functions of a superclass. You\u2019ll discover how to override functions and properties to make your classes behave the way you want, and you\u2019ll find out when this is (and isn\u2019t) appropriate. Finally, you\u2019ll see how inheritance helps you avoid duplicate code, and how to improve your flexibility with polymorphism.\n",basename:"05"},"06":{name:6,title:"abstract classes and interfaces",subtitle:"Serious Polymorphism",image:"images/11131.jpg",preview:"## A superclass inheritance hierarchy is just the beginning \n\rIf you \u2026",content:"\n## A superclass inheritance hierarchy is just the beginning \n\rIf you want to fully exploit polymorphism, you need to design using abstract classes and interfaces. In this chapter, you\u2019ll discover how to use abstract classes to control which classes in your hierarchy can and can\u2019t be instantiated. You\u2019ll see how they can force concrete subclasses to provide their own implementations. You\u2019ll find out how to use interfaces to share behavior between independent classes. And along the way, you\u2019ll learn the ins and outs of is, as and when.\n",basename:"06"},"07":{name:7,title:"data classes",subtitle:"Dealing with Data",image:"images/53212.jpg",preview:"## Nobody wants to spend their life reinventing the wheel\n \rMost \u2026",content:"\n## Nobody wants to spend their life reinventing the wheel\n \rMost applications include classes whose main purpose is to store data, so to make your coding life easier, the Kotlin developers came up with the concept of a data class. Here, you\u2019ll learn how data classes enable you to write code that\u2019s cleaner and more concise than you ever dreamed was possible. You\u2019ll explore the data class utility functions, and discover how to destructure a data object into its component parts. Along the way, you\u2019ll find out how default parameter values can make your code more flexible, and we\u2019ll introduce you to Any, the mother of all superclasses.\n",basename:"07"},"08":{name:8,title:"nulls and exceptions",subtitle:"Safe and Sound",image:"images/11077.jpg",preview:"Some content goes here",content:"\nSome content goes here\n",basename:"08"},"09":{name:9,title:"collections",subtitle:"Get Organized",image:"images/11004.jpg",preview:"Some content goes here",content:"\nSome content goes here\n",basename:"09"}}},341:function(e,t,n){},343:function(e,t,n){},345:function(e,t,n){},347:function(e,t,n){},349:function(e,t,n){},351:function(e,t,n){},353:function(e,t,n){},355:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(23),r=n.n(i),s=(n(118),n(4)),l=n(5),c=n(7),u=n(6),h=n(8),m=n(358),d=n(357),p=n(359),b=n(109),f=n(101),g=n.n(f),y=n(103),v=n.n(y),w=n(67),j=n.n(w),E=n(104),k=n.n(E),O=n(105),K=n.n(O),C=n(106),S=n.n(C),x=n(107),N=n.n(x),I=n(35),A=n.n(I),M=n(36),T=n.n(M),H=(n(120),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={open:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.title=this.props.title}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(g.a,{className:"appBar",position:"static",style:{backgroundColor:"white",color:"#333"}},o.a.createElement(v.a,null,o.a.createElement(k.a,{className:"".concat(this.props.classes.menuButton," appBar-menu"),color:"inherit","aria-label":"Menu",onClick:function(){return e.setState({open:!0})}},o.a.createElement(K.a,null)),o.a.createElement(j.a,{variant:"h6",color:"inherit",className:this.props.classes.grow},this.props.title))),o.a.createElement(S.a,{docked:!1,width:250,open:this.state.open,onClose:function(){return e.setState({open:!1})},className:"AppBarAndMenu-drawer"},o.a.createElement("div",{tabIndex:0,role:"button",onClick:function(){return e.setState({open:!1})},onKeyDown:function(){return e.setState({open:!1})}},o.a.createElement("div",{className:this.props.classes.fullList},o.a.createElement(N.a,null,o.a.createElement(A.a,{button:!0,onClick:function(){return e.setState({open:!1},function(){e.props.history.push("/")})}},o.a.createElement(T.a,{primary:"Head First Kotlin"})),o.a.createElement(A.a,{button:!0,onClick:function(){return e.setState({open:!1},function(){e.props.history.push("/tableOfContents")})}},o.a.createElement(T.a,{primary:"Table of contents"})),o.a.createElement(A.a,{button:!0,onClick:function(){return e.setState({open:!1},function(){e.props.history.push("/blogs")})}},o.a.createElement(T.a,{primary:"Blog"})),o.a.createElement(A.a,{button:!0,onClick:function(){return e.setState({open:!1},function(){e.props.history.push("/sourceCode")})}},o.a.createElement(T.a,{primary:"Source code"})))))))}}]),t}(a.Component)),Y=Object(p.a)(Object(b.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(H)),B=n(110),D=n(356),F=n(48),L=n.n(F),W=n(26),J=n.n(W),P=(n(333),n(50)),R=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",Object.assign({style:Object(P.a)({width:this.props.width,height:this.props.height,position:"relative"},this.props.style)},this.props),o.a.createElement("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,backgroundImage:"url(".concat(this.props.src,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundClip:"border-box",borderRadius:this.props.style&&this.props.style.borderRadius}}))}}]),t}(a.Component),G=function(e){function t(e){var n;Object(s.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this,e));var a=e.article,o=a.content.split(" ").length,i=Math.round(o/250)+1;return n.state={article:a,wordCount:o,minuteRead:i},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.article,n=e.minuteRead;return o.a.createElement("div",{className:"ArticlePreview"},t.image&&o.a.createElement("div",{className:"ArticlePreview-imageContainer"},o.a.createElement(R,{src:t.image,className:"ArticlePreview-image"})),o.a.createElement("h1",{className:"ArticlePreview-title"},o.a.createElement(D.a,{to:"/blogs/".concat(t.id)},t.title)),o.a.createElement(L.a,{source:t.preview,className:"ArticlePreview-text"}),o.a.createElement("div",{className:"ArticlePreview-footer"},"Posted by ",t.author,",",t.date?o.a.createElement("div",null,J()(t.date).format("MMM D")):o.a.createElement("div",null),n," min read"))}}]),t}(a.Component),U=(n(335),function(e){return o.a.createElement("div",{className:"articles"},e.articles.map(function(e){return o.a.createElement(G,{article:e})}))}),V=n(33),z=Object.keys(V).map(function(e){return Object(P.a)({id:e},V[e])}).filter(function(e){return J()(e.date).utc()<J()().utc()}).sort(function(e,t){return e.date===t.date?0:e.date<t.date?1:-1}),q=(n(337),function(e){function t(e){var n;Object(s.a)(this,t),n=Object(c.a)(this,Object(u.a)(t).call(this,e));var a=e.article,o=a.content.split(" ").length,i=Math.round(o/250)+1;return n.state={article:a,wordCount:o,minuteRead:i},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.article,n=e.minuteRead;return o.a.createElement("div",{className:"Article-content"},this.props.children,t.image&&o.a.createElement("div",{className:"Article-imageContainer"},o.a.createElement(R,{src:t.image,className:"Article-image"})),t.subtitle&&o.a.createElement("h1",{className:"subtitle"},t.subtitle),o.a.createElement(L.a,{source:t.content}),t.date&&o.a.createElement("div",{className:"Article-footer"},t.author&&o.a.createElement("div",null,"Posted by ",t.author,","),J()(t.date).format("MMMM Do YYYY"),".",o.a.createElement("br",null),n," min read"),t&&t.tags&&o.a.createElement("div",{className:"Article-tags"},t.tags.map(function(e){return o.a.createElement("div",{className:"Article-tag"},e)})))}}]),t}(a.Component)),Q=Object(p.a)(q),$=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://platform.twitter.com/widgets.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("a",{className:"twitter-timeline",href:"https://twitter.com/HeadFirstKotlin?ref_src=twsrc%5Etfw"},"Tweets by HeadFirstKotlin"))}}]),t}(a.Component),_=(n(339),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={articles:z.slice(0,3)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Y,{title:"Head First Kotlin"}),o.a.createElement("div",{className:"Home-content"},o.a.createElement("div",{className:"Home-main"},o.a.createElement(Q,{article:B.main}),o.a.createElement("section",{className:"Home-recent"},o.a.createElement("h2",null,"Recent posts"),o.a.createElement(U,{articles:this.state.articles}))),o.a.createElement("div",{className:"Home-other"},o.a.createElement($,null))))}}]),t}(a.Component)),X=Object(p.a)(_),Z=(n(341),n(343),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.name;return o.a.createElement("li",{className:"ImageItem-container"},o.a.createElement("div",{className:"ImageItem-photo ".concat(this.props.disabled&&"ImageItem-photo-disabled"),onClick:function(){return e.props.onClick(e.props.id)}},o.a.createElement(R,{alt:t,src:this.props.src,className:"cover-image"})),o.a.createElement("div",{className:"ImageItem-details"},o.a.createElement("div",{className:"ImageItem-info",onClick:function(){return e.props.onClick(e.props.id)}},o.a.createElement("div",{className:"ImageItem-name"},t),this.props.description&&o.a.createElement("div",{className:"ImageItem-description"},this.props.description),null==this.props.description||o.a.createElement("div",{className:"ImageItem-description"},"\xa0"))))}}]),t}(a.Component)),ee=n(34),te=(n(345),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(Y,{title:"Table of contents"}),o.a.createElement("section",{className:"tableOfContents"},Object.keys(ee).sort().map(function(t){var n=ee[t];return o.a.createElement(Z,{id:t,src:n.image,name:o.a.createElement("div",null,o.a.createElement("div",{className:"chapter-number",style:{float:"left",marginRight:"1ex"}},n.name," "),o.a.createElement("div",{className:"chapter-title"},n.title)),description:n.subtitle,onClick:function(t){return e.props.history.push("/chapters/".concat(t))}})})))}}]),t}(a.Component)),ne=Object(p.a)(te),ae=n(111),oe=(n(347),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Y,{title:"Source code"}),o.a.createElement(Q,{article:ae.main}))}}]),t}(a.Component)),ie=Object(p.a)(oe),re=(n(349),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={articles:z},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Y,{title:"Blog"}),o.a.createElement("div",{className:"blogContent"},o.a.createElement("div",{className:"blogList"},o.a.createElement(U,{articles:this.state.articles}))))}}]),t}(a.Component)),se=(n(351),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match.params.blogId,t=V[e];return o.a.createElement("div",null,o.a.createElement(Y,{title:t.title}),o.a.createElement(Q,{article:t},o.a.createElement(D.a,{to:"/blogs",className:"returnToBlogs"},"Back to blogs")))}}]),t}(a.Component)),le=(n(353),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.match.params.chapterId,t=ee[e];return o.a.createElement("div",null,o.a.createElement(Y,{title:t.title}),o.a.createElement("div",{class:"Chapter-content"},o.a.createElement(Q,{article:t},o.a.createElement(D.a,{to:"/tableOfContents"},"Back to table of contents"))))}}]),t}(a.Component)),ce=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(d.a,{exact:!0,path:"/",component:X}),o.a.createElement(d.a,{exact:!0,path:"/tableOfContents",component:ne}),o.a.createElement(d.a,{parameter:"chapterId",path:"/chapters/:chapterId",component:le}),o.a.createElement(d.a,{exact:!0,path:"/sourceCode",component:ie}),o.a.createElement(d.a,{exact:!0,path:"/blogs",component:re}),o.a.createElement(d.a,{parameter:"blogId",path:"/blogs/:blogId",component:se}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,2,1]]]);
//# sourceMappingURL=main.ca192d11.chunk.js.map