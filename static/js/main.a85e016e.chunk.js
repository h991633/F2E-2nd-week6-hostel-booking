(this.webpackJsonphostel=this.webpackJsonphostel||[]).push([[0],{212:function(e,t,s){},226:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s.n(c),n=s(54),i=s.n(n),o=s(103),r=(s(212),s(31)),l=s(6),j=s(144),d=s(314),b=s(315),h=s(316),x=s(317),O=s(318),m=s(1);var u=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)("https://i.imgur.com/PyVqqHa.png"),i=Object(l.a)(n,2),r=i[0],u=i[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),g=f[0],v=f[1],y=Object(c.useState)(""),k=Object(l.a)(y,2),S=k[0],I=k[1],B=Object(c.useState)(!0),D=Object(l.a)(B,2),C=D[0],w=D[1];return Object(c.useEffect)((function(){document.title="White Space",fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer ydf7YJAusCU3YIdo4zZGxDzGu6qHJ2KI5aozP6SIcOsUnpaCdqv4uPJv9rSP"}}).then((function(e){return e.json()})).then((function(e){console.log("data",e),a(e.items),u(e.items[4].imageUrl),v(e.items[4].name),I("05"),w(!1)})).catch((function(e){alert("ERR:"+e)}))}),[]),Object(m.jsxs)("div",{class:"roomImg",style:{width:"100vw",minHeight:"100vh",background:"url("+r+")"},children:[Object(m.jsxs)("header",{class:"indexHeader",children:[Object(m.jsxs)("div",{class:"title",children:[Object(m.jsx)("div",{class:"stripe41 titleLeftBG"}),Object(m.jsxs)("div",{class:"titleRight",children:[Object(m.jsx)("div",{class:"stripe titleRightBG"}),Object(m.jsxs)("h1",{class:"titleWord",children:["White",Object(m.jsx)("br",{}),"Space"]})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{class:"roomSelect",children:s.map((function(e,t){return Object(m.jsx)(o.b,{to:"reserve/".concat(s[t].id),children:Object(m.jsx)("div",{class:"roomButton",onMouseOver:function(e){return function(e,t){u(s[t].imageUrl),v(s[t].name),I("0"+(t+1))}(0,t)},children:e.name})})}))}),Object(m.jsx)("div",{class:"stripe70 roomSelectBG"})]})]}),C?Object(m.jsx)("div",{class:"loading",children:Object(m.jsx)(j.a,{style:{color:"#ADADAD",fontSize:"40px"}})}):"",Object(m.jsxs)("footer",{class:"indexFooter",children:[Object(m.jsxs)("figcaption",{class:"indexFigcaption",children:[Object(m.jsxs)("div",{class:"roomNumberBack",children:[Object(m.jsx)("div",{class:"roomNumber",children:S}),Object(m.jsx)("div",{class:"roomNumberBG stripe70 "})]}),Object(m.jsx)("div",{class:"roomName",children:g})]}),Object(m.jsxs)("aside",{class:"indexAside",children:[Object(m.jsxs)("div",{class:"asideIcon",children:[Object(m.jsx)("a",{href:"https://www.facebook.com/Whitespace/",target:"_blank",rel:"noreferrer noopener",class:"iconLink",children:Object(m.jsx)(d.a,{style:{fontSize:"20px"}})}),"\xa0\xa0",Object(m.jsx)("a",{href:"https://www.instagram.com/whitespace/",target:"_blank",rel:"noreferrer noopener",class:"iconLink",children:Object(m.jsx)(b.a,{style:{fontSize:"20px"}})})]}),Object(m.jsxs)("div",{class:"asideInformation",children:[Object(m.jsx)(h.a,{rotate:90,style:{fontSize:"20px"}})," \xa0\xa002-17264937"]}),Object(m.jsxs)("div",{class:"asideInformation",children:[Object(m.jsx)(x.a,{style:{fontSize:"20px"}}),"\xa0\xa0 whitespace@whitespace.com.tw"]}),Object(m.jsxs)("div",{class:"asideInformation",children:[Object(m.jsx)(O.a,{style:{fontSize:"20px"}})," \xa0\xa0\u53f0\u5317\u5e02\u7f85\u65af\u798f\u8def\u5341\u6bb530\u865f"]})]})]})]})},p=s(307),f=s(311),g=s(313),v=s(295),y=s(319),k=s(320),S=Object(p.a)((function(e){return{modal:{display:"inline-block",width:"100vw",height:"100vh"},modalColumn:{position:"relative",top:"15%",outline:0},modalTop:{display:"flex",alignItems:"center",justifyContent:"space-between"},modalBottom:{display:"flex",alignItems:"center",justifyContent:"center",height:"100px"},paper:{display:"inline-block",bgcolor:"background.paper",outline:0}}}));function I(e){var t=S(),s=a.a.useState(!1),c=Object(l.a)(s,2),n=c[0],i=c[1],o=e.name,r=e.imageUrl,j=a.a.useState("https://images.unsplash.com/photo-1515511856280-7b23f68d2996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"),d=Object(l.a)(j,2),b=d[0],h=d[1],x=a.a.useState(1),O=Object(l.a)(x,2),u=O[0],p=O[1],I=function(e){i(!0),p(e),h(r[e-1])};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{class:"imgBanner",children:[Object(m.jsx)("img",{class:"imgBannerLeft",src:r[0],alt:"\u623f\u9593\u5716\u7247",onClick:function(){I(1)}}),Object(m.jsxs)("div",{class:"imgBannerRight",children:[Object(m.jsx)("img",{class:"imgBannerRightTop",src:r[1],alt:"\u623f\u9593\u5716\u7247",onClick:function(){I(2)}}),Object(m.jsx)("img",{class:"imgBannerRightBottom",src:r[2],alt:"\u623f\u9593\u5716\u7247",onClick:function(){I(3)}})]})]}),Object(m.jsx)(f.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:n,onClose:function(){i(!1)},closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500},children:Object(m.jsx)(v.a,{in:n,children:Object(m.jsxs)("div",{className:t.modalColumn,children:[Object(m.jsxs)("div",{className:t.modalTop,children:[Object(m.jsx)(y.a,{style:{fontSize:"38px",color:"white",marginLeft:"calc(100vw * 100 / 1499)"},onClick:function(){u<2?(p(3),h(r[2])):(p(u-1),h(r[u-2]))}}),Object(m.jsx)("div",{className:t.paper,children:Object(m.jsx)("div",{style:{fontSize:"0"},children:Object(m.jsx)("img",{src:b,alt:"\u623f\u9593\u5716\u7247",style:{maxHeight:"462px",maxWidth:"calc(100vw * 1000 / 1499)"}})})}),Object(m.jsx)(k.a,{style:{fontSize:"38px",color:"white",marginRight:"calc(100vw * 100 / 1499)"},onClick:function(){u<3?(p(u+1),h(r[u])):(p(1),h(r[0]))}})]}),Object(m.jsxs)("div",{className:t.modalBottom,children:[Object(m.jsx)("span",{style:{marginRight:"calc(100vw * 278 / 1499)",fontSize:"16px",color:"#FFFFFF",letterSpacing:"1.67px"},children:o}),Object(m.jsxs)("span",{style:{marginLeft:"calc(100vw * 278 / 1499)",fontSize:"16px",color:"#FFFFFF",letterSpacing:"1.67px"},children:[u,"/3"]})]})]})})})]})}var B=s(171),D=s.n(B),C=s(172),w=s.n(C),F=s(173),T=s.n(F),R=s(170),P=s.n(R),A=s(169),N=s.n(A),z=s(168),M=s.n(z),E=s(167),G=s.n(E),L=s(166),J=s.n(L),W=s(165),U=s.n(W),H=s(164),q=s.n(H),Y=s(163),K=s.n(Y),Z=s(162),V=s.n(Z),_=s(10),Q=s(16),X=s(304),$=s(305),ee=s(231),te=s(321),se=s(160),ce=s(81),ae=Object(Q.a)(se.a,{shouldForwardProp:function(e){return"dayIsBetween"!==e&&"isFirstDay"!==e&&"isLastDay"!==e&&"isReserveDay"!==e&&"isPastDay"!==e}})((function(e){var t=e.theme,s=e.dayIsBetween,c=e.isFirstDay,a=e.isLastDay,n=e.isReserveDay,i=e.isPastDay;return Object(_.a)(Object(_.a)(Object(_.a)(Object(_.a)(Object(_.a)(Object(_.a)({},s&&{borderRadius:0,backgroundColor:t.palette.primary.main,color:t.palette.common.white,"&:hover, &:focus":{backgroundColor:t.palette.primary.dark}}),c&&{borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"}),a&&{borderTopRightRadius:"50%",borderBottomRightRadius:"50%"}),n&&!i&&{borderRadius:0,background:" linear-gradient(\n      45deg, \n      rgba(0, 0,0, 1) 0%, rgba(0, 0,0, 1) 2%, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0) 10%,rgba(0, 0,0, 1) 10%, rgba(0, 0,0, 1) 12%, rgba(255, 255, 255, 0) 12%, rgba(255, 255, 255, 0) 20%,rgba(0, 0,0, 1) 20%, rgba(0, 0,0, 1) 22%, rgba(255, 255, 255, 0) 22%, rgba(255, 255, 255, 0) 30%,rgba(0, 0,0, 1) 30%, rgba(0, 0,0, 1) 32%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 40%,rgba(0, 0,0, 1) 40%, rgba(0, 0,0, 1) 42%, rgba(255, 255, 255, 0) 42%, rgba(255, 255, 255, 0) 50%,rgba(0, 0,0, 1) 50%, rgba(0, 0,0, 1) 52%, rgba(255, 255, 255, 0) 52%, rgba(255, 255, 255, 0) 60%,rgba(0, 0,0, 1) 60%, rgba(0, 0,0, 1) 62%, rgba(255, 255, 255, 0) 62%, rgba(255, 255, 255, 0) 70%,rgba(0, 0,0, 1) 70%, rgba(0, 0,0, 1) 72%, rgba(255, 255, 255, 0) 72%, rgba(255, 255, 255, 0) 80%,rgba(0, 0,0, 1) 80%, rgba(0, 0,0, 1) 82%, rgba(255, 255, 255, 0) 82%, rgba(255, 255, 255, 0) 90%,rgba(0, 0,0, 1) 90%, rgba(0, 0,0, 1) 92%, rgba(255, 255, 255, 0) 92%, rgba(255, 255, 255, 0) 100%\n      )",backgroundSize:"24px 24px"}),!n&&{borderRadius:0,background:"#F7F7F7"}),i&&{borderRadius:0,background:"#F7F7F7",color:"#C9CCD0"})}));function ne(e){var t=c.useState(new Date),s=Object(l.a)(t,2),a=s[0],n=s[1],i=e.bookingDateArr;return Object(m.jsx)(ee.b,{dateAdapter:$.a,children:Object(m.jsx)(te.a,{displayStaticWrapperAs:"desktop",label:"Week picker",value:a,onChange:function(e){n(e)},renderDay:function(e,t,s){if(!a)return Object(m.jsx)(se.a,Object(_.a)({},s));var c=i.some((function(t){return Object(ce.a)(e,t)})),n=e<new Date||Object(ce.a)(e,new Date);return Object(m.jsx)(ae,Object(_.a)(Object(_.a)({},s),{},{disableMargin:!0,dayIsBetween:!1,isFirstDay:!1,isLastDay:!1,isReserveDay:c,isPastDay:n}))},renderInput:function(e){return Object(m.jsx)(X.a,Object(_.a)({},e))},inputFormat:"'Week of' MMM d"})})}var ie=s(306);function oe(e){var t=c.useState(e.showDate),s=Object(l.a)(t,2);s[0],s[1];return Object(m.jsx)(ee.b,{dateAdapter:$.a,children:Object(m.jsx)(ie.a,{value:e.showDate,onChange:function(t){e.setReserveDate(t,e.type)},renderInput:function(e){return Object(m.jsx)(X.a,Object(_.a)({},e))}})})}var re=s(322),le=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh"},modalColumn:{position:"relative",outline:0},paper:{display:"inline-block",bgcolor:"background.paper",outline:0},form:{background:"white",boxShadow:"0 2px 4px 0 rgba(0,0,0,0.50)",fontWeight:"bold"},formTop:{paddingTop:"27px",paddingLeft:"42px",paddingRight:"42px"},formTitle:{margin:"0",padding:"0",fontFamily:"NotoSansCJKtc-Medium",fontSize:"24px",color:"#000000",letterSpacing:"2.51px"},formInput:{fontFamily:"NotoSansCJKtc-Medium",fontSize:"14px",color:"#000000",letterSpacing:"1.46px",lineHeight:"54.5px"},formInputTextBox:{border:" 1px solid #C9C9C9",borderRadius:"5px",display:"inline-block"},formInputTextBoxText:{width:"243px",height:"32px"},formInputTextBoxDate:{width:"95px !important",height:"34px !important",transform:"translate(0px, 9px)"},result:{width:" calc(100vw * 423 / 1499)",minWidth:"280px",background:"white",boxShadow:"0 2px 4px 0 rgba(0,0,0,0.50)"}}}));function je(e){var t=le(),s=a.a.useState(!1),n=Object(l.a)(s,2),i=n[0],o=n[1],r=a.a.useState(null),d=Object(l.a)(r,2),b=d[0],h=d[1],x=a.a.useState(null),O=Object(l.a)(x,2),u=O[0],p=O[1],y=Object(c.useState)("?"),k=Object(l.a)(y,2),S=k[0],I=k[1],B=Object(c.useState)("?"),D=Object(l.a)(B,2),C=D[0],w=D[1],F=Object(c.useState)(!1),T=Object(l.a)(F,2),R=T[0],P=T[1],A=Object(c.useState)("?"),N=Object(l.a)(A,2),z=N[0],M=N[1],E=e.normalDayPrice,G=e.holidayPrice,L=Object(c.useState)(""),J=Object(l.a)(L,2),W=J[0],U=J[1],H=Object(c.useState)(""),q=Object(l.a)(H,2),Y=q[0],K=q[1],Z=Object(c.useState)(!1),V=Object(l.a)(Z,2),_=V[0],Q=V[1],X=Object(c.useState)(!1),$=Object(l.a)(X,2),ee=$[0],te=$[1],se=Object(c.useState)("\u8acb\u8f38\u5165\u59d3\u540d"),ae=Object(l.a)(se,2),ne=ae[0],ie=ae[1],je=Object(c.useState)([]),de=Object(l.a)(je,2),be=de[0],he=de[1],xe=e.bookingDateArr,Oe=Object(c.useState)(!1),me=Object(l.a)(Oe,2),ue=me[0],pe=me[1],fe=function(){o(!0)},ge=function(){o(!1)},ve=function(){Q(!0)},ye=function(){Q(!1)},ke=function(e,t){"start"==t&&(h(e),p(Se(e,1))),"end"==t&&p(e)},Se=function(e,t){var s=new Date(e);return s.setDate(s.getDate()+t),s};return Object(c.useEffect)((function(){if(b&&u){var e;e=Math.round((u-b)/864e5),console.log("days",e),function(){var e=["h","w","w","w","w","h","h"],t=[],s=b.getDay(),c=Math.round((u-b)/864e5)-1;if(c<0)return I("?"),w("?"),P(!1),M("?"),0;for(var a=s,n=[],i=0;i<=c;i++)t.push(e[a]),n.push(Se(b,i)),a<6?a+=1:a=0;var o=t.filter((function(e){return"w"==e})).length,r=t.filter((function(e){return"h"==e})).length;I(o),w(r),he(n);var l=E*o+G*r;l>0&&M(l),P(!0)}()}else I("?"),w("?"),P(!1),M("?")}),[b,u]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{class:"doReserve",children:[Object(m.jsx)("div",{class:"doReserveButton",onClick:function(){fe()},children:"\u9810\u7d04\u6642\u6bb5"}),Object(m.jsx)("div",{class:"doReserveButtonBG stripeBlack24"})]}),ue?Object(m.jsx)("div",{style:{position:"fixed",top:"50%",left:"50%"},children:Object(m.jsx)(j.a,{style:{color:"#ADADAD",fontSize:"40px"}})}):"",Object(m.jsx)(f.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:i,onClose:ge,closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500},children:Object(m.jsx)(v.a,{in:i,children:Object(m.jsx)("div",{className:t.modalColumn,children:Object(m.jsx)("div",{className:t.paper,children:Object(m.jsxs)("div",{className:t.form,children:[Object(m.jsxs)("div",{className:t.formTop,children:[Object(m.jsx)("h1",{className:t.formTitle,children:"\u9810\u7d04\u6642\u6bb5"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{class:"Slash"}),Object(m.jsx)("div",{class:"Slash"}),Object(m.jsx)("div",{class:"Slash"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:t.formInput,children:["\u59d3\u540d \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("input",{type:"text",className:t.formInputTextBox+" "+t.formInputTextBoxText,id:"customerName",value:W,onChange:function(){U(document.getElementById("customerName").value)}})," ",Object(m.jsx)("br",{}),"\u96fb\u8a71 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("input",{type:"text",className:t.formInputTextBox+" "+t.formInputTextBoxText,id:"customerPhone",value:Y,onChange:function(){K(document.getElementById("customerPhone").value)}})," ",Object(m.jsx)("br",{}),"\u9810\u7d04\u8d77\u8fc4 \xa0\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("div",{className:t.formInputTextBox+" "+t.formInputTextBoxDate,children:Object(m.jsx)(oe,{setReserveDate:ke,showDate:b,type:"start"})}),"\xa0\xa0\xa0\xa0~\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("div",{className:t.formInputTextBox+" "+t.formInputTextBoxDate,children:Object(m.jsx)(oe,{setReserveDate:ke,showDate:u,type:"end"})})]})]}),Object(m.jsxs)("div",{class:"countDate",children:[Object(m.jsxs)("div",{class:"countDateRow",children:[Object(m.jsx)("span",{children:"\u5e73\u65e5\u6642\u6bb5"}),Object(m.jsxs)("span",{children:[S,"\u591c"]})]}),Object(m.jsxs)("div",{class:"countDateRow",children:[Object(m.jsx)("span",{children:"\u5047\u65e5\u6642\u6bb5"}),Object(m.jsxs)("span",{children:[C,"\u591c"]})]})]}),Object(m.jsxs)("div",{class:"countPrice",children:[" = \xa0 NT.",z]}),Object(m.jsxs)("div",{class:"finalCheck",children:[Object(m.jsx)("div",{class:"formCancel",onClick:ge,children:"\u53d6\u6d88"}),Object(m.jsx)("div",{class:"formConfirm",onClick:function(){console.log("\u78ba\u5b9a\u9810\u7d04"),console.log("customerName",W),console.log("customerPhone",Y),console.log("reserveStartDate",b),console.log("reserveEndDate",u),console.log("totalPrice",z),console.log("reserveDateArr",be),console.log("bookedDateArr",xe);var t=be.some((function(e){return xe.some((function(t){return Object(ce.a)(e,t)}))})),s=new Date,c=be.some((function(e){return e<s}));if(""==W)ie("\u8acb\u8f38\u5165\u59d3\u540d"),ge(),te(!1),ve();else if(""==Y)ie("\u8acb\u8f38\u5165\u96fb\u8a71"),ge(),te(!1),ve();else if(10!==Y.length)ie("\u8acb\u8f38\u5165\u96fb\u8a71\u865f\u78bc\u5341\u78bc\u59820223123456\u62160912345678(\u570b\u5916\u96fb\u8a71\u7121\u6cd5\u7dda\u4e0a\u9810\u7d04\uff0c\u8acb\u64a502-17264937\u9032\u884c\u9810\u7d04)\uff0c\u82e5\u7121\u6cd5\u64a5\u901a\u96fb\u8a71\u6703\u53d6\u6d88\u9810\u7d04"),ge(),te(!1),ve();else if(R)if(t)ie("\u6240\u9078\u65e5\u671f\u5df2\u88ab\u9810\u7d04"),ge(),te(!1),ve();else if(c)ie("\u4e0d\u53ef\u9810\u7d04\u660e\u5929\u4e4b\u524d\u7684\u65e5\u671f"),ge(),te(!1),ve();else{te(!0),ie("\u9810\u7d04\u6210\u529f"),ge(),pe(!0);var a=be.map((function(e){return(t=e).getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):""+(t.getMonth()+1))+"-"+(t.getDate()<10?"0"+t.getDate():""+t.getDate());var t}));!function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HELL",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0987654321",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["2021-10-10"];fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/room/"+t,{method:"POST",body:JSON.stringify({name:s,tel:c,date:a}),headers:{"Content-Type":"application/json",Authorization:"Bearer ydf7YJAusCU3YIdo4zZGxDzGu6qHJ2KI5aozP6SIcOsUnpaCdqv4uPJv9rSP"}}).then((function(e){return e.json()})).then((function(s){console.log("postApiBooking",s),"undefined"==typeof s.message?e.getApiRoomDetail(t):(console.log("data.message",s.message),te(!1),ie(s.message+"\uff0c\u8acb\u5c07\u9801\u9762\u91cd\u65b0\u6574\u7406\u4ee5\u7372\u5f97\u6700\u65b0\u9810\u7d04\u60c5\u6cc1")),pe(!1),ve()})).catch((function(e){console.log("ERR:"+e)}))}(e.roomId,W,Y,a)}else ie("\u65e5\u671f\u8f38\u5165\u6709\u8aa4"),ge(),te(!1),ve()},children:"\u78ba\u5b9a\u9810\u7d04"})]})]})})})})}),Object(m.jsx)(f.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:_,onClose:ye,closeAfterTransition:!0,BackdropComponent:g.a,BackdropProps:{timeout:500},children:Object(m.jsx)(v.a,{in:_,children:Object(m.jsx)("div",{className:t.modalColumn,children:Object(m.jsx)("div",{className:t.paper,children:Object(m.jsxs)("div",{className:t.result,children:[Object(m.jsxs)("div",{className:t.formTop,children:[Object(m.jsxs)("h1",{className:t.formTitle,children:["\u9810\u7d04",ee?"\u6210\u529f":"\u5931\u6557"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{class:"Slash"}),Object(m.jsx)("div",{class:"Slash"}),Object(m.jsx)("div",{class:"Slash"})]})]}),ee?Object(m.jsx)("div",{class:"resultSuccess",children:Object(m.jsx)(re.a,{style:{color:"#ADE8C6",fontSize:"70px"}})}):Object(m.jsx)("div",{class:"resultMsg",children:ne}),Object(m.jsxs)("div",{class:"finalCheck",children:[Object(m.jsx)("div",{}),ee?Object(m.jsx)("div",{class:"formConfirm",onClick:ye,children:"\u56de\u9801\u9762"}):Object(m.jsx)("div",{class:"formConfirm",onClick:function(){ye(),fe()},children:"\u8fd4\u56de"})]})]})})})})})]})}function de(e){var t=Object(c.useState)({room:[{id:"",name:"",imageUrl:["","",""],normalDayPrice:"?",holidayPrice:"?",descriptionShort:{GuestMin:"?",GuestMax:"?",Bed:["",""],"Private-Bath":"?",Footage:"?"},description:"",checkInAndOut:{checkInEarly:"??:??",checkInLate:"??:??",checkOut:"??:??"},amenities:{"Wi-Fi":!1,Breakfast:!1,"Mini-Bar":!1,"Room-Service":!1,Television:!1,"Air-Conditioner":!1,Refrigerator:!1,Sofa:!1,"Great-View":!1,"Smoke-Free":!1,"Child-Friendly":!1,"Pet-Friendly":!1}}],booking:[]}),s=Object(l.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)([]),o=Object(l.a)(i,2),r=o[0],j=o[1];Object(c.useEffect)((function(){d(e.match.params.id),document.title="Booking"}),[]);var d=function(e){fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/room/"+e,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer ydf7YJAusCU3YIdo4zZGxDzGu6qHJ2KI5aozP6SIcOsUnpaCdqv4uPJv9rSP"}}).then((function(e){return e.json()})).then((function(e){console.log("RoomDetaildata",e),n(e),b(e.booking)})).catch((function(e){console.log("ERR:"+e),window.location="/404"}))},b=function(e){var t=e.map((function(e){return new Date(e.date)}));j(t)},h=a.room[0],x=h.name,O=h.imageUrl,u=h.descriptionShort,p=h.description,f=h.checkInAndOut,g=h.normalDayPrice,v=h.holidayPrice,y=h.amenities;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("header",{children:[Object(m.jsxs)("div",{class:"reserveTitle",onClick:function(){},children:[Object(m.jsx)("div",{class:"stripeBlack2percent reserveTitleLeftBG"}),Object(m.jsxs)("div",{class:"reserveTitleRight",children:[Object(m.jsx)("div",{class:"stripeBlack  reserveTitleRightBG"}),Object(m.jsx)("a",{href:"/F2E-2nd-week6-hostel-booking/",children:Object(m.jsx)("h1",{class:"reserveTitleWord",children:"WhiteSpace"})})]})]}),Object(m.jsx)(I,{name:x,imageUrl:O})]}),Object(m.jsxs)("main",{class:"reserveMain",children:[Object(m.jsxs)("div",{class:"reserveMainLeft",children:[Object(m.jsxs)("span",{class:"reserveRoomName",children:[x,Object(m.jsx)("br",{})]}),Object(m.jsxs)("span",{class:"roomBasicDescription",children:["\u623f\u5ba2\u4eba\u6578\u9650\u5236\uff1a",u.GuestMin,"~",u.GuestMax," \u4eba",Object(m.jsx)("br",{}),"\u5e8a\u578b\uff1a",u.Bed.join(","),Object(m.jsx)("br",{}),"\u885b\u6d74\u6578\u91cf\uff1a",u["Private-Bath"]," \u9593",Object(m.jsx)("br",{}),"\u623f\u9593\u5927\u5c0f\uff1a",u.Footage," \u5e73\u65b9\u516c\u5c3a",Object(m.jsx)("br",{})]}),Object(m.jsx)("p",{class:"roomDescription",children:p}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{class:"Slash marginTopBottom28"}),Object(m.jsx)("div",{class:"Slash marginTopBottom28"}),Object(m.jsx)("div",{class:"Slash marginTopBottom28"})]}),Object(m.jsxs)("div",{class:"checkIn",children:[Object(m.jsxs)("span",{class:"checkText",children:["Check In",Object(m.jsx)("br",{})]}),Object(m.jsxs)("time",{class:"checkTime",children:[f.checkInEarly," \u2014 ",f.checkInLate]})]}),Object(m.jsxs)("div",{class:"checkOut",children:[Object(m.jsxs)("span",{class:"checkText",children:["Check Out",Object(m.jsx)("br",{})]}),Object(m.jsx)("time",{class:"checkTime",children:f.checkOut})]}),Object(m.jsxs)("div",{class:"iconSection",children:[Object(m.jsxs)("div",{class:y["Wi-Fi"]?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(V.a,{}),"\xa0 Wi-Fi"]}),Object(m.jsxs)("div",{class:y.Television?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(K.a,{}),"\xa0 \u96fb\u8996"]}),Object(m.jsxs)("div",{class:y["Great-View"]?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(q.a,{}),"\xa0 \u6f02\u4eae\u7684\u8996\u91ce"]}),Object(m.jsxs)("div",{class:y.Breakfast?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(U.a,{}),"\xa0 \u65e9\u9910"]}),Object(m.jsxs)("div",{class:y["Air-Conditioner"]?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(J.a,{}),"\xa0 \u7a7a\u8abf"]}),Object(m.jsxs)("div",{class:y["Smoke-Free"]?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(G.a,{}),"\xa0 \u7981\u6b62\u5438\u7159"]}),Object(m.jsxs)("div",{class:y["Mini-Bar"]?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(M.a,{}),"\xa0 mini Bar"]}),Object(m.jsxs)("div",{class:y.Refrigerator?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(N.a,{}),"\xa0 \u51b0\u7bb1"]}),Object(m.jsxs)("div",{class:y["Child-Friendly"]?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(P.a,{}),"\xa0 \u9069\u5408\u5152\u7ae5"]}),Object(m.jsxs)("div",{class:y["Room-Service"]?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(D.a,{}),"\xa0 Room Service"]}),Object(m.jsxs)("div",{class:y.Sofa?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(w.a,{}),"\xa0 \u6c99\u767c"]}),Object(m.jsxs)("div",{class:y["Pet-Friendly"]?"roomIcon":"roomIconFalse",children:[Object(m.jsx)(T.a,{}),"\xa0 \u5bf5\u7269\u651c\u5e36"]})]})]}),Object(m.jsxs)("div",{class:"reserveMainMid",children:[Object(m.jsxs)("span",{class:"weekdayPrice",children:["NT.",g]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{class:"priceDescribe",children:"\u5e73\u65e5(\u4e00~\u56db)"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{class:"holidayPrice",children:["NT.",v]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{class:"priceDescribe",children:"\u5047\u65e5(\u4e94~\u65e5)"}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{class:"reserveMainRight",children:[Object(m.jsx)("div",{class:"reserveCalendar",children:Object(m.jsx)(ne,{bookingDateArr:r})}),Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)(je,{normalDayPrice:g,holidayPrice:v,bookingDateArr:r,setBookingDateArr:j,roomId:e.match.params.id,getApiRoomDetail:d}),Object(m.jsxs)("div",{class:"doReserve",style:{marginLeft:"52px"},children:[Object(m.jsx)("div",{class:"doReserveButton",style:{backgroundColor:"#f00",width:"153px"},onClick:function(){fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ydf7YJAusCU3YIdo4zZGxDzGu6qHJ2KI5aozP6SIcOsUnpaCdqv4uPJv9rSP"}}).then((function(e){return e.json()})).then((function(t){console.log("ApiDeleteAllBooking",t),d(e.match.params.id)})).catch((function(e){console.log("ERR:"+e)}))},children:"\u522a\u9664\u6240\u6709\u9810\u7d04"}),Object(m.jsx)("div",{class:"doDeleteButtonBG stripeBlack24",children:" "})]})]})]})]})]})}var be=s(310),he=s(309);function xe(e){return Object(m.jsx)("div",{style:{display:"flex",justifyContent:"center",WebkitAlignItems:"center",height:"100vh"},children:Object(m.jsx)(be.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:Object(m.jsx)(he.a,{type:"primary",children:Object(m.jsx)("a",{href:"/F2E-2nd-week6-hostel-booking/",style:{color:"black"},children:"Back Home"})})})})}function Oe(){return Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{exact:!0,path:"/F2E-2nd-week6-hostel-booking/",component:u}),Object(m.jsx)(r.a,{path:"/F2E-2nd-week6-hostel-booking/reserve/:id",component:de}),Object(m.jsx)(r.a,{component:xe})]})}var me=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,326)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(o.a,{children:Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(Oe,{})})}),document.getElementById("root")),me()}},[[226,1,2]]]);
//# sourceMappingURL=main.a85e016e.chunk.js.map