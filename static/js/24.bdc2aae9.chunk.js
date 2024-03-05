"use strict";(self.webpackChunkReactSocialNetwork=self.webpackChunkReactSocialNetwork||[]).push([[24],{4024:(e,t,a)=>{a.r(t),a.d(t,{UsersPage:()=>D});var n=a(2791),i=a(231),s=a(4294),o=a(184);const r=n.memo((e=>{let{userId:t,followed:a}=e;console.log("followed");const[r]=(0,i.tK)(),[l]=(0,i.Wi)(),c=(0,n.useCallback)((async(e,t)=>{e?await l({id:t,body:!1}):await r({id:t,body:!0})}),[l,r]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(s.Z,{onClick:()=>c(a,t),color:a?"error":"success",sx:{flexGrow:1},children:a?"unfollow":"follow"})})}));var l=a(1889),c=a(5527),d=a(533),u=a(3044),p=a(890),m=a(4721),g=a(3091),x=a(1087),h=a(4891),v=a(7246),b=a(4280);const Z=(0,n.memo)((e=>{let{totalPage:t,page:a,isFetching:i}=e;const[s,r]=(0,x.lr)(),d=(0,n.useCallback)((e=>{e.currentTarget.value&&(s.set("page",e.currentTarget.value),r(s,{replace:!0}))}),[s,r]),u=(0,n.useCallback)(((e,t)=>{1===t?s.delete("page"):s.set("page",String(t)),r(s,{replace:!0})}),[s,r]);return(0,o.jsx)(c.Z,{sx:{backgroundColor:"rgba(0, 0, 0, 0.1)",width:"100%"},elevation:5,children:(0,o.jsxs)(l.ZP,{container:!0,direction:"row",sx:{p:"0 20px"},justifyContent:"center",children:[(0,o.jsx)(l.ZP,{item:!0,xs:10.5,container:!0,children:(0,o.jsx)(h.Z,{spacing:2,sx:{marginY:2,marginX:"auto"},children:(0,o.jsx)(v.Z,{count:Number(t),siblingCount:2,page:a,disabled:i,onChange:u,variant:"outlined",color:"primary"})})}),(0,o.jsx)(l.ZP,{item:!0,xs:1.5,container:!0,justifyContent:"center",direction:"column",children:(0,o.jsx)(b.Z,{type:"number",autoComplete:"n",size:"small",label:"Set page",sx:{},onChange:d})})]})})}));var j=a(8096),f=a(7198),y=a(3366),C=a(7462),w=a(3733),k=a(4419),P=a(2065),S=a(6934),F=a(1402),O=a(6199),I=a(162),N=a(2071),M=a(133),G=a(5878);const W=(0,G.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var z=a(9849),B=a(1217);function L(e){return(0,B.Z)("MuiMenuItem",e)}const R=(0,G.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),V=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],T=(0,S.ZP)(d.Z,{shouldForwardProp:e=>(0,S.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:a}=e;return(0,C.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(R.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,P.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(R.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,P.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(R.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,P.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,P.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(R.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(R.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(M.Z.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(M.Z.inset)]:{marginLeft:52},["& .".concat(z.Z.root)]:{marginTop:0,marginBottom:0},["& .".concat(z.Z.inset)]:{paddingLeft:36},["& .".concat(W.root)]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,C.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(W.root," svg")]:{fontSize:"1.25rem"}}))})),q=n.forwardRef((function(e,t){const a=(0,F.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:s="li",dense:r=!1,divider:l=!1,disableGutters:c=!1,focusVisibleClassName:d,role:u="menuitem",tabIndex:p,className:m}=a,g=(0,y.Z)(a,V),x=n.useContext(O.Z),h=n.useMemo((()=>({dense:r||x.dense||!1,disableGutters:c})),[x.dense,r,c]),v=n.useRef(null);(0,I.Z)((()=>{i&&v.current&&v.current.focus()}),[i]);const b=(0,C.Z)({},a,{dense:h.dense,divider:l,disableGutters:c}),Z=(e=>{const{disabled:t,dense:a,divider:n,disableGutters:i,selected:s,classes:o}=e,r={root:["root",a&&"dense",t&&"disabled",!i&&"gutters",n&&"divider",s&&"selected"]},l=(0,k.Z)(r,L,o);return(0,C.Z)({},o,l)})(a),j=(0,N.Z)(v,t);let f;return a.disabled||(f=void 0!==p?p:-1),(0,o.jsx)(O.Z.Provider,{value:h,children:(0,o.jsx)(T,(0,C.Z)({ref:j,role:u,tabIndex:f,component:s,focusVisibleClassName:(0,w.Z)(Z.focusVisible,d),className:(0,w.Z)(Z.root,m)},g,{ownerState:b,classes:Z}))})})),H=(0,n.memo)((e=>{let{count:t,term:a,friend:i}=e;const[s,r]=(0,x.lr)(),c=(0,n.useCallback)((e=>{let t=e.target.value;s.set("friend","null"===t?"":t),r(s,{replace:!0})}),[s,r]);console.log(s.get("page"));const d=(0,n.useCallback)((e=>{let t=e.target.value;"5"===t?(s.delete("count"),r(s)):(s.set("count",t),r(s))}),[s,r]),u=(0,n.useCallback)((e=>{let t=e.target.value;t?s.set("term",t):s.delete("term"),r(s,{replace:!0})}),[s,r]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.ZP,{item:!0,xs:1.5,children:(0,o.jsx)(j.Z,{fullWidth:!0,variant:"outlined",size:"small",sx:{maxWidth:80},children:(0,o.jsxs)(f.Z,{value:String(t),onChange:d,children:[(0,o.jsx)(q,{value:5,children:"5"}),(0,o.jsx)(q,{value:10,children:"10"}),(0,o.jsx)(q,{value:15,children:"15"})]})})}),(0,o.jsx)(l.ZP,{item:!0,xs:8,children:(0,o.jsx)(b.Z,{fullWidth:!0,size:"small",value:a,onChange:u})}),(0,o.jsx)(l.ZP,{item:!0,xs:2.5,children:(0,o.jsx)(j.Z,{fullWidth:!0,variant:"outlined",sx:{maxWidth:120},size:"small",children:(0,o.jsxs)(f.Z,{value:String(i),onChange:c,children:[(0,o.jsx)(q,{value:"null",children:"all"}),(0,o.jsx)(q,{value:"true",children:"follow"}),(0,o.jsx)(q,{value:"false",children:"unfollow"})]})})})]})})),D=n.memo((()=>{const[e]=(0,x.lr)(),[t,a]=(0,n.useState)(1),[h,v]=(0,n.useState)(""),[b,j]=(0,n.useState)(null);console.log("Current page: ".concat(t)),console.log("Search term: ".concat(h)),console.log("Friend: ".concat(b));let f=Number(e.get("count"))||5;const{data:y,error:C,isLoading:w,isSuccess:k,isFetching:P}=(0,i.XD)({page:t,count:f,term:h,friend:b}),S=k?Math.ceil(y.totalCount/f):0;return(0,n.useEffect)((()=>{let n=Number(e.get("page"));n&&a(Number(n)),n&&0!==t||a(1);let i=e.get("term");i&&v(i),i||v("");let s=e.get("friend");s||j(null),"true"===s&&j(!0),"false"===s&&j(!1)}),[e,t,S]),w?(0,o.jsx)("p",{children:"Loading..."}):C?(0,o.jsx)("p",{children:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"}):(0,o.jsxs)(l.ZP,{item:!0,sx:{width:"90%"},container:!0,spacing:2,direction:"column",children:[(0,o.jsx)(l.ZP,{item:!0,xs:!0,sx:{top:50,position:"sticky"},children:(0,o.jsx)(Z,{totalPage:S,page:t,isFetching:P})}),(0,o.jsx)(l.ZP,{item:!0,xs:!0,children:(0,o.jsx)(c.Z,{sx:{backgroundColor:"rgba(0, 0, 0, 0.1)",p:2},elevation:5,children:(0,o.jsx)(l.ZP,{container:!0,item:!0,spacing:2,xs:12,children:(0,o.jsx)(H,{count:f,term:h,friend:b})})})}),(0,o.jsx)(l.ZP,{container:!0,item:!0,xs:!0,children:(0,o.jsx)(c.Z,{sx:{backgroundColor:"rgba(0, 0, 0, 0.1)",width:"100%"},elevation:5,children:k&&y.items.map((e=>{var t;return(0,o.jsxs)(l.ZP,{item:!0,xs:12,sx:{p:1},container:!0,spacing:2,children:[(0,o.jsxs)(l.ZP,{container:!0,item:!0,children:[(0,o.jsx)(l.ZP,{item:!0,xs:!0,children:(0,o.jsx)(d.Z,{sx:{width:90,height:90},children:(0,o.jsx)(x.OL,{to:"/".concat(e.id),children:(0,o.jsx)(u.Z,{alt:"photo",src:null!==(t=e.photos.small)&&void 0!==t?t:g.Z,style:{width:"80px",height:"80px"},variant:"rounded"})})})}),(0,o.jsxs)(l.ZP,{item:!0,xs:10,container:!0,direction:"column",spacing:2,sx:{width:"100%"},children:[(0,o.jsxs)(l.ZP,{item:!0,sx:{wordWrap:"break-word",width:"100%"},children:[(0,o.jsx)(p.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",children:e.name}),(0,o.jsx)(p.Z,{variant:"body2",gutterBottom:!0,sx:{minHeight:0},children:e.status})]}),(0,o.jsxs)(l.ZP,{item:!0,container:!0,justifyContent:"space-between",children:[(0,o.jsx)(l.ZP,{children:(0,o.jsx)(r,{userId:e.id,followed:e.followed})}),(0,o.jsx)(l.ZP,{children:(0,o.jsx)(s.Z,{variant:"contained",size:"small",children:"send message"})})]})]})]}),(0,o.jsx)(l.ZP,{item:!0,xs:!0,children:(0,o.jsx)(m.Z,{})})]},e.id)}))})})]})}))}}]);
//# sourceMappingURL=24.bdc2aae9.chunk.js.map