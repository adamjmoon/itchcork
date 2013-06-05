/*!
 CoffeeScript Compiler v1.3.3
 http://coffeescript.org

 Copyright 2011, Jeremy Ashkenas
 Released under the MIT License
 */(function(root){var CoffeeScript=function(){function require(a){return require[a]}require["./helpers"]=new function(){var a=this;(function(){var b,c;a.starts=function(a,b,c){return b===a.substr(c,b.length)},a.ends=function(a,b,c){var d;d=b.length;return b===a.substr(a.length-d-(c||0),d)},a.compact=function(a){var b,c,d,e;e=[];for(c=0,d=a.length;c<d;c++)b=a[c],b&&e.push(b);return e},a.count=function(a,b){var c,d;c=d=0;if(!b.length)return 1/0;while(d=1+a.indexOf(b,d))c++;return c},a.merge=function(a,c){return b(b({},a),c)},b=a.extend=function(a,b){var c,d;for(c in b)d=b[c],a[c]=d;return a},a.flatten=c=function(a){var b,d,e,f;d=[];for(e=0,f=a.length;e<f;e++)b=a[e],b instanceof Array?d=d.concat(c(b)):d.push(b);return d},a.del=function(a,b){var c;c=a[b],delete a[b];return c},a.last=function(a,b){return a[a.length-(b||0)-1]}}).call(this)},require["./rewriter"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},u=[].slice;a.Rewriter=function(){function a(){}a.prototype.rewrite=function(a){this.tokens=a,this.removeLeadingNewlines(),this.removeMidExpressionNewlines(),this.closeOpenCalls(),this.closeOpenIndexes(),this.addImplicitIndentation(),this.tagPostfixConditionals(),this.addImplicitBraces(),this.addImplicitParentheses();return this.tokens},a.prototype.scanTokens=function(a){var b,c,d;d=this.tokens,b=0;while(c=d[b])b+=a.call(this,c,b,d);return!0},a.prototype.detectEnd=function(a,b,c){var f,g,h,i,j;h=this.tokens,f=0;while(g=h[a]){if(f===0&&b.call(this,g,a))return c.call(this,g,a);if(!g||f<0)return c.call(this,g,a-1);if(i=g[0],t.call(e,i)>=0)f+=1;else if(j=g[0],t.call(d,j)>=0)f-=1;a+=1}return a-1},a.prototype.removeLeadingNewlines=function(){var a,b,c,d,e;e=this.tokens;for(a=c=0,d=e.length;c<d;a=++c){b=e[a][0];if(b!=="TERMINATOR")break}if(a)return this.tokens.splice(0,a)},a.prototype.removeMidExpressionNewlines=function(){return this.scanTokens(function(a,b,d){var e;if(!(a[0]==="TERMINATOR"&&(e=this.tag(b+1),t.call(c,e)>=0)))return 1;d.splice(b,1);return 0})},a.prototype.closeOpenCalls=function(){var a,b;b=function(a,b){var c;return(c=a[0])===")"||c==="CALL_END"||a[0]==="OUTDENT"&&this.tag(b-1)===")"},a=function(a,b){return this.tokens[a[0]==="OUTDENT"?b-1:b][0]="CALL_END"};return this.scanTokens(function(c,d){c[0]==="CALL_START"&&this.detectEnd(d+1,b,a);return 1})},a.prototype.closeOpenIndexes=function(){var a,b;b=function(a,b){var c;return(c=a[0])==="]"||c==="INDEX_END"},a=function(a,b){return a[0]="INDEX_END"};return this.scanTokens(function(c,d){c[0]==="INDEX_START"&&this.detectEnd(d+1,b,a);return 1})},a.prototype.addImplicitBraces=function(){var a,b,c,f,g,i,j,k;f=[],g=null,k=null,c=!0,i=0,j=0,b=function(a,b){var d,e,f,g,i,m;i=this.tokens.slice(b+1,b+3+1||9e9),d=i[0],g=i[1],f=i[2];if("HERECOMMENT"===(d!=null?d[0]:void 0))return!1;e=a[0],t.call(l,e)>=0&&(c=!1);return(e==="TERMINATOR"||e==="OUTDENT"||t.call(h,e)>=0&&c&&b-j!==1)&&(!k&&this.tag(b-1)!==","||(g!=null?g[0]:void 0)!==":"&&((d!=null?d[0]:void 0)!=="@"||(f!=null?f[0]:void 0)!==":"))||e===","&&d&&(m=d[0])!=="IDENTIFIER"&&m!=="NUMBER"&&m!=="STRING"&&m!=="@"&&m!=="TERMINATOR"&&m!=="OUTDENT"},a=function(a,b){var c;c=this.generate("}","}",a[2]);return this.tokens.splice(b,0,c)};return this.scanTokens(function(h,i,m){var n,o,p,q,r,s,u,v;if(u=q=h[0],t.call(e,u)>=0){f.push([q==="INDENT"&&this.tag(i-1)==="{"?"{":q,i]);return 1}if(t.call(d,q)>=0){g=f.pop();return 1}if(q!==":"||(n=this.tag(i-2))!==":"&&((v=f[f.length-1])!=null?v[0]:void 0)==="{")return 1;c=!0,j=i+1,f.push(["{"]),o=n==="@"?i-2:i-1;while(this.tag(o-2)==="HERECOMMENT")o-=2;p=this.tag(o-1),k=!p||t.call(l,p)>=0,s=new String("{"),s.generated=!0,r=this.generate("{",s,h[2]),m.splice(o,0,r),this.detectEnd(i+2,b,a);return 2})},a.prototype.addImplicitParentheses=function(){var a,b,c,d,e;c=e=d=!1,b=function(a,b){var c,g,i,j;g=a[0];if(!e&&a.fromThen)return!0;if(g==="IF"||g==="ELSE"||g==="CATCH"||g==="->"||g==="=>"||g==="CLASS")e=!0;if(g==="IF"||g==="ELSE"||g==="SWITCH"||g==="TRY"||g==="=")d=!0;if((g==="."||g==="?."||g==="::")&&this.tag(b-1)==="OUTDENT")return!0;return!a.generated&&this.tag(b-1)!==","&&(t.call(h,g)>=0||g==="INDENT"&&!d)&&(g!=="INDENT"||(i=this.tag(b-2))!=="CLASS"&&i!=="EXTENDS"&&(j=this.tag(b-1),t.call(f,j)<0)&&(!(c=this.tokens[b+1])||!c.generated||c[0]!=="{"))},a=function(a,b){return this.tokens.splice(b,0,this.generate("CALL_END",")",a[2]))};return this.scanTokens(function(f,h,k){var m,n,o,p,q,r,s,u;q=f[0];if(q==="CLASS"||q==="IF"||q==="FOR"||q==="WHILE")c=!0;r=k.slice(h-1,h+1+1||9e9),p=r[0],n=r[1],o=r[2],m=!c&&q==="INDENT"&&o&&o.generated&&o[0]==="{"&&p&&(s=p[0],t.call(i,s)>=0),e=!1,d=!1,t.call(l,q)>=0&&(c=!1),p&&!p.spaced&&q==="?"&&(f.call=!0);if(f.fromThen)return 1;if(!(m||(p!=null?p.spaced:void 0)&&(p.call||(u=p[0],t.call(i,u)>=0))&&(t.call(g,q)>=0||!f.spaced&&!f.newLine&&t.call(j,q)>=0)))return 1;k.splice(h,0,this.generate("CALL_START","(",f[2])),this.detectEnd(h+1,b,a),p[0]==="?"&&(p[0]="FUNC_EXIST");return 2})},a.prototype.addImplicitIndentation=function(){var a,b,c,d,e;e=c=d=null,b=function(a,b){var c;return a[1]!==";"&&(c=a[0],t.call(m,c)>=0)&&(a[0]!=="ELSE"||e==="IF"||e==="THEN")},a=function(a,b){return this.tokens.splice(this.tag(b-1)===","?b-1:b,0,d)};return this.scanTokens(function(f,g,h){var i,j,k;i=f[0];if(i==="TERMINATOR"&&this.tag(g+1)==="THEN"){h.splice(g,1);return 0}if(i==="ELSE"&&this.tag(g-1)!=="OUTDENT"){h.splice.apply(h,[g,0].concat(u.call(this.indentation(f))));return 2}if(i==="CATCH"&&((j=this.tag(g+2))==="OUTDENT"||j==="TERMINATOR"||j==="FINALLY")){h.splice.apply(h,[g+2,0].concat(u.call(this.indentation(f))));return 4}if(t.call(n,i)>=0&&this.tag(g+1)!=="INDENT"&&(i!=="ELSE"||this.tag(g+1)!=="IF")){e=i,k=this.indentation(f,!0),c=k[0],d=k[1],e==="THEN"&&(c.fromThen=!0),h.splice(g+1,0,c),this.detectEnd(g+2,b,a),i==="THEN"&&h.splice(g,1);return 1}return 1})},a.prototype.tagPostfixConditionals=function(){var a,b,c;c=null,b=function(a,b){var c;return(c=a[0])==="TERMINATOR"||c==="INDENT"},a=function(a,b){if(a[0]!=="INDENT"||a.generated&&!a.fromThen)return c[0]="POST_"+c[0]};return this.scanTokens(function(d,e){if(d[0]!=="IF")return 1;c=d,this.detectEnd(e+1,b,a);return 1})},a.prototype.indentation=function(a,b){var c,d;b==null&&(b=!1),c=["INDENT",2,a[2]],d=["OUTDENT",2,a[2]],b&&(c.generated=d.generated=!0);return[c,d]},a.prototype.generate=function(a,b,c){var d;d=[a,b,c],d.generated=!0;return d},a.prototype.tag=function(a){var b;return(b=this.tokens[a])!=null?b[0]:void 0};return a}(),b=[["(",")"],["[","]"],["{","}"],["INDENT","OUTDENT"],["CALL_START","CALL_END"],["PARAM_START","PARAM_END"],["INDEX_START","INDEX_END"]],a.INVERSES=k={},e=[],d=[];for(q=0,r=b.length;q<r;q++)s=b[q],o=s[0],p=s[1],e.push(k[p]=o),d.push(k[o]=p);c=["CATCH","WHEN","ELSE","FINALLY"].concat(d),i=["IDENTIFIER","SUPER",")","CALL_END","]","INDEX_END","@","THIS"],g=["IDENTIFIER","NUMBER","STRING","JS","REGEX","NEW","PARAM_START","CLASS","IF","TRY","SWITCH","THIS","BOOL","NULL","UNDEFINED","UNARY","SUPER","@","->","=>","[","(","{","--","++"],j=["+","-"],f=["->","=>","{","[",","],h=["POST_IF","FOR","WHILE","UNTIL","WHEN","BY","LOOP","TERMINATOR"],n=["ELSE","->","=>","TRY","FINALLY","THEN"],m=["TERMINATOR","CATCH","FINALLY","ELSE","OUTDENT","LEADING_WHEN"],l=["TERMINATOR","INDENT","OUTDENT"]}).call(this)},require["./lexer"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};V=require("./rewriter"),J=V.Rewriter,r=V.INVERSES,W=require("./helpers"),R=W.count,U=W.starts,Q=W.compact,T=W.last,a.Lexer=y=function(){function a(){}a.prototype.tokenize=function(a,b){var c,d;b==null&&(b={}),P.test(a)&&(a="\n"+a),a=a.replace(/\r/g,"").replace(N,""),this.code=a,this.line=b.line||0,this.indent=0,this.indebt=0,this.outdebt=0,this.indents=[],this.ends=[],this.tokens=[],c=0;while(this.chunk=a.slice(c))c+=this.identifierToken()||this.commentToken()||this.whitespaceToken()||this.lineToken()||this.heredocToken()||this.stringToken()||this.numberToken()||this.regexToken()||this.jsToken()||this.literalToken();this.closeIndentation(),(d=this.ends.pop())&&this.error("missing "+d);if(b.rewrite===!1)return this.tokens;return(new J).rewrite(this.tokens)},a.prototype.identifierToken=function(){var a,b,c,d,h,i,j,k,l;if(!(h=p.exec(this.chunk)))return 0;d=h[0],c=h[1],a=h[2];if(c==="own"&&this.tag()==="FOR"){this.token("OWN",c);return c.length}b=a||(i=T(this.tokens))&&((k=i[0])==="."||k==="?."||k==="::"||!i.spaced&&i[0]==="@"),j="IDENTIFIER",!b&&(X.call(u,c)>=0||X.call(g,c)>=0)&&(j=c.toUpperCase(),j==="WHEN"&&(l=this.tag(),X.call(v,l)>=0)?j="LEADING_WHEN":j==="FOR"?this.seenFor=!0:j==="UNLESS"?j="IF":X.call(O,j)>=0?j="UNARY":X.call(H,j)>=0&&(j!=="INSTANCEOF"&&this.seenFor?(j="FOR"+j,this.seenFor=!1):(j="RELATION",this.value()==="!"&&(this.tokens.pop(),c="!"+c)))),X.call(t,c)>=0&&(b?(j="IDENTIFIER",c=new String(c),c.reserved=!0):X.call(I,c)>=0&&this.error('reserved word "'+c+'"')),b||(X.call(e,c)>=0&&(c=f[c]),j=function(){switch(c){case"!":return"UNARY";case"==":case"!=":return"COMPARE";case"&&":case"||":return"LOGIC";case"true":case"false":return"BOOL";case"break":case"continue":return"STATEMENT";default:return j}}()),this.token(j,c),a&&this.token(":",":");return d.length},a.prototype.numberToken=function(){var a,b,c,d,e;if(!(c=E.exec(this.chunk)))return 0;d=c[0],/^0[BOX]/.test(d)?this.error("radix prefix '"+d+"' must be lowercase"):/E/.test(d)&&!/^0x/.test(d)?this.error("exponential notation '"+d+"' must be indicated with a lowercase 'e'"):/^0\d*[89]/.test(d)?this.error("decimal literal '"+d+"' must not be prefixed with '0'"):/^0\d+/.test(d)&&this.error("octal literal '"+d+"' must be prefixed with '0o'"),b=d.length;if(e=/^0o([0-7]+)/.exec(d))d="0x"+parseInt(e[1],8).toString(16);if(a=/^0b([01]+)/.exec(d))d="0x"+parseInt(a[1],2).toString(16);this.token("NUMBER",d);return b},a.prototype.stringToken=function(){var a,b,c;switch(this.chunk.charAt(0)){case"'":if(!(a=L.exec(this.chunk)))return 0;this.token("STRING",(c=a[0]).replace(A,"\\\n"));break;case'"':if(!(c=this.balancedString(this.chunk,'"')))return 0;0<c.indexOf("#{",1)?this.interpolateString(c.slice(1,-1)):this.token("STRING",this.escapeLines(c));break;default:return 0}(b=/^(?:\\.|[^\\])*\\(?:0[0-7]|[1-7])/.test(c))&&this.error("octal escape sequences "+c+" are not allowed"),this.line+=R(c,"\n");return c.length},a.prototype.heredocToken=function(){var a,b,c,d;if(!(c=k.exec(this.chunk)))return 0;b=c[0],d=b.charAt(0),a=this.sanitizeHeredoc(c[2],{quote:d,indent:null}),d==='"'&&0<=a.indexOf("#{")?this.interpolateString(a,{heredoc:!0}):this.token("STRING",this.makeString(a,d,!0)),this.line+=R(b,"\n");return b.length},a.prototype.commentToken=function(){var a,b,c;if(!(c=this.chunk.match(h)))return 0;a=c[0],b=c[1],b&&this.token("HERECOMMENT",this.sanitizeHeredoc(b,{herecomment:!0,indent:Array(this.indent+1).join(" ")})),this.line+=R(a,"\n");return a.length},a.prototype.jsToken=function(){var a,b;if(this.chunk.charAt(0)!=="`"||!(a=s.exec(this.chunk)))return 0;this.token("JS",(b=a[0]).slice(1,-1));return b.length},a.prototype.regexToken=function(){var a,b,c,d,e,f,g;if(this.chunk.charAt(0)!=="/")return 0;if(c=n.exec(this.chunk)){b=this.heregexToken(c),this.line+=R(c[0],"\n");return b}d=T(this.tokens);if(d&&(f=d[0],X.call(d.spaced?C:D,f)>=0))return 0;if(!(c=G.exec(this.chunk)))return 0;g=c,c=g[0],e=g[1],a=g[2],e.slice(0,2)==="/*"&&this.error("regular expressions cannot begin with `*`"),e==="//"&&(e="/(?:)/"),this.token("REGEX",""+e+a);return c.length},a.prototype.heregexToken=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;d=a[0],b=a[1],c=a[2];if(0>b.indexOf("#{")){e=b.replace(o,"").replace(/\//g,"\\/"),e.match(/^\*/)&&this.error("regular expressions cannot begin with `*`"),this.token("REGEX","/"+(e||"(?:)")+"/"+c);return d.length}this.token("IDENTIFIER","RegExp"),this.tokens.push(["CALL_START","("]),g=[],k=this.interpolateString(b,{regex:!0});for(i=0,j=k.length;i<j;i++){l=k[i],f=l[0],h=l[1];if(f==="TOKENS")g.push.apply(g,h);else{if(!(h=h.replace(o,"")))continue;h=h.replace(/\\/g,"\\\\"),g.push(["STRING",this.makeString(h,'"',!0)])}g.push(["+","+"])}g.pop(),((m=g[0])!=null?m[0]:void 0)!=="STRING"&&this.tokens.push(["STRING",'""'],["+","+"]),(n=this.tokens).push.apply(n,g),c&&this.tokens.push([",",","],["STRING",'"'+c+'"']),this.token(")",")");return d.length},a.prototype.lineToken=function(){var a,b,c,d,e,f;if(!(c=B.exec(this.chunk)))return 0;b=c[0],this.line+=R(b,"\n"),this.seenFor=!1,e=T(this.tokens,1),f=b.length-1-b.lastIndexOf("\n"),d=this.unfinished();if(f-this.indebt===this.indent){d?this.suppressNewlines():this.newlineToken();return b.length}if(f>this.indent){if(d){this.indebt=f-this.indent,this.suppressNewlines();return b.length}a=f-this.indent+this.outdebt,this.token("INDENT",a),this.indents.push(a),this.ends.push("OUTDENT"),this.outdebt=this.indebt=0}else
    this.indebt=0,this.outdentToken(this.indent-f,d);this.indent=f;return b.length},a.prototype.outdentToken=function(a,b){var c,d;while(a>0)d=this.indents.length-1,this.indents[d]===void 0?a=0:this.indents[d]===this.outdebt?(a-=this.outdebt,this.outdebt=0):this.indents[d]<this.outdebt?(this.outdebt-=this.indents[d],a-=this.indents[d]):(c=this.indents.pop()-this.outdebt,a-=c,this.outdebt=0,this.pair("OUTDENT"),this.token("OUTDENT",c));c&&(this.outdebt-=a);while(this.value()===";")this.tokens.pop();this.tag()!=="TERMINATOR"&&!b&&this.token("TERMINATOR","\n");return this},a.prototype.whitespaceToken=function(){var a,b,c;if(!(a=P.exec(this.chunk))&&!(b=this.chunk.charAt(0)==="\n"))return 0;c=T(this.tokens),c&&(c[a?"spaced":"newLine"]=!0);return a?a[0].length:0},a.prototype.newlineToken=function(){while(this.value()===";")this.tokens.pop();this.tag()!=="TERMINATOR"&&this.token("TERMINATOR","\n");return this},a.prototype.suppressNewlines=function(){this.value()==="\\"&&this.tokens.pop();return this},a.prototype.literalToken=function(){var a,b,e,f,g,h,k,l;(a=F.exec(this.chunk))?(f=a[0],d.test(f)&&this.tagParameters()):f=this.chunk.charAt(0),e=f,b=T(this.tokens);if(f==="="&&b){!b[1].reserved&&(g=b[1],X.call(t,g)>=0)&&this.error('reserved word "'+this.value()+"\" can't be assigned");if((h=b[1])==="||"||h==="&&"){b[0]="COMPOUND_ASSIGN",b[1]+="=";return f.length}}if(f===";")this.seenFor=!1,e="TERMINATOR";else if(X.call(z,f)>=0)e="MATH";else if(X.call(i,f)>=0)e="COMPARE";else if(X.call(j,f)>=0)e="COMPOUND_ASSIGN";else if(X.call(O,f)>=0)e="UNARY";else if(X.call(K,f)>=0)e="SHIFT";else if(X.call(x,f)>=0||f==="?"&&(b!=null?b.spaced:void 0))e="LOGIC";else if(b&&!b.spaced)if(f==="("&&(k=b[0],X.call(c,k)>=0))b[0]==="?"&&(b[0]="FUNC_EXIST"),e="CALL_START";else if(f==="["&&(l=b[0],X.call(q,l)>=0)){e="INDEX_START";switch(b[0]){case"?":b[0]="INDEX_SOAK"}}switch(f){case"(":case"{":case"[":this.ends.push(r[f]);break;case")":case"}":case"]":this.pair(f)}this.token(e,f);return f.length},a.prototype.sanitizeHeredoc=function(a,b){var c,d,e,f,g;e=b.indent,d=b.herecomment;if(d){l.test(a)&&this.error('block comment cannot contain "*/", starting');if(a.indexOf("\n")<=0)return a}else
    while(f=m.exec(a)){c=f[1];if(e===null||0<(g=c.length)&&g<e.length)e=c}e&&(a=a.replace(RegExp("\\n"+e,"g"),"\n")),d||(a=a.replace(/^\n/,""));return a},a.prototype.tagParameters=function(){var a,b,c,d;if(this.tag()!==")")return this;b=[],d=this.tokens,a=d.length,d[--a][0]="PARAM_END";while(c=d[--a])switch(c[0]){case")":b.push(c);break;case"(":case"CALL_START":if(b.length)b.pop();else{if(c[0]==="("){c[0]="PARAM_START";return this}return this}}return this},a.prototype.closeIndentation=function(){return this.outdentToken(this.indent)},a.prototype.balancedString=function(a,b){var c,d,e,f,g,h,i,j;c=0,h=[b];for(d=i=1,j=a.length;1<=j?i<j:i>j;d=1<=j?++i:--i){if(c){--c;continue}switch(e=a.charAt(d)){case"\\":++c;continue;case b:h.pop();if(!h.length)return a.slice(0,d+1||9e9);b=h[h.length-1];continue}b!=="}"||e!=='"'&&e!=="'"?b==="}"&&e==="/"&&(f=n.exec(a.slice(d))||G.exec(a.slice(d)))?c+=f[0].length-1:b==="}"&&e==="{"?h.push(b="}"):b==='"'&&g==="#"&&e==="{"&&h.push(b="}"):h.push(b=e),g=e}return this.error("missing "+h.pop()+", starting")},a.prototype.interpolateString=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;c==null&&(c={}),e=c.heredoc,m=c.regex,o=[],l=0,f=-1;while(j=b.charAt(f+=1)){if(j==="\\"){f+=1;continue}if(j!=="#"||b.charAt(f+1)!=="{"||!(d=this.balancedString(b.slice(f+1),"}")))continue;l<f&&o.push(["NEOSTRING",b.slice(l,f)]),g=d.slice(1,-1);if(g.length){k=(new a).tokenize(g,{line:this.line,rewrite:!1}),k.pop(),((s=k[0])!=null?s[0]:void 0)==="TERMINATOR"&&k.shift();if(i=k.length)i>1&&(k.unshift(["(","(",this.line]),k.push([")",")",this.line])),o.push(["TOKENS",k])}f+=d.length,l=f+1}f>l&&l<b.length&&o.push(["NEOSTRING",b.slice(l)]);if(m)return o;if(!o.length)return this.token("STRING",'""');o[0][0]!=="NEOSTRING"&&o.unshift(["",""]),(h=o.length>1)&&this.token("(","(");for(f=q=0,r=o.length;q<r;f=++q)t=o[f],n=t[0],p=t[1],f&&this.token("+","+"),n==="TOKENS"?(u=this.tokens).push.apply(u,p):this.token("STRING",this.makeString(p,'"',e));h&&this.token(")",")");return o},a.prototype.pair=function(a){var b,c;if(a!==(c=T(this.ends))){"OUTDENT"!==c&&this.error("unmatched "+a),this.indent-=b=T(this.indents),this.outdentToken(b,!0);return this.pair(a)}return this.ends.pop()},a.prototype.token=function(a,b){return this.tokens.push([a,b,this.line])},a.prototype.tag=function(a,b){var c;return(c=T(this.tokens,a))&&(b?c[0]=b:c[0])},a.prototype.value=function(a,b){var c;return(c=T(this.tokens,a))&&(b?c[1]=b:c[1])},a.prototype.unfinished=function(){var a;return w.test(this.chunk)||(a=this.tag())==="\\"||a==="."||a==="?."||a==="UNARY"||a==="MATH"||a==="+"||a==="-"||a==="SHIFT"||a==="RELATION"||a==="COMPARE"||a==="LOGIC"||a==="THROW"||a==="EXTENDS"},a.prototype.escapeLines=function(a,b){return a.replace(A,b?"\\n":"")},a.prototype.makeString=function(a,b,c){if(!a)return b+b;a=a.replace(/\\([\s\S])/g,function(a,c){return c==="\n"||c===b?c:a}),a=a.replace(RegExp(""+b,"g"),"\\$&");return b+this.escapeLines(a,c)+b},a.prototype.error=function(a){throw SyntaxError(""+a+" on line "+(this.line+1))};return a}(),u=["true","false","null","this","new","delete","typeof","in","instanceof","return","throw","break","continue","debugger","if","else","switch","for","while","do","try","catch","finally","class","extends","super"],g=["undefined","then","unless","until","loop","of","by","when"],f={and:"&&",or:"||",is:"==",isnt:"!=",not:"!",yes:"true",no:"false",on:"true",off:"false"},e=function(){var a;a=[];for(S in f)a.push(S);return a}(),g=g.concat(e),I=["case","default","function","var","void","with","const","let","enum","export","import","native","__hasProp","__extends","__slice","__bind","__indexOf","implements","interface","let","package","private","protected","public","static","yield"],M=["arguments","eval"],t=u.concat(I).concat(M),a.RESERVED=I.concat(u).concat(g).concat(M),a.STRICT_PROSCRIBED=M,p=/^([$A-Za-z_\x7f-\uffff][$\w\x7f-\uffff]*)([^\n\S]*:(?!:))?/,E=/^0b[01]+|^0o[0-7]+|^0x[\da-f]+|^\d*\.?\d+(?:e[+-]?\d+)?/i,k=/^("""|''')([\s\S]*?)(?:\n[^\n\S]*)?\1/,F=/^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>])\2=?|\?\.|\.{2,3})/,P=/^[^\n\S]+/,h=/^###([^#][\s\S]*?)(?:###[^\n\S]*|(?:###)?$)|^(?:\s*#(?!##[^#]).*)+/,d=/^[-=]>/,B=/^(?:\n[^\n\S]*)+/,L=/^'[^\\']*(?:\\.[^\\']*)*'/,s=/^`[^\\`]*(?:\\.[^\\`]*)*`/,G=/^(\/(?![\s=])[^[\/\n\\]*(?:(?:\\[\s\S]|\[[^\]\n\\]*(?:\\[\s\S][^\]\n\\]*)*])[^[\/\n\\]*)*\/)([imgy]{0,4})(?!\w)/,n=/^\/{3}([\s\S]+?)\/{3}([imgy]{0,4})(?!\w)/,o=/\s+(?:#.*)?/g,A=/\n/g,m=/\n+([^\n\S]*)/g,l=/\*\//,w=/^\s*(?:,|\??\.(?![.\d])|::)/,N=/\s+$/,j=["-=","+=","/=","*=","%=","||=","&&=","?=","<<=",">>=",">>>=","&=","^=","|="],O=["!","~","NEW","TYPEOF","DELETE","DO"],x=["&&","||","&","|","^"],K=["<<",">>",">>>"],i=["==","!=","<",">","<=",">="],z=["*","/","%"],H=["IN","OF","INSTANCEOF"],b=["TRUE","FALSE"],C=["NUMBER","REGEX","BOOL","NULL","UNDEFINED","++","--","]"],D=C.concat(")","}","THIS","IDENTIFIER","STRING"),c=["IDENTIFIER","STRING","REGEX",")","]","}","?","::","@","THIS","SUPER"],q=c.concat("NUMBER","BOOL","NULL","UNDEFINED"),v=["INDENT","OUTDENT","TERMINATOR"]}).call(this)},require["./parser"]=new function(){var a=this,b=function(){var a={trace:function(){},yy:{},symbols_:{error:2,Root:3,Body:4,Block:5,TERMINATOR:6,Line:7,Expression:8,Statement:9,Return:10,Comment:11,STATEMENT:12,Value:13,Invocation:14,Code:15,Operation:16,Assign:17,If:18,Try:19,While:20,For:21,Switch:22,Class:23,Throw:24,INDENT:25,OUTDENT:26,Identifier:27,IDENTIFIER:28,AlphaNumeric:29,NUMBER:30,STRING:31,Literal:32,JS:33,REGEX:34,DEBUGGER:35,UNDEFINED:36,NULL:37,BOOL:38,Assignable:39,"=":40,AssignObj:41,ObjAssignable:42,":":43,ThisProperty:44,RETURN:45,HERECOMMENT:46,PARAM_START:47,ParamList:48,PARAM_END:49,FuncGlyph:50,"->":51,"=>":52,OptComma:53,",":54,Param:55,ParamVar:56,"...":57,Array:58,Object:59,Splat:60,SimpleAssignable:61,Accessor:62,Parenthetical:63,Range:64,This:65,".":66,"?.":67,"::":68,Index:69,INDEX_START:70,IndexValue:71,INDEX_END:72,INDEX_SOAK:73,Slice:74,"{":75,AssignList:76,"}":77,CLASS:78,EXTENDS:79,OptFuncExist:80,Arguments:81,SUPER:82,FUNC_EXIST:83,CALL_START:84,CALL_END:85,ArgList:86,THIS:87,"@":88,"[":89,"]":90,RangeDots:91,"..":92,Arg:93,SimpleArgs:94,TRY:95,Catch:96,FINALLY:97,CATCH:98,THROW:99,"(":100,")":101,WhileSource:102,WHILE:103,WHEN:104,UNTIL:105,Loop:106,LOOP:107,ForBody:108,FOR:109,ForStart:110,ForSource:111,ForVariables:112,OWN:113,ForValue:114,FORIN:115,FOROF:116,BY:117,SWITCH:118,Whens:119,ELSE:120,When:121,LEADING_WHEN:122,IfBlock:123,IF:124,POST_IF:125,UNARY:126,"-":127,"+":128,"--":129,"++":130,"?":131,MATH:132,SHIFT:133,COMPARE:134,LOGIC:135,RELATION:136,COMPOUND_ASSIGN:137,$accept:0,$end:1},terminals_:{2:"error",6:"TERMINATOR",12:"STATEMENT",25:"INDENT",26:"OUTDENT",28:"IDENTIFIER",30:"NUMBER",31:"STRING",33:"JS",34:"REGEX",35:"DEBUGGER",36:"UNDEFINED",37:"NULL",38:"BOOL",40:"=",43:":",45:"RETURN",46:"HERECOMMENT",47:"PARAM_START",49:"PARAM_END",51:"->",52:"=>",54:",",57:"...",66:".",67:"?.",68:"::",70:"INDEX_START",72:"INDEX_END",73:"INDEX_SOAK",75:"{",77:"}",78:"CLASS",79:"EXTENDS",82:"SUPER",83:"FUNC_EXIST",84:"CALL_START",85:"CALL_END",87:"THIS",88:"@",89:"[",90:"]",92:"..",95:"TRY",97:"FINALLY",98:"CATCH",99:"THROW",100:"(",101:")",103:"WHILE",104:"WHEN",105:"UNTIL",107:"LOOP",109:"FOR",113:"OWN",115:"FORIN",116:"FOROF",117:"BY",118:"SWITCH",120:"ELSE",122:"LEADING_WHEN",124:"IF",125:"POST_IF",126:"UNARY",127:"-",128:"+",129:"--",130:"++",131:"?",132:"MATH",133:"SHIFT",134:"COMPARE",135:"LOGIC",136:"RELATION",137:"COMPOUND_ASSIGN"},productions_:[0,[3,0],[3,1],[3,2],[4,1],[4,3],[4,2],[7,1],[7,1],[9,1],[9,1],[9,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[8,1],[5,2],[5,3],[27,1],[29,1],[29,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[17,3],[17,4],[17,5],[41,1],[41,3],[41,5],[41,1],[42,1],[42,1],[42,1],[10,2],[10,1],[11,1],[15,5],[15,2],[50,1],[50,1],[53,0],[53,1],[48,0],[48,1],[48,3],[48,4],[48,6],[55,1],[55,2],[55,3],[56,1],[56,1],[56,1],[56,1],[60,2],[61,1],[61,2],[61,2],[61,1],[39,1],[39,1],[39,1],[13,1],[13,1],[13,1],[13,1],[13,1],[62,2],[62,2],[62,2],[62,1],[62,1],[69,3],[69,2],[71,1],[71,1],[59,4],[76,0],[76,1],[76,3],[76,4],[76,6],[23,1],[23,2],[23,3],[23,4],[23,2],[23,3],[23,4],[23,5],[14,3],[14,3],[14,1],[14,2],[80,0],[80,1],[81,2],[81,4],[65,1],[65,1],[44,2],[58,2],[58,4],[91,1],[91,1],[64,5],[74,3],[74,2],[74,2],[74,1],[86,1],[86,3],[86,4],[86,4],[86,6],[93,1],[93,1],[94,1],[94,3],[19,2],[19,3],[19,4],[19,5],[96,3],[24,2],[63,3],[63,5],[102,2],[102,4],[102,2],[102,4],[20,2],[20,2],[20,2],[20,1],[106,2],[106,2],[21,2],[21,2],[21,2],[108,2],[108,2],[110,2],[110,3],[114,1],[114,1],[114,1],[114,1],[112,1],[112,3],[111,2],[111,2],[111,4],[111,4],[111,4],[111,6],[111,6],[22,5],[22,7],[22,4],[22,6],[119,1],[119,2],[121,3],[121,4],[123,3],[123,5],[18,1],[18,3],[18,3],[18,3],[16,2],[16,2],[16,2],[16,2],[16,2],[16,2],[16,2],[16,2],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,5],[16,3]],performAction:function(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return this.$=new d.Block;case 2:return this.$=f[h];case 3:return this.$=f[h-1];case 4:this.$=d.Block.wrap([f[h]]);break;case 5:this.$=f[h-2].push(f[h]);break;case 6:this.$=f[h-1];break;case 7:this.$=f[h];break;case 8:this.$=f[h];break;case 9:this.$=f[h];break;case 10:this.$=f[h];break;case 11:this.$=new d.Literal(f[h]);break;case 12:this.$=f[h];break;case 13:this.$=f[h];break;case 14:this.$=f[h];break;case 15:this.$=f[h];break;case 16:this.$=f[h];break;case 17:this.$=f[h];break;case 18:this.$=f[h];break;case 19:this.$=f[h];break;case 20:this.$=f[h];break;case 21:this.$=f[h];break;case 22:this.$=f[h];break;case 23:this.$=f[h];break;case 24:this.$=new d.Block;break;case 25:this.$=f[h-1];break;case 26:this.$=new d.Literal(f[h]);break;case 27:this.$=new d.Literal(f[h]);break;case 28:this.$=new d.Literal(f[h]);break;case 29:this.$=f[h];break;case 30:this.$=new d.Literal(f[h]);break;case 31:this.$=new d.Literal(f[h]);break;case 32:this.$=new d.Literal(f[h]);break;case 33:this.$=new d.Undefined;break;case 34:this.$=new d.Null;break;case 35:this.$=new d.Bool(f[h]);break;case 36:this.$=new d.Assign(f[h-2],f[h]);break;case 37:this.$=new d.Assign(f[h-3],f[h]);break;case 38:this.$=new d.Assign(f[h-4],f[h-1]);break;case 39:this.$=new d.Value(f[h]);break;case 40:this.$=new d.Assign(new d.Value(f[h-2]),f[h],"object");break;case 41:this.$=new d.Assign(new d.Value(f[h-4]),f[h-1],"object");break;case 42:this.$=f[h];break;case 43:this.$=f[h];break;case 44:this.$=f[h];break;case 45:this.$=f[h];break;case 46:this.$=new d.Return(f[h]);break;case 47:this.$=new d.Return;break;case 48:this.$=new d.Comment(f[h]);break;case 49:this.$=new d.Code(f[h-3],f[h],f[h-1]);break;case 50:this.$=new d.Code([],f[h],f[h-1]);break;case 51:this.$="func";break;case 52:this.$="boundfunc";break;case 53:this.$=f[h];break;case 54:this.$=f[h];break;case 55:this.$=[];break;case 56:this.$=[f[h]];break;case 57:this.$=f[h-2].concat(f[h]);break;case 58:this.$=f[h-3].concat(f[h]);break;case 59:this.$=f[h-5].concat(f[h-2]);break;case 60:this.$=new d.Param(f[h]);break;case 61:this.$=new d.Param(f[h-1],null,!0);break;case 62:this.$=new d.Param(f[h-2],f[h]);break;case 63:this.$=f[h];break;case 64:this.$=f[h];break;case 65:this.$=f[h];break;case 66:this.$=f[h];break;case 67:this.$=new d.Splat(f[h-1]);break;case 68:this.$=new d.Value(f[h]);break;case 69:this.$=f[h-1].add(f[h]);break;case 70:this.$=new d.Value(f[h-1],[].concat(f[h]));break;case 71:this.$=f[h];break;case 72:this.$=f[h];break;case 73:this.$=new d.Value(f[h]);break;case 74:this.$=new d.Value(f[h]);break;case 75:this.$=f[h];break;case 76:this.$=new d.Value(f[h]);break;case 77:this.$=new d.Value(f[h]);break;case 78:this.$=new d.Value(f[h]);break;case 79:this.$=f[h];break;case 80:this.$=new d.Access(f[h]);break;case 81:this.$=new d.Access(f[h],"soak");break;case 82:this.$=[new d.Access(new d.Literal("prototype")),new d.Access(f[h])];break;case 83:this.$=new d.Access(new d.Literal("prototype"));break;case 84:this.$=f[h];break;case 85:this.$=f[h-1];break;case 86:this.$=d.extend(f[h],{soak:!0});break;case 87:this.$=new d.Index(f[h]);break;case 88:this.$=new d.Slice(f[h]);break;case 89:this.$=new d.Obj(f[h-2],f[h-3].generated);break;case 90:this.$=[];break;case 91:this.$=[f[h]];break;case 92:this.$=f[h-2].concat(f[h]);break;case 93:this.$=f[h-3].concat(f[h]);break;case 94:this.$=f[h-5].concat(f[h-2]);break;case 95:this.$=new d.Class;break;case 96:this.$=new d.Class(null,null,f[h]);break;case 97:this.$=new d.Class(null,f[h]);break;case 98:this.$=new d.Class(null,f[h-1],f[h]);break;case 99:this.$=new d.Class(f[h]);break;case 100:this.$=new d.Class(f[h-1],null,f[h]);break;case 101:this.$=new d.Class(f[h-2],f[h]);break;case 102:this.$=new d.Class(f[h-3],f[h-1],f[h]);break;case 103:this.$=new d.Call(f[h-2],f[h],f[h-1]);break;case 104:this.$=new d.Call(f[h-2],f[h],f[h-1]);break;case 105:this.$=new d.Call("super",[new d.Splat(new d.Literal("arguments"))]);break;case 106:this.$=new d.Call("super",f[h]);break;case 107:this.$=!1;break;case 108:this.$=!0;break;case 109:this.$=[];break;case 110:this.$=f[h-2];break;case 111:this.$=new d.Value(new d.Literal("this"));break;case 112:this.$=new d.Value(new d.Literal("this"));break;case 113:this.$=new d.Value(new d.Literal("this"),[new d.Access(f[h])],"this");break;case 114:this.$=new d.Arr([]);break;case 115:this.$=new d.Arr(f[h-2]);break;case 116:this.$="inclusive";break;case 117:this.$="exclusive";break;case 118:this.$=new d.Range(f[h-3],f[h-1],f[h-2]);break;case 119:this.$=new d.Range(f[h-2],f[h],f[h-1]);break;case 120:this.$=new d.Range(f[h-1],null,f[h]);break;case 121:this.$=new d.Range(null,f[h],f[h-1]);break;case 122:this.$=new d.Range(null,null,f[h]);break;case 123:this.$=[f[h]];break;case 124:this.$=f[h-2].concat(f[h]);break;case 125:this.$=f[h-3].concat(f[h]);break;case 126:this.$=f[h-2];break;case 127:this.$=f[h-5].concat(f[h-2]);break;case 128:this.$=f[h];break;case 129:this.$=f[h];break;case 130:this.$=f[h];break;case 131:this.$=[].concat(f[h-2],f[h]);break;case 132:this.$=new d.Try(f[h]);break;case 133:this.$=new d.Try(f[h-1],f[h][0],f[h][1]);break;case 134:this.$=new d.Try(f[h-2],null,null,f[h]);break;case 135:this.$=new d.Try(f[h-3],f[h-2][0],f[h-2][1],f[h]);break;case 136:this.$=[f[h-1],f[h]];break;case 137:this.$=new d.Throw(f[h]);break;case 138:this.$=new d.Parens(f[h-1]);break;case 139:this.$=new d.Parens(f[h-2]);break;case 140:this.$=new d.While(f[h]);break;case 141:this.$=new d.While(f[h-2],{guard:f[h]});break;case 142:this.$=new d.While(f[h],{invert:!0});break;case 143:this.$=new d.While(f[h-2],{invert:!0,guard:f[h]});break;case 144:this.$=f[h-1].addBody(f[h]);break;case 145:this.$=f[h].addBody(d.Block.wrap([f[h-1]]));break;case 146:this.$=f[h].addBody(d.Block.wrap([f[h-1]]));break;case 147:this.$=f[h];break;case 148:this.$=(new d.While(new d.Literal("true"))).addBody(f[h]);break;case 149:this.$=(new d.While(new d.Literal("true"))).addBody(d.Block.wrap([f[h]]));break;case 150:this.$=new d.For(f[h-1],f[h]);break;case 151:this.$=new d.For(f[h-1],f[h]);break;case 152:this.$=new d.For(f[h],f[h-1]);break;case 153:this.$={source:new d.Value(f[h])};break;case 154:this.$=function(){f[h].own=f[h-1].own,f[h].name=f[h-1][0],f[h].index=f[h-1][1];return f[h]}();break;case 155:this.$=f[h];break;case 156:this.$=function(){f[h].own=!0;return f[h]}();break;case 157:this.$=f[h];break;case 158:this.$=f[h];break;case 159:this.$=new d.Value(f[h]);break;case 160:this.$=new d.Value(f[h]);break;case 161:this.$=[f[h]];break;case 162:this.$=[f[h-2],f[h]];break;case 163:this.$={source:f[h]};break;case 164:this.$={source:f[h],object:!0};break;case 165:this.$={source:f[h-2],guard:f[h]};break;case 166:this.$={source:f[h-2],guard:f[h],object:!0};break;case 167:this.$={source:f[h-2],step:f[h]};break;case 168:this.$={source:f[h-4],guard:f[h-2],step:f[h]};break;case 169:this.$={source:f[h-4],step:f[h-2],guard:f[h]};break;case 170:this.$=new d.Switch(f[h-3],f[h-1]);break;case 171:this.$=new d.Switch(f[h-5],f[h-3],f[h-1]);break;case 172:this.$=new d.Switch(null,f[h-1]);break;case 173:this.$=new d.Switch(null,f[h-3],f[h-1]);break;case 174:this.$=f[h];break;case 175:this.$=f[h-1].concat(f[h]);break;case 176:this.$=[[f[h-1],f[h]]];break;case 177:this.$=[[f[h-2],f[h-1]]];break;case 178:this.$=new d.If(f[h-1],f[h],{type:f[h-2]});break;case 179:this.$=f[h-4].addElse(new d.If(f[h-1],f[h],{type:f[h-2]}));break;case 180:this.$=f[h];break;case 181:this.$=f[h-2].addElse(f[h]);break;case 182:this.$=new d.If(f[h],d.Block.wrap([f[h-2]]),{type:f[h-1],statement:!0});break;case 183:this.$=new d.If(f[h],d.Block.wrap([f[h-2]]),{type:f[h-1],statement:!0});break;case 184:this.$=new d.Op(f[h-1],f[h]);break;case 185:this.$=new d.Op("-",f[h]);break;case 186:this.$=new d.Op("+",f[h]);break;case 187:this.$=new d.Op("--",f[h]);break;case 188:this.$=new d.Op("++",f[h]);break;case 189:this.$=new d.Op("--",f[h-1],null,!0);break;case 190:this.$=new d.Op("++",f[h-1],null,!0);break;case 191:this.$=new d.Existence(f[h-1]);break;case 192:this.$=new d.Op("+",f[h-2],f[h]);break;case 193:this.$=new d.Op("-",f[h-2],f[h]);break;case 194:this.$=new d.Op(f[h-1],f[h-2],f[h]);break;case 195:this.$=new d.Op(f[h-1],f[h-2],f[h]);break;case 196:this.$=new d.Op(f[h-1],f[h-2],f[h]);break;case 197:this.$=new d.Op(f[h-1],f[h-2],f[h]);break;case 198:this.$=function(){return f[h-1].charAt(0)==="!"?(new d.Op(f[h-1].slice(1),f[h-2],f[h])).invert():new d.Op(f[h-1],f[h-2],f[h])}();break;case 199:this.$=new d.Assign(f[h-2],f[h],f[h-1]);break;case 200:this.$=new d.Assign(f[h-4],f[h-1],f[h-3]);break;case 201:this.$=new d.Extends(f[h-2],f[h])}},table:[{1:[2,1],3:1,4:2,5:3,7:4,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,5],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[3]},{1:[2,2],6:[1,74]},{6:[1,75]},{1:[2,4],6:[2,4],26:[2,4],101:[2,4]},{4:77,7:4,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,26:[1,76],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,7],6:[2,7],26:[2,7],101:[2,7],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,8],6:[2,8],26:[2,8],101:[2,8],102:90,103:[1,65],105:[1,66],108:91,109:[1,68],110:69,125:[1,89]},{1:[2,12],6:[2,12],25:[2,12],26:[2,12],49:[2,12],54:[2,12],57:[2,12],62:93,66:[1,95],67:[1,96],68:[1,97],69:98,70:[1,99],72:[2,12],73:[1,100],77:[2,12],80:92,83:[1,94],84:[2,107],85:[2,12],90:[2,12],92:[2,12],101:[2,12],103:[2,12],104:[2,12],105:[2,12],109:[2,12],117:[2,12],125:[2,12],127:[2,12],128:[2,12],131:[2,12],132:[2,12],133:[2,12],134:[2,12],135:[2,12],136:[2,12]},{1:[2,13],6:[2,13],25:[2,13],26:[2,13],49:[2,13],54:[2,13],57:[2,13],62:102,66:[1,95],67:[1,96],68:[1,97],69:98,70:[1,99],72:[2,13],73:[1,100],77:[2,13],80:101,83:[1,94],84:[2,107],85:[2,13],90:[2,13],92:[2,13],101:[2,13],103:[2,13],104:[2,13],105:[2,13],109:[2,13],117:[2,13],125:[2,13],127:[2,13],128:[2,13],131:[2,13],132:[2,13],133:[2,13],134:[2,13],135:[2,13],136:[2,13]},{1:[2,14],6:[2,14],25:[2,14],26:[2,14],49:[2,14],54:[2,14],57:[2,14],72:[2,14],77:[2,14],85:[2,14],90:[2,14],92:[2,14],101:[2,14],103:[2,14],104:[2,14],105:[2,14],109:[2,14],117:[2,14],125:[2,14],127:[2,14],128:[2,14],131:[2,14],132:[2,14],133:[2,14],134:[2,14],135:[2,14],136:[2,14]},{1:[2,15],6:[2,15],25:[2,15],26:[2,15],49:[2,15],54:[2,15],57:[2,15],72:[2,15],77:[2,15],85:[2,15],90:[2,15],92:[2,15],101:[2,15],103:[2,15],104:[2,15],105:[2,15],109:[2,15],117:[2,15],125:[2,15],127:[2,15],128:[2,15],131:[2,15],132:[2,15],133:[2,15],134:[2,15],135:[2,15],136:[2,15]},{1:[2,16],6:[2,16],25:[2,16],26:[2,16],49:[2,16],54:[2,16],57:[2,16],72:[2,16],77:[2,16],85:[2,16],90:[2,16],92:[2,16],101:[2,16],103:[2,16],104:[2,16],105:[2,16],109:[2,16],117:[2,16],125:[2,16],127:[2,16],128:[2,16],131:[2,16],132:[2,16],133:[2,16],134:[2,16],135:[2,16],136:[2,16]},{1:[2,17],6:[2,17],25:[2,17],26:[2,17],49:[2,17],54:[2,17],57:[2,17],72:[2,17],77:[2,17],85:[2,17],90:[2,17],92:[2,17],101:[2,17],103:[2,17],104:[2,17],105:[2,17],109:[2,17],117:[2,17],125:[2,17],127:[2,17],128:[2,17],131:[2,17],132:[2,17],133:[2,17],134:[2,17],135:[2,17],136:[2,17]},{1:[2,18],6:[2,18],25:[2,18],26:[2,18],49:[2,18],54:[2,18],57:[2,18],72:[2,18],77:[2,18],85:[2,18],90:[2,18],92:[2,18],101:[2,18],103:[2,18],104:[2,18],105:[2,18],109:[2,18],117:[2,18],125:[2,18],127:[2,18],128:[2,18],131:[2,18],132:[2,18],133:[2,18],134:[2,18],135:[2,18],136:[2,18]},{1:[2,19],6:[2,19],25:[2,19],26:[2,19],49:[2,19],54:[2,19],57:[2,19],72:[2,19],77:[2,19],85:[2,19],90:[2,19],92:[2,19],101:[2,19],103:[2,19],104:[2,19],105:[2,19],109:[2,19],117:[2,19],125:[2,19],127:[2,19],128:[2,19],131:[2,19],132:[2,19],133:[2,19],134:[2,19],135:[2,19],136:[2,19]},{1:[2,20],6:[2,20],25:[2,20],26:[2,20],49:[2,20],54:[2,20],57:[2,20],72:[2,20],77:[2,20],85:[2,20],90:[2,20],92:[2,20],101:[2,20],103:[2,20],104:[2,20],105:[2,20],109:[2,20],117:[2,20],125:[2,20],127:[2,20],128:[2,20],131:[2,20],132:[2,20],133:[2,20],134:[2,20],135:[2,20],136:[2,20]},{1:[2,21],6:[2,21],25:[2,21],26:[2,21],49:[2,21],54:[2,21],57:[2,21],72:[2,21],77:[2,21],85:[2,21],90:[2,21],92:[2,21],101:[2,21],103:[2,21],104:[2,21],105:[2,21],109:[2,21],117:[2,21],125:[2,21],127:[2,21],128:[2,21],131:[2,21],132:[2,21],133:[2,21],134:[2,21],135:[2,21],136:[2,21]},{1:[2,22],6:[2,22],25:[2,22],26:[2,22],49:[2,22],54:[2,22],57:[2,22],72:[2,22],77:[2,22],85:[2,22],90:[2,22],92:[2,22],101:[2,22],103:[2,22],104:[2,22],105:[2,22],109:[2,22],117:[2,22],125:[2,22],127:[2,22],128:[2,22],131:[2,22],132:[2,22],133:[2,22],134:[2,22],135:[2,22],136:[2,22]},{1:[2,23],6:[2,23],25:[2,23],26:[2,23],49:[2,23],54:[2,23],57:[2,23],72:[2,23],77:[2,23],85:[2,23],90:[2,23],92:[2,23],101:[2,23],103:[2,23],104:[2,23],105:[2,23],109:[2,23],117:[2,23],125:[2,23],127:[2,23],128:[2,23],131:[2,23],132:[2,23],133:[2,23],134:[2,23],135:[2,23],136:[2,23]},{1:[2,9],6:[2,9],26:[2,9],101:[2,9],103:[2,9],105:[2,9],109:[2,9],125:[2,9]},{1:[2,10],6:[2,10],26:[2,10],101:[2,10],103:[2,10],105:[2,10],109:[2,10],125:[2,10]},{1:[2,11],6:[2,11],26:[2,11],101:[2,11],103:[2,11],105:[2,11],109:[2,11],125:[2,11]},{1:[2,75],6:[2,75],25:[2,75],26:[2,75],40:[1,103],49:[2,75],54:[2,75],57:[2,75],66:[2,75],67:[2,75],68:[2,75],70:[2,75],72:[2,75],73:[2,75],77:[2,75],83:[2,75],84:[2,75],85:[2,75],90:[2,75],92:[2,75],101:[2,75],103:[2,75],104:[2,75],105:[2,75],109:[2,75],117:[2,75],125:[2,75],127:[2,75],128:[2,75],131:[2,75],132:[2,75],133:[2,75],134:[2,75],135:[2,75],136:[2,75]},{1:[2,76],6:[2,76],25:[2,76],26:[2,76],49:[2,76],54:[2,76],57:[2,76],66:[2,76],67:[2,76],68:[2,76],70:[2,76],72:[2,76],73:[2,76],77:[2,76],83:[2,76],84:[2,76],85:[2,76],90:[2,76],92:[2,76],101:[2,76],103:[2,76],104:[2,76],105:[2,76],109:[2,76],117:[2,76],125:[2,76],127:[2,76],128:[2,76],131:[2,76],132:[2,76],133:[2,76],134:[2,76],135:[2,76],136:[2,76]},{1:[2,77],6:[2,77],25:[2,77],26:[2,77],49:[2,77],54:[2,77],57:[2,77],66:[2,77],67:[2,77],68:[2,77],70:[2,77],72:[2,77],73:[2,77],77:[2,77],83:[2,77],84:[2,77],85:[2,77],90:[2,77],92:[2,77],101:[2,77],103:[2,77],104:[2,77],105:[2,77],109:[2,77],117:[2,77],125:[2,77],127:[2,77],128:[2,77],131:[2,77],132:[2,77],133:[2,77],134:[2,77],135:[2,77],136:[2,77]},{1:[2,78],6:[2,78],25:[2,78],26:[2,78],49:[2,78],54:[2,78],57:[2,78],66:[2,78],67:[2,78],68:[2,78],70:[2,78],72:[2,78],73:[2,78],77:[2,78],83:[2,78],84:[2,78],85:[2,78],90:[2,78],92:[2,78],101:[2,78],103:[2,78],104:[2,78],105:[2,78],109:[2,78],117:[2,78],125:[2,78],127:[2,78],128:[2,78],131:[2,78],132:[2,78],133:[2,78],134:[2,78],135:[2,78],136:[2,78]},{1:[2,79],6:[2,79],25:[2,79],26:[2,79],49:[2,79],54:[2,79],57:[2,79],66:[2,79],67:[2,79],68:[2,79],70:[2,79],72:[2,79],73:[2,79],77:[2,79],83:[2,79],84:[2,79],85:[2,79],90:[2,79],92:[2,79],101:[2,79],103:[2,79],104:[2,79],105:[2,79],109:[2,79],117:[2,79],125:[2,79],127:[2,79],128:[2,79],131:[2,79],132:[2,79],133:[2,79],134:[2,79],135:[2,79],136:[2,79]},{1:[2,105],6:[2,105],25:[2,105],26:[2,105],49:[2,105],54:[2,105],57:[2,105],66:[2,105],67:[2,105],68:[2,105],70:[2,105],72:[2,105],73:[2,105],77:[2,105],81:104,83:[2,105],84:[1,105],85:[2,105],90:[2,105],92:[2,105],101:[2,105],103:[2,105],104:[2,105],105:[2,105],109:[2,105],117:[2,105],125:[2,105],127:[2,105],128:[2,105],131:[2,105],132:[2,105],133:[2,105],134:[2,105],135:[2,105],136:[2,105]},{6:[2,55],25:[2,55],27:109,28:[1,73],44:110,48:106,49:[2,55],54:[2,55],55:107,56:108,58:111,59:112,75:[1,70],88:[1,113],89:[1,114]},{5:115,25:[1,5]},{8:116,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:118,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:119,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{13:121,14:122,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:123,44:63,58:47,59:48,61:120,63:25,64:26,65:27,75:[1,70],82:[1,28],87:[1,58],88:[1,59],89:[1,57],100:[1,56]},{13:121,14:122,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:123,44:63,58:47,59:48,61:124,63:25,64:26,65:27,75:[1,70],82:[1,28],87:[1,58],88:[1,59],89:[1,57],100:[1,56]},{1:[2,72],6:[2,72],25:[2,72],26:[2,72],40:[2,72],49:[2,72],54:[2,72],57:[2,72],66:[2,72],67:[2,72],68:[2,72],70:[2,72],72:[2,72],73:[2,72],77:[2,72],79:[1,128],83:[2,72],84:[2,72],85:[2,72],90:[2,72],92:[2,72],101:[2,72],103:[2,72],104:[2,72],105:[2,72],109:[2,72],117:[2,72],125:[2,72],127:[2,72],128:[2,72],129:[1,125],130:[1,126],131:[2,72],132:[2,72],133:[2,72],134:[2,72],135:[2,72],136:[2,72],137:[1,127]},{1:[2,180],6:[2,180],25:[2,180],26:[2,180],49:[2,180],54:[2,180],57:[2,180],72:[2,180],77:[2,180],85:[2,180],90:[2,180],92:[2,180],101:[2,180],103:[2,180],104:[2,180],105:[2,180],109:[2,180],117:[2,180],120:[1,129],125:[2,180],127:[2,180],128:[2,180],131:[2,180],132:[2,180],133:[2,180],134:[2,180],135:[2,180],136:[2,180]},{5:130,25:[1,5]},{5:131,25:[1,5]},{1:[2,147],6:[2,147],25:[2,147],26:[2,147],49:[2,147],54:[2,147],57:[2,147],72:[2,147],77:[2,147],85:[2,147],90:[2,147],92:[2,147],101:[2,147],103:[2,147],104:[2,147],105:[2,147],109:[2,147],117:[2,147],125:[2,147],127:[2,147],128:[2,147],131:[2,147],132:[2,147],133:[2,147],134:[2,147],135:[2,147],136:[2,147]},{5:132,25:[1,5]},{8:133,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,134],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,95],5:135,6:[2,95],13:121,14:122,25:[1,5],26:[2,95],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:123,44:63,49:[2,95],54:[2,95],57:[2,95],58:47,59:48,61:137,63:25,64:26,65:27,72:[2,95],75:[1,70],77:[2,95],79:[1,136],82:[1,28],85:[2,95],87:[1,58],88:[1,59],89:[1,57],90:[2,95],92:[2,95],100:[1,56],101:[2,95],103:[2,95],104:[2,95],105:[2,95],109:[2,95],117:[2,95],125:[2,95],127:[2,95],128:[2,95],131:[2,95],132:[2,95],133:[2,95],134:[2,95],135:[2,95],136:[2,95]},{8:138,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,47],6:[2,47],8:139,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,26:[2,47],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],101:[2,47],102:39,103:[2,47],105:[2,47],106:40,107:[1,67],108:41,109:[2,47],110:69,118:[1,42],123:37,124:[1,64],125:[2,47],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,48],6:[2,48],25:[2,48],26:[2,48],54:[2,48],77:[2,48],101:[2,48],103:[2,48],105:[2,48],109:[2,48],125:[2,48]},{1:[2,73],6:[2,73],25:[2,73],26:[2,73],40:[2,73],49:[2,73],54:[2,73],57:[2,73],66:[2,73],67:[2,73],68:[2,73],70:[2,73],72:[2,73],73:[2,73],77:[2,73],83:[2,73],84:[2,73],85:[2,73],90:[2,73],92:[2,73],101:[2,73],103:[2,73],104:[2,73],105:[2,73],109:[2,73],117:[2,73],125:[2,73],127:[2,73],128:[2,73],131:[2,73],132:[2,73],133:[2,73],134:[2,73],135:[2,73],136:[2,73]},{1:[2,74],6:[2,74],25:[2,74],26:[2,74],40:[2,74],49:[2,74],54:[2,74],57:[2,74],66:[2,74],67:[2,74],68:[2,74],70:[2,74],72:[2,74],73:[2,74],77:[2,74],83:[2,74],84:[2,74],85:[2,74],90:[2,74],92:[2,74],101:[2,74],103:[2,74],104:[2,74],105:[2,74],109:[2,74],117:[2,74],125:[2,74],127:[2,74],128:[2,74],131:[2,74],132:[2,74],133:[2,74],134:[2,74],135:[2,74],136:[2,74]},{1:[2,29],6:[2,29],25:[2,29],26:[2,29],49:[2,29],54:[2,29],57:[2,29],66:[2,29],67:[2,29],68:[2,29],70:[2,29],72:[2,29],73:[2,29],77:[2,29],83:[2,29],84:[2,29],85:[2,29],90:[2,29],92:[2,29],101:[2,29],103:[2,29],104:[2,29],105:[2,29],109:[2,29],117:[2,29],125:[2,29],127:[2,29],128:[2,29],131:[2,29],132:[2,29],133:[2,29],134:[2,29],135:[2,29],136:[2,29]},{1:[2,30],6:[2,30],25:[2,30],26:[2,30],49:[2,30],54:[2,30],57:[2,30],66:[2,30],67:[2,30],68:[2,30],70:[2,30],72:[2,30],73:[2,30],77:[2,30],83:[2,30],84:[2,30],85:[2,30],90:[2,30],92:[2,30],101:[2,30],103:[2,30],104:[2,30],105:[2,30],109:[2,30],117:[2,30],125:[2,30],127:[2,30],128:[2,30],131:[2,30],132:[2,30],133:[2,30],134:[2,30],135:[2,30],136:[2,30]},{1:[2,31],6:[2,31],25:[2,31],26:[2,31],49:[2,31],54:[2,31],57:[2,31],66:[2,31],67:[2,31],68:[2,31],70:[2,31],72:[2,31],73:[2,31],77:[2,31],83:[2,31],84:[2,31],85:[2,31],90:[2,31],92:[2,31],101:[2,31],103:[2,31],104:[2,31],105:[2,31],109:[2,31],117:[2,31],125:[2,31],127:[2,31],128:[2,31],131:[2,31],132:[2,31],133:[2,31],134:[2,31],135:[2,31],136:[2,31]},{1:[2,32],6:[2,32],25:[2,32],26:[2,32],49:[2,32],54:[2,32],57:[2,32],66:[2,32],67:[2,32],68:[2,32],70:[2,32],72:[2,32],73:[2,32],77:[2,32],83:[2,32],84:[2,32],85:[2,32],90:[2,32],92:[2,32],101:[2,32],103:[2,32],104:[2,32],105:[2,32],109:[2,32],117:[2,32],125:[2,32],127:[2,32],128:[2,32],131:[2,32],132:[2,32],133:[2,32],134:[2,32],135:[2,32],136:[2,32]},{1:[2,33],6:[2,33],25:[2,33],26:[2,33],49:[2,33],54:[2,33],57:[2,33],66:[2,33],67:[2,33],68:[2,33],70:[2,33],72:[2,33],73:[2,33],77:[2,33],83:[2,33],84:[2,33],85:[2,33],90:[2,33],92:[2,33],101:[2,33],103:[2,33],104:[2,33],105:[2,33],109:[2,33],117:[2,33],125:[2,33],127:[2,33],128:[2,33],131:[2,33],132:[2,33],133:[2,33],134:[2,33],135:[2,33],136:[2,33]},{1:[2,34],6:[2,34],25:[2,34],26:[2,34],49:[2,34],54:[2,34],57:[2,34],66:[2,34],67:[2,34],68:[2,34],70:[2,34],72:[2,34],73:[2,34],77:[2,34],83:[2,34],84:[2,34],85:[2,34],90:[2,34],92:[2,34],101:[2,34],103:[2,34],104:[2,34],105:[2,34],109:[2,34],117:[2,34],125:[2,34],127:[2,34],128:[2,34],131:[2,34],132:[2,34],133:[2,34],134:[2,34],135:[2,34],136:[2,34]},{1:[2,35],6:[2,35],25:[2,35],26:[2,35],49:[2,35],54:[2,35],57:[2,35],66:[2,35],67:[2,35],68:[2,35],70:[2,35],72:[2,35],73:[2,35],77:[2,35],83:[2,35],84:[2,35],85:[2,35],90:[2,35],92:[2,35],101:[2,35],103:[2,35],104:[2,35],105:[2,35],109:[2,35],117:[2,35],125:[2,35],127:[2,35],128:[2,35],131:[2,35],132:[2,35],133:[2,35],134:[2,35],135:[2,35],136:[2,35]},{4:140,7:4,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,141],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:142,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],86:144,87:[1,58],88:[1,59],89:[1,57],90:[1,143],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,111],6:[2,111],25:[2,111],26:[2,111],49:[2,111],54:[2,111],57:[2,111],66:[2,111],67:[2,111],68:[2,111],70:[2,111],72:[2,111],73:[2,111],77:[2,111],83:[2,111],84:[2,111],85:[2,111],90:[2,111],92:[2,111],101:[2,111],103:[2,111],104:[2,111],105:[2,111],109:[2,111],117:[2,111],125:[2,111],127:[2,111],128:[2,111],131:[2,111],132:[2,111],133:[2,111],134:[2,111],135:[2,111],136:[2,111]},{1:[2,112],6:[2,112],25:[2,112],26:[2,112],27:148,28:[1,73],49:[2,112],54:[2,112],57:[2,112],66:[2,112],67:[2,112],68:[2,112],70:[2,112],72:[2,112],73:[2,112],77:[2,112],83:[2,112],84:[2,112],85:[2,112],90:[2,112],92:[2,112],101:[2,112],103:[2,112],104:[2,112],105:[2,112],109:[2,112],117:[2,112],125:[2,112],127:[2,112],128:[2,112],131:[2,112],132:[2,112],133:[2,112],134:[2,112],135:[2,112],136:[2,112]},{25:[2,51]},{25:[2,52]},{1:[2,68],6:[2,68],25:[2,68],26:[2,68],40:[2,68],49:[2,68],54:[2,68],57:[2,68],66:[2,68],67:[2,68],68:[2,68],70:[2,68],72:[2,68],73:[2,68],77:[2,68],79:[2,68],83:[2,68],84:[2,68],85:[2,68],90:[2,68],92:[2,68],101:[2,68],103:[2,68],104:[2,68],105:[2,68],109:[2,68],117:[2,68],125:[2,68],127:[2,68],128:[2,68],129:[2,68],130:[2,68],131:[2,68],132:[2,68],133:[2,68],134:[2,68],135:[2,68],136:[2,68],137:[2,68]},{1:[2,71],6:[2,71],25:[2,71],26:[2,71],40:[2,71],49:[2,71],54:[2,71],57:[2,71],66:[2,71],67:[2,71],68:[2,71],70:[2,71],72:[2,71],73:[2,71],77:[2,71],79:[2,71],83:[2,71],84:[2,71],85:[2,71],90:[2,71],92:[2,71],101:[2,71],103:[2,71],104:[2,71],105:[2,71],109:[2,71],117:[2,71],125:[2,71],127:[2,71],128:[2,71],129:[2,71],130:[2,71],131:[2,71],132:[2,71],133:[2,71],134:[2,71],135:[2,71],136:[2,71],137:[2,71]},{8:149,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:150,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:151,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{5:152,8:153,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,5],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{27:158,28:[1,73],44:159,58:160,59:161,64:154,75:[1,70],88:[1,113],89:[1,57],112:155,113:[1,156],114:157},{111:162,115:[1,163],116:[1,164]},{6:[2,90],11:168,25:[2,90],27:169,28:[1,73],29:170,30:[1,71],31:[1,72],41:166,42:167,44:171,46:[1,46],54:[2,90],76:165,77:[2,90],88:[1,113]},{1:[2,27],6:[2,27],25:[2,27],26:[2,27],43:[2,27],49:[2,27],54:[2,27],57:[2,27],66:[2,27],67:[2,27],68:[2,27],70:[2,27],72:[2,27],73:[2,27],77:[2,27],83:[2,27],84:[2,27],85:[2,27],90:[2,27],92:[2,27],101:[2,27],103:[2,27],104:[2,27],105:[2,27],109:[2,27],117:[2,27],125:[2,27],127:[2,27],128:[2,27],131:[2,27],132:[2,27],133:[2,27],134:[2,27],135:[2,27],136:[2,27]},{1:[2,28],6:[2,28],25:[2,28],26:[2,28],43:[2,28],49:[2,28],54:[2,28],57:[2,28],66:[2,28],67:[2,28],68:[2,28],70:[2,28],72:[2,28],73:[2,28],77:[2,28],83:[2,28],84:[2,28],85:[2,28],90:[2,28],92:[2,28],101:[2,28],103:[2,28],104:[2,28],105:[2,28],109:[2,28],117:[2,28],125:[2,28],127:[2,28],128:[2,28],131:[2,28],132:[2,28],133:[2,28],134:[2,28],135:[2,28],136:[2,28]},{1:[2,26],6:[2,26],25:[2,26],26:[2,26],40:[2,26],43:[2,26],49:[2,26],54:[2,26],57:[2,26],66:[2,26],67:[2,26],68:[2,26],70:[2,26],72:[2,26],73:[2,26],77:[2,26],79:[2,26],83:[2,26],84:[2,26],85:[2,26],90:[2,26],92:[2,26],101:[2,26],103:[2,26],104:[2,26],105:[2,26],109:[2,26],115:[2,26],116:[2,26],117:[2,26],125:[2,26],127:[2,26],128:[2,26],129:[2,26],130:[2,26],131:[2,26],132:[2,26],133:[2,26],134:[2,26],135:[2,26],136:[2,26],137:[2,26]},{1:[2,6],6:[2,6],7:172,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,26:[2,6],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],101:[2,6],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,3]},{1:[2,24],6:[2,24],25:[2,24],26:[2,24],49:[2,24],54:[2,24],57:[2,24],72:[2,24],77:[2,24],85:[2,24],90:[2,24],92:[2,24],97:[2,24],98:[2,24],101:[2,24],103:[2,24],104:[2,24],105:[2,24],109:[2,24],117:[2,24],120:[2,24],122:[2,24],125:[2,24],127:[2,24],128:[2,24],131:[2,24],132:[2,24],133:[2,24],134:[2,24],135:[2,24],136:[2,24]},{6:[1,74],26:[1,173]},{1:[2,191],6:[2,191],25:[2,191],26:[2,191],49:[2,191],54:[2,191],57:[2,191],72:[2,191],77:[2,191],85:[2,191],90:[2,191],92:[2,191],101:[2,191],103:[2,191],104:[2,191],105:[2,191],109:[2,191],117:[2,191],125:[2,191],127:[2,191],128:[2,191],131:[2,191],132:[2,191],133:[2,191],134:[2,191],135:[2,191],136:[2,191]},{8:174,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:175,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:176,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:177,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:178,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:179,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:180,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:181,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,146],6:[2,146],25:[2,146],26:[2,146],49:[2,146],54:[2,146],57:[2,146],72:[2,146],77:[2,146],85:[2,146],90:[2,146],92:[2,146],101:[2,146],103:[2,146],104:[2,146],105:[2,146],109:[2,146],117:[2,146],125:[2,146],127:[2,146],128:[2,146],131:[2,146],132:[2,146],133:[2,146],134:[2,146],135:[2,146],136:[2,146]},{1:[2,151],6:[2,151],25:[2,151],26:[2,151],49:[2,151],54:[2,151],57:[2,151],72:[2,151],77:[2,151],85:[2,151],90:[2,151],92:[2,151],101:[2,151],103:[2,151],104:[2,151],105:[2,151],109:[2,151],117:[2,151],125:[2,151],127:[2,151],128:[2,151],131:[2,151],132:[2,151],133:[2,151],134:[2,151],135:[2,151],136:[2,151]},{8:182,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,145],6:[2,145],25:[2,145],26:[2,145],49:[2,145],54:[2,145],57:[2,145],72:[2,145],77:[2,145],85:[2,145],90:[2,145],92:[2,145],101:[2,145],103:[2,145],104:[2,145],105:[2,145],109:[2,145],117:[2,145],125:[2,145],127:[2,145],128:[2,145],131:[2,145],132:[2,145],133:[2,145],134:[2,145],135:[2,145],136:[2,145]},{1:[2,150],6:[2,150],25:[2,150],26:[2,150],49:[2,150],54:[2,150],57:[2,150],72:[2,150],77:[2,150],85:[2,150],90:[2,150],92:[2,150],101:[2,150],103:[2,150],104:[2,150],105:[2,150],109:[2,150],117:[2,150],125:[2,150],127:[2,150],128:[2,150],131:[2,150],132:[2,150],133:[2,150],134:[2,150],135:[2,150],136:[2,150]},{81:183,84:[1,105]},{1:[2,69],6:[2,69],25:[2,69],26:[2,69],40:[2,69],49:[2,69],54:[2,69],57:[2,69],66:[2,69],67:[2,69],68:[2,69],70:[2,69],72:[2,69],73:[2,69],77:[2,69],79:[2,69],83:[2,69],84:[2,69],85:[2,69],90:[2,69],92:[2,69],101:[2,69],103:[2,69],104:[2,69],105:[2,69],109:[2,69],117:[2,69],125:[2,69],127:[2,69],128:[2,69],129:[2,69],130:[2,69],131:[2,69],132:[2,69],133:[2,69],134:[2,69],135:[2,69],136:[2,69],137:[2,69]},{84:[2,108]},{27:184,28:[1,73]},{27:185,28:[1,73]},{1:[2,83],6:[2,83],25:[2,83],26:[2,83],27:186,28:[1,73],40:[2,83],49:[2,83],54:[2,83],57:[2,83],66:[2,83],67:[2,83],68:[2,83],70:[2,83],72:[2,83],73:[2,83],77:[2,83],79:[2,83],83:[2,83],84:[2,83],85:[2,83],90:[2,83],92:[2,83],101:[2,83],103:[2,83],104:[2,83],105:[2,83],109:[2,83],117:[2,83],125:[2,83],127:[2,83],128:[2,83],129:[2,83],130:[2,83],131:[2,83],132:[2,83],133:[2,83],134:[2,83],135:[2,83],136:[2,83],137:[2,83]},{1:[2,84],6:[2,84],25:[2,84],26:[2,84],40:[2,84],49:[2,84],54:[2,84],57:[2,84],66:[2,84],67:[2,84],68:[2,84],70:[2,84],72:[2,84],73:[2,84],77:[2,84],79:[2,84],83:[2,84],84:[2,84],85:[2,84],90:[2,84],92:[2,84],101:[2,84],103:[2,84],104:[2,84],105:[2,84],109:[2,84],117:[2,84],125:[2,84],127:[2,84],128:[2,84],129:[2,84],130:[2,84],131:[2,84],132:[2,84],133:[2,84],134:[2,84],135:[2,84],136:[2,84],137:[2,84]},{8:188,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],57:[1,192],58:47,59:48,61:36,63:25,64:26,65:27,71:187,74:189,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],91:190,92:[1,191],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{69:193,70:[1,99],73:[1,100]},{81:194,84:[1,105]},{1:[2,70],6:[2,70],25:[2,70],26:[2,70],40:[2,70],49:[2,70],54:[2,70],57:[2,70],66:[2,70],67:[2,70],68:[2,70],70:[2,70],72:[2,70],73:[2,70],77:[2,70],79:[2,70],83:[2,70],84:[2,70],85:[2,70],90:[2,70],92:[2,70],101:[2,70],103:[2,70],104:[2,70],105:[2,70],109:[2,70],117:[2,70],125:[2,70],127:[2,70],128:[2,70],129:[2,70],130:[2,70],131:[2,70],132:[2,70],133:[2,70],134:[2,70],135:[2,70],136:[2,70],137:[2,70]},{6:[1,196],8:195,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,197],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,106],6:[2,106],25:[2,106],26:[2,106],49:[2,106],54:[2,106],57:[2,106],66:[2,106],67:[2,106],68:[2,106],70:[2,106],72:[2,106],73:[2,106],77:[2,106],83:[2,106],84:[2,106],85:[2,106],90:[2,106],92:[2,106],101:[2,106],103:[2,106],104:[2,106],105:[2,106],109:[2,106],117:[2,106],125:[2,106],127:[2,106],128:[2,106],131:[2,106],132:[2,106],133:[2,106],134:[2,106],135:[2,106],136:[2,106]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],85:[1,198],86:199,87:[1,58],88:[1,59],89:[1,57],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,53],25:[2,53],49:[1,201],53:203,54:[1,202]},{6:[2,56],25:[2,56],26:[2,56],49:[2,56],54:[2,56]},{6:[2,60],25:[2,60],26:[2,60],40:[1,205],49:[2,60],54:[2,60],57:[1,204]},{6:[2,63],25:[2,63],26:[2,63],40:[2,63],49:[2,63],54:[2,63],57:[2,63]},{6:[2,64],25:[2,64],26:[2,64],40:[2,64],49:[2,64],54:[2,64],57:[2,64]},{6:[2,65],25:[2,65],26:[2,65],40:[2,65],49:[2,65],54:[2,65],57:[2,65]},{6:[2,66],25:[2,66],26:[2,66],40:[2,66],49:[2,66],54:[2,66],57:[2,66]},{27:148,28:[1,73]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],86:144,87:[1,58],88:[1,59],89:[1,57],90:[1,143],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,50],6:[2,50],25:[2,50],26:[2,50],49:[2,50],54:[2,50],57:[2,50],72:[2,50],77:[2,50],85:[2,50],90:[2,50],92:[2,50],101:[2,50],103:[2,50],104:[2,50],105:[2,50],109:[2,50],117:[2,50],125:[2,50],127:[2,50],128:[2,50],131:[2,50],132:[2,50],133:[2,50],134:[2,50],135:[2,50],136:[2,50]},{1:[2,184],6:[2,184],25:[2,184],26:[2,184],49:[2,184],54:[2,184],57:[2,184],72:[2,184],77:[2,184],85:[2,184],90:[2,184],92:[2,184],101:[2,184],102:87,103:[2,184],104:[2,184],105:[2,184],108:88,109:[2,184],110:69,117:[2,184],125:[2,184],127:[2,184],128:[2,184],131:[1,78],132:[2,184],133:[2,184],134:[2,184],135:[2,184],136:[2,184]},{102:90,103:[1,65],105:[1,66],108:91,109:[1,68],110:69,125:[1,89]},{1:[2,185],6:[2,185],25:[2,185],26:[2,185],49:[2,185],54:[2,185],57:[2,185],72:[2,185],77:[2,185],85:[2,185],90:[2,185],92:[2,185],101:[2,185],102:87,103:[2,185],104:[2,185],105:[2,185],108:88,109:[2,185],110:69,117:[2,185],125:[2,185],127:[2,185],128:[2,185],131:[1,78],132:[2,185],133:[2,185],134:[2,185],135:[2,185],136:[2,185]},{1:[2,186],6:[2,186],25:[2,186],26:[2,186],49:[2,186],54:[2,186],57:[2,186],72:[2,186],77:[2,186],85:[2,186],90:[2,186],92:[2,186],101:[2,186],102:87,103:[2,186],104:[2,186],105:[2,186],108:88,109:[2,186],110:69,117:[2,186],125:[2,186],127:[2,186],128:[2,186],131:[1,78],132:[2,186],133:[2,186],134:[2,186],135:[2,186],136:[2,186]},{1:[2,187],6:[2,187],25:[2,187],26:[2,187],49:[2,187],54:[2,187],57:[2,187],66:[2,72],67:[2,72],68:[2,72],70:[2,72],72:[2,187],73:[2,72],77:[2,187],83:[2,72],84:[2,72],85:[2,187],90:[2,187],92:[2,187],101:[2,187],103:[2,187],104:[2,187],105:[2,187],109:[2,187],117:[2,187],125:[2,187],127:[2,187],128:[2,187],131:[2,187],132:[2,187],133:[2,187],134:[2,187],135:[2,187],136:[2,187]},{62:93,66:[1,95],67:[1,96],68:[1,97],69:98,70:[1,99],73:[1,100],80:92,83:[1,94],84:[2,107]},{62:102,66:[1,95],67:[1,96],68:[1,97],69:98,70:[1,99],73:[1,100],80:101,83:[1,94],84:[2,107]},{66:[2,75],67:[2,75],68:[2,75],70:[2,75],73:[2,75],83:[2,75],84:[2,75]},{1:[2,188],6:[2,188],25:[2,188],26:[2,188],49:[2,188],54:[2,188],57:[2,188],66:[2,72],67:[2,72],68:[2,72],70:[2,72],72:[2,188],73:[2,72],77:[2,188],83:[2,72],84:[2,72],85:[2,188],90:[2,188],92:[2,188],101:[2,188],103:[2,188],104:[2,188],105:[2,188],109:[2,188],117:[2,188],125:[2,188],127:[2,188],128:[2,188],131:[2,188],132:[2,188],133:[2,188],134:[2,188],135:[2,188],136:[2,188]},{1:[2,189],6:[2,189],25:[2,189],26:[2,189],49:[2,189],54:[2,189],57:[2,189],72:[2,189],77:[2,189],85:[2,189],90:[2,189],92:[2,189],101:[2,189],103:[2,189],104:[2,189],105:[2,189],109:[2,189],117:[2,189],125:[2,189],127:[2,189],128:[2,189],131:[2,189],132:[2,189],133:[2,189],134:[2,189],135:[2,189],136:[2,189]},{1:[2,190],6:[2,190],25:[2,190],26:[2,190],49:[2,190],54:[2,190],57:[2,190],72:[2,190],77:[2,190],85:[2,190],90:[2,190],92:[2,190],101:[2,190],103:[2,190],104:[2,190],105:[2,190],109:[2,190],117:[2,190],125:[2,190],127:[2,190],128:[2,190],131:[2,190],132:[2,190],133:[2,190],134:[2,190],135:[2,190],136:[2,190]},{8:206,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,207],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:208,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{5:209,25:[1,5],124:[1,210]},{1:[2,132],6:[2,132],25:[2,132],26:[2,132],49:[2,132],54:[2,132],57:[2,132],72:[2,132],77:[2,132],85:[2,132],90:[2,132],92:[2,132],96:211,97:[1,212],98:[1,213],101:[2,132],103:[2,132],104:[2,132],105:[2,132],109:[2,132],117:[2,132],125:[2,132],127:[2,132],128:[2,132],131:[2,132],132:[2,132],133:[2,132],134:[2,132],135:[2,132],136:[2,132]},{1:[2,144],6:[2,144],25:[2,144],26:[2,144],49:[2,144],54:[2,144],57:[2,144],72:[2,144],77:[2,144],85:[2,144],90:[2,144],92:[2,144],101:[2,144],103:[2,144],104:[2,144],105:[2,144],109:[2,144],117:[2,144],125:[2,144],127:[2,144],128:[2,144],131:[2,144],132:[2,144],133:[2,144],134:[2,144],135:[2,144],136:[2,144]},{1:[2,152],6:[2,152],25:[2,152],26:[2,152],49:[2,152],54:[2,152],57:[2,152],72:[2,152],77:[2,152],85:[2,152],90:[2,152],92:[2,152],101:[2,152],103:[2,152],104:[2,152],105:[2,152],109:[2,152],117:[2,152],125:[2,152],127:[2,152],128:[2,152],131:[2,152],132:[2,152],133:[2,152],134:[2,152],135:[2,152],136:[2,152]},{25:[1,214],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{119:215,121:216,122:[1,217]},{1:[2,96],6:[2,96],25:[2,96],26:[2,96],49:[2,96],54:[2,96],57:[2,96],72:[2,96],77:[2,96],85:[2,96],90:[2,96],92:[2,96],101:[2,96],103:[2,96],104:[2,96],105:[2,96],109:[2,96],117:[2,96],125:[2,96],127:[2,96],128:[2,96],131:[2,96],132:[2,96],133:[2,96],134:[2,96],135:[2,96],136:[2,96]},{8:218,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,99],5:219,6:[2,99],25:[1,5],26:[2,99],49:[2,99],54:[2,99],57:[2,99],66:[2,72],67:[2,72],68:[2,72],70:[2,72],72:[2,99],73:[2,72],77:[2,99],79:[1,220],83:[2,72],84:[2,72],85:[2,99],90:[2,99],92:[2,99],101:[2,99],103:[2,99],104:[2,99],105:[2,99],109:[2,99],117:[2,99],125:[2,99],127:[2,99],128:[2,99],131:[2,99],132:[2,99],133:[2,99],134:[2,99],135:[2,99],136:[2,99]},{1:[2,137],6:[2,137],25:[2,137],26:[2,137],49:[2,137],54:[2,137],57:[2,137],72:[2,137],77:[2,137],85:[2,137],90:[2,137],92:[2,137],101:[2,137],102:87,103:[2,137],104:[2,137],105:[2,137],108:88,109:[2,137],110:69,117:[2,137],125:[2,137],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,46],6:[2,46],26:[2,46],101:[2,46],102:87,103:[2,46],105:[2,46],108:88,109:[2,46],110:69,125:[2,46],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,74],101:[1,221]},{4:222,7:4,8:6,9:7,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,128],25:[2,128],54:[2,128],57:[1,224],90:[2,128],91:223,92:[1,191],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,114],6:[2,114],25:[2,114],26:[2,114],40:[2,114],49:[2,114],54:[2,114],57:[2,114],66:[2,114],67:[2,114],68:[2,114],70:[2,114],72:[2,114],73:[2,114],77:[2,114],83:[2,114],84:[2,114],85:[2,114],90:[2,114],92:[2,114],101:[2,114],103:[2,114],104:[2,114],105:[2,114],109:[2,114],115:[2,114],116:[2,114],117:[2,114],125:[2,114],127:[2,114],128:[2,114],131:[2,114],132:[2,114],133:[2,114],134:[2,114],135:[2,114],136:[2,114]},{6:[2,53],25:[2,53],53:225,54:[1,226],90:[2,53]},{6:[2,123],25:[2,123],26:[2,123],54:[2,123],85:[2,123],90:[2,123]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],86:227,87:[1,58],88:[1,59],89:[1,57],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,129],25:[2,129],26:[2,129],54:[2,129],85:[2,129],90:[2,129]},{1:[2,113],6:[2,113],25:[2,113],26:[2,113],40:[2,113],43:[2,113],49:[2,113],54:[2,113],57:[2,113],66:[2,113],67:[2,113],68:[2,113],70:[2,113],72:[2,113],73:[2,113],77:[2,113],79:[2,113],83:[2,113],84:[2,113],85:[2,113],90:[2,113],92:[2,113],101:[2,113],103:[2,113],104:[2,113],105:[2,113],109:[2,113],115:[2,113],116:[2,113],117:[2,113],125:[2,113],127:[2,113],128:[2,113],129:[2,113],130:[2,113],131:[2,113],132:[2,113],133:[2,113],134:[2,113],135:[2,113],136:[2,113],137:[2,113]},{5:228,25:[1,5],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,140],6:[2,140],25:[2,140],26:[2,140],49:[2,140],54:[2,140],57:[2,140],72:[2,140],77:[2,140],85:[2,140],90:[2,140],92:[2,140],101:[2,140],102:87,103:[1,65],104:[1,229],105:[1,66],108:88,109:[1,68],110:69,117:[2,140],125:[2,140],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,142],6:[2,142],25:[2,142],26:[2,142],49:[2,142],54:[2,142],57:[2,142],72:[2,142],77:[2,142],85:[2,142],90:[2,142],92:[2,142],101:[2,142],102:87,103:[1,65],104:[1,230],105:[1,66],108:88,109:[1,68],110:69,117:[2,142],125:[2,142],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,148],6:[2,148],25:[2,148],26:[2,148],49:[2,148],54:[2,148],57:[2,148],72:[2,148],77:[2,148],85:[2,148],90:[2,148],92:[2,148],101:[2,148],103:[2,148],104:[2,148],105:[2,148],109:[2,148],117:[2,148],125:[2,148],127:[2,148],128:[2,148],131:[2,148],132:[2,148],133:[2,148],134:[2,148],135:[2,148],136:[2,148]},{1:[2,149],6:[2,149],25:[2,149],26:[2,149],49:[2,149],54:[2,149],57:[2,149],72:[2,149],77:[2,149],85:[2,149],90:[2,149],92:[2,149],101:[2,149],102:87,103:[1,65],104:[2,149],105:[1,66],108:88,109:[1,68],110:69,117:[2,149],125:[2,149],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,153],6:[2,153],25:[2,153],26:[2,153],49:[2,153],54:[2,153],57:[2,153],72:[2,153],77:[2,153],85:[2,153],90:[2,153],92:[2,153],101:[2,153],103:[2,153],104:[2,153],105:[2,153],109:[2,153],117:[2,153],125:[2,153],127:[2,153],128:[2,153],131:[2,153],132:[2,153],133:[2,153],134:[2,153],135:[2,153],136:[2,153]},{115:[2,155],116:[2,155]},{27:158,28:[1,73],44:159,58:160,59:161,75:[1,70],88:[1,113],89:[1,114],112:231,114:157},{54:[1,232],115:[2,161],116:[2,161]},{54:[2,157],115:[2,157],116:[2,157]},{54:[2,158],115:[2,158],116:[2,158]},{54:[2,159],115:[2,159],116:[2,159]},{54:[2,160],115:[2,160],116:[2,160]},{1:[2,154],6:[2,154],25:[2,154],26:[2,154],49:[2,154],54:[2,154],57:[2,154],72:[2,154],77:[2,154],85:[2,154],90:[2,154],92:[2,154],101:[2,154],103:[2,154],104:[2,154],105:[2,154],109:[2,154],117:[2,154],125:[2,154],127:[2,154],128:[2,154],131:[2,154],132:[2,154],133:[2,154],134:[2,154],135:[2,154],136:[2,154]},{8:233,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:234,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,53],25:[2,53],53:235,54:[1,236],77:[2,53]},{6:[2,91],25:[2,91],26:[2,91],54:[2,91],77:[2,91]},{6:[2,39],25:[2,39],26:[2,39],43:[1,237],54:[2,39],77:[2,39]},{6:[2,42],25:[2,42],26:[2,42],54:[2,42],77:[2,42]},{6:[2,43],25:[2,43],26:[2,43],43:[2,43],54:[2,43],77:[2,43]},{6:[2,44],25:[2,44],26:[2,44],43:[2,44],54:[2,44],77:[2,44]},{6:[2,45],25:[2,45],26:[2,45],43:[2,45],54:[2,45],77:[2,45]},{1:[2,5],6:[2,5],26:[2,5],101:[2,5]},{1:[2,25],6:[2,25],25:[2,25],26:[2,25],49:[2,25],54:[2,25],57:[2,25],72:[2,25],77:[2,25],85:[2,25],90:[2,25],92:[2,25],97:[2,25],98:[2,25],101:[2,25],103:[2,25],104:[2,25],105:[2,25],109:[2,25],117:[2,25],120:[2,25],122:[2,25],125:[2,25],127:[2,25],128:[2,25],131:[2,25],132:[2,25],133:[2,25],134:[2,25],135:[2,25],136:[2,25]},{1:[2,192],6:[2,192],25:[2,192],26:[2,192],49:[2,192],54:[2,192],57:[2,192],72:[2,192],77:[2,192],85:[2,192],90:[2,192],92:[2,192],101:[2,192],102:87,103:[2,192],104:[2,192],105:[2,192],108:88,109:[2,192],110:69,117:[2,192],125:[2,192],127:[2,192],128:[2,192],131:[1,78],132:[1,81],133:[2,192],134:[2,192],135:[2,192],136:[2,192]},{1:[2,193],6:[2,193],25:[2,193],26:[2,193],49:[2,193],54:[2,193],57:[2,193],72:[2,193],77:[2,193],85:[2,193],90:[2,193],92:[2,193],101:[2,193],102:87,103:[2,193],104:[2,193],105:[2,193],108:88,109:[2,193],110:69,117:[2,193],125:[2,193],127:[2,193],128:[2,193],131:[1,78],132:[1,81],133:[2,193],134:[2,193],135:[2,193],136:[2,193]},{1:[2,194],6:[2,194],25:[2,194],26:[2,194],49:[2,194],54:[2,194],57:[2,194],72:[2,194],77:[2,194],85:[2,194],90:[2,194],92:[2,194],101:[2,194],102:87,103:[2,194],104:[2,194],105:[2,194],108:88,109:[2,194],110:69,117:[2,194],125:[2,194],127:[2,194],128:[2,194],131:[1,78],132:[2,194],133:[2,194],134:[2,194],135:[2,194],136:[2,194]},{1:[2,195],6:[2,195],25:[2,195],26:[2,195],49:[2,195],54:[2,195],57:[2,195],72:[2,195],77:[2,195],85:[2,195],90:[2,195],92:[2,195],101:[2,195],102:87,103:[2,195],104:[2,195],105:[2,195],108:88,109:[2,195],110:69,117:[2,195],125:[2,195],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[2,195],134:[2,195],135:[2,195],136:[2,195]},{1:[2,196],6:[2,196],25:[2,196],26:[2,196],49:[2,196],54:[2,196],57:[2,196],72:[2,196],77:[2,196],85:[2,196],90:[2,196],92:[2,196],101:[2,196],102:87,103:[2,196],104:[2,196],105:[2,196],108:88,109:[2,196],110:69,117:[2,196],125:[2,196],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[2,196],135:[2,196],136:[1,85]},{1:[2,197],6:[2,197],25:[2,197],26:[2,197],49:[2,197],54:[2,197],57:[2,197],72:[2,197],77:[2,197],85:[2,197],90:[2,197],92:[2,197],101:[2,197],102:87,103:[2,197],104:[2,197],105:[2,197],108:88,109:[2,197],110:69,117:[2,197],125:[2,197],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[2,197],136:[1,85]},{1:[2,198],6:[2,198],25:[2,198],26:[2,198],49:[2,198],54:[2,198],57:[2,198],72:[2,198],77:[2,198],85:[2,198],90:[2,198],92:[2,198],101:[2,198],102:87,103:[2,198],104:[2,198],105:[2,198],108:88,109:[2,198],110:69,117:[2,198],125:[2,198],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[2,198],135:[2,198],136:[2,198]},{1:[2,183],6:[2,183],25:[2,183],26:[2,183],49:[2,183],54:[2,183],57:[2,183],72:[2,183],77:[2,183],85:[2,183],90:[2,183],92:[2,183],101:[2,183],102:87,103:[1,65],104:[2,183],105:[1,66],108:88,109:[1,68],110:69,117:[2,183],125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,182],6:[2,182],25:[2,182],26:[2,182],49:[2,182],54:[2,182],57:[2,182],72:[2,182],77:[2,182],85:[2,182],90:[2,182],92:[2,182],101:[2,182],102:87,103:[1,65],104:[2,182],105:[1,66],108:88,109:[1,68],110:69,117:[2,182],125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,103],6:[2,103],25:[2,103],26:[2,103],49:[2,103],54:[2,103],57:[2,103],66:[2,103],67:[2,103],68:[2,103],70:[2,103],72:[2,103],73:[2,103],77:[2,103],83:[2,103],84:[2,103],85:[2,103],90:[2,103],92:[2,103],101:[2,103],103:[2,103],104:[2,103],105:[2,103],109:[2,103],117:[2,103],125:[2,103],127:[2,103],128:[2,103],131:[2,103],132:[2,103],133:[2,103],134:[2,103],135:[2,103],136:[2,103]},{1:[2,80],6:[2,80],25:[2,80],26:[2,80],40:[2,80],49:[2,80],54:[2,80],57:[2,80],66:[2,80],67:[2,80],68:[2,80],70:[2,80],72:[2,80],73:[2,80],77:[2,80],79:[2,80],83:[2,80],84:[2,80],85:[2,80],90:[2,80],92:[2,80],101:[2,80],103:[2,80],104:[2,80],105:[2,80],109:[2,80],117:[2,80],125:[2,80],127:[2,80],128:[2,80],129:[2,80],130:[2,80],131:[2,80],132:[2,80],133:[2,80],134:[2,80],135:[2,80],136:[2,80],137:[2,80]},{1:[2,81],6:[2,81],25:[2,81],26:[2,81],40:[2,81],49:[2,81],54:[2,81],57:[2,81],66:[2,81],67:[2,81],68:[2,81],70:[2,81],72:[2,81],73:[2,81],77:[2,81],79:[2,81],83:[2,81],84:[2,81],85:[2,81],90:[2,81],92:[2,81],101:[2,81],103:[2,81],104:[2,81],105:[2,81],109:[2,81],117:[2,81],125:[2,81],127:[2,81],128:[2,81],129:[2,81],130:[2,81],131:[2,81],132:[2,81],133:[2,81],134:[2,81],135:[2,81],136:[2,81],137:[2,81]},{1:[2,82],6:[2,82],25:[2,82],26:[2,82],40:[2,82],49:[2,82],54:[2,82],57:[2,82],66:[2,82],67:[2,82],68:[2,82],70:[2,82],72:[2,82],73:[2,82],77:[2,82],79:[2,82],83:[2,82],84:[2,82],85:[2,82],90:[2,82],92:[2,82],101:[2,82],103:[2,82],104:[2,82],105:[2,82],109:[2,82],117:[2,82],125:[2,82],127:[2,82],128:[2,82],129:[2,82],130:[2,82],131:[2,82],132:[2,82],133:[2,82],134:[2,82],135:[2,82],136:[2,82],137:[2,82]},{72:[1,238]},{57:[1,192],72:[2,87],91:239,92:[1,191],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{72:[2,88]},{8:240,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,72:[2,122],75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{12:[2,116],28:[2,116],30:[2,116],31:[2,116],33:[2,116],34:[2,116],35:[2,116],36:[2,116],37:[2,116],38:[2,116],45:[2,116],46:[2,116],47:[2,116],51:[2,116],52:[2,116],72:[2,116],75:[2,116],78:[2,116],82:[2,116],87:[2,116],88:[2,116],89:[2,116],95:[2,116],99:[2,116],100:[2,116],103:[2,116],105:[2,116],107:[2,116],109:[2,116],118:[2,116],124:[2,116],126:[2,116],127:[2,116],128:[2,116],129:[2,116],130:[2,116]},{12:[2,117],28:[2,117],30:[2,117],31:[2,117],33:[2,117],34:[2,117],35:[2,117],36:[2,117],37:[2,117],38:[2,117],45:[2,117],46:[2,117],47:[2,117],51:[2,117],52:[2,117],72:[2,117],75:[2,117],78:[2,117],82:[2,117],87:[2,117],88:[2,117],89:[2,117],95:[2,117],99:[2,117],100:[2,117],103:[2,117],105:[2,117],107:[2,117],109:[2,117],118:[2,117],124:[2,117],126:[2,117],127:[2,117],128:[2,117],129:[2,117],130:[2,117]},{1:[2,86],6:[2,86],25:[2,86],26:[2,86],40:[2,86],49:[2,86],54:[2,86],57:[2,86],66:[2,86],67:[2,86],68:[2,86],70:[2,86],72:[2,86],73:[2,86],77:[2,86],79:[2,86],83:[2,86],84:[2,86],85:[2,86],90:[2,86],92:[2,86],101:[2,86],103:[2,86],104:[2,86],105:[2,86],109:[2,86],117:[2,86],125:[2,86],127:[2,86],128:[2,86],129:[2,86],130:[2,86],131:[2,86],132:[2,86],133:[2,86],134:[2,86],135:[2,86],136:[2,86],137:[2,86]},{1:[2,104],6:[2,104],25:[2,104],26:[2,104],49:[2,104],54:[2,104],57:[2,104],66:[2,104],67:[2,104],68:[2,104],70:[2,104],72:[2,104],73:[2,104],77:[2,104],83:[2,104],84:[2,104],85:[2,104],90:[2,104],92:[2,104],101:[2,104],103:[2,104],104:[2,104],105:[2,104],109:[2,104],117:[2,104],125:[2,104],127:[2,104],128:[2,104],131:[2,104],132:[2,104],133:[2,104],134:[2,104],135:[2,104],136:[2,104]},{1:[2,36],6:[2,36],25:[2,36],26:[2,36],49:[2,36],54:[2,36],57:[2,36],72:[2,36],77:[2,36],85:[2,36],90:[2,36],92:[2,36],101:[2,36],102:87,103:[2,36],104:[2,36],105:[2,36],108:88,109:[2,36],110:69,117:[2,36],125:[2,36],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{8:241,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:242,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,109],6:[2,109],25:[2,109],26:[2,109],49:[2,109],54:[2,109],57:[2,109],66:[2,109],67:[2,109],68:[2,109],70:[2,109],72:[2,109],73:[2,109],77:[2,109],83:[2,109],84:[2,109],85:[2,109],90:[2,109],92:[2,109],101:[2,109],103:[2,109],104:[2,109],105:[2,109],109:[2,109],117:[2,109],125:[2,109],127:[2,109],128:[2,109],131:[2,109],132:[2,109],133:[2,109],134:[2,109],135:[2,109],136:[2,109]},{6:[2,53],25:[2,53],53:243,54:[1,226],85:[2,53]},{6:[2,128],25:[2,128],26:[2,128],54:[2,128],57:[1,244],85:[2,128],90:[2,128],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{50:245,51:[1,60],52:[1,61]},{6:[2,54],25:[2,54],26:[2,54],27:109,28:[1,73],44:110,55:246,56:108,58:111,59:112,75:[1,70],88:[1,113],89:[1,114]},{6:[1,247],25:[1,248]},{6:[2,61],25:[2,61],26:[2,61],49:[2,61],54:[2,61]},{8:249,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,199],6:[2,199],25:[2,199],26:[2,199],49:[2,199],54:[2,199],57:[2,199],72:[2,199],77:[2,199],85:[2,199],90:[2,199],92:[2,199],101:[2,199],102:87,103:[2,199],104:[2,199],105:[2,199],108:88,109:[2,199],110:69,117:[2,199],125:[2,199],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{8:250,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,201],6:[2,201],25:[2,201],26:[2,201],49:[2,201],54:[2,201],57:[2,201],72:[2,201],77:[2,201],85:[2,201],90:[2,201],92:[2,201],101:[2,201],102:87,103:[2,201],104:[2,201],105:[2,201],108:88,109:[2,201],110:69,117:[2,201],125:[2,201],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,181],6:[2,181],25:[2,181],26:[2,181],49:[2,181],54:[2,181],57:[2,181],72:[2,181],77:[2,181],85:[2,181],90:[2,181],92:[2,181],101:[2,181],103:[2,181],104:[2,181],105:[2,181],109:[2,181],117:[2,181],125:[2,181],127:[2,181],128:[2,181],131:[2,181],132:[2,181],133:[2,181],134:[2,181],135:[2,181],136:[2,181]},{8:251,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,133],6:[2,133],25:[2,133],26:[2,133],49:[2,133],54:[2,133],57:[2,133],72:[2,133],77:[2,133],85:[2,133],90:[2,133],92:[2,133],97:[1,252],101:[2,133],103:[2,133],104:[2,133],105:[2,133],109:[2,133],117:[2,133],125:[2,133],127:[2,133],128:[2,133],131:[2,133],132:[2,133],133:[2,133],134:[2,133],135:[2,133],136:[2,133]},{5:253,25:[1,5]},{27:254,28:[1,73]},{119:255,121:216,122:[1,217]},{26:[1,256],120:[1,257],121:258,122:[1,217]},{26:[2,174],120:[2,174],122:[2,174]},{8:260,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],94:259,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,97],5:261,6:[2,97],25:[1,5],26:[2,97],49:[2,97],54:[2,97],57:[2,97],72:[2,97],77:[2,97],85:[2,97],90:[2,97],92:[2,97],101:[2,97],102:87,103:[1,65],104:[2,97],105:[1,66],108:88,109:[1,68],110:69,117:[2,97],125:[2,97],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,100],6:[2,100],25:[2,100],26:[2,100],49:[2,100],54:[2,100],57:[2,100],72:[2,100],77:[2,100],85:[2,100],90:[2,100],92:[2,100],101:[2,100],103:[2,100],104:[2,100],105:[2,100],109:[2,100],117:[2,100],125:[2,100],127:[2,100],128:[2,100],131:[2,100],132:[2,100],133:[2,100],134:[2,100],135:[2,100],136:[2,100]},{8:262,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,138],6:[2,138],25:[2,138],26:[2,138],49:[2,138],54:[2,138],57:[2,138],66:[2,138],67:[2,138],68:[2,138],70:[2,138],72:[2,138],73:[2,138],77:[2,138],83:[2,138],84:[2,138],85:[2,138],90:[2,138],92:[2,138],101:[2,138],103:[2,138],104:[2,138],105:[2,138],109:[2,138],117:[2,138],125:[2,138],127:[2,138],128:[2,138],131:[2,138],132:[2,138],133:[2,138],134:[2,138],135:[2,138],136:[2,138]},{6:[1,74],26:[1,263]},{8:264,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,67],12:[2,117],25:[2,67],28:[2,117],30:[2,117],31:[2,117],33:[2,117],34:[2,117],35:[2,117],36:[2,117],37:[2,117],38:[2,117],45:[2,117],46:[2,117],47:[2,117],51:[2,117],52:[2,117],54:[2,67],75:[2,117],78:[2,117],82:[2,117],87:[2,117],88:[2,117],89:[2,117],90:[2,67],95:[2,117],99:[2,117],100:[2,117],103:[2,117],105:[2,117],107:[2,117],109:[2,117],118:[2,117],124:[2,117],126:[2,117],127:[2,117],128:[2,117],129:[2,117],130:[2,117]},{6:[1,266],25:[1,267],90:[1,265]},{6:[2,54],8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[2,54],26:[2,54],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],85:[2,54],87:[1,58],88:[1,59],89:[1,57],90:[2,54],93:268,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,53],25:[2,53],26:[2,53],53:269,54:[1,226]},{1:[2,178],6:[2,178],25:[2,178],26:[2,178],49:[2,178],54:[2,178],57:[2,178],72:[2,178],77:[2,178],85:[2,178],90:[2,178],92:[2,178],101:[2,178],103:[2,178],104:[2,178],105:[2,178],109:[2,178],117:[2,178],120:[2,178],125:[2,178],127:[2,178],128:[2,178],131:[2,178],132:[2,178],133:[2,178],134:[2,178],135:[2,178],136:[2,178]},{8:270,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:271,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{115:[2,156],116:[2,156]},{27:158,28:[1,73],44:159,58:160,59:161,75:[1,70],88:[1,113],89:[1,114],114:272},{1:[2,163],6:[2,163],25:[2,163],26:[2,163],49:[2,163],54:[2,163],57:[2,163],72:[2,163],77:[2,163],85:[2,163],90:[2,163],92:[2,163],101:[2,163],102:87,103:[2,163],104:[1,273],105:[2,163],108:88,109:[2,163],110:69,117:[1,274],125:[2,163],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,164],6:[2,164],25:[2,164],26:[2,164],49:[2,164],54:[2,164],57:[2,164],72:[2,164],77:[2,164],85:[2,164],90:[2,164],92:[2,164],101:[2,164],102:87,103:[2,164],104:[1,275],105:[2,164],108:88,109:[2,164],110:69,117:[2,164],125:[2,164],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,277],25:[1,278],77:[1,276]},{6:[2,54],11:168,25:[2,54],26:[2,54],27:169,28:[1,73],29:170,30:[1,71],31:[1,72],41:279,42:167,44:171,46:[1,46],77:[2,54],88:[1,113]},{8:280,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,281],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,85],6:[2,85],25:[2,85],26:[2,85],40:[2,85],49:[2,85],54:[2,85],57:[2,85],66:[2,85],67:[2,85],68:[2,85],70:[2,85],72:[2,85],73:[2,85],77:[2,85],79:[2,85],83:[2,85],84:[2,85],85:[2,85],90:[2,85],92:[2,85],101:[2,85],103:[2,85],104:[2,85],105:[2,85],109:[2,85],117:[2,85],125:[2,85],127:[2,85],128:[2,85],129:[2,85],130:[2,85],131:[2,85],132:[2,85],133:[2,85],134:[2,85],135:[2,85],136:[2,85],137:[2,85]},{8:282,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,72:[2,120],75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{72:[2,121],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,37],6:[2,37],25:[2,37],26:[2,37],49:[2,37],54:[2,37],57:[2,37],72:[2,37],77:[2,37],85:[2,37],90:[2,37],92:[2,37],101:[2,37],102:87,103:[2,37],104:[2,37],105:[2,37],108:88,109:[2,37],110:69,117:[2,37],125:[2,37],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{26:[1,283],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,266],25:[1,267],85:[1,284]},{6:[2,67],25:[2,67],26:[2,67],54:[2,67],85:[2,67],90:[2,67]},{5:285,25:[1,5]},{6:[2,57],25:[2,57],26:[2,57],49:[2,57],54:[2,57]},{27:109,28:[1,73],44:110,55:286,56:108,58:111,59:112,75:[1,70],88:[1,113],89:[1,114]},{6:[2,55],25:[2,55],26:[2,55],27:109,28:[1,73],44:110,48:287,54:[2,55],55:107,56:108,58:111,59:112,75:[1,70],88:[1,113],89:[1,114]},{6:[2,62],25:[2,62],26:[2,62],49:[2,62],54:[2,62],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{26:[1,288],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{5:289,25:[1,5],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{5:290,25:[1,5]},{1:[2,134],6:[2,134],25:[2,134],26:[2,134],49:[2,134],54:[2,134],57:[2,134],72:[2,134],77:[2,134],85:[2,134],90:[2,134],92:[2,134],101:[2,134],103:[2,134],104:[2,134],105:[2,134],109:[2,134],117:[2,134],125:[2,134],127:[2,134],128:[2,134],131:[2,134],132:[2,134],133:[2,134],134:[2,134],135:[2,134],136:[2,134]},{5:291,25:[1,5]},{26:[1,292],120:[1,293],121:258,122:[1,217]},{1:[2,172],6:[2,172],25:[2,172],26:[2,172],49:[2,172],54:[2,172],57:[2,172],72:[2,172],77:[2,172],85:[2,172],90:[2,172],92:[2,172],101:[2,172],103:[2,172],104:[2,172],105:[2,172],109:[2,172],117:[2,172],125:[2,172],127:[2,172],128:[2,172],131:[2,172],132:[2,172],133:[2,172],134:[2,172],135:[2,172],136:[2,172]},{5:294,25:[1,5]},{26:[2,175],120:[2,175],122:[2,175]},{5:295,25:[1,5],54:[1,296]},{25:[2,130],54:[2,130],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,98],6:[2,98],25:[2,98],26:[2,98],49:[2,98],54:[2,98],57:[2,98],72:[2,98],77:[2,98],85:[2,98],90:[2,98],92:[2,98],101:[2,98],103:[2,98],104:[2,98],105:[2,98],109:[2,98],117:[2,98],125:[2,98],127:[2,98],128:[2,98],131:[2,98],132:[2,98],133:[2,98],134:[2,98],135:[2,98],136:[2,98]},{1:[2,101],5:297,6:[2,101],25:[1,5],26:[2,101],49:[2,101],54:[2,101],57:[2,101],72:[2,101],77:[2,101],85:[2,101],90:[2,101],92:[2,101],101:[2,101],102:87,103:[1,65],104:[2,101],105:[1,66],108:88,109:[1,68],110:69,117:[2,101],125:[2,101],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{101:[1,298]},{90:[1,299],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,115],6:[2,115],25:[2,115],26:[2,115],40:[2,115],49:[2,115],54:[2,115],57:[2,115],66:[2,115],67:[2,115],68:[2,115],70:[2,115],72:[2,115],73:[2,115],77:[2,115],83:[2,115],84:[2,115],85:[2,115],90:[2,115],92:[2,115],101:[2,115],103:[2,115],104:[2,115],105:[2,115],109:[2,115],115:[2,115],116:[2,115],117:[2,115],125:[2,115],127:[2,115],128:[2,115],131:[2,115],132:[2,115],133:[2,115],134:[2,115],135:[2,115],136:[2,115]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],93:300,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:200,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,25:[1,146],27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,60:147,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],86:301,87:[1,58],88:[1,59],89:[1,57],93:145,95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[2,124],25:[2,124],26:[2,124],54:[2,124],85:[2,124],90:[2,124]},{6:[1,266],25:[1,267],26:[1,302]},{1:[2,141],6:[2,141],25:[2,141],26:[2,141],49:[2,141],54:[2,141],57:[2,141],72:[2,141],77:[2,141],85:[2,141],90:[2,141],92:[2,141],101:[2,141],102:87,103:[1,65],104:[2,141],105:[1,66],108:88,109:[1,68],110:69,117:[2,141],125:[2,141],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,143],6:[2,143],25:[2,143],26:[2,143],49:[2,143],54:[2,143],57:[2,143],72:[2,143],77:[2,143],85:[2,143],90:[2,143],92:[2,143],101:[2,143],102:87,103:[1,65],104:[2,143],105:[1,66],108:88,109:[1,68],110:69,117:[2,143],125:[2,143],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{115:[2,162],116:[2,162]},{8:303,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:304,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:305,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,89],6:[2,89],25:[2,89],26:[2,89],40:[2,89],49:[2,89],54:[2,89],57:[2,89],66:[2,89],67:[2,89],68:[2,89],70:[2,89],72:[2,89],73:[2,89],77:[2,89],83:[2,89],84:[2,89],85:[2,89],90:[2,89],92:[2,89],101:[2,89],103:[2,89],104:[2,89],105:[2,89],109:[2,89],115:[2,89],116:[2,89],117:[2,89],125:[2,89],127:[2,89],128:[2,89],131:[2,89],132:[2,89],133:[2,89],134:[2,89],135:[2,89],136:[2,89]},{11:168,27:169,28:[1,73],29:170,30:[1,71],31:[1,72],41:306,42:167,44:171,46:[1,46],88:[1,113]},{6:[2,90],11:168,25:[2,90],26:[2,90],27:169,28:[1,73],29:170,30:[1,71],31:[1,72],41:166,42:167,44:171,46:[1,46],54:[2,90],76:307,88:[1,113]},{6:[2,92],25:[2,92],26:[2,92],54:[2,92],77:[2,92]},{6:[2,40],25:[2,40],26:[2,40],54:[2,40],77:[2,40],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{8:308,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{72:[2,119],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,38],6:[2,38],25:[2,38],26:[2,38],49:[2,38],54:[2,38],57:[2,38],72:[2,38],77:[2,38],85:[2,38],90:[2,38],92:[2,38],101:[2,38],103:[2,38],104:[2,38],105:[2,38],109:[2,38],117:[2,38],125:[2,38],127:[2,38],128:[2,38],131:[2,38],132:[2,38],133:[2,38],134:[2,38],135:[2,38],136:[2,38]},{1:[2,110],6:[2,110],25:[2,110],26:[2,110],49:[2,110],54:[2,110],57:[2,110],66:[2,110],67:[2,110],68:[2,110],70:[2,110],72:[2,110],73:[2,110],77:[2,110],83:[2,110],84:[2,110],85:[2,110],90:[2,110],92:[2,110],101:[2,110],103:[2,110],104:[2,110],105:[2,110],109:[2,110],117:[2,110],125:[2,110],127:[2,110],128:[2,110],131:[2,110],132:[2,110],133:[2,110],134:[2,110],135:[2,110],136:[2,110]},{1:[2,49],6:[2,49],25:[2,49],26:[2,49],49:[2,49],54:[2,49],57:[2,49],72:[2,49],77:[2,49],85:[2,49],90:[2,49],92:[2,49],101:[2,49],103:[2,49],104:[2,49],105:[2,49],109:[2,49],117:[2,49],125:[2,49],127:[2,49],128:[2,49],131:[2,49],132:[2,49],133:[2,49],134:[2,49],135:[2,49],136:[2,49]},{6:[2,58],25:[2,58],26:[2,58],49:[2,58],54:[2,58]},{6:[2,53],25:[2,53],26:[2,53],53:309,54:[1,202]},{1:[2,200],6:[2,200],25:[2,200],26:[2,200],49:[2,200],54:[2,200],57:[2,200],72:[2,200],77:[2,200],85:[2,200],90:[2,200],92:[2,200],101:[2,200],103:[2,200],104:[2,200],105:[2,200],109:[2,200],117:[2,200],125:[2,200],127:[2,200],128:[2,200],131:[2,200],132:[2,200],133:[2,200],134:[2,200],135:[2,200],136:[2,200]},{1:[2,179],6:[2,179],25:[2,179],26:[2,179],49:[2,179],54:[2,179],57:[2,179],72:[2,179],77:[2,179],85:[2,179],90:[2,179],92:[2,179],101:[2,179],103:[2,179],104:[2,179],105:[2,179],109:[2,179],117:[2,179],120:[2,179],125:[2,179],127:[2,179],128:[2,179],131:[2,179],132:[2,179],133:[2,179],134:[2,179],135:[2,179],136:[2,179]},{1:[2,135],6:[2,135],25:[2,135],26:[2,135],49:[2,135],54:[2,135],57:[2,135],72:[2,135],77:[2,135],85:[2,135],90:[2,135],92:[2,135],101:[2,135],103:[2,135],104:[2,135],105:[2,135],109:[2,135],117:[2,135],125:[2,135],127:[2,135],128:[2,135],131:[2,135],132:[2,135],133:[2,135],134:[2,135],135:[2,135],136:[2,135]},{1:[2,136],6:[2,136],25:[2,136],26:[2,136],49:[2,136],54:[2,136],57:[2,136],72:[2,136],77:[2,136],85:[2,136],90:[2,136],92:[2,136],97:[2,136],101:[2,136],103:[2,136],104:[2,136],105:[2,136],109:[2,136],117:[2,136],125:[2,136],127:[2,136],128:[2,136],131:[2,136],132:[2,136],133:[2,136],134:[2,136],135:[2,136],136:[2,136]},{1:[2,170],6:[2,170],25:[2,170],26:[2,170],49:[2,170],54:[2,170],57:[2,170],72:[2,170],77:[2,170],85:[2,170],90:[2,170],92:[2,170],101:[2,170],103:[2,170],104:[2,170],105:[2,170],109:[2,170],117:[2,170],125:[2,170],127:[2,170],128:[2,170],131:[2,170],132:[2,170],133:[2,170],134:[2,170],135:[2,170],136:[2,170]},{5:310,25:[1,5]},{26:[1,311]},{6:[1,312],26:[2,176],120:[2,176],122:[2,176]},{8:313,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{1:[2,102],6:[2,102],25:[2,102],26:[2,102],49:[2,102],54:[2,102],57:[2,102],72:[2,102],77:[2,102],85:[2,102],90:[2,102],92:[2,102],101:[2,102],103:[2,102],104:[2,102],105:[2,102],109:[2,102],117:[2,102],125:[2,102],127:[2,102],128:[2,102],131:[2,102],132:[2,102],133:[2,102],134:[2,102],135:[2,102],136:[2,102]},{1:[2,139],6:[2,139],25:[2,139],26:[2,139],49:[2,139],54:[2,139],57:[2,139],66:[2,139],67:[2,139],68:[2,139],70:[2,139],72:[2,139],73:[2,139],77:[2,139],83:[2,139],84:[2,139],85:[2,139],90:[2,139],92:[2,139],101:[2,139],103:[2,139],104:[2,139],105:[2,139],109:[2,139],117:[2,139],125:[2,139],127:[2,139],128:[2,139],131:[2,139],132:[2,139],133:[2,139],134:[2,139],135:[2,139],136:[2,139]},{1:[2,118],6:[2,118],25:[2,118],26:[2,118],49:[2,118],54:[2,118],57:[2,118],66:[2,118],67:[2,118],68:[2,118],70:[2,118],72:[2,118],73:[2,118],77:[2,118],83:[2,118],84:[2,118],85:[2,118],90:[2,118],92:[2,118],101:[2,118],103:[2,118],104:[2,118],105:[2,118],109:[2,118],117:[2,118],125:[2,118],127:[2,118],128:[2,118],131:[2,118],132:[2,118],133:[2,118],134:[2,118],135:[2,118],136:[2,118]},{6:[2,125],25:[2,125],26:[2,125],54:[2,125],85:[2,125],90:[2,125]},{6:[2,53],25:[2,53],26:[2,53],53:314,54:[1,226]},{6:[2,126],25:[2,126],26:[2,126],54:[2,126],85:[2,126],90:[2,126]},{1:[2,165],6:[2,165],25:[2,165],26:[2,165],49:[2,165],54:[2,165],57:[2,165],72:[2,165],77:[2,165],85:[2,165],90:[2,165],92:[2,165],101:[2,165],102:87,103:[2,165],104:[2,165],105:[2,165],108:88,109:[2,165],110:69,117:[1,315],125:[2,165],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,167],6:[2,167],25:[2,167],26:[2,167],49:[2,167],54:[2,167],57:[2,167],72:[2,167],77:[2,167],85:[2,167],90:[2,167],92:[2,167],101:[2,167],102:87,103:[2,167],104:[1,316],105:[2,167],108:88,109:[2,167],110:69,117:[2,167],125:[2,167],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,166],6:[2,166],25:[2,166],26:[2,166],49:[2,166],54:[2,166],57:[2,166],72:[2,166],77:[2,166],85:[2,166],90:[2,166],92:[2,166],101:[2,166],102:87,103:[2,166],104:[2,166],105:[2,166],108:88,109:[2,166],110:69,117:[2,166],125:[2,166],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[2,93],25:[2,93],26:[2,93],54:[2,93],77:[2,93]},{6:[2,53],25:[2,53],26:[2,53],53:317,54:[1,236]},{26:[1,318],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,247],25:[1,248],26:[1,319]},{26:[1,320]},{1:[2,173],6:[2,173],25:[2,173],26:[2,173],49:[2,173],54:[2,173],57:[2,173],72:[2,173],77:[2,173],85:[2,173],90:[2,173],92:[2,173],101:[2,173],103:[2,173],104:[2,173],105:[2,173],109:[2,173],117:[2,173],125:[2,173],127:[2,173],128:[2,173],131:[2,173],132:[2,173],133:[2,173],134:[2,173],135:[2,173],136:[2,173]},{26:[2,177],120:[2,177],122:[2,177]},{25:[2,131],54:[2,131],102:87,103:[1,65],105:[1,66],108:88,109:[1,68],110:69,125:[1,86],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[1,266],25:[1,267],26:[1,321]},{8:322,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{8:323,9:117,10:20,11:21,12:[1,22],13:8,14:9,15:10,16:11,17:12,18:13,19:14,20:15,21:16,22:17,23:18,24:19,27:62,28:[1,73],29:49,30:[1,71],31:[1,72],32:24,33:[1,50],34:[1,51],35:[1,52],36:[1,53],37:[1,54],38:[1,55],39:23,44:63,45:[1,45],46:[1,46],47:[1,29],50:30,51:[1,60],52:[1,61],58:47,59:48,61:36,63:25,64:26,65:27,75:[1,70],78:[1,43],82:[1,28],87:[1,58],88:[1,59],89:[1,57],95:[1,38],99:[1,44],100:[1,56],102:39,103:[1,65],105:[1,66],106:40,107:[1,67],108:41,109:[1,68],110:69,118:[1,42],123:37,124:[1,64],126:[1,31],127:[1,32],128:[1,33],129:[1,34],130:[1,35]},{6:[1,277],25:[1,278],26:[1,324]},{6:[2,41],25:[2,41],26:[2,41],54:[2,41],77:[2,41]},{6:[2,59],25:[2,59],26:[2,59],49:[2,59],54:[2,59]},{1:[2,171],6:[2,171],25:[2,171],26:[2,171],49:[2,171],54:[2,171],57:[2,171],72:[2,171],77:[2,171],85:[2,171],90:[2,171],92:[2,171],101:[2,171],103:[2,171],104:[2,171],105:[2,171],109:[2,171],117:[2,171],125:[2,171],127:[2,171],128:[2,171],131:[2,171],132:[2,171],133:[2,171],134:[2,171],135:[2,171],136:[2,171]},{6:[2,127],25:[2,127],26:[2,127],54:[2,127],85:[2,127],90:[2,127]},{1:[2,168],6:[2,168],25:[2,168],26:[2,168],49:[2,168],54:[2,168],57:[2,168],72:[2,168],77:[2,168],85:[2,168],90:[2,168],92:[2,168],101:[2,168],102:87,103:[2,168],104:[2,168],105:[2,168],108:88,109:[2,168],110:69,117:[2,168],125:[2,168],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{1:[2,169],6:[2,169],25:[2,169],26:[2,169],49:[2,169],54:[2,169],57:[2,169],72:[2,169],77:[2,169],85:[2,169],90:[2,169],92:[2,169],101:[2,169],102:87,103:[2,169],104:[2,169],105:[2,169],108:88,109:[2,169],110:69,117:[2,169],125:[2,169],127:[1,80],128:[1,79],131:[1,78],132:[1,81],133:[1,82],134:[1,83],135:[1,84],136:[1,85]},{6:[2,94],25:[2,94],26:[2,94],54:[2,94],77:[2,94]}],defaultActions:{60:[2,51],61:[2,52],75:[2,3],94:[2,108],189:[2,88]},parseError:function(a,b){throw new Error(a)},parse:function(a){function o(){var a;a=b.lexer.lex()||1,typeof a!="number"&&(a=b.symbols_[a]||a);return a}function n(a){c.length=c.length-2*a,d.length=d.length-a,e.length=e.length-a}var b=this,c=[0],d=[null],e=[],f=this.table,g="",h=0,i=0,j=0,k=2,l=1;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var m=this.lexer.yylloc;e.push(m),typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);var p,q,r,s,t,u,v={},w,x,y,z;for(;;){r=c[c.length-1],this.defaultActions[r]?s=this.defaultActions[r]:(p==null&&(p=o()),s=f[r]&&f[r][p]);_handle_error:if(typeof s=="undefined"||!s.length||!s[0]){if(!j){z=[];for(w in f[r])this.terminals_[w]&&w>2&&z.push("'"+this.terminals_[w]+"'");var A="";this.lexer.showPosition?A="Parse error on line "+(h+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+z.join(", ")+", got '"+this.terminals_[p]+"'":A="Parse error on line "+(h+1)+": Unexpected "+(p==1?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(A,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:m,expected:z})}if(j==3){if(p==l)throw new Error(A||"Parsing halted.");i=this.lexer.yyleng,g=this.lexer.yytext,h=this.lexer.yylineno,m=this.lexer.yylloc,p=o()}for(;;){if(k.toString()in f[r])break;if(r==0)throw new Error(A||"Parsing halted.");n(1),r=c[c.length-1]}q=p,p=k,r=c[c.length-1],s=f[r]&&f[r][k],j=3}if(s[0]instanceof Array&&s.length>1)throw new Error("Parse Error: multiple actions possible at state: "+r+", token: "+p);switch(s[0]){case 1:c.push(p),d.push(this.lexer.yytext),e.push(this.lexer.yylloc),c.push(s[1]),p=null,q?(p=q,q=null):(i=this.lexer.yyleng,g=this.lexer.yytext,h=this.lexer.yylineno,m=this.lexer.yylloc,j>0&&j--);break;case 2:x=this.productions_[s[1]][1],v.$=d[d.length-x],v._$={first_line:e[e.length-(x||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(x||1)].first_column,last_column:e[e.length-1].last_column},u=this.performAction.call(v,g,i,h,this.yy,s[1],d,e);if(typeof u!="undefined")return u;x&&(c=c.slice(0,-1*x*2),d=d.slice(0,-1*x),e=e.slice(0,-1*x)),c.push(this.productions_[s[1]][0]),d.push(v.$),e.push(v._$),y=f[c[c.length-2]][c[c.length-1]],c.push(y);break;case 3:return!0}}return!0}};undefined;return a}();typeof require!="undefined"&&typeof a!="undefined"&&(a.parser=b,a.parse=function(){return b.parse.apply(b,arguments)},a.main=function(b){if(!b[1])throw new Error("Usage: "+b[0]+" FILE");if(typeof process!="undefined")var c=require("fs").readFileSync(require("path").join(process.cwd(),b[1]),"utf8");else
    var d=require("file").path(require("file").cwd()),c=d.join(b[1]).read({charset:"utf-8"});return a.parser.parse(c)},typeof module!="undefined"&&require.main===module&&a.main(typeof process!="undefined"?process.argv.slice(1):require("system").args))},require["./scope"]=new function(){var a=this;(function(){var b,c,d,e;e=require("./helpers"),c=e.extend,d=e.last,a.Scope=b=function(){function a(b,c,d){this.parent=b,this.expressions=c,this.method=d,this.variables=[{name:"arguments",type:"arguments"}],this.positions={},this.parent||(a.root=this)}a.root=null,a.prototype.add=function(a,b,c){if(this.shared&&!c)return this.parent.add(a,b,c);return Object.prototype.hasOwnProperty.call(this.positions,a)?this.variables[this.positions[a]].type=b:this.positions[a]=this.variables.push({name:a,type:b})-1},a.prototype.namedMethod=function(){if(this.method.name||!this.parent)return this.method;return this.parent.namedMethod()},a.prototype.find=function(a){if(this.check(a))return!0;this.add(a,"var");return!1},a.prototype.parameter=function(a){if(!this.shared||!this.parent.check(a,!0))return this.add(a,"param")},a.prototype.check=function(a){var b;return!!(this.type(a)||((b=this.parent)!=null?b.check(a):void 0))},a.prototype.temporary=function(a,b){return a.length>1?"_"+a+(b>1?b-1:""):"_"+(b+parseInt(a,36)).toString(36).replace(/\d/g,"a")},a.prototype.type=function(a){var b,c,d,e;e=this.variables;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.name===a)return b.type}return null},a.prototype.freeVariable=function(a,b){var c,d;b==null&&(b=!0),c=0;while(this.check(d=this.temporary(a,c)))c++;b&&this.add(d,"var",!0);return d},a.prototype.assign=function(a,b){this.add(a,{value:b,assigned:!0},!0);return this.hasAssignments=!0},a.prototype.hasDeclarations=function(){return!!this.declaredVariables().length},a.prototype.declaredVariables=function(){var a,b,c,d,e,f;a=[],b=[],f=this.variables;for(d=0,e=f.length;d<e;d++)c=f[d],c.type==="var"&&(c.name.charAt(0)==="_"?b:a).push(c.name);return a.sort().concat(b.sort())},a.prototype.assignedVariables=function(){var a,b,c,d,e;d=this.variables,e=[];for(b=0,c=d.length;b<c;b++)a=d[b],a.type.assigned&&e.push(""+a.name+" = "+a.type.value);return e};return a}()}).call(this)},require["./nodes"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk=({}).hasOwnProperty,bl=function(a,b){function d(){this.constructor=a}for(var c in b)bk.call(b,c)&&(a[c]=b[c]);d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype;return a},bm=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};N=require("./scope").Scope,bi=require("./lexer"),I=bi.RESERVED,M=bi.STRICT_PROSCRIBED,bj=require("./helpers"),Z=bj.compact,bb=bj.flatten,ba=bj.extend,bd=bj.merge,$=bj.del,bf=bj.starts,_=bj.ends,bc=bj.last,a.extend=ba,Y=function(){return!0},D=function(){return!1},S=function(){return this},C=function(){this.negated=!this.negated;return this},a.Base=e=function(){function a(){}a.prototype.compile=function(a,b){var c;a=ba({},a),b&&(a.level=b),c=this.unfoldSoak(a)||this,c.tab=a.indent;return a.level===z||!c.isStatement(a)?c.compileNode(a):c.compileClosure(a)},a.prototype.compileClosure=function(a){if(this.jumps())throw SyntaxError("cannot use a pure statement in an expression.");a.sharedScope=!0;return i.wrap(this).compileNode(a)},a.prototype.cache=function(a,b,c){var e,f;if(!this.isComplex()){e=b?this.compile(a,b):this;return[e,e]}e=new A(c||a.scope.freeVariable("ref")),f=new d(e,this);return b?[f.compile(a,b),e.value]:[f,e]},a.prototype.compileLoopReference=function(a,b){var c,d;c=d=this.compile(a,w),-Infinity<+c&&+c<Infinity||o.test(c)&&a.scope.check(c,!0)||(c=""+(d=a.scope.freeVariable(b))+" = "+c);return[c,d]},a.prototype.makeReturn=function(a){var b;b=this.unwrapAll();return a?new g(new A(""+a+".push"),[b]):new K(b)},a.prototype.contains=function(a){var b;b=!1,this.traverseChildren(!1,function(c){if(a(c)){b=!0;return!1}});return b},a.prototype.containsType=function(a){return this instanceof a||this.contains(function(b){return b instanceof a})},a.prototype.lastNonComment=function(a){var b;b=a.length;while(b--)if(!(a[b]instanceof k))return a[b];return null},a.prototype.toString=function(a,b){var c;a==null&&(a=""),b==null&&(b=this.constructor.name),c="\n"+a+b,this.soak&&(c+="?"),this.eachChild(function(b){return c+=b.toString(a+R)});return c},a.prototype.eachChild=function(a){var b,c,d,e,f,g,h,i;if(!this.children)return this;h=this.children;for(d=0,f=h.length;d<f;d++){b=h[d];if(this[b]){i=bb([this[b]]);for(e=0,g=i.length;e<g;e++){c=i[e];if(a(c)===!1)return this}}}return this},a.prototype.traverseChildren=function(a,b){return this.eachChild(function(c){if(b(c)===!1)return!1;return c.traverseChildren(a,b)})},a.prototype.invert=function(){return new F("!",this)},a.prototype.unwrapAll=function(){var a;a=this;while(a!==(a=a.unwrap()))continue;return a},a.prototype.children=[],a.prototype.isStatement=D,a.prototype.jumps=D,a.prototype.isComplex=Y,a.prototype.isChainable=D,a.prototype.isAssignable=D,a.prototype.unwrap=S,a.prototype.unfoldSoak=D,a.prototype.assigns=D;return a}(),a.Block=f=function(a){function b(a){this.expressions=Z(bb(a||[]))}bl(b,a),b.prototype.children=["expressions"],b.prototype.push=function(a){this.expressions.push(a);return this},b.prototype.pop=function(){return this.expressions.pop()},b.prototype.unshift=function(a){this.expressions.unshift(a);return this},b.prototype.unwrap=function(){return this.expressions.length===1?this.expressions[0]:this},b.prototype.isEmpty=function(){return!this.expressions.length},b.prototype.isStatement=function(a){var b,c,d,e;e=this.expressions;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.isStatement(a))return!0}return!1},b.prototype.jumps=function(a){var b,c,d,e;e=this.expressions;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.jumps(a))return b}},b.prototype.makeReturn=function(a){var b,c;c=this.expressions.length;while(c--){b=this.expressions[c];if(!(b instanceof k)){this.expressions[c]=b.makeReturn(a),b instanceof K&&!b.expression&&this.expressions.splice(c,1);break}}return this},b.prototype.compile=function(a,c){a==null&&(a={});return a.scope?b.__super__.compile.call(this,a,c):this.compileRoot(a)},b.prototype.compileNode=function(a){var c,d,e,f,g,h,i;this.tab=a.indent,f=a.level===z,d=[],i=this.expressions;for(g=0,h=i.length;g<h;g++)e=i[g],e=e.unwrapAll(),e=e.unfoldSoak(a)||e,e instanceof b?d.push(e.compileNode(a)):f?(e.front=!0,c=e.compile(a),e.isStatement(a)||(c=""+this.tab+c+";",e instanceof A&&(c=""+c+"\n")),d.push(c)):d.push(e.compile(a,w));if(f)return this.spaced?"\n"+d.join("\n\n")+"\n":d.join("\n");c=d.join(", ")||"void 0";return d.length>1&&a.level>=w?"("+c+")":c},b.prototype.compileRoot=function(a){var b,c,d,e,f,g;a.indent=a.bare?"":R,a.scope=new N(null,this,null),a.level=z,this.spaced=!0,e="",a.bare||(f=function(){var a,b,e,f;e=this.expressions,f=[];for(d=a=0,b=e.length;a<b;d=++a){c=e[d];if(!(c.unwrap()instanceof k))break;f.push(c)}return f}.call(this),g=this.expressions.slice(f.length),this.expressions=f,f.length&&(e=""+this.compileNode(bd(a,{indent:""}))+"\n"),this.expressions=g),b=this.compileWithDeclarations(a);if(a.bare)return b;return""+e+"(function() {\n"+b+"\n}).call(this);\n"},b.prototype.compileWithDeclarations=function(a){var b,c,d,e,f,g,h,i,j,l,m,n,o,p;c=g="",n=this.expressions;for(f=l=0,m=n.length;l<m;f=++l){e=n[f],e=e.unwrap();if(!(e instanceof k||e instanceof A))break}a=bd(a,{level:z}),f&&(h=this.expressions.splice(f,9e9),o=[this.spaced,!1],j=o[0],this.spaced=o[1],p=[this.compileNode(a),j],c=p[0],this.spaced=p[1],this.expressions=h),g=this.compileNode(a),i=a.scope;if(i.expressions===this){d=a.scope.hasDeclarations(),b=i.hasAssignments;if(d||b)f&&(c+="\n"),c+=""+this.tab+"var ",d&&(c+=i.declaredVariables().join(", ")),b&&(d&&(c+=",\n"+(this.tab+R)),c+=i.assignedVariables().join(",\n"+(this.tab+R))),c+=";\n"}return c+g},b.wrap=function(a){if(a.length===1&&a[0]instanceof b)return a[0];return new b(a)};return b}(e),a.Literal=A=function(a){function b(a){this.value=a}bl(b,a),b.prototype.makeReturn=function(){return this.isStatement()?this:b.__super__.makeReturn.apply(this,arguments)},b.prototype.isAssignable=function(){return o.test(this.value)},b.prototype.isStatement=function(){var a;return(a=this.value)==="break"||a==="continue"||a==="debugger"},b.prototype.isComplex=D,b.prototype.assigns=function(a){return a===this.value},b.prototype.jumps=function(a){if(this.value==="break"&&!((a!=null?a.loop:void 0)||(a!=null?a.block:void 0)))return this;if(this.value==="continue"&&(a!=null?!a.loop:!void 0))return this},b.prototype.compileNode=function(a){var b,c;b=this.value==="this"?((c=a.scope.method)!=null?c.bound:void 0)?a.scope.method.context:this.value:this.value.reserved?'"'+this.value+'"':this.value;return this.isStatement()?""+this.tab+b+";":b},b.prototype.toString=function(){return' "'+this.value+'"'};return b}(e),a.Undefined=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}bl(b,a),b.prototype.isAssignable=D,b.prototype.isComplex=D,b.prototype.compileNode=function(a){return a.level>=u?"(void 0)":"void 0"};return b}(e),a.Null=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}bl(b,a),b.prototype.isAssignable=D,b.prototype.isComplex=D,b.prototype.compileNode=function(){return"null"};return b}(e),a.Bool=function(a){function b(a){this.val=a}bl(b,a),b.prototype.isAssignable=D,b.prototype.isComplex=D,b.prototype.compileNode=function(){return this.val};return b}(e),a.Return=K=function(a){function b(a){a&&!a.unwrap().isUndefined&&(this.expression=a)}bl(b,a),b.prototype.children=["expression"],b.prototype.isStatement=Y,b.prototype.makeReturn=S,b.prototype.jumps=S,b.prototype.compile=function(a,c){var d,e;d=(e=this.expression)!=null?e.makeReturn():void 0;return!d||d instanceof b?b.__super__.compile.call(this,a,c):d.compile(a,c)},b.prototype.compileNode=function(a){return this.tab+("return"+[this.expression?" "+this.expression.compile(a,y):void 0]+";")};return b}(e),a.Value=W=function(a){function b(a,c,d){if(!c&&a instanceof b)return a;this.base=a,this.properties=c||[],d&&(this[d]=!0);return this}bl(b,a),b.prototype.children=["base","properties"],b.prototype.add=function(a){this.properties=this.properties.concat(a);return this},b.prototype.hasProperties=function(){return!!this.properties.length},b.prototype.isArray=function(){return!this.properties.length&&this.base instanceof c},b.prototype.isComplex=function(){return this.hasProperties()||this.base.isComplex()},b.prototype.isAssignable=function(){return this.hasProperties()||this.base.isAssignable()},b.prototype.isSimpleNumber=function(){return this.base instanceof A&&L.test(this.base.value)},b.prototype.isString=function(){return this.base instanceof A&&q.test(this.base.value)},b.prototype.isAtomic=function(){var a,b,c,d;d=this.properties.concat(this.base);for(b=0,c=d.length;b<c;b++){a=d[b];if(a.soak||a instanceof g)return!1}return!0},b.prototype.isStatement=function(a){return!this.properties.length&&this.base.isStatement(a)},b.prototype.assigns=function(a){return!this.properties.length&&this.base.assigns(a)},b.prototype.jumps=function(a){return!this.properties.length&&this.base.jumps(a)},b.prototype.isObject=function(a){if(this.properties.length)return!1;return this.base instanceof E&&(!a||this.base.generated)},b.prototype.isSplice=function(){return bc(this.properties)instanceof O},b.prototype.unwrap=function(){return this.properties.length?this:this.base},b.prototype.cacheReference=function(a){var c,e,f,g;f=bc(this.properties);if(this.properties.length<2&&!this.base.isComplex()&&(f!=null?!f.isComplex():!void 0))return[this,this];c=new b(this.base,this.properties.slice(0,-1)),c.isComplex()&&(e=new A(a.scope.freeVariable("base")),c=new b(new H(new d(e,c))));if(!f)return[c,e];f.isComplex()&&(g=new A(a.scope.freeVariable("name")),f=new t(new d(g,f.index)),g=new t(g));return[c.add(f),new b(e||c.base,[g||f])]},b.prototype.compileNode=function(a){var b,c,d,e,f;this.base.front=this.front,d=this.properties,b=this.base.compile(a,d.length?u:null),(this.base instanceof H||d.length)&&L.test(b)&&(b=""+b+".");for(e=0,f=d.length;e<f;e++)c=d[e],b+=c.compile(a);return b},b.prototype.unfoldSoak=function(a){var c,e=this;if(this.unfoldedSoak!=null)return this.unfoldedSoak;c=function(){var c,f,g,h,i,j,k,m,n;if(g=e.base.unfoldSoak(a)){Array.prototype.push.apply(g.body.properties,e.properties);return g}n=e.properties;for(f=k=0,m=n.length;k<m;f=++k){h=n[f];if(!h.soak)continue;h.soak=!1,c=new b(e.base,e.properties.slice(0,f)),j=new b(e.base,e.properties.slice(f)),c.isComplex()&&(i=new A(a.scope.freeVariable("ref")),c=new H(new d(i,c)),j.base=i);return new r(new l(c),j,{soak:!0})}return null}();return this.unfoldedSoak=c||!1};return b}(e),a.Comment=k=function(a){function b(a){this.comment=a}bl(b,a),b.prototype.isStatement=Y,b.prototype.makeReturn=S,b.prototype.compileNode=function(a,b){var c;c="/*"+be(this.comment,this.tab)+("\n"+this.tab+"*/\n"),(b||a.level)===z&&(c=a.indent+c);return c};return b}(e),a.Call=g=function(a){function c(a,b,c){this.args=b!=null?b:[],this.soak=c,this.isNew=!1,this.isSuper=a==="super",this.variable=this.isSuper?null:a}bl(c,a),c.prototype.children=["variable","args"],c.prototype.newInstance=function(){var a,b;a=((b=this.variable)!=null?b.base:void 0)||this.variable,a instanceof c&&!a.isNew?a.newInstance():this.isNew=!0;return this},c.prototype.superReference=function(a){var c,d,e;d=a.scope.namedMethod();if(!d)throw SyntaxError("cannot call super outside of a function.");e=d.name;if(e==null)throw SyntaxError("cannot call super on an anonymous function.");if(d.klass){c=[new b(new A("__super__"))],d["static"]&&c.push(new b(new A("constructor"))),c.push(new b(new A(e)));return(new W(new A(d.klass),c)).compile(a)}return""+e+".__super__.constructor"},c.prototype.superThis=function(a){var b;b=a.scope.method;return b&&!b.klass&&b.context||"this"},c.prototype.unfoldSoak=function(a){var b,d,e,f,g,h,i,j,k;if(this.soak){if(this.variable){if(d=bg(a,this,"variable"))return d;j=(new W(this.variable)).cacheReference(a),e=j[0],g=j[1]}else
    e=new A(this.superReference(a)),g=new W(e);g=new c(g,this.args),g.isNew=this.isNew,e=new A("typeof "+e.compile(a)+' === "function"');return new r(e,new W(g),{soak:!0})}b=this,f=[];for(;;){if(b.variable instanceof c){f.push(b),b=b.variable;continue}if(!(b.variable instanceof W))break;f.push(b);if(!((b=b.variable.base)instanceof c))break}k=f.reverse();for(h=0,i=k.length;h<i;h++)b=k[h],d&&(b.variable instanceof c?b.variable=d:b.variable.base=d),d=bg(a,b,"variable");return d},c.prototype.filterImplicitObjects=function(a){var b,c,e,f,g,h,i,j,l,m;c=[];for(h=0,j=a.length;h<j;h++){b=a[h];if(!((typeof b.isObject=="function"?b.isObject():void 0)&&b.base.generated)){c.push(b);continue}e=null,m=b.base.properties;for(i=0,l=m.length;i<l;i++)f=m[i],f instanceof d||f instanceof k?(e||c.push(e=new E(g=[],!0)),g.push(f)):(c.push(f),e=null)}return c},c.prototype.compileNode=function(a){var b,c,d,e;(e=this.variable)!=null&&(e.front=this.front);if(d=P.compileSplattedArray(a,this.args,!0))return this.compileSplat(a,d);c=this.filterImplicitObjects(this.args),c=function(){var d,e,f;f=[];for(d=0,e=c.length;d<e;d++)b=c[d],f.push(b.compile(a,w));return f}().join(", ");return this.isSuper?this.superReference(a)+(".call("+this.superThis(a)+(c&&", "+c)+")"):(this.isNew?"new ":"")+this.variable.compile(a,u)+("("+c+")")},c.prototype.compileSuper=function(a,b){return""+this.superReference(b)+".call("+this.superThis(b)+(a.length?", ":"")+a+")"},c.prototype.compileSplat=function(a,b){var c,d,e,f,g;if(this.isSuper)return""+this.superReference(a)+".apply("+this.superThis(a)+", "+b+")";if(this.isNew){e=this.tab+R;return"(function(func, args, ctor) {\n"+e+"ctor.prototype = func.prototype;\n"+e+"var child = new ctor, result = func.apply(child, args), t = typeof result;\n"+e+'return t == "object" || t == "function" ? result || child : child;\n'+this.tab+"})("+this.variable.compile(a,w)+", "+b+", function(){})"}c=new W(this.variable),(f=c.properties.pop())&&c.isComplex()?(g=a.scope.freeVariable("ref"),d="("+g+" = "+c.compile(a,w)+")"+f.compile(a)):(d=c.compile(a,u),L.test(d)&&(d="("+d+")"),f?(g=d,d+=f.compile(a)):g="null");return""+d+".apply("+g+", "+b+")"};return c}(e),a.Extends=m=function(a){function b(a,b){this.child=a,this.parent=b}bl(b,a),b.prototype.children=["child","parent"],b.prototype.compile=function(a){return(new g(new W(new A(bh("extends"))),[this.child,this.parent])).compile(a)};return b}(e),a.Access=b=function(a){function b(a,b){this.name=a,this.name.asKey=!0,this.soak=b==="soak"}bl(b,a),b.prototype.children=["name"],b.prototype.compile=function(a){var b;b=this.name.compile(a);return o.test(b)?"."+b:"["+b+"]"},b.prototype.isComplex=D;return b}(e),a.Index=t=function(a){function b(a){this.index=a}bl(b,a),b.prototype.children=["index"],b.prototype.compile=function(a){return"["+this.index.compile(a,y)+"]"},b.prototype.isComplex=function(){return this.index.isComplex()};return b}(e),a.Range=J=function(a){function b(a,b,c){this.from=a,this.to=b,this.exclusive=c==="exclusive",this.equals=this.exclusive?"":"="}bl(b,a),b.prototype.children=["from","to"],b.prototype.compileVariables=function(a){var b,c,d,e,f;a=bd(a,{top:!0}),c=this.from.cache(a,w),this.fromC=c[0],this.fromVar=c[1],d=this.to.cache(a,w),this.toC=d[0],this.toVar=d[1];if(b=$(a,"step"))e=b.cache(a,w),this.step=e[0],this.stepVar=e[1];f=[this.fromVar.match(L),this.toVar.match(L)],this.fromNum=f[0],this.toNum=f[1];if(this.stepVar)return this.stepNum=this.stepVar.match(L)},b.prototype.compileNode=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;this.fromVar||this.compileVariables(a);if(!a.index)return this.compileArray(a);h=this.fromNum&&this.toNum,f=$(a,"index"),g=$(a,"name"),j=g&&g!==f,m=""+f+" = "+this.fromC,this.toC!==this.toVar&&(m+=", "+this.toC),this.step!==this.stepVar&&(m+=", "+this.step),n=[""+f+" <"+this.equals,""+f+" >"+this.equals],i=n[0],e=n[1],c=this.stepNum?+this.stepNum>0?""+i+" "+this.toVar:""+e+" "+this.toVar:h?(o=[+this.fromNum,+this.toNum],d=o[0],l=o[1],o,d<=l?""+i+" "+l:""+e+" "+l):(b=""+this.fromVar+" <= "+this.toVar,""+b+" ? "+i+" "+this.toVar+" : "+e+" "+this.toVar),k=this.stepVar?""+f+" += "+this.stepVar:h?j?d<=l?"++"+f:"--"+f:d<=l?""+f+"++":""+f+"--":j?""+b+" ? ++"+f+" : --"+f:""+b+" ? "+f+"++ : "+f+"--",j&&(m=""+g+" = "+m),j&&(k=""+g+" = "+k);return""+m+"; "+c+"; "+k},b.prototype.compileArray=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;if(this.fromNum&&this.toNum&&Math.abs(this.fromNum-this.toNum)<=20){j=function(){p=[];for(var a=n=+this.fromNum,b=+this.toNum;n<=b?a<=b:a>=b;n<=b?a++:a--)p.push(a);return p}.apply(this),this.exclusive&&j.pop();return"["+j.join(", ")+"]"}g=this.tab+R,f=a.scope.freeVariable("i"),k=a.scope.freeVariable("results"),i="\n"+g+k+" = [];",this.fromNum&&this.toNum?(a.index=f,c=this.compileNode(a)):(l=""+f+" = "+this.fromC+(this.toC!==this.toVar?", "+this.toC:""),d=""+this.fromVar+" <= "+this.toVar,c="var "+l+"; "+d+" ? "+f+" <"+this.equals+" "+this.toVar+" : "+f+" >"+this.equals+" "+this.toVar+"; "+d+" ? "+f+"++ : "+f+"--"),h="{ "+k+".push("+f+"); }\n"+g+"return "+k+";\n"+a.indent,e=function(a){return a!=null?a.contains(function(a){return a instanceof A&&a.value==="arguments"&&!a.asKey}):void 0};if(e(this.from)||e(this.to))b=", arguments";return"(function() {"+i+"\n"+g+"for ("+c+")"+h+"}).apply(this"+(b!=null?b:"")+")"};return b}(e),a.Slice=O=function(a){function b(a){this.range=a,b.__super__.constructor.call(this)}bl(b,a),b.prototype.children=["range"],b.prototype.compileNode=function(a){var b,c,d,e,f,g;g=this.range,e=g.to,c=g.from,d=c&&c.compile(a,y)||"0",b=e&&e.compile(a,y),e&&(!!this.range.exclusive||+b!==-1)&&(f=", "+(this.range.exclusive?b:L.test(b)?""+(+b+1):(b=e.compile(a,u),""+b+" + 1 || 9e9")));return".slice("+d+(f||"")+")"};return b}(e),a.Obj=E=function(a){function b(a,b){this.generated=b!=null?b:!1,this.objects=this.properties=a||[]}bl(b,a),b.prototype.children=["properties"],b.prototype.compileNode=function(a){var b,c,e,f,g,h,i,j,l,m,n,o,p,q,r,s;n=this.properties,m=[],s=this.properties;for(o=0,q=s.length;o<q;o++){j=s[o],j.isComplex()&&(j=j.variable);if(j!=null){l=j.unwrapAll().value.toString();if(bm.call(m,l)>=0)throw SyntaxError('multiple object literal properties named "'+l+'"');m.push(l)}}if(!n.length)return this.front?"({})":"{}";if(this.generated)for(p=0,r=n.length;p<r;p++){h=n[p];if(h instanceof W)throw new Error("cannot have an implicit value in an implicit object")}c=a.indent+=R,g=this.lastNonComment(this.properties),n=function(){var h,i,l;l=[];for(b=h=0,i=n.length;h<i;b=++h)j=n[b],f=b===n.length-1?"":j===g||j instanceof k?"\n":",\n",e=j instanceof k?"":c,j instanceof W&&j["this"]&&(j=new d(j.properties[0].name,j,"object")),j instanceof k||(j instanceof d||(j=new d(j,j,"object")),(j.variable.base||j.variable).asKey=!0),l.push(e+j.compile(a,z)+f);return l}(),n=n.join(""),i="{"+(n&&"\n"+n+"\n"+this.tab)+"}";return this.front?"("+i+")":i},b.prototype.assigns=function(a){var b,c,d,e;e=this.properties;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.assigns(a))return!0}return!1};return b}(e),a.Arr=c=function(a){function b(a){this.objects=a||[]}bl(b,a),b.prototype.children=["objects"],b.prototype.filterImplicitObjects=g.prototype.filterImplicitObjects,b.prototype.compileNode=function(a){var b,c,d;if(!this.objects.length)return"[]";a.indent+=R,d=this.filterImplicitObjects(this.objects);if(b=P.compileSplattedArray(a,d))return b;b=function(){var b,e,f;f=[];for(b=0,e=d.length;b<e;b++)c=d[b],f.push(c.compile(a,w));return f}().join(", ");return b.indexOf("\n")>=0?"[\n"+a.indent+b+"\n"+this.tab+"]":"["+b+"]"},b.prototype.assigns=function(a){var b,c,d,e;e=this.objects;for(c=0,d=e.length;c<d;c++){b=e[c];if(b.assigns(a))return!0}return!1};return b}(e),a.Class=h=function(a){function c(a,b,c){this.variable=a,this.parent=b,this.body=c!=null?c:new f,this.boundFuncs=[],this.body.classBody=!0}bl(c,a),c.prototype.children=["variable","parent","body"],c.prototype.determineName=function(){var a,c;if(!this.variable)return null;a=(c=bc(this.variable.properties))?c instanceof b&&c.name.value:this.variable.base.value;if(bm.call(M,a)>=0)throw SyntaxError("variable name may not be "+a);return a&&(a=o.test(a)&&a)},c.prototype.setContext=function(a){return this.body.traverseChildren(!1,function(b){if(b.classBody)return!1;if(b instanceof A&&b.value==="this")return b.value=a;if(b instanceof j){b.klass=a;if(b.bound)return b.context=a}})},c.prototype.addBoundFunctions=function(a){var c,d,e,f,g,h;if(this.boundFuncs.length){g=this.boundFuncs,h=[];for(e=0,f=g.length;e<f;e++)c=g[e],d=(new W(new A("this"),[new b(c)])).compile(a),h.push(this.ctor.body.unshift(new A(""+d+" = "+bh("bind")+"("+d+", this)")));return h}},c.prototype.addProperties=function(a,c,e){var f,g,h,i,k;k=a.base.properties.slice(0),h=function(){var a;a=[];while(f=k.shift()){if(f instanceof d){g=f.variable.base,delete f.context,i=f.value;if(g.value==="constructor"){if(this.ctor)throw new Error("cannot define more than one constructor in a class");if(i.bound)throw new Error("cannot define a constructor as a bound function");i instanceof j?f=this.ctor=i:(this.externalCtor=e.scope.freeVariable("class"),f=new d(new A(this.externalCtor),i))}else
    f.variable["this"]?(i["static"]=!0,i.bound&&(i.context=c)):(f.variable=new W(new A(c),[new b(new A("prototype")),new b(g)]),i instanceof j&&i.bound&&(this.boundFuncs.push(g),i.bound=!1))}a.push(f)}return a}.call(this);return Z(h)},c.prototype.walkBody=function(a,b){var d=this;return this.traverseChildren(!1,function(e){var g,h,i,j,k,l;if(e instanceof c)return!1;if(e instanceof f){l=g=e.expressions;for(h=j=0,k=l.length;j<k;h=++j)i=l[h],i instanceof W&&i.isObject(!0)&&(g[h]=d.addProperties(i,a,b));return e.expressions=g=bb(g)}})},c.prototype.hoistDirectivePrologue=function(){var a,b,c;b=0,a=this.body.expressions;while((c=a[b])&&c instanceof k||c instanceof W&&c.isString())++b;return this.directives=a.splice(0,b)},c.prototype.ensureConstructor=function(a){this.ctor||(this.ctor=new j,this.parent&&this.ctor.body.push(new A(""+a+".__super__.constructor.apply(this, arguments)")),this.externalCtor&&this.ctor.body.push(new A(""+this.externalCtor+".apply(this, arguments)")),this.ctor.body.makeReturn(),this.body.expressions.unshift(this.ctor)),this.ctor.ctor=this.ctor.name=a,this.ctor.klass=null;return this.ctor.noReturn=!0},c.prototype.compileNode=function(a){var b,c,e,f,g,h,k;c=this.determineName(),g=c||"_Class",g.reserved&&(g="_"+g),f=new A(g),this.hoistDirectivePrologue(),this.setContext(g),this.walkBody(g,a),this.ensureConstructor(g),this.body.spaced=!0,this.ctor instanceof j||this.body.expressions.unshift(this.ctor),this.body.expressions.push(f),(k=this.body.expressions).unshift.apply(k,this.directives),this.addBoundFunctions(a),b=i.wrap(this.body),this.parent&&(this.superClass=new A(a.scope.freeVariable("super",!1)),this.body.expressions.unshift(new m(f,this.superClass)),b.args.push(this.parent),h=b.variable.params||b.variable.base.params,h.push(new G(this.superClass))),e=new H(b,!0),this.variable&&(e=new d(this.variable,e));return e.compile(a)};return c}(e),a.Assign=d=function(a){function c(a,b,c,d){var e,f,g;this.variable=a,this.value=b,this.context=c,this.param=d&&d.param,this.subpattern=d&&d.subpattern,e=(g=f=this.variable.unwrapAll().value,bm.call(M,g)>=0);if(e&&this.context!=="object")throw SyntaxError('variable name may not be "'+f+'"')}bl(c,a),c.prototype.children=["variable","value"],c.prototype.isStatement=function(a){return(a!=null?a.level:void 0)===z&&this.context!=null&&bm.call(this.context,"?")>=0},c.prototype.assigns=function(a){return this[this.context==="object"?"value":"variable"].assigns(a)},c.prototype.unfoldSoak=function(a){return bg(a,this,"variable")},c.prototype.compileNode=function(a){var b,c,d,e,f,g,h,i,k;if(b=this.variable instanceof W){if(this.variable.isArray()||this.variable.isObject())return this.compilePatternMatch(a);if(this.variable.isSplice())return this.compileSplice(a);if((g=this.context)==="||="||g==="&&="||g==="?=")return this.compileConditional(a)}d=this.variable.compile(a,w);if(!this.context){if(!(f=this.variable.unwrapAll()).isAssignable())throw SyntaxError('"'+this.variable.compile(a)+'" cannot be assigned.');if(typeof f.hasProperties=="function"?!f.hasProperties():!void 0)this.param?a.scope.add(d,"var"):a.scope.find(d)}this.value instanceof j&&(c=B.exec(d))&&(c[1]&&(this.value.klass=c[1]),this.value.name=(h=(i=(k=c[2])!=null?k:c[3])!=null?i:c[4])!=null?h:c[5]),e=this.value.compile(a,w);if(this.context==="object")return""+d+": "+e;e=d+(" "+(this.context||"=")+" ")+e;return a.level<=w?e:"("+e+")"},c.prototype.compilePatternMatch=function(a){var d,e,f,g,h,i,j,k,l,m,n,p,q,r,s,u,v,y,B,C,D,E,F,G,J,K,L;s=a.level===z,v=this.value,m=this.variable.base.objects;if(!(n=m.length)){f=v.compile(a);return a.level>=x?"("+f+")":f}i=this.variable.isObject();if(s&&n===1&&!((l=m[0])instanceof P)){l instanceof c?(D=l,E=D.variable,h=E.base,l=D.value):l.base instanceof H?(F=(new W(l.unwrapAll())).cacheReference(a),l=F[0],h=F[1]):h=i?l["this"]?l.properties[0].name:l:new A(0),d=o.test(h.unwrap().value||0),v=new W(v),v.properties.push(new(d?b:t)(h));if(G=l.unwrap().value,bm.call(I,G)>=0)throw new SyntaxError("assignment to a reserved word: "+l.compile(a)+" = "+v.compile(a));return(new c(l,v,null,{param:this.param})).compile(a,z)}y=v.compile(a,w),e=[],r=!1;if(!o.test(y)||this.variable.assigns(y))e.push(""+(p=a.scope.freeVariable("ref"))+" = "+y),y=p;for(g=B=0,C=m.length;B<C;g=++B){l=m[g],h=g,i&&(l instanceof c?(J=l,K=J.variable,h=K.base,l=J.value):l.base instanceof H?(L=(new W(l.unwrapAll())).cacheReference(a),l=L[0],h=L[1]):h=l["this"]?l.properties[0].name:l);if(!r&&l instanceof P)k=l.name.unwrap().value,l=l.unwrap(),u=""+n+" <= "+y+".length ? "+bh("slice")+".call("+y+", "+g,(q=n-g-1)?(j=a.scope.freeVariable("i"),u+=", "+j+" = "+y+".length - "+q+") : ("+j+" = "+g+", [])"):u+=") : []",u=new A(u),r=""+j+"++";else{k=l.unwrap().value;if(l instanceof P){l=l.name.compile(a);throw new SyntaxError("multiple splats are disallowed in an assignment: "+l+"...")}typeof h=="number"?(h=new A(r||h),d=!1):d=i&&o.test(h.unwrap().value||0),u=new W(new A(y),[new(d?b:t)(h)])}if(k!=null&&bm.call(I,k)>=0)throw new SyntaxError("assignment to a reserved word: "+l.compile(a)+" = "+u.compile(a));e.push((new c(l,u,null,{param:this.param,subpattern:!0})).compile(a,w))}!s&&!this.subpattern&&e.push(y),f=e.join(", ");return a.level<w?f:"("+f+")"},c.prototype.compileConditional=function(a){var b,d,e;e=this.variable.cacheReference(a),b=e[0],d=e[1];if(!b.properties.length&&b.base instanceof A&&b.base.value!=="this"&&!a.scope.check(b.base.value))throw new Error('the variable "'+b.base.value+"\" can't be assigned with "+this.context+" because it has not been defined.");bm.call(this.context,"?")>=0&&(a.isExistentialEquals=!0);return(new F(this.context.slice(0,-1),b,new c(d,this.value,"="))).compile(a)},c.prototype.compileSplice=function(a){var b,c,d,e,f,g,h,i,j,k,l,m;k=this.variable.properties.pop().range,d=k.from,h=k.to,c=k.exclusive,g=this.variable.compile(a),l=(d!=null?d.cache(a,x):void 0)||["0","0"],e=l[0],f=l[1],h?(d!=null?d.isSimpleNumber():void 0)&&h.isSimpleNumber()?(h=+h.compile(a)-+f,c||(h+=1)):(h=h.compile(a,u)+" - "+f,c||(h+=" + 1")):h="9e9",m=this.value.cache(a,w),i=m[0],j=m[1],b="[].splice.apply("+g+", ["+e+", "+h+"].concat("+i+")), "+j;return a.level>z?"("+b+")":b};return c}(e),a.Code=j=function(a){function b(a,b,c){this.params=a||[],this.body=b||new f,this.bound=c==="boundfunc",this.bound&&(this.context="_this")}bl(b,a),b.prototype.children=["params","body"],b.prototype.isStatement=function(){return!!this.ctor},b.prototype.jumps=D,b.prototype.compileNode=function(a){var b,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,v,w,x,y,z,B,C,D,E,G,H,I,J,K,L,M,O;a.scope=new N(a.scope,this.body,this),a.scope.shared=$(a,"sharedScope"),a.indent+=R,delete a.bare,delete a.isExistentialEquals,l=[],e=[],H=this.paramNames();for(s=0,x=H.length;s<x;s++)i=H[s],a.scope.check(i)||a.scope.parameter(i);I=this.params;for(t=0,y=I.length;t<y;t++){k=I[t];if(!k.splat)continue;J=this.params;for(v=0,z=J.length;v<z;v++)j=J[v].name,j["this"]&&(j=j.properties[0].name),j.value&&a.scope.add(j.value,"var",!0);n=new d(new W(new c(function(){var b,c,d,e;d=this.params,e=[];for(b=0,c=d.length;b<c;b++)j=d[b],e.push(j.asReference(a));return e}.call(this))),new W(new A("arguments")));break}K=this.params;for(w=0,B=K.length;w<B;w++)k=K[w],k.isComplex()?(p=m=k.asReference(a),k.value&&(p=new F("?",m,k.value)),e.push(new d(new W(k.name),p,"=",{param:!0}))):(m=k,k.value&&(h=new A(m.name.value+" == null"),p=new d(new W(k.name),k.value,"="),e.push(new r(h,p)))),n||l.push(m);q=this.body.isEmpty(),n&&e.unshift(n),e.length&&(L=this.body.expressions).unshift.apply(L,e);for(f=E=0,C=l.length;E<C;f=++E)j=l[f],a.scope.parameter(l[f]=j.compile(a));o=[],M=this.paramNames();for(G=0,D=M.length;G<D;G++){i=M[G];if(bm.call(o,i)>=0)throw SyntaxError("multiple parameters named '"+i+"'");o.push(i)}!q&&!this.noReturn&&this.body.makeReturn(),this.bound&&(((O=a.scope.parent.method)!=null?O.bound:void 0)?this.bound=this.context=a.scope.parent.method.context:this["static"]||a.scope.parent.assign("_this","this")),g=a.indent,b="function",this.ctor&&(b+=" "+this.name),b+="("+l.join(", ")+") {",this.body.isEmpty()||(b+="\n"+this.body.compileWithDeclarations(a)+"\n"+this.tab),b+="}";if(this.ctor)return this.tab+b;return this.front||a.level>=u?"("+b+")":b},b.prototype.paramNames=function(){var a,b,c,d,e;a=[],e=this.params;for(c=0,d=e.length;c<d;c++)b=e[c],a.push.apply(a,b.names());return a},b.prototype.traverseChildren=function(a,c){if(a)return b.__super__.traverseChildren.call(this,a,c)};return b}(e),a.Param=G=function(a){function b(a,b,c){var d;this.name=a,this.value=b,this.splat=c;if(d=a=this.name.unwrapAll().value,bm.call(M,d)>=0)throw SyntaxError('parameter name "'+a+'" is not allowed')}bl(b,a),b.prototype.children=["name","value"],b.prototype.compile=function(a){return this.name.compile(a,w)},b.prototype.asReference=function(a){var b;if(this.reference)return this.reference;b=this.name,b["this"]?(b=b.properties[0].name,b.value.reserved&&(b=new A(a.scope.freeVariable(b.value)))):b.isComplex()&&(b=new A(a.scope.freeVariable("arg"))),b=new W(b),this.splat&&(b=new P(b));return this.reference=b},b.prototype.isComplex=function(){return this.name.isComplex()},b.prototype.names=function(a){var b,c,e,f,g,h;a==null&&(a=this.name),b=function(a){var b;b=a.properties[0].name.value;return b.reserved?[]:[b]};if(a instanceof A)return[a.value];if(a instanceof W)return b(a);c=[],h=a.objects;for(f=0,g=h.length;f<g;f++){e=h[f];if(e instanceof d)c.push(e.value.unwrap().value);else if(e instanceof P)c.push(e.name.unwrap().value);else if(e instanceof W)e.isArray()||e.isObject()?c.push.apply(c,this.names(e.base)):e["this"]?c.push.apply(c,b(e)):c.push(e.base.value);else
    throw SyntaxError("illegal parameter "+e.compile())}return c};return b}(e),a.Splat=P=function(a){function b(a){this.name=a.compile?a:new A(a)}bl(b,a),b.prototype.children=["name"],b.prototype.isAssignable=Y,b.prototype.assigns=function(a){return this.name.assigns(a)},b.prototype.compile=function(a){return this.index!=null?this.compileParam(a):this.name.compile(a)},b.prototype.unwrap=function(){return this.name},b.compileSplattedArray=function(a,c,d){var e,f,g,h,i,j,k,l;i=-1;while((j=c[++i])&&!(j instanceof b))continue;if(i>=c.length)return"";if(c.length===1){g=c[0].compile(a,w);if(d)return g;return""+bh("slice")+".call("+g+")"}e=c.slice(i);for(h=k=0,l=e.length;k<l;h=++k)j=e[h],g=j.compile(a,w),e[h]=j instanceof b?""+bh("slice")+".call("+g+")":"["+g+"]";if(i===0)return e[0]+(".concat("+e.slice(1).join(", ")+")");f=function(){var b,d,e,f;e=c.slice(0,i),f=[];for(b=0,d=e.length;b<d;b++)j=e[b],f.push(j.compile(a,w));return f}();return"["+f.join(", ")+"].concat("+e.join(", ")+")"};return b}(e),a.While=X=function(a){function b(a,b){this.condition=(b!=null?b.invert:void 0)?a.invert():a,this.guard=b!=null?b.guard:void 0}bl(b,a),b.prototype.children=["condition","guard","body"],b.prototype.isStatement=Y,b.prototype.makeReturn=function(a){if(a)return b.__super__.makeReturn.apply(this,arguments);this.returns=!this.jumps({loop:!0});return this},b.prototype.addBody=function(a){this.body=a;return this},b.prototype.jumps=function(){var a,b,c,d;a=this.body.expressions;if(!a.length)return!1;for(c=0,d=a.length;c<d;c++){b=a[c];if(b.jumps({loop:!0}))return b}return!1},b.prototype.compileNode=function(a){var b,c,d,e;a.indent+=R,e="",b=this.body,b.isEmpty()?b="":(this.returns&&(b.makeReturn(d=a.scope.freeVariable("results")),e=""+this.tab+d+" = [];\n"),this.guard&&(b.expressions.length>1?b.expressions.unshift(new r((new H(this.guard)).invert(),new A("continue"))):this.guard&&(b=f.wrap([new r(this.guard,b)]))),b="\n"+b.compile(a,z)+"\n"+this.tab),c=e+this.tab+("while ("+this.condition.compile(a,y)+") {"+b+"}"),this.returns&&(c+="\n"+this.tab+"return "+d+";");return c};return b}(e),a.Op=F=function(a){function e(a,c,d,e){if(a==="in")return new s(c,d);if(a==="do")return this.generateDo(c);if(a==="new"){if(c instanceof g&&!c["do"]&&!c.isNew)return c.newInstance();if(c instanceof j&&c.bound||c["do"])c=new H(c)}this.operator=b[a]||a,this.first=c,this.second=d,this.flip=!!e;return this}var b,c;bl(e,a),b={"==":"===","!=":"!==",of:"in"},c={"!==":"===","===":"!=="},e.prototype.children=["first","second"],e.prototype.isSimpleNumber=D,e.prototype.isUnary=function(){return!this.second},e.prototype.isComplex=function(){var a;return!this.isUnary()||(a=this.operator)!=="+"&&a!=="-"||this.first.isComplex()},e.prototype.isChainable=function(){var a;return(a=this.operator)==="<"||a===">"||a===">="||a==="<="||a==="==="||a==="!=="},e.prototype.invert=function(){var a,b,d,f,g;if(this.isChainable()&&this.first.isChainable()){a=!0,b=this;while(b&&b.operator)a&&(a=b.operator in c),b=b.first;if(!a)return(new H(this)).invert();b=this;while(b&&b.operator)b.invert=!b.invert,b.operator=c[b.operator],b=b.first;return this}if(f=c[this.operator]){this.operator=f,this.first.unwrap()instanceof e&&this.first.invert();return this}return this.second?(new H(this)).invert():this.operator==="!"&&(d=this.first.unwrap())instanceof e&&((g=d.operator)==="!"||g==="in"||g==="instanceof")?d:new e("!",this)},e.prototype.unfoldSoak=function(a){var b;return((b=this.operator)==="++"||b==="--"||b==="delete")&&bg(a,this,"first")},e.prototype.generateDo=function(a){var b,c,e,f,h,i,k,l;f=[],c=a instanceof d&&(h=a.value.unwrap())instanceof j?h:a,l=c.params||[];for(i=0,k=l.length;i<k;i++)e=l[i],e.value?(f.push(e.value),delete e.value):f.push(e);b=new g(a,f),b["do"]=!0;return b},e.prototype.compileNode=function(a){var b,c,d,e;c=this.isChainable()&&this.first.isChainable(),c||(this.first.front=this.front);if(this.operator==="delete"&&a.scope.check(this.first.unwrapAll().value))throw SyntaxError("delete operand may not be argument or var");if(((d=this.operator)==="--"||d==="++")&&(e=this.first.unwrapAll().value,bm.call(M,e)>=0))throw SyntaxError("prefix increment/decrement may not have eval or arguments operand");if(this.isUnary())return this.compileUnary(a);if(c)return this.compileChain(a);if(this.operator==="?")return this.compileExistence(a);b=this.first.compile(a,x)+" "+this.operator+" "+this.second.compile(a,x);return a.level<=x?b:"("+b+")"},e.prototype.compileChain=function(a){var b,c,d,e;e=this.first.second.cache(a),this.first.second=e[0],d=e[1],c=this.first.compile(a,x),b=""+c+" "+(this.invert?"&&":"||")+" "+d.compile(a)+" "+this.operator+" "+this.second.compile(a,x);return"("+b+")"},e.prototype.compileExistence=function(a){var b,c;this.first.isComplex()?(c=new A(a.scope.freeVariable("ref")),b=new H(new d(c,this.first))):(b=this.first,c=b);return(new r(new l(b),c,{type:"if"})).addElse(this.second).compile(a)},e.prototype.compileUnary=function(a){var b,c,d;if(a.level>=u)return(new H(this)).compile(a);c=[b=this.operator],d=b==="+"||b==="-",(b==="new"||b==="typeof"||b==="delete"||d&&this.first instanceof e&&this.first.operator===b)&&c.push(" ");if(d&&this.first instanceof e||b==="new"&&this.first.isStatement(a))this.first=new H(this.first);c.push(this.first.compile(a,x)),this.flip&&c.reverse();return c.join("")},e.prototype.toString=function(a){return e.__super__.toString.call(this,a,this.constructor.name+" "+this.operator)};return e}(e),a.In=s=function(a){function b(a,b){this.object=a,this.array=b}bl(b,a),b.prototype.children=["object","array"],b.prototype.invert=C,b.prototype.compileNode=function(a){var b,c,d,e,f;if(this.array instanceof W&&this.array.isArray()){f=this.array.base.objects;for(d=0,e=f.length;d<e;d++){c=f[d];if(!(c instanceof P))continue;b=!0;break}if(!b)return this.compileOrTest(a)}return this.compileLoopTest(a)},b.prototype.compileOrTest=function(a){var b,c,d,e,f,g,h,i,j;if(this.array.base.objects.length===0)return""+!!this.negated;i=this.object.cache(a,x),g=i[0],f=i[1],j=this.negated?[" !== "," && "]:[" === "," || "],b=j[0],c=j[1],h=function(){var c,h,i,j;i=this.array.base.objects,j=[];for(d=c=0,h=i.length;c<h;d=++c)e=i[d],j.push((d?f:g)+b+e.compile(a,u));return j}.call(this),h=h.join(c);return a.level<x?h:"("+h+")"},b.prototype.compileLoopTest=function(a){var b,c,d,e;e=this.object.cache(a,w),d=e[0],c=e[1],b=bh("indexOf")+(".call("+this.array.compile(a,w)+", "+c+") ")+(this.negated?"< 0":">= 0");if(d===c)return b;b=d+", "+b;return a.level<w?b:"("+b+")"},b.prototype.toString=function(a){return b.__super__.toString.call(this,a,this.constructor.name+(this.negated?"!":""))};return b}(e),a.Try=U=function(a){function b(a,b,c,d){this.attempt=a,this.error=b,this.recovery=c,this.ensure=d}bl(b,a),b.prototype.children=["attempt","recovery","ensure"],b.prototype.isStatement=Y,b.prototype.jumps=function(a){var b;return this.attempt.jumps(a)||((b=this.recovery)!=null?b.jumps(a):void 0)},b.prototype.makeReturn=function(a){this.attempt&&(this.attempt=this.attempt.makeReturn(a)),this.recovery&&(this.recovery=this.recovery.makeReturn(a));return this},b.prototype.compileNode=function(a){var b,c,d,e;a.indent+=R,d=this.error?" ("+this.error.compile(a)+") ":" ",e=this.attempt.compile(a,z),b=function(){var b;if(this.recovery){if(b=this.error.value,bm.call(M,b)>=0)throw SyntaxError('catch variable may not be "'+this.error.value+'"');a.scope.check(this.error.value)||a.scope.add(this.error.value,"param");return" catch"+d+"{\n"+this.recovery.compile(a,z)+"\n"+this.tab+"}"}if(!this.ensure&&!this.recovery)return" catch (_error) {}"}.call(this),c=this.ensure?" finally {\n"+this.ensure.compile(a,z)+"\n"+this.tab+"}":"";return""+this.tab+"try {\n"+e+"\n"+this.tab+"}"+(b||"")+c};return b}(e),a.Throw=T=function(a){function b(a){this.expression=a}bl(b,a),b.prototype.children=["expression"],b.prototype.isStatement=Y,b.prototype.jumps=D,b.prototype.makeReturn=S,b.prototype.compileNode=function(a){return this.tab+("throw "+this.expression.compile(a)+";")};return b}(e),a.Existence=l=function(a){function b(a){this.expression=a}bl(b,a),b.prototype.children=["expression"],b.prototype.invert=C,b.prototype.compileNode=function(a){var b,c,d,e;this.expression.front=this.front,d=this.expression.compile(a,x),o.test(d)&&!a.scope.check(d)?(e=this.negated?["===","||"]:["!==","&&"],b=e[0],c=e[1],d="typeof "+d+" "+b+' "undefined" '+c+" "+d+" "+b+" null"):d=""+d+" "+(this.negated?"==":"!=")+" null";return a.level<=v?d:"("+d+")"};return b}(e),a.Parens=H=function(a){function b(a){this.body=a}bl(b,a),b.prototype.children=["body"],b.prototype.unwrap=function(){return this.body},b.prototype.isComplex=function(){return this.body.isComplex()},b.prototype.compileNode=function(a){var b,c,d;d=this.body.unwrap();if(d instanceof W&&d.isAtomic()){d.front=this.front;return d.compile(a)}c=d.compile(a,y),b=a.level<x&&(d instanceof F||d instanceof g||d instanceof n&&d.returns);return b?c:"("+c+")"};return b}(e),a.For=n=function(a){function b(a,b){var c;this.source=b.source,this.guard=b.guard,this.step=b.step,this.name=b.name,this.index=b.index,this.body=f.wrap([a]),this.own=!!b.own,this.object=!!b.object,this.object&&(c=[this.index,this.name],this.name=c[0],this.index=c[1]);if(this.index instanceof W)throw SyntaxError("index cannot be a pattern matching expression");this.range=this.source instanceof W&&this.source.base instanceof J&&!this.source.properties.length,this.pattern=this.name instanceof W;if(this.range&&this.index)throw SyntaxError("indexes do not apply to range loops");if(this.range&&this.pattern)throw SyntaxError("cannot pattern match over range loops");this.returns=!1}bl(b,a),b.prototype.children=["body","source","guard","step"],b.prototype.compileNode=function(a){var b,c,e,g,h,i,j,k,l,m,n,p,q,s,t,u,v,y,B,C,D,E,F,G,I;b=f.wrap([this.body]),n=(I=bc(b.expressions))!=null?I.jumps():void 0,n&&n instanceof K&&(this.returns=!1),C=this.range?this.source.base:this.source,B=a.scope,q=this.name&&this.name.compile(a,w),j=this.index&&this.index.compile(a,w),q&&!this.pattern&&B.find(q),j&&B.find(j),this.returns&&(y=B.freeVariable("results")),k=this.object&&j||B.freeVariable("i"),l=this.range&&q||j||k,m=l!==k?""+l+" = ":"",this.step&&!this.range&&(E=B.freeVariable("step")),this.pattern&&(q=k),G="",h="",c="",i=this.tab+R,this.range?e=C.compile(bd(a,{index:k,name:q,step:this.step})):(F=this.source.compile(a,w),(q||this.own)&&!o.test(F)&&(c=""+this.tab+(t=B.freeVariable("ref"))+" = "+F+";\n",F=t),q&&!this.pattern&&(s=""+q+" = "+F+"["+l+"]"),this.object||(p=B.freeVariable("len"),g=""+m+k+" = 0, "+p+" = "+F+".length",this.step&&(g+=", "+E+" = "+this.step.compile(a,x)),D=""+m+(this.step?""+k+" += "+E:l!==k?"++"+k:""+k+"++"),e=""+g+"; "+k+" < "+p+"; "+D)),this.returns&&(u=""+this.tab+y+" = [];\n",v="\n"+this.tab+"return "+y+";",b.makeReturn(y)),this.guard&&(b.expressions.length>1?b.expressions.unshift(new r((new H(this.guard)).invert(),new A("continue"))):this.guard&&(b=f.wrap([new r(this.guard,b)]))),this.pattern&&b.expressions.unshift(new d(this.name,new A(""+F+"["+l+"]"))),c+=this.pluckDirectCall(a,b),s&&(G="\n"+i+s+";"),this.object&&(e=""+l+" in "+F,this.own&&(h="\n"+i+"if (!"+bh("hasProp")+".call("+F+", "+l+")) continue;")),b=b.compile(bd(a,{indent:i}),z),b&&(b="\n"+b+"\n");return""+c+(u||"")+this.tab+"for ("+e+") {"+h+G+b+this.tab+"}"+(v||"")},b.prototype.pluckDirectCall=function(a,b){var c,e,f,h,i,k,l,m,n,o,p,q,r,s,t;e="",o=b.expressions;for(i=m=0,n=o.length;m<n;i=++m){f=o[i],f=f.unwrapAll();if(!(f instanceof g))continue;l=f.variable.unwrapAll();if(!(l instanceof j||l instanceof W&&((p=l.base)!=null?p.unwrapAll():void 0)instanceof j&&l.properties.length===1&&((q=(r=l.properties[0].name)!=null?r.value:void 0)==="call"||q==="apply")))continue;h=((s=l.base)!=null?s.unwrapAll():void 0)||l,k=new A(a.scope.freeVariable("fn")),c=new W(k),l.base&&(t=[c,l],l.base=t[0],c=t[1]),b.expressions[i]=new g(c,f.args),e+=this.tab+(new d(k,h)).compile(a,z)+";\n"}return e};return b}(X),a.Switch=Q=function(a){function b(a,b,c){this.subject=a,this.cases=b,this.otherwise=c}bl(b,a),b.prototype.children=["subject","cases","otherwise"],b.prototype.isStatement=Y,b.prototype.jumps=function(a){var b,c,d,e,f,g,h;a==null&&(a={block:!0}),f=this.cases;for(d=0,e=f.length;d<e;d++){g=f[d],c=g[0],b=g[1];if(b.jumps(a))return b}return(h=this.otherwise)!=null?h.jumps(a):void 0},b.prototype.makeReturn=function(a){var b,c,d,e,g;e=this.cases;for(c=0,d=e.length;c<d;c++)b=e[c],b[1].makeReturn(a);a&&(this.otherwise||(this.otherwise=new f([new A("void 0")]))),(g=this.otherwise)!=null&&g.makeReturn(a);return this},b.prototype.compileNode=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;i=a.indent+R,j=a.indent=i+R,d=this.tab+("switch ("+(((o=this.subject)!=null?o.compile(a,y):void 0)||!1)+") {\n"),p=this.cases;for(h=k=0,m=p.length;k<m;h=++k){q=p[h],f=q[0],b=q[1],r=bb([f]);for(l=0,n=r.length;l<n;l++)e=r[l],this.subject||(e=e.invert()),d+=i+("case "+e.compile(a,y)+":\n");if(c=b.compile(a,z))d+=c+"\n";if(h===this.cases.length-1&&!this.otherwise)break;g=this.lastNonComment(b.expressions);if(g instanceof K||g instanceof A&&g.jumps()&&g.value!=="debugger")continue;d+=j+"break;\n"}this.otherwise&&this.otherwise.expressions.length&&(d+=i+("default:\n"+this.otherwise.compile(a,z)+"\n"));return d+this.tab+"}"};return b}(e),a.If=r=function(a){function b(a,b,c){this.body=b,c==null&&(c={}),this.condition=c.type==="unless"?a.invert():a,this.elseBody=null,this.isChain=!1,this.soak=c.soak}bl(b,a),b.prototype.children=["condition","body","elseBody"],b.prototype.bodyNode=function(){var a;return(a=this.body)!=null?a.unwrap():void 0},b.prototype.elseBodyNode=function(){var a;return(a=this.elseBody)!=null?a.unwrap():void 0},b.prototype.addElse=function(a){this.isChain?this.elseBodyNode().addElse(a):(this.isChain=a instanceof b,this.elseBody=this.ensureBlock(a));return this},b.prototype.isStatement=function(a){var b;return(a!=null?a.level:void 0)===z||this.bodyNode().isStatement(a)||((b=this.elseBodyNode())!=null?b.isStatement(a):void 0)},b.prototype.jumps=function(a){var b;return this.body.jumps(a)||((b=this.elseBody)!=null?b.jumps(a):void 0)},b.prototype.compileNode=function(a){return this.isStatement(a)?this.compileStatement(a):this.compileExpression(a)},b.prototype.makeReturn=function(a){a&&(this.elseBody||(this.elseBody=new f([new A("void 0")]))),this.body&&(this.body=new f([this.body.makeReturn(a)])),this.elseBody&&(this.elseBody=new f([this.elseBody.makeReturn(a)]));return this},b.prototype.ensureBlock=function(a){return a instanceof f?a:new f([a])},b.prototype.compileStatement=function(a){var c,d,e,f,g;d=$(a,"chainChild"),f=$(a,"isExistentialEquals");if(f)return(new b(this.condition.invert(),this.elseBodyNode(),{type:"if"})).compile(a);e=this.condition.compile(a,y),a.indent+=R,c=this.ensureBlock(this.body),g="if ("+e+") {\n"+c.compile(a)+"\n"+this.tab+"}",d||(g=this.tab+g);if(!this.elseBody)return g;return g+" else "+(this.isChain?(a.indent=this.tab,a.chainChild=!0,this.elseBody.unwrap().compile(a,z)):"{\n"+this.elseBody.compile(a,z)+"\n"+this.tab+"}")},b.prototype.compileExpression=function(a){var b,c,d,e;e=this.condition.compile(a,v),c=this.bodyNode().compile(a,w),b=this.elseBodyNode()?this.elseBodyNode().compile(a,w):"void 0",d=""+e+" ? "+c+" : "+b;return a.level>=v?"("+d+")":d},b.prototype.unfoldSoak=function(){return this.soak&&this};return b}(e),i={wrap:function(a,c,d){var e,h,i,k,l;if(a.jumps())return a;i=new j([],f.wrap([a])),e=[];if((k=a.contains(this.literalArgs))||a.contains(this.literalThis))l=new A(k?"apply":"call"),e=[new A("this")],k&&e.push(new A("arguments")),i=new W(i,[new b(l)]);i.noReturn=d,h=new g(i,e);return c?f.wrap([h]):h},literalArgs:function(a){return a instanceof A&&a.value==="arguments"&&!a.asKey},literalThis:function(a){return a instanceof A&&a.value==="this"&&!a.asKey||a instanceof j&&a.bound||a instanceof g&&a.isSuper}},bg=function(a,b,c){var d;if(!!(d=b[c].unfoldSoak(a))){b[c]=d.body,d.body=new W(b);return d}},V={"extends":function(){return"function(child, parent) { for (var key in parent) { if ("+bh("hasProp")+".call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; }"},bind:function(){return"function(fn, me){ return function(){ return fn.apply(me, arguments); }; }"},indexOf:function(){return"[].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; }"},hasProp:function(){return"{}.hasOwnProperty"},slice:function(){return"[].slice"}},z=1,y=2,w=3,v=4,x=5,u=6,R="  ",p="[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*",o=RegExp("^"+p+"$"),L=/^[+-]?\d+$/,B=RegExp("^(?:("+p+")\\.prototype(?:\\.("+p+")|\\[(\"(?:[^\\\\\"\\r\\n]|\\\\.)*\"|'(?:[^\\\\'\\r\\n]|\\\\.)*')\\]|\\[(0x[\\da-fA-F]+|\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\]))|("+p+")$"),q=/^['"]/,bh=function(a){var b;b="__"+a,N.root.assign(b,V[a]());return b},be=function(a,b){a=a.replace(/\n/g,"$&"+b);return a.replace(/\s+$/,"")}}).call(this)},require["./coffee-script"]=new function(){var a=this;(function(){var b,c,d,e,f,g,h,i,j,k=({}).hasOwnProperty;e=require("fs"),h=require("path"),j=require("./lexer"),b=j.Lexer,c=j.RESERVED,g=require("./parser").parser,i=require("vm"),require.extensions?require.extensions[".coffee"]=function(a,b){var c;c=d(e.readFileSync(b,"utf8"),{filename:b});return a._compile(c,b)}:require.registerExtension&&require.registerExtension(".coffee",function(a){return d(a)}),a.VERSION="1.3.3",a.RESERVED=c,a.helpers=require("./helpers"),a.compile=d=function(b,c){var d,e,h;c==null&&(c={}),h=a.helpers.merge;try{e=g.parse(f.tokenize(b)).compile(c);if(!c.header)return e}catch(i){c.filename&&(i.message="In "+c.filename+", "+i.message);throw i}d="Generated by CoffeeScript "+this.VERSION;return"// "+d+"\n"+e},a.tokens=function(a,b){return f.tokenize(a,b)},a.nodes=function(a,b){return typeof a=="string"?g.parse(f.tokenize(a,b)):g.parse(a)},a.run=function(a,b){var c;b==null&&(b={}),c=require.main,c.filename=process.argv[1]=b.filename?e.realpathSync(b.filename):".",c.moduleCache&&(c.moduleCache={}),c.paths=require("module")._nodeModulePaths(h.dirname(e.realpathSync(b.filename)));return h.extname(c.filename)!==".coffee"||require.extensions?c._compile(d(a,b),c.filename):c._compile(a,c.filename)},a.eval=function(a,b){var c,e,f,g,j,l,m,n,o,p,q,r,s,t;b==null&&(b={});if(!!(a=a.trim())){e=i.Script;if(e){if(b.sandbox!=null){if(b.sandbox instanceof e.createContext().constructor)m=b.sandbox;else{m=e.createContext(),r=b.sandbox;for(g in r){if(!k.call(r,g))continue;n=r[g],m[g]=n}}m.global=m.root=m.GLOBAL=m}else
    m=global;m.__filename=b.filename||"eval",m.__dirname=h.dirname(m.__filename);if(m===global&&!m.module&&!m.require){c=require("module"),m.module=q=new c(b.modulename||"eval"),m.require=t=function(a){return c._load(a,q,!0)},q.filename=m.__filename,s=Object.getOwnPropertyNames(require);for(o=0,p=s.length;o<p;o++)l=s[o],l!=="paths"&&(t[l]=require[l]);t.paths=q.paths=c._nodeModulePaths(process.cwd()),t.resolve=function(a){return c._resolveFilename(a,q)}}}j={};for(g in b){if(!k.call(b,g))continue;n=b[g],j[g]=n}j.bare=!0,f=d(a,j);return m===global?i.runInThisContext(f):i.runInContext(f,m)}},f=new b,g.lexer={lex:function(){var a,b;b=this.tokens[this.pos++]||[""],a=b[0],this.yytext=b[1],this.yylineno=b[2];return a},setInput:function(a){this.tokens=a;return this.pos=0},upcomingInput:function(){return""}},g.yy=require("./nodes")}).call(this)},require["./browser"]=new function(){var exports=this;(function(){var CoffeeScript,runScripts;CoffeeScript=require("./coffee-script"),CoffeeScript.require=require,CoffeeScript.eval=function(code,options){var _ref;options==null&&(options={}),(_ref=options.bare)==null&&(options.bare=!0);return eval(CoffeeScript.compile(code,options))},CoffeeScript.run=function(a,b){b==null&&(b={}),b.bare=!0;return Function(CoffeeScript.compile(a,b))()};typeof window!="undefined"&&window!==null&&(CoffeeScript.load=function(a,b){var c;c=new(window.ActiveXObject||XMLHttpRequest)("Microsoft.XMLHTTP"),c.open("GET",a,!0),"overrideMimeType"in c&&c.overrideMimeType("text/plain"),c.onreadystatechange=function(){var d;if(c.readyState===4){if((d=c.status)===0||d===200)CoffeeScript.run(c.responseText);else
    throw new Error("Could not load "+a);if(b)return b()}};return c.send(null)},runScripts=function(){var a,b,c,d,e,f;f=document.getElementsByTagName("script"),a=function(){var a,b,c;c=[];for(a=0,b=f.length;a<b;a++)e=f[a],e.type==="text/coffeescript"&&c.push(e);return c}(),c=0,d=a.length,(b=function(){var d;d=a[c++];if((d!=null?d.type:void 0)==="text/coffeescript"){if(d.src)return CoffeeScript.load(d.src,b);CoffeeScript.run(d.innerHTML);return b()}})();return null},window.addEventListener?addEventListener("DOMContentLoaded",runScripts,!1):attachEvent("onload",runScripts))}).call(this)};return require["./coffee-script"]}();typeof define=="function"&&define.amd?define(function(){return CoffeeScript}):root.CoffeeScript=CoffeeScript})(this)var is={ie:navigator.appName=='Microsoft Internet Explorer',java:navigator.javaEnabled(),ns:navigator.appName=='Netscape',ua:navigator.userAgent.toLowerCase(),version:parseFloat(navigator.appVersion.substr(21))||parseFloat(navigator.appVersion),win:navigator.platform=='Win32'}is.mac=is.ua.indexOf('mac')>=0;if(is.ua.indexOf('opera')>=0){is.ie=is.ns=false;is.opera=true;}if(is.ua.indexOf('gecko')>=0){is.ie=is.ns=false;is.gecko=true;}
/*! jQuery v2.0.0 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 //@ sourceMappingURL=jquery.min.map
 */
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],f="2.0.0",p=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=f.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return p.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,f,p,h,d,g,m,y="sizzle"+-new Date,v=e.document,b={},w=0,T=0,C=ot(),k=ot(),N=ot(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A=[],L=A.pop,q=A.push,H=A.push,O=A.slice,F=A.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=M.replace("w","w#"),$="\\["+R+"*("+M+")"+R+"*(?:([*^$|!~]?=)"+R+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+R+"*\\]",B=":("+M+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",I=RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),z=RegExp("^"+R+"*,"+R+"*"),_=RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),X=RegExp(R+"*[+~]"),U=RegExp("="+R+"*([^\\]'\"]*)"+R+"*\\]","g"),Y=RegExp(B),V=RegExp("^"+W+"$"),G={ID:RegExp("^#("+M+")"),CLASS:RegExp("^\\.("+M+")"),TAG:RegExp("^("+M.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+B),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),"boolean":RegExp("^(?:"+P+")$","i"),needsContext:RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},J=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,et=/'|\\/g,tt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,nt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{H.apply(A=O.call(v.childNodes),v.childNodes),A[v.childNodes.length].nodeType}catch(rt){H={apply:A.length?function(e,t){q.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function it(e){return J.test(e+"")}function ot(){var e,t=[];return e=function(n,i){return t.push(n+=" ")>r.cacheLength&&delete e[t.shift()],e[n]=i}}function st(e){return e[y]=!0,e}function at(e){var t=c.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ut(e,t,n,r){var i,o,s,a,u,f,d,g,x,w;if((t?t.ownerDocument||t:v)!==c&&l(t),t=t||c,n=n||[],!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return[];if(p&&!r){if(i=Q.exec(e))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&m(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return H.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&b.getElementsByClassName&&t.getElementsByClassName)return H.apply(n,t.getElementsByClassName(s)),n}if(b.qsa&&(!h||!h.test(e))){if(g=d=y,x=t,w=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(d=t.getAttribute("id"))?g=d.replace(et,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=f.length;while(u--)f[u]=g+mt(f[u]);x=X.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return H.apply(n,x.querySelectorAll(w)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(I,"$1"),t,n,r)}o=ut.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},l=ut.setDocument=function(e){var t=e?e.ownerDocument||e:v;return t!==c&&9===t.nodeType&&t.documentElement?(c=t,f=t.documentElement,p=!o(t),b.getElementsByTagName=at(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),b.attributes=at(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByClassName=at(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),b.sortDetached=at(function(e){return 1&e.compareDocumentPosition(c.createElement("div"))}),b.getById=at(function(e){return f.appendChild(e).id=y,!t.getElementsByName||!t.getElementsByName(y).length}),b.getById?(r.find.ID=function(e,t){if(typeof t.getElementById!==j&&p){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(tt,nt);return function(e){return e.getAttribute("id")===t}}):(r.find.ID=function(e,t){if(typeof t.getElementById!==j&&p){var n=t.getElementById(e);return n?n.id===e||typeof n.getAttributeNode!==j&&n.getAttributeNode("id").value===e?[n]:undefined:[]}},r.filter.ID=function(e){var t=e.replace(tt,nt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=b.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=b.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&p?t.getElementsByClassName(e):undefined},d=[],h=[],(b.qsa=it(t.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+R+"*(?:value|"+P+")"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){var t=c.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&h.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(b.matchesSelector=it(g=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){b.disconnectedMatch=g.call(e,"div"),g.call(e,"[s!='']:x"),d.push("!=",B)}),h=h.length&&RegExp(h.join("|")),d=d.length&&RegExp(d.join("|")),m=it(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,n){if(e===n)return E=!0,0;var r=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n);return r?1&r||!b.sortDetached&&n.compareDocumentPosition(e)===r?e===t||m(v,e)?-1:n===t||m(v,n)?1:u?F.call(u,e)-F.call(u,n):0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],l=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:u?F.call(u,e)-F.call(u,n):0;if(o===s)return lt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)l.unshift(r);while(a[i]===l[i])i++;return i?lt(a[i],l[i]):a[i]===v?-1:l[i]===v?1:0},c):c},ut.matches=function(e,t){return ut(e,null,null,t)},ut.matchesSelector=function(e,t){if((e.ownerDocument||e)!==c&&l(e),t=t.replace(U,"='$1']"),!(!b.matchesSelector||!p||d&&d.test(t)||h&&h.test(t)))try{var n=g.call(e,t);if(n||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return ut(t,c,null,[e]).length>0},ut.contains=function(e,t){return(e.ownerDocument||e)!==c&&l(e),m(e,t)},ut.attr=function(e,t){(e.ownerDocument||e)!==c&&l(e);var n=r.attrHandle[t.toLowerCase()],i=n&&n(e,t,!p);return i===undefined?b.attributes||!p?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null:i},ut.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ut.uniqueSort=function(e){var t,n=[],r=0,i=0;if(E=!b.detectDuplicates,u=!b.sortStable&&e.slice(0),e.sort(S),E){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return e};function lt(e,t){var n=t&&e,r=n&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ct(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}function ft(e,t,n){var r;return n?undefined:r=e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ht(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function dt(e){return st(function(t){return t=+t,st(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}i=ut.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r];r++)n+=i(t);return n},r=ut.selectors={cacheLength:50,createPseudo:st,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(tt,nt),e[3]=(e[4]||e[5]||"").replace(tt,nt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ut.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ut.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return G.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&Y.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(tt,nt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ut.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){f=t;while(f=f[g])if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[y]||(m[y]={}),l=c[e]||[],h=l[0]===w&&l[1],p=l[0]===w&&l[2],f=h&&m.childNodes[h];while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if(1===f.nodeType&&++p&&f===t){c[e]=[w,h,p];break}}else if(x&&(l=(t[y]||(t[y]={}))[e])&&l[0]===w)p=l[1];else while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if((a?f.nodeName.toLowerCase()===v:1===f.nodeType)&&++p&&(x&&((f[y]||(f[y]={}))[e]=[w,p]),f===t))break;return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ut.error("unsupported pseudo: "+e);return i[y]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?st(function(e,n){var r,o=i(e,t),s=o.length;while(s--)r=F.call(e,o[s]),e[r]=!(n[r]=o[s])}):function(e){return i(e,0,n)}):i}},pseudos:{not:st(function(e){var t=[],n=[],r=s(e.replace(I,"$1"));return r[y]?st(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:st(function(e){return function(t){return ut(e,t).length>0}}),contains:st(function(e){return function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:st(function(e){return V.test(e||"")||ut.error("unsupported lang: "+e),e=e.replace(tt,nt).toLowerCase(),function(t){var n;do if(n=p?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===c.activeElement&&(!c.hasFocus||c.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Z.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:dt(function(){return[0]}),last:dt(function(e,t){return[t-1]}),eq:dt(function(e,t,n){return[0>n?n+t:n]}),even:dt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:dt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:dt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:dt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=ht(t);function gt(e,t){var n,i,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=r.preFilter;while(a){(!n||(i=z.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),n=!1,(i=_.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace(I," ")}),a=a.slice(n.length));for(s in r.filter)!(i=G[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ut.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,r){var i=t.dir,o=r&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,r,a){var u,l,c,f=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,r,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[y]||(t[y]={}),(l=c[i])&&l[0]===f){if((u=l[1])===!0||u===n)return u===!0}else if(l=c[i]=[f],l[1]=e(t,r,a)||n,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[y]&&(r=bt(r)),i&&!i[y]&&(i=bt(i,o)),st(function(o,s,a,u){var l,c,f,p=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,p,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(f=l[c])&&(y[h[c]]=!(m[h[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(m[c]=f);i(null,y=[],l,u)}c=y.length;while(c--)(f=y[c])&&(l=i?F.call(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):H.apply(s,y)})}function wt(e){var t,n,i,o=e.length,s=r.relative[e[0].type],u=s||r.relative[" "],l=s?1:0,c=yt(function(e){return e===t},u,!0),f=yt(function(e){return F.call(t,e)>-1},u,!0),p=[function(e,n,r){return!s&&(r||n!==a)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];for(;o>l;l++)if(n=r.relative[e[l].type])p=[yt(vt(p),n)];else{if(n=r.filter[e[l].type].apply(null,e[l].matches),n[y]){for(i=++l;o>i;i++)if(r.relative[e[i].type])break;return bt(l>1&&vt(p),l>1&&mt(e.slice(0,l-1)).replace(I,"$1"),n,i>l&&wt(e.slice(l,i)),o>i&&wt(e=e.slice(i)),o>i&&mt(e))}p.push(n)}return vt(p)}function Tt(e,t){var i=0,o=t.length>0,s=e.length>0,u=function(u,l,f,p,h){var d,g,m,y=[],v=0,x="0",b=u&&[],T=null!=h,C=a,k=u||s&&r.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(a=l!==c&&l,n=i);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,f)){p.push(d);break}T&&(w=N,n=++i)}o&&((d=!m&&d)&&v--,u&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,f);if(u){if(v>0)while(x--)b[x]||y[x]||(y[x]=L.call(p));y=xt(y)}H.apply(p,y),T&&!u&&y.length>0&&v+t.length>1&&ut.uniqueSort(p)}return T&&(w=N,a=C),b};return o?st(u):u}s=ut.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[y]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ut(e,t[r],n);return n}function kt(e,t,n,i){var o,a,u,l,c,f=gt(e);if(!i&&1===f.length){if(a=f[0]=f[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&p&&r.relative[a[1].type]){if(t=(r.find.ID(u.matches[0].replace(tt,nt),t)||[])[0],!t)return n;e=e.slice(a.shift().value.length)}o=G.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],r.relative[l=u.type])break;if((c=r.find[l])&&(i=c(u.matches[0].replace(tt,nt),X.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=i.length&&mt(a),!e)return H.apply(n,i),n;break}}}return s(e,f)(i,t,!p,n,X.test(e)),n}r.pseudos.nth=r.pseudos.eq;function Nt(){}Nt.prototype=r.filters=r.pseudos,r.setFilters=new Nt,b.sortStable=y.split("").sort(S).join("")===y,l(),[0,0].sort(S),b.detectDuplicates=E,at(function(e){if(e.innerHTML="<a href='#'></a>","#"!==e.firstChild.getAttribute("href")){var t="type|href|height|width".split("|"),n=t.length;while(n--)r.attrHandle[t[n]]=ft}}),at(function(e){if(null!=e.getAttribute("disabled")){var t=P.split("|"),n=t.length;while(n--)r.attrHandle[t[n]]=ct}}),x.find=ut,x.expr=ut.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ut.uniqueSort,x.text=ut.getText,x.isXMLDoc=ut.isXML,x.contains=ut.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(f[0],f[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))this.cache[i]=t;else for(r in t)o[r]=t[r]},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i=this.key(e),o=this.cache[i];if(t===undefined)this.cache[i]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):t in o?r=[t]:(r=x.camelCase(t),r=r in o?[r]:r.match(w)||[]),n=r.length;while(n--)delete o[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){delete this.cache[this.key(e)]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.substring(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);
    x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i,o=x(this);1===this.nodeType&&(i=r?e.call(this,n,o.val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.boolean.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.boolean.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.boolean.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,f,p,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(p=x.event.special[d]||{},d=(o?p.delegateType:p.bindType)||d,p=x.event.special[d]||{},f=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,p.setup&&p.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,f):h.push(f),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){f=x.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,p=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,f,p,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),p=x.event.special[d]||{},i||!p.trigger||p.trigger.apply(r,n)!==!1)){if(!i&&!p.noBubble&&!x.isWindow(r)){for(l=p.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:p.bindType||d,f=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),f&&f.apply(a,n),f=c&&a[c],f&&x.acceptData(a)&&f.apply&&f.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||p._default&&p._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return 3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=x.expr.match.needsContext,Q={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return t=this,this.pushStack(x(e).filter(function(){for(r=0;i>r;r++)if(x.contains(t[r],this))return!0}));for(n=[],r=0;i>r;r++)x.find(e,this[r],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(Z(this,e||[],!0))},filter:function(e){return this.pushStack(Z(this,e||[],!1))},is:function(e){return!!e&&("string"==typeof e?J.test(e)?x(e,this.context).index(this[0])>=0:x.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],s=J.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function K(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return K(e,"nextSibling")},prev:function(e){return K(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(Q[e]||x.unique(i),"p"===e[0]&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function Z(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var et=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,tt=/<([\w:]+)/,nt=/<|&#?\w+;/,rt=/<(?:script|style|link)/i,it=/^(?:checkbox|radio)$/i,ot=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^$|\/(?:java|ecma)script/i,at=/^true\/(.*)/,ut=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,lt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};lt.optgroup=lt.option,lt.tbody=lt.tfoot=lt.colgroup=lt.caption=lt.col=lt.thead,lt.th=lt.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ct(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ct(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(gt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&ht(gt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(gt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!rt.test(e)&&!lt[(tt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(et,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(gt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=p.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,f=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&ot.test(d))return this.each(function(r){var i=f.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(gt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,gt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,pt),l=0;s>l;l++)a=o[l],st.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(ut,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=gt(a),o=gt(e),r=0,i=o.length;i>r;r++)mt(o[r],s[r]);if(t)if(n)for(o=o||gt(e),s=s||gt(a),r=0,i=o.length;i>r;r++)dt(o[r],s[r]);else dt(e,a);return s=gt(a,"script"),s.length>0&&ht(s,!u&&gt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,f=e.length,p=t.createDocumentFragment(),h=[];for(;f>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(nt.test(i)){o=o||p.appendChild(t.createElement("div")),s=(tt.exec(i)||["",""])[1].toLowerCase(),a=lt[s]||lt._default,o.innerHTML=a[1]+i.replace(et,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=p.firstChild,o.textContent=""}else h.push(t.createTextNode(i));p.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=gt(p.appendChild(i),"script"),u&&ht(o),n)){l=0;while(i=o[l++])st.test(i.type||"")&&n.push(i)}return p},cleanData:function(e){var t,n,r,i=e.length,o=0,s=x.event.special;for(;i>o;o++){if(n=e[o],x.acceptData(n)&&(t=q.access(n)))for(r in t.events)s[r]?x.event.remove(n,r):x.removeEvent(n,r,t.handle);L.discard(n),q.discard(n)}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"text",async:!1,global:!1,success:x.globalEval})}});function ct(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function pt(e){var t=at.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function ht(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function dt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=x.extend({},o),l=o.events,q.set(t,s),l)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function gt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function mt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&it.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var yt,vt,xt=/^(none|table(?!-c[ea]).+)/,bt=/^margin/,wt=RegExp("^("+b+")(.*)$","i"),Tt=RegExp("^("+b+")(?!px)[a-z%]+$","i"),Ct=RegExp("^([+-])=("+b+")","i"),kt={BODY:"block"},Nt={position:"absolute",visibility:"hidden",display:"block"},Et={letterSpacing:0,fontWeight:400},St=["Top","Right","Bottom","Left"],jt=["Webkit","O","Moz","ms"];function Dt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=jt.length;while(i--)if(t=jt[i]+n,t in e)return t;return r}function At(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Lt(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&At(r)&&(o[s]=q.access(r,"olddisplay",Pt(r.nodeName)))):o[s]||(i=At(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Lt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:At(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=yt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=Dt(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=Ct.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=Dt(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=yt(e,t,r)),"normal"===i&&t in Et&&(i=Et[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),yt=function(e,t,n){var r,i,o,s=n||Lt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Tt.test(a)&&bt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ht(e,t,n){var r=wt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ot(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+St[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+St[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+St[o]+"Width",!0,i))):(s+=x.css(e,"padding"+St[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+St[o]+"Width",!0,i)));return s}function Ft(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Lt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=yt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Tt.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ot(e,t,n||(s?"border":"content"),r,o)+"px"}function Pt(e){var t=o,n=kt[e];return n||(n=Rt(e,t),"none"!==n&&n||(vt=(vt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(vt[0].contentWindow||vt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Rt(e,t),vt.detach()),kt[e]=n),n}function Rt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&xt.test(x.css(e,"display"))?x.swap(e,Nt,function(){return Ft(e,t,r)}):Ft(e,t,r):undefined},set:function(e,n,r){var i=r&&Lt(e);return Ht(e,n,r?Ot(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},yt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=yt(e,t),Tt.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+St[r]+t]=o[r]||o[r-2]||o[0];return i}},bt.test(e)||(x.cssHooks[e+t].set=Ht)});var Mt=/%20/g,Wt=/\[\]$/,$t=/\r?\n/g,Bt=/^(?:submit|button|image|reset|file)$/i,It=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&It.test(this.nodeName)&&!Bt.test(e)&&(this.checked||!it.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace($t,"\r\n")}}):{name:t.name,value:n.replace($t,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)zt(n,e[n],t,i);return r.join("&").replace(Mt,"+")};function zt(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||Wt.test(e)?r(e,i):zt(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)zt(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var _t,Xt,Ut=x.now(),Yt=/\?/,Vt=/#.*$/,Gt=/([?&])_=[^&]*/,Jt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kt=/^(?:GET|HEAD)$/,Zt=/^\/\//,en=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,tn=x.fn.load,nn={},rn={},on="*/".concat("*");try{Xt=i.href}catch(sn){Xt=o.createElement("a"),Xt.href="",Xt=Xt.href}_t=en.exec(Xt.toLowerCase())||[];function an(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];
    if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function un(e,t,n,r){var i={},o=e===rn;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function ln(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&tn)return tn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Xt,type:"GET",isLocal:Qt.test(_t[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":on,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ln(ln(e,x.ajaxSettings),t):ln(x.ajaxSettings,e)},ajaxPrefilter:an(nn),ajaxTransport:an(rn),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),f=c.context||c,p=c.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Jt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Xt)+"").replace(Vt,"").replace(Zt,_t[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=en.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===_t[1]&&a[2]===_t[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(_t[3]||("http:"===_t[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),un(nn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Kt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Yt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Gt.test(r)?r.replace(Gt,"$1_="+Ut++):r+(Yt.test(r)?"&":"?")+"_="+Ut++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+on+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(f,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=un(rn,c,t,T)){T.readyState=1,u&&p.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=cn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(f,[m,C,T]):h.rejectWith(f,[T,C,y]),T.statusCode(g),g=undefined,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(f,[T,C]),u&&(p.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function cn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var pn=[],hn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=pn.pop()||x.expando+"_"+Ut++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(hn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&hn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(hn,"$1"+i):t.jsonp!==!1&&(t.url+=(Yt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,pn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var dn=x.ajaxSettings.xhr(),gn={0:200,1223:204},mn=0,yn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in yn)yn[e]();yn=undefined}),x.support.cors=!!dn&&"withCredentials"in dn,x.support.ajax=dn=!!dn,x.ajaxTransport(function(e){var t;return x.support.cors||dn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete yn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(gn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=yn[o=mn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var vn,xn,bn=/^(?:toggle|show|hide)$/,wn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Tn=/queueHooks$/,Cn=[Dn],kn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=wn.exec(t),s=i.cur(),a=+s||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(x.cssNumber[e]?"":"px"),"px"!==r&&a){a=x.css(i.elem,e,!0)||n||1;do u=u||".5",a/=u,x.style(i.elem,e,a+r);while(u!==(u=i.cur()/s)&&1!==u&&--l)}i.unit=r,i.start=a,i.end=o[1]?a+(o[1]+1)*n:n}return i}]};function Nn(){return setTimeout(function(){vn=undefined}),vn=x.now()}function En(e,t){x.each(t,function(t,n){var r=(kn[t]||[]).concat(kn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function Sn(e,t,n){var r,i,o=0,s=Cn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=vn||Nn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:vn||Nn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(jn(c,l.opts.specialEasing);s>o;o++)if(r=Cn[o].call(l,e,c,l.opts))return r;return En(l,c),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function jn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(Sn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],kn[n]=kn[n]||[],kn[n].unshift(t)},prefilter:function(e,t){t?Cn.unshift(e):Cn.push(e)}});function Dn(e,t,n){var r,i,o,s,a,u,l,c,f,p=this,h=e.style,d={},g=[],m=e.nodeType&&At(e);n.queue||(c=x._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,x.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),a=q.get(e,"fxshow");for(r in t)if(o=t[r],bn.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show")){if("show"!==o||a===undefined||a[r]===undefined)continue;m=!0}g.push(r)}if(s=g.length){a=q.get(e,"fxshow")||q.access(e,"fxshow",{}),"hidden"in a&&(m=a.hidden),u&&(a.hidden=!m),m?x(e).show():p.done(function(){x(e).hide()}),p.done(function(){var t;q.remove(e,"fxshow");for(t in d)x.style(e,t,d[t])});for(r=0;s>r;r++)i=g[r],l=p.createTween(i,m?a[i]:0),d[i]=a[i]||x.style(e,i),i in a||(a[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function An(e,t,n,r,i){return new An.prototype.init(e,t,n,r,i)}x.Tween=An,An.prototype={constructor:An,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=An.propHooks[this.prop];return e&&e.get?e.get(this):An.propHooks._default.get(this)},run:function(e){var t,n=An.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):An.propHooks._default.set(this),this}},An.prototype.init.prototype=An.prototype,An.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},An.propHooks.scrollTop=An.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Ln(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(At).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=Sn(this,x.extend({},e),o);s.finish=function(){t.stop(!0)},(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Tn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Ln(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=St[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Ln("show"),slideUp:Ln("hide"),slideToggle:Ln("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=An.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(vn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),vn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){xn||(xn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(xn),xn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),f=x(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
/*!
 * @license
 * Lo-Dash 1.2.0 (Custom Build) lodash.com/license
 * Build: `lodash modern -o ./dist/lodash.js`
 * Underscore.js 1.4.4 underscorejs.org/LICENSE
 */
(function(n){function t(o){function f(n){if(!n||ue.call(n)!=S)return a;var t=n.valueOf,e=typeof t=="function"&&(e=Zt(t))&&Zt(e);return e?n==e||Zt(n)==e:X(n)}function q(n,t,e){if(!n||!F[typeof n])return n;t=t&&typeof e=="undefined"?t:M.createCallback(t,e);for(var r=-1,u=F[typeof n]?me(n):[],o=u.length;++r<o&&(e=u[r],!(t(n[e],e,n)===a)););return n}function D(n,t,e){var r;if(!n||!F[typeof n])return n;t=t&&typeof e=="undefined"?t:M.createCallback(t,e);for(r in n)if(t(n[r],r,n)===a)break;return n}function z(n,t,e){var r,u=n,a=u;
if(!u)return a;for(var o=arguments,i=0,f=typeof e=="number"?2:o.length;++i<f;)if((u=o[i])&&F[typeof u]){var c=u.length;if(r=-1,rt(u))for(;++r<c;)"undefined"==typeof a[r]&&(a[r]=u[r]);else for(var l=-1,p=F[typeof u]?me(u):[],c=p.length;++l<c;)r=p[l],"undefined"==typeof a[r]&&(a[r]=u[r])}return a}function P(n,t,e){var r,u=n,a=u;if(!u)return a;var o=arguments,i=0,f=typeof e=="number"?2:o.length;if(3<f&&"function"==typeof o[f-2])var c=M.createCallback(o[--f-1],o[f--],2);else 2<f&&"function"==typeof o[f-1]&&(c=o[--f]);
for(;++i<f;)if((u=o[i])&&F[typeof u]){var l=u.length;if(r=-1,rt(u))for(;++r<l;)a[r]=c?c(a[r],u[r]):u[r];else for(var p=-1,s=F[typeof u]?me(u):[],l=s.length;++p<l;)r=s[p],a[r]=c?c(a[r],u[r]):u[r]}return a}function K(n){var t,e=[];if(!n||!F[typeof n])return e;for(t in n)ne.call(n,t)&&e.push(t);return e}function M(n){return n&&typeof n=="object"&&!rt(n)&&ne.call(n,"__wrapped__")?n:new Q(n)}function U(n){var t=n.length,e=t>=s;if(e)for(var r={},u=-1;++u<t;){var a=p+n[u];(r[a]||(r[a]=[])).push(n[u])}return function(t){if(e){var u=p+t;
return r[u]&&-1<xt(r[u],t)}return-1<xt(n,t)}}function V(n){return n.charCodeAt(0)}function G(n,t){var e=n.b,r=t.b;if(n=n.a,t=t.a,n!==t){if(n>t||typeof n=="undefined")return 1;if(n<t||typeof t=="undefined")return-1}return e<r?-1:1}function H(n,t,e,r){function a(){var r=arguments,l=i?this:t;return o||(n=t[f]),e.length&&(r=r.length?(r=ge.call(r),c?r.concat(e):e.concat(r)):e),this instanceof a?(W.prototype=n.prototype,l=new W,W.prototype=u,r=n.apply(l,r),ot(r)?r:l):n.apply(l,r)}var o=at(n),i=!e,f=t;if(i){var c=r;
e=t}else if(!o){if(!r)throw new Vt;t=n}return a}function J(n){return"\\"+R[n]}function L(n){return be[n]}function Q(n){this.__wrapped__=n}function W(){}function X(n){var t=a;if(!n||ue.call(n)!=S)return t;var e=n.constructor;return(at(e)?e instanceof e:he.nodeClass||!isNode(n))?(D(n,function(n,e){t=e}),t===a||ne.call(n,t)):t}function Y(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Rt(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function Z(n){return de[n]}function nt(n,t,r,u,o,i){var f=n;
if(typeof t=="function"&&(u=r,r=t,t=a),typeof r=="function"){if(r=typeof u=="undefined"?r:M.createCallback(r,u,1),f=r(f),typeof f!="undefined")return f;f=n}if(u=ot(f)){var c=ue.call(f);if(!B[c])return f;var l=rt(f)}if(!u||!t)return u?l?Y(f):P({},f):f;switch(u=ye[c],c){case N:case E:return new u(+f);case I:case $:return new u(f);case A:return u(f.source,b.exec(f))}for(o||(o=[]),i||(i=[]),c=o.length;c--;)if(o[c]==n)return i[c];return f=l?u(f.length):{},l&&(ne.call(n,"index")&&(f.index=n.index),ne.call(n,"input")&&(f.input=n.input)),o.push(n),i.push(f),(l?yt:q)(n,function(n,u){f[u]=nt(n,t,r,e,o,i)
}),f}function tt(n){var t=[];return D(n,function(n,e){at(n)&&t.push(e)}),t.sort()}function et(n){for(var t=-1,e=me(n),r=e.length,u={};++t<r;){var a=e[t];u[n[a]]=a}return u}function rt(n){return n instanceof Rt||oe(n)}function ut(n,t,e,o,i,f){var c=e===l;if(typeof e=="function"&&!c){e=M.createCallback(e,o,2);var p=e(n,t);if(typeof p!="undefined")return!!p}if(n===t)return 0!==n||1/n==1/t;var s=typeof n,v=typeof t;if(n===n&&(!n||"function"!=s&&"object"!=s)&&(!t||"function"!=v&&"object"!=v))return a;
if(n==u||t==u)return n===t;if(v=ue.call(n),s=ue.call(t),v==x&&(v=S),s==x&&(s=S),v!=s)return a;switch(v){case N:case E:return+n==+t;case I:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case A:case $:return n==Ut(t)}if(s=v==O,!s){if(ne.call(n,"__wrapped__")||ne.call(t,"__wrapped__"))return ut(n.__wrapped__||n,t.__wrapped__||t,e,o,i,f);if(v!=S)return a;var v=n.constructor,g=t.constructor;if(v!=g&&(!at(v)||!(v instanceof v&&at(g)&&g instanceof g)))return a}for(i||(i=[]),f||(f=[]),v=i.length;v--;)if(i[v]==n)return f[v]==t;
var y=0,p=r;if(i.push(n),f.push(t),s){if(v=n.length,y=t.length,p=y==n.length,!p&&!c)return p;for(;y--;)if(s=v,g=t[y],c)for(;s--&&!(p=ut(n[s],g,e,o,i,f)););else if(!(p=ut(n[y],g,e,o,i,f)))break;return p}return D(t,function(t,r,u){return ne.call(u,r)?(y++,p=ne.call(n,r)&&ut(n[r],t,e,o,i,f)):void 0}),p&&!c&&D(n,function(n,t,e){return ne.call(e,t)?p=-1<--y:void 0}),p}function at(n){return typeof n=="function"}function ot(n){return n?F[typeof n]:a}function it(n){return typeof n=="number"||ue.call(n)==I}function ft(n){return typeof n=="string"||ue.call(n)==$
}function ct(n,t,e){var r=arguments,u=0,a=2;if(!ot(n))return n;if(e===l)var o=r[3],i=r[4],c=r[5];else i=[],c=[],typeof e!="number"&&(a=r.length),3<a&&"function"==typeof r[a-2]?o=M.createCallback(r[--a-1],r[a--],2):2<a&&"function"==typeof r[a-1]&&(o=r[--a]);for(;++u<a;)(rt(r[u])?yt:q)(r[u],function(t,e){var r,u,a=t,p=n[e];if(t&&((u=rt(t))||f(t))){for(a=i.length;a--;)if(r=i[a]==t){p=c[a];break}if(!r){var s;o&&(a=o(p,t),s=typeof a!="undefined")&&(p=a),s||(p=u?rt(p)?p:[]:f(p)?p:{}),i.push(t),c.push(p),s||(p=ct(p,t,l,o,i,c))
}}else o&&(a=o(p,t),typeof a=="undefined"&&(a=t)),typeof a!="undefined"&&(p=a);n[e]=p});return n}function lt(n){for(var t=-1,e=me(n),r=e.length,u=Rt(r);++t<r;)u[t]=n[e[t]];return u}function pt(n,t,e){var r=-1,u=n?n.length:0,o=a;return e=(0>e?le(0,u+e):e)||0,typeof u=="number"?o=-1<(ft(n)?n.indexOf(t,e):xt(n,t,e)):q(n,function(n){return++r<e?void 0:!(o=n===t)}),o}function st(n,t,e){var u=r;t=M.createCallback(t,e),e=-1;var a=n?n.length:0;if(typeof a=="number")for(;++e<a&&(u=!!t(n[e],e,n)););else q(n,function(n,e,r){return u=!!t(n,e,r)
});return u}function vt(n,t,e){var r=[];t=M.createCallback(t,e),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var a=n[e];t(a,e,n)&&r.push(a)}else q(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function gt(n,t,e){t=M.createCallback(t,e),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return q(n,function(n,e,r){return t(n,e,r)?(u=n,a):void 0}),u}for(;++e<r;){var o=n[e];if(t(o,e,n))return o}}function yt(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:M.createCallback(t,e),typeof u=="number")for(;++r<u&&t(n[r],r,n)!==a;);else q(n,t);
return n}function ht(n,t,e){var r=-1,u=n?n.length:0;if(t=M.createCallback(t,e),typeof u=="number")for(var a=Rt(u);++r<u;)a[r]=t(n[r],r,n);else a=[],q(n,function(n,e,u){a[++r]=t(n,e,u)});return a}function mt(n,t,e){var r=-1/0,u=r;if(!t&&rt(n)){e=-1;for(var a=n.length;++e<a;){var o=n[e];o>u&&(u=o)}}else t=!t&&ft(n)?V:M.createCallback(t,e),yt(n,function(n,e,a){e=t(n,e,a),e>r&&(r=e,u=n)});return u}function bt(n,t){var e=-1,r=n?n.length:0;if(typeof r=="number")for(var u=Rt(r);++e<r;)u[e]=n[e][t];return u||ht(n,t)
}function dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=M.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else q(n,function(n,r,o){e=u?(u=a,n):t(e,n,r,o)});return e}function _t(n,t,e,r){var u=n?n.length:0,o=3>arguments.length;if(typeof u!="number")var i=me(n),u=i.length;return t=M.createCallback(t,r,4),yt(n,function(r,f,c){f=i?i[--u]:--u,e=o?(o=a,n[f]):t(e,n[f],f,c)}),e}function kt(n,t,e){var r;t=M.createCallback(t,e),e=-1;var u=n?n.length:0;
if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else q(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function wt(n){for(var t=-1,e=n?n.length:0,r=Xt.apply(Gt,ge.call(arguments,1)),r=U(r),u=[];++t<e;){var a=n[t];r(a)||u.push(a)}return u}function Ct(n,t,e){if(n){var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=-1;for(t=M.createCallback(t,e);++o<a&&t(n[o],o,n);)r++}else if(r=t,r==u||e)return n[0];return Y(n,0,pe(le(0,r),a))}}function jt(n,t,e,r){var o=-1,i=n?n.length:0,f=[];for(typeof t!="boolean"&&t!=u&&(r=e,e=t,t=a),e!=u&&(e=M.createCallback(e,r));++o<i;)r=n[o],e&&(r=e(r,o,n)),rt(r)?te.apply(f,t?r:jt(r)):f.push(r);
return f}function xt(n,t,e){var r=-1,u=n?n.length:0;if(typeof e=="number")r=(0>e?le(0,u+e):e||0)-1;else if(e)return r=Nt(n,t),n[r]===t?r:-1;for(;++r<u;)if(n[r]===t)return r;return-1}function Ot(n,t,e){if(typeof t!="number"&&t!=u){var r=0,a=-1,o=n?n.length:0;for(t=M.createCallback(t,e);++a<o&&t(n[a],a,n);)r++}else r=t==u||e?1:le(0,t);return Y(n,r)}function Nt(n,t,e,r){var u=0,a=n?n.length:u;for(e=e?M.createCallback(e,r,1):$t,t=e(t);u<a;)r=u+a>>>1,e(n[r])<t?u=r+1:a=r;return u}function Et(n,t,e,r){var o=-1,i=n?n.length:0,f=[],c=f;
typeof t!="boolean"&&t!=u&&(r=e,e=t,t=a);var l=!t&&i>=s;if(l)var v={};for(e!=u&&(c=[],e=M.createCallback(e,r));++o<i;){r=n[o];var g=e?e(r,o,n):r;if(l)var y=p+g,y=v[y]?!(c=v[y]):c=v[y]=[];(t?!o||c[c.length-1]!==g:y||0>xt(c,g))&&((e||l)&&c.push(g),f.push(r))}return f}function It(n,t){for(var e=-1,r=n?n.length:0,u={};++e<r;){var a=n[e];t?u[a]=t[e]:u[a[0]]=a[1]}return u}function St(n,t){return he.fastBind||ae&&2<arguments.length?ae.call.apply(ae,arguments):H(n,t,ge.call(arguments,2))}function At(n){var t=ge.call(arguments,1);
return re(function(){n.apply(e,t)},1)}function $t(n){return n}function Bt(n){yt(tt(n),function(t){var e=M[t]=n[t];M.prototype[t]=function(){var n=this.__wrapped__,t=[n];return te.apply(t,arguments),t=e.apply(M,t),n&&typeof n=="object"&&n==t?this:new Q(t)}})}function Ft(){return this.__wrapped__}o=o?T.defaults(n.Object(),o,T.pick(n,j)):n;var Rt=o.Array,Tt=o.Boolean,qt=o.Date,Dt=o.Function,zt=o.Math,Pt=o.Number,Kt=o.Object,Mt=o.RegExp,Ut=o.String,Vt=o.TypeError,Gt=Rt(),Ht=Kt(),Jt=o._,Lt=Mt("^"+Ut(Ht.valueOf).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/valueOf|for [^\]]+/g,".+?")+"$"),Qt=zt.ceil,Wt=o.clearTimeout,Xt=Gt.concat,Yt=zt.floor,Zt=Lt.test(Zt=Kt.getPrototypeOf)&&Zt,ne=Ht.hasOwnProperty,te=Gt.push,ee=o.setImmediate,re=o.setTimeout,ue=Ht.toString,ae=Lt.test(ae=ue.bind)&&ae,oe=Lt.test(oe=Rt.isArray)&&oe,ie=o.isFinite,fe=o.isNaN,ce=Lt.test(ce=Kt.keys)&&ce,le=zt.max,pe=zt.min,se=o.parseInt,ve=zt.random,ge=Gt.slice,zt=Lt.test(o.attachEvent),zt=ae&&!/\n|true/.test(ae+zt),ye={};
ye[O]=Rt,ye[N]=Tt,ye[E]=qt,ye[S]=Kt,ye[I]=Pt,ye[A]=Mt,ye[$]=Ut;var he=M.support={};he.fastBind=ae&&!zt,M.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:d,variable:"",imports:{_:M}},Q.prototype=M.prototype;var me=ce?function(n){return ot(n)?ce(n):[]}:K,be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},de=et(be);return zt&&i&&typeof ee=="function"&&(At=St(ee,o)),Tt=8==se("08")?se:function(n,t){return se(ft(n)?n.replace(_,""):n,t||0)},M.after=function(n,t){return 1>n?t():function(){return 1>--n?t.apply(this,arguments):void 0
}},M.assign=P,M.at=function(n){for(var t=-1,e=Xt.apply(Gt,ge.call(arguments,1)),r=e.length,u=Rt(r);++t<r;)u[t]=n[e[t]];return u},M.bind=St,M.bindAll=function(n){for(var t=1<arguments.length?Xt.apply(Gt,ge.call(arguments,1)):tt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=St(n[u],n)}return n},M.bindKey=function(n,t){return H(n,t,ge.call(arguments,2),l)},M.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},M.compose=function(){var n=arguments;return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];
return t[0]}},M.countBy=function(n,t,e){var r={};return t=M.createCallback(t,e),yt(n,function(n,e,u){e=Ut(t(n,e,u)),ne.call(r,e)?r[e]++:r[e]=1}),r},M.createCallback=function(n,t,e){if(n==u)return $t;var r=typeof n;if("function"!=r){if("object"!=r)return function(t){return t[n]};var o=me(n);return function(t){for(var e=o.length,r=a;e--&&(r=ut(t[o[e]],n[o[e]],l)););return r}}return typeof t!="undefined"?1===e?function(e){return n.call(t,e)}:2===e?function(e,r){return n.call(t,e,r)}:4===e?function(e,r,u,a){return n.call(t,e,r,u,a)
}:function(e,r,u){return n.call(t,e,r,u)}:n},M.debounce=function(n,t,e){function o(){l=u,p&&(f=n.apply(c,i))}var i,f,c,l,p=r;if(e===r)var s=r,p=a;else e&&F[typeof e]&&(s=e.leading,p="trailing"in e?e.trailing:p);return function(){var e=s&&!l;return i=arguments,c=this,Wt(l),l=re(o,t),e&&(f=n.apply(c,i)),f}},M.defaults=z,M.defer=At,M.delay=function(n,t){var r=ge.call(arguments,2);return re(function(){n.apply(e,r)},t)},M.difference=wt,M.filter=vt,M.flatten=jt,M.forEach=yt,M.forIn=D,M.forOwn=q,M.functions=tt,M.groupBy=function(n,t,e){var r={};
return t=M.createCallback(t,e),yt(n,function(n,e,u){e=Ut(t(n,e,u)),(ne.call(r,e)?r[e]:r[e]=[]).push(n)}),r},M.initial=function(n,t,e){if(!n)return[];var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=a;for(t=M.createCallback(t,e);o--&&t(n[o],o,n);)r++}else r=t==u||e?1:t||r;return Y(n,0,pe(le(0,a-r),a))},M.intersection=function(n){var t=arguments,e=t.length,r={0:{}},u=-1,a=n?n.length:0,o=a>=s,i=[],f=i;n:for(;++u<a;){var c=n[u];if(o)var l=p+c,l=r[0][l]?!(f=r[0][l]):f=r[0][l]=[];if(l||0>xt(f,c)){o&&f.push(c);
for(var v=e;--v;)if(!(r[v]||(r[v]=U(t[v])))(c))continue n;i.push(c)}}return i},M.invert=et,M.invoke=function(n,t){var e=ge.call(arguments,2),r=-1,u=typeof t=="function",a=n?n.length:0,o=Rt(typeof a=="number"?a:0);return yt(n,function(n){o[++r]=(u?t:n[t]).apply(n,e)}),o},M.keys=me,M.map=ht,M.max=mt,M.memoize=function(n,t){var e={};return function(){var r=p+(t?t.apply(this,arguments):arguments[0]);return ne.call(e,r)?e[r]:e[r]=n.apply(this,arguments)}},M.merge=ct,M.min=function(n,t,e){var r=1/0,u=r;
if(!t&&rt(n)){e=-1;for(var a=n.length;++e<a;){var o=n[e];o<u&&(u=o)}}else t=!t&&ft(n)?V:M.createCallback(t,e),yt(n,function(n,e,a){e=t(n,e,a),e<r&&(r=e,u=n)});return u},M.omit=function(n,t,e){var r=typeof t=="function",u={};if(r)t=M.createCallback(t,e);else var a=Xt.apply(Gt,ge.call(arguments,1));return D(n,function(n,e,o){(r?!t(n,e,o):0>xt(a,e))&&(u[e]=n)}),u},M.once=function(n){var t,e;return function(){return t?e:(t=r,e=n.apply(this,arguments),n=u,e)}},M.pairs=function(n){for(var t=-1,e=me(n),r=e.length,u=Rt(r);++t<r;){var a=e[t];
u[t]=[a,n[a]]}return u},M.partial=function(n){return H(n,ge.call(arguments,1))},M.partialRight=function(n){return H(n,ge.call(arguments,1),u,l)},M.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,a=Xt.apply(Gt,ge.call(arguments,1)),o=ot(n)?a.length:0;++u<o;){var i=a[u];i in n&&(r[i]=n[i])}else t=M.createCallback(t,e),D(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},M.pluck=bt,M.range=function(n,t,e){n=+n||0,e=+e||1,t==u&&(t=n,n=0);var r=-1;t=le(0,Qt((t-n)/e));for(var a=Rt(t);++r<t;)a[r]=n,n+=e;
return a},M.reject=function(n,t,e){return t=M.createCallback(t,e),vt(n,function(n,e,r){return!t(n,e,r)})},M.rest=Ot,M.shuffle=function(n){var t=-1,e=n?n.length:0,r=Rt(typeof e=="number"?e:0);return yt(n,function(n){var e=Yt(ve()*(++t+1));r[t]=r[e],r[e]=n}),r},M.sortBy=function(n,t,e){var r=-1,u=n?n.length:0,a=Rt(typeof u=="number"?u:0);for(t=M.createCallback(t,e),yt(n,function(n,e,u){a[++r]={a:t(n,e,u),b:r,c:n}}),u=a.length,a.sort(G);u--;)a[u]=a[u].c;return a},M.tap=function(n,t){return t(n),n},M.throttle=function(n,t,e){function o(){p=new qt,l=u,v&&(f=n.apply(c,i))
}var i,f,c,l,p=0,s=r,v=r;return e===a?s=a:e&&F[typeof e]&&(s="leading"in e?e.leading:s,v="trailing"in e?e.trailing:v),function(){var e=new qt;!l&&!s&&(p=e);var r=t-(e-p);return i=arguments,c=this,0<r?l||(l=re(o,r)):(Wt(l),l=u,p=e,f=n.apply(c,i)),f}},M.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Rt(n);for(t=M.createCallback(t,e,1);++r<n;)u[r]=t(r);return u},M.toArray=function(n){return n&&typeof n.length=="number"?Y(n):lt(n)},M.union=function(n){return rt(n)||(arguments[0]=n?ge.call(n):Gt),Et(Xt.apply(Gt,arguments))
},M.uniq=Et,M.unzip=function(n){for(var t=-1,e=n?n.length:0,r=e?mt(bt(n,"length")):0,u=Rt(r);++t<e;)for(var a=-1,o=n[t];++a<r;)(u[a]||(u[a]=Rt(e)))[t]=o[a];return u},M.values=lt,M.where=vt,M.without=function(n){return wt(n,ge.call(arguments,1))},M.wrap=function(n,t){return function(){var e=[n];return te.apply(e,arguments),t.apply(this,e)}},M.zip=function(n){for(var t=-1,e=n?mt(bt(arguments,"length")):0,r=Rt(e);++t<e;)r[t]=bt(arguments,t);return r},M.zipObject=It,M.collect=ht,M.drop=Ot,M.each=yt,M.extend=P,M.methods=tt,M.object=It,M.select=vt,M.tail=Ot,M.unique=Et,Bt(M),M.clone=nt,M.cloneDeep=function(n,t,e){return nt(n,r,t,e)
},M.contains=pt,M.escape=function(n){return n==u?"":Ut(n).replace(w,L)},M.every=st,M.find=gt,M.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=M.createCallback(t,e);++r<u;)if(t(n[r],r,n))return r;return-1},M.findKey=function(n,t,e){var r;return t=M.createCallback(t,e),q(n,function(n,e,u){return t(n,e,u)?(r=e,a):void 0}),r},M.has=function(n,t){return n?ne.call(n,t):a},M.identity=$t,M.indexOf=xt,M.isArguments=function(n){return ue.call(n)==x},M.isArray=rt,M.isBoolean=function(n){return n===r||n===a||ue.call(n)==N
},M.isDate=function(n){return n instanceof qt||ue.call(n)==E},M.isElement=function(n){return n?1===n.nodeType:a},M.isEmpty=function(n){var t=r;if(!n)return t;var e=ue.call(n),u=n.length;return e==O||e==$||e==x||e==S&&typeof u=="number"&&at(n.splice)?!u:(q(n,function(){return t=a}),t)},M.isEqual=ut,M.isFinite=function(n){return ie(n)&&!fe(parseFloat(n))},M.isFunction=at,M.isNaN=function(n){return it(n)&&n!=+n},M.isNull=function(n){return n===u},M.isNumber=it,M.isObject=ot,M.isPlainObject=f,M.isRegExp=function(n){return n instanceof Mt||ue.call(n)==A
},M.isString=ft,M.isUndefined=function(n){return typeof n=="undefined"},M.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?le(0,r+e):pe(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},M.mixin=Bt,M.noConflict=function(){return o._=Jt,this},M.parseInt=Tt,M.random=function(n,t){return n==u&&t==u&&(t=1),n=+n||0,t==u&&(t=n,n=0),n+Yt(ve()*((+t||0)-n+1))},M.reduce=dt,M.reduceRight=_t,M.result=function(n,t){var r=n?n[t]:e;return at(r)?n[t]():r},M.runInContext=t,M.size=function(n){var t=n?n.length:0;
return typeof t=="number"?t:me(n).length},M.some=kt,M.sortedIndex=Nt,M.template=function(n,t,u){var a=M.templateSettings;n||(n=""),u=z({},u,a);var o,i=z({},u.imports,a.imports),a=me(i),i=lt(i),f=0,c=u.interpolate||k,l="__p+='",c=Mt((u.escape||k).source+"|"+c.source+"|"+(c===d?m:k).source+"|"+(u.evaluate||k).source+"|$","g");n.replace(c,function(t,e,u,a,i,c){return u||(u=a),l+=n.slice(f,c).replace(C,J),e&&(l+="'+__e("+e+")+'"),i&&(o=r,l+="';"+i+";__p+='"),u&&(l+="'+((__t=("+u+"))==null?'':__t)+'"),f=c+t.length,t
}),l+="';\n",c=u=u.variable,c||(u="obj",l="with("+u+"){"+l+"}"),l=(o?l.replace(v,""):l).replace(g,"$1").replace(y,"$1;"),l="function("+u+"){"+(c?"":u+"||("+u+"={});")+"var __t,__p='',__e=_.escape"+(o?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var p=Dt(a,"return "+l).apply(e,i)}catch(s){throw s.source=l,s}return t?p(t):(p.source=l,p)},M.unescape=function(n){return n==u?"":Ut(n).replace(h,Z)},M.uniqueId=function(n){var t=++c;return Ut(n==u?"":n)+t
},M.all=st,M.any=kt,M.detect=gt,M.foldl=dt,M.foldr=_t,M.include=pt,M.inject=dt,q(M,function(n,t){M.prototype[t]||(M.prototype[t]=function(){var t=[this.__wrapped__];return te.apply(t,arguments),n.apply(M,t)})}),M.first=Ct,M.last=function(n,t,e){if(n){var r=0,a=n.length;if(typeof t!="number"&&t!=u){var o=a;for(t=M.createCallback(t,e);o--&&t(n[o],o,n);)r++}else if(r=t,r==u||e)return n[a-1];return Y(n,le(0,a-r))}},M.take=Ct,M.head=Ct,q(M,function(n,t){M.prototype[t]||(M.prototype[t]=function(t,e){var r=n(this.__wrapped__,t,e);
return t==u||e&&typeof t!="function"?r:new Q(r)})}),M.VERSION="1.2.0",M.prototype.toString=function(){return Ut(this.__wrapped__)},M.prototype.value=Ft,M.prototype.valueOf=Ft,yt(["join","pop","shift"],function(n){var t=Gt[n];M.prototype[n]=function(){return t.apply(this.__wrapped__,arguments)}}),yt(["push","reverse","sort","unshift"],function(n){var t=Gt[n];M.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),yt(["concat","slice","splice"],function(n){var t=Gt[n];M.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments))
}}),M}var e,r=!0,u=null,a=!1,o=typeof exports=="object"&&exports,i=typeof module=="object"&&module&&module.exports==o&&module,f=typeof global=="object"&&global;(f.global===f||f.window===f)&&(n=f);var c=0,l={},p=+new Date+"",s=200,v=/\b__p\+='';/g,g=/\b(__p\+=)''\+/g,y=/(__e\(.*?\)|\b__t\))\+'';/g,h=/&(?:amp|lt|gt|quot|#39);/g,m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,b=/\w*$/,d=/<%=([\s\S]+?)%>/g,_=/^0+(?=.$)/,k=/($^)/,w=/[&<>"']/g,C=/['\n\r\t\u2028\u2029\\]/g,j="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout".split(" "),x="[object Arguments]",O="[object Array]",N="[object Boolean]",E="[object Date]",I="[object Number]",S="[object Object]",A="[object RegExp]",$="[object String]",B={"[object Function]":a};
B[x]=B[O]=B[N]=B[E]=B[I]=B[S]=B[A]=B[$]=r;var F={"boolean":a,"function":r,object:r,number:a,string:a,undefined:a},R={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},T=t();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(n._=T,define(function(){return T})):o&&!o.nodeType?i?(i.exports=T)._=T:o._=T:n._=T})(this);
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
/*!
 * Benchmark.js v1.0.0 <http://benchmarkjs.com/>
 * Copyright 2010-2013 Mathias Bynens <http://mths.be/>
 * Based on JSLitmus.js, copyright Robert Kieffer <http://broofa.com/>
 * Modified by John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <http://mths.be/mit>
 */
(function(window, undefined) {
  'use strict';

  /** Detect free variable `define` */
  var freeDefine = typeof define == 'function' &&
    typeof define.amd == 'object' && define.amd && define;

  /** Detect free variable `exports` */
  var freeExports = typeof exports == 'object' && exports;

  /** Detect free variable `module` */
  var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;

  /** Detect free variable `require` */
  var freeRequire = typeof require == 'function' && require;

  /** Detect free variable `global`, from Node.js or Browserified code, and use it as `window` */
  var freeGlobal = typeof global == 'object' && global;
  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
    window = freeGlobal;
  }

  /** Used to assign each benchmark an incrimented id */
  var counter = 0;

  /** Used to detect primitive types */
  var rePrimitive = /^(?:boolean|number|string|undefined)$/;

  /** Used to assign default `context` object properties */
  var contextProps = [
    'Array', 'Date', 'Function', 'Math', 'Object', 'RegExp', 'String', '_',
    'clearTimeout', 'chrome', 'chromium', 'document', 'java', 'navigator',
    'performance', 'platform', 'process', 'runtime', 'setTimeout'
  ];

  /** Used to avoid hz of Infinity */
  var divisors = {
    '1': 4096,
    '2': 512,
    '3': 64,
    '4': 8,
    '5': 0
  };

  /**
   * T-Distribution two-tailed critical values for 95% confidence
   * http://www.itl.nist.gov/div898/handbook/eda/section3/eda3672.htm
   */
  var tTable = {
    '1':  12.706,'2':  4.303, '3':  3.182, '4':  2.776, '5':  2.571, '6':  2.447,
    '7':  2.365, '8':  2.306, '9':  2.262, '10': 2.228, '11': 2.201, '12': 2.179,
    '13': 2.16,  '14': 2.145, '15': 2.131, '16': 2.12,  '17': 2.11,  '18': 2.101,
    '19': 2.093, '20': 2.086, '21': 2.08,  '22': 2.074, '23': 2.069, '24': 2.064,
    '25': 2.06,  '26': 2.056, '27': 2.052, '28': 2.048, '29': 2.045, '30': 2.042,
    'infinity': 1.96
  };

  /**
   * Critical Mann-Whitney U-values for 95% confidence
   * http://www.saburchill.com/IBbiology/stats/003.html
   */
  var uTable = {
    '5':  [0, 1, 2],
    '6':  [1, 2, 3, 5],
    '7':  [1, 3, 5, 6, 8],
    '8':  [2, 4, 6, 8, 10, 13],
    '9':  [2, 4, 7, 10, 12, 15, 17],
    '10': [3, 5, 8, 11, 14, 17, 20, 23],
    '11': [3, 6, 9, 13, 16, 19, 23, 26, 30],
    '12': [4, 7, 11, 14, 18, 22, 26, 29, 33, 37],
    '13': [4, 8, 12, 16, 20, 24, 28, 33, 37, 41, 45],
    '14': [5, 9, 13, 17, 22, 26, 31, 36, 40, 45, 50, 55],
    '15': [5, 10, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64],
    '16': [6, 11, 15, 21, 26, 31, 37, 42, 47, 53, 59, 64, 70, 75],
    '17': [6, 11, 17, 22, 28, 34, 39, 45, 51, 57, 63, 67, 75, 81, 87],
    '18': [7, 12, 18, 24, 30, 36, 42, 48, 55, 61, 67, 74, 80, 86, 93, 99],
    '19': [7, 13, 19, 25, 32, 38, 45, 52, 58, 65, 72, 78, 85, 92, 99, 106, 113],
    '20': [8, 14, 20, 27, 34, 41, 48, 55, 62, 69, 76, 83, 90, 98, 105, 112, 119, 127],
    '21': [8, 15, 22, 29, 36, 43, 50, 58, 65, 73, 80, 88, 96, 103, 111, 119, 126, 134, 142],
    '22': [9, 16, 23, 30, 38, 45, 53, 61, 69, 77, 85, 93, 101, 109, 117, 125, 133, 141, 150, 158],
    '23': [9, 17, 24, 32, 40, 48, 56, 64, 73, 81, 89, 98, 106, 115, 123, 132, 140, 149, 157, 166, 175],
    '24': [10, 17, 25, 33, 42, 50, 59, 67, 76, 85, 94, 102, 111, 120, 129, 138, 147, 156, 165, 174, 183, 192],
    '25': [10, 18, 27, 35, 44, 53, 62, 71, 80, 89, 98, 107, 117, 126, 135, 145, 154, 163, 173, 182, 192, 201, 211],
    '26': [11, 19, 28, 37, 46, 55, 64, 74, 83, 93, 102, 112, 122, 132, 141, 151, 161, 171, 181, 191, 200, 210, 220, 230],
    '27': [11, 20, 29, 38, 48, 57, 67, 77, 87, 97, 107, 118, 125, 138, 147, 158, 168, 178, 188, 199, 209, 219, 230, 240, 250],
    '28': [12, 21, 30, 40, 50, 60, 70, 80, 90, 101, 111, 122, 132, 143, 154, 164, 175, 186, 196, 207, 218, 228, 239, 250, 261, 272],
    '29': [13, 22, 32, 42, 52, 62, 73, 83, 94, 105, 116, 127, 138, 149, 160, 171, 182, 193, 204, 215, 226, 238, 249, 260, 271, 282, 294],
    '30': [13, 23, 33, 43, 54, 65, 76, 87, 98, 109, 120, 131, 143, 154, 166, 177, 189, 200, 212, 223, 235, 247, 258, 270, 282, 293, 305, 317]
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new `Benchmark` function using the given `context` object.
   *
   * @static
   * @memberOf Benchmark
   * @param {Object} [context=window] The context object.
   * @returns {Function} Returns the `Benchmark` function.
   */
  function runInContext(context) {
    // exit early if unable to acquire lodash
    var _ = context && context._ || req('lodash') || window._;
    if (!_) {
      Benchmark.runInContext = runInContext;
      return Benchmark;
    }
    // Avoid issues with some ES3 environments that attempt to use values, named
    // after built-in constructors like `Object`, for the creation of literals.
    // ES5 clears this up by stating that literals must use built-in constructors.
    // See http://es5.github.com/#x11.1.5.
    context = context ? _.defaults(window.Object(), context, _.pick(window, contextProps)) : window;

    /** Native constructor references */
    var Array = context.Array,
        Date = context.Date,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String;

    /** Used for `Array` and `Object` method references */
    var arrayRef = Array(),
        objectRef = Object();

    /** Native method shortcuts */
    var abs = Math.abs,
        clearTimeout = context.clearTimeout,
        floor = Math.floor,
        log = Math.log,
        max = Math.max,
        min = Math.min,
        pow = Math.pow,
        setTimeout = context.setTimeout,
        shift = arrayRef.shift,
        slice = arrayRef.slice,
        sqrt = Math.sqrt,
        toString = objectRef.toString;

    /** Detect DOM document object */
    var doc = isHostType(context, 'document') && context.document;

    /** Used to access Wade Simmons' Node microtime module */
    var microtimeObject = req('microtime');

    /** Used to access the browser's high resolution timer */
    var perfObject = isHostType(context, 'performance') && context.performance;

    /** Used to call the browser's high resolution timer */
    var perfName = perfObject && (
      perfObject.now && 'now' ||
      perfObject.webkitNow && 'webkitNow'
    );

    /** Used to access Node's high resolution timer */
    var processObject = isHostType(context, 'process') && context.process;

    /** Used to prevent a `removeChild` memory leak in IE < 9 */
    var trash = doc && doc.createElement('div');

    /** Used to integrity check compiled tests */
    var uid = 'uid' + (+new Date);

    /** Used to avoid infinite recursion when methods call each other */
    var calledBy = {};

    /**
     * An object used to flag environments/features.
     *
     * @static
     * @memberOf Benchmark
     * @type Object
     */
    var support = {};

    (function() {

      /**
       * Detect Adobe AIR.
       *
       * @memberOf Benchmark.support
       * @type Boolean
       */
      support.air = isClassOf(context.runtime, 'ScriptBridgingProxyObject');

      /**
       * Detect if in a browser environment.
       *
       * @memberOf Benchmark.support
       * @type Boolean
       */
      support.browser = doc && isHostType(context, 'navigator') && !isHostType(context, 'phantom');

      /**
       * Detect if Java is enabled/exposed.
       *
       * @memberOf Benchmark.support
       * @type Boolean
       */
      support.java = isClassOf(context.java, 'JavaPackage');

      /**
       * Detect if the Timers API exists.
       *
       * @memberOf Benchmark.support
       * @type Boolean
       */
      support.timeout = isHostType(context, 'setTimeout') && isHostType(context, 'clearTimeout');

      /**
       * Detect if functions support decompilation.
       *
       * @name decompilation
       * @memberOf Benchmark.support
       * @type Boolean
       */
      try {
        // Safari 2.x removes commas in object literals
        // from Function#toString results
        // http://webk.it/11609
        // Firefox 3.6 and Opera 9.25 strip grouping
        // parentheses from Function#toString results
        // http://bugzil.la/559438
        support.decompilation = Function(
          'return (' + (function(x) { return { 'x': '' + (1 + x) + '', 'y': 0 }; }) + ')'
        )()(0).x === '1';
      } catch(e) {
        support.decompilation = false;
      }
    }());

    /**
     * Timer object used by `clock()` and `Deferred#resolve`.
     *
     * @private
     * @type Object
     */
    var timer = {

     /**
      * The timer namespace object or constructor.
      *
      * @private
      * @memberOf timer
      * @type Function|Object
      */
      'ns': Date,

     /**
      * Starts the deferred timer.
      *
      * @private
      * @memberOf timer
      * @param {Object} deferred The deferred instance.
      */
      'start': null, // lazy defined in `clock()`

     /**
      * Stops the deferred timer.
      *
      * @private
      * @memberOf timer
      * @param {Object} deferred The deferred instance.
      */
      'stop': null // lazy defined in `clock()`
    };

    /*------------------------------------------------------------------------*/

    /**
     * The Benchmark constructor.
     *
     * @constructor
     * @param {String} name A name to identify the benchmark.
     * @param {Function|String} fn The test to benchmark.
     * @param {Object} [options={}] Options object.
     * @example
     *
     * // basic usage (the `new` operator is optional)
     * var bench = new Benchmark(fn);
     *
     * // or using a name first
     * var bench = new Benchmark('foo', fn);
     *
     * // or with options
     * var bench = new Benchmark('foo', fn, {
     *
     *   // displayed by Benchmark#toString if `name` is not available
     *   'id': 'xyz',
     *
     *   // called when the benchmark starts running
     *   'onStart': onStart,
     *
     *   // called after each run cycle
     *   'onCycle': onCycle,
     *
     *   // called when aborted
     *   'onAbort': onAbort,
     *
     *   // called when a test errors
     *   'onError': onError,
     *
     *   // called when reset
     *   'onReset': onReset,
     *
     *   // called when the benchmark completes running
     *   'onComplete': onComplete,
     *
     *   // compiled/called before the test loop
     *   'setup': setup,
     *
     *   // compiled/called after the test loop
     *   'teardown': teardown
     * });
     *
     * // or name and options
     * var bench = new Benchmark('foo', {
     *
     *   // a flag to indicate the benchmark is deferred
     *   'defer': true,
     *
     *   // benchmark test function
     *   'fn': function(deferred) {
     *     // call resolve() when the deferred test is finished
     *     deferred.resolve();
     *   }
     * });
     *
     * // or options only
     * var bench = new Benchmark({
     *
     *   // benchmark name
     *   'name': 'foo',
     *
     *   // benchmark test as a string
     *   'fn': '[1,2,3,4].sort()'
     * });
     *
     * // a test's `this` binding is set to the benchmark instance
     * var bench = new Benchmark('foo', function() {
     *   'My name is '.concat(this.name); // My name is foo
     * });
     */
    function Benchmark(name, fn, options) {
      var bench = this;

      // allow instance creation without the `new` operator
      if (bench == null || bench.constructor != Benchmark) {
        return new Benchmark(name, fn, options);
      }
      // juggle arguments
      if (_.isPlainObject(name)) {
        // 1 argument (options)
        options = name;
      }
      else if (_.isFunction(name)) {
        // 2 arguments (fn, options)
        options = fn;
        fn = name;
      }
      else if (_.isPlainObject(fn)) {
        // 2 arguments (name, options)
        options = fn;
        fn = null;
        bench.name = name;
      }
      else {
        // 3 arguments (name, fn [, options])
        bench.name = name;
      }
      setOptions(bench, options);

      bench.id || (bench.id = ++counter);
      bench.fn == null && (bench.fn = fn);

      bench.stats = cloneDeep(bench.stats);
      bench.times = cloneDeep(bench.times);
    }

    /**
     * The Deferred constructor.
     *
     * @constructor
     * @memberOf Benchmark
     * @param {Object} clone The cloned benchmark instance.
     */
    function Deferred(clone) {
      var deferred = this;
      if (deferred == null || deferred.constructor != Deferred) {
        return new Deferred(clone);
      }
      deferred.benchmark = clone;
      clock(deferred);
    }

    /**
     * The Event constructor.
     *
     * @constructor
     * @memberOf Benchmark
     * @param {String|Object} type The event type.
     */
    function Event(type) {
      var event = this;
      return (event == null || event.constructor != Event)
        ? new Event(type)
        : (type instanceof Event
            ? type
            : _.extend(event, { 'timeStamp': +new Date }, typeof type == 'string' ? { 'type': type } : type)
          );
    }

    /**
     * The Suite constructor.
     *
     * @constructor
     * @memberOf Benchmark
     * @param {String} name A name to identify the suite.
     * @param {Object} [options={}] Options object.
     * @example
     *
     * // basic usage (the `new` operator is optional)
     * var suite = new Benchmark.Suite;
     *
     * // or using a name first
     * var suite = new Benchmark.Suite('foo');
     *
     * // or with options
     * var suite = new Benchmark.Suite('foo', {
     *
     *   // called when the suite starts running
     *   'onStart': onStart,
     *
     *   // called between running benchmarks
     *   'onCycle': onCycle,
     *
     *   // called when aborted
     *   'onAbort': onAbort,
     *
     *   // called when a test errors
     *   'onError': onError,
     *
     *   // called when reset
     *   'onReset': onReset,
     *
     *   // called when the suite completes running
     *   'onComplete': onComplete
     * });
     */
    function Suite(name, options) {
      var suite = this;

      // allow instance creation without the `new` operator
      if (suite == null || suite.constructor != Suite) {
        return new Suite(name, options);
      }
      // juggle arguments
      if (isClassOf(name, 'Object')) {
        // 1 argument (options)
        options = name;
      } else {
        // 2 arguments (name [, options])
        suite.name = name;
      }
      setOptions(suite, options);
    }

    /*------------------------------------------------------------------------*/

    /**
     * A deep clone utility.
     *
     * @private
     * @param {Mixed} value The value to clone.
     * @returns {Mixed} The cloned value.
     */
    var cloneDeep = _.partialRight(_.cloneDeep, function(value) {
      // do not clone non-Object objects
      return (typeof value == 'object' && !_.isArray(value) && !_.isPlainObject(value))
        ? value
        : undefined;
    });

    /**
     * Creates a function from the given arguments string and body.
     *
     * @private
     * @param {String} args The comma separated function arguments.
     * @param {String} body The function body.
     * @returns {Function} The new function.
     */
    function createFunction() {
      // lazy define
      createFunction = function(args, body) {
        var result,
            anchor = freeDefine ? freeDefine.amd : Benchmark,
            prop = uid + 'createFunction';

        runScript((freeDefine ? 'define.amd.' : 'Benchmark.') + prop + '=function(' + args + '){' + body + '}');
        result = anchor[prop];
        delete anchor[prop];
        return result;
      };
      // fix JaegerMonkey bug
      // http://bugzil.la/639720
      createFunction = support.browser && (createFunction('', 'return"' + uid + '"') || noop)() == uid ? createFunction : Function;
      return createFunction.apply(null, arguments);
    }

    /**
     * Delay the execution of a function based on the benchmark's `delay` property.
     *
     * @private
     * @param {Object} bench The benchmark instance.
     * @param {Object} fn The function to execute.
     */
    function delay(bench, fn) {
      bench._timerId = _.delay(fn, bench.delay * 1e3);
    }

    /**
     * Destroys the given element.
     *
     * @private
     * @param {Element} element The element to destroy.
     */
    function destroyElement(element) {
      trash.appendChild(element);
      trash.innerHTML = '';
    }

    /**
     * Gets the name of the first argument from a function's source.
     *
     * @private
     * @param {Function} fn The function.
     * @returns {String} The argument name.
     */
    function getFirstArgument(fn) {
      return (!_.has(fn, 'toString') &&
        (/^[\s(]*function[^(]*\(([^\s,)]+)/.exec(fn) || 0)[1]) || '';
    }

    /**
     * Computes the geometric mean (log-average) of a sample.
     * See http://en.wikipedia.org/wiki/Geometric_mean#Relationship_with_arithmetic_mean_of_logarithms.
     *
     * @private
     * @param {Array} sample The sample.
     * @returns {Number} The geometric mean.
     */
    function getGeometricMean(sample) {
      return pow(Math.E, _.reduce(sample, function(sum, x) {
        return sum + log(x);
      }) / sample.length) || 0;
    }

    /**
     * Computes the arithmetic mean of a sample.
     *
     * @private
     * @param {Array} sample The sample.
     * @returns {Number} The mean.
     */
    function getMean(sample) {
      return (_.reduce(sample, function(sum, x) {
        return sum + x;
      }) / sample.length) || 0;
    }

    /**
     * Gets the source code of a function.
     *
     * @private
     * @param {Function} fn The function.
     * @param {String} altSource A string used when a function's source code is unretrievable.
     * @returns {String} The function's source code.
     */
    function getSource(fn, altSource) {
      var result = altSource;
      if (isStringable(fn)) {
        result = String(fn);
      } else if (support.decompilation) {
        // escape the `{` for Firefox 1
        result = (/^[^{]+\{([\s\S]*)\}\s*$/.exec(fn) || 0)[1];
      }
      // trim string
      result = (result || '').replace(/^\s+|\s+$/g, '');

      // detect strings containing only the "use strict" directive
      return /^(?:\/\*+[\w|\W]*?\*\/|\/\/.*?[\n\r\u2028\u2029]|\s)*(["'])use strict\1;?$/.test(result)
        ? ''
        : result;
    }

    /**
     * Checks if an object is of the specified class.
     *
     * @private
     * @param {Mixed} value The value to check.
     * @param {String} name The name of the class.
     * @returns {Boolean} Returns `true` if the value is of the specified class, else `false`.
     */
    function isClassOf(value, name) {
      return value != null && toString.call(value) == '[object ' + name + ']';
    }

    /**
     * Host objects can return type values that are different from their actual
     * data type. The objects we are concerned with usually return non-primitive
     * types of "object", "function", or "unknown".
     *
     * @private
     * @param {Mixed} object The owner of the property.
     * @param {String} property The property to check.
     * @returns {Boolean} Returns `true` if the property value is a non-primitive, else `false`.
     */
    function isHostType(object, property) {
      if (object == null) {
        return false;
      }
      var type = typeof object[property];
      return !rePrimitive.test(type) && (type != 'object' || !!object[property]);
    }

    /**
     * Checks if a value can be safely coerced to a string.
     *
     * @private
     * @param {Mixed} value The value to check.
     * @returns {Boolean} Returns `true` if the value can be coerced, else `false`.
     */
    function isStringable(value) {
      return _.has(value, 'toString') || isClassOf(value, 'String');
    }

    /**
     * A no-operation function.
     *
     * @private
     */
    function noop() {
      // no operation performed
    }

    /**
     * A wrapper around require() to suppress `module missing` errors.
     *
     * @private
     * @param {String} id The module id.
     * @returns {Mixed} The exported module or `null`.
     */
    function req(id) {
      try {
        var result = freeExports && freeRequire(id);
      } catch(e) { }
      return result || null;
    }

    /**
     * Runs a snippet of JavaScript via script injection.
     *
     * @private
     * @param {String} code The code to run.
     */
    function runScript(code) {
      var anchor = freeDefine ? define.amd : Benchmark,
          script = doc.createElement('script'),
          sibling = doc.getElementsByTagName('script')[0],
          parent = sibling.parentNode,
          prop = uid + 'runScript',
          prefix = '(' + (freeDefine ? 'define.amd.' : 'Benchmark.') + prop + '||function(){})();';

      // Firefox 2.0.0.2 cannot use script injection as intended because it executes
      // asynchronously, but that's OK because script injection is only used to avoid
      // the previously commented JaegerMonkey bug.
      try {
        // remove the inserted script *before* running the code to avoid differences
        // in the expected script element count/order of the document.
        script.appendChild(doc.createTextNode(prefix + code));
        anchor[prop] = function() { destroyElement(script); };
      } catch(e) {
        parent = parent.cloneNode(false);
        sibling = null;
        script.text = code;
      }
      parent.insertBefore(script, sibling);
      delete anchor[prop];
    }

    /**
     * A helper function for setting options/event handlers.
     *
     * @private
     * @param {Object} bench The benchmark instance.
     * @param {Object} [options={}] Options object.
     */
    function setOptions(bench, options) {
      options = _.extend({}, bench.constructor.options, options);
      bench.options = _.forOwn(options, function(value, key) {
        if (value != null) {
          // add event listeners
          if (/^on[A-Z]/.test(key)) {
            _.each(key.split(' '), function(key) {
              bench.on(key.slice(2).toLowerCase(), value);
            });
          } else if (!_.has(bench, key)) {
            bench[key] = cloneDeep(value);
          }
        }
      });
    }

    /*------------------------------------------------------------------------*/

    /**
     * Handles cycling/completing the deferred benchmark.
     *
     * @memberOf Benchmark.Deferred
     */
    function resolve() {
      var deferred = this,
          clone = deferred.benchmark,
          bench = clone._original;

      if (bench.aborted) {
        // cycle() -> clone cycle/complete event -> compute()'s invoked bench.run() cycle/complete
        deferred.teardown();
        clone.running = false;
        cycle(deferred);
      }
      else if (++deferred.cycles < clone.count) {
        clone.compiled.call(deferred, context, timer);
      }
      else {
        timer.stop(deferred);
        deferred.teardown();
        delay(clone, function() { cycle(deferred); });
      }
    }

    /*------------------------------------------------------------------------*/

    /**
     * A generic `Array#filter` like method.
     *
     * @static
     * @memberOf Benchmark
     * @param {Array} array The array to iterate over.
     * @param {Function|String} callback The function/alias called per iteration.
     * @param {Mixed} thisArg The `this` binding for the callback.
     * @returns {Array} A new array of values that passed callback filter.
     * @example
     *
     * // get odd numbers
     * Benchmark.filter([1, 2, 3, 4, 5], function(n) {
     *   return n % 2;
     * }); // -> [1, 3, 5];
     *
     * // get fastest benchmarks
     * Benchmark.filter(benches, 'fastest');
     *
     * // get slowest benchmarks
     * Benchmark.filter(benches, 'slowest');
     *
     * // get benchmarks that completed without erroring
     * Benchmark.filter(benches, 'successful');
     */
    function filter(array, callback, thisArg) {
      if (callback === 'successful') {
        // callback to exclude those that are errored, unrun, or have hz of Infinity
        callback = function(bench) {
          return bench.cycles && _.isFinite(bench.hz);
        };
      }
      else if (callback === 'fastest' || callback === 'slowest') {
        // get successful, sort by period + margin of error, and filter fastest/slowest
        var result = filter(array, 'successful').sort(function(a, b) {
          a = a.stats; b = b.stats;
          return (a.mean + a.moe > b.mean + b.moe ? 1 : -1) * (callback === 'fastest' ? 1 : -1);
        });

        return _.filter(result, function(bench) {
          return result[0].compare(bench) == 0;
        });
      }
      return _.filter(array, callback, thisArg);
    }

    /**
     * Converts a number to a more readable comma-separated string representation.
     *
     * @static
     * @memberOf Benchmark
     * @param {Number} number The number to convert.
     * @returns {String} The more readable string representation.
     */
    function formatNumber(number) {
      number = String(number).split('.');
      return number[0].replace(/(?=(?:\d{3})+$)(?!\b)/g, ',') +
        (number[1] ? '.' + number[1] : '');
    }

    /**
     * Invokes a method on all items in an array.
     *
     * @static
     * @memberOf Benchmark
     * @param {Array} benches Array of benchmarks to iterate over.
     * @param {String|Object} name The name of the method to invoke OR options object.
     * @param {Mixed} [arg1, arg2, ...] Arguments to invoke the method with.
     * @returns {Array} A new array of values returned from each method invoked.
     * @example
     *
     * // invoke `reset` on all benchmarks
     * Benchmark.invoke(benches, 'reset');
     *
     * // invoke `emit` with arguments
     * Benchmark.invoke(benches, 'emit', 'complete', listener);
     *
     * // invoke `run(true)`, treat benchmarks as a queue, and register invoke callbacks
     * Benchmark.invoke(benches, {
     *
     *   // invoke the `run` method
     *   'name': 'run',
     *
     *   // pass a single argument
     *   'args': true,
     *
     *   // treat as queue, removing benchmarks from front of `benches` until empty
     *   'queued': true,
     *
     *   // called before any benchmarks have been invoked.
     *   'onStart': onStart,
     *
     *   // called between invoking benchmarks
     *   'onCycle': onCycle,
     *
     *   // called after all benchmarks have been invoked.
     *   'onComplete': onComplete
     * });
     */
    function invoke(benches, name) {
      var args,
          bench,
          queued,
          index = -1,
          eventProps = { 'currentTarget': benches },
          options = { 'onStart': noop, 'onCycle': noop, 'onComplete': noop },
          result = _.toArray(benches);

      /**
       * Invokes the method of the current object and if synchronous, fetches the next.
       */
      function execute() {
        var listeners,
            async = isAsync(bench);

        if (async) {
          // use `getNext` as the first listener
          bench.on('complete', getNext);
          listeners = bench.events.complete;
          listeners.splice(0, 0, listeners.pop());
        }
        // execute method
        result[index] = _.isFunction(bench && bench[name]) ? bench[name].apply(bench, args) : undefined;
        // if synchronous return true until finished
        return !async && getNext();
      }

      /**
       * Fetches the next bench or executes `onComplete` callback.
       */
      function getNext(event) {
        var cycleEvent,
            last = bench,
            async = isAsync(last);

        if (async) {
          last.off('complete', getNext);
          last.emit('complete');
        }
        // emit "cycle" event
        eventProps.type = 'cycle';
        eventProps.target = last;
        cycleEvent = Event(eventProps);
        options.onCycle.call(benches, cycleEvent);

        // choose next benchmark if not exiting early
        if (!cycleEvent.aborted && raiseIndex() !== false) {
          bench = queued ? benches[0] : result[index];
          if (isAsync(bench)) {
            delay(bench, execute);
          }
          else if (async) {
            // resume execution if previously asynchronous but now synchronous
            while (execute()) { }
          }
          else {
            // continue synchronous execution
            return true;
          }
        } else {
          // emit "complete" event
          eventProps.type = 'complete';
          options.onComplete.call(benches, Event(eventProps));
        }
        // When used as a listener `event.aborted = true` will cancel the rest of
        // the "complete" listeners because they were already called above and when
        // used as part of `getNext` the `return false` will exit the execution while-loop.
        if (event) {
          event.aborted = true;
        } else {
          return false;
        }
      }

      /**
       * Checks if invoking `Benchmark#run` with asynchronous cycles.
       */
      function isAsync(object) {
        // avoid using `instanceof` here because of IE memory leak issues with host objects
        var async = args[0] && args[0].async;
        return Object(object).constructor == Benchmark && name == 'run' &&
          ((async == null ? object.options.async : async) && support.timeout || object.defer);
      }

      /**
       * Raises `index` to the next defined index or returns `false`.
       */
      function raiseIndex() {
        index++;

        // if queued remove the previous bench
        if (queued && index > 0) {
          shift.call(benches);
        }
        // if we reached the last index then return `false`
        return (queued ? benches.length : index < result.length)
          ? index
          : (index = false);
      }

      // juggle arguments
      if (_.isString(name)) {
        // 2 arguments (array, name)
        args = slice.call(arguments, 2);
      } else {
        // 2 arguments (array, options)
        options = _.extend(options, name);
        name = options.name;
        args = _.isArray(args = 'args' in options ? options.args : []) ? args : [args];
        queued = options.queued;
      }

      // start iterating over the array
      if (raiseIndex() !== false) {
        // emit "start" event
        bench = result[index];
        eventProps.type = 'start';
        eventProps.target = bench;
        options.onStart.call(benches, Event(eventProps));

        // end early if the suite was aborted in an "onStart" listener
        if (benches.aborted && benches.constructor == Suite && name == 'run') {
          // emit "cycle" event
          eventProps.type = 'cycle';
          options.onCycle.call(benches, Event(eventProps));
          // emit "complete" event
          eventProps.type = 'complete';
          options.onComplete.call(benches, Event(eventProps));
        }
        // else start
        else {
          if (isAsync(bench)) {
            delay(bench, execute);
          } else {
            while (execute()) { }
          }
        }
      }
      return result;
    }

    /**
     * Creates a string of joined array values or object key-value pairs.
     *
     * @static
     * @memberOf Benchmark
     * @param {Array|Object} object The object to operate on.
     * @param {String} [separator1=','] The separator used between key-value pairs.
     * @param {String} [separator2=': '] The separator used between keys and values.
     * @returns {String} The joined result.
     */
    function join(object, separator1, separator2) {
      var result = [],
          length = (object = Object(object)).length,
          arrayLike = length === length >>> 0;

      separator2 || (separator2 = ': ');
      _.each(object, function(value, key) {
        result.push(arrayLike ? value : key + separator2 + value);
      });
      return result.join(separator1 || ',');
    }

    /*------------------------------------------------------------------------*/

    /**
     * Aborts all benchmarks in the suite.
     *
     * @name abort
     * @memberOf Benchmark.Suite
     * @returns {Object} The suite instance.
     */
    function abortSuite() {
      var event,
          suite = this,
          resetting = calledBy.resetSuite;

      if (suite.running) {
        event = Event('abort');
        suite.emit(event);
        if (!event.cancelled || resetting) {
          // avoid infinite recursion
          calledBy.abortSuite = true;
          suite.reset();
          delete calledBy.abortSuite;

          if (!resetting) {
            suite.aborted = true;
            invoke(suite, 'abort');
          }
        }
      }
      return suite;
    }

    /**
     * Adds a test to the benchmark suite.
     *
     * @memberOf Benchmark.Suite
     * @param {String} name A name to identify the benchmark.
     * @param {Function|String} fn The test to benchmark.
     * @param {Object} [options={}] Options object.
     * @returns {Object} The benchmark instance.
     * @example
     *
     * // basic usage
     * suite.add(fn);
     *
     * // or using a name first
     * suite.add('foo', fn);
     *
     * // or with options
     * suite.add('foo', fn, {
     *   'onCycle': onCycle,
     *   'onComplete': onComplete
     * });
     *
     * // or name and options
     * suite.add('foo', {
     *   'fn': fn,
     *   'onCycle': onCycle,
     *   'onComplete': onComplete
     * });
     *
     * // or options only
     * suite.add({
     *   'name': 'foo',
     *   'fn': fn,
     *   'onCycle': onCycle,
     *   'onComplete': onComplete
     * });
     */
    function add(name, fn, options) {
      var suite = this,
          bench = new Benchmark(name, fn, options),
          event = Event({ 'type': 'add', 'target': bench });

      if (suite.emit(event), !event.cancelled) {
        suite.push(bench);
      }
      return suite;
    }

    /**
     * Creates a new suite with cloned benchmarks.
     *
     * @name clone
     * @memberOf Benchmark.Suite
     * @param {Object} options Options object to overwrite cloned options.
     * @returns {Object} The new suite instance.
     */
    function cloneSuite(options) {
      var suite = this,
          result = new suite.constructor(_.extend({}, suite.options, options));

      // copy own properties
      _.forOwn(suite, function(value, key) {
        if (!_.has(result, key)) {
          result[key] = value && _.isFunction(value.clone)
            ? value.clone()
            : cloneDeep(value);
        }
      });
      return result;
    }

    /**
     * An `Array#filter` like method.
     *
     * @name filter
     * @memberOf Benchmark.Suite
     * @param {Function|String} callback The function/alias called per iteration.
     * @returns {Object} A new suite of benchmarks that passed callback filter.
     */
    function filterSuite(callback) {
      var suite = this,
          result = new suite.constructor;

      result.push.apply(result, filter(suite, callback));
      return result;
    }

    /**
     * Resets all benchmarks in the suite.
     *
     * @name reset
     * @memberOf Benchmark.Suite
     * @returns {Object} The suite instance.
     */
    function resetSuite() {
      var event,
          suite = this,
          aborting = calledBy.abortSuite;

      if (suite.running && !aborting) {
        // no worries, `resetSuite()` is called within `abortSuite()`
        calledBy.resetSuite = true;
        suite.abort();
        delete calledBy.resetSuite;
      }
      // reset if the state has changed
      else if ((suite.aborted || suite.running) &&
          (suite.emit(event = Event('reset')), !event.cancelled)) {
        suite.running = false;
        if (!aborting) {
          invoke(suite, 'reset');
        }
      }
      return suite;
    }

    /**
     * Runs the suite.
     *
     * @name run
     * @memberOf Benchmark.Suite
     * @param {Object} [options={}] Options object.
     * @returns {Object} The suite instance.
     * @example
     *
     * // basic usage
     * suite.run();
     *
     * // or with options
     * suite.run({ 'async': true, 'queued': true });
     */
    function runSuite(options) {
      var suite = this;

      suite.reset();
      suite.running = true;
      options || (options = {});

      invoke(suite, {
        'name': 'run',
        'args': options,
        'queued': options.queued,
        'onStart': function(event) {
          suite.emit(event);
        },
        'onCycle': function(event) {
          var bench = event.target;
          if (bench.error) {
            suite.emit({ 'type': 'error', 'target': bench });
          }
          suite.emit(event);
          event.aborted = suite.aborted;
        },
        'onComplete': function(event) {
          suite.running = false;
          suite.emit(event);
        }
      });
      return suite;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Executes all registered listeners of the specified event type.
     *
     * @memberOf Benchmark, Benchmark.Suite
     * @param {String|Object} type The event type or object.
     * @returns {Mixed} Returns the return value of the last listener executed.
     */
    function emit(type) {
      var listeners,
          object = this,
          event = Event(type),
          events = object.events,
          args = (arguments[0] = event, arguments);

      event.currentTarget || (event.currentTarget = object);
      event.target || (event.target = object);
      delete event.result;

      if (events && (listeners = _.has(events, event.type) && events[event.type])) {
        _.each(listeners.slice(), function(listener) {
          if ((event.result = listener.apply(object, args)) === false) {
            event.cancelled = true;
          }
          return !event.aborted;
        });
      }
      return event.result;
    }

    /**
     * Returns an array of event listeners for a given type that can be manipulated
     * to add or remove listeners.
     *
     * @memberOf Benchmark, Benchmark.Suite
     * @param {String} type The event type.
     * @returns {Array} The listeners array.
     */
    function listeners(type) {
      var object = this,
          events = object.events || (object.events = {});

      return _.has(events, type) ? events[type] : (events[type] = []);
    }

    /**
     * Unregisters a listener for the specified event type(s),
     * or unregisters all listeners for the specified event type(s),
     * or unregisters all listeners for all event types.
     *
     * @memberOf Benchmark, Benchmark.Suite
     * @param {String} [type] The event type.
     * @param {Function} [listener] The function to unregister.
     * @returns {Object} The benchmark instance.
     * @example
     *
     * // unregister a listener for an event type
     * bench.off('cycle', listener);
     *
     * // unregister a listener for multiple event types
     * bench.off('start cycle', listener);
     *
     * // unregister all listeners for an event type
     * bench.off('cycle');
     *
     * // unregister all listeners for multiple event types
     * bench.off('start cycle complete');
     *
     * // unregister all listeners for all event types
     * bench.off();
     */
    function off(type, listener) {
      var object = this,
          events = object.events;

      if (!events) {
        return object;
      }
      _.each(type ? type.split(' ') : events, function(listeners, type) {
        var index;
        if (typeof listeners == 'string') {
          type = listeners;
          listeners = _.has(events, type) && events[type];
        }
        if (listeners) {
          if (listener) {
            index = _.indexOf(listeners, listener);
            if (index > -1) {
              listeners.splice(index, 1);
            }
          } else {
            listeners.length = 0;
          }
        }
      });
      return object;
    }

    /**
     * Registers a listener for the specified event type(s).
     *
     * @memberOf Benchmark, Benchmark.Suite
     * @param {String} type The event type.
     * @param {Function} listener The function to register.
     * @returns {Object} The benchmark instance.
     * @example
     *
     * // register a listener for an event type
     * bench.on('cycle', listener);
     *
     * // register a listener for multiple event types
     * bench.on('start cycle', listener);
     */
    function on(type, listener) {
      var object = this,
          events = object.events || (object.events = {});

      _.each(type.split(' '), function(type) {
        (_.has(events, type)
          ? events[type]
          : (events[type] = [])
        ).push(listener);
      });
      return object;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Aborts the benchmark without recording times.
     *
     * @memberOf Benchmark
     * @returns {Object} The benchmark instance.
     */
    function abort() {
      var event,
          bench = this,
          resetting = calledBy.reset;

      if (bench.running) {
        event = Event('abort');
        bench.emit(event);
        if (!event.cancelled || resetting) {
          // avoid infinite recursion
          calledBy.abort = true;
          bench.reset();
          delete calledBy.abort;

          if (support.timeout) {
            clearTimeout(bench._timerId);
            delete bench._timerId;
          }
          if (!resetting) {
            bench.aborted = true;
            bench.running = false;
          }
        }
      }
      return bench;
    }

    /**
     * Creates a new benchmark using the same test and options.
     *
     * @memberOf Benchmark
     * @param {Object} options Options object to overwrite cloned options.
     * @returns {Object} The new benchmark instance.
     * @example
     *
     * var bizarro = bench.clone({
     *   'name': 'doppelganger'
     * });
     */
    function clone(options) {
      var bench = this,
          sample = bench.stats.sample,
          result = new bench.constructor(_.extend({}, bench, options));

      // correct the `options` object
      result.options = _.extend({}, bench.options, options);

      // copy own custom properties
      _.forOwn(bench, function(value, key) {
        if (!_.has(result, key)) {
          result[key] = cloneDeep(value);
        }
      });

      return result;
    }

    /**
     * Determines if a benchmark is faster than another.
     *
     * @memberOf Benchmark
     * @param {Object} other The benchmark to compare.
     * @returns {Number} Returns `-1` if slower, `1` if faster, and `0` if indeterminate.
     */
    function compare(other) {
      var critical,
          zStat,
          bench = this,
          sample1 = bench.stats.sample,
          sample2 = other.stats.sample,
          size1 = sample1.length,
          size2 = sample2.length,
          maxSize = max(size1, size2),
          minSize = min(size1, size2),
          u1 = getU(sample1, sample2),
          u2 = getU(sample2, sample1),
          u = min(u1, u2);

      function getScore(xA, sampleB) {
        return _.reduce(sampleB, function(total, xB) {
          return total + (xB > xA ? 0 : xB < xA ? 1 : 0.5);
        }, 0);
      }

      function getU(sampleA, sampleB) {
        return _.reduce(sampleA, function(total, xA) {
          return total + getScore(xA, sampleB);
        }, 0);
      }

      function getZ(u) {
        return (u - ((size1 * size2) / 2)) / sqrt((size1 * size2 * (size1 + size2 + 1)) / 12);
      }

      // exit early if comparing the same benchmark
      if (bench == other) {
        return 0;
      }
      // reject the null hyphothesis the two samples come from the
      // same population (i.e. have the same median) if...
      if (size1 + size2 > 30) {
        // ...the z-stat is greater than 1.96 or less than -1.96
        // http://www.statisticslectures.com/topics/mannwhitneyu/
        zStat = getZ(u);
        return abs(zStat) > 1.96 ? (zStat > 0 ? -1 : 1) : 0;
      }
      // ...the U value is less than or equal the critical U value
      // http://www.geoib.com/mann-whitney-u-test.html
      critical = maxSize < 5 || minSize < 3 ? 0 : uTable[maxSize][minSize - 3];
      return u <= critical ? (u == u1 ? 1 : -1) : 0;
    }

    /**
     * Reset properties and abort if running.
     *
     * @memberOf Benchmark
     * @returns {Object} The benchmark instance.
     */
    function reset() {
      var data,
          event,
          bench = this,
          index = 0,
          changes = { 'length': 0 },
          queue = { 'length': 0 };

      if (bench.running && !calledBy.abort) {
        // no worries, `reset()` is called within `abort()`
        calledBy.reset = true;
        bench.abort();
        delete calledBy.reset;
      }
      else {
        // a non-recursive solution to check if properties have changed
        // http://www.jslab.dk/articles/non.recursive.preorder.traversal.part4
        data = { 'destination': bench, 'source': _.extend({}, bench.constructor.prototype, bench.options) };
        do {
          _.forOwn(data.source, function(value, key) {
            var changed,
                destination = data.destination,
                currValue = destination[key];

            if (value && typeof value == 'object') {
              if (_.isArray(value)) {
                // check if an array value has changed to a non-array value
                if (!_.isArray(currValue)) {
                  changed = currValue = [];
                }
                // or has changed its length
                if (currValue.length != value.length) {
                  changed = currValue = currValue.slice(0, value.length);
                  currValue.length = value.length;
                }
              }
              // check if an object has changed to a non-object value
              else if (!currValue || typeof currValue != 'object') {
                changed = currValue = {};
              }
              // register a changed object
              if (changed) {
                changes[changes.length++] = { 'destination': destination, 'key': key, 'value': currValue };
              }
              queue[queue.length++] = { 'destination': currValue, 'source': value };
            }
            // register a changed primitive
            else if (value !== currValue && !(value == null || _.isFunction(value))) {
              changes[changes.length++] = { 'destination': destination, 'key': key, 'value': value };
            }
          });
        }
        while ((data = queue[index++]));

        // if changed emit the `reset` event and if it isn't cancelled reset the benchmark
        if (changes.length && (bench.emit(event = Event('reset')), !event.cancelled)) {
          _.each(changes, function(data) {
            data.destination[data.key] = data.value;
          });
        }
      }
      return bench;
    }

    /**
     * Displays relevant benchmark information when coerced to a string.
     *
     * @name toString
     * @memberOf Benchmark
     * @returns {String} A string representation of the benchmark instance.
     */
    function toStringBench() {
      var bench = this,
          error = bench.error,
          hz = bench.hz,
          id = bench.id,
          stats = bench.stats,
          size = stats.sample.length,
          pm = support.java ? '+/-' : '\xb1',
          result = bench.name || (_.isNaN(id) ? id : '<Test #' + id + '>');

      if (error) {
        result += ': ' + join(error);
      } else {
        result += ' x ' + formatNumber(hz.toFixed(hz < 100 ? 2 : 0)) + ' ops/sec ' + pm +
          stats.rme.toFixed(2) + '% (' + size + ' run' + (size == 1 ? '' : 's') + ' sampled)';
      }
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clocks the time taken to execute a test per cycle (secs).
     *
     * @private
     * @param {Object} bench The benchmark instance.
     * @returns {Number} The time taken.
     */
    function clock() {
      var applet,
          options = Benchmark.options,
          timers = [{ 'ns': timer.ns, 'res': max(0.0015, getRes('ms')), 'unit': 'ms' }];

      var templateData = {
        'begin': interpolate('s#=new n#'),
        'end': interpolate('r#=(new n#-s#)/1e3'),
        'uid': uid
      };

      // lazy define for hi-res timers
      clock = function(clone) {
        var deferred;
        if (clone instanceof Deferred) {
          deferred = clone;
          clone = deferred.benchmark;
        }

        var bench = clone._original,
            fn = bench.fn,
            fnArg = deferred ? getFirstArgument(fn) || 'deferred' : '',
            stringable = isStringable(fn);

        _.extend(templateData, {
          'setup': getSource(bench.setup, interpolate('m#.setup()')),
          'fn': getSource(fn, interpolate('m#.fn(' + fnArg + ')')),
          'fnArg': fnArg,
          'teardown': getSource(bench.teardown, interpolate('m#.teardown()'))
        });

        var count = bench.count = clone.count,
            decompilable = support.decompilation || stringable,
            id = bench.id,
            isEmpty = !(templateData.fn || stringable),
            name = bench.name || (typeof id == 'number' ? '<Test #' + id + '>' : id),
            ns = timer.ns,
            result = 0;

        // init `minTime` if needed
        clone.minTime = bench.minTime || (bench.minTime = bench.options.minTime = options.minTime);

        // repair nanosecond timer
        // (some Chrome builds erase the `ns` variable after millions of executions)
        if (applet) {
          try {
            ns.nanoTime();
          } catch(e) {
            // use non-element to avoid issues with libs that augment them
            ns = timer.ns = new applet.Packages.nano;
          }
        }

        // Compile in setup/teardown functions and the test loop.
        // Create a new compiled test, instead of using the cached `bench.compiled`,
        // to avoid potential engine optimizations enabled over the life of the test.
        var compiled = bench.compiled = createCompiled(
          deferred
            ? 'var d#=this,${fnArg}=d#,m#=d#.benchmark._original,f#=m#.fn,su#=m#.setup,td#=m#.teardown;' +
              // when `deferred.cycles` is `0` then...
              'if(!d#.cycles){' +
              // set `deferred.fn`
              'd#.fn=function(){var ${fnArg}=d#;if(typeof f#=="function"){try{${fn}\n}catch(e#){f#(d#)}}else{${fn}\n}};' +
              // set `deferred.teardown`
              'd#.teardown=function(){d#.cycles=0;if(typeof td#=="function"){try{${teardown}\n}catch(e#){td#()}}else{${teardown}\n}};' +
              // execute the benchmark's `setup`
              'if(typeof su#=="function"){try{${setup}\n}catch(e#){su#()}}else{${setup}\n};' +
              // start timer
              't#.start(d#);' +
              // execute `deferred.fn` and return a dummy object
              '}d#.fn();return{}'

            : 'var r#,s#,m#=this,f#=m#.fn,i#=m#.count,n#=t#.ns;${setup}\n${begin};' +
              'while(i#--){${fn}\n}${end};${teardown}\nreturn{elapsed:r#,uid:"${uid}"}'
        );

        try {
          if (isEmpty) {
            // Firefox may remove dead code from Function#toString results
            // http://bugzil.la/536085
            throw new Error('The test "' + name + '" is empty. This may be the result of dead code removal.');
          }
          else if (!deferred) {
            // pretest to determine if compiled code is exits early, usually by a
            // rogue `return` statement, by checking for a return object with the uid
            bench.count = 1;
            compiled = (compiled.call(bench, context, timer) || {}).uid == uid && compiled;
            bench.count = count;
          }
        } catch(e) {
          compiled = null;
          clone.error = e || new Error(String(e));
          bench.count = count;
        }
        // fallback when a test exits early or errors during pretest
        if (decompilable && !compiled && !deferred && !isEmpty) {
          compiled = createCompiled(
            (clone.error && !stringable
              ? 'var r#,s#,m#=this,f#=m#.fn,i#=m#.count'
              : 'function f#(){${fn}\n}var r#,s#,m#=this,i#=m#.count'
            ) +
            ',n#=t#.ns;${setup}\n${begin};m#.f#=f#;while(i#--){m#.f#()}${end};' +
            'delete m#.f#;${teardown}\nreturn{elapsed:r#}'
          );

          try {
            // pretest one more time to check for errors
            bench.count = 1;
            compiled.call(bench, context, timer);
            bench.compiled = compiled;
            bench.count = count;
            delete clone.error;
          }
          catch(e) {
            bench.count = count;
            if (clone.error) {
              compiled = null;
            } else {
              bench.compiled = compiled;
              clone.error = e || new Error(String(e));
            }
          }
        }
        // assign `compiled` to `clone` before calling in case a deferred benchmark
        // immediately calls `deferred.resolve()`
        clone.compiled = compiled;
        // if no errors run the full test loop
        if (!clone.error) {
          result = compiled.call(deferred || bench, context, timer).elapsed;
        }
        return result;
      };

      /*----------------------------------------------------------------------*/

      /**
       * Creates a compiled function from the given function `body`.
       */
      function createCompiled(body) {
        return createFunction(
          interpolate('window,t#'),
          'var global = window, clearTimeout = global.clearTimeout, setTimeout = global.setTimeout;\n' +
          interpolate(body)
        );
      }

      /**
       * Gets the current timer's minimum resolution (secs).
       */
      function getRes(unit) {
        var measured,
            begin,
            count = 30,
            divisor = 1e3,
            ns = timer.ns,
            sample = [];

        // get average smallest measurable time
        while (count--) {
          if (unit == 'us') {
            divisor = 1e6;
            if (ns.stop) {
              ns.start();
              while (!(measured = ns.microseconds())) { }
            } else if (ns[perfName]) {
              divisor = 1e3;
              measured = Function('n', 'var r,s=n.' + perfName + '();while(!(r=n.' + perfName + '()-s)){};return r')(ns);
            } else {
              begin = ns();
              while (!(measured = ns() - begin)) { }
            }
          }
          else if (unit == 'ns') {
            divisor = 1e9;
            if (ns.nanoTime) {
              begin = ns.nanoTime();
              while (!(measured = ns.nanoTime() - begin)) { }
            } else {
              begin = (begin = ns())[0] + (begin[1] / divisor);
              while (!(measured = ((measured = ns())[0] + (measured[1] / divisor)) - begin)) { }
              divisor = 1;
            }
          }
          else {
            begin = new ns;
            while (!(measured = new ns - begin)) { }
          }
          // check for broken timers (nanoTime may have issues)
          // http://alivebutsleepy.srnet.cz/unreliable-system-nanotime/
          if (measured > 0) {
            sample.push(measured);
          } else {
            sample.push(Infinity);
            break;
          }
        }
        // convert to seconds
        return getMean(sample) / divisor;
      }

      /**
       * Interpolates a given template string.
       */
      function interpolate(string) {
        // replaces all occurrences of `#` with a unique number and template tokens with content
        return _.template(string.replace(/\#/g, /\d+/.exec(uid)), templateData || {});
      }

      /*----------------------------------------------------------------------*/

      // detect nanosecond support from a Java applet
      _.each(doc && doc.applets || [], function(element) {
        return !(timer.ns = applet = 'nanoTime' in element && element);
      });

      // check type in case Safari returns an object instead of a number
      try {
        if (typeof timer.ns.nanoTime() == 'number') {
          timers.push({ 'ns': timer.ns, 'res': getRes('ns'), 'unit': 'ns' });
        }
      } catch(e) { }

      // detect Chrome's microsecond timer:
      // enable benchmarking via the --enable-benchmarking command
      // line switch in at least Chrome 7 to use chrome.Interval
      try {
        if ((timer.ns = new (context.chrome || context.chromium).Interval)) {
          timers.push({ 'ns': timer.ns, 'res': getRes('us'), 'unit': 'us' });
        }
      } catch(e) { }

      // detect `performance.now` microsecond resolution timer
      if ((timer.ns = perfName && perfObject)) {
        timers.push({ 'ns': timer.ns, 'res': getRes('us'), 'unit': 'us' });
      }

      // detect Node's nanosecond resolution timer available in Node >= 0.8
      if (processObject && typeof (timer.ns = processObject.hrtime) == 'function') {
        timers.push({ 'ns': timer.ns, 'res': getRes('ns'), 'unit': 'ns' });
      }

      // detect Wade Simmons' Node microtime module
      if (microtimeObject && typeof (timer.ns = microtimeObject.now) == 'function') {
        timers.push({ 'ns': timer.ns,  'res': getRes('us'), 'unit': 'us' });
      }

      // pick timer with highest resolution
      timer = _.reduce(timers, function(timer, other) {
        return other.res < timer.res ? other : timer;
      });

      // remove unused applet
      if (timer.unit != 'ns' && applet) {
        applet = destroyElement(applet);
      }
      // error if there are no working timers
      if (timer.res == Infinity) {
        throw new Error('Benchmark.js was unable to find a working timer.');
      }
      // use API of chosen timer
      if (timer.unit == 'ns') {
        if (timer.ns.nanoTime) {
          _.extend(templateData, {
            'begin': interpolate('s#=n#.nanoTime()'),
            'end': interpolate('r#=(n#.nanoTime()-s#)/1e9')
          });
        } else {
          _.extend(templateData, {
            'begin': interpolate('s#=n#()'),
            'end': interpolate('r#=n#(s#);r#=r#[0]+(r#[1]/1e9)')
          });
        }
      }
      else if (timer.unit == 'us') {
        if (timer.ns.stop) {
          _.extend(templateData, {
            'begin': interpolate('s#=n#.start()'),
            'end': interpolate('r#=n#.microseconds()/1e6')
          });
        } else if (perfName) {
          _.extend(templateData, {
            'begin': interpolate('s#=n#.' + perfName + '()'),
            'end': interpolate('r#=(n#.' + perfName + '()-s#)/1e3')
          });
        } else {
          _.extend(templateData, {
            'begin': interpolate('s#=n#()'),
            'end': interpolate('r#=(n#()-s#)/1e6')
          });
        }
      }

      // define `timer` methods
      timer.start = createFunction(
        interpolate('o#'),
        interpolate('var n#=this.ns,${begin};o#.elapsed=0;o#.timeStamp=s#')
      );

      timer.stop = createFunction(
        interpolate('o#'),
        interpolate('var n#=this.ns,s#=o#.timeStamp,${end};o#.elapsed=r#')
      );

      // resolve time span required to achieve a percent uncertainty of at most 1%
      // http://spiff.rit.edu/classes/phys273/uncert/uncert.html
      options.minTime || (options.minTime = max(timer.res / 2 / 0.01, 0.05));
      return clock.apply(null, arguments);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Computes stats on benchmark results.
     *
     * @private
     * @param {Object} bench The benchmark instance.
     * @param {Object} options The options object.
     */
    function compute(bench, options) {
      options || (options = {});

      var async = options.async,
          elapsed = 0,
          initCount = bench.initCount,
          minSamples = bench.minSamples,
          queue = [],
          sample = bench.stats.sample;

      /**
       * Adds a clone to the queue.
       */
      function enqueue() {
        queue.push(bench.clone({
          '_original': bench,
          'events': {
            'abort': [update],
            'cycle': [update],
            'error': [update],
            'start': [update]
          }
        }));
      }

      /**
       * Updates the clone/original benchmarks to keep their data in sync.
       */
      function update(event) {
        var clone = this,
            type = event.type;

        if (bench.running) {
          if (type == 'start') {
            // Note: `clone.minTime` prop is inited in `clock()`
            clone.count = bench.initCount;
          }
          else {
            if (type == 'error') {
              bench.error = clone.error;
            }
            if (type == 'abort') {
              bench.abort();
              bench.emit('cycle');
            } else {
              event.currentTarget = event.target = bench;
              bench.emit(event);
            }
          }
        } else if (bench.aborted) {
          // clear abort listeners to avoid triggering bench's abort/cycle again
          clone.events.abort.length = 0;
          clone.abort();
        }
      }

      /**
       * Determines if more clones should be queued or if cycling should stop.
       */
      function evaluate(event) {
        var critical,
            df,
            mean,
            moe,
            rme,
            sd,
            sem,
            variance,
            clone = event.target,
            done = bench.aborted,
            now = +new Date,
            size = sample.push(clone.times.period),
            maxedOut = size >= minSamples && (elapsed += now - clone.times.timeStamp) / 1e3 > bench.maxTime,
            times = bench.times,
            varOf = function(sum, x) { return sum + pow(x - mean, 2); };

        // exit early for aborted or unclockable tests
        if (done || clone.hz == Infinity) {
          maxedOut = !(size = sample.length = queue.length = 0);
        }

        if (!done) {
          // sample mean (estimate of the population mean)
          mean = getMean(sample);
          // sample variance (estimate of the population variance)
          variance = _.reduce(sample, varOf, 0) / (size - 1) || 0;
          // sample standard deviation (estimate of the population standard deviation)
          sd = sqrt(variance);
          // standard error of the mean (a.k.a. the standard deviation of the sampling distribution of the sample mean)
          sem = sd / sqrt(size);
          // degrees of freedom
          df = size - 1;
          // critical value
          critical = tTable[Math.round(df) || 1] || tTable.infinity;
          // margin of error
          moe = sem * critical;
          // relative margin of error
          rme = (moe / mean) * 100 || 0;

          _.extend(bench.stats, {
            'deviation': sd,
            'mean': mean,
            'moe': moe,
            'rme': rme,
            'sem': sem,
            'variance': variance
          });

          // Abort the cycle loop when the minimum sample size has been collected
          // and the elapsed time exceeds the maximum time allowed per benchmark.
          // We don't count cycle delays toward the max time because delays may be
          // increased by browsers that clamp timeouts for inactive tabs.
          // https://developer.mozilla.org/en/window.setTimeout#Inactive_tabs
          if (maxedOut) {
            // reset the `initCount` in case the benchmark is rerun
            bench.initCount = initCount;
            bench.running = false;
            done = true;
            times.elapsed = (now - times.timeStamp) / 1e3;
          }
          if (bench.hz != Infinity) {
            bench.hz = 1 / mean;
            times.cycle = mean * bench.count;
            times.period = mean;
          }
        }
        // if time permits, increase sample size to reduce the margin of error
        if (queue.length < 2 && !maxedOut) {
          enqueue();
        }
        // abort the invoke cycle when done
        event.aborted = done;
      }

      // init queue and begin
      enqueue();
      invoke(queue, {
        'name': 'run',
        'args': { 'async': async },
        'queued': true,
        'onCycle': evaluate,
        'onComplete': function() { bench.emit('complete'); }
      });
    }

    /*------------------------------------------------------------------------*/

    /**
     * Cycles a benchmark until a run `count` can be established.
     *
     * @private
     * @param {Object} clone The cloned benchmark instance.
     * @param {Object} options The options object.
     */
    function cycle(clone, options) {
      options || (options = {});

      var deferred;
      if (clone instanceof Deferred) {
        deferred = clone;
        clone = clone.benchmark;
      }

      var clocked,
          cycles,
          divisor,
          event,
          minTime,
          period,
          async = options.async,
          bench = clone._original,
          count = clone.count,
          times = clone.times;

      // continue, if not aborted between cycles
      if (clone.running) {
        // `minTime` is set to `Benchmark.options.minTime` in `clock()`
        cycles = ++clone.cycles;
        clocked = deferred ? deferred.elapsed : clock(clone);
        minTime = clone.minTime;

        if (cycles > bench.cycles) {
          bench.cycles = cycles;
        }
        if (clone.error) {
          event = Event('error');
          event.message = clone.error;
          clone.emit(event);
          if (!event.cancelled) {
            clone.abort();
          }
        }
      }

      // continue, if not errored
      if (clone.running) {
        // time taken to complete last test cycle
        bench.times.cycle = times.cycle = clocked;
        // seconds per operation
        period = bench.times.period = times.period = clocked / count;
        // ops per second
        bench.hz = clone.hz = 1 / period;
        // avoid working our way up to this next time
        bench.initCount = clone.initCount = count;
        // do we need to do another cycle?
        clone.running = clocked < minTime;

        if (clone.running) {
          // tests may clock at `0` when `initCount` is a small number,
          // to avoid that we set its count to something a bit higher
          if (!clocked && (divisor = divisors[clone.cycles]) != null) {
            count = floor(4e6 / divisor);
          }
          // calculate how many more iterations it will take to achive the `minTime`
          if (count <= clone.count) {
            count += Math.ceil((minTime - clocked) / period);
          }
          clone.running = count != Infinity;
        }
      }
      // should we exit early?
      event = Event('cycle');
      clone.emit(event);
      if (event.aborted) {
        clone.abort();
      }
      // figure out what to do next
      if (clone.running) {
        // start a new cycle
        clone.count = count;
        if (deferred) {
          clone.compiled.call(deferred, context, timer);
        } else if (async) {
          delay(clone, function() { cycle(clone, options); });
        } else {
          cycle(clone);
        }
      }
      else {
        // fix TraceMonkey bug associated with clock fallbacks
        // http://bugzil.la/509069
        if (support.browser) {
          runScript(uid + '=1;delete ' + uid);
        }
        // done
        clone.emit('complete');
      }
    }

    /*------------------------------------------------------------------------*/

    /**
     * Runs the benchmark.
     *
     * @memberOf Benchmark
     * @param {Object} [options={}] Options object.
     * @returns {Object} The benchmark instance.
     * @example
     *
     * // basic usage
     * bench.run();
     *
     * // or with options
     * bench.run({ 'async': true });
     */
    function run(options) {
      var bench = this,
          event = Event('start');

      // set `running` to `false` so `reset()` won't call `abort()`
      bench.running = false;
      bench.reset();
      bench.running = true;

      bench.count = bench.initCount;
      bench.times.timeStamp = +new Date;
      bench.emit(event);

      if (!event.cancelled) {
        options = { 'async': ((options = options && options.async) == null ? bench.async : options) && support.timeout };

        // for clones created within `compute()`
        if (bench._original) {
          if (bench.defer) {
            Deferred(bench);
          } else {
            cycle(bench, options);
          }
        }
        // for original benchmarks
        else {
          compute(bench, options);
        }
      }
      return bench;
    }

    /*------------------------------------------------------------------------*/

    // Firefox 1 erroneously defines variable and argument names of functions on
    // the function itself as non-configurable properties with `undefined` values.
    // The bugginess continues as the `Benchmark` constructor has an argument
    // named `options` and Firefox 1 will not assign a value to `Benchmark.options`,
    // making it non-writable in the process, unless it is the first property
    // assigned by for-in loop of `_.extend()`.
    _.extend(Benchmark, {

      /**
       * The default options copied by benchmark instances.
       *
       * @static
       * @memberOf Benchmark
       * @type Object
       */
      'options': {

        /**
         * A flag to indicate that benchmark cycles will execute asynchronously
         * by default.
         *
         * @memberOf Benchmark.options
         * @type Boolean
         */
        'async': false,

        /**
         * A flag to indicate that the benchmark clock is deferred.
         *
         * @memberOf Benchmark.options
         * @type Boolean
         */
        'defer': false,

        /**
         * The delay between test cycles (secs).
         * @memberOf Benchmark.options
         * @type Number
         */
        'delay': 0.005,

        /**
         * Displayed by Benchmark#toString when a `name` is not available
         * (auto-generated if absent).
         *
         * @memberOf Benchmark.options
         * @type String
         */
        'id': undefined,

        /**
         * The default number of times to execute a test on a benchmark's first cycle.
         *
         * @memberOf Benchmark.options
         * @type Number
         */
        'initCount': 1,

        /**
         * The maximum time a benchmark is allowed to run before finishing (secs).
         *
         * Note: Cycle delays aren't counted toward the maximum time.
         *
         * @memberOf Benchmark.options
         * @type Number
         */
        'maxTime': 5,

        /**
         * The minimum sample size required to perform statistical analysis.
         *
         * @memberOf Benchmark.options
         * @type Number
         */
        'minSamples': 5,

        /**
         * The time needed to reduce the percent uncertainty of measurement to 1% (secs).
         *
         * @memberOf Benchmark.options
         * @type Number
         */
        'minTime': 0,

        /**
         * The name of the benchmark.
         *
         * @memberOf Benchmark.options
         * @type String
         */
        'name': undefined,

        /**
         * An event listener called when the benchmark is aborted.
         *
         * @memberOf Benchmark.options
         * @type Function
         */
        'onAbort': undefined,

        /**
         * An event listener called when the benchmark completes running.
         *
         * @memberOf Benchmark.options
         * @type Function
         */
        'onComplete': undefined,

        /**
         * An event listener called after each run cycle.
         *
         * @memberOf Benchmark.options
         * @type Function
         */
        'onCycle': undefined,

        /**
         * An event listener called when a test errors.
         *
         * @memberOf Benchmark.options
         * @type Function
         */
        'onError': undefined,

        /**
         * An event listener called when the benchmark is reset.
         *
         * @memberOf Benchmark.options
         * @type Function
         */
        'onReset': undefined,

        /**
         * An event listener called when the benchmark starts running.
         *
         * @memberOf Benchmark.options
         * @type Function
         */
        'onStart': undefined
      },

      /**
       * Platform object with properties describing things like browser name,
       * version, and operating system.
       *
       * @static
       * @memberOf Benchmark
       * @type Object
       */
      'platform': context.platform || req('platform') || ({
        'description': context.navigator && context.navigator.userAgent || null,
        'layout': null,
        'product': null,
        'name': null,
        'manufacturer': null,
        'os': null,
        'prerelease': null,
        'version': null,
        'toString': function() {
          return this.description || '';
        }
      }),

      /**
       * The semantic version number.
       *
       * @static
       * @memberOf Benchmark
       * @type String
       */
      'version': '1.0.0'
    });

    _.extend(Benchmark, {
      'filter': filter,
      'formatNumber': formatNumber,
      'invoke': invoke,
      'join': join,
      'runInContext': runInContext,
      'support': support
    });

    /*------------------------------------------------------------------------*/

    _.extend(Benchmark.prototype, {

      /**
       * The number of times a test was executed.
       *
       * @memberOf Benchmark
       * @type Number
       */
      'count': 0,

      /**
       * The number of cycles performed while benchmarking.
       *
       * @memberOf Benchmark
       * @type Number
       */
      'cycles': 0,

      /**
       * The number of executions per second.
       *
       * @memberOf Benchmark
       * @type Number
       */
      'hz': 0,

      /**
       * The compiled test function.
       *
       * @memberOf Benchmark
       * @type Function|String
       */
      'compiled': undefined,

      /**
       * The error object if the test failed.
       *
       * @memberOf Benchmark
       * @type Object
       */
      'error': undefined,

      /**
       * The test to benchmark.
       *
       * @memberOf Benchmark
       * @type Function|String
       */
      'fn': undefined,

      /**
       * A flag to indicate if the benchmark is aborted.
       *
       * @memberOf Benchmark
       * @type Boolean
       */
      'aborted': false,

      /**
       * A flag to indicate if the benchmark is running.
       *
       * @memberOf Benchmark
       * @type Boolean
       */
      'running': false,

      /**
       * Compiled into the test and executed immediately **before** the test loop.
       *
       * @memberOf Benchmark
       * @type Function|String
       * @example
       *
       * // basic usage
       * var bench = Benchmark({
       *   'setup': function() {
       *     var c = this.count,
       *         element = document.getElementById('container');
       *     while (c--) {
       *       element.appendChild(document.createElement('div'));
       *     }
       *   },
       *   'fn': function() {
       *     element.removeChild(element.lastChild);
       *   }
       * });
       *
       * // compiles to something like:
       * var c = this.count,
       *     element = document.getElementById('container');
       * while (c--) {
       *   element.appendChild(document.createElement('div'));
       * }
       * var start = new Date;
       * while (count--) {
       *   element.removeChild(element.lastChild);
       * }
       * var end = new Date - start;
       *
       * // or using strings
       * var bench = Benchmark({
       *   'setup': '\
       *     var a = 0;\n\
       *     (function() {\n\
       *       (function() {\n\
       *         (function() {',
       *   'fn': 'a += 1;',
       *   'teardown': '\
       *          }())\n\
       *        }())\n\
       *      }())'
       * });
       *
       * // compiles to something like:
       * var a = 0;
       * (function() {
       *   (function() {
       *     (function() {
       *       var start = new Date;
       *       while (count--) {
       *         a += 1;
       *       }
       *       var end = new Date - start;
       *     }())
       *   }())
       * }())
       */
      'setup': noop,

      /**
       * Compiled into the test and executed immediately **after** the test loop.
       *
       * @memberOf Benchmark
       * @type Function|String
       */
      'teardown': noop,

      /**
       * An object of stats including mean, margin or error, and standard deviation.
       *
       * @memberOf Benchmark
       * @type Object
       */
      'stats': {

        /**
         * The margin of error.
         *
         * @memberOf Benchmark#stats
         * @type Number
         */
        'moe': 0,

        /**
         * The relative margin of error (expressed as a percentage of the mean).
         *
         * @memberOf Benchmark#stats
         * @type Number
         */
        'rme': 0,

        /**
         * The standard error of the mean.
         *
         * @memberOf Benchmark#stats
         * @type Number
         */
        'sem': 0,

        /**
         * The sample standard deviation.
         *
         * @memberOf Benchmark#stats
         * @type Number
         */
        'deviation': 0,

        /**
         * The sample arithmetic mean (secs).
         *
         * @memberOf Benchmark#stats
         * @type Number
         */
        'mean': 0,

        /**
         * The array of sampled periods.
         *
         * @memberOf Benchmark#stats
         * @type Array
         */
        'sample': [],

        /**
         * The sample variance.
         *
         * @memberOf Benchmark#stats
         * @type Number
         */
        'variance': 0
      },

      /**
       * An object of timing data including cycle, elapsed, period, start, and stop.
       *
       * @memberOf Benchmark
       * @type Object
       */
      'times': {

        /**
         * The time taken to complete the last cycle (secs).
         *
         * @memberOf Benchmark#times
         * @type Number
         */
        'cycle': 0,

        /**
         * The time taken to complete the benchmark (secs).
         *
         * @memberOf Benchmark#times
         * @type Number
         */
        'elapsed': 0,

        /**
         * The time taken to execute the test once (secs).
         *
         * @memberOf Benchmark#times
         * @type Number
         */
        'period': 0,

        /**
         * A timestamp of when the benchmark started (ms).
         *
         * @memberOf Benchmark#times
         * @type Number
         */
        'timeStamp': 0
      }
    });

    _.extend(Benchmark.prototype, {
      'abort': abort,
      'clone': clone,
      'compare': compare,
      'emit': emit,
      'listeners': listeners,
      'off': off,
      'on': on,
      'reset': reset,
      'run': run,
      'toString': toStringBench
    });

    /*------------------------------------------------------------------------*/

    _.extend(Deferred.prototype, {

      /**
       * The deferred benchmark instance.
       *
       * @memberOf Benchmark.Deferred
       * @type Object
       */
      'benchmark': null,

      /**
       * The number of deferred cycles performed while benchmarking.
       *
       * @memberOf Benchmark.Deferred
       * @type Number
       */
      'cycles': 0,

      /**
       * The time taken to complete the deferred benchmark (secs).
       *
       * @memberOf Benchmark.Deferred
       * @type Number
       */
      'elapsed': 0,

      /**
       * A timestamp of when the deferred benchmark started (ms).
       *
       * @memberOf Benchmark.Deferred
       * @type Number
       */
      'timeStamp': 0
    });

    _.extend(Deferred.prototype, {
      'resolve': resolve
    });

    /*------------------------------------------------------------------------*/

    _.extend(Event.prototype, {

      /**
       * A flag to indicate if the emitters listener iteration is aborted.
       *
       * @memberOf Benchmark.Event
       * @type Boolean
       */
      'aborted': false,

      /**
       * A flag to indicate if the default action is cancelled.
       *
       * @memberOf Benchmark.Event
       * @type Boolean
       */
      'cancelled': false,

      /**
       * The object whose listeners are currently being processed.
       *
       * @memberOf Benchmark.Event
       * @type Object
       */
      'currentTarget': undefined,

      /**
       * The return value of the last executed listener.
       *
       * @memberOf Benchmark.Event
       * @type Mixed
       */
      'result': undefined,

      /**
       * The object to which the event was originally emitted.
       *
       * @memberOf Benchmark.Event
       * @type Object
       */
      'target': undefined,

      /**
       * A timestamp of when the event was created (ms).
       *
       * @memberOf Benchmark.Event
       * @type Number
       */
      'timeStamp': 0,

      /**
       * The event type.
       *
       * @memberOf Benchmark.Event
       * @type String
       */
      'type': ''
    });

    /*------------------------------------------------------------------------*/

    /**
     * The default options copied by suite instances.
     *
     * @static
     * @memberOf Benchmark.Suite
     * @type Object
     */
    Suite.options = {

      /**
       * The name of the suite.
       *
       * @memberOf Benchmark.Suite.options
       * @type String
       */
      'name': undefined
    };

    /*------------------------------------------------------------------------*/

    _.extend(Suite.prototype, {

      /**
       * The number of benchmarks in the suite.
       *
       * @memberOf Benchmark.Suite
       * @type Number
       */
      'length': 0,

      /**
       * A flag to indicate if the suite is aborted.
       *
       * @memberOf Benchmark.Suite
       * @type Boolean
       */
      'aborted': false,

      /**
       * A flag to indicate if the suite is running.
       *
       * @memberOf Benchmark.Suite
       * @type Boolean
       */
      'running': false
    });

    _.extend(Suite.prototype, {
      'abort': abortSuite,
      'add': add,
      'clone': cloneSuite,
      'emit': emit,
      'filter': filterSuite,
      'join': arrayRef.join,
      'listeners': listeners,
      'off': off,
      'on': on,
      'pop': arrayRef.pop,
      'push': arrayRef.push,
      'reset': resetSuite,
      'run': runSuite,
      'reverse': arrayRef.reverse,
      'shift': shift,
      'sort': arrayRef.sort,
      'splice': arrayRef.splice,
      'unshift': arrayRef.unshift
    });

    /*------------------------------------------------------------------------*/

    // expose Deferred, Event, and Suite
    _.extend(Benchmark, {
      'Deferred': Deferred,
      'Event': Event,
      'Suite': Suite
    });

    /*------------------------------------------------------------------------*/

    // avoid array-like object bugs with `Array#shift` and `Array#splice`
    // in Firefox < 10 and IE < 9
    if (!_.support.spliceObjects) {
      _.each(['pop', 'shift', 'splice'], function(methodName) {
        var func = arrayRef[methodName];

        Suite.prototype[methodName] = function() {
          var value = this,
              result = func.apply(value, arguments);

          if (value.length === 0) {
            delete value[0];
          }
          return result;
        };
      });
    }
    // trigger clock's lazy define early to avoid a security error
    if (support.air) {
      clock({ '_original': { 'fn': noop, 'count': 1, 'options': {} } });
    }
    return Benchmark;
  }

  /*--------------------------------------------------------------------------*/

  // expose Benchmark
  // some AMD build optimizers, like r.js, check for specific condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // define as an anonymous module so, through path mapping, it can be aliased
    define(['lodash', 'platform'], function(_, platform) {
      return runInContext({
        '_': _,
        'platform': platform
      });
    });
  }
  else {
    var Benchmark = runInContext();

    // check for `exports` after `define` in case a build optimizer adds an `exports` object
    if (freeExports && !freeExports.nodeType) {
      // in Node.js or RingoJS v0.8.0+
      if (freeModule) {
        (freeModule.exports = Benchmark).Benchmark = Benchmark;
      }
      // in Narwhal or RingoJS v0.7.0-
      else {
        freeExports.Benchmark = Benchmark;
      }
    }
    // in a browser or Rhino
    else {
      window.Benchmark = Benchmark;
    }
  }
}(this));

/*!
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-transition.js, bootstrap-modal.js, bootstrap-dropdown.js, bootstrap-scrollspy.js, bootstrap-tab.js, bootstrap-tooltip.js, bootstrap-popover.js, bootstrap-affix.js, bootstrap-alert.js, bootstrap-button.js, bootstrap-collapse.js, bootstrap-carousel.js, bootstrap-typeahead.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
(function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery),!function(a){function d(){a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var c=b.attr("data-target"),d;c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=c&&a(c);if(!d||!d.length)d=b.parent();return d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),f,g;if(c.is(".disabled, :disabled"))return;return f=e(c),g=f.hasClass("open"),d(),g||f.toggleClass("open"),c.focus(),!1},keydown:function(c){var d,f,g,h,i,j;if(!/(38|40|27)/.test(c.keyCode))return;d=a(this),c.preventDefault(),c.stopPropagation();if(d.is(".disabled, :disabled"))return;h=e(d),i=h.hasClass("open");if(!i||i&&c.keyCode==27)return c.which==27&&h.find(b).focus(),d.click();f=a("[role=menu] li:not(.divider):visible a",h);if(!f.length)return;j=f.index(f.filter(":focus")),c.keyCode==38&&j>0&&j--,c.keyCode==40&&j<f.length-1&&j++,~j||(j=0),f.eq(j).focus()}};var f=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown-menu",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery),!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll-spy.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var c=a(this),d=c.data("target")||c.attr("href"),e=/^#\w/.test(d)&&a(d);return e&&e.length&&[[e.position().top+(!a.isWindow(b.$scrollElement.get(0))&&b.$scrollElement.scrollTop()),d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),!function(a){var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active:last a")[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f,g,h,i;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,g=this.options.trigger.split(" ");for(i=g.length;i--;)h=g[i],h=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):h!="manual"&&(e=h=="hover"?"mouseenter":"focus",f=h=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this)));this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a.fn[this.type].defaults,d={},e;this._options&&a.each(this._options,function(a,b){c[a]!=b&&(d[a]=b)},this),e=a(b.currentTarget)[this.type](d).data(this.type);if(!e.options.delay||!e.options.delay.show)return e.show();clearTimeout(this.timeout),e.hoverState="in",this.timeout=setTimeout(function(){e.hoverState=="in"&&e.show()},e.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var b,c,d,e,f,g,h=a.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(h);if(h.isDefaultPrevented())return;b=this.tip(),this.setContent(),this.options.animation&&b.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,b[0],this.$element[0]):this.options.placement,b.detach().css({top:0,left:0,display:"block"}),this.options.container?b.appendTo(this.options.container):b.insertAfter(this.$element),c=this.getPosition(),d=b[0].offsetWidth,e=b[0].offsetHeight;switch(f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}this.applyPlacement(g,f),this.$element.trigger("shown")}},applyPlacement:function(a,b){var c=this.tip(),d=c[0].offsetWidth,e=c[0].offsetHeight,f,g,h,i;c.offset(a).addClass(b).addClass("in"),f=c[0].offsetWidth,g=c[0].offsetHeight,b=="top"&&g!=e&&(a.top=a.top+e-g,i=!0),b=="bottom"||b=="top"?(h=0,a.left<0&&(h=a.left*-2,a.left=0,c.offset(a),f=c[0].offsetWidth,g=c[0].offsetHeight),this.replaceArrow(h-d+f,f,"left")):this.replaceArrow(g-e,g,"top"),i&&c.offset(a)},replaceArrow:function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function e(){var b=setTimeout(function(){c.off(a.support.transition.end).detach()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.detach()})}var b=this,c=this.tip(),d=a.Event("hide");this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?e():c.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(b){var c=b?a(b.currentTarget)[this.type](this._options).data(this.type):this;c.tip().hasClass("in")?c.hide():c.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),!function(a){var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=(typeof c.content=="function"?c.content.call(b[0]):c.content)||b.attr("data-content"),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),!function(a){var b=function(b,c){this.options=a.extend({},a.fn.affix.defaults,c),this.$window=a(window).on("scroll.affix.data-api",a.proxy(this.checkPosition,this)).on("click.affix.data-api",a.proxy(function(){setTimeout(a.proxy(this.checkPosition,this),1)},this)),this.$element=a(b),this.checkPosition()};b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var b=a(document).height(),c=this.$window.scrollTop(),d=this.$element.offset(),e=this.options.offset,f=e.bottom,g=e.top,h="affix affix-top affix-bottom",i;typeof e!="object"&&(f=g=e),typeof g=="function"&&(g=e.top()),typeof f=="function"&&(f=e.bottom()),i=this.unpin!=null&&c+this.unpin<=d.top?!1:f!=null&&d.top+this.$element.height()>=b-f?"bottom":g!=null&&c<=g?"top":!1;if(this.affixed===i)return;this.affixed=i,this.unpin=i=="bottom"?d.top-c:null,this.$element.removeClass(h).addClass("affix"+(i?"-"+i:""))};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("affix"),f=typeof c=="object"&&c;e||d.data("affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.defaults={offset:0},a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.alert.data-api",b,c.prototype.close)}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning||this.$element.hasClass("in"))return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning||!this.$element.hasClass("in"))return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=a.extend({},a.fn.collapse.defaults,d.data(),typeof c=="object"&&c);e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();c[a(e).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(e).collapse(f)})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(b){var c=this.getActiveIndex(),d=this;if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){d.to(b)}):c==b?this.pause().cycle():this.slide(b>c?"next":"prev",a(this.$items[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j;this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h](),j=a.Event("slide",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g;e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("carousel").pause().to(g).cycle(),b.preventDefault()})}(window.jQuery),!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=a(this.options.menu),this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:b.top+b.height,left:b.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,c?this.process(c):this)},process:function(b){var c=this;return b=a.grep(b,function(a){return c.matcher(a)}),b=this.sorter(b),b.length?this.render(b.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this)).on("mouseleave","li",a.proxy(this.mouseleave,this))},eventSupported:function(a){var b=a in this.$element;return b||(this.$element.setAttribute(a,"return;"),b=typeof this.$element[a]=="function"),b},move:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()},keydown:function(b){this.suppressKeyPressRepeat=~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b)},keypress:function(a){if(this.suppressKeyPressRepeat)return;this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},focus:function(a){this.focused=!0},blur:function(a){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(a){a.stopPropagation(),a.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(b){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")},mouseleave:function(a){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var c=a.fn.typeahead;a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.typeahead.Constructor=b,a.fn.typeahead.noConflict=function(){return a.fn.typeahead=c,this},a(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;c.typeahead(c.data())})}(window.jQuery)(this));
/*!chai.js*/
function(name,definition){if(typeof define=="function"&&typeof define.amd=="object"){define(definition)}else{this[name]=definition()}}("chai",function(){function require(p){var path=require.resolve(p),mod=require.modules[path];if(!mod){throw new Error('failed to require "'+p+'"')}if(!mod.exports){mod.exports={};mod.call(mod.exports,mod,mod.exports,require.relative(path))}return mod.exports}require.modules={};require.resolve=function(path){var orig=path,reg=path+".js",index=path+"/index.js";return require.modules[reg]&&reg||require.modules[index]&&index||orig};require.register=function(path,fn){require.modules[path]=fn};require.relative=function(parent){return function(p){if("."!=p[0]){return require(p)}var path=parent.split("/"),segs=p.split("/");path.pop();for(var i=0;i<segs.length;i++){var seg=segs[i];if(".."==seg){path.pop()}else{if("."!=seg){path.push(seg)}}}return require(path.join("/"))}};require.register("assertion.js",function(module,exports,require){;;var AssertionError=require("./browser/error"),toString=Object.prototype.toString,util=require("./utils"),flag=util.flag;;module.exports=Assertion;;function Assertion(obj,msg,stack){flag(this,"ssfi",stack||arguments.callee);flag(this,"object",obj);flag(this,"message",msg)};Assertion.includeStack=false;Assertion.addProperty=function(name,fn){util.addProperty(this.prototype,name,fn)};Assertion.addMethod=function(name,fn){util.addMethod(this.prototype,name,fn)};Assertion.addChainableMethod=function(name,fn,chainingBehavior){util.addChainableMethod(this.prototype,name,fn,chainingBehavior)};Assertion.overwriteProperty=function(name,fn){util.overwriteProperty(this.prototype,name,fn)};Assertion.overwriteMethod=function(name,fn){util.overwriteMethod(this.prototype,name,fn)};;Assertion.prototype.assert=function(expr,msg,negateMsg,expected,_actual){var msg=util.getMessage(this,arguments),actual=util.getActual(this,arguments),ok=util.test(this,arguments);if(!ok){throw new AssertionError({message:msg,actual:actual,expected:expected,stackStartFunction:(Assertion.includeStack)?this.assert:flag(this,"ssfi")})}};;Object.defineProperty(Assertion.prototype,"_obj",{get:function(){return flag(this,"object")},set:function(val){flag(this,"object",val)}});["to","be","been","is","and","have","with"].forEach(function(chain){Object.defineProperty(Assertion.prototype,chain,{get:function(){return this},configurable:true})});Object.defineProperty(Assertion.prototype,"not",{get:function(){flag(this,"negate",true);return this},configurable:true});Object.defineProperty(Assertion.prototype,"deep",{get:function(){flag(this,"deep",true);return this},configurable:true});function an(type){var obj=flag(this,"object"),klassStart=type.charAt(0).toUpperCase(),klass=klassStart+type.slice(1),article=~["A","E","I","O","U"].indexOf(klassStart)?"an ":"a ";this.assert("[object "+klass+"]"===toString.call(obj),"expected #{this} to be "+article+type,"expected #{this} not to be "+article+type,"[object "+klass+"]",toString.call(obj))}Assertion.addChainableMethod("an",an);Assertion.addChainableMethod("a",an);function includeChainingBehavior(){flag(this,"contains",true)}function include(val){var obj=flag(this,"object");this.assert(~obj.indexOf(val),"expected #{this} to include "+util.inspect(val),"expected #{this} to not include "+util.inspect(val))}Assertion.addChainableMethod("include",include,includeChainingBehavior);Assertion.addChainableMethod("contain",include,includeChainingBehavior);Object.defineProperty(Assertion.prototype,"ok",{get:function(){this.assert(flag(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy");return this},configurable:true});Object.defineProperty(Assertion.prototype,"true",{get:function(){this.assert(true===flag(this,"object"),"expected #{this} to be true","expected #{this} to be false",this.negate?false:true);return this},configurable:true});Object.defineProperty(Assertion.prototype,"false",{get:function(){this.assert(false===flag(this,"object"),"expected #{this} to be false","expected #{this} to be true",this.negate?true:false);return this},configurable:true});Object.defineProperty(Assertion.prototype,"null",{get:function(){this.assert(null===flag(this,"object"),"expected #{this} to be null","expected #{this} not to be null",this.negate?false:true);return this},configurable:true});Object.defineProperty(Assertion.prototype,"undefined",{get:function(){this.assert(undefined===flag(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined",this.negate?false:true);return this},configurable:true});Object.defineProperty(Assertion.prototype,"exist",{get:function(){this.assert(null!=flag(this,"object"),"expected #{this} to exist","expected #{this} to not exist");return this},configurable:true});Object.defineProperty(Assertion.prototype,"empty",{get:function(){var obj=flag(this,"object"),expected=obj;if(Array.isArray(obj)||"string"===typeof object){expected=obj.length}else{if(typeof obj==="object"){expected=Object.keys(obj).length}}this.assert(!expected,"expected #{this} to be empty","expected #{this} not to be empty");return this},configurable:true});function checkArguments(){var obj=flag(this,"object"),type=Object.prototype.toString.call(obj);this.assert("[object Arguments]"===type,"expected #{this} to be arguments but got "+type,"expected #{this} to not be arguments")}Assertion.addProperty("arguments",checkArguments);Assertion.addProperty("Arguments",checkArguments);Assertion.prototype.equal=function(val){var obj=flag(this,"object");if(flag(this,"deep")){return this.eql(val)}else{this.assert(val===obj,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",val)}return this};Assertion.prototype.eql=function(obj){this.assert(util.eql(obj,flag(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",obj);return this};Assertion.prototype.above=function(val){this.assert(flag(this,"object")>val,"expected #{this} to be above "+val,"expected #{this} to be below "+val);return this};Assertion.prototype.below=function(val){this.assert(flag(this,"object")<val,"expected #{this} to be below "+val,"expected #{this} to be above "+val);return this};Assertion.prototype.within=function(start,finish){var obj=flag(this,"object"),range=start+".."+finish;this.assert(obj>=start&&obj<=finish,"expected #{this} to be within "+range,"expected #{this} to not be within "+range);return this};Assertion.prototype.instanceOf=function(constructor){var name=util.getName(constructor);this.assert(flag(this,"object")instanceof constructor,"expected #{this} to be an instance of "+name,"expected #{this} to not be an instance of "+name);return this};Assertion.prototype.property=function(name,val){var obj=flag(this,"object"),value=flag(this,"deep")?util.getPathValue(name,obj):obj[name],descriptor=flag(this,"deep")?"deep property ":"property ",negate=flag(this,"negate");if(negate&&undefined!==val){if(undefined===value){throw new Error(util.inspect(obj)+" has no "+descriptor+util.inspect(name))}}else{this.assert(undefined!==value,"expected #{this} to have a "+descriptor+util.inspect(name),"expected #{this} to not have "+descriptor+util.inspect(name))}if(undefined!==val){this.assert(val===value,"expected #{this} to have a "+descriptor+util.inspect(name)+" of #{exp}, but got #{act}","expected #{this} to not have a "+descriptor+util.inspect(name)+" of #{act}",val,value)}flag(this,"object",value);return this};Assertion.prototype.ownProperty=function(name){var obj=flag(this,"object");this.assert(obj.hasOwnProperty(name),"expected #{this} to have own property "+util.inspect(name),"expected #{this} to not have own property "+util.inspect(name));return this};Assertion.prototype.length=function(n){var obj=flag(this,"object");new Assertion(obj).to.have.property("length");var len=obj.length;this.assert(len==n,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",n,len);return this};Assertion.prototype.match=function(re){var obj=flag(this,"object");this.assert(re.exec(obj),"expected #{this} to match "+re,"expected #{this} not to match "+re);return this};Assertion.prototype.string=function(str){var obj=flag(this,"object");new Assertion(obj).is.a("string");this.assert(~obj.indexOf(str),"expected #{this} to contain "+util.inspect(str),"expected #{this} to not contain "+util.inspect(str));return this};Assertion.prototype.keys=function(keys){var obj=flag(this,"object"),str,ok=true;keys=keys instanceof Array?keys:Array.prototype.slice.call(arguments);if(!keys.length){throw new Error("keys required")}var actual=Object.keys(obj),len=keys.length;ok=keys.every(function(key){return~actual.indexOf(key)});if(!flag(this,"negate")&&!flag(this,"contains")){ok=ok&&keys.length==actual.length}if(len>1){keys=keys.map(function(key){return util.inspect(key)});var last=keys.pop();str=keys.join(", ")+", and "+last}else{str=util.inspect(keys[0])}str=(len>1?"keys ":"key ")+str;str=(flag(this,"contains")?"contain ":"have ")+str;this.assert(ok,"expected #{this} to "+str,"expected #{this} to not "+str,keys,Object.keys(obj));return this};Assertion.prototype.Throw=function(constructor,msg){var obj=flag(this,"object");new Assertion(obj).is.a("function");var thrown=false,desiredError=null,name=null;if(arguments.length===0){msg=null;constructor=null}else{if(constructor&&(constructor instanceof RegExp||"string"===typeof constructor)){msg=constructor;constructor=null}else{if(constructor&&constructor instanceof Error){desiredError=constructor;constructor=null;msg=null}else{if(typeof constructor==="function"){name=(new constructor()).name}else{constructor=null}}}}try{obj()}catch(err){if(desiredError){this.assert(err===desiredError,"expected #{this} to throw "+util.inspect(desiredError)+" but "+util.inspect(err)+" was thrown","expected #{this} to not throw "+util.inspect(desiredError));return this}if(constructor){this.assert(err instanceof constructor,"expected #{this} to throw "+name+" but a "+err.name+" was thrown","expected #{this} to not throw "+name);if(!msg){return this}}if(err.message&&msg&&msg instanceof RegExp){this.assert(msg.exec(err.message),"expected #{this} to throw error matching "+msg+" but got "+util.inspect(err.message),"expected #{this} to throw error not matching "+msg);return this}else{if(err.message&&msg&&"string"===typeof msg){this.assert(~err.message.indexOf(msg),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",msg,err.message);return this}else{thrown=true}}}var expectedThrown=name?name:desiredError?util.inspect(desiredError):"an error";this.assert(thrown===true,"expected #{this} to throw "+expectedThrown,"expected #{this} to not throw "+expectedThrown);return this};Assertion.prototype.respondTo=function(method){var obj=flag(this,"object"),itself=flag(this,"itself"),context=("function"===typeof obj&&!itself)?obj.prototype[method]:obj[method];this.assert("function"===typeof context,"expected #{this} to respond to "+util.inspect(method),"expected #{this} to not respond to "+util.inspect(method),"function",typeof context);return this};Object.defineProperty(Assertion.prototype,"itself",{get:function(){flag(this,"itself",true);return this},configurable:true});Assertion.prototype.satisfy=function(matcher){var obj=flag(this,"object");this.assert(matcher(obj),"expected #{this} to satisfy "+util.inspect(matcher),"expected #{this} to not satisfy"+util.inspect(matcher),this.negate?false:true,matcher(obj));return this};Assertion.prototype.closeTo=function(expected,delta){var obj=flag(this,"object");this.assert((obj-delta===expected)||(obj+delta===expected),"expected #{this} to be close to "+expected+" +/- "+delta,"expected #{this} not to be close to "+expected+" +/- "+delta);return this};(function alias(name,as){Assertion.prototype[as]=Assertion.prototype[name];return alias})("equal","eq")("above","gt")("below","lt")("length","lengthOf")("keys","key")("ownProperty","haveOwnProperty")("above","greaterThan")("below","lessThan")("Throw","throws")("Throw","throw")("instanceOf","instanceof")});require.register("browser/error.js",function(module,exports,require){;module.exports=AssertionError;function AssertionError(options){options=options||{};this.message=options.message;this.actual=options.actual;this.expected=options.expected;this.operator=options.operator;if(options.stackStartFunction&&Error.captureStackTrace){var stackStartFunction=options.stackStartFunction;Error.captureStackTrace(this,stackStartFunction)}}AssertionError.prototype=Object.create(Error.prototype);AssertionError.prototype.name="AssertionError";AssertionError.prototype.constructor=AssertionError;AssertionError.prototype.toString=function(){return this.message}});require.register("chai.js",function(module,exports,require){;var used=[],exports=module.exports={};;exports.version="1.0.4";;exports.Assertion=require("./assertion");;exports.AssertionError=require("./browser/error");;var util=require("./utils");exports.use=function(fn){if(!~used.indexOf(fn)){fn(this,util);used.push(fn)}return this};;var expect=require("./interface/expect");exports.use(expect);;var should=require("./interface/should");exports.use(should);;var assert=require("./interface/assert");exports.use(assert)});require.register("interface/assert.js",function(module,exports,require){;module.exports=function(chai,util){;var Assertion=chai.Assertion,flag=util.flag;;var assert=chai.assert=function(express,errmsg){var test=new Assertion(null);test.assert(express,errmsg,"[ negation message unavailable ]")};assert.fail=function(actual,expected,message,operator){throw new chai.AssertionError({actual:actual,expected:expected,message:message,operator:operator,stackStartFunction:assert.fail})};assert.ok=function(val,msg){new Assertion(val,msg).is.ok};assert.equal=function(act,exp,msg){var test=new Assertion(act,msg);test.assert(exp==flag(test,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",exp,act)};assert.notEqual=function(act,exp,msg){var test=new Assertion(act,msg);test.assert(exp!=flag(test,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",exp,act)};assert.strictEqual=function(act,exp,msg){new Assertion(act,msg).to.equal(exp)};assert.notStrictEqual=function(act,exp,msg){new Assertion(act,msg).to.not.equal(exp)};assert.deepEqual=function(act,exp,msg){new Assertion(act,msg).to.eql(exp)};assert.notDeepEqual=function(act,exp,msg){new Assertion(act,msg).to.not.eql(exp)};assert.isTrue=function(val,msg){new Assertion(val,msg).is["true"]};assert.isFalse=function(val,msg){new Assertion(val,msg).is["false"]};assert.isNull=function(val,msg){new Assertion(val,msg).to.equal(null)};assert.isNotNull=function(val,msg){new Assertion(val,msg).to.not.equal(null)};assert.isUndefined=function(val,msg){new Assertion(val,msg).to.equal(undefined)};assert.isDefined=function(val,msg){new Assertion(val,msg).to.not.equal(undefined)};assert.isFunction=function(val,msg){new Assertion(val,msg).to.be.a("function")};assert.isNotFunction=function(val,msg){new Assertion(val,msg).to.not.be.a("function")};assert.isObject=function(val,msg){new Assertion(val,msg).to.be.a("object")};assert.isNotObject=function(val,msg){new Assertion(val,msg).to.not.be.a("object")};assert.isArray=function(val,msg){new Assertion(val,msg).to.be.an("array")};assert.isNotArray=function(val,msg){new Assertion(val,msg).to.not.be.an("array")};assert.isString=function(val,msg){new Assertion(val,msg).to.be.a("string")};assert.isNotString=function(val,msg){new Assertion(val,msg).to.not.be.a("string")};assert.isNumber=function(val,msg){new Assertion(val,msg).to.be.a("number")};assert.isNotNumber=function(val,msg){new Assertion(val,msg).to.not.be.a("number")};assert.isBoolean=function(val,msg){new Assertion(val,msg).to.be.a("boolean")};assert.isNotBoolean=function(val,msg){new Assertion(val,msg).to.not.be.a("boolean")};assert.typeOf=function(val,type,msg){new Assertion(val,msg).to.be.a(type)};assert.notTypeOf=function(val,type,msg){new Assertion(val,msg).to.not.be.a(type)};assert.instanceOf=function(val,type,msg){new Assertion(val,msg).to.be.instanceOf(type)};assert.notInstanceOf=function(val,type,msg){new Assertion(val,msg).to.not.be.instanceOf(type)};assert.include=function(exp,inc,msg){var obj=new Assertion(exp,msg);if(Array.isArray(exp)){obj.to.include(inc)}else{if("string"===typeof exp){obj.to.contain.string(inc)}}};assert.match=function(exp,re,msg){new Assertion(exp,msg).to.match(re)};assert.notMatch=function(exp,re,msg){new Assertion(exp,msg).to.not.match(re)};assert.property=function(obj,prop,msg){new Assertion(obj,msg).to.have.property(prop)};assert.notProperty=function(obj,prop,msg){new Assertion(obj,msg).to.not.have.property(prop)};assert.deepProperty=function(obj,prop,msg){new Assertion(obj,msg).to.have.deep.property(prop)};assert.notDeepProperty=function(obj,prop,msg){new Assertion(obj,msg).to.not.have.deep.property(prop)};assert.propertyVal=function(obj,prop,val,msg){new Assertion(obj,msg).to.have.property(prop,val)};assert.propertyNotVal=function(obj,prop,val,msg){new Assertion(obj,msg).to.not.have.property(prop,val)};assert.deepPropertyVal=function(obj,prop,val,msg){new Assertion(obj,msg).to.have.deep.property(prop,val)};assert.deepPropertyNotVal=function(obj,prop,val,msg){new Assertion(obj,msg).to.not.have.deep.property(prop,val)};assert.lengthOf=function(exp,len,msg){new Assertion(exp,msg).to.have.length(len)};assert.Throw=function(fn,type,msg){if("string"===typeof type){msg=type;type=null}new Assertion(fn,msg).to.Throw(type)};assert.doesNotThrow=function(fn,type,msg){if("string"===typeof type){msg=type;type=null}new Assertion(fn,msg).to.not.Throw(type)};assert.operator=function(val,operator,val2,msg){if(!~["==","===",">",">=","<","<=","!=","!=="].indexOf(operator)){throw new Error('Invalid operator "'+operator+'"')}var test=new Assertion(eval(val+operator+val2),msg);test.assert(true===flag(test,"object"),"expected "+util.inspect(val)+" to be "+operator+" "+util.inspect(val2),"expected "+util.inspect(val)+" to not be "+operator+" "+util.inspect(val2))};;assert.ifError=function(val,msg){new Assertion(val,msg).to.not.be.ok};(function alias(name,as){assert[as]=assert[name];return alias})("Throw","throw")("Throw","throws")}});require.register("interface/expect.js",function(module,exports,require){;module.exports=function(chai,util){chai.expect=function(val,message){return new chai.Assertion(val,message)}}});require.register("interface/should.js",function(module,exports,require){;module.exports=function(chai,util){var Assertion=chai.Assertion;function loadShould(){Object.defineProperty(Object.prototype,"should",{set:function(){},get:function(){if(this instanceof String||this instanceof Number){return new Assertion(this.constructor(this))}else{if(this instanceof Boolean){return new Assertion(this==true)}}return new Assertion(this)},configurable:true});var should={};should.equal=function(val1,val2){new Assertion(val1).to.equal(val2)};should.Throw=function(fn,errt,errs){new Assertion(fn).to.Throw(errt,errs)};should.exist=function(val){new Assertion(val).to.exist};should.not={};should.not.equal=function(val1,val2){new Assertion(val1).to.not.equal(val2)};should.not.Throw=function(fn,errt,errs){new Assertion(fn).to.not.Throw(errt,errs)};should.not.exist=function(val){new Assertion(val).to.not.exist};should["throw"]=should.Throw;should.not["throw"]=should.not.Throw;return should}chai.should=loadShould;chai.Should=loadShould}});require.register("utils/addChainableMethod.js",function(module,exports,require){;;var transferFlags=require("./transferFlags");module.exports=function(ctx,name,method,chainingBehavior){if(typeof chainingBehavior!=="function"){chainingBehavior=function(){}}Object.defineProperty(ctx,name,{get:function(){chainingBehavior.call(this);var assert=function(){var result=method.apply(this,arguments);return result===undefined?this:result};var asserterNames=Object.getOwnPropertyNames(ctx);asserterNames.forEach(function(asserterName){var pd=Object.getOwnPropertyDescriptor(ctx,asserterName),functionProtoPD=Object.getOwnPropertyDescriptor(Function.prototype,asserterName);if(functionProtoPD&&!functionProtoPD.configurable){return}if(asserterName==="arguments"){return}Object.defineProperty(assert,asserterName,pd)});transferFlags(this,assert);return assert},configurable:true})}});require.register("utils/addMethod.js",function(module,exports,require){;module.exports=function(ctx,name,method){ctx[name]=function(){var result=method.apply(this,arguments);return result===undefined?this:result}}});require.register("utils/addProperty.js",function(module,exports,require){;module.exports=function(ctx,name,getter){Object.defineProperty(ctx,name,{get:function(){var result=getter.call(this);return result===undefined?this:result},configurable:true})}});require.register("utils/eql.js",function(module,exports,require){module.exports=_deepEqual;if(!Buffer){var Buffer={isBuffer:function(){return false}}}function _deepEqual(actual,expected){if(actual===expected){return true}else{if(Buffer.isBuffer(actual)&&Buffer.isBuffer(expected)){if(actual.length!=expected.length){return false}for(var i=0;i<actual.length;i++){if(actual[i]!==expected[i]){return false}}return true}else{if(actual instanceof Date&&expected instanceof Date){return actual.getTime()===expected.getTime()}else{if(typeof actual!="object"&&typeof expected!="object"){return actual===expected}else{return objEquiv(actual,expected)}}}}}function isUndefinedOrNull(value){return value===null||value===undefined}function isArguments(object){return Object.prototype.toString.call(object)=="[object Arguments]"}function objEquiv(a,b){if(isUndefinedOrNull(a)||isUndefinedOrNull(b)){return false}if(a.prototype!==b.prototype){return false}if(isArguments(a)){if(!isArguments(b)){return false}a=pSlice.call(a);b=pSlice.call(b);return _deepEqual(a,b)}try{var ka=Object.keys(a),kb=Object.keys(b),key,i}catch(e){return false}if(ka.length!=kb.length){return false}ka.sort();kb.sort();for(i=ka.length-1;i>=0;i--){if(ka[i]!=kb[i]){return false}}for(i=ka.length-1;i>=0;i--){key=ka[i];if(!_deepEqual(a[key],b[key])){return false}}return true}});require.register("utils/flag.js",function(module,exports,require){;module.exports=function(obj,key,value){var flags=obj.__flags||(obj.__flags=Object.create(null));if(arguments.length===3){flags[key]=value}else{return flags[key]}}});require.register("utils/getActual.js",function(module,exports,require){;module.exports=function(obj,args){var actual=args[4];return"undefined"!==actual?actual:obj.obj}});require.register("utils/getMessage.js",function(module,exports,require){;;var flag=require("./flag"),getActual=require("./getActual"),inspect=require("./inspect");module.exports=function(obj,args){var negate=flag(obj,"negate"),val=flag(obj,"object"),expected=args[3],actual=getActual(obj,args),msg=negate?args[2]:args[1],flagMsg=flag(obj,"message");msg=msg||"";msg=msg.replace(/#{this}/g,inspect(val)).replace(/#{act}/g,inspect(actual)).replace(/#{exp}/g,inspect(expected));return flagMsg?flagMsg+": "+msg:msg}});require.register("utils/getName.js",function(module,exports,require){;module.exports=function(func){if(func.name){return func.name}var match=/^\s?function ([^(]*)\(/.exec(func);return match&&match[1]?match[1]:""}});require.register("utils/getPathValue.js",function(module,exports,require){;var getPathValue=module.exports=function(path,obj){var parsed=parsePath(path);return _getPathValue(parsed,obj)};;function parsePath(path){var parts=path.split(".").filter(Boolean);return parts.map(function(value){var re=/([A-Za-z0-9]+)\[(\d+)\]$/,mArr=re.exec(value),val;if(mArr){val={p:mArr[1],i:parseFloat(mArr[2])}}return val||value})};function _getPathValue(parsed,obj){var tmp=obj,res;for(var i=0,l=parsed.length;i<l;i++){var part=parsed[i];if(tmp){if("object"===typeof part&&tmp[part.p]){tmp=tmp[part.p][part.i]}else{tmp=tmp[part]}if(i==(l-1)){res=tmp}}else{res=undefined}}return res}});require.register("utils/index.js",function(module,exports,require){;;var exports=module.exports={};;exports.test=require("./test");;exports.getMessage=require("./getMessage");;exports.getActual=require("./getActual");;exports.inspect=require("./inspect");;exports.flag=require("./flag");;exports.transferFlags=require("./transferFlags");;exports.eql=require("./eql");;exports.getPathValue=require("./getPathValue");;exports.getName=require("./getName");;exports.addProperty=require("./addProperty");;exports.addMethod=require("./addMethod");;exports.overwriteProperty=require("./overwriteProperty");;exports.overwriteMethod=require("./overwriteMethod");;exports.addChainableMethod=require("./addChainableMethod")});require.register("utils/inspect.js",function(module,exports,require){var getName=require("./getName");module.exports=inspect;function inspect(obj,showHidden,depth,colors){var ctx={showHidden:showHidden,seen:[],stylize:function(str){return str}};return formatValue(ctx,obj,(typeof depth==="undefined"?2:depth))}function formatValue(ctx,value,recurseTimes){if(value&&typeof value.inspect==="function"&&value.inspect!==exports.inspect&&!(value.constructor&&value.constructor.prototype===value)){return value.inspect(recurseTimes)}var primitive=formatPrimitive(ctx,value);if(primitive){return primitive}var visibleKeys=Object.keys(value);var keys=ctx.showHidden?Object.getOwnPropertyNames(value):visibleKeys;if(keys.length===0||(isError(value)&&((keys.length===1&&keys[0]==="stack")||(keys.length===2&&keys[0]==="description"&&keys[1]==="stack")))){if(typeof value==="function"){var name=getName(value);var nameSuffix=name?": "+name:"";return ctx.stylize("[Function"+nameSuffix+"]","special")}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}if(isDate(value)){return ctx.stylize(Date.prototype.toUTCString.call(value),"date")}if(isError(value)){return formatError(value)}}var base="",array=false,braces=["{","}"];if(isArray(value)){array=true;braces=["[","]"]}if(typeof value==="function"){var n=value.name?": "+value.name:"";base=" [Function"+n+"]"}if(isRegExp(value)){base=" "+RegExp.prototype.toString.call(value)}if(isDate(value)){base=" "+Date.prototype.toUTCString.call(value)}if(isError(value)){return formatError(value)}if(keys.length===0&&(!array||value.length==0)){return braces[0]+base+braces[1]}if(recurseTimes<0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value),"regexp")}else{return ctx.stylize("[Object]","special")}}ctx.seen.push(value);var output;if(array){output=formatArray(ctx,value,recurseTimes,visibleKeys,keys)}else{output=keys.map(function(key){return formatProperty(ctx,value,recurseTimes,visibleKeys,key,array)})}ctx.seen.pop();return reduceToSingleString(output,base,braces)}function formatPrimitive(ctx,value){switch(typeof value){case"undefined":return ctx.stylize("undefined","undefined");case"string":var simple="'"+JSON.stringify(value).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return ctx.stylize(simple,"string");case"number":return ctx.stylize(""+value,"number");case"boolean":return ctx.stylize(""+value,"boolean")}if(value===null){return ctx.stylize("null","null")}}function formatError(value){return"["+Error.prototype.toString.call(value)+"]"}function formatArray(ctx,value,recurseTimes,visibleKeys,keys){var output=[];for(var i=0,l=value.length;i<l;++i){if(Object.prototype.hasOwnProperty.call(value,String(i))){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,String(i),true))}else{output.push("")}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx,value,recurseTimes,visibleKeys,key,true))}});return output}function formatProperty(ctx,value,recurseTimes,visibleKeys,key,array){var name,str;if(value.__lookupGetter__){if(value.__lookupGetter__(key)){if(value.__lookupSetter__(key)){str=ctx.stylize("[Getter/Setter]","special")}else{str=ctx.stylize("[Getter]","special")}}else{if(value.__lookupSetter__(key)){str=ctx.stylize("[Setter]","special")}}}if(visibleKeys.indexOf(key)<0){name="["+key+"]"}if(!str){if(ctx.seen.indexOf(value[key])<0){if(recurseTimes===null){str=formatValue(ctx,value[key],null)}else{str=formatValue(ctx,value[key],recurseTimes-1)}if(str.indexOf("\n")>-1){if(array){str=str.split("\n").map(function(line){return"  "+line}).join("\n").substr(2)}else{str="\n"+str.split("\n").map(function(line){return"   "+line}).join("\n")}}}else{str=ctx.stylize("[Circular]","special")}}if(typeof name==="undefined"){if(array&&key.match(/^\d+$/)){return str}name=JSON.stringify(""+key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name=name.substr(1,name.length-2);name=ctx.stylize(name,"name")}else{name=name.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'");name=ctx.stylize(name,"string")}}return name+": "+str}function reduceToSingleString(output,base,braces){var numLinesEst=0;var length=output.reduce(function(prev,cur){numLinesEst++;if(cur.indexOf("\n")>=0){numLinesEst++}return prev+cur.length+1},0);if(length>60){return braces[0]+(base===""?"":base+"\n ")+" "+output.join(",\n  ")+" "+braces[1]}return braces[0]+base+" "+output.join(", ")+" "+braces[1]}function isArray(ar){return Array.isArray(ar)||(typeof ar==="object"&&objectToString(ar)==="[object Array]")}function isRegExp(re){return typeof re==="object"&&objectToString(re)==="[object RegExp]"}function isDate(d){return typeof d==="object"&&objectToString(d)==="[object Date]"}function isError(e){return typeof e==="object"&&objectToString(e)==="[object Error]"}function objectToString(o){return Object.prototype.toString.call(o)}});require.register("utils/overwriteMethod.js",function(module,exports,require){;module.exports=function(ctx,name,method){var _method=ctx[name],_super=function(){return this};if(_method&&"function"===typeof _method){_super=_method}ctx[name]=function(){var result=method(_super).apply(this,arguments);return result===undefined?this:result}}});require.register("utils/overwriteProperty.js",function(module,exports,require){;module.exports=function(ctx,name,getter){var _get=Object.getOwnPropertyDescriptor(ctx,name),_super=function(){};if(_get&&"function"===typeof _get.get){_super=_get.get}Object.defineProperty(ctx,name,{get:function(){var result=getter(_super).call(this);return result===undefined?this:result},configurable:true})}});require.register("utils/test.js",function(module,exports,require){;;var flag=require("./flag");module.exports=function(obj,args){var negate=flag(obj,"negate"),expr=args[0];return negate?!expr:expr}});require.register("utils/transferFlags.js",function(module,exports,require){;module.exports=function(assertion,object,includeAll){var flags=assertion.__flags||(assertion.__flags=Object.create(null));if(!object.__flags){object.__flags=Object.create(null)}includeAll=arguments.length===3?includeAll:true;for(var flag in flags){if(includeAll||(flag!=="object"&&flag!=="ssfi"&&flag!="message")){object.__flags[flag]=flags[flag]}}}});return require("chai")});
/*!
 Copyright (c) 2012, Yahoo! Inc.  All rights reserved.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */(function(isNode){var SYNTAX,nodeType,ESP=isNode?require('esprima'):esprima,ESPGEN=isNode?require('escodegen'):escodegen,crypto=isNode?require('crypto'):null,LEADER_WRAP='(function () { ',TRAILER_WRAP='\n}());',astgen,preconditions,cond,isArray=Array.isArray;if(!isArray){isArray=function(thing){return thing&&Object.prototype.toString.call(thing)==='[object Array]';};}if(!isNode){preconditions={'Could not find esprima':ESP,'Could not find escodegen':ESPGEN,'JSON object not in scope':JSON,'Array does not implement push':[].push,'Array does not implement unshift':[].unshift};for(cond in preconditions){if(preconditions.hasOwnProperty(cond)){if(!preconditions[cond]){throw new Error(cond);}}}}function generateTrackerVar(filename,omitSuffix){var hash,suffix;if(crypto!==null){hash=crypto.createHash('md5');hash.update(filename);suffix=hash.digest('base64');suffix=suffix.replace(new RegExp('=','g'),'').replace(new RegExp('\\+','g'),'_').replace(new RegExp('/','g'),'$');}else{window.__cov_seq=window.__cov_seq||0;window.__cov_seq+=1;suffix=window.__cov_seq;}return'__cov_'+(omitSuffix?'':suffix);}function pushAll(ary,thing){if(!isArray(thing)){thing=[thing];}Array.prototype.push.apply(ary,thing);}SYNTAX={ArrayExpression:['elements'],AssignmentExpression:['left','right'],BinaryExpression:['left','right'],BlockStatement:['body'],BreakStatement:['label'],CallExpression:['callee','arguments'],CatchClause:['param','body'],ConditionalExpression:['test','consequent','alternate'],ContinueStatement:['label'],DebuggerStatement:[],DoWhileStatement:['test','body'],EmptyStatement:[],ExpressionStatement:['expression'],ForInStatement:['left','right','body'],ForStatement:['init','test','update','body'],FunctionDeclaration:['id','params','body'],FunctionExpression:['id','params','defaults','body'],Identifier:[],IfStatement:['test','consequent','alternate'],LabeledStatement:['label','body'],Literal:[],LogicalExpression:['left','right'],MemberExpression:['object','property'],NewExpression:['callee','arguments'],ObjectExpression:['properties'],Program:['body'],Property:['key','value'],ReturnStatement:['argument'],SequenceExpression:['expressions'],SwitchCase:['test','consequent'],SwitchStatement:['discriminant','cases'],ThisExpression:[],ThrowStatement:['argument'],TryStatement:['block','handlers','finalizer'],UnaryExpression:['argument'],UpdateExpression:['argument'],VariableDeclaration:['declarations'],VariableDeclarator:['id','init'],WhileStatement:['test','body'],WithStatement:['object','body']};for(nodeType in SYNTAX){if(SYNTAX.hasOwnProperty(nodeType)){SYNTAX[nodeType]={name:nodeType,children:SYNTAX[nodeType]};}}astgen={variable:function(name){return{type:SYNTAX.Identifier.name,name:name};},stringLiteral:function(str){return{type:SYNTAX.Literal.name,value:String(str)};},numericLiteral:function(num){return{type:SYNTAX.Literal.name,value:Number(num)};},statement:function(contents){return{type:SYNTAX.ExpressionStatement.name,expression:contents};},dot:function(obj,field){return{type:SYNTAX.MemberExpression.name,computed:false,object:obj,property:field};},subscript:function(obj,sub){return{type:SYNTAX.MemberExpression.name,computed:true,object:obj,property:sub};},postIncrement:function(obj){return{type:SYNTAX.UpdateExpression.name,operator:'++',prefix:false,argument:obj};},sequence:function(one,two){return{type:SYNTAX.SequenceExpression.name,expressions:[one,two]};}};function Walker(walkMap,scope,debug){this.walkMap=walkMap;this.scope=scope;this.debug=debug;if(this.debug){this.level=0;this.seq=true;}}function defaultWalker(node,walker){var type=node.type,children=SYNTAX[type].children,applyCustomWalker=!!node.loc||node.type===SYNTAX.Program.name,walkerFn=applyCustomWalker?walker.walkMap[type]:null,i,j,walkFnIndex,childType,childNode,ret=node,childArray,childElement,pathElement,assignNode,isLast;if(node.walking){throw new Error('Infinite regress: Custom walkers may NOT call walker.walk(node)');}node.walking=true;if(isArray(walkerFn)){for(walkFnIndex=0;walkFnIndex<walkerFn.length;walkFnIndex+=1){isLast=walkFnIndex===walkerFn.length-1;ret=walker.walk(ret,walkerFn[walkFnIndex])||ret;if(ret.type!==type&&!isLast){throw new Error('Only the last walker is allowed to change the node type: [type was: '+type+' ]');}}}else{if(walkerFn){ret=walker.walk(node,walkerFn)||ret;}}for(i=0;i<children.length;i+=1){childType=children[i];childNode=node[childType];if(childNode&&!childNode.skipWalk){pathElement={node:node,property:childType};if(isArray(childNode)){childArray=[];for(j=0;j<childNode.length;j+=1){childElement=childNode[j];pathElement.index=j;if(childElement){assignNode=walker.walk(childElement,null,pathElement)||childElement;if(isArray(assignNode.prepend)){pushAll(childArray,assignNode.prepend);delete assignNode.prepend;}}pushAll(childArray,assignNode);}node[childType]=childArray;}else{assignNode=walker.walk(childNode,null,pathElement)||childNode;if(isArray(assignNode.prepend)){throw new Error('Internal error: attempt to prepend statements in disallowed (non-array) context');}else{node[childType]=assignNode;}}}}delete node.walking;return ret;}Walker.prototype={startWalk:function(node){this.path=[];this.walk(node);},walk:function(node,walkFn,pathElement){var ret,i,seq,prefix;walkFn=walkFn||defaultWalker;if(this.debug){this.seq+=1;this.level+=1;seq=this.seq;prefix='';for(i=0;i<this.level;i+=1){prefix+='    ';}console.log(prefix+'Enter ('+seq+'):'+node.type);}if(pathElement){this.path.push(pathElement);}ret=walkFn.call(this.scope,node,this);if(pathElement){this.path.pop();}if(this.debug){this.level-=1;console.log(prefix+'Return ('+seq+'):'+node.type);}return ret;},startLineForNode:function(node){return node&&node.loc&&node.loc.start?node.loc.start.line:null;},parent:function(){return this.path.length>0?this.path[this.path.length-1]:null;},isLabeled:function(){var el=this.parent();return el&&el.node.type===SYNTAX.LabeledStatement.name;}};function Instrumenter(options){this.opts=options||{debug:false,walkDebug:false,coverageVariable:'__coverage__',codeGenerationOptions:undefined,noAutoWrap:false,noCompact:false,embedSource:false};this.walker=new Walker({ExpressionStatement:this.coverStatement,BreakStatement:this.coverStatement,ContinueStatement:this.coverStatement,DebuggerStatement:this.coverStatement,ReturnStatement:this.coverStatement,ThrowStatement:this.coverStatement,TryStatement:this.coverStatement,VariableDeclaration:this.coverStatement,IfStatement:[this.ifBlockConverter,this.ifBranchInjector,this.coverStatement],ForStatement:[this.skipInit,this.loopBlockConverter,this.coverStatement],ForInStatement:[this.skipLeft,this.loopBlockConverter,this.coverStatement],WhileStatement:[this.loopBlockConverter,this.coverStatement],DoWhileStatement:[this.loopBlockConverter,this.coverStatement],SwitchStatement:[this.switchBranchInjector,this.coverStatement],WithStatement:this.coverStatement,FunctionDeclaration:[this.coverFunction,this.coverStatement],FunctionExpression:this.coverFunction,LabeledStatement:this.coverStatement,ConditionalExpression:this.conditionalBranchInjector,LogicalExpression:this.logicalExpressionBranchInjector},this,this.opts.walkDebug);if(this.opts.backdoor&&this.opts.backdoor.omitTrackerSuffix){this.omitTrackerSuffix=true;}}Instrumenter.prototype={instrumentSync:function(code,filename){var codegenOptions,program;filename=filename||String(new Date().getTime())+'.js';this.coverState={path:filename,s:{},b:{},f:{},fnMap:{},statementMap:{},branchMap:{}};this.currentState={trackerVar:generateTrackerVar(filename,this.omitTrackerSuffix),func:0,branch:0,variable:0,statement:0};if(typeof code!=='string'){throw new Error('Code must be string');}if(code.charAt(0)==='#'){code='//'+code;}if(!this.opts.noAutoWrap){code=LEADER_WRAP+code+TRAILER_WRAP;}program=ESP.parse(code,{loc:true});if(!this.opts.noAutoWrap){program={type:SYNTAX.Program.name,body:program.body[0].expression.callee.body.body};}this.walker.startWalk(program);codegenOptions=this.opts.codeGenerationOptions||{format:{compact:!this.opts.noCompact}};return this.getPreamble(code)+'\n'+ESPGEN.generate(program,codegenOptions)+'\n';},instrument:function(code,filename,callback){if(!callback&&typeof filename==='function'){callback=filename;filename=null;}try{callback(null,this.instrumentSync(code,filename));}catch(ex){callback(ex);}},lastFileCoverage:function(){return this.coverState;},fixColumnPositions:function(coverState){var offset=LEADER_WRAP.length,fixer=function(loc){if(loc.start.line===1){loc.start.column-=offset;}if(loc.end.line===1){loc.end.column-=offset;}},k,obj,i,locations;obj=coverState.statementMap;for(k in obj){if(obj.hasOwnProperty(k)){fixer(obj[k]);}}obj=coverState.fnMap;for(k in obj){if(obj.hasOwnProperty(k)){fixer(obj[k].loc);}}obj=coverState.branchMap;for(k in obj){if(obj.hasOwnProperty(k)){locations=obj[k].locations;for(i=0;i<locations.length;i+=1){fixer(locations[i]);}}}},getPreamble:function(sourceCode){var varName=this.opts.coverageVariable||'__coverage__',file=this.coverState.path.replace(/\\/g,'\\\\'),tracker=this.currentState.trackerVar,coverState,replacer=function(s){return function(){return s;};},code;if(!this.opts.noAutoWrap){this.fixColumnPositions(this.coverState);}if(this.opts.embedSource){this.coverState.code=sourceCode.split(/\n/);}coverState=this.opts.debug?JSON.stringify(this.coverState,undefined,4):JSON.stringify(this.coverState);code=["if (typeof %GLOBAL% === 'undefined') { %GLOBAL% = {}; }","if (!%GLOBAL%['%FILE%']) {","   %GLOBAL%['%FILE%'] = %OBJECT%;","}","var %VAR% = %GLOBAL%['%FILE%'];"].join("\n").replace(/%VAR%/g,replacer(tracker)).replace(/%GLOBAL%/g,replacer(varName)).replace(/%FILE%/g,replacer(file)).replace(/%OBJECT%/g,replacer(coverState));return code;},convertToBlock:function(node){if(!node){return{type:'BlockStatement',body:[]};}else if(node.type==='BlockStatement'){return node;}else{return{type:'BlockStatement',body:[node]};}},ifBlockConverter:function(node){node.consequent=this.convertToBlock(node.consequent);node.alternate=this.convertToBlock(node.alternate);},loopBlockConverter:function(node){node.body=this.convertToBlock(node.body);},statementName:function(location){var sName;this.currentState.statement+=1;sName=this.currentState.statement;this.coverState.statementMap[sName]=location;this.coverState.s[sName]=0;return sName;},skipInit:function(node){if(node.init){node.init.skipWalk=true;}},skipLeft:function(node){node.left.skipWalk=true;},coverStatement:function(node,walker){var sName,incrStatementCount;sName=this.statementName(node.loc);incrStatementCount=astgen.statement(astgen.postIncrement(astgen.subscript(astgen.dot(astgen.variable(this.currentState.trackerVar),astgen.variable('s')),astgen.stringLiteral(sName))));this.splice(incrStatementCount,node,walker);},splice:function(statements,node,walker){var targetNode=walker.isLabeled()?walker.parent().node:node;targetNode.prepend=targetNode.prepend||[];pushAll(targetNode.prepend,statements);},functionName:function(node,line,location){this.currentState.func+=1;var id=this.currentState.func,name=node.id?node.id.name:'(anonymous_'+id+')';this.coverState.fnMap[id]={name:name,line:line,loc:location};this.coverState.f[id]=0;return id;},coverFunction:function(node,walker){var id=this.functionName(node,walker.startLineForNode(node),{start:node.loc.start,end:{line:node.body.loc.start.line,column:node.body.loc.start.column}}),body=node.body,blockBody=body.body;blockBody.unshift(astgen.statement(astgen.postIncrement(astgen.subscript(astgen.dot(astgen.variable(this.currentState.trackerVar),astgen.variable('f')),astgen.stringLiteral(id)))));},branchName:function(type,startLine,pathLocations){var bName,paths=[],locations=[],i;this.currentState.branch+=1;bName=this.currentState.branch;for(i=0;i<pathLocations.length;i+=1){paths.push(0);locations.push(pathLocations[i]);}this.coverState.b[bName]=paths;this.coverState.branchMap[bName]={line:startLine,type:type,locations:locations};return bName;},branchIncrementExprAst:function(varName,branchIndex,down){var ret=astgen.postIncrement(astgen.subscript(astgen.subscript(astgen.dot(astgen.variable(this.currentState.trackerVar),astgen.variable('b')),astgen.stringLiteral(varName)),astgen.numericLiteral(branchIndex)),down);return ret;},locationsForNodes:function(nodes){var ret=[],i;for(i=0;i<nodes.length;i+=1){ret.push(nodes[i].loc);}return ret;},ifBranchInjector:function(node,walker){var line=node.loc.start.line,col=node.loc.start.column,start={line:line,column:col},end={line:line,column:col},bName=this.branchName('if',walker.startLineForNode(node),[{start:start,end:end},{start:start,end:end}]),thenBody=node.consequent.body,elseBody=node.alternate.body;thenBody.unshift(astgen.statement(this.branchIncrementExprAst(bName,0)));elseBody.unshift(astgen.statement(this.branchIncrementExprAst(bName,1)));},switchBranchInjector:function(node,walker){var cases=node.cases,bName,i;if(!cases){return;}bName=this.branchName('switch',walker.startLineForNode(node),this.locationsForNodes(cases));for(i=0;i<cases.length;i+=1){cases[i].consequent.unshift(astgen.statement(this.branchIncrementExprAst(bName,i)));}},conditionalBranchInjector:function(node,walker){var bName=this.branchName('cond-expr',walker.startLineForNode(node),this.locationsForNodes([node.consequent,node.alternate])),ast1=this.branchIncrementExprAst(bName,0),ast2=this.branchIncrementExprAst(bName,1);node.consequent=astgen.sequence(ast1,node.consequent);node.alternate=astgen.sequence(ast2,node.alternate);},logicalExpressionBranchInjector:function(node,walker){var parent=walker.parent(),leaves=[],bName,tuple,i;if(parent&&parent.node.type===SYNTAX.LogicalExpression.name){return;}this.findLeaves(node,leaves);bName=this.branchName('binary-expr',walker.startLineForNode(node),this.locationsForNodes(leaves.map(function(item){return item.node;})));for(i=0;i<leaves.length;i+=1){tuple=leaves[i];tuple.parent[tuple.property]=astgen.sequence(this.branchIncrementExprAst(bName,i),tuple.node);}},findLeaves:function(node,accumulator,parent,property){if(node.type===SYNTAX.LogicalExpression.name){this.findLeaves(node.left,accumulator,node,'left');this.findLeaves(node.right,accumulator,node,'right');}else{accumulator.push({node:node,parent:parent,property:property});}}};if(isNode){module.exports=Instrumenter;}else{window.Instrumenter=Instrumenter;}}(typeof module!=='undefined'&&typeof module.exports!=='undefined'&&typeof exports!=='undefined'));
if(typeof module=="undefined"){this.Narcissus=new Object}(function(){var e={options:{version:185},hostGlobal:this};Narcissus=e})();Narcissus.definitions=function(){function h(e,t,n,r,i){Object.defineProperty(e,t,{get:n,configurable:!r,enumerable:!i})}function p(e,t,n,r,i,s){Object.defineProperty(e,t,{value:n,writable:!i,configurable:!r,enumerable:!s})}function d(e){return typeof e==="function"&&e.toString().match(/\[native code\]/)}function v(e,t){while(e){if({}.hasOwnProperty.call(e,t))return Object.getOwnPropertyDescriptor(e,t);e=Object.getPrototypeOf(e)}}function m(e){var t={};for(var n in Object.getOwnPropertyNames(e))t[n]=Object.getOwnPropertyDescriptor(e,n);return t}function g(e){return{getOwnPropertyDescriptor:function(t){var n=Object.getOwnPropertyDescriptor(e,t);n.configurable=true;return n},getPropertyDescriptor:function(t){var n=v(e,t);n.configurable=true;return n},getOwnPropertyNames:function(){return Object.getOwnPropertyNames(e)},defineProperty:function(t,n){Object.defineProperty(e,t,n)},"delete":function(t){return delete e[t]},fix:function(){if(Object.isFrozen(e)){return m(e)}return undefined},has:function(t){return t in e},hasOwn:function(t){return{}.hasOwnProperty.call(e,t)},get:function(t,n){return e[n]},set:function(t,n,r){e[n]=r;return true},enumerate:function(){var t=[];for(f in e){t.push(f)}return t},keys:function(){return Object.keys(e)}}}function y(){return undefined}function w(){this.table=Object.create(null,{});this.size=0}function E(e){this.elts=e||null}var e=["END","\n",";",",","=","?",":","CONDITIONAL","||","&&","|","^","&","==","!=","===","!==","<","<=",">=",">","<<",">>",">>>","+","-","*","/","%","!","~","UNARY_PLUS","UNARY_MINUS","++","--",".","[","]","{","}","(",")","SCRIPT","BLOCK","LABEL","FOR_IN","CALL","NEW_WITH_ARGS","INDEX","ARRAY_INIT","OBJECT_INIT","PROPERTY_INIT","GETTER","SETTER","GROUP","LIST","LET_BLOCK","ARRAY_COMP","GENERATOR","COMP_TAIL","IDENTIFIER","NUMBER","STRING","REGEXP","break","case","catch","const","continue","debugger","default","delete","do","else","false","finally","for","function","if","in","instanceof","let","new","null","return","switch","this","throw","true","try","typeof","var","void","yield","while","with"];var t=["break","const","continue","debugger","do","for","if","return","switch","throw","try","var","yield","while","with"];var n={"\n":"NEWLINE",";":"SEMICOLON",",":"COMMA","?":"HOOK",":":"COLON","||":"OR","&&":"AND","|":"BITWISE_OR","^":"BITWISE_XOR","&":"BITWISE_AND","===":"STRICT_EQ","==":"EQ","=":"ASSIGN","!==":"STRICT_NE","!=":"NE","<<":"LSH","<=":"LE","<":"LT",">>>":"URSH",">>":"RSH",">=":"GE",">":"GT","++":"INCREMENT","--":"DECREMENT","+":"PLUS","-":"MINUS","*":"MUL","/":"DIV","%":"MOD","!":"NOT","~":"BITWISE_NOT",".":"DOT","[":"LEFT_BRACKET","]":"RIGHT_BRACKET","{":"LEFT_CURLY","}":"RIGHT_CURLY","(":"LEFT_PAREN",")":"RIGHT_PAREN"};var r={__proto__:null};var i={};var s="const ";for(var o=0,u=e.length;o<u;o++){if(o>0)s+=", ";var a=e[o];var f;if(/^[a-z]/.test(a)){f=a.toUpperCase();r[a]=o}else{f=/^\W/.test(a)?n[a]:a}s+=f+" = "+o;i[f]=o;e[a]=o}s+=";";var l={__proto__:null};for(o=0,u=t.length;o<u;o++)l[r[t[o]]]=true;var c=["|","^","&","<<",">>",">>>","+","-","*","/","%"];for(o=0,u=c.length;o<u;o++){a=c[o];c[a]=e[a]}var b={}.hasOwnProperty;w.prototype={has:function(e){return b.call(this.table,e)},set:function(e,t){if(!b.call(this.table,e))this.size++;this.table[e]=t},get:function(e){return this.table[e]},getDef:function(e,t){if(!b.call(this.table,e)){this.size++;this.table[e]=t()}return this.table[e]},forEach:function(e){var t=this.table;for(var n in t)e.call(this,n,t[n])},toString:function(){return"[object StringMap]"}};E.prototype={push:function(e){return new E({top:e,rest:this.elts})},top:function(){if(!this.elts)throw new Error("empty stack");return this.elts.top},isEmpty:function(){return this.top===null},find:function(e){for(var t=this.elts;t;t=t.rest){if(e(t.top))return t.top}return null},has:function(e){return Boolean(this.find(function(t){return t===e}))},forEach:function(e){for(var t=this.elts;t;t=t.rest){e(t.top)}}};return{tokens:e,opTypeNames:n,keywords:r,isStatementStartCode:l,tokenIds:i,consts:s,assignOps:c,defineGetter:h,defineProperty:p,isNativeCode:d,makePassthruHandler:g,noPropFound:y,StringMap:w,Stack:E}}();Narcissus.lexer=function(){function Tokenizer(e,t,n){this.cursor=0;this.source=String(e);this.tokens=[];this.tokenIndex=0;this.lookahead=0;this.scanNewlines=false;this.unexpectedEOF=false;this.filename=t||"";this.lineno=n||1;this.comments=[]}var definitions=Narcissus.definitions;eval(definitions.consts);var opTokens={};for(var op in definitions.opTypeNames){if(op==="\n"||op===".")continue;var node=opTokens;for(var i=0;i<op.length;i++){var ch=op[i];if(!(ch in node))node[ch]={};node=node[ch];node.op=op}}Tokenizer.prototype={get done(){return this.peek(true)===END},get token(){return this.tokens[this.tokenIndex]},match:function(e,t){return this.get(t)===e||this.unget()},mustMatch:function(e){if(!this.match(e)){throw this.newSyntaxError("Missing "+definitions.tokens[e].toLowerCase())}return this.token},peek:function(e){var t,n;if(this.lookahead){n=this.tokens[this.tokenIndex+this.lookahead&3];t=this.scanNewlines&&n.lineno!==this.lineno?NEWLINE:n.type}else{t=this.get(e);this.unget()}return t},peekOnSameLine:function(e){this.scanNewlines=true;var t=this.peek(e);this.scanNewlines=false;return t},skip:function(){var e=this.source;var t;var n;var r=[];var i;var s=0;for(;;){var o=e[this.cursor++];var u=e[this.cursor];if(o==="\n"&&!this.scanNewlines){this.lineno++;s++}else if(o==="/"&&u==="*"){t=this.cursor;n=this.lineno;this.cursor++;for(;;){o=e[this.cursor++];if(o===undefined)throw this.newSyntaxError("Unterminated comment");if(o==="*"){u=e[this.cursor];if(u==="/"){this.cursor++;i={type:"BLOCK_COMMENT",nlcount:s,start:t-1,end:this.cursor,lineno:n,endlineno:this.lineno,value:e.substring(t+1,this.cursor-2)};this.comments.push(i);s=0;break}}else if(o==="\n"){this.lineno++}}}else if(o==="/"&&u==="/"){t=this.cursor;this.cursor++;for(;;){o=e[this.cursor++];if(o===undefined){i={type:"LINE_COMMENT",start:t,end:this.cursor,lineno:this.lineno,nlcount:s,value:e.substring(t+1,this.cursor-1)};this.comments.push(i);return}if(o==="\n"){i={type:"LINE_COMMENT",start:t,end:this.cursor,lineno:this.lineno,nlcount:s,value:e.substring(t+1,this.cursor-1)};this.comments.push(i);s=0;this.lineno++;break}}}else if(o!==" "&&o!=="	"){this.cursor--;return}}},lexExponent:function(){var e=this.source;var t=e[this.cursor];if(t==="e"||t==="E"){this.cursor++;ch=e[this.cursor++];if(ch==="+"||ch==="-")ch=e[this.cursor++];if(ch<"0"||ch>"9")throw this.newSyntaxError("Missing exponent");do{ch=e[this.cursor++]}while(ch>="0"&&ch<="9");this.cursor--;return true}return false},lexZeroNumber:function(e){var t=this.token,n=this.source;t.type=NUMBER;e=n[this.cursor++];if(e==="."){do{e=n[this.cursor++]}while(e>="0"&&e<="9");this.cursor--;this.lexExponent();t.value=parseFloat(t.start,this.cursor)}else if(e==="x"||e==="X"){do{e=n[this.cursor++]}while(e>="0"&&e<="9"||e>="a"&&e<="f"||e>="A"&&e<="F");this.cursor--;t.value=parseInt(n.substring(t.start,this.cursor))}else if(e>="0"&&e<="7"){do{e=n[this.cursor++]}while(e>="0"&&e<="7");this.cursor--;t.value=parseInt(n.substring(t.start,this.cursor))}else{this.cursor--;this.lexExponent();t.value=0}},lexNumber:function(e){var t=this.token,n=this.source;t.type=NUMBER;var r=false;do{e=n[this.cursor++];if(e==="."&&!r){r=true;e=n[this.cursor++]}}while(e>="0"&&e<="9");this.cursor--;var i=this.lexExponent();r=r||i;var s=n.substring(t.start,this.cursor);t.value=r?parseFloat(s):parseInt(s)},lexDot:function(e){var t=this.token,n=this.source;var r=n[this.cursor];if(r>="0"&&r<="9"){do{e=n[this.cursor++]}while(e>="0"&&e<="9");this.cursor--;this.lexExponent();t.type=NUMBER;t.value=parseFloat(t.start,this.cursor)}else{t.type=DOT;t.assignOp=null;t.value="."}},lexString:function(ch){var token=this.token,input=this.source;token.type=STRING;var hasEscapes=false;var delim=ch;while((ch=input[this.cursor++])!==delim){if(this.cursor>=input.length)throw this.newSyntaxError("Unterminated string literal");if(ch==="\\"){hasEscapes=true;if(++this.cursor==input.length)throw this.newSyntaxError("Unterminated string literal")}}token.value=hasEscapes?eval(input.substring(token.start,this.cursor)):input.substring(token.start+1,this.cursor-1)},lexRegExp:function(ch){var token=this.token,input=this.source;token.type=REGEXP;do{ch=input[this.cursor++];if(ch==="\\"){this.cursor++}else if(ch==="["){do{if(ch===undefined)throw this.newSyntaxError("Unterminated character class");if(ch==="\\")this.cursor++;ch=input[this.cursor++]}while(ch!=="]")}else if(ch===undefined){throw this.newSyntaxError("Unterminated regex")}}while(ch!=="/");do{ch=input[this.cursor++]}while(ch>="a"&&ch<="z");this.cursor--;token.value=eval(input.substring(token.start,this.cursor))},lexOp:function(e){var t=this.token,n=this.source;var r=opTokens[e];var i=n[this.cursor];if(i in r){r=r[i];this.cursor++;i=n[this.cursor];if(i in r){r=r[i];this.cursor++;i=n[this.cursor]}}var s=r.op;if(definitions.assignOps[s]&&n[this.cursor]==="="){this.cursor++;t.type=ASSIGN;t.assignOp=definitions.tokenIds[definitions.opTypeNames[s]];s+="="}else{t.type=definitions.tokenIds[definitions.opTypeNames[s]];t.assignOp=null}t.value=s},lexIdent:function(e){var t=this.token,n=this.source;do{e=n[this.cursor++]}while(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_");this.cursor--;var r=n.substring(t.start,this.cursor);t.type=definitions.keywords[r]||IDENTIFIER;t.value=r},get:function(e){var t;while(this.lookahead){--this.lookahead;this.tokenIndex=this.tokenIndex+1&3;t=this.tokens[this.tokenIndex];if(t.type!==NEWLINE||this.scanNewlines)return t.type}this.skip();this.tokenIndex=this.tokenIndex+1&3;t=this.tokens[this.tokenIndex];if(!t)this.tokens[this.tokenIndex]=t={};var n=this.source;if(this.cursor===n.length)return t.type=END;t.start=this.cursor;t.lineno=this.lineno;var r=n[this.cursor++];if(r>="a"&&r<="z"||r>="A"&&r<="Z"||r==="$"||r==="_"){this.lexIdent(r)}else if(e&&r==="/"){this.lexRegExp(r)}else if(r in opTokens){this.lexOp(r)}else if(r==="."){this.lexDot(r)}else if(r>="1"&&r<="9"){this.lexNumber(r)}else if(r==="0"){this.lexZeroNumber(r)}else if(r==='"'||r==="'"){this.lexString(r)}else if(this.scanNewlines&&r==="\n"){t.type=NEWLINE;t.value="\n";this.lineno++}else{throw this.newSyntaxError("Illegal token")}t.end=this.cursor;return t.type},unget:function(){if(++this.lookahead===4)throw"PANIC: too much lookahead!";this.tokenIndex=this.tokenIndex-1&3},newSyntaxError:function(e){var t=new SyntaxError(e,this.filename,this.lineno);t.source=this.source;t.cursor=this.lookahead?this.tokens[this.tokenIndex+this.lookahead&3].start:this.cursor;return t}};return{Tokenizer:Tokenizer}}();Narcissus.parser=function(){function pushDestructuringVarDecls(e,t){for(var n in e){var r=e[n];if(r.type===IDENTIFIER){t.varDecls.push(r)}else{pushDestructuringVarDecls(r,t)}}}function StaticContext(e,t,n,r,i){this.parentScript=e;this.parentBlock=t;this.inFunction=n;this.inForLoopInit=r;this.nesting=i;this.allLabels=new Stack;this.currentLabels=new Stack;this.labeledTargets=new Stack;this.defaultTarget=null;Narcissus.options.ecma3OnlyMode&&(this.ecma3OnlyMode=true);Narcissus.options.parenFreeMode&&(this.parenFreeMode=true)}function Script(e,t){var n=new Node(e,scriptInit());var r=new StaticContext(n,n,t,false,NESTING_TOP);Statements(e,r,n);return n}function Node(e,t){var n=e.token;if(n){this.type=n.type;this.value=n.value;this.lineno=n.lineno;this.start=n.start;this.end=n.end}else{this.lineno=e.lineno}this.tokenizer=e;this.children=[];for(var r in t)this[r]=t[r]}function tokenString(e){var t=definitions.tokens[e];return/^\W/.test(t)?definitions.opTypeNames[t]:t.toUpperCase()}function blockInit(){return{type:BLOCK,varDecls:[]}}function scriptInit(){return{type:SCRIPT,funDecls:[],varDecls:[],modDecls:[],impDecls:[],expDecls:[],loadDeps:[],hasEmptyReturn:false,hasReturnWithValue:false,isGenerator:false}}function MaybeLeftParen(e,t){if(t.parenFreeMode)return e.match(LEFT_PAREN)?LEFT_PAREN:END;return e.mustMatch(LEFT_PAREN).type}function MaybeRightParen(e,t){if(t===LEFT_PAREN)e.mustMatch(RIGHT_PAREN)}function Statements(e,t,n){try{while(!e.done&&e.peek(true)!==RIGHT_CURLY){n.push(Statement(e,t))}}catch(r){if(e.done){e.unexpectedEOF=true}throw r}}function Block(e,t){e.mustMatch(LEFT_CURLY);var n=new Node(e,blockInit());Statements(e,t.update({parentBlock:n}).pushTarget(n),n);e.mustMatch(RIGHT_CURLY);return n}function Statement(e,t){var n,r,i,s,o,u,a,f=e.get(true),l,c,h;switch(f){case FUNCTION:return FunctionDefinition(e,t,true,t.nesting!==NESTING_TOP?STATEMENT_FORM:DECLARED_FORM);case LEFT_CURLY:i=new Node(e,blockInit());Statements(e,t.update({parentBlock:i}).pushTarget(i).nest(NESTING_SHALLOW),i);e.mustMatch(RIGHT_CURLY);return i;case IF:i=new Node(e);i.condition=HeadExpression(e,t);c=t.pushTarget(i).nest(NESTING_DEEP);i.thenPart=Statement(e,c);i.elsePart=e.match(ELSE)?Statement(e,c):null;return i;case SWITCH:i=new Node(e,{cases:[],defaultIndex:-1});i.discriminant=HeadExpression(e,t);c=t.pushTarget(i).nest(NESTING_DEEP);e.mustMatch(LEFT_CURLY);while((f=e.get())!==RIGHT_CURLY){switch(f){case DEFAULT:if(i.defaultIndex>=0)throw e.newSyntaxError("More than one switch default");case CASE:s=new Node(e);if(f===DEFAULT)i.defaultIndex=i.cases.length;else s.caseLabel=Expression(e,c,COLON);break;default:throw e.newSyntaxError("Invalid switch case")}e.mustMatch(COLON);s.statements=new Node(e,blockInit());while((f=e.peek(true))!==CASE&&f!==DEFAULT&&f!==RIGHT_CURLY)s.statements.push(Statement(e,c));i.cases.push(s)}return i;case FOR:i=new Node(e,LOOP_INIT);if(e.match(IDENTIFIER)){if(e.token.value==="each")i.isEach=true;else e.unget()}if(!t.parenFreeMode)e.mustMatch(LEFT_PAREN);c=t.pushTarget(i).nest(NESTING_DEEP);h=t.update({inForLoopInit:true});if((f=e.peek())!==SEMICOLON){if(f===VAR||f===CONST){e.get();s=Variables(e,h)}else if(f===LET){e.get();if(e.peek()===LEFT_PAREN){s=LetBlock(e,h,false)}else{h.parentBlock=i;i.varDecls=[];s=Variables(e,h)}}else{s=Expression(e,h)}}if(s&&e.match(IN)){i.type=FOR_IN;i.object=Expression(e,h);if(s.type===VAR||s.type===LET){u=s.children;if(u.length!==1&&s.destructurings.length!==1){throw new SyntaxError("Invalid for..in left-hand side",e.filename,s.lineno)}if(s.destructurings.length>0){i.iterator=s.destructurings[0]}else{i.iterator=u[0]}i.varDecl=s}else{if(s.type===ARRAY_INIT||s.type===OBJECT_INIT){s.destructuredNames=checkDestructuring(e,h,s)}i.iterator=s}}else{i.setup=s;e.mustMatch(SEMICOLON);if(i.isEach)throw e.newSyntaxError("Invalid for each..in loop");i.condition=e.peek()===SEMICOLON?null:Expression(e,h);e.mustMatch(SEMICOLON);l=e.peek();i.update=(t.parenFreeMode?l===LEFT_CURLY||definitions.isStatementStartCode[l]:l===RIGHT_PAREN)?null:Expression(e,h)}if(!t.parenFreeMode)e.mustMatch(RIGHT_PAREN);i.body=Statement(e,c);return i;case WHILE:i=new Node(e,{isLoop:true});i.condition=HeadExpression(e,t);i.body=Statement(e,t.pushTarget(i).nest(NESTING_DEEP));return i;case DO:i=new Node(e,{isLoop:true});i.body=Statement(e,t.pushTarget(i).nest(NESTING_DEEP));e.mustMatch(WHILE);i.condition=HeadExpression(e,t);if(!t.ecmaStrictMode){e.match(SEMICOLON);return i}break;case BREAK:case CONTINUE:i=new Node(e);c=t.pushTarget(i);if(e.peekOnSameLine()===IDENTIFIER){e.get();i.label=e.token.value}i.target=i.label?c.labeledTargets.find(function(e){return e.labels.has(i.label)}):c.defaultTarget;if(!i.target)throw e.newSyntaxError("Invalid "+(f===BREAK?"break":"continue"));if(!i.target.isLoop&&f===CONTINUE)throw e.newSyntaxError("Invalid continue");break;case TRY:i=new Node(e,{catchClauses:[]});i.tryBlock=Block(e,t);while(e.match(CATCH)){s=new Node(e);o=MaybeLeftParen(e,t);switch(e.get()){case LEFT_BRACKET:case LEFT_CURLY:e.unget();s.varName=DestructuringExpression(e,t,true);break;case IDENTIFIER:s.varName=e.token.value;break;default:throw e.newSyntaxError("missing identifier in catch");break}if(e.match(IF)){if(t.ecma3OnlyMode)throw e.newSyntaxError("Illegal catch guard");if(i.catchClauses.length&&!i.catchClauses.top().guard)throw e.newSyntaxError("Guarded catch after unguarded");s.guard=Expression(e,t)}MaybeRightParen(e,o);s.block=Block(e,t);i.catchClauses.push(s)}if(e.match(FINALLY))i.finallyBlock=Block(e,t);if(!i.catchClauses.length&&!i.finallyBlock)throw e.newSyntaxError("Invalid try statement");return i;case CATCH:case FINALLY:throw e.newSyntaxError(definitions.tokens[f]+" without preceding try");case THROW:i=new Node(e);i.exception=Expression(e,t);break;case RETURN:i=ReturnOrYield(e,t);break;case WITH:i=new Node(e);i.object=HeadExpression(e,t);i.body=Statement(e,t.pushTarget(i).nest(NESTING_DEEP));return i;case VAR:case CONST:i=Variables(e,t);break;case LET:if(e.peek()===LEFT_PAREN)i=LetBlock(e,t,true);else i=Variables(e,t);break;case DEBUGGER:i=new Node(e);break;case NEWLINE:case SEMICOLON:i=new Node(e,{type:SEMICOLON});i.expression=null;return i;default:if(f===IDENTIFIER){f=e.peek();if(f===COLON){r=e.token.value;if(t.allLabels.has(r))throw e.newSyntaxError("Duplicate label");e.get();i=new Node(e,{type:LABEL,label:r});i.statement=Statement(e,t.pushLabel(r).nest(NESTING_SHALLOW));i.target=i.statement.type===LABEL?i.statement.target:i.statement;return i}}i=new Node(e,{type:SEMICOLON});e.unget();i.expression=Expression(e,t);i.end=i.expression.end;break}MagicalSemicolon(e);return i}function MagicalSemicolon(e){var t;if(e.lineno===e.token.lineno){t=e.peekOnSameLine();if(t!==END&&t!==NEWLINE&&t!==SEMICOLON&&t!==RIGHT_CURLY)throw e.newSyntaxError("missing ; before statement")}e.match(SEMICOLON)}function ReturnOrYield(e,t){var n,r,i=e.token.type,s;var o=t.parentScript;if(i===RETURN){if(!t.inFunction)throw e.newSyntaxError("Return not in function")}else{if(!t.inFunction)throw e.newSyntaxError("Yield not in function");o.isGenerator=true}n=new Node(e,{value:undefined});s=e.peek(true);if(s!==END&&s!==NEWLINE&&s!==SEMICOLON&&s!==RIGHT_CURLY&&(i!==YIELD||s!==i&&s!==RIGHT_BRACKET&&s!==RIGHT_PAREN&&s!==COLON&&s!==COMMA)){if(i===RETURN){n.value=Expression(e,t);o.hasReturnWithValue=true}else{n.value=AssignExpression(e,t)}}else if(i===RETURN){o.hasEmptyReturn=true}if(o.hasReturnWithValue&&o.isGenerator)throw e.newSyntaxError("Generator returns a value");return n}function FunctionDefinition(e,t,n,r){var i;var s=new Node(e,{params:[]});if(s.type!==FUNCTION)s.type=s.value==="get"?GETTER:SETTER;if(e.match(IDENTIFIER))s.name=e.token.value;else if(n)throw e.newSyntaxError("missing function identifier");var o=new StaticContext(null,null,true,false,NESTING_TOP);e.mustMatch(LEFT_PAREN);if(!e.match(RIGHT_PAREN)){do{switch(e.get()){case LEFT_BRACKET:case LEFT_CURLY:e.unget();s.params.push(DestructuringExpression(e,o));break;case IDENTIFIER:s.params.push(e.token.value);break;default:throw e.newSyntaxError("missing formal parameter");break}}while(e.match(COMMA));e.mustMatch(RIGHT_PAREN)}i=e.get();if(i!==LEFT_CURLY)e.unget();if(i!==LEFT_CURLY){s.body=AssignExpression(e,o);if(s.body.isGenerator)throw e.newSyntaxError("Generator returns a value")}else{s.body=Script(e,true)}if(i===LEFT_CURLY)e.mustMatch(RIGHT_CURLY);s.end=e.token.end;s.functionForm=r;if(r===DECLARED_FORM)t.parentScript.funDecls.push(s);return s}function Variables(e,t,n){var r,i,s,o,u,a;a=e.token.type;switch(a){case VAR:case CONST:u=t.parentScript;break;case LET:u=t.parentBlock;break;case LEFT_PAREN:a=LET;u=n;break}r=new Node(e,{type:a,destructurings:[]});do{a=e.get();if(a===LEFT_BRACKET||a===LEFT_CURLY){e.unget();var f=DestructuringExpression(e,t,true);i=new Node(e,{type:IDENTIFIER,name:f,readOnly:r.type===CONST});r.push(i);pushDestructuringVarDecls(i.name.destructuredNames,u);r.destructurings.push({exp:f,decl:i});if(t.inForLoopInit&&e.peek()===IN){continue}e.mustMatch(ASSIGN);if(e.token.assignOp)throw e.newSyntaxError("Invalid variable initialization");i.initializer=AssignExpression(e,t);continue}if(a!==IDENTIFIER)throw e.newSyntaxError("missing variable name");i=new Node(e,{type:IDENTIFIER,name:e.token.value,readOnly:r.type===CONST});r.push(i);u.varDecls.push(i);if(e.match(ASSIGN)){if(e.token.assignOp)throw e.newSyntaxError("Invalid variable initialization");i.initializer=AssignExpression(e,t)}}while(e.match(COMMA));return r}function LetBlock(e,t,n){var r,i;r=new Node(e,{type:LET_BLOCK,varDecls:[]});e.mustMatch(LEFT_PAREN);r.variables=Variables(e,t,r);e.mustMatch(RIGHT_PAREN);if(n&&e.peek()!==LEFT_CURLY){i=new Node(e,{type:SEMICOLON,expression:r});n=false}if(n)r.block=Block(e,t);else r.expression=AssignExpression(e,t);return r}function checkDestructuring(e,t,n,r){if(n.type===ARRAY_COMP)throw e.newSyntaxError("Invalid array comprehension left-hand side");if(n.type!==ARRAY_INIT&&n.type!==OBJECT_INIT)return;var i={};var s,o,u,a,f,l=n.children;for(var c=0,h=l.length;c<h;c++){if(!(s=l[c]))continue;if(s.type===PROPERTY_INIT){f=s.children;a=f[1];u=f[0].value}else if(n.type===OBJECT_INIT){a=s;u=s.value}else{a=s;u=c}if(a.type===ARRAY_INIT||a.type===OBJECT_INIT){i[u]=checkDestructuring(e,t,a,r)}else{if(r&&a.type!==IDENTIFIER){throw e.newSyntaxError("missing name in pattern")}i[u]=a}}return i}function DestructuringExpression(e,t,n){var r=PrimaryExpression(e,t);r.destructuredNames=checkDestructuring(e,t,r,n);return r}function GeneratorExpression(e,t,n){return new Node(e,{type:GENERATOR,expression:n,tail:ComprehensionTail(e,t)})}function ComprehensionTail(e,t){var n,r,i,s,o;n=new Node(e,{type:COMP_TAIL});do{r=new Node(e,{type:FOR_IN,isLoop:true});if(e.match(IDENTIFIER)){if(e.token.value==="each")r.isEach=true;else e.unget()}o=MaybeLeftParen(e,t);switch(e.get()){case LEFT_BRACKET:case LEFT_CURLY:e.unget();r.iterator=DestructuringExpression(e,t);break;case IDENTIFIER:r.iterator=s=new Node(e,{type:IDENTIFIER});s.name=s.value;r.varDecl=i=new Node(e,{type:VAR});i.push(s);t.parentScript.varDecls.push(s);break;default:throw e.newSyntaxError("missing identifier")}e.mustMatch(IN);r.object=Expression(e,t);MaybeRightParen(e,o);n.push(r)}while(e.match(FOR));if(e.match(IF))n.guard=HeadExpression(e,t);return n}function HeadExpression(e,t){var n=MaybeLeftParen(e,t);var r=ParenExpression(e,t);MaybeRightParen(e,n);if(n===END&&!r.parenthesized){var i=e.peek();if(i!==LEFT_CURLY&&!definitions.isStatementStartCode[i])throw e.newSyntaxError("Unparenthesized head followed by unbraced body")}return r}function ParenExpression(e,t){var n=Expression(e,t.update({inForLoopInit:t.inForLoopInit&&e.token.type===LEFT_PAREN}));if(e.match(FOR)){if(n.type===YIELD&&!n.parenthesized)throw e.newSyntaxError("Yield expression must be parenthesized");if(n.type===COMMA&&!n.parenthesized)throw e.newSyntaxError("Generator expression must be parenthesized");n=GeneratorExpression(e,t,n)}return n}function Expression(e,t){var n,r;n=AssignExpression(e,t);if(e.match(COMMA)){r=new Node(e,{type:COMMA});r.push(n);n=r;do{r=n.children[n.children.length-1];if(r.type===YIELD&&!r.parenthesized)throw e.newSyntaxError("Yield expression must be parenthesized");n.push(AssignExpression(e,t))}while(e.match(COMMA))}return n}function AssignExpression(e,t){var n,r;if(e.match(YIELD,true))return ReturnOrYield(e,t);n=new Node(e,{type:ASSIGN});r=ConditionalExpression(e,t);if(!e.match(ASSIGN)){return r}switch(r.type){case OBJECT_INIT:case ARRAY_INIT:r.destructuredNames=checkDestructuring(e,t,r);case IDENTIFIER:case DOT:case INDEX:case CALL:break;default:throw e.newSyntaxError("Bad left-hand side of assignment");break}n.assignOp=e.token.assignOp;n.push(r);n.push(AssignExpression(e,t));return n}function ConditionalExpression(e,t){var n,r;n=OrExpression(e,t);if(e.match(HOOK)){r=n;n=new Node(e,{type:HOOK});n.push(r);n.push(AssignExpression(e,t.update({inForLoopInit:false})));if(!e.match(COLON))throw e.newSyntaxError("missing : after ?");n.push(AssignExpression(e,t))}return n}function OrExpression(e,t){var n,r;n=AndExpression(e,t);while(e.match(OR)){r=new Node(e);r.push(n);r.push(AndExpression(e,t));n=r}return n}function AndExpression(e,t){var n,r;n=BitwiseOrExpression(e,t);while(e.match(AND)){r=new Node(e);r.push(n);r.push(BitwiseOrExpression(e,t));n=r}return n}function BitwiseOrExpression(e,t){var n,r;n=BitwiseXorExpression(e,t);while(e.match(BITWISE_OR)){r=new Node(e);r.push(n);r.push(BitwiseXorExpression(e,t));n=r}return n}function BitwiseXorExpression(e,t){var n,r;n=BitwiseAndExpression(e,t);while(e.match(BITWISE_XOR)){r=new Node(e);r.push(n);r.push(BitwiseAndExpression(e,t));n=r}return n}function BitwiseAndExpression(e,t){var n,r;n=EqualityExpression(e,t);while(e.match(BITWISE_AND)){r=new Node(e);r.push(n);r.push(EqualityExpression(e,t));n=r}return n}function EqualityExpression(e,t){var n,r;n=RelationalExpression(e,t);while(e.match(EQ)||e.match(NE)||e.match(STRICT_EQ)||e.match(STRICT_NE)){r=new Node(e);r.push(n);r.push(RelationalExpression(e,t));n=r}return n}function RelationalExpression(e,t){var n,r;var i=t.update({inForLoopInit:false});n=ShiftExpression(e,i);while(e.match(LT)||e.match(LE)||e.match(GE)||e.match(GT)||!t.inForLoopInit&&e.match(IN)||e.match(INSTANCEOF)){r=new Node(e);r.push(n);r.push(ShiftExpression(e,i));n=r}return n}function ShiftExpression(e,t){var n,r;n=AddExpression(e,t);while(e.match(LSH)||e.match(RSH)||e.match(URSH)){r=new Node(e);r.push(n);r.push(AddExpression(e,t));n=r}return n}function AddExpression(e,t){var n,r;n=MultiplyExpression(e,t);while(e.match(PLUS)||e.match(MINUS)){r=new Node(e);r.push(n);r.push(MultiplyExpression(e,t));n=r}return n}function MultiplyExpression(e,t){var n,r;n=UnaryExpression(e,t);while(e.match(MUL)||e.match(DIV)||e.match(MOD)){r=new Node(e);r.push(n);r.push(UnaryExpression(e,t));n=r}return n}function UnaryExpression(e,t){var n,r,i;switch(i=e.get(true)){case DELETE:case VOID:case TYPEOF:case NOT:case BITWISE_NOT:case PLUS:case MINUS:if(i===PLUS)n=new Node(e,{type:UNARY_PLUS});else if(i===MINUS)n=new Node(e,{type:UNARY_MINUS});else n=new Node(e);n.push(UnaryExpression(e,t));break;case INCREMENT:case DECREMENT:n=new Node(e);n.push(MemberExpression(e,t,true));break;default:e.unget();n=MemberExpression(e,t,true);if(e.tokens[e.tokenIndex+e.lookahead-1&3].lineno===e.lineno){if(e.match(INCREMENT)||e.match(DECREMENT)){r=new Node(e,{postfix:true});r.push(n);n=r}}break}return n}function MemberExpression(e,t,n){var r,i,s,o;if(e.match(NEW)){r=new Node(e);r.push(MemberExpression(e,t,false));if(e.match(LEFT_PAREN)){r.type=NEW_WITH_ARGS;r.push(ArgumentList(e,t))}}else{r=PrimaryExpression(e,t)}while((o=e.get())!==END){switch(o){case DOT:i=new Node(e);i.push(r);e.mustMatch(IDENTIFIER);i.push(new Node(e));break;case LEFT_BRACKET:i=new Node(e,{type:INDEX});i.push(r);i.push(Expression(e,t));e.mustMatch(RIGHT_BRACKET);break;case LEFT_PAREN:if(n){i=new Node(e,{type:CALL});i.push(r);i.push(ArgumentList(e,t));break};default:e.unget();return r}r=i}return r}function ArgumentList(e,t){var n,r;n=new Node(e,{type:LIST});if(e.match(RIGHT_PAREN,true))return n;do{r=AssignExpression(e,t);if(r.type===YIELD&&!r.parenthesized&&e.peek()===COMMA)throw e.newSyntaxError("Yield expression must be parenthesized");if(e.match(FOR)){r=GeneratorExpression(e,t,r);if(n.children.length>1||e.peek(true)===COMMA)throw e.newSyntaxError("Generator expression must be parenthesized")}n.push(r)}while(e.match(COMMA));e.mustMatch(RIGHT_PAREN);return n}function PrimaryExpression(e,t){var n,r,i=e.get(true);switch(i){case FUNCTION:n=FunctionDefinition(e,t,false,EXPRESSED_FORM);break;case LEFT_BRACKET:n=new Node(e,{type:ARRAY_INIT});while((i=e.peek(true))!==RIGHT_BRACKET){if(i===COMMA){e.get();n.push(null);continue}n.push(AssignExpression(e,t));if(i!==COMMA&&!e.match(COMMA))break}if(n.children.length===1&&e.match(FOR)){r=new Node(e,{type:ARRAY_COMP,expression:n.children[0],tail:ComprehensionTail(e,t)});n=r}e.mustMatch(RIGHT_BRACKET);break;case LEFT_CURLY:var s,o;n=new Node(e,{type:OBJECT_INIT});e:if(!e.match(RIGHT_CURLY)){do{i=e.get();if((e.token.value==="get"||e.token.value==="set")&&e.peek()===IDENTIFIER){if(t.ecma3OnlyMode)throw e.newSyntaxError("Illegal property accessor");n.push(FunctionDefinition(e,t,true,EXPRESSED_FORM))}else{switch(i){case IDENTIFIER:case NUMBER:case STRING:s=new Node(e,{type:IDENTIFIER});break;case RIGHT_CURLY:if(t.ecma3OnlyMode)throw e.newSyntaxError("Illegal trailing ,");break e;default:if(e.token.value in definitions.keywords){s=new Node(e,{type:IDENTIFIER});break}throw e.newSyntaxError("Invalid property name")}if(e.match(COLON)){r=new Node(e,{type:PROPERTY_INIT});r.push(s);r.push(AssignExpression(e,t));n.push(r)}else{if(e.peek()!==COMMA&&e.peek()!==RIGHT_CURLY)throw e.newSyntaxError("missing : after property");n.push(s)}}}while(e.match(COMMA));e.mustMatch(RIGHT_CURLY)}break;case LEFT_PAREN:n=ParenExpression(e,t);e.mustMatch(RIGHT_PAREN);n.parenthesized=true;break;case LET:n=LetBlock(e,t,false);break;case NULL:case THIS:case TRUE:case FALSE:case IDENTIFIER:case NUMBER:case STRING:case REGEXP:n=new Node(e);break;default:throw e.newSyntaxError("missing operand");break}return n}function parse(e,t,n){var r=new lexer.Tokenizer(e,t,n);var i=Script(r,false);if(!r.done)throw r.newSyntaxError("Syntax error");return i}function parseStdin(e,t){for(;;){try{var n=new lexer.Tokenizer(e,"stdin",t.value);var r=Script(n,false);t.value=n.lineno;return r}catch(i){if(!n.unexpectedEOF)throw i;var s=readline();if(!s)throw i;e+="\n"+s}}}var lexer=Narcissus.lexer;var definitions=Narcissus.definitions;const StringMap=definitions.StringMap;const Stack=definitions.Stack;eval(definitions.consts);const NESTING_TOP=0,NESTING_SHALLOW=1,NESTING_DEEP=2;StaticContext.prototype={ecma3OnlyMode:false,parenFreeMode:false,update:function(e){var t={};for(var n in e){t[n]={value:e[n],writable:true,enumerable:true,configurable:true}}return Object.create(this,t)},pushLabel:function(e){return this.update({currentLabels:this.currentLabels.push(e),allLabels:this.allLabels.push(e)})},pushTarget:function(e){var t=e.isLoop||e.type===SWITCH;if(this.currentLabels.isEmpty()){return t?this.update({defaultTarget:e}):this}e.labels=new StringMap;this.currentLabels.forEach(function(t){e.labels.set(t,true)});return this.update({currentLabels:new Stack,labeledTargets:this.labeledTargets.push(e),defaultTarget:t?e:this.defaultTarget})},nest:function(e){var t=Math.max(this.nesting,e);return t!==this.nesting?this.update({nesting:t}):this}};definitions.defineProperty(Array.prototype,"top",function(){return this.length&&this[this.length-1]},false,false,true);var Np=Node.prototype={};Np.constructor=Node;Np.toSource=Object.prototype.toSource;Np.push=function(e){if(e!==null){if(e.start<this.start)this.start=e.start;if(this.end<e.end)this.end=e.end}return this.children.push(e)};Node.indentLevel=0;Np.toString=function(){var e=[];for(var t in this){if(this.hasOwnProperty(t)&&t!=="type"&&t!=="target")e.push({id:t,value:this[t]})}e.sort(function(e,t){return e.id<t.id?-1:1});const n="    ";var r=++Node.indentLevel;var i="{\n"+n.repeat(r)+"type: "+tokenString(this.type);for(t=0;t<e.length;t++)i+=",\n"+n.repeat(r)+e[t].id+": "+e[t].value;r=--Node.indentLevel;i+="\n"+n.repeat(r)+"}";return i};Np.getSource=function(){return this.tokenizer.source.slice(this.start,this.end)};const LOOP_INIT={isLoop:true};definitions.defineGetter(Np,"filename",function(){return this.tokenizer.filename});definitions.defineGetter(Np,"length",function(){throw new Error("Node.prototype.length is gone; "+"use n.children.length instead")});definitions.defineProperty(String.prototype,"repeat",function(e){var t="",n=this+t;while(--e>=0)t+=n;return t},false,false,true);const DECLARED_FORM=0,EXPRESSED_FORM=1,STATEMENT_FORM=2;return{parse:parse,parseStdin:parseStdin,Node:Node,DECLARED_FORM:DECLARED_FORM,EXPRESSED_FORM:EXPRESSED_FORM,STATEMENT_FORM:STATEMENT_FORM,Tokenizer:lexer.Tokenizer,FunctionDefinition:FunctionDefinition}}();var exports={definitions:Narcissus.definitions,lexer:Narcissus.lexer,parser:Narcissus.parser};if(typeof module!="undefined"){module.exports=exports}(function(){var e,t,n,r,i,s,o,u,a=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;t<n;t++){if(t in this&&this[t]===e)return t}return-1},f=Array.prototype.slice;i=this.Narcissus||require("./narcissus_packed");u=this._||require("underscore");o=i.definitions.tokens;s=i.parser;e=s.Node;e.prototype.left=function(){return this.children[0]};e.prototype.right=function(){return this.children[1]};e.prototype.last=function(){return this.children[this.children.length-1]};e.prototype.walk=function(e,t,n,r){if(n==null)n=null;if(r==null)r=null;if(n)t(n,this,r);if(e.last)if(this.last()!=null)this.last().walk(e,t,this);if(this.thenPart!=null)this.thenPart.walk(e,t,this,"thenPart");if(this.elsePart!=null)this.elsePart.walk(e,t,this,"elsePart");if(this.cases){return u.each(this.cases,function(n){return n.statements.walk(e,t,n,"cases")})}};e.prototype.clone=function(t){var n;for(n in this){if(n==="tokenizer"||n==="length"||n==="filename")continue;if(t[n]==null)t[n]=this[n]}return new e(this.tokenizer,t)};e.prototype.toHash=function(e){var t,n,r;if(e==null)e=[];t={};r=function(t){if(!t)return null;if(t.toHash){if(a.call(e,t)>=0){return"--recursive "+t.id+"--"}t.id=e.push(t);return t.toHash(e)}else{return t}};t.type=this.typeName();t.src=this.src();for(n in this){if(n==="filename"||n==="length"||n==="type"||n==="start"||n==="end"||n==="tokenizer"){continue}if(typeof this[n]==="function")continue;if(!this[n])continue;if(this[n].constructor===Array){t[n]=u.map(this[n],function(e){return r(e)})}else{t[n]=r(this[n])}}return t};e.prototype.inspect=function(){return JSON.stringify(this.toHash(),null,"  ")};e.prototype.src=function(){return this.tokenizer.source.substr(this.start,this.end-this.start)};e.prototype.typeName=function(){return n[this.type]};e.prototype.isA=function(){var e,t;e=1<=arguments.length?f.call(arguments,0):[];return t=n[this.type],a.call(e,t)>=0};n=function(){var e,t,n;e={};n=0;for(t in o){if(typeof o[t]==="number"){e[o[t]]=t.toLowerCase();n=o[t]}}e[++n]="call_statement";e[++n]="existence_check";return e}();t=function(){var e,t;e={};for(t in n){e[n[t]]=t}return e}();this.NodeExt=r={Types:n,Typenames:t,Node:e};if(typeof module!=="undefined"&&module!==null)module.exports=r}).call(this);(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;t<n;t++){if(t in this&&this[t]===e)return t}return-1};t=this.CoffeeScript||require("coffee-script");e=function(){function e(){this.code=""}e.prototype.add=function(e){this.code+=e.toString();return this};e.prototype.scope=function(e,t){var n;if(t==null)t=1;n=h("  ",t);this.code=l(this.code)+"\n";this.code+=n+l(e).replace(/\n/g,"\n"+n)+"\n";return this};e.prototype.toString=function(){return this.code};return e}();f=function(e){var t;t=e.toString();if(t.substr(0,1)==="("&&t.substr(-1,1)===")"){return t}else{return"("+t+")"}};h=function(e,t){var n;return function(){var r;r=[];for(n=0;0<=t?n<t:n>t;0<=t?n++:n--){r.push(e)}return r}().join("")};u=function(e){return(""+e).replace(/^\s*/g,"")};l=function(e){return(""+e).replace(/\s*$/g,"")};n=function(e){return(""+e).replace(/^\s*\n|\s*$/g,"")};p=function(e){return(""+e).replace(/^\s*|\s*$/g,"")};o=function(e){return p(e).indexOf("\n")===-1};m=function(e){var t,n;e=""+e;while(true){t=e.match(/^/gm);n=e.match(/^ /gm);if(!t||!n||t.length!==n.length)return e;e=e.replace(/^ /gm,"")}};d=function(e){return e.isA("true")||e.isA("number")&&parseFloat(e.src())!==0};c=function(e){return JSON.stringify(""+e)};a=function(e){if(e.constructor===String){console.log(JSON.stringify(e))}else{console.log(e)}return""};r=function(){var e,n,r,i;r=t.RESERVED;i=[];for(e=0,n=r.length;e<n;e++){g=r[e];if(g!=="undefined")i.push(g)}return i}();v=function(e){var t;if(t=""+e,y.call(r,t)>=0){return""+e+"_"}else{return""+e}};s=function(e,t){return e+t.replace(/\n/g,"\n"+e)};this.Js2coffeeHelpers=i={Code:e,p:a,strEscape:c,unreserve:v,unshift:m,isSingleLine:o,trim:p,blockTrim:n,ltrim:u,rtrim:l,strRepeat:h,paren:f,truthy:d,indentLines:s};if(typeof module!=="undefined"&&module!==null)module.exports=i}).call(this);(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;t<n;t++){if(t in this&&this[t]===e)return t}return-1},k=Array.prototype.slice,L=Object.prototype.hasOwnProperty;v=(this.Narcissus||require("./narcissus_packed")).parser;x=this._||require("underscore");T=this.NodeExt||require("./node_ext"),s=T.Types,i=T.Typenames,n=T.Node;N=this.Js2coffeeHelpers||require("./helpers"),t=N.Code,p=N.p,g=N.strEscape,E=N.unreserve,S=N.unshift,c=N.isSingleLine,b=N.trim,u=N.blockTrim,h=N.ltrim,m=N.rtrim,y=N.strRepeat,d=N.paren,w=N.truthy,l=N.indentLines;a=function(t,n){var r,i,s,o,u,a,f,c,p,d,g,y,w,E,S,T;if(n==null)n={};t=t.replace(/\r/g,"");t+="\n";r=new e(n);g=v.parse(t);c=b(r.build(g));if(n.no_comments){return function(){var e,t,n,r;n=c.split("\n");r=[];for(e=0,t=n.length;e<t;e++){a=n[e];r.push(m(a))}return r}().join("\n")}else{o=n.show_src_lineno;d=[];T=c.split("\n");for(E=0,S=T.length;E<S;E++){u=T[E];y=[];w=u.replace(/\uFEFE([0-9]+).*?\uFEFE/g,function(e,t){y.push(parseInt(t));return""});y=x.sortBy(x.uniq(y),function(e){return e});w=m(w);s=w.match(/^\s*/);if(y.length>0){f=x.last(y);p=r.commentsNotDoneTo(f);if(p)d.push(l(s,p))}if(w){if(o)w=w+"#"+y.join(",")+"#  ";d.push(m(w+" "+h(r.lineComments(y))))}else{d.push("")}}i=r.commentsNotDoneTo(1e10);if(i)d.push(i);return d.join("\n")}};e=function(){function e(e){this.options=e!=null?e:{};this.transformer=new r}e.prototype.l=function(e){if(this.options.no_comments)return"";if(e&&e.lineno){return"﻾"+e.lineno+"﻾"}else{return""}};e.prototype.makeComment=function(e){var t,n;if(e.type==="BLOCK_COMMENT"){t=e.value.split("\n");if(t.length>0&&t[0].length>0&&t[0][0]==="*"){t=function(){var e,r,i;i=[];for(e=0,r=t.length;e<r;e++){n=t[e];i.push(n.replace(/^[\s\*]*/,""))}return i}();t=function(){var e,r,i;i=[];for(e=0,r=t.length;e<r;e++){n=t[e];i.push(n.replace(/[\s]*$/,""))}return i}();while(t.length>0&&t[0].length===0){t.shift()}while(t.length>0&&t[t.length-1].length===0){t.pop()}t.unshift("###");t.push("###")}else{t=function(){var e,r,i;i=[];for(e=0,r=t.length;e<r;e++){n=t[e];i.push("#"+n)}return i}()}}else{t=["#"+e.value]}if(e.nlcount>0)t.unshift("");return t.join("\n")};e.prototype.commentsNotDoneTo=function(e){var t,n;n=[];while(true){if(this.comments.length===0)break;t=this.comments[0];if(t.lineno<e){n.push(this.makeComment(t));this.comments.shift();continue}break}return n.join("\n")};e.prototype.lineComments=function(e){var t,n;n=function(){var n,r,i,s,o;i=this.comments;o=[];for(n=0,r=i.length;n<r;n++){t=i[n];if(s=t.lineno,C.call(e,s)>=0){o.push(t)}}return o}.call(this);this.comments=x.difference(this.comments,n);return function(){var e,r,i;i=[];for(e=0,r=n.length;e<r;e++){t=n[e];i.push(this.makeComment(t))}return i}.call(this).join("\n")};e.prototype.build=function(){var e,t,n,r,i;e=1<=arguments.length?k.call(arguments,0):[];r=e[0];if(!(this.comments!=null)){this.comments=x.sortBy(r.tokenizer.comments,function(e){return e.start})}this.transform(r);n="other";if(r!==void 0&&r.typeName)n=r.typeName();t=this[n]||this.other;i=t.apply(this,e);if(r.parenthesized){return d(i)}else{return i}};e.prototype.transform=function(){var e;e=1<=arguments.length?k.call(arguments,0):[];return this.transformer.transform.apply(this.transformer,e)};e.prototype.body=function(e,t){var n;if(t==null)t={};n=this.build(e,t);n=u(n);n=S(n);if(n.length>0){return n}else{return""}};e.prototype["script"]=function(e,n){var r,i=this;if(n==null)n={};r=new t;x.each(e.functions,function(e){return r.add(i.build(e))});x.each(e.nonfunctions,function(e){return r.add(i.build(e))});return r.toString()};e.prototype["property_identifier"]=function(e){var t;t=e.value.toString();if(t.match(/^([_\$a-z][_\$a-z0-9]*)$/i)||t.match(/^[0-9]+$/i)){return this.l(e)+t}else{return this.l(e)+g(t)}};e.prototype["identifier"]=function(e){if(e.value==="undefined"){return this.l(e)+"`undefined`"}else if(e.property_accessor){return this.l(e)+e.value.toString()}else{return this.l(e)+E(e.value.toString())}};e.prototype["number"]=function(e){return this.l(e)+(""+e.src())};e.prototype["id"]=function(e){if(e.property_accessor){return this.l(e)+e}else{return this.l(e)+E(e)}};e.prototype["id_param"]=function(e){var t;if((t=e.toString())==="undefined"){return this.l(e)+(""+e+"_")}else{return this.l(e)+this.id(e)}};e.prototype["return"]=function(e){if(!(e.value!=null)){return this.l(e)+"return\n"}else{return this.l(e)+("return "+this.build(e.value)+"\n")}};e.prototype[";"]=function(e){var t;if(e.expression==null){return""}else if(e.expression.typeName()==="object_init"){t=this.object_init(e.expression);if(e.parenthesized){return t}else{return""+S(u(t))+"\n"}}else{return this.build(e.expression)+"\n"}};e.prototype["new"]=function(e){return this.l(e)+("new "+this.build(e.left()))};e.prototype["new_with_args"]=function(e){return this.l(e)+("new "+this.build(e.left())+"("+this.build(e.right())+")")};e.prototype["unary_plus"]=function(e){return"+"+this.build(e.left())};e.prototype["unary_minus"]=function(e){return"-"+this.build(e.left())};e.prototype["this"]=function(e){return this.l(e)+"this"};e.prototype["null"]=function(e){return this.l(e)+"null"};e.prototype["true"]=function(e){return this.l(e)+"true"};e.prototype["false"]=function(e){return this.l(e)+"false"};e.prototype["void"]=function(e){return this.l(e)+"undefined"};e.prototype["debugger"]=function(e){return this.l(e)+"debugger\n"};e.prototype["break"]=function(e){return this.l(e)+"break\n"};e.prototype["continue"]=function(e){return this.l(e)+"continue\n"};e.prototype["~"]=function(e){return"~"+this.build(e.left())};e.prototype["typeof"]=function(e){return this.l(e)+("typeof "+this.build(e.left()))};e.prototype["index"]=function(e){var t;t=this.build(e.right());if(x.any(e.children,function(e){return e.typeName()==="object_init"&&e.children.length>1})){t="{"+t+"}"}return this.l(e)+(""+this.build(e.left())+"["+t+"]")};e.prototype["throw"]=function(e){return this.l(e)+("throw "+this.build(e.exception))};e.prototype["!"]=function(e){var t,n;n=e.left();t=1;while(n.isA("!")&&(n=n.left())){++t}if(t&1&&n.isA("==","!=","===","!==","in","instanceof")){n.negated=!n.negated;return this.build(n)}return this.l(e)+(""+(t&1?"not ":"!!")+this.build(n))};e.prototype["in"]=function(e){return this.binary_operator(e,"of")};e.prototype["+"]=function(e){return this.binary_operator(e,"+")};e.prototype["-"]=function(e){return this.binary_operator(e,"-")};e.prototype["*"]=function(e){return this.binary_operator(e,"*")};e.prototype["/"]=function(e){return this.binary_operator(e,"/")};e.prototype["%"]=function(e){return this.binary_operator(e,"%")};e.prototype[">"]=function(e){return this.binary_operator(e,">")};e.prototype["<"]=function(e){return this.binary_operator(e,"<")};e.prototype["&"]=function(e){return this.binary_operator(e,"&")};e.prototype["|"]=function(e){return this.binary_operator(e,"|")};e.prototype["^"]=function(e){return this.binary_operator(e,"^")};e.prototype["&&"]=function(e){return this.binary_operator(e,"and")};e.prototype["||"]=function(e){return this.binary_operator(e,"or")};e.prototype["<<"]=function(e){return this.binary_operator(e,"<<")};e.prototype["<="]=function(e){return this.binary_operator(e,"<=")};e.prototype[">>"]=function(e){return this.binary_operator(e,">>")};e.prototype[">="]=function(e){return this.binary_operator(e,">=")};e.prototype["==="]=function(e){return this.binary_operator(e,"is")};e.prototype["!=="]=function(e){return this.binary_operator(e,"isnt")};e.prototype[">>>"]=function(e){return this.binary_operator(e,">>>")};e.prototype["instanceof"]=function(e){return this.binary_operator(e,"instanceof")};e.prototype["=="]=function(e){return this.binary_operator(e,"is")};e.prototype["!="]=function(e){return this.binary_operator(e,"isnt")};e.prototype["binary_operator"]=function(){var e,t,n;e={is:"isnt","in":"not in",of:"not of","instanceof":"not instanceof"};for(t in e){if(!L.call(e,t))continue;n=e[t];e[n]=t}return function(t,n){if(t.negated)n=e[n];return this.l(t)+(""+this.build(t.left())+" "+n+" "+this.build(t.right()))}}();e.prototype["--"]=function(e){return this.increment_decrement(e,"--")};e.prototype["++"]=function(e){return this.increment_decrement(e,"++")};e.prototype["increment_decrement"]=function(e,t){if(e.postfix){return this.l(e)+(""+this.build(e.left())+t)}else{return this.l(e)+(""+t+this.build(e.left()))}};e.prototype["="]=function(e){var t;t=e.assignOp!=null?s[e.assignOp]+"=":"=";return this.l(e)+(""+this.build(e.left())+" "+t+" "+this.build(e.right()))};e.prototype[","]=function(e){var t,n=this;t=x.map(e.children,function(e){return n.l(e)+n.build(e)+"\n"});return t.join("")};e.prototype["regexp"]=function(e){var t,n,r,i;r=e.value.toString().match(/^\/(.*)\/([a-z]?)/);i=r[1];n=r[2];t=i[0];if(t===" "||t==="="){if(n.length>0){return this.l(e)+("RegExp("+g(i)+', "'+n+'")')}else{return this.l(e)+("RegExp("+g(i)+")")}}else{return this.l(e)+("/"+i+"/"+n)}};e.prototype["string"]=function(e){return this.l(e)+g(e.value)};e.prototype["call"]=function(e){if(e.right().children.length===0){return""+this.build(e.left())+"()"+this.l(e)}else{return""+this.build(e.left())+"("+this.build(e.right())+")"+this.l(e)}};e.prototype["call_statement"]=function(e){var t;t=this.build(e.left());if(e.left().isA("function"))t=d(t);if(e.right().children.length===0){return""+t+"()"+this.l(e)}else{return""+t+" "+this.build(e.right())+this.l(e)}};e.prototype["list"]=function(e){var t,n=this;t=x.map(e.children,function(t){if(e.children.length>1)t.is_list_element=true;return n.build(t)});return this.l(e)+t.join(", ")};e.prototype["delete"]=function(e){var t,n=this;t=x.map(e.children,function(e){return n.build(e)});t=t.join(", ");return this.l(e)+("delete "+t+"\n")};e.prototype["."]=function(e){var t,n,r;t=this.build(e.left());r=e.right();r.property_accessor=true;n=this.build(r);if(e.isThis&&e.isPrototype){return this.l(e)+"@::"}else if(e.isThis){return this.l(e)+("@"+n)}else if(e.isPrototype){return this.l(e)+(""+t+"::")}else if(e.left().isPrototype){return this.l(e)+(""+t+n)}else{return this.l(e)+(""+t+"."+n)}};e.prototype["try"]=function(e){var n,r=this;n=new t;n.add("try");n.scope(this.body(e.tryBlock));x.each(e.catchClauses,function(e){return n.add(r.build(e))});if(e.finallyBlock!=null){n.add("finally");n.scope(this.body(e.finallyBlock))}return this.l(e)+n};e.prototype["catch"]=function(e){var n,r;n=this.body(e.block);if(b(n).length===0)return"";r=new t;if(e.varName!=null){r.add("catch "+e.varName)}else{r.add("catch")}r.scope(this.body(e.block));return this.l(e)+r};e.prototype["?"]=function(e){return this.l(e)+("(if "+this.build(e.left())+" then "+this.build(e.children[1])+" else "+this.build(e.children[2])+")")};e.prototype["for"]=function(e){var n;n=new t;if(e.setup!=null)n.add(""+this.build(e.setup)+"\n");if(e.condition!=null){n.add("while "+this.build(e.condition)+"\n")}else{n.add("loop")}n.scope(this.body(e.body));if(e.update!=null)n.scope(this.body(e.update));return this.l(e)+n};e.prototype["for_in"]=function(e){var n;n=new t;n.add("for "+this.build(e.iterator)+" of "+this.build(e.object));n.scope(this.body(e.body));return this.l(e)+n};e.prototype["while"]=function(e){var n,r,i,s;r=new t;i=e.positive?"while":"until";n=this.body(e.body);if(w(e.condition)){s="loop"}else{s=""+i+" "+this.build(e.condition)}if(c(n)&&s!=="loop"){r.add(""+b(n)+"  "+s+"\n")}else{r.add(s);r.scope(n)}return this.l(e)+r};e.prototype["do"]=function(e){var n;n=new t;n.add("loop");n.scope(this.body(e.body));if(e.condition!=null){n.scope("break unless "+this.build(e.condition))}return this.l(e)+n};e.prototype["if"]=function(e){var n,r,i;r=new t;i=e.positive?"if":"unless";n=this.body(e.thenPart);e.condition.parenthesized=false;if(e.thenPart.isA("block")&&e.thenPart.children.length===0&&!(e.elsePart!=null)){console.log(e.thenPart);r.add(""+this.build(e.condition)+"\n")}else if(c(n)&&!(e.elsePart!=null)){r.add(""+b(n)+"  "+i+" "+this.build(e.condition)+"\n")}else{r.add(""+i+" "+this.build(e.condition));r.scope(this.body(e.thenPart));if(e.elsePart!=null){if(e.elsePart.typeName()==="if"){r.add("else "+this.build(e.elsePart).toString())}else{r.add(this.l(e.elsePart)+"else\n");r.scope(this.body(e.elsePart))}}}return this.l(e)+r};e.prototype["switch"]=function(e){var n,r,i=this;n=new t;n.add("switch "+this.build(e.discriminant)+"\n");r=false;x.each(e.cases,function(e){var t;if(e.value==="default"){n.scope(i.l(e)+"else")}else{if(r===true){n.add(i.l(e)+(", "+i.build(e.caseLabel)+"\n"))}else{n.add(i.l(e)+("  when "+i.build(e.caseLabel)))}}if(i.body(e.statements).length===0){r=true}else{r=false;n.add("\n");n.scope(i.body(e.statements),2)}return t=false});return this.l(e)+n};e.prototype["existence_check"]=function(e){return this.l(e)+(""+this.build(e.left())+"?")};e.prototype["array_init"]=function(e){if(e.children.length===0){return this.l(e)+"[]"}else{return this.l(e)+("["+this.list(e)+"]")}};e.prototype["property_init"]=function(e){var t,n;t=e.left();n=e.right();n.is_property_value=true;return""+this.property_identifier(t)+": "+this.build(n)};e.prototype["object_init"]=function(e,n){var r,i,s=this;if(n==null)n={};if(e.children.length===0){return this.l(e)+"{}"}else if(e.children.length===1&&!(e.is_property_value||e.is_list_element)){return this.build(e.children[0])}else{i=x.map(e.children,function(e){return s.build(e)});r=new t(this,e);r.scope(i.join("\n"));if(n.brackets!=null)r="{"+r+"}";return r}};e.prototype["function"]=function(e){var n,r,i,s=this;r=new t;i=x.map(e.params,function(e){if(e.constructor===String){return s.id_param(e)}else{return s.build(e)}});if(e.name)r.add(""+e.name+" = ");if(e.params.length>0){r.add("("+i.join(", ")+") ->")}else{r.add("->")}n=this.body(e.body);if(b(n).length>0){r.scope(n)}else{r.add("\n")}return this.l(e)+r};e.prototype["var"]=function(e){var t,n=this;t=x.map(e.children,function(e){return""+E(e.value)+" = "+(e.initializer!=null?n.build(e.initializer):"undefined")});return this.l(e)+x.compact(t).join("\n")+"\n"};e.prototype["other"]=function(e){return this.unsupported(e,""+e.typeName()+" is not supported yet")};e.prototype["getter"]=function(e){return this.unsupported(e,"getter syntax is not supported; use __defineGetter__")};e.prototype["setter"]=function(e){return this.unsupported(e,"setter syntax is not supported; use __defineSetter__")};e.prototype["label"]=function(e){return this.unsupported(e,"labels are not supported by CoffeeScript")};e.prototype["const"]=function(e){return this.unsupported(e,"consts are not supported by CoffeeScript")};e.prototype["block"]=function(){var e;e=1<=arguments.length?k.call(arguments,0):[];return this.script.apply(this,e)};e.prototype["unsupported"]=function(e,t){throw new o("Unsupported: "+t,e)};return e}();r=function(){function e(){}e.prototype.transform=function(){var e,t,n,r;e=1<=arguments.length?k.call(arguments,0):[];n=e[0];if(n.transformed!=null)return;r=n.typeName();t=this[r];if(t){t.apply(this,e);return n.transformed=true}};e.prototype["script"]=function(e){var t,n=this;e.functions=[];e.nonfunctions=[];x.each(e.children,function(t){if(t.isA("function")){return e.functions.push(t)}else{return e.nonfunctions.push(t)}});t=null;return x.each(e.nonfunctions,function(e){var n;if(e.expression!=null){n=e.expression;if((t!=null?t.isA("object_init"):void 0)&&n.isA("object_init")){e.parenthesized=true}else{e.parenthesized=false}return t=n}})};e.prototype["."]=function(e){e.isThis=e.left().isA("this");return e.isPrototype=e.right().isA("identifier")&&e.right().value==="prototype"};e.prototype[";"]=function(e){if(e.expression!=null){e.expression.parenthesized=false;if(e.expression.isA("call")){e.expression.type=i["call_statement"];return this.call_statement(e)}}};e.prototype["function"]=function(e){return e.body.walk({last:true},function(e,t,n){var r;if(t.isA("return")&&t.value){r=n?e[n]:e.children[e.children.length-1];if(r){r.type=i[";"];return r.expression=r.value}}})};e.prototype["switch"]=function(e){var t=this;return x.each(e.cases,function(e){var t,n,r;t=e.statements;n=t.children;if((r=t.last())!=null?r.isA("break"):void 0){return delete n[n.length-1]}})};e.prototype["call_statement"]=function(e){if(e.children[1]){return x.each(e.children[1].children,function(t,n){if(t.isA("function")&&n!==e.children[1].children.length-1){return t.parenthesized=true}})}};e.prototype["return"]=function(e){if(e.value&&e.value.isA("object_init")&&e.value.children.length>1){return e.value.parenthesized=true}};e.prototype["block"]=function(e){return this.script(e)};e.prototype["if"]=function(e){var t;if(e.thenPart.children.length===0&&((t=e.elsePart)!=null?t.children.length:void 0)>0){e.positive=false;e.thenPart=e.elsePart;delete e.elsePart}return this.inversible(e)};e.prototype["while"]=function(e){if(e.body.children.length===0){e.body.children.push(e.clone({type:i["continue"],value:"continue",children:[]}))}return this.inversible(e)};e.prototype["inversible"]=function(e){var t;this.transform(e.condition);t=e.positive!=null?e.positive:true;if(e.condition.isA("!=")){e.condition.type=i["=="];return e.positive=!t}else if(e.condition.isA("!")){e.condition=e.condition.left();return e.positive=!t}else{return e.positive=t}};e.prototype["=="]=function(e){if(e.right().isA("null","void")){e.type=i["!"];return e.children=[e.clone({type:i["existence_check"],children:[e.left()]})]}};e.prototype["!="]=function(e){if(e.right().isA("null","void")){e.type=i["existence_check"];return e.children=[e.left()]}};return e}();o=function(){function e(e,t){this.message=e;this.cursor=t.start;this.line=t.lineno;this.source=t.tokenizer.source}e.prototype.toString=function(){return this.message};return e}();this.Js2coffee=f={VERSION:"0.2.0",build:a,UnsupportedError:o};if(typeof module!=="undefined"&&module!==null)module.exports=f}).call(this)
/*! Knockout JavaScript library v2.2.1
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
*/

;(function() {function j(w){throw w;}var m=!0,p=null,r=!1;function u(w){return function(){return w}};var x=window,y=document,ga=navigator,F=window.jQuery,I=void 0;
function L(w){function ha(a,d,c,e,f){var g=[];a=b.j(function(){var a=d(c,f)||[];0<g.length&&(b.a.Ya(M(g),a),e&&b.r.K(e,p,[c,a,f]));g.splice(0,g.length);b.a.P(g,a)},p,{W:a,Ka:function(){return 0==g.length||!b.a.X(g[0])}});return{M:g,j:a.pa()?a:I}}function M(a){for(;a.length&&!b.a.X(a[0]);)a.splice(0,1);if(1<a.length){for(var d=a[0],c=a[a.length-1],e=[d];d!==c;){d=d.nextSibling;if(!d)return;e.push(d)}Array.prototype.splice.apply(a,[0,a.length].concat(e))}return a}function S(a,b,c,e,f){var g=Math.min,
h=Math.max,k=[],l,n=a.length,q,s=b.length,v=s-n||1,G=n+s+1,J,A,z;for(l=0;l<=n;l++){A=J;k.push(J=[]);z=g(s,l+v);for(q=h(0,l-1);q<=z;q++)J[q]=q?l?a[l-1]===b[q-1]?A[q-1]:g(A[q]||G,J[q-1]||G)+1:q+1:l+1}g=[];h=[];v=[];l=n;for(q=s;l||q;)s=k[l][q]-1,q&&s===k[l][q-1]?h.push(g[g.length]={status:c,value:b[--q],index:q}):l&&s===k[l-1][q]?v.push(g[g.length]={status:e,value:a[--l],index:l}):(g.push({status:"retained",value:b[--q]}),--l);if(h.length&&v.length){a=10*n;var t;for(b=c=0;(f||b<a)&&(t=h[c]);c++){for(e=
0;k=v[e];e++)if(t.value===k.value){t.moved=k.index;k.moved=t.index;v.splice(e,1);b=e=0;break}b+=e}}return g.reverse()}function T(a,d,c,e,f){f=f||{};var g=a&&N(a),g=g&&g.ownerDocument,h=f.templateEngine||O;b.za.vb(c,h,g);c=h.renderTemplate(c,e,f,g);("number"!=typeof c.length||0<c.length&&"number"!=typeof c[0].nodeType)&&j(Error("Template engine must return an array of DOM nodes"));g=r;switch(d){case "replaceChildren":b.e.N(a,c);g=m;break;case "replaceNode":b.a.Ya(a,c);g=m;break;case "ignoreTargetNode":break;
default:j(Error("Unknown renderMode: "+d))}g&&(U(c,e),f.afterRender&&b.r.K(f.afterRender,p,[c,e.$data]));return c}function N(a){return a.nodeType?a:0<a.length?a[0]:p}function U(a,d){if(a.length){var c=a[0],e=a[a.length-1];V(c,e,function(a){b.Da(d,a)});V(c,e,function(a){b.s.ib(a,[d])})}}function V(a,d,c){var e;for(d=b.e.nextSibling(d);a&&(e=a)!==d;)a=b.e.nextSibling(e),(1===e.nodeType||8===e.nodeType)&&c(e)}function W(a,d,c){a=b.g.aa(a);for(var e=b.g.Q,f=0;f<a.length;f++){var g=a[f].key;if(e.hasOwnProperty(g)){var h=
e[g];"function"===typeof h?(g=h(a[f].value))&&j(Error(g)):h||j(Error("This template engine does not support the '"+g+"' binding within its templates"))}}a="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+b.g.ba(a)+" } })()})";return c.createJavaScriptEvaluatorBlock(a)+d}function X(a,d,c,e){function f(a){return function(){return k[a]}}function g(){return k}var h=0,k,l;b.j(function(){var n=c&&c instanceof b.z?c:new b.z(b.a.d(c)),q=n.$data;e&&b.eb(a,n);if(k=("function"==typeof d?
d(n,a):d)||b.J.instance.getBindings(a,n)){if(0===h){h=1;for(var s in k){var v=b.c[s];v&&8===a.nodeType&&!b.e.I[s]&&j(Error("The binding '"+s+"' cannot be used with virtual elements"));if(v&&"function"==typeof v.init&&(v=(0,v.init)(a,f(s),g,q,n))&&v.controlsDescendantBindings)l!==I&&j(Error("Multiple bindings ("+l+" and "+s+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")),l=s}h=2}if(2===h)for(s in k)(v=b.c[s])&&"function"==
typeof v.update&&(0,v.update)(a,f(s),g,q,n)}},p,{W:a});return{Nb:l===I}}function Y(a,d,c){var e=m,f=1===d.nodeType;f&&b.e.Ta(d);if(f&&c||b.J.instance.nodeHasBindings(d))e=X(d,p,a,c).Nb;e&&Z(a,d,!f)}function Z(a,d,c){for(var e=b.e.firstChild(d);d=e;)e=b.e.nextSibling(d),Y(a,d,c)}function $(a,b){var c=aa(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:p}function aa(a,b){for(var c=a,e=1,f=[];c=c.nextSibling;){if(H(c)&&(e--,0===e))return f;f.push(c);B(c)&&e++}b||j(Error("Cannot find closing comment tag to match: "+
a.nodeValue));return p}function H(a){return 8==a.nodeType&&(K?a.text:a.nodeValue).match(ia)}function B(a){return 8==a.nodeType&&(K?a.text:a.nodeValue).match(ja)}function P(a,b){for(var c=p;a!=c;)c=a,a=a.replace(ka,function(a,c){return b[c]});return a}function la(){var a=[],d=[];this.save=function(c,e){var f=b.a.i(a,c);0<=f?d[f]=e:(a.push(c),d.push(e))};this.get=function(c){c=b.a.i(a,c);return 0<=c?d[c]:I}}function ba(a,b,c){function e(e){var g=b(a[e]);switch(typeof g){case "boolean":case "number":case "string":case "function":f[e]=
g;break;case "object":case "undefined":var h=c.get(g);f[e]=h!==I?h:ba(g,b,c)}}c=c||new la;a=b(a);if(!("object"==typeof a&&a!==p&&a!==I&&!(a instanceof Date)))return a;var f=a instanceof Array?[]:{};c.save(a,f);var g=a;if(g instanceof Array){for(var h=0;h<g.length;h++)e(h);"function"==typeof g.toJSON&&e("toJSON")}else for(h in g)e(h);return f}function ca(a,d){if(a)if(8==a.nodeType){var c=b.s.Ua(a.nodeValue);c!=p&&d.push({sb:a,Fb:c})}else if(1==a.nodeType)for(var c=0,e=a.childNodes,f=e.length;c<f;c++)ca(e[c],
d)}function Q(a,d,c,e){b.c[a]={init:function(a){b.a.f.set(a,da,{});return{controlsDescendantBindings:m}},update:function(a,g,h,k,l){h=b.a.f.get(a,da);g=b.a.d(g());k=!c!==!g;var n=!h.Za;if(n||d||k!==h.qb)n&&(h.Za=b.a.Ia(b.e.childNodes(a),m)),k?(n||b.e.N(a,b.a.Ia(h.Za)),b.Ea(e?e(l,g):l,a)):b.e.Y(a),h.qb=k}};b.g.Q[a]=r;b.e.I[a]=m}function ea(a,d,c){c&&d!==b.k.q(a)&&b.k.T(a,d);d!==b.k.q(a)&&b.r.K(b.a.Ba,p,[a,"change"])}var b="undefined"!==typeof w?w:{};b.b=function(a,d){for(var c=a.split("."),e=b,f=0;f<
c.length-1;f++)e=e[c[f]];e[c[c.length-1]]=d};b.p=function(a,b,c){a[b]=c};b.version="2.2.1";b.b("version",b.version);b.a=new function(){function a(a,d){if("input"!==b.a.u(a)||!a.type||"click"!=d.toLowerCase())return r;var c=a.type;return"checkbox"==c||"radio"==c}var d=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,c={},e={};c[/Firefox\/2/i.test(ga.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];c.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
for(var f in c){var g=c[f];if(g.length)for(var h=0,k=g.length;h<k;h++)e[g[h]]=f}var l={propertychange:m},n,c=3;f=y.createElement("div");for(g=f.getElementsByTagName("i");f.innerHTML="\x3c!--[if gt IE "+ ++c+"]><i></i><![endif]--\x3e",g[0];);n=4<c?c:I;return{Na:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],o:function(a,b){for(var d=0,c=a.length;d<c;d++)b(a[d])},i:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var d=0,c=a.length;d<
c;d++)if(a[d]===b)return d;return-1},lb:function(a,b,d){for(var c=0,e=a.length;c<e;c++)if(b.call(d,a[c]))return a[c];return p},ga:function(a,d){var c=b.a.i(a,d);0<=c&&a.splice(c,1)},Ga:function(a){a=a||[];for(var d=[],c=0,e=a.length;c<e;c++)0>b.a.i(d,a[c])&&d.push(a[c]);return d},V:function(a,b){a=a||[];for(var d=[],c=0,e=a.length;c<e;c++)d.push(b(a[c]));return d},fa:function(a,b){a=a||[];for(var d=[],c=0,e=a.length;c<e;c++)b(a[c])&&d.push(a[c]);return d},P:function(a,b){if(b instanceof Array)a.push.apply(a,
b);else for(var d=0,c=b.length;d<c;d++)a.push(b[d]);return a},extend:function(a,b){if(b)for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a},ka:function(a){for(;a.firstChild;)b.removeNode(a.firstChild)},Hb:function(a){a=b.a.L(a);for(var d=y.createElement("div"),c=0,e=a.length;c<e;c++)d.appendChild(b.A(a[c]));return d},Ia:function(a,d){for(var c=0,e=a.length,g=[];c<e;c++){var f=a[c].cloneNode(m);g.push(d?b.A(f):f)}return g},N:function(a,d){b.a.ka(a);if(d)for(var c=0,e=d.length;c<e;c++)a.appendChild(d[c])},
Ya:function(a,d){var c=a.nodeType?[a]:a;if(0<c.length){for(var e=c[0],g=e.parentNode,f=0,h=d.length;f<h;f++)g.insertBefore(d[f],e);f=0;for(h=c.length;f<h;f++)b.removeNode(c[f])}},bb:function(a,b){7>n?a.setAttribute("selected",b):a.selected=b},D:function(a){return(a||"").replace(d,"")},Rb:function(a,d){for(var c=[],e=(a||"").split(d),f=0,g=e.length;f<g;f++){var h=b.a.D(e[f]);""!==h&&c.push(h)}return c},Ob:function(a,b){a=a||"";return b.length>a.length?r:a.substring(0,b.length)===b},tb:function(a,b){if(b.compareDocumentPosition)return 16==
(b.compareDocumentPosition(a)&16);for(;a!=p;){if(a==b)return m;a=a.parentNode}return r},X:function(a){return b.a.tb(a,a.ownerDocument)},u:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},n:function(b,d,c){var e=n&&l[d];if(!e&&"undefined"!=typeof F){if(a(b,d)){var f=c;c=function(a,b){var d=this.checked;b&&(this.checked=b.nb!==m);f.call(this,a);this.checked=d}}F(b).bind(d,c)}else!e&&"function"==typeof b.addEventListener?b.addEventListener(d,c,r):"undefined"!=typeof b.attachEvent?b.attachEvent("on"+
d,function(a){c.call(b,a)}):j(Error("Browser doesn't support addEventListener or attachEvent"))},Ba:function(b,d){(!b||!b.nodeType)&&j(Error("element must be a DOM node when calling triggerEvent"));if("undefined"!=typeof F){var c=[];a(b,d)&&c.push({nb:b.checked});F(b).trigger(d,c)}else"function"==typeof y.createEvent?"function"==typeof b.dispatchEvent?(c=y.createEvent(e[d]||"HTMLEvents"),c.initEvent(d,m,m,x,0,0,0,0,0,r,r,r,r,0,b),b.dispatchEvent(c)):j(Error("The supplied element doesn't support dispatchEvent")):
"undefined"!=typeof b.fireEvent?(a(b,d)&&(b.checked=b.checked!==m),b.fireEvent("on"+d)):j(Error("Browser doesn't support triggering events"))},d:function(a){return b.$(a)?a():a},ua:function(a){return b.$(a)?a.t():a},da:function(a,d,c){if(d){var e=/[\w-]+/g,f=a.className.match(e)||[];b.a.o(d.match(e),function(a){var d=b.a.i(f,a);0<=d?c||f.splice(d,1):c&&f.push(a)});a.className=f.join(" ")}},cb:function(a,d){var c=b.a.d(d);if(c===p||c===I)c="";if(3===a.nodeType)a.data=c;else{var e=b.e.firstChild(a);
!e||3!=e.nodeType||b.e.nextSibling(e)?b.e.N(a,[y.createTextNode(c)]):e.data=c;b.a.wb(a)}},ab:function(a,b){a.name=b;if(7>=n)try{a.mergeAttributes(y.createElement("<input name='"+a.name+"'/>"),r)}catch(d){}},wb:function(a){9<=n&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},ub:function(a){if(9<=n){var b=a.style.width;a.style.width=0;a.style.width=b}},Lb:function(a,d){a=b.a.d(a);d=b.a.d(d);for(var c=[],e=a;e<=d;e++)c.push(e);return c},L:function(a){for(var b=[],d=0,c=a.length;d<
c;d++)b.push(a[d]);return b},Pb:6===n,Qb:7===n,Z:n,Oa:function(a,d){for(var c=b.a.L(a.getElementsByTagName("input")).concat(b.a.L(a.getElementsByTagName("textarea"))),e="string"==typeof d?function(a){return a.name===d}:function(a){return d.test(a.name)},f=[],g=c.length-1;0<=g;g--)e(c[g])&&f.push(c[g]);return f},Ib:function(a){return"string"==typeof a&&(a=b.a.D(a))?x.JSON&&x.JSON.parse?x.JSON.parse(a):(new Function("return "+a))():p},xa:function(a,d,c){("undefined"==typeof JSON||"undefined"==typeof JSON.stringify)&&
j(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));return JSON.stringify(b.a.d(a),d,c)},Jb:function(a,d,c){c=c||{};var e=c.params||{},f=c.includeFields||this.Na,g=a;if("object"==typeof a&&"form"===b.a.u(a))for(var g=a.action,h=f.length-1;0<=h;h--)for(var k=b.a.Oa(a,f[h]),l=k.length-1;0<=l;l--)e[k[l].name]=k[l].value;d=b.a.d(d);var n=y.createElement("form");
n.style.display="none";n.action=g;n.method="post";for(var w in d)a=y.createElement("input"),a.name=w,a.value=b.a.xa(b.a.d(d[w])),n.appendChild(a);for(w in e)a=y.createElement("input"),a.name=w,a.value=e[w],n.appendChild(a);y.body.appendChild(n);c.submitter?c.submitter(n):n.submit();setTimeout(function(){n.parentNode.removeChild(n)},0)}}};b.b("utils",b.a);b.b("utils.arrayForEach",b.a.o);b.b("utils.arrayFirst",b.a.lb);b.b("utils.arrayFilter",b.a.fa);b.b("utils.arrayGetDistinctValues",b.a.Ga);b.b("utils.arrayIndexOf",
b.a.i);b.b("utils.arrayMap",b.a.V);b.b("utils.arrayPushAll",b.a.P);b.b("utils.arrayRemoveItem",b.a.ga);b.b("utils.extend",b.a.extend);b.b("utils.fieldsIncludedWithJsonPost",b.a.Na);b.b("utils.getFormFields",b.a.Oa);b.b("utils.peekObservable",b.a.ua);b.b("utils.postJson",b.a.Jb);b.b("utils.parseJson",b.a.Ib);b.b("utils.registerEventHandler",b.a.n);b.b("utils.stringifyJson",b.a.xa);b.b("utils.range",b.a.Lb);b.b("utils.toggleDomNodeCssClass",b.a.da);b.b("utils.triggerEvent",b.a.Ba);b.b("utils.unwrapObservable",
b.a.d);Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,c=Array.prototype.slice.call(arguments);a=c.shift();return function(){return b.apply(a,c.concat(Array.prototype.slice.call(arguments)))}});b.a.f=new function(){var a=0,d="__ko__"+(new Date).getTime(),c={};return{get:function(a,d){var c=b.a.f.la(a,r);return c===I?I:c[d]},set:function(a,d,c){c===I&&b.a.f.la(a,r)===I||(b.a.f.la(a,m)[d]=c)},la:function(b,f){var g=b[d];if(!g||!("null"!==g&&c[g])){if(!f)return I;g=b[d]="ko"+
a++;c[g]={}}return c[g]},clear:function(a){var b=a[d];return b?(delete c[b],a[d]=p,m):r}}};b.b("utils.domData",b.a.f);b.b("utils.domData.clear",b.a.f.clear);b.a.F=new function(){function a(a,d){var e=b.a.f.get(a,c);e===I&&d&&(e=[],b.a.f.set(a,c,e));return e}function d(c){var e=a(c,r);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);b.a.f.clear(c);"function"==typeof F&&"function"==typeof F.cleanData&&F.cleanData([c]);if(f[c.nodeType])for(e=c.firstChild;c=e;)e=c.nextSibling,8===c.nodeType&&d(c)}
var c="__ko_domNodeDisposal__"+(new Date).getTime(),e={1:m,8:m,9:m},f={1:m,9:m};return{Ca:function(b,d){"function"!=typeof d&&j(Error("Callback must be a function"));a(b,m).push(d)},Xa:function(d,e){var f=a(d,r);f&&(b.a.ga(f,e),0==f.length&&b.a.f.set(d,c,I))},A:function(a){if(e[a.nodeType]&&(d(a),f[a.nodeType])){var c=[];b.a.P(c,a.getElementsByTagName("*"));for(var k=0,l=c.length;k<l;k++)d(c[k])}return a},removeNode:function(a){b.A(a);a.parentNode&&a.parentNode.removeChild(a)}}};b.A=b.a.F.A;b.removeNode=
b.a.F.removeNode;b.b("cleanNode",b.A);b.b("removeNode",b.removeNode);b.b("utils.domNodeDisposal",b.a.F);b.b("utils.domNodeDisposal.addDisposeCallback",b.a.F.Ca);b.b("utils.domNodeDisposal.removeDisposeCallback",b.a.F.Xa);b.a.ta=function(a){var d;if("undefined"!=typeof F)if(F.parseHTML)d=F.parseHTML(a);else{if((d=F.clean([a]))&&d[0]){for(a=d[0];a.parentNode&&11!==a.parentNode.nodeType;)a=a.parentNode;a.parentNode&&a.parentNode.removeChild(a)}}else{var c=b.a.D(a).toLowerCase();d=y.createElement("div");
c=c.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!c.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!c.indexOf("<td")||!c.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];a="ignored<div>"+c[1]+a+c[2]+"</div>";for("function"==typeof x.innerShiv?d.appendChild(x.innerShiv(a)):d.innerHTML=a;c[0]--;)d=d.lastChild;d=b.a.L(d.lastChild.childNodes)}return d};b.a.ca=function(a,d){b.a.ka(a);d=b.a.d(d);if(d!==p&&d!==I)if("string"!=typeof d&&(d=d.toString()),
"undefined"!=typeof F)F(a).html(d);else for(var c=b.a.ta(d),e=0;e<c.length;e++)a.appendChild(c[e])};b.b("utils.parseHtmlFragment",b.a.ta);b.b("utils.setHtml",b.a.ca);var R={};b.s={ra:function(a){"function"!=typeof a&&j(Error("You can only pass a function to ko.memoization.memoize()"));var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);R[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},hb:function(a,b){var c=R[a];c===I&&j(Error("Couldn't find any memo with ID "+
a+". Perhaps it's already been unmemoized."));try{return c.apply(p,b||[]),m}finally{delete R[a]}},ib:function(a,d){var c=[];ca(a,c);for(var e=0,f=c.length;e<f;e++){var g=c[e].sb,h=[g];d&&b.a.P(h,d);b.s.hb(c[e].Fb,h);g.nodeValue="";g.parentNode&&g.parentNode.removeChild(g)}},Ua:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:p}};b.b("memoization",b.s);b.b("memoization.memoize",b.s.ra);b.b("memoization.unmemoize",b.s.hb);b.b("memoization.parseMemoText",b.s.Ua);b.b("memoization.unmemoizeDomNodeAndDescendants",
b.s.ib);b.Ma={throttle:function(a,d){a.throttleEvaluation=d;var c=p;return b.j({read:a,write:function(b){clearTimeout(c);c=setTimeout(function(){a(b)},d)}})},notify:function(a,d){a.equalityComparer="always"==d?u(r):b.m.fn.equalityComparer;return a}};b.b("extenders",b.Ma);b.fb=function(a,d,c){this.target=a;this.ha=d;this.rb=c;b.p(this,"dispose",this.B)};b.fb.prototype.B=function(){this.Cb=m;this.rb()};b.S=function(){this.w={};b.a.extend(this,b.S.fn);b.p(this,"subscribe",this.ya);b.p(this,"extend",
this.extend);b.p(this,"getSubscriptionsCount",this.yb)};b.S.fn={ya:function(a,d,c){c=c||"change";var e=new b.fb(this,d?a.bind(d):a,function(){b.a.ga(this.w[c],e)}.bind(this));this.w[c]||(this.w[c]=[]);this.w[c].push(e);return e},notifySubscribers:function(a,d){d=d||"change";this.w[d]&&b.r.K(function(){b.a.o(this.w[d].slice(0),function(b){b&&b.Cb!==m&&b.ha(a)})},this)},yb:function(){var a=0,b;for(b in this.w)this.w.hasOwnProperty(b)&&(a+=this.w[b].length);return a},extend:function(a){var d=this;if(a)for(var c in a){var e=
b.Ma[c];"function"==typeof e&&(d=e(d,a[c]))}return d}};b.Qa=function(a){return"function"==typeof a.ya&&"function"==typeof a.notifySubscribers};b.b("subscribable",b.S);b.b("isSubscribable",b.Qa);var C=[];b.r={mb:function(a){C.push({ha:a,La:[]})},end:function(){C.pop()},Wa:function(a){b.Qa(a)||j(Error("Only subscribable things can act as dependencies"));if(0<C.length){var d=C[C.length-1];d&&!(0<=b.a.i(d.La,a))&&(d.La.push(a),d.ha(a))}},K:function(a,b,c){try{return C.push(p),a.apply(b,c||[])}finally{C.pop()}}};
var ma={undefined:m,"boolean":m,number:m,string:m};b.m=function(a){function d(){if(0<arguments.length){if(!d.equalityComparer||!d.equalityComparer(c,arguments[0]))d.H(),c=arguments[0],d.G();return this}b.r.Wa(d);return c}var c=a;b.S.call(d);d.t=function(){return c};d.G=function(){d.notifySubscribers(c)};d.H=function(){d.notifySubscribers(c,"beforeChange")};b.a.extend(d,b.m.fn);b.p(d,"peek",d.t);b.p(d,"valueHasMutated",d.G);b.p(d,"valueWillMutate",d.H);return d};b.m.fn={equalityComparer:function(a,
b){return a===p||typeof a in ma?a===b:r}};var E=b.m.Kb="__ko_proto__";b.m.fn[E]=b.m;b.ma=function(a,d){return a===p||a===I||a[E]===I?r:a[E]===d?m:b.ma(a[E],d)};b.$=function(a){return b.ma(a,b.m)};b.Ra=function(a){return"function"==typeof a&&a[E]===b.m||"function"==typeof a&&a[E]===b.j&&a.zb?m:r};b.b("observable",b.m);b.b("isObservable",b.$);b.b("isWriteableObservable",b.Ra);b.R=function(a){0==arguments.length&&(a=[]);a!==p&&(a!==I&&!("length"in a))&&j(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));
var d=b.m(a);b.a.extend(d,b.R.fn);return d};b.R.fn={remove:function(a){for(var b=this.t(),c=[],e="function"==typeof a?a:function(b){return b===a},f=0;f<b.length;f++){var g=b[f];e(g)&&(0===c.length&&this.H(),c.push(g),b.splice(f,1),f--)}c.length&&this.G();return c},removeAll:function(a){if(a===I){var d=this.t(),c=d.slice(0);this.H();d.splice(0,d.length);this.G();return c}return!a?[]:this.remove(function(d){return 0<=b.a.i(a,d)})},destroy:function(a){var b=this.t(),c="function"==typeof a?a:function(b){return b===
a};this.H();for(var e=b.length-1;0<=e;e--)c(b[e])&&(b[e]._destroy=m);this.G()},destroyAll:function(a){return a===I?this.destroy(u(m)):!a?[]:this.destroy(function(d){return 0<=b.a.i(a,d)})},indexOf:function(a){var d=this();return b.a.i(d,a)},replace:function(a,b){var c=this.indexOf(a);0<=c&&(this.H(),this.t()[c]=b,this.G())}};b.a.o("pop push reverse shift sort splice unshift".split(" "),function(a){b.R.fn[a]=function(){var b=this.t();this.H();b=b[a].apply(b,arguments);this.G();return b}});b.a.o(["slice"],
function(a){b.R.fn[a]=function(){var b=this();return b[a].apply(b,arguments)}});b.b("observableArray",b.R);b.j=function(a,d,c){function e(){b.a.o(z,function(a){a.B()});z=[]}function f(){var a=h.throttleEvaluation;a&&0<=a?(clearTimeout(t),t=setTimeout(g,a)):g()}function g(){if(!q)if(n&&w())A();else{q=m;try{var a=b.a.V(z,function(a){return a.target});b.r.mb(function(c){var d;0<=(d=b.a.i(a,c))?a[d]=I:z.push(c.ya(f))});for(var c=s.call(d),e=a.length-1;0<=e;e--)a[e]&&z.splice(e,1)[0].B();n=m;h.notifySubscribers(l,
"beforeChange");l=c}finally{b.r.end()}h.notifySubscribers(l);q=r;z.length||A()}}function h(){if(0<arguments.length)return"function"===typeof v?v.apply(d,arguments):j(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.")),this;n||g();b.r.Wa(h);return l}function k(){return!n||0<z.length}var l,n=r,q=r,s=a;s&&"object"==typeof s?(c=s,s=c.read):(c=c||{},s||(s=c.read));"function"!=typeof s&&j(Error("Pass a function that returns the value of the ko.computed"));
var v=c.write,G=c.disposeWhenNodeIsRemoved||c.W||p,w=c.disposeWhen||c.Ka||u(r),A=e,z=[],t=p;d||(d=c.owner);h.t=function(){n||g();return l};h.xb=function(){return z.length};h.zb="function"===typeof c.write;h.B=function(){A()};h.pa=k;b.S.call(h);b.a.extend(h,b.j.fn);b.p(h,"peek",h.t);b.p(h,"dispose",h.B);b.p(h,"isActive",h.pa);b.p(h,"getDependenciesCount",h.xb);c.deferEvaluation!==m&&g();if(G&&k()){A=function(){b.a.F.Xa(G,arguments.callee);e()};b.a.F.Ca(G,A);var D=w,w=function(){return!b.a.X(G)||D()}}return h};
b.Bb=function(a){return b.ma(a,b.j)};w=b.m.Kb;b.j[w]=b.m;b.j.fn={};b.j.fn[w]=b.j;b.b("dependentObservable",b.j);b.b("computed",b.j);b.b("isComputed",b.Bb);b.gb=function(a){0==arguments.length&&j(Error("When calling ko.toJS, pass the object you want to convert."));return ba(a,function(a){for(var c=0;b.$(a)&&10>c;c++)a=a();return a})};b.toJSON=function(a,d,c){a=b.gb(a);return b.a.xa(a,d,c)};b.b("toJS",b.gb);b.b("toJSON",b.toJSON);b.k={q:function(a){switch(b.a.u(a)){case "option":return a.__ko__hasDomDataOptionValue__===
m?b.a.f.get(a,b.c.options.sa):7>=b.a.Z?a.getAttributeNode("value").specified?a.value:a.text:a.value;case "select":return 0<=a.selectedIndex?b.k.q(a.options[a.selectedIndex]):I;default:return a.value}},T:function(a,d){switch(b.a.u(a)){case "option":switch(typeof d){case "string":b.a.f.set(a,b.c.options.sa,I);"__ko__hasDomDataOptionValue__"in a&&delete a.__ko__hasDomDataOptionValue__;a.value=d;break;default:b.a.f.set(a,b.c.options.sa,d),a.__ko__hasDomDataOptionValue__=m,a.value="number"===typeof d?
d:""}break;case "select":for(var c=a.options.length-1;0<=c;c--)if(b.k.q(a.options[c])==d){a.selectedIndex=c;break}break;default:if(d===p||d===I)d="";a.value=d}}};b.b("selectExtensions",b.k);b.b("selectExtensions.readValue",b.k.q);b.b("selectExtensions.writeValue",b.k.T);var ka=/\@ko_token_(\d+)\@/g,na=["true","false"],oa=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;b.g={Q:[],aa:function(a){var d=b.a.D(a);if(3>d.length)return[];"{"===d.charAt(0)&&(d=d.substring(1,d.length-1));a=[];for(var c=
p,e,f=0;f<d.length;f++){var g=d.charAt(f);if(c===p)switch(g){case '"':case "'":case "/":c=f,e=g}else if(g==e&&"\\"!==d.charAt(f-1)){g=d.substring(c,f+1);a.push(g);var h="@ko_token_"+(a.length-1)+"@",d=d.substring(0,c)+h+d.substring(f+1),f=f-(g.length-h.length),c=p}}e=c=p;for(var k=0,l=p,f=0;f<d.length;f++){g=d.charAt(f);if(c===p)switch(g){case "{":c=f;l=g;e="}";break;case "(":c=f;l=g;e=")";break;case "[":c=f,l=g,e="]"}g===l?k++:g===e&&(k--,0===k&&(g=d.substring(c,f+1),a.push(g),h="@ko_token_"+(a.length-
1)+"@",d=d.substring(0,c)+h+d.substring(f+1),f-=g.length-h.length,c=p))}e=[];d=d.split(",");c=0;for(f=d.length;c<f;c++)k=d[c],l=k.indexOf(":"),0<l&&l<k.length-1?(g=k.substring(l+1),e.push({key:P(k.substring(0,l),a),value:P(g,a)})):e.push({unknown:P(k,a)});return e},ba:function(a){var d="string"===typeof a?b.g.aa(a):a,c=[];a=[];for(var e,f=0;e=d[f];f++)if(0<c.length&&c.push(","),e.key){var g;a:{g=e.key;var h=b.a.D(g);switch(h.length&&h.charAt(0)){case "'":case '"':break a;default:g="'"+h+"'"}}e=e.value;
c.push(g);c.push(":");c.push(e);e=b.a.D(e);0<=b.a.i(na,b.a.D(e).toLowerCase())?e=r:(h=e.match(oa),e=h===p?r:h[1]?"Object("+h[1]+")"+h[2]:e);e&&(0<a.length&&a.push(", "),a.push(g+" : function(__ko_value) { "+e+" = __ko_value; }"))}else e.unknown&&c.push(e.unknown);d=c.join("");0<a.length&&(d=d+", '_ko_property_writers' : { "+a.join("")+" } ");return d},Eb:function(a,d){for(var c=0;c<a.length;c++)if(b.a.D(a[c].key)==d)return m;return r},ea:function(a,d,c,e,f){if(!a||!b.Ra(a)){if((a=d()._ko_property_writers)&&
a[c])a[c](e)}else(!f||a.t()!==e)&&a(e)}};b.b("expressionRewriting",b.g);b.b("expressionRewriting.bindingRewriteValidators",b.g.Q);b.b("expressionRewriting.parseObjectLiteral",b.g.aa);b.b("expressionRewriting.preProcessBindings",b.g.ba);b.b("jsonExpressionRewriting",b.g);b.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",b.g.ba);var K="\x3c!--test--\x3e"===y.createComment("test").text,ja=K?/^\x3c!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*--\x3e$/:/^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/,ia=K?/^\x3c!--\s*\/ko\s*--\x3e$/:
/^\s*\/ko\s*$/,pa={ul:m,ol:m};b.e={I:{},childNodes:function(a){return B(a)?aa(a):a.childNodes},Y:function(a){if(B(a)){a=b.e.childNodes(a);for(var d=0,c=a.length;d<c;d++)b.removeNode(a[d])}else b.a.ka(a)},N:function(a,d){if(B(a)){b.e.Y(a);for(var c=a.nextSibling,e=0,f=d.length;e<f;e++)c.parentNode.insertBefore(d[e],c)}else b.a.N(a,d)},Va:function(a,b){B(a)?a.parentNode.insertBefore(b,a.nextSibling):a.firstChild?a.insertBefore(b,a.firstChild):a.appendChild(b)},Pa:function(a,d,c){c?B(a)?a.parentNode.insertBefore(d,
c.nextSibling):c.nextSibling?a.insertBefore(d,c.nextSibling):a.appendChild(d):b.e.Va(a,d)},firstChild:function(a){return!B(a)?a.firstChild:!a.nextSibling||H(a.nextSibling)?p:a.nextSibling},nextSibling:function(a){B(a)&&(a=$(a));return a.nextSibling&&H(a.nextSibling)?p:a.nextSibling},jb:function(a){return(a=B(a))?a[1]:p},Ta:function(a){if(pa[b.a.u(a)]){var d=a.firstChild;if(d){do if(1===d.nodeType){var c;c=d.firstChild;var e=p;if(c){do if(e)e.push(c);else if(B(c)){var f=$(c,m);f?c=f:e=[c]}else H(c)&&
(e=[c]);while(c=c.nextSibling)}if(c=e){e=d.nextSibling;for(f=0;f<c.length;f++)e?a.insertBefore(c[f],e):a.appendChild(c[f])}}while(d=d.nextSibling)}}}};b.b("virtualElements",b.e);b.b("virtualElements.allowedBindings",b.e.I);b.b("virtualElements.emptyNode",b.e.Y);b.b("virtualElements.insertAfter",b.e.Pa);b.b("virtualElements.prepend",b.e.Va);b.b("virtualElements.setDomNodeChildren",b.e.N);b.J=function(){this.Ha={}};b.a.extend(b.J.prototype,{nodeHasBindings:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind")!=
p;case 8:return b.e.jb(a)!=p;default:return r}},getBindings:function(a,b){var c=this.getBindingsString(a,b);return c?this.parseBindingsString(c,b,a):p},getBindingsString:function(a){switch(a.nodeType){case 1:return a.getAttribute("data-bind");case 8:return b.e.jb(a);default:return p}},parseBindingsString:function(a,d,c){try{var e;if(!(e=this.Ha[a])){var f=this.Ha,g,h="with($context){with($data||{}){return{"+b.g.ba(a)+"}}}";g=new Function("$context","$element",h);e=f[a]=g}return e(d,c)}catch(k){j(Error("Unable to parse bindings.\nMessage: "+
k+";\nBindings value: "+a))}}});b.J.instance=new b.J;b.b("bindingProvider",b.J);b.c={};b.z=function(a,d,c){d?(b.a.extend(this,d),this.$parentContext=d,this.$parent=d.$data,this.$parents=(d.$parents||[]).slice(0),this.$parents.unshift(this.$parent)):(this.$parents=[],this.$root=a,this.ko=b);this.$data=a;c&&(this[c]=a)};b.z.prototype.createChildContext=function(a,d){return new b.z(a,this,d)};b.z.prototype.extend=function(a){var d=b.a.extend(new b.z,this);return b.a.extend(d,a)};b.eb=function(a,d){if(2==
arguments.length)b.a.f.set(a,"__ko_bindingContext__",d);else return b.a.f.get(a,"__ko_bindingContext__")};b.Fa=function(a,d,c){1===a.nodeType&&b.e.Ta(a);return X(a,d,c,m)};b.Ea=function(a,b){(1===b.nodeType||8===b.nodeType)&&Z(a,b,m)};b.Da=function(a,b){b&&(1!==b.nodeType&&8!==b.nodeType)&&j(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));b=b||x.document.body;Y(a,b,m)};b.ja=function(a){switch(a.nodeType){case 1:case 8:var d=b.eb(a);if(d)return d;
if(a.parentNode)return b.ja(a.parentNode)}return I};b.pb=function(a){return(a=b.ja(a))?a.$data:I};b.b("bindingHandlers",b.c);b.b("applyBindings",b.Da);b.b("applyBindingsToDescendants",b.Ea);b.b("applyBindingsToNode",b.Fa);b.b("contextFor",b.ja);b.b("dataFor",b.pb);var fa={"class":"className","for":"htmlFor"};b.c.attr={update:function(a,d){var c=b.a.d(d())||{},e;for(e in c)if("string"==typeof e){var f=b.a.d(c[e]),g=f===r||f===p||f===I;g&&a.removeAttribute(e);8>=b.a.Z&&e in fa?(e=fa[e],g?a.removeAttribute(e):
a[e]=f):g||a.setAttribute(e,f.toString());"name"===e&&b.a.ab(a,g?"":f.toString())}}};b.c.checked={init:function(a,d,c){b.a.n(a,"click",function(){var e;if("checkbox"==a.type)e=a.checked;else if("radio"==a.type&&a.checked)e=a.value;else return;var f=d(),g=b.a.d(f);"checkbox"==a.type&&g instanceof Array?(e=b.a.i(g,a.value),a.checked&&0>e?f.push(a.value):!a.checked&&0<=e&&f.splice(e,1)):b.g.ea(f,c,"checked",e,m)});"radio"==a.type&&!a.name&&b.c.uniqueName.init(a,u(m))},update:function(a,d){var c=b.a.d(d());
"checkbox"==a.type?a.checked=c instanceof Array?0<=b.a.i(c,a.value):c:"radio"==a.type&&(a.checked=a.value==c)}};b.c.css={update:function(a,d){var c=b.a.d(d());if("object"==typeof c)for(var e in c){var f=b.a.d(c[e]);b.a.da(a,e,f)}else c=String(c||""),b.a.da(a,a.__ko__cssValue,r),a.__ko__cssValue=c,b.a.da(a,c,m)}};b.c.enable={update:function(a,d){var c=b.a.d(d());c&&a.disabled?a.removeAttribute("disabled"):!c&&!a.disabled&&(a.disabled=m)}};b.c.disable={update:function(a,d){b.c.enable.update(a,function(){return!b.a.d(d())})}};
b.c.event={init:function(a,d,c,e){var f=d()||{},g;for(g in f)(function(){var f=g;"string"==typeof f&&b.a.n(a,f,function(a){var g,n=d()[f];if(n){var q=c();try{var s=b.a.L(arguments);s.unshift(e);g=n.apply(e,s)}finally{g!==m&&(a.preventDefault?a.preventDefault():a.returnValue=r)}q[f+"Bubble"]===r&&(a.cancelBubble=m,a.stopPropagation&&a.stopPropagation())}})})()}};b.c.foreach={Sa:function(a){return function(){var d=a(),c=b.a.ua(d);if(!c||"number"==typeof c.length)return{foreach:d,templateEngine:b.C.oa};
b.a.d(d);return{foreach:c.data,as:c.as,includeDestroyed:c.includeDestroyed,afterAdd:c.afterAdd,beforeRemove:c.beforeRemove,afterRender:c.afterRender,beforeMove:c.beforeMove,afterMove:c.afterMove,templateEngine:b.C.oa}}},init:function(a,d){return b.c.template.init(a,b.c.foreach.Sa(d))},update:function(a,d,c,e,f){return b.c.template.update(a,b.c.foreach.Sa(d),c,e,f)}};b.g.Q.foreach=r;b.e.I.foreach=m;b.c.hasfocus={init:function(a,d,c){function e(e){a.__ko_hasfocusUpdating=m;var f=a.ownerDocument;"activeElement"in
f&&(e=f.activeElement===a);f=d();b.g.ea(f,c,"hasfocus",e,m);a.__ko_hasfocusUpdating=r}var f=e.bind(p,m),g=e.bind(p,r);b.a.n(a,"focus",f);b.a.n(a,"focusin",f);b.a.n(a,"blur",g);b.a.n(a,"focusout",g)},update:function(a,d){var c=b.a.d(d());a.__ko_hasfocusUpdating||(c?a.focus():a.blur(),b.r.K(b.a.Ba,p,[a,c?"focusin":"focusout"]))}};b.c.html={init:function(){return{controlsDescendantBindings:m}},update:function(a,d){b.a.ca(a,d())}};var da="__ko_withIfBindingData";Q("if");Q("ifnot",r,m);Q("with",m,r,function(a,
b){return a.createChildContext(b)});b.c.options={update:function(a,d,c){"select"!==b.a.u(a)&&j(Error("options binding applies only to SELECT elements"));for(var e=0==a.length,f=b.a.V(b.a.fa(a.childNodes,function(a){return a.tagName&&"option"===b.a.u(a)&&a.selected}),function(a){return b.k.q(a)||a.innerText||a.textContent}),g=a.scrollTop,h=b.a.d(d());0<a.length;)b.A(a.options[0]),a.remove(0);if(h){c=c();var k=c.optionsIncludeDestroyed;"number"!=typeof h.length&&(h=[h]);if(c.optionsCaption){var l=y.createElement("option");
b.a.ca(l,c.optionsCaption);b.k.T(l,I);a.appendChild(l)}d=0;for(var n=h.length;d<n;d++){var q=h[d];if(!q||!q._destroy||k){var l=y.createElement("option"),s=function(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c},v=s(q,c.optionsValue,q);b.k.T(l,b.a.d(v));q=s(q,c.optionsText,v);b.a.cb(l,q);a.appendChild(l)}}h=a.getElementsByTagName("option");d=k=0;for(n=h.length;d<n;d++)0<=b.a.i(f,b.k.q(h[d]))&&(b.a.bb(h[d],m),k++);a.scrollTop=g;e&&"value"in c&&ea(a,b.a.ua(c.value),m);b.a.ub(a)}}};
b.c.options.sa="__ko.optionValueDomData__";b.c.selectedOptions={init:function(a,d,c){b.a.n(a,"change",function(){var e=d(),f=[];b.a.o(a.getElementsByTagName("option"),function(a){a.selected&&f.push(b.k.q(a))});b.g.ea(e,c,"value",f)})},update:function(a,d){"select"!=b.a.u(a)&&j(Error("values binding applies only to SELECT elements"));var c=b.a.d(d());c&&"number"==typeof c.length&&b.a.o(a.getElementsByTagName("option"),function(a){var d=0<=b.a.i(c,b.k.q(a));b.a.bb(a,d)})}};b.c.style={update:function(a,
d){var c=b.a.d(d()||{}),e;for(e in c)if("string"==typeof e){var f=b.a.d(c[e]);a.style[e]=f||""}}};b.c.submit={init:function(a,d,c,e){"function"!=typeof d()&&j(Error("The value for a submit binding must be a function"));b.a.n(a,"submit",function(b){var c,h=d();try{c=h.call(e,a)}finally{c!==m&&(b.preventDefault?b.preventDefault():b.returnValue=r)}})}};b.c.text={update:function(a,d){b.a.cb(a,d())}};b.e.I.text=m;b.c.uniqueName={init:function(a,d){if(d()){var c="ko_unique_"+ ++b.c.uniqueName.ob;b.a.ab(a,
c)}}};b.c.uniqueName.ob=0;b.c.value={init:function(a,d,c){function e(){h=r;var e=d(),f=b.k.q(a);b.g.ea(e,c,"value",f)}var f=["change"],g=c().valueUpdate,h=r;g&&("string"==typeof g&&(g=[g]),b.a.P(f,g),f=b.a.Ga(f));if(b.a.Z&&("input"==a.tagName.toLowerCase()&&"text"==a.type&&"off"!=a.autocomplete&&(!a.form||"off"!=a.form.autocomplete))&&-1==b.a.i(f,"propertychange"))b.a.n(a,"propertychange",function(){h=m}),b.a.n(a,"blur",function(){h&&e()});b.a.o(f,function(c){var d=e;b.a.Ob(c,"after")&&(d=function(){setTimeout(e,
0)},c=c.substring(5));b.a.n(a,c,d)})},update:function(a,d){var c="select"===b.a.u(a),e=b.a.d(d()),f=b.k.q(a),g=e!=f;0===e&&(0!==f&&"0"!==f)&&(g=m);g&&(f=function(){b.k.T(a,e)},f(),c&&setTimeout(f,0));c&&0<a.length&&ea(a,e,r)}};b.c.visible={update:function(a,d){var c=b.a.d(d()),e="none"!=a.style.display;c&&!e?a.style.display="":!c&&e&&(a.style.display="none")}};b.c.click={init:function(a,d,c,e){return b.c.event.init.call(this,a,function(){var a={};a.click=d();return a},c,e)}};b.v=function(){};b.v.prototype.renderTemplateSource=
function(){j(Error("Override renderTemplateSource"))};b.v.prototype.createJavaScriptEvaluatorBlock=function(){j(Error("Override createJavaScriptEvaluatorBlock"))};b.v.prototype.makeTemplateSource=function(a,d){if("string"==typeof a){d=d||y;var c=d.getElementById(a);c||j(Error("Cannot find template with ID "+a));return new b.l.h(c)}if(1==a.nodeType||8==a.nodeType)return new b.l.O(a);j(Error("Unknown template type: "+a))};b.v.prototype.renderTemplate=function(a,b,c,e){a=this.makeTemplateSource(a,e);
return this.renderTemplateSource(a,b,c)};b.v.prototype.isTemplateRewritten=function(a,b){return this.allowTemplateRewriting===r?m:this.makeTemplateSource(a,b).data("isRewritten")};b.v.prototype.rewriteTemplate=function(a,b,c){a=this.makeTemplateSource(a,c);b=b(a.text());a.text(b);a.data("isRewritten",m)};b.b("templateEngine",b.v);var qa=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,ra=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;b.za={vb:function(a,
d,c){d.isTemplateRewritten(a,c)||d.rewriteTemplate(a,function(a){return b.za.Gb(a,d)},c)},Gb:function(a,b){return a.replace(qa,function(a,e,f,g,h,k,l){return W(l,e,b)}).replace(ra,function(a,e){return W(e,"\x3c!-- ko --\x3e",b)})},kb:function(a){return b.s.ra(function(d,c){d.nextSibling&&b.Fa(d.nextSibling,a,c)})}};b.b("__tr_ambtns",b.za.kb);b.l={};b.l.h=function(a){this.h=a};b.l.h.prototype.text=function(){var a=b.a.u(this.h),a="script"===a?"text":"textarea"===a?"value":"innerHTML";if(0==arguments.length)return this.h[a];
var d=arguments[0];"innerHTML"===a?b.a.ca(this.h,d):this.h[a]=d};b.l.h.prototype.data=function(a){if(1===arguments.length)return b.a.f.get(this.h,"templateSourceData_"+a);b.a.f.set(this.h,"templateSourceData_"+a,arguments[1])};b.l.O=function(a){this.h=a};b.l.O.prototype=new b.l.h;b.l.O.prototype.text=function(){if(0==arguments.length){var a=b.a.f.get(this.h,"__ko_anon_template__")||{};a.Aa===I&&a.ia&&(a.Aa=a.ia.innerHTML);return a.Aa}b.a.f.set(this.h,"__ko_anon_template__",{Aa:arguments[0]})};b.l.h.prototype.nodes=
function(){if(0==arguments.length)return(b.a.f.get(this.h,"__ko_anon_template__")||{}).ia;b.a.f.set(this.h,"__ko_anon_template__",{ia:arguments[0]})};b.b("templateSources",b.l);b.b("templateSources.domElement",b.l.h);b.b("templateSources.anonymousTemplate",b.l.O);var O;b.wa=function(a){a!=I&&!(a instanceof b.v)&&j(Error("templateEngine must inherit from ko.templateEngine"));O=a};b.va=function(a,d,c,e,f){c=c||{};(c.templateEngine||O)==I&&j(Error("Set a template engine before calling renderTemplate"));
f=f||"replaceChildren";if(e){var g=N(e);return b.j(function(){var h=d&&d instanceof b.z?d:new b.z(b.a.d(d)),k="function"==typeof a?a(h.$data,h):a,h=T(e,f,k,h,c);"replaceNode"==f&&(e=h,g=N(e))},p,{Ka:function(){return!g||!b.a.X(g)},W:g&&"replaceNode"==f?g.parentNode:g})}return b.s.ra(function(e){b.va(a,d,c,e,"replaceNode")})};b.Mb=function(a,d,c,e,f){function g(a,b){U(b,k);c.afterRender&&c.afterRender(b,a)}function h(d,e){k=f.createChildContext(b.a.d(d),c.as);k.$index=e;var g="function"==typeof a?
a(d,k):a;return T(p,"ignoreTargetNode",g,k,c)}var k;return b.j(function(){var a=b.a.d(d)||[];"undefined"==typeof a.length&&(a=[a]);a=b.a.fa(a,function(a){return c.includeDestroyed||a===I||a===p||!b.a.d(a._destroy)});b.r.K(b.a.$a,p,[e,a,h,c,g])},p,{W:e})};b.c.template={init:function(a,d){var c=b.a.d(d());if("string"!=typeof c&&!c.name&&(1==a.nodeType||8==a.nodeType))c=1==a.nodeType?a.childNodes:b.e.childNodes(a),c=b.a.Hb(c),(new b.l.O(a)).nodes(c);return{controlsDescendantBindings:m}},update:function(a,
d,c,e,f){d=b.a.d(d());c={};e=m;var g,h=p;"string"!=typeof d&&(c=d,d=c.name,"if"in c&&(e=b.a.d(c["if"])),e&&"ifnot"in c&&(e=!b.a.d(c.ifnot)),g=b.a.d(c.data));"foreach"in c?h=b.Mb(d||a,e&&c.foreach||[],c,a,f):e?(f="data"in c?f.createChildContext(g,c.as):f,h=b.va(d||a,f,c,a)):b.e.Y(a);f=h;(g=b.a.f.get(a,"__ko__templateComputedDomDataKey__"))&&"function"==typeof g.B&&g.B();b.a.f.set(a,"__ko__templateComputedDomDataKey__",f&&f.pa()?f:I)}};b.g.Q.template=function(a){a=b.g.aa(a);return 1==a.length&&a[0].unknown||
b.g.Eb(a,"name")?p:"This template engine does not support anonymous templates nested within its templates"};b.e.I.template=m;b.b("setTemplateEngine",b.wa);b.b("renderTemplate",b.va);b.a.Ja=function(a,b,c){a=a||[];b=b||[];return a.length<=b.length?S(a,b,"added","deleted",c):S(b,a,"deleted","added",c)};b.b("utils.compareArrays",b.a.Ja);b.a.$a=function(a,d,c,e,f){function g(a,b){t=l[b];w!==b&&(z[a]=t);t.na(w++);M(t.M);s.push(t);A.push(t)}function h(a,c){if(a)for(var d=0,e=c.length;d<e;d++)c[d]&&b.a.o(c[d].M,
function(b){a(b,d,c[d].U)})}d=d||[];e=e||{};var k=b.a.f.get(a,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===I,l=b.a.f.get(a,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],n=b.a.V(l,function(a){return a.U}),q=b.a.Ja(n,d),s=[],v=0,w=0,B=[],A=[];d=[];for(var z=[],n=[],t,D=0,C,E;C=q[D];D++)switch(E=C.moved,C.status){case "deleted":E===I&&(t=l[v],t.j&&t.j.B(),B.push.apply(B,M(t.M)),e.beforeRemove&&(d[D]=t,A.push(t)));v++;break;case "retained":g(D,v++);break;case "added":E!==I?
g(D,E):(t={U:C.value,na:b.m(w++)},s.push(t),A.push(t),k||(n[D]=t))}h(e.beforeMove,z);b.a.o(B,e.beforeRemove?b.A:b.removeNode);for(var D=0,k=b.e.firstChild(a),H;t=A[D];D++){t.M||b.a.extend(t,ha(a,c,t.U,f,t.na));for(v=0;q=t.M[v];k=q.nextSibling,H=q,v++)q!==k&&b.e.Pa(a,q,H);!t.Ab&&f&&(f(t.U,t.M,t.na),t.Ab=m)}h(e.beforeRemove,d);h(e.afterMove,z);h(e.afterAdd,n);b.a.f.set(a,"setDomNodeChildrenFromArrayMapping_lastMappingResult",s)};b.b("utils.setDomNodeChildrenFromArrayMapping",b.a.$a);b.C=function(){this.allowTemplateRewriting=
r};b.C.prototype=new b.v;b.C.prototype.renderTemplateSource=function(a){var d=!(9>b.a.Z)&&a.nodes?a.nodes():p;if(d)return b.a.L(d.cloneNode(m).childNodes);a=a.text();return b.a.ta(a)};b.C.oa=new b.C;b.wa(b.C.oa);b.b("nativeTemplateEngine",b.C);b.qa=function(){var a=this.Db=function(){if("undefined"==typeof F||!F.tmpl)return 0;try{if(0<=F.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,c,e){e=e||{};2>a&&j(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));
var f=b.data("precompiled");f||(f=b.text()||"",f=F.template(p,"{{ko_with $item.koBindingContext}}"+f+"{{/ko_with}}"),b.data("precompiled",f));b=[c.$data];c=F.extend({koBindingContext:c},e.templateOptions);c=F.tmpl(f,b,c);c.appendTo(y.createElement("div"));F.fragments={};return c};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){y.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(F.tmpl.tag.ko_code=
{open:"__.push($1 || '');"},F.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};b.qa.prototype=new b.v;w=new b.qa;0<w.Db&&b.wa(w);b.b("jqueryTmplTemplateEngine",b.qa)}"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?L(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],L):L(x.ko={});m;
})();

(function(){


// CommonJS require()

function require(p){
    var path = require.resolve(p)
      , mod = require.modules[path];
    if (!mod) throw new Error('failed to require "' + p + '"');
    if (!mod.exports) {
      mod.exports = {};
      mod.call(mod.exports, mod, mod.exports, require.relative(path));
    }
    return mod.exports;
  }

require.modules = {};

require.resolve = function (path){
    var orig = path
      , reg = path + '.js'
      , index = path + '/index.js';
    return require.modules[reg] && reg
      || require.modules[index] && index
      || orig;
  };

require.register = function (path, fn){
    require.modules[path] = fn;
  };

require.relative = function (parent) {
    return function(p){
      if ('.' != p.charAt(0)) return require(p);
      
      var path = parent.split('/')
        , segs = p.split('/');
      path.pop();
      
      for (var i = 0; i < segs.length; i++) {
        var seg = segs[i];
        if ('..' == seg) path.pop();
        else if ('.' != seg) path.push(seg);
      }

      return require(path.join('/'));
    };
  };


require.register("browser/debug.js", function(module, exports, require){

module.exports = function(type){
  return function(){
    
  }
};
}); // module: browser/debug.js

require.register("browser/diff.js", function(module, exports, require){
/* See license.txt for terms of usage */

/*
 * Text diff implementation.
 * 
 * This library supports the following APIS:
 * JsDiff.diffChars: Character by character diff
 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
 * JsDiff.diffLines: Line based diff
 * 
 * JsDiff.diffCss: Diff targeted at CSS content
 * 
 * These methods are based on the implementation proposed in
 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
 */
var JsDiff = (function() {
  function clonePath(path) {
    return { newPos: path.newPos, components: path.components.slice(0) };
  }
  function removeEmpty(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  }
  function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, "&amp;");
    n = n.replace(/</g, "&lt;");
    n = n.replace(/>/g, "&gt;");
    n = n.replace(/"/g, "&quot;");

    return n;
  }


  var fbDiff = function(ignoreWhitespace) {
    this.ignoreWhitespace = ignoreWhitespace;
  };
  fbDiff.prototype = {
      diff: function(oldString, newString) {
        // Handle the identity case (this is due to unrolling editLength == 0
        if (newString == oldString) {
          return [{ value: newString }];
        }
        if (!newString) {
          return [{ value: oldString, removed: true }];
        }
        if (!oldString) {
          return [{ value: newString, added: true }];
        }

        newString = this.tokenize(newString);
        oldString = this.tokenize(oldString);

        var newLen = newString.length, oldLen = oldString.length;
        var maxEditLength = newLen + oldLen;
        var bestPath = [{ newPos: -1, components: [] }];

        // Seed editLength = 0
        var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
        if (bestPath[0].newPos+1 >= newLen && oldPos+1 >= oldLen) {
          return bestPath[0].components;
        }

        for (var editLength = 1; editLength <= maxEditLength; editLength++) {
          for (var diagonalPath = -1*editLength; diagonalPath <= editLength; diagonalPath+=2) {
            var basePath;
            var addPath = bestPath[diagonalPath-1],
                removePath = bestPath[diagonalPath+1];
            oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
            if (addPath) {
              // No one else is going to attempt to use this value, clear it
              bestPath[diagonalPath-1] = undefined;
            }

            var canAdd = addPath && addPath.newPos+1 < newLen;
            var canRemove = removePath && 0 <= oldPos && oldPos < oldLen;
            if (!canAdd && !canRemove) {
              bestPath[diagonalPath] = undefined;
              continue;
            }

            // Select the diagonal that we want to branch from. We select the prior
            // path whose position in the new string is the farthest from the origin
            // and does not pass the bounds of the diff graph
            if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {
              basePath = clonePath(removePath);
              this.pushComponent(basePath.components, oldString[oldPos], undefined, true);
            } else {
              basePath = clonePath(addPath);
              basePath.newPos++;
              this.pushComponent(basePath.components, newString[basePath.newPos], true, undefined);
            }

            var oldPos = this.extractCommon(basePath, newString, oldString, diagonalPath);

            if (basePath.newPos+1 >= newLen && oldPos+1 >= oldLen) {
              return basePath.components;
            } else {
              bestPath[diagonalPath] = basePath;
            }
          }
        }
      },

      pushComponent: function(components, value, added, removed) {
        var last = components[components.length-1];
        if (last && last.added === added && last.removed === removed) {
          // We need to clone here as the component clone operation is just
          // as shallow array clone
          components[components.length-1] =
            {value: this.join(last.value, value), added: added, removed: removed };
        } else {
          components.push({value: value, added: added, removed: removed });
        }
      },
      extractCommon: function(basePath, newString, oldString, diagonalPath) {
        var newLen = newString.length,
            oldLen = oldString.length,
            newPos = basePath.newPos,
            oldPos = newPos - diagonalPath;
        while (newPos+1 < newLen && oldPos+1 < oldLen && this.equals(newString[newPos+1], oldString[oldPos+1])) {
          newPos++;
          oldPos++;
          
          this.pushComponent(basePath.components, newString[newPos], undefined, undefined);
        }
        basePath.newPos = newPos;
        return oldPos;
      },

      equals: function(left, right) {
        var reWhitespace = /\S/;
        if (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right)) {
          return true;
        } else {
          return left == right;
        }
      },
      join: function(left, right) {
        return left + right;
      },
      tokenize: function(value) {
        return value;
      }
  };
  
  var CharDiff = new fbDiff();
  
  var WordDiff = new fbDiff(true);
  WordDiff.tokenize = function(value) {
    return removeEmpty(value.split(/(\s+|\b)/));
  };
  
  var CssDiff = new fbDiff(true);
  CssDiff.tokenize = function(value) {
    return removeEmpty(value.split(/([{}:;,]|\s+)/));
  };
  
  var LineDiff = new fbDiff();
  LineDiff.tokenize = function(value) {
    return value.split(/^/m);
  };
  
  return {
    diffChars: function(oldStr, newStr) { return CharDiff.diff(oldStr, newStr); },
    diffWords: function(oldStr, newStr) { return WordDiff.diff(oldStr, newStr); },
    diffLines: function(oldStr, newStr) { return LineDiff.diff(oldStr, newStr); },

    diffCss: function(oldStr, newStr) { return CssDiff.diff(oldStr, newStr); },

    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {
      var ret = [];

      ret.push("Index: " + fileName);
      ret.push("===================================================================");
      ret.push("--- " + fileName + (typeof oldHeader === "undefined" ? "" : "\t" + oldHeader));
      ret.push("+++ " + fileName + (typeof newHeader === "undefined" ? "" : "\t" + newHeader));

      var diff = LineDiff.diff(oldStr, newStr);
      if (!diff[diff.length-1].value) {
        diff.pop();   // Remove trailing newline add
      }
      diff.push({value: "", lines: []});   // Append an empty value to make cleanup easier

      function contextLines(lines) {
        return lines.map(function(entry) { return ' ' + entry; });
      }
      function eofNL(curRange, i, current) {
        var last = diff[diff.length-2],
            isLast = i === diff.length-2,
            isLastOfType = i === diff.length-3 && (current.added === !last.added || current.removed === !last.removed);

        // Figure out if this is the last line for the given file and missing NL
        if (!/\n$/.test(current.value) && (isLast || isLastOfType)) {
          curRange.push('\\ No newline at end of file');
        }
      }

      var oldRangeStart = 0, newRangeStart = 0, curRange = [],
          oldLine = 1, newLine = 1;
      for (var i = 0; i < diff.length; i++) {
        var current = diff[i],
            lines = current.lines || current.value.replace(/\n$/, "").split("\n");
        current.lines = lines;

        if (current.added || current.removed) {
          if (!oldRangeStart) {
            var prev = diff[i-1];
            oldRangeStart = oldLine;
            newRangeStart = newLine;
            
            if (prev) {
              curRange = contextLines(prev.lines.slice(-4));
              oldRangeStart -= curRange.length;
              newRangeStart -= curRange.length;
            }
          }
          curRange.push.apply(curRange, lines.map(function(entry) { return (current.added?"+":"-") + entry; }));
          eofNL(curRange, i, current);

          if (current.added) {
            newLine += lines.length;
          } else {
            oldLine += lines.length;
          }
        } else {
          if (oldRangeStart) {
            // Close out any changes that have been output (or join overlapping)
            if (lines.length <= 8 && i < diff.length-2) {
              // Overlapping
              curRange.push.apply(curRange, contextLines(lines));
            } else {
              // end the range and output
              var contextSize = Math.min(lines.length, 4);
              ret.push(
                  "@@ -" + oldRangeStart + "," + (oldLine-oldRangeStart+contextSize)
                  + " +" + newRangeStart + "," + (newLine-newRangeStart+contextSize)
                  + " @@");
              ret.push.apply(ret, curRange);
              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));
              if (lines.length <= 4) {
                eofNL(ret, i, current);
              }

              oldRangeStart = 0;  newRangeStart = 0; curRange = [];
            }
          }
          oldLine += lines.length;
          newLine += lines.length;
        }
      }

      return ret.join('\n') + '\n';
    },

    convertChangesToXML: function(changes){
      var ret = [];
      for ( var i = 0; i < changes.length; i++) {
        var change = changes[i];
        if (change.added) {
          ret.push("<ins>");
        } else if (change.removed) {
          ret.push("<del>");
        }

        ret.push(escapeHTML(change.value));

        if (change.added) {
          ret.push("</ins>");
        } else if (change.removed) {
          ret.push("</del>");
        }
      }
      return ret.join("");
    }
  };
})();

if (typeof module !== "undefined") {
    module.exports = JsDiff;
}

}); // module: browser/diff.js

require.register("browser/events.js", function(module, exports, require){

/**
 * Module exports.
 */

exports.EventEmitter = EventEmitter;

/**
 * Check if `obj` is an array.
 */

function isArray(obj) {
  return '[object Array]' == {}.toString.call(obj);
}

/**
 * Event emitter constructor.
 *
 * @api public
 */

function EventEmitter(){};

/**
 * Adds a listener.
 *
 * @api public
 */

EventEmitter.prototype.on = function (name, fn) {
  if (!this.$events) {
    this.$events = {};
  }

  if (!this.$events[name]) {
    this.$events[name] = fn;
  } else if (isArray(this.$events[name])) {
    this.$events[name].push(fn);
  } else {
    this.$events[name] = [this.$events[name], fn];
  }

  return this;
};

EventEmitter.prototype.addListener = EventEmitter.prototype.on;

/**
 * Adds a volatile listener.
 *
 * @api public
 */

EventEmitter.prototype.once = function (name, fn) {
  var self = this;

  function on () {
    self.removeListener(name, on);
    fn.apply(this, arguments);
  };

  on.listener = fn;
  this.on(name, on);

  return this;
};

/**
 * Removes a listener.
 *
 * @api public
 */

EventEmitter.prototype.removeListener = function (name, fn) {
  if (this.$events && this.$events[name]) {
    var list = this.$events[name];

    if (isArray(list)) {
      var pos = -1;

      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i] === fn || (list[i].listener && list[i].listener === fn)) {
          pos = i;
          break;
        }
      }

      if (pos < 0) {
        return this;
      }

      list.splice(pos, 1);

      if (!list.length) {
        delete this.$events[name];
      }
    } else if (list === fn || (list.listener && list.listener === fn)) {
      delete this.$events[name];
    }
  }

  return this;
};

/**
 * Removes all listeners for an event.
 *
 * @api public
 */

EventEmitter.prototype.removeAllListeners = function (name) {
  if (name === undefined) {
    this.$events = {};
    return this;
  }

  if (this.$events && this.$events[name]) {
    this.$events[name] = null;
  }

  return this;
};

/**
 * Gets all listeners for a certain event.
 *
 * @api public
 */

EventEmitter.prototype.listeners = function (name) {
  if (!this.$events) {
    this.$events = {};
  }

  if (!this.$events[name]) {
    this.$events[name] = [];
  }

  if (!isArray(this.$events[name])) {
    this.$events[name] = [this.$events[name]];
  }

  return this.$events[name];
};

/**
 * Emits an event.
 *
 * @api public
 */

EventEmitter.prototype.emit = function (name) {
  if (!this.$events) {
    return false;
  }

  var handler = this.$events[name];

  if (!handler) {
    return false;
  }

  var args = [].slice.call(arguments, 1);

  if ('function' == typeof handler) {
    handler.apply(this, args);
  } else if (isArray(handler)) {
    var listeners = handler.slice();

    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(this, args);
    }
  } else {
    return false;
  }

  return true;
};
}); // module: browser/events.js

require.register("browser/fs.js", function(module, exports, require){

}); // module: browser/fs.js

require.register("browser/path.js", function(module, exports, require){

}); // module: browser/path.js

require.register("browser/progress.js", function(module, exports, require){

/**
 * Expose `Progress`.
 */

module.exports = Progress;

/**
 * Initialize a new `Progress` indicator.
 */

function Progress() {
  this.percent = 0;
  this.size(0);
  this.fontSize(11);
  this.font('helvetica, arial, sans-serif');
}

/**
 * Set progress size to `n`.
 *
 * @param {Number} n
 * @return {Progress} for chaining
 * @api public
 */

Progress.prototype.size = function(n){
  this._size = n;
  return this;
};

/**
 * Set text to `str`.
 *
 * @param {String} str
 * @return {Progress} for chaining
 * @api public
 */

Progress.prototype.text = function(str){
  this._text = str;
  return this;
};

/**
 * Set font size to `n`.
 *
 * @param {Number} n
 * @return {Progress} for chaining
 * @api public
 */

Progress.prototype.fontSize = function(n){
  this._fontSize = n;
  return this;
};

/**
 * Set font `family`.
 *
 * @param {String} family
 * @return {Progress} for chaining
 */

Progress.prototype.font = function(family){
  this._font = family;
  return this;
};

/**
 * Update percentage to `n`.
 *
 * @param {Number} n
 * @return {Progress} for chaining
 */

Progress.prototype.update = function(n){
  this.percent = n;
  return this;
};

/**
 * Draw on `ctx`.
 *
 * @param {CanvasRenderingContext2d} ctx
 * @return {Progress} for chaining
 */

Progress.prototype.draw = function(ctx){
  var percent = Math.min(this.percent, 100)
    , size = this._size
    , half = size / 2
    , x = half
    , y = half
    , rad = half - 1
    , fontSize = this._fontSize;

  ctx.font = fontSize + 'px ' + this._font;

  var angle = Math.PI * 2 * (percent / 100);
  ctx.clearRect(0, 0, size, size);

  // outer circle
  ctx.strokeStyle = '#9f9f9f';
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, angle, false);
  ctx.stroke();

  // inner circle
  ctx.strokeStyle = '#eee';
  ctx.beginPath();
  ctx.arc(x, y, rad - 1, 0, angle, true);
  ctx.stroke();

  // text
  var text = this._text || (percent | 0) + '%'
    , w = ctx.measureText(text).width;

  ctx.fillText(
      text
    , x - w / 2 + 1
    , y + fontSize / 2 - 1);

  return this;
};

}); // module: browser/progress.js

require.register("browser/tty.js", function(module, exports, require){

exports.isatty = function(){
  return true;
};

exports.getWindowSize = function(){
  return [window.innerHeight, window.innerWidth];
};
}); // module: browser/tty.js

require.register("context.js", function(module, exports, require){

/**
 * Expose `Context`.
 */

module.exports = Context;

/**
 * Initialize a new `Context`.
 *
 * @api private
 */

function Context(){}

/**
 * Set or get the context `Runnable` to `runnable`.
 *
 * @param {Runnable} runnable
 * @return {Context}
 * @api private
 */

Context.prototype.runnable = function(runnable){
  if (0 == arguments.length) return this._runnable;
  this.test = this._runnable = runnable;
  return this;
};

/**
 * Set test timeout `ms`.
 *
 * @param {Number} ms
 * @return {Context} self
 * @api private
 */

Context.prototype.timeout = function(ms){
  this.runnable().timeout(ms);
  return this;
};

/**
 * Set test slowness threshold `ms`.
 *
 * @param {Number} ms
 * @return {Context} self
 * @api private
 */

Context.prototype.slow = function(ms){
  this.runnable().slow(ms);
  return this;
};

/**
 * Inspect the context void of `._runnable`.
 *
 * @return {String}
 * @api private
 */

Context.prototype.inspect = function(){
  return JSON.stringify(this, function(key, val){
    if ('_runnable' == key) return;
    if ('test' == key) return;
    return val;
  }, 2);
};

}); // module: context.js

require.register("hook.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Runnable = require('./runnable');

/**
 * Expose `Hook`.
 */

module.exports = Hook;

/**
 * Initialize a new `Hook` with the given `title` and callback `fn`.
 *
 * @param {String} title
 * @param {Function} fn
 * @api private
 */

function Hook(title, fn) {
  Runnable.call(this, title, fn);
  this.type = 'hook';
}

/**
 * Inherit from `Runnable.prototype`.
 */

function F(){};
F.prototype = Runnable.prototype;
Hook.prototype = new F;
Hook.prototype.constructor = Hook;


/**
 * Get or set the test `err`.
 *
 * @param {Error} err
 * @return {Error}
 * @api public
 */

Hook.prototype.error = function(err){
  if (0 == arguments.length) {
    var err = this._error;
    this._error = null;
    return err;
  }

  this._error = err;
};


}); // module: hook.js

require.register("interfaces/bdd.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Suite = require('../suite')
  , Test = require('../test');

/**
 * BDD-style interface:
 * 
 *      describe('Array', function(){
 *        describe('#indexOf()', function(){
 *          it('should return -1 when not present', function(){
 *
 *          });
 *
 *          it('should return the index when present', function(){
 *
 *          });
 *        });
 *      });
 * 
 */

module.exports = function(suite){
  var suites = [suite];

  suite.on('pre-require', function(context, file, mocha){

    /**
     * Execute before running tests.
     */

    context.before = function(fn){
      suites[0].beforeAll(fn);
    };

    /**
     * Execute after running tests.
     */

    context.after = function(fn){
      suites[0].afterAll(fn);
    };

    /**
     * Execute before each test case.
     */

    context.beforeEach = function(fn){
      suites[0].beforeEach(fn);
    };

    /**
     * Execute after each test case.
     */

    context.afterEach = function(fn){
      suites[0].afterEach(fn);
    };

    /**
     * Describe a "suite" with the given `title`
     * and callback `fn` containing nested suites
     * and/or tests.
     */
  
    context.describe = context.context = function(title, fn){
      var suite = Suite.create(suites[0], title);
      suites.unshift(suite);
      fn.call(suite);
      suites.shift();
      return suite;
    };

    /**
     * Pending describe.
     */

    context.xdescribe =
    context.xcontext =
    context.describe.skip = function(title, fn){
      var suite = Suite.create(suites[0], title);
      suite.pending = true;
      suites.unshift(suite);
      fn.call(suite);
      suites.shift();
    };

    /**
     * Exclusive suite.
     */

    context.describe.only = function(title, fn){
      var suite = context.describe(title, fn);
      mocha.grep(suite.fullTitle());
    };

    /**
     * Describe a specification or test-case
     * with the given `title` and callback `fn`
     * acting as a thunk.
     */

    context.it = context.specify = function(title, fn){
      var suite = suites[0];
      if (suite.pending) var fn = null;
      var test = new Test(title, fn);
      suite.addTest(test);
      return test;
    };

    /**
     * Exclusive test-case.
     */

    context.it.only = function(title, fn){
      var test = context.it(title, fn);
      mocha.grep(test.fullTitle());
    };

    /**
     * Pending test case.
     */

    context.xit =
    context.xspecify =
    context.it.skip = function(title){
      context.it(title);
    };
  });
};

}); // module: interfaces/bdd.js

require.register("interfaces/exports.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Suite = require('../suite')
  , Test = require('../test');

/**
 * TDD-style interface:
 * 
 *     exports.Array = {
 *       '#indexOf()': {
 *         'should return -1 when the value is not present': function(){
 *           
 *         },
 *
 *         'should return the correct index when the value is present': function(){
 *           
 *         }
 *       }
 *     };
 * 
 */

module.exports = function(suite){
  var suites = [suite];

  suite.on('require', visit);

  function visit(obj) {
    var suite;
    for (var key in obj) {
      if ('function' == typeof obj[key]) {
        var fn = obj[key];
        switch (key) {
          case 'before':
            suites[0].beforeAll(fn);
            break;
          case 'after':
            suites[0].afterAll(fn);
            break;
          case 'beforeEach':
            suites[0].beforeEach(fn);
            break;
          case 'afterEach':
            suites[0].afterEach(fn);
            break;
          default:
            suites[0].addTest(new Test(key, fn));
        }
      } else {
        var suite = Suite.create(suites[0], key);
        suites.unshift(suite);
        visit(obj[key]);
        suites.shift();
      }
    }
  }
};
}); // module: interfaces/exports.js

require.register("interfaces/index.js", function(module, exports, require){

exports.bdd = require('./bdd');
exports.tdd = require('./tdd');
exports.qunit = require('./qunit');
exports.exports = require('./exports');

}); // module: interfaces/index.js

require.register("interfaces/qunit.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Suite = require('../suite')
  , Test = require('../test');

/**
 * QUnit-style interface:
 * 
 *     suite('Array');
 *     
 *     test('#length', function(){
 *       var arr = [1,2,3];
 *       ok(arr.length == 3);
 *     });
 *     
 *     test('#indexOf()', function(){
 *       var arr = [1,2,3];
 *       ok(arr.indexOf(1) == 0);
 *       ok(arr.indexOf(2) == 1);
 *       ok(arr.indexOf(3) == 2);
 *     });
 *     
 *     suite('String');
 *     
 *     test('#length', function(){
 *       ok('foo'.length == 3);
 *     });
 * 
 */

module.exports = function(suite){
  var suites = [suite];

  suite.on('pre-require', function(context){

    /**
     * Execute before running tests.
     */

    context.before = function(fn){
      suites[0].beforeAll(fn);
    };

    /**
     * Execute after running tests.
     */

    context.after = function(fn){
      suites[0].afterAll(fn);
    };

    /**
     * Execute before each test case.
     */

    context.beforeEach = function(fn){
      suites[0].beforeEach(fn);
    };

    /**
     * Execute after each test case.
     */

    context.afterEach = function(fn){
      suites[0].afterEach(fn);
    };

    /**
     * Describe a "suite" with the given `title`.
     */
  
    context.suite = function(title){
      if (suites.length > 1) suites.shift();
      var suite = Suite.create(suites[0], title);
      suites.unshift(suite);
    };

    /**
     * Describe a specification or test-case
     * with the given `title` and callback `fn`
     * acting as a thunk.
     */

    context.test = function(title, fn){
      suites[0].addTest(new Test(title, fn));
    };
  });
};

}); // module: interfaces/qunit.js

require.register("interfaces/tdd.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Suite = require('../suite')
  , Test = require('../test');

/**
 * TDD-style interface:
 *
 *      suite('Array', function(){
 *        suite('#indexOf()', function(){
 *          suiteSetup(function(){
 *
 *          });
 *          
 *          test('should return -1 when not present', function(){
 *
 *          });
 *
 *          test('should return the index when present', function(){
 *
 *          });
 *
 *          suiteTeardown(function(){
 *
 *          });
 *        });
 *      });
 *
 */

module.exports = function(suite){
  var suites = [suite];

  suite.on('pre-require', function(context, file, mocha){

    /**
     * Execute before each test case.
     */

    context.setup = function(fn){
      suites[0].beforeEach(fn);
    };

    /**
     * Execute after each test case.
     */

    context.teardown = function(fn){
      suites[0].afterEach(fn);
    };

    /**
     * Execute before the suite.
     */

    context.suiteSetup = function(fn){
      suites[0].beforeAll(fn);
    };

    /**
     * Execute after the suite.
     */

    context.suiteTeardown = function(fn){
      suites[0].afterAll(fn);
    };

    /**
     * Describe a "suite" with the given `title`
     * and callback `fn` containing nested suites
     * and/or tests.
     */

    context.suite = function(title, fn){
      var suite = Suite.create(suites[0], title);
      suites.unshift(suite);
      fn.call(suite);
      suites.shift();
      return suite;
    };

    /**
     * Exclusive test-case.
     */

    context.suite.only = function(title, fn){
      var suite = context.suite(title, fn);
      mocha.grep(suite.fullTitle());
    };

    /**
     * Describe a specification or test-case
     * with the given `title` and callback `fn`
     * acting as a thunk.
     */

    context.test = function(title, fn){
      var test = new Test(title, fn);
      suites[0].addTest(test);
      return test;
    };

    /**
     * Exclusive test-case.
     */

    context.test.only = function(title, fn){
      var test = context.test(title, fn);
      mocha.grep(test.fullTitle());
    };

    /**
     * Pending test case.
     */

    context.test.skip = function(title){
      context.test(title);
    };
  });
};

}); // module: interfaces/tdd.js

require.register("mocha.js", function(module, exports, require){
/*!
 * mocha
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var path = require('browser/path')
  , utils = require('./utils');

/**
 * Expose `Mocha`.
 */

exports = module.exports = Mocha;

/**
 * Expose internals.
 */

exports.utils = utils;
exports.interfaces = require('./interfaces');
exports.reporters = require('./reporters');
exports.Runnable = require('./runnable');
exports.Context = require('./context');
exports.Runner = require('./runner');
exports.Suite = require('./suite');
exports.Hook = require('./hook');
exports.Test = require('./test');

/**
 * Return image `name` path.
 *
 * @param {String} name
 * @return {String}
 * @api private
 */

function image(name) {
  return __dirname + '/../images/' + name + '.png';
}

/**
 * Setup mocha with `options`.
 *
 * Options:
 *
 *   - `ui` name "bdd", "tdd", "exports" etc
 *   - `reporter` reporter instance, defaults to `mocha.reporters.Dot`
 *   - `globals` array of accepted globals
 *   - `timeout` timeout in milliseconds
 *   - `bail` bail on the first test failure
 *   - `slow` milliseconds to wait before considering a test slow
 *   - `ignoreLeaks` ignore global leaks
 *   - `grep` string or regexp to filter tests with
 *
 * @param {Object} options
 * @api public
 */

function Mocha(options) {
  options = options || {};
  this.files = [];
  this.options = options;
  this.grep(options.grep);
  this.suite = new exports.Suite('', new exports.Context);
  this.ui(options.ui);
  this.bail(options.bail);
  this.reporter(options.reporter);
  if (options.timeout) this.timeout(options.timeout);
  if (options.slow) this.slow(options.slow);
}

/**
 * Enable or disable bailing on the first failure.
 *
 * @param {Boolean} [bail]
 * @api public
 */

Mocha.prototype.bail = function(bail){
  if (0 == arguments.length) bail = true;
  this.suite.bail(bail);
  return this;
};

/**
 * Add test `file`.
 *
 * @param {String} file
 * @api public
 */

Mocha.prototype.addFile = function(file){
  this.files.push(file);
  return this;
};

/**
 * Set reporter to `reporter`, defaults to "dot".
 *
 * @param {String|Function} reporter name or constructor
 * @api public
 */

Mocha.prototype.reporter = function(reporter){
  if ('function' == typeof reporter) {
    this._reporter = reporter;
  } else {
    reporter = reporter || 'dot';
    try {
      this._reporter = require('./reporters/' + reporter);
    } catch (err) {
      this._reporter = require(reporter);
    }
    if (!this._reporter) throw new Error('invalid reporter "' + reporter + '"');
  }
  return this;
};

/**
 * Set test UI `name`, defaults to "bdd".
 *
 * @param {String} bdd
 * @api public
 */

Mocha.prototype.ui = function(name){
  name = name || 'bdd';
  this._ui = exports.interfaces[name];
  if (!this._ui) throw new Error('invalid interface "' + name + '"');
  this._ui = this._ui(this.suite);
  return this;
};

/**
 * Load registered files.
 *
 * @api private
 */

Mocha.prototype.loadFiles = function(fn){
  var self = this;
  var suite = this.suite;
  var pending = this.files.length;
  this.files.forEach(function(file){
    file = path.resolve(file);
    suite.emit('pre-require', global, file, self);
    suite.emit('require', require(file), file, self);
    suite.emit('post-require', global, file, self);
    --pending || (fn && fn());
  });
};

/**
 * Enable growl support.
 *
 * @api private
 */

Mocha.prototype._growl = function(runner, reporter) {
  var notify = require('growl');

  runner.on('end', function(){
    var stats = reporter.stats;
    if (stats.failures) {
      var msg = stats.failures + ' of ' + runner.total + ' tests failed';
      notify(msg, { name: 'mocha', title: 'Failed', image: image('error') });
    } else {
      notify(stats.passes + ' tests passed in ' + stats.duration + 'ms', {
          name: 'mocha'
        , title: 'Passed'
        , image: image('ok')
      });
    }
  });
};

/**
 * Add regexp to grep, if `re` is a string it is escaped.
 *
 * @param {RegExp|String} re
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.grep = function(re){
  this.options.grep = 'string' == typeof re
    ? new RegExp(utils.escapeRegexp(re))
    : re;
  return this;
};

/**
 * Invert `.grep()` matches.
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.invert = function(){
  this.options.invert = true;
  return this;
};

/**
 * Ignore global leaks.
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.ignoreLeaks = function(){
  this.options.ignoreLeaks = true;
  return this;
};

/**
 * Enable global leak checking.
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.checkLeaks = function(){
  this.options.ignoreLeaks = false;
  return this;
};

/**
 * Enable growl support.
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.growl = function(){
  this.options.growl = true;
  return this;
};

/**
 * Ignore `globals` array or string.
 *
 * @param {Array|String} globals
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.globals = function(globals){
  this.options.globals = (this.options.globals || []).concat(globals);
  return this;
};

/**
 * Set the timeout in milliseconds.
 *
 * @param {Number} timeout
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.timeout = function(timeout){
  this.suite.timeout(timeout);
  return this;
};

/**
 * Set slowness threshold in milliseconds.
 *
 * @param {Number} slow
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.slow = function(slow){
  this.suite.slow(slow);
  return this;
};

/**
 * Makes all tests async (accepting a callback)
 *
 * @return {Mocha}
 * @api public
 */

Mocha.prototype.asyncOnly = function(){
  this.options.asyncOnly = true;
  return this;
};

/**
 * Run tests and invoke `fn()` when complete.
 *
 * @param {Function} fn
 * @return {Runner}
 * @api public
 */

Mocha.prototype.run = function(fn){
  if (this.files.length) this.loadFiles();
  var suite = this.suite;
  var options = this.options;
  var runner = new exports.Runner(suite);
  var reporter = new this._reporter(runner);
  runner.ignoreLeaks = options.ignoreLeaks;
  runner.asyncOnly = options.asyncOnly;
  if (options.grep) runner.grep(options.grep, options.invert);
  if (options.globals) runner.globals(options.globals);
  if (options.growl) this._growl(runner, reporter);
  return runner.run(fn);
};

}); // module: mocha.js

require.register("ms.js", function(module, exports, require){

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;

/**
 * Parse or format the given `val`.
 *
 * @param {String|Number} val
 * @return {String|Number}
 * @api public
 */

module.exports = function(val){
  if ('string' == typeof val) return parse(val);
  return format(val);
}

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  var m = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
  if (!m) return;
  var n = parseFloat(m[1]);
  var type = (m[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'y':
      return n * 31557600000;
    case 'days':
    case 'day':
    case 'd':
      return n * 86400000;
    case 'hours':
    case 'hour':
    case 'h':
      return n * 3600000;
    case 'minutes':
    case 'minute':
    case 'm':
      return n * 60000;
    case 'seconds':
    case 'second':
    case 's':
      return n * 1000;
    case 'ms':
      return n;
  }
}

/**
 * Format the given `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api public
 */

function format(ms) {
  if (ms == d) return Math.round(ms / d) + ' day';
  if (ms > d) return Math.round(ms / d) + ' days';
  if (ms == h) return Math.round(ms / h) + ' hour';
  if (ms > h) return Math.round(ms / h) + ' hours';
  if (ms == m) return Math.round(ms / m) + ' minute';
  if (ms > m) return Math.round(ms / m) + ' minutes';
  if (ms == s) return Math.round(ms / s) + ' second';
  if (ms > s) return Math.round(ms / s) + ' seconds';
  return ms + ' ms';
}
}); // module: ms.js

require.register("reporters/base.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var tty = require('browser/tty')
  , diff = require('browser/diff')
  , ms = require('../ms');

/**
 * Save timer references to avoid Sinon interfering (see GH-237).
 */

var Date = global.Date
  , setTimeout = global.setTimeout
  , setInterval = global.setInterval
  , clearTimeout = global.clearTimeout
  , clearInterval = global.clearInterval;

/**
 * Check if both stdio streams are associated with a tty.
 */

var isatty = tty.isatty(1) && tty.isatty(2);

/**
 * Expose `Base`.
 */

exports = module.exports = Base;

/**
 * Enable coloring by default.
 */

exports.useColors = isatty;

/**
 * Default color map.
 */

exports.colors = {
    'pass': 90
  , 'fail': 31
  , 'bright pass': 92
  , 'bright fail': 91
  , 'bright yellow': 93
  , 'pending': 36
  , 'suite': 0
  , 'error title': 0
  , 'error message': 31
  , 'error stack': 90
  , 'checkmark': 32
  , 'fast': 90
  , 'medium': 33
  , 'slow': 31
  , 'green': 32
  , 'light': 90
  , 'diff gutter': 90
  , 'diff added': 42
  , 'diff removed': 41
};

/**
 * Default symbol map.
 */
 
exports.symbols = {
  ok: '✓',
  err: '✖',
  dot: '․'
};

// With node.js on Windows: use symbols available in terminal default fonts
if ('win32' == process.platform) {
  exports.symbols.ok = '\u221A';
  exports.symbols.err = '\u00D7';
  exports.symbols.dot = '.';
}

/**
 * Color `str` with the given `type`,
 * allowing colors to be disabled,
 * as well as user-defined color
 * schemes.
 *
 * @param {String} type
 * @param {String} str
 * @return {String}
 * @api private
 */

var color = exports.color = function(type, str) {
  if (!exports.useColors) return str;
  return '\u001b[' + exports.colors[type] + 'm' + str + '\u001b[0m';
};

/**
 * Expose term window size, with some
 * defaults for when stderr is not a tty.
 */

exports.window = {
  width: isatty
    ? process.stdout.getWindowSize
      ? process.stdout.getWindowSize(1)[0]
      : tty.getWindowSize()[1]
    : 75
};

/**
 * Expose some basic cursor interactions
 * that are common among reporters.
 */

exports.cursor = {
  hide: function(){
    process.stdout.write('\u001b[?25l');
  },

  show: function(){
    process.stdout.write('\u001b[?25h');
  },

  deleteLine: function(){
    process.stdout.write('\u001b[2K');
  },

  beginningOfLine: function(){
    process.stdout.write('\u001b[0G');
  },

  CR: function(){
    exports.cursor.deleteLine();
    exports.cursor.beginningOfLine();
  }
};

/**
 * Outut the given `failures` as a list.
 *
 * @param {Array} failures
 * @api public
 */

exports.list = function(failures){
  console.error();
  failures.forEach(function(test, i){
    // format
    var fmt = color('error title', '  %s) %s:\n')
      + color('error message', '     %s')
      + color('error stack', '\n%s\n');

    // msg
    var err = test.err
      , message = err.message || ''
      , stack = err.stack || message
      , index = stack.indexOf(message) + message.length
      , msg = stack.slice(0, index)
      , actual = err.actual
      , expected = err.expected
      , escape = true;

    // explicitly show diff
    if (err.showDiff) {
      escape = false;
      err.actual = actual = JSON.stringify(actual, null, 2);
      err.expected = expected = JSON.stringify(expected, null, 2);
    }

    // actual / expected diff
    if ('string' == typeof actual && 'string' == typeof expected) {
      var len = Math.max(actual.length, expected.length);

      if (len < 20) msg = errorDiff(err, 'Chars', escape);
      else msg = errorDiff(err, 'Words', escape);

      // linenos
      var lines = msg.split('\n');
      if (lines.length > 4) {
        var width = String(lines.length).length;
        msg = lines.map(function(str, i){
          return pad(++i, width) + ' |' + ' ' + str;
        }).join('\n');
      }

      // legend
      msg = '\n'
        + color('diff removed', 'actual')
        + ' '
        + color('diff added', 'expected')
        + '\n\n'
        + msg
        + '\n';

      // indent
      msg = msg.replace(/^/gm, '      ');

      fmt = color('error title', '  %s) %s:\n%s')
        + color('error stack', '\n%s\n');
    }

    // indent stack trace without msg
    stack = stack.slice(index ? index + 1 : index)
      .replace(/^/gm, '  ');

    console.error(fmt, (i + 1), test.fullTitle(), msg, stack);
  });
};

/**
 * Initialize a new `Base` reporter.
 *
 * All other reporters generally
 * inherit from this reporter, providing
 * stats such as test duration, number
 * of tests passed / failed etc.
 *
 * @param {Runner} runner
 * @api public
 */

function Base(runner) {
  var self = this
    , stats = this.stats = { suites: 0, tests: 0, passes: 0, pending: 0, failures: 0 }
    , failures = this.failures = [];

  if (!runner) return;
  this.runner = runner;

  runner.stats = stats;

  runner.on('start', function(){
    stats.start = new Date;
  });

  runner.on('suite', function(suite){
    stats.suites = stats.suites || 0;
    suite.root || stats.suites++;
  });

  runner.on('test end', function(test){
    stats.tests = stats.tests || 0;
    stats.tests++;
  });

  runner.on('pass', function(test){
    stats.passes = stats.passes || 0;

    var medium = test.slow() / 2;
    test.speed = test.duration > test.slow()
      ? 'slow'
      : test.duration > medium
        ? 'medium'
        : 'fast';

    stats.passes++;
  });

  runner.on('fail', function(test, err){
    stats.failures = stats.failures || 0;
    stats.failures++;
    test.err = err;
    failures.push(test);
  });

  runner.on('end', function(){
    stats.end = new Date;
    stats.duration = new Date - stats.start;
  });

  runner.on('pending', function(){
    stats.pending++;
  });
}

/**
 * Output common epilogue used by many of
 * the bundled reporters.
 *
 * @api public
 */

Base.prototype.epilogue = function(){
  var stats = this.stats
    , fmt
    , tests;

  console.log();

  function pluralize(n) {
    return 1 == n ? 'test' : 'tests';
  }

  // failure
  if (stats.failures) {
    fmt = color('bright fail', '  ' + exports.symbols.err)
      + color('fail', ' %d of %d %s failed')
      + color('light', ':')

    console.error(fmt,
      stats.failures,
      this.runner.total,
      pluralize(this.runner.total));

    Base.list(this.failures);
    console.error();
    return;
  }

  // pass
  fmt = color('bright pass', ' ')
    + color('green', ' %d %s complete')
    + color('light', ' (%s)');

  console.log(fmt,
    stats.tests || 0,
    pluralize(stats.tests),
    ms(stats.duration));

  // pending
  if (stats.pending) {
    fmt = color('pending', ' ')
      + color('pending', ' %d %s pending');

    console.log(fmt, stats.pending, pluralize(stats.pending));
  }

  console.log();
};

/**
 * Pad the given `str` to `len`.
 *
 * @param {String} str
 * @param {String} len
 * @return {String}
 * @api private
 */

function pad(str, len) {
  str = String(str);
  return Array(len - str.length + 1).join(' ') + str;
}

/**
 * Return a character diff for `err`.
 *
 * @param {Error} err
 * @return {String}
 * @api private
 */

function errorDiff(err, type, escape) {
  return diff['diff' + type](err.actual, err.expected).map(function(str){
    if (escape) {
      str.value = str.value
        .replace(/\t/g, '<tab>')
        .replace(/\r/g, '<CR>')
        .replace(/\n/g, '<LF>\n');
    }
    if (str.added) return colorLines('diff added', str.value);
    if (str.removed) return colorLines('diff removed', str.value);
    return str.value;
  }).join('');
}

/**
 * Color lines for `str`, using the color `name`.
 *
 * @param {String} name
 * @param {String} str
 * @return {String}
 * @api private
 */

function colorLines(name, str) {
  return str.split('\n').map(function(str){
    return color(name, str);
  }).join('\n');
}

}); // module: reporters/base.js

require.register("reporters/doc.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , utils = require('../utils');

/**
 * Expose `Doc`.
 */

exports = module.exports = Doc;

/**
 * Initialize a new `Doc` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Doc(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , total = runner.total
    , indents = 2;

  function indent() {
    return Array(indents).join('  ');
  }

  runner.on('suite', function(suite){
    if (suite.root) return;
    ++indents;
    console.log('%s<section class="suite">', indent());
    ++indents;
    console.log('%s<h1>%s</h1>', indent(), utils.escape(suite.title));
    console.log('%s<dl>', indent());
  });

  runner.on('suite end', function(suite){
    if (suite.root) return;
    console.log('%s</dl>', indent());
    --indents;
    console.log('%s</section>', indent());
    --indents;
  });

  runner.on('pass', function(test){
    console.log('%s  <dt>%s</dt>', indent(), utils.escape(test.title));
    var code = utils.escape(utils.clean(test.fn.toString()));
    console.log('%s  <dd><pre><code>%s</code></pre></dd>', indent(), code);
  });
}

}); // module: reporters/doc.js

require.register("reporters/dot.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , color = Base.color;

/**
 * Expose `Dot`.
 */

exports = module.exports = Dot;

/**
 * Initialize a new `Dot` matrix test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Dot(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , width = Base.window.width * .75 | 0
    , n = 0;

  runner.on('start', function(){
    process.stdout.write('\n  ');
  });

  runner.on('pending', function(test){
    process.stdout.write(color('pending', Base.symbols.dot));
  });

  runner.on('pass', function(test){
    if (++n % width == 0) process.stdout.write('\n  ');
    if ('slow' == test.speed) {
      process.stdout.write(color('bright yellow', Base.symbols.dot));
    } else {
      process.stdout.write(color(test.speed, Base.symbols.dot));
    }
  });

  runner.on('fail', function(test, err){
    if (++n % width == 0) process.stdout.write('\n  ');
    process.stdout.write(color('fail', Base.symbols.dot));
  });

  runner.on('end', function(){
    console.log();
    self.epilogue();
  });
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Dot.prototype = new F;
Dot.prototype.constructor = Dot;

}); // module: reporters/dot.js

require.register("reporters/html-cov.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var JSONCov = require('./json-cov')
  , fs = require('browser/fs');

/**
 * Expose `HTMLCov`.
 */

exports = module.exports = HTMLCov;

/**
 * Initialize a new `JsCoverage` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function HTMLCov(runner) {
  var jade = require('jade')
    , file = __dirname + '/templates/coverage.jade'
    , str = fs.readFileSync(file, 'utf8')
    , fn = jade.compile(str, { filename: file })
    , self = this;

  JSONCov.call(this, runner, false);

  runner.on('end', function(){
    process.stdout.write(fn({
        cov: self.cov
      , coverageClass: coverageClass
    }));
  });
}

/**
 * Return coverage class for `n`.
 *
 * @return {String}
 * @api private
 */

function coverageClass(n) {
  if (n >= 75) return 'high';
  if (n >= 50) return 'medium';
  if (n >= 25) return 'low';
  return 'terrible';
}
}); // module: reporters/html-cov.js

require.register("reporters/html.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , utils = require('../utils')
  , Progress = require('../browser/progress')
  , escape = utils.escape;

/**
 * Save timer references to avoid Sinon interfering (see GH-237).
 */

var Date = global.Date
  , setTimeout = global.setTimeout
  , setInterval = global.setInterval
  , clearTimeout = global.clearTimeout
  , clearInterval = global.clearInterval;

/**
 * Expose `Doc`.
 */

exports = module.exports = HTML;

/**
 * Stats template.
 */

var statsTemplate = '<ul id="mocha-stats">'
  + '<li class="progress"><canvas width="40" height="40"></canvas></li>'
  + '<li class="passes"><a href="#">passes:</a> <em>0</em></li>'
  + '<li class="failures"><a href="#">failures:</a> <em>0</em></li>'
  + '<li class="duration">duration: <em>0</em>s</li>'
  + '</ul>';

/**
 * Initialize a new `Doc` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function HTML(runner, root) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , total = runner.total
    , stat = fragment(statsTemplate)
    , items = stat.getElementsByTagName('li')
    , passes = items[1].getElementsByTagName('em')[0]
    , passesLink = items[1].getElementsByTagName('a')[0]
    , failures = items[2].getElementsByTagName('em')[0]
    , failuresLink = items[2].getElementsByTagName('a')[0]
    , duration = items[3].getElementsByTagName('em')[0]
    , canvas = stat.getElementsByTagName('canvas')[0]
    , report = fragment('<ul id="mocha-report"></ul>')
    , stack = [report]
    , progress
    , ctx

  root = root || document.getElementById('mocha');

  if (canvas.getContext) {
    var ratio = window.devicePixelRatio || 1;
    canvas.style.width = canvas.width;
    canvas.style.height = canvas.height;
    canvas.width *= ratio;
    canvas.height *= ratio;
    ctx = canvas.getContext('2d');
    ctx.scale(ratio, ratio);
    progress = new Progress;
  }

  if (!root) return error('#mocha div missing, add it to your document');

  // pass toggle
  on(passesLink, 'click', function(){
    unhide();
    var name = /pass/.test(report.className) ? '' : ' pass';
    report.className = report.className.replace(/fail|pass/g, '') + name;
    if (report.className.trim()) hideSuitesWithout('test pass');
  });

  // failure toggle
  on(failuresLink, 'click', function(){
    unhide();
    var name = /fail/.test(report.className) ? '' : ' fail';
    report.className = report.className.replace(/fail|pass/g, '') + name;
    if (report.className.trim()) hideSuitesWithout('test fail');
  });

  root.appendChild(stat);
  root.appendChild(report);

  if (progress) progress.size(40);

  runner.on('suite', function(suite){
    if (suite.root) return;

    // suite
    var url = '?grep=' + encodeURIComponent(suite.fullTitle());
    var el = fragment('<li class="suite"><h1><a href="%s">%s</a></h1></li>', url, escape(suite.title));

    // container
    stack[0].appendChild(el);
    stack.unshift(document.createElement('ul'));
    el.appendChild(stack[0]);
  });

  runner.on('suite end', function(suite){
    if (suite.root) return;
    stack.shift();
  });

  runner.on('fail', function(test, err){
    if ('hook' == test.type) runner.emit('test end', test);
  });

  runner.on('test end', function(test){
    window.scrollTo(0, document.body.scrollHeight);

    // TODO: add to stats
    var percent = stats.tests / this.total * 100 | 0;
    if (progress) progress.update(percent).draw(ctx);

    // update stats
    var ms = new Date - stats.start;
    text(passes, stats.passes);
    text(failures, stats.failures);
    text(duration, (ms / 1000).toFixed(2));

    // test
    if ('passed' == test.state) {
      var el = fragment('<li class="test pass %e"><h2>%e<span class="duration">%ems</span> <a href="?grep=%e" class="replay">‣</a></h2></li>', test.speed, test.title, test.duration, encodeURIComponent(test.fullTitle()));
    } else if (test.pending) {
      var el = fragment('<li class="test pass pending"><h2>%e</h2></li>', test.title);
    } else {
      var el = fragment('<li class="test fail"><h2>%e <a href="?grep=%e" class="replay">‣</a></h2></li>', test.title, encodeURIComponent(test.fullTitle()));
      var str = test.err.stack || test.err.toString();

      // FF / Opera do not add the message
      if (!~str.indexOf(test.err.message)) {
        str = test.err.message + '\n' + str;
      }

      // <=IE7 stringifies to [Object Error]. Since it can be overloaded, we
      // check for the result of the stringifying.
      if ('[object Error]' == str) str = test.err.message;

      // Safari doesn't give you a stack. Let's at least provide a source line.
      if (!test.err.stack && test.err.sourceURL && test.err.line !== undefined) {
        str += "\n(" + test.err.sourceURL + ":" + test.err.line + ")";
      }

      el.appendChild(fragment('<pre class="error">%e</pre>', str));
    }

    // toggle code
    // TODO: defer
    if (!test.pending) {
      var h2 = el.getElementsByTagName('h2')[0];

      on(h2, 'click', function(){
        pre.style.display = 'none' == pre.style.display
          ? 'block'
          : 'none';
      });

      var pre = fragment('<pre><code>%e</code></pre>', utils.clean(test.fn.toString()));
      el.appendChild(pre);
      pre.style.display = 'none';
    }

    // Don't call .appendChild if #mocha-report was already .shift()'ed off the stack.
    if (stack[0]) stack[0].appendChild(el);
  });
}

/**
 * Display error `msg`.
 */

function error(msg) {
  document.body.appendChild(fragment('<div id="mocha-error">%s</div>', msg));
}

/**
 * Return a DOM fragment from `html`.
 */

function fragment(html) {
  var args = arguments
    , div = document.createElement('div')
    , i = 1;

  div.innerHTML = html.replace(/%([se])/g, function(_, type){
    switch (type) {
      case 's': return String(args[i++]);
      case 'e': return escape(args[i++]);
    }
  });

  return div.firstChild;
}

/**
 * Check for suites that do not have elements
 * with `classname`, and hide them.
 */

function hideSuitesWithout(classname) {
  var suites = document.getElementsByClassName('suite');
  for (var i = 0; i < suites.length; i++) {
    var els = suites[i].getElementsByClassName(classname);
    if (0 == els.length) suites[i].className += ' hidden';
  }
}

/**
 * Unhide .hidden suites.
 */

function unhide() {
  var els = document.getElementsByClassName('suite hidden');
  for (var i = 0; i < els.length; ++i) {
    els[i].className = els[i].className.replace('suite hidden', 'suite');
  }
}

/**
 * Set `el` text to `str`.
 */

function text(el, str) {
  if (el.textContent) {
    el.textContent = str;
  } else {
    el.innerText = str;
  }
}

/**
 * Listen on `event` with callback `fn`.
 */

function on(el, event, fn) {
  if (el.addEventListener) {
    el.addEventListener(event, fn, false);
  } else {
    el.attachEvent('on' + event, fn);
  }
}

}); // module: reporters/html.js

require.register("reporters/index.js", function(module, exports, require){

exports.Base = require('./base');
exports.Dot = require('./dot');
exports.Doc = require('./doc');
exports.TAP = require('./tap');
exports.JSON = require('./json');
exports.HTML = require('./html');
exports.List = require('./list');
exports.Min = require('./min');
exports.Spec = require('./spec');
exports.Nyan = require('./nyan');
exports.XUnit = require('./xunit');
exports.Markdown = require('./markdown');
exports.Progress = require('./progress');
exports.Landing = require('./landing');
exports.JSONCov = require('./json-cov');
exports.HTMLCov = require('./html-cov');
exports.JSONStream = require('./json-stream');
exports.Teamcity = require('./teamcity');

}); // module: reporters/index.js

require.register("reporters/json-cov.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base');

/**
 * Expose `JSONCov`.
 */

exports = module.exports = JSONCov;

/**
 * Initialize a new `JsCoverage` reporter.
 *
 * @param {Runner} runner
 * @param {Boolean} output
 * @api public
 */

function JSONCov(runner, output) {
  var self = this
    , output = 1 == arguments.length ? true : output;

  Base.call(this, runner);

  var tests = []
    , failures = []
    , passes = [];

  runner.on('test end', function(test){
    tests.push(test);
  });

  runner.on('pass', function(test){
    passes.push(test);
  });

  runner.on('fail', function(test){
    failures.push(test);
  });

  runner.on('end', function(){
    var cov = global._$jscoverage || {};
    var result = self.cov = map(cov);
    result.stats = self.stats;
    result.tests = tests.map(clean);
    result.failures = failures.map(clean);
    result.passes = passes.map(clean);
    if (!output) return;
    process.stdout.write(JSON.stringify(result, null, 2 ));
  });
}

/**
 * Map jscoverage data to a JSON structure
 * suitable for reporting.
 *
 * @param {Object} cov
 * @return {Object}
 * @api private
 */

function map(cov) {
  var ret = {
      instrumentation: 'node-jscoverage'
    , sloc: 0
    , hits: 0
    , misses: 0
    , coverage: 0
    , files: []
  };

  for (var filename in cov) {
    var data = coverage(filename, cov[filename]);
    ret.files.push(data);
    ret.hits += data.hits;
    ret.misses += data.misses;
    ret.sloc += data.sloc;
  }

  ret.files.sort(function(a, b) {
    return a.filename.localeCompare(b.filename);
  });

  if (ret.sloc > 0) {
    ret.coverage = (ret.hits / ret.sloc) * 100;
  }

  return ret;
};

/**
 * Map jscoverage data for a single source file
 * to a JSON structure suitable for reporting.
 *
 * @param {String} filename name of the source file
 * @param {Object} data jscoverage coverage data
 * @return {Object}
 * @api private
 */

function coverage(filename, data) {
  var ret = {
    filename: filename,
    coverage: 0,
    hits: 0,
    misses: 0,
    sloc: 0,
    source: {}
  };

  data.source.forEach(function(line, num){
    num++;

    if (data[num] === 0) {
      ret.misses++;
      ret.sloc++;
    } else if (data[num] !== undefined) {
      ret.hits++;
      ret.sloc++;
    }

    ret.source[num] = {
        source: line
      , coverage: data[num] === undefined
        ? ''
        : data[num]
    };
  });

  ret.coverage = ret.hits / ret.sloc * 100;

  return ret;
}

/**
 * Return a plain-object representation of `test`
 * free of cyclic properties etc.
 *
 * @param {Object} test
 * @return {Object}
 * @api private
 */

function clean(test) {
  return {
      title: test.title
    , fullTitle: test.fullTitle()
    , duration: test.duration
  }
}

}); // module: reporters/json-cov.js

require.register("reporters/json-stream.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , color = Base.color;

/**
 * Expose `List`.
 */

exports = module.exports = List;

/**
 * Initialize a new `List` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function List(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , total = runner.total;

  runner.on('start', function(){
    console.log(JSON.stringify(['start', { total: total }]));
  });

  runner.on('pass', function(test){
    console.log(JSON.stringify(['pass', clean(test)]));
  });

  runner.on('fail', function(test, err){
    console.log(JSON.stringify(['fail', clean(test)]));
  });

  runner.on('end', function(){
    process.stdout.write(JSON.stringify(['end', self.stats]));
  });
}

/**
 * Return a plain-object representation of `test`
 * free of cyclic properties etc.
 *
 * @param {Object} test
 * @return {Object}
 * @api private
 */

function clean(test) {
  return {
      title: test.title
    , fullTitle: test.fullTitle()
    , duration: test.duration
  }
}
}); // module: reporters/json-stream.js

require.register("reporters/json.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `JSON`.
 */

exports = module.exports = JSONReporter;

/**
 * Initialize a new `JSON` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function JSONReporter(runner) {
  var self = this;
  Base.call(this, runner);

  var tests = []
    , failures = []
    , passes = [];

  runner.on('test end', function(test){
    tests.push(test);
  });

  runner.on('pass', function(test){
    passes.push(test);
  });

  runner.on('fail', function(test){
    failures.push(test);
  });

  runner.on('end', function(){
    var obj = {
        stats: self.stats
      , tests: tests.map(clean)
      , failures: failures.map(clean)
      , passes: passes.map(clean)
    };

    process.stdout.write(JSON.stringify(obj, null, 2));
  });
}

/**
 * Return a plain-object representation of `test`
 * free of cyclic properties etc.
 *
 * @param {Object} test
 * @return {Object}
 * @api private
 */

function clean(test) {
  return {
      title: test.title
    , fullTitle: test.fullTitle()
    , duration: test.duration
  }
}
}); // module: reporters/json.js

require.register("reporters/landing.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `Landing`.
 */

exports = module.exports = Landing;

/**
 * Airplane color.
 */

Base.colors.plane = 0;

/**
 * Airplane crash color.
 */

Base.colors['plane crash'] = 31;

/**
 * Runway color.
 */

Base.colors.runway = 90;

/**
 * Initialize a new `Landing` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Landing(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , width = Base.window.width * .75 | 0
    , total = runner.total
    , stream = process.stdout
    , plane = color('plane', '✈')
    , crashed = -1
    , n = 0;

  function runway() {
    var buf = Array(width).join('-');
    return '  ' + color('runway', buf);
  }

  runner.on('start', function(){
    stream.write('\n  ');
    cursor.hide();
  });

  runner.on('test end', function(test){
    // check if the plane crashed
    var col = -1 == crashed
      ? width * ++n / total | 0
      : crashed;

    // show the crash
    if ('failed' == test.state) {
      plane = color('plane crash', '✈');
      crashed = col;
    }

    // render landing strip
    stream.write('\u001b[4F\n\n');
    stream.write(runway());
    stream.write('\n  ');
    stream.write(color('runway', Array(col).join('⋅')));
    stream.write(plane)
    stream.write(color('runway', Array(width - col).join('⋅') + '\n'));
    stream.write(runway());
    stream.write('\u001b[0m');
  });

  runner.on('end', function(){
    cursor.show();
    console.log();
    self.epilogue();
  });
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Landing.prototype = new F;
Landing.prototype.constructor = Landing;

}); // module: reporters/landing.js

require.register("reporters/list.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `List`.
 */

exports = module.exports = List;

/**
 * Initialize a new `List` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function List(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , n = 0;

  runner.on('start', function(){
    console.log();
  });

  runner.on('test', function(test){
    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));
  });

  runner.on('pending', function(test){
    var fmt = color('checkmark', '  -')
      + color('pending', ' %s');
    console.log(fmt, test.fullTitle());
  });

  runner.on('pass', function(test){
    var fmt = color('checkmark', '  '+Base.symbols.dot)
      + color('pass', ' %s: ')
      + color(test.speed, '%dms');
    cursor.CR();
    console.log(fmt, test.fullTitle(), test.duration);
  });

  runner.on('fail', function(test, err){
    cursor.CR();
    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());
  });

  runner.on('end', self.epilogue.bind(self));
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
List.prototype = new F;
List.prototype.constructor = List;


}); // module: reporters/list.js

require.register("reporters/markdown.js", function(module, exports, require){
/**
 * Module dependencies.
 */

var Base = require('./base')
  , utils = require('../utils');

/**
 * Expose `Markdown`.
 */

exports = module.exports = Markdown;

/**
 * Initialize a new `Markdown` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Markdown(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , level = 0
    , buf = '';

  function title(str) {
    return Array(level).join('#') + ' ' + str;
  }

  function indent() {
    return Array(level).join('  ');
  }

  function mapTOC(suite, obj) {
    var ret = obj;
    obj = obj[suite.title] = obj[suite.title] || { suite: suite };
    suite.suites.forEach(function(suite){
      mapTOC(suite, obj);
    });
    return ret;
  }

  function stringifyTOC(obj, level) {
    ++level;
    var buf = '';
    var link;
    for (var key in obj) {
      if ('suite' == key) continue;
      if (key) link = ' - [' + key + '](#' + utils.slug(obj[key].suite.fullTitle()) + ')\n';
      if (key) buf += Array(level).join('  ') + link;
      buf += stringifyTOC(obj[key], level);
    }
    --level;
    return buf;
  }

  function generateTOC(suite) {
    var obj = mapTOC(suite, {});
    return stringifyTOC(obj, 0);
  }

  generateTOC(runner.suite);

  runner.on('suite', function(suite){
    ++level;
    var slug = utils.slug(suite.fullTitle());
    buf += '<a name="' + slug + '"></a>' + '\n';
    buf += title(suite.title) + '\n';
  });

  runner.on('suite end', function(suite){
    --level;
  });

  runner.on('pass', function(test){
    var code = utils.clean(test.fn.toString());
    buf += test.title + '.\n';
    buf += '\n```js\n';
    buf += code + '\n';
    buf += '```\n\n';
  });

  runner.on('end', function(){
    process.stdout.write('# TOC\n');
    process.stdout.write(generateTOC(runner.suite));
    process.stdout.write(buf);
  });
}
}); // module: reporters/markdown.js

require.register("reporters/min.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base');

/**
 * Expose `Min`.
 */

exports = module.exports = Min;

/**
 * Initialize a new `Min` minimal test reporter (best used with --watch).
 *
 * @param {Runner} runner
 * @api public
 */

function Min(runner) {
  Base.call(this, runner);
  
  runner.on('start', function(){
    // clear screen
    process.stdout.write('\u001b[2J');
    // set cursor position
    process.stdout.write('\u001b[1;3H');
  });

  runner.on('end', this.epilogue.bind(this));
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Min.prototype = new F;
Min.prototype.constructor = Min;

}); // module: reporters/min.js

require.register("reporters/nyan.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , color = Base.color;

/**
 * Expose `Dot`.
 */

exports = module.exports = NyanCat;

/**
 * Initialize a new `Dot` matrix test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function NyanCat(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , width = Base.window.width * .75 | 0
    , rainbowColors = this.rainbowColors = self.generateColors()
    , colorIndex = this.colorIndex = 0
    , numerOfLines = this.numberOfLines = 4
    , trajectories = this.trajectories = [[], [], [], []]
    , nyanCatWidth = this.nyanCatWidth = 11
    , trajectoryWidthMax = this.trajectoryWidthMax = (width - nyanCatWidth)
    , scoreboardWidth = this.scoreboardWidth = 5
    , tick = this.tick = 0
    , n = 0;

  runner.on('start', function(){
    Base.cursor.hide();
    self.draw('start');
  });

  runner.on('pending', function(test){
    self.draw('pending');
  });

  runner.on('pass', function(test){
    self.draw('pass');
  });

  runner.on('fail', function(test, err){
    self.draw('fail');
  });

  runner.on('end', function(){
    Base.cursor.show();
    for (var i = 0; i < self.numberOfLines; i++) write('\n');
    self.epilogue();
  });
}

/**
 * Draw the nyan cat with runner `status`.
 *
 * @param {String} status
 * @api private
 */

NyanCat.prototype.draw = function(status){
  this.appendRainbow();
  this.drawScoreboard();
  this.drawRainbow();
  this.drawNyanCat(status);
  this.tick = !this.tick;
};

/**
 * Draw the "scoreboard" showing the number
 * of passes, failures and pending tests.
 *
 * @api private
 */

NyanCat.prototype.drawScoreboard = function(){
  var stats = this.stats;
  var colors = Base.colors;

  function draw(color, n) {
    write(' ');
    write('\u001b[' + color + 'm' + n + '\u001b[0m');
    write('\n');
  }

  draw(colors.green, stats.passes);
  draw(colors.fail, stats.failures);
  draw(colors.pending, stats.pending);
  write('\n');

  this.cursorUp(this.numberOfLines);
};

/**
 * Append the rainbow.
 *
 * @api private
 */

NyanCat.prototype.appendRainbow = function(){
  var segment = this.tick ? '_' : '-';
  var rainbowified = this.rainbowify(segment);

  for (var index = 0; index < this.numberOfLines; index++) {
    var trajectory = this.trajectories[index];
    if (trajectory.length >= this.trajectoryWidthMax) trajectory.shift();
    trajectory.push(rainbowified);
  }
};

/**
 * Draw the rainbow.
 *
 * @api private
 */

NyanCat.prototype.drawRainbow = function(){
  var self = this;

  this.trajectories.forEach(function(line, index) {
    write('\u001b[' + self.scoreboardWidth + 'C');
    write(line.join(''));
    write('\n');
  });

  this.cursorUp(this.numberOfLines);
};

/**
 * Draw the nyan cat with `status`.
 *
 * @param {String} status
 * @api private
 */

NyanCat.prototype.drawNyanCat = function(status) {
  var self = this;
  var startWidth = this.scoreboardWidth + this.trajectories[0].length;

  [0, 1, 2, 3].forEach(function(index) {
    write('\u001b[' + startWidth + 'C');

    switch (index) {
      case 0:
        write('_,------,');
        write('\n');
        break;
      case 1:
        var padding = self.tick ? '  ' : '   ';
        write('_|' + padding + '/\\_/\\ ');
        write('\n');
        break;
      case 2:
        var padding = self.tick ? '_' : '__';
        var tail = self.tick ? '~' : '^';
        var face;
        switch (status) {
          case 'pass':
            face = '( ^ .^)';
            break;
          case 'fail':
            face = '( o .o)';
            break;
          default:
            face = '( - .-)';
        }
        write(tail + '|' + padding + face + ' ');
        write('\n');
        break;
      case 3:
        var padding = self.tick ? ' ' : '  ';
        write(padding + '""  "" ');
        write('\n');
        break;
    }
  });

  this.cursorUp(this.numberOfLines);
};

/**
 * Move cursor up `n`.
 *
 * @param {Number} n
 * @api private
 */

NyanCat.prototype.cursorUp = function(n) {
  write('\u001b[' + n + 'A');
};

/**
 * Move cursor down `n`.
 *
 * @param {Number} n
 * @api private
 */

NyanCat.prototype.cursorDown = function(n) {
  write('\u001b[' + n + 'B');
};

/**
 * Generate rainbow colors.
 *
 * @return {Array}
 * @api private
 */

NyanCat.prototype.generateColors = function(){
  var colors = [];

  for (var i = 0; i < (6 * 7); i++) {
    var pi3 = Math.floor(Math.PI / 3);
    var n = (i * (1.0 / 6));
    var r = Math.floor(3 * Math.sin(n) + 3);
    var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);
    var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);
    colors.push(36 * r + 6 * g + b + 16);
  }

  return colors;
};

/**
 * Apply rainbow to the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

NyanCat.prototype.rainbowify = function(str){
  var color = this.rainbowColors[this.colorIndex % this.rainbowColors.length];
  this.colorIndex += 1;
  return '\u001b[38;5;' + color + 'm' + str + '\u001b[0m';
};

/**
 * Stdout helper.
 */

function write(string) {
  process.stdout.write(string);
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
NyanCat.prototype = new F;
NyanCat.prototype.constructor = NyanCat;


}); // module: reporters/nyan.js

require.register("reporters/progress.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `Progress`.
 */

exports = module.exports = Progress;

/**
 * General progress bar color.
 */

Base.colors.progress = 90;

/**
 * Initialize a new `Progress` bar test reporter.
 *
 * @param {Runner} runner
 * @param {Object} options
 * @api public
 */

function Progress(runner, options) {
  Base.call(this, runner);

  var self = this
    , options = options || {}
    , stats = this.stats
    , width = Base.window.width * .50 | 0
    , total = runner.total
    , complete = 0
    , max = Math.max;

  // default chars
  options.open = options.open || '[';
  options.complete = options.complete || '▬';
  options.incomplete = options.incomplete || Base.symbols.dot;
  options.close = options.close || ']';
  options.verbose = false;

  // tests started
  runner.on('start', function(){
    console.log();
    cursor.hide();
  });

  // tests complete
  runner.on('test end', function(){
    complete++;
    var incomplete = total - complete
      , percent = complete / total
      , n = width * percent | 0
      , i = width - n;

    cursor.CR();
    process.stdout.write('\u001b[J');
    process.stdout.write(color('progress', '  ' + options.open));
    process.stdout.write(Array(n).join(options.complete));
    process.stdout.write(Array(i).join(options.incomplete));
    process.stdout.write(color('progress', options.close));
    if (options.verbose) {
      process.stdout.write(color('progress', ' ' + complete + ' of ' + total));
    }
  });

  // tests are complete, output some stats
  // and the failures if any
  runner.on('end', function(){
    cursor.show();
    console.log();
    self.epilogue();
  });
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Progress.prototype = new F;
Progress.prototype.constructor = Progress;


}); // module: reporters/progress.js

require.register("reporters/spec.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `Spec`.
 */

exports = module.exports = Spec;

/**
 * Initialize a new `Spec` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Spec(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , indents = 0
    , n = 0;

  function indent() {
    return Array(indents).join('  ')
  }

  runner.on('start', function(){
    console.log();
  });

  runner.on('suite', function(suite){
    ++indents;
    console.log(color('suite', '%s%s'), indent(), suite.title);
  });

  runner.on('suite end', function(suite){
    --indents;
    if (1 == indents) console.log();
  });

  runner.on('test', function(test){
    process.stdout.write(indent() + color('pass', '  ◦ ' + test.title + ': '));
  });

  runner.on('pending', function(test){
    var fmt = indent() + color('pending', '  - %s');
    console.log(fmt, test.title);
  });

  runner.on('pass', function(test){
    if ('fast' == test.speed) {
      var fmt = indent()
        + color('checkmark', '  ' + Base.symbols.ok)
        + color('pass', ' %s ');
      cursor.CR();
      console.log(fmt, test.title);
    } else {
      var fmt = indent()
        + color('checkmark', '  ' + Base.symbols.ok)
        + color('pass', ' %s ')
        + color(test.speed, '(%dms)');
      cursor.CR();
      console.log(fmt, test.title, test.duration);
    }
  });

  runner.on('fail', function(test, err){
    cursor.CR();
    console.log(indent() + color('fail', '  %d) %s'), ++n, test.title);
  });

  runner.on('end', self.epilogue.bind(self));
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
Spec.prototype = new F;
Spec.prototype.constructor = Spec;


}); // module: reporters/spec.js

require.register("reporters/tap.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , cursor = Base.cursor
  , color = Base.color;

/**
 * Expose `TAP`.
 */

exports = module.exports = TAP;

/**
 * Initialize a new `TAP` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function TAP(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , n = 1
    , passes = 0
    , failures = 0;

  runner.on('start', function(){
    var total = runner.grepTotal(runner.suite);
    console.log('%d..%d', 1, total);
  });

  runner.on('test end', function(){
    ++n;
  });

  runner.on('pending', function(test){
    console.log('ok %d %s # SKIP -', n, title(test));
  });

  runner.on('pass', function(test){
    passes++;
    console.log('ok %d %s', n, title(test));
  });

  runner.on('fail', function(test, err){
    failures++;
    console.log('not ok %d %s', n, title(test));
    if (err.stack) console.log(err.stack.replace(/^/gm, '  '));
  });

  runner.on('end', function(){
    console.log('# tests ' + (passes + failures));
    console.log('# pass ' + passes);
    console.log('# fail ' + failures);
  });
}

/**
 * Return a TAP-safe title of `test`
 *
 * @param {Object} test
 * @return {String}
 * @api private
 */

function title(test) {
  return test.fullTitle().replace(/#/g, '');
}

}); // module: reporters/tap.js

require.register("reporters/teamcity.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base');

/**
 * Expose `Teamcity`.
 */

exports = module.exports = Teamcity;

/**
 * Initialize a new `Teamcity` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Teamcity(runner) {
  Base.call(this, runner);
  var stats = this.stats;

  runner.on('start', function() {
    console.log("##teamcity[testSuiteStarted name='mocha.suite']");
  });

  runner.on('test', function(test) {
    console.log("##teamcity[testStarted name='" + escape(test.fullTitle()) + "']");
  });

  runner.on('fail', function(test, err) {
    console.log("##teamcity[testFailed name='" + escape(test.fullTitle()) + "' message='" + escape(err.message) + "']");
  });

  runner.on('pending', function(test) {
    console.log("##teamcity[testIgnored name='" + escape(test.fullTitle()) + "' message='pending']");
  });

  runner.on('test end', function(test) {
    console.log("##teamcity[testFinished name='" + escape(test.fullTitle()) + "' duration='" + test.duration + "']");
  });

  runner.on('end', function() {
    console.log("##teamcity[testSuiteFinished name='mocha.suite' duration='" + stats.duration + "']");
  });
}

/**
 * Escape the given `str`.
 */

function escape(str) {
  return str
    .replace(/\|/g, "||")
    .replace(/\n/g, "|n")
    .replace(/\r/g, "|r")
    .replace(/\[/g, "|[")
    .replace(/\]/g, "|]")
    .replace(/\u0085/g, "|x")
    .replace(/\u2028/g, "|l")
    .replace(/\u2029/g, "|p")
    .replace(/'/g, "|'");
}

}); // module: reporters/teamcity.js

require.register("reporters/xunit.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Base = require('./base')
  , utils = require('../utils')
  , escape = utils.escape;

/**
 * Save timer references to avoid Sinon interfering (see GH-237).
 */

var Date = global.Date
  , setTimeout = global.setTimeout
  , setInterval = global.setInterval
  , clearTimeout = global.clearTimeout
  , clearInterval = global.clearInterval;

/**
 * Expose `XUnit`.
 */

exports = module.exports = XUnit;

/**
 * Initialize a new `XUnit` reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function XUnit(runner) {
  Base.call(this, runner);
  var stats = this.stats
    , tests = []
    , self = this;

  runner.on('pass', function(test){
    tests.push(test);
  });
  
  runner.on('fail', function(test){
    tests.push(test);
  });

  runner.on('end', function(){
    console.log(tag('testsuite', {
        name: 'Mocha Tests'
      , tests: stats.tests
      , failures: stats.failures
      , errors: stats.failures
      , skip: stats.tests - stats.failures - stats.passes
      , timestamp: (new Date).toUTCString()
      , time: stats.duration / 1000
    }, false));

    tests.forEach(test);
    console.log('</testsuite>');    
  });
}

/**
 * Inherit from `Base.prototype`.
 */

function F(){};
F.prototype = Base.prototype;
XUnit.prototype = new F;
XUnit.prototype.constructor = XUnit;


/**
 * Output tag for the given `test.`
 */

function test(test) {
  var attrs = {
      classname: test.parent.fullTitle()
    , name: test.title
    , time: test.duration / 1000
  };

  if ('failed' == test.state) {
    var err = test.err;
    attrs.message = escape(err.message);
    console.log(tag('testcase', attrs, false, tag('failure', attrs, false, cdata(err.stack))));
  } else if (test.pending) {
    console.log(tag('testcase', attrs, false, tag('skipped', {}, true)));
  } else {
    console.log(tag('testcase', attrs, true) );
  }
}

/**
 * HTML tag helper.
 */

function tag(name, attrs, close, content) {
  var end = close ? '/>' : '>'
    , pairs = []
    , tag;

  for (var key in attrs) {
    pairs.push(key + '="' + escape(attrs[key]) + '"');
  }

  tag = '<' + name + (pairs.length ? ' ' + pairs.join(' ') : '') + end;
  if (content) tag += content + '</' + name + end;
  return tag;
}

/**
 * Return cdata escaped CDATA `str`.
 */

function cdata(str) {
  return '<![CDATA[' + escape(str) + ']]>';
}

}); // module: reporters/xunit.js

require.register("runnable.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var EventEmitter = require('browser/events').EventEmitter
  , debug = require('browser/debug')('mocha:runnable')
  , milliseconds = require('./ms');

/**
 * Save timer references to avoid Sinon interfering (see GH-237).
 */

var Date = global.Date
  , setTimeout = global.setTimeout
  , setInterval = global.setInterval
  , clearTimeout = global.clearTimeout
  , clearInterval = global.clearInterval;

/**
 * Object#toString().
 */

var toString = Object.prototype.toString;

/**
 * Expose `Runnable`.
 */

module.exports = Runnable;

/**
 * Initialize a new `Runnable` with the given `title` and callback `fn`.
 *
 * @param {String} title
 * @param {Function} fn
 * @api private
 */

function Runnable(title, fn) {
  this.title = title;
  this.fn = fn;
  this.async = fn && fn.length;
  this.sync = ! this.async;
  this._timeout = 2000;
  this._slow = 75;
  this.timedOut = false;
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

function F(){};
F.prototype = EventEmitter.prototype;
Runnable.prototype = new F;
Runnable.prototype.constructor = Runnable;


/**
 * Set & get timeout `ms`.
 *
 * @param {Number|String} ms
 * @return {Runnable|Number} ms or self
 * @api private
 */

Runnable.prototype.timeout = function(ms){
  if (0 == arguments.length) return this._timeout;
  if ('string' == typeof ms) ms = milliseconds(ms);
  debug('timeout %d', ms);
  this._timeout = ms;
  if (this.timer) this.resetTimeout();
  return this;
};

/**
 * Set & get slow `ms`.
 *
 * @param {Number|String} ms
 * @return {Runnable|Number} ms or self
 * @api private
 */

Runnable.prototype.slow = function(ms){
  if (0 === arguments.length) return this._slow;
  if ('string' == typeof ms) ms = milliseconds(ms);
  debug('timeout %d', ms);
  this._slow = ms;
  return this;
};

/**
 * Return the full title generated by recursively
 * concatenating the parent's full title.
 *
 * @return {String}
 * @api public
 */

Runnable.prototype.fullTitle = function(){
  return this.parent.fullTitle() + ' ' + this.title;
};

/**
 * Clear the timeout.
 *
 * @api private
 */

Runnable.prototype.clearTimeout = function(){
  clearTimeout(this.timer);
};

/**
 * Inspect the runnable void of private properties.
 *
 * @return {String}
 * @api private
 */

Runnable.prototype.inspect = function(){
  return JSON.stringify(this, function(key, val){
    if ('_' == key[0]) return;
    if ('parent' == key) return '#<Suite>';
    if ('ctx' == key) return '#<Context>';
    return val;
  }, 2);
};

/**
 * Reset the timeout.
 *
 * @api private
 */

Runnable.prototype.resetTimeout = function(){
  var self = this
    , ms = this.timeout();

  this.clearTimeout();
  if (ms) {
    this.timer = setTimeout(function(){
      self.callback(new Error('timeout of ' + ms + 'ms exceeded'));
      self.timedOut = true;
    }, ms);
  }
};

/**
 * Run the test and invoke `fn(err)`.
 *
 * @param {Function} fn
 * @api private
 */

Runnable.prototype.run = function(fn){
  var self = this
    , ms = this.timeout()
    , start = new Date
    , ctx = this.ctx
    , finished
    , emitted;

  if (ctx) ctx.runnable(this);

  // timeout
  if (this.async) {
    if (ms) {
      this.timer = setTimeout(function(){
        done(new Error('timeout of ' + ms + 'ms exceeded'));
        self.timedOut = true;
      }, ms);
    }
  }

  // called multiple times
  function multiple(err) {
    if (emitted) return;
    emitted = true;
    self.emit('error', err || new Error('done() called multiple times'));
  }

  // finished
  function done(err) {
    if (self.timedOut) return;
    if (finished) return multiple(err);
    self.clearTimeout();
    self.duration = new Date - start;
    finished = true;
    fn(err);
  }

  // for .resetTimeout()
  this.callback = done;

  // async
  if (this.async) {
    try {
      this.fn.call(ctx, function(err){
        if (err instanceof Error || toString.call(err) === "[object Error]") return done(err);
        if (null != err) return done(new Error('done() invoked with non-Error: ' + err));
        done();
      });
    } catch (err) {
      done(err);
    }
    return;
  }

  if (this.asyncOnly) {
    return done(new Error('--async-only option in use without declaring `done()`'));
  }

  // sync
  try {
    if (!this.pending) this.fn.call(ctx);
    this.duration = new Date - start;
    fn();
  } catch (err) {
    fn(err);
  }
};

}); // module: runnable.js

require.register("runner.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var EventEmitter = require('browser/events').EventEmitter
  , debug = require('browser/debug')('mocha:runner')
  , Test = require('./test')
  , utils = require('./utils')
  , filter = utils.filter
  , keys = utils.keys
  , noop = function(){}
  , immediately = global.setImmediate || process.nextTick;

/**
 * Non-enumerable globals.
 */

var globals = [
  'setTimeout',
  'clearTimeout',
  'setInterval',
  'clearInterval',
  'XMLHttpRequest',
  'Date'
];

/**
 * Expose `Runner`.
 */

module.exports = Runner;

/**
 * Initialize a `Runner` for the given `suite`.
 *
 * Events:
 *
 *   - `start`  execution started
 *   - `end`  execution complete
 *   - `suite`  (suite) test suite execution started
 *   - `suite end`  (suite) all tests (and sub-suites) have finished
 *   - `test`  (test) test execution started
 *   - `test end`  (test) test completed
 *   - `hook`  (hook) hook execution started
 *   - `hook end`  (hook) hook complete
 *   - `pass`  (test) test passed
 *   - `fail`  (test, err) test failed
 *
 * @api public
 */

function Runner(suite) {
  var self = this;
  this._globals = [];
  this.suite = suite;
  this.total = suite.total();
  this.failures = 0;
  this.on('test end', function(test){ self.checkGlobals(test); });
  this.on('hook end', function(hook){ self.checkGlobals(hook); });
  this.grep(/.*/);
  this.globals(this.globalProps().concat(['errno']));
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

function F(){};
F.prototype = EventEmitter.prototype;
Runner.prototype = new F;
Runner.prototype.constructor = Runner;


/**
 * Run tests with full titles matching `re`. Updates runner.total
 * with number of tests matched.
 *
 * @param {RegExp} re
 * @param {Boolean} invert
 * @return {Runner} for chaining
 * @api public
 */

Runner.prototype.grep = function(re, invert){
  debug('grep %s', re);
  this._grep = re;
  this._invert = invert;
  this.total = this.grepTotal(this.suite);
  return this;
};

/**
 * Returns the number of tests matching the grep search for the
 * given suite.
 *
 * @param {Suite} suite
 * @return {Number}
 * @api public
 */

Runner.prototype.grepTotal = function(suite) {
  var self = this;
  var total = 0;

  suite.eachTest(function(test){
    var match = self._grep.test(test.fullTitle());
    if (self._invert) match = !match;
    if (match) total++;
  });

  return total;
};

/**
 * Return a list of global properties.
 *
 * @return {Array}
 * @api private
 */

Runner.prototype.globalProps = function() {
  var props = utils.keys(global);

  // non-enumerables
  for (var i = 0; i < globals.length; ++i) {
    if (~utils.indexOf(props, globals[i])) continue;
    props.push(globals[i]);
  }

  return props;
};

/**
 * Allow the given `arr` of globals.
 *
 * @param {Array} arr
 * @return {Runner} for chaining
 * @api public
 */

Runner.prototype.globals = function(arr){
  if (0 == arguments.length) return this._globals;
  debug('globals %j', arr);
  utils.forEach(arr, function(arr){
    this._globals.push(arr);
  }, this);
  return this;
};

/**
 * Check for global variable leaks.
 *
 * @api private
 */

Runner.prototype.checkGlobals = function(test){
  if (this.ignoreLeaks) return;
  var ok = this._globals;
  var globals = this.globalProps();
  var isNode = process.kill;
  var leaks;

  // check length - 2 ('errno' and 'location' globals)
  if (isNode && 1 == ok.length - globals.length) return
  else if (2 == ok.length - globals.length) return;

  leaks = filterLeaks(ok, globals);
  this._globals = this._globals.concat(leaks);

  if (leaks.length > 1) {
    this.fail(test, new Error('global leaks detected: ' + leaks.join(', ') + ''));
  } else if (leaks.length) {
    this.fail(test, new Error('global leak detected: ' + leaks[0]));
  }
};

/**
 * Fail the given `test`.
 *
 * @param {Test} test
 * @param {Error} err
 * @api private
 */

Runner.prototype.fail = function(test, err){
  ++this.failures;
  test.state = 'failed';

  if ('string' == typeof err) {
    err = new Error('the string "' + err + '" was thrown, throw an Error :)');
  }

  this.emit('fail', test, err);
};

/**
 * Fail the given `hook` with `err`.
 *
 * Hook failures (currently) hard-end due
 * to that fact that a failing hook will
 * surely cause subsequent tests to fail,
 * causing jumbled reporting.
 *
 * @param {Hook} hook
 * @param {Error} err
 * @api private
 */

Runner.prototype.failHook = function(hook, err){
  this.fail(hook, err);
  this.emit('end');
};

/**
 * Run hook `name` callbacks and then invoke `fn()`.
 *
 * @param {String} name
 * @param {Function} function
 * @api private
 */

Runner.prototype.hook = function(name, fn){
  var suite = this.suite
    , hooks = suite['_' + name]
    , self = this
    , timer;

  function next(i) {
    var hook = hooks[i];
    if (!hook) return fn();
    self.currentRunnable = hook;

    self.emit('hook', hook);

    hook.on('error', function(err){
      self.failHook(hook, err);
    });

    hook.run(function(err){
      hook.removeAllListeners('error');
      var testError = hook.error();
      if (testError) self.fail(self.test, testError);
      if (err) return self.failHook(hook, err);
      self.emit('hook end', hook);
      next(++i);
    });
  }

  immediately(function(){
    next(0);
  });
};

/**
 * Run hook `name` for the given array of `suites`
 * in order, and callback `fn(err)`.
 *
 * @param {String} name
 * @param {Array} suites
 * @param {Function} fn
 * @api private
 */

Runner.prototype.hooks = function(name, suites, fn){
  var self = this
    , orig = this.suite;

  function next(suite) {
    self.suite = suite;

    if (!suite) {
      self.suite = orig;
      return fn();
    }

    self.hook(name, function(err){
      if (err) {
        self.suite = orig;
        return fn(err);
      }

      next(suites.pop());
    });
  }

  next(suites.pop());
};

/**
 * Run hooks from the top level down.
 *
 * @param {String} name
 * @param {Function} fn
 * @api private
 */

Runner.prototype.hookUp = function(name, fn){
  var suites = [this.suite].concat(this.parents()).reverse();
  this.hooks(name, suites, fn);
};

/**
 * Run hooks from the bottom up.
 *
 * @param {String} name
 * @param {Function} fn
 * @api private
 */

Runner.prototype.hookDown = function(name, fn){
  var suites = [this.suite].concat(this.parents());
  this.hooks(name, suites, fn);
};

/**
 * Return an array of parent Suites from
 * closest to furthest.
 *
 * @return {Array}
 * @api private
 */

Runner.prototype.parents = function(){
  var suite = this.suite
    , suites = [];
  while (suite = suite.parent) suites.push(suite);
  return suites;
};

/**
 * Run the current test and callback `fn(err)`.
 *
 * @param {Function} fn
 * @api private
 */

Runner.prototype.runTest = function(fn){
  var test = this.test
    , self = this;

  if (this.asyncOnly) test.asyncOnly = true;

  try {
    test.on('error', function(err){
      self.fail(test, err);
    });
    test.run(fn);
  } catch (err) {
    fn(err);
  }
};

/**
 * Run tests in the given `suite` and invoke
 * the callback `fn()` when complete.
 *
 * @param {Suite} suite
 * @param {Function} fn
 * @api private
 */

Runner.prototype.runTests = function(suite, fn){
  var self = this
    , tests = suite.tests.slice()
    , test;

  function next(err) {
    // if we bail after first err
    if (self.failures && suite._bail) return fn();

    // next test
    test = tests.shift();

    // all done
    if (!test) return fn();

    // grep
    var match = self._grep.test(test.fullTitle());
    if (self._invert) match = !match;
    if (!match) return next();

    // pending
    if (test.pending) {
      self.emit('pending', test);
      self.emit('test end', test);
      return next();
    }

    // execute test and hook(s)
    self.emit('test', self.test = test);
    self.hookDown('beforeEach', function(){
      self.currentRunnable = self.test;
      self.runTest(function(err){
        test = self.test;

        if (err) {
          self.fail(test, err);
          self.emit('test end', test);
          return self.hookUp('afterEach', next);
        }

        test.state = 'passed';
        self.emit('pass', test);
        self.emit('test end', test);
        self.hookUp('afterEach', next);
      });
    });
  }

  this.next = next;
  next();
};

/**
 * Run the given `suite` and invoke the
 * callback `fn()` when complete.
 *
 * @param {Suite} suite
 * @param {Function} fn
 * @api private
 */

Runner.prototype.runSuite = function(suite, fn){
  var total = this.grepTotal(suite)
    , self = this
    , i = 0;

  debug('run suite %s', suite.fullTitle());

  if (!total) return fn();

  this.emit('suite', this.suite = suite);

  function next() {
    var curr = suite.suites[i++];
    if (!curr) return done();
    self.runSuite(curr, next);
  }

  function done() {
    self.suite = suite;
    self.hook('afterAll', function(){
      self.emit('suite end', suite);
      fn();
    });
  }

  this.hook('beforeAll', function(){
    self.runTests(suite, next);
  });
};

/**
 * Handle uncaught exceptions.
 *
 * @param {Error} err
 * @api private
 */

Runner.prototype.uncaught = function(err){
  debug('uncaught exception %s', err.message);
  var runnable = this.currentRunnable;
  if (!runnable || 'failed' == runnable.state) return;
  runnable.clearTimeout();
  err.uncaught = true;
  this.fail(runnable, err);

  // recover from test
  if ('test' == runnable.type) {
    this.emit('test end', runnable);
    this.hookUp('afterEach', this.next);
    return;
  }

  // bail on hooks
  this.emit('end');
};

/**
 * Run the root suite and invoke `fn(failures)`
 * on completion.
 *
 * @param {Function} fn
 * @return {Runner} for chaining
 * @api public
 */

Runner.prototype.run = function(fn){
  var self = this
    , fn = fn || function(){};

  function uncaught(err){
    self.uncaught(err);
  }

  debug('start');

  // callback
  this.on('end', function(){
    debug('end');
    process.removeListener('uncaughtException', uncaught);
    fn(self.failures);
  });

  // run suites
  this.emit('start');
  this.runSuite(this.suite, function(){
    debug('finished running');
    self.emit('end');
  });

  // uncaught exception
  process.on('uncaughtException', uncaught);

  return this;
};

/**
 * Filter leaks with the given globals flagged as `ok`.
 *
 * @param {Array} ok
 * @param {Array} globals
 * @return {Array}
 * @api private
 */

function filterLeaks(ok, globals) {
  return filter(globals, function(key){
    var matched = filter(ok, function(ok){
      if (~ok.indexOf('*')) return 0 == key.indexOf(ok.split('*')[0]);
      // Opera and IE expose global variables for HTML element IDs (issue #243)
      if (/^mocha-/.test(key)) return true;
      return key == ok;
    });
    return matched.length == 0 && (!global.navigator || 'onerror' !== key);
  });
}

}); // module: runner.js

require.register("suite.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var EventEmitter = require('browser/events').EventEmitter
  , debug = require('browser/debug')('mocha:suite')
  , milliseconds = require('./ms')
  , utils = require('./utils')
  , Hook = require('./hook');

/**
 * Expose `Suite`.
 */

exports = module.exports = Suite;

/**
 * Create a new `Suite` with the given `title`
 * and parent `Suite`. When a suite with the
 * same title is already present, that suite
 * is returned to provide nicer reporter
 * and more flexible meta-testing.
 *
 * @param {Suite} parent
 * @param {String} title
 * @return {Suite}
 * @api public
 */

exports.create = function(parent, title){
  var suite = new Suite(title, parent.ctx);
  suite.parent = parent;
  if (parent.pending) suite.pending = true;
  title = suite.fullTitle();
  parent.addSuite(suite);
  return suite;
};

/**
 * Initialize a new `Suite` with the given
 * `title` and `ctx`.
 *
 * @param {String} title
 * @param {Context} ctx
 * @api private
 */

function Suite(title, ctx) {
  this.title = title;
  this.ctx = ctx;
  this.suites = [];
  this.tests = [];
  this.pending = false;
  this._beforeEach = [];
  this._beforeAll = [];
  this._afterEach = [];
  this._afterAll = [];
  this.root = !title;
  this._timeout = 2000;
  this._slow = 75;
  this._bail = false;
}

/**
 * Inherit from `EventEmitter.prototype`.
 */

function F(){};
F.prototype = EventEmitter.prototype;
Suite.prototype = new F;
Suite.prototype.constructor = Suite;


/**
 * Return a clone of this `Suite`.
 *
 * @return {Suite}
 * @api private
 */

Suite.prototype.clone = function(){
  var suite = new Suite(this.title);
  debug('clone');
  suite.ctx = this.ctx;
  suite.timeout(this.timeout());
  suite.slow(this.slow());
  suite.bail(this.bail());
  return suite;
};

/**
 * Set timeout `ms` or short-hand such as "2s".
 *
 * @param {Number|String} ms
 * @return {Suite|Number} for chaining
 * @api private
 */

Suite.prototype.timeout = function(ms){
  if (0 == arguments.length) return this._timeout;
  if ('string' == typeof ms) ms = milliseconds(ms);
  debug('timeout %d', ms);
  this._timeout = parseInt(ms, 10);
  return this;
};

/**
 * Set slow `ms` or short-hand such as "2s".
 *
 * @param {Number|String} ms
 * @return {Suite|Number} for chaining
 * @api private
 */

Suite.prototype.slow = function(ms){
  if (0 === arguments.length) return this._slow;
  if ('string' == typeof ms) ms = milliseconds(ms);
  debug('slow %d', ms);
  this._slow = ms;
  return this;
};

/**
 * Sets whether to bail after first error.
 *
 * @parma {Boolean} bail
 * @return {Suite|Number} for chaining
 * @api private
 */

Suite.prototype.bail = function(bail){
  if (0 == arguments.length) return this._bail;
  debug('bail %s', bail);
  this._bail = bail;
  return this;
};

/**
 * Run `fn(test[, done])` before running tests.
 *
 * @param {Function} fn
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.beforeAll = function(fn){
  if (this.pending) return this;
  var hook = new Hook('"before all" hook', fn);
  hook.parent = this;
  hook.timeout(this.timeout());
  hook.slow(this.slow());
  hook.ctx = this.ctx;
  this._beforeAll.push(hook);
  this.emit('beforeAll', hook);
  return this;
};

/**
 * Run `fn(test[, done])` after running tests.
 *
 * @param {Function} fn
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.afterAll = function(fn){
  if (this.pending) return this;
  var hook = new Hook('"after all" hook', fn);
  hook.parent = this;
  hook.timeout(this.timeout());
  hook.slow(this.slow());
  hook.ctx = this.ctx;
  this._afterAll.push(hook);
  this.emit('afterAll', hook);
  return this;
};

/**
 * Run `fn(test[, done])` before each test case.
 *
 * @param {Function} fn
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.beforeEach = function(fn){
  if (this.pending) return this;
  var hook = new Hook('"before each" hook', fn);
  hook.parent = this;
  hook.timeout(this.timeout());
  hook.slow(this.slow());
  hook.ctx = this.ctx;
  this._beforeEach.push(hook);
  this.emit('beforeEach', hook);
  return this;
};

/**
 * Run `fn(test[, done])` after each test case.
 *
 * @param {Function} fn
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.afterEach = function(fn){
  if (this.pending) return this;
  var hook = new Hook('"after each" hook', fn);
  hook.parent = this;
  hook.timeout(this.timeout());
  hook.slow(this.slow());
  hook.ctx = this.ctx;
  this._afterEach.push(hook);
  this.emit('afterEach', hook);
  return this;
};

/**
 * Add a test `suite`.
 *
 * @param {Suite} suite
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.addSuite = function(suite){
  suite.parent = this;
  suite.timeout(this.timeout());
  suite.slow(this.slow());
  suite.bail(this.bail());
  this.suites.push(suite);
  this.emit('suite', suite);
  return this;
};

/**
 * Add a `test` to this suite.
 *
 * @param {Test} test
 * @return {Suite} for chaining
 * @api private
 */

Suite.prototype.addTest = function(test){
  test.parent = this;
  test.timeout(this.timeout());
  test.slow(this.slow());
  test.ctx = this.ctx;
  this.tests.push(test);
  this.emit('test', test);
  return this;
};

/**
 * Return the full title generated by recursively
 * concatenating the parent's full title.
 *
 * @return {String}
 * @api public
 */

Suite.prototype.fullTitle = function(){
  if (this.parent) {
    var full = this.parent.fullTitle();
    if (full) return full + ' ' + this.title;
  }
  return this.title;
};

/**
 * Return the total number of tests.
 *
 * @return {Number}
 * @api public
 */

Suite.prototype.total = function(){
  return utils.reduce(this.suites, function(sum, suite){
    return sum + suite.total();
  }, 0) + this.tests.length;
};

/**
 * Iterates through each suite recursively to find
 * all tests. Applies a function in the format
 * `fn(test)`.
 *
 * @param {Function} fn
 * @return {Suite}
 * @api private
 */

Suite.prototype.eachTest = function(fn){
  utils.forEach(this.tests, fn);
  utils.forEach(this.suites, function(suite){
    suite.eachTest(fn);
  });
  return this;
};

}); // module: suite.js

require.register("test.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var Runnable = require('./runnable');

/**
 * Expose `Test`.
 */

module.exports = Test;

/**
 * Initialize a new `Test` with the given `title` and callback `fn`.
 *
 * @param {String} title
 * @param {Function} fn
 * @api private
 */

function Test(title, fn) {
  Runnable.call(this, title, fn);
  this.pending = !fn;
  this.type = 'test';
}

/**
 * Inherit from `Runnable.prototype`.
 */

function F(){};
F.prototype = Runnable.prototype;
Test.prototype = new F;
Test.prototype.constructor = Test;


}); // module: test.js

require.register("utils.js", function(module, exports, require){

/**
 * Module dependencies.
 */

var fs = require('browser/fs')
  , path = require('browser/path')
  , join = path.join
  , debug = require('browser/debug')('mocha:watch');

/**
 * Ignored directories.
 */

var ignore = ['node_modules', '.git'];

/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} html
 * @return {String}
 * @api private
 */

exports.escape = function(html){
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

/**
 * Array#forEach (<=IE8)
 *
 * @param {Array} array
 * @param {Function} fn
 * @param {Object} scope
 * @api private
 */

exports.forEach = function(arr, fn, scope){
  for (var i = 0, l = arr.length; i < l; i++)
    fn.call(scope, arr[i], i);
};

/**
 * Array#indexOf (<=IE8)
 *
 * @parma {Array} arr
 * @param {Object} obj to find index of
 * @param {Number} start
 * @api private
 */

exports.indexOf = function(arr, obj, start){
  for (var i = start || 0, l = arr.length; i < l; i++) {
    if (arr[i] === obj)
      return i;
  }
  return -1;
};

/**
 * Array#reduce (<=IE8)
 * 
 * @param {Array} array
 * @param {Function} fn
 * @param {Object} initial value
 * @api private
 */

exports.reduce = function(arr, fn, val){
  var rval = val;

  for (var i = 0, l = arr.length; i < l; i++) {
    rval = fn(rval, arr[i], i, arr);
  }

  return rval;
};

/**
 * Array#filter (<=IE8)
 *
 * @param {Array} array
 * @param {Function} fn
 * @api private
 */

exports.filter = function(arr, fn){
  var ret = [];

  for (var i = 0, l = arr.length; i < l; i++) {
    var val = arr[i];
    if (fn(val, i, arr)) ret.push(val);
  }

  return ret;
};

/**
 * Object.keys (<=IE8)
 *
 * @param {Object} obj
 * @return {Array} keys
 * @api private
 */

exports.keys = Object.keys || function(obj) {
  var keys = []
    , has = Object.prototype.hasOwnProperty // for `window` on <=IE8

  for (var key in obj) {
    if (has.call(obj, key)) {
      keys.push(key);
    }
  }

  return keys;
};

/**
 * Watch the given `files` for changes
 * and invoke `fn(file)` on modification.
 *
 * @param {Array} files
 * @param {Function} fn
 * @api private
 */

exports.watch = function(files, fn){
  var options = { interval: 100 };
  files.forEach(function(file){
    debug('file %s', file);
    fs.watchFile(file, options, function(curr, prev){
      if (prev.mtime < curr.mtime) fn(file);
    });
  });
};

/**
 * Ignored files.
 */

function ignored(path){
  return !~ignore.indexOf(path);
}

/**
 * Lookup files in the given `dir`.
 *
 * @return {Array}
 * @api private
 */

exports.files = function(dir, ret){
  ret = ret || [];

  fs.readdirSync(dir)
  .filter(ignored)
  .forEach(function(path){
    path = join(dir, path);
    if (fs.statSync(path).isDirectory()) {
      exports.files(path, ret);
    } else if (path.match(/\.(js|coffee)$/)) {
      ret.push(path);
    }
  });

  return ret;
};

/**
 * Compute a slug from the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.slug = function(str){
  return str
    .toLowerCase()
    .replace(/ +/g, '-')
    .replace(/[^-\w]/g, '');
};

/**
 * Strip the function definition from `str`,
 * and re-indent for pre whitespace.
 */

exports.clean = function(str) {
  str = str
    .replace(/^function *\(.*\) *{/, '')
    .replace(/\s+\}$/, '');

  var spaces = str.match(/^\n?( *)/)[1].length
    , re = new RegExp('^ {' + spaces + '}', 'gm');

  str = str.replace(re, '');

  return exports.trim(str);
};

/**
 * Escape regular expression characters in `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.escapeRegexp = function(str){
  return str.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
};

/**
 * Trim the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.trim = function(str){
  return str.replace(/^\s+|\s+$/g, '');
};

/**
 * Parse the given `qs`.
 *
 * @param {String} qs
 * @return {Object}
 * @api private
 */

exports.parseQuery = function(qs){
  return exports.reduce(qs.replace('?', '').split('&'), function(obj, pair){
    var i = pair.indexOf('=')
      , key = pair.slice(0, i)
      , val = pair.slice(++i);

    obj[key] = decodeURIComponent(val);
    return obj;
  }, {});
};

/**
 * Highlight the given string of `js`.
 *
 * @param {String} js
 * @return {String}
 * @api private
 */

function highlight(js) {
  return js
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>')
    .replace(/('.*?')/gm, '<span class="string">$1</span>')
    .replace(/(\d+\.\d+)/gm, '<span class="number">$1</span>')
    .replace(/(\d+)/gm, '<span class="number">$1</span>')
    .replace(/\bnew *(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
    .replace(/\b(function|new|throw|return|var|if|else)\b/gm, '<span class="keyword">$1</span>')
}

/**
 * Highlight the contents of tag `name`.
 *
 * @param {String} name
 * @api private
 */

exports.highlightTags = function(name) {
  var code = document.getElementsByTagName(name);
  for (var i = 0, len = code.length; i < len; ++i) {
    code[i].innerHTML = highlight(code[i].innerHTML);
  }
};

}); // module: utils.js
/**
 * Node shims.
 *
 * These are meant only to allow
 * mocha.js to run untouched, not
 * to allow running node code in
 * the browser.
 */

process = {};
process.exit = function(status){};
process.stdout = {};
global = window;

/**
 * next tick implementation.
 */

process.nextTick = (function(){
  // postMessage behaves badly on IE8
  if (window.ActiveXObject || !window.postMessage) {
    return function(fn){ fn() };
  }

  // based on setZeroTimeout by David Baron
  // - http://dbaron.org/log/20100309-faster-timeouts
  var timeouts = []
    , name = 'mocha-zero-timeout'

  window.addEventListener('message', function(e){
    if (e.source == window && e.data == name) {
      if (e.stopPropagation) e.stopPropagation();
      if (timeouts.length) timeouts.shift()();
    }
  }, true);

  return function(fn){
    timeouts.push(fn);
    window.postMessage(name, '*');
  }
})();

/**
 * Remove uncaughtException listener.
 */

process.removeListener = function(e){
  if ('uncaughtException' == e) {
    window.onerror = null;
  }
};

/**
 * Implements uncaughtException listener.
 */

process.on = function(e, fn){
  if ('uncaughtException' == e) {
    window.onerror = function(err, url, line){
      fn(new Error(err + ' (' + url + ':' + line + ')'));
    };
  }
};

// boot
;(function(){

  /**
   * Expose mocha.
   */

  var Mocha = window.Mocha = require('mocha'),
      mocha = window.mocha = new Mocha({ reporter: 'html' });

  /**
   * Override ui to ensure that the ui functions are initialized.
   * Normally this would happen in Mocha.prototype.loadFiles.
   */

  mocha.ui = function(ui){
    Mocha.prototype.ui.call(this, ui);
    this.suite.emit('pre-require', window, null, this);
    return this;
  };

  /**
   * Setup mocha with the given setting options.
   */

  mocha.setup = function(opts){
    if ('string' == typeof opts) opts = { ui: opts };
    for (var opt in opts) this[opt](opts[opt]);
    return this;
  };

  /**
   * Run mocha, returning the Runner.
   */

  mocha.run = function(fn){
    var options = mocha.options;
    mocha.globals('location');

    var query = Mocha.utils.parseQuery(window.location.search || '');
    if (query.grep) mocha.grep(query.grep);
    if (query.invert) mocha.invert();

    return Mocha.prototype.run.call(mocha, function(){
      Mocha.utils.highlightTags('code');
      if (fn) fn();
    });
  };
})();
})();
/*!
 * Platform.js v1.0.0 <http://mths.be/platform>
 * Copyright 2010-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <http://mths.be/mit>
 */
(function(window) {
  'use strict';

  /** Backup possible window/global object */
  var oldWin = window;
  
  /** Detect free variable `exports` */
  var freeExports = typeof exports == 'object' && exports;

  /** Detect free variable `global` */
  var freeGlobal = typeof global == 'object' && global &&
    (global == global.global ? (window = global) : global);

  /** Opera regexp */
  var reOpera = /Opera/;

  /** Used to resolve a value's internal [[Class]] */
  var toString = Object.prototype.toString;

  /** Detect Java environment */
  var java = /Java/.test(getClassOf(window.java)) && window.java;

  /** Detect Rhino */
  var rhino = java && getClassOf(window.environment) == 'Environment';

  /** A character to represent alpha */
  var alpha = java ? 'a' : '\u03b1';

  /** A character to represent beta */
  var beta = java ? 'b' : '\u03b2';

  /** Browser document object */
  var doc = window.document || {};

  /** Used to check for own properties of an object */
  var hasOwnProperty = {}.hasOwnProperty;

  /** Browser navigator object */
  var nav = window.navigator || {};

  /**
   * Detect Opera browser
   * http://www.howtocreate.co.uk/operaStuff/operaObject.html
   * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
   */
  var opera = window.operamini || window.opera;

  /** Opera [[Class]] */
  var operaClass = reOpera.test(operaClass = getClassOf(opera)) ? operaClass : (opera = null);

  /** Possible global object */
  var thisBinding = this;

  /** Browser user agent string */
  var userAgent = nav.userAgent || '';

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {String} string The string to capitalize.
   * @returns {String} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object.length;

    if (length == length >>> 0) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {String} string The string to format.
   * @returns {String} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      hasKey(object, key) && callback(object[key], key, object);
    }
  }

  /**
   * Gets the internal [[Class]] of a value.
   *
   * @private
   * @param {Mixed} value The value.
   * @returns {String} The [[Class]].
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Checks if an object has the specified key as a direct property.
   *
   * @private
   * @param {Object} object The object to check.
   * @param {String} key The key to check for.
   * @returns {Boolean} Returns `true` if key is a direct property, else `false`.
   */
  function hasKey() {
    // lazy define for others (not as accurate)
    hasKey = function(object, key) {
      var parent = object != null && (object.constructor || Object).prototype;
      return !!parent && key in Object(object) && !(key in parent && object[key] === parent[key]);
    };
    // for modern browsers
    if (getClassOf(hasOwnProperty) == 'Function') {
      hasKey = function(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      };
    }
    // for Safari 2
    else if ({}.__proto__ == Object.prototype) {
      hasKey = function(object, key) {
        var result = false;
        if (object != null) {
          object = Object(object);
          object.__proto__ = [object.__proto__, object.__proto__ = null, result = key in object][0];
        }
        return result;
      };
    }
    return hasKey.apply(this, arguments);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of object, function, or unknown.
   *
   * @private
   * @param {Mixed} object The owner of the property.
   * @param {String} property The property to check.
   * @returns {Boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a RegExp constructor by making hyphens and
   * spaces optional.
   *
   * @private
   * @param {String} string The string to qualify.
   * @returns {String} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones` Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @param {Mixed} accumulator Initial value of the accumulator.
   * @returns {Mixed} The accumulator.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {String} string The string to trim.
   * @returns {String} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {String} [ua = navigator.userAgent] The user agent string.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    ua || (ua = userAgent);

    /** Temporary variable used over the script's lifetime */
    var data;

    /** The CPU architecture */
    var arch = ua;

    /** Platform description array */
    var description = [];

    /** Platform alpha/beta indicator */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform */
    var useFeatures = ua == userAgent;

    /** The browser/environment version */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /* Detectable layout engines (order is important) */
    var layout = getLayout([
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'Trident',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important) */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Camino',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'Iron',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      'Midori',
      'Nook Browser',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      'Sunrise',
      'Swiftfox',
      'WebPositive',
      'Opera Mini',
      'Opera',
      'Chrome',
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important) */
    var product = getProduct([
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      'Google TV',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'TouchPad',
      'Transformer',
      'Xoom'
    ]);

    /* Detectable manufacturers */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1 },
      'HP': { 'TouchPad': 1 },
      'LG': { },
      'Motorola': { 'Xoom': 1 },
      'Nokia': { },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1 },
      'Sony': { 'PlayStation Vita': 1 }
    });

    /* Detectable OSes (order is important) */
    var os = getOS([
      'Android',
      'CentOS',
      'Debian',
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // lookup the manufacturer by product or scan the UA for the manufacturer
        return result || (
          value[product] ||
          value[0/*Opera 9.25 fix*/, /^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + (key.pattern || qualify(key)) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && (key.label || key);
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
            RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua))) {
          // platform tokens defined at
          // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
          // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
          data = {
            '6.2':  '8',
            '6.1':  'Server 2008 R2 / 7',
            '6.0':  'Server 2008 / Vista',
            '5.2':  'Server 2003 / XP 64-bit',
            '5.1':  'XP',
            '5.01': '2000 SP1',
            '5.0':  '2000',
            '4.0':  'NT',
            '4.90': 'ME'
          };
          // detect Windows version from platform tokens
          if (/^Win/i.test(result) &&
              (data = data[0/*Opera 9.25 fix*/, /[\d.]+$/.exec(result)])) {
            result = 'Windows ' + data;
          }
          // correct character case and cleanup
          result = format(String(result)
            .replace(RegExp(pattern, 'i'), guess.label || guess)
            .replace(/ ce$/i, ' CE')
            .replace(/hpw/i, 'web')
            .replace(/Macintosh/, 'Mac OS')
            .replace(/_PowerPC/i, ' OS')
            .replace(/(OS X) [^ \d]+/i, '$1')
            .replace(/\/(\d)/, ' $1')
            .replace(/_/g, '.')
            .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
            .replace(/x86\.64/gi, 'x86_64')
            .split(' on ')[0]);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {String|Null} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // split by forward slash and append product version if needed
          if ((result = String(guess.label || result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // correct character case and cleanup
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {String|Null} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /*------------------------------------------------------------------------*/

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {String} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // convert layout to an array so we can add extra details
    layout && (layout = [layout]);

    // detect product names that contain their manufacturer's name
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // clean up Google TV
    if ((data = /Google TV/.exec(product))) {
      product = data[0];
    }
    // detect simulators
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // detect iOS
    if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // detect Kubuntu
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // detect Android browsers
    else if (manufacturer && manufacturer != 'Google' &&
        /Chrome|Vita/.test(name + ';' + product)) {
      name = 'Android Browser';
      os = /Android/.test(os) ? os : 'Android';
    }
    // detect false positives for Firefox/Safari
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /Firefox|Safari/.exec(name))) {
      // escape the `/` for Firefox 1
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // clear name of false positives
        name = null;
      }
      // reassign a generic name
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /Android|Symbian OS|Tablet OS|webOS/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/Android/.test(os) ? os : data) + ' Browser';
      }
    }
    // detect non-Opera versions (order is important)
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Opera ?Mini|Raven|Silk(?!/[\\d.]+$))',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // detect stubborn layout engines
    if (layout == 'iCab' && parseFloat(version) > 3) {
      layout = ['WebKit'];
    } else if ((data =
          /Opera/.test(name) && 'Presto' ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (/^Mac/.test(os) ? 'Tasman' : 'Trident')
        )) {
      layout = [data];
    }
    // leverage environment features
    if (useFeatures) {
      // detect server-side environments
      // Rhino has a global function while others have a global object
      if (isHostType(window, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (freeExports) {
          // if `thisBinding` is the [ModuleScope]
          if (thisBinding == oldWin && typeof system == 'object' && (data = [system])[0]) {
            os || (os = data[0].os || null);
            try {
              data[1] = require('ringo/engine').version;
              version = data[1].join('.');
              name = 'RingoJS';
            } catch(e) {
              if (data[0].global == freeGlobal) {
                name = 'Narwhal';
              }
            }
          }
          else if (typeof process == 'object' && (data = process)) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version)[0];
          }
          else if (rhino) {
            name = 'Rhino';
          }
        }
        else if (rhino) {
          name = 'Rhino';
        }
      }
      // detect Adobe AIR
      else if (getClassOf((data = window.runtime)) == 'ScriptBridgingProxyObject') {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // detect PhantomJS
      else if (getClassOf((data = window.phantom)) == 'RuntimeObject') {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // detect IE compatibility modes
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // we're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout[1] = '';
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      os = os && format(os);
    }
    // detect prerelease phases
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // rename code name "Fennec"
    if (name == 'Fennec') {
      name = 'Firefox Mobile';
    }
    // obscure Maxthon's unreliable version
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // detect Silk desktop/accelerated modes
    else if (name == 'Silk') {
      if (!/Mobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // detect Windows Phone desktop mode
    else if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone OS ' + data + '.x';
      description.unshift('desktop mode');
    }
    // add mobile postfix
    else if ((name == 'IE' || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // detect IE platform preview
    else if (name == 'IE' && useFeatures && typeof external == 'object' && !external) {
      description.unshift('platform preview');
    }
    // detect BlackBerry OS version
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if (/BlackBerry/.test(product) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      os = 'Device Software ' + data;
      version = null;
    }
    // detect Opera identifying/masking itself as another browser
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /OS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /Windows XP/.test(os) && version > 8 ||
            version == 8 && !/Trident/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {

      // when "indentifying", the UA contains both Opera and the other browser's name
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/IE/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // when "masking", the UA contains only the other browser's name
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/IE/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // detect WebKit Nightly and approximate Chrome/Safari versions
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // correct build for numeric comparison
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // nightly builds are postfixed with a `+`
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // clear incorrect browser versions
      else if (version == data[1] ||
          version == (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1]) {
        version = null;
      }
      // use the full Chrome version when available
      data = [data[0], (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1]];

      // detect JavaScriptCore
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (/internal|\n/i.test(toString.toString()) && !data[1])) {
        layout[1] = 'like Safari';
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : '5');
      } else {
        layout[1] = 'like Chrome';
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : '21');
      }
      // add the postfix of ".x" or "+" for approximate versions
      layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+');
      // obscure version for some Safari 1-2 releases
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // detect Opera desktop modes
    if (name == 'Opera' &&  (data = /(?:zbov|zvav)$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
    }
    // detect Chrome desktop mode
    else if (name == 'Safari' && /Chrome/.exec(layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/Mac OS X/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // strip incorrect OS versions
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // add layout engine
    if (layout && !/Avant|Nook/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        /^(?:Adobe|Arora|Midori|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(name) && layout[1])) {
      // don't add layout details to description if they are falsey
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // combine contextual information
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // append manufacturer
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // append product
    if (product) {
      description.push((/^on /.test(description[description.length -1]) ? '' : 'on ') + product);
    }
    // parse OS into an object
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      os = {
        'architecture': 32,
        'family': data ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + (version ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // add browser/OS architecture
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (name && (/WOW64/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform)))) {
        description.unshift('32-bit');
      }
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    return {

      /**
       * The browser/environment version.
       *
       * @memberOf platform
       * @type String|Null
       */
      'version': name && version && (description.unshift(version), version),

      /**
       * The name of the browser/environment.
       *
       * @memberOf platform
       * @type String|Null
       */
      'name': name && (description.unshift(name), name),

      /**
       * The name of the operating system.
       *
       * @memberOf platform
       * @type Object
       */
      'os': os
        ? (name &&
            !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product)) &&
              description.push(product ? '(' + os + ')' : 'on ' + os), os)
        : {

          /**
           * The CPU architecture the OS is built for.
           *
           * @memberOf platform.os
           * @type Number|Null
           */
          'architecture': null,

          /**
           * The family of the OS.
           *
           * @memberOf platform.os
           * @type String|Null
           */
          'family': null,

          /**
           * The version of the OS.
           *
           * @memberOf platform.os
           * @type String|Null
           */
          'version': null,

          /**
           * Returns the OS string.
           *
           * @memberOf platform.os
           * @returns {String} The OS string.
           */
          'toString': function() { return 'null'; }
        },

      /**
       * The platform description.
       *
       * @memberOf platform
       * @type String|Null
       */
      'description': description.length ? description.join(' ') : ua,

      /**
       * The name of the browser layout engine.
       *
       * @memberOf platform
       * @type String|Null
       */
      'layout': layout && layout[0],

      /**
       * The name of the product's manufacturer.
       *
       * @memberOf platform
       * @type String|Null
       */
      'manufacturer': manufacturer,

      /**
       * The alpha/beta release indicator.
       *
       * @memberOf platform
       * @type String|Null
       */
      'prerelease': prerelease,

      /**
       * The name of the product hosting the browser.
       *
       * @memberOf platform
       * @type String|Null
       */
      'product': product,

      /**
       * The browser's user agent string.
       *
       * @memberOf platform
       * @type String|Null
       */
      'ua': ua,

      // parses a user agent string into a platform object
      'parse': parse,

      // returns the platform description
      'toString': toStringPlatform
    };
  }

  /*--------------------------------------------------------------------------*/

  // expose platform
  // some AMD build optimizers, like r.js, check for specific condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // define as an anonymous module so, through path mapping, it can be aliased
    define(function() {
      return parse();
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports && !freeExports.nodeType) {
    // in Narwhal, Node.js, or RingoJS
    forOwn(parse(), function(value, key) {
      freeExports[key] = value;
    });
  }
  // in a browser or Rhino
  else {
    window.platform = parse();
  }
}(this));

(function (sinonChai) {
    "use strict";

    // Module systems magic dance.

    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        // NodeJS
        module.exports = sinonChai;
    } else if (typeof define === "function" && define.amd) {
        // AMD
        define(function () {
            return sinonChai;
        });
    } else {
        // Other environment (usually <script> tag): plug in to global chai instance directly.
        chai.use(sinonChai);
    }
}(function sinonChai(chai, utils) {
    "use strict";

    var slice = Array.prototype.slice;

    function isSpy(putativeSpy) {
        return typeof putativeSpy === "function" &&
               typeof putativeSpy.getCall === "function" &&
               typeof putativeSpy.calledWithExactly === "function";
    }

    function isCall(putativeCall) {
        return putativeCall && isSpy(putativeCall.proxy);
    }

    function assertCanWorkWith(assertion) {
        if (!isSpy(assertion._obj) && !isCall(assertion._obj)) {
            throw new TypeError(utils.inspect(assertion._obj) + " is not a spy or a call to a spy!");
        }
    }

    function getMessages(spy, action, nonNegatedSuffix, always, args) {
        var verbPhrase = always ? "always have " : "have ";
        nonNegatedSuffix = nonNegatedSuffix || "";
        if (isSpy(spy.proxy)) {
            spy = spy.proxy;
        }

        function printfArray(array) {
            return spy.printf.apply(spy, array);
        }

        return {
            affirmative: printfArray(["expected %n to " + verbPhrase + action + nonNegatedSuffix].concat(args)),
            negative: printfArray(["expected %n to not " + verbPhrase + action].concat(args))
        };
    }

    function sinonProperty(name, action, nonNegatedSuffix) {
        utils.addProperty(chai.Assertion.prototype, name, function () {
            assertCanWorkWith(this);

            var messages = getMessages(this._obj, action, nonNegatedSuffix, false);
            this.assert(this._obj[name], messages.affirmative, messages.negative);
        });
    }

    function createSinonMethodHandler(sinonName, action, nonNegatedSuffix) {
        return function () {
            assertCanWorkWith(this);

            var alwaysSinonMethod = "always" + sinonName[0].toUpperCase() + sinonName.substring(1);
            var shouldBeAlways = utils.flag(this, "always") && typeof this._obj[alwaysSinonMethod] === "function";
            var sinonMethod = shouldBeAlways ? alwaysSinonMethod : sinonName;

            var messages = getMessages(this._obj, action, nonNegatedSuffix, shouldBeAlways, slice.call(arguments));
            this.assert(this._obj[sinonMethod].apply(this._obj, arguments), messages.affirmative, messages.negative);
        };
    }

    function sinonMethodAsProperty(name, action, nonNegatedSuffix) {
        var handler = createSinonMethodHandler(name, action, nonNegatedSuffix);
        utils.addProperty(chai.Assertion.prototype, name, handler);
    }

    function exceptionalSinonMethod(chaiName, sinonName, action, nonNegatedSuffix) {
        var handler = createSinonMethodHandler(sinonName, action, nonNegatedSuffix);
        utils.addMethod(chai.Assertion.prototype, chaiName, handler);
    }

    function sinonMethod(name, action, nonNegatedSuffix) {
        exceptionalSinonMethod(name, name, action, nonNegatedSuffix);
    }

    utils.addProperty(chai.Assertion.prototype, "always", function () {
        utils.flag(this, "always", true);
    });

    sinonProperty("called", "been called", " at least once, but it was never called");
    sinonProperty("calledOnce", "been called exactly once", ", but it was called %c%C");
    sinonProperty("calledTwice", "been called exactly twice", ", but it was called %c%C");
    sinonProperty("calledThrice", "been called exactly thrice", ", but it was called %c%C");
    sinonMethodAsProperty("calledWithNew", "been called with new");
    sinonMethod("calledBefore", "been called before %1");
    sinonMethod("calledAfter", "been called after %1");
    sinonMethod("calledOn", "been called with %1 as this", ", but it was called with %t instead");
    sinonMethod("calledWith", "been called with arguments %*", "%C");
    sinonMethod("calledWithExactly", "been called with exact arguments %*", "%C");
    sinonMethod("calledWithMatch", "been called with arguments matching %*", "%C");
    sinonMethod("returned", "returned %1");
    exceptionalSinonMethod("thrown", "threw", "thrown %1");
}));
/*!
 * Sinon.JS 1.5.2, 2012/11/27
 *
 * @author Christian Johansen (christian@cjohansen.no)
 * @author Contributors: https://github.com/cjohansen/Sinon.JS/blob/master/AUTHORS
 *
 * (The BSD License)
 *
 * Copyright (c) 2010-2012, Christian Johansen, christian@cjohansen.no
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright notice,
 *       this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright notice,
 *       this list of conditions and the following disclaimer in the documentation
 *       and/or other materials provided with the distribution.
 *     * Neither the name of Christian Johansen nor the names of his contributors
 *       may be used to endorse or promote products derived from this software
 *       without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */var sinon=function(){"use strict";var buster=function(e,t){var n=typeof require=="function"&&typeof module=="object";var r=typeof document!="undefined"&&document.createElement("div");var i=function(){};var s={bind:function(t,n){var r=typeof n=="string"?t[n]:n;var i=Array.prototype.slice.call(arguments,2);return function(){var e=i.concat(Array.prototype.slice.call(arguments));return r.apply(t,e)}},partial:function(t){var n=[].slice.call(arguments,1);return function(){return t.apply(this,n.concat([].slice.call(arguments)))}},create:function(t){i.prototype=t;return new i},extend:function(t){if(!t){return}for(var n=1,r=arguments.length,i;n<r;++n){for(i in arguments[n]){t[i]=arguments[n][i]}}return t},nextTick:function(n){if(typeof process!="undefined"&&process.nextTick){return process.nextTick(n)}e(n,0)},functionName:function(t){if(!t)return"";if(t.displayName)return t.displayName;if(t.name)return t.name;var n=t.toString().match(/function\s+([^\(]+)/m);return n&&n[1]||""},isNode:function(t){if(!r)return false;try{t.appendChild(r);t.removeChild(r)}catch(n){return false}return true},isElement:function(t){return t&&t.nodeType===1&&s.isNode(t)},isArray:function(t){return Object.prototype.toString.call(t)=="[object Array]"},flatten:function a(e){var t=[],e=e||[];for(var n=0,r=e.length;n<r;++n){t=t.concat(s.isArray(e[n])?a(e[n]):e[n])}return t},each:function(t,n){for(var r=0,i=t.length;r<i;++r){n(t[r])}},map:function(t,n){var r=[];for(var i=0,s=t.length;i<s;++i){r.push(n(t[i]))}return r},parallel:function(t,n){function r(e,t){if(typeof n=="function"){n(e,t);n=null}}function o(e){return function(n,o){if(n){return r(n)}s[e]=o;if(--i==0){r(null,s)}}}if(t.length==0){return r(null,[])}var i=t.length,s=[];for(var u=0,a=t.length;u<a;++u){t[u](o(u))}},series:function(t,n){function r(e,t){if(typeof n=="function"){n(e,t)}}function u(){if(i.length==0)return r(null,o);var e=i.shift()(a);if(e&&typeof e.then=="function"){e.then(s.partial(a,null),a)}}function a(e,t){if(e)return r(e);o.push(t);u()}var i=t.slice();var o=[];u()},countdown:function(t,n){return function(){if(--t==0)n()}}};if(typeof process==="object"&&typeof require==="function"&&typeof module==="object"){var o=require("crypto");var u=require("path");s.tmpFile=function(e){var t=o.createHash("sha1");t.update(e);var n=t.digest("hex");if(process.platform=="win32"){return u.join(process.env["TEMP"],n)}else{return u.join("/tmp",n)}}}if(Array.prototype.some){s.some=function(e,t,n){return e.some(t,n)}}else{s.some=function(e,t,n){if(e==null){throw new TypeError}e=Object(e);var r=e.length>>>0;if(typeof t!=="function"){throw new TypeError}for(var i=0;i<r;i++){if(e.hasOwnProperty(i)&&t.call(n,e[i],i,e)){return true}}return false}}if(Array.prototype.filter){s.filter=function(e,t,n){return e.filter(t,n)}}else{s.filter=function(e,t){if(this==null){throw new TypeError}var n=Object(this);var r=n.length>>>0;if(typeof e!="function"){throw new TypeError}var i=[];for(var s=0;s<r;s++){if(s in n){var o=n[s];if(e.call(t,o,s,n)){i.push(o)}}}return i}}if(n){module.exports=s;s.eventEmitter=require("./buster-event-emitter");Object.defineProperty(s,"defineVersionGetter",{get:function(){return require("./define-version-getter")}})}return s.extend(t||{},s)}(setTimeout,buster);if(typeof buster==="undefined"){var buster={}}if(typeof module==="object"&&typeof require==="function"){buster=require("buster-core")}buster.format=buster.format||{};buster.format.excludeConstructors=["Object",/^.$/];buster.format.quoteStrings=true;buster.format.ascii=function(){function n(t){var n=Object.keys&&Object.keys(t)||[];if(n.length==0){for(var r in t){if(e.call(t,r)){n.push(r)}}}return n.sort()}function r(e,t){if(typeof e!="object"){return false}for(var n=0,r=t.length;n<r;++n){if(t[n]===e){return true}}return false}function i(e,n,s){if(typeof e=="string"){var o=typeof this.quoteStrings!="boolean"||this.quoteStrings;return n||o?'"'+e+'"':e}if(typeof e=="function"&&!(e instanceof RegExp)){return i.func(e)}n=n||[];if(r(e,n)){return"[Circular]"}if(Object.prototype.toString.call(e)=="[object Array]"){return i.array.call(this,e,n)}if(!e){return""+e}if(buster.isElement(e)){return i.element(e)}if(typeof e.toString=="function"&&e.toString!==Object.prototype.toString){return e.toString()}for(var u=0,a=t.length;u<a;u++){if(e===t[u].obj){return t[u].value}}return i.object.call(this,e,n,s)}var e=Object.prototype.hasOwnProperty;var t=[];if(typeof global!="undefined"){t.push({obj:global,value:"[object global]"})}if(typeof document!="undefined"){t.push({obj:document,value:"[object HTMLDocument]"})}if(typeof window!="undefined"){t.push({obj:window,value:"[object Window]"})}i.func=function(e){return"function "+buster.functionName(e)+"() {}"};i.array=function(e,t){t=t||[];t.push(e);var n=[];for(var r=0,s=e.length;r<s;++r){n.push(i.call(this,e[r],t))}return"["+n.join(", ")+"]"};i.object=function(e,t,s){t=t||[];t.push(e);s=s||0;var o=[],u=n(e),a,f,l;var c="";var h=3;for(var p=0,d=s;p<d;++p){c+=" "}for(p=0,d=u.length;p<d;++p){a=u[p];l=e[a];if(r(l,t)){f="[Circular]"}else{f=i.call(this,l,t,s+2)}f=(/\s/.test(a)?'"'+a+'"':a)+": "+f;h+=f.length;o.push(f)}var v=i.constructorName.call(this,e);var m=v?"["+v+"] ":"";return h+s>80?m+"{\n  "+c+o.join(",\n  "+c)+"\n"+c+"}":m+"{ "+o.join(", ")+" }"};i.element=function(e){var t=e.tagName.toLowerCase();var n=e.attributes,r,i=[],s;for(var o=0,u=n.length;o<u;++o){r=n.item(o);s=r.nodeName.toLowerCase().replace("html:","");if(s=="contenteditable"&&r.nodeValue=="inherit"){continue}if(!!r.nodeValue){i.push(s+'="'+r.nodeValue+'"')}}var a="<"+t+(i.length>0?" ":"");var f=e.innerHTML;if(f.length>20){f=f.substr(0,20)+"[...]"}var l=a+i.join(" ")+">"+f+"</"+t+">";return l.replace(/ contentEditable="inherit"/,"")};i.constructorName=function(e){var t=buster.functionName(e&&e.constructor);var n=this.excludeConstructors||buster.format.excludeConstructors||[];for(var r=0,i=n.length;r<i;++r){if(typeof n[r]=="string"&&n[r]==t){return""}else if(n[r].test&&n[r].test(t)){return""}}return t};return i}();if(typeof module!="undefined"){module.exports=buster.format}var sinon=function(e){function r(e){var n=false;try{e.appendChild(t);n=t.parentNode==e}catch(r){return false}finally{try{e.removeChild(t)}catch(r){}}return n}function i(e){return t&&e&&e.nodeType===1&&r(e)}function s(e){return typeof e==="function"||!!(e&&e.constructor&&e.call&&e.apply)}function o(e,t){for(var r in t){if(!n.call(e,r)){e[r]=t[r]}}}var t=typeof document!="undefined"&&document.createElement("div");var n=Object.prototype.hasOwnProperty;var u={wrapMethod:function(t,r,i){if(!t){throw new TypeError("Should wrap property of object")}if(typeof i!="function"){throw new TypeError("Method wrapper should be function")}var u=t[r];if(!s(u)){throw new TypeError("Attempted to wrap "+typeof u+" property "+r+" as function")}if(u.restore&&u.restore.sinon){throw new TypeError("Attempted to wrap "+r+" which is already wrapped")}if(u.calledBefore){var a=!!u.returns?"stubbed":"spied on";throw new TypeError("Attempted to wrap "+r+" which is already "+a)}var f=n.call(t,r);t[r]=i;i.displayName=r;i.restore=function(){if(!f){delete t[r]}if(t[r]===i){t[r]=u}};i.restore.sinon=true;o(i,u);return i},extend:function(t){for(var n=1,r=arguments.length;n<r;n+=1){for(var i in arguments[n]){if(arguments[n].hasOwnProperty(i)){t[i]=arguments[n][i]}if(arguments[n].hasOwnProperty("toString")&&arguments[n].toString!=t.toString){t.toString=arguments[n].toString}}}return t},create:function(t){var n=function(){};n.prototype=t;return new n},deepEqual:function h(e,t){if(u.match&&u.match.isMatcher(e)){return e.test(t)}if(typeof e!="object"||typeof t!="object"){return e===t}if(i(e)||i(t)){return e===t}if(e===t){return true}if(e===null&&t!==null||e!==null&&t===null){return false}var n=Object.prototype.toString.call(e);if(n!=Object.prototype.toString.call(t)){return false}if(n=="[object Array]"){if(e.length!==t.length){return false}for(var r=0,s=e.length;r<s;r+=1){if(!h(e[r],t[r])){return false}}return true}var o,a=0,f=0;for(o in e){a+=1;if(!h(e[o],t[o])){return false}}for(o in t){f+=1}if(a!=f){return false}return true},functionName:function(t){var n=t.displayName||t.name;if(!n){var r=t.toString().match(/function ([^\s\(]+)/);n=r&&r[1]}return n},functionToString:function p(){if(this.getCall&&this.callCount){var e,t,n=this.callCount;while(n--){e=this.getCall(n).thisValue;for(t in e){if(e[t]===this){return t}}}}return this.displayName||"sinon fake"},getConfig:function(e){var t={};e=e||{};var n=u.defaultConfig;for(var r in n){if(n.hasOwnProperty(r)){t[r]=e.hasOwnProperty(r)?e[r]:n[r]}}return t},format:function(e){return""+e},defaultConfig:{injectIntoThis:true,injectInto:null,properties:["spy","stub","mock","clock","server","requests"],useFakeTimers:true,useFakeServer:true},timesInWords:function(t){return t==1&&"once"||t==2&&"twice"||t==3&&"thrice"||(t||0)+" times"},calledInOrder:function(e){for(var t=1,n=e.length;t<n;t++){if(!e[t-1].calledBefore(e[t])){return false}}return true},orderByFirstCall:function(e){return e.sort(function(e,t){var n=e.getCall(0);var r=t.getCall(0);var i=n&&n.callId||-1;var s=r&&r.callId||-1;return i<s?-1:1})},log:function(){},logError:function(e,t){var n=e+" threw exception: ";u.log(n+"["+t.name+"] "+t.message);if(t.stack){u.log(t.stack)}setTimeout(function(){t.message=n+t.message;throw t},0)},typeOf:function(e){if(e===null){return"null"}else if(e===undefined){return"undefined"}var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1).toLowerCase()}};var a=typeof module=="object"&&typeof require=="function";if(a){try{e={format:require("buster-format")}}catch(f){}module.exports=u;module.exports.spy=require("./sinon/spy");module.exports.stub=require("./sinon/stub");module.exports.mock=require("./sinon/mock");module.exports.collection=require("./sinon/collection");module.exports.assert=require("./sinon/assert");module.exports.sandbox=require("./sinon/sandbox");module.exports.test=require("./sinon/test");module.exports.testCase=require("./sinon/test_case");module.exports.assert=require("./sinon/assert");module.exports.match=require("./sinon/match")}if(e){var l=u.create(e.format);l.quoteStrings=false;u.format=function(){return l.ascii.apply(l,arguments)}}else if(a){try{var c=require("util");u.format=function(e){return typeof e=="object"&&e.toString===Object.prototype.toString?c.inspect(e):e}}catch(f){}}return u}(typeof buster=="object"&&buster);(function(e){function n(t,n,r){var i=e.typeOf(t);if(i!==n){throw new TypeError("Expected type of "+r+" to be "+n+", but was "+i)}}function i(e){return r.isPrototypeOf(e)}function s(t,n){if(n===null||n===undefined){return false}for(var r in t){if(t.hasOwnProperty(r)){var i=t[r];var u=n[r];if(o.isMatcher(i)){if(!i.test(u)){return false}}else if(e.typeOf(i)==="object"){if(!s(i,u)){return false}}else if(!e.deepEqual(i,u)){return false}}}return true}function u(t,r){return function(i,s){n(i,"string","property");var u=arguments.length===1;var a=r+'("'+i+'"';if(!u){a+=", "+s}a+=")";return o(function(n){if(n===undefined||n===null||!t(n,i)){return false}return u||e.deepEqual(s,n[i])},a)}}var t=typeof module=="object"&&typeof require=="function";if(!e&&t){e=require("../sinon")}if(!e){return}var r={toString:function(){return this.message}};r.or=function(t){if(!i(t)){throw new TypeError("Matcher expected")}var n=this;var s=e.create(r);s.test=function(e){return n.test(e)||t.test(e)};s.message=n.message+".or("+t.message+")";return s};r.and=function(t){if(!i(t)){throw new TypeError("Matcher expected")}var n=this;var s=e.create(r);s.test=function(e){return n.test(e)&&t.test(e)};s.message=n.message+".and("+t.message+")";return s};var o=function(t,n){var i=e.create(r);var o=e.typeOf(t);switch(o){case"object":if(typeof t.test==="function"){i.test=function(e){return t.test(e)===true};i.message="match("+e.functionName(t.test)+")";return i}var u=[];for(var a in t){if(t.hasOwnProperty(a)){u.push(a+": "+t[a])}}i.test=function(e){return s(t,e)};i.message="match("+u.join(", ")+")";break;case"number":i.test=function(e){return t==e};break;case"string":i.test=function(e){if(typeof e!=="string"){return false}return e.indexOf(t)!==-1};i.message='match("'+t+'")';break;case"regexp":i.test=function(e){if(typeof e!=="string"){return false}return t.test(e)};break;case"function":i.test=t;if(n){i.message=n}else{i.message="match("+e.functionName(t)+")"}break;default:i.test=function(n){return e.deepEqual(t,n)}}if(!i.message){i.message="match("+t+")"}return i};o.isMatcher=i;o.any=o(function(){return true},"any");o.defined=o(function(e){return e!==null&&e!==undefined},"defined");o.truthy=o(function(e){return!!e},"truthy");o.falsy=o(function(e){return!e},"falsy");o.same=function(e){return o(function(t){return e===t},"same("+e+")")};o.typeOf=function(t){n(t,"string","type");return o(function(n){return e.typeOf(n)===t},'typeOf("'+t+'")')};o.instanceOf=function(t){n(t,"function","type");return o(function(e){return e instanceof t},"instanceOf("+e.functionName(t)+")")};o.has=u(function(e,t){if(typeof e==="object"){return t in e}return e[t]!==undefined},"has");o.hasOwn=u(function(e,t){return e.hasOwnProperty(t)},"hasOwn");o.bool=o.typeOf("boolean");o.number=o.typeOf("number");o.string=o.typeOf("string");o.object=o.typeOf("object");o.func=o.typeOf("function");o.array=o.typeOf("array");o.regexp=o.typeOf("regexp");o.date=o.typeOf("date");if(t){module.exports=o}else{e.match=o}})(typeof sinon=="object"&&sinon||null);(function(sinon){function spy(e,t){if(!t&&typeof e=="function"){return spy.create(e)}if(!e&&!t){return spy.create(function(){})}var n=e[t];return sinon.wrapMethod(e,t,spy.create(n))}var commonJSModule=typeof module=="object"&&typeof require=="function";var spyCall;var callId=0;var push=[].push;var slice=Array.prototype.slice;if(!sinon&&commonJSModule){sinon=require("../sinon")}if(!sinon){return}sinon.extend(spy,function(){function delegateToCalls(e,t,n,r,i){e[t]=function(){if(!this.called){if(i){return i.apply(this,arguments)}return false}var e;var s=0;for(var o=0,u=this.callCount;o<u;o+=1){e=this.getCall(o);if(e[r||t].apply(e,arguments)){s+=1;if(n){return true}}}return s===this.callCount}}function matchingFake(e,t,n){if(!e){return}var r=t.length;for(var i=0,s=e.length;i<s;i++){if(e[i].matches(t,n)){return e[i]}}}function incrementCallCount(){this.called=true;this.callCount+=1;this.notCalled=false;this.calledOnce=this.callCount==1;this.calledTwice=this.callCount==2;this.calledThrice=this.callCount==3}function createCallProperties(){this.firstCall=this.getCall(0);this.secondCall=this.getCall(1);this.thirdCall=this.getCall(2);this.lastCall=this.getCall(this.callCount-1)}function createProxy(func){var p;if(func.length){eval("p = (function proxy("+vars.substring(0,func.length*2-1)+") { return p.invoke(func, this, slice.call(arguments)); });")}else{p=function(){return p.invoke(func,this,slice.call(arguments))}}return p}var vars="a,b,c,d,e,f,g,h,i,j,k,l";var uuid=0;var spyApi={reset:function(){this.called=false;this.notCalled=true;this.calledOnce=false;this.calledTwice=false;this.calledThrice=false;this.callCount=0;this.firstCall=null;this.secondCall=null;this.thirdCall=null;this.lastCall=null;this.args=[];this.returnValues=[];this.thisValues=[];this.exceptions=[];this.callIds=[];if(this.fakes){for(var e=0;e<this.fakes.length;e++){this.fakes[e].reset()}}},create:function(t){var n;if(typeof t!="function"){t=function(){}}else{n=sinon.functionName(t)}var r=createProxy(t);sinon.extend(r,spy);delete r.create;sinon.extend(r,t);r.reset();r.prototype=t.prototype;r.displayName=n||"spy";r.toString=sinon.functionToString;r._create=sinon.spy.create;r.id="spy#"+uuid++;return r},invoke:function(t,n,r){var i=matchingFake(this.fakes,r);var s,o;incrementCallCount.call(this);push.call(this.thisValues,n);push.call(this.args,r);push.call(this.callIds,callId++);try{if(i){o=i.invoke(t,n,r)}else{o=(this.func||t).apply(n,r)}}catch(u){push.call(this.returnValues,undefined);s=u;throw u}finally{push.call(this.exceptions,s)}push.call(this.returnValues,o);createCallProperties.call(this);return o},getCall:function(t){if(t<0||t>=this.callCount){return null}return spyCall.create(this,this.thisValues[t],this.args[t],this.returnValues[t],this.exceptions[t],this.callIds[t])},calledBefore:function(t){if(!this.called){return false}if(!t.called){return true}return this.callIds[0]<t.callIds[t.callIds.length-1]},calledAfter:function(t){if(!this.called||!t.called){return false}return this.callIds[this.callCount-1]>t.callIds[t.callCount-1]},withArgs:function(){var e=slice.call(arguments);if(this.fakes){var t=matchingFake(this.fakes,e,true);if(t){return t}}else{this.fakes=[]}var n=this;var r=this._create();r.matchingAguments=e;push.call(this.fakes,r);r.withArgs=function(){return n.withArgs.apply(n,arguments)};for(var i=0;i<this.args.length;i++){if(r.matches(this.args[i])){incrementCallCount.call(r);push.call(r.thisValues,this.thisValues[i]);push.call(r.args,this.args[i]);push.call(r.returnValues,this.returnValues[i]);push.call(r.exceptions,this.exceptions[i]);push.call(r.callIds,this.callIds[i])}}createCallProperties.call(r);return r},matches:function(e,t){var n=this.matchingAguments;if(n.length<=e.length&&sinon.deepEqual(n,e.slice(0,n.length))){return!t||n.length==e.length}},printf:function(e){var t=this;var n=slice.call(arguments,1);var r;return(e||"").replace(/%(.)/g,function(e,i){r=spyApi.formatters[i];if(typeof r=="function"){return r.call(null,t,n)}else if(!isNaN(parseInt(i),10)){return sinon.format(n[i-1])}return"%"+i})}};delegateToCalls(spyApi,"calledOn",true);delegateToCalls(spyApi,"alwaysCalledOn",false,"calledOn");delegateToCalls(spyApi,"calledWith",true);delegateToCalls(spyApi,"calledWithMatch",true);delegateToCalls(spyApi,"alwaysCalledWith",false,"calledWith");delegateToCalls(spyApi,"alwaysCalledWithMatch",false,"calledWithMatch");delegateToCalls(spyApi,"calledWithExactly",true);delegateToCalls(spyApi,"alwaysCalledWithExactly",false,"calledWithExactly");delegateToCalls(spyApi,"neverCalledWith",false,"notCalledWith",function(){return true});delegateToCalls(spyApi,"neverCalledWithMatch",false,"notCalledWithMatch",function(){return true});delegateToCalls(spyApi,"threw",true);delegateToCalls(spyApi,"alwaysThrew",false,"threw");delegateToCalls(spyApi,"returned",true);delegateToCalls(spyApi,"alwaysReturned",false,"returned");delegateToCalls(spyApi,"calledWithNew",true);delegateToCalls(spyApi,"alwaysCalledWithNew",false,"calledWithNew");delegateToCalls(spyApi,"callArg",false,"callArgWith",function(){throw new Error(this.toString()+" cannot call arg since it was not yet invoked.")});spyApi.callArgWith=spyApi.callArg;delegateToCalls(spyApi,"yield",false,"yield",function(){throw new Error(this.toString()+" cannot yield since it was not yet invoked.")});spyApi.invokeCallback=spyApi.yield;delegateToCalls(spyApi,"yieldTo",false,"yieldTo",function(e){throw new Error(this.toString()+" cannot yield to '"+e+"' since it was not yet invoked.")});spyApi.formatters={c:function(e){return sinon.timesInWords(e.callCount)},n:function(e){return e.toString()},C:function(e){var t=[];for(var n=0,r=e.callCount;n<r;++n){push.call(t,"    "+e.getCall(n).toString())}return t.length>0?"\n"+t.join("\n"):""},t:function(e){var t=[];for(var n=0,r=e.callCount;n<r;++n){push.call(t,sinon.format(e.thisValues[n]))}return t.join(", ")},"*":function(e,t){var n=[];for(var r=0,i=t.length;r<i;++r){push.call(n,sinon.format(t[r]))}return n.join(", ")}};return spyApi}());spyCall=function(){function e(e,t,n){var r=sinon.functionName(e)+t;if(n.length){r+=" Received ["+slice.call(n).join(", ")+"]"}throw new Error(r)}var t={create:function(t,n,r,i,s,o){var u=sinon.create(spyCall);delete u.create;u.proxy=t;u.thisValue=n;u.args=r;u.returnValue=i;u.exception=s;u.callId=typeof o=="number"&&o||callId++;return u},calledOn:function(t){if(sinon.match&&sinon.match.isMatcher(t)){return t.test(this.thisValue)}return this.thisValue===t},calledWith:function(){for(var t=0,n=arguments.length;t<n;t+=1){if(!sinon.deepEqual(arguments[t],this.args[t])){return false}}return true},calledWithMatch:function(){for(var t=0,n=arguments.length;t<n;t+=1){var r=this.args[t];var i=arguments[t];if(!sinon.match||!sinon.match(i).test(r)){return false}}return true},calledWithExactly:function(){return arguments.length==this.args.length&&this.calledWith.apply(this,arguments)},notCalledWith:function(){return!this.calledWith.apply(this,arguments)},notCalledWithMatch:function(){return!this.calledWithMatch.apply(this,arguments)},returned:function(t){return sinon.deepEqual(t,this.returnValue)},threw:function(t){if(typeof t=="undefined"||!this.exception){return!!this.exception}if(typeof t=="string"){return this.exception.name==t}return this.exception===t},calledWithNew:function(t){return this.thisValue instanceof this.proxy},calledBefore:function(e){return this.callId<e.callId},calledAfter:function(e){return this.callId>e.callId},callArg:function(e){this.args[e]()},callArgWith:function(e){var t=slice.call(arguments,1);this.args[e].apply(null,t)},yield:function(){var t=this.args;for(var n=0,r=t.length;n<r;++n){if(typeof t[n]==="function"){t[n].apply(null,slice.call(arguments));return}}e(this.proxy," cannot yield since no callback was passed.",t)},yieldTo:function(t){var n=this.args;for(var r=0,i=n.length;r<i;++r){if(n[r]&&typeof n[r][t]==="function"){n[r][t].apply(null,slice.call(arguments,1));return}}e(this.proxy," cannot yield to '"+t+"' since no callback was passed.",n)},toString:function(){var e=this.proxy.toString()+"(";var t=[];for(var n=0,r=this.args.length;n<r;++n){push.call(t,sinon.format(this.args[n]))}e=e+t.join(", ")+")";if(typeof this.returnValue!="undefined"){e+=" => "+sinon.format(this.returnValue)}if(this.exception){e+=" !"+this.exception.name;if(this.exception.message){e+="("+this.exception.message+")"}}return e}};t.invokeCallback=t.yield;return t}();spy.spyCall=spyCall;sinon.spyCall=spyCall;if(commonJSModule){module.exports=spy}else{sinon.spy=spy}})(typeof sinon=="object"&&sinon||null);(function(e){function n(t,r,i){if(!!i&&typeof i!="function"){throw new TypeError("Custom stub should be function")}var s;if(i){s=e.spy&&e.spy.create?e.spy.create(i):i}else{s=n.create()}if(!t&&!r){return e.stub.create()}if(!r&&!!t&&typeof t=="object"){for(var o in t){if(typeof t[o]==="function"){n(t,o)}}return t}return e.wrapMethod(t,r,s)}function r(e,t){var n=e.callCount-1;var r=n in e[t]?e[t][n]:e[t+"Last"];e[t+"Last"]=r;return r}function i(e,t){var n=r(e,"callArgAts");if(n<0){var i=r(e,"callArgProps");for(var s=0,o=t.length;s<o;++s){if(!i&&typeof t[s]=="function"){return t[s]}if(i&&t[s]&&typeof t[s][i]=="function"){return t[s][i]}}return null}return t[n]}function o(t,n,r){if(t.callArgAtsLast<0){var i;if(t.callArgPropsLast){i=e.functionName(t)+" expected to yield to '"+t.callArgPropsLast+"', but no object with such a property was passed."}else{i=e.functionName(t)+" expected to yield, but no callback was passed."}if(r.length>0){i+=" Received ["+s.call(r,", ")+"]"}return i}return"argument at index "+t.callArgAtsLast+" is not a function: "+n}function a(e,t){if(e.callArgAts.length>0){var n=i(e,t);if(typeof n!="function"){throw new TypeError(o(e,n,t))}var s=e.callCount-1;var a=r(e,"callbackArguments");var f=r(e,"callbackContexts");if(e.callbackAsync){u(function(){n.apply(f,a)})}else{n.apply(f,a)}}}var t=typeof module=="object"&&typeof require=="function";if(!e&&t){e=require("../sinon")}if(!e){return}var s=Array.prototype.join;var u=function(){if(typeof process==="object"&&typeof process.nextTick==="function"){return process.nextTick}else if(typeof msSetImmediate==="function"){return msSetImmediate.bind(window)}else if(typeof setImmediate==="function"){return setImmediate}else{return function(e){setTimeout(e,0)}}}();var f=0;e.extend(n,function(){function i(e,t){if(typeof e=="string"){this.exception=new Error(t||"");this.exception.name=e}else if(!e){this.exception=new Error("Error")}else{this.exception=e}return this}var t=Array.prototype.slice,r;r={create:function(){var r=function(){a(r,arguments);if(r.exception){throw r.exception}else if(typeof r.returnArgAt=="number"){return arguments[r.returnArgAt]}else if(r.returnThis){return this}return r.returnValue};r.id="stub#"+f++;var i=r;r=e.spy.create(r);r.func=i;r.callArgAts=[];r.callbackArguments=[];r.callbackContexts=[];r.callArgProps=[];e.extend(r,n);r._create=e.stub.create;r.displayName="stub";r.toString=e.functionToString;return r},returns:function(t){this.returnValue=t;return this},returnsArg:function(t){if(typeof t!="number"){throw new TypeError("argument index is not number")}this.returnArgAt=t;return this},returnsThis:function(){this.returnThis=true;return this},"throws":i,throwsException:i,callsArg:function(t){if(typeof t!="number"){throw new TypeError("argument index is not number")}this.callArgAts.push(t);this.callbackArguments.push([]);this.callbackContexts.push(undefined);this.callArgProps.push(undefined);return this},callsArgOn:function(t,n){if(typeof t!="number"){throw new TypeError("argument index is not number")}if(typeof n!="object"){throw new TypeError("argument context is not an object")}this.callArgAts.push(t);this.callbackArguments.push([]);this.callbackContexts.push(n);this.callArgProps.push(undefined);return this},callsArgWith:function(n){if(typeof n!="number"){throw new TypeError("argument index is not number")}this.callArgAts.push(n);this.callbackArguments.push(t.call(arguments,1));this.callbackContexts.push(undefined);this.callArgProps.push(undefined);return this},callsArgOnWith:function(n,r){if(typeof n!="number"){throw new TypeError("argument index is not number")}if(typeof r!="object"){throw new TypeError("argument context is not an object")}this.callArgAts.push(n);this.callbackArguments.push(t.call(arguments,2));this.callbackContexts.push(r);this.callArgProps.push(undefined);return this},yields:function(){this.callArgAts.push(-1);this.callbackArguments.push(t.call(arguments,0));this.callbackContexts.push(undefined);this.callArgProps.push(undefined);return this},yieldsOn:function(e){if(typeof e!="object"){throw new TypeError("argument context is not an object")}this.callArgAts.push(-1);this.callbackArguments.push(t.call(arguments,1));this.callbackContexts.push(e);this.callArgProps.push(undefined);return this},yieldsTo:function(e){this.callArgAts.push(-1);this.callbackArguments.push(t.call(arguments,1));this.callbackContexts.push(undefined);this.callArgProps.push(e);return this},yieldsToOn:function(e,n){if(typeof n!="object"){throw new TypeError("argument context is not an object")}this.callArgAts.push(-1);this.callbackArguments.push(t.call(arguments,2));this.callbackContexts.push(n);this.callArgProps.push(e);return this}};for(var s in r){if(r.hasOwnProperty(s)&&s.match(/^(callsArg|yields|thenYields$)/)&&!s.match(/Async/)){r[s+"Async"]=function(e){return function(){this.callbackAsync=true;return this[e].apply(this,arguments)}}(s)}}return r}());if(t){module.exports=n}else{e.stub=n}})(typeof sinon=="object"&&sinon||null);(function(e){function r(t){if(!t){return e.expectation.create("Anonymous mock")}return r.create(t)}var t=typeof module=="object"&&typeof require=="function";var n=[].push;if(!e&&t){e=require("../sinon")}if(!e){return}e.mock=r;e.extend(r,function(){function t(e,t){if(!e){return}for(var n=0,r=e.length;n<r;n+=1){t(e[n])}}return{create:function(n){if(!n){throw new TypeError("object is null")}var i=e.extend({},r);i.object=n;delete i.create;return i},expects:function(r){if(!r){throw new TypeError("method is falsy")}if(!this.expectations){this.expectations={};this.proxies=[]}if(!this.expectations[r]){this.expectations[r]=[];var i=this;e.wrapMethod(this.object,r,function(){return i.invokeMethod(r,this,arguments)});n.call(this.proxies,r)}var s=e.expectation.create(r);n.call(this.expectations[r],s);return s},restore:function(){var n=this.object;t(this.proxies,function(e){if(typeof n[e].restore=="function"){n[e].restore()}})},verify:function(){var i=this.expectations||{};var s=[],o=[];t(this.proxies,function(e){t(i[e],function(e){if(!e.met()){n.call(s,e.toString())}else{n.call(o,e.toString())}})});this.restore();if(s.length>0){e.expectation.fail(s.concat(o).join("\n"))}else{e.expectation.pass(s.concat(o).join("\n"))}return true},invokeMethod:function(r,i,s){var o=this.expectations&&this.expectations[r];var u=o&&o.length||0,a;for(a=0;a<u;a+=1){if(!o[a].met()&&o[a].allowsCall(i,s)){return o[a].apply(i,s)}}var f=[],l,c=0;for(a=0;a<u;a+=1){if(o[a].allowsCall(i,s)){l=l||o[a]}else{c+=1}n.call(f,"    "+o[a].toString())}if(c===0){return l.apply(i,s)}f.unshift("Unexpected call: "+e.spyCall.toString.call({proxy:r,args:s}));e.expectation.fail(f.join("\n"))}}}());var i=e.timesInWords;e.expectation=function(){function s(e){if(e==0){return"never called"}else{return"called "+i(e)}}function o(e){var t=e.minCalls;var n=e.maxCalls;if(typeof t=="number"&&typeof n=="number"){var r=i(t);if(t!=n){r="at least "+r+" and at most "+i(n)}return r}if(typeof t=="number"){return"at least "+i(t)}return"at most "+i(n)}function u(e){var t=typeof e.minCalls=="number";return!t||e.callCount>=e.minCalls}function a(e){if(typeof e.maxCalls!="number"){return false}return e.callCount==e.maxCalls}var t=Array.prototype.slice;var r=e.spy.invoke;return{minCalls:1,maxCalls:1,create:function(n){var r=e.extend(e.stub.create(),e.expectation);delete r.create;r.method=n;return r},invoke:function(t,n,i){this.verifyCallAllowed(n,i);return r.apply(this,arguments)},atLeast:function(t){if(typeof t!="number"){throw new TypeError("'"+t+"' is not number")}if(!this.limitsSet){this.maxCalls=null;this.limitsSet=true}this.minCalls=t;return this},atMost:function(t){if(typeof t!="number"){throw new TypeError("'"+t+"' is not number")}if(!this.limitsSet){this.minCalls=null;this.limitsSet=true}this.maxCalls=t;return this},never:function(){return this.exactly(0)},once:function(){return this.exactly(1)},twice:function(){return this.exactly(2)},thrice:function(){return this.exactly(3)},exactly:function(t){if(typeof t!="number"){throw new TypeError("'"+t+"' is not a number")}this.atLeast(t);return this.atMost(t)},met:function(){return!this.failed&&u(this)},verifyCallAllowed:function(n,r){if(a(this)){this.failed=true;e.expectation.fail(this.method+" already called "+i(this.maxCalls))}if("expectedThis"in this&&this.expectedThis!==n){e.expectation.fail(this.method+" called with "+n+" as thisValue, expected "+this.expectedThis)}if(!("expectedArguments"in this)){return}if(!r){e.expectation.fail(this.method+" received no arguments, expected "+e.format(this.expectedArguments))}if(r.length<this.expectedArguments.length){e.expectation.fail(this.method+" received too few arguments ("+e.format(r)+"), expected "+e.format(this.expectedArguments))}if(this.expectsExactArgCount&&r.length!=this.expectedArguments.length){e.expectation.fail(this.method+" received too many arguments ("+e.format(r)+"), expected "+e.format(this.expectedArguments))}for(var s=0,o=this.expectedArguments.length;s<o;s+=1){if(!e.deepEqual(this.expectedArguments[s],r[s])){e.expectation.fail(this.method+" received wrong arguments "+e.format(r)+", expected "+e.format(this.expectedArguments))}}},allowsCall:function(n,r){if(this.met()&&a(this)){return false}if("expectedThis"in this&&this.expectedThis!==n){return false}if(!("expectedArguments"in this)){return true}r=r||[];if(r.length<this.expectedArguments.length){return false}if(this.expectsExactArgCount&&r.length!=this.expectedArguments.length){return false}for(var i=0,s=this.expectedArguments.length;i<s;i+=1){if(!e.deepEqual(this.expectedArguments[i],r[i])){return false}}return true},withArgs:function(){this.expectedArguments=t.call(arguments);return this},withExactArgs:function(){this.withArgs.apply(this,arguments);this.expectsExactArgCount=true;return this},on:function(t){this.expectedThis=t;return this},toString:function(){var t=(this.expectedArguments||[]).slice();if(!this.expectsExactArgCount){n.call(t,"[...]")}var r=e.spyCall.toString.call({proxy:this.method,args:t});var i=r.replace(", [...","[, ...")+" "+o(this);if(this.met()){return"Expectation met: "+i}return"Expected "+i+" ("+s(this.callCount)+")"},verify:function(){if(!this.met()){e.expectation.fail(this.toString())}else{e.expectation.pass(this.toString())}return true},pass:function(t){e.assert.pass(t)},fail:function(e){var t=new Error(e);t.name="ExpectationError";throw t}}}();if(t){module.exports=r}else{e.mock=r}})(typeof sinon=="object"&&sinon||null);(function(e){function i(e){if(!e.fakes){e.fakes=[]}return e.fakes}function s(e,t){var n=i(e);for(var r=0,s=n.length;r<s;r+=1){if(typeof n[r][t]=="function"){n[r][t]()}}}function o(e){var t=i(e);var n=0;while(n<t.length){t.splice(n,1)}}var t=typeof module=="object"&&typeof require=="function";var n=[].push;var r=Object.prototype.hasOwnProperty;if(!e&&t){e=require("../sinon")}if(!e){return}var u={verify:function(){s(this,"verify")},restore:function(){s(this,"restore");o(this)},verifyAndRestore:function(){var t;try{this.verify()}catch(n){t=n}this.restore();if(t){throw t}},add:function(t){n.call(i(this),t);return t},spy:function(){return this.add(e.spy.apply(e,arguments))},stub:function(n,i,s){if(i){var o=n[i];if(typeof o!="function"){if(!r.call(n,i)){throw new TypeError("Cannot stub non-existent own property "+i)}n[i]=s;return this.add({restore:function(){n[i]=o}})}}if(!i&&!!n&&typeof n=="object"){var u=e.stub.apply(e,arguments);for(var a in u){if(typeof u[a]==="function"){this.add(u[a])}}return u}return this.add(e.stub.apply(e,arguments))},mock:function(){return this.add(e.mock.apply(e,arguments))},inject:function(t){var n=this;t.spy=function(){return n.spy.apply(n,arguments)};t.stub=function(){return n.stub.apply(n,arguments)};t.mock=function(){return n.mock.apply(n,arguments)};return t}};if(t){module.exports=u}else{e.collection=u}})(typeof sinon=="object"&&sinon||null);if(typeof sinon=="undefined"){var sinon={}}(function(global){function addTimer(e,t){if(e.length===0){throw new Error("Function requires at least 1 parameter")}var n=id++;var r=e[1]||0;if(!this.timeouts){this.timeouts={}}this.timeouts[n]={id:n,func:e[0],callAt:this.now+r,invokeArgs:Array.prototype.slice.call(e,2)};if(t===true){this.timeouts[n].interval=r}return n}function parseTime(e){if(!e){return 0}var t=e.split(":");var n=t.length,r=n;var i=0,s;if(n>3||!/^(\d\d:){0,2}\d\d?$/.test(e)){throw new Error("tick only understands numbers and 'h:m:s'")}while(r--){s=parseInt(t[r],10);if(s>=60){throw new Error("Invalid time "+e)}i+=s*Math.pow(60,n-r-1)}return i*1e3}function createObject(e){var t;if(Object.create){t=Object.create(e)}else{var n=function(){};n.prototype=e;t=new n}t.Date.clock=t;return t}function mirrorDateProperties(e,t){if(t.now){e.now=function(){return e.clock.now}}else{delete e.now}if(t.toSource){e.toSource=function(){return t.toSource()}}else{delete e.toSource}e.toString=function n(){return t.toString()};e.prototype=t.prototype;e.parse=t.parse;e.UTC=t.UTC;e.prototype.toUTCString=t.prototype.toUTCString;return e}function restore(){var e;for(var t=0,n=this.methods.length;t<n;t++){e=this.methods[t];if(global[e].hadOwnProperty){global[e]=this["_"+e]}else{delete global[e]}}this.methods=[]}function stubGlobal(e,t){t[e].hadOwnProperty=Object.prototype.hasOwnProperty.call(global,e);t["_"+e]=global[e];if(e=="Date"){var n=mirrorDateProperties(t[e],global[e]);global[e]=n}else{global[e]=function(){return t[e].apply(t,arguments)};for(var r in t[e]){if(t[e].hasOwnProperty(r)){global[e][r]=t[e][r]}}}global[e].clock=t}var id=1;sinon.clock={now:0,create:function(t){var n=createObject(this);if(typeof t=="number"){n.now=t}if(!!t&&typeof t=="object"){throw new TypeError("now should be milliseconds since UNIX epoch")}return n},setTimeout:function(t,n){return addTimer.call(this,arguments,false)},clearTimeout:function(t){if(!this.timeouts){this.timeouts=[]}if(t in this.timeouts){delete this.timeouts[t]}},setInterval:function(t,n){return addTimer.call(this,arguments,true)},clearInterval:function(t){this.clearTimeout(t)},tick:function(t){t=typeof t=="number"?t:parseTime(t);var n=this.now,r=this.now+t,i=this.now;var s=this.firstTimerInRange(n,r);var o;while(s&&n<=r){if(this.timeouts[s.id]){n=this.now=s.callAt;try{this.callTimer(s)}catch(u){o=o||u}}s=this.firstTimerInRange(i,r);i=n}this.now=r;if(o){throw o}},firstTimerInRange:function(e,t){var n,r,i;for(var s in this.timeouts){if(this.timeouts.hasOwnProperty(s)){if(this.timeouts[s].callAt<e||this.timeouts[s].callAt>t){continue}if(!r||this.timeouts[s].callAt<r){i=this.timeouts[s];r=this.timeouts[s].callAt;n={func:this.timeouts[s].func,callAt:this.timeouts[s].callAt,interval:this.timeouts[s].interval,id:this.timeouts[s].id,invokeArgs:this.timeouts[s].invokeArgs}}}}return n||null},callTimer:function(timer){if(typeof timer.interval=="number"){this.timeouts[timer.id].callAt+=timer.interval}else{delete this.timeouts[timer.id]}try{if(typeof timer.func=="function"){timer.func.apply(null,timer.invokeArgs)}else{eval(timer.func)}}catch(e){var exception=e}if(!this.timeouts[timer.id]){if(exception){throw exception}return}if(exception){throw exception}},reset:function(){this.timeouts={}},Date:function(){function t(n,r,i,s,o,u,a){switch(arguments.length){case 0:return new e(t.clock.now);case 1:return new e(n);case 2:return new e(n,r);case 3:return new e(n,r,i);case 4:return new e(n,r,i,s);case 5:return new e(n,r,i,s,o);case 6:return new e(n,r,i,s,o,u);default:return new e(n,r,i,s,o,u,a)}}var e=Date;return mirrorDateProperties(t,e)}()};var methods=["Date","setTimeout","setInterval","clearTimeout","clearInterval"];sinon.useFakeTimers=function(t){var n=sinon.clock.create(t);n.restore=restore;n.methods=Array.prototype.slice.call(arguments,typeof t=="number"?1:0);if(n.methods.length===0){n.methods=methods}for(var r=0,i=n.methods.length;r<i;r++){stubGlobal(n.methods[r],n)}return n}})(typeof global!="undefined"&&typeof global!=="function"?global:this);sinon.timers={setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval,Date:Date};if(typeof module=="object"&&typeof require=="function"){module.exports=sinon}if(typeof sinon=="undefined"){this.sinon={}}(function(){var e=[].push;sinon.Event=function(t,n,r){this.initEvent(t,n,r)};sinon.Event.prototype={initEvent:function(e,t,n){this.type=e;this.bubbles=t;this.cancelable=n},stopPropagation:function(){},preventDefault:function(){this.defaultPrevented=true}};sinon.EventTarget={addEventListener:function(n,r,i){this.eventListeners=this.eventListeners||{};this.eventListeners[n]=this.eventListeners[n]||[];e.call(this.eventListeners[n],r)},removeEventListener:function(t,n,r){var i=this.eventListeners&&this.eventListeners[t]||[];for(var s=0,o=i.length;s<o;++s){if(i[s]==n){return i.splice(s,1)}}},dispatchEvent:function(t){var n=t.type;var r=this.eventListeners&&this.eventListeners[n]||[];for(var i=0;i<r.length;i++){if(typeof r[i]=="function"){r[i].call(this,t)}else{r[i].handleEvent(t)}}return!!t.defaultPrevented}}})();if(typeof sinon=="undefined"){this.sinon={}}sinon.xhr={XMLHttpRequest:this.XMLHttpRequest};(function(e){function r(){this.readyState=r.UNSENT;this.requestHeaders={};this.requestBody=null;this.status=0;this.statusText="";if(typeof r.onCreate=="function"){r.onCreate(this)}}function i(e){if(e.readyState!==r.OPENED){throw new Error("INVALID_STATE_ERR")}if(e.sendFlag){throw new Error("INVALID_STATE_ERR")}}function s(e,t){if(!e)return;for(var n=0,r=e.length;n<r;n+=1){t(e[n])}}function o(e,t){for(var n=0;n<e.length;n++){if(t(e[n])===true)return true}return false}function f(e){if(e.readyState==r.DONE){throw new Error("Request done")}}function l(e){if(e.async&&e.readyState!=r.HEADERS_RECEIVED){throw new Error("No headers received")}}function c(e){if(typeof e!="string"){var t=new Error("Attempted to respond to fake XMLHttpRequest with "+e+", which is not a string.");t.name="InvalidBodyException";throw t}}var t=sinon.xhr;t.GlobalXMLHttpRequest=e.XMLHttpRequest;t.GlobalActiveXObject=e.ActiveXObject;t.supportsActiveX=typeof t.GlobalActiveXObject!="undefined";t.supportsXHR=typeof t.GlobalXMLHttpRequest!="undefined";t.workingXHR=t.supportsXHR?t.GlobalXMLHttpRequest:t.supportsActiveX?function(){return new t.GlobalActiveXObject("MSXML2.XMLHTTP.3.0")}:false;var n={"Accept-Charset":true,"Accept-Encoding":true,Connection:true,"Content-Length":true,Cookie:true,Cookie2:true,"Content-Transfer-Encoding":true,Date:true,Expect:true,Host:true,"Keep-Alive":true,Referer:true,TE:true,Trailer:true,"Transfer-Encoding":true,Upgrade:true,"User-Agent":true,Via:true};var u=function(e,t,n){switch(n.length){case 0:return e[t]();case 1:return e[t](n[0]);case 2:return e[t](n[0],n[1]);case 3:return e[t](n[0],n[1],n[2]);case 4:return e[t](n[0],n[1],n[2],n[3]);case 5:return e[t](n[0],n[1],n[2],n[3],n[4])}};r.filters=[];r.addFilter=function(e){this.filters.push(e)};var a=/MSIE 6/;r.defake=function(e,t){var n=new sinon.xhr.workingXHR;s(["open","setRequestHeader","send","abort","getResponseHeader","getAllResponseHeaders","addEventListener","overrideMimeType","removeEventListener"],function(t){e[t]=function(){return u(n,t,arguments)}});var i=function(t){s(t,function(t){try{e[t]=n[t]}catch(r){if(!a.test(navigator.userAgent))throw r}})};var o=function(){e.readyState=n.readyState;if(n.readyState>=r.HEADERS_RECEIVED){i(["status","statusText"])}if(n.readyState>=r.LOADING){i(["responseText"])}if(n.readyState===r.DONE){i(["responseXML"])}if(e.onreadystatechange)e.onreadystatechange.call(e)};if(n.addEventListener){for(var f in e.eventListeners){if(e.eventListeners.hasOwnProperty(f)){s(e.eventListeners[f],function(e){n.addEventListener(f,e)})}}n.addEventListener("readystatechange",o)}else{n.onreadystatechange=o}u(n,"open",t)};r.useFilters=false;sinon.extend(r.prototype,sinon.EventTarget,{async:true,open:function(t,n,i,s,u){this.method=t;this.url=n;this.async=typeof i=="boolean"?i:true;this.username=s;this.password=u;this.responseText=null;this.responseXML=null;this.requestHeaders={};this.sendFlag=false;if(sinon.FakeXMLHttpRequest.useFilters===true){var a=arguments;var f=o(r.filters,function(e){return e.apply(this,a)});if(f){return sinon.FakeXMLHttpRequest.defake(this,arguments)}}this.readyStateChange(r.OPENED)},readyStateChange:function(t){this.readyState=t;if(typeof this.onreadystatechange=="function"){try{this.onreadystatechange()}catch(n){sinon.logError("Fake XHR onreadystatechange handler",n)}}this.dispatchEvent(new sinon.Event("readystatechange"))},setRequestHeader:function(t,r){i(this);if(n[t]||/^(Sec-|Proxy-)/.test(t)){throw new Error('Refused to set unsafe header "'+t+'"')}if(this.requestHeaders[t]){this.requestHeaders[t]+=","+r}else{this.requestHeaders[t]=r}},setResponseHeaders:function(t){this.responseHeaders={};for(var n in t){if(t.hasOwnProperty(n)){this.responseHeaders[n]=t[n]}}if(this.async){this.readyStateChange(r.HEADERS_RECEIVED)}},send:function(t){i(this);if(!/^(get|head)$/i.test(this.method)){if(this.requestHeaders["Content-Type"]){var n=this.requestHeaders["Content-Type"].split(";");this.requestHeaders["Content-Type"]=n[0]+";charset=utf-8"}else{this.requestHeaders["Content-Type"]="text/plain;charset=utf-8"}this.requestBody=t}this.errorFlag=false;this.sendFlag=this.async;this.readyStateChange(r.OPENED);if(typeof this.onSend=="function"){this.onSend(this)}},abort:function(){this.aborted=true;this.responseText=null;this.errorFlag=true;this.requestHeaders={};if(this.readyState>sinon.FakeXMLHttpRequest.UNSENT&&this.sendFlag){this.readyStateChange(sinon.FakeXMLHttpRequest.DONE);this.sendFlag=false}this.readyState=sinon.FakeXMLHttpRequest.UNSENT},getResponseHeader:function(t){if(this.readyState<r.HEADERS_RECEIVED){return null}if(/^Set-Cookie2?$/i.test(t)){return null}t=t.toLowerCase();for(var n in this.responseHeaders){if(n.toLowerCase()==t){return this.responseHeaders[n]}}return null},getAllResponseHeaders:function(){if(this.readyState<r.HEADERS_RECEIVED){return""}var t="";for(var n in this.responseHeaders){if(this.responseHeaders.hasOwnProperty(n)&&!/^Set-Cookie2?$/i.test(n)){t+=n+": "+this.responseHeaders[n]+"\r\n"}}return t},setResponseBody:function(t){f(this);l(this);c(t);var n=this.chunkSize||10;var i=0;this.responseText="";do{if(this.async){this.readyStateChange(r.LOADING)}this.responseText+=t.substring(i,i+n);i+=n}while(i<t.length);var s=this.getResponseHeader("Content-Type");if(this.responseText&&(!s||/(text\/xml)|(application\/xml)|(\+xml)/.test(s))){try{this.responseXML=r.parseXML(this.responseText)}catch(o){}}if(this.async){this.readyStateChange(r.DONE)}else{this.readyState=r.DONE}},respond:function(t,n,i){this.setResponseHeaders(n||{});this.status=typeof t=="number"?t:200;this.statusText=r.statusCodes[this.status];this.setResponseBody(i||"")}});sinon.extend(r,{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4});r.parseXML=function(t){var n;if(typeof DOMParser!="undefined"){var r=new DOMParser;n=r.parseFromString(t,"text/xml")}else{n=new ActiveXObject("Microsoft.XMLDOM");n.async="false";n.loadXML(t)}return n};r.statusCodes={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"};sinon.useFakeXMLHttpRequest=function(){sinon.FakeXMLHttpRequest.restore=function(r){if(t.supportsXHR){e.XMLHttpRequest=t.GlobalXMLHttpRequest}if(t.supportsActiveX){e.ActiveXObject=t.GlobalActiveXObject}delete sinon.FakeXMLHttpRequest.restore;if(r!==true){delete sinon.FakeXMLHttpRequest.onCreate}};if(t.supportsXHR){e.XMLHttpRequest=sinon.FakeXMLHttpRequest}if(t.supportsActiveX){e.ActiveXObject=function(n){if(n=="Microsoft.XMLHTTP"||/^Msxml2\.XMLHTTP/i.test(n)){return new sinon.FakeXMLHttpRequest}return new t.GlobalActiveXObject(n)}}return sinon.FakeXMLHttpRequest};sinon.FakeXMLHttpRequest=r})(this);if(typeof module=="object"&&typeof require=="function"){module.exports=sinon}if(typeof sinon=="undefined"){var sinon={}}sinon.fakeServer=function(){function t(){}function n(e){t.prototype=e;return new t}function r(e){var t=e;if(Object.prototype.toString.call(e)!="[object Array]"){t=[200,{},e]}if(typeof t[2]!="string"){throw new TypeError("Fake server response body should be string, but was "+typeof t[2])}return t}function o(e,t,n){var r=e.method;var i=!r||r.toLowerCase()==t.toLowerCase();var s=e.url;var o=!s||s==n||typeof s.test=="function"&&s.test(n);return i&&o}function u(e,t){var n=this.getHTTPMethod(t);var r=t.url;if(!/^https?:\/\//.test(r)||s.test(r)){r=r.replace(s,"")}if(o(e,this.getHTTPMethod(t),r)){if(typeof e.response=="function"){var i=e.url;var u=[t].concat(!i?[]:r.match(i).slice(1));return e.response.apply(e,u)}return true}return false}var e=[].push;var i=typeof window!=="undefined"?window.location:{};var s=new RegExp("^"+i.protocol+"//"+i.host);return{create:function(){var e=n(this);this.xhr=sinon.useFakeXMLHttpRequest();e.requests=[];this.xhr.onCreate=function(t){e.addRequest(t)};return e},addRequest:function(n){var r=this;e.call(this.requests,n);n.onSend=function(){r.handleRequest(this)};if(this.autoRespond&&!this.responding){setTimeout(function(){r.responding=false;r.respond()},this.autoRespondAfter||10);this.responding=true}},getHTTPMethod:function(t){if(this.fakeHTTPMethods&&/post/i.test(t.method)){var n=(t.requestBody||"").match(/_method=([^\b;]+)/);return!!n?n[1]:t.method}return t.method},handleRequest:function(n){if(n.async){if(!this.queue){this.queue=[]}e.call(this.queue,n)}else{this.processRequest(n)}},respondWith:function(n,i,s){if(arguments.length==1&&typeof n!="function"){this.response=r(n);return}if(!this.responses){this.responses=[]}if(arguments.length==1){s=n;i=n=null}if(arguments.length==2){s=i;i=n;n=null}e.call(this.responses,{method:n,url:i,response:typeof s=="function"?s:r(s)})},respond:function(){if(arguments.length>0)this.respondWith.apply(this,arguments);var t=this.queue||[];var n;while(n=t.shift()){this.processRequest(n)}},processRequest:function(t){try{if(t.aborted){return}var n=this.response||[404,{},""];if(this.responses){for(var r=0,i=this.responses.length;r<i;r++){if(u.call(this,this.responses[r],t)){n=this.responses[r].response;break}}}if(t.readyState!=4){t.respond(n[0],n[1],n[2])}}catch(s){sinon.logError("Fake server request processing",s)}},restore:function(){return this.xhr.restore&&this.xhr.restore.apply(this.xhr,arguments)}}}();if(typeof module=="object"&&typeof require=="function"){module.exports=sinon}(function(){function e(){}e.prototype=sinon.fakeServer;sinon.fakeServerWithClock=new e;sinon.fakeServerWithClock.addRequest=function(t){if(t.async){if(typeof setTimeout.clock=="object"){this.clock=setTimeout.clock}else{this.clock=sinon.useFakeTimers();this.resetClock=true}if(!this.longestTimeout){var n=this.clock.setTimeout;var r=this.clock.setInterval;var i=this;this.clock.setTimeout=function(e,t){i.longestTimeout=Math.max(t,i.longestTimeout||0);return n.apply(this,arguments)};this.clock.setInterval=function(e,t){i.longestTimeout=Math.max(t,i.longestTimeout||0);return r.apply(this,arguments)}}}return sinon.fakeServer.addRequest.call(this,t)};sinon.fakeServerWithClock.respond=function(){var t=sinon.fakeServer.respond.apply(this,arguments);if(this.clock){this.clock.tick(this.longestTimeout||0);this.longestTimeout=0;if(this.resetClock){this.clock.restore();this.resetClock=false}}return t};sinon.fakeServerWithClock.restore=function(){if(this.clock){this.clock.restore()}return sinon.fakeServer.restore.apply(this,arguments)}})();if(typeof module=="object"&&typeof require=="function"){var sinon=require("../sinon");sinon.extend(sinon,require("./util/fake_timers"))}(function(){function t(t,n,r,i){if(!i){return}if(n.injectInto){n.injectInto[r]=i}else{e.call(t.args,i)}}function n(e){var t=sinon.create(sinon.sandbox);if(e.useFakeServer){if(typeof e.useFakeServer=="object"){t.serverPrototype=e.useFakeServer}t.useFakeServer()}if(e.useFakeTimers){if(typeof e.useFakeTimers=="object"){t.useFakeTimers.apply(t,e.useFakeTimers)}else{t.useFakeTimers()}}return t}var e=[].push;sinon.sandbox=sinon.extend(sinon.create(sinon.collection),{useFakeTimers:function(){this.clock=sinon.useFakeTimers.apply(sinon,arguments);return this.add(this.clock)},serverPrototype:sinon.fakeServer,useFakeServer:function(){var t=this.serverPrototype||sinon.fakeServer;if(!t||!t.create){return null}this.server=t.create();return this.add(this.server)},inject:function(e){sinon.collection.inject.call(this,e);if(this.clock){e.clock=this.clock}if(this.server){e.server=this.server;e.requests=this.server.requests}return e},create:function(e){if(!e){return sinon.create(sinon.sandbox)}var r=n(e);r.args=r.args||[];var i,s,o=r.inject({});if(e.properties){for(var u=0,a=e.properties.length;u<a;u++){i=e.properties[u];s=o[i]||i=="sandbox"&&r;t(r,e,i,s)}}else{t(r,e,"sandbox",s)}return r}});sinon.sandbox.useFakeXMLHttpRequest=sinon.sandbox.useFakeServer;if(typeof module=="object"&&typeof require=="function"){module.exports=sinon.sandbox}})();(function(e){function n(t){var n=typeof t;if(n!="function"){throw new TypeError("sinon.test needs to wrap a test function, got "+n)}return function(){var n=e.getConfig(e.config);n.injectInto=n.injectIntoThis&&this||n.injectInto;var r=e.sandbox.create(n);var i,s;var o=Array.prototype.slice.call(arguments).concat(r.args);try{s=t.apply(this,o)}catch(u){i=u}if(typeof i!=="undefined"){r.restore();throw i}else{r.verifyAndRestore()}return s}}var t=typeof module=="object"&&typeof require=="function";if(!e&&t){e=require("../sinon")}if(!e){return}n.config={injectIntoThis:true,injectInto:null,properties:["spy","stub","mock","clock","server","requests"],useFakeTimers:true,useFakeServer:true};if(t){module.exports=n}else{e.test=n}})(typeof sinon=="object"&&sinon||null);(function(e){function n(e,t,n){return function(){if(t){t.apply(this,arguments)}var r,i;try{i=e.apply(this,arguments)}catch(s){r=s}if(n){n.apply(this,arguments)}if(r){throw r}return i}}function r(t,r){if(!t||typeof t!="object"){throw new TypeError("sinon.testCase needs an object with test functions")}r=r||"test";var i=new RegExp("^"+r);var s={},o,u,a;var f=t.setUp;var l=t.tearDown;for(o in t){if(t.hasOwnProperty(o)){u=t[o];if(/^(setUp|tearDown)$/.test(o)){continue}if(typeof u=="function"&&i.test(o)){a=u;if(f||l){a=n(u,f,l)}s[o]=e.test(a)}else{s[o]=t[o]}}}return s}var t=typeof module=="object"&&typeof require=="function";if(!e&&t){e=require("../sinon")}if(!e||!Object.prototype.hasOwnProperty){return}if(t){module.exports=r}else{e.testCase=r}})(typeof sinon=="object"&&sinon||null);(function(e,t){function s(){var e;for(var t=0,n=arguments.length;t<n;++t){e=arguments[t];if(!e){i.fail("fake is not a spy")}if(typeof e!="function"){i.fail(e+" is not a function")}if(typeof e.getCall!="function"){i.fail(e+" is not stubbed")}}}function o(e,n){e=e||t;var r=e.fail||i.fail;r.call(e,n)}function u(e,t,n){if(arguments.length==2){n=t;t=e}i[e]=function(u){s(u);var a=r.call(arguments,1);var f=false;if(typeof t=="function"){f=!t(u)}else{f=typeof u[t]=="function"?!u[t].apply(u,a):!u[t]}if(f){o(this,u.printf.apply(u,[n].concat(a)))}else{i.pass(e)}}}function a(e,t){return!e||/^fail/.test(t)?t:e+t.slice(0,1).toUpperCase()+t.slice(1)}var n=typeof module=="object"&&typeof require=="function";var r=Array.prototype.slice;var i;if(!e&&n){e=require("../sinon")}if(!e){return}i={failException:"AssertError",fail:function(t){var n=new Error(t);n.name=this.failException||i.failException;throw n},pass:function(t){},callOrder:function(){s.apply(null,arguments);var n="",u="";if(!e.calledInOrder(arguments)){try{n=[].join.call(arguments,", ");u=e.orderByFirstCall(r.call(arguments)).join(", ")}catch(a){}o(this,"expected "+n+" to be "+"called in order but were called as "+u)}else{i.pass("callOrder")}},callCount:function(n,r){s(n);if(n.callCount!=r){var u="expected %n to be called "+e.timesInWords(r)+" but was called %c%C";o(this,n.printf(u))}else{i.pass("callCount")}},expose:function(t,n){if(!t){throw new TypeError("target is null or undefined")}var r=n||{};var i=typeof r.prefix=="undefined"&&"assert"||r.prefix;var s=typeof r.includeFail=="undefined"||!!r.includeFail;for(var o in this){if(o!="export"&&(s||!/^(fail)/.test(o))){t[a(i,o)]=this[o]}}return t}};u("called","expected %n to have been called at least once but was never called");u("notCalled",function(e){return!e.called},"expected %n to not have been called but was called %c%C");u("calledOnce","expected %n to be called once but was called %c%C");u("calledTwice","expected %n to be called twice but was called %c%C");u("calledThrice","expected %n to be called thrice but was called %c%C");u("calledOn","expected %n to be called with %1 as this but was called with %t");u("alwaysCalledOn","expected %n to always be called with %1 as this but was called with %t");u("calledWithNew","expected %n to be called with new");u("alwaysCalledWithNew","expected %n to always be called with new");u("calledWith","expected %n to be called with arguments %*%C");u("calledWithMatch","expected %n to be called with match %*%C");u("alwaysCalledWith","expected %n to always be called with arguments %*%C");u("alwaysCalledWithMatch","expected %n to always be called with match %*%C");u("calledWithExactly","expected %n to be called with exact arguments %*%C");u("alwaysCalledWithExactly","expected %n to always be called with exact arguments %*%C");u("neverCalledWith","expected %n to never be called with arguments %*%C");u("neverCalledWithMatch","expected %n to never be called with match %*%C");u("threw","%n did not throw exception%C");u("alwaysThrew","%n did not always throw exception%C");if(n){module.exports=i}else{e.assert=i}})(typeof sinon=="object"&&sinon||null,typeof window!="undefined"?window:global);return sinon}.call(typeof window!="undefined"&&window||{})
(function(window, document) {

    /** Cache used by various methods */
    var cache = {
            'counter': 0,
            'lastAction': 'load',
            'lastChart': 'bar',
            'lastFilterBy': 'all',
            'responses': { /* 'all': null, 'desktop': null, 'major': null, ... */ },
            'timers': { /* 'cleanup': null, 'load': null, 'post': null, ... */ },
            'trash': createElement('div')
        },

        /**
         * Used to filter Browserscope results by browser category.
         * @see http://www.browserscope.org/user/tests/howto#urlparams
         */
            filterMap = {
            'all': 3,
            'desktop': 'top-d',
            'family': 0,
            'major': 1,
            'minor': 2,
            'mobile': 'top-m',
            'popular': 'top',
            'prerelease': 'top-d-e'
        },

        /** Used to resolve a value's internal [[Class]] */
            toString = {}.toString,

        /**
         * The `uaToken` is prepended to the value of the data cell of the Google
         * visualization data table object that matches the user's browser name. After
         * the chart is rendered the element containing the `uaToken` is assigned the
         * `ui.browserscope.uaClass` class name to allow for the creation of a visual
         * indicator to help the user more easily find their browser's results.
         */
            uaToken = '\u2028',

        /** Math shortcuts */
            floor = Math.floor,
        max = Math.max,
        min = Math.min,

        /** Utility shortcuts */
            each = Benchmark.each,
        filter = Benchmark.filter,
        forOwn = Benchmark.forOwn,
        formatNumber = Benchmark.formatNumber,
        hasKey = Benchmark.hasKey,
        invoke = Benchmark.invoke,
        map = Benchmark.map,
        reduce = Benchmark.reduce;

    /*--------------------------------------------------------------------------*/

    /**
     * Registers an event listener.
     * @private
     * @param {Element} element The element.
     * @param {String} eventName The name of the event to listen to.
     * @param {Function} handler The event handler.
     * @returns {Element} The element.
     */
    function addListener(element, eventName, handler) {
        if ((element = typeof element == 'string' ? query(element)[0] : element)) {
            if (typeof element.addEventListener != 'undefined') {
                element.addEventListener(eventName, handler, false);
            } else if (typeof element.attachEvent != 'undefined') {
                element.attachEvent('on' + eventName, handler);
            }
        }
        return element;
    }

    /**
     * Shortcut for `document.createElement()`.
     * @private
     * @param {String} tagName The tag name of the element to create.
     * @param {String} name A name to assign to the element.
     * @param {Document|Element} context The document object used to create the element.
     * @returns {Element} Returns a new element.
     */
    function createElement(tagName, name, context) {
        var result;
        name && name.nodeType && (context = name, name = 0);
        context =  context ? context.ownerDocument || context : document;
        name || (name = '');

        try {
            // set name attribute for IE6/7
            result = context.createElement('<' + tagName + ' name="' + name + '">');
        } catch(e) {
            (result = context.createElement(tagName)).name = name;
        }
        return result;
    }

    /**
     * Creates a new style element.
     * @private
     * @param {String} cssText The css text of the style element.
     * @param {Document|Element} context The document object used to create the element.
     * @returns {Element} Returns the new style element.
     */
    function createStyleSheet(cssText, context) {
        // use a text node, "x", to work around innerHTML issues with style elements
        // http://msdn.microsoft.com/en-us/library/ms533897(v=vs.85).aspx#1
        var div = createElement('div', context);
        div.innerHTML = 'x<style>' + cssText + '</style>';
        return div.lastChild;
    }

    /**
     * Copies own/inherited properties of a source object to the destination object.
     * @private
     * @param {Object} destination The destination object.
     * @param {Object} [source={}] The source object.
     * @returns {Object} The destination object.
     */
    function extend(destination, source) {
        source || (source = {});
        for (var key in source) {
            destination[key] = source[key];
        }
        return destination;
    }

    /**
     * Gets the text content of an element.
     * @private
     * @param {Element} element The element.
     * @returns {String} The text content of the element.
     */
    function getText(element) {
        element = query(element)[0];
        return element && (element.textContent || element.innerText) || '';
    }

    /**
     * Injects a script into the document.
     * @private
     * @param {String} src The external script source.
     * @param {Object} sibling The element to inject the script after.
     * @param {Document} context The document object used to create the script element.
     * @returns {Object} The new script element.
     */
    function loadScript(src, sibling, context) {
        context = sibling ? sibling.ownerDocument || [sibling, sibling = 0][0] : context;
        var script = createElement('script', context),
            nextSibling = sibling ? sibling.nextSibling : query('script', context).pop();

        script.src = src;
        return (sibling || nextSibling).parentNode.insertBefore(script,  nextSibling);
    }

    /**
     * Queries the document for elements by id or tagName.
     * @private
     * @param {String} selector The css selector to match.
     * @param {Document|Element} context The element whose descendants are queried.
     * @returns {Array} The array of results.
     */
    function query(selector, context) {
        var result = [];
        selector || (selector = '');
        context = typeof context == 'string' ? query(context)[0] : context || document;

        if (selector.nodeType) {
            result = [selector];
        }
        else if (context) {
            each(selector.split(','), function(selector) {
                each(/^#/.test(selector)
                    ? [context.getElementById(selector.slice(1))]
                    : context.getElementsByTagName(selector), function(node) {
                    result.push(node);
                });
            });
        }
        return result;
    }

    /**
     * Set an element's innerHTML property.
     * @private
     * @param {Element} element The element.
     * @param {String} html The HTML to set.
     * @param {Object} object The template object used to modify the html.
     * @returns {Element} The element.
     */
    function setHTML(element, html, object) {
        if ((element = query(element)[0])) {
            element.innerHTML = interpolate(html, object);
        }
        return element;
    }

    /**
     * Displays a message in the "results" element.
     * @private
     * @param {String} text The text to display.
     * @param {Object} object The template object used to modify the text.
     */
    function setMessage(text, object) {
        var me = ui.browserscope,
            cont = me.container;

        if (cont) {
            cont.className = 'bs-rt-message';
            setHTML(cont, text, object);
        }
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Adds a style sheet to the current chart and assigns the `ui.browserscope.uaClass`
     * class name to the chart element containing the user's browser name.
     * @private
     * @returns {Boolean} Returns `true` if the operation succeeded, else `false`.
     */
    function addChartStyle() {
        var me = ui.browserscope,
            cssText = [],
            context = frames[query('iframe', me.container)[0].name].document,
            chartNodes = query('text,textpath', context),
            uaClass = me.uaClass,
            result = false;

        if (chartNodes.length) {
            // extract CSS rules for `uaClass`
            each(query('link,style'), function(node) {
                // avoid access denied errors on external style sheets
                // outside the same origin policy
                try {
                    var sheet = node.sheet || node.styleSheet;
                    each(sheet.cssRules || sheet.rules, function(rule) {
                        if ((rule.selectorText || rule.cssText).indexOf('.' + uaClass) > -1) {
                            cssText.push(rule.style && rule.style.cssText || /[^{}]*(?=})/.exec(rule.cssText) || '');
                        }
                    });
                } catch(e) { }
            });

            // insert custom style sheet
            query('head', context)[0].appendChild(
                createStyleSheet('.' + uaClass + '{' + cssText.join(';') + '}', context));

            // scan chart elements for a match
            each(chartNodes, function(node) {
                var nextSibling;
                if ((node.string || getText(node)).charAt(0) == uaToken) {
                    // for VML
                    if (node.string) {
                        // IE requires reinserting the element to render correctly
                        node.className = uaClass;
                        nextSibling = node.nextSibling;
                        node.parentNode.insertBefore(node.removeNode(), nextSibling);
                    }
                    // for SVG
                    else {
                        node.setAttribute('class', uaClass);
                    }
                    result = true;
                }
            });
        }
        return result;
    }

    /**
     * Periodically executed callback that removes injected script and iframe elements.
     * @private
     */
    function cleanup() {
        var me = ui.browserscope,
            timings = me.timings,
            timers = cache.timers,
            trash = cache.trash,
            delay = timings.cleanup * 1e3;

        // remove injected scripts and old iframes when benchmarks aren't running
        if (timers.cleanup && !ui.running) {
            // if expired, destroy the element to prevent pseudo memory leaks.
            // http://dl.dropbox.com/u/513327/removechild_ie_leak.html
            each(query('iframe,script'), function(element) {
                var expire = +(/^browserscope-\d+-(\d+)$/.exec(element.name) || 0)[1] + max(delay, timings.timeout * 1e3);
                if (new Date > expire || /browserscope\.org|google\.com/.test(element.src)) {
                    trash.appendChild(element);
                    trash.innerHTML = '';
                }
            });
        }
        // schedule another round
        timers.cleanup = setTimeout(cleanup, delay);
    }

    /**
     * A simple object cloning utility.
     * @private
     * @param {Mixed} value The value to clone.
     * @returns {Mixed} The cloned value.
     */
    function cloneObject(value) {
        var fn,
            ctor,
            result = value;

        if (isArray(value)) {
            result = map(value, cloneObject);
        }
        else if (value === Object(value)) {
            ctor = value.constructor;
            result = ctor == Object ? {} : (fn = function(){}, fn.prototype = ctor.prototype, new fn);
            forOwn(value, function(subValue, key) {
                result[key] = cloneObject(subValue);
            });
        }
        return result;
    }

    /**
     * Creates a Browserscope results object.
     * @private
     * @returns {Object|Null} Browserscope results object or null.
     */
    function createSnapshot() {
        // clone benches, ignore those that are unrun, errored, or have hz of Infinity
        var benches = invoke(filter(ui.benchmarks, function(bench) {
            return bench.cycles && isFinite(bench.hz);
        }), 'clone');

        // normalize results
        var prev;
        each(benches.sort(function(a, b) {
            // sort slowest to fastest
            // (a larger `mean` indicates a slower benchmark)
            a = a.stats; b = b.stats;
            return (a.mean + a.moe > b.mean + b.moe) ? -1 : 1;
        }), function(bench) {
            // if the previous slower benchmark is indistinguishable from
            // the current then use the previous benchmark's values
            if (prev && !prev.compare(bench)) {
                bench.count = prev.count;
                bench.cycles = prev.cycles;
                bench.hz = prev.hz;
                bench.stats = extend({}, prev.stats);
            }
            prev = bench;
        });

        // append benchmark ids for duplicate names or names with no alphanumeric/space characters
        // and use the upper limit of the confidence interval to compute a lower hz
        // to avoid recording inflated results caused by a high margin or error
        return reduce(benches, function(result, bench, key) {
            var stats = bench.stats;
            result || (result = {});
            key = toLabel(bench.name);
            result[key && !hasKey(result, key) ? key : key + bench.id ] = floor(1 / (stats.mean + stats.moe));
            return result;
        }, null);
    }

    /**
     * Retrieves the "cells" array from a given Google visualization data row object.
     * @private
     * @param {Object} object The data row object.
     * @returns {Array} An array of cell objects.
     */
    function getDataCells(object) {
        // resolve cells by duck typing because of munged property names
        var result = [];
        forOwn(object, function(value) {
            return !(isArray(value) && (result = value));
        });
        return result;
    }

    /**
     * Retrieves the "labels" array from a given Google visualization data table object.
     * @private
     * @param {Object} object The data table object.
     * @returns {Array} An array of label objects.
     */
    function getDataLabels(object) {
        var result = [],
            labelMap = {};

        // resolve labels by duck typing because of munged property names
        forOwn(object, function(value) {
            return !(isArray(value) && 0 in value && 'type' in value[0] && (result = value));
        });
        // create a data map of labels to names
        each(ui.benchmarks, function(bench) {
            var key = toLabel(bench.name);
            labelMap[key && !hasKey(labelMap, key) ? key : key + bench.id ] = bench.name;
        });
        // replace Browserscope's basic labels with benchmark names
        return each(result, function(cell) {
            var name = labelMap[cell.label];
            name && (cell.label = name);
        });
    }

    /**
     * Retrieves the "rows" array from a given Google visualization data table object.
     * @private
     * @param {Object} object The data table object.
     * @returns {Array} An array of row objects.
     */
    function getDataRows(object) {
        var name,
            filterBy = cache.lastFilterBy,
            browserName = toBrowserName(getText(query('strong', '#bs-ua')[0]), filterBy),
            uaClass = ui.browserscope.uaClass,
            result = [];

        // resolve rows by duck typing because of munged property names
        forOwn(object, function(value, key) {
            return !(isArray(value) && 0 in value && !('type' in value[0]) && (name = key, result = value));
        });
        // remove empty rows and set the `p.className` on the browser
        // name cell that matches the user's browser name
        if (result.length) {
            result = object[name] = filter(result, function(value) {
                var cells = getDataCells(value),
                    first = cells[0],
                    second = cells[1];

                // cells[0] is the browser name cell so instead we check cells[1]
                // for the presence of ops/sec data to determine if a row is empty or not
                if (first && second && second.f) {
                    delete first.p.className;
                    if (browserName == toBrowserName(first.f, filterBy)) {
                        first.p.className = uaClass;
                    }
                    return true;
                }
            });
        }
        return result;
    }

    /**
     * Checks if a value has an internal [[Class]] of Array.
     * @private
     * @param {Mixed} value The value to check.
     * @returns {Boolean} Returns `true` if the value has an internal [[Class]] of Array, else `false`.
     */
    function isArray(value) {
        return toString.call(value) == '[object Array]';
    }

    /**
     * Modify a string by replacing named tokens with matching object property values.
     * @private
     * @param {String} string The string to modify.
     * @param {Object} object The template object.
     * @returns {String} The modified string.
     */
    function interpolate(string, object) {
        forOwn(object, function(value, key) {
            string = string.replace(RegExp('#\\{' + key + '\\}', 'g'), value);
        });
        return string;
    }

    /**
     * Executes a callback at a given delay interval until it returns `false`.
     * @private
     * @param {Function} callback The function called every poll interval.
     * @param {Number} delay The delay between callback calls (secs).
     */
    function poll(callback, delay) {
        function poller(init) {
            if (init || callback() !== false) {
                setTimeout(poller, delay * 1e3);
            }
        }
        poller(true);
    }

    /**
     * Cleans up the last action and sets the current action.
     * @private
     * @param {String} action The current action.
     */
    function setAction(action) {
        clearTimeout(cache.timers[cache.lastAction]);
        cache.lastAction = action;
    }

    /**
     * Converts the browser name version number to the format allowed by the specified filter.
     * @private
     * @param {String} name The full browser name .
     * @param {String} filterBy The filter formating rules to apply.
     * @returns {String} The converted browser name.
     */
    function toBrowserName(name, filterBy) {
        name || (name = '');
        if (filterBy == 'all') {
            // truncate something like 1.0.0 to 1
            name = name.replace(/(\d+)[.0]+$/, '$1');
        }
        else if (filterBy == 'family') {
            // truncate something like XYZ 1.2 to XYZ
            name = name.replace(/[.\d\s]+$/, '');
        }
        else if (/minor|popular/.test(filterBy) && /\d+(?:\.[1-9])+$/.test(name)) {
            // truncate something like 1.2.3 to 1.2
            name = name.replace(/(\d+\.[1-9])(\.[.\d]+$)/, '$1');
        }
        else {
            // truncate something like 1.0 to 1 or 1.2.3 to 1 but leave something like 1.2 alone
            name = name.replace(/(\d+)(?:(\.[1-9]$)|(\.[.\d]+$))/, '$1$2');
        }
        return name;
    }

    /**
     * Replaces non-alphanumeric characters with spaces because Browserscope labels
     * can only contain alphanumeric characters and spaces.
     * @private
     * @param {String} text The text to be converted.
     * @returns {String} The Browserscope safe label text.
     * @see http://code.google.com/p/browserscope/issues/detail?id=271
     */
    function toLabel(text) {
        return (text || '').replace(/[^a-z0-9]+/gi, ' ');
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Loads Browserscope's cumulative results table.
     * @static
     * @memberOf ui.browserscope
     * @param {Object} options The options object.
     */
    function load(options) {
        options || (options = {});

        var fired,
            me = ui.browserscope,
            cont = me.container,
            filterBy = cache.lastFilterBy = options.filterBy || cache.lastFilterBy,
            responses = cache.responses,
            response = cache.responses[filterBy],
            visualization = window.google && google.visualization;

        function onComplete(response) {
            var lastResponse = responses[filterBy];
            if (!fired) {
                // set the fired flag to avoid Google's own timeout
                fired = true;
                // render if the filter is still the same, else cache the result
                if (filterBy == cache.lastFilterBy) {
                    me.render({ 'force': true, 'response': lastResponse || response });
                } else if(!lastResponse && response && !response.isError()) {
                    responses[filterBy] = response;
                }
            }
        }

        // set last action in case the load fails and a retry is needed
        setAction('load');

        // exit early if there is no container element or the response is cached
        // and retry if the visualization library hasn't loaded yet
        if (!cont || !visualization || response) {
            cont && onComplete(response);
        }
        else if (!ui.running) {
            // set our own load timeout to display an error message and retry loading
            cache.timers.load = setTimeout(onComplete, me.timings.timeout * 1e3);
            // set "loading" message and attempt to load Browserscope data
            setMessage(me.texts.loading);
            // request Browserscope pass chart data to `google.visualization.Query.setResponse()`
            (new visualization.Query(
                '//www.browserscope.org/gviz_table_data?category=usertest_' + me.key + '&v=' + filterMap[filterBy],
                { 'sendMethod': 'scriptInjection' }
            ))
                .send(onComplete);
        }
    }

    /**
     * Creates a Browserscope beacon and posts the benchmark results.
     * @static
     * @memberOf ui.browserscope
     */
    function post() {
        var idoc,
            iframe,
            body = document.body,
            me = ui.browserscope,
            key = me.key,
            timings = me.timings,
            name = 'browserscope-' + (cache.counter++) + '-' + (+new Date),
            snapshot = createSnapshot();

        // set last action in case the post fails and a retry is needed
        setAction('post');

        if (key && snapshot && me.postable && !ui.running && !/Simulator/i.test(Benchmark.platform)) {
            // create new beacon
            // (the name contains a timestamp so `cleanup()` can determine when to remove it)
            iframe = createElement('iframe', name);
            body.insertBefore(iframe, body.firstChild);
            idoc = frames[name].document;
            iframe.style.display = 'none';

            // expose results snapshot
            me.snapshot = snapshot;
            // set "posting" message and attempt to post the results snapshot
            setMessage(me.texts.post);
            // Note: We originally created an iframe to avoid Browerscope's old limit
            // of one beacon per page load. It's currently used to implement custom
            // request timeout and retry routines.
            idoc.write(interpolate(
                // the doctype is required so Browserscope detects the correct IE compat mode
                '#{doctype}<html><body><script>' +
                    'with(parent.ui.browserscope){' +
                    'var _bTestResults=snapshot,' +
                    '_bC=function(){clearTimeout(_bT);parent.setTimeout(function(){purge();load()},#{refresh}*1e3)},' +
                    '_bT=setTimeout(function(){_bC=function(){};render()},#{timeout}*1e3)' +
                    '}<\/script>' +
                    '<script src=//www.browserscope.org/user/beacon/#{key}?callback=_bC><\/script>' +
                    '</body></html>',
                {
                    'doctype': /css/i.test(document.compatMode) ? '<!doctype html>' : '',
                    'key': key,
                    'refresh': timings.refresh,
                    'timeout': timings.timeout
                }
            ));
            // avoid the IE spinner of doom
            // http://www.google.com/search?q=IE+throbber+of+doom
            idoc.close();
        }
        else {
            me.load();
        }
    }

    /**
     * Purges the Browserscope response cache.
     * @static
     * @memberOf ui.browserscope
     * @param {String} key The key of a single cache entry to clear.
     */
    function purge(key) {
        // we don't pave the cache object with a new one to preserve existing references
        var responses = cache.responses;
        if (key) {
            delete responses[key];
        } else {
            forOwn(responses, function(value, key) {
                delete responses[key];
            });
        }
    }

    /**
     * Renders the cumulative results table.
     * (tweak the dimensions and styles to best fit your environment)
     * @static
     * @memberOf ui.browserscope
     * @param {Object} options The options object.
     */
    function render(options) {
        options || (options = {});

        // coordinates, dimensions, and sizes are in px
        var areaHeight,
            cellWidth,
            data,
            labels,
            rowCount,
            rows,
            me = ui.browserscope,
            cont = me.container,
            responses = cache.responses,
            visualization = window.google && google.visualization,
            lastChart = cache.lastChart,
            chart = cache.lastChart = options.chart || lastChart,
            lastFilterBy = cache.lastFilterBy,
            filterBy = cache.lastFilterBy = options.filterBy || lastFilterBy,
            lastResponse = responses[filterBy],
            response = responses[filterBy] = 'response' in options ? (response = options.response) && !response.isError() && response : lastResponse,
            areaWidth = '100%',
            cellHeight = 80,
            fontSize = 13,
            height = 'auto',
            hTitle = 'operations per second (higher is better)',
            hTitleHeight = 48,
            left = 240,
            legend = 'top',
            maxChars = 0,
            maxCharsLimit = 20,
            maxOps = 0,
            minHeight = 480,
            minWidth = cont && cont.offsetWidth || 948,
            title = '',
            top = 50,
            vTitle = '',
            vTitleWidth = 48,
            width = minWidth;

        function retry(force) {
            var action = cache.lastAction;
            if (force || ui.running) {
                cache.timers[action] = setTimeout(retry, me.timings.retry * 1e3);
            } else {
                me[action].apply(me, action == 'render' ? [options] : []);
            }
        }

        // set action to clear any timeouts and prep for retries
        setAction(response ? 'render' : cache.lastAction);

        // exit early if there is no container element, the data filter has changed or nothing has changed
        if (!cont || visualization && (filterBy != lastFilterBy ||
            (!options.force && chart == lastChart && response == lastResponse))) {
            cont && filterBy != lastFilterBy && load(options);
        }
        // retry if response data is empty/errored or the visualization library hasn't loaded yet
        else if (!response || !visualization) {
            // set error message for empty/errored response
            !response && visualization && setMessage(me.texts.error);
            retry(true);
        }
        // visualization chart gallary
        // http://code.google.com/apis/chart/interactive/docs/gallery.html
        else if (!ui.running) {
            cont.className = '';
            data = cloneObject(response.getDataTable());
            labels = getDataLabels(data);
            rows = getDataRows(data);
            rowCount = rows.length;
            chart = chart.charAt(0).toUpperCase() + chart.slice(1).toLowerCase();

            // adjust data for non-tabular displays
            if (chart != 'Table') {
                // remove "# Tests" run count label (without label data the row will be ignored)
                labels.pop();

                // modify row data
                each(rows, function(row) {
                    each(getDataCells(row), function(cell, index, cells) {
                        var lastIndex = cells.length - 1;

                        // cells[1] through cells[lastIndex - 1] are ops/sec cells
                        if (/^[\d.,]+$/.test(cell.f)) {
                            // assign ops/sec as cell value
                            cell.v = +cell.f.replace(/,/g, '');
                            // add rate to the text
                            cell.f += ' ops/sec';
                            // capture highest ops value to use when computing the left coordinate
                            maxOps = max(maxOps, cell.v);
                        }
                        // cells[0] is the browser name cell
                        // cells[lastIndex] is the run count cell and has no `f` property
                        else if (cell.f) {
                            // add test run count to browser name
                            cell.f += chart == 'Pie' ? '' : ' (' + (cells[lastIndex].v || 1) + ')';
                            // capture longest char count to use when computing left coordinate/cell width
                            maxChars = min(maxCharsLimit, max(maxChars, cell.f.length));
                        }
                        // compute sum of all ops/sec for pie charts
                        if (chart == 'Pie') {
                            if (index == lastIndex) {
                                cells[1].f = formatNumber(cells[1].v) + ' total ops/sec';
                            } else if (index > 1 && typeof cell.v == 'number') {
                                cells[1].v += cell.v;
                            }
                        }
                        // if the browser name matches the user's browser then style it
                        if (cell.p && cell.p.className) {
                            // prefix the browser name with a line separator (\u2028) because it's not rendered
                            // (IE may render a negligible space in the tooltip of browser names truncated with ellipsis)
                            cell.f = uaToken + cell.f;
                            // poll until the chart elements exist and are styled
                            poll(function() { return !addChartStyle(); }, 0.01);
                        }
                    });
                });

                // adjust captions and chart dimensions
                if (chart == 'Bar') {
                    // use minHeight to avoid sizing issues when there is only 1 bar
                    height = max(minHeight, top + (rowCount * cellHeight));
                    // compute left by adding the longest approximate vAxis text width and
                    // a right pad of 10px
                    left = (maxChars * (fontSize / 1.6)) + 10;
                    // get percentage of width left after subtracting the chart's left
                    // coordinate and room for the ops/sec number
                    areaWidth = (100 - (((left + 50) / width) * 100)) + '%';
                }
                else {
                    // swap captions (the browser list caption is blank to conserve space)
                    vTitle = [hTitle, hTitle = vTitle][0];
                    height = minHeight;

                    if (chart == 'Pie') {
                        legend = 'right';
                        title = 'Total operations per second by browser (higher is better)';
                    }
                    else {
                        hTitleHeight = 28;
                        // compute left by getting the sum of the horizontal space wanted
                        // for the vAxis title's width, the approximate vAxis text width, and
                        // the 13px gap between the chart and the right side of the vAxis text
                        left = vTitleWidth + (formatNumber(maxOps).length * (fontSize / 1.6)) + 13;
                        // compute cell width by adding the longest approximate hAxis text
                        // width and wiggle room of 26px
                        cellWidth = (maxChars * (fontSize / 2)) + 26;
                        // use minWidth to avoid clipping the key
                        width = max(minWidth, left + (rowCount * cellWidth));
                    }
                }
                // get percentage of height left after subtracting the vertical space wanted
                // for the hAxis title's height, text size, the chart's top coordinate,
                // and the 8px gap between the chart and the top of the hAxis text
                areaHeight = (100 - (((hTitleHeight + fontSize + top + 8) / height) * 100)) + '%';
                // make chart type recognizable
                chart += 'Chart';
            }

            if (rowCount && visualization[chart]) {
                new visualization[chart](cont).draw(data, {
                    'fontSize': fontSize,
                    'is3D': true,
                    'legend': legend,
                    'height': height,
                    'title': title,
                    'width': width,
                    'chartArea': { 'height': areaHeight, 'left': left, 'top': top, 'width': areaWidth },
                    'hAxis': { 'title': hTitle },
                    'vAxis': { 'title': vTitle }
                });
            } else {
                setMessage(me.texts.empty);
            }
        }
    }

    /*--------------------------------------------------------------------------*/

    // expose
    ui.browserscope = {

        /**
         * Your Browserscope API key.
         * @memberOf ui.browserscope
         * @type String
         */
        'key': '113842991729471998627',

        /**
         * A flag to indicate if posting is enabled or disabled.
         * @memberOf ui.browserscope
         * @type Boolean
         */
        'postable': true,

        /**
         * The selector of the element to contain the entire Browserscope UI.
         * @memberOf ui.browserscope
         * @type String
         */
        'selector': '#bs-results',

        /**
         * The class name used to style the user's browser name when it appears in charts.
         * @memberOf ui.browserscope
         * @type String
         */
        'uaClass': 'rt-ua-cur',

        /**
         * Object containing various timings settings.
         * @memberOf ui.browserscope
         * @type Object
         */
        'timings': {

            /**
             * The delay between removing abandoned script and iframe elements (secs).
             * @memberOf ui.browserscope.timings
             * @type Number
             */
            'cleanup': 10,

            /**
             * The delay before refreshing the cumulative results after posting (secs).
             * @memberOf ui.browserscope.timings
             * @type Number
             */
            'refresh': 3,

            /**
             * The delay between load attempts (secs).
             * @memberOf ui.browserscope.timings
             * @type Number
             */
            'retry': 5,

            /**
             * The time to wait for a request to finish (secs).
             * @memberOf ui.browserscope.timings
             * @type Number
             */
            'timeout': 10
        },

        /**
         * Object containing various text messages.
         * @memberOf ui.browserscope
         * @type Object
         */
        'texts': {

            /**
             * The text shown when their is no recorded data available to report.
             * @memberOf ui.browserscope.texts
             * @type String
             */
            'empty': 'No data available',

            /**
             * The text shown when the cumulative results data cannot be retrieved.
             * @memberOf ui.browserscope.texts
             * @type String
             */
            'error': 'The get/post request has failed :(',

            /**
             * The text shown while waiting for the cumulative results data to load.
             * @memberOf ui.browserscope.texts
             * @type String
             */
            'loading': 'Loading cumulative results data&hellip;',

            /**
             * The text shown while posting the results snapshot to Browserscope.
             * @memberOf ui.browserscope.texts
             * @type String
             */
            'post': 'Posting results snapshot&hellip;',

            /**
             * The text shown while benchmarks are running.
             * @memberOf ui.browserscope.texts
             * @type String
             */
            'wait': 'Benchmarks running. Please wait&hellip;'
        },

        // loads cumulative results table
        'load': load,

        // posts benchmark snapshot to Browserscope
        'post': post,

        // purges the Browserscope response cache
        'purge': purge,

        // renders cumulative results table
        'render': render
    };

    /*--------------------------------------------------------------------------*/

    addListener(window, 'load', function() {
        var me = ui.browserscope,
            key = me.key,
            placeholder = key && query(me.selector)[0];

        // create results html
        if (placeholder) {
            setHTML(placeholder,
                '<h1 id=bs-logo><a href=//www.browserscope.org/user/tests/table/#{key}>' +
                    '<span>Browserscope</span></a></h1>' +
                    '<div class=bs-rt><div id=bs-chart></div></div>',
                { 'key': key });

            // the element the charts are inserted into
            me.container = query('#bs-chart')[0];

            // Browserscope's UA div is inserted before an element with the id of "bs-ua-script"
            loadScript('//www.browserscope.org/ua?o=js', me.container).id = 'bs-ua-script';

            // the "autoload" string can be created with
            // http://code.google.com/apis/loader/autoloader-wizard.html
            loadScript('//www.google.com/jsapi?autoload=' + encodeURIComponent('{' +
                'modules:[{' +
                'name:"visualization",' +
                'version:1,' +
                'packages:["corechart","table"],' +
                'callback:ui.browserscope.load' +
                '}]' +
                '}'));

            // init garbage collector
            cleanup();
        }
    });

    // hide the chart while benchmarks are running
    ui.addListener('start', function() {
        setMessage(ui.browserscope.texts.wait);
    })
        .addListener('abort', function() {
            ui.browserscope.render({ 'force': true });
        });

}(this, document));