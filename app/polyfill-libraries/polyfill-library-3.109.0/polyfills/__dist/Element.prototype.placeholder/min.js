Object.defineProperty(Element.prototype,"placeholder",{get:function(){return this.getAttribute("placeholder")},set:function(e){if(e&&/^(input|textarea)$/i.test(this.nodeName)&&(!/^(input)$/i.test(this.nodeName)||/^(email|number|password|search|tel|text|url|)$/i.test(this.getAttribute("type")))){var t=this,n=document.createElement("ms-input"),i=n.appendChild(document.createElement("ms-placeholder")),o=n.runtimeStyle,a=i.runtimeStyle,r=t.currentStyle;i.appendChild(document.createTextNode(e)),o.display="inline-block",o.fontSize=r.fontSize,o.margin=r.margin,o.width=r.width,t.parentNode.insertBefore(n,t).appendChild(t),a.backgroundColor="transparent",a.fontFamily=r.fontFamily,a.fontSize=r.fontSize,a.fontWeight=r.fontWeight,a.margin="2px 0 0 2px",a.padding=r.padding,a.position="absolute",a.display=t.value?"none":"inline-block",t.runtimeStyle.margin="0",i.attachEvent("onclick",function(){t.focus()}),t.attachEvent("onkeypress",function(){a.display="none"}),t.attachEvent("onkeyup",function(){a.display=t.value?"none":"inline-block"}),Object.defineProperty(t,"placeholder",{get:function(){return i.innerHTML},set:function(e){i.innerHTML=e}})}}}),document.attachEvent("onreadystatechange",function(){if("complete"===document.readyState)for(var e=document.querySelectorAll("input,textarea"),t=0,n=e.length;t<n;++t)e[t].placeholder&&(e[t].placeholder=e[t].placeholder)});