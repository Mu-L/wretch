!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.wretch=r()}(this,function(){"use strict";const t=Object.assign||function(t){for(var r,o=1;o<arguments.length;o++){r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};var r=function(o,n,e){if(void 0===e&&(e=!1),!o||!n||"object"!=typeof o||"object"!=typeof n)return o;var i=t({},o);for(var u in n)n.hasOwnProperty(u)&&(n[u]instanceof Array&&o[u]instanceof Array?i[u]=e?o[u].concat(n[u]):n[u]:"object"==typeof n[u]&&"object"==typeof o[u]?i[u]=r(o[u],n[u],e):i[u]=n[u]);return i},o={defaults:{},errorType:null},n=function(t){return function(n){return void 0===n&&(n=new Map),function(e){void 0===e&&(e={});var i=fetch(t,r(o.defaults,e)).then(function(t){return t.ok?t:t[o.errorType||"text"]().then(function(r){var n=new Error(r);throw n[o.errorType]=r,n.status=t.status,n.response=t,n})}),u=function(t){return t.catch(function(t){if(!n.has(t.status))throw t;n.get(t.status)(t)})},s=function(t){return function(r){return u(t?i.then(function(r){return r&&r[t]()}).then(function(t){return t&&r&&r(t)||t}):i.then(function(t){return t&&r&&r(t)||t}))}},c={res:s(null),json:s("json"),blob:s("blob"),formData:s("formData"),arrayBuffer:s("arrayBuffer"),text:s("text"),error:function(t,r){return n.set(t,r),c},badRequest:function(t){return c.error(400,t)},unauthorized:function(t){return c.error(401,t)},forbidden:function(t){return c.error(403,t)},notFound:function(t){return c.error(404,t)},timeout:function(t){return c.error(408,t)},internalError:function(t){return c.error(500,t)}};return c}}},e=function(){function e(t,r,o){void 0===r&&(r={}),void 0===o&&(o=new Map),this._url=t,this._options=r,this._catchers=o}return e.factory=function(t,r){return void 0===t&&(t=""),void 0===r&&(r={}),new e(t,r)},e.prototype.selfFactory=function(t){var r=void 0===t?{}:t,o=r.url,n=void 0===o?this._url:o,i=r.options,u=void 0===i?this._options:i,s=r.catchers;return new e(n,u,void 0===s?this._catchers:s)},e.prototype.defaults=function(t,n){return void 0===n&&(n=!1),o.defaults=n?o.defaults=r(o.defaults,t):t,this},e.prototype.errorType=function(t){return o.errorType=t,this},e.prototype.url=function(t){return this.selfFactory({url:t})},e.prototype.baseUrl=function(t){var o=this;return function(n,e){return void 0===n&&(n=""),void 0===e&&(e={}),o.selfFactory({url:t+n,options:r(o._options,e)})}},e.prototype.options=function(t,o){return void 0===o&&(o=!1),this.selfFactory({options:o?r(this._options,t):t})},e.prototype.query=function(t){return this.selfFactory({url:i(this._url,t)})},e.prototype.headers=function(t){return this.selfFactory({options:r(this._options,{headers:t})})},e.prototype.accept=function(t){return this.headers({Accept:t})},e.prototype.content=function(t){return this.headers({"Content-Type":t})},e.prototype.catcher=function(t,r){var o=new Map(this._catchers);return o.set(t,r),this.selfFactory({catchers:o})},e.prototype.get=function(t){return void 0===t&&(t={}),n(this._url)(this._catchers)(r(t,this._options))},e.prototype.delete=function(o){return void 0===o&&(o={}),n(this._url)(this._catchers)(t({},r(o,this._options),{method:"DELETE"}))},e.prototype.put=function(o){return void 0===o&&(o={}),n(this._url)(this._catchers)(t({},r(o,this._options),{method:"PUT"}))},e.prototype.post=function(o){return void 0===o&&(o={}),n(this._url)(this._catchers)(t({},r(o,this._options),{method:"POST"}))},e.prototype.patch=function(o){return void 0===o&&(o={}),n(this._url)(this._catchers)(t({},r(o,this._options),{method:"PATCH"}))},e.prototype.body=function(r){return this.selfFactory({options:t({},this._options,{body:r})})},e.prototype.json=function(t){return this.content("application/json").body(JSON.stringify(t))},e.prototype.formData=function(t){var r=new FormData;for(var o in t)if(t[o]instanceof Array)for(var n=0,e=t[o];n<e.length;n++){var i=e[n];r.append(o+"[]",i)}else r.append(o,t[o]);return this.body(r)},e}(),i=function(t,r){var o=new URLSearchParams,n=t.indexOf("?");for(var e in r)if(r[e]instanceof Array)for(var i=0,u=r[e];i<u.length;i++){var s=u[i];o.append(e,s)}else o.append(e,r[e]);return~n?t.substring(0,n)+"?"+o.toString():t+"?"+o.toString()};return"undefined"==typeof self&&(global.URLSearchParams=require("url").URLSearchParams),e.factory});
//# sourceMappingURL=wretch.js.map
