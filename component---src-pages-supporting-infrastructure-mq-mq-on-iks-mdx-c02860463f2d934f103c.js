(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"013z":function(e,n,t){"use strict";var a=t("WcmB"),r=t("q1tI"),l=t.n(r),b=t("NmYn"),c=t.n(b),m=t("Xrax"),s=t("k4MR"),i=t("TSYQ"),o=t.n(i),u=t("QH2O"),p=t("qKvR"),O=function(e){var n,t=e.title,a=e.tabs,r=void 0===a?[]:a;return Object(p.b)("div",{className:o()(u.pageHeader,(n={},n[u.withTabs]=r.length,n))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.text},t)))))},d=t("UQWD"),E=t("BAC9"),N=function(e){var n=e.relativePagePath,t=e.repository,a=d.data.site.siteMetadata.repository,r=t||a,l=r.baseUrl,b=r.subDirectory,c=l+"/edit/"+r.branch+b+"/src/pages"+n;return l?Object(p.b)("div",{className:"bx--row "+E.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:E.link,href:c},"Edit this page on GitHub"))):null},A=t("FCXl"),h=t("dI71"),j=t("Wbzz"),T=t("I8xM"),g=function(e){function n(){return e.apply(this,arguments)||this}return Object(h.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.tabs,t=e.slug,a=t.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var n,r=c()(e,{lower:!0,strict:!0}),l=r===a,b=new RegExp(a+"/?(#.*)?$"),m=t.replace(b,r);return Object(p.b)("li",{key:e,className:o()((n={},n[T.selectedItem]=l,n),T.listItem)},Object(p.b)(j.Link,{className:T.link,to:""+m},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:T.list},r))))))},n}(l.a.Component),C=t("MjG9");n.a=function(e){var n=e.pageContext,t=e.children,r=e.location,l=e.Title,b=n.frontmatter,i=void 0===b?{}:b,o=n.relativePagePath,u=n.titleType,d=i.tabs,E=i.title,h=i.theme,j=i.description,T=i.keywords,I=a.data.site.pathPrefix,L=I?r.pathname.replace(I,""):r.pathname,R=d?L.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"";return Object(p.b)(s.a,{tabs:d,homepage:!1,theme:h,pageTitle:E,pageDescription:j,pageKeywords:T,titleType:u},Object(p.b)(O,{title:l?Object(p.b)(l,null):E,label:"label",tabs:d}),d&&Object(p.b)(g,{slug:L,tabs:d,currentTab:R}),Object(p.b)(C.a,{padded:!0},t,Object(p.b)(N,{relativePagePath:o})),Object(p.b)(A.a,{pageContext:n,location:r,slug:L,tabs:d,currentTab:R}),Object(p.b)(m.a,null))}},BAC9:function(e,n,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,n,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,n,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},UQWD:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},WcmB:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/spm-kubernetes"}}}')},p4pE:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return m})),t.d(n,"default",(function(){return u}));var a,r=t("wx14"),l=t("zLVn"),b=(t("q1tI"),t("7ljp")),c=t("013z"),m=(t("qKvR"),{}),s=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),i={_frontmatter:m},o=c.a;function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(b.b)(o,Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("p",null,"IBM® Cúram Social Program Management (SPM) supports only ",Object(b.b)("strong",{parentName:"p"},"IBM MQ LTS on a VM")," , when running on IKS. The following steps outline how to do this. In this runbook we will outline the steps to create:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.pro.doc/q003090_.htm"}),"Queues")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.pro.doc/q003300_.htm"}),"Listeners")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.pro.doc/q003220_.htm"}),"Channels")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/SSFKSJ_9.1.0/com.ibm.mq.pro.doc/q003320_.htm"}),"Topics"))),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," The MQ version for this runbook verification is  9.1.0 LTS.")),Object(b.b)("p",null,"For the runbook, two standalone VMs were used as MQ nodes."),Object(b.b)("h3",null,"Queue manager names"),Object(b.b)("p",null,"For runbook configuration, the following naming conversion was used throughout the MQ setup: ",Object(b.b)("inlineCode",{parentName:"p"},"NamingConvention_AppName"),". This must be unique, but ensure you change the commands used on this page accordingly."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Queue Name:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"minikube_curam")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Channel Name:")," This value should be all capitals"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"CHL_NamingConvention_AppName")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"CHL_MINIKUBE_CURAM")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Listeners Name:")," This value should be all capitals"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"LS_NamingConvention_AppName")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"LS_MINIKUBE_CURAM")),Object(b.b)("h2",null,"MQ stages"),Object(b.b)("p",null,"On both MQ nodes run the following command as root:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"su - mqm # Changing user into mqm\nexport PATH=/opt/mqm/inst1/bin:$PATH\n")),Object(b.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Important!")),Object(b.b)("p",null,"Run the export PATH command on both MQ nodes, this command will be used in further commands in the runbook.")),Object(b.b)("h2",null,"Shared storage"),Object(b.b)("p",null,"Create the shared storage for our nodes."),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," Run the commands as root.")),Object(b.b)("p",null,"On the shared node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"mkdir -p /MQHA/logs\nmkdir -p /MQHA/qmgrs\nmkdir -p /MQHA/scratch\nuseradd mqha -s /sbin/nologin\nchown -R mqha:mqha /MQHA/*\n")),Object(b.b)("p",null,"Verify that the UID and GUID match the owner ID by running the following command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'echo "/MQHA  MQ.FQDN(rw,sync,no_wdelay,fsid=0,anonuid=1001,anongid=1001)" >> /etc/exports\n')),Object(b.b)("p",null,"Start and enable both the nfs service and rpcbind service by running the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"systemctl start nfs-server.service\nsystemctl enable nfs-server.service\nsystemctl start rpcbind\nsystemctl enable rpcbind\n")),Object(b.b)("p",null,"On MQ nodes run the following commands:"),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," Commands to be run as root.")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'echo "SHAREDNODEADDRESS:/MQHA  /MQHA  nfs  defaults  0 0" >> /etc/fstab\nsystemctl start rpcbind\nsystemctl enable rpcbind\nmkdir -p /MQHA\nchmod 1777 /MQHA #Check permissions\nmount /MQHA\n')),Object(b.b)("h2",null,"Create QMs"),Object(b.b)("p",null,"When creating the queue, start on the secondary node first then move to the primary node."),Object(b.b)("p",null,"On the secondary MQ node, run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"crtmqm -ld /MQHA/logs -md /MQHA/qmgrs minikube_curam\ndspmqinf -o command minikube_curam\n")),Object(b.b)("p",null,"Save the output of the ",Object(b.b)("inlineCode",{parentName:"p"},"dspmqinf -o command minikube_curam")," command, it should look like the following:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"addmqinf -s QueueManager -v Name=minikube_curam -v Directory=minikube_curam -v Prefix=/var/mqm -v DataPath=/MQHA/qmgrs/minikube_curam\n")),Object(b.b)("p",null,"Wait for /MQHA/qmgrs/minikube_curam/qm.ini to appear on other node"),Object(b.b)("p",null,"On the primary MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"addmqinf -s QueueManager -v Name=minikube_curam -v Directory=minikube_curam -v Prefix=/var/mqm -v DataPath=/MQHA/qmgrs/minikube_curam\nstrmqm -x minikube_curam\n")),Object(b.b)("p",null,"On the secondary MQ node run the following command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"strmqm -x minikube_curam\n")),Object(b.b)("h2",null,"Create queues"),Object(b.b)("p",null,"On the primary MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc minikube_curam <<-EOS\nDEFINE QLOCAL(QN.CURAMDEADMESSAGEQUEUE) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.WORKFLOWERROR) BOTHRESH(5) BOQNAME(QN.CURAMDEADMESSAGEQUEUE) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.WORKFLOWENACTMENT) BOTHRESH(5) BOQNAME(QN.WORKFLOWERROR) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.WORKFLOWACTIVITY) BOTHRESH(5) BOQNAME(QN.WORKFLOWERROR) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.DPERROR) BOTHRESH(5) BOQNAME(QN.CURAMDEADMESSAGEQUEUE) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nDEFINE QLOCAL(QN.DPENACTMENT) BOTHRESH(5) BOQNAME(QN.DPERROR) CLWLUSEQ (ANY) DEFBIND (NOTFIXED)\nALTER QMGR CHLAUTH(DISABLED)\nALTER QMGR DEADQ(QN.CURAMDEADMESSAGEQUEUE)\nEOS\n")),Object(b.b)("h2",null,"Create listeners"),Object(b.b)("p",null,"On the primary MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc minikube_curam <<-EOS\nDEFINE LISTENER (LS_MINIKUBE_CURAM) TRPTYPE (TCP) CONTROL (QMGR) PORT (1414)\nSTART LISTENER (LS_MINIKUBE_CURAM)\nEOS\n")),Object(b.b)("h2",null,"Create channels"),Object(b.b)("p",null,"On the primary MQ node run the following command:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Enter your MQ node names into the following commands:")),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")," CERTLABL expects the value to be lower case ibmwebspheremq + Queue Name\nFor this example it will be ibmwebspheremqminikube_curam")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc minikube_curam <<-EOS\nDEFINE CHANNEL(CHL_MINIKUBE_CURAM) CHLTYPE(SVRCONN)  TRPTYPE(TCP) MCAUSER('mqm') SSLCIPH (TLS_RSA_WITH_AES_128_CBC_SHA256)  CERTLABL ('ibmwebspheremqminikube_curam') SSLCAUTH (OPTIONAL) REPLACE\nDEFINE CHANNEL(CHL_MINIKUBE_CURAM) CHLTYPE(CLNTCONN) TRPTYPE(TCP) CONNAME('Node1(1414),Node2(1414)') QMNAME(minikube_curam) SSLCIPH (TLS_RSA_WITH_AES_128_CBC_SHA256) CERTLABL ('ibmwebspheremqminikube_curam') REPLACE\nEOS\n")),Object(b.b)("h2",null,"Create topics"),Object(b.b)("p",null,"On the primary MQ node run the following command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc minikube_curam <<-EOS\nDEFINE TOPIC (CURAMCACHEINVALIDATIONTOPIC) TOPICSTR (CURAMCACHEINVALIDATIONTOPIC)\nALTER QMGR CONNAUTH('CHECK.PWD')\nDEFINE AUTHINFO('CHECK.PWD') AUTHTYPE(IDPWOS) CHCKLOCL(OPTIONAL) CHCKCLNT(OPTIONAL)\nEOS\n")),Object(b.b)("h2",null,"Configure security"),Object(b.b)("p",null,"The configuration of security is in four parts"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Setting the object type."),Object(b.b)("li",{parentName:"ul"},"Creating the keystore and certs."),Object(b.b)("li",{parentName:"ul"},"Updating the certs on both nodes."),Object(b.b)("li",{parentName:"ul"},"Refreshing security settings.")),Object(b.b)(s,{mdxType:"InlineNotification"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Note:")),Object(b.b)("p",null,"The application pods must connect to MQ using a non-privileged account. The example commands use ",Object(b.b)("inlineCode",{parentName:"p"},"mqclient")," as the non-privileged account.\nThis username must be set in the secret referenced by the ",Object(b.b)("inlineCode",{parentName:"p"},"global.mq.queueManager.secret.name")," property. See the ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/spm-kubernetes/deployment/secrets"}),"Handling Secrets")," page for more information.")),Object(b.b)("p",null,"On the secondary MQ node run the following command:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"useradd -g 0 -M mqclient && usermod -L mqclient\n")),Object(b.b)("p",null,"On the primary MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"useradd -g 0 -M mqclient && usermod -L mqclient\nrunmqsc minikube_curam <<-EOS\nSET AUTHREC OBJTYPE(QMGR) PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.DPENACTMENT') PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.DPERROR') PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.WORKFLOWACTIVITY') PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.WORKFLOWENACTMENT') PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.WORKFLOWERROR') PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(QUEUE) PROFILE('QN.CURAMDEADMESSAGEQUEUE') PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(LISTENER) PROFILE('LS_MINIKUBE_CURAM') PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(CHANNEL) PROFILE('CHL_MINIKUBE_CURAM') PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(CLNTCONN) PROFILE('CHL_MINIKUBE_CURAM') PRINCIPAL('mqclient') AUTHADD(ALL)\nSET AUTHREC OBJTYPE(TOPIC) PROFILE('CURAMCACHEINVALIDATIONTOPIC') PRINCIPAL('mqclient') AUTHADD(ALL)\nEOS\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'runmqckm -keydb -create -db /MQHA/qmgrs/minikube_curam/ssl/key.kdb -type cms -pw Passw0rd -stash\nrunmqakm -cert -create -db /MQHA/qmgrs/minikube_curam/ssl/key.kdb -stashed -label ibmwebspheremqminikube_curam -size 2048 -dn "CN=minikube_curam,O=IBM,C=US" -x509version 3 -expire 365 -sig_alg SHA256WithRSA\nrunmqakm -cert -extract -db /MQHA/qmgrs/minikube_curam/ssl/key.kdb -stashed -label ibmwebspheremqminikube_curam -target /MQHA/qmgrs/minikube_curam/ssl/key_minikube_curam.arm\nrunmqakm -cert -export -db /MQHA/qmgrs/minikube_curam/ssl/key.kdb -stashed -label ibmwebspheremqminikube_curam -target /MQHA/qmgrs/minikube_curam/ssl/key_minikube_curam.p12 -target_type pkcs12 -target_pw Passw0rd\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"openssl pkcs12 -in /MQHA/qmgrs/minikube_curam/ssl/key_minikube_curam.p12 -passin pass:Passw0rd -nocerts -nodes | sed -ne '/-BEGIN PRIVATE KEY-/,/-END PRIVATE KEY-/p' > /MQHA/qmgrs/minikube_curam/ssl/tls.key\nopenssl pkcs12 -in /MQHA/qmgrs/minikube_curam/ssl/key_minikube_curam.p12 -passin pass:Passw0rd -clcerts -nokeys | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /MQHA/qmgrs/minikube_curam/ssl/tls.crt\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"runmqsc minikube_curam <<-EOS\nALTER QMGR CONNAUTH('CHECK.PWD')\nDEFINE AUTHINFO('CHECK.PWD') AUTHTYPE(IDPWOS) CHCKLOCL(OPTIONAL) CHCKCLNT(OPTIONAL)\nREFRESH SECURITY TYPE(SSL)\nREFRESH SECURITY TYPE(AUTHSERV)\nREFRESH SECURITY TYPE(CONNAUTH)\nEOS\n")),Object(b.b)("p",null,"After these stages have been run MQ should be configured."),Object(b.b)("h2",null,"Clean up QMs/channels/listeners"),Object(b.b)("p",null,"Used these steps if you are reconfiguring MQ or cleaning up MQ."),Object(b.b)("p",null,"On both MQ nodes run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"endmqm -w minikube_curam\ndltmqm minikube_curam\nrmvmqinf minikube_curam\n")),Object(b.b)("p",null,"On either MQ node run the following commands:"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"rm -rf /MQHA/qmgrs/**\nrm -rf /MQHA/logs/**\nrm -rf /MQHA/scratch\nendmqm -w minikube_curam\ndltmqm minikube_curam\nrmvmqinf minikube_curam\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-supporting-infrastructure-mq-mq-on-iks-mdx-c02860463f2d934f103c.js.map