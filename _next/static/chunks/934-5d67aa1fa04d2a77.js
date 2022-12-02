"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{1436:function(c,b,a){var d=a(5893),e=a(949),f=a(2115),g=a(8527),h=a(5193);a(1961),a(3897),b.Z=function(a){var b=a.description,c=a.title,k=(a.amount,a.bankName),l=a.accountName,m=a.accountNumber,n=a.onSubmit,i=a.color,j=(0,e.ff)("colorAccent.light","colorAccent.dark");return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f.fe,{children:[(0,d.jsxs)(g.gC,{w:"100%",justifyContent:"flex-start",alignItems:"center",children:[c?(0,d.jsx)(g.xv,{as:"div",color:"#080",border:"1px solid #080",borderLeft:"3px solid #080",p:"5px",children:c}):null,(0,d.jsxs)(g.Ug,{w:"80%",bg:"#fff",fontSize:"12px",children:[(0,d.jsx)(g.xu,{w:"50%",textTransform:"capitalize",children:"Bank:"}),(0,d.jsx)(g.xu,{w:"50%",textTransform:"uppercase",children:k})]}),(0,d.jsxs)(g.Ug,{w:"80%",bg:"#fff",fontSize:"12px",children:[(0,d.jsx)(g.xu,{w:"50%",textTransform:"capitalize",children:"Account Name:"}),(0,d.jsx)(g.xu,{w:"50%",textTransform:"uppercase",children:l})]}),(0,d.jsxs)(g.Ug,{w:"80%",bg:"#fff",fontSize:"12px",children:[(0,d.jsx)(g.xu,{w:"50%",textTransform:"capitalize",children:"Account Number:"}),(0,d.jsx)(g.xu,{w:"50%",textTransform:"uppercase",children:m})]}),b?(0,d.jsxs)(g.Ug,{w:"80%",bg:"#fff",fontSize:"12px",children:[(0,d.jsx)(g.xu,{w:"50%",textTransform:"capitalize",children:"Description/Narration:"}),(0,d.jsx)(g.xu,{w:"50%",textTransform:"uppercase",color:i||"inherit",children:(0,d.jsx)("b",{children:b})})]}):null]}),(0,d.jsx)(g.iz,{}),b?(0,d.jsx)(g.xv,{fontSize:"12px",fontWeight:"bold",color:i||"inherit",children:"Make sure you enter the code above as your payment description when making the payment."}):null]}),(0,d.jsx)(f.mz,{children:(0,d.jsx)(g.Ug,{w:"100%",justifyContent:"flex-end",alignItems:"center",children:(0,d.jsx)(h.zx,{onClick:n,ml:"25px",bg:j,borderColor:j,color:"#fff",textTransform:"capitalize",_hover:{opacity:.4},_disabled:{opacity:.4,cursor:"not-allowed"},children:"Confirm Payment"})})})]})}},8934:function(d,b,a){a.d(b,{Z:function(){return q}});var e=a(5893),f=a(2115),g=a(8527);a(1163);var h=a(7294),i=a(5154),c=a(6455),j=a.n(c),k=a(3363),l=a(1961),m=a(4045),n=a(5304);a(8375);var o=a(3897);a(4382),a(5452),a(4387);var p=a(1436),q=function(a){var d=a.amount,q=a.isOpen,r=a.onClose,s=(a.onPaid,a.bankName),t=a.accountName,u=a.accountNumber,y=a.canWithdraw,v=(0,h.useState)(),b=v[0],z=v[1],c=(0,k.f2)();c.db,c.user,c.authLoading,c.getAccessToken;var w=(0,h.useState)(!1),x=w[0],A=w[1];return(0,h.useEffect)(function(){q&&(d?s&&t&&u?A(!1):(A(!0),j().fire({icon:"error",text:"Your bank account details was not found! Please try again later."}).then(function(){r()})):(A(!0),j().fire({icon:"error",text:"Your balance is too low"}).then(function(){r()})))},[s,t,u,d,q]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(f.u_,{isOpen:q&&!x&&(0,m.N4)(b),onClose:r,closeOnOverlayClick:!1,children:[(0,e.jsx)(f.ZA,{}),(0,e.jsxs)(f.hz,{borderRadius:"32px",w:{base:"95%",md:"650px"},children:[(0,m.N4)(b)?(0,e.jsx)(f.xB,{w:"100%",d:"flex",justifyContent:"flex-end",children:(0,e.jsx)(g.xu,{as:i.aHS,onClick:r,cursor:"pointer",display:"block",children:"Cancel"})}):null,(0,e.jsx)(p.Z,{title:(0,e.jsxs)(g.xv,{as:"div",children:["The sum of ",(0,e.jsxs)("b",{children:[l.t$,o.Z.format(d,{minFD:2,maxFD:2})]})," will be made into the below account."]}),amount:d,bankName:s,accountName:t,accountNumber:u,onSubmit:function(){z("Sending your request..."),setTimeout(function(){A(!0),z(null),r(),j().fire({icon:"info",text:y?"Your payment request has been submitted. Please don't send another request until the current one has been acknowledged. Kindly be patient.":"You currently have no earnings available for withdrawal."})},(0,m.XF)(2e3,5e3))}})]})]}),(0,e.jsx)(n.Z,{isClosable:!1,msg:b,isOpen:!(0,m.N4)(b),onClose:function(){return z(null)},allowOutsideClick:!0})]})}}}])