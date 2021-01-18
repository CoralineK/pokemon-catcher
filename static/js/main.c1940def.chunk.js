(this["webpackJsonppokemon-catcher"]=this["webpackJsonppokemon-catcher"]||[]).push([[0],{34:function(n,t,e){},42:function(n,t,e){"use strict";e.r(t);var c=e(1),r=e(0),a=e.n(r),o=e(24),i=e.n(o),u=(e(34),e(6)),s=e(19),f=e(4),j=e(2),d=a.a.createContext(void 0),p=e(3);function b(){var n=Object(j.a)(["\n  font-family: PokemonSolid;\n  color: #ffcb05;\n  text-shadow: -4px 5px #003a70;\n"]);return b=function(){return n},n}function h(){var n=Object(j.a)(["\n  font-family: PokemonHollow;\n  color: #3d7dca;\n  font-weight: bold;\n  z-index: 2;\n"]);return h=function(){return n},n}function l(){var n=Object(j.a)(["\n  position: relative;\n  width: calc("," * 5);\n  height: calc("," * 2.5);\n  text-align: center;\n\n  @media (min-width: 768px) {\n    width: calc("," * 8.83);\n    height: calc("," * 1.4);\n  }\n"]);return l=function(){return n},n}function m(){var n=Object(j.a)(["\n  font-size: ",";\n  padding: 0 0.2em 0.4em;\n  position: absolute;\n"]);return m=function(){return n},n}var x="8vh",O=p.a.div(m(),x),v=p.a.div(l(),x,x,x,x),g=Object(p.a)(O)(h()),k=Object(p.a)(O)(b());var w=function(){return Object(c.jsxs)(v,{children:[Object(c.jsx)(g,{children:"Pok\xe9mon Catcher"}),Object(c.jsx)(k,{children:"Pok\xe9mon Catcher"})]})},C="\n  font-family: 'Ubuntu', sans-serif;\n  color: #2e2e2e;\n",E="#003a70",S="#eb4034",y="\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\n",z="480px",D="768px";function T(){var n=Object(j.a)(["\n  ","\n  border: none;\n  background-color: #ffcb05;\n  margin: 30px 0px;\n  padding: 15px 40px;\n  font-size: 25px;\n\n  @media (min-width: 769px) {\n    padding: 10px 30px;\n    font-size: 20px;\n  }\n  @media (min-width: 1201px) {\n    padding: 15px 40px;\n    font-size: 25px;\n  }\n"]);return T=function(){return n},n}var A=p.a.button(T(),C);function I(){var n=Object(j.a)(["\n  ","\n  font-size: 15px;\n  color: ",";\n"]);return I=function(){return n},n}function U(){var n=Object(j.a)(["\n  ","\n  padding: 8px;\n  border: none;\n  box-shadow: 0px 2px ",";\n  font-size: 20px;\n  text-align: center;\n  margin: 10px 0;\n\n  @media (min-width: ",") {\n    width: 400px;\n  }\n"]);return U=function(){return n},n}function P(){var n=Object(j.a)(["\n  text-align: center;\n  height: 80px;\n  margin: 10vh 0 5vh;\n"]);return P=function(){return n},n}function F(){var n=Object(j.a)(["\n  ","\n"]);return F=function(){return n},n}var H=p.a.form(F(),y),L=p.a.div(P()),N=p.a.input(U(),C,"#3d7dca",D),M=p.a.p(I(),C,S);var B=function(){var n=Object(f.f)(),t=Object(r.useState)(""),e=Object(u.a)(t,2),a=e[0],o=e[1],i=Object(r.useContext)(d),s=i.state,j=i.action;return Object(c.jsxs)(H,{onSubmit:function(t){t.preventDefault(),s.nickname?(localStorage.setItem("nickname",s.nickname),n.push("/pokemon-catcher/catching")):o("Nickname is required")},children:[Object(c.jsxs)(L,{children:[Object(c.jsx)(N,{type:"text",placeholder:"pick your nickname",onChange:function(n){n.preventDefault(),o(""),j.setNickname(n.target.value)}}),Object(c.jsx)(M,{children:a})]}),Object(c.jsx)(A,{type:"submit",children:"Continue"})]})};function J(){var n=Object(j.a)(["\n  ","\n  width: 100%;\n  height: 100vh;\n"]);return J=function(){return n},n}var _=p.a.div(J(),y);var q=function(){var n=Object(r.useContext)(d).action;return Object(r.useEffect)((function(){n.setNickname(void 0)}),[]),Object(c.jsxs)(_,{children:[Object(c.jsx)(w,{}),Object(c.jsx)(B,{})]})},V=e(28),W=e(15),G=e.n(W),K=e(22),Q=function(){var n=Object(K.a)(G.a.mark((function n(t){var e,c,r;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="https://pokeapi.co/api/v2/pokemon?limit=5&offset=".concat(t),n.next=3,fetch(e);case 3:return c=n.sent,n.next=6,c.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),R=function(){var n=Object(K.a)(G.a.mark((function n(t){var e,c,r;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(t.url),n.next=3,fetch(e);case 3:return c=n.sent,n.next=6,c.json();case 6:return r=n.sent,n.abrupt("return",{name:t.name.toUpperCase().replaceAll("-"," "),artwork:r.sprites.other["official-artwork"].front_default,stats:r.stats.map((function(n){return{name:n.stat.name.toUpperCase().replaceAll("-"," "),value:n.base_stat}}))});case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();function X(){var n=Object(j.a)(["\n  ","\n"]);return X=function(){return n},n}function Y(){var n=Object(j.a)(["\n  ","\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 8px;\n"]);return Y=function(){return n},n}var Z=p.a.div(Y(),y),$=p.a.div(X(),"\nfont-family: 'VT323', monospace;\ncolor: white;\nfont-size: 25px;\n");var nn,tn=function(n){var t=n.show,e=n.pokemonInfo;return t?Object(c.jsx)(Z,{children:e.stats.map((function(n,t){return Object(c.jsxs)($,{children:[n.name.toUpperCase()," ",n.value]},t)}))}):null};function en(){var n=Object(j.a)(["\n  img {\n    height: 18vh;\n  }\n"]);return en=function(){return n},n}function cn(){var n=Object(j.a)(["\n  ","\n  font-size: 20px;\n  padding-top: 5px;\n\n  @media (min-width: ",") {\n    font-size: 25px;\n  }\n"]);return cn=function(){return n},n}function rn(){var n=Object(j.a)(["\n  ","\n  position: relative;\n  border-radius: 8px;\n  padding: 2vh 1vw;\n  margin: 10px;\n  box-shadow: ",";\n"]);return rn=function(){return n},n}!function(n){n[n.DEFAULT=0]="DEFAULT",n[n.CATCHED=1]="CATCHED",n[n.UNCATCHED=2]="UNCATCHED"}(nn||(nn={}));var an=p.a.div(rn(),y,(function(n){switch(n.catchState){case nn.CATCHED:return"inset 0 0 0 2px ".concat("#4ede31");case nn.UNCATCHED:return"inset 0 0 0 2px ".concat(S);case nn.DEFAULT:default:return"inset 0 0 0 1px ".concat(E)}})),on=p.a.div(cn(),C,"992px"),un=p.a.div(en());var sn=function(n){var t=n.pokemon,e=n.catched,a=Object(r.useContext)(d),o=a.state,i=a.action,s=Object(r.useState)(),f=Object(u.a)(s,2),j=f[0],p=f[1],b=Object(r.useState)(nn.DEFAULT),h=Object(u.a)(b,2),l=h[0],m=h[1],x=Object(r.useState)(!1),O=Object(u.a)(x,2),v=O[0],g=O[1];return Object(r.useEffect)((function(){!function(n){R(n).then((function(n){p(n)}))}(t)}),[t]),Object(r.useEffect)((function(){j&&(o.pokemonsInfo?i.setPokemonsInfo([].concat(Object(V.a)(o.pokemonsInfo),[j])):i.setPokemonsInfo([j]))}),[j]),Object(r.useEffect)((function(){j&&e&&(e.map((function(n){return n.name})).includes(j.name)?m(nn.CATCHED):m(nn.UNCATCHED))}),[e,j]),j?Object(c.jsxs)(an,{onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)},catchState:l,children:[Object(c.jsx)(tn,{show:v,pokemonInfo:j}),Object(c.jsx)(un,{children:Object(c.jsx)("img",{src:j.artwork,alt:t.name})}),Object(c.jsx)(on,{children:j.name})]}):null};function fn(){var n=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: ",") {\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: row;\n  }\n"]);return fn=function(){return n},n}var jn=p.a.div(fn(),z);var dn=function(n){var t=n.pokemons,e=n.catched;return Object(c.jsx)(jn,{children:t&&t.map((function(n,t){return Object(c.jsx)(sn,{pokemon:n,catched:e},t)}))})};function pn(){var n=Object(j.a)(["\n  ","\n  color: ",";\n  font-size: 30px;\n"]);return pn=function(){return n},n}function bn(){var n=Object(j.a)(["\n  ","\n  color: ",";\n  font-size: 25px;\n  font-weight: 600;\n  margin: 5vh 0;\n\n  @media (min-width: ",") {\n    font-size: 30px;\n  }\n  @media (min-width: ",") {\n    font-size: 35px;\n  }\n"]);return bn=function(){return n},n}function hn(){var n=Object(j.a)(["\n  ","\n  width: 100%;\n  padding-top: 4vh;\n\n  @media (min-width: ",") {\n    min-height: 100vh;\n  }\n"]);return hn=function(){return n},n}var ln=p.a.div(hn(),y,D),mn=p.a.p(bn(),C,E,z,D),xn=p.a.div(pn(),C,S);var On=function(){var n=Object(r.useContext)(d).state,t=Object(r.useState)(),e=Object(u.a)(t,2),a=e[0],o=e[1],i=Object(r.useState)(),s=Object(u.a)(i,2),f=s[0],j=s[1],p=Object(r.useState)(!1),b=Object(u.a)(p,2),h=b[0],l=b[1],m=Object(r.useState)(null),x=Object(u.a)(m,2),O=x[0],v=x[1];return Object(r.useEffect)((function(){var t;t=10*n.nickname.length,l(!0),Q(t).then((function(n){o(n),l(!1)})).catch((function(n){v(n.message),l(!1)}))}),[]),Object(c.jsxs)(ln,{children:[Object(c.jsx)(w,{}),Object(c.jsxs)(mn,{children:["Welcome, ",n.nickname,"!"]}),h?Object(c.jsx)(xn,{children:"Loading..."}):O?Object(c.jsx)(xn,{children:"Sorry something went wrong"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(dn,{pokemons:a,catched:f}),Object(c.jsx)(A,{onClick:function(){j([]);var t=n.pokemonsInfo.filter((function(){return 1===Math.round(Math.random())}));j(t),console.log({nickanme:n.nickname,pokemons:t})},style:{backgroundColor:"#3d7dca",color:"white"},children:"Catch'em!"})]})]})};function vn(){return Object(c.jsx)(s.a,{children:Object(c.jsxs)(f.c,{children:[Object(c.jsx)(f.a,{exact:!0,path:"/pokemon-catcher/",component:q}),Object(c.jsx)(f.a,{path:"/pokemon-catcher/catching",component:On})]})})}var gn=function(){var n=Object(r.useState)(localStorage.getItem("nickname")||void 0),t=Object(u.a)(n,2),e=t[0],a=t[1],o=Object(r.useState)(void 0),i=Object(u.a)(o,2),s=i[0],f=i[1];return Object(c.jsx)(d.Provider,{value:{state:{nickname:e,pokemonsInfo:s},action:{setNickname:a,setPokemonsInfo:f}},children:Object(c.jsx)(vn,{})})},kn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,43)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),c(n),r(n),a(n),o(n)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(gn,{})}),document.getElementById("root")),kn()}},[[42,1,2]]]);
//# sourceMappingURL=main.c1940def.chunk.js.map