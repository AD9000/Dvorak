(this.webpackJsonpdvorak=this.webpackJsonpdvorak||[]).push([[0],{197:function(e,t,n){},204:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var r,i=n(0),c=n.n(i),s=n(9),o=n.n(s),a=(n(197),n(76)),l=n(187),u=n(11),j=n(212),d=n(243),f=n(244),x=n(238),b=n(235);!function(e){e.RED="#c41414",e.GREEN="green",e.NONE="inherit",e.WHITE="white",e.BLACK="black",e.LIGHT_GREY="#c2c2c2",e.DARK_GREY="darkgray",e.TEST="#626262"}(r||(r={}));var O={BAD:{bg:r.RED,text:r.WHITE},GREAT:{bg:r.TEST,text:r.WHITE},NONE:{bg:r.LIGHT_GREY,text:r.BLACK},DONE:{bg:r.GREEN,text:r.BLACK}},h=c.a.createContext({words:[],setWords:function(){},displayedWords:[],setDisplayedWords:function(){},updateWord:function(){},currentWord:0,nextWord:function(){},entered:"",setEntered:function(){},lastEntered:"",setLastEntered:function(){},wpm:0,setWpm:function(){},stopTimer:function(){},time:-1,setTime:function(){},charCount:0,setCharCount:function(){},timer:0,lastWord:-1,setLastWord:function(){},currentSum:0,setCurrentSum:function(){}}),m=Object(i.createContext)({typing:!1,setTyping:function(){}}),g=Object(i.createContext)({startTimer:function(){},stopTimer:function(){}}),p={start:"START"},y=n(3),v=Object(b.a)({root:{display:"flex",flexGrow:1},input:{textDecoration:"none",fontSize:50,textAlign:"center"}}),w=function(){var e=Object(i.useRef)(null),t=v(),n=Object(i.useContext)(h),r=n.displayedWords,c=n.currentWord,s=n.updateWord,o=n.nextWord,a=n.setEntered,l=(n.stopTimer,n.setTime,n.charCount),u=n.setCharCount,j=Object(i.useContext)(g).startTimer,d=Object(i.useContext)(m),f=d.typing,b=d.setTyping,p=function(t){var n=t.target.value;if(a(n),0===c&&n&&!f&&(j(),b(!0)),!(c>=100)){var i,d=r[c],x=d.word.startsWith(n),h=n===d.word+" ";(i=h?O.DONE:n?x?O.GREAT:O.BAD:O.NONE)!==d.highlight&&s(c,i),h&&(e.current&&(e.current.getElementsByTagName("input")[0].value=""),o()),x&&u(l+1)}};return Object(y.jsx)(x.a,{ref:e,inputRef:function(e){return e&&e.focus()},autoFocus:!0,fullWidth:!0,onChange:function(e){return p(e)},InputProps:{classes:{root:t.root,input:t.input}}})},C=function(e){var t=e.highlight,n=e.index,r=e.word,i=e.currentWord;return Object(y.jsxs)("span",{style:{padding:"10px",fontSize:25,fontWeight:500,textDecoration:i?"underline":"none"},children:[Object(y.jsx)("span",{style:{color:t.bg},children:r.slice(0,n)}),Object(y.jsx)("span",{style:{color:O.NONE.bg},children:r.slice(n,r.length)})]})},W=function(){var e=Object(i.useContext)(h),t=e.displayedWords,n=e.entered,r=e.currentWord;return Object(y.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"10px"},children:t.map((function(e,t){return Object(y.jsx)(C,{highlight:e.highlight,index:t===r?n.length:e.word.length,word:e.word,currentWord:t===r},e.word)}))})},E=function(){var e=Object(i.useContext)(h).wpm;return Object(y.jsx)(j.a,{elevation:3,children:Object(y.jsxs)(d.a,{variant:"h5",style:{padding:"1rem"},children:["WPM: ",e]})})},T=function(){var e=Object(i.useContext)(h),t=e.time,n=e.charCount,r=e.setWpm;return Object(i.useEffect)((function(){if(!(t<1)){var e=t/60,i=Math.ceil((n+1)/(5*e));r(i)}}),[t]),Object(y.jsx)(E,{})},S=function(){return Object(y.jsxs)(f.a,{item:!0,xs:3,container:!0,style:{padding:"2rem",paddingTop:"3rem",justifyContent:"flex-end"},children:[Object(y.jsx)(f.a,{item:!0,xs:7}),Object(y.jsx)(f.a,{item:!0,xs:5,style:{display:"flex",justifyContent:"flex-end",alignItems:"flex-start"},children:Object(y.jsx)(T,{})})]})},N=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(i.useContext)(h);c.entered,c.time;return Object(y.jsx)(m.Provider,{value:{typing:n,setTyping:r},children:Object(y.jsxs)(f.a,{container:!0,children:[Object(y.jsx)(S,{}),Object(y.jsx)(f.a,{item:!0,container:!0,xs:9,style:{justifyContent:"flex-begin"},children:Object(y.jsxs)(f.a,{item:!0,container:!0,xs:10,style:{padding:"1rem"},children:[Object(y.jsx)(f.a,{item:!0,container:!0,style:{justifyContent:"flex-begin"},children:Object(y.jsx)(f.a,{item:!0,children:Object(y.jsx)(j.a,{elevation:5,style:{margin:"1rem",marginTop:"2rem",display:"flex",flexGrow:1,minHeight:400},children:Object(y.jsx)(W,{})})})}),Object(y.jsx)(f.a,{item:!0,container:!0,style:{justifyContent:"flex-begin"},children:Object(y.jsx)(f.a,{item:!0,container:!0,style:{display:"flex",justifyContent:"center"},children:Object(y.jsx)(j.a,{elevation:3,style:{margin:"1rem 1.5rem",display:"flex",flexGrow:1},children:Object(y.jsx)(w,{})})})})]})})]})})},D=(n(204),n(246)),G=n(41),A=n(75),R=function(){A.a.initialize("UA-186342924-1"),A.a.pageview(window.location.pathname)},I=n(245),k=function(e){var t=e.setStarted;return Object(y.jsx)(f.a,{item:!0,container:!0,style:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",flexDirection:"column"},children:Object(y.jsx)(j.a,{style:{minHeight:400,minWidth:400,display:"flex",flex:1,justifyContent:"center",alignItems:"center",flexDirection:"column"},children:Object(y.jsx)(I.a,{onClick:function(e){return function(e,t){e.preventDefault(),t(!0)}(e,t)},children:Object(y.jsx)(d.a,{variant:"h1",children:p.start})})})})},B=n(186),H=n.n(B),L=function(){var e=Object(i.useContext)(h).wpm,t=Object(i.useState)(!0),n=Object(u.a)(t,2),r=n[0],c=n[1],s=window.innerWidth.toString(),o=window.innerHeight.toString();return Object(i.useEffect)((function(){setTimeout((function(){return c(!0)}),1e3)}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(H.a,{active:r,config:{width:s,height:o}}),Object(y.jsxs)(f.a,{container:!0,direction:"column",children:[Object(y.jsx)(f.a,{item:!0,xs:2}),Object(y.jsxs)(f.a,{item:!0,container:!0,children:[Object(y.jsx)(f.a,{item:!0,xs:1}),Object(y.jsx)(f.a,{item:!0,container:!0,xs:10,children:Object(y.jsx)(f.a,{item:!0,container:!0,style:{justifyContent:"center"},children:Object(y.jsx)(f.a,{item:!0,xs:10,children:Object(y.jsxs)(j.a,{elevation:5,style:{margin:"1.5rem",display:"flex",flexGrow:1,flexDirection:"column",padding:20,minHeight:400},children:[Object(y.jsx)("div",{style:{display:"flex",flexGrow:1,justifyContent:"center",alignItems:"flex-end",paddingBottom:35},children:Object(y.jsx)(d.a,{variant:"h2",style:{textAlign:"center",fontWeight:450},children:"Congratulations!"})}),Object(y.jsx)("div",{style:{display:"flex",flexGrow:1,justifyContent:"center",alignItems:"flex-start"},children:Object(y.jsxs)(d.a,{variant:"h5",style:{textAlign:"center"},children:["Your typing speed was ",Object(y.jsx)("strong",{children:e})," words per minute"]})})]})})})}),Object(y.jsx)(f.a,{item:!0,sm:1})]})]})]})},M=Object(b.a)((function(e){return Object(D.a)({root:{height:"100%",display:"flex",flex:1,backgroundColor:G.a.brown[200],overflow:"scroll"}})})),P=function(e){var t=e.children,n=M();return Object(y.jsx)("div",{className:n.root,children:t})},K=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)([]),s=Object(u.a)(c,2),o=s[0],j=s[1],d=Object(i.useState)(0),f=Object(u.a)(d,2),x=f[0],b=f[1],m=Object(i.useState)(""),p=Object(u.a)(m,2),v=p[0],w=p[1],C=Object(i.useState)(""),W=Object(u.a)(C,2),E=W[0],T=W[1],S=Object(i.useState)(0),D=Object(u.a)(S,2),G=D[0],A=D[1],I=Object(i.useState)(0),B=Object(u.a)(I,2),H=B[0],M=(B[1],Object(i.useState)(0)),K=Object(u.a)(M,2),Y=K[0],z=K[1],_=Object(i.useState)(!1),F=Object(u.a)(_,2),J=F[0],U=F[1],$=Object(i.useState)(-1),q=Object(u.a)($,2),Q=q[0],V=q[1],X=Object(i.useState)(-1),Z=Object(u.a)(X,2),ee=Z[0],te=Z[1],ne=Object(i.useState)(0),re=Object(u.a)(ne,2),ie=re[0],ce=re[1],se=Object(i.useState)(!1),oe=Object(u.a)(se,2),ae=oe[0],le=oe[1],ue=function(e){fetch("/words.txt").then((function(e){return e.text()})).then((function(t){return e(function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}(t.split(" ")).map((function(e){return{word:e,highlight:O.NONE}})))}))},je=function(){J&&le(!0)};return Object(i.useEffect)(R),Object(i.useEffect)((function(){ue(r)}),[]),Object(i.useEffect)((function(){j(n.slice(0,100))}),[n]),Object(i.useEffect)((function(){J&&ce(ie+n[x-1].word.length)}),[x]),Object(i.useEffect)((function(){if(J){var e=setTimeout((function(){V(Q+1)}),1e3);return function(){return clearTimeout(e)}}}),[Q]),Object(y.jsx)(g.Provider,{value:{startTimer:function(){ae||V(0)},stopTimer:je},children:Object(y.jsx)(h.Provider,{value:{words:n,setWords:r,displayedWords:o,setDisplayedWords:j,updateWord:function(e,t){var n=Object(l.a)(o);n[e]=Object(a.a)(Object(a.a)({},n[e]),{},{highlight:t}),j(n)},currentWord:x,nextWord:function(){x>=99&&(je(),le(!0)),b(x+1)},entered:v,setEntered:w,lastEntered:E,setLastEntered:T,wpm:G,setWpm:A,stopTimer:je,time:Q,setTime:V,charCount:Y,setCharCount:z,timer:H,lastWord:ee,setLastWord:te,currentSum:ie,setCurrentSum:ce},children:Object(y.jsx)(P,{children:J?ae?Object(y.jsx)(L,{}):Object(y.jsx)(N,{}):Object(y.jsx)(k,{setStarted:U})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(K,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[206,1,2]]]);
//# sourceMappingURL=main.1b7eaf95.chunk.js.map