(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{436:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(439),c=n.n(o),i=n(29),s=Object(i.b)(function(t){return{error:t.app.error}})(function(t){var e=t.error;return r.a.createElement(c.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:!!e,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Error. Please try again")})}),u=n(117),l=n.n(u),m=n(24),p=n.n(m),f=n(40),b=n.n(f),d=n(171),h=n.n(d),g=n(61),y=n(438),k=n.n(y),v=n(435),E=n.n(v),w=n(157),O="b51df88e361c4665a2ad4912378a67f1",j=n(23),S=n(42);function P(t){return(P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function L(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function U(t,e){return!e||"object"!==P(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function D(t){return(D=Object.getPrototypeOf||function(t){return t.__proto__})(t)}var F=j.a.startLoading,I=j.a.errorCaught,x=j.a.stopLoading,N=function(t){function e(){var t,n,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return U(a,(n=a=U(this,(t=D(e)).call.apply(t,[this].concat(o))),a.state={input:"",searchLimit:30},a.handleChange=function(t){a.setState({input:t.target.value})},a.search=function(){a.props.startLoading();var t=a.state,e=t.input,n=t.searchLimit;l.a.all([l.a.get("https://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(e,"&api_key=").concat(O,"&format=json&limit=").concat(n)),l.a.get("https://ws.audioscrobbler.com/2.0/?method=album.search&album=".concat(e,"&api_key=").concat(O,"&format=json&limit=").concat(n)),l.a.get("https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=".concat(e,"&api_key=").concat(O,"&format=json&limit=").concat(n))]).then(l.a.spread(function(t,e,n){a.props.musicFound({tracks:a.addUUID(t.data.results.trackmatches.track),albums:a.addUUID(e.data.results.albummatches.album),artists:a.addUUID(n.data.results.artistmatches.artist)}),a.props.stopLoading()})).catch(function(t){a.props.errorCaught(t)})},n))}var n,o,c;return n=e,(o=[{key:"addUUID",value:function(t){return t.map(function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){_(t,e,n[e])})}return t}({},t,{uuid:E()()})})}},{key:"render",value:function(){var t=this,e=this.props.classes;return r.a.createElement(a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement(b.a,{className:e.Paper},r.a.createElement(p.a,{variant:"display1",align:"center",gutterBottom:!0,className:e.padding},"Start Searching Music"),r.a.createElement(k.a,{onClick:this.search}),r.a.createElement(h.a,{className:e.margin,value:this.state.input,id:"input-with-icon-textfield",label:"Start searching",onChange:this.handleChange,onKeyPress:function(e){"Enter"===e.key&&(t.search(),e.preventDefault())}})))}}])&&L(n.prototype,o),c&&L(n,c),function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");C(t.prototype,e&&e.prototype),e&&C(t,e)}(e,t),e}(a.Component),T=Object(g.withStyles)(function(t){return{Paper:{margin:2*t.spacing.unit,padding:20,textAlign:"center"},margin:{margin:t.spacing.unit},padding:{paddingTop:15,paddingBottom:15}}})(N),A=Object(i.b)(null,{musicFound:S.d,startLoading:F,errorCaught:I,stopLoading:x})(T),B=n(434);var J=Object(i.b)(function(t){return{tracks:t.musicSearch.tracks,albums:t.musicSearch.albums,artists:t.musicSearch.artists}})(function(t){return r.a.createElement(a.Fragment,null,t.tracks.length>0&&r.a.createElement(B.a,{tracks:t.tracks,name:"tracks"}),t.albums.length>0&&r.a.createElement(B.a,{tracks:t.albums,name:"albums"}),t.artists.length>0&&r.a.createElement(B.a,{tracks:t.artists,name:"artists"}))});e.default=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(s,null),r.a.createElement(A,null),r.a.createElement(J,null),r.a.createElement("br",null),r.a.createElement("div",null))}}}]);
//# sourceMappingURL=2.e9a07f86.chunk.js.map