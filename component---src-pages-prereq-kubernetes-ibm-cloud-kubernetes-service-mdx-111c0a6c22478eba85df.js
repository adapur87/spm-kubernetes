(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),r=a("q1tI"),i=a.n(r),o=a("NmYn"),s=a.n(o),l=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),p=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(p.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.text},a)))))},x=a("UQWD"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=x.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),f=a("dI71"),j=a("Wbzz"),v=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0,strict:!0}),i=r===n,o=new RegExp(n+"/?(#.*)?$"),l=a.replace(o,r);return Object(p.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(p.b)(j.Link,{className:v.link,to:""+l},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:v.list},r))))))},t}(i.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,x=b.tabs,g=b.title,f=b.theme,j=b.description,v=b.keywords,y=n.data.site.pathPrefix,I=y?r.pathname.replace(y,""):r.pathname,N=x?I.split("/").filter(Boolean).slice(-1)[0]||s()(x[0],{lower:!0}):"";return Object(p.b)(c.a,{tabs:x,homepage:!1,theme:f,pageTitle:g,pageDescription:j,pageKeywords:v,titleType:u},Object(p.b)(m,{title:i?Object(p.b)(i,null):g,label:"label",tabs:x}),x&&Object(p.b)(T,{slug:I,tabs:x,currentTab:N}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d})),Object(p.b)(h.a,{pageContext:t,location:r,slug:I,tabs:x,currentTab:N}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},TYbJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),l=(a("qKvR"),{}),c=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={_frontmatter:l},d=s.a;function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(d,Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"InlineNotification"},Object(o.b)("p",null,"As of Release 20.7.0, the IKS version used to verify this runbook is 1.18.")),Object(o.b)("h2",null,"What is IKS ?"),Object(o.b)("p",null,"The IBM Cloud Kubernetes Service (IKS) provides an isolated and secure platform for managing containers."),Object(o.b)("p",null,"As a certified Kubernetes provider, IBM’s Managed Kubernetes provides intelligent scheduling, self-healing, horizontal scaling, service discovery and load balancing, automated rollouts and rollbacks, and secret and configuration management.\nThe Kubernetes service also has advanced capabilities around simplified cluster management, container security and isolation policies, the ability to design your own cluster, and integrated operational tools for consistency in deployment."),Object(o.b)("p",null,"This highly secure environment for production workloads has built-in container-level security, including isolation policies, CIS-hardened infrastructure and broad industry compliance (including PCI, HIPPA-ready, SOC1, SOC2 and more)."),Object(o.b)("p",null,"For more details, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/container-service/"}),"IBM Cloud Kubernetes Service"),"."),Object(o.b)(c,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Important!")),Object(o.b)("p",null,"Note that the free trial is not suitable for this implementation. But it can used as a sandbox to explore Kubernetes.")),Object(o.b)("p",null,"For IKS commands and demos, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/learn/kubernetes"}),"IBM Cloud Kubernetes Service – Resources"),"."))}u.isMDXComponent=!0},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')}}]);
//# sourceMappingURL=component---src-pages-prereq-kubernetes-ibm-cloud-kubernetes-service-mdx-111c0a6c22478eba85df.js.map