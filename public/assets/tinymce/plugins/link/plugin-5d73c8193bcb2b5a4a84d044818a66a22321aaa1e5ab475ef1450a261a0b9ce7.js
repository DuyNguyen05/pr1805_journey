!function(c){"use strict";var n,t,e,r,o,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=tinymce.util.Tools.resolve("tinymce.util.VK"),a=function(n){return n.target_list},l=function(n){return n.rel_list},f=function(n){return n.link_class_list},h=function(n){return"boolean"==typeof n.link_assume_external_targets&&n.link_assume_external_targets},s=function(n){return"boolean"==typeof n.link_context_toolbar&&n.link_context_toolbar},g=function(n){return n.link_list},p=function(n){return"string"==typeof n.default_link_target},v=function(n){return n.default_link_target},m=a,d=function(n){return!1!==a(n)},y=l,k=function(n){return l(n)!==undefined},x=f,b=function(n){return f(n)!==undefined},O=function(n){return!1!==n.link_title},w=function(n){return"boolean"==typeof n.allow_unsafe_link_target&&n.allow_unsafe_link_target},_=function(n){return!0===n.link_quicklink},A=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),C=tinymce.util.Tools.resolve("tinymce.Env"),T=function(n){if(!C.ie||10<C.ie){var t=c.document.createElement("a");t.target="_blank",t.href=n,t.rel="noreferrer noopener";var e=c.document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,c.window,0,0,0,0,0,!1,!1,!1,!1,0,null),i=t,u=e,c.document.body.appendChild(i),i.dispatchEvent(u),c.document.body.removeChild(i)}else{var r=c.window.open("","_blank");if(r){r.opener=null;var o=r.document;o.open(),o.write('<meta http-equiv="refresh" content="0; url='+A.DOM.encode(n)+'">'),o.close()}}var i,u},N=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]},S=function(n){return function(){return n}},D=S(!1),M=S(!0),L=D,E=M,U=function(){return P},P=(r={fold:function(n){return n()},is:L,isSome:L,isNone:E,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:e,orThunk:t,map:U,ap:U,each:function(){},bind:U,flatten:U,exists:L,forall:E,filter:U,equals:n=function(n){return n.isNone()},equals_:n,toArray:function(){return[]},toString:S("none()")},Object.freeze&&Object.freeze(r),r),R=function(e){var n=function(){return e},t=function(){return o},r=function(n){return n(e)},o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:E,isNone:L,getOr:n,getOrThunk:n,getOrDie:n,getOrNull:n,getOrUndefined:n,or:t,orThunk:t,map:function(n){return R(n(e))},ap:function(n){return n.fold(U,function(n){return R(n(e))})},each:function(n){n(e)},bind:r,flatten:n,exists:r,forall:r,filter:function(n){return n(e)?o:P},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(L,function(n){return t(e,n)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return o},z={some:R,none:U,from:function(n){return null===n||n===undefined?P:R(n)}},q=function(t){return function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"===t&&Array.prototype.isPrototypeOf(n)?"array":"object"===t&&String.prototype.isPrototypeOf(n)?"string":t}(n)===t}},K=q("string"),I=q("function"),j=(o=Array.prototype.indexOf)===undefined?function(n,t){return V(n,t)}:function(n,t){return o.call(n,t)},B=function(n,t){for(var e=0,r=n.length;e<r;e++)t(n[e],e,n)},V=function(n,t){for(var e=0,r=n.length;e<r;++e)if(n[e]===t)return e;return-1},F=Array.prototype.push,W=function(n){for(var t=[],e=0,r=n.length;e<r;++e){if(!Array.prototype.isPrototypeOf(n[e]))throw new Error("Arr.flatten item "+e+" was not an array, input: "+n);F.apply(t,n[e])}return t},H=function(n,t){var e=function(n,t){for(var e=n.length,r=new Array(e),o=0;o<e;o++){var i=n[o];r[o]=t(i,o,n)}return r}(n,t);return W(e)},$=(Array.prototype.slice,I(Array.from)&&Array.from,tinymce.util.Tools.resolve("tinymce.util.Tools")),G=function(n,t){var e,r,o=["noopener"],i=n?n.split(/\s+/):[],u=function(n){return n.filter(function(n){return-1===$.inArray(o,n)})},a=t?0<(e=u(e=i)).length?e.concat(o):o:u(i);return 0<a.length?(r=a,$.trim(r.sort().join(" "))):""},J=function(n,t){return t=t||n.selection.getNode(),Q(t)?n.dom.select("a[href]",t)[0]:n.dom.getParent(t,"a[href]")},X=function(n){return n&&"A"===n.nodeName&&!!n.href},Q=function(n){return n&&"FIGURE"===n.nodeName&&/\bimage\b/i.test(n.className)},Y=function(n){return t=["title","rel","class","target"],e=function(t,e){return n[e].each(function(n){t[e]=0<n.length?n:null}),t},r={href:n.href},B(t,function(n){r=e(r,n)}),r;var t,e,r},Z=function(n,t){var e=n.dom.select("img",t)[0];if(e){var r=n.dom.getParents(e,"a[href]",t)[0];r&&(r.parentNode.insertBefore(e,r),n.dom.remove(r))}},nn=function(n,t,e){var r=n.dom.select("img",t)[0];if(r){var o=n.dom.create("a",e);r.parentNode.insertBefore(o,r),o.appendChild(r)}},tn=function(s,g,m){s.undoManager.transact(function(){var t,n,e,r,o,i,u,a=s.selection.getNode(),c=J(s,a),l=Y(m);if(!k(s.settings)&&!1===w(s.settings)){var f=G(l.rel,"_blank"===l.target);l.rel=f||null}m.href===g.href&&g.attach(),c?(s.focus(),o=s,i=c,u=l,m.text.each(function(n){i.hasOwnProperty("innerText")?i.innerText=n:i.textContent=n}),o.dom.setAttribs(i,u),o.selection.select(i)):(t=s,n=a,e=m.text,r=l,Q(n)?nn(t,n,r):e.fold(function(){t.execCommand("mceInsertLink",!1,r)},function(n){t.insertContent(t.dom.createHTML("a",r,t.dom.encode(n)))}))})},en=function(e){e.undoManager.transact(function(){var n=e.selection.getNode();if(Q(n))Z(e,n);else{var t=e.dom.getParent(n,"a[href]",e.getBody());t&&e.dom.remove(t,!0)}e.focus()})},rn=function(n){return 0<$.grep(n,X).length},on=function(n){return n.getAttribute("data-mce-href")||n.getAttribute("href")},un=function(n){return!(/</.test(n)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(n)||-1===n.indexOf("href=")))},an=J,cn=function(n,t){return(t?t.innerText||t.textContent:n.getContent({format:"text"})).replace(/\uFEFF/g,"")},ln=G,fn=function(n,t){for(var e=0;e<n.length;e++){var r=t(n[e],e);if(r.isSome())return r}return z.none()},sn=function(n){return K(n.value)?n.value:""},gn=function(e){return void 0===e&&(e=sn),function(n){return z.from(n).map(function(n){return t=n,r=e,o=[],$.each(t,function(n){var t=K(n.text)?n.text:K(n.title)?n.title:"";if(n.menu!==undefined);else{var e=r(n);o.push({text:t,value:e})}}),o;var t,r,o})}},mn={sanitize:function(n){return gn(sn)(n)},sanitizeWith:gn,createUi:function(t,e){return function(n){return{name:t,type:"selectbox",label:e,items:n}}},getValue:sn},dn=function(n){var t=n,e=function(){return t};return{get:e,set:function(n){t=n},clone:function(){return dn(e())}}},hn=function(t,n,e,r){var o,i,u=r[n],a=0<t.length;return u!==undefined?(o=u,i=e,fn(i,function(n){return z.some(n).filter(function(n){return n.value===o})})).map(function(n){return{url:{value:n.value,meta:{text:a?t:n.text,attach:N}},text:a?t:n.text}}):z.none()},pn=function(n,i){var u=dn(n.text),o=function(n,t){var e,r,o=(e=i,r=t.name,"link"===r?e.catalogs.link:"anchor"===r?e.catalogs.anchor:z.none()).getOr([]);return hn(u.get(),t.name,o,n)};return{onChange:function(n,t){return"url"===t.name?function(n){if(u.get().length<=0){var t=n.url.meta.text!==undefined?n.url.meta.text:n.url.value;return z.some({text:t})}return z.none()}(n()):(e=["anchor","link"],r=t.name,-1<j(e,r)?o(n(),t):("text"===t.name&&u.set(n().text),z.none()));var e,r}}},vn=function(){return(vn=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},yn=function(n){var e=z.none(),t=[],r=function(n){o()?u(n):t.push(n)},o=function(){return e.isSome()},i=function(n){B(n,u)},u=function(t){e.each(function(n){c.setTimeout(function(){t(n)},0)})};return n(function(n){e=z.some(n),i(t),t=[]}),{get:r,map:function(e){return yn(function(t){r(function(n){t(e(n))})})},isReady:o}},kn={nu:yn,pure:function(t){return yn(function(n){n(t)})}},xn=function(t){var o=function(n){var r;t((r=n,function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=this;c.setTimeout(function(){r.apply(e,n)},0)}))},e=function(){return kn.nu(o)};return{map:function(r){return xn(function(e){o(function(n){var t=r(n);e(t)})})},bind:function(e){return xn(function(t){o(function(n){e(n).get(t)})})},anonBind:function(t){return xn(function(n){o(function(){t.get(n)})})},toLazy:e,toCached:function(){var t=null;return xn(function(n){null===t&&(t=e()),t.get(n)})},get:o}},bn={nu:xn,pure:function(t){return xn(function(n){n(t)})}},On=tinymce.util.Tools.resolve("tinymce.util.Delay"),wn=function(n){var t=n.href;return 0<t.indexOf("@")&&-1===t.indexOf("//")&&-1===t.indexOf("mailto:")?z.some({message:"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",preprocess:function(n){return vn({},n,{href:"mailto:"+t})}}):z.none()},_n=function(u,n,a){return fn([wn,(e=n,function(n){var t=n.href;return!0===e&&!/^\w+:/i.test(t)||!1===e&&/^\s*www[\.|\d\.]/i.test(t)?z.some({message:"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",preprocess:function(n){return vn({},n,{href:"http://"+t})}}):z.none()})],function(n){return n(a)}).fold(function(){return bn.pure(a)},function(i){return bn.nu(function(t){var e,n,r,o;e=u,n=i.message,r=function(n){c.console.log("state",n),t(n?i.preprocess(a):a)},o=e.selection.getRng(),On.setEditorTimeout(e,function(){e.windowManager.confirm(n,function(n){e.selection.setRng(o),r(n)})})})});var e},An=function(n){var t=n.dom.select("a:not([href])"),e=H(t,function(n){var t=n.name||n.id;return t?[{text:t,value:"#"+t}]:[]});return 0<e.length?z.some([{text:"None",value:""}].concat(e)):z.none()},Cn=function(n){if(b(n.settings)){var t=x(n.settings);return mn.sanitize(t)}return z.none()},Tn=tinymce.util.Tools.resolve("tinymce.util.XHR"),Nn=function(t){var e=function(n){return t.convertURL(n.value||n.url,"href")},n=g(t.settings);return bn.nu(function(t){"string"==typeof n?Tn.send({url:n,success:function(n){return t(function(n){try{return z.some(JSON.parse(n))}catch(t){return z.none()}}(n))},error:function(){return t(z.none())}}):"function"==typeof n?n(function(n){return t(z.some(n))}):t(z.from(n))}).map(function(n){return n.bind(mn.sanitizeWith(e))})},Sn=function(n,t){if(k(n.settings)){var e=y(n.settings),r=t.is("_blank");return(!1===w(n.settings)?mn.sanitizeWith(function(n){return ln(mn.getValue(n),r)}):mn.sanitize)(e)}return z.none()},Dn=[{text:"Current window",value:""},{text:"New window",value:"_blank"}],Mn=function(n){if(d(n.settings)){var t=m(n.settings);return mn.sanitize(t).orThunk(function(){return z.some(Dn)})}return z.none()},Ln=function(n,t,e){var r=n.getAttrib(t,e);return null!==r&&0<r.length?z.some(r):z.none()},En=function(s,g,m){return Nn(s).map(function(n){var t,e,r,o,i,u,a,c,l,f=(e=m,r=(t=s).selection,o=t.dom,i=un(r.getContent())?z.some(cn(r,e)):z.none(),u=e?z.some(o.getAttrib(e,"href")):z.none(),a=e?z.from(o.getAttrib(e,"target")):z.none(),c=Ln(o,e,"rel"),l=Ln(o,e,"class"),{url:u,text:i,title:Ln(o,e,"title"),target:a,rel:c,linkClass:l});return{anchor:f,catalogs:{targets:Mn(s),rels:Sn(s,f.target),classes:Cn(s),anchor:An(s),link:n},optNode:z.from(m),flags:{titleEnabled:O(g)}}})},Un=function(d){var n,t,e;(t=(n=d).settings,e=an(n),En(n,t,e)).map(function(n){var i,u,a,t,e,r,o,c,l,f,s,g,m;return e=(u=t=n,a=h((i=d).settings),function(n){var e=n.getData();if(!e.url.value)return en(i),void n.close();var t=function(t){return z.from(e[t]).filter(function(n){return!u.anchor[t].is(n)})},r={href:e.url.value,text:t("text"),target:t("target"),rel:t("rel"),"class":t("linkClass"),title:t("title")},o={href:e.url.value,attach:e.url.meta!==undefined&&e.url.meta.attach?e.url.meta.attach:function(){}};_n(i,a,r).get(function(n){tn(i,o,n)}),n.close()}),r=d.settings,l=t.anchor.text.map(function(){return{name:"text",type:"input",label:"Text to display"}}).toArray(),f=t.flags.titleEnabled?[{name:"title",type:"input",label:"Title"}]:[],c=p(r)?z.some(v(r)):z.none(),s={url:{value:(o=t).anchor.url.getOr(""),meta:{attach:function(){},text:o.anchor.url.fold(function(){return""},function(){return o.anchor.text.getOr("")}),original:{value:o.anchor.url.getOr("")}}},text:o.anchor.text.getOr(""),title:o.anchor.title.getOr(""),anchor:o.anchor.url.getOr(""),link:o.anchor.url.getOr(""),rel:o.anchor.rel.getOr(""),target:o.anchor.target.or(c).getOr(""),linkClass:o.anchor.linkClass.getOr("")},g=pn(s,t),m=t.catalogs,{title:"Insert/Edit Link",size:"normal",body:{type:"panel",items:W([[{name:"url",type:"urlinput",filetype:"file",label:"URL"}],l,f,function(n){for(var t=[],e=function(n){t.push(n)},r=0;r<n.length;r++)n[r].each(e);return t}([m.anchor.map(mn.createUi("anchor","Anchors")),m.rels.map(mn.createUi("rel","Rel")),m.targets.map(mn.createUi("target","Open link in...")),m.link.map(mn.createUi("link","Link list")),m.classes.map(mn.createUi("linkClass","Class"))])])},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:s,onChange:function(t,n){var e=n.name;g.onChange(t.getData,{name:e}).each(function(n){t.setData(n)})},onSubmit:e}}).get(function(n){d.windowManager.open(n)})},Pn=function(n,t){return n.dom.getParent(t,"a[href]")},Rn=function(n){return Pn(n,n.selection.getStart())},zn=function(n,t){if(t){var e=on(t);if(/^#/.test(e)){var r=n.$(e);r.length&&n.selection.scrollIntoView(r[0],!0)}else T(t.href)}},qn=function(n){return function(){Un(n)}},Kn=function(n){return function(){zn(n,Rn(n))}},In=function(r){r.on("click",function(n){var t=Pn(r,n.target);t&&u.metaKeyPressed(n)&&(n.preventDefault(),zn(r,t))}),r.on("keydown",function(n){var t,e=Rn(r);e&&13===n.keyCode&&!0===(t=n).altKey&&!1===t.shiftKey&&!1===t.ctrlKey&&!1===t.metaKey&&(n.preventDefault(),zn(r,e))})},jn=function(e){return function(t){var n=function(n){return t.setActive(!e.readonly&&!!an(e,n.element))};return e.on("NodeChange",n),function(){return e.off("NodeChange",n)}}},Bn=function(e){return function(t){t.setDisabled(!rn(e.dom.getParents(e.selection.getStart())));var n=function(n){return t.setDisabled(!rn(n.parents))};return e.on("NodeChange",n),function(){return e.off("NodeChange",n)}}},Vn=function(n){n.addCommand("mceLink",function(){_(n.settings)?n.fire("contexttoolbar-show",{toolbarKey:"quicklink"}):qn(n)()})},Fn=function(n){n.addShortcut("Meta+K","",function(){n.execCommand("mceLink")})},Wn=function(n){n.ui.registry.addToggleButton("link",{icon:"link",tooltip:"Insert/edit link",onAction:qn(n),onSetup:jn(n)}),n.ui.registry.addButton("unlink",{icon:"unlink",tooltip:"Remove link",onAction:function(){return en(n)},onSetup:Bn(n)})},Hn=function(n){n.ui.registry.addMenuItem("openlink",{text:"Open link",icon:"new-tab",onAction:Kn(n),onSetup:Bn(n)}),n.ui.registry.addMenuItem("link",{icon:"link",text:"Link...",shortcut:"Meta+K",onAction:qn(n)}),n.ui.registry.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onAction:function(){return en(n)},onSetup:Bn(n)})},$n=function(t){t.ui.registry.addContextMenu("link",{update:function(n){return rn(t.dom.getParents(n,"a"))?"link unlink openlink":"link"}})},Gn=function(i){var n=function(n){var t=i.selection.getNode();return n.setDisabled(!an(i,t)),function(){}};i.ui.registry.addContextForm("quicklink",{launch:{type:"contextformtogglebutton",icon:"link",tooltip:"Link",onSetup:jn(i)},label:"Link",predicate:function(n){return!!an(i,n)&&s(i.settings)},initValue:function(){var n=an(i);return n?on(n):""},commands:[{type:"contextformtogglebutton",icon:"link",tooltip:"Link",primary:!0,onSetup:function(n){var t=i.selection.getNode();return n.setActive(!!an(i,t)),jn(i)(n)},onAction:function(n){var t=an(i),e=n.getValue();if(t)i.dom.setAttrib(t,"href",e),i.selection.collapse(!1),n.hide();else{var r={href:e,attach:function(){}},o=un(i.selection.getContent())?z.some(cn(i.selection,t)).filter(function(n){return 0<n.length}).or(z.from(e)):z.none();tn(i,r,{href:e,text:o,title:z.none(),rel:z.none(),target:z.none(),"class":z.none()}),n.hide()}}},{type:"contextformbutton",icon:"unlink",tooltip:"Remove link",onSetup:n,onAction:function(n){en(i),n.hide()}},{type:"contextformbutton",icon:"new-tab",tooltip:"Open link",onSetup:n,onAction:function(n){Kn(i)(),n.hide()}}]})};i.add("link",function(n){Wn(n),Hn(n),$n(n),Gn(n),In(n),Vn(n),Fn(n)}),function Jn(){}}(window);