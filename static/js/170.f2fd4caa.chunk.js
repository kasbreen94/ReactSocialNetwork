"use strict";(self.webpackChunkReactSocialNetwork=self.webpackChunkReactSocialNetwork||[]).push([[170],{170:(e,s,n)=>{n.r(s),n.d(s,{UsersContainer:()=>O});var l=n(791),r=n(420),t=n(386);const a="users_users__TTdsI",o="users_pagination__Npw4H",i="users_infoPage__NPDb7",c="users_pageInput__lsrhg",u="users_numberPage__t8Pin",d="users_usersSearch__6+QpO",g="users_userItem__4HrV7",m="users_userPhoto__Nyd6G",h="users_follow__3zutk",_="users_followed__cPPnS",f="users_followed_unfollow__wHdb9",x="users_info__9ncw0",p="users_stateFollow__lEePx",j="users_stateUnfollow__9fIUW",N="users_description__U3-mM",P="users_showMore__xGKj5";var v=n(843),w=n(134);const C=e=>e.usersPage.filter;var b=n(184);const k=e=>{let{setPage:s,requestUsers:n,page:l}=e;const r=(0,v.C)(C),{register:t,handleSubmit:a}=(0,w.cI)({mode:"onChange",values:{term:r.term,friend:String(r.friend)}});return(0,b.jsx)("div",{className:d,children:(0,b.jsxs)("form",{onChange:a((e=>{(e=>{s(1),n(l,e)})({term:e.term,friend:"null"===e.friend?null:"true"===e.friend})})),children:[(0,b.jsx)("input",{autoComplete:"off",...t("term",{})}),(0,b.jsxs)("select",{...t("friend",{}),children:[(0,b.jsx)("option",{value:"null",children:"All"}),(0,b.jsx)("option",{value:"true",children:"Only follow"}),(0,b.jsx)("option",{value:"false",children:"Only unfollow"})]})]})})},I=e=>{let{setPage:s,page:n,setCount:l,users:r,loading:t,totalPage:a}=e;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:c,children:["Input page number:",(0,b.jsx)("input",{className:u,type:"number",min:1,max:a,onChange:e=>{let l=Number(e.target.value);s(l),(l<1||l>a)&&s(n)}})]}),(0,b.jsxs)("div",{className:o,children:[(0,b.jsx)("button",{onClick:()=>{s(n-1),l(4)},className:P,disabled:t||1===n,children:"PrevPage"}),(0,b.jsxs)("div",{className:u,children:["Current page: ",n]}),(0,b.jsx)("button",{onClick:()=>{s(n+1),l(4)},className:P,disabled:t||r.length<100,children:"NextPage"})]})]})},U=e=>{let{setCurrentPage:s,currentPage:n,setCount:l,users:r,loading:t,count:a,totalPage:o}=e;return(0,b.jsx)("div",{children:a<r.length?(0,b.jsx)("button",{onClick:()=>l(a+10),className:P,disabled:t,children:t?"Loading...":"Load more"}):(n<o||100===a)&&(0,b.jsx)("button",{onClick:()=>{s(n+1),l(4)},className:P,children:"NextPage"})})};var S=n(87),F=n(91);const y=e=>{let{users:s,count:n}=e;const l=(0,v.C)((e=>e.usersPage.followingId)),a=(0,r.I0)();return(0,b.jsx)(b.Fragment,{children:s.slice(0,n).map(((e,s)=>(0,b.jsxs)("div",{className:g,children:[(0,b.jsxs)("span",{className:h,children:[(0,b.jsx)(S.OL,{to:"/"+e.id,children:(0,b.jsx)("img",{src:e.photos.small?e.photos.small:F.Z,alt:"",className:m})}),(0,b.jsx)("button",{className:"".concat(_," ").concat(e.followed&&f),disabled:l===e.id,onClick:()=>a((0,t.Gp)(e.id)),children:e.followed?"Unfollow":"Follow"})]}),(0,b.jsxs)("div",{className:x,children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{children:"Name: "}),e.name]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{children:"Followed:"}),(0,b.jsx)("div",{className:"".concat(p," ").concat(!e.followed&&j)})]}),(0,b.jsx)("span",{children:"User id: "}),e.id]}),null!==e.status&&(0,b.jsxs)("div",{className:N,children:[(0,b.jsx)("span",{children:"Status: "}),e.status]})]},s)))})},O=l.memo((()=>{const{users:e,totalCount:s,page:n,loading:o,filter:c}=(0,v.C)((e=>e.usersPage)),u=(0,r.I0)(),d=e=>{u((0,t.lo)(e))},g=(e,s)=>{u((0,t.D7)(e,s))},[m,h]=(0,l.useState)(4),_=Math.ceil(s/100),[f,x]=(0,S.lr)();return(0,l.useEffect)((()=>{const e={page:f.get("page"),term:f.get("term"),friend:f.get("friend")};let s=n,l=c;e.page&&(s=Number(e.page)),0===s&&(s=n),null===e.page&&(s=1),l=e.term?{...l,term:e.term}:{...l,term:""},"null"===e.friend&&(l={...l,friend:null}),"true"===e.friend&&(l={...l,friend:!0}),"false"===e.friend&&(l={...l,friend:!1}),null===e.friend&&(l={...l,friend:null}),g(s,l)}),[f]),(0,l.useEffect)((()=>{const e=c.term,s=c.friend;let l=(""===e?"":"&term=".concat(e))+(null===s?"":"&friend=".concat(s))+(1===n?"":"&page=".concat(n));x(l)}),[c,n]),(0,b.jsxs)("div",{className:a,children:[(0,b.jsxs)("div",{className:i,children:[(0,b.jsx)("span",{children:"Users per page: 100"}),(0,b.jsxs)("span",{children:["Total pages: ",_]}),(0,b.jsxs)("span",{children:["Total users: ",s]})]}),(0,b.jsx)(I,{totalPage:_,setPage:d,page:n,setCount:h,users:e,loading:o}),(0,b.jsx)(k,{setPage:d,requestUsers:g,page:n}),(0,b.jsx)(y,{users:e,count:m}),(0,b.jsx)(U,{setCurrentPage:d,count:m,totalPage:_,currentPage:n,setCount:h,users:e,loading:o})]})}))}}]);
//# sourceMappingURL=170.f2fd4caa.chunk.js.map