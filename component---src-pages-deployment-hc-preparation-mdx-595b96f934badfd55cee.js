(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"013z":function(e,t,a){"use strict";var n=a("WcmB"),r=a("q1tI"),o=a.n(r),l=a("NmYn"),i=a.n(l),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.text},a)))))},h=a("UQWD"),f=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,l=r.subDirectory,i=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:i},"Edit this page on GitHub"))):null},j=a("FCXl"),g=a("dI71"),v=a("Wbzz"),y=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===n,l=new RegExp(n+"/?(#.*)?$"),c=a.replace(l,r);return Object(u.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(u.b)(v.Link,{className:y.link,to:""+c},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:y.list},r))))))},t}(o.a.Component),x=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,l=t.frontmatter,b=void 0===l?{}:l,p=t.relativePagePath,m=t.titleType,h=b.tabs,f=b.title,g=b.theme,v=b.description,y=b.keywords,w=n.data.site.pathPrefix,M=w?r.pathname.replace(w,""):r.pathname,T=h?M.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(u.b)(s.a,{tabs:h,homepage:!1,theme:g,pageTitle:f,pageDescription:v,pageKeywords:y,titleType:m},Object(u.b)(d,{title:o?Object(u.b)(o,null):f,label:"label",tabs:h}),h&&Object(u.b)(N,{slug:M,tabs:h,currentTab:T}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p})),Object(u.b)(j.a,{pageContext:t,location:r,slug:M,tabs:h,currentTab:T}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Mrbt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n,r=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),{}),s=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),b={_frontmatter:c},p=i.a;function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(p,Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(s,{kind:"info",mdxType:"InlineNotification"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Troubleshooting")," If you need help troubleshooting problems, see ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"../../runtime/troubleshoot"}),"Troubleshooting problems"),".")),Object(l.b)("p",null,"The ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/spm-kubernetes"}),"spm-kubernetes")," repository provides the following Helm charts:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"apps:")," defines how to deploy the IBM® WebSphere® Liberty images with IBM® Cúram Social Program Management (SPM)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"batch:")," defines the batch image configuration."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"uawebapp:")," defines how to deploy the Universal Access (React) application."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"web:")," defines how to deploy the static content image for SPM (",Object(l.b)("inlineCode",{parentName:"li"},"Curam")," image only)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"mqserver:")," defines the IBM WebSphere MQ image configuration."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"xmlserver:")," defines the xmlserver container configuration."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"spm:")," an umbrella chart to contain all the other charts.")),Object(l.b)("p",null,"The charts use a templating mechanism to create the YAML file that is used by Kubernetes.\nFor this reason, the main configuration values are stored for each chart in a ",Object(l.b)("inlineCode",{parentName:"p"},"values.yaml")," file in the main folder of the charts.\nThe values can also be overwritten by the ",Object(l.b)("inlineCode",{parentName:"p"},"spm:*")," umbrella chart or by a provided override file during deployment as described in ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/spm-kubernetes/deployment/hc_deployment"}),"Deploying Helm charts"),"."),Object(l.b)("p",null,"YAML is a human-readable structured data format. It provides powerful configuration settings, without having to learn a more complex code type like CSS, JavaScript, or PHP."),Object(l.b)("h2",null,"Preparing to run the Helm charts"),Object(l.b)("p",null,"Before you run the charts, you must configure the database, configure IBM MQ, resolve all chart dependencies, and test the charts.\nYou may also optionally integrate your deployment with an ISAM server for SSO enablement,\nto do so complete the steps on the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/spm-kubernetes/supporting-infrastructure/ISAM"}),"Enabling ISAM")," page under Supporting Infrastructure before returning here."),Object(l.b)("p",null,"Many of the Helm charts that make up a deployment of SPM depend on the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/IBM/charts/tree/master/samples/ibm-sch"}),"IBM Shared Configuration Helpers")," chart, so an extra Helm repository must be added using the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"helm repo add sch https://raw.githubusercontent.com/IBM/charts/master/repo/samples\nhelm repo update\n")),Object(l.b)("h3",null,"Configuring the Helm chart"),Object(l.b)("p",null,"An in-depth catalog of available configuration options is available in the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"../config-reference"}),"Configuration Reference")," topic."),Object(l.b)("p",null,"While you may change the values in your local copy of ",Object(l.b)("inlineCode",{parentName:"p"},"helm-charts/spm/values.yaml"),", it is strongly recommended to use a values override file with your custom options."),Object(l.b)(s,{mdxType:"InlineNotification"},Object(l.b)("p",null,"Sample override files for Minikube, IKS, and CRC are also available in the ",Object(l.b)("inlineCode",{parentName:"p"},"$SPM_HOME/static/resources")," folder. We have provided a minimum\nspec required for a successful deployment in these files, with more options for overriding commented out. The config options from the\nbefore mentioned ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"../config-reference"}),"Configuration Reference")," topic should be used with these files.")),Object(l.b)("h3",null,"Configuring IBM MQ"),Object(l.b)("p",null,"IBM MQ is already configured to work out of the box with a secure connection with IBM WebSphere Liberty.\nThe commands that create all the objects that are needed on the queue manager are defined in a config map, in the ",Object(l.b)("inlineCode",{parentName:"p"},"configmap-mqsc.yaml")," file."),Object(l.b)("p",null,"The password for the IBM MQ web console can be retrieved from the created Secret resource using the following command ",Object(l.b)("strong",{parentName:"p"},"after")," it has been deployed:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"kubectl get secret <releaseName>-mq-credentials -o go-template='{{.data.adminPasswordKey | base64decode}}{{\"\\n\"}}'\n")),Object(l.b)("h2",null,"Packaging the Helm charts"),Object(l.b)("p",null,"To use the Helm Charts to install SPM, package the charts and load them into a repository. For more information, see ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/spm-kubernetes/prereq/chartmuseum"}),"ChartMuseum"),"."),Object(l.b)("p",null,"For each chart, its dependencies must be resolved before it can be loaded into a Helm repository like Chart museum."),Object(l.b)(s,{mdxType:"InlineNotification"},Object(l.b)("p",null,"Due to an internal Helm ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/helm/helm/issues/5780"}),"defect"),", conditional subchart enablement does not work in Helm 3.\nAs a result of this, ",Object(l.b)("inlineCode",{parentName:"p"},"uawebapp")," needs to be packaged and pushed, irrespective of whether you are deploying it or not.\nIt is possible to remove the dependency from the spm ",Object(l.b)("inlineCode",{parentName:"p"},"chart.yaml"),", if you do not wish to package and push it to the repo.")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/helm-charts\n\nhelm dependency update apps\nhelm dependency update mqserver\nhelm dependency update xmlserver\nhelm dependency update batch\nhelm dependency update web\nhelm dependency update uawebapp\n")),Object(l.b)("p",null,"If you made any changes to any of the charts, these can now be verified using the ",Object(l.b)("inlineCode",{parentName:"p"},"helm lint")," and ",Object(l.b)("inlineCode",{parentName:"p"},"helm template")," commands, for example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/helm-charts\n\nhelm lint apps\nhelm template apps\n")),Object(l.b)("p",null,"To publish the individual charts to the Chart museum repository, run the following commands from the ",Object(l.b)("inlineCode",{parentName:"p"},"helm-charts")," folder. The commands also use the ",Object(l.b)("inlineCode",{parentName:"p"},"$SPM_HOME")," value that is defined in ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/spm-kubernetes/prereq/git"}),"Install prerequisite software"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/helm-charts\n\nhelm push apps local-development\nhelm push mqserver local-development\nhelm push xmlserver local-development\nhelm push batch local-development\nhelm push web local-development\nhelm push uawebapp local-development\n\nhelm repo update\n")),Object(l.b)("p",null,"To generate the umbrella chart that is used for the deployment, run the following commands:"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"cd $SPM_HOME/helm-charts\n\nhelm dependency update spm\nhelm push spm local-development\n\nhelm repo update\n")))}m.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')}}]);
//# sourceMappingURL=component---src-pages-deployment-hc-preparation-mdx-595b96f934badfd55cee.js.map