(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(e,t,n){e.exports=n(503)},202:function(e,t,n){},291:function(e,t){},293:function(e,t){},503:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(22),c=n.n(l),r=(n(202),n(17)),i=n(18),s=n(20),u=n(19),m=n(21),p=n(36),f=n(30),d=n(80),b=n.n(d),h=n(180),k=n.n(h),E=n(81),v=n.n(E),j=n(56),O=n.n(j),g=n(28),y=n.n(g),w=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,n=e.clickTableRow;return o.a.createElement(b.a,null,o.a.createElement(k.a,null,o.a.createElement(O.a,null,o.a.createElement(y.a,null,"Title"),o.a.createElement(y.a,null,"Authors"),o.a.createElement(y.a,null,"Lang"))),o.a.createElement(v.a,null,t.map(function(e){return o.a.createElement(O.a,{key:e._id,onClick:function(){n(e._id)}},o.a.createElement(y.a,null,e.title),o.a.createElement(y.a,null,e.authors),o.a.createElement(y.a,null,e.lang))})))}}]),t}(a.Component);w.defaultProps={books:[],clickTableRow:function(e){console.log(e)}};var C=w,S=n(110),B=n(57),_=n.n(B),x=n(192),D=n.n(x),W=n(193),A=n.n(W),F=n(113),I=n.n(F),T=n(25),R=n.n(T),P=n(191),J=n.n(P),N=n(194),U=n.n(N),z=n(195),K=n.n(z),L=n(181),M=n.n(L),$=n(44),q=n.n($),G=n(182),H=n.n(G),Q=n(196),V=n(183),X=n.n(V),Y=n(184),Z=n.n(Y),ee=n(185),te=n.n(ee),ne=n(186),ae=n.n(ne),oe=n(187),le=n.n(oe),ce=n(82),re=n.n(ce),ie=n(189),se=n.n(ie),ue=n(190),me=n.n(ue),pe=n(112),fe=n.n(pe),de=n(188),be=n.n(de),he=n(111),ke=n.n(he),Ee=n(55),ve=n.n(Ee),je=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.word;return o.a.createElement(ve.a,null,o.a.createElement(R.a,{variant:"title"},e.word),o.a.createElement(R.a,{component:"ul"},e.definitions.map(function(e){return o.a.createElement("li",{key:e._id},o.a.createElement(R.a,{variant:"subheading"},e.definition),o.a.createElement(R.a,{component:"ol"},e.examples.map(function(e){return o.a.createElement("li",{key:e._id},e.example)})))})))}}]),t}(a.Component),Oe=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={open:!1,search:!1,stem:n.props.lookup.stem},n.close=n.close.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"close",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.lookup,a=t.save,l=t.find;return o.a.createElement("span",null,o.a.createElement(ae.a,{key:n._id,label:n.stem,variant:"outlined",onClick:function(){l&&l()&&l()(n.stem).then(function(t){e.setState({search:!0,words:t})})},onDelete:function(){e.setState({open:!0})},deleteIcon:o.a.createElement(le.a,null)}),o.a.createElement(_.a,{open:this.state.open,onClose:this.close,onBlur:this.close,"aria-labelledby":"form-dialog-title"},o.a.createElement(ke.a,{id:"form-dialog-title"},"Edit"),o.a.createElement(fe.a,null,o.a.createElement(be.a,null,n.usage),o.a.createElement(se.a,{autoFocus:!0,margin:"dense",id:"stem",label:"Stem",fullWidth:!0,value:this.state.stem,onKeyUp:function(t){"Enter"===t.key&&(a(n._id,e.state.stem),n.stem=e.state.stem,e.setState({open:!1}))},onChange:function(t){e.setState({stem:t.target.value})}})),o.a.createElement(me.a,null,o.a.createElement(re.a,{onClick:this.close,color:"primary"},"Cancel"),o.a.createElement(re.a,{onClick:function(){a(n._id,e.state.stem),n.stem=e.state.stem,e.setState({open:!1})},color:"primary"},"Save"))),o.a.createElement(_.a,{open:this.state.search,onClose:function(){return e.setState({search:!1})},"aria-labelledby":"form-dialog-title"},o.a.createElement(ke.a,{id:"form-dialog-title"},n.stem),o.a.createElement(fe.a,null,this.state.words&&this.state.words.map(function(e){return o.a.createElement(je,{key:e._id,word:e})}))))}}]),t}(a.Component);Oe.defaultProps={save:function(e,t){console.log(e,t)}};var ge=Oe,ye=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.save,n=e.find,a=e.lookups;a.forEach(function(e){e.pos=parseInt(e.pos,10)||parseInt(e.pos.split(":")[1],10)});var l=X()(te()(a,"pos"),"usage"),c=Z()(l).map(function(e){var t=Object(Q.a)(e,2);return{usage:t[0],lookups:t[1]}});return o.a.createElement(b.a,null,o.a.createElement(v.a,null,c.map(function(e){return o.a.createElement(O.a,{key:e.usage},o.a.createElement(y.a,null,o.a.createElement(R.a,null,e.usage),e.lookups.map(function(e){return o.a.createElement(ge,{key:e._id,lookup:e,save:t,find:n})})))})))}}]),t}(a.Component);ye.defaultProps={lookups:[],save:function(e,t){console.log(e,t)}};var we=ye;function Ce(e){return o.a.createElement(J.a,Object.assign({direction:"up"},e))}var Se={de:"duden"},Be=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).client=p.a.defaultAppClient,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.book,l=t.close;return o.a.createElement(_.a,{open:!0,fullScreen:!0,onClose:l,TransitionComponent:Ce},o.a.createElement(D.a,{className:n.appBar},o.a.createElement(A.a,null,o.a.createElement(R.a,{variant:"title",color:"inherit",className:n.flex},a.title),o.a.createElement(I.a,{color:"inherit",onClick:function(){var t=Se[a.lang];t&&e.client.callFunction("getWords",[t,a.lookups.map(function(e){return e.stem})]).then(function(e){console.log(e);var t=M()(e.map(function(e){return e.definitions.map(function(t){return t.examples.map(function(n){return function(e,t,n,a){return["<h2>".concat(q()(e),"</h2><p>").concat(q()(t),"</p>"),a?"<p>".concat(q()(a),"</p><p>").concat(q()(n),"</p>"):"<p>".concat(q()(n),"</p>")]}(e.word,n.example,t.definition,n.definition)})})}),2);console.log(t),H()(t,function(e,t){if(e)console.log(e);else{var n=encodeURI("data:text/csv;charset=utf-8,"+t),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download","anki.csv"),a.click()}})})},"aria-label":"Download"},o.a.createElement(U.a,null)),o.a.createElement(I.a,{color:"inherit",onClick:l,"aria-label":"Close"},o.a.createElement(K.a,null)))),o.a.createElement(we,{lookups:a.lookups,save:function(t,n){e.client.callFunction("updateStem",[a._id,t,n])},find:function(){var t=Se[a.lang];if(t)return function(n){return e.client.callFunction("getWords",[t,[n]])}}}))}}]),t}(a.Component),_e=Object(S.withStyles)({appBar:{position:"sticky"},flex:{flex:1}})(Be),xe=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={title:"",books:[],book:null},n.client=p.a.defaultAppClient,n.closeBookDialog=n.closeBookDialog.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"closeBookDialog",value:function(){this.setState({book:null})}},{key:"componentWillMount",value:function(){var e=this;this.client.callFunction("getBooks").then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.books,a=t.book;return o.a.createElement("div",null,a&&o.a.createElement(_e,{book:a,close:this.closeBookDialog}),o.a.createElement(C,{books:n,clickTableRow:function(t){e.client.callFunction("getBook",[t]).then(function(t){e.setState({book:t})})}}))}}]),t}(a.Component);try{var De=p.a.initializeDefaultAppClient("kvb-entyb"),We=new p.b("test@kvb.com","123456");De.auth.loginWithCredential(We)}catch(Fe){console.log(Fe)}var Ae=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(xe,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[197,2,1]]]);
//# sourceMappingURL=main.f236d461.chunk.js.map