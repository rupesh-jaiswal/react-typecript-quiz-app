(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var r,i,a=t(1),c=t.n(a),o=t(13),d=t.n(o),s=t(3),f=t(8),l=t(9),b=t.p+"static/media/bkg-image.150fb259.jpg",p=Object(l.a)(r||(r=Object(f.a)(["\n    html{\n        height: 100%;\n    }\n    body {\n        background-image: url(",");\n        background-size: cover;\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n    * {\n        box-sizing: border-box;\n        font-family: 'Catamaran', sans-serif;\n    }\n "])),b),x=l.b.div(i||(i=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    >p {\n        color: #fff;\n    }\n\n    .score {\n        color: #fff;\n        font-size:2rem;\n        margin: 0;\n\n    }\n    h1 {\n        background: linear-gradient(180deg, #fff,#87f1ff);\n        background-size: 100%;\n        background-clip: text;\n        --webkit-background-clip: text;\n        --webkit-text-fill-color: trnasparent;\n        --moz-background-clip: text;\n        --moz-text-fill-color: transparent;\n        filter: drop-shadow(2px 2px #0085a3);\n        font-size: 70px;\n        font-weight: 400px;\n        text-align: center;\n        margin: 20px; \n    }\n    .start, .next {\n        cursor: pointer;\n        background: linear-gradient(180deg, #fff,#ffcc91);\n        border: 2px solid #d38558;\n        box-shadow: 0px 5px 10px rgb(0,0,0,0.25);\n        border-radius: 10px;\n        height: 40px;\n        margin: 20px;\n        padding: 0 40px;\n    }\n    .start {\n        max-width: 200px;\n    }\n"]))),g=t(11),u=t(2),h=function(){var n=null,e=Object(a.useState)([]),t=Object(s.a)(e,2),r=(t[0],t[1]);return Object(a.useEffect)((function(){var e=document.getElementById("qr-scan-window");return e&&(n=new g.a(e,(function(n){return console.log("decoded qr code:",n)}),{})).start().then((function(){var n=[];g.a.listCameras(!0).then((function(e){return e.forEach((function(t,i){n.push({id:t.id,label:t.label}),i===e.length-1&&(r(n),alert(JSON.stringify(n)))}))}))})),function(){n&&(n.stop(),n.destroy())}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)(x,{children:[Object(u.jsx)("h1",{children:" QrScanner"}),Object(u.jsx)("video",{id:"qr-scan-window"})]})]})};d.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.16693396.chunk.js.map