(this["webpackJsonpapp-dir"]=this["webpackJsonpapp-dir"]||[]).push([[0],{21:function(e,t,n){},34:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(22),a=n.n(i),o=(n(34),n(2)),r=n(3),l=n(4),d=n(5),u=(n(43),n(24)),j=(n(21),n(0)),b=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).recognise=function(){0==s.state.isListening&&(s.setState({isListening:!0}),s._recognizer.lang=s.state.lang,s._recognizer.start())},s.state={lang:e.lang||"en-US",isListening:!1},s}return Object(r.a)(n,[{key:"componentWillMount",value:function(){var e=this,t=window.SpeechRecognition||window.webkitSpeechRecognition,n=new u.w3cwebsocket("wss://28fe-133-19-43-10.jp.ngrok.io");this._recognizer=new t,this._recognizer.onend=function(t){e.setState({isListening:!1})},this._recognizer.onresult=function(e){n.onopen=function(){console.log("WebSocket Client Connected")},console.log(e.results[0][0].transcript)},console.log(this._recognizer)}},{key:"render",value:function(){var e=this.state.isListening;return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("button",{disabled:e,onClick:this.recognise,className:"rounded-corner",children:"Record"})]})}}]),n}(s.Component),h=n(25),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)(h.a,{channel:"petepittawat",width:"100%",height:"100%",muted:this.props.muted,hideControls:!0,parent:["codesandbox.io","localhost"]})}}]),n}(s.Component),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).handleChange=function(e){0==s.state.muted?s.setState({muted:!0}):s.setState({muted:!1})},s.state={muted:!0},s}return Object(r.a)(n,[{key:"render",value:function(){this.state.muted;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"Twitch-view",children:Object(j.jsx)(g,{muted:this.state.muted})}),Object(j.jsxs)("div",{className:"User-interface",children:[Object(j.jsxs)("div",{className:"Instruction",children:[Object(j.jsx)("div",{className:"Instruction-space"}),Object(j.jsx)("div",{className:"Instruction-title",children:Object(j.jsx)("b",{children:"Instruction"})}),Object(j.jsx)("div",{className:"Instruction-1",children:"The game will be automatically played by Al.By cheering/boo with your own voice, you can give advantages/disadvantages to Ms PAC-MAN"}),Object(j.jsx)("div",{className:"Instruction-space"}),Object(j.jsxs)("div",{className:"Instruction-2",children:["Press the ",Object(j.jsx)("b",{children:'"Record"'})," button and cheer/boo with your passionate voicel"]})]}),Object(j.jsxs)("div",{className:"Audio-settings",children:[Object(j.jsx)("div",{className:"Audio-space"}),Object(j.jsx)("div",{className:"Audio-title",children:Object(j.jsx)("b",{children:"Audio settings"})}),Object(j.jsxs)("div",{className:"Audio-items",children:[Object(j.jsxs)("div",{className:"toggle_button",children:[Object(j.jsx)("input",{id:"toggle",class:"toggle_input",type:"checkbox",onChange:this.handleChange}),Object(j.jsx)("label",{for:"toggle",class:"toggle_label"})]}),Object(j.jsx)("div",{className:"Audio-1",children:"Turn on/off background music"})]})]}),Object(j.jsx)("div",{className:"Record",children:Object(j.jsx)(b,{})})]})]})}}]),n}(s.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})})),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.c24a91fb.chunk.js.map