(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,n){e.exports=n(506)},204:function(e,t,n){},292:function(e,t){},294:function(e,t){},506:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(22),c=n.n(l),i=(n(204),n(17)),r=n(18),s=n(20),u=n(19),m=n(21),p=n(36),f=n(30),d=n(81),b=n.n(d),h=n(182),k=n.n(h),E=n(82),v=n.n(E),j=n(56),O=n.n(j),g=n(28),y=n.n(g),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,n=e.clickTableRow;return o.a.createElement(b.a,null,o.a.createElement(k.a,null,o.a.createElement(O.a,null,o.a.createElement(y.a,null,"Title"),o.a.createElement(y.a,null,"Authors"),o.a.createElement(y.a,null,"Lang"))),o.a.createElement(v.a,null,t.map(function(e){return o.a.createElement(O.a,{key:e._id,onClick:function(){n(e._id)}},o.a.createElement(y.a,null,e.title),o.a.createElement(y.a,null,e.authors),o.a.createElement(y.a,null,e.lang))})))}}]),t}(a.Component);w.defaultProps={books:[],clickTableRow:function(e){console.log(e)}};var C=w,S=n(111),B=n(57),_=n.n(B),x=n(194),D=n.n(x),W=n(195),A=n.n(W),F=n(114),I=n.n(F),T=n(25),R=n.n(T),P=n(193),J=n.n(P),N=n(196),U=n.n(N),z=n(197),K=n.n(z),L=n(58),M=n.n(L),$=n(183),q=n.n($),G=n(44),H=n.n(G),Q=n(184),V=n.n(Q),X=n(198),Y=n(185),Z=n.n(Y),ee=n(186),te=n.n(ee),ne=n(187),ae=n.n(ne),oe=n(188),le=n.n(oe),ce=n(189),ie=n.n(ce),re=n(83),se=n.n(re),ue=n(191),me=n.n(ue),pe=n(192),fe=n.n(pe),de=n(113),be=n.n(de),he=n(190),ke=n.n(he),Ee=n(112),ve=n.n(Ee),je=n(55),Oe=n.n(je),ge=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.word;return o.a.createElement(Oe.a,null,o.a.createElement(R.a,{variant:"title"},e.word),o.a.createElement(R.a,{component:"ul"},e.definitions.map(function(e){return o.a.createElement("li",{key:e._id},o.a.createElement(R.a,{variant:"subheading"},e.definition),o.a.createElement(R.a,{component:"ol"},e.examples.map(function(e){return o.a.createElement("li",{key:e._id},e.example+(e.definition?" "+e.definition:""))})))})))}}]),t}(a.Component),ye=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={open:!1,search:!1,stem:n.props.lookup.stem},n.close=n.close.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"close",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.lookup,a=t.save;return o.a.createElement("span",null,o.a.createElement(le.a,{key:n._id,label:n.stem,variant:"outlined",onClick:function(){window.open("https://www.duden.de/suchen/dudenonline/"+n.stem)},onDelete:function(){e.setState({open:!0})},deleteIcon:o.a.createElement(ie.a,null)}),o.a.createElement(_.a,{open:this.state.open,onClose:this.close,onBlur:this.close,"aria-labelledby":"form-dialog-title"},o.a.createElement(ve.a,{id:"form-dialog-title"},"Edit"),o.a.createElement(be.a,null,o.a.createElement(ke.a,null,n.usage),o.a.createElement(me.a,{autoFocus:!0,margin:"dense",id:"stem",label:"Stem",fullWidth:!0,value:this.state.stem,onKeyUp:function(t){"Enter"===t.key&&(a(n._id,e.state.stem),n.stem=e.state.stem,e.setState({open:!1}))},onChange:function(t){e.setState({stem:t.target.value})}})),o.a.createElement(fe.a,null,o.a.createElement(se.a,{onClick:this.close,color:"primary"},"Cancel"),o.a.createElement(se.a,{onClick:function(){a(n._id,e.state.stem),n.stem=e.state.stem,e.setState({open:!1})},color:"primary"},"Save"))),o.a.createElement(_.a,{open:this.state.search,onClose:function(){return e.setState({search:!1})},"aria-labelledby":"form-dialog-title"},o.a.createElement(ve.a,{id:"form-dialog-title"},n.stem),o.a.createElement(be.a,null,this.state.words&&this.state.words.map(function(e){return o.a.createElement(ge,{key:e._id,word:e})}))))}}]),t}(a.Component);ye.defaultProps={save:function(e,t){console.log(e,t)}};var we=ye,Ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.save,n=e.find,a=e.lookups;a.forEach(function(e){e.pos=parseInt(e.pos,10)||parseInt(e.pos.split(":")[1],10)});var l=Z()(ae()(a,"pos"),"usage"),c=te()(l).map(function(e){var t=Object(X.a)(e,2);return{usage:t[0],lookups:t[1]}});return o.a.createElement(b.a,null,o.a.createElement(v.a,null,c.map(function(e){return o.a.createElement(O.a,{key:e.usage},o.a.createElement(y.a,null,o.a.createElement(R.a,null,e.usage),e.lookups.map(function(e){return o.a.createElement(we,{key:e._id,lookup:e,save:t,find:n})})))})))}}]),t}(a.Component);Ce.defaultProps={lookups:[],save:function(e,t){console.log(e,t)}};var Se=Ce;function Be(e){return o.a.createElement(J.a,Object.assign({direction:"up"},e))}var _e={de:"duden"},xe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).client=p.a.defaultAppClient,n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.book,l=t.close;return o.a.createElement(_.a,{open:!0,fullScreen:!0,onClose:l,TransitionComponent:Be},o.a.createElement(D.a,{className:n.appBar},o.a.createElement(A.a,null,o.a.createElement(R.a,{variant:"title",color:"inherit",className:n.flex},a.title),o.a.createElement(I.a,{color:"inherit",onClick:function(){var t=_e[a.lang];t&&e.client.callFunction("getWords",[t,a.lookups.map(function(e){return e.stem})]).then(function(e){console.log(e);var t=q()(e.map(function(e){return e.definitions.map(function(t){return t.examples.map(function(n){return function(e,t,n,a){return["<h2>".concat(H()(e),"</h2><p>").concat(H()(t),"</p>"),a?"<p>".concat(H()(a),"</p><p>").concat(H()(n),"</p>"):"<p>".concat(H()(n),"</p>")]}(e.word,n.example,t.definition,n.definition)})})}),2);console.log(t),V()(t,function(e,t){if(e)console.log(e);else{var n=encodeURI("data:text/csv;charset=utf-8,"+t),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download","anki.csv"),a.click()}})})},"aria-label":"Download"},o.a.createElement(U.a,null)),o.a.createElement(I.a,{color:"inherit",onClick:l,"aria-label":"Close"},o.a.createElement(K.a,null)))),o.a.createElement(M.a,{container:!0},o.a.createElement(M.a,{item:!0,sm:12,md:3}),o.a.createElement(M.a,{item:!0,sm:12,md:6},o.a.createElement(Se,{lookups:a.lookups,save:function(t,n){e.client.callFunction("updateStem",[a._id,t,n])},find:function(){var t=_e[a.lang];if(t)return function(n){return e.client.callFunction("getWords",[t,[n]])}}})),o.a.createElement(M.a,{item:!0,sm:12,md:3})))}}]),t}(a.Component),De=Object(S.withStyles)({appBar:{position:"sticky"},flex:{flex:1}})(xe),We=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={title:"",books:[],book:null},n.client=p.a.defaultAppClient,n.closeBookDialog=n.closeBookDialog.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"closeBookDialog",value:function(){this.setState({book:null})}},{key:"componentWillMount",value:function(){var e=this;this.client.callFunction("getBooks").then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.books,a=t.book;return o.a.createElement("div",null,a&&o.a.createElement(De,{book:a,close:this.closeBookDialog}),o.a.createElement(C,{books:n,clickTableRow:function(t){e.client.callFunction("getBook",[t]).then(function(t){e.setState({book:t})})}}))}}]),t}(a.Component);try{var Ae=p.a.initializeDefaultAppClient("kvb-entyb"),Fe=new p.b("test@kvb.com","123456");Ae.auth.loginWithCredential(Fe)}catch(Te){console.log(Te)}var Ie=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(We,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[199,2,1]]]);
//# sourceMappingURL=main.20df6b74.chunk.js.map