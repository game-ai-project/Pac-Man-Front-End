(this["webpackJsonpapp-dir"]=this["webpackJsonpapp-dir"]||[]).push([[0],{22:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(9),a=c.n(n),o=(c(22),c(23),c(10)),l=c(11),r=c(13),d=c(12),j=(c(8),c(0)),u=function(e){Object(r.a)(c,e);var t=Object(d.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).recognise=function(){s.setState({isListening:!0}),s._recognizer.lang=s.state.lang,s._recognizer.start()},s.handleTextChange=function(e){s.setState({text:e.target.value})},s.state={supported:!0,lang:e.lang||"en-US",autoPlay:!1,isListening:!1},s}return Object(l.a)(c,[{key:"componentWillMount",value:function(){var e=window.SpeechRecognition||window.webkitSpeechRecognition;this._recognizer=new e,console.log(this._recognizer)}},{key:"componentDidMount",value:function(){this.state.supported&&this.state.autoPlay}},{key:"render",value:function(){var e=this.state,t=(e.text,e.isListening);return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("button",{disabled:t,onClick:this.recognise,className:"rounded-corner",children:"Record"})]})}}]),c}(s.Component);var b=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"Twitch-view",children:Object(j.jsx)("iframe",{src:"https://player.twitch.tv/?channel=dep_ow&parent=game-ai-project.github.io&muted=true",height:"720",width:"720",allowfullscreen:!0})}),Object(j.jsxs)("div",{className:"User-interface",children:[Object(j.jsxs)("div",{className:"Instruction",children:[Object(j.jsx)("div",{className:"Instruction-space"}),Object(j.jsx)("div",{className:"Instruction-title",children:Object(j.jsx)("b",{children:"Instruction"})}),Object(j.jsx)("div",{className:"Instruction-1",children:"The game will be automatically played by Al.By cheering/boo with your own voice, you can give advantages/disadvantages to Ms PAC-MAN"}),Object(j.jsx)("div",{className:"Instruction-space"}),Object(j.jsxs)("div",{className:"Instruction-2",children:["Press the ",Object(j.jsx)("b",{children:'"Record"'})," button and cheer/ooo with your passionate voicel"]})]}),Object(j.jsxs)("div",{className:"Audio-settings",children:[Object(j.jsx)("div",{className:"Audio-space"}),Object(j.jsx)("div",{className:"Audio-title",children:Object(j.jsx)("b",{children:"Audio settings"})}),Object(j.jsxs)("div",{className:"Audio-items",children:[Object(j.jsxs)("div",{className:"toggle_button",children:[Object(j.jsx)("input",{id:"toggle",class:"toggle_input",type:"checkbox"}),Object(j.jsx)("label",{for:"toggle",class:"toggle_label"})]}),Object(j.jsx)("div",{className:"Audio-1",children:"Turn on/off background music"})]}),Object(j.jsx)("div",{className:"Audio-volume",children:"Volume"}),Object(j.jsxs)("div",{className:"Volume-slider",children:[Object(j.jsx)("div",{children:"0"}),Object(j.jsx)("input",{type:"range",name:"speed",min:"0",max:"100"}),Object(j.jsx)("div",{children:"100"})]})]}),Object(j.jsxs)("div",{className:"Action-log",children:[Object(j.jsx)("div",{className:"Action-log-space"}),Object(j.jsx)("div",{className:"Action-log-title",children:Object(j.jsx)("b",{children:"Action log"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!"}),Object(j.jsx)("li",{children:"18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!"}),Object(j.jsx)("li",{children:"18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!"})]})]}),Object(j.jsx)("div",{className:"Record",children:Object(j.jsx)(u,{})})]})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})})),h()},8:function(e,t,c){}},[[30,1,2]]]);
//# sourceMappingURL=main.b72f521f.chunk.js.map