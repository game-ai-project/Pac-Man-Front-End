(this["webpackJsonpapp-dir"]=this["webpackJsonpapp-dir"]||[]).push([[0],{21:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(22),a=n.n(i),o=(n(34),n(2)),r=n(3),l=n(4),d=n(5),j=n(24),u=(n(21),n(0)),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).recognise=function(){0==s.state.isListening&&(s.setState({isListening:!0}),s._recognizer.lang=s.state.lang,s._recognizer.start())},s.state={lang:e.lang||"en-US",isListening:!1},s}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=this,t=window.SpeechRecognition||window.webkitSpeechRecognition,n=Object(j.a)("760d-133-19-43-10.jp.ngrok.io:8000");this._recognizer=new t,this._recognizer.onend=function(t){e.setState({isListening:!1})},this._recognizer.onresult=function(e){console.log(e.results[0][0].transcript),n.emit("post",{message:e.results[0][0].transcript})},console.log(this._recognizer)}},{key:"render",value:function(){var e=this.state.isListening;return Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("button",{disabled:e,onClick:this.recognise,className:"rounded-corner",children:"Record"})]})}}]),n}(s.Component),h=n(25),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsx)(h.a,{channel:"petepittawat",width:"100%",height:"100%",muted:this.props.muted,hideControls:!0,parent:["codesandbox.io","localhost"]})}}]),n}(s.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e){0==s.state.muted?s.setState({muted:!0}):s.setState({muted:!1})},s.state={muted:!0},s}return Object(r.a)(n,[{key:"render",value:function(){this.state.muted;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"Twitch-view",children:Object(u.jsx)(g,{muted:this.state.muted})}),Object(u.jsxs)("div",{className:"User-interface",children:[Object(u.jsxs)("div",{className:"Instruction",children:[Object(u.jsx)("div",{className:"Instruction-space"}),Object(u.jsx)("div",{className:"Instruction-title",children:Object(u.jsx)("b",{children:"Instruction"})}),Object(u.jsx)("div",{className:"Instruction-1",children:"The game will be automatically played by Al.By cheering/boo with your own voice, you can give advantages/disadvantages to Ms PAC-MAN"}),Object(u.jsx)("div",{className:"Instruction-space"}),Object(u.jsxs)("div",{className:"Instruction-2",children:["Press the ",Object(u.jsx)("b",{children:'"Record"'})," button and cheer/ooo with your passionate voicel"]})]}),Object(u.jsxs)("div",{className:"Audio-settings",children:[Object(u.jsx)("div",{className:"Audio-space"}),Object(u.jsx)("div",{className:"Audio-title",children:Object(u.jsx)("b",{children:"Audio settings"})}),Object(u.jsxs)("div",{className:"Audio-items",children:[Object(u.jsxs)("div",{className:"toggle_button",children:[Object(u.jsx)("input",{id:"toggle",class:"toggle_input",type:"checkbox",onChange:this.handleChange}),Object(u.jsx)("label",{for:"toggle",class:"toggle_label"})]}),Object(u.jsx)("div",{className:"Audio-1",children:"Turn on/off background music"})]})]}),Object(u.jsxs)("div",{className:"Action-log",children:[Object(u.jsx)("div",{className:"Action-log-space"}),Object(u.jsx)("div",{className:"Action-log-title",children:Object(u.jsx)("b",{children:"Action log"})}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:"18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!"}),Object(u.jsx)("li",{children:"18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!"}),Object(u.jsx)("li",{children:"18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!"})]})]}),Object(u.jsx)("div",{className:"Record",children:Object(u.jsx)(b,{})})]})]})}}]),n}(s.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})})),m()}},[[40,1,2]]]);
//# sourceMappingURL=main.3b1ffadf.chunk.js.map