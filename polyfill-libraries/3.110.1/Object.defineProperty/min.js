!function(e){var t=Object.prototype.hasOwnProperty.call(Object.prototype,"__defineGetter__"),r="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function n(o,i,f){if(e&&(o===window||o===document||o===Element.prototype||o instanceof Element))return e(o,i,f);if(null===o||!(o instanceof Object||"object"==typeof o))throw new TypeError("Object.defineProperty called on non-object");if(!(f instanceof Object))throw new TypeError("Property description must be an object");var c=String(i),a="value"in f||"writable"in f,p="get"in f&&typeof f.get,s="set"in f&&typeof f.set;if(p){if(p===undefined)return o;if("function"!==p)throw new TypeError("Getter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(a)throw new TypeError(r);Object.__defineGetter__.call(o,c,f.get)}else o[c]=f.value;if(s){if(s===undefined)return o;if("function"!==s)throw new TypeError("Setter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(a)throw new TypeError(r);Object.__defineSetter__.call(o,c,f.set)}return"value"in f&&(o[c]=f.value),o}}(Object.defineProperty);