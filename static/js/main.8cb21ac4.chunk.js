(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,a){e.exports=a(76)},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),o=a(0),c=a.n(o),i=a(10),l=a(98),u=a(96),s=a(48),p=a(27),d=a.n(p),m=Object(s.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},overrides:{MuiAppBar:{root:{background:"#fff !important"}}},palette:{background:{default:"#fff"}}}),g=Object(s.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},palette:{type:"dark",background:{default:d.a[900],paper:d.a[800]}},overrides:{MuiAppBar:{root:{background:"transparent !important"}},MuiTable:{root:{background:"transparent !important"}},MuiTypography:{root:{color:d.a[400]}}}}),f=a(37),b=a(31),h=a(30),v=a.n(h),j=a(39),E=a(49),O=a(23),x=a.n(O),y=function(e){var t=Object(o.useState)({collapseStringsAfterLength:25,displayDataTypes:!1,displayObjectSize:!1,indentWidth:2,name:!1}),a=Object(i.a)(t,1)[0],n=function(t){e.onChange&&e.onChange(t.updated_src)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,Object.assign({theme:e.reactJsonTheme,src:e.json},a,{onEdit:n,onAdd:n,onDelete:n})))},k=a(44),T=a.n(k),w=a(97),S=a(90),M=a(91),C=a(92),J=a(95),B=a(93),R=a(20),z=a(45),A=a.n(z),D=a(46),q=a.n(D);var I=function(e){var t=function(e){var t=Object(o.useState)(e),a=Object(i.a)(t,2),n=a[0],r=a[1];return[n,function(){r(n+1)}]}(0),a=Object(i.a)(t,2),n=a[0],r=a[1],l=Object(o.useState)(e.request||{jsonrpc:"2.0",method:"",params:[],id:n}),u=Object(i.a)(l,2),s=u[0],p=u[1],d=Object(o.useState)(),m=Object(i.a)(d,2),g=m[0],f=m[1],h=Object(o.useState)(e.url||""),O=Object(i.a)(h,2),k=O[0],z=O[1],D=function(e){var t=Object(o.useState)(),a=Object(i.a)(t,2),n=a[0],r=a[1];return Object(o.useEffect)(function(){var t;if((e.includes("http://")||e.includes("https://"))&&(t=R.HTTPTransport),e.includes("ws://")&&(t=R.WebSocketTransport),!t)return console.error("No Transport Found for url: ".concat(e));try{var a=new t(e),n=new R.Client(new R.RequestManager([a]));r(n)}catch(o){console.error(o)}},[e]),[n]}(k),I=Object(i.a)(D,1)[0];Object(o.useEffect)(function(){e.url&&z(e.url)},[e.url]);var P=function(){var e=Object(j.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!I){e.next=12;break}return r(),e.prev=2,e.next=5,I.request(s.method,s.params);case 5:t=e.sent,f({jsonrpc:"2.0",result:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),f(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{style:{height:"100%"}},c.a.createElement(w.a,{position:"static",elevation:0,color:"default"},c.a.createElement(S.a,null,c.a.createElement("img",{height:"30",alt:"openrpc-logo",style:{marginRight:"10px"},src:"https://github.com/open-rpc/design/raw/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/128x128.png"}),c.a.createElement(M.a,{variant:"h6",color:"textSecondary"},"Inspector"),c.a.createElement(C.a,{onClick:P},c.a.createElement(T.a,null)),c.a.createElement(J.a,{value:k,placeholder:"Enter a JSON-RPC server URL",onChange:function(e){return z(e.target.value)},fullWidth:!0,style:{background:"rgba(0,0,0,0.1)",borderRadius:"4px",padding:"0px 10px",marginRight:"5px"}}),e.hideToggleTheme?null:c.a.createElement(C.a,{onClick:function(){e.onToggleDarkMode&&e.onToggleDarkMode()}},e.darkMode?c.a.createElement(A.a,null):c.a.createElement(q.a,null)))),c.a.createElement("div",{style:{display:"flex",marginBottom:"-80px"}},c.a.createElement(E.a,{split:"vertical",minSize:100,maxSize:-100,defaultSize:"35%",style:{flexGrow:1}},c.a.createElement("div",{style:{width:"99%",padding:"10px"}},c.a.createElement(y,{json:Object(b.a)({},s,{id:n.toString()}),onChange:p,reactJsonTheme:e.reactJsonTheme||"summerfruit:inverted"})),c.a.createElement("div",{style:{height:"100%",padding:"10px",overflowY:"auto",paddingBottom:"80px"}},g&&c.a.createElement(B.a,{style:{position:"absolute",top:"15px",right:"15px",zIndex:1},onClick:function(){f(void 0)}},"Clear"),g&&c.a.createElement(x.a,{src:g?Object(b.a)({},g,{id:(n-1).toString()}):null,name:!1,displayDataTypes:!1,displayObjectSize:!1,theme:e.reactJsonTheme||"summerfruit:inverted"})))))},P=a(47),N=function(e){var t=Object(o.useState)(P.parse(window.location.search,{ignoreQueryPrefix:!0,depth:e||100,decoder:function(e){return"false"!==e&&("true"===e||decodeURIComponent(e))}}));return[Object(i.a)(t,1)[0]]},W=function(){var e=Object(f.a)(),t=N(),a=Object(i.a)(t,1)[0],n=e.value?g:m,r=e.value?"summerfruit":"summerfruit:inverted";return c.a.createElement(u.a,{theme:n},c.a.createElement(l.a,null),c.a.createElement(I,{onToggleDarkMode:e.toggle,darkMode:e.value,reactJsonTheme:r,url:a.url,request:a.request}))};a(74),a(75);r.a.render(c.a.createElement(W,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.8cb21ac4.chunk.js.map