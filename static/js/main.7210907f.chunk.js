(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=n(4),u=n(6),i=n(2),s=n(1),m=(n(15),n(16),function(e){var t=e.toDo,n=e.done;return o.a.createElement("header",{className:"app-header d-flex "},o.a.createElement("h1",null,"ToDo List"),o.a.createElement("h2",null,t," more to do, ",n," done"))}),f=function(e){var t=e.filterTask,n=e.filterState;return o.a.createElement("div",{className:"btn-group"},[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}].map((function(e){var a=e.name,r=e.label,c=n===a?"btn-info":"btn-outline-dark";return o.a.createElement("button",{key:a,type:"button",onClick:function(){return t(a)},className:"btn btn-sm ".concat(c)},r)})))},d=(n(17),function(e){var t=e.searchItem,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],l=r[1];return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",onChange:function(e){l(e.target.value),t(e.target.value)},value:c})}),b=n(9),p=(n(18),n(19),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.important,l="todo-list-item";return e.done&&(l+=" done"),c&&(l+=" important"),o.a.createElement("span",{className:l},o.a.createElement("span",{className:"todo-list-item-label",onClick:r},t),o.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:a},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n},o.a.createElement("i",{className:"fa fa-trash-o"})))}),g=function(){return o.a.createElement("li",{className:"list-group-item list-group-item-warning"},"No tasks found")},E=function(e){var t=e.state,n=e.onDeleted,a=e.onToggleDone,r=e.onToggleImportant,c=t.map((function(e){var t=e.id,c=Object(b.a)(e,["id"]);return o.a.createElement("li",{className:"list-group-item",key:t},o.a.createElement(p,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return r(t)},onToggleDone:function(){return a(t)}})))}));return o.a.createElement("ul",{className:"list-group todo-list"},0===t.length?o.a.createElement(g,null):c)},v=(n(20),function(e){var t=e.addItem,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],l=r[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==e.currentTarget[0].value&&(t(c),l(""))},className:"item-add-form d-flex"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"What needs to be done",onChange:function(e){l(e.target.value)},value:c}),o.a.createElement("button",{className:"btn btn-info"},"Add Item"))}),h=function(e){var t,n,r=101,c=function(e){return{id:r++,label:e,important:!1,done:!1}},b=[c("create react todo"),c("drink coffee"),c("lol kek 4eburek")],p=Object(a.useState)(b),g=Object(s.a)(p,2),h=g[0],O=g[1],j=Object(a.useState)(""),N=Object(s.a)(j,2),k=N[0],D=N[1],T=Object(a.useState)("all"),I=Object(s.a)(T,2),y=I[0],C=I[1],x=function(e){return h.findIndex((function(t){return t.id===e}))},S=Object(a.useCallback)((function(e){var t=x(e),n=[].concat(Object(i.a)(h.slice(0,t)),Object(i.a)(h.slice(t+1)));O(n)}),[h]),w=Object(a.useCallback)((function(e){var t=c(e);O((function(e){return[].concat(Object(i.a)(e),[t])}))}),[r]),A=function(e,t,n){var a=x(t),o=e[a],r=Object(u.a)(Object(u.a)({},o),{},Object(l.a)({},n,!o[n]));return[].concat(Object(i.a)(e.slice(0,a)),[r],Object(i.a)(e.slice(a+1)))},L=h.filter((function(e){return e.done})).length,J=h.length-L,B=function(e,t){switch(t){case"all":return e;case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}((t=h,0===(n=k).length?t:t.filter((function(e){return e.label.toLowerCase().indexOf(n.toLowerCase())>-1}))),y);return o.a.createElement("div",{className:"container card"},o.a.createElement("div",{className:"card-body"},o.a.createElement(m,{toDo:J,done:L}),o.a.createElement("div",{className:"d-flex nav-panel"},o.a.createElement(d,{searchItem:function(e){D(e)}}),o.a.createElement(f,{filterState:y,filterTask:function(e){C(e)}})),o.a.createElement(E,{state:B,onToggleDone:function(e){O(A(h,e,"done"))},onDeleted:S,onToggleImportant:function(e){O(A(h,e,"important"))}}),o.a.createElement(v,{addItem:w})))};c.a.render(o.a.createElement(h,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7210907f.chunk.js.map