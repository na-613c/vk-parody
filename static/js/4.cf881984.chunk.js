(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{322:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2NghM",dialogElements:"Dialogs_dialogElements__1EJtd",dialog:"Dialogs_dialog__2qiWA",allMessages:"Dialogs_allMessages__jP5CN",active:"Dialogs_active__1vbe2",message:"Dialogs_message__E0AVN",messages:"Dialogs_messages__AdpHE",inputText:"Dialogs_inputText__mBAEz"}},329:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(136),l=t(322),r=t.n(l),o=function(e){return n.a.createElement("div",{className:r.a.message},e.message)},c=t(15),m=function(e){var a=e.id,t=e.name;return n.a.createElement(c.b,{key:a,className:r.a.dialog,activeClassName:r.a.active,to:"/dialogs/".concat(a)},t)},g=t(10),u=t(96),d=t(137),p=t(72),E=t(31),_=Object(p.a)(100),b=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",{className:r.a.inputText},n.a.createElement(u.a,{component:E.c,name:"newMessageBody",placeholder:"enter your message",validate:[p.b,_]}),n.a.createElement("button",null,"Post")))})),v=function(e){var a=e.messagesPage,t=e.postMessageThunkCreator,s=a.dialogData.map((function(e){return n.a.createElement(m,{key:e.id,name:e.name,id:e.id})})),i=a.messagesData.map((function(e){return n.a.createElement(o,{key:e.id,message:e.message})}));return n.a.createElement("div",{className:r.a.dialogs+" content"},n.a.createElement("div",{className:r.a.dialogElements},s),n.a.createElement("div",null,n.a.createElement("div",{className:r.a.messages},n.a.createElement("div",{className:r.a.allMessages+" target"},n.a.createElement(g.b,{path:"/dialogs",component:function(){return i}})),n.a.createElement("div",{className:"padding"},n.a.createElement(b,{onSubmit:function(e){return t(e.newMessageBody)}})))))},f=t(19),h=t(69),N=t(70),j=t(75),y=t(74),D=function(e){return{isAuth:e.auth.isAuth}},M=t(9);a.default=Object(M.d)(Object(f.b)((function(e){return{messagesPage:e.messagesPage}}),{postMessageThunkCreator:i.b}),(function(e){var a=function(a){Object(j.a)(n,a);var t=Object(y.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.createElement(e,this.props):s.createElement(g.a,{to:"../login"})}}]),n}(s.Component);return Object(f.b)(D)(a)}))(v)}}]);
//# sourceMappingURL=4.cf881984.chunk.js.map