(this["webpackJsonpdapper-pool"]=this["webpackJsonpdapper-pool"]||[]).push([[0],{225:function(e,t,n){},226:function(e,t,n){},240:function(e,t){},243:function(e,t){},246:function(e,t){},250:function(e,t){},276:function(e,t){},278:function(e,t){},292:function(e,t){},294:function(e,t){},323:function(e,t){},325:function(e,t){},415:function(e,t){},416:function(e,t){},517:function(e,t,n){},525:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(213),s=n.n(r),i=(n(225),n(226),n(71)),o=n.n(i),u=n(91),l=n(53),b=n(16),j=n(17),d=n.n(j),p=new(n(216).a)({supportedChainIds:[80001]}),h=new o.a(o.a.givenProvider||"https://rpc-endpoints.superfluid.dev/mumbai"),m=n(215),f=n(62),O=(n(517),n(2));function x(){return Object(O.jsx)("div",{className:"spinner-container",children:Object(O.jsx)("div",{className:"loading-spinner"})})}var v="0x39A29a015dd54B28Ef290697BdB269d2E5110CCB",g=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"walletAddress",type:"address"},{indexed:!1,internalType:"int256",name:"numberEntered",type:"int256"}],name:"NumberEntered",type:"event"},{inputs:[{internalType:"int256",name:"_numberEntered",type:"int256"}],name:"enterNumber",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getTotalValueAndWalletCounts",outputs:[{internalType:"int256",name:"",type:"int256"},{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}];function y(){var e=Object(u.b)(),t=e.active,n=e.account,a=(e.library,e.connector,e.activate),r=e.deactivate,s=Object(c.useState)(),i=Object(b.a)(s,2),o=i[0],j=i[1],y=Object(c.useState)("0"),w=Object(b.a)(y,2),k=w[0],N=w[1],C=Object(c.useState)("0"),T=Object(b.a)(C,2),S=T[0],F=T[1],E=Object(c.useState)(""),W=Object(b.a)(E,2),B=W[0],A=W[1],M=Object(c.useState)(!1),P=Object(b.a)(M,2),I=P[0],L=P[1],V=Object(c.useState)(""),H=Object(b.a)(V,2),D=H[0],J=H[1],R=Object(c.useState)(!1),U=Object(b.a)(R,2),_=U[0],G=U[1],$=Object(c.useState)(null),q=Object(b.a)($,2),z=q[0],K=q[1],Q=Object(c.useState)(""),X=Object(b.a)(Q,2),Y=X[0],Z=X[1],ee=function(){return L(!0)},te=function(){L(!1),Z(""),K(null)};function ne(){return(ne=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(p);case 3:"80001"!==window.ethereum.networkVersion?(ee(),J("Please connect to Mumbai matic network in your metamask!")):localStorage.setItem("isWalletConnected",!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("err",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function ce(){return(ce=Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{r(),localStorage.setItem("isWalletConnected",!1),N(0),F(0)}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(){return(ae=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new h.eth.Contract(g,v),j(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return se.apply(this,arguments)}function se(){return(se=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.methods.getTotalValueAndWalletCounts().call();case 2:t=e.sent,n=h.utils.fromWei(t[0],"mwei"),N(n),F(t[1]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return(ie=Object(l.a)(d.a.mark((function e(){var c,a,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J("Transaction in progress!"),ee(),t){e.next=7;break}return J("Please connect to Mumbai matic network in your metamask!"),e.abrupt("return");case 7:if(parseFloat(B)){e.next=10;break}return J("Please enter valid number!"),e.abrupt("return");case 10:return e.prev=10,G(!0),a=h.utils.toWei(B,"mwei"),e.next=15,o.methods.enterNumber(a).estimateGas({from:n});case 15:return r=e.sent,s=Math.round(Number(r)+Number(r)*Number(.2)),e.next=19,o.methods.enterNumber(a).send({from:n,gasLimit:s}).on("transactionHash",(function(e){c=e,Z(e),J("Transaction hash generated : "+e)})).on("receipt",Object(l.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K("https://mumbai.polygonscan.com/tx/"+c),J("Transaction successful!"),A(""),e.next=5,re();case 5:G(!1);case 6:case"end":return e.stop()}}),e)})))).on("error",(function(e){J(e.message),G(!1)}));case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(10),J(e.t0.message),G(!1);case 25:case"end":return e.stop()}}),e,null,[[10,21]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){t&&h?function(){ae.apply(this,arguments)}():(N(0),F(0))}),[n,h]),Object(c.useEffect)((function(){o&&t&&re()}),[o,t]),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"App-header",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-7",children:t?Object(O.jsx)("span",{className:"nav-welcome-msg",children:"Welcome to Wallet Counter App"}):Object(O.jsx)(O.Fragment,{})}),Object(O.jsxs)("div",{className:"col-5 btn-container",children:[t?Object(O.jsxs)("button",{className:"address",children:[n.substring(0,10),"...",n.substring(n.length-10,n.length)]}):Object(O.jsx)(O.Fragment,{}),t?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)("button",{className:"connect-btn",onClick:function(){return function(){return ne.apply(this,arguments)}()},children:"Connect"}),t?Object(O.jsx)("button",{className:"connect-btn",onClick:function(){return function(){return ce.apply(this,arguments)}()},children:"Disconnect"}):Object(O.jsx)(O.Fragment,{})]})]})}),Object(O.jsx)("div",{className:"mt-3 mb-5",children:Object(O.jsxs)("div",{class:"container",id:"container",children:[Object(O.jsx)("div",{class:"form-container sign-in-container",children:Object(O.jsxs)("form",{action:"",children:[Object(O.jsx)("h3",{children:"Enter value"}),Object(O.jsx)("input",{type:"number",value:B,placeholder:"12",onChange:function(e){var t=new RegExp(/^[-]?\d+\.?\d{0,6}$/);(""===e.target.value||t.test(e.target.value))&&A(e.target.value)}}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"button",onClick:function(){return function(){return ie.apply(this,arguments)}()},children:"Submit"})]})}),Object(O.jsx)("div",{class:"overlay-container",children:Object(O.jsx)("div",{class:"overlay",children:Object(O.jsxs)("div",{class:"overlay-panel overlay-right",children:[Object(O.jsx)("h3",{children:"Total No. of Wallets"}),Object(O.jsx)("button",{class:"ghost",id:"signUp",children:S}),Object(O.jsx)("br",{}),Object(O.jsx)("h3",{children:"Total Value"}),Object(O.jsx)("button",{class:"ghost",id:"signUp",children:k})]})})})]})}),Object(O.jsxs)(f.a,{show:I,onHide:te,children:[Object(O.jsx)(f.a.Header,{closeButton:!0,children:Object(O.jsx)(f.a.Title,{children:"Message"})}),_?Object(O.jsx)(x,{}):Object(O.jsx)(O.Fragment,{}),Object(O.jsxs)(f.a.Body,{children:[D,z?Object(O.jsxs)("a",{href:z,target:"_blank",rel:"noopener noreferrer",children:[" https://mumbai.polygonscan.com/tx/",Y," "]}):Object(O.jsx)(O.Fragment,{})]}),Object(O.jsx)(f.a.Footer,{children:Object(O.jsx)(m.a,{variant:"secondary",onClick:te,children:"Close"})})]})]})}function w(e){return new o.a(e)}var k=function(){return Object(O.jsx)(u.a,{getLibrary:w,children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("header",{children:Object(O.jsx)(y,{})})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,530)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(521),n(522);s.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(k,{})})),N()}},[[525,1,2]]]);
//# sourceMappingURL=main.b19dce9a.chunk.js.map