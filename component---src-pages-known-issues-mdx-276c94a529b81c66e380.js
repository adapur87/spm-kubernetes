(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"013z":function(e,t,n){"use strict";var a=n("WcmB"),o=n("q1tI"),r=n.n(o),i=n("NmYn"),s=n.n(i),b=n("Xrax"),l=n("k4MR"),c=n("TSYQ"),u=n.n(c),d=n("QH2O"),m=n("qKvR"),p=function(e){var t,n=e.title,a=e.tabs,o=void 0===a?[]:a;return Object(m.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},n)))))},h=n("UQWD"),g=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=h.data.site.siteMetadata.repository,o=n||a,r=o.baseUrl,i=o.subDirectory,s=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=n("FCXl"),x=n("dI71"),f=n("Wbzz"),k=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0,strict:!0}),r=o===a,i=new RegExp(a+"/?(#.*)?$"),b=n.replace(i,o);return Object(m.b)("li",{key:e,className:u()((t={},t[k.selectedItem]=r,t),k.listItem)},Object(m.b)(f.Link,{className:k.link,to:""+b},e))}));return Object(m.b)("div",{className:k.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:k.list},o))))))},t}(r.a.Component),T=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,h=c.tabs,g=c.title,x=c.theme,f=c.description,k=c.keywords,y=a.data.site.pathPrefix,w=y?o.pathname.replace(y,""):o.pathname,N=h?w.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:h,homepage:!1,theme:x,pageTitle:g,pageDescription:f,pageKeywords:k,titleType:d},Object(m.b)(p,{title:r?Object(m.b)(r,null):g,label:"label",tabs:h}),h&&Object(m.b)(v,{slug:w,tabs:h,currentTab:N}),Object(m.b)(T.a,{padded:!0},n,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(j.a,{pageContext:t,location:o,slug:w,tabs:h,currentTab:N}),Object(m.b)(b.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},qqAJ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n("wx14"),o=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("013z"),s=(n("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=b("AnchorLinks"),c=b("AnchorLink"),u={_frontmatter:s},d=i.a;function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(d,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Some issues might require product changes to resolve them."),Object(r.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(r.b)(c,{mdxType:"AnchorLink"},"Minikube dashboard command on Red Hat"),Object(r.b)(c,{mdxType:"AnchorLink"},"Using Helm on Red Hat"),Object(r.b)(c,{mdxType:"AnchorLink"},"Context Root Not Found error on the SPM home page, BIRT, or caseload summary pages"),Object(r.b)(c,{mdxType:"AnchorLink"},"The logs are filled by repetitions of the ICWWKS4001I message"),Object(r.b)(c,{mdxType:"AnchorLink"},"Limitations when using the Minikube none driver")),Object(r.b)("h2",null,"Minikube dashboard command on Red Hat"),Object(r.b)("p",null,"When you follow the steps",Object(r.b)("inlineCode",{parentName:"p"},"Kubernetes dashboard")," in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/spm-kubernetes/runtime/interrogate_runtime"}),"Monitoring the application"),", the ",Object(r.b)("inlineCode",{parentName:"p"},"minikube dashboard")," command might not work on Red Hat operating systems.\nFor more information, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes/minikube/issues/5815"}),"Minikube issue 5815"),"."),Object(r.b)("h2",null,"Using Helm on Red Hat"),Object(r.b)("p",null,"When you use Helm on Red Hat, you might have to use the Linux® ",Object(r.b)("inlineCode",{parentName:"p"},"yum")," command to install the ",Object(r.b)("inlineCode",{parentName:"p"},"socat")," utility. Otherwise, Tiller does not work properly."),Object(r.b)("h2",null,"Context Root Not Found error on the SPM home page, BIRT, or caseload summary pages"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Context Root Not Found")," error occurs because the deployment does not install the BIRT application."),Object(r.b)("h2",null,"The logs are filled by repetitions of the ICWWKS4001I message"),Object(r.b)("p",null,"For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[1/22/19 8:48:18:272 GMT] 000000ba com.ibm.ws.security.token.internal.TokenManagerImpl ICWWKS4001I: The security token cannot be validated. This can be for the following reasons:\n1. The security token was generated on another server using different keys.\n2. The token configuration or the security keys of the token service that created the token has been changed.\n3. The token service that created the token is no longer available.\n")),Object(r.b)("p",null,"The root cause is users not clearing the browser cache after the application is redeployed. Users might have old, local cookie files."),Object(r.b)("p",null,"However, after a redeployment or an upgrade, the application does not recognize the cookies that are presented to it by the computer, which causes the error messages in the logs."),Object(r.b)("h2",null,"Limitations when using the Minikube none driver"),Object(r.b)("p",null,"There are a number of limitations associated with the Minikube none driver that are documented in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://minikube.sigs.k8s.io/docs/reference/drivers/none/"}),"Minikube documentation"),".\nYou must evaluate the impacts of these limitations for your implementation."),Object(r.b)("p",null,"However, the unavailability of the ",Object(r.b)("inlineCode",{parentName:"p"},"minikube ssh")," command might make it difficult to analyze and resolve problems and issues. For example, switching to the kvm2 driver enables the use of ",Object(r.b)("inlineCode",{parentName:"p"},"minikube ssh")," and resolves issues with the Docker Registry."),Object(r.b)("h2",null,"Storage initialized using a runbook version older than 20.9.0"),Object(r.b)("p",null,"If storage has been initialized using a version of the runbook older than 20.9.0, you will need to update your\noverride values to include a supplementary group:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"global:\n  mq:\n    security:\n      context:\n        supplementalGroups: [888]\n")),Object(r.b)("p",null,"This is due to a update in IBM MQ, the details of which can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/IBM/charts/blob/master/stable/ibm-mqadvanced-server-dev/RELEASENOTES.md"}),"here"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-known-issues-mdx-276c94a529b81c66e380.js.map