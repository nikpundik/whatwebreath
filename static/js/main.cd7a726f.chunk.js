(this.webpackJsonpwhatwebreath=this.webpackJsonpwhatwebreath||[]).push([[0],{15:function(e,t,n){e.exports={webcam:"Webcam_webcam__5zdMj"}},16:function(e,t,n){e.exports={copy:"Copy_copy__1huym"}},19:function(e,t,n){e.exports={canvas:"Canvas_canvas__1txVP"}},23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(14),i=n.n(a),s=(n(23),n(2)),o=n(5),u=n.n(o),j=n(11),b=n(15),p=n.n(b),d=n(1);var x=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){(function(){var t=Object(j.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!navigator.mediaDevices){t.next=5;break}return t.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!1});case 3:n=t.sent,e.current.srcObject=n;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(d.jsx)("video",{className:p.a.webcam,ref:e,autoPlay:!0})},f=n(16),h=n.n(f);var v=function(e){var t=e.city,n=e.next;return Object(d.jsxs)("div",{className:h.a.copy,children:[Object(d.jsx)("button",{onClick:n,children:"discover"}),Object(d.jsx)("h1",{children:t.name})]})},l=n(12);function m(e){var t=e.particle,n=Object(c.useRef)();return Object(l.b)((function(e,c){n.current&&(n.current.rotation.x=n.current.rotation.y+=.01,n.current.position.x+=.01*Math.cos(e.clock.getElapsedTime()+t.key),n.current.position.y+=.01*Math.sin(1.1*e.clock.getElapsedTime()+t.key))})),Object(d.jsxs)("mesh",{position:[t.x,t.y,t.z],ref:n,children:[Object(d.jsx)("sphereBufferGeometry",{args:[t.size,32,32]}),Object(d.jsx)("meshStandardMaterial",{color:"#222",opacity:.6,trasparent:!0})]})}var O=function(e){var t=e.particles,n=void 0===t?[]:t;return Object(d.jsx)("group",{children:n.map((function(e){return Object(d.jsx)(m,{particle:e},e.key)}))})},y=n(19),g=n.n(y);var w=function(e){var t=function(e){for(var t=[],n=0;n<e;n+=1)t.push({key:n,size:.1*Math.random()+.1,x:10*Math.random()-5,y:10*Math.random()-5,z:1*Math.random()-2});return t}(e.city.particles);return Object(d.jsx)("div",{className:g.a.canvas,children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)("ambientLight",{}),Object(d.jsx)("pointLight",{position:[10,10,10]}),Object(d.jsx)(O,{particles:t})]})})};var k=function(e){var t=e.city,n=e.next,c=e.webcam,r=void 0===c||c;return Object(d.jsxs)("div",{id:"app",children:[r&&Object(d.jsx)(x,{}),Object(d.jsx)(w,{city:t}),Object(d.jsx)(v,{city:t,next:n})]})},M=[{name:"Brescia",particles:30},{name:"Mumbai",particles:500}];var _=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=M[n];return Object(d.jsx)("div",{id:"app",children:Object(d.jsx)(k,{city:a,next:function(){r((function(e){return e===M.length-1?0:e+1}))},webcam:!0})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root")),C()}},[[28,1,2]]]);
//# sourceMappingURL=main.cd7a726f.chunk.js.map