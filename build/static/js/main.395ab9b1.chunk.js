(this["webpackJsonpclone-netflix"]=this["webpackJsonpclone-netflix"]||[]).push([[0],{21:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(7),c=n.n(s),i=n(3),o=n.n(i),l=n(4),u=n(5),d="9b07467b1a1511d7022ca1a4be74c40e",j=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,j("/trending/all/week?language=pt-BR&api_key=".concat(d));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,j("/movie/top_rated?language=pt-BR&api_key=".concat(d));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em Alta",items:e.t4},e.next=14,j("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,j("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,j("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(d));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,j("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(d));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,j("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(d));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,j("/movie/".concat(t,"?language=pt-BR&api_key=").concat(d));case 7:case 11:return r=e.sent,e.abrupt("break",15);case 9:return e.next=11,j("/tv/".concat(t,"?language=pt-BR&api_key=").concat(d));case 13:return r=null,e.abrupt("break",15);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=(n(21),n(12)),h=n.n(b),g=n(14),f=n.n(g),v=n(1),p=function(e){var t=e.title,n=e.items,a=Object(r.useState)(0),s=Object(u.a)(a,2),c=s[0],i=s[1];return Object(v.jsxs)("div",{className:"movieRow",children:[Object(v.jsx)("h2",{children:t}),Object(v.jsx)("div",{className:"movieRow--left",onClick:function(){var e=c+Math.round(window.innerWidth/2);e>0&&(e=0),i(e)},children:Object(v.jsx)(h.a,{style:{fontSize:50}})}),Object(v.jsx)("div",{className:"movieRow--rigth",onClick:function(){var e=c-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),i(e)},children:Object(v.jsx)(f.a,{style:{fontSize:50}})}),Object(v.jsx)("div",{className:"movieRow--listarea",children:Object(v.jsx)("div",{className:"movieRow--list",style:{marginLeft:c,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(v.jsx)("div",{className:"movieRow--item",children:Object(v.jsx)("img",{src:"http://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))})})]})},x=(n(28),function(e){var t=e.item,n=new Date(t.first_air_date),r=[];for(var a in t.genres)r.push(t.genres[a].name);var s=t.overview;return s.length>200&&(s="".concat(s.substring(0,200),"...")),Object(v.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(v.jsx)("div",{className:"featured--vertical",children:Object(v.jsxs)("div",{className:"featured--horizontal",children:[Object(v.jsx)("div",{className:"featured--name",children:t.original_name}),Object(v.jsxs)("div",{className:"featured--info",children:[Object(v.jsxs)("div",{className:"featured--points",children:[t.vote_average," pontos"]}),Object(v.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(v.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]})]}),Object(v.jsx)("div",{className:"featured--description",children:s}),Object(v.jsxs)("div",{className:"featured--buttons",children:[Object(v.jsx)("a",{href:"#",className:"featured--watchbutton",children:"\u25b6 Assistir"}),Object(v.jsx)("a",{href:"#",className:"featured--mylistbutton",children:"+ Minha Lista"})]}),Object(v.jsxs)("div",{className:"featured--genres",children:[" ",Object(v.jsx)("strong",{children:"G\xeaneros:"})," ",r.join(", ")]})]})})})}),O=(n(29),function(e){var t=e.black;return Object(v.jsxs)("header",{className:t?"black":"",children:[Object(v.jsx)("div",{className:"header--logo",children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("img",{src:"./assets/netflix-logo.png",alt:"Netflix"})})}),Object(v.jsx)("div",{className:"header--user",children:Object(v.jsx)("a",{href:"/",children:Object(v.jsx)("img",{src:"./assets/logo-user.png",alt:"Usu\xe1rio"})})})]})}),w=(n(30),function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(null),c=Object(u.a)(s,2),i=c[0],d=c[1],j=Object(r.useState)(!1),b=Object(u.a)(j,2),h=b[0],g=b[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getHomeList();case 2:return t=e.sent,a(t),n=t.filter((function(e){return"originals"===e.slug})),r=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[r],e.next=9,m.getMovieInfo(s.id,"tv");case 9:c=e.sent,d(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(r.useEffect)((function(){var e=function(){window.scrollY>10?g(!0):g(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(v.jsxs)("div",{className:"page",children:[Object(v.jsx)(O,{black:h}),i&&Object(v.jsx)(x,{item:i}),Object(v.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(v.jsx)(p,{title:e.title,items:e.items},t)}))}),Object(v.jsxs)("footer",{children:["Desenvolvido com ",Object(v.jsx)("span",{role:"img","aria-label":"cora\xe7\xe3o",children:"\u2764\ufe0f"})," por Guilherme Schubert Medeiros",Object(v.jsx)("br",{}),"Direitos de imagem para Netflix",Object(v.jsx)("br",{}),"Dados obtidos do site Themoviedb.org"]}),n<=0&&Object(v.jsx)("div",{className:"loading",children:Object(v.jsx)("img",{src:"./assets/Netflix_LoadTime.gif",alt:"Carregando"})})]})});c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.395ab9b1.chunk.js.map