(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l}),a.d(t,"listQuery",function(){return s});var n=a(0),r=a.n(n),o=(a(211),a(202)),c=a(237);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext.type,n=t.allItemJson,l=n.edges,s=n.totalCount;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,a),r.a.createElement("h4",{className:"tagResults"},"Results: ",s," Project",1===s?"":"s"),r.a.createElement("div",{className:"row"},l.map(function(e,t){var a=e.node,n=a.mainId,o=a.backgroundImage,l=a.backgroundColor,s=a.color,i=a.description,u=a.date,m=a.startDate,p=a.endDate,d=a.isExternal;return r.a.createElement("div",{className:"col-md-4 link",key:t},r.a.createElement(c.a,{mainId:n,backgroundImage:o,backgroundColor:l,color:s,description:i,isExternal:d,date:u,startDate:m,endDate:p}))}))))},n}(n.Component),s="3290768157"},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(199),a(9).default.enqueue,r.a.createContext({})},199:function(e,t,a){var n;e.exports=(n=a(201))&&n.default||n},201:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},202:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(50),a(205),a(207),a(198)),c=a(206),l=a.n(c),s=a(208),i=a.n(s),u=[{link:"/pages",name:"home",data:"Home"},{link:"/tags/location",name:"globe",data:"Tags By Location"},{link:"/tags/type",name:"tags",data:"Tags By Type"}],m=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-logo"},r.a.createElement("img",{src:"https://adventures.bodiewebdesign.com/_photos/logo.jpg",alt:"Logo",className:"img-fluid"}),r.a.createElement("h1",{"data-testid":"header-title"},"Adam's Adventures"),u.map(function(e,t){return r.a.createElement(o.a,{key:t,to:e.link},r.a.createElement(l.a,{className:"icon",name:e.name,"data-tip":e.data}))})),r.a.createElement(i.a,null))},p=a(209);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Adam's Adventures"),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap",rel:"stylesheet"})),r.a.createElement(m,null),t)}},237:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(200),a(213)),c=a.n(o);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.date;return c()(e).isBetween(c.a.now()-12096e5,c.a.now())&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null),r.a.createElement("h6",null,"New"))},n}(n.Component);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.description,a=e.color,n=e.startDate,o=e.endDate,l=e.date,s=function(e){return c()(e).format("MMMM DD, YYYY")},i={color:a};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:i},r.a.createElement("strong",null,t)),c()(l).isValid()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:i},"Visit: ",s(n)," ",!c()(n).isSame(o)&&" to "+s(o)),r.a.createElement("p",{style:i},"Added: ",s(l))))},n}(n.Component),i=function(e){var t=e.backgroundImage,a=e.card;return r.a.createElement("a",{href:"http://"+t+".bodiewebdesign.com"},a)},u=a(198),m=function(e){var t=e.backgroundImage,a=e.card;return r.a.createElement(u.a,{to:"/"+t},a)};a.d(t,"a",function(){return p});var p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.backgroundImage,a=e.color,n=e.backgroundColor,o=e.description,c=e.mainId,u=e.date,p=e.startDate,d=e.endDate,g=e.isExternal,f={backgroundImage:"url('https://adventures.bodiewebdesign.com/_photos/links/adventure"+c+".jpg')",backgroundSize:"cover",backgroundPosition:"top"},E=r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front",style:f},r.a.createElement(l,{date:u})),r.a.createElement("div",{className:"flip-card-back",style:{backgroundColor:n}},r.a.createElement(s,{description:o,color:a,startDate:p,endDate:d,date:u}))));return r.a.createElement(r.a.Fragment,null,g?r.a.createElement(i,{backgroundImage:t,card:E}):r.a.createElement(m,{backgroundImage:t,card:E}))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-components-tags-by-type-js-9bdb7fb9cb2ace4f4852.js.map