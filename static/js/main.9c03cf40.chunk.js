(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[0],[,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"k",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"o",(function(){return _}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_INIT",p="FETCH_ORDERS_SUCCESS",m="FETCH_ORDERS_FAIL",h="AUTH_START",g="AUTH_SUCCESS",f="AUTH_FAIL",b="AUTH_LOGOUT",_="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(28),a=function(e,t){return Object(r.a)({},e,{},t)},o=function(e,t){var n=!0;(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.trim().length>=t.minLength&&n),t.maxLength&&(n=e.trim().length<=t.maxLength&&n),t.isEmail)&&(n=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.trim())&&n);return n}},,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,function(e,t,n){"use strict";var r=n(30),a=n.n(r).a.create({baseURL:"https://theburgerapp.firebaseio.com/"});t.a=a},,function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(30),a=n.n(r),o=n(1),i=function(e,t){return{type:o.e,idToken:e,userId:t}},c=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:o.c}},u=function(e){return function(t){setTimeout((function(){t(c())}),1e3*e)}},l=function(e,t,n){return function(r){r({type:o.d});var c={email:e,password:t,returnSecureToken:!0},l="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjTyqoftBtPjuyG_0vTFBqxln5UArCOlI";n&&(l="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCjTyqoftBtPjuyG_0vTFBqxln5UArCOlI"),a.a.post(l,c).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),r(i(e.data.idToken,e.data.localId)),r(u(e.data.expiresIn))})).catch((function(e){r(function(e){return{type:o.b,error:e}}(e.response.data.error))}))}},s=function(e){return{type:o.o,path:e}},d=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var r=localStorage.getItem("userId");e(i(t,r)),e(u((n.getTime()-(new Date).getTime())/1e3))}else e(c())}else e(c())}}},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv",Toggle:"SideDrawer_Toggle__2q4pL"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(65),i=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},,function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(67),d=n.n(s),p=n(29),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=m},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(41),i=n.n(o);t.a=function(e){return a.a.createElement("button",{className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(68),i=n.n(o);t.a=function(e){return a.a.createElement("div",{className:i.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(4),a=n(5),o=n(7),i=n(6),c=n(8),u=n(0),l=n.n(u),s=n(31);t.a=function(e,t){return function(n){function u(e){var n;return Object(r.a)(this,u),(n=Object(o.a)(this,Object(i.a)(u).call(this,e))).errorConfirmedHandler=function(){n.setState({error:null})},n.state={error:null},n.reqInterceptor=t.interceptors.request.use((function(e){return n.setState({error:null}),e})),n.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){n.setState({error:e})})),n}return Object(c.a)(u,n),Object(a.a)(u,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),l.a.createElement(e,this.props))}}]),u}(u.Component)}},,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(19),a=n(1),o=function(e,t){return function(n){n({type:a.k}),r.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:a.l,id:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:a.j,error:e}}(e))}))}},i=function(){return{type:a.m}}},function(e,t,n){"use strict";var r=n(69),a=n(0),o=n.n(a),i=n(66),c=n.n(i),u=n(4),l=n(5),s=n(7),d=n(6),p=n(8),m=n(15),h=n.n(m),g=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:h.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:h.a.BreadTop},o.a.createElement("div",{className:h.a.Seeds1}),o.a.createElement("div",{className:h.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:h.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:h.a.Cheese});break;case"salad":e=o.a.createElement("div",{className:h.a.Salad});break;case"bacon":e=o.a.createElement("div",{className:h.a.Bacon});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(g,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:c.a.Burger},o.a.createElement(g,{type:"bread-top"}),t,o.a.createElement(g,{type:"bread-bottom"}))}},,,function(e,t,n){},function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports=n.p+"static/media/logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load3:"Spinner_load3__3VkKK"}},,function(e,t,n){e.exports=n(98)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),i=n.n(o),c=n(18),u=n(16),l=n(35),s=n(13),d=n(57),p=n(22),m=n(1),h=n(3),g={bacon:.7,cheese:.4,meat:1.3,salad:.5},f={ingredients:null,totalPrice:4,error:!1,building:!1},b=function(e,t){var n=Object(p.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(h.b)(e.ingredients,n),totalPrice:e.totalPrice+g[t.ingredientName],building:!0};return Object(h.b)(e,r)},_=function(e,t){var n=Object(p.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(h.b)(e.ingredients,n),totalPrice:e.totalPrice-g[t.ingredientName],building:!0};return Object(h.b)(e,r)},E=function(e,t){var n,r={ingredients:t.ingredients,totalPrice:(n=t.ingredients,Object.keys(n).reduce((function(e,t){return e+g[t]*n[t]}),4)),error:!1,building:!1};return Object(h.b)(e,r)},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a:return b(e,t);case m.n:return _(e,t);case m.p:return E(e,t);case m.f:return Object(h.b)(e,{error:!0});default:return e}},O={orders:[],loading:!1,purchased:!1},y=function(e,t){var n=Object(h.b)(t.orders,{id:t.id}),r={loading:!1,purchased:!0,orders:e.orders.concat(n)};return Object(h.b)(e,r)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.k:return Object(h.b)(e,{loading:!0});case m.l:return y(e,t);case m.j:return Object(h.b)(e,{loading:!1});case m.m:return Object(h.b)(e,{purchased:!1});default:return e}},k={orders:[],loading:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.h:return Object(h.b)(e,{loading:!0});case m.i:return Object(h.b)(e,{orders:t.orders,loading:!1});case m.g:return Object(h.b)(e,{loading:!1});default:return e}},C={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},I=function(e,t){return Object(h.b)(e,{error:null,loading:!0})},w=function(e,t){return Object(h.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},T=function(e,t){return Object(h.b)(e,{error:t.error,loading:!1})},B=function(e,t){return Object(h.b)(e,{token:null,userId:null})},N=function(e,t){return Object(h.b)(e,{authRedirectPath:t.path})},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.d:return I(e);case m.e:return w(e,t);case m.b:return T(e,t);case m.c:return B(e);case m.o:return N(e,t);default:return e}},A=(n(79),n(4)),L=n(5),R=n(7),x=n(6),P=n(8),H=n(17),U=n(58),M=n.n(U),F=n(59),q=n.n(F),G=n(32),K=n.n(G),Y=n(60),X=n.n(Y),J=n(61),W=n.n(J),$=function(e){return a.a.createElement("div",{className:W.a.Logo},a.a.createElement("img",{src:X.a,alt:"MyBurger"}))},z=n(62),V=n.n(z),Q=n(37),Z=n.n(Q),ee=function(e){return a.a.createElement("li",{className:Z.a.NavigationItem},a.a.createElement(c.b,{activeClassName:Z.a.active,exact:e.exact,to:e.link},e.children))},te=function(e){return a.a.createElement("ul",{className:V.a.NavigationItems},a.a.createElement(ee,{link:"/",exact:!0},"Builder"),e.isAuthenticated?a.a.createElement(ee,{link:"/orders"},"My Orders"):null,e.isAuthenticated?a.a.createElement(ee,{link:"/logout"},"Logout"):a.a.createElement(ee,{link:"/auth"},"Authenticate"))},ne=n(64),re=n.n(ne),ae=function(e){return a.a.createElement("div",{className:re.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},oe=function(e){return a.a.createElement("header",{className:K.a.Toolbar},a.a.createElement(ae,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:K.a.Logo},a.a.createElement($,null)),a.a.createElement("nav",{className:K.a.DesktopOnly},a.a.createElement(te,{isAuthenticated:e.isAuth})))},ie=n(24),ce=n.n(ie),ue=n(29),le=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ue.a,{show:e.show,clicked:e.closed}),a.a.createElement("div",{className:[ce.a.SideDrawer,e.show?ce.a.Open:ce.a.Close].join(" "),onClick:e.closed},a.a.createElement("div",{className:ce.a.Logo},a.a.createElement($,null)),a.a.createElement("nav",null,a.a.createElement(te,{isAuthenticated:e.isAuth}))))},se=function(e){function t(){var e,n;Object(A.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(R.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerOpenedHandler=function(){n.setState({showSideDrawer:!0})},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(P.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(oe,{drawerToggleClicked:this.sideDrawerToggleHandler,isAuth:this.props.isAuthenticated}),a.a.createElement(le,{show:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler,opened:this.sideDrawerOpenedHandler,isAuth:this.props.isAuthenticated}),a.a.createElement("main",{className:q.a.Content},this.props.children))}}]),t}(r.Component),de=Object(s.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(se),pe=n(28),me=n(19),he=function(){return function(e){me.a.get("/ingredients.json").then((function(t){var n;e((n=t.data,{type:m.p,ingredients:n}))})).catch((function(t){e({type:m.f})}))}},ge=n(54),fe=n(21),be=n(55),_e=n(40),Ee=n.n(_e),ve=n(25),Oe=n.n(ve),ye=function(e){return a.a.createElement("div",{className:Oe.a.BuildControl},a.a.createElement("div",{className:Oe.a.Label},e.label),a.a.createElement("button",{className:Oe.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:Oe.a.More,onClick:e.added},"More"))},je=[{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Salad",type:"salad"}],ke=function(e){return a.a.createElement("div",{className:Ee.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,"$",e.price.toFixed(2))),je.map((function(t){return a.a.createElement(ye,{label:t.label,key:t.label,type:t.type,disabled:e.disabled[t.type],added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)}})})),a.a.createElement("button",{className:Ee.a.OrderButton,onClick:e.purchasing,disabled:!e.purchasable},e.isAuth?"ORDER":"SIGN UP TO ORDER"))},Se=n(31),Ce=n(33),Ie=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: $",e.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(Ce.a,{clicked:e.cancelPurchase,btnType:"Danger"},"CANCEL"),a.a.createElement(Ce.a,{clicked:e.continuePurchase,btnType:"Success"},"CONTINUE"))},we=n(42),Te=n(43),Be=function(e){function t(){var e,n;Object(A.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(R.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},n}return Object(P.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=this.props.error?a.a.createElement("p",{style:{textAlign:"center"}},"Oops, Ingredients can't be loaded!"):a.a.createElement(we.a,null),t=null;if(this.props.ingredients){t=a.a.createElement(Ie,{ingredients:this.props.ingredients,cancelPurchase:this.purchaseCancelHandler,continuePurchase:this.purchaseContinueHandler,price:this.props.totalPrice});var n=Object(pe.a)({},this.props.ingredients);for(var r in n)n[r]=n[r]<=0;e=a.a.createElement(a.a.Fragment,null,a.a.createElement(be.a,{ingredients:this.props.ingredients}),a.a.createElement(ke,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:n,price:this.props.totalPrice,purchasable:this.updatePurchaseState(this.props.ingredients),purchasing:this.purchaseHandler,isAuth:this.props.isAuthenticated}))}return a.a.createElement(a.a.Fragment,null,a.a.createElement(Se.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},t),e)}}]),t}(r.Component),Ne=Object(s.b)((function(e){return{ingredients:e.builder.ingredients,totalPrice:e.builder.totalPrice,error:e.builder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(function(e){return{type:m.a,ingredientName:e}}(t))},onIngredientRemoved:function(t){return e(function(e){return{type:m.n,ingredientName:e}}(t))},onInitIngredients:function(){return e(he())},onInitPurchase:function(){return e(ge.b())},onSetAuthRedirectPath:function(t){return e(fe.d(t))}}}))(Object(Te.a)(Be,me.a)),De=function(e){function t(){return Object(A.a)(this,t),Object(R.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(H.a,{to:"/"})}}]),t}(r.Component),Ae=Object(s.b)(null,(function(e){return{onLogout:function(){return e(fe.c())}}}))(De),Le=function(e){return function(t){function n(){var e,t;Object(A.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(R.a)(this,(e=Object(x.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(P.a)(n,t),Object(L.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},Re=Le((function(){return n.e(3).then(n.bind(null,106))})),xe=Le((function(){return n.e(5).then(n.bind(null,107))})),Pe=Le((function(){return n.e(4).then(n.bind(null,105))})),He=function(e){function t(){return Object(A.a)(this,t),Object(R.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignUp()}},{key:"render",value:function(){var e=a.a.createElement(H.d,null,a.a.createElement(H.b,{path:"/auth",component:Re}),a.a.createElement(H.b,{path:"/",exact:!0,component:Ne}),a.a.createElement(H.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(H.d,null,a.a.createElement(H.b,{path:"/checkout",component:Re}),a.a.createElement(H.b,{path:"/orders",component:xe}),a.a.createElement(H.b,{path:"/logout",component:Ae}),a.a.createElement(H.b,{path:"/auth",component:Pe}),a.a.createElement(H.b,{path:"/",exact:!0,component:Ne}),a.a.createElement(H.a,{to:"/"}))),a.a.createElement("div",{className:M.a.App},a.a.createElement(de,null,e))}}]),t}(r.Component),Ue=Object(s.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignUp:function(){return e(fe.b())}}}))(He);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Me=Object(d.composeWithDevTools)({})(Object(u.applyMiddleware)(l.a));Me=Object(u.applyMiddleware)(l.a);var Fe=Object(u.combineReducers)({builder:v,order:j,myOrders:S,auth:D}),qe=Object(u.createStore)(Fe,Me),Ge=a.a.createElement(s.a,{store:qe},a.a.createElement(c.a,{basename:"/BurgerApp"},a.a.createElement(Ue,null)));i.a.render(Ge,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[70,1,2]]]);
//# sourceMappingURL=main.9c03cf40.chunk.js.map