(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s}),a.d(t,"listQuery",function(){return l});var n=a(0),r=a.n(n),o=(a(238),a(199)),c=a(233);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext.tag,n=t.allItemJson,s=n.edges,l=n.totalCount;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,a),r.a.createElement("h4",{className:"tagResults"},"Results: ",l," Project",1===l?"":"s"),r.a.createElement("div",{className:"row"},s.map(function(e,t){return r.a.createElement("div",{className:"col-md-4 link",key:t},r.a.createElement(c.a,{mainId:e.node.mainId,backgroundImage:e.node.backgroundImage,backgroundColor:e.node.backgroundColor,color:e.node.color,description:e.node.description,tags:e.node.tags,date:e.node.date,startDate:e.node.startDate,endDate:e.node.endDate}))}))))},n}(n.Component),l="847453976"},196:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(197),a(9).default.enqueue,r.a.createContext({})},197:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},198:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(203),a(196)),c=a(204),s=a.n(c),l=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-logo"},r.a.createElement("img",{src:"https://adventures.bodiewebdesign.com/_photos/logo.jpg",alt:"Logo",className:"img-fluid"}),r.a.createElement("h1",{"data-testid":"header-title"},"Adam's Adventures"),r.a.createElement(o.a,{to:"/pages"},r.a.createElement(s.a,{className:"icon",name:"home"})),r.a.createElement(o.a,{to:"/tags"},r.a.createElement(s.a,{className:"icon",name:"tags"}))))},i=a(205);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Adam's Adventures"),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),r.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap",rel:"stylesheet"})),r.a.createElement(l,null),t)}},233:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(196),c=(a(201),a(210)),s=a.n(c);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.date;return s()(e).isBetween(s.a.now()-12096e6,s.a.now())&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null),r.a.createElement("h6",null,"New"))},n}(n.Component);var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.description,a=e.color,n=e.startDate,o=e.endDate,c=e.date,l=function(e){return s()(e).format("MMMM DD, YYYY")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:a,fontWeight:"bold"}},t),s()(c).isValid()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:a}},"Visit: ",l(n)," ",!s()(n).isSame(o)&&" to "+l(o)),r.a.createElement("p",{style:{color:a}},"Added: ",l(c))))},n}(n.Component);a.d(t,"a",function(){return u});var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.backgroundImage,a=e.color,n=e.backgroundColor,c=e.description,s=e.mainId,u=e.date,p=e.startDate,d=e.endDate,m={backgroundImage:"url('https://adventures.bodiewebdesign.com/_photos/links/adventure"+s+".jpg')",backgroundSize:"cover",backgroundPosition:"top"};return r.a.createElement(o.a,{to:"/"+t},r.a.createElement("div",{className:"flip-card"},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front",style:m},r.a.createElement(l,{date:u})),r.a.createElement("div",{className:"flip-card-back",style:{backgroundColor:n}},r.a.createElement(i,{description:c,color:a,startDate:p,endDate:d,date:u})))))},n}(n.Component)}}]);
//# sourceMappingURL=component---src-components-tags-js-bd8c998779db59a1ac19.js.map