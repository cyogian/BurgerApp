(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[5],{103:function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},107:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(5),c=n(7),o=n(6),i=n(8),u=n(0),s=n.n(u),d=n(13),p=n(42),l=n(28),h=n(1),f=n(19),O=function(e,t){return function(n){n({type:h.h});var r="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');f.a.get("/orders.json"+r).then((function(e){var t,r=[];for(var a in e.data)r.push(Object(l.a)({},e.data[a],{id:a}));n((t=r,{type:h.i,orders:t}))})).catch((function(e){n({type:h.g})}))}},m=n(103),b=n.n(m),g=function(e){return s.a.createElement("div",{className:b.a.Order},s.a.createElement("p",null,"Ingredients ",s.a.createElement("br",null),Object.keys(e.ingredients).map((function(t){return s.a.createElement("span",{key:t},"".concat(t," (").concat(e.ingredients[t],")"))}))),s.a.createElement("p",null,"Price: ",s.a.createElement("strong",null,"USD ",e.price.toFixed(2))))},y=n(43),k=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){return this.props.loading?s.a.createElement(p.a,null):s.a.createElement("div",null,this.props.orders.map((function(e){return s.a.createElement(g,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),t}(u.Component);t.default=Object(d.b)((function(e){return{orders:e.myOrders.orders,loading:e.myOrders.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(O(t,n))}}}))(Object(y.a)(k,f.a))}}]);
//# sourceMappingURL=5.e3b628cb.chunk.js.map