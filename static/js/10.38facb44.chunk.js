(this["webpackJsonpgoit-react-hw-09-hoks"]=this["webpackJsonpgoit-react-hw-09-hoks"]||[]).push([[10],{249:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(246),c=(t(23),t(251)),o=t(120),i=t(137),u=t.n(i),m=["Eyepatch","Hat","Hijab","LongHairBigHair","LongHairBob","LongHairBun","LongHairCurly","LongHairCurvy","LongHairDreads","LongHairFrida","LongHairFro","LongHairFroBand","LongHairMiaWallace","LongHairNotTooLong","LongHairShavedSides","LongHairStraight","LongHairStraight2","LongHairStraightStrand","NoHair","ShortHairDreads01","ShortHairDreads02","ShortHairFrizzle","ShortHairShaggyMullet","ShortHairShortCurly","ShortHairShortFlat","ShortHairShortRound","ShortHairShortWaved","ShortHairSides","ShortHairTheCaesar","ShortHairTheCaesarSidePart","Turban","WinterHat1","WinterHat2","WinterHat3","WinterHat4"],s=["Blank","Kurt","Prescription01","Prescription02","Round","Sunglasses","Wayfarers"],d=["BeardLight","BeardMajestic","BeardMedium","Blank","MoustacheFancy","MoustacheMagnum"],g=["Concerned","Default","Disbelief","Eating","Grimace","Sad","ScreamOpen","Serious","Smile","Tongue","Twinkle","Vomit"],E=["Tanned","Yellow","Pale","Light","Brown","DarkBrown","Black"],b=function(e){return e[Math.floor(Math.random()*e.length)]};var h=function(){return n.a.createElement(u.a,{style:{width:"100px",height:"100px"},avatarStyle:"Circle",topType:b(m),accessoriesType:b(s),facialHairType:b(d),mouthType:b(g),skinColor:b(E)})},p=t(15),f=t(45);var H={removeContact:f.g},S=Object(p.b)(null,H)((function(e){var a=e.contact,t=e.removeContact;return n.a.createElement(c.a,{className:"col mb-5",border:"primary",style:{width:"18rem",margin:"10px",flex:"0 0 80%"}},n.a.createElement(h,null),n.a.createElement(c.a.Body,null,n.a.createElement(c.a.Title,null,a.name),n.a.createElement(c.a.Text,null,"Email: test@email.com"),n.a.createElement(c.a.Text,null,"Number: ",a.number),n.a.createElement(o.a,{variant:"primary",type:"button",id:a.id,onClick:function(e){return t(e.target.id)}},"Delete contact")))})),y=t(47),v=t(119),C=t(250),j=t(121),N=t(116),L=t(134);var w={addUserContact:f.a},O=Object(p.b)(null,w)((function(e){var a=e.addUserContact,t=Object(r.useState)(""),l=Object(y.a)(t,2),i=l[0],u=l[1],m=Object(r.useState)(""),s=Object(y.a)(m,2),d=s[0],g=s[1],E=Object(r.useState)(""),b=Object(y.a)(E,2),h=b[0],p=b[1],f=Object(r.useState)(""),H=Object(y.a)(f,2),S=H[0],w=H[1];return n.a.createElement(v.a,null,n.a.createElement(C.a,null,n.a.createElement(c.a.Header,null,n.a.createElement(C.a.Toggle,{as:o.a,variant:"button",eventKey:"0",className:"btn btn-primary"},"Add contacts")),n.a.createElement(C.a.Collapse,{eventKey:"0"},n.a.createElement(c.a.Header,null,n.a.createElement(j.a,{className:"justify-content-md-center"},n.a.createElement(N.a,{xs:!0,lg:"5"},n.a.createElement("h2",{className:"row row-cols-md-5 justify-content-center"},"Add contacts"),n.a.createElement(L.a,null,n.a.createElement(L.a.Row,null,n.a.createElement(L.a.Group,{as:N.a,controlId:"FirstName"},n.a.createElement(L.a.Label,null,"First Name"),n.a.createElement(L.a.Control,{type:"name",placeholder:"First Name",name:"firstName",value:i,onChange:function(e){return u(e.target.value)}})),n.a.createElement(L.a.Group,{as:N.a,controlId:"SecondName"},n.a.createElement(L.a.Label,null,"Second Name"),n.a.createElement(L.a.Control,{type:"name",placeholder:"Second Name",name:"secondName",value:d,onChange:function(e){return g(e.target.value)}}))),n.a.createElement(L.a.Row,null,n.a.createElement(L.a.Group,{as:N.a,controlId:"formGridEmail"},n.a.createElement(L.a.Label,null,"Email"),n.a.createElement(L.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:h,onChange:function(e){return p(e.target.value)}})),n.a.createElement(L.a.Group,{as:N.a,controlId:"formGridNumber"},n.a.createElement(L.a.Label,null,"Number"),n.a.createElement(L.a.Control,{type:"Number",placeholder:"Number",name:"number",value:S,onChange:function(e){return w(e.target.value)}}))),n.a.createElement(o.a,{variant:"primary",type:"button",onClick:function(){var e={name:"".concat(i," ").concat(d).replace(/\b\w/g,(function(e){return e.toUpperCase()})),number:S};a(e),u(""),g(""),p(""),w("")}},"Add contacts"))))))))})),T=t(245),k=t(117);var F={getFilterValue:t(3).g},B=Object(p.b)(null,F)((function(e){var a=e.getFilterValue;return n.a.createElement(v.a,null,n.a.createElement(C.a,null,n.a.createElement(c.a.Header,null,n.a.createElement(C.a.Toggle,{as:o.a,variant:"button",eventKey:"0",className:"btn btn-primary"},"Find contacts")),n.a.createElement(C.a.Collapse,{eventKey:"0"},n.a.createElement(c.a.Header,null,n.a.createElement(j.a,{className:"justify-content-md-center"},n.a.createElement(N.a,{xs:!0,lg:"5"},n.a.createElement("h2",{className:"row row-cols-md-5 justify-content-center"},"Find contacts"),n.a.createElement(T.a,{className:"mb-3"},n.a.createElement(k.a,{placeholder:"Start enter username","aria-label":"Start enter username","aria-describedby":"basic-addon2",onChange:function(e){return a(e.target.value)}}))))))))})),M=t(24);var x={getContacts:f.b};a.default=Object(p.b)((function(e){return{user:Object(M.d)(e),contacts:Object(M.c)(e),token:Object(M.e)(e),filter:Object(M.a)(e)}}),x)((function(e){var a=e.getContacts,t=e.token,c=e.contacts,o=e.filter;Object(r.useEffect)((function(){a(t)}),[a,t]);var i=function(e,a){return 0!==a.length?e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):e}(c,o);return n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement(O,null),n.a.createElement(B,null),n.a.createElement("br",null),n.a.createElement("h2",{className:"row row-cols-5 justify-content-center"},"Contacts list"),0!==i.length&&n.a.createElement(l.a,{className:"row row-cols-md-5 justify-content-center"},i.map((function(e){return n.a.createElement(S,{contact:e,key:e.id})}))))}))}}]);
//# sourceMappingURL=10.38facb44.chunk.js.map