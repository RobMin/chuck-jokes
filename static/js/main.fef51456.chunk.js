(this["webpackJsonpchuck-jokes"]=this["webpackJsonpchuck-jokes"]||[]).push([[0],{15:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),a=c(27),s=c.n(a),r=c(28),i=c(3),u=c.p+"static/media/logo.9b1f2342.svg",l=(c(35),c(2)),j={animal:"Animal joke",career:"Career joke",celebrity:"Celebrity joke",dev:"Dev joke",explicit:"Explicit joke",fashion:"Fashion joke",food:"Food joke",history:"History joke",money:"Money joke",movie:"Movie joke",music:"Music joke",political:"Political joke",religion:"Religion joke",science:"Science joke",sport:"Sport joke",travel:"Travel joke",uncategorized:"Random joke"},d=function(){var e=Object(o.useState)(0),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(o.useLayoutEffect)((function(){var e=function(){n(window.innerWidth)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c>1150},b=c.p+"static/media/arrow_down.ae1d6dd2.svg",h=c.p+"static/media/human.76c82adb.svg",O=(c(36),function(e){var t=Object(o.useState)(e),c=Object(l.a)(t,2),n=c[0],a=c[1];return Object(o.useEffect)((function(){e?a(!0):setTimeout((function(){return a(!1)}),300)}),[e]),e?"UseFade-reveal":e||n?"UseFade-hide":"UseFade-hidden"}),g=function(e,t){Object(o.useEffect)((function(){var c=function(c){e.current&&!e.current.contains(c.target)&&t(c)};return document.addEventListener("click",c),function(){return document.removeEventListener("clear",c)}}),[e,t])},f=(c(37),function(){var e=Object(o.useRef)(null),t=Object(o.useState)(!1),c=Object(l.a)(t,2),a=c[0],s=c[1];g(e,(function(){return s(!1)}));var r=O(a);return Object(n.jsxs)("div",{className:"DesktopButtons-wrapper",children:[Object(n.jsx)("button",{className:"DesktopButtons-button",children:"SO FUNKTIONIERT\u2019S"}),Object(n.jsx)("button",{className:"DesktopButtons-button",children:"SONDERANGEBOTE"}),Object(n.jsxs)("div",{className:"DesktopButtons-dropdown-button",onClick:function(){return s(!a)},ref:e,children:[Object(n.jsx)("img",{alt:"human",src:h,className:"DesktopButtons-dropdown-human"}),"MEIN BEREICH",Object(n.jsx)("img",{alt:"arrow",src:b,className:"DesktopButtons-dropdown-arrow"}),Object(n.jsx)("div",{className:"DesktopButtons-dropdown-wrapper ".concat(r),children:p.map((function(e,t){return Object(n.jsx)("a",{href:"#",className:"DesktopButtons-dropdown-item ".concat(e.classes||""),children:e.title},t)}))})]})]})}),k=(c(38),function(){var e=Object(o.useRef)(null),t=Object(o.useState)(!1),c=Object(l.a)(t,2),a=c[0],s=c[1],r=a?"active":"";return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"MobileMenu-open-button-wrapper",children:Object(n.jsx)("button",{className:"MobileMenu-open-button",onClick:function(){return s(!0)},children:"\u2630"})}),Object(n.jsx)("div",{className:"MobileMenu-menu-wrapper ".concat(r),ref:e,onClick:function(e){e.target===e.currentTarget&&s(!1)},children:Object(n.jsxs)("div",{className:"MobileMenu-menu ".concat(r),children:[Object(n.jsx)("button",{className:"MobileMenu-button",children:"SO FUNKTIONIERT\u2019S"}),Object(n.jsx)("button",{className:"MobileMenu-button",children:"SONDERANGEBOTE"}),Object(n.jsxs)("div",{className:"MobileMenu-group-title",children:[Object(n.jsx)("img",{alt:"human",src:h,className:"MobileMenu-human"}),"MEIN BEREICH",Object(n.jsx)("span",{})]}),p.map((function(e,t){return Object(n.jsx)("a",{href:"#",className:"MobileMenu-group-button ".concat(e.classes||""),children:e.title},t)}))]})})]})}),p=[{title:"My published jokes",href:""},{title:"My saved jokes",href:""},{title:"Account Information",href:""},{classes:"special",title:"Publish new joke",href:""}],m=function(){var e=d();return Object(n.jsx)("header",{className:"Header-wrapper",children:Object(n.jsxs)("div",{className:"Header",children:[Object(n.jsx)("div",{className:"Header-logo-wrapper",children:Object(n.jsx)("img",{alt:"logo",src:u,className:"Header-logo"})}),e?Object(n.jsx)(f,{}):Object(n.jsx)(k,{})]})})},x=c(9),v=c.n(x),N=c(12),C=(c(15),function(e){var t=e.category,c=e.withDot,o=e.customClasses;return Object(n.jsxs)("span",{className:"Category-tag Category-".concat(t," ").concat(o||""),children:[c&&Object(n.jsx)("span",{className:"Category-tag-dot"}),j[t],"s"]})}),w=c(16),J=c.n(w),S="https://api.chucknorris.io/jokes",B=function(){var e=Object(o.useCallback)(Object(N.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.a.get("".concat(S,"/categories")).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)}))),[]),t=Object(o.useCallback)(function(){var e=Object(N.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.a.get("".concat(S,"/search"),{params:{query:t&&0!==t.length?t:"all"}}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return{getCategories:e,getAllJokes:t,searchJokes:t}},y=function(e){var t=e.category,c=e.onClick,o=e.customClasses;return Object(n.jsx)("button",{onClick:c,className:"Category-button Category-".concat(t," ").concat(o||""),children:Object(n.jsxs)("span",{className:"Category-button-text",children:[j[t],"s"]})})},P=c.p+"static/media/tailed_arrow_down.c870b9ff.svg",D=(c(57),c(58),function(e){var t=e.icon,c=e.iconPosition,o=e.border,a=e.backgroundColor,s=e.color,r=e.children,i=e.onClick,u=e.type,l=e.customClasses,j={};o&&(j.border=o),a&&(j.backgroundColor=a),s&&(j.color=s);var d="big"===u?"Big":"",b=Object(n.jsx)("img",{src:t,alt:"button icon",className:"".concat(d,"Button-icon")}),h=Object(n.jsx)("span",{className:"BigButton-icon"});return Object(n.jsxs)("button",{className:"".concat(d,"Button ").concat(l||""),onClick:i,style:j,children:["left"===c?b:"big"===u&&h,Object(n.jsx)("span",{children:r}),"right"===c?b:"big"===u&&h]})}),H=function(e){var t=e.categories,c=e.onCategoryChange,a=Object(o.useState)(!1),s=Object(l.a)(a,2),r=s[0],i=s[1];return Object(o.useEffect)((function(){i(!1)}),[i,t]),Object(n.jsxs)("div",{className:"CategoriesSection",children:[t.slice(0,r?1/0:7).map((function(e,t){return Object(n.jsx)(y,{onClick:function(){return c(e)},category:e,customClasses:"m-auto"},t)})),t.length>7&&!r&&Object(n.jsx)(D,{type:"big",iconPosition:"right",icon:P,onClick:function(){return i(!0)},customClasses:"m-auto",children:"View all"})]})},Q=function(e){return Math.floor(Math.random()*e)},M=function(e,t){var c;return(null===t||void 0===t||null===(c=t.categories)||void 0===c?void 0:c.length)||(t.categories=["uncategorized"]),function(e){e.likes=Q(130),e.dislikes=Q(70)}(t),t.categories.forEach((function(c){return function(e,t,c){if(!e[c])return e[c]=[t];e[c].push(t)}(e,t,c)})),e},A=function(e){var t=Object.keys(e);return t[Q(t.length)]},T=c.p+"static/media/search_section_image.ab4f0157.jpg",R=c.p+"static/media/white_search_icon.53ef7130.svg",E=c.p+"static/media/white_loading.9590ce3f.svg",z=c.p+"static/media/black_search_icon.84abb613.svg",G=c.p+"static/media/black_loading.c8799820.svg",F=function(e){var t=e.category;return Object(n.jsx)("span",{className:"Category-bolt Category-".concat(t),children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"14",viewBox:"0 0 8 14",fill:"currentColor",children:Object(n.jsx)("path",{d:"M7.756 6h-3.38L6.011.161C6.04.021 5.87-.06 5.787.055L.048 7.581C-.07 7.756.042 8 .245 8h3.38L1.99 13.839c-.029.14.143.222.224.106l5.74-7.523C8.067 6.244 7.958 6 7.755 6z"})})})},U=(c(59),function(e){var t=e.setQuery,c=e.query,a=e.jokesWithIdx,s=e.selectJoke,r=e.loading,i=Object(o.useState)(!1),u=Object(l.a)(i,2),b=u[0],h=u[1],g=Object(o.useState)(!1),f=Object(l.a)(g,2),k=f[0],p=f[1],m=Object(o.useState)(c),x=Object(l.a)(m,2),v=x[0],N=x[1];Object(o.useEffect)((function(){p(!0);var e=setTimeout((function(){p(!1),c!==v&&t(v)}),1e3);return function(){return clearTimeout(e)}}),[v,c,t]);var C=d(),w=O(b);return Object(n.jsxs)("section",{style:{backgroundImage:"url(".concat(T,")")},className:"SearchSection",children:[Object(n.jsx)("h4",{className:"SearchSection-title",children:"The Joke Bible"}),Object(n.jsx)("h6",{className:"SearchSection-subtitle",children:"Daily Laughs for you and yours"}),Object(n.jsxs)("div",{className:"SearchSection-search-wrapper ".concat(v.length?"active":""),children:[Object(n.jsx)("input",{onFocus:function(){return h(!0)},onBlur:function(){return h(!1)},type:"text",className:"SearchSection-search",placeholder:C?"How can we make you laugh today?":"Find your perfect Chuck joke",value:v,onChange:function(e){return e.target.value.length<300&&N(e.target.value)}}),Object(n.jsx)("span",{className:"SearchSection-search-icon-wrapper",children:r||k?Object(n.jsx)("img",{alt:"loading",src:v.length?G:E}):Object(n.jsx)("img",{alt:"search icon",src:v.length?z:R,className:"SearchSection-search-icon"})}),!!a.length&&Object(n.jsx)("div",{className:"SearchSection-search-dropdown-wrapper ".concat(w),children:a.map((function(e,t){var c=e.joke.categories[0],o=e.joke.value;return Object(n.jsxs)("button",{className:"SearchSection-search-dropdown-item",onClick:function(){return function(e){(r||k)&&(s(e),h(!1))}(e)},children:[Object(n.jsx)("span",{className:"SearchSection-search-dropdown-item-bolt",children:Object(n.jsx)(F,{category:c})}),Object(n.jsxs)("span",{className:"SearchSection-search-dropdown-item-text",children:[j[c],": ",o]})]},t)}))})]})]})}),W=(c(60),[{title:"Smoking Joke",href:"#"},{title:"My Boss Joke",href:"#"},{title:"Dirty Millionaire Joke",href:"#"},{title:"The annoying neighbour",href:"#"},{title:"Knock Knock",href:"#"},{title:"Why Tyson lisps",href:"#"},{title:"The drunk Police officer",href:"#"},{title:"My hip dad (Dad joke)",href:"#"},{title:"What not to say in an elevator",href:"#"}]),X=function(){return Object(n.jsxs)("div",{className:"TopJokesCard",children:[Object(n.jsx)("h6",{className:"TopJokesCard-title",children:"The top 10 jokes this week"}),W.map((function(e,t){var c=e.title,o=e.href;return Object(n.jsx)("a",{href:o,target:"_blank",rel:"noreferrer noopener",className:"TopJokesCard-item",children:c},t)}))]})},L=c.p+"static/media/arrow_left_secondary.6a4a2c2d.svg",q=c.p+"static/media/arrow_right_secondary.442fd3b3.svg",K=(c(61),function(e){var t=function(e,t){var c="Hall of fame",n="#f33636";return e<t?(c="Chestnut",n="#000"):e<=50?(c="New in town",n="#36aef3"):e<=100&&(c="trending",n="#f3a536"),{label:c,color:n}}(e.likes,e.dislikes),c=t.label,o=t.color;return Object(n.jsxs)("span",{className:"RatingTag",style:{color:o},children:[Object(n.jsx)("span",{className:"RatingTag-dot",style:{backgroundColor:o}}),c]})}),I=(c(62),function(e){var t=e.joke;return Object(n.jsxs)("div",{className:"SingleJokeCard",children:[Object(n.jsxs)("div",{className:"SingleJokeCard-head",children:[t.categories&&t.categories.map((function(e,t){return Object(n.jsx)(C,{withDot:!0,category:e,customClasses:"SingleJokeCard-head-tag"},t)})),Object(n.jsx)(K,{likes:t.likes,dislikes:t.dislikes})]}),t.categories&&Object(n.jsx)("h5",{className:"SingleJokeCard-title",children:j[t.categories[0]]}),Object(n.jsx)("p",{className:"SingleJokeCard-joke",children:t.value})]})}),Z=c.p+"static/media/like.6ccb94f4.svg",Y=(c(63),function(e){var t=e.type,c=e.count,o=e.onClick;return Object(n.jsxs)("span",{className:"RateButton ".concat(t),children:[Object(n.jsx)("button",{className:"RateButton-icon-wrapper",onClick:function(){return o(t)},children:Object(n.jsx)("img",{src:Z,alt:"rate img",className:"RateButton-icon"})}),Object(n.jsx)("span",{className:"RateButton-count",children:c})]})}),V=function(e){var t=e.likes,c=e.dislikes,o=e.onClick;return Object(n.jsxs)("span",{className:"RateButtons",children:[Object(n.jsx)(Y,{type:"like",count:t,onClick:o}),Object(n.jsx)(Y,{type:"dislike",count:c,onClick:o})]})},_=(c(64),function(e){var t=e.joke,c=e.exitSingleJokeSection,o=e.nextJoke,a=e.prevJoke,s=e.rateJoke;return Object(n.jsxs)("div",{className:"SingleJokeSection",children:[Object(n.jsx)("div",{className:"SingleJokeSection-back-button",style:{backgroundImage:"url(".concat("data:image/png;base64,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",")")},onClick:c,children:Object(n.jsx)("img",{alt:"arrow left",src:L})}),Object(n.jsxs)("section",{className:"SingleJokeSection-content-wrapper",children:[Object(n.jsxs)("article",{className:"SingleJokeSection-joke-wrapper",children:[Object(n.jsx)(I,{joke:t}),Object(n.jsxs)("div",{className:"SingleJokeSection-joke-buttons-wrapper",children:[Object(n.jsx)("div",{className:"SingleJokeSection-react-buttons",children:Object(n.jsx)(V,{likes:t.likes,dislikes:t.dislikes,onClick:s})}),Object(n.jsxs)("div",{className:"SingleJokeSection-nav-buttons",children:[a&&Object(n.jsx)(D,{onClick:a,icon:L,iconPosition:"left",children:"Prev. joke"}),o&&Object(n.jsx)(D,{onClick:o,icon:q,iconPosition:"right",children:"Next joke"})]})]})]}),Object(n.jsx)("div",{className:"SingleJokeSection-side-section-wrapper",children:Object(n.jsx)(X,{})})]})]})}),$=c.p+"static/media/tailed_arrow_right.ed622f8d.svg",ee=(c(65),function(e){var t=e.joke,c=e.onClick;return Object(n.jsxs)("div",{className:"JokeCard",children:[Object(n.jsxs)("div",{className:"JokeCard-head",children:[Object(n.jsx)(F,{category:t.categories[0]}),Object(n.jsx)("h6",{className:"JokeCard-title",children:j[t.categories[0]]})]}),Object(n.jsx)("p",{className:"JokeCard-joke",children:t.value}),Object(n.jsx)("div",{className:"JokeCard-buttons",children:Object(n.jsx)(D,{iconPosition:"right",icon:$,onClick:c,border:"none",backgroundColor:"transparent",children:"See stats"})})]})}),te=(c(66),function(e){var t=e.jokes,c=e.setActiveIdx,a=Object(o.useState)(1),s=Object(l.a)(a,2),r=s[0],i=s[1];return Object(o.useEffect)((function(){i(1)}),[i,t]),Object(n.jsxs)("div",{className:"JokesSection",children:[Object(n.jsx)("div",{className:"JokesSection-grid",children:t.slice(0,9*r).map((function(e,t){return Object(n.jsx)(ee,{joke:e,onClick:function(){return c(t)}},e.id)}))}),t.length>9*r&&Object(n.jsx)("div",{className:"JokesSection-more-button-wrapper",children:Object(n.jsx)(D,{type:"big",iconPosition:"right",icon:P,onClick:function(){return i(r+1)},children:"View more"})})]})}),ce=(c(67),Object.keys(j)),ne=function(e){var t=e.query,c=e.error;return e.loading?Object(n.jsx)("span",{className:"JokesPage-loading",children:"Loading..."}):c?Object(n.jsx)("span",{className:"JokesPage-error",children:t.length<3||t.length>300?Object(n.jsx)(n.Fragment,{children:"Searches not between 3 and 300 characters are out of Chuck's guidance."}):Object(n.jsxs)(n.Fragment,{children:["There was an error while getting Jokes.",Object(n.jsx)("br",{}),"We hope Chuck won't get angry."]})}):Object(n.jsxs)("span",{className:"JokesPage-no-jokes",children:["No Chuck Norris jokes were found for your search.",Object(n.jsx)("br",{}),"It's your chance to add one!",Object(n.jsx)(D,{iconPosition:"right",icon:$,backgroundColor:"transparent",customClasses:"JokesPage-add-joke-button",children:"Submit joke"})]})},oe=function(){var e=Object(o.useState)(-1),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(o.useState)({}),r=Object(l.a)(s,2),i=r[0],u=r[1],d=Object(o.useState)(ce),b=Object(l.a)(d,2),h=b[0],O=b[1],g=Object(o.useState)(A(j)),f=Object(l.a)(g,2),k=f[0],p=f[1],m=Object(o.useState)(!0),x=Object(l.a)(m,2),w=x[0],J=x[1],S=Object(o.useState)(null),y=Object(l.a)(S,2),P=y[0],D=y[1],T=B().searchJokes,R=Object(o.useState)(""),E=Object(l.a)(R,2),z=E[0],G=E[1];Object(o.useEffect)((function(){(function(){var e=Object(N.a)(v.a.mark((function e(){var t,c,n,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(z||"all");case 3:t=e.sent,c=t.result,n=t.total,o=c.reduce(M,{}),u(o),O(Object.keys(o)),a(1===n?0:-1),D(null),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),u({}),O([]),a(-1),D(e.t0.message);case 19:J(!1);case 20:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()(),J(!0)}),[D,T,u,a,z]),Object(o.useEffect)((function(){var e=Object.keys(i);!i[k]&&e.length&&p(A(i))}),[p,k,i]);var F=Object(o.useMemo)((function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,c=Object.keys(e),n=[];if(c.length<=t)n=c;else for(var o=0;o<t;++o){var a=Q(c.length),s=c.splice(a,1)[0];n.push(s)}return n.reduce((function(t,c){var n=Q(e[c].length),o=e[c][n];return t.push({idx:n,joke:o}),t}),[])}(i)}),[i]),W=i[k]||[],X=-1===c?null:W[c],L=P||!W.length;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(U,{query:z,setQuery:G,jokesWithIdx:F,selectJoke:function(e){var t=e.idx,c=e.joke;a(t),p(c.categories[0])},loading:w}),L&&Object(n.jsx)("div",{className:"JokesPage-announce-wrapper",children:Object(n.jsx)(ne,{error:P,query:z,loading:w})}),!L&&X&&Object(n.jsx)(_,{nextJoke:c===W.length-1?null:function(){return a(c+1)},prevJoke:0===c?null:function(){return a(c-1)},rateJoke:function(){},exitSingleJokeSection:function(){return a(-1)},joke:X}),!L&&!X&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(H,{categories:h,onCategoryChange:function(e){return p(e)}}),Object(n.jsx)("div",{className:"JokesPage-tag-display-section",children:Object(n.jsx)(C,{category:k})}),Object(n.jsx)(te,{jokes:W,setActiveIdx:a})]})]})},ae=c.p+"static/media/footer_background.5516fb24.jpg",se=(c(68),function(){return Object(n.jsx)("footer",{className:"Footer",style:{backgroundImage:"url(".concat(ae,")")},children:Object(n.jsxs)("div",{className:"Footer-content-wrapper",children:[Object(n.jsx)("span",{className:"Footer-text",children:"Got jokes? Get paid for submitting!"}),Object(n.jsx)(D,{iconPosition:"right",icon:$,border:"none",backgroundColor:"transparent",customClasses:"Footer-button",children:"Submit joke"})]})})}),re=(c(69),function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{}),Object(n.jsx)("div",{className:"App-body",children:Object(n.jsx)(r.a,{children:Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{path:"/jokes/:id?",component:oe}),Object(n.jsx)(i.a,{to:"/jokes"})]})})}),Object(n.jsx)(se,{})]})});c(78);s.a.render(Object(n.jsx)(re,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.fef51456.chunk.js.map