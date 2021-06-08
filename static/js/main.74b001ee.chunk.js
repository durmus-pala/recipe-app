(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{43:function(n,e,t){},44:function(n,e,t){},73:function(n,e,t){"use strict";t.r(e);var i,r,a,c,o,s=t(1),d=t.n(s),l=t(32),b=t.n(l),j=(t(43),t(44),t(11)),p=t(2),u=t(3),x=t(10),h=u.a.div(i||(i=Object(p.a)(["\n  padding: 0 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background: #e1f1dd;\n  border-radius: 0 0 10px 10px;\n  height: 75px;\n  font-size: 2rem;\n"]))),m=u.a.div(r||(r=Object(p.a)(["\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  span {\n    height: 4px;\n    width: 25px;\n    background: #00adb5;\n    margin-bottom: 4px;\n    border-radius: 5px;\n  }\n  @media (max-width: 768px) {\n    display: flex;\n  }\n"]))),f=Object(u.a)(x.b)(a||(a=Object(p.a)(['\n  padding: 1rem 2rem;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: #02475e;\n  transition: all 0.3s ease-in;\n  font-size: 2rem;\n  font-family: "Girassol", sans-serif;\n  &:hover {\n    color: #00adb5;\n    font-weight: bold;\n  }\n  @media (max-width: 768px) {\n    background-color: #e1f1dd;\n    border: 1px solid #00adb5;\n    border-radius: 10px;\n    width: 100%;\n  }\n']))),O=u.a.div(c||(c=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  @media (max-width: 768px) {\n    overflow: hidden;\n    flex-direction: column;\n    width: 100%;\n    max-height: ",";\n    transition: max-height 0.3s ease-in;\n  }\n"])),(function(n){return n.isOpen?"300px":"0"})),g=Object(u.a)(x.b)(o||(o=Object(p.a)(['\n  padding: 1rem 0;\n  color: #393e46;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 2rem;\n  i {\n    font-family: "Girassol", sans-serif;\n  }\n  span {\n    font-family: "Girassol", sans-serif;\n    font-weight: 400;\n    font-size: 2rem;\n    color: #00adb5;\n  }\n']))),v=t(0);function y(){var n=Object(s.useState)(!1),e=Object(j.a)(n,2),t=e[0],i=e[1];return Object(v.jsxs)(h,{children:[Object(v.jsxs)(g,{to:"/",children:[Object(v.jsx)("i",{children:"ed8en />"}),Object(v.jsx)("span",{children:"recipe"})]}),Object(v.jsxs)(m,{onClick:function(){return i(!t)},children:[Object(v.jsx)("span",{}),Object(v.jsx)("span",{}),Object(v.jsx)("span",{})]}),Object(v.jsxs)(O,{isOpen:t,children:[Object(v.jsx)(f,{to:"/about",children:"About"}),Object(v.jsx)(f,{to:{pathname:"https://github.com/durmus-pala"},target:"_blank",rel:"noopener noreferrer",children:"Github"}),Object(v.jsx)(f,{to:"/login",children:"Logout"})]})]})}var w,k,C,S,N,z,L,D,A,M,q,E,T,F,G,R,H,J,P,_,I,Q,B,K,W,U,V,X,Y,Z,$=t(4),nn=t(21),en=t.n(nn),tn=t(36),rn=u.a.div(w||(w=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #00adb5;\n"]))),an=u.a.h2(k||(k=Object(p.a)(["\n  margin-top: 1rem;\n  font-size: 3rem;\n"]))),cn=u.a.form(C||(C=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  border: 2px solid white;\n  border-radius: 3px;\n  margin: 20px;\n"]))),on=u.a.input(S||(S=Object(p.a)(["\n  height: 3rem;\n  width: 15rem;\n  border: none;\n  border-radius: 3px;\n  outline: none;\n  text-indent: 10px;\n  margin: 5px;\n  font-size: 2rem;\n"]))),sn=u.a.button(N||(N=Object(p.a)(["\n  background-color: #e1f1dd;\n  padding: 5px;\n  outline: none;\n  height: 3rem;\n  border: none;\n  margin: 5px;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 2rem;\n\n  &:hover {\n    background-color: #00adb5;\n    transition: all 0.3s ease-in;\n    border: 1px solid white;\n  }\n"]))),dn=u.a.select(z||(z=Object(p.a)(["\n  border-radius: 3px;\n  margin: 5px;\n  padding: 5px;\n  height: 3rem;\n  border: none;\n  font-size: 2rem;\n"]))),ln=function(n){var e=n.setQuery,t=n.query,i=n.getData,r=n.mealTypes,a=n.setMeal;n.meal;return Object(v.jsxs)(cn,{onSubmit:function(n){n.preventDefault(),i()},children:[Object(v.jsx)(on,{type:"text",placeholder:"Search",value:t,onChange:function(n){return e(n.target.value)}}),Object(v.jsx)(sn,{children:"Search"}),Object(v.jsx)(dn,{name:"mealTypes",id:"mealTypes",onChange:function(n){return a(n.target.value)},children:null===r||void 0===r?void 0:r.map((function(n){return Object(v.jsxs)("option",{value:n.toLowerCase(),children:[" ",n," "]},n)}))})]})},bn=function(n){var e=n.setQuery,t=n.query,i=n.getData,r=n.mealTypes,a=n.setMeal,c=n.meal;return Object(v.jsxs)(rn,{children:[Object(v.jsx)(an,{children:"Recipe App"}),Object(v.jsx)(ln,{setQuery:e,query:t,getData:i,mealTypes:r,setMeal:a,meal:c})]})},jn=t(37),pn=t.n(jn),un=u.a.div(L||(L=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  /* background: #e1f1dd; */\n  height: fit-content;\n  /* padding: 5px; */\n"]))),xn=u.a.div(D||(D=Object(p.a)(["\n  height: 300px;\n  background: #e1f1dd;\n  padding: 5px;\n  border-radius: 3px;\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  margin: 10px;\n  box-shadow: 8px 8px 5px black;\n\n  &:hover {\n    box-shadow: none;\n    transition: all 0.3s ease-in;\n  }\n"]))),hn=u.a.img(A||(A=Object(p.a)(["\n  height: 150px;\n  border-radius: 10px;\n"]))),mn=u.a.button(M||(M=Object(p.a)(["\n  background-color: #00adb5;\n  padding: 5px;\n  outline: none;\n  height: 2rem;\n  border: none;\n  margin: 10px;\n  border-radius: 3px;\n  cursor: pointer;\n"]))),fn=u.a.h1(q||(q=Object(p.a)(["\n  font-size: 1.5rem;\n  text-align: center;\n"]))),On=u.a.div(E||(E=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 50px;\n"]))),gn=u.a.img(T||(T=Object(p.a)(["\n  width: 80%;\n  max-width: 750px;\n"]))),vn=function(n){var e=n.recipe,t=Object($.g)();return Object(v.jsxs)(xn,{children:[Object(v.jsxs)(fn,{children:[" ",null===e||void 0===e?void 0:e.label," "]}),Object(v.jsx)(hn,{src:null===e||void 0===e?void 0:e.image,alt:null===e||void 0===e?void 0:e.label}),Object(v.jsx)(mn,{onClick:function(){t.push({pathname:"/details",recipe:e})},children:"View More"})]})},yn=t.p+"static/media/home.1df754a9.svg",wn=["Breakfast","Lunch","Dinner","Snack","Teatime"],kn=function(){var n=Object(s.useState)(""),e=Object(j.a)(n,2),t=e[0],i=e[1],r=Object(s.useState)(),a=Object(j.a)(r,2),c=a[0],o=a[1],d=Object(s.useState)(wn[0].toLowerCase()),l=Object(j.a)(d,2),b=l[0],p=l[1],u="https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("4e9f05eb","&app_key=").concat("9b904d703fa0d46a88ce1ac63f29f498","&mealType=").concat(b),x=function(){var n=Object(tn.a)(en.a.mark((function n(){var e;return en.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""===t){n.next=7;break}return n.next=3,pn.a.get(u);case 3:200===(e=n.sent).status&&(o(e.data.hits),console.log(e.data.hits)),n.next=8;break;case 7:alert("Please fill the form!");case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)(bn,{setQuery:i,query:t,getData:x,mealTypes:wn,setMeal:p,meal:b}),c?Object(v.jsx)(un,{children:null===c||void 0===c?void 0:c.map((function(n,e){return Object(v.jsx)(vn,{recipe:null===n||void 0===n?void 0:n.recipe},e)}))}):Object(v.jsx)(On,{children:Object(v.jsx)(gn,{src:yn})})]})},Cn=u.a.div(F||(F=Object(p.a)(['\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: calc(100vh - 80px);\n  line-height: 2;\n\n  span {\n    color: white;\n    font-family: "Girassol", sans-serif;\n    font-size: 3rem;\n  }\n']))),Sn=u.a.div(G||(G=Object(p.a)(["\n  text-align: right;\n  margin: 0 10px;\n  max-width: 1000px;\n  border: 1px solid white;\n  padding: 25px;\n  border-radius: 5px;\n\n  a {\n    color: white;\n  }\n"]))),Nn=u.a.div(R||(R=Object(p.a)([""]))),zn=u.a.img(H||(H=Object(p.a)(["\n  width: 500px;\n  margin-bottom: 2rem;\n"]))),Ln=t.p+"static/media/coding.0ee2fc3a.svg",Dn=function(){return Object(v.jsxs)(Cn,{children:[Object(v.jsx)(zn,{src:Ln,alt:"coding"}),Object(v.jsx)(Nn,{children:Object(v.jsxs)("h1",{children:["About Software Developer ",Object(v.jsx)("span",{children:"D. PALA"})]})}),Object(v.jsxs)(Sn,{children:[Object(v.jsx)("h1",{children:"I'm Durmu\u015f"}),Object(v.jsx)("h2",{children:"I\u2019m currently learning Full-Stack Development Languages."}),Object(v.jsx)("h2",{children:"I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL, Python, Java, AWS Services."}),Object(v.jsxs)("h2",{children:[Object(v.jsx)("a",{href:"mailto:blablabla@gmail.com",children:"Send email"})," : blablabla@gmail.com"]})]})]})},An=u.a.div(J||(J=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  background: #00adb5;\n  min-height: calc(100vh - 75px);\n  /* height: fit-content; */\n  padding: 5px;\n"]))),Mn=u.a.div(P||(P=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n  margin: 1rem;\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: #e1f1dd;\n  /* height: calc(100vh - 300px); */\n\n  @media (max-width: 1250px) {\n    /* justify-content: center;\n    background-color: red;\n    border: 1px solid red; */\n  }\n"]))),qn=u.a.div(_||(_=Object(p.a)(["\n  border: 1px solid #00adb5;\n  padding: 10px;\n  border-radius: 3px;\n  margin: 2rem;\n\n  img {\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),En=u.a.div(I||(I=Object(p.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin: 25px;\n  font-size: 3rem;\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  img {\n    width: 200px;\n  }\n"]))),Tn=u.a.div(Q||(Q=Object(p.a)(["\n  width: 400px;\n  font-size: 1.4rem;\n  margin: 2rem;\n"]))),Fn=u.a.div(B||(B=Object(p.a)(["\n  width: 400px;\n  text-align: right;\n  font-size: 1.8rem;\n  margin: 2rem;\n"]))),Gn=t.p+"static/media/diet.2f19967b.svg",Rn=function(n){var e=n.location.recipe;return Object(v.jsxs)(An,{children:[Object(v.jsxs)(En,{children:[Object(v.jsx)("h1",{children:e.label}),Object(v.jsx)("img",{src:Gn,alt:""})]}),Object(v.jsxs)(Mn,{children:[Object(v.jsxs)(Fn,{children:[Object(v.jsx)(v.Fragment,{children:"Nutrients"}),Object(v.jsxs)("p",{children:[e.totalNutrients.CA.label," :"," ",Math.round(e.totalNutrients.CA.quantity),e.totalNutrients.CA.unit]}),Object(v.jsxs)("p",{children:[e.totalNutrients.CHOCDF.label," :"," ",Math.round(e.totalNutrients.CHOCDF.quantity),e.totalNutrients.CHOCDF.unit]}),Object(v.jsxs)("p",{children:[e.totalNutrients.CHOLE.label," :"," ",Math.round(e.totalNutrients.CHOLE.quantity),e.totalNutrients.CHOLE.unit]}),Object(v.jsxs)("p",{children:[e.totalNutrients.ENERC_KCAL.label," :"," ",Math.round(e.totalNutrients.ENERC_KCAL.quantity),e.totalNutrients.ENERC_KCAL.unit]}),Object(v.jsx)("p",{children:e.totalWeight}),Object(v.jsxs)("p",{children:["Calories: ",Math.round(e.calories)]}),e.digest.slice(0,4).map((function(n,e){return Object(v.jsxs)("p",{children:[n.label," : ",Math.round(n.total)]},e)}))]}),Object(v.jsx)(qn,{children:Object(v.jsx)("img",{src:e.image,alt:e.label})}),Object(v.jsx)(Tn,{children:e.ingredientLines.map((function(n,e){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("p",{children:[e+1," - ",n]}),Object(v.jsx)("br",{})]},e)}))})]})]})},Hn=u.a.div(K||(K=Object(p.a)(['\n  background-image: url("https://picsum.photos/1600/900");\n  background-repeat: no-repeat;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']))),Jn=u.a.div(W||(W=Object(p.a)(["\n  width: 600px;\n  min-width: 600px;\n  height: 600px;\n  background-color: rgba(0, 173, 181, 0.5);\n  border-radius: 50%;\n  border: 2px solid #e1f1dd;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Pn=u.a.h1(U||(U=Object(p.a)(['\n  color: white;\n  font-family: "Girassol", sans-serif;\n  font-size: 3rem;\n']))),_n=u.a.input(V||(V=Object(p.a)(['\n  height: 50px;\n  font-size: 2rem;\n  width: 250px;\n  border-radius: 5px;\n  font-family: "Girassol", sans-serif;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: none;\n  color: white;\n  margin: 1rem;\n  text-indent: 20px;\n']))),In=u.a.form(X||(X=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Qn=u.a.button(Y||(Y=Object(p.a)(['\n  font-size: 2rem;\n  font-family: "Girassol", sans-serif;\n  background-color: rgba(0, 0, 0, 0.6);\n  color: white;\n  border: none;\n  cursor: pointer;\n  margin: 1rem;\n']))),Bn=u.a.img(Z||(Z=Object(p.a)(["\n  width: 150px;\n  margin: 1rem;\n"]))),Kn=t.p+"static/media/meal2.8b3981f1.svg",Wn=function(n){var e=n.setAuth,t=n.auth,i=Object($.g)();return Object(v.jsx)(Hn,{children:Object(v.jsxs)(Jn,{children:[Object(v.jsx)(Bn,{src:Kn,alt:"meal"}),Object(v.jsxs)(Pn,{children:["<ed8en/>"," Recipe"]}),Object(v.jsxs)(In,{onSubmit:function(n){n.preventDefault(),e(!t),i.push("/")},children:[Object(v.jsx)(_n,{type:"text",placeholder:"Username",required:!0}),Object(v.jsx)(_n,{type:"password",placeholder:"Password",required:!0}),Object(v.jsx)(Qn,{type:"submit",children:"Login"})]})]})})},Un=t(15),Vn=t(38),Xn=["component","auth"],Yn=function(n){var e=n.component,t=n.auth,i=Object(Vn.a)(n,Xn);return Object(v.jsx)($.b,Object(Un.a)(Object(Un.a)({},i),{},{render:function(n){return t?Object(v.jsx)(e,Object(Un.a)({},n)):Object(v.jsx)($.a,{to:{pathname:"/login",state:{from:n.location}}})}}))},Zn=function(){var n=Object(s.useState)(!1),e=Object(j.a)(n,2),t=e[0],i=e[1];return Object(v.jsx)("div",{children:Object(v.jsx)(x.a,{children:Object(v.jsxs)($.d,{children:[Object(v.jsx)($.b,{path:"/login",exact:!0,component:function(){return Object(v.jsx)(Wn,{auth:t,setAuth:i})}}),Object(v.jsx)($.b,{component:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(y,{}),Object(v.jsx)(Yn,{auth:t,exact:!0,path:"/",component:kn}),Object(v.jsx)(Yn,{auth:t,path:"/details",component:Rn}),Object(v.jsx)(Yn,{auth:t,path:"/about",component:Dn})]})}})]})})})};var $n=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(Zn,{})})},ne=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),i(n),r(n),a(n),c(n)}))};b.a.render(Object(v.jsx)(d.a.StrictMode,{children:Object(v.jsx)($n,{})}),document.getElementById("root")),ne()}},[[73,1,2]]]);
//# sourceMappingURL=main.74b001ee.chunk.js.map