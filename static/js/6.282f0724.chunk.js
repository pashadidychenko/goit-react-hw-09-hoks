(this["webpackJsonpgoit-react-hw-09-hoks"]=this["webpackJsonpgoit-react-hw-09-hoks"]||[]).push([[6],{123:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(8),i=n.n(r),c=n(0),s=n.n(c),l=n(15),u=n(28),d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,c=e.size,d=e.active,f=e.className,b=e.block,v=e.type,m=e.as,p=Object(o.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(l.a)(n,"btn"),g=i()(f,h,d&&"active",h+"-"+r,b&&h+"-block",c&&h+"-"+c);if(p.href)return s.a.createElement(u.a,Object(a.a)({},p,{as:m,ref:t,className:i()(g,p.disabled&&"disabled")}));t&&(p.ref=t),v?p.type=v:m||(p.type="button");var O=m||"button";return s.a.createElement(O,Object(a.a)({},p,{className:g}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=d},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);function o(e){var t=function(e){var t=Object(a.useRef)(e);return t.current=e,t}(e);Object(a.useEffect)((function(){return function(){return t.current()}}),[])}},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);function o(){return Object(a.useState)(null)}},240:function(e,t,n){"use strict";function a(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return a}))},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);function o(){var e=Object(a.useRef)(!0),t=Object(a.useRef)((function(){return e.current}));return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0);function o(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){t.current=e})),t.current}},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(50),o=n(0),r=function(e){var t;return"undefined"===typeof document?null:null==e?Object(a.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function i(e,t){var n=Object(o.useState)((function(){return r(e)})),a=n[0],i=n[1];if(!a){var c=r(e);c&&i(c)}return Object(o.useEffect)((function(){t&&a&&t(a)}),[t,a]),Object(o.useEffect)((function(){var t=r(e);t!==a&&i(t)}),[e,a]),a}},251:function(e,t,n){"use strict";var a,o=n(1),r=n(2),i=n(8),c=n.n(i),s=n(67),l=n(29),u=n(50),d=n(68);function f(e){if((!a&&0!==a||e)&&l.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var b=n(239),v=n(30),m=n(138),p=n(54),h=n(0),g=n.n(h);function O(e){void 0===e&&(e=Object(u.a)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}var j=n(240),y=n(40),E=n(19),w=n.n(E),N=n(22),k=n.n(N),x=n(241),C=n(242);function R(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function S(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function F(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=S(e.className,t):e.setAttribute("class",S(e.className&&e.className.baseVal||"",t))}var T=n(51);function D(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function A(e){var t;return D(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=D(e)?Object(u.a)():Object(u.a)(e),n=D(e)||t.defaultView;return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight}var H=["template","script","style"],M=function(e,t,n){[].forEach.call(e.children,(function(e){-1===t.indexOf(e)&&function(e){var t=e.nodeType,n=e.tagName;return 1===t&&-1===H.indexOf(n.toLowerCase())}(e)&&n(e)}))};function P(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var B,I=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,a=void 0===n||n,o=t.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return function(e,t){var n=-1;return e.some((function(e,a){return!!t(e,a)&&(n=a,!0)})),n}(this.data,(function(t){return-1!==t.modals.indexOf(e)}))},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt(Object(T.a)(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(T.a)(t,n)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,n){var a=this.modals.indexOf(e),o=this.containers.indexOf(t);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;M(e,[n,a],(function(e){return P(!0,e)}))}(t,e),-1!==o)return this.data[o].modals.push(e),a;var r={modals:[e],classes:n?n.split(/\s+/):[],overflowing:A(t)};return this.handleContainerOverflow&&this.setContainerStyle(r,t),r.classes.forEach(R.bind(null,t)),this.containers.push(t),this.data.push(r),a},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),a=this.data[n],o=this.containers[n];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(t,1),0===a.modals.length)a.classes.forEach(F.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(a,o),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;M(e,[n,a],(function(e){return P(!1,e)}))}(o,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var r=a.modals[a.modals.length-1],i=r.backdrop;P(!1,r.dialog),P(!1,i)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),L=n(243);function z(e){var t=e||(B||(B=new I),B),n=Object(h.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(e,a){return t.add(n.current,e,a)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:Object(h.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:Object(h.useCallback)((function(e){n.current.backdrop=e}),[])})}var K=Object(h.forwardRef)((function(e,t){var n=e.show,a=void 0!==n&&n,i=e.role,c=void 0===i?"dialog":i,s=e.className,u=e.style,d=e.children,f=e.backdrop,b=void 0===f||f,p=e.keyboard,E=void 0===p||p,w=e.onBackdropClick,N=e.onEscapeKeyDown,R=e.transition,S=e.backdropTransition,F=e.autoFocus,T=void 0===F||F,D=e.enforceFocus,A=void 0===D||D,H=e.restoreFocus,M=void 0===H||H,P=e.restoreFocusOptions,B=e.renderDialog,I=e.renderBackdrop,K=void 0===I?function(e){return g.a.createElement("div",e)}:I,V=e.manager,_=e.container,U=e.containerClassName,W=e.onShow,$=e.onHide,J=void 0===$?function(){}:$,q=e.onExit,G=e.onExited,Q=e.onExiting,X=e.onEnter,Y=e.onEntering,Z=e.onEntered,ee=Object(r.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),te=Object(L.a)(_),ne=z(V),ae=Object(x.a)(),oe=Object(C.a)(a),re=Object(h.useState)(!a),ie=re[0],ce=re[1],se=Object(h.useRef)(null);Object(h.useImperativeHandle)(t,(function(){return ne}),[ne]),l.a&&!oe&&a&&(se.current=O()),R||a||ie?a&&ie&&ce(!1):ce(!0);var le=Object(v.a)((function(){if(ne.add(te,U),me.current=Object(y.a)(document,"keydown",be),ve.current=Object(y.a)(document,"focus",(function(){return setTimeout(de)}),!0),W&&W(),T){var e=O(document);ne.dialog&&e&&!Object(j.a)(ne.dialog,e)&&(se.current=e,ne.dialog.focus())}})),ue=Object(v.a)((function(){var e;(ne.remove(),null==me.current||me.current(),null==ve.current||ve.current(),M)&&(null==(e=se.current)||null==e.focus||e.focus(P),se.current=null)}));Object(h.useEffect)((function(){a&&te&&le()}),[a,te,le]),Object(h.useEffect)((function(){ie&&ue()}),[ie,ue]),Object(m.a)((function(){ue()}));var de=Object(v.a)((function(){if(A&&ae()&&ne.isTopModal()){var e=O();ne.dialog&&e&&!Object(j.a)(ne.dialog,e)&&ne.dialog.focus()}})),fe=Object(v.a)((function(e){e.target===e.currentTarget&&(null==w||w(e),!0===b&&J())})),be=Object(v.a)((function(e){E&&27===e.keyCode&&ne.isTopModal()&&(null==N||N(e),e.defaultPrevented||J())})),ve=Object(h.useRef)(),me=Object(h.useRef)(),pe=R;if(!te||!(a||pe&&!ie))return null;var he=Object(o.a)({role:c,ref:ne.setDialogRef,"aria-modal":"dialog"===c||void 0},ee,{style:u,className:s,tabIndex:-1}),ge=B?B(he):g.a.createElement("div",he,g.a.cloneElement(d,{role:"document"}));pe&&(ge=g.a.createElement(pe,{appear:!0,unmountOnExit:!0,in:!!a,onExit:q,onExiting:Q,onExited:function(){ce(!0);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==G||G.apply(void 0,t)},onEnter:X,onEntering:Y,onEntered:Z},ge));var Oe=null;if(b){var je=S;Oe=K({ref:ne.setBackdropRef,onClick:fe}),je&&(Oe=g.a.createElement(je,{appear:!0,in:!!a},Oe))}return g.a.createElement(g.a.Fragment,null,k.a.createPortal(g.a.createElement(g.a.Fragment,null,Oe,ge),te))})),V={show:w.a.bool,container:w.a.any,onShow:w.a.func,onHide:w.a.func,backdrop:w.a.oneOfType([w.a.bool,w.a.oneOf(["static"])]),renderDialog:w.a.func,renderBackdrop:w.a.func,onEscapeKeyDown:w.a.func,onBackdropClick:w.a.func,containerClassName:w.a.string,keyboard:w.a.bool,transition:w.a.elementType,backdropTransition:w.a.elementType,autoFocus:w.a.bool,enforceFocus:w.a.bool,restoreFocus:w.a.bool,restoreFocusOptions:w.a.shape({preventScroll:w.a.bool}),onEnter:w.a.func,onEntering:w.a.func,onEntered:w.a.func,onExit:w.a.func,onExiting:w.a.func,onExited:w.a.func,manager:w.a.instanceOf(I)};K.displayName="Modal",K.propTypes=V;var _=Object.assign(K,{Manager:I}),U=(n(76),n(9)),W=n(57),$=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",J=".sticky-top",q=".navbar-toggler",G=function(e){function t(){return e.apply(this,arguments)||this}Object(U.a)(t,e);var n=t.prototype;return n.adjustAndStore=function(e,t,n){var a,o=t.style[e];t.dataset[e]=o,Object(T.a)(t,((a={})[e]=parseFloat(Object(T.a)(t,e))+n+"px",a))},n.restore=function(e,t){var n,a=t.dataset[e];void 0!==a&&(delete t.dataset[e],Object(T.a)(t,((n={})[e]=a,n)))},n.setContainerStyle=function(t,n){var a=this;if(e.prototype.setContainerStyle.call(this,t,n),t.overflowing){var o=f();Object(W.a)(n,$).forEach((function(e){return a.adjustAndStore("paddingRight",e,o)})),Object(W.a)(n,J).forEach((function(e){return a.adjustAndStore("marginRight",e,-o)})),Object(W.a)(n,q).forEach((function(e){return a.adjustAndStore("marginRight",e,o)}))}},n.removeContainerStyle=function(t,n){var a=this;e.prototype.removeContainerStyle.call(this,t,n),Object(W.a)(n,$).forEach((function(e){return a.restore("paddingRight",e)})),Object(W.a)(n,J).forEach((function(e){return a.restore("marginRight",e)})),Object(W.a)(n,q).forEach((function(e){return a.restore("marginRight",e)}))},t}(I),Q=n(39),X=n(36),Y=Object(X.a)("modal-body"),Z=g.a.createContext({onHide:function(){}}),ee=n(15),te=g.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.centered,s=e.size,l=e.children,u=e.scrollable,d=Object(r.a)(e,["bsPrefix","className","centered","size","children","scrollable"]),f=(n=Object(ee.a)(n,"modal"))+"-dialog";return g.a.createElement("div",Object(o.a)({},d,{ref:t,className:c()(f,a,s&&n+"-"+s,i&&f+"-centered",u&&f+"-scrollable")}),g.a.createElement("div",{className:n+"-content"},l))}));te.displayName="ModalDialog";var ne=te,ae=Object(X.a)("modal-footer"),oe=n(70),re=g.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.closeLabel,i=e.closeButton,s=e.onHide,l=e.className,u=e.children,d=Object(r.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);n=Object(ee.a)(n,"modal-header");var f=Object(h.useContext)(Z),b=Object(v.a)((function(){f&&f.onHide(),s&&s()}));return g.a.createElement("div",Object(o.a)({ref:t},d,{className:c()(l,n)}),u,i&&g.a.createElement(oe.a,{label:a,onClick:b}))}));re.displayName="ModalHeader",re.defaultProps={closeLabel:"Close",closeButton:!1};var ie,ce=re,se=n(53),le=Object(se.a)("h4"),ue=Object(X.a)("modal-title",{Component:le}),de={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:ne};function fe(e){return g.a.createElement(Q.a,e)}function be(e){return g.a.createElement(Q.a,e)}var ve=g.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.style,O=e.dialogClassName,j=e.children,y=e.dialogAs,E=e["aria-labelledby"],w=e.show,N=e.animation,k=e.backdrop,x=e.keyboard,C=e.onEscapeKeyDown,R=e.onShow,S=e.onHide,F=e.container,T=e.autoFocus,D=e.enforceFocus,A=e.restoreFocus,H=e.restoreFocusOptions,M=e.onEntered,P=e.onExit,B=e.onExiting,I=e.onEnter,L=e.onEntering,z=e.onExited,K=e.backdropClassName,V=e.manager,U=Object(r.a)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),W=Object(h.useState)({}),$=W[0],J=W[1],q=Object(h.useState)(!1),Q=q[0],X=q[1],Y=Object(h.useRef)(!1),te=Object(h.useRef)(!1),ne=Object(h.useRef)(null),ae=Object(b.a)(),oe=ae[0],re=ae[1],ce=Object(v.a)(S);n=Object(ee.a)(n,"modal"),Object(h.useImperativeHandle)(t,(function(){return{get _modal(){return oe}}}),[oe]);var se=Object(h.useMemo)((function(){return{onHide:ce}}),[ce]);function le(){return V||(ie||(ie=new G),ie)}function ue(e){if(l.a){var t=le().isContainerOverflowing(oe),n=e.scrollHeight>Object(u.a)(e).documentElement.clientHeight;J({paddingRight:t&&!n?f():void 0,paddingLeft:!t&&n?f():void 0})}}var de=Object(v.a)((function(){oe&&ue(oe.dialog)}));Object(m.a)((function(){Object(d.a)(window,"resize",de),ne.current&&ne.current()}));var ve=function(){Y.current=!0},me=function(e){Y.current&&oe&&e.target===oe.dialog&&(te.current=!0),Y.current=!1},pe=function(){X(!0),ne.current=Object(p.a)(oe.dialog,(function(){X(!1)}))},he=function(e){"static"!==k?te.current||e.target!==e.currentTarget?te.current=!1:S():function(e){e.target===e.currentTarget&&pe()}(e)},ge=Object(h.useCallback)((function(e){return g.a.createElement("div",Object(o.a)({},e,{className:c()(n+"-backdrop",K,!N&&"show")}))}),[N,K,n]),Oe=Object(o.a)({},i,{},$);N||(Oe.display="block");return g.a.createElement(Z.Provider,{value:se},g.a.createElement(_,{show:w,ref:re,backdrop:k,container:F,keyboard:!0,autoFocus:T,enforceFocus:D,restoreFocus:A,restoreFocusOptions:H,onEscapeKeyDown:function(e){x||"static"!==k?x&&C&&C(e):(e.preventDefault(),pe())},onShow:R,onHide:S,onEnter:function(e){e&&(e.style.display="block",ue(e));for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];I&&I.apply(void 0,[e].concat(n))},onEntering:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];L&&L.apply(void 0,[e].concat(n)),Object(s.a)(window,"resize",de)},onEntered:M,onExit:function(e){ne.current&&ne.current();for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];P&&P.apply(void 0,[e].concat(n))},onExiting:B,onExited:function(e){e&&(e.style.display="");for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];z&&z.apply(void 0,n),Object(d.a)(window,"resize",de)},manager:le(),containerClassName:n+"-open",transition:N?fe:void 0,backdropTransition:N?be:void 0,renderBackdrop:ge,renderDialog:function(e){return g.a.createElement("div",Object(o.a)({role:"dialog"},e,{style:Oe,className:c()(a,n,Q&&n+"-static"),onClick:k?he:void 0,onMouseUp:me,"aria-labelledby":E}),g.a.createElement(y,Object(o.a)({},U,{role:"document",onMouseDown:ve,className:O}),j))}}))}));ve.displayName="Modal",ve.defaultProps=de,ve.Body=Y,ve.Header=ce,ve.Title=ue,ve.Footer=ae,ve.Dialog=ne,ve.TRANSITION_DURATION=300,ve.BACKDROP_TRANSITION_DURATION=150;t.a=ve}}]);
//# sourceMappingURL=6.282f0724.chunk.js.map