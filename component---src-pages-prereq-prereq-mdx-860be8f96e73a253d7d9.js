(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),r=a("q1tI"),b=a.n(r),l=a("NmYn"),c=a.n(l),o=a("Xrax"),i=a("k4MR"),m=a("TSYQ"),p=a.n(m),d=a("QH2O"),s=a("qKvR"),O=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(s.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12"},Object(s.b)("h1",{id:"page-title",className:d.text},a)))))},u=a("UQWD"),j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=u.data.site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,c=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(s.b)("div",{className:"bx--row "+j.row},Object(s.b)("div",{className:"bx--col"},Object(s.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),y=a("Wbzz"),M=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),b=r===n,l=new RegExp(n+"/?(#.*)?$"),o=a.replace(l,r);return Object(s.b)("li",{key:e,className:p()((t={},t[M.selectedItem]=b,t),M.listItem)},Object(s.b)(y.Link,{className:M.link,to:""+o},e))}));return Object(s.b)("div",{className:M.tabsContainer},Object(s.b)("div",{className:"bx--grid"},Object(s.b)("div",{className:"bx--row"},Object(s.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(s.b)("nav",null,Object(s.b)("ul",{className:M.list},r))))))},t}(b.a.Component),S=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,b=e.Title,l=t.frontmatter,m=void 0===l?{}:l,p=t.relativePagePath,d=t.titleType,u=m.tabs,j=m.title,h=m.theme,y=m.description,M=m.keywords,I=n.data.site.pathPrefix,C=I?r.pathname.replace(I,""):r.pathname,x=u?C.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(s.b)(i.a,{tabs:u,homepage:!1,theme:h,pageTitle:j,pageDescription:y,pageKeywords:M,titleType:d},Object(s.b)(O,{title:b?Object(s.b)(b,null):j,label:"label",tabs:u}),u&&Object(s.b)(f,{slug:C,tabs:u,currentTab:x}),Object(s.b)(S.a,{padded:!0},a,Object(s.b)(g,{relativePagePath:p})),Object(s.b)(N.a,{pageContext:t,location:r,slug:C,tabs:u,currentTab:x}),Object(s.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},"X/2j":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return O}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},i=o("InlineNotification"),m=o("Accordion"),p=o("AccordionItem"),d={_frontmatter:c},s=l.a;function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(i,{kind:"warning",mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ready to jump right in?")),Object(b.b)("p",null,"Please note that the preceding section provides an introduction to the architecture of IBM® Cúram Social Program Management (SPM) on Kubernetes and to concepts you will encounter throughout the rest of the runbook.\nIf you have already read through the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/spm-kubernetes/architecture/kubernetes/spm-on-kubernetes-101"}),"Architecture")," section please continue.\nIf not, it’s the place to start.")),Object(b.b)("p",null,"SPM was enhanced in version 7.0.10.0 to enable it to be deployed on cloud native hosting platforms."),Object(b.b)("p",null,"Further enhancements have been introduced in version 7.0.11.0 to enable deployment on OpenShift."),Object(b.b)("p",null,"To build and run IBM Cúram Social Program Management (SPM) for Kubernetes, install the following software components:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/prereq/3rdparty-sw"}),"Base third-party software")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/deploy-spm/install-spm"}),"IBM Cúram Social Program Management (SPM) software")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/prereq/docker-helm"}),"Docker®, and Helm")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/prereq/kubernetes/kubernetes-overview"}),"Kubernetes"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/prereq/kubernetes/minikube"}),"Minikube")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/prereq/openshift/openshift-overview"}),"OpenShift"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/prereq/openshift/codeready-containers"}),"CodeReady Containers")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/prereq/openshift/codeready-containers"}),"Code Ready Container")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/prereq/chartmuseum"}),"ChartMuseum")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/spm-kubernetes/prereq/git"}),"GitHub repo"))),Object(b.b)("p",null,"In order to be hosted on Kubernetes, IBM Cúram Social Program Management has been enhanced to support the following technologies:"),Object(b.b)(i,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," These technologies cannot be used independently from each other for IBM Cúram Social Program Management on a Kubernetes-based architecture.\nIBM Cúram Social Program Management will update the supported versions of these technologies frequently throughout the year.\nThe technologies listed are fixed version support only, unless stated otherwise.")),Object(b.b)(m,{mdxType:"Accordion"},Object(b.b)(p,{title:"SPM 7.0.11.0",open:"true",mdxType:"AccordionItem"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported Software"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prerequisite Minimum"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WebSphere Liberty"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20.0.0.9"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20.0.0.9"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OpenShift ",Object(b.b)("img",Object(n.a)({parentName:"td"},{src:"https://img.shields.io/badge/-OpenShift_only-red",alt:"OpenShift only"}))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4.5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kubernetes ",Object(b.b)("img",Object(n.a)({parentName:"td"},{src:"https://img.shields.io/badge/-IKS_only-blue",alt:"IKS only"}))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.18 and future fix packs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.18"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IBM MQ LTS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9.1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9.1.0.5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IBM MQ CD ",Object(b.b)("img",Object(n.a)({parentName:"td"},{src:"https://img.shields.io/badge/-OpenShift_only-red",alt:"OpenShift only"}))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9.1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9.1.5.0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Docker Community Edition (CE)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"19.03"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"19.03.5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4,5,6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Helm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v3.3.4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(1)")," ","|"," IBM Cúram Social Program Management only supports IBM WebSphere Liberty when containerized as Docker containers and deployed on IBM Cloud Kubernetes Services (IKS), or OpenShift.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(2)")," ","|"," IBM Cúram Social Program Management supports IBM Cloud Kubernetes Services (IKS) distribution of Kubernetes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(3)")," ","|"," IBM Cúram Social Program Management only supports IBM MQ Long Term Support (LTS) when IBM Cúram Social Program Management is containerized and deployed on IBM Cloud Kubernetes Services (IKS) or OpenShift.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(4)")," ","|"," IBM Cúram Social Program Management only supports Docker for packaging IBM Cúram Social Program Management into containers for deployment on IBM Cloud Kubernetes Services (IKS) or OpenShift.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(5)")," ","|"," Only Linux-based containers are supported by IBM Cúram Social Program Management.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(6)")," ","|"," IBM Cúram Social Program Management does not support Docker containers hosted outside IBM Cloud Kubernetes Services, or OpenShift.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(7)")," ","|"," IBM Cúram Social Program Management only supports Helm version 3.x for deploying IBM Cúram Social Program Management on IBM Cloud Kubernetes Services (IKS), or OpenShift.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(8)")," ","|"," IBM Cúram Social Program Management supports OpenShift 4.5 or later.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(9)")," ","|"," IBM Cúram Social Program Management only supports IBM MQ CD when IBM Cúram Social Program Management is containerized and deployed on OpenShift only."))))),Object(b.b)(p,{title:"SPM 7.0.10.0",mdxType:"AccordionItem"},Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Supported Software"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prerequisite Minimum"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WebSphere Liberty"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20.0.0.9"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"19.0.0.12"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1,8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Kubernetes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.18 and future fix packs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.16"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2,8,9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IBM MQ"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9.1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"9.1.0.4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Docker Community Edition (CE)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"19.03"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"19.03.5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4,5,6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Helm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v3.3.4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(1)")," ","|"," IBM Cúram Social Program Management only supports IBM WebSphere Liberty when containerized as Docker containers and deployed on IBM Cloud Kubernetes Services (IKS).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(2)")," ","|"," IBM Cúram Social Program Management only supports IBM Cloud Kubernetes Services (IKS) distribution of Kubernetes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(3)")," ","|"," IBM Cúram Social Program Management only supports IBM MQ Long Term Support (LTS) when IBM Cúram Social Program Management is containerized and deployed on IBM Cloud Kubernetes Services (IKS).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(4)")," ","|"," IBM Cúram Social Program Management only supports Docker for packaging IBM Cúram Social Program Management into containers for deployment on IBM Cloud Kubernetes Services (IKS).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(5)")," ","|"," Only Linux-based containers are supported by IBM Cúram Social Program Management.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(6)")," ","|"," IBM Cúram Social Program Management does not support Docker containers hosted outside IBM Cloud Kubernetes Services.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(7)")," ","|"," IBM Cúram Social Program Management only supports Helm version 3.x for deploying IBM Cúram Social Program Management on IBM Cloud Kubernetes Services (IKS).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(8)")," ","|"," For SPM 7.0.10.0 there is still a hard requirement on an external identity provider (e.g. OpenLDAP) for elasticity. This code is no longer available in the latest version of the runbook. This can be found in the ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/IBM/spm-kubernetes/releases/tag/20.9.0"}),"September 2020 release"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"(9)")," ","|"," As part of the Kubernetes release 1.19, Kubernetes version 1.16 is now in a state of depreciated. For more information please see ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-cs_versions"}),"Kubernetes version information and update actions"))))))))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-prereq-prereq-mdx-860be8f96e73a253d7d9.js.map