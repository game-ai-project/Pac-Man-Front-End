(this["webpackJsonpapp-dir"]=this["webpackJsonpapp-dir"]||[]).push([[0],{23:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(10),a=s.n(n),l=(s(23),s(24),s(35),s(11)),o=s(12),d=s(14),r=s(13),j=(s(9),s(0)),h=function(e){Object(d.a)(s,e);var t=Object(r.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).speak=function(){c._speech.text=c.state.text,c._speech.lang=c.state.lang,c.setState({isSpeeking:!0}),window.speechSynthesis.speak(c._speech)},c.stop=function(){window.speechSynthesis.cancel()},c.handleTextChange=function(e){c.setState({text:e.target.value})},c.state={supported:!0,lang:e.lang||"en-US",text:"How many Emo kids does it take to screw in a lightbulb?\nNone, they all sit in the dark and cry",autoPlay:!1,isSpeeking:!1},c}return Object(o.a)(s,[{key:"componentWillMount",value:function(){var e=this;"speechSynthesis"in window?(this._speech=new SpeechSynthesisUtterance,this._speech.onend=function(){return e.setState({isSpeeking:!1})}):this.setState({supported:!1})}},{key:"componentDidMount",value:function(){this.state.supported&&this.state.autoPlay&&this.speak()}},{key:"render",value:function(){var e=this.state,t=(e.text,e.isSpeeking);return Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("button",{disabled:t,onClick:this.speak,children:"Speak"})]})}}]),s}(c.Component);var u=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"Twitch-view",children:Object(j.jsx)("iframe",{src:"https://player.twitch.tv/?channel=dep_ow&parent=game-ai-project.github.io&muted=true",height:"720",width:"720",allowfullscreen:!0})}),Object(j.jsxs)("div",{className:"User-interface",children:[Object(j.jsxs)("div",{className:"Instruction",children:[Object(j.jsx)("div",{className:"Instruction-space"}),Object(j.jsx)("div",{className:"Instruction-title",children:Object(j.jsx)("b",{children:"Instruction"})}),Object(j.jsx)("div",{className:"Instruction-1",children:"The game will be automatically played by Al.By cheering/boo with your own voice, you can give advantages/disadvantages to Ms PAC-MAN"}),Object(j.jsx)("div",{className:"Instruction-space"}),Object(j.jsxs)("div",{className:"Instruction-2",children:["Press the ",Object(j.jsx)("b",{children:'"Record"'})," button and cheer/ooo with your passionate voicel"]})]}),Object(j.jsxs)("div",{className:"Audio-settings",children:[Object(j.jsx)("div",{className:"Audio-space"}),Object(j.jsx)("div",{className:"Audio-title",children:Object(j.jsx)("b",{children:"Audio settings"})}),Object(j.jsxs)("div",{className:"Audio-items",children:[Object(j.jsxs)("div",{className:"toggle_button",children:[Object(j.jsx)("input",{id:"toggle",class:"toggle_input",type:"checkbox"}),Object(j.jsx)("label",{for:"toggle",class:"toggle_label"})]}),Object(j.jsx)("div",{className:"Audio-1",children:"Turn on/off background music"})]}),Object(j.jsx)("div",{className:"Audio-volume",children:"Volume"}),Object(j.jsxs)("div",{className:"Volume-slider",children:[Object(j.jsx)("div",{children:"0"}),Object(j.jsx)("input",{type:"range",name:"speed",min:"0",max:"100"}),Object(j.jsx)("div",{children:"100"})]})]}),Object(j.jsxs)("div",{className:"Action-log",children:[Object(j.jsx)("div",{className:"Action-log-space"}),Object(j.jsx)("div",{className:"Action-log-title",children:Object(j.jsx)("b",{children:"Action log"})}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!"}),Object(j.jsx)("li",{children:"18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!"}),Object(j.jsx)("li",{children:"18/11/2022 10:00:32 Ms. PAC-MAN Get Boo!"})]})]}),Object(j.jsx)("div",{className:"Record",children:Object(j.jsx)(h,{})})]})]})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};a.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(u,{})})),b()},9:function(e,t,s){}},[[41,1,2]]]);
//# sourceMappingURL=main.844ba53e.chunk.js.map