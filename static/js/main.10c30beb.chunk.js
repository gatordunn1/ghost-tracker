(this["webpackJsonpghost-tracker"]=this["webpackJsonpghost-tracker"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"name":"ghost-tracker","version":"0.4.2","private":true,"dependencies":{"@testing-library/jest-dom":"^5.11.9","@testing-library/react":"^11.2.5","@testing-library/user-event":"^12.8.1","react":"^17.0.1","react-dom":"^17.0.1","react-scripts":"4.0.3","web-vitals":"^1.1.0"},"homepage":"http://Gator-Dunn.github.io/ghost-tracker","scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^3.1.0"}}')},15:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var i=t(2),c=t.n(i),r=t(9),a=t.n(r),s=(t(15),t(10)),o=t(3),d=t(4),u=t(0),l=t(7),f={unconfirmed:{icon:"\u26aa",text:"unconfirmed"},confirmed:{icon:"\u2714\ufe0f",text:"confirmed"},excluded:{icon:"\u274c",text:"excluded"}},m={emf:"EMF Level 5",fingerprints:"Fingerprints",freezing:"Freezing",orbs:"Ghost Orbs",writing:"Ghost Writing",box:"Spirit Box"},v=Object.values(m),p=(Object.entries(m).map((function(e){var n=Object(d.a)(e,2);return{key:n[0],name:n[1],statusIcon:f.unconfirmed.icon,statusText:f.unconfirmed.text}})),[{name:"banshee",evidence:[m.emf,m.fingerprints,m.freezing],valid:!0},{name:"demon",evidence:[m.freezing,m.box,m.writing],valid:!0},{name:"jinn",evidence:[m.emf,m.orbs,m.box],valid:!0},{name:"mare",evidence:[m.freezing,m.orbs,m.box],valid:!0},{name:"oni",evidence:[m.emf,m.box,m.writing],valid:!0},{name:"phantom",evidence:[m.emf,m.freezing,m.orbs],valid:!0},{name:"poltergeist",evidence:[m.orbs,m.fingerprints,m.box],valid:!0},{name:"revenant",evidence:[m.emf,m.fingerprints,m.writing],valid:!0},{name:"shade",evidence:[m.emf,m.orbs,m.writing],valid:!0},{name:"spirit",evidence:[m.box,m.fingerprints,m.writing],valid:!0},{name:"wraith",evidence:[m.freezing,m.fingerprints,m.box],valid:!0},{name:"yurei",evidence:[m.freezing,m.orbs,m.writing],valid:!0}]),b=p.map((function(e){return e.name})),h=b.reduce((function(e,n){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},n,n))}),{}),g={evidence:{all:v,confirmed:[],excluded:[],unconfirmed:v,status:f,ghosts:p,validGhosts:b},ghosts:{all:b,valid:b,invalid:[],evidence:p}},j="FILTER_GHOSTS_BY_EVIDENCE",O="RESET_GHOSTS",x="TOGGLE_GHOST_STATUS",E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.ghosts,n=arguments.length>1?arguments[1]:void 0,t=n.type,i=n.payload;switch(t){case j:var c=e.all.filter((function(e){return i.includes(e)}));return Object(u.a)(Object(u.a)({},e),{},{valid:c,invalid:e.all.filter((function(e){return!c.includes(e)}))});case O:return g.ghosts;case x:return e.invalid.includes(i)?Object(u.a)(Object(u.a)({},e),{},{valid:[i],invalid:e.all.filter((function(e){return e!==i}))}):1===e.valid.length?Object(u.a)(Object(u.a)({},e),{},{valid:e.all,invalid:[]}):Object(u.a)(Object(u.a)({},e),{},{valid:[i],invalid:e.all.filter((function(e){return e!==i}))});default:return e}},N=t(1),y=function(e){var n=e.ghosts,t=n.dispatch,i=(n.filterGhosts,n.state),r=n.toggleGhost,a=e.evidence,s=a.state.validGhosts,d=a.toggleGhostEvidence,u=c.a.useMemo((function(){var e=i.valid.map((function(e){return{ghostName:e,status:"valid"}})),n=i.invalid.map((function(e){return{ghostName:e,status:"invalid"}}));return[].concat(Object(o.a)(e),Object(o.a)(n)).sort((function(e,n){return e.ghostName.localeCompare(n.ghostName)}))}),[i]);c.a.useEffect((function(){t({payload:s,type:j})}),[t,s]);return u?u.map((function(e){return Object(N.jsx)("span",{onClick:function(){return function(e){r(e.ghostName),d(e)}(e)},className:"Tag-ghost-".concat(e.status),children:e.ghostName},e.ghostName)})):null},G=function(e){var n=e.evidence,t=n.state,i=n.incrementStatus;return c.a.useMemo((function(){var e=t.confirmed.map((function(e){return{evidenceName:e,statusIcon:f.confirmed.icon,statusText:f.confirmed.text}})),n=t.excluded.map((function(e){return{evidenceName:e,statusIcon:f.excluded.icon,statusText:f.excluded.text}})),i=t.unconfirmed.map((function(e){return{evidenceName:e,statusIcon:f.unconfirmed.icon,statusText:f.unconfirmed.text}})),c=[].concat(Object(o.a)(e),Object(o.a)(n),Object(o.a)(i));return c.sort((function(e,n){return e.evidenceName.localeCompare(n.evidenceName)})),c}),[t]).map((function(e,n){return Object(N.jsxs)("span",{className:"Evidence-item",onClick:function(){return i(e.evidenceName)},children:[Object(N.jsx)("span",{className:"Evidence-status",children:e.statusIcon}),Object(N.jsx)("span",{className:"Evidence-name-".concat(e.statusText),children:e.evidenceName})]},n)}))},D=function(e){var n=e.evidence.resetEvidence,t=e.ghosts.resetGhosts;return Object(N.jsx)("button",{onClick:function(){n(),t()},children:"Reset"})},T=(h.wraith,h.phantom,h.phantom,h.revenant,h.revenant,h.banshee,function(){return null}),C={confirmed:"ADD_CONFIRMED_EVIDENCE",excluded:"ADD_EXCLUDED_EVIDENCE",unconfirmed:"ADD_UNCONFIRMED_EVIDENCE"},I="RESET_EVIDENCE",S="TOGGLE_GHOST_EVIDENCE",_="VALIDATE_ALL_EVIDENCE",w=function(e,n){return Object(o.a)(new Set([].concat(Object(o.a)(e),[n])))},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.evidence,n=arguments.length>1?arguments[1]:void 0,t=n.type,i=n.payload;switch(t){case C.confirmed:return Object(u.a)(Object(u.a)({},e),{},{confirmed:w(e.confirmed,i),excluded:e.excluded.filter((function(e){return e!==i})),unconfirmed:e.unconfirmed.filter((function(e){return e!==i}))});case C.excluded:return Object(u.a)(Object(u.a)({},e),{},{confirmed:e.confirmed.filter((function(e){return e!==i})),excluded:w(e.excluded,i),unconfirmed:e.unconfirmed.filter((function(e){return e!==i}))});case C.unconfirmed:return Object(u.a)(Object(u.a)({},e),{},{confirmed:e.confirmed.filter((function(e){return e!==i})),excluded:e.excluded.filter((function(e){return e!==i})),unconfirmed:w(e.unconfirmed,i)});case I:return g.evidence;case S:var c=e.ghosts.filter((function(e){return e.name===i.ghostName})).map((function(e){return e.evidence})).flat(),r=c.every((function(n){return e.confirmed.includes(n)}));if(r)return Object(u.a)(Object(u.a)({},e),{},{confirmed:[],excluded:[],unconfirmed:e.all});var a=e.all.filter((function(e){return!c.includes(e)}));return Object(u.a)(Object(u.a)({},e),{},{confirmed:c,excluded:a,unconfirmed:[]});case _:var s=Object(o.a)(new Set(e.ghosts.filter((function(n){return e.confirmed.every((function(e){return n.evidence.includes(e)}))&&e.excluded.every((function(e){return!n.evidence.includes(e)}))})).map((function(e){return e.evidence})).flat()));if(0===s.length)return Object(u.a)(Object(u.a)({},e),{},{validGhosts:[]});var d=[e.ghosts.filter((function(n){return e.confirmed.every((function(e){return n.evidence.includes(e)}))})).map((function(e){return e.name}))].flat(),l=function(n){return n===i&&e.excluded.includes(i)},f=e.all.filter((function(n){return l(n)||!s.includes(n)||e.excluded.includes(n)})),m=e.all.filter((function(n){return n.name!==i&&!e.confirmed.includes(n)&&!f.includes(n)})),v=e.all.filter((function(e){return!m.includes(e)&&!f.includes(e)}));return Object(u.a)(Object(u.a)({},e),{},{excluded:f,unconfirmed:m,confirmed:v,validGhosts:d});default:return e}};t(17);var k=function(){var e=function(){var e=c.a.useReducer(A,g.evidence),n=Object(d.a)(e,2),t=n[0],i=n[1];return{incrementStatus:function(e){t.confirmed.includes(e)&&i({payload:e,type:C.excluded}),t.excluded.includes(e)&&i({payload:e,type:C.unconfirmed}),t.unconfirmed.includes(e)&&i({payload:e,type:C.confirmed}),i({payload:e,type:_})},resetEvidence:function(){return i({type:I})},state:t,toggleGhostEvidence:function(e){i({payload:e,type:S}),i({payload:e,type:_})}}}(),n=function(){var e=c.a.useReducer(E,g.ghosts),n=Object(d.a)(e,2),t=n[0],i=n[1];return{dispatch:i,filterGhosts:function(e){return i({payload:e,type:j})},isValid:function(e){return t.valid.includes(e)},resetGhosts:function(){return i({type:O})},state:t,toggleGhost:function(e){return i({payload:e,type:x})}}}();return e&&n&&Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)("header",{className:"App-header",children:"Phasmophobia Evidence Matrix"}),Object(N.jsx)("section",{"data-testid":"test-evidence",className:"App-section-evidence",children:Object(N.jsx)(G,{evidence:e,ghosts:n})}),Object(N.jsx)("section",{"data-testid":"test-ghosts",className:"App-section-ghosts",children:Object(N.jsx)(y,{evidence:e,ghosts:n})}),Object(N.jsx)("section",{className:"App-section-secondary-evidence",children:Object(N.jsx)(T,{})}),Object(N.jsx)("section",{className:"App-section-controls",children:Object(N.jsx)(D,{ghosts:n,evidence:e})}),Object(N.jsxs)("section",{className:"App-section-version",children:["beta version ",s.version]})]})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(k,{})}),document.getElementById("root")),F()}},[[18,1,2]]]);
//# sourceMappingURL=main.10c30beb.chunk.js.map