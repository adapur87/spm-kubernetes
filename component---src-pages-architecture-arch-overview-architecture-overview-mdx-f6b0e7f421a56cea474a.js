(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),r=a("q1tI"),i=a.n(r),c=a("NmYn"),o=a.n(c),s=a("Xrax"),b=a("k4MR"),p=a("TSYQ"),l=a.n(p),d=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:l()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},a)))))},g=a("UQWD"),h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=g.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,o=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),w=a("Wbzz"),v=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),i=r===n,c=new RegExp(n+"/?(#.*)?$"),s=a.replace(c,r);return Object(u.b)("li",{key:e,className:l()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(u.b)(w.Link,{className:v.link,to:""+s},e))}));return Object(u.b)("div",{className:v.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:v.list},r))))))},t}(i.a.Component),x=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,c=t.frontmatter,p=void 0===c?{}:c,l=t.relativePagePath,d=t.titleType,g=p.tabs,h=p.title,f=p.theme,w=p.description,v=p.keywords,y=n.data.site.pathPrefix,S=y?r.pathname.replace(y,""):r.pathname,T=g?S.split("/").filter(Boolean).slice(-1)[0]||o()(g[0],{lower:!0}):"";return Object(u.b)(b.a,{tabs:g,homepage:!1,theme:f,pageTitle:h,pageDescription:w,pageKeywords:v,titleType:d},Object(u.b)(m,{title:i?Object(u.b)(i,null):h,label:"label",tabs:g}),g&&Object(u.b)(A,{slug:S,tabs:g,currentTab:T}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:l})),Object(u.b)(j.a,{pageContext:t,location:r,slug:S,tabs:g,currentTab:T}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},SYbV:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=s("InlineNotification"),p=s("Caption"),l={_frontmatter:o},d=c.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"IBM® Cúram Social Program Management (SPM) is not a PaaS nor a SaaS offering on IBM Cloud. SPM is a platform for Social Programs that customers configure and customize according to their own requirements.\nThen build, deploy, run and operate on environments according to their own Software Development Life Cycle (SDLC) requirements."),Object(i.b)("p",null,"SPM can either be deployed on traditional hosting architectures (i.e. virtual machines or bare metal) or on Kubernetes. This runbook only refers to the cloud native hosting on Kubernetes."),Object(i.b)("p",null,"SPM can be deployed on two Kubernetes distributions:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"IBM Cloud Kubernetes Services (IKS)"),": only available on IBM Cloud."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Red Hat OpenShift"),": on any environment supported by Red Hat (e.g. on-premises, private cloud or public cloud).")),Object(i.b)("p",null,"The Figure 1 shows the essential nature of the SPM architecture on Kubernetes."),Object(i.b)("p",null,"It conveys the governing ideas and major building blocks of the architecture.\nThe ",Object(i.b)("strong",{parentName:"p"},"“Development & DevOps”"),", ",Object(i.b)("strong",{parentName:"p"},"“Security”")," and ",Object(i.b)("strong",{parentName:"p"},"“Governance”")," components and processes described in the architecture diagram are just for reference and will likely be different, depending on your Deployment Architecture."),Object(i.b)("p",null,"SPM does not require nor impose these components in the architecture."),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," This runbook does not provide any content or guidance on the ",Object(i.b)("inlineCode",{parentName:"p"},"Development and DevOps"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Governance")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Security"),".")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAABYlAAAWJQFJUiTwAAADA0lEQVQ4y31TyY4jRRD1v/IBSHDjyJkTCCGxCBDiguYACHUf2JqmZzTTA27c3R637XLte2VW7mstJjwI5sSkqrKiIvNlvIx4sTi+dhBCotV1mkRFuONlzHrEsj3nnKU70jWL/wfO8FrJ/Rdv+4en7uIr+/lbevWz+exNnQf+wzfE8qfF6yNzIYvlJc7j4mGVPPuF1Hn71yUjfXh13iThYhgGrbVSyns/z/MEzwTTaQBYStlRTrko6ibJK0IZkRohHGZFWTcLIURZVkmSdggZa53zznspFcCU0s65cRiMsRDAGvha7xzEO86Tc3YBLsZoVRZtUxutpnHQStbwn2cIdQPstZZSkmcpuJQUgARqQAqYAlhj7tYR3cQkalyK5rCGecrwDHaKp7gdwC7IEeYMT1zBWTRKUuCxcFY31G/jLsq6fdJWSLbMt0TlnaqxqrCOShakLSzlNY0qhaipqvJ2tYb7niJTOewKta1cgd2m9MYfrwMD9J4fVE39YOUmIVFJMmThUEx13TWPdy/8OJzAXI/3Ef0zILusv7gpMBHfX8XA6vxZAp7jcTpb0tvUnC/7tBFMemPFQ7qC3J5od3yoEWdcEiZRT5m0HSJcOowJ5YpKV1ZNh2lelNkJ7HZh9sPZi2mYFsZo7aaOuYZxIkfEfX26tkDcwNa8FU2vslYkNe+Fb5myzhdVe/00OGUb9AF5FwbdZudgDOPgtLvPf2S6uFlHd9tDWxfrffT8LnCOwh7n7TSOzmsQxAKqD1KijIVJCBX04yikjLOYUIJw33UYegOhvu8ZZTSMD0bbaf63zqCjLAhYh+C6DGFalqzvFeo5oUKC+AqMe8pRSzIpFGZVT7pXIlGDbz/4GH/9DfvkS/7oO/TRp/Tycf/e++TidzEOjBKnp5vi27Ptu0a7R/fvPJRPXvbbS7C2Fq03eH/YXT1Jb+/IIaR1s/31t2K3V8ZAw4Cg0yLYHJYg9U30R1mn8yuwUtJaaUyUZnlVGeeU1kQIJsQ/3QaDQmNB7aTU0nIu/qP9N7/35kqOIXetAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("picture",{parentName:"span"},"\n        ",Object(i.b)("source",Object(n.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/0eda2/architecture-overview.webp 288w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/460e2/architecture-overview.webp 576w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/e0ca3/architecture-overview.webp 1152w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/9a814/architecture-overview.webp 1518w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"})),"\n        ",Object(i.b)("source",Object(n.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/7fc1e/architecture-overview.png 288w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/a5df1/architecture-overview.png 576w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/3cbba/architecture-overview.png 1152w","/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/36102/architecture-overview.png 1518w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"})),"\n        ",Object(i.b)("img",Object(n.a)({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/0dd461ed66e780cf772ac2b5cbd2d865/3cbba/architecture-overview.png",alt:"architecture overview",title:"architecture overview",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n    "),Object(i.b)(p,{mdxType:"Caption"},Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Figure 1:")," SPM on Kubernetes")),Object(i.b)("p",null,"The Figure 2 shows how SPM is built as a containerized application by using WebSphere® Application Server Liberty, packaged as Docker®\ncontainers, orchestrated by Helm, and running on IKS."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"381px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"139.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAIAAADuuAg3AAAACXBIWXMAAAsSAAALEgHS3X78AAAD10lEQVQ4y3VVaVMbRxDl//+DpCqfnEoqdqIEjI0hBGSQZKMLCQkk7aljpb20933nza4Q2FGmuqZ6pranu1/36z0SBMFxHNM0rUNL082DohumbVlHtm0XRZHnefFqVSfdTWdiwsopI6esknFqzpQ6LaeckqZpcYTnvzOGnpVH0YjHQkLJ6UxKH1fBaOlDqWQqJl6QHDDeHfNU1KOndUJJCasWJ//0fvr1Y3sis9sC4VBi4ofpAeMwDAGA51hzyX3cpFTp6kkIn4RouolfPO+NXddFElmWJUkC8AzT9FxH1jxGjjmFCK8mvIpUE+isEs+VKEnznfFwOHx4eMCuqiqMoyjCpeMn9MZnREhAiz6EkQKib/yFGgCX78OO41jXdVy6jiVsw5mcz42C2xa8TgQJc1qBG0R+GDDf9w3DtAyd21jv66Papy8nV/3jy+7Z7ei6zZ7djt9f3fcpLYyfPSNbUqHn3bLsrSovZa85lj/3+HqXu2ozjeGqNdp87i/qPX7AmUH0yrhyW1paum5YprGUbVbNl0ax0IuFUcwRuUZ26KyShHF6hN5EbTqdzmAwaDab0+kUgOEGDyErTvJZkQgnBUQvj4BQ0MgHO8/Is9/vMwyDtwCY63lR6EtmMpOyyiH6BGhBgQAzdE4QPde5sif9WhTodt0wABgv2q1HuTVcNQZL9NaX8ab1IDTuF9ifVkEQZQfQrtImgCne33fs8WUPUF932LPG+OSq99dlB2g/8PaLcRAE6C14xo5uA2C6pqJUqHMV6uuwIejtAO2JIOHq5uamXq83Go3ZbIbnPM9DMI4flzgRqPYKMCOAbUPEuvMMm26322q1jHIFQZhn6dZOwARQl1Uz8JlRCKtZBZRO0PNRnL0AhpjRm9hRKgBmm/pcciabdLIOh7wzXnjjpT9auNgJz16z6jVgsMeloW/noj2Ti7sn8ec/r06v70/rg1+O67XzOzxHS+k3fK5WxWd43ioSSgU+03JGQaRsKsJhKSWfDwyDilVAMYpC3QI2ISuHnBxhZyUivBLhcqmG4MFuAI5GI5qmKYrSNA2AhSHhs+kltBTRYjAT3JLYASbBdGUzUohhkO6HAUkSPDRNFJxMEjJZjYXs0WrRGq1/eHPyqTmpXbT/OG+DUpScIwsvPMTn0t6yTJ0V9NpF9+2HBuTdx9bvZ63fTm9rF3e18/bX0TpKim/4vMcMzVYRo0MZPWo75O23H5o/vjm5vV8MOatHaeOF61cd9n9DX3MAdV715oA1u1NlIgSEVWrBqxkZgOv1Gs0M//Z/Fu72/xfDcizbw4x4/t2Q7/8FB/sNN5LKsgIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("picture",{parentName:"span"},"\n        ",Object(i.b)("source",Object(n.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/0eda2/spm_on_kubernetes.webp 288w","/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/ae2a5/spm_on_kubernetes.webp 381w"],sizes:"(max-width: 381px) 100vw, 381px",type:"image/webp"})),"\n        ",Object(i.b)("source",Object(n.a)({parentName:"picture"},{srcSet:["/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/7fc1e/spm_on_kubernetes.png 288w","/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/b6c51/spm_on_kubernetes.png 381w"],sizes:"(max-width: 381px) 100vw, 381px",type:"image/png"})),"\n        ",Object(i.b)("img",Object(n.a)({parentName:"picture"},{className:"gatsby-resp-image-image",src:"/spm-kubernetes/static/23b0dd3932217a8c89ddc7ecf58ebc9e/b6c51/spm_on_kubernetes.png",alt:"spm on kubernetes",title:"spm on kubernetes",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}})),"\n      "),"\n    "),Object(i.b)(p,{mdxType:"Caption"},Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Figure 2:")," SPM packaging for Kubernetes")),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," Database support remains on virtual machines (VMs) as part of the initial offering.")),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," IBM MQ running on Kubernetes is only supported on OpenShift. When deploying SPM on IBM Cloud Kubernetes Services, IBM MQ must be hosted on virtual machines or bare metal. More information about SPM and IBM MQ can be found ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/spm-kubernetes/supporting-infrastructure/mq/mq-overview"}),"here"),".")),Object(i.b)("p",null,"To support containerized architectures, a number of architectural changes were made. The changes are documented as follows and apply only to SPM running on\nKubernetes."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.wlp.doc/Kubernetes/c_KubJMSArchitecture.html"}),"Message Architecture"),"\nWhen IBM® Cúram Social Program Management is containerized, IBM MQ Long Term Support (LTS) is used as the message engine to process internal application\nJMS-based deferred processing."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.wlp.doc/Kubernetes/c_KubThreadIsolation.html"}),"Transaction Isolation"),"\nClient HTTP initiated transactions and JMS initiated transactions run on different WebSphere Application Server Liberty instances, integrated through\nan external message engine (for example, IBM MQ)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.wlp.doc/Kubernetes/c_KubElasticity.html"}),"Elasticity"),"\nElasticity in IBM Cloud Kubernetes Service is the ability to scale up or down pods and nodes to adjust to the load to meet the end user demand.")))}u.isMDXComponent=!0},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')}}]);
//# sourceMappingURL=component---src-pages-architecture-arch-overview-architecture-overview-mdx-f6b0e7f421a56cea474a.js.map