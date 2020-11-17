(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(4),r=n.n(s),i=(n(12),n(2));var u=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("div",{className:"header__logo"})})},l=o.a.createContext(),d=o.a.createContext();var p=function(e){var t=o.a.useContext(l),n=e.card.owner._id===t._id,c="element__trash-button ".concat(n?"":"element__trash-button-disabled"),s=e.card.likes.some((function(e){return e._id===t._id})),r="element__like-button ".concat(s?"element__like-button_active":"");return Object(a.jsxs)("article",{className:"element",children:[Object(a.jsx)("img",{onClick:function(){e.onCardClick(e.card)},className:"element__image",alt:e.card.name,src:e.card.link}),Object(a.jsxs)("div",{className:"element__group",children:[Object(a.jsx)("p",{className:"element__text",children:e.card.name}),Object(a.jsx)("button",{onClick:function(){e.onCardLike(e.card)},type:"button",className:r,children:Object(a.jsx)("p",{className:"element__like-counter",children:e.likeCounter})})]}),Object(a.jsx)("button",{onClick:function(){e.onConfirm(e.card)},type:"button",className:c})]})};var f=function(e){var t=o.a.useContext(l);return Object(a.jsxs)("main",{className:"content content-disabled",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar",children:[Object(a.jsx)("img",{className:"profile__avatar-image",alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:"".concat(t.avatar)}),Object(a.jsx)("button",{type:"button",onClick:e.onEditAvatar,className:"profile__avatar-update-button"})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__info-group",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{type:"button",onClick:e.onEditProfile,className:"profile__edit-button",id:"edit-profile"})]}),Object(a.jsx)("p",{className:"profile__description",children:t.about})]}),Object(a.jsx)("button",{type:"button",onClick:e.onAddPlace,className:"profile__add-button",id:"add-card"})]}),Object(a.jsx)("section",{className:"elements",id:"elements",children:e.cards.map((function(t){return Object(a.jsx)(p,{card:t,onCardClick:e.onCardClick,likeCounter:t.likes.length,onCardLike:e.onCardLike,onConfirm:e.onConfirm},t._id)}))})]})},h=(new Date).getFullYear();var j=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",h," Mesto Russia"]})})};var _=function(e){return Object(a.jsxs)("div",{className:"popup ".concat(e.card&&"popup_opened"),id:e.name,children:[Object(a.jsxs)("div",{className:"popup__image-container",children:[Object(a.jsx)("img",{className:"popup__image",alt:e.card.name,src:"".concat(e.card.link)}),Object(a.jsx)("p",{className:"popup__image-description",children:e.card.name}),Object(a.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close-button"})]}),Object(a.jsx)("div",{onClick:e.onClose,className:"popup__overlay popup__overlay_for-image"})]})},m=n(5),b=n(6),O=new(function(){function e(t){Object(m.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(b.a)(e,[{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"updateUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"updateUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponseData(e)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers,body:JSON.stringify({})}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.disLikeCard(e):this.likeCard(e)}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"disLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"a3935a49-8230-429f-9fab-7d2d6f416793","Content-Type":"application/json"}});var v=function(e){return Object(a.jsxs)("div",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:e.name,children:[Object(a.jsxs)("form",{onSubmit:e.onSubmit,className:"popup__form",name:e.name,noValidate:!0,children:[Object(a.jsx)("h2",{className:"popup__form-heading",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__save-button",children:e.buttonText}),Object(a.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close-button"})]}),Object(a.jsx)("div",{onClick:e.onClose,className:"popup__overlay"})]})};var x=function(e){var t=o.a.useContext(l),n=o.a.useContext(d),c=o.a.useState(""),s=Object(i.a)(c,2),r=s[0],u=s[1],p=o.a.useState(""),f=Object(i.a)(p,2),h=f[0],j=f[1],_=o.a.useState(""),m=Object(i.a)(_,2),b=m[0],O=m[1];return o.a.useEffect((function(){u(t.name),j(t.about)}),[t]),o.a.useEffect((function(){u(t.name),j(t.about),O("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[n]),Object(a.jsxs)(v,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:b,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),O("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onUpdateUser({name:r,about:h})},children:[Object(a.jsx)("input",{onChange:function(e){u(e.target.value)},value:r||"",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",className:"popup__input popup__input_name",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"name-input-error"}),Object(a.jsx)("input",{onChange:function(e){j(e.target.value)},value:h||"",type:"text",name:"about",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"200",className:"popup__input popup__input_description",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"about-input-error"})]})};var C=function(e){var t=o.a.useRef(),n=o.a.useContext(d),c=o.a.useState(""),s=Object(i.a)(c,2),r=s[0],u=s[1];return o.a.useEffect((function(){t.current.value="",u("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}),[n]),Object(a.jsxs)(v,{name:"edit-avatar-profile",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:r,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),u("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(a.jsx)("input",{ref:t,defaultValue:"",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_source",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"avatar-input-error"})]})};var k=function(e){var t=o.a.useContext(d),n=o.a.useState(""),c=Object(i.a)(n,2),s=c[0],r=c[1],u=o.a.useState(""),l=Object(i.a)(u,2),p=l[0],f=l[1],h=o.a.useState(""),j=Object(i.a)(h,2),_=j[0],m=j[1];return o.a.useEffect((function(){r(""),f(""),m("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")}),[t]),Object(a.jsxs)(v,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:_,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),m("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onAddPlace({name:s,link:p})},children:[Object(a.jsx)("input",{onChange:function(e){r(e.target.value)},value:s,type:"text",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",className:"popup__input popup__input_title",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"title-input-error"}),Object(a.jsx)("input",{onChange:function(e){f(e.target.value)},value:p,type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_source",required:!0}),Object(a.jsx)("span",{className:"popup__input_error",id:"source-input-error"})]})};var g=function(e){var t=o.a.useContext(d),n=o.a.useState(""),c=Object(i.a)(n,2),s=c[0],r=c[1];return o.a.useEffect((function(){r("\u0414\u0430")}),[t]),Object(a.jsx)(v,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:s,isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),r("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),e.onConfirm()}})};var N=function(){var e=o.a.useState(""),t=Object(i.a)(e,2),n=t[0],c=t[1],s=o.a.useState(""),r=Object(i.a)(s,2),p=r[0],h=r[1];o.a.useEffect((function(){O.getUserInfo().then((function(e){h(e)})).then((function(){document.querySelector(".content").classList.remove("content-disabled")})).catch((function(e){alert(e)}))}),[]);var m=o.a.useState([]),b=Object(i.a)(m,2),v=b[0],N=b[1];o.a.useEffect((function(){O.getCards().then((function(e){N(e)})).catch((function(e){alert(e)}))}),[]);var y=o.a.useState(!1),S=Object(i.a)(y,2),E=S[0],L=S[1],D=o.a.useState(!1),U=Object(i.a)(D,2),T=U[0],P=U[1],A=o.a.useState(!1),R=Object(i.a)(A,2),q=R[0],J=R[1],w=o.a.useState(!1),I=Object(i.a)(w,2),G=I[0],H=I[1],M=o.a.useState(""),V=Object(i.a)(M,2),z=V[0],B=V[1],F=o.a.useState(""),Y=Object(i.a)(F,2),K=Y[0],Q=Y[1];function W(){L(!1),P(!1),J(!1),H(!1),B(""),Q(""),c("")}return Object(a.jsxs)(l.Provider,{value:p,children:[Object(a.jsx)(u,{}),Object(a.jsx)(f,{onEditProfile:function(){c("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),L(!E)},onEditAvatar:function(){c("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),P(!T)},onAddPlace:function(){c("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),J(!q)},onConfirm:function(e){c("\u0414\u0430"),Q(e),H(!G)},cards:v,onCardClick:function(e){B(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===p._id}));O.changeLikeCardStatus(e._id,t).then((function(t){var n=v.map((function(n){return n._id===e._id?t:n}));N(n)})).catch((function(e){alert(e)}))}}),Object(a.jsx)(j,{}),Object(a.jsxs)(d.Provider,{value:n,children:[Object(a.jsx)(x,{isOpen:E,onClose:W,onUpdateUser:function(e){O.updateUserInfo(e).then((function(e){h(e)})).then((function(){W()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(C,{isOpen:T,onClose:W,onUpdateAvatar:function(e){O.updateUserAvatar(e).then((function(e){h(e)})).then((function(){W()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(k,{isOpen:q,onClose:W,onAddPlace:function(e){O.addCard(e).then((function(e){var t=v.concat(e);N(t)})).then((function(){W()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(g,{isOpen:G,onClose:W,onConfirm:function(){var e;e=K,O.deleteCard(e).then((function(){var t=v.filter((function(t){return!(t._id===e._id)}));N(t)})).then((function(){W()})).catch((function(e){alert(e)}))}})]}),Object(a.jsx)(_,{card:z,onClose:W})]})};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.12fd1336.chunk.js.map