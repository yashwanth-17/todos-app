(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{48:function(e,t,c){},50:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(1),s=c.n(a),l=c(17),o=c.n(l),r=(c(48),c(49),c(8)),i=c(15),d=(c(50),c(12)),j=c(63),u=c(67),m=function(e){var t=e.show,c=e.closeModal,a=e.Component,s=e.data,l=void 0===s?null:s;return Object(n.jsxs)(j.a,{show:t,onHide:c,children:[Object(n.jsx)(a,{closeModal:c,todo:l}),Object(n.jsx)(u.a,{variant:"danger",onClick:c,children:"Cancel"})]})},b=c(41),h=function(e){var t=e.showModal;return Object(n.jsxs)("div",{className:"no-todos-container",children:[Object(n.jsx)(b.a,{size:200,color:"lightgrey",className:"no-todos-icon"}),Object(n.jsxs)("p",{className:"no-todos text-secondary",children:["No To-Do",Object(n.jsx)("small",{children:"s"})]}),Object(n.jsx)(u.a,{variant:"light",className:"text-primary",onClick:t,children:"+ create todo"})]})},O=c(62),x=c(65),p=c(9),f=c(18),g=function(e){return Object(d.c)((function(e){return e.filter((function(e){if(e.scheduleInfo.isScheduled){var t=new Date,c=new Date(e.scheduleInfo.date);return c.getDate()===t.getDate()&&c.getMonth()===t.getMonth()&&c.getFullYear()===t.getFullYear()}return!1}))}))},v=c(64),N=function(e){var t=e.selectFilter;return Object(n.jsxs)(v.a.Control,{className:"filter",as:"select",onChange:t,children:[Object(n.jsx)("option",{children:"All"}),Object(n.jsx)("option",{children:"Completed"}),Object(n.jsx)("option",{children:"Incomplete"}),Object(n.jsx)("option",{children:"Scheduled"}),Object(n.jsx)("option",{children:"Unscheduled"})]})},y=function(e){var t=e.scheduleInfo,c=e.completed,a=t.isScheduled,s=t.date,l=function(){var e=new Date,t=new Date(s);return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()?t.getDate()-e.getDate():t.getMonth()-e.getMonth()<0||t.getFullYear()-e.getFullYear()<0?-1:void 0};return Object(n.jsxs)("div",{className:"d-flex align-items-center flex-wrap",children:[c?Object(n.jsxs)("span",{className:"text-success",children:[Object(n.jsx)(p.f,{})," ",Object(n.jsx)("small",{children:"completed"})]}):Object(n.jsxs)("span",{className:"text-danger",children:[Object(n.jsx)(p.c,{})," ",Object(n.jsx)("small",{children:"not completed"})]}),a?Object(n.jsx)("h5",{className:"m-1 ml-2",children:Object(n.jsxs)("span",{className:"badge badge-pill badge-".concat(l()<0?"danger":"warning"),children:[Object(n.jsx)(p.k,{})," ",Object(n.jsx)("small",{children:0===l()?"Scheduled Today":1===l()?"Scheduled Tomorrow":l()<0?"Schedule expired on ".concat(new Date(s).toDateString()):"Scheduled to ".concat(new Date(s).toDateString())})]})}):null]})},k=c(42),S=c(35),C=c(11),I=c(66),w=function(e){return{type:"toggle_complete",payload:e}},M=function(e){return{type:"delete",payload:e}},D=function(e,t){switch(t.type){case"name":return Object(C.a)(Object(C.a)({},e),{},{name:t.payload});case"summary":return Object(C.a)(Object(C.a)({},e),{},{summary:t.payload});case"toggle":return Object(C.a)(Object(C.a)({},e),{},{scheduleInfo:Object(C.a)(Object(C.a)({},e.scheduleInfo),{},{isScheduled:!e.scheduleInfo.isScheduled})});case"schedule":return Object(C.a)(Object(C.a)({},e),{},{scheduleInfo:Object(C.a)(Object(C.a)({},e.scheduleInfo),{},{date:t.payload})});default:return e}},F=function(e){var t=Object(d.b)(),c=e,n=Object(a.useReducer)(D,c),s=Object(i.a)(n,2),l=s[0],o=s[1];return{state:l,dispatch:o,edit_Todo:function(){t(function(e){return{type:"edit",payload:e}}(l))}}},T=function(e){var t=e.state,c=e.dispatch,s=e.action,l=e.mode,o=t.name,r=t.summary,d=t.scheduleInfo,j=Object(a.useState)(!1),m=Object(i.a)(j,2),b=m[0],h=m[1];return Object(n.jsxs)(v.a,{className:"m-4",children:[b?Object(n.jsx)("h5",{className:"text-danger",children:"Please fill all the fields"}):null,Object(n.jsxs)(v.a.Group,{controlId:"name",children:[Object(n.jsx)(v.a.Label,{children:"Name"}),Object(n.jsx)(v.a.Control,{placeholder:"Enter to-do name",autoComplete:"off",value:o,onChange:function(e){return c({type:"name",payload:e.target.value})}})]}),Object(n.jsxs)(v.a.Group,{controlId:"summary",children:[Object(n.jsx)(v.a.Label,{children:"Summary"}),Object(n.jsx)(v.a.Control,{as:"textarea",rows:6,placeholder:"Enter summary",value:r,onChange:function(e){return c({type:"summary",payload:e.target.value})}})]}),Object(n.jsx)(v.a.Group,{controlId:"check",children:Object(n.jsx)(v.a.Check,{type:"checkbox",label:"Schedule Todo",checked:d.isScheduled,onClick:function(){return c({type:"toggle"})}})}),d.isScheduled?Object(n.jsx)(v.a.Group,{controlId:"date",children:Object(n.jsx)(v.a.Control,{type:"date",placeholder:"Pick date",value:d.date,onChange:function(e){return c({type:"schedule",payload:e.target.value})}})}):null,Object(n.jsxs)(u.a,{variant:"primary",onClick:function(){""===o.trim()||""===r.trim()?h(!0):(h(!1),s())},children:["edit"===l?"Update":"Create"," Todo"]})]})},z=function(e){var t=e.todo,c=e.closeModal,a=F(t),s=a.state,l=a.dispatch,o=a.edit_Todo;return Object(n.jsx)(T,{state:s,dispatch:l,action:function(){o(),c()},mode:"edit"})},J=function(e){var t=e.todo,c=e.show,a=e.editModal,s=e.closeModal,l=Object(d.b)();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"options",children:[t.completed?Object(n.jsx)(S.b,{size:20,title:"mark as incomplete",className:"incomplete",onClick:function(){return l(w(t.id))}}):Object(n.jsx)(S.a,{size:20,title:"mark as complete",className:"complete",onClick:function(){return l(w(t.id))}}),Object(n.jsx)(p.g,{size:20,title:"edit",className:"ml-2 edit",onClick:a}),Object(n.jsx)(p.e,{size:20,className:"ml-2 mr-2 delete",title:"delete",onClick:function(){return l(M(t.id))}}),Object(n.jsx)(f.b,{to:"/todos/".concat(t.id),children:Object(n.jsx)(k.a,{className:"view",size:20,title:"click to view summary"})})]}),Object(n.jsx)(m,{show:c,closeModal:s,Component:z,data:t})]})},G=function(e){var t=e.todo,c=Object(a.useState)(!1),s=Object(i.a)(c,2),l=s[0],o=s[1];return Object(n.jsxs)(x.a.Item,{className:"todo-item",children:[Object(n.jsxs)("div",{className:"d-flex flex-column",children:[Object(n.jsx)("span",{className:"todo-item-name",children:t.name}),Object(n.jsx)(y,{completed:t.completed,scheduleInfo:t.scheduleInfo})]}),Object(n.jsx)(J,{show:l,todo:t,editModal:function(){return o(!0)},closeModal:function(){return o(!1)}})]})},Y=function(e){var t=e.todos,c=e.showModal,s=g().length,l=Object(a.useState)("All"),o=Object(i.a)(l,2),r=o[0],d=o[1],j=function(){if("All"===r)return t;switch(r){case"Completed":return t.filter((function(e){return e.completed}));case"Incomplete":return t.filter((function(e){return!e.completed}));case"Scheduled":return t.filter((function(e){return e.scheduleInfo.isScheduled}));case"Unscheduled":return t.filter((function(e){return!e.scheduleInfo.isScheduled}));default:return t}};return Object(n.jsxs)("div",{className:"todos-list",children:[Object(n.jsxs)("div",{className:"ml-4 mt-4 d-flex align-items-center flex-wrap",children:[Object(n.jsx)(u.a,{onClick:c,children:"+ Create Todo"}),Object(n.jsxs)(u.a,{as:f.b,to:"/reminders",variant:"light",className:"ml-3 text-primary d-flex align-items-center",children:[Object(n.jsx)(p.i,{}),Object(n.jsxs)("div",{children:["Reminders",Object(n.jsx)(O.a,{className:"m-1",variant:"primary",children:0!==s?s:null})]})]}),Object(n.jsx)(N,{selectFilter:function(e){return d(e.target.value)}})]}),0!==j().length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"ml-4 text-muted",children:[Object(n.jsx)("small",{className:"pc",children:"Hover over any to-do item to view options"}),Object(n.jsx)("small",{className:"mobile",children:"Click any to-do item to view options"})]}),Object(n.jsx)(x.a,{className:"list m-4 ml-0",children:j().map((function(e){return Object(n.jsx)(G,{todo:e},e.id)}))})]}):Object(n.jsxs)("p",{className:"m-3 text-center text-muted",children:["No To-Do",Object(n.jsx)("small",{children:"s"})]})]})},_=function(){var e=Object(d.b)(),t={name:"",summary:"",scheduleInfo:{isScheduled:!1,date:new Date}},c=Object(a.useReducer)(D,t),n=Object(i.a)(c,2),s=n[0],l=n[1];return{state:s,dispatch:l,create_Todo:function(){var t;e((t=s,{type:"create",payload:Object(C.a)(Object(C.a)({},t),{},{id:Object(I.a)(),completed:!1})}))}}},A=function(e){var t=e.closeModal,c=_(),a=c.state,s=c.dispatch,l=c.create_Todo;return Object(n.jsx)(T,{state:a,dispatch:s,action:function(){l(),t()},mode:"create"})},B=function(){var e=Object(d.c)((function(e){return e})),t=Object(a.useState)(!1),c=Object(i.a)(t,2),s=c[0],l=c[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{show:s,closeModal:function(){return l(!1)},Component:A}),0===e.length?Object(n.jsx)(h,{showModal:function(){return l(!0)}}):Object(n.jsx)(Y,{todos:e,showModal:function(){return l(!0)}})]})},L=(c(57),function(){return Object(n.jsxs)("div",{className:"no-reminders",children:[Object(n.jsx)(p.j,{size:200,color:"lightgrey"}),Object(n.jsx)("span",{children:"No reminders"})]})}),P=function(e){var t=e.reminders;return Object(n.jsxs)("div",{className:"m-4",children:[Object(n.jsxs)("p",{className:"text-info d-flex align-items-center",children:[Object(n.jsx)(p.k,{className:"mr-1"})," Tasks scheduled for Today"]}),Object(n.jsx)(x.a,{className:"mt-3",children:t.map((function(e){return Object(n.jsx)(G,{todo:e},e.id)}))})]})},E=function(){var e=g(),t=Object(r.g)();return Object(n.jsxs)("div",{className:"reminders-page m-4",children:[Object(n.jsxs)("div",{className:"go-back d-flex align-items-center",onClick:function(){return t.goBack()},children:[Object(n.jsx)(p.a,{size:20}),Object(n.jsx)("span",{className:"ml-2",children:"Go back"})]}),0===e.length?Object(n.jsx)(L,{}):Object(n.jsx)(P,{reminders:e})]})},R=(c(58),function(){var e=Object(r.h)().id,t=Object(r.g)(),c=Object(d.b)(),a=Object(d.c)((function(c){var n=c.find((function(t){return t.id===e}));if(void 0!==n)return Object(C.a)({},n);t.replace("/todos")}));return Object(n.jsxs)("div",{className:"summary-page m-4",children:[Object(n.jsxs)("div",{className:"go-back d-flex align-items-center",onClick:function(){return t.goBack()},children:[Object(n.jsx)(p.a,{size:20}),Object(n.jsx)("span",{className:"ml-2",children:"Go back"})]}),Object(n.jsx)("p",{className:"title",children:a.name}),Object(n.jsx)("div",{className:"m-3",children:Object(n.jsx)(y,{completed:a.completed,scheduleInfo:a.scheduleInfo})}),Object(n.jsxs)("div",{className:"todo-options mb-3 ml-3",children:[Object(n.jsxs)(u.a,{variant:a.completed?"danger":"success",onClick:function(){return c(w(a.id))},size:"sm",children:[a.completed?Object(n.jsx)(p.d,{}):Object(n.jsx)(p.b,{}),"mark as ",a.completed?"incomplete":"completed"]}),Object(n.jsx)(u.a,{size:"sm",variant:"light",className:"ml-4",onClick:function(){return c(M(a.id))},children:Object(n.jsx)(p.e,{color:"red",size:20})})]}),Object(n.jsxs)("div",{className:"bg-light p-4",children:[Object(n.jsxs)("p",{className:"summary",children:[Object(n.jsx)(p.h,{}),Object(n.jsx)("span",{className:"ml-2",children:"summary of the task"})]}),Object(n.jsx)("p",{children:a.summary})]})]})});var U=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(r.d,{children:[Object(n.jsx)(r.b,{path:"/todos",exact:!0,component:B}),Object(n.jsx)(r.b,{path:"/todos/:id",exact:!0,component:R}),Object(n.jsx)(r.b,{path:"/reminders",exact:!0,component:E}),Object(n.jsx)(r.a,{exact:!0,to:"/todos"})]})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))},q=c(27),K=c(29),Q="todo-app-todos-key",V=JSON.parse(localStorage.getItem(Q))||[],W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"create":return X(e,t.payload);case"edit":return Z(e,t.payload);case"toggle_complete":return $(e,t.payload);case"delete":return ee(e,t.payload);default:return e}},X=function(e,t){var c=[t].concat(Object(K.a)(e));return localStorage.setItem(Q,JSON.stringify(c)),c},Z=function(e,t){var c=e.findIndex((function(e){return e.id===t.id}));return e[c]=t,localStorage.setItem(Q,JSON.stringify(e)),Object(K.a)(e)},$=function(e,t){var c=e.findIndex((function(e){return e.id===t}));return e[c].completed=!e[c].completed,localStorage.setItem(Q,JSON.stringify(e)),Object(K.a)(e)},ee=function(e,t){var c=e.filter((function(e){return e.id!==t}));return 0===c.length?localStorage.removeItem(Q):localStorage.setItem(Q,JSON.stringify(c)),c},te=Object(q.b)(W);o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(f.a,{children:Object(n.jsx)(d.a,{store:te,children:Object(n.jsx)(U,{})})})}),document.getElementById("root")),H()}},[[59,1,2]]]);
//# sourceMappingURL=main.4e6316f8.chunk.js.map