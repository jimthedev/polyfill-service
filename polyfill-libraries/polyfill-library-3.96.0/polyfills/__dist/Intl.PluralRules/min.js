!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(e,t,n){if(void 0===n&&(n=Error),!e)throw new n(t)}function t(e){if(null==e)throw new TypeError("undefined/null cannot be converted to object");return Object(e)}function n(e){if("symbol"==typeof e)throw TypeError("Cannot convert a Symbol value to a string");return String(e)}function i(e,t,i,r,a){var o=e[t];if(o!==undefined){if("boolean"!==i&&"string"!==i)throw new TypeError("invalid type");if("boolean"===i&&(o=Boolean(o)),"string"===i&&(o=n(o)),r!==undefined&&!r.filter(function(e){return e==o}).length)throw new RangeError(o+" is not within "+r.join(", "));return o}return a}function r(e,t,n,i){if(e!==undefined){if(e=Number(e),isNaN(e)||e<t||e>n)throw new RangeError(e+" is outside of range ["+t+", "+n+"]");return Math.floor(e)}return i}function a(e,t,n,i,a){return r(e[t],n,i,a)}function o(e,t,n,i){e.get(t)||e.set(t,Object.create(null)),e.get(t)[n]=i}function l(e,t,n){return u(e,t,n)[n]}function u(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=e.get(t);if(!r)throw new TypeError(t+" InternalSlot has not been initialized");return n.reduce(function(e,t){return e[t]=r[t],e},Object.create(null))}function c(e,t,n,i,o){var l=a(t,"minimumIntegerDigits",1,21,1),u=t.minimumFractionDigits,c=t.maximumFractionDigits,f=t.minimumSignificantDigits,s=t.maximumSignificantDigits;if(e.minimumIntegerDigits=l,f!==undefined||s!==undefined)e.roundingType="significantDigits",f=r(f,1,21,1),s=r(s,f,21,21),e.minimumSignificantDigits=f,e.maximumSignificantDigits=s;else if(u!==undefined||c!==undefined){e.roundingType="fractionDigits",u=r(u,0,20,n);var g=Math.max(u,i);c=r(c,u,20,g),e.minimumFractionDigits=u,e.maximumFractionDigits=c}else"compact"===o?e.roundingType="compactRounding":(e.roundingType="fractionDigits",e.minimumFractionDigits=n,e.maximumFractionDigits=i)}function f(t){var n=d(t),i=m(t);return function r(t,a,o,l,u){var c,f=o.localeMatcher;c="lookup"===f?n(t,a):i(t,a);for(var g=c.locale,d={locale:"",dataLocale:g},m="-u",h=0,_=l;h<_.length;h++){var p=_[h],v=u[g];e("object"==typeof v&&null!==v,"locale data "+p+" must be an object");var y=v[p];e(Array.isArray(y),"keyLocaleData for "+p+" must be an array");var b=y[0];e("string"==typeof b||null===b,"value must be string or null but got "+typeof b+" in key "+p);var L="";if(c.extension){var O=s(c.extension,p);O!==undefined&&(""!==O?~y.indexOf(O)&&(b=O,L="-"+p+"-"+b):~O.indexOf("true")&&(b="true",L="-"+p))}if(p in o){var D=o[p];e("string"==typeof D||void 0===D||null===D,"optionsValue must be String, Undefined or Null"),~y.indexOf(D)&&D!==b&&(b=D,L="")}d[p]=b,m+=L}if(m.length>2){var T=g.indexOf("-x-");if(-1===T)g+=m;else{g=g.slice(0,T)+m+g.slice(T,g.length)}g=Intl.getCanonicalLocales(g)[0]}return d.locale=g,d}}function s(t,n){e(2===n.length,"key must have 2 elements");var i=t.length,r="-"+n+"-",a=t.indexOf(r);if(-1!==a){for(var o=a+4,l=o,u=o,c=!1;!c;){var f=t.indexOf("-",u),s=void 0;s=-1===f?i-u:f-u,2===s?c=!0:-1===f?(l=i,c=!0):(l=f,u=f+1)}return t.slice(o,l)}return r="-"+n,a=t.indexOf(r),-1!==a&&a+3===i?"":undefined}function g(e,t){for(var n=t;;){if(~e.indexOf(n))return n;var i=n.lastIndexOf("-");if(!~i)return undefined;i>=2&&"-"===n[i-2]&&(i-=2),n=n.slice(0,i)}}function d(e){return function t(n,i){for(var r={locale:""},a=0,o=i;a<o.length;a++){var l=o[a],u=l.replace(S,""),c=g(n,u);if(c)return r.locale=c,l!==u&&(r.extension=l.slice(u.length+1,l.length)),r}return r.locale=e(),r}}function m(e){return function t(n,i){for(var r={locale:""},a=0,o=i;a<o.length;a++){var l=o[a],u=l.replace(S,""),c=g(n,u);if(c)return r.locale=c,l!==u&&(r.extension=l.slice(u.length+1,l.length)),r}return r.locale=e(),r}}function h(e){for(var t=[e],n=e.split("-"),i=n.length;i>1;i--)t.push(n.slice(0,i-1).join("-"));return t}function _(e,t){for(var n=[],i=0,r=t;i<r.length;i++){var a=r[i],o=a.replace(S,""),l=g(e,o);l&&n.push(l)}return n}function p(e,n,r){return r!==undefined&&(r=t(r),i(r,"localeMatcher","string",["lookup","best fit"],"best fit")),_(e,n)}function v(e){return"MISSING_LOCALE_DATA"===e.type}function y(e,t,n){void 0===n&&(n=function(e,t){return A(A({},e),t)});var i=h(e),r=i.map(function(e){return t.data[e]}).filter(Boolean);if(!r.length)throw new I('Missing locale data for "'+e+'", lookup hierarchy: '+i.join(", "));return r.reverse(),r.reduce(n,{})}function b(e,t){if(!(e instanceof N))throw new TypeError("Method Intl.PluralRules.prototype."+t+" called on incompatible receiver "+String(e))}function L(e,t,n){var i=e.toPrecision(n);if(~i.indexOf(".")&&n>t){for(var r=n-t;r>0&&"0"===i[i.length-1];)i=i.slice(0,i.length-1),r--;if("."===i[i.length-1])return i.slice(0,i.length-1)}return i}function O(e,t,n,i){for(var r=i-n,a=e.toFixed(i);r>0&&"0"===a[a.length-1];)a=a.slice(0,a.length-1),r--;"."===a[a.length-1]&&(a=a.slice(0,a.length-1));var o=a.split(".")[0].length;if(o<t){for(var l="";l.length<t-o;l+="0");a=l+a}return a}function D(e,t,n){var i=l(e,t,"minimumSignificantDigits"),r=l(e,t,"maximumSignificantDigits");return i!==undefined&&r!==undefined?L(n,i,r):O(n,l(e,t,"minimumIntegerDigits"),l(e,t,"minimumFractionDigits"),l(e,t,"maximumFractionDigits"))}var T=["angle-degree","area-acre","area-hectare","concentr-percent","digital-bit","digital-byte","digital-gigabit","digital-gigabyte","digital-kilobit","digital-kilobyte","digital-megabit","digital-megabyte","digital-petabyte","digital-terabit","digital-terabyte","duration-day","duration-hour","duration-millisecond","duration-minute","duration-month","duration-second","duration-week","duration-year","length-centimeter","length-foot","length-inch","length-kilometer","length-meter","length-mile-scandinavian","length-mile","length-millimeter","length-yard","mass-gram","mass-kilogram","mass-ounce","mass-pound","mass-stone","temperature-celsius","temperature-fahrenheit","volume-fluid-ounce","volume-gallon","volume-liter","volume-milliliter"],w=(T.map(function(e){return e.replace(/^(.*?)-/,"")}),undefined&&undefined.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}()),A=undefined&&undefined.__assign||function(){return A=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},A.apply(this,arguments)},S=/-u(?:-[0-9a-z]{2,8})+/gi,I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="MISSING_LOCALE_DATA",t}return w(t,e),t}(Error),x=undefined&&undefined.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var i=Array(e),r=0,t=0;t<n;t++)for(var a=arguments[t],o=0,l=a.length;o<l;o++,r++)i[r]=a[o];return i},N=function(){function e(n,r){if(!(this&&this instanceof e?this.constructor:void 0))throw new TypeError("Intl.PluralRules must be called with 'new'");var a=Intl.getCanonicalLocales(n),l=Object.create(null),u=r===undefined?Object.create(null):t(r);o(e.__INTERNAL_SLOT_MAP__,this,"initializedPluralRules",!0);var s=i(u,"localeMatcher","string",["best fit","lookup"],"best fit");l.localeMatcher=s,o(e.__INTERNAL_SLOT_MAP__,this,"type",i(u,"type","string",["cardinal","ordinal"],"cardinal")),c(e.__INTERNAL_SLOT_MAP__.get(this),u,0,3,"standard");var g=f(e.getDefaultLocale)(e.availableLocales,a,l,e.relevantExtensionKeys,e.localeData);o(e.__INTERNAL_SLOT_MAP__,this,"locale",g.locale)}return e.prototype.resolvedOptions=function(){var t=this;b(this,"resolvedOptions");var n=Object.create(null);return n.locale=l(e.__INTERNAL_SLOT_MAP__,this,"locale"),n.type=l(e.__INTERNAL_SLOT_MAP__,this,"type"),["minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits"].forEach(function(i){var r=l(e.__INTERNAL_SLOT_MAP__,t,i);r!==undefined&&(n[i]=r)}),n.pluralCategories=x(e.localeData[n.locale].categories[n.type]),n},e.prototype.select=function(t){b(this,"select");var n=l(e.__INTERNAL_SLOT_MAP__,this,"locale"),i=l(e.__INTERNAL_SLOT_MAP__,this,"type");return e.localeData[n].fn(D(e.__INTERNAL_SLOT_MAP__,this,Math.abs(Number(t))),"ordinal"==i)},e.prototype.toString=function(){return"[object Intl.PluralRules]"},e.supportedLocalesOf=function(t,n){return p(e.availableLocales,Intl.getCanonicalLocales(t),n)},e.__addLocaleData=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var a=r[i];!function(t){t.availableLocales.forEach(function(n){try{e.localeData[n]=y(n,t)}catch(i){if(v(i))return;throw i}})}(a)}e.availableLocales=Object.keys(e.localeData),e.__defaultLocale||(e.__defaultLocale=e.availableLocales[0])},e.getDefaultLocale=function(){return e.__defaultLocale},e.localeData={},e.availableLocales=[],e.__defaultLocale="en",e.relevantExtensionKeys=[],e.polyfilled=!0,e.__INTERNAL_SLOT_MAP__=new WeakMap,e}();try{"undefined"!=typeof Symbol&&Object.defineProperty(N.prototype,Symbol.toStringTag,{value:"Intl.PluralRules",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(N,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(N.prototype.constructor,"length",{value:0,writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(N.supportedLocalesOf,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(P){}"PluralRules"in Intl&&"one"!==new Intl.PluralRules("en",{minimumFractionDigits:2}).select(1)||Object.defineProperty(Intl,"PluralRules",{value:N,writable:!0,enumerable:!1,configurable:!0})});