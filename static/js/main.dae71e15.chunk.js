(this["webpackJsonpreact-clicky-game"]=this["webpackJsonpreact-clicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"/React-Clicky-Game/images/Ahsoka.jpg"},{"id":2,"name":"/React-Clicky-Game/images/babyyodes.jpg"},{"id":3,"name":"/React-Clicky-Game/images/bb8.jpg"},{"id":4,"name":"/React-Clicky-Game/images/bobafett.jpg"},{"id":5,"name":"/React-Clicky-Game/images/c3po.jpg"},{"id":6,"name":"/React-Clicky-Game/images/darthV.jpg"},{"id":7,"name":"/React-Clicky-Game/images/Kyloren.jpg"},{"id":8,"name":"/React-Clicky-Game/images/millenniumf.jpg"},{"id":9,"name":"/React-Clicky-Game/images/r2d2.jpg"},{"id":10,"name":"/React-Clicky-Game/images/rey.jpg"},{"id":11,"name":"/React-Clicky-Game/images/stormt.jpg"},{"id":12,"name":"/React-Clicky-Game/images/walkers.jpg"}]')},,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(3),r=t.n(i),s=(t(13),t(14),t(4)),l=t(5),m=t(7),o=t(6),u=(t(15),function(e){return c.a.createElement("div",{className:"navbar "},c.a.createElement("div",null,"Clicky Game"),c.a.createElement("div",{className:e.navMsgColor},e.navMessage),c.a.createElement("div",null,"Score: ",e.score," ",c.a.createElement("span",{className:"pipe"},"|")," High Score:"," ",e.highScore))}),g=(t(16),t(17),function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.clickEvent(e.id)}},c.a.createElement("img",{className:"card-img-top card-height",src:e.name,alt:""}))}),d=function(e){return c.a.createElement("div",{className:e.shake?"container d-flex flex-wrap justify-content-center shake":"container d-flex flex-wrap justify-content-center"},e.characters.map((function(a,t){return c.a.createElement(g,{name:a.name,id:a.id,key:t,clickEvent:e.clickEvent})})))},k=(t(18),function(){return c.a.createElement("div",{className:"footer text-center"},"Juliana Hernandez")}),f=(t(19),function(){return c.a.createElement("div",{className:"banner text-center d-flex align-items-center justify-content-center"},c.a.createElement("p",{className:"m-0"},"Click on an image to earn points, but do not click on any image more than once or you lose!"))}),h=t(1),p=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=a.call.apply(a,[this].concat(c))).state={score:0,highScore:0,images:h,navMessage:"Click a Star Wars image to begin!"},e.clickEvent=function(a){var t,n=h.map((function(t){return t.id===a&&(t.clicked?e.setState({score:0}):(e.setState({score:e.state.score+1}),e.state.score>=e.state.highScore&&e.setState({highScore:e.state.highScore+1}),t.clicked=!0)),t}));t=(t=0===e.state.score?h:n).sort((function(){return Math.random()-.5})),e.setState({images:t})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state;return c.a.createElement("div",null,c.a.createElement(u,{score:e.score,highScore:e.highScore,navMessage:e.navMessage,navMsgColor:e.navMsgColor}),c.a.createElement(f,null),c.a.createElement(d,{shake:e.shake,characters:e.images,clickEvent:this.clickEvent}),c.a.createElement(k,null))}}]),t}(n.Component);var v=function(){return c.a.createElement(p,null)};r.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.dae71e15.chunk.js.map