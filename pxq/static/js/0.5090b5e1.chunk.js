webpackJsonp([0],{497:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=n(6),l=n.n(p),i=n(499),c=(n.n(i),n(174)),A=n(175),s=n(501),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isShowMenu:!1},n.changeMenuState=function(e){n.setState({isShowMenu:!0})},n}return a(t,e),m(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"people"},l.a.createElement(A.a,{isShowMenu:this.state.isShowMenu,changeMenuState:this.changeMenuState,checkName:"people"}),l.a.createElement("div",{className:"people__nav"},l.a.createElement("p",{className:"fl"},l.a.createElement("span",null,"\u70ed\u95e8")),l.a.createElement("p",{className:"fr"},"\u5173\u6ce8")),l.a.createElement(s.a,null),this.state.isShowMenu&&l.a.createElement(c.a,null))}}]),t}(p.Component);t.default=u},499:function(e,t,n){var o=n(500);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0;n(496)(o,r);o.locals&&(e.exports=o.locals)},500:function(e,t,n){t=e.exports=n(495)(!0),t.push([e.i,".people .people__nav{overflow:hidden;padding-top:.4rem;background-color:#3748ac}.people .people__nav p{width:50%;text-align:center;font-size:.4rem;color:#fff}.people .people__nav p span{display:inline-block;border-bottom:.053333rem solid;padding:0 .133333rem .133333rem}","",{version:3,sources:["C:/Users/Administrator/Desktop/github_project/react-app/src/pages/people/people.less"],names:[],mappings:"AAAA,qBACE,gBAAiB,AACjB,kBAAoB,AACpB,wBAA0B,CAC3B,AAED,uBACE,UAAW,AACX,kBAAmB,AACnB,gBAAkB,AAClB,UAAY,CACb,AAED,4BACE,qBAAsB,AACtB,+BAAiC,AACjC,+BAAmC,CACpC",file:"people.less",sourcesContent:[".people .people__nav {\n  overflow: hidden;\n  padding-top: 0.4rem;\n  background-color: #3748ac;\n}\n\n.people .people__nav p {\n  width: 50%;\n  text-align: center;\n  font-size: 0.4rem;\n  color: #fff;\n}\n\n.people .people__nav p span {\n  display: inline-block;\n  border-bottom: 0.053333rem solid;\n  padding: 0 0.133333rem 0.133333rem;\n}"],sourceRoot:""}])},501:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(e){var t=e.item||{};return A.a.createElement("li",{className:"fl"},A.a.createElement("img",{src:t.avatarImg,alt:""}),A.a.createElement("div",{className:"people__wrap"},A.a.createElement("p",{className:"people__title"},t.title),A.a.createElement("p",{className:"people__portrait fl"},A.a.createElement("span",null),t.nickname),A.a.createElement("p",{className:"people__portrait fr"},A.a.createElement("span",{className:"people__like"},A.a.createElement("img",{src:d.a,alt:""})),t.likeNum)))}function l(e){var t=e.list,n=t.map(function(e,t){return A.a.createElement(p,{key:t.toString(),item:e})});return A.a.createElement("ul",{className:"fl"},n)}function i(e){var t=e.list,n=t.map(function(e,t){return A.a.createElement(p,{key:t.toString(),item:e})});return A.a.createElement("ul",{className:"fr"},n)}var c=n(6),A=n.n(c),s=n(173),m=n(502),u=(n.n(m),n(504)),d=n.n(u),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={peopleData:{}},n.getPeopleData(),n}return a(t,e),f(t,[{key:"getPeopleData",value:function(){var e=this;s.a.get("/peopleData").then(function(t){var n=t.data.data;e.setState({peopleData:n})})}},{key:"render",value:function(){return A.a.createElement("div",{className:"people__content"},this.state.peopleData.list&&A.a.createElement(l,{list:this.state.peopleData.list}),this.state.peopleData.list&&A.a.createElement(i,{list:this.state.peopleData.list}))}}]),t}(c.Component);t.a=_},502:function(e,t,n){var o=n(503);"string"===typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0;n(496)(o,r);o.locals&&(e.exports=o.locals)},503:function(e,t,n){t=e.exports=n(495)(!0),t.push([e.i,".people__content{padding:.333333rem .4rem;background-color:#ededed}.people__content ul{width:45%}.people__content li{width:100%;margin-bottom:.293333rem;border-radius:.066667rem}.people__content li img{width:100%}.people__content li .people__wrap{overflow:hidden;padding:.266667rem .2rem .333333rem;background-color:#fff}.people__content li .people__wrap .people__title{padding-bottom:.266667rem;font-size:.293333rem}.people__content li .people__wrap .people__portrait{font-size:.16rem}.people__content li .people__wrap .people__portrait span{display:inline-block;width:.533333rem;height:.533333rem;margin-right:.16rem;vertical-align:middle;background-color:#3748ac;border-radius:.533333rem}.people__content li .people__wrap .people__portrait .people__like{background-color:#fff}","",{version:3,sources:["C:/Users/Administrator/Desktop/github_project/react-app/src/pages/people/components/content/content.less"],names:[],mappings:"AAAA,iBACE,yBAA4B,AAC5B,wBAA0B,CAC3B,AAED,oBACE,SAAW,CACZ,AAED,oBACE,WAAY,AACZ,yBAA2B,AAC3B,wBAA2B,CAC5B,AAED,wBACE,UAAY,CACb,AAED,kCACE,gBAAiB,AACjB,oCAA+C,AAC/C,qBAAuB,CACxB,AAED,iDACE,0BAA4B,AAC5B,oBAAuB,CACxB,AAED,oDACE,gBAAmB,CACpB,AAED,yDACE,qBAAsB,AACtB,iBAAmB,AACnB,kBAAoB,AACpB,oBAAsB,AACtB,sBAAuB,AACvB,yBAA0B,AAC1B,wBAA2B,CAC5B,AAED,kEACE,qBAAuB,CACxB",file:"content.less",sourcesContent:[".people__content {\n  padding: 0.333333rem 0.4rem;\n  background-color: #ededed;\n}\n\n.people__content ul {\n  width: 45%;\n}\n\n.people__content li {\n  width: 100%;\n  margin-bottom: 0.293333rem;\n  border-radius: 0.066667rem;\n}\n\n.people__content li img {\n  width: 100%;\n}\n\n.people__content li .people__wrap {\n  overflow: hidden;\n  padding: 0.266667rem 0.2rem 0.333333rem 0.2rem;\n  background-color: #fff;\n}\n\n.people__content li .people__wrap .people__title {\n  padding-bottom: 0.266667rem;\n  font-size: 0.293333rem;\n}\n\n.people__content li .people__wrap .people__portrait {\n  font-size: 0.16rem;\n}\n\n.people__content li .people__wrap .people__portrait span {\n  display: inline-block;\n  width: 0.533333rem;\n  height: 0.533333rem;\n  margin-right: 0.16rem;\n  vertical-align: middle;\n  background-color: #3748ac;\n  border-radius: 0.533333rem;\n}\n\n.people__content li .people__wrap .people__portrait .people__like {\n  background-color: #fff;\n}"],sourceRoot:""}])},504:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNDEwY2FkMS02OWRhLTRjZDEtOGFlNC05MWYzNTQ1Y2M1YTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkNFREM0NUZFRUU5MTFFOEJCNDNBREU1RTNEREJENjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkNFREM0NUVFRUU5MTFFOEJCNDNBREU1RTNEREJENjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzNmNWRjMmItZjE2Yi00ZDBiLWEzMTAtMDEzNTYwMTM2MmU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmQ0MTBjYWQxLTY5ZGEtNGNkMS04YWU0LTkxZjM1NDVjYzVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmvrX18AAAKSSURBVHja7JjfS1VBEMfPyX6aea1ILcssoYSKfhCUChUFYWJPKv3QhygC/ycfhewhCDQigiAptQdRNOgXQigmYoWalKLo7TsxB9Zp9pz1nhNo3IEPl7O7d893d2dn5l4/nU57a8k2eGvMsoLWnaCNssH3fW1cETgFSkEKLIMfYBQMgQked9AYl88LngEjPO6znFheKv+vhpWCtoMacJy6Qhb2HmwG5REbQIIe82JWLWgPuA12Jnwqs6AdjGuCbD6U+4/EkO0AN0Ge1mnboQY+JtPGQC9/kh0A1WCvGDcMengcTbYfVCnH+QE8dDkycuAW4TP94Ak784rh4By4wn3PwIC2cHAVVJr+DFrx/vHQWwY7KcSMWcQEk77hXVkCU5ZjonHPQQnfwEDkicCXwnzosHjutogx7VuIGFNUd8S7VEEFylVNykbEc8pF0BaxqvkEBc2HvMsq6JdwxlSCggpC3mUV9FU8H0lQ0DHxPOkiaFg8X+AUEtfyOW6Z9tFFEMWRBRFZm2yR1dGKwR3OAKY/DbkI+glei7Z94B7YnYEYCpz3wS7R/srVhzwWJI+O8tpdTgUuRhfiMrgGckTfO04vzrnM43KiQXFqOs5H4FNE4VcHzih9g6CDI/uq6yGa+Do4LSalyN1pyVuUjhrBUWUh9J23cQq0YOsvgYtKKngJuoy2rVxalCl++QB8iVsxmnYW1Cp+1weecmho5nLXtGnQBr6rCS6GILIKUA82iXbyp0IlEk+ymFlrxo0pyOPy4RbYFjFulEvVudASIAFBQb3dpOyIGYHpJi5GTZSUoCCCaz4zwLdp2WWSJAUFt+oGOGQE1Bd8A71MBP1pMMnwxyYF0POZfFm+38/+HZMV9L8J+i3AALtb4VYvxlyZAAAAAElFTkSuQmCC"}});