!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(t){return e[t]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./client/src/TinyMCE_sslink-dataobject.jsx")}({"./client/src/TinyMCE_sslink-dataobject.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("i18n")),o=r(n("lib/TinyMCEActionRegistrar")),a=r(n("react")),l=r(n("react-dom")),c=n("react-apollo"),s=n("react-redux"),d=r(n("jquery")),u=r(n("lib/ShortcodeSerialiser")),f=n("containers/InsertLinkModal/InsertLinkModal"),p=n("lib/Injector");o.default.addAction("sslink",{text:i.default._t("CMS.LINKLABEL_PAGE","Link to an Object"),onclick:function(e){return e.execCommand("sslinkdataobject")},priority:53}).addCommandWithUrlTest("sslinkdataobject",/^\[dataobject_link.+]$/);var b={init:function(e){e.addCommand("sslinkdataobject",function(){(0,d.default)("#"+e.id).entwine("ss").openLinkDataObjectDialog()})}},g="insert-link__dialog-wrapper--dataobject",j=(0,p.provideInjector)((0,f.createInsertLinkModal)("SilverStripe\\CMS\\Controllers\\CMSPageEditController","editorDataObjectLink"));d.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkDataObjectDialog:function(){var t=e("#"+g);t.length||(t=e('<div id="'+g+'" />'),e("body").append(t)),t.addClass("insert-link__dialog-wrapper"),t.setElement(this),t.open()}}),e("#"+g).entwine({renderModal:function(e){var t=this,n=ss.store,r=ss.apolloClient,o=function(){return t.close()},d=this.getOriginalAttributes(),u=this.getRequireLinkText();l.default.render(a.default.createElement(c.ApolloProvider,{client:r},a.default.createElement(s.Provider,{store:n},a.default.createElement(j,{show:e,isOpen:e,onInsert:function(){return t.handleInsert.apply(t,arguments)},onHide:o,onClosed:o,title:i.default._t("CMS.LINK_PAGE","Link to a DataObject"),bodyClassName:"modal__dialog",className:g,fileAttributes:d,identifier:"Admin.InsertLinkDataObjectModal",requireLinkText:u}))),this[0])},getRequireLinkText:function(){var e=this.getElement().getEditor().getInstance().selection,t=e.getContent()||"";return"A"!==e.getNode().tagName&&""===t.trim()},buildAttributes:function(e){var t=this._super(e),n=u.default.serialise({name:"dataobject_link",properties:{clazz:e.ClassName,id:e.ObjectID}},!0);return t.href=n,t},getOriginalAttributes:function(){var t=this.getElement().getEditor(),n=e(t.getSelectedNode()),r=n.attr("href")||"";if(!r||!o)return{};var i=u.default.match("dataobject_link",!1,r);if(!i)return{};var o=i.original.match(/clazz=(.*?)\W/)[1];return{ClassName:o,ObjectID:i.properties.id?parseInt(i.properties.id,10):0,Description:n.attr("title"),TargetBlank:!!n.attr("target")}}})}),tinymce.PluginManager.add("sslinkdataobject",function(e){return b.init(e)}),t.default=b},"containers/InsertLinkModal/InsertLinkModal":function(e,t){e.exports=InsertLinkModal},i18n:function(e,t){e.exports=i18n},jquery:function(e,t){e.exports=jQuery},"lib/Injector":function(e,t){e.exports=Injector},"lib/ShortcodeSerialiser":function(e,t){e.exports=ShortcodeSerialiser},"lib/TinyMCEActionRegistrar":function(e,t){e.exports=TinyMCEActionRegistrar},react:function(e,t){e.exports=React},"react-apollo":function(e,t){e.exports=ReactApollo},"react-dom":function(e,t){e.exports=ReactDom},"react-redux":function(e,t){e.exports=ReactRedux}});