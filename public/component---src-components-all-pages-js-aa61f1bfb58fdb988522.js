(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(e,t,a){"use strict";a.r(t);a(67),a(13);var n=a(0),r=a.n(n),o=(a(201),a(246),a(199)),c=a(233),l=(a(96),a(136),a(196));var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.prevPage,a=e.numPages,n=e.nextPage;return r.a.createElement("div",{className:"paginate"},r.a.createElement("ul",{className:"paginate-pages"},r.a.createElement("li",null,r.a.createElement(l.a,{to:"/pages/"+(t>0?t:"/"),rel:"prev"},"← Prev")),Array.from({length:a},function(e,t){return r.a.createElement("li",{key:"pagination-number"+(t+1)},r.a.createElement(l.a,{to:"/pages/"+(0===t?"":t+1),activeStyle:{backgroundColor:"#7a859a"}},t+1))}),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/pages/"+(n>a?a:n),rel:"next"},"Next →"))))},n}(n.Component);a.d(t,"default",function(){return i}),a.d(t,"listQuery",function(){return p});var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext,n=t.allItemJson.edges,l=a.currentPage,i=a.numPages,p=l-1==1?"/":(l-1).toString(),u=(l+1).toString();return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{className:"row"},n.map(function(e,t){return r.a.createElement("div",{className:"col-lg-4",key:t},r.a.createElement(c.a,{mainId:e.node.mainId,backgroundImage:e.node.backgroundImage,backgroundColor:e.node.backgroundColor,color:e.node.color,description:e.node.description,tags:e.node.tags,date:e.node.date,startDate:e.node.startDate,endDate:e.node.endDate}))})),r.a.createElement(s,{prevPage:p,numPages:i,nextPage:u})))},n}(n.Component),p="928667558"},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(197),a(9).default.enqueue,r.a.createContext({})},197:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},198:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(203),a(196)),c=a(204),l=a.n(c),s=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-logo"},r.a.createElement("img",{src:"https://adventures.bodiewebdesign.com/_photos/logo.jpg",alt:"Logo",className:"img-fluid"}),r.a.createElement("h1",{"data-testid":"header-title"},"Adam's Adventures"),r.a.createElement(o.a,{to:"/pages"},r.a.createElement(l.a,{className:"icon",name:"home"})),r.a.createElement(o.a,{to:"/tags"},r.a.createElement(l.a,{className:"icon",name:"tags"}))))},i=a(205);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Adam's Adventures"),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap",rel:"stylesheet"})),r.a.createElement(s,null),t)}},233:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(196),c=(a(201),a(210)),l=a.n(c);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.date;return l()(e).isBetween(l.a.now()-12096e6,l.a.now())&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null),r.a.createElement("h6",null,"New"))},n}(n.Component);var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.description,a=e.color,n=e.startDate,o=e.endDate,c=e.date,s=function(e){return l()(e).format("MMMM DD, YYYY")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:a,fontWeight:"bold"}},t),l()(c).isValid()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:a}},"Visit: ",s(n)," ",!l()(n).isSame(o)&&" to "+s(o)),r.a.createElement("p",{style:{color:a}},"Added: ",s(c))))},n}(n.Component);a.d(t,"a",function(){return p});var p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.backgroundImage,a=e.color,n=e.backgroundColor,c=e.description,l=e.mainId,p=e.date,u=e.startDate,m=e.endDate,d={backgroundImage:"url('https://adventures.bodiewebdesign.com/_photos/links/adventure"+l+".jpg')",backgroundSize:"cover",backgroundPosition:"top"};return r.a.createElement(o.a,{to:"/"+t},r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front",style:d},r.a.createElement(s,{date:p})),r.a.createElement("div",{className:"flip-card-back",style:{backgroundColor:n}},r.a.createElement(i,{description:c,color:a,startDate:u,endDate:m,date:p})))))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-components-all-pages-js-aa61f1bfb58fdb988522.js.map