Document.prototype.after=Element.prototype.after=function t(){if(this.parentNode){for(var t=Array.prototype.slice.call(arguments),e=this.nextSibling,o=e?t.indexOf(e):-1;-1!==o&&(e=e.nextSibling);)o=t.indexOf(e);this.parentNode.insertBefore(_mutation(arguments),e)}},"Text"in this&&(Text.prototype.after=Element.prototype.after);