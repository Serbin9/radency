(this.webpackJsonpradency=this.webpackJsonpradency||[]).push([[0],{11:function(e,t,n){e.exports={MainPageConatainer:"MainPage_MainPageConatainer__30sv2",errorText:"MainPage_errorText__3uulR",errorContainer:"MainPage_errorContainer__1mzmT"}},19:function(e,t,n){e.exports={buttonImport:"LoadingCVSFile_buttonImport__2hcz4",buttonContainer:"LoadingCVSFile_buttonContainer__3m69d"}},3:function(e,t,n){e.exports={errorStyle:"Item_errorStyle__2ya8y"}},31:function(e,t,n){e.exports={container:"app_container__88uZ9"}},34:function(e,t,n){},41:function(e,t){},43:function(e,t){},70:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),s=n(30),i=n.n(s),l=n(20),o=n(31),u=n.n(o),h=n(32),j=function(e){for(var t={},n=0;n<e[0].data.length;n++)t[e[0].data[n].trim().toLowerCase()]="";return t},d=function(e,t){for(var n in e)if(!Object.keys(t).includes(n))return!1;return!0},b=function(e){var t=e.length;return 1===e[e.length-1].data.length&&(t=e.length-1),t},p=function(e,t,n){for(var r=0,a=0;a<n.length;a++)t.hasOwnProperty(n[a])&&""!==t[n[a]]&&r++;return r===e},x=function(e){for(var t=[],n=0;n<e.length;n++)e[n].phone.length<12&&(11===e[n].phone.length&&"1"===e[n].phone[0]&&(e[n].phone="+"+e[n].phone),11===e[n].phone.length&&"+"===e[n].phone[0]&&(e[n].phone="1"+e[n].phone.slice(1)),e[n].phone.length<=10&&"+"!==e[n].phone[0]&&(e[n].phone="+1"+e[n].phone)),t.push(e[n]);return t},O=function(e){for(var t=[],n=0;n<e.length;n++){for(var r=0;r<e.length;r++)n!==r&&(e[n]["full name"].toLowerCase()===e[r]["full name"].toLowerCase()&&(e[n].duplicateWith=r+1,e[n].duplicateLine="full name"),e[n].phone.toLowerCase()===e[r].phone.toLowerCase()&&(e[n].duplicateWith=r+1,e[n].duplicateLine="phone"),e[n].email.toLowerCase()===e[r].email.toLowerCase()&&(e[n].duplicateWith=r+1,e[n].duplicateLine="email"));t.push(e[n])}return t},m=n(2),f=(r={},Object(m.a)(r,"full name",""),Object(m.a)(r,"phone",""),Object(m.a)(r,"email",""),Object(m.a)(r,"age",""),Object(m.a)(r,"experience",""),Object(m.a)(r,"yearly income",""),Object(m.a)(r,"has children",""),Object(m.a)(r,"license states",""),Object(m.a)(r,"expiration date",""),Object(m.a)(r,"license number",""),r),v=function(e,t,n){var r=[],a=j(e),c=d(a,f),s=b(e);if(c){for(var i=arguments.length,l=new Array(i>3?i-3:0),o=3;o<i;o++)l[o-3]=arguments[o];for(var u=1;u<s;u++){var h=Object.assign({},a),m=0;for(var v in h)h[v]=e[u].data[m].trim(),m++;var g=p(3,h,l);if(!g){t("File format is not correct");break}r.push(h)}}else t("File format is not correct");var y=x(r),C=O(y);n(C)},g=n(19),y=n.n(g),C=n(0),N=function(e){var t=e.setUsers,n=e.setError,r=Object(a.useRef)(),c=function(e){r.current&&r.current.open(e)};return Object(C.jsx)(h.a,{ref:r,onDrop:function(e){n(null);v.apply(void 0,[e,n,t].concat(["full name","phone","email"]))},onError:function(e,t,r,a){n(e)},noDrag:!0,style:{progressBar:{backgroundColor:"white"}},children:function(){return Object(C.jsx)("div",{className:y.a.buttonContainer,children:Object(C.jsx)("button",{type:"button",onClick:c,className:y.a.buttonImport,children:"Import users"})})}})},_=n(34),L=n.n(_),S=n(3),Y=n.n(S),w=(n(54),n(10)),M=n.n(w),I=function(e){var t=e.element,n=e.index,r=function(e){return 12===e.length}(t.phone),a=function(e){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(String(e).toLowerCase())}(t.email),c=function(e){return Math.trunc(e)&&e>=21}(t.age),s=function(e,t){return Number(e)>=0&&Number(e)<Number(t)}(t.experience,t.age),i=function(e){return 6===e.length&&/^[\w\d\u0410-\u044f]+$/.test(e)}(t["license number"]),l=function(e){if(isNaN(e))return{status:!1,valueYI:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 "+e};var t=(Math.round(100*e)/100).toFixed(2);return e<=1e6?{status:!0,valueYI:t}:{status:!1,valueYI:t}}(t["yearly income"]),o=function(e){return"true"===e.toLowerCase()||"false"==e.toLowerCase()?{status:!0,value:e.toUpperCase()}:""===e?{status:!1,value:"FALSE"}:{status:!1,value:e}}(t["has children"]),u=function(e){if(e.includes(".")||e.includes(",")||e.includes(" "))return{status:!1,value:e};for(var t=e.split("|"),n=0;n<t.length;n++)t[n].length>2&&(t[n]=t[n].slice(0,2).toUpperCase().trim());return{status:!0,value:t.join(", ")}}(t["license states"]),h=function(e){var t=M()(e,"YYYY-MM-DD").isValid(),n=M()(e).format("YYYY-MM-DD"),r=M()().format("YYYY-MM-DD");if(t)return n>r?{status:!0,value:e}:{status:!1,value:e}}(t["expiration date"]);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("td",{children:n+1}),"full name"!==t.duplicateLine&&Object(C.jsx)("td",{children:t["full name"]})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:t["full mname"]}),"phone"!==t.duplicateLine&&r&&Object(C.jsx)("td",{children:t.phone})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:t.phone}),"email"!==t.duplicateLine&&a&&Object(C.jsx)("td",{children:t.email})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:t.email}),c&&Object(C.jsx)("td",{children:t.age})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:t.age}),s&&Object(C.jsx)("td",{children:t.experience})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:t.experience}),l.status&&Object(C.jsx)("td",{children:l.valueYI})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:l.valueYI}),o.status&&Object(C.jsx)("td",{children:o.value})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:o.value}),u.status&&Object(C.jsx)("td",{children:u.value})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:u.value}),h.status&&Object(C.jsx)("td",{children:h.value})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:h.value}),i&&Object(C.jsx)("td",{children:t["license number"]})||Object(C.jsx)("td",{className:Y.a.errorStyle,children:t["license number"]}),Object(C.jsx)("td",{children:t.duplicateWith})]})},z=function(e){var t=e.users;return Object(C.jsxs)("table",{className:L.a.table,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"ID"}),Object(C.jsx)("th",{children:"Full Name"}),Object(C.jsx)("th",{children:"Phone"}),Object(C.jsx)("th",{children:"Email"}),Object(C.jsx)("th",{children:"Age"}),Object(C.jsx)("th",{children:"Experience"}),Object(C.jsx)("th",{children:"Yearly Income"}),Object(C.jsx)("th",{children:"Has children"}),Object(C.jsx)("th",{children:"License states"}),Object(C.jsx)("th",{children:"Expiration date"}),Object(C.jsx)("th",{children:"License number"}),Object(C.jsx)("th",{children:"Duplicate with"})]})}),Object(C.jsx)("tbody",{children:t.map((function(e,t){return Object(C.jsx)("tr",{children:Object(C.jsx)(I,{element:e,index:t})},t)}))})]})},D=n(11),E=n.n(D),F=function(e){var t=e.error,n=e.users;return Object(C.jsxs)("div",{className:E.a.MainPageConatainer,children:[t&&Object(C.jsx)("div",{className:E.a.errorContainer,children:t}),0===n.length&&!t&&Object(C.jsx)("div",{className:E.a.errorText,children:"None file uploaded"}),n.length>0&&!t&&Object(C.jsx)(z,{users:n})]})},P=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(l.a)(c,2),i=s[0],o=s[1];return Object(C.jsxs)("div",{className:u.a.container,children:[Object(C.jsx)(N,{setUsers:r,setError:o}),Object(C.jsx)(F,{users:n,error:i})]})};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(P,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.16abb8f2.chunk.js.map