(this.webpackJsonpcoffee=this.webpackJsonpcoffee||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s);a(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(1),i=a(2),l=a(3),d=a(4),h=function(e){var t=e.name,a=e.website,n=e.id,s=e.address;return r.a.createElement("div",{className:"tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"shops",src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null," ",t," "),r.a.createElement("p",null," ",a," "),r.a.createElement("p",null," ",s)))},u=function(e){var t=e.shops;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(h,{key:a,id:t[a].id,name:t[a].name,website:t[a].website,address:t[a].address})})))},m=[{id:1,name:"Ezra & Gil",address:"20 Hilton St, M1 1FR",website:"http://www.ezraandgil.com/"},{id:2,name:"Pot Kettle Black 2",address:"14 Barton Arcade, M3 2BW",website:"http://www.potkettleblackltd.co.uk/"},{id:3,name:"Takk",address:" 6 Tariff St, M1 2FF",website:"http://takkmcr.com/"},{id:4,name:"Fig + Sparrow",address:"20 Oldham St, M1 1JA",website:"currently unavailable"},{id:5,name:"Federal Cafe Bar",address:"194 Deansgate, M3 3ND",website:"http://www.federalcafe.co.uk/"},{id:6,name:"Black Sheep Piccadilly",address:"Unit 4A, Piccadilly Place, Aytoun St, M1 3BN",website:"http://www.leavetheherdbehind.com/"},{id:7,name:"Pot Kettle Black 1",address:"1 Hardman St, M3 3EB",website:"http://www.potkettleblackltd.co.uk/"},{id:8,name:"Ancoats Coffee Co.",address:"9, Royal Mill, 17 Redhill St, M4 5BA",website:"http://www.ancoats-coffee.co.uk/"},{id:9,name:"Black Coffee 2",address:"60 Spring Gardens,  M2 2BQ",website:"http://www.leavetheherdbehind.com/"},{id:10,name:"Just Between Friends",address:" 56 Tib St, M4 1LG",website:"http://www.justbetweenfriendscoffee.com/"}],w=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"tc pa1 ba b--brown bg-light-yellow",type:"search",placeholder:"search coffee shop",onChange:t}))},f=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(i.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Hopa. That is not great. sorry"):this.props.children}}]),a}(n.Component),p=(a(13),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onSearch=function(t){e.setState({searchfield:t.target.value})},e.state={shops:m,searchfield:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state.shops.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f-subheadline lh-title"}," Coffee Me Up "),r.a.createElement(w,{searchChange:this.onSearch}),r.a.createElement(f,null,r.a.createElement(u,{shops:t})))}}]),a}(r.a.Component));a(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.41fbde38.chunk.js.map