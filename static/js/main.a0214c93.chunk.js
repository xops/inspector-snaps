(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,a){e.exports=a(71)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a.n(n),o=a(0),c=a.n(o),i=a(93),l=a(92),u=a(45),s=a(27),p=a.n(s),d=Object(u.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},overrides:{MuiAppBar:{root:{background:"#fff !important"}}},palette:{background:{default:"#fff"}}}),m=Object(u.a)({props:{MuiAppBar:{position:"sticky"},MuiCard:{elevation:0}},palette:{type:"dark",background:{default:p.a[900],paper:p.a[800]}},overrides:{MuiAppBar:{root:{background:"transparent !important"}},MuiTable:{root:{background:"transparent !important"}},MuiTypography:{root:{color:p.a[400]}}}}),g=a(35),f=a(30),h=a(29),b=a.n(h),v=a(37),j=a(12),E=a(46),O=a(23),x=a.n(O),y=function(e){var t=Object(o.useState)({collapseStringsAfterLength:25,displayDataTypes:!1,displayObjectSize:!1,indentWidth:2,name:!1}),a=Object(j.a)(t,1)[0],n=function(t){e.onChange&&e.onChange(t.updated_src)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,Object.assign({theme:e.reactJsonTheme,src:e.json},a,{onEdit:n,onAdd:n,onDelete:n})))},k=a(42),T=a.n(k),S=a(91),w=a(85),M=a(86),C=a(87),J=a(90),B=a(88),z=a(20),A=a(43),D=a.n(A),R=a(44),q=a.n(R);var I=function(e){var t=function(e){var t=Object(o.useState)(e),a=Object(j.a)(t,2),n=a[0],r=a[1];return[n,function(){r(n+1)}]}(0),a=Object(j.a)(t,2),n=a[0],r=a[1],i=Object(o.useState)(e.request||{jsonrpc:"2.0",method:"",params:[],id:n}),l=Object(j.a)(i,2),u=l[0],s=l[1],p=Object(o.useState)(),d=Object(j.a)(p,2),m=d[0],g=d[1],h=Object(o.useState)(e.url||""),O=Object(j.a)(h,2),k=O[0],A=O[1],R=function(e){var t=Object(o.useState)(),a=Object(j.a)(t,2),n=a[0],r=a[1];return Object(o.useEffect)(function(){var t;if((e.includes("http://")||e.includes("https://"))&&(t=z.HTTPTransport),e.includes("ws://")&&(t=z.WebSocketTransport),!t)return console.error("No Transport Found for url: ".concat(e));try{var a=new t(e),n=new z.Client(new z.RequestManager([a]));r(n)}catch(o){console.error(o)}},[e]),[n]}(k),I=Object(j.a)(R,1)[0],N=function(){var e=Object(v.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!I){e.next=12;break}return r(),e.prev=2,e.next=5,I.request(u.method,u.params);case 5:t=e.sent,g({jsonrpc:"2.0",result:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),g(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{style:{height:"100%"}},c.a.createElement(S.a,{position:"static",elevation:0,color:"default"},c.a.createElement(w.a,null,c.a.createElement("img",{height:"30",alt:"openrpc-logo",style:{marginRight:"10px"},src:"https://github.com/open-rpc/design/raw/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/128x128.png"}),c.a.createElement(M.a,{variant:"h6",color:"textSecondary"},"Inspector"),c.a.createElement(C.a,{onClick:N},c.a.createElement(T.a,null)),c.a.createElement(J.a,{value:k,placeholder:"Enter a JSON-RPC server URL",onChange:function(e){return A(e.target.value)},fullWidth:!0,style:{background:"rgba(0,0,0,0.1)",borderRadius:"4px",padding:"0px 10px",marginRight:"5px"}}),e.hideToggleTheme?null:c.a.createElement(C.a,{onClick:function(){e.onToggleDarkMode&&e.onToggleDarkMode()}},e.darkMode?c.a.createElement(D.a,null):c.a.createElement(q.a,null)))),c.a.createElement("div",{style:{display:"flex",marginBottom:"-80px"}},c.a.createElement(E.a,{split:"vertical",minSize:100,maxSize:-100,defaultSize:"35%",style:{flexGrow:1}},c.a.createElement("div",{style:{width:"99%",padding:"10px"}},c.a.createElement(y,{json:Object(f.a)({},u,{id:n.toString()}),onChange:s,reactJsonTheme:e.reactJsonTheme||"summerfruit:inverted"})),c.a.createElement("div",{style:{height:"100%",padding:"10px",overflowY:"auto",paddingBottom:"80px"}},m&&c.a.createElement(B.a,{style:{position:"absolute",top:"15px",right:"15px",zIndex:1},onClick:function(){g(void 0)}},"Clear"),m&&c.a.createElement(x.a,{src:m?Object(f.a)({},m,{id:(n-1).toString()}):null,name:!1,displayDataTypes:!1,displayObjectSize:!1,theme:e.reactJsonTheme||"summerfruit:inverted"})))))},N=function(){var e=Object(g.a)(),t=e.value?m:d,a=e.value?"summerfruit":"summerfruit:inverted";return c.a.createElement(l.a,{theme:t},c.a.createElement(i.a,null),c.a.createElement(I,{onToggleDarkMode:e.toggle,darkMode:e.value,reactJsonTheme:a}))};a(69),a(70);r.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.a0214c93.chunk.js.map