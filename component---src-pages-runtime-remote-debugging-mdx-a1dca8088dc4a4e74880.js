(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"013z":function(e,t,a){"use strict";var r=a("WcmB"),b=a("q1tI"),n=a.n(b),o=a("NmYn"),i=a.n(o),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),u=a.n(s),p=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,r=e.tabs,b=void 0===r?[]:r;return Object(d.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=b.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},a)))))},g=a("UQWD"),f=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,r=g.data.site.siteMetadata.repository,b=a||r,n=b.baseUrl,o=b.subDirectory,i=n+"/edit/"+b.branch+o+"/src/pages"+t;return n?Object(d.b)("div",{className:"bx--row "+f.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:f.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),x=a("Wbzz"),w=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],b=t.map((function(e){var t,b=i()(e,{lower:!0,strict:!0}),n=b===r,o=new RegExp(r+"/?(#.*)?$"),c=a.replace(o,b);return Object(d.b)("li",{key:e,className:u()((t={},t[w.selectedItem]=n,t),w.listItem)},Object(d.b)(x.Link,{className:w.link,to:""+c},e))}));return Object(d.b)("div",{className:w.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:w.list},b))))))},t}(n.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,b=e.location,n=e.Title,o=t.frontmatter,s=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,g=s.tabs,f=s.title,j=s.theme,x=s.description,w=s.keywords,A=r.data.site.pathPrefix,k=A?b.pathname.replace(A,""):b.pathname,N=g?k.split("/").filter(Boolean).slice(-1)[0]||i()(g[0],{lower:!0}):"";return Object(d.b)(l.a,{tabs:g,homepage:!1,theme:j,pageTitle:f,pageDescription:x,pageKeywords:w,titleType:p},Object(d.b)(m,{title:n?Object(d.b)(n,null):f,label:"label",tabs:g}),g&&Object(d.b)(v,{slug:k,tabs:g,currentTab:N}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:u})),Object(d.b)(O.a,{pageContext:t,location:b,slug:k,tabs:g,currentTab:N}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},Xrl2:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var r,b=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),l=(r="Caption",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),s={_frontmatter:c},u=i.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(u,Object(b.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Remote debugging"),Object(o.b)("p",null,"It might be necessary to use a remote debugger to step through code execution on the cluster, where log analysis does not provide sufficient information to resolve an issue.\nThe following is an outline of the steps required to connect eclipse’s remote debugger to the IBM® Cúram Social Program Management (SPM) code running on the cluster."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Edit the Cúram Producer deployment spec to pass debug arguments to the WebSphere® Liberty server."),Object(o.b)("li",{parentName:"ul"},"Forward the debugging port from the port running the Cúram Producer pod."),Object(o.b)("li",{parentName:"ul"},"Create the remote debug configuration in eclipse."),Object(o.b)("li",{parentName:"ul"},"Connect the remote debugger to the listener.")),Object(o.b)("h3",null,"Edit the Cúram Producer deployment"),Object(o.b)("p",null,"Edit the deployment spec for the Cúram Producer deployment."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"kubectl edit deployment release-apps-curam-producer")),Object(o.b)("p",null,"Add the following lines under containers:"),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{}),"containers:\n- args:\n  - /opt/ibm/wlp/bin/server\n  - debug\n  - defaultServer\n")),Object(o.b)("p",null,"The Cúram Producer deployment will terminate its pod and start a new one with the debug configuration."),Object(o.b)("h3",null,"Forward the debugging port"),Object(o.b)("p",null,"Next, forward the WebSphere® Liberty server’s debug port to make it available to the remote debugger. 7777 is the default debug port for WebSphere® Liberty."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"kubectl port-forward release-apps-curam-producer-XXXX 7777:7777")),Object(o.b)("h3",null,"View the logs in real-time"),Object(o.b)("p",null,"In order to tail the logs while you debug use the following command:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"kubectl logs -f release-apps-curam-producer-XXXX")),Object(o.b)("p",null,"Note, WebSphere® Liberty will not start SPM until the remote debugger attaches to the listener. Therefore, the log will not be populated before you launch the remote debugger."),Object(o.b)("h3",null,"Create the remote debug configuration"),Object(o.b)("p",null,"From the Eclipse debug view, create a Java Remote Application. Attach an appropriate source code project, and attach the Java Remote Application to the port you forwarded in ",Object(o.b)("a",Object(b.a)({parentName:"p"},{href:"#forward-the-debugging-port"}),"Forward the debugging port"),"."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(b.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"77.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAABYlAAAWJQFJUiTwAAABpklEQVQoz5WT2Y6bMBiF/f4P1V5WGmm6hITFBDAYvOEFUghRlaQ9pBpp1A6j9rPlC+D4/Bsk3X15Tr6mSZpmWRRFeZ5LtdJ1HXsghLDW9i8YY7zzh3J/KDJynqdpHIbghuBD8OMQzud5WZafG9zvd5yJOHyie0IrGR1lXeu6szVXx5IzLuGglNbawNM5B6vXG2scTtY4Eh/Fx6c0zvkw/dD29PQ52aWMN7yuG8Zqo01v+j+2kkpKJURH4FHkWVUWl+WMgJuatS33fk0BLvYtOOdSdEoK0jubUQqreZ7xeVVVcZJQSlEwBP+mOHjHOpczSaQxx6LAdygD9BAXRVGWJQreb2KEMrwVxFhXVqWU8nq9Iu40TXOaa6OHB6cNxnFcc7amozRpmuZ2u0GMaJFCi7w5R7ntNigbEaI+xHvMBrqP+/B0LRTa4719F+RFOim/7aI4jtHQEAKusP/GKm6FymjOWHW5XBD2/4mH8YSeQva72lrpv6fi9TYrOHshJcFYLy9M07S+2ebxf1jMzvfQe2cI58haPu5bA37f1mIZzTr/YTc8U/8L27E2slTdwIQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("picture",{parentName:"span"},"\n        ",Object(o.b)("source",Object(b.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/0eda2/remote_debugger.webp 288w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/460e2/remote_debugger.webp 576w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/e0ca3/remote_debugger.webp 1152w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/d02be/remote_debugger.webp 1728w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/ff5d0/remote_debugger.webp 1768w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"})),"\n        ",Object(o.b)("source",Object(b.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/7fc1e/remote_debugger.png 288w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/a5df1/remote_debugger.png 576w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/3cbba/remote_debugger.png 1152w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/0b124/remote_debugger.png 1728w","/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/78453/remote_debugger.png 1768w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"})),"\n        ",Object(o.b)("img",Object(b.a)({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/8f4f9be162543665743b3f2eb1624c5f/3cbba/remote_debugger.png",alt:"Figure 1: Example Debugger Config",title:"Figure 1: Example Debugger Config",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n    "),Object(o.b)(l,{mdxType:"Caption"},Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Figure 1:")," Example debugger config")),Object(o.b)("h3",null,"Connect the remote debugger to the listener"),Object(o.b)("p",null,"Launch the debugger and debug as usual."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-runtime-remote-debugging-mdx-a1dca8088dc4a4e74880.js.map