(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(21),c=n.n(o),r=(n(102),n(16)),i=n(17),u=n(19),s=n(18),b=n(20),m=n(26),p=n(34),k=n(45),h=n.n(k),f=n(88),v=n.n(f),E=n(46),j=n.n(E),O=n(35),d=n.n(O),y=n(22),w=n.n(y),g=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,n=e.clickTableRow;return l.a.createElement(h.a,null,l.a.createElement(v.a,null,l.a.createElement(d.a,null,l.a.createElement(w.a,null,"Title"),l.a.createElement(w.a,null,"Authors"),l.a.createElement(w.a,null,"Lang"))),l.a.createElement(j.a,null,t.map(function(e){return l.a.createElement(d.a,{key:e._id,onClick:function(){n(e._id)}},l.a.createElement(w.a,null,e.title),l.a.createElement(w.a,null,e.authors),l.a.createElement(w.a,null,e.lang))})))}}]),t}(a.Component);g.defaultProps={books:[],clickTableRow:function(e){console.log(e)}};var C=g,B=n(96),D=n(90),S=n.n(D),T=n(91),x=n.n(T),A=n(92),W=n.n(A),_=n(94),R=n.n(_),J=n(93),N=n.n(J),P=n(89),z=n.n(P),F=n(95),I=n.n(F),L=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.lookups;return l.a.createElement(h.a,null,l.a.createElement(j.a,null,e.map(function(e){return l.a.createElement(d.a,{key:e._id},l.a.createElement(w.a,null,e.usage))})))}}]),t}(a.Component);L.defaultProps={lookups:[]};var M=L;function $(e){return l.a.createElement(z.a,Object.assign({direction:"up"},e))}var q=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).client=m.a.defaultAppClient,n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.book,a=e.close;return l.a.createElement(S.a,{open:!0,fullScreen:!0,onClose:a,TransitionComponent:$},l.a.createElement(x.a,{className:t.appBar},l.a.createElement(W.a,null,l.a.createElement(N.a,{variant:"title",color:"inherit",className:t.flex},n.title),l.a.createElement(R.a,{color:"inherit",onClick:a,"aria-label":"Close"},l.a.createElement(I.a,null)))),l.a.createElement(M,{lookups:n.lookups}))}}]),t}(a.Component),G=Object(B.withStyles)({appBar:{position:"sticky"},flex:{flex:1}})(q),H=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={title:"",books:[],book:null},n.client=m.a.defaultAppClient,n.closeBookDialog=n.closeBookDialog.bind(Object(p.a)(Object(p.a)(n))),n}return Object(b.a)(t,e),Object(i.a)(t,[{key:"closeBookDialog",value:function(){this.setState({book:null})}},{key:"componentWillMount",value:function(){var e=this;this.client.callFunction("getBooks").then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.books,a=t.book;return l.a.createElement("div",null,a&&l.a.createElement(G,{book:a,close:this.closeBookDialog}),l.a.createElement(C,{books:n,clickTableRow:function(t){var a=n.find(function(e){return e._id===t});e.setState({book:a})}}))}}]),t}(a.Component);try{var K=m.a.initializeDefaultAppClient("kvb-entyb"),Q=new m.b("test@kvb.com","123456");K.auth.loginWithCredential(Q)}catch(V){console.log(V)}var U=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(H,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,n){e.exports=n(240)}},[[97,2,1]]]);
//# sourceMappingURL=main.b02d97dd.chunk.js.map