(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{3825:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photos",function(){return c(2153)}])},1355:function(c,b,a){"use strict";var d=a(5893),e=a(8527),f=a(949),g=a(2115),h=a(5193),i=a(4382);a(1961),a(3897);var j=a(7294),k=a(5452),l=a(8375),m=a(3363),n=a(4387),o="ACCOUNT_INFO",p=function(a){var b=a.isLoading,c=a.msg;return(0,d.jsxs)(e.Ug,{width:"100%",justifyContent:"flex-start",alignItems:"center",display:b?"flex":"none",children:[(0,d.jsx)(e.xv,{as:"div",fontStyle:"italic",fontSize:"14px",children:c}),(0,d.jsx)(l.Z,{style:{display:"block !important"},width:"25px",height:"25px",type:l.Z.TYPES.threeDots})]})};b.Z=function(b){var l=b.title,L=(b.amount,b.onSubmit),B=b.submitText,q=(b.stopBot,b.summary),c=(0,m.f2)();c.db,c.user,c.authLoading,c.getAccessToken;var r=(0,f.ff)("colorAccent.light","colorAccent.dark"),a=n.get(o),s=(0,j.useState)(null==a?void 0:a.bankName),C=s[0],M=s[1],t=(0,j.useState)(null==a?void 0:a.bankNameIndex),D=t[0],N=t[1],u=(0,j.useState)(null==a?void 0:a.accountName),E=u[0],O=u[1],v=(0,j.useState)(null==a?void 0:a.accountNumber),F=v[0],P=v[1],w=(0,j.useState)(),G=w[0],Q=w[1],x=(0,j.useState)(),H=x[0],R=x[1],y=(0,j.useState)(),I=y[0],S=y[1],z=(0,j.useState)(),J=z[0],T=z[1],A=(0,j.useState)([]),K=A[0],U=A[1];return(0,j.useEffect)(function(){T(!0),(0,k.W6)("NG",!0).then(function(a){U(a),T(!1)}).catch(function(a){console.log("Banks.error:",a),T(!1)})},[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.fe,{children:(0,d.jsxs)(e.gC,{w:"100%",justifyContent:"flex-start",alignItems:"center",children:[l?(0,d.jsx)(e.xv,{as:"div",color:"#080",border:"1px solid #080",borderLeft:"3px solid #080",p:"5px",children:l}):null,J?(0,d.jsx)(p,{isLoading:!0,msg:"Fetching banks... Please wait"}):(0,d.jsx)(i.Z,{okText:"Ok",mb:"0.5rem !important",value:"".concat(D,":").concat(C),onChange:function(b){var a=b.target.value.split(":");M(a[1]),N(a[0])},title:"Bank Name",placeholder:"Enter your bank name",errorMessage:G,helperText:null,infoText:null,info:null,type:"select",options:K,onOptionName:function(a){return a.name},onOptionValue:function(a,b){return"".concat(b,":").concat(a.name)}}),(0,d.jsx)(i.Z,{okText:"Ok",mb:"0.5rem !important",value:E,onChange:function(a){O(a.target.value)},title:"Account Name",placeholder:"Enter your account name",errorMessage:H,helperText:null,infoText:null,info:null}),(0,d.jsx)(i.Z,{okText:"Ok",mb:"0.5rem !important",value:F,onChange:function(a){P(a.target.value)},title:"Account Number",placeholder:"Enter your account number",errorMessage:I,helperText:null,infoText:null,info:null})]})}),(0,d.jsx)(g.mz,{children:(0,d.jsxs)(e.gC,{w:"100%",justifyContent:"center",alignItems:"center",children:[q?(0,d.jsx)(e.Ug,{w:"100%",justifyContent:"center",alignItems:"center",mb:"15px",children:(0,d.jsx)(e.xv,{children:q})}):null,(0,d.jsx)(e.Ug,{w:"100%",justifyContent:"flex-end",alignItems:"center",children:(0,d.jsx)(h.zx,{onClick:function(){Q(null),R(null),S(null);var a=!1;if(C||(a=!0,Q("Please enter your bank name")),E||(a=!0,R("Please enter your bank account name")),F||(a=!0,S("Please enter your account number")),!a){var b={bankName:C,bankNameIndex:D,accountName:E,accountNumber:F};n.set(o,b),L(b)}},ml:"25px",bg:r,borderColor:r,color:"#fff",textTransform:"capitalize",_hover:{opacity:.4},_disabled:{opacity:.4,cursor:"not-allowed"},children:B||"Submit"})})]})})]})}},1436:function(c,b,a){"use strict";var d=a(5893),e=a(949),f=a(2115),g=a(8527),h=a(5193);a(1961),a(3897),b.Z=function(a){var b=a.description,c=a.title,k=(a.amount,a.bankName),l=a.accountName,m=a.accountNumber,n=a.onSubmit,i=a.color,j=(0,e.ff)("colorAccent.light","colorAccent.dark");return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f.fe,{children:[(0,d.jsxs)(g.gC,{w:"100%",justifyContent:"flex-start",alignItems:"center",children:[c?(0,d.jsx)(g.xv,{as:"div",color:"#080",border:"1px solid #080",borderLeft:"3px solid #080",p:"5px",children:c}):null,(0,d.jsxs)(g.Ug,{w:"80%",bg:"#fff",fontSize:"12px",children:[(0,d.jsx)(g.xu,{w:"50%",textTransform:"capitalize",children:"Bank:"}),(0,d.jsx)(g.xu,{w:"50%",textTransform:"uppercase",children:k})]}),(0,d.jsxs)(g.Ug,{w:"80%",bg:"#fff",fontSize:"12px",children:[(0,d.jsx)(g.xu,{w:"50%",textTransform:"capitalize",children:"Account Name:"}),(0,d.jsx)(g.xu,{w:"50%",textTransform:"uppercase",children:l})]}),(0,d.jsxs)(g.Ug,{w:"80%",bg:"#fff",fontSize:"12px",children:[(0,d.jsx)(g.xu,{w:"50%",textTransform:"capitalize",children:"Account Number:"}),(0,d.jsx)(g.xu,{w:"50%",textTransform:"uppercase",children:m})]}),b?(0,d.jsxs)(g.Ug,{w:"80%",bg:"#fff",fontSize:"12px",children:[(0,d.jsx)(g.xu,{w:"50%",textTransform:"capitalize",children:"Description/Narration:"}),(0,d.jsx)(g.xu,{w:"50%",textTransform:"uppercase",color:i||"inherit",children:(0,d.jsx)("b",{children:b})})]}):null]}),(0,d.jsx)(g.iz,{}),b?(0,d.jsx)(g.xv,{fontSize:"12px",fontWeight:"bold",color:i||"inherit",children:"Make sure you enter the code above as your payment description when making the payment."}):null]}),(0,d.jsx)(f.mz,{children:(0,d.jsx)(g.Ug,{w:"100%",justifyContent:"flex-end",alignItems:"center",children:(0,d.jsx)(h.zx,{onClick:n,ml:"25px",bg:j,borderColor:j,color:"#fff",textTransform:"capitalize",_hover:{opacity:.4},_disabled:{opacity:.4,cursor:"not-allowed"},children:"Confirm Payment"})})})]})}},2035:function(c,b,a){"use strict";a.d(b,{KN:function(){return g},ZP:function(){return h}});var d=a(7294),e=a(5321),f=a(3363),g=function(a,b){return new Promise(function(c,d){(0,e.QT)((0,e.JU)(a.service,"processed_payments","".concat(b))).then(function(a){a?c(a.data()):c(null)}).catch(function(a){d(a)})})};function h(){var a=(0,d.useState)([]),h=a[0],m=a[1],b=(0,d.useState)(),i=b[0],n=b[1],c=(0,d.useState)(),j=c[0],o=c[1],g=(0,f.f2)(),k=g.db,l=g.user;return(0,d.useEffect)(function(){if(k&&l)return n(!0),function(b,a,d,f,c){return console.log("Check.Payer:",a.uid),(0,e.cf)((0,e.IO)((0,e.hJ)(b.service,"processed_payments"),(0,e.ar)("payer","==",a.uid),(0,e.ar)("value_given","==",!0),(0,e.Xo)("sent_payment_time_milli","desc"),(0,e.b9)(50)),function(a){console.log("Check.Payer:data",null==a?void 0:a.docs),f(null==a?void 0:a.docs)},c)}(k,l,50,function(a){a&&m(a),n(!1),o(null),console.log("Check.Payer:ddd",a)},function(a){o((0,f.jB)(a)),n(!1),console.log("Check.Payer:error",a)})},[k,l]),{classWithdrawals:h,classWithdrawalsPending:i,classWithdrawalsError:j}}},2153:function(d,b,a){"use strict";a.r(b),a.d(b,{default:function(){return L}});var e=a(1799),f=a(9534),g=a(5893),h=a(7375),i=a(949),j=a(8527),k=a(7962),l=a(7290),m=a(4672),n=a(1961),c=a(6455),o=a.n(c),p=a(7294),q=a(1163),r=a(3363),s=a(2035),t=a(4045),u=a(5452),v=a(9396),w=a(2344),x=function(){return(x=Object.assign||function(d){for(var a,b=1,e=arguments.length;b<e;b++)for(var c in a=arguments[b])Object.prototype.hasOwnProperty.call(a,c)&&(d[c]=a[c]);return d}).apply(this,arguments)},y=a(3897),z=a(7293),A=a(8938);function B(a){var c=a.onActivate,d=(a.name,a.earningPerPhoto),e=a.totalPhotos,h=a.estimatedTotalEarnings,b=a.activationFee;return a.children,a.paymentConfig,(0,f.Z)(a,["onActivate","name","earningPerPhoto","totalPhotos","estimatedTotalEarnings","activationFee","children","paymentConfig"]),(0,g.jsx)(j.xu,{w:"100%",maxW:"600px",px:"5px",mb:"1rem",children:(0,g.jsxs)(A.Z,{w:"100%",borderRadius:"10px",flex:"1 1 auto",children:[(0,g.jsxs)(j.Ug,{justifyContent:"flex-start",alignItems:"center",w:"100%",pos:"relative",children:[(0,g.jsx)(z.Z,{text:"L".concat(n.Nb[b].id),textLength:2,mr:"5px",size:"40px",bg:n.Nb[b].color,isRound:!0}),(0,g.jsx)(j.xv,{children:"Classifications Level ".concat(n.Nb[b].id)})]}),(0,g.jsxs)(j.gC,{mt:"0.5rem",w:"100%",children:[(0,g.jsxs)(j.Ug,{mb:"0.2rem",justifyContent:"space-between",alignItems:"center",w:"100%",pos:"relative",children:[(0,g.jsx)(j.xv,{children:"Total Photos:"}),(0,g.jsx)(j.xv,{children:e})]}),(0,g.jsxs)(j.Ug,{mb:"0.2rem",justifyContent:"space-between",alignItems:"center",w:"100%",pos:"relative",children:[(0,g.jsx)(j.xv,{children:"Earnings/Photo:"}),(0,g.jsxs)(j.xv,{children:[n.t$,y.Z.format(d,{minFD:2,maxFD:2})]})]}),(0,g.jsxs)(j.Ug,{mb:"0.2rem",justifyContent:"space-between",alignItems:"center",w:"100%",pos:"relative",children:[(0,g.jsx)(j.xv,{children:"Estimated Earnings:"}),(0,g.jsxs)(j.xv,{children:[n.t$,y.Z.format(h,{minFD:2,maxFD:2})]})]}),(0,g.jsxs)(j.Ug,{mb:"0.2rem",justifyContent:"space-between",alignItems:"center",w:"100%",pos:"relative",children:[(0,g.jsx)(j.xv,{children:"Activate Fee:"}),(0,g.jsxs)(j.xv,{children:[n.t$,b]})]}),(0,g.jsx)(j.Ug,{justifyContent:{base:"center",md:"flex-end"},alignItems:"flex-end",mt:"2rem",w:"100%",children:(0,g.jsx)(w.Z,{onClick:c,children:"Activate Photos"})})]})]})})}var C=a(5304),D=a(2115),E=a(5321),F=a(5154);a(8375);var G=a(1355),H=a(1436);a(4387);var I=function(a){var b=[];return a.split(" ").forEach(function(a){b.push(a.toLowerCase().trim())}),b},J=function(a){var f,b=a.price,s=(a.txRef,a.upline),q=a.isOpen,i=a.onClose,u=a.onPaid,k=(0,p.useState)(),h=k[0],w=k[1],c=(0,r.f2)(),x=c.db,l=c.user;c.authLoading,c.getAccessToken;var m=(0,p.useState)(0),d=m[0],z=m[1];return(0,p.useEffect)(function(){z(0)},[b,l]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(D.u_,{isOpen:q&&((0,t.N4)(h)||d<2),onClose:i,closeOnOverlayClick:!1,children:[(0,g.jsx)(D.ZA,{}),(0,g.jsxs)(D.hz,{borderRadius:"32px",w:{base:"95%",md:"650px"},children:[d>1?null:(0,g.jsx)(D.xB,{w:"100%",d:"flex",justifyContent:"flex-end",children:(0,g.jsx)(j.xu,{as:F.aHS,onClick:i,cursor:"pointer",display:"block",children:"Cancel"})}),0==d?(0,g.jsx)(H.Z,{title:(0,g.jsxs)(j.gC,{children:[(0,g.jsxs)(j.xv,{as:"div",children:["Pay the sum of ",(0,g.jsxs)("b",{children:[n.t$,y.Z.format(b,{minFD:2,maxFD:2})]})," into the below account."]}),(0,g.jsx)(j.xv,{as:"div",children:"Make sure you pay with a bank account that you own. You will only be able to withdraw your earnings into the same bank account you paid with."})]}),amount:b,bankName:"Wema Bank PLC",accountName:"Feyitech digital lane",accountNumber:"0124286591",description:(0,t.d5)(l.email,b),color:null===(f=n.Nb[b])|| void 0===f?void 0:f.color,onSubmit:function(){z(1)}}):1==d?(0,g.jsx)(G.Z,{title:(0,g.jsxs)(j.gC,{children:[(0,g.jsx)(j.xv,{as:"div",children:"Provide the details of the bank account you paid with."}),(0,g.jsx)(j.xv,{as:"div",fontWeight:"bold",children:"Note: Do not submit a false payment. Your account will irreversibly be banned if the system detected you falsely claimed you made payment."})]}),stopBot:!0,summary:"Amount Paid: ".concat(n.t$).concat(y.Z.format(b,{minFD:2,maxFD:2})),onSubmit:function(a){z(2),a=(0,v.Z)((0,e.Z)({payer:l.uid,upline:s,amount:b,reviewed:!1},a),{names:I(a.accountName)}),w("Sending confirmation...");var d=(0,v.Z)((0,e.Z)({},a),{payment_status:"",potBalanceTarget:"",sent_payment_time_milli:0,salary:0,salary_paid:!1,reviewed:!1,payment_description:(0,t.d5)(l.email,b)}),c=(0,E.IO)((0,E.hJ)(x.service,"processed_payments"),(0,E.ar)("payer","==",l.uid),(0,E.ar)("reviewed","==",!1),(0,E.ar)("amount","==",b),(0,E.ar)("accountNumber","==",a.accountNumber),(0,E.ar)("payment_description","==",(0,t.d5)(l.email,b)),(0,E.Xo)("sent_payment_time_milli","desc"),(0,E.b9)(1));(0,E.PL)(c).then(function(b){console.log("Pay.rez.all",b.size,b),b.size>0?(console.log("Pay.rez.found",b.docs[0].id),w(null),i(),u((0,e.Z)({transaction_id:b.docs[0].id},a))):(console.log("Pay.rez.notFound"),x.insert((0,e.Z)({date:Date.now()},d),"processed_payments").then(function(b){w(null),console.log("Pay.rez.notFound.newId",b.id),i(),u((0,e.Z)({transaction_id:b.id},a))}).catch(function(a){w(null),z(1),o().fire({icon:"error",text:(0,r.jB)(a)})}))}).catch(function(a){console.log("Pay.rez.error",a),w(null),z(1),o().fire({icon:"error",text:(0,r.jB)(a)})})},requestDesc:!0}):null]})]}),(0,g.jsx)(C.Z,{isClosable:!1,msg:h,isOpen:!(0,t.N4)(h),onClose:function(){return w(null)},allowOutsideClick:!0})]})},K=a(4387);function L(){var c=(0,p.useState)(),d=c[0],N=c[1],O=(0,q.useRouter)(),a=(0,r.f2)(),P=a.db,G=a.user,Q=a.authLoading,v=(0,p.useState)([]),R=(v[0],v[1]);(0,p.useEffect)(function(){(0,u.le)().then(function(a){return R(a)})},[]);var w=(0,p.useState)(!0),H=w[0],S=w[1];(0,p.useEffect)(function(){if(Q||G){if(G){S(!1);var a=K.get("pendingActivation"),b=K.get("pendingActivationLastCheck")||0;(0,t.N4)(a)||(Date.now()-b<9e5?(console.log("Pending.Check.Test"),N("Processing photos"),setTimeout(function(){N(null),o().fire({icon:"info",text:"Your activation is still awaiting approval. Please be patient, the photos will be availabe on your dashboard once approved.",confirmButtonText:"Go To dashboard",showConfirmButton:!0,showCancelButton:!1}).then(function(a){a.isConfirmed&&O.push("/earn")})},(0,t.XF)(2e3,5e3))):(console.log("Pending.Check.Live"),T(a)))}}else O.replace("/sign-in");console.log("User:",G,Q)},[G]);var T=function(a){N("Processing photos"),setTimeout(function(){(0,s.KN)(P,a).then(function(b){var c,d,e,f;if(b&&b.value_denied){c="error",d="Your photos activation was denied. Your payment was never received. If this was an error, please contact us.",e="Ok",f=function(){console.log("User.pay.result.check.Ok",a,b)};try{K.remove("pendingActivation"),K.remove("pendingActivationLastCheck")}catch(g){}N(null)}else if(b&&b.value_given){c="success",d="Your photos activation was successful. Start earning on the photos activated now.",e="Start",f=function(){console.log("User.pay.result.check.Ok",a,b),O.push("/earn")};try{K.remove("pendingActivation"),K.remove("pendingActivationLastCheck")}catch(h){}N(null)}else if(b&&!(0,t.N4)(b.error)){c="error",d=b.error,e="Ok",f=function(){console.log("User.pay.result.check.error",a,d)};try{K.remove("pendingActivation"),K.remove("pendingActivationLastCheck")}catch(i){}N(null)}else c="info",d="Your activation is still awaiting approval. Please be patient, the photos will be availabe on your dashboard once approved.",e="Go To dashboard",f=function(){console.log("User.pay.result.check.pending",a,b),O.push("/earn")},K.set("pendingActivation",a),K.set("pendingActivationLastCheck",Date.now()+9e5),N(null);o().fire({icon:c,text:d,confirmButtonText:e,showConfirmButton:!0,showCancelButton:!1}).then(function(a){a.isConfirmed&&f()})}).catch(function(b){console.log("User.pay.result.check.error",a,b),N(null),o().fire({icon:"error",text:b.message,confirmButtonText:"Ok",showConfirmButton:!0,showCancelButton:!1})})},[5e3])},x=(0,p.useState)([]),I=x[0],U=x[1];(0,p.useEffect)(function(){U(Object.values(n.Nb))},[]);var b=(0,h.qY)();b.isOpen,b.onOpen,b.onClose;var y=(0,p.useState)(),z=y[0],V=y[1],D=(0,p.useState)(),W=(D[0],D[1]),E=(0,p.useState)(),L=E[0],X=E[1],F=(0,p.useState)(),M=F[0],Y=F[1],Z=function(b,c){V(b),W(c);var a=K.get(n.XG.refId);(!a||isNaN(a))&&(a="0");var d="".concat(G.uid,":").concat(a,"_").concat(Date.now());X(d),Y(a)};return(0,g.jsxs)(l.Z,{link:"/",title:n.jG,description:n.kr,image:null,updatedTime:null,loading:H,children:[(0,g.jsx)(m.Z,{bg:"url(/assets/images/banner/bg.png)",_before:{pos:"absolute",content:"''",w:"100%",h:"100%",left:0,right:0,top:0,bg:(0,i.ff)("navbarBg.light","navbarBg.dark"),opacity:.9},p:{base:"20px 0 25px",md:"25px 0 25px"},children:(0,g.jsxs)(k.Z,{zIndex:"1",children:[(0,g.jsx)(A.Z,{w:"100%",maxW:"700px",p:"0.5rem 1rem",minH:{base:"70px"},mb:"0.5rem",children:(0,g.jsx)(j.xv,{as:"div",fontSize:"14px",children:(0,g.jsxs)(j.xu,{mb:"0.5rem",children:[(0,g.jsx)("b",{children:"Disclaimer: "})," Photo activation is not an investment. This site, representing a part of ",(0,g.jsx)("b",{children:"Feyitech Digital Lane"})," is not a financial investment platform.",(0,g.jsx)("br",{}),"Activation of photos only determines the set of photos shown to you to classify, and the amount you're paid for each photo you classify."]})})}),(0,g.jsx)(j.xv,{as:"div",fontSize:"14px",my:"0.5rem !important",children:"Activate a set of photos below"}),(0,g.jsx)(j.gC,{w:"100%",children:I.map(function(a,b){var c=a.activationFee,d=(0,f.Z)(a,["activationFee"]);return(0,g.jsx)(B,(0,e.Z)({onActivate:function(){Z(c,"Classifications level ".concat(b+1))},name:"Classifications level ".concat(b+1),activationFee:c},d))})})]})}),(0,g.jsx)(J,{isOpen:z>0,onClose:function(){return V(0)},onPaid:function(a){console.log("PaymentDetails.handlePaid",a),K.set("pendingActivation",a.transaction_id),K.set("pendingActivationLastCheck",Date.now()+9e5),o().fire({icon:"info",text:"Your payment confirmation has been sent. The photos will be activated for you within 24 hours once your payment has been confirmed.",confirmButtonText:"Go To dashboard",cancelButtonText:"Close",showConfirmButton:!0,showCancelButton:!0}).then(function(a){a.isConfirmed&&O.push("/earn")})},price:z,upline:M,txRef:L}),(0,g.jsx)(C.Z,{msg:d,isOpen:!(0,t.N4)(d),onClose:function(){return N(null)},allowOutsideClick:!0})]})}}},function(a){a.O(0,[76,431,387,669,910,885,774,888,179],function(){var b;return a(a.s=3825)}),_N_E=a.O()}])