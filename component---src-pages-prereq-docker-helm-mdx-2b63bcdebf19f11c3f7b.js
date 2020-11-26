(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),o=a("q1tI"),r=a.n(o),s=a("NmYn"),i=a.n(s),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(p.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.text},a)))))},h=a("UQWD"),f=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,o=a||n,r=o.baseUrl,s=o.subDirectory,i=r+"/edit/"+o.branch+s+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+f.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:f.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),g=a("dI71"),x=a("Wbzz"),k=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=i()(e,{lower:!0,strict:!0}),r=o===n,s=new RegExp(n+"/?(#.*)?$"),l=a.replace(s,o);return Object(p.b)("li",{key:e,className:d()((t={},t[k.selectedItem]=r,t),k.listItem)},Object(p.b)(x.Link,{className:k.link,to:""+l},e))}));return Object(p.b)("div",{className:k.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:k.list},o))))))},t}(r.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,s=t.frontmatter,b=void 0===s?{}:s,d=t.relativePagePath,u=t.titleType,h=b.tabs,f=b.title,g=b.theme,x=b.description,k=b.keywords,N=n.data.site.pathPrefix,y=N?o.pathname.replace(N,""):o.pathname,T=h?y.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(p.b)(c.a,{tabs:h,homepage:!1,theme:g,pageTitle:f,pageDescription:x,pageKeywords:k,titleType:u},Object(p.b)(m,{title:r?Object(p.b)(r,null):f,label:"label",tabs:h}),h&&Object(p.b)(v,{slug:y,tabs:h,currentTab:T}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d})),Object(p.b)(O.a,{pageContext:t,location:o,slug:y,tabs:h,currentTab:T}),Object(p.b)(l.a,null))}},Ataj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n,o=a("wx14"),r=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("013z"),l=(a("qKvR"),{}),c=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}),b={_frontmatter:l},d=i.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(d,Object(o.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",null,"Docker"),Object(s.b)("p",null,Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.docker.com/get-started"}),"Docker")," is an open source tool that creates, deploys, and runs applications by using containers.\nInstall Docker by following the instructions in ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/install/overview/"}),"docker.com"),". You can follow this runbook by using any Docker edition, including the community edition."),Object(s.b)(c,{mdxType:"InlineNotification"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," The following Docker versions were used to verify this runbook:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Docker Engine: 19.03"),Object(s.b)("li",{parentName:"ul"},"Docker Desktop for Windows: 2.1.0.5"),Object(s.b)("li",{parentName:"ul"},"Docker Desktop for Mac: 2.2.0.3"))),Object(s.b)("h2",null,"Helm V3"),Object(s.b)(c,{mdxType:"InlineNotification"},Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," As of Release 20.7.0, the Helm version used to verify this runbook is 3.2. All the Helm commands that are used in this runbook are based on Helm v3.")),Object(s.b)("p",null,Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://helm.sh/"}),"Helm")," is a package manager that helps you to find, share, and use software that is built for Kubernetes.\nHelm streamlines the installation and management of Kubernetes applications, and is the equivalent of the apt, yum, or homebrew utilities for Kubernetes."),Object(s.b)("p",null,"Helm uses a packaging format called Chart. A chart is a collection of files that describe a related set of Kubernetes resources.\nA single chart might be used to deploy something simple, like a memcached pod, or a complex deployment, like a full web app stack with HTTP servers, databases, and caches.\nCharts are created as files laid out in a particular directory tree, then they can be packaged into versioned archives for deployment. For more information, see the ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://helm.sh/docs/"}),"Helm documentation"),"."),Object(s.b)("p",null,"This runbook uses Helm Charts and describes how to package and deploy them. For more information, see ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/spm-kubernetes/deployment/hc_preparation"}),"Preparing Helm Charts"),"."),Object(s.b)("p",null,"Install Helm by following the steps described in ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/helm/helm#install"}),"Helm install"),"."))}u.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')}}]);
//# sourceMappingURL=component---src-pages-prereq-docker-helm-mdx-2b63bcdebf19f11c3f7b.js.map