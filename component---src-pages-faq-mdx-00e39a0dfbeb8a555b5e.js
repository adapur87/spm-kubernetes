(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"013z":function(e,t,o){"use strict";var n=o("WcmB"),a=o("q1tI"),r=o.n(a),i=o("NmYn"),s=o.n(i),c=o("Xrax"),l=o("k4MR"),d=o("TSYQ"),b=o.n(d),u=o("QH2O"),p=o("qKvR"),m=function(e){var t,o=e.title,n=e.tabs,a=void 0===n?[]:n;return Object(p.b)("div",{className:b()(u.pageHeader,(t={},t[u.withTabs]=a.length,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.text},o)))))},h=o("UQWD"),g=o("BAC9"),v=function(e){var t=e.relativePagePath,o=e.repository,n=h.data.site.siteMetadata.repository,a=o||n,r=a.baseUrl,i=a.subDirectory,s=r+"/edit/"+a.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},S=o("FCXl"),f=o("dI71"),y=o("Wbzz"),O=o("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,o=e.slug,n=o.split("/").filter(Boolean).slice(-1)[0],a=t.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),r=a===n,i=new RegExp(n+"/?(#.*)?$"),c=o.replace(i,a);return Object(p.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(p.b)(y.Link,{className:O.link,to:""+c},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:O.list},a))))))},t}(r.a.Component),j=o("MjG9");t.a=function(e){var t=e.pageContext,o=e.children,a=e.location,r=e.Title,i=t.frontmatter,d=void 0===i?{}:i,b=t.relativePagePath,u=t.titleType,h=d.tabs,g=d.title,f=d.theme,y=d.description,O=d.keywords,P=n.data.site.pathPrefix,w=P?a.pathname.replace(P,""):a.pathname,M=h?w.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(p.b)(l.a,{tabs:h,homepage:!1,theme:f,pageTitle:g,pageDescription:y,pageKeywords:O,titleType:u},Object(p.b)(m,{title:r?Object(p.b)(r,null):g,label:"label",tabs:h}),h&&Object(p.b)(x,{slug:w,tabs:h,currentTab:M}),Object(p.b)(j.a,{padded:!0},o,Object(p.b)(v,{relativePagePath:b})),Object(p.b)(S.a,{pageContext:t,location:a,slug:w,tabs:h,currentTab:M}),Object(p.b)(c.a,null))}},BAC9:function(e,t,o){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,o){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,o){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},ps49:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return s})),o.d(t,"default",(function(){return h}));var n=o("wx14"),a=o("zLVn"),r=(o("q1tI"),o("7ljp")),i=o("013z"),s=(o("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},l=c("PageDescription"),d=c("Accordion"),b=c("AccordionItem"),u=c("InlineNotification"),p={_frontmatter:s},m=i.a;function h(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)(m,Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"},Object(r.b)("p",null,"List of the frequently asked question in relation to IBM® Cúram Social Program Management (SPM) on Cloud")),Object(r.b)("h2",null,"FAQ’s"),Object(r.b)(d,{mdxType:"Accordion"},Object(r.b)(b,{title:"Which cloud delivery model applies to IBM Cúram Social Program Management?",mdxType:"AccordionItem"},"The most common cloud delivery models are Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS) and Software-as-a-Service (SaaS).",Object(r.b)("p",null,"All other cloud delivery models (that is, Application Platform-as-a-Service, Database-as-a-Service, Security-as-a-Service, Container-as-a-Service etc.) are specialized variations of one of the three main models."),Object(r.b)("p",null,"At this moment, only IaaS applies to SPM.")),Object(r.b)(b,{title:"How does Infrastructure-as-a-Service (IaaS) apply to SPM?",mdxType:"AccordionItem"},"IaaS is a cloud delivery model that is used to host applications. Most typically, Cloud users self-serve servers over the internet to support their development, test and production workloads without the intervention of a system administrator.",Object(r.b)("p",null,"Once provisioned, these servers are used to host the middleware and the SPM application."),Object(r.b)("p",null,"In this model, software platform (PaaS) or final software (SaaS) are not delivered to end users over the internet in a self-serve manner."),Object(r.b)("p",null,"The intervention of the system administrator is still required to install and configure all the middleware, integrate them, deploy the application,\nand promote the application and data through the phases of the Software Development Life Cycle (SDLC).")),Object(r.b)(b,{title:"How does hybrid cloud apply to SPM?",mdxType:"AccordionItem"},"Hybrid cloud combines IT resources (compute, middleware, application etc.) on the customer on-premises environment and in the cloud.",Object(r.b)("p",null,"Therefore, for example, SPM hosted on the IBM Cloud VPC with integration with legacy systems running on-premises is a hybrid Social Program architecture."),Object(r.b)(u,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Important"),":\nSPM runtime application is not hybrid - that is, part running on the cloud and part running on-premises.")),Object(r.b)("br",null),"In the SPM hosting example mentioned, the Social Program ecosystem architecture is hybrid – that is, some applications running on-premises with SPM running on the cloud."),Object(r.b)(b,{title:"Can the SPM application be decomposed to run in a hybrid cloud architecture?",mdxType:"AccordionItem"},"A potential scenario would be the SPM caseworker application running on-premises while the SPM portals such as Citizen Engagement or Providers are running on the Cloud. Although possible, this architecture can lead into complications.",Object(r.b)("p",null,"SPM was designed according to the Shared Database Pattern; therefore, the caseworker application and the portals share the same physical database."),Object(r.b)("p",null,"In such a scenario described, the database would be geographically distant from one of the tenants which could result into issues that are difficult to address:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Latency to run high volume of operations against a remote database."),Object(r.b)("li",{parentName:"ul"},"Eventual (or even prolonged) unavailability of the remote database due to network glitches."))),Object(r.b)(b,{title:"Could SPM hosted on the Cloud be integrated with on-premises legacy systems?",mdxType:"AccordionItem"},"Yes. The integration can be direct site-to-site connection through VPN tunnels or over WAN using HTTP over TLS."),Object(r.b)(b,{title:"Can we host SPM on Amazon Elastic Kubernetes Services (EKS) or Azure Kubernetes Services (AKS)?",mdxType:"AccordionItem"},"No. SPM only supports hosting of containerized architectures on IBM Cloud Kubernetes Services.",Object(r.b)("p",null,"However, SPM will provide multi-cloud support through OpenShift in 2020; this means that SPM will support Docker containers hosted on any cloud provider (i.e. AWS, Azure, etc) or on-premises,\nas long as the underlying container management platform is OpenShift."),Object(r.b)("p",null,"It is also important to remember that AWS EKS and Azure AKS are not container management services based on OpenShift.")),Object(r.b)(b,{title:"Can we host SPM containers outside Kubernetes?",mdxType:"AccordionItem"},"No. SPM does not support hosting of Docker containers outside Kubernetes, for example, Apache Mesos, AWS Elastic Container Services (ECS) or even directly on virtual machines or bare metal.",Object(r.b)("p",null,"SPM only supports hosting on containerized architectures of SPM on IBM Cloud Kubernetes Services."),Object(r.b)("p",null,"SPM does not support Docker containers hosted on virtual machines or bare metal, outside Kubernetes.")),Object(r.b)(b,{title:"Can we use WebSphere Liberty Collectives on the architecture?",mdxType:"AccordionItem"},"No. SPM does not support WebSphere Liberty Collectives, regardless of the deployment architecture.",Object(r.b)("p",null,"Although WebSphere Liberty provides support to Collectives, SPM does not support a deployment architecture of the SPM application on WebSphere Liberty Collectives.")),Object(r.b)(b,{title:"Can we use WebSphere Liberty outside Kubernetes? For example, on a virtual machine?",mdxType:"AccordionItem"},"No. SPM only supports WebSphere Liberty when containerized as Docker images with SPM EAR packages and deployed on IBM Cloud Kubernetes Services.",Object(r.b)(u,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Important"),":\nSPM does not support WebSphere Liberty hosted directly on a virtual machine or bare metal, outside of Kubernetes.")),Object(r.b)("br",null),"When the customer opens a ticket for a problem with SPM on WebSphere Liberty, the customer will need to provide the server.xml, Dockerfiles and Helm Charts used to deploy SPM on Kubernetes.",Object(r.b)("p",null,"If the customer is testing SPM on WebSphere Liberty on a virtual machine, the problem needs to be reproducible in Kubernetes and the Kubernetes artifacts (i.e. server.xml, Dockerfiles and Helm Charts) must be provided."),Object(r.b)("p",null,"SPM will not troubleshoot, provide guidance or advise on WebSphere Liberty running on virtual machines or bare metal, regardless if the problem occurred in a development, test, staging or production environments.")),Object(r.b)(b,{title:"What is the Universal Base Image (UBI)?",mdxType:"AccordionItem"},"UBI consists of enterprise-ready and OCI-compliant Linux containers that offer greater security with stricter defaults than general images. By basing the images on UBI, deployment of SPM on OpenShift can be certified.",Object(r.b)("p",null,"For more information, see Red Hat’s ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.redhat.com/en/blog/introducing-red-hat-universal-base-image"}),"Universal Base Image"),".")),Object(r.b)(b,{title:"Can we use Operators?",mdxType:"AccordionItem"},"No. SPM does not support deployment on IBM Cloud Kubernetes Services via Operators. You must use Helm."),Object(r.b)(b,{title:"What happened to the OpenLDAP chart in the runbook?",mdxType:"AccordionItem"},"As of Release 20.10.0, combined with SPM 7.0.11.0, the OpenLDAP chart has been removed, as there is no longer a dependency on an external identity provider for elasticity of SPM. If you need access to this chart, refer to an older release of the runbook.")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-faq-mdx-00e39a0dfbeb8a555b5e.js.map