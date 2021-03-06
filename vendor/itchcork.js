window.ThemeManager = (function () {
    var themeManager = {};

    var theme = function () {
        this.bodyFontColor = "#000";
        this.radius = "5px";
        this.badgeRadius = "9px";
        this.bodyBackgroundColor = "#fff";
        this.bodyGradientFromColor = "#fff";
        this.bodyGradientToColor = "#fff";
        this.infoColor = "#333";
        this.badgeSuccess = "#669900";
        this.badgeWarning = "#f80";
        this.codeColor = "#000";
        this.hoverColor = "#33b5e5";
        this.wellBackgroundColor = "#fff";
        this.navBackgroundColor = "#000";
        this.navBarInnerBackgroundColor = "#252a30";
        this.inverseColor = "#9933CC";
        this.successColor = "#5c8a00";
        this.errorColor = "#c00";
        this.completedColor = "#5c8a00";
        this.tableBorderColor = "#222";
        this.codeFontFamily = "Menlo,Monaco,Consolas,monospace";
        this.fontSize = "12px";
    };

    themeManager['cyborg'] = new theme();
    themeManager['cyborg'].bodyFontColor = "#999";
    themeManager['cyborg'].radius = "4px";
    themeManager['cyborg'].badgeRadius = "9px";
    themeManager['cyborg'].bodyBackgroundColor = "#121417";
    themeManager['cyborg'].bodyGradientFromColor = "#060606";
    themeManager['cyborg'].bodyGradientToColor = "#252a30";
    themeManager['cyborg'].infoColor = "#33b5e5";
    themeManager['cyborg'].badgeSuccess = "#669900";
    themeManager['cyborg'].badgeWarning = "#f80";
    themeManager['cyborg'].codeColor = "#fff";
    themeManager['cyborg'].hoverColor = "#33b5e5";
    themeManager['cyborg'].wellBackgroundColor = "#131517";
    themeManager['cyborg'].navBackgroundColor = "#020202";
    themeManager['cyborg'].navBarInnerBackgroundColor = "#252a30";
    themeManager['cyborg'].inverseColor = "#9933CC";
    themeManager['cyborg'].successColor = "#5c8a00";
    themeManager['cyborg'].errorColor = "#c00";
    themeManager['cyborg'].completedColor = "#5c8a00";
    themeManager['cyborg'].tableBorderColor = "#222";
    themeManager['cyborg'].codeFontFamily = "Menlo,Monaco,Consolas,monospace";
    themeManager['cyborg'].fontSize = "12px";
    themeManager['custom'] = new theme();
    if (!amplify.store('customTheme'))
        amplify.store('customTheme', themeManager['custom']);
    themeManager['cosmo'] = new theme();
    themeManager['cosmo'].bodyFontColor = "#000";
    themeManager['cosmo'].bodyBackgroundColor = "#fff";
    themeManager['cosmo'].bodyGradientFromColor = "#fff";
    themeManager['cosmo'].bodyGradientToColor = "#fff";
    themeManager['cosmo'].infoColor = "#000";
    themeManager['cosmo'].badgeSuccess = "#3FB618";
    themeManager['cosmo'].badgeRadius = "0px";
    themeManager['cosmo'].badgeWarning = "#FE6600";
    themeManager['cosmo'].codeColor = "#fff";
    themeManager['cosmo'].hoverColor = "#0072E6";
    themeManager['cosmo'].wellBackgroundColor = "#131517";
    themeManager['cosmo'].navBackgroundColor = "#020202";
    themeManager['cosmo'].navBarInnerBackgroundColor = "#0072EB";
    themeManager['cosmo'].inverseColor = "#000";
    themeManager['cosmo'].successColor = "#41BB19";
    themeManager['cosmo'].errorColor = "#E60033";
    themeManager['cosmo'].completedColor = "#41BB19";
    themeManager['cosmo'].tableBorderColor = "#ddd";
    themeManager['curelean'] = new theme();
    themeManager['curelean'].bodyFontColor = "#000";
    themeManager['curelean'].bodyBackgroundColor = "#fff";
    themeManager['curelean'].bodyGradientFromColor = "#fff";
    themeManager['curelean'].bodyGradientToColor = "#fff";
    themeManager['curelean'].radius = "0px";
    themeManager['curelean'].badgeRadius = "5px";
    themeManager['curelean'].infoColor = "#33b5e5";
    themeManager['curelean'].badgeSuccess = "#669900";
    themeManager['curelean'].badgeWarning = "#f80";
    themeManager['curelean'].codeColor = "#fff";
    themeManager['curelean'].hoverColor = "#FF2B2B";
    themeManager['curelean'].wellBackgroundColor = "#0a1366";
    themeManager['curelean'].navBackgroundColor = "#4cc6ef";
    themeManager['curelean'].navBarInnerBackgroundColor = "#0a1366";
    themeManager['curelean'].inverseColor = "#9933CC";
    themeManager['curelean'].successColor = "#5c8a00";
    themeManager['curelean'].errorColor = "#c00";
    themeManager['curelean'].completedColor = "#5c8a00";
    themeManager['curelean'].tableBorderColor = "#ddd";
    themeManager['superhero'] = new theme();
    themeManager['superhero'].bodyFontColor = "#ece9d7";
    themeManager['superhero'].radius = "5px";
    themeManager['superhero'].badgeRadius = "5px";
    themeManager['superhero'].bodyBackgroundColor = "#2A333C";
    themeManager['superhero'].bodyGradientFromColor = "#2A333C";
    themeManager['superhero'].bodyGradientToColor = "#2A333C";
    themeManager['superhero'].infoColor = "#E36B23";
    themeManager['superhero'].badgeSuccess = "#51A351";
    themeManager['superhero'].badgeWarning = "#E36B23";
    themeManager['superhero'].codeColor = "#ece9d7";
    themeManager['superhero'].hoverColor = "#E36B23";
    themeManager['superhero'].wellBackgroundColor = "#45515F";
    themeManager['superhero'].navBackgroundColor = "#2A333C";
    themeManager['superhero'].navBarInnerBackgroundColor = "#45515F";
    themeManager['superhero'].inverseColor = "#414141";
    themeManager['superhero'].successColor = "#51A351";
    themeManager['superhero'].errorColor = "#c00";
    themeManager['superhero'].completedColor = "#51A351";
    themeManager['superhero'].tableBorderColor = "transparent";

    var themeStyleTag = document.createElement('style');
    themeStyleTag.setAttribute("id", "theme");
    var s = document.getElementsByTagName('link')[0];
    s.parentNode.insertBefore(themeStyleTag, s);

    var apply = function () {
        var t;

        if (amplify.store('currentTheme') === 'customTheme') {
            t = amplify.store('customTheme');
        }
        else {
            t = themeManager[amplify.store('currentTheme')];
        }

        themeStyleTag.innerHTML = ".clearfix{*zoom:1}.clearfix:before,.clearfix:after{display:table;line-height:0;content:''}.clearfix:after{clear:both}.hide-text{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.input-block-level{display:block;width:100%;min-height:30px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio,canvas,video{display:inline-block;*display:inline;*zoom:1}audio:not([controls]){display:none}html{overflow:hidden;font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}a:hover,a:active{outline:0}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{width:auto;height:auto;max-width:100%;vertical-align:middle;border:0;-ms-interpolation-mode:bicubic}#map_canvas img,.google-maps img{max-width:none}button,input,select,textarea{margin:0;font-size:100%;vertical-align:middle}button,input{*overflow:visible;line-height:normal}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}button,html input[type='button'],input[type='reset'],input[type='submit']{cursor:pointer;-webkit-appearance:button}label,select,button,input[type='button'],input[type='reset'],input[type='submit'],input[type='radio'],input[type='checkbox']{cursor:pointer}input[type='search']{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}input[type='search']::-webkit-search-decoration,input[type='search']::-webkit-search-cancel-button{-webkit-appearance:none}textarea{overflow:auto;vertical-align:top}@media print{*{color:#000!important;text-shadow:none!important;background:transparent!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:' (' attr(href) ')'}abbr[title]:after{content:' (' attr(title) ')'}.ir a:after,a[href^='javascript:']:after,a[href^='#']:after{content:''}pre,blockquote{border:1px solid "
            + t.bodyFontColor + ";page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}img{max-width:100%!important}@page{margin:.5cm}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}body{margin:0;font-family:'Droid Sans',sans-serif;font-size:14px;line-height:20px;color:"
            + t.bodyFontColor + ";background-color:"
            + t.bodyGradientFromColor + "}a{color:"
            + t.hoverColor + ";text-decoration:none}a:hover,a:focus{color:#fff;text-decoration:none}.img-rounded{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.img-polaroid{padding:4px;background-color:#fff;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.1);-moz-box-shadow:0 1px 3px rgba(0,0,0,0.1);box-shadow:0 1px 3px rgba(0,0,0,0.1)}.img-circle{-webkit-border-radius:500px;-moz-border-radius:500px;border-radius:500px}.row{margin-left:-20px;*zoom:1}.row:before,.row:after{display:table;line-height:0;content:''}.row:after{clear:both}[class*='span']{float:left;min-height:1px;margin-left:20px}.container,.navbar-static-top .container,.navbar-fixed-top .container,.navbar-fixed-bottom .container{width:940px}.span12{width:940px}.span11{width:860px}.span10{width:780px}.span9{width:700px}.span8{width:620px}.span7{width:540px}.span6{width:460px}.span5{width:380px}.span4{width:300px}.span3{width:220px}.span2{width:140px}.span1{width:60px}.offset12{margin-left:980px}.offset11{margin-left:900px}.offset10{margin-left:820px}.offset9{margin-left:740px}.offset8{margin-left:660px}.offset7{margin-left:580px}.offset6{margin-left:500px}.offset5{margin-left:420px}.offset4{margin-left:340px}.offset3{margin-left:260px}.offset2{margin-left:180px}.offset1{margin-left:100px}.row-fluid{width:100%;*zoom:1}.row-fluid:before,.row-fluid:after{display:table;line-height:0;content:''}.row-fluid:after{clear:both}.row-fluid [class*='span']{display:block;float:left;width:100%;min-height:30px;margin-left:2.127659574468085%;*margin-left:2.074468085106383%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.row-fluid [class*='span']:first-child{margin-left:0}.row-fluid .controls-row [class*='span']+[class*='span']{margin-left:2.127659574468085%}.row-fluid .span12{width:100%;*width:99.94680851063829%}.row-fluid .span11{width:91.48936170212765%;*width:91.43617021276594%}.row-fluid .span10{width:82.97872340425532%;*width:82.92553191489361%}.row-fluid .span9{width:74.46808510638297%;*width:74.41489361702126%}.row-fluid .span8{width:65.95744680851064%;*width:65.90425531914893%}.row-fluid .span7{width:57.44680851063829%;*width:57.39361702127659%}.row-fluid .span6{width:48.93617021276595%;*width:48.88297872340425%}.row-fluid .span5{width:40.42553191489362%;*width:40.37234042553192%}.row-fluid .span4{width:31.914893617021278%;*width:31.861702127659576%}.row-fluid .span3{width:23.404255319148934%;*width:23.351063829787233%}.row-fluid .span2{width:14.893617021276595%;*width:14.840425531914894%}.row-fluid .span1{width:6.382978723404255%;*width:6.329787234042553%}.row-fluid .offset12{margin-left:104.25531914893617%;*margin-left:104.14893617021275%}.row-fluid .offset12:first-child{margin-left:102.12765957446808%;*margin-left:102.02127659574467%}.row-fluid .offset11{margin-left:95.74468085106382%;*margin-left:95.6382978723404%}.row-fluid .offset11:first-child{margin-left:93.61702127659574%;*margin-left:93.51063829787232%}.row-fluid .offset10{margin-left:87.23404255319149%;*margin-left:87.12765957446807%}.row-fluid .offset10:first-child{margin-left:85.1063829787234%;*margin-left:84.99999999999999%}.row-fluid .offset9{margin-left:78.72340425531914%;*margin-left:78.61702127659572%}.row-fluid .offset9:first-child{margin-left:76.59574468085106%;*margin-left:76.48936170212764%}.row-fluid .offset8{margin-left:70.2127659574468%;*margin-left:70.10638297872339%}.row-fluid .offset8:first-child{margin-left:68.08510638297872%;*margin-left:67.9787234042553%}.row-fluid .offset7{margin-left:61.70212765957446%;*margin-left:61.59574468085106%}.row-fluid .offset7:first-child{margin-left:59.574468085106375%;*margin-left:59.46808510638297%}.row-fluid .offset6{margin-left:53.191489361702125%;*margin-left:53.085106382978715%}.row-fluid .offset6:first-child{margin-left:51.063829787234035%;*margin-left:50.95744680851063%}.row-fluid .offset5{margin-left:44.68085106382979%;*margin-left:44.57446808510638%}.row-fluid .offset5:first-child{margin-left:42.5531914893617%;*margin-left:42.4468085106383%}.row-fluid .offset4{margin-left:36.170212765957444%;*margin-left:36.06382978723405%}.row-fluid .offset4:first-child{margin-left:34.04255319148936%;*margin-left:33.93617021276596%}.row-fluid .offset3{margin-left:27.659574468085104%;*margin-left:27.5531914893617%}.row-fluid .offset3:first-child{margin-left:25.53191489361702%;*margin-left:25.425531914893618%}.row-fluid .offset2{margin-left:19.148936170212764%;*margin-left:19.04255319148936%}.row-fluid .offset2:first-child{margin-left:17.02127659574468%;*margin-left:16.914893617021278%}.row-fluid .offset1{margin-left:10.638297872340425%;*margin-left:10.53191489361702%}.row-fluid .offset1:first-child{margin-left:8.51063829787234%;*margin-left:8.404255319148938%}[class*='span'].hide,.row-fluid [class*='span'].hide{display:none}[class*='span'].pull-right,.row-fluid [class*='span'].pull-right{float:right}.container{margin-right:auto;margin-left:auto;*zoom:1}.container:before,.container:after{display:table;line-height:0;content:''}.container:after{clear:both}.container-fluid{padding-right:0;padding-left:0;*zoom:1}.container-fluid:before,.container-fluid:after{display:table;line-height:0;content:''}.container-fluid:after{clear:both}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:21px;font-weight:200;line-height:30px}small{font-size:85%}strong{font-weight:bold}em{font-style:italic}cite{font-style:normal}.muted{color:#adafae}a.muted:hover,a.muted:focus{color:#939695}.text-warning{color:#a47e3c}a.text-warning:hover,a.text-warning:focus{color:#7f612e}.text-error{color:#b94a48}a.text-error:hover,a.text-error:focus{color:#953b39}.text-info{color:"
            + t.infoColor + "}a.text-info:hover,a.text-info:focus{color:#007399}.text-success{color:"
            + t.badgeSuccess + "}a.text-success:hover,a.text-success:focus{color:#356635}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}h1,h2,h3,h4,h5,h6{margin:10px 0;font-family:inherit;font-weight:normal;line-height:20px;color:#fff;text-rendering:optimizelegibility}h1 small,h2 small,h3 small,h4 small,h5 small,h6 small{font-weight:normal;line-height:1;color:#adafae}h1,h2,h3{line-height:40px}h1{font-size:38.5px}h2{font-size:31.5px}h3{font-size:24.5px}h4{font-size:17.5px}h5{font-size:14px}h6{font-size:11.9px}h1 small{font-size:24.5px}h2 small{font-size:17.5px}h3 small{font-size:14px}h4 small{font-size:14px}.page-header{padding-bottom:9px;margin:20px 0 30px;border-bottom:1px solid #eee}ul,ol{padding:0;margin:0 0 10px 25px}ul ul,ul ol,ol ol,ol ul{margin-bottom:0}li{line-height:20px}ul.unstyled,ol.unstyled{margin-left:0;list-style:none}ul.inline,ol.inline{margin-left:0;list-style:none}ul.inline>li,ol.inline>li{display:inline-block;*display:inline;padding-right:5px;padding-left:5px;*zoom:1}dl{margin-bottom:0}dt,dd{line-height:20px}dt{font-weight:bold}dd{margin-left:10px}.dl-horizontal{*zoom:1}.dl-horizontal:before,.dl-horizontal:after{display:table;line-height:0;content:''}.dl-horizontal:after{clear:both}.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}hr{margin:20px 0;border:0;border-top:1px solid "
            + t.tableBorderColor + ";border-bottom:1px solid #fff}abbr[title],abbr[data-original-title]{cursor:help;border-bottom:1px dotted #adafae}abbr.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:0 0 0 15px;margin:0 0 20px;border-left:5px solid #eee}blockquote p{margin-bottom:0;font-size:17.5px;font-weight:300;line-height:1.25}blockquote small{display:block;line-height:20px;color:#adafae}blockquote small:before{content:'\2014 \00A0'}blockquote.pull-right{float:right;padding-right:15px;padding-left:0;border-right:5px solid #eee;border-left:0}blockquote.pull-right p,blockquote.pull-right small{text-align:right}blockquote.pull-right small:before{content:''}blockquote.pull-right small:after{content:'\00A0 \2014'}q:before,q:after,blockquote:before,blockquote:after{content:''}address{display:block;margin-bottom:20px;font-style:normal;line-height:20px}code,pre{padding:0 3px 2px;font-family:"
            + t.codeFontFamily + ";font-size:"
            + t.fontSize + ";color:#222;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}code{padding:2px 4px;color:#d14;white-space:nowrap;background-color:#f7f7f9;border:1px solid #e1e1e8}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:20px;word-break:break-all;word-wrap:break-word;white-space:pre;white-space:pre-wrap;background-color:#f5f5f5;border:1px solid #ccc;border:1px solid rgba(0,0,0,0.15);-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}pre.prettyprint{margin-bottom:0}code{font-weight: bold !important;suit}pre code{padding:0;color:inherit;white-space:pre;white-space:pre-wrap;background-color:transparent;border:0}.pre-scrollable{max-height:340px;overflow-y:scroll}form{margin:0 0 20px}fieldset{padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:40px;color:#222;border:0;border-bottom:1px solid #e5e5e5}legend small{font-size:15px;color:#adafae}label,input,button,select,textarea{font-size:14px;font-weight:normal;line-height:20px}input,button,select,textarea{font-family:'Droid Sans',sans-serif}label{display:block;margin-bottom:5px}select,textarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{display:inline-block;height:20px;padding:4px 6px;margin-bottom:10px;font-size:14px;line-height:20px;color:"
            + t.bodyFontColor + ";vertical-align:middle;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}input,textarea,.uneditable-input{width:206px}textarea{height:auto}textarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{background-color:#ccc;border:1px solid #bbb;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-webkit-transition:border linear .2s,box-shadow linear .2s;-moz-transition:border linear .2s,box-shadow linear .2s;-o-transition:border linear .2s,box-shadow linear .2s;transition:border linear .2s,box-shadow linear .2s}textarea:focus,input[type='text']:focus,input[type='password']:focus,input[type='datetime']:focus,input[type='datetime-local']:focus,input[type='date']:focus,input[type='month']:focus,input[type='time']:focus,input[type='week']:focus,input[type='number']:focus,input[type='email']:focus,input[type='url']:focus,input[type='search']:focus,input[type='tel']:focus,input[type='color']:focus,.uneditable-input:focus{border-color:rgba(82,168,236,0.8);outline:0;outline:thin dotted ;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6)}input[type='radio'],input[type='checkbox']{margin:4px 0 0;margin-top:1px ;*margin-top:0;line-height:normal}input[type='file'],input[type='image'],input[type='submit'],input[type='reset'],input[type='button'],input[type='radio'],input[type='checkbox']{width:auto}select,input[type='file']{height:30px;*margin-top:4px;line-height:30px}select{width:220px;background-color:#ccc;border:1px solid #bbb}select[multiple],select[size]{height:auto}select:focus,input[type='file']:focus,input[type='radio']:focus,input[type='checkbox']:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.uneditable-input,.uneditable-textarea{color:#adafae;cursor:not-allowed;background-color:#c9c9c9;border-color:#bbb;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.025);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,0.025);box-shadow:inset 0 1px 2px rgba(0,0,0,0.025)}.uneditable-input{overflow:hidden;white-space:nowrap}.uneditable-textarea{width:auto;height:auto}input:-moz-placeholder,textarea:-moz-placeholder{color:#adafae}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#adafae}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#adafae}.radio,.checkbox{min-height:20px;padding-left:20px}.radio input[type='radio'],.checkbox input[type='checkbox']{float:left;margin-left:-20px}.controls>.radio:first-child,.controls>.checkbox:first-child{padding-top:5px}.radio.inline,.checkbox.inline{display:inline-block;padding-top:5px;margin-bottom:0;vertical-align:middle}.radio.inline+.radio.inline,.checkbox.inline+.checkbox.inline{margin-left:10px}.input-mini{width:60px}.input-small{width:90px}.input-medium{width:150px}.input-large{width:210px}.input-xlarge{width:270px}.input-xxlarge{width:530px}input[class*='span'],select[class*='span'],textarea[class*='span'],.uneditable-input[class*='span'],.row-fluid input[class*='span'],.row-fluid select[class*='span'],.row-fluid textarea[class*='span'],.row-fluid .uneditable-input[class*='span']{float:none;margin-left:0}.input-append input[class*='span'],.input-append .uneditable-input[class*='span'],.input-prepend input[class*='span'],.input-prepend .uneditable-input[class*='span'],.row-fluid input[class*='span'],.row-fluid select[class*='span'],.row-fluid textarea[class*='span'],.row-fluid .uneditable-input[class*='span'],.row-fluid .input-prepend [class*='span'],.row-fluid .input-append [class*='span']{display:inline-block}input,textarea,.uneditable-input{margin-left:0}.controls-row [class*='span']+[class*='span']{margin-left:20px}input.span12,textarea.span12,.uneditable-input.span12{width:926px}input.span11,textarea.span11,.uneditable-input.span11{width:846px}input.span10,textarea.span10,.uneditable-input.span10{width:766px}input.span9,textarea.span9,.uneditable-input.span9{width:686px}input.span8,textarea.span8,.uneditable-input.span8{width:606px}input.span7,textarea.span7,.uneditable-input.span7{width:526px}input.span6,textarea.span6,.uneditable-input.span6{width:446px}input.span5,textarea.span5,.uneditable-input.span5{width:366px}input.span4,textarea.span4,.uneditable-input.span4{width:286px}input.span3,textarea.span3,.uneditable-input.span3{width:206px}input.span2,textarea.span2,.uneditable-input.span2{width:126px}input.span1,textarea.span1,.uneditable-input.span1{width:46px}.controls-row{*zoom:1}.controls-row:before,.controls-row:after{display:table;line-height:0;content:''}.controls-row:after{clear:both}.controls-row [class*='span'],.row-fluid .controls-row [class*='span']{float:left}.controls-row .checkbox[class*='span'],.controls-row .radio[class*='span']{padding-top:5px}input[disabled],select[disabled],textarea[disabled],input[readonly],select[readonly],textarea[readonly]{cursor:not-allowed;background-color:#555}input[type='radio'][disabled],input[type='checkbox'][disabled],input[type='radio'][readonly],input[type='checkbox'][readonly]{background-color:transparent}.control-group.warning .control-label,.control-group.warning .help-block,.control-group.warning .help-inline{color:#a47e3c}.control-group.warning .checkbox,.control-group.warning .radio,.control-group.warning input,.control-group.warning select,.control-group.warning textarea{color:#a47e3c}.control-group.warning input,.control-group.warning select,.control-group.warning textarea{border-color:#a47e3c;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.control-group.warning input:focus,.control-group.warning select:focus,.control-group.warning textarea:focus{border-color:#7f612e;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ceae78;-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ceae78;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ceae78}.control-group.warning .input-prepend .add-on,.control-group.warning .input-append .add-on{color:#a47e3c;background-color:#eee;border-color:#a47e3c}.control-group.error .control-label,.control-group.error .help-block,.control-group.error .help-inline{color:#b94a48}.control-group.error .checkbox,.control-group.error .radio,.control-group.error input,.control-group.error select,.control-group.error textarea{color:#b94a48}.control-group.error input,.control-group.error select,.control-group.error textarea{border-color:#b94a48;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.control-group.error input:focus,.control-group.error select:focus,.control-group.error textarea:focus{border-color:#953b39;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392;-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #d59392}.control-group.error .input-prepend .add-on,.control-group.error .input-append .add-on{color:#b94a48;background-color:#eee;border-color:#b94a48}.control-group.success .control-label,.control-group.success .help-block,.control-group.success .help-inline{color:"
            + t.badgeSuccess + "}.control-group.success .checkbox,.control-group.success .radio,.control-group.success input,.control-group.success select,.control-group.success textarea{color:"
            + t.badgeSuccess + "}.control-group.success input,.control-group.success select,.control-group.success textarea{border-color:"
            + t.badgeSuccess + ";-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.control-group.success input:focus,.control-group.success select:focus,.control-group.success textarea:focus{border-color:#356635;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b;-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #7aba7b}.control-group.success .input-prepend .add-on,.control-group.success .input-append .add-on{color:"
            + t.badgeSuccess + ";background-color:#eee;border-color:"
            + t.badgeSuccess + "}.control-group.info .control-label,.control-group.info .help-block,.control-group.info .help-inline{color:"
            + t.infoColor + "}.control-group.info .checkbox,.control-group.info .radio,.control-group.info input,.control-group.info select,.control-group.info textarea{color:"
            + t.infoColor + "}.control-group.info input,.control-group.info select,.control-group.info textarea{border-color:"
            + t.infoColor + ";-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075);box-shadow:inset 0 1px 1px rgba(0,0,0,0.075)}.control-group.info input:focus,.control-group.info select:focus,.control-group.info textarea:focus{border-color:#007399;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #3cf;-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #3cf;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #3cf}.control-group.info .input-prepend .add-on,.control-group.info .input-append .add-on{color:"
            + t.infoColor + ";background-color:#eee;border-color:"
            + t.infoColor + "}input:focus:invalid,textarea:focus:invalid,select:focus:invalid{color:#b94a48;border-color:#ee5f5b}input:focus:invalid:focus,textarea:focus:invalid:focus,select:focus:invalid:focus{border-color:#e9322d;-webkit-box-shadow:0 0 6px #f8b9b7;-moz-box-shadow:0 0 6px #f8b9b7;box-shadow:0 0 6px #f8b9b7}.form-actions{padding:19px 20px 20px;margin-top:20px;margin-bottom:20px;background-color:transparent;border-top:1px solid #e5e5e5;*zoom:1}.form-actions:before,.form-actions:after{display:table;line-height:0;content:''}.form-actions:after{clear:both}.help-block,.help-inline{color:"
            + t.codeColor + "}.help-block{display:block;margin-bottom:10px}.help-inline{display:inline-block;*display:inline;padding-left:5px;vertical-align:middle;*zoom:1}.input-append,.input-prepend{display:inline-block;margin-bottom:10px;font-size:0;white-space:nowrap;vertical-align:middle}.input-append input,.input-prepend input,.input-append select,.input-prepend select,.input-append .uneditable-input,.input-prepend .uneditable-input,.input-append .dropdown-menu,.input-prepend .dropdown-menu,.input-append .popover,.input-prepend .popover{font-size:14px}.input-append input,.input-prepend input,.input-append select,.input-prepend select,.input-append .uneditable-input,.input-prepend .uneditable-input{position:relative;margin-bottom:0;*margin-left:0;vertical-align:top;-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-append input:focus,.input-prepend input:focus,.input-append select:focus,.input-prepend select:focus,.input-append .uneditable-input:focus,.input-prepend .uneditable-input:focus{z-index:2}.input-append .add-on,.input-prepend .add-on{display:inline-block;width:auto;height:20px;min-width:16px;padding:4px 5px;font-size:14px;font-weight:normal;line-height:20px;text-align:center;text-shadow:0 1px 0 #fff;background-color:#eee;border:1px solid #ccc}.input-append .add-on,.input-prepend .add-on,.input-append .btn,.input-prepend .btn,.input-append .btn-group>.dropdown-toggle,.input-prepend .btn-group>.dropdown-toggle{vertical-align:top;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.input-append .active,.input-prepend .active{background-color:#bf3;border-color:"
            + t.successColor + "}.input-prepend .add-on,.input-prepend .btn{margin-right:-1px}.input-prepend .add-on:first-child,.input-prepend .btn:first-child{-webkit-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";-moz-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";border-radius: "
            + t.radius + " 0 0 4px}.input-append input,.input-append select,.input-append .uneditable-input{-webkit-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";-moz-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";border-radius: "
            + t.radius + " 0 0 4px}.input-append input+.btn-group .btn:last-child,.input-append select+.btn-group .btn:last-child,.input-append .uneditable-input+.btn-group .btn:last-child{-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-append .add-on,.input-append .btn,.input-append .btn-group{margin-left:-1px}.input-append .add-on:last-child,.input-append .btn:last-child,.input-append .btn-group:last-child>.dropdown-toggle{-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-prepend.input-append input,.input-prepend.input-append select,.input-prepend.input-append .uneditable-input{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.input-prepend.input-append input+.btn-group .btn,.input-prepend.input-append select+.btn-group .btn,.input-prepend.input-append .uneditable-input+.btn-group .btn{-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-prepend.input-append .add-on:first-child,.input-prepend.input-append .btn:first-child{margin-right:-1px;-webkit-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";-moz-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";border-radius: "
            + t.radius + " 0 0 4px}.input-prepend.input-append .add-on:last-child,.input-prepend.input-append .btn:last-child{margin-left:-1px;-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.input-prepend.input-append .btn-group:first-child{margin-left:0}input.search-query{padding-right:14px;padding-right:4px;padding-left:14px;padding-left:4px;margin-bottom:0;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px}.form-search .input-append .search-query,.form-search .input-prepend .search-query{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.form-search .input-append .search-query{-webkit-border-radius:14px 0 0 14px;-moz-border-radius:14px 0 0 14px;border-radius:14px 0 0 14px}.form-search .input-append .btn{-webkit-border-radius:0 14px 14px 0;-moz-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0}.form-search .input-prepend .search-query{-webkit-border-radius:0 14px 14px 0;-moz-border-radius:0 14px 14px 0;border-radius:0 14px 14px 0}.form-search .input-prepend .btn{-webkit-border-radius:14px 0 0 14px;-moz-border-radius:14px 0 0 14px;border-radius:14px 0 0 14px}.form-search input,.form-inline input,.form-horizontal input,.form-search textarea,.form-inline textarea,.form-horizontal textarea,.form-search select,.form-inline select,.form-horizontal select,.form-search .help-inline,.form-inline .help-inline,.form-horizontal .help-inline,.form-search .uneditable-input,.form-inline .uneditable-input,.form-horizontal .uneditable-input,.form-search .input-prepend,.form-inline .input-prepend,.form-horizontal .input-prepend,.form-search .input-append,.form-inline .input-append,.form-horizontal .input-append{display:inline-block;*display:inline;margin-bottom:0;vertical-align:middle;*zoom:1}.form-search .hide,.form-inline .hide,.form-horizontal .hide{display:none}.form-search label,.form-inline label,.form-search .btn-group,.form-inline .btn-group{display:inline-block}.form-search .input-append,.form-inline .input-append,.form-search .input-prepend,.form-inline .input-prepend{margin-bottom:0}.form-search .radio,.form-search .checkbox,.form-inline .radio,.form-inline .checkbox{padding-left:0;margin-bottom:0;vertical-align:middle}.form-search .radio input[type='radio'],.form-search .checkbox input[type='checkbox'],.form-inline .radio input[type='radio'],.form-inline .checkbox input[type='checkbox']{float:left;margin-right:3px;margin-left:0}.control-group{margin-bottom:10px}legend+.control-group{margin-top:20px;-webkit-margin-top-collapse:separate}.form-horizontal .control-group{margin-bottom:20px;*zoom:1}.form-horizontal .control-group:before,.form-horizontal .control-group:after{display:table;line-height:0;content:''}.form-horizontal .control-group:after{clear:both}.form-horizontal .control-label{float:left;width:160px;padding-top:5px;text-align:right}.form-horizontal .controls{*display:inline-block;*padding-left:20px;margin-left:180px;*margin-left:0}.form-horizontal .controls:first-child{*padding-left:180px}.form-horizontal .help-block{margin-bottom:0}.form-horizontal input+.help-block,.form-horizontal select+.help-block,.form-horizontal textarea+.help-block,.form-horizontal .uneditable-input+.help-block,.form-horizontal .input-prepend+.help-block,.form-horizontal .input-append+.help-block{margin-top:10px}.form-horizontal .form-actions{padding-left:180px}table{max-width:100%;background-color:transparent;border-collapse:collapse;border-spacing:0}.table{width:100%;margin-bottom:0}.table th,.table td{padding:8px;line-height:20px;text-align:left;vertical-align:top;border-top:1px solid "
            + t.tableBorderColor + "}.table th{font-weight:bold}.table thead th{vertical-align:bottom}.table caption+thead tr:first-child th,.table caption+thead tr:first-child td,.table colgroup+thead tr:first-child th,.table colgroup+thead tr:first-child td,.table thead:first-child tr:first-child th,.table thead:first-child tr:first-child td{border-top:0}.table tbody+tbody{border-top:2px solid #222}.table .table{background-color:"
            + t.bodyGradientFromColor + "}.table-condensed th,.table-condensed td{padding:4px 5px}.table-bordered{border:1px solid "
            + t.tableBorderColor + ";border-collapse:separate;*border-collapse:collapse;border-left:0;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.table-bordered th,.table-bordered td{border-left:1px solid "
            + t.tableBorderColor + "}.table-bordered caption+thead tr:first-child th,.table-bordered caption+tbody tr:first-child th,.table-bordered caption+tbody tr:first-child td,.table-bordered colgroup+thead tr:first-child th,.table-bordered colgroup+tbody tr:first-child th,.table-bordered colgroup+tbody tr:first-child td,.table-bordered thead:first-child tr:first-child th,.table-bordered tbody:first-child tr:first-child th,.table-bordered tbody:first-child tr:first-child td{border-top:0}.table-bordered thead:first-child tr:first-child>th:first-child,.table-bordered tbody:first-child tr:first-child>td:first-child,.table-bordered tbody:first-child tr:first-child>th:first-child{-webkit-border-top-left-radius: "
            + t.radius + ";border-top-left-radius: "
            + t.radius + ";-moz-border-radius-topleft:4px}.table-bordered thead:first-child tr:first-child>th:last-child,.table-bordered tbody:first-child tr:first-child>td:last-child,.table-bordered tbody:first-child tr:first-child>th:last-child{-webkit-border-top-right-radius: "
            + t.radius + ";border-top-right-radius: "
            + t.radius + ";-moz-border-radius-topright:4px}.table-bordered thead:last-child tr:last-child>th:first-child,.table-bordered tbody:last-child tr:last-child>td:first-child,.table-bordered tbody:last-child tr:last-child>th:first-child,.table-bordered tfoot:last-child tr:last-child>td:first-child,.table-bordered tfoot:last-child tr:last-child>th:first-child{-webkit-border-bottom-left-radius: "
            + t.radius + ";border-bottom-left-radius: "
            + t.radius + ";-moz-border-radius-bottomleft:4px}.table-bordered thead:last-child tr:last-child>th:last-child,.table-bordered tbody:last-child tr:last-child>td:last-child,.table-bordered tbody:last-child tr:last-child>th:last-child,.table-bordered tfoot:last-child tr:last-child>td:last-child,.table-bordered tfoot:last-child tr:last-child>th:last-child{-webkit-border-bottom-right-radius: "
            + t.radius + ";border-bottom-right-radius: "
            + t.radius + ";-moz-border-radius-bottomright:4px}.table-bordered tfoot+tbody:last-child tr:last-child td:first-child{-webkit-border-bottom-left-radius:0;border-bottom-left-radius:0;-moz-border-radius-bottomleft:0}.table-bordered tfoot+tbody:last-child tr:last-child td:last-child{-webkit-border-bottom-right-radius:0;border-bottom-right-radius:0;-moz-border-radius-bottomright:0}.table-bordered caption+thead tr:first-child th:first-child,.table-bordered caption+tbody tr:first-child td:first-child,.table-bordered colgroup+thead tr:first-child th:first-child,.table-bordered colgroup+tbody tr:first-child td:first-child{-webkit-border-top-left-radius: "
            + t.radius + ";border-top-left-radius: "
            + t.radius + ";-moz-border-radius-topleft:4px}.table-bordered caption+thead tr:first-child th:last-child,.table-bordered caption+tbody tr:first-child td:last-child,.table-bordered colgroup+thead tr:first-child th:last-child,.table-bordered colgroup+tbody tr:first-child td:last-child{-webkit-border-top-right-radius: "
            + t.radius + ";border-top-right-radius: "
            + t.radius + ";-moz-border-radius-topright:4px}.table-striped tbody>tr:nth-child(odd)>td,.table-striped tbody>tr:nth-child(odd)>th{background-color:rgba(100,100,100,0.1)}.table-hover tbody tr:hover>td,.table-hover tbody tr:hover>th{background-color:#222}table td[class*='span'],table th[class*='span'],.row-fluid table td[class*='span'],.row-fluid table th[class*='span']{display:table-cell;float:none;margin-left:0}.table td.span1,.table th.span1{float:none;width:44px;margin-left:0}.table td.span2,.table th.span2{float:none;width:124px;margin-left:0}.table td.span3,.table th.span3{float:none;width:204px;margin-left:0}.table td.span4,.table th.span4{float:none;width:284px;margin-left:0}.table td.span5,.table th.span5{float:none;width:364px;margin-left:0}.table td.span6,.table th.span6{float:none;width:444px;margin-left:0}.table td.span7,.table th.span7{float:none;width:524px;margin-left:0}.table td.span8,.table th.span8{float:none;width:604px;margin-left:0}.table td.span9,.table th.span9{float:none;width:684px;margin-left:0}.table td.span10,.table th.span10{float:none;width:764px;margin-left:0}.table td.span11,.table th.span11{float:none;width:844px;margin-left:0}.table td.span12,.table th.span12{float:none;width:924px;margin-left:0}.table tbody tr.success>td{background-color:#eee}.table tbody tr.error>td{background-color:#eee}.table tbody tr.warning>td{background-color:#eee}.table tbody tr.info>td{background-color:#eee}.table-hover tbody tr.success:hover>td{background-color:#e1e1e1}.table-hover tbody tr.error:hover>td{background-color:#e1e1e1}.table-hover tbody tr.warning:hover>td{background-color:#e1e1e1}.table-hover tbody tr.info:hover>td{background-color:#e1e1e1}[class^='icon-'],[class*=' icon-']{display:inline-block;width:14px;height:14px;margin-top:1px;*margin-right:.3em;line-height:14px;vertical-align:text-top;background-image:url('../img/glyphicons-halflings.png');background-position:14px 14px;background-repeat:no-repeat}.icon-white,.nav-pills>.active>a>[class^='icon-'],.nav-pills>.active>a>[class*=' icon-'],.nav-list>.active>a>[class^='icon-'],.nav-list>.active>a>[class*=' icon-'],.navbar-inverse .nav>.active>a>[class^='icon-'],.navbar-inverse .nav>.active>a>[class*=' icon-'],.dropdown-menu>li>a:hover>[class^='icon-'],.dropdown-menu>li>a:focus>[class^='icon-'],.dropdown-menu>li>a:hover>[class*=' icon-'],.dropdown-menu>li>a:focus>[class*=' icon-'],.dropdown-menu>.active>a>[class^='icon-'],.dropdown-menu>.active>a>[class*=' icon-'],.dropdown-submenu:hover>a>[class^='icon-'],.dropdown-submenu:focus>a>[class^='icon-'],.dropdown-submenu:hover>a>[class*=' icon-'],.dropdown-submenu:focus>a>[class*=' icon-']{background-image:url('../img/glyphicons-halflings-white.png')}.icon-glass{background-position:0 0}.icon-music{background-position:-24px 0}.icon-search{background-position:-48px 0}.icon-envelope{background-position:-72px 0}.icon-heart{background-position:-96px 0}.icon-star{background-position:-120px 0}.icon-star-empty{background-position:-144px 0}.icon-user{background-position:-168px 0}.icon-film{background-position:-192px 0}.icon-th-large{background-position:-216px 0}.icon-th{background-position:-240px 0}.icon-th-list{background-position:-264px 0}.icon-ok{background-position:-288px 0}.icon-remove{background-position:-312px 0}.icon-zoom-in{background-position:-336px 0}.icon-zoom-out{background-position:-360px 0}.icon-off{background-position:-384px 0}.icon-signal{background-position:-408px 0}.icon-cog{background-position:-432px 0}.icon-trash{background-position:-456px 0}.icon-home{background-position:0 -24px}.icon-file{background-position:-24px -24px}.icon-time{background-position:-48px -24px}.icon-road{background-position:-72px -24px}.icon-download-alt{background-position:-96px -24px}.icon-download{background-position:-120px -24px}.icon-upload{background-position:-144px -24px}.icon-inbox{background-position:-168px -24px}.icon-play-circle{background-position:-192px -24px}.icon-repeat{background-position:-216px -24px}.icon-refresh{background-position:-240px -24px}.icon-list-alt{background-position:-264px -24px}.icon-lock{background-position:-287px -24px}.icon-flag{background-position:-312px -24px}.icon-headphones{background-position:-336px -24px}.icon-volume-off{background-position:-360px -24px}.icon-volume-down{background-position:-384px -24px}.icon-volume-up{background-position:-408px -24px}.icon-qrcode{background-position:-432px -24px}.icon-barcode{background-position:-456px -24px}.icon-tag{background-position:0 -48px}.icon-tags{background-position:-25px -48px}.icon-book{background-position:-48px -48px}.icon-bookmark{background-position:-72px -48px}.icon-print{background-position:-96px -48px}.icon-camera{background-position:-120px -48px}.icon-font{background-position:-144px -48px}.icon-bold{background-position:-167px -48px}.icon-italic{background-position:-192px -48px}.icon-text-height{background-position:-216px -48px}.icon-text-width{background-position:-240px -48px}.icon-align-left{background-position:-264px -48px}.icon-align-center{background-position:-288px -48px}.icon-align-right{background-position:-312px -48px}.icon-align-justify{background-position:-336px -48px}.icon-list{background-position:-360px -48px}.icon-indent-left{background-position:-384px -48px}.icon-indent-right{background-position:-408px -48px}.icon-facetime-video{background-position:-432px -48px}.icon-picture{background-position:-456px -48px}.icon-pencil{background-position:0 -72px}.icon-map-marker{background-position:-24px -72px}.icon-adjust{background-position:-48px -72px}.icon-tint{background-position:-72px -72px}.icon-edit{background-position:-96px -72px}.icon-share{background-position:-120px -72px}.icon-check{background-position:-144px -72px}.icon-move{background-position:-168px -72px}.icon-step-backward{background-position:-192px -72px}.icon-fast-backward{background-position:-216px -72px}.icon-backward{background-position:-240px -72px}.icon-play{background-position:-264px -72px}.icon-pause{background-position:-288px -72px}.icon-stop{background-position:-312px -72px}.icon-forward{background-position:-336px -72px}.icon-fast-forward{background-position:-360px -72px}.icon-step-forward{background-position:-384px -72px}.icon-eject{background-position:-408px -72px}.icon-chevron-left{background-position:-432px -72px}.icon-chevron-right{background-position:-456px -72px}.icon-plus-sign{background-position:0 -96px}.icon-minus-sign{background-position:-24px -96px}.icon-remove-sign{background-position:-48px -96px}.icon-ok-sign{background-position:-72px -96px}.icon-question-sign{background-position:-96px -96px}.icon-info-sign{background-position:-120px -96px}.icon-screenshot{background-position:-144px -96px}.icon-remove-circle{background-position:-168px -96px}.icon-ok-circle{background-position:-192px -96px}.icon-ban-circle{background-position:-216px -96px}.icon-arrow-left{background-position:-240px -96px}.icon-arrow-right{background-position:-264px -96px}.icon-arrow-up{background-position:-289px -96px}.icon-arrow-down{background-position:-312px -96px}.icon-share-alt{background-position:-336px -96px}.icon-resize-full{background-position:-360px -96px}.icon-resize-small{background-position:-384px -96px}.icon-plus{background-position:-408px -96px}.icon-minus{background-position:-433px -96px}.icon-asterisk{background-position:-456px -96px}.icon-exclamation-sign{background-position:0 -120px}.icon-gift{background-position:-24px -120px}.icon-leaf{background-position:-48px -120px}.icon-fire{background-position:-72px -120px}.icon-eye-open{background-position:-96px -120px}.icon-eye-close{background-position:-120px -120px}.icon-warning-sign{background-position:-144px -120px}.icon-plane{background-position:-168px -120px}.icon-calendar{background-position:-192px -120px}.icon-random{width:16px;background-position:-216px -120px}.icon-comment{background-position:-240px -120px}.icon-magnet{background-position:-264px -120px}.icon-chevron-up{background-position:-288px -120px}.icon-chevron-down{background-position:-313px -119px}.icon-retweet{background-position:-336px -120px}.icon-shopping-cart{background-position:-360px -120px}.icon-folder-close{width:16px;background-position:-384px -120px}.icon-folder-open{width:16px;background-position:-408px -120px}.icon-resize-vertical{background-position:-432px -119px}.icon-resize-horizontal{background-position:-456px -118px}.icon-hdd{background-position:0 -144px}.icon-bullhorn{background-position:-24px -144px}.icon-bell{background-position:-48px -144px}.icon-certificate{background-position:-72px -144px}.icon-thumbs-up{background-position:-96px -144px}.icon-thumbs-down{background-position:-120px -144px}.icon-hand-right{background-position:-144px -144px}.icon-hand-left{background-position:-168px -144px}.icon-hand-up{background-position:-192px -144px}.icon-hand-down{background-position:-216px -144px}.icon-circle-arrow-right{background-position:-240px -144px}.icon-circle-arrow-left{background-position:-264px -144px}.icon-circle-arrow-up{background-position:-288px -144px}.icon-circle-arrow-down{background-position:-312px -144px}.icon-globe{background-position:-336px -144px}.icon-wrench{background-position:-360px -144px}.icon-tasks{background-position:-384px -144px}.icon-filter{background-position:-408px -144px}.icon-briefcase{background-position:-432px -144px}.icon-fullscreen{background-position:-456px -144px}.dropup,.dropdown{position:relative}.dropdown-toggle{*margin-bottom:-3px}.dropdown-toggle:active,.open .dropdown-toggle{outline:0}.caret{display:inline-block;width:0;height:0;vertical-align:top;border-top:4px solid #000;border-right:4px solid transparent;border-left:4px solid transparent;content:''}.dropdown .caret{margin-top:8px;margin-left:2px}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;list-style:none;background-color:"
            + t.wellBackgroundColor + ";border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);*border-right-width:2px;*border-bottom-width:2px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2);-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{*width:100%;height:1px;margin:9px 1px;*margin:-5px 0 5px;overflow:hidden;background-color:transparent;border-bottom:1px solid "
            + t.tableBorderColor + "}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:normal;line-height:20px;color:"
            + t.bodyFontColor + ";white-space:nowrap}.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-submenu:hover>a,.dropdown-submenu:focus>a{color:#fff;text-decoration:none;background-color:#2ab2e4;background-image:-moz-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.hoverColor + "),to(#1dade2));background-image:-webkit-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:-o-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:linear-gradient(to bottom,"
            + t.hoverColor + ",#1dade2);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff33b5e5',endColorstr='#ff1dade2',GradientType=0)}.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus{color:#fff;text-decoration:none;background-color:#2ab2e4;background-image:-moz-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.hoverColor + "),to(#1dade2));background-image:-webkit-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:-o-linear-gradient(top,"
            + t.hoverColor + ",#1dade2);background-image:linear-gradient(to bottom,"
            + t.hoverColor + ",#1dade2);background-repeat:repeat-x;outline:0;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff33b5e5',endColorstr='#ff1dade2',GradientType=0)}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{color:#adafae}.dropdown-menu>.disabled>a:hover,.dropdown-menu>.disabled>a:focus{text-decoration:none;cursor:default;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open{*z-index:1000}.open>.dropdown-menu{display:block}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{border-top:0;border-bottom:4px solid #000;content:''}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:1px}.dropdown-submenu{position:relative}.dropdown-submenu>.dropdown-menu{top:0;left:100%;margin-top:-6px;margin-left:-1px;-webkit-border-radius:0 6px 6px 6px;-moz-border-radius:0 6px 6px 6px;border-radius:0 6px 6px 6px}.dropdown-submenu:hover>.dropdown-menu{display:block}.dropup .dropdown-submenu>.dropdown-menu{top:auto;bottom:0;margin-top:0;margin-bottom:-2px;-webkit-border-radius:5px 5px 5px 0;-moz-border-radius:5px 5px 5px 0;border-radius:5px 5px 5px 0}.dropdown-submenu>a:after{display:block;float:right;width:0;height:0;margin-top:5px;margin-right:-10px;border-color:transparent;border-left-color:#000;border-style:solid;border-width:5px 0 5px 5px;content:' '}.dropdown-submenu:hover>a:after{border-left-color:#fff}.dropdown-submenu.pull-left{float:none}.dropdown-submenu.pull-left>.dropdown-menu{left:-100%;margin-left:10px;-webkit-border-radius:6px 0 6px 6px;-moz-border-radius:6px 0 6px 6px;border-radius:6px 0 6px 6px}.dropdown .dropdown-menu .nav-header{padding-right:20px;padding-left:20px}.typeahead{z-index:1051;margin-top:2px;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.well{min-height:20px;padding:0!important;margin-bottom:2px!important;background-color:"
            + t.wellBackgroundColor + ";border:0!important;-webkit-border-radius:0!important;-moz-border-radius:0!important;border-radius:0!important;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,0.05);-moz-box-shadow:inset 0 1px 1px rgba(0,0,0,0.05);box-shadow:inset 0 1px 1px rgba(0,0,0,0.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,0.15)}.well-large{padding:24px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.well-small{padding:9px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.fade{opacity:0;-webkit-transition:opacity .15s linear;-moz-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;-moz-transition:height .35s ease;-o-transition:height .35s ease;transition:height .35s ease}.collapse.in{height:auto}.close{float:right;font-size:20px;font-weight:bold;line-height:20px;color:#000;text-shadow:0 1px 0 #fff;opacity:.2;filter:alpha(opacity=20)}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer;opacity:.4;filter:alpha(opacity=40)}button.close{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.btn{display:inline-block;*display:inline;padding:4px 12px;margin-bottom:0;*margin-left:.3em;font-size:14px;line-height:20px;color:#222;text-align:center;text-shadow:0 1px 1px rgba(255,255,255,0.75);vertical-align:middle;cursor:pointer;background-color:#616161;*background-color:#595959;background-image:-moz-linear-gradient(top,#666,#595959);background-image:-webkit-gradient(linear,0 0,0 100%,from(#666),to(#595959));background-image:-webkit-linear-gradient(top,#666,#595959);background-image:-o-linear-gradient(top,#666,#595959);background-image:linear-gradient(to bottom,#666,#595959);background-repeat:repeat-x;border:1px solid rgba(0,0,0,0);*border:0;border-color:#595959 #595959 #333;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);border-bottom-color:rgba(0,0,0,0);-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff666666',endColorstr='#ff595959',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);*zoom:1}" +
            ".btn,.btn:hover{text-shadow:none;background-image:none;border:0;-webkit-box-shadow:-2px 2px 0 rgba(0,0,0,0.2);-moz-box-shadow:-2px 2px 0 rgba(0,0,0,0.2);box-shadow:-2px 2px 0 rgba(0,0,0,0.2)}.btn:hover,.btn:focus{color:#333;text-decoration:none;background-position:0 -15px;-webkit-transition:background-position .1s linear;-moz-transition:background-position .1s linear;-o-transition:background-position .1s linear;transition:background-position .1s linear}.btn:hover,.btn:focus,.btn:active,.btn.active,.btn.disabled,.btn[disabled]{color:#222;background-color:#595959;*background-color:#4d4d4d}.btn:active,.btn.active{background-color:#404040 }.btn:first-child{*margin-left:0}.btn:hover,.btn:focus{color:#222;text-decoration:none;background-position:0 -15px;-webkit-transition:background-position .1s linear;-moz-transition:background-position .1s linear;-o-transition:background-position .1s linear;transition:background-position .1s linear}.btn:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.active,.btn:active{background-image:none;outline:0;-webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05)}.btn.disabled,.btn[disabled]{cursor:default;background-image:none;opacity:.65;filter:alpha(opacity=65);-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.btn-large{padding:11px 19px;font-size:17.5px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.btn-large [class^='icon-'],.btn-large [class*=' icon-']{margin-top:4px}.btn-small{padding:2px 10px;font-size:11.9px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.btn-small [class^='icon-'],.btn-small [class*=' icon-']{margin-top:0}.btn-mini [class^='icon-'],.btn-mini [class*=' icon-']{margin-top:-1px}.btn-mini{padding:0 6px;font-size:10.5px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.btn-block{display:block;width:100%;padding-right:0;padding-left:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.btn-block+.btn-block{margin-top:5px}input[type='submit'].btn-block,input[type='reset'].btn-block,input[type='button'].btn-block{width:100%}.btn-primary.active,.btn-warning.active,.btn-danger.active,.btn-success.active,.btn-info.active,.btn-inverse.active{color:rgba(255,255,255,0.75)}.btn-primary{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#008ab8;*background-color:#007399;background-image:-moz-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.infoColor + "),to(#007399));background-image:-webkit-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:-o-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:linear-gradient(to bottom,"
            + t.infoColor + ",#007399);background-repeat:repeat-x;border-color:#007399 #007399 #00394d;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0099cc',endColorstr='#ff007399',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-primary:hover,.btn-primary:focus,.btn-primary:active,.btn-primary.active,.btn-primary.disabled,.btn-primary[disabled]{color:#fff;background-color:#007399;*background-color:#006080}.btn-primary:active,.btn-primary.active{background-color:#004d66 }.btn-warning{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#ff9d2e;*background-color:#f80;background-image:-moz-linear-gradient(top,#ffac4d,#f80);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ffac4d),to(#f80));background-image:-webkit-linear-gradient(top,#ffac4d,#f80);background-image:-o-linear-gradient(top,#ffac4d,#f80);background-image:linear-gradient(to bottom,#ffac4d,#f80);background-repeat:repeat-x;border-color:#f80 #f80 #b35f00;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffac4d',endColorstr='#ffff8800',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-warning:hover,.btn-warning:focus,.btn-warning:active,.btn-warning.active,.btn-warning.disabled,.btn-warning[disabled]{color:#fff;background-color:#f80;*background-color:#e67a00}.btn-warning:active,.btn-warning.active{background-color:#cc6d00 }.btn-danger{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#eb0000;*background-color:"
            + t.errorColor + ";background-image:-moz-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#f00),to("
            + t.errorColor + "));background-image:-webkit-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:-o-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:linear-gradient(to bottom,#f00,"
            + t.errorColor + ");background-repeat:repeat-x;border-color:"
            + t.errorColor + " "
            + t.errorColor + " #800000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff0000',endColorstr='#ffcc0000',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-danger:hover,.btn-danger:focus,.btn-danger:active,.btn-danger.active,.btn-danger.disabled,.btn-danger[disabled]{color:#fff;background-color:"
            + t.errorColor + ";*background-color:#b30000}.btn-danger:active,.btn-danger.active{background-color:#900 }.btn-success{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#7ab800;*background-color:"
            + t.successColor + ";background-image:-moz-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#8c0),to("
            + t.successColor + "));background-image:-webkit-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:-o-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:linear-gradient(to bottom,#8c0,"
            + t.successColor + ");background-repeat:repeat-x;border-color:"
            + t.successColor + " "
            + t.successColor + " #334d00;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff88cc00',endColorstr='#ff669900',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-success:hover,.btn-success:focus,.btn-success:active,.btn-success.active,.btn-success.disabled,.btn-success[disabled]{color:#fff;background-color:"
            + t.successColor + ";*background-color:#558000}.btn-success:active,.btn-success.active{background-color:#460 }.btn-info{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#292929;*background-color:#191919;background-image:-moz-linear-gradient(top,#333,#191919);background-image:-webkit-gradient(linear,0 0,0 100%,from(#333),to(#191919));background-image:-webkit-linear-gradient(top,#333,#191919);background-image:-o-linear-gradient(top,#333,#191919);background-image:linear-gradient(to bottom,#333,#191919);background-repeat:repeat-x;border-color:#191919 #191919 #000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff333333',endColorstr='#ff191919',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-info:hover,.btn-info:focus,.btn-info:active,.btn-info.active,.btn-info.disabled,.btn-info[disabled]{color:#fff;background-color:#191919;*background-color:#0d0d0d}.btn-info:active,.btn-info.active{background-color:#000 }.btn-inverse{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#9f3fcf;*background-color:"
            + t.inverseColor + ";background-image:-moz-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#a347d1),to("
            + t.inverseColor + "));background-image:-webkit-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:-o-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:linear-gradient(to bottom,#a347d1,"
            + t.inverseColor + ");background-repeat:repeat-x;border-color:"
            + t.inverseColor + " "
            + t.inverseColor + " #6b248f;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffa347d1',endColorstr='#ff9933cc',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-inverse:hover,.btn-inverse:focus,.btn-inverse:active,.btn-inverse.active,.btn-inverse.disabled,.btn-inverse[disabled]{color:#fff;background-color:"
            + t.inverseColor + ";*background-color:#8a2eb8}.btn-inverse:active,.btn-inverse.active{background-color:#7a29a3}button.btn,input[type='submit'].btn{*padding-top:3px;*padding-bottom:3px}button.btn::-moz-focus-inner,input[type='submit'].btn::-moz-focus-inner{padding:0;border:0}button.btn.btn-large,input[type='submit'].btn.btn-large{*padding-top:7px;*padding-bottom:7px}button.btn.btn-small,input[type='submit'].btn.btn-small{*padding-top:3px;*padding-bottom:3px}button.btn.btn-mini,input[type='submit'].btn.btn-mini{*padding-top:1px;*padding-bottom:1px}.btn-link,.btn-link:active,.btn-link[disabled]{background-color:transparent;background-image:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.btn-link{color:"
            + t.hoverColor + ";cursor:pointer;border-color:transparent;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.btn-link:hover,.btn-link:focus{color:#fff;text-decoration:underline;background-color:transparent}.btn-link[disabled]:hover,.btn-link[disabled]:focus{color:#222;text-decoration:none}.btn-group{position:relative;display:inline-block;*display:inline;*margin-left:.3em;font-size:0;white-space:nowrap;vertical-align:middle;*zoom:1}.btn-group:first-child{*margin-left:0}.btn-group+.btn-group{margin-left:5px}.btn-toolbar{margin-top:10px;margin-bottom:10px;font-size:0}.btn-toolbar>.btn+.btn,.btn-toolbar>.btn-group+.btn,.btn-toolbar>.btn+.btn-group{margin-left:5px}.btn-group>.btn{position:relative;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.btn-group>.btn+.btn{margin-left:-1px}.btn-group>.btn,.btn-group>.dropdown-menu,.btn-group>.popover{font-size:14px}.btn-group>.btn-mini{font-size:10.5px}.btn-group>.btn-small{font-size:11.9px}.btn-group>.btn-large{font-size:17.5px}.btn-group>.btn:first-child{margin-left:0;-webkit-border-bottom-left-radius: "
            + t.radius + ";border-bottom-left-radius: "
            + t.radius + ";-webkit-border-top-left-radius: "
            + t.radius + ";border-top-left-radius: "
            + t.radius + ";-moz-border-radius-bottomleft:4px;-moz-border-radius-topleft:4px}.btn-group>.btn:last-child,.btn-group>.dropdown-toggle{-webkit-border-top-right-radius: "
            + t.radius + ";border-top-right-radius: "
            + t.radius + ";-webkit-border-bottom-right-radius: "
            + t.radius + ";border-bottom-right-radius: "
            + t.radius + ";-moz-border-radius-topright:4px;-moz-border-radius-bottomright:4px}.btn-group>.btn.large:first-child{margin-left:0;-webkit-border-bottom-left-radius:6px;border-bottom-left-radius:6px;-webkit-border-top-left-radius:6px;border-top-left-radius:6px;-moz-border-radius-bottomleft:6px;-moz-border-radius-topleft:6px}.btn-group>.btn.large:last-child,.btn-group>.large.dropdown-toggle{-webkit-border-top-right-radius:6px;border-top-right-radius:6px;-webkit-border-bottom-right-radius:6px;border-bottom-right-radius:6px;-moz-border-radius-topright:6px;-moz-border-radius-bottomright:6px}.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active{z-index:2}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{*padding-top:5px;padding-right:8px;*padding-bottom:5px;padding-left:8px;-webkit-box-shadow:inset 1px 0 0 rgba(255,255,255,0.125),inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:inset 1px 0 0 rgba(255,255,255,0.125),inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 1px 0 0 rgba(255,255,255,0.125),inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05)}.btn-group>.btn-mini+.dropdown-toggle{*padding-top:2px;padding-right:5px;*padding-bottom:2px;padding-left:5px}.btn-group>.btn-small+.dropdown-toggle{*padding-top:5px;*padding-bottom:4px}.btn-group>.btn-large+.dropdown-toggle{*padding-top:7px;padding-right:12px;*padding-bottom:7px;padding-left:12px}.btn-group.open .dropdown-toggle{background-image:none;-webkit-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05);box-shadow:inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05)}.btn-group.open .btn.dropdown-toggle{background-color:#595959}.btn-group.open .btn-primary.dropdown-toggle{background-color:#007399}.btn-group.open .btn-warning.dropdown-toggle{background-color:#f80}.btn-group.open .btn-danger.dropdown-toggle{background-color:"
            + t.errorColor + "}.btn-group.open .btn-success.dropdown-toggle{background-color:"
            + t.successColor + "}.btn-group.open .btn-info.dropdown-toggle{background-color:#191919}.btn-group.open .btn-inverse.dropdown-toggle{background-color:"
            + t.inverseColor + "}.btn .caret{margin-top:8px;margin-left:0}.btn-large .caret{margin-top:6px}.btn-large .caret{border-top-width:5px;border-right-width:5px;border-left-width:5px}.btn-mini .caret,.btn-small .caret{margin-top:8px}.dropup .btn-large .caret{border-bottom-width:5px}.btn-primary .caret,.btn-warning .caret,.btn-danger .caret,.btn-info .caret,.btn-success .caret,.btn-inverse .caret{border-top-color:#fff;border-bottom-color:#fff}.btn-group-vertical{display:inline-block;*display:inline;*zoom:1}.btn-group-vertical>.btn{display:block;float:none;max-width:100%;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.btn-group-vertical>.btn+.btn{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:first-child{-webkit-border-radius: "
            + t.radius + " 4px 0 0;-moz-border-radius: "
            + t.radius + " 4px 0 0;border-radius: "
            + t.radius + " 4px 0 0}.btn-group-vertical>.btn:last-child{-webkit-border-radius:0 0 4px 4px;-moz-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px}.btn-group-vertical>.btn-large:first-child{-webkit-border-radius:6px 6px 0 0;-moz-border-radius:6px 6px 0 0;border-radius:6px 6px 0 0}.btn-group-vertical>.btn-large:last-child{-webkit-border-radius:0 0 6px 6px;-moz-border-radius:0 0 6px 6px;border-radius:0 0 6px 6px}.alert{padding:8px 35px 8px 14px;margin-bottom:20px;text-shadow:0 1px 0 rgba(255,255,255,0.5);background-color:#eee;border:1px solid transparent;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.alert,.alert h4{color:#a47e3c}.alert h4{margin:0}.alert .close{position:relative;top:-2px;right:-21px;line-height:20px}.alert-success{color:"
            + t.badgeSuccess + ";background-color:#eee;border-color:#e1e1e1}.alert-success h4{color:"
            + t.badgeSuccess + "}.alert-danger,.alert-error{color:#b94a48;background-color:#eee;border-color:#e6e6e6}.alert-danger h4,.alert-error h4{color:#b94a48}.alert-info{color:"
            + t.infoColor + ";background-color:#eee;border-color:#dcdcdc}.alert-info h4{color:"
            + t.infoColor + "}.alert-block{padding-top:14px;padding-bottom:14px}.alert-block>p,.alert-block>ul{margin-bottom:0}.alert-block p+p{margin-top:5px}.nav{margin-bottom:20px;margin-left:0;list-style:none}.nav>li>a{display:block}.nav>li>a:hover,.nav>li>a:focus{text-decoration:none;background-color:#eee}.nav>li>a>img{max-width:none}.nav>.pull-right{float:right}.nav-header{display:block;padding:3px 15px;font-size:11px;font-weight:bold;line-height:20px;color:#adafae;text-shadow:0 1px 0 rgba(255,255,255,0.5);text-transform:uppercase}.nav li+.nav-header{margin-top:9px}.nav-list{padding-right:15px;padding-left:15px;margin-bottom:0}.nav-list>li>a,.nav-list .nav-header{margin-right:-15px;margin-left:-15px;text-shadow:0 1px 0 rgba(255,255,255,0.5)}.nav-list>li>a{padding:3px 15px}.nav-list>.active>a,.nav-list>.active>a:hover,.nav-list>.active>a:focus{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.2);background-color:"
            + t.hoverColor + "}.nav-list [class^='icon-'],.nav-list [class*=' icon-']{margin-right:2px}.nav-list .divider{*width:100%;height:1px;margin:9px 1px;*margin:-5px 0 5px;overflow:hidden;background-color:#e5e5e5;border-bottom:1px solid #fff}.nav-tabs,.nav-pills{*zoom:1}.nav-tabs:before,.nav-pills:before,.nav-tabs:after,.nav-pills:after{display:table;line-height:0;content:''}.nav-tabs:after,.nav-pills:after{clear:both}.nav-tabs>li,.nav-pills>li{float:left}.nav-tabs>li>a,.nav-pills>li>a{padding-right:12px;padding-left:12px;margin-right:2px;line-height:14px}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{margin-bottom:-1px}.nav-tabs>li>a{padding-top:8px;padding-bottom:8px;line-height:20px;border:1px solid transparent;-webkit-border-radius: "
            + t.radius + " 4px 0 0;-moz-border-radius: "
            + t.radius + " 4px 0 0;border-radius: "
            + t.radius + " 4px 0 0}.nav-tabs>li>a:hover,.nav-tabs>li>a:focus{border-color:#eee #eee #ddd}.nav-tabs>.active>a,.nav-tabs>.active>a:hover,.nav-tabs>.active>a:focus{color:"
            + t.bodyFontColor + ";cursor:default;background-color:"
            + t.bodyGradientFromColor + ";border:1px solid #ddd;border-bottom-color:transparent}.nav-pills>li>a{padding-top:8px;padding-bottom:8px;margin-top:2px;margin-bottom:2px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.nav-pills>.active>a,.nav-pills>.active>a:hover,.nav-pills>.active>a:focus{color:#fff;background-color:"
            + t.hoverColor + "}.nav-stacked>li{float:none}.nav-stacked>li>a{margin-right:0}.nav-tabs.nav-stacked{border-bottom:0}.nav-tabs.nav-stacked>li>a{border:1px solid #ddd;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}"
            + ".nav-tabs.nav-stacked>li>a:hover,.nav-tabs.nav-stacked>li>a:focus{z-index:2;border-color:#ddd}.nav-pills.nav-stacked>li>a{margin-bottom:3px}.nav-pills.nav-stacked>li:last-child>a{margin-bottom:1px}.nav-tabs .dropdown-menu{-webkit-border-radius:0 0 6px 6px;-moz-border-radius:0 0 6px 6px;border-radius:0 0 6px 6px}.nav-pills .dropdown-menu{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.nav .dropdown-toggle .caret{margin-top:6px;border-top-color:"
            + t.hoverColor + ";border-bottom-color:"
            + t.hoverColor + "}.nav .dropdown-toggle:hover .caret,.nav .dropdown-toggle:focus .caret{border-top-color:#fff;border-bottom-color:#fff}.nav-tabs .dropdown-toggle .caret{margin-top:8px}.nav .active .dropdown-toggle .caret{border-top-color:#fff;border-bottom-color:#fff}.nav-tabs .active .dropdown-toggle .caret{border-top-color:"
            + t.bodyFontColor + ";border-bottom-color:"
            + t.bodyFontColor + "}.nav>.dropdown.active>a:hover,.nav>.dropdown.active>a:focus{cursor:pointer}.nav-tabs .open .dropdown-toggle,.nav-pills .open .dropdown-toggle,.nav>li.dropdown.open.active>a:hover,.nav>li.dropdown.open.active>a:focus{color:#fff;background-color:#adafae;border-color:#adafae}.nav li.dropdown.open .caret,.nav li.dropdown.open.active .caret,.nav li.dropdown.open a:hover .caret,.nav li.dropdown.open a:focus .caret{border-top-color:#fff;border-bottom-color:#fff;opacity:1;filter:alpha(opacity=100)}.tabs-stacked .open>a:hover,.tabs-stacked .open>a:focus{border-color:#adafae}.tabbable{*zoom:1}.tabbable:before,.tabbable:after{display:table;line-height:0;content:''}.tabbable:after{clear:both}.tab-content{overflow:auto}.tabs-below>.nav-tabs,.tabs-right>.nav-tabs,.tabs-left>.nav-tabs{border-bottom:0}.tab-content>.tab-pane,.pill-content>.pill-pane{display:none}.tab-content>.active,.pill-content>.active{display:block}.tabs-below>.nav-tabs{border-top:1px solid #ddd}.tabs-below>.nav-tabs>li{margin-top:-1px;margin-bottom:0}.tabs-below>.nav-tabs>li>a{-webkit-border-radius:0 0 4px 4px;-moz-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px}.tabs-below>.nav-tabs>li>a:hover,.tabs-below>.nav-tabs>li>a:focus{border-top-color:#ddd;border-bottom-color:transparent}.tabs-below>.nav-tabs>.active>a,.tabs-below>.nav-tabs>.active>a:hover,.tabs-below>.nav-tabs>.active>a:focus{border-color:transparent #ddd #ddd #ddd}.tabs-left>.nav-tabs>li,.tabs-right>.nav-tabs>li{float:none}.tabs-left>.nav-tabs>li>a,.tabs-right>.nav-tabs>li>a{min-width:74px;margin-right:0;margin-bottom:3px}.tabs-left>.nav-tabs{float:left;margin-right:19px;border-right:1px solid #ddd}.tabs-left>.nav-tabs>li>a{margin-right:-1px;-webkit-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";-moz-border-radius: "
            + t.radius + " 0 0 "
            + t.radius + ";border-radius: "
            + t.radius + " 0 0 4px}.tabs-left>.nav-tabs>li>a:hover,.tabs-left>.nav-tabs>li>a:focus{border-color:#eee #ddd #eee #eee}.tabs-left>.nav-tabs .active>a,.tabs-left>.nav-tabs .active>a:hover,.tabs-left>.nav-tabs .active>a:focus{border-color:#ddd transparent #ddd #ddd;*border-right-color:#fff}.tabs-right>.nav-tabs{float:right;margin-left:19px;border-left:1px solid #ddd}.tabs-right>.nav-tabs>li>a{margin-left:-1px;-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0}.tabs-right>.nav-tabs>li>a:hover,.tabs-right>.nav-tabs>li>a:focus{border-color:#eee #eee #eee #ddd}.tabs-right>.nav-tabs .active>a,.tabs-right>.nav-tabs .active>a:hover,.tabs-right>.nav-tabs .active>a:focus{border-color:#ddd #ddd #ddd transparent;*border-left-color:#fff}.nav>.disabled>a{color:#adafae}.nav>.disabled>a:hover,.nav>.disabled>a:focus{text-decoration:none;cursor:default;background-color:transparent}.navbar{*position:relative;*z-index:2;margin-bottom:0;overflow:visible}.navbar-inner{min-height:24px;padding:0px 0px 2px 0px !important;font-size:1.0;line-height:24px;color:#fff;background-color:"
            + t.navBackgroundColor + ";background-image:-moz-linear-gradient(top,"
            + t.navBackgroundColor + ","
            + t.navBackgroundColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.navBackgroundColor + "),to("
            + t.navBackgroundColor + "));background-image:-webkit-linear-gradient(top,"
            + t.navBackgroundColor + ","
            + t.navBackgroundColor + ");background-image:-o-linear-gradient(top,"
            + t.navBackgroundColor + ","
            + t.navBackgroundColor + ");background-image:linear-gradient(to bottom,"
            + t.navBackgroundColor + ","
            + t.navBackgroundColor + ");background-repeat:repeat-x;border:1px solid #000;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff020202',endColorstr='#ff020202',GradientType=0);*zoom:1;-webkit-box-shadow:0 1px 4px rgba(0,0,0,0.065);-moz-box-shadow:0 1px 4px rgba(0,0,0,0.065);box-shadow:0 1px 4px rgba(0,0,0,0.065)}.navbar-inner:before,.navbar-inner:after{display:table;line-height:0;content:''}.navbar-inner:after{clear:both}.navbar .container{width:auto}.nav-collapse.collapse{height:auto;overflow:visible}.navbar .brand{display:block;float:left;padding:15px 20px 15px;margin-left:-20px;font-size:20px;font-weight:200;color:#adafae;text-shadow:0 1px 0 "
            + t.navBackgroundColor + "}.navbar .brand:hover,.navbar .brand:focus{text-decoration:none}.navbar-text{margin-bottom:0;line-height:50px;color:#adafae}.navbar-link{color:#adafae}.navbar-link:hover,.navbar-link:focus{color:#fff}.navbar .divider-vertical{height:50px;margin:0 9px;border-right:1px solid "
            + t.navBackgroundColor + ";border-left:1px solid "
            + t.navBackgroundColor + "}.navbar .btn,.navbar .btn-group{margin-top:10px}.navbar .btn-group .btn,.navbar .input-prepend .btn,.navbar .input-append .btn,.navbar .input-prepend .btn-group,.navbar .input-append .btn-group{margin-top:0}.navbar-form{margin-bottom:0;*zoom:1}.navbar-form:before,.navbar-form:after{display:table;line-height:0;content:''}.navbar-form:after{clear:both}.navbar-form input,.navbar-form select,.navbar-form .radio,.navbar-form .checkbox{margin-top:10px}.navbar-form input,.navbar-form select,.navbar-form .btn{display:inline-block;margin-bottom:0}.navbar-form input[type='image'],.navbar-form input[type='checkbox'],.navbar-form input[type='radio']{margin-top:3px}.navbar-form .input-append,.navbar-form .input-prepend{margin-top:5px;white-space:nowrap}.navbar-form .input-append input,.navbar-form .input-prepend input{margin-top:0}.navbar-search{position:relative;float:left;margin-top:10px;margin-bottom:0}.navbar-search .search-query{padding:4px 14px;margin-bottom:0;font-family:'Droid Sans',sans-serif;font-size:13px;font-weight:normal;line-height:1;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px}.navbar-static-top{position:static;margin-bottom:0}.navbar-static-top .navbar-inner{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.navbar-fixed-top,.navbar-fixed-bottom{position:fixed;right:0;left:0;z-index:1030;margin-bottom:0}.navbar-fixed-top .navbar-inner,.navbar-static-top .navbar-inner{border-width:0 0 1px}.navbar-fixed-bottom .navbar-inner{border-width:1px 0 0}.navbar-fixed-top .navbar-inner,.navbar-fixed-bottom .navbar-inner{padding-right:0;padding-left:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.navbar-static-top .container,.navbar-fixed-top .container,.navbar-fixed-bottom .container{width:940px}.navbar-fixed-top{top:0}.navbar-fixed-top .navbar-inner,.navbar-static-top .navbar-inner{-webkit-box-shadow:0 1px 10px rgba(0,0,0,0.1);-moz-box-shadow:0 1px 10px rgba(0,0,0,0.1);box-shadow:0 1px 10px rgba(0,0,0,0.1)}.navbar-fixed-bottom{bottom:0}.navbar-fixed-bottom .navbar-inner{-webkit-box-shadow:0 -1px 10px rgba(0,0,0,0.1);-moz-box-shadow:0 -1px 10px rgba(0,0,0,0.1);box-shadow:0 -1px 10px rgba(0,0,0,0.1)}.navbar .nav{position:relative;left:0;display:block;float:left;margin:0 10px 0 0}.navbar .nav.pull-right{float:right;margin-right:0}.navbar .nav>li{float:left}.navbar .nav>li>a{float:none;padding:15px 15px 15px;color:#adafae;text-decoration:none;text-shadow:0 1px 0 "
            + t.navBackgroundColor + "}.navbar .nav .dropdown-toggle .caret{margin-top:8px}.navbar .nav>li>a:focus,.navbar .nav>li>a:hover{color:#fff;text-decoration:none;background-color:transparent}.navbar .nav>.active>a,.navbar .nav>.active>a:hover,.navbar .nav>.active>a:focus{color:#fff;text-decoration:none;background-color:"
            + t.navBackgroundColor + ";-webkit-box-shadow:inset 0 3px 8px rgba(0,0,0,0.125);-moz-box-shadow:inset 0 3px 8px rgba(0,0,0,0.125);box-shadow:inset 0 3px 8px rgba(0,0,0,0.125)}.navbar .btn-navbar{display:none;float:right;padding:7px 10px;margin-right:5px;margin-left:5px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#000;*background-color:#000;background-image:-moz-linear-gradient(top,#000,#000);background-image:-webkit-gradient(linear,0 0,0 100%,from(#000),to(#000));background-image:-webkit-linear-gradient(top,#000,#000);background-image:-o-linear-gradient(top,#000,#000);background-image:linear-gradient(to bottom,#000,#000);background-repeat:repeat-x;border-color:#000 #000 #000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff000000',endColorstr='#ff000000',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.075);-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.075);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 1px 0 rgba(255,255,255,0.075)}.navbar .btn-navbar:hover,.navbar .btn-navbar:focus,.navbar .btn-navbar:active,.navbar .btn-navbar.active,.navbar .btn-navbar.disabled,.navbar .btn-navbar[disabled]{color:#fff;background-color:#000;*background-color:#000}.navbar .btn-navbar:active,.navbar .btn-navbar.active{background-color:#000 }.navbar .btn-navbar .icon-bar{display:block;width:18px;height:2px;background-color:#f5f5f5;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px;-webkit-box-shadow:0 1px 0 rgba(0,0,0,0.25);-moz-box-shadow:0 1px 0 rgba(0,0,0,0.25);box-shadow:0 1px 0 rgba(0,0,0,0.25)}.btn-navbar .icon-bar+.icon-bar{margin-top:3px}.navbar .nav>li>.dropdown-menu:before{position:absolute;top:-7px;left:9px;display:inline-block;border-right:7px solid transparent;border-bottom:7px solid #ccc;border-left:7px solid transparent;border-bottom-color:rgba(0,0,0,0.2);content:''}.navbar .nav>li>.dropdown-menu:after{position:absolute;top:-6px;left:10px;display:inline-block;border-right:6px solid transparent;border-bottom:6px solid "
            + t.wellBackgroundColor + ";border-left:6px solid transparent;content:''}.navbar-fixed-bottom .nav>li>.dropdown-menu:before{top:auto;bottom:-7px;border-top:7px solid #ccc;border-bottom:0;border-top-color:rgba(0,0,0,0.2)}.navbar-fixed-bottom .nav>li>.dropdown-menu:after{top:auto;bottom:-6px;border-top:6px solid "
            + t.wellBackgroundColor + ";border-bottom:0}.navbar .nav li.dropdown>a:hover .caret,.navbar .nav li.dropdown>a:focus .caret{border-top-color:#fff;border-bottom-color:#fff}.navbar .nav li.dropdown.open>.dropdown-toggle,.navbar .nav li.dropdown.active>.dropdown-toggle,.navbar .nav li.dropdown.open.active>.dropdown-toggle{color:#fff;background-color:"
            + t.navBackgroundColor + "}.navbar .nav li.dropdown>.dropdown-toggle .caret{border-top-color:#adafae;border-bottom-color:#adafae}.navbar .nav li.dropdown.open>.dropdown-toggle .caret,.navbar .nav li.dropdown.active>.dropdown-toggle .caret,.navbar .nav li.dropdown.open.active>.dropdown-toggle .caret{border-top-color:#fff;border-bottom-color:#fff}.navbar .pull-right>li>.dropdown-menu,.navbar .nav>li>.dropdown-menu.pull-right{right:0;left:auto}.navbar .pull-right>li>.dropdown-menu:before,.navbar .nav>li>.dropdown-menu.pull-right:before{right:12px;left:auto}.navbar .pull-right>li>.dropdown-menu:after,.navbar .nav>li>.dropdown-menu.pull-right:after{right:13px;left:auto}.navbar .pull-right>li>.dropdown-menu .dropdown-menu,.navbar .nav>li>.dropdown-menu.pull-right .dropdown-menu{right:100%;left:auto;margin-right:-1px;margin-left:0;-webkit-border-radius:6px 0 6px 6px;-moz-border-radius:6px 0 6px 6px;border-radius:6px 0 6px 6px}.navbar-inverse .navbar-inner{background-color:"
            + t.navBarInnerBackgroundColor + ";background-image:-moz-linear-gradient(top,"
            + t.navBarInnerBackgroundColor + ","
            + t.navBarInnerBackgroundColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.navBarInnerBackgroundColor + "),to("
            + t.navBarInnerBackgroundColor + "));background-image:-webkit-linear-gradient(top,"
            + t.navBarInnerBackgroundColor + ","
            + t.navBarInnerBackgroundColor + ");background-image:-o-linear-gradient(top,"
            + t.navBarInnerBackgroundColor + ","
            + t.navBarInnerBackgroundColor + ");background-image:linear-gradient(to bottom,"
            + t.navBarInnerBackgroundColor + ","
            + t.navBarInnerBackgroundColor + ");background-repeat:repeat-x;border-color:transparent;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff252a30',endColorstr='#ff252a30',GradientType=0)}.navbar-inverse .brand,.navbar-inverse .nav>li>a{color:#adafae;text-shadow:0 -1px 0 rgba(0,0,0,0.25)}.navbar-inverse .brand:hover,.navbar-inverse .nav>li>a:hover,.navbar-inverse .brand:focus,.navbar-inverse .nav>li>a:focus{color:#fff}.navbar-inverse .brand{color:#adafae}.navbar-inverse .navbar-text{color:#adafae}.navbar-inverse .nav>li>a:focus,.navbar-inverse .nav>li>a:hover{color:#fff;background-color:#242a31}.navbar-inverse .nav .active>a,.navbar-inverse .nav .active>a:hover,.navbar-inverse .nav .active>a:focus{color:#fff;background-color:#242a31}.navbar-inverse .navbar-link{color:#adafae}.navbar-inverse .navbar-link:hover,.navbar-inverse .navbar-link:focus{color:#fff}.navbar-inverse .divider-vertical{border-right-color:"
            + t.navBarInnerBackgroundColor + ";border-left-color:"
            + t.navBarInnerBackgroundColor + "}.navbar-inverse .nav li.dropdown.open>.dropdown-toggle,.navbar-inverse .nav li.dropdown.active>.dropdown-toggle,.navbar-inverse .nav li.dropdown.open.active>.dropdown-toggle{color:#fff;background-color:#242a31}.navbar-inverse .nav li.dropdown>a:hover .caret,.navbar-inverse .nav li.dropdown>a:focus .caret{border-top-color:#fff;border-bottom-color:#fff}.navbar-inverse .nav li.dropdown>.dropdown-toggle .caret{border-top-color:#adafae;border-bottom-color:#adafae}.navbar-inverse .nav li.dropdown.open>.dropdown-toggle .caret,.navbar-inverse .nav li.dropdown.active>.dropdown-toggle .caret,.navbar-inverse .nav li.dropdown.open.active>.dropdown-toggle .caret{border-top-color:#fff;border-bottom-color:#fff}.navbar-inverse .navbar-search .search-query{color:#fff;background-color:#5d6978;border-color:"
            + t.navBarInnerBackgroundColor + ";-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1),0 1px 0 rgba(255,255,255,0.15);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1),0 1px 0 rgba(255,255,255,0.15);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1),0 1px 0 rgba(255,255,255,0.15);-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.navbar-inverse .navbar-search .search-query:-moz-placeholder{color:#fff}.navbar-inverse .navbar-search .search-query:-ms-input-placeholder{color:#fff}.navbar-inverse .navbar-search .search-query::-webkit-input-placeholder{color:#fff}.navbar-inverse .navbar-search .search-query:focus,.navbar-inverse .navbar-search .search-query.focused{padding:5px 15px;color:#222;text-shadow:0 1px 0 #fff;background-color:#fff;border:0;outline:0;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.15);-moz-box-shadow:0 0 3px rgba(0,0,0,0.15);box-shadow:0 0 3px rgba(0,0,0,0.15)}.navbar-inverse .btn-navbar{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#1a1d22;*background-color:#1a1d22;background-image:-moz-linear-gradient(top,#1a1d22,#1a1d22);background-image:-webkit-gradient(linear,0 0,0 100%,from(#1a1d22),to(#1a1d22));background-image:-webkit-linear-gradient(top,#1a1d22,#1a1d22);background-image:-o-linear-gradient(top,#1a1d22,#1a1d22);background-image:linear-gradient(to bottom,#1a1d22,#1a1d22);background-repeat:repeat-x;border-color:#1a1d22 #1a1d22 #000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff1a1d22',endColorstr='#ff1a1d22',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.navbar-inverse .btn-navbar:hover,.navbar-inverse .btn-navbar:focus,.navbar-inverse .btn-navbar:active,.navbar-inverse .btn-navbar.active,.navbar-inverse .btn-navbar.disabled,.navbar-inverse .btn-navbar[disabled]{color:#fff;background-color:#1a1d22;*background-color:#0f1113}.navbar-inverse .btn-navbar:active,.navbar-inverse .btn-navbar.active{background-color:#040405}.breadcrumb{padding:8px 15px;margin:0 0 20px;list-style:none;background-color:#f5f5f5;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.breadcrumb>li{display:inline-block;*display:inline;text-shadow:0 1px 0 #fff;*zoom:1}.breadcrumb>li>.divider{padding:0 5px;color:#ccc}.breadcrumb>.active{color:#adafae}.pagination{margin:20px 0}.pagination ul{display:inline-block;*display:inline;margin-bottom:0;margin-left:0;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";*zoom:1;-webkit-box-shadow:0 1px 2px rgba(0,0,0,0.05);-moz-box-shadow:0 1px 2px rgba(0,0,0,0.05);box-shadow:0 1px 2px rgba(0,0,0,0.05)}.pagination ul>li{display:inline}.pagination ul>li>a,.pagination ul>li>span{float:left;padding:4px 12px;line-height:20px;text-decoration:none;background-color:"
            + t.bodyGradientFromColor + ";border:1px solid transparent;border-left-width:0}.pagination ul>li>a:hover,.pagination ul>li>a:focus,.pagination ul>.active>a,.pagination ul>.active>span{background-color:"
            + t.hoverColor + "}.pagination ul>.active>a,.pagination ul>.active>span{color:#adafae;cursor:default}.pagination ul>.disabled>span,.pagination ul>.disabled>a,.pagination ul>.disabled>a:hover,.pagination ul>.disabled>a:focus{color:#adafae;cursor:default;background-color:transparent}.pagination ul>li:first-child>a,.pagination ul>li:first-child>span{border-left-width:1px;-webkit-border-bottom-left-radius: "
            + t.radius + ";border-bottom-left-radius: "
            + t.radius + ";-webkit-border-top-left-radius: "
            + t.radius + ";border-top-left-radius: "
            + t.radius + ";-moz-border-radius-bottomleft:4px;-moz-border-radius-topleft:4px}.pagination ul>li:last-child>a,.pagination ul>li:last-child>span{-webkit-border-top-right-radius: "
            + t.radius + ";border-top-right-radius: "
            + t.radius + ";-webkit-border-bottom-right-radius: "
            + t.radius + ";border-bottom-right-radius: "
            + t.radius + ";-moz-border-radius-topright:4px;-moz-border-radius-bottomright:4px}.pagination-centered{text-align:center}.pagination-right{text-align:right}.pagination-large ul>li>a,.pagination-large ul>li>span{padding:11px 19px;font-size:17.5px}.pagination-large ul>li:first-child>a,.pagination-large ul>li:first-child>span{-webkit-border-bottom-left-radius:6px;border-bottom-left-radius:6px;-webkit-border-top-left-radius:6px;border-top-left-radius:6px;-moz-border-radius-bottomleft:6px;-moz-border-radius-topleft:6px}.pagination-large ul>li:last-child>a,.pagination-large ul>li:last-child>span{-webkit-border-top-right-radius:6px;border-top-right-radius:6px;-webkit-border-bottom-right-radius:6px;border-bottom-right-radius:6px;-moz-border-radius-topright:6px;-moz-border-radius-bottomright:6px}.pagination-mini ul>li:first-child>a,.pagination-small ul>li:first-child>a,.pagination-mini ul>li:first-child>span,.pagination-small ul>li:first-child>span{-webkit-border-bottom-left-radius:3px;border-bottom-left-radius:3px;-webkit-border-top-left-radius:3px;border-top-left-radius:3px;-moz-border-radius-bottomleft:3px;-moz-border-radius-topleft:3px}.pagination-mini ul>li:last-child>a,.pagination-small ul>li:last-child>a,.pagination-mini ul>li:last-child>span,.pagination-small ul>li:last-child>span{-webkit-border-top-right-radius:3px;border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;border-bottom-right-radius:3px;-moz-border-radius-topright:3px;-moz-border-radius-bottomright:3px}.pagination-small ul>li>a,.pagination-small ul>li>span{padding:2px 10px;font-size:11.9px}.pagination-mini ul>li>a,.pagination-mini ul>li>span{padding:0 6px;font-size:10.5px}.pager{margin:20px 0;text-align:center;list-style:none;*zoom:1}.pager:before,.pager:after{display:table;line-height:0;content:''}.pager:after{clear:both}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px}.pager li>a:hover,.pager li>a:focus{text-decoration:none;background-color:#f5f5f5}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:hover,.pager .disabled>a:focus,.pager .disabled>span{color:#adafae;cursor:default;background-color:#fff}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop,.modal-backdrop.fade.in{opacity:.8;filter:alpha(opacity=80)}.modal{position:fixed;top:10%;left:50%;z-index:1050;width:560px;margin-left:-280px;background-color:#fff;border:1px solid "
            + t.bodyFontColor + ";border:1px solid rgba(0,0,0,0.3);*border:1px solid "
            + t.bodyFontColor + ";-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;outline:0;-webkit-box-shadow:0 3px 7px rgba(0,0,0,0.3);-moz-box-shadow:0 3px 7px rgba(0,0,0,0.3);box-shadow:0 3px 7px rgba(0,0,0,0.3);-webkit-background-clip:padding-box;-moz-background-clip:padding-box;background-clip:padding-box}.modal.fade{top:-25%;-webkit-transition:opacity .3s linear,top .3s ease-out;-moz-transition:opacity .3s linear,top .3s ease-out;-o-transition:opacity .3s linear,top .3s ease-out;transition:opacity .3s linear,top .3s ease-out}.modal.fade.in{top:10%}.modal-header{padding:9px 15px;border-bottom:1px solid #eee}.modal-header .close{margin-top:2px}.modal-header h3{margin:0;line-height:30px}.modal-body{position:relative;max-height:400px;padding:15px;overflow-y:auto}.modal-form{margin-bottom:0}.modal-footer{padding:14px 15px 15px;margin-bottom:0;text-align:right;background-color:#f5f5f5;border-top:1px solid #ddd;-webkit-border-radius:0 0 6px 6px;-moz-border-radius:0 0 6px 6px;border-radius:0 0 6px 6px;*zoom:1;-webkit-box-shadow:inset 0 1px 0 #fff;-moz-box-shadow:inset 0 1px 0 #fff;box-shadow:inset 0 1px 0 #fff}.modal-footer:before,.modal-footer:after{display:table;line-height:0;content:''}.modal-footer:after{clear:both}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.tooltip{position:absolute;z-index:1020;display:block;font-size:11px;line-height:1.4;opacity:0;filter:alpha(opacity=0);visibility:visible}.tooltip.in{opacity:.8;filter:alpha(opacity=80)}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:8px;color:#fff;text-align:center;text-decoration:none;background-color:"
            + t.wellBackgroundColor + ";-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-top-color:"
            + t.wellBackgroundColor + ";border-width:5px 5px 0}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-right-color:"
            + t.wellBackgroundColor + ";border-width:5px 5px 5px 0}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-left-color:"
            + t.wellBackgroundColor + ";border-width:5px 0 5px 5px}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-bottom-color:"
            + t.wellBackgroundColor + ";border-width:0 5px 5px}.popover{position:absolute;top:0;left:0;z-index:1010;display:none;max-width:276px;padding:1px;text-align:left;white-space:normal;background-color:"
            + t.wellBackgroundColor + ";border:1px solid #ccc;border:1px solid rgba(0,0,0,0.2);-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0 5px 10px rgba(0,0,0,0.2);-moz-box-shadow:0 5px 10px rgba(0,0,0,0.2);box-shadow:0 5px 10px rgba(0,0,0,0.2);-webkit-background-clip:padding-box;-moz-background-clip:padding;background-clip:padding-box}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;font-weight:normal;line-height:18px;background-color:"
            + t.wellBackgroundColor + ";border-bottom:1px solid #070809;-webkit-border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;border-radius:5px 5px 0 0}.popover-title:empty{display:none}.popover-content{padding:9px 14px}.popover .arrow,.popover .arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover .arrow{border-width:11px}.popover .arrow:after{border-width:10px;content:''}.popover.top .arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:"
            + t.bodyFontColor + ";border-top-color:rgba(0,0,0,0.25);border-bottom-width:0}.popover.top .arrow:after{bottom:1px;margin-left:-10px;border-top-color:"
            + t.wellBackgroundColor + ";border-bottom-width:0}.popover.right .arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:"
            + t.bodyFontColor + ";border-right-color:rgba(0,0,0,0.25);border-left-width:0}.popover.right .arrow:after{bottom:-10px;left:1px;border-right-color:"
            + t.wellBackgroundColor + ";border-left-width:0}.popover.bottom .arrow{top:-11px;left:50%;margin-left:-11px;border-bottom-color:"
            + t.bodyFontColor + ";border-bottom-color:rgba(0,0,0,0.25);border-top-width:0}.popover.bottom .arrow:after{top:1px;margin-left:-10px;border-bottom-color:"
            + t.wellBackgroundColor + ";border-top-width:0}.popover.left .arrow{top:50%;right:-11px;margin-top:-11px;border-left-color:"
            + t.bodyFontColor + ";border-left-color:rgba(0,0,0,0.25);border-right-width:0}.popover.left .arrow:after{right:1px;bottom:-10px;border-left-color:"
            + t.wellBackgroundColor + ";border-right-width:0}.thumbnails{margin-left:-20px;list-style:none;*zoom:1}.thumbnails:before,.thumbnails:after{display:table;line-height:0;content:''}.thumbnails:after{clear:both}.row-fluid .thumbnails{margin-left:0}.thumbnails>li{float:left;margin-bottom:20px;margin-left:20px}.thumbnail{display:block;padding:4px;line-height:20px;border:1px solid #ddd;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.055);-moz-box-shadow:0 1px 3px rgba(0,0,0,0.055);box-shadow:0 1px 3px rgba(0,0,0,0.055);-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}a.thumbnail:hover,a.thumbnail:focus{border-color:"
            + t.hoverColor + ";-webkit-box-shadow:0 1px 4px rgba(0,105,214,0.25);-moz-box-shadow:0 1px 4px rgba(0,105,214,0.25);box-shadow:0 1px 4px rgba(0,105,214,0.25)}.thumbnail>img{display:block;max-width:100%;margin-right:auto;margin-left:auto}.thumbnail .caption{padding:9px;color:"
            + t.bodyFontColor + "}.media,.media-body{overflow:hidden;*overflow:visible;zoom:1}.media,.media .media{margin-top:15px}.media:first-child{margin-top:0}.media-object{display:block}.media-heading{margin:0 0 5px}.media>.pull-left{margin-right:10px}.media>.pull-right{margin-left:10px}.media-list{margin-left:0;list-style:none}.label,.badge{display:inline-block;padding:2px 4px;font-size:"
            + t.fontSize + ";font-weight:bold;line-height:14px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);white-space:nowrap;vertical-align:baseline;background-color:#adafae}.label{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.badge{-webkit-border-radius:"
            + t.badgeRadius + ";-moz-border-radius:"
            + t.badgeRadius + ";border-radius:"
            + t.badgeRadius + "}.label:empty,.badge:empty{display:none}a.label:hover,a.label:focus,a.badge:hover,a.badge:focus{color:#fff;text-decoration:none;cursor:pointer}.label-important,.badge-important{background-color:#b94a48}.label-important[href],.badge-important[href]{background-color:#953b39}.label-warning,.badge-warning{background-color:#f80}.label-warning[href],.badge-warning[href]{background-color:#cc6d00}.label-success,.badge-success{background-color:"
            + t.badgeSuccess + "}.label-success[href],.badge-success[href]{background-color:#356635}.label-info,.badge-info{border: 1px solid #fff;margin-bottom: 2px !important;background-color:"
            + t.infoColor + "}.label-info[href],.badge-info[href]{background-color:#007399}.label-inverse,.badge-inverse{background-color:#222}.label-inverse[href],.badge-inverse[href]{background-color:#080808}.btn .label,.btn .badge{position:relative;top:-1px}.btn-mini .label,.btn-mini .badge{top:0}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-moz-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-ms-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:0 0}to{background-position:40px 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{margin-bottom:20px;overflow:hidden;background-color:#f7f7f7;background-image:-moz-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:-webkit-gradient(linear,0 0,0 100%,from(#f5f5f5),to(#f9f9f9));background-image:-webkit-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:-o-linear-gradient(top,#f5f5f5,#f9f9f9);background-image:linear-gradient(to bottom,#f5f5f5,#f9f9f9);background-repeat:repeat-x;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + ";filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1)}.progress .bar{float:left;width:0;height:100%;font-size:12px;color:#fff;text-align:center;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#0e90d2;background-image:-moz-linear-gradient(top,#149bdf,#0480be);background-image:-webkit-gradient(linear,0 0,0 100%,from(#149bdf),to(#0480be));background-image:-webkit-linear-gradient(top,#149bdf,#0480be);background-image:-o-linear-gradient(top,#149bdf,#0480be);background-image:linear-gradient(to bottom,#149bdf,#0480be);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf',endColorstr='#ff0480be',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-moz-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:width .6s ease;-moz-transition:width .6s ease;-o-transition:width .6s ease;transition:width .6s ease}.progress .bar+.bar{-webkit-box-shadow:inset 1px 0 0 rgba(0,0,0,0.15),inset 0 -1px 0 rgba(0,0,0,0.15);-moz-box-shadow:inset 1px 0 0 rgba(0,0,0,0.15),inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 1px 0 0 rgba(0,0,0,0.15),inset 0 -1px 0 rgba(0,0,0,0.15)}.progress-striped .bar{background-color:#149bdf;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);-webkit-background-size:40px 40px;-moz-background-size:40px 40px;-o-background-size:40px 40px;background-size:40px 40px}.progress.active .bar{-webkit-animation:progress-bar-stripes 2s linear infinite;-moz-animation:progress-bar-stripes 2s linear infinite;-ms-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-danger .bar,.progress .bar-danger{background-color:#dd514c;background-image:-moz-linear-gradient(top,#ee5f5b,#c43c35);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ee5f5b),to(#c43c35));background-image:-webkit-linear-gradient(top,#ee5f5b,#c43c35);background-image:-o-linear-gradient(top,#ee5f5b,#c43c35);background-image:linear-gradient(to bottom,#ee5f5b,#c43c35);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffee5f5b',endColorstr='#ffc43c35',GradientType=0)}.progress-danger.progress-striped .bar,.progress-striped .bar-danger{background-color:#ee5f5b;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.progress-success .bar,.progress .bar-success{background-color:#5eb95e;background-image:-moz-linear-gradient(top,#62c462,#57a957);background-image:-webkit-gradient(linear,0 0,0 100%,from(#62c462),to(#57a957));background-image:-webkit-linear-gradient(top,#62c462,#57a957);background-image:-o-linear-gradient(top,#62c462,#57a957);background-image:linear-gradient(to bottom,#62c462,#57a957);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff62c462',endColorstr='#ff57a957',GradientType=0)}.progress-success.progress-striped .bar,.progress-striped .bar-success{background-color:#62c462;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.progress-info .bar,.progress .bar-info{background-color:#4bb1cf;background-image:-moz-linear-gradient(top,#5bc0de,#339bb9);background-image:-webkit-gradient(linear,0 0,0 100%,from(#5bc0de),to(#339bb9));background-image:-webkit-linear-gradient(top,#5bc0de,#339bb9);background-image:-o-linear-gradient(top,#5bc0de,#339bb9);background-image:linear-gradient(to bottom,#5bc0de,#339bb9);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5bc0de',endColorstr='#ff339bb9',GradientType=0)}.progress-info.progress-striped .bar,.progress-striped .bar-info{background-color:#5bc0de;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.progress-warning .bar,.progress .bar-warning{background-color:#ff9d2e;background-image:-moz-linear-gradient(top,#ffac4d,#f80);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ffac4d),to(#f80));background-image:-webkit-linear-gradient(top,#ffac4d,#f80);background-image:-o-linear-gradient(top,#ffac4d,#f80);background-image:linear-gradient(to bottom,#ffac4d,#f80);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffac4d',endColorstr='#ffff8800',GradientType=0)}.progress-warning.progress-striped .bar,.progress-striped .bar-warning{background-color:#ffac4d;background-image:-webkit-gradient(linear,0 100%,100% 0,color-stop(0.25,rgba(255,255,255,0.15)),color-stop(0.25,transparent),color-stop(0.5,transparent),color-stop(0.5,rgba(255,255,255,0.15)),color-stop(0.75,rgba(255,255,255,0.15)),color-stop(0.75,transparent),to(transparent));background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-moz-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,0.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.15) 50%,rgba(255,255,255,0.15) 75%,transparent 75%,transparent)}.accordion{margin-top:0;margin-bottom:0;border-top:0}"
            + ".accordion-group{margin-bottom:0px;border:0;-webkit-border-radius: "
            + t.radius + ";-moz-border-radius: "
            + t.radius + ";border-radius: "
            + t.radius + "}.accordion-heading{border-bottom:0}.accordion-heading .accordion-toggle{display:block;padding:4px 4px;margin:0}.accordion-toggle{cursor:pointer}.accordion-inner{padding:5px 4px 0 4px;border-top:1px solid #e5e5e5}.carousel{position:relative;margin-bottom:0;line-height:1}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-moz-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.item>img,.carousel-inner>.item>a>img{display:block;line-height:1}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:40%;left:15px;width:40px;height:40px;margin-top:-20px;font-size:60px;font-weight:100;line-height:30px;color:#fff;text-align:center;background:"
            + t.navBackgroundColor + ";border:3px solid #fff;-webkit-border-radius:23px;-moz-border-radius:23px;border-radius:23px;opacity:.5;filter:alpha(opacity=50)}.carousel-control.right{right:15px;left:auto}.carousel-control:hover,.carousel-control:focus{color:#fff;text-decoration:none;opacity:.9;filter:alpha(opacity=90)}.carousel-indicators{position:absolute;top:15px;right:15px;z-index:5;margin:0;list-style:none}.carousel-indicators li{display:block;float:left;width:10px;height:10px;margin-left:5px;text-indent:-999px;background-color:#ccc;background-color:rgba(255,255,255,0.25);border-radius:5px}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:0;bottom:0;left:0;padding:15px;background:#222;background:rgba(0,0,0,0.75)}.carousel-caption h4,.carousel-caption p{line-height:20px;color:#fff}.carousel-caption h4{margin:0 0 5px}.carousel-caption p{margin-bottom:0}.hero-unit{padding:60px;margin-bottom:30px;font-size:18px;font-weight:200;line-height:30px;color:inherit;background-color:"
            + t.wellBackgroundColor + ";-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}.hero-unit h1{margin-bottom:0;font-size:60px;line-height:1;letter-spacing:-1px;color:inherit}.hero-unit li{line-height:30px}.pull-right{float:right}.pull-left{float:left}.hide{display:none}.show{display:block}.invisible{visibility:hidden}.affix{position:fixed}label,input,button,select,textarea,.navbar .search-query:-moz-placeholder,.navbar .search-query::-webkit-input-placeholder{font-family:'Droid Sans',sans-serif;color:"
            + t.bodyFontColor + "}code,pre{background-color:#eee}blockquote{border-left:5px solid #222}blockquote.pull-right{border-right:5px solid #222}html{min-height:100%}body{min-height:100%;background-color: "
            + t.bodyBackgroundColor + ";background-image:-moz-linear-gradient(top,"
            + t.bodyGradientFromColor + ","
            + t.bodyGradientToColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.bodyGradientFromColor + "),to("
            + t.bodyGradientToColor + "));background-image:-webkit-linear-gradient(top,"
            + t.bodyGradientFromColor + ","
            + t.bodyGradientToColor + ");background-image:-o-linear-gradient(top,"
            + t.bodyGradientFromColor + ","
            + t.bodyGradientToColor + ");background-image:linear-gradient(to bottom,"
            + t.bodyGradientFromColor + ","
            + t.bodyGradientToColor + ");background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff060606',endColorstr='#ff252a30',GradientType=0)}.page-header{border-bottom:1px solid "
            + t.tableBorderColor + "}hr{border-bottom:0}.navbar .navbar-inner{border-bottom:0px solid "
            + t.tableBorderColor + ";-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.navbar .brand{padding:15px 20px 15px;font-weight:normal;color:#eee;text-shadow:none}.navbar .nav>li>a{padding:15px 15px 14px;border-bottom:1px solid transparent}.navbar .nav>li>a:hover,.navbar .nav>.active>a,.navbar .nav>.active>a:hover{border-bottom:1px solid "
            + t.hoverColor + "}.navbar .nav>.active>a,.navbar .nav>.active>a:hover,.navbar .nav>.active>a:focus{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.navbar .navbar-text{padding:15px 15px 14px;margin-bottom:1px;line-height:inherit}.navbar .divider-vertical{margin:0;border-left:1px solid "
            + t.tableBorderColor + ";border-right-width:0}.navbar .search-query,.navbar .search-query:focus,.navbar .search-query.focused{line-height:normal;color:#adafae;text-shadow:none;background-color:#222;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}.navbar .search-query:-moz-placeholder,.navbar .search-query:focus:-moz-placeholder,.navbar .search-query.focused:-moz-placeholder{color:"
            + t.bodyFontColor + "}.navbar .search-query:-ms-input-placeholder,.navbar .search-query:focus:-ms-input-placeholder,.navbar .search-query.focused:-ms-input-placeholder{color:"
            + t.bodyFontColor + "}.navbar .search-query::-webkit-input-placeholder,.navbar .search-query:focus::-webkit-input-placeholder,.navbar .search-query.focused::-webkit-input-placeholder{color:"
            + t.bodyFontColor + "}@media(max-width:979px){.navbar .nav-collapse .nav li>a{font-weight:normal;color:#eee;text-shadow:none;border:0}.navbar .nav-collapse .nav li>a:hover{background-color:"
            + t.hoverColor + ";border:0}.navbar .nav-collapse .nav .active>a{background-color:"
            + t.hoverColor + ";border:0}.navbar .nav-collapse .dropdown-menu a:hover{background-color:"
            + t.hoverColor + "}.navbar .nav-collapse .navbar-form,.navbar .nav-collapse .navbar-search{border-top:0;border-bottom:0}.navbar .nav-collapse .nav-header{color:rgba(128,128,128,0.6)}.navbar-inverse .nav-collapse .nav li>a:hover{background-color:#111}.navbar-inverse .nav-collapse .nav .active>a{background-color:#111}.navbar-inverse .nav-collapse .nav li.dropdown.open>.dropdown-toggle,.navbar-inverse .nav-collapse .nav li.dropdown.active>.dropdown-toggle,.navbar-inverse .nav-collapse .nav li.dropdown.open.active>.dropdown-toggle{background-color:#111}}div.subnav{margin:0 1px;background-color:"
            + t.navBackgroundColor + ";background-image:none;border:0;border-bottom:1px solid "
            + t.tableBorderColor + "}div.subnav .nav>li>a,div.subnav .nav>li:first-child>a,div.subnav .nav>li:first-child>a:hover{padding:11px 12px;color:#adafae;background-color:"
            + t.navBackgroundColor + ";border:0}div.subnav .nav>li>a:hover,div.subnav .nav>li.active>a,div.subnav .nav>li.active>a:hover,div.subnav .nav>li:first-child>a:hover{padding:11px 12px;color:#fff;background:transparent;border:0;border-bottom:1px solid "
            + t.hoverColor + "}div.subnav .nav li.nav-header{text-shadow:none}div.subnav-fixed{top:50px;margin:0}.nav-tabs{border-bottom:1px solid "
            + t.tableBorderColor + "}.nav-tabs li>a:hover,.nav-tabs li.active>a,.nav-tabs li.active>a:hover{color:#fff;background-color:"
            + t.hoverColor + ";border-color:transparent}.nav-tabs li.disabled>a{color:"
            + t.bodyFontColor + "}.nav-tabs .open .dropdown-toggle{background-color:"
            + t.bodyGradientFromColor + ";border-color:transparent}.nav-pills li>a:hover{color:#fff;background-color:"
            + t.hoverColor + "}.nav-pills li.disabled>a{color:"
            + t.bodyFontColor + "}.nav-pills .open .dropdown-toggle{background-color:"
            + t.bodyGradientFromColor + "}.nav-pills .dropdown-menu li>a:hover{border:0}.nav-list li>a{text-shadow:none}.nav-list li>a:hover{color:#fff;background-color:"
            + t.hoverColor + "}.nav-list .nav-header{text-shadow:none}.nav-list .divider{background-color:transparent;border-bottom:1px solid "
            + t.tableBorderColor + "}.nav-stacked li>a{border:1px solid "
            + t.tableBorderColor + "!important}.nav-stacked li>a:hover,.nav-stacked li.active>a{color:#fff;background-color:"
            + t.hoverColor + "}.tabbable .nav-tabs,.tabbable .nav-tabs li.active>a{border-color:#222}.breadcrumb{font-size:14px;background-color:transparent;background-image:none;border-width:0;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.breadcrumb li{text-shadow:none}.breadcrumb li>a{color:"
            + t.hoverColor + ";text-shadow:none}.pagination ul{-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.pagination ul>.disabled>a,.pagination ul>.disabled>a:hover,.pagination ul>.disabled>span,.pagination ul>.disabled>span:hover{background-color:rgba(0,0,0,0.2)}.pager li>a,.pager li>span{background-color:"
            + t.bodyGradientFromColor + ";border:0}.pager li>a:hover,.pager li>span:hover{background-color:"
            + t.hoverColor + "}.pager .disabled a,.pager .disabled a:hover{background-color:"
            + t.bodyGradientFromColor + "}.btn{padding:7px 10px;color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);text-shadow:none;background-image:-moz-linear-gradient(top,#666,#4d4d4d);background-image:-webkit-gradient(linear,0 0,0 100%,from(#666),to(#4d4d4d));background-image:-webkit-linear-gradient(top,#666,#4d4d4d);background-image:-o-linear-gradient(top,#666,#4d4d4d);background-image:linear-gradient(to bottom,#666,#4d4d4d);background-repeat:repeat-x;border-color:#4d4d4d #4d4d4d #262626;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff666666',endColorstr='#ff4d4d4d',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);-webkit-box-shadow:1px 1px 2px #111;-moz-box-shadow:1px 1px 2px #111;box-shadow:1px 1px 2px #111}.btn:hover,.btn:focus,.btn:active,.btn.active,.btn.disabled,.btn[disabled]{color:#fff;background-color:#4d4d4d;*background-color:#404040}.btn:active,.btn.active{background-color:#333}.btn:hover{color:#fff;text-shadow:none}.btn-primary{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#008ab8;*background-color:#007399;background-image:-moz-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:-webkit-gradient(linear,0 0,0 100%,from("
            + t.infoColor + "),to(#007399));background-image:-webkit-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:-o-linear-gradient(top,"
            + t.infoColor + ",#007399);background-image:linear-gradient(to bottom,"
            + t.infoColor + ",#007399);background-repeat:repeat-x;border-color:#007399 #007399 #00394d;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0099cc',endColorstr='#ff007399',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-primary:hover,.btn-primary:focus,.btn-primary:active,.btn-primary.active,.btn-primary.disabled,.btn-primary[disabled]{color:#fff;background-color:#007399;*background-color:#006080}.btn-primary:active,.btn-primary.active{background-color:#004d66}.btn-warning{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#ff961f;*background-color:#f80;background-image:-moz-linear-gradient(top,#ffa033,#f80);background-image:-webkit-gradient(linear,0 0,0 100%,from(#ffa033),to(#f80));background-image:-webkit-linear-gradient(top,#ffa033,#f80);background-image:-o-linear-gradient(top,#ffa033,#f80);background-image:linear-gradient(to bottom,#ffa033,#f80);background-repeat:repeat-x;border-color:#f80 #f80 #b35f00;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffa033',endColorstr='#ffff8800',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-warning:hover,.btn-warning:focus,.btn-warning:active,.btn-warning.active,.btn-warning.disabled,.btn-warning[disabled]{color:#fff;background-color:#f80;*background-color:#e67a00}.btn-warning:active,.btn-warning.active{background-color:#cc6d00 }.btn-danger{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#eb0000;*background-color:"
            + t.errorColor + ";background-image:-moz-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#f00),to("
            + t.errorColor + "));background-image:-webkit-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:-o-linear-gradient(top,#f00,"
            + t.errorColor + ");background-image:linear-gradient(to bottom,#f00,"
            + t.errorColor + ");background-repeat:repeat-x;border-color:"
            + t.errorColor + " " + t.errorColor + " #800000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff0000',endColorstr='#ffcc0000',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-danger:hover,.btn-danger:focus,.btn-danger:active,.btn-danger.active,.btn-danger.disabled,.btn-danger[disabled]{color:#fff;background-color:"
            + t.errorColor + ";*background-color:#b30000}.btn-danger:active,.btn-danger.active{background-color:#900}.btn-success{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#7ab800;*background-color:"
            + t.successColor + ";background-image:-moz-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#8c0),to("
            + t.successColor + "));background-image:-webkit-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:-o-linear-gradient(top,#8c0,"
            + t.successColor + ");background-image:linear-gradient(to bottom,#8c0,"
            + t.successColor + ");background-repeat:repeat-x;border-color:"
            + t.successColor + " "
            + t.successColor + " #334d00;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff88cc00',endColorstr='#ff669900',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-success:hover,.btn-success:focus,.btn-success:active,.btn-success.active,.btn-success.disabled,.btn-success[disabled]{color:#fff;background-color:"
            + t.successColor + ";*background-color:#558000}.btn-success:active,.btn-success.active{background-color:#460}.btn-info{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#292929;*background-color:#191919;background-image:-moz-linear-gradient(top,#333,#191919);background-image:-webkit-gradient(linear,0 0,0 100%,from(#333),to(#191919));background-image:-webkit-linear-gradient(top,#333,#191919);background-image:-o-linear-gradient(top,#333,#191919);background-image:linear-gradient(to bottom,#333,#191919);background-repeat:repeat-x;border-color:#191919 #191919 #000;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff333333',endColorstr='#ff191919',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-info:hover,.btn-info:focus,.btn-info:active,.btn-info.active,.btn-info.disabled,.btn-info[disabled]{color:#fff;background-color:#191919;*background-color:#0d0d0d}.btn-info:active,.btn-info.active{background-color:#000}.btn-inverse{color:#fff;text-shadow:0 -1px 0 rgba(0,0,0,0.25);background-color:#9f3fcf;*background-color:"
            + t.inverseColor + ";background-image:-moz-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:-webkit-gradient(linear,0 0,0 100%,from(#a347d1),to("
            + t.inverseColor + "));background-image:-webkit-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:-o-linear-gradient(top,#a347d1,"
            + t.inverseColor + ");background-image:linear-gradient(to bottom,#a347d1,"
            + t.inverseColor + ");background-repeat:repeat-x;border-color:"
            + t.inverseColor + " "
            + t.inverseColor + " #6b248f;border-color:rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffa347d1',endColorstr='#ff9933cc',GradientType=0);filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.btn-inverse:hover,.btn-inverse:focus,.btn-inverse:active,.btn-inverse.active,.btn-inverse.disabled,.btn-inverse[disabled]{color:#fff;background-color:"
            + t.inverseColor + ";*background-color:#8a2eb8}.btn-inverse:active,.btn-inverse.active{background-color:#7a29a3}.btn .caret{border-top:4px solid black;opacity:.3}.btn-group>.dropdown-menu>li>a:hover{border-bottom:0}.btn.disabled,.btn[disabled]{background-color:#adafae}input,textarea,select{border-width:2px;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}select,textarea,input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],.uneditable-input{color:#222}input[disabled],select[disabled],textarea[disabled],input[readonly],select[readonly],textarea[readonly],.uneditable-input{border-color:#444}input:focus,textarea:focus,input.focused,textarea.focused{border-color:#52a8ec;outline:0;outline:thin dotted}input[type='file']:focus,input[type='radio']:focus,input[type='checkbox']:focus,select:focus{outline:thin dotted #333;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}legend,label{color:"
            + t.bodyFontColor + ";border-bottom:0 solid #222}.form-actions{border-top:1px solid "
            + t.tableBorderColor + "}.table{-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}.table tbody tr.success td{color:#fff;background-color:"
            + t.successColor + "}.table tbody tr.error td{color:#fff;background-color:"
            + t.errorColor + "}.table tbody tr.info td{color:#fff;background-color:"
            + t.hoverColor + "}.dropdown-menu{-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.8);-moz-box-shadow:0 2px 4px rgba(0,0,0,0.8);box-shadow:0 2px 4px rgba(0,0,0,0.8)}.alert,.alert .alert-heading,.alert-success,.alert-success .alert-heading,.alert-danger,.alert-error,.alert-danger .alert-heading,.alert-error .alert-heading,.alert-info,.alert-info .alert-heading{padding:15px;margin-bottom:0;color:#eee;text-shadow:none;border:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.label{color:#eee}.label,.alert{background-color:#666}.label:hover{background-color:#4d4d4d}.label-important,.alert-danger,.alert-error{background-color:"
            + t.errorColor + "}.label-important:hover{background-color:#900}.label-warning{background-color:#cc6d00}.label-warning:hover{background-color:#995200}.label-success,.alert-success{background-color:#5c8a00}.label-success:hover{background-color:#3a5700}.label-info,.alert-info{background-color:#007399}.label-info:hover{background-color:#004d66}.well,.hero-unit{-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}.well,.hero-unit{border-top:solid 1px #2f2f2f;-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.8);-moz-box-shadow:0 2px 4px rgba(0,0,0,0.8);box-shadow:0 2px 4px rgba(0,0,0,0.8)}.thumbnail{border-color:#222}.progress{background-color:"
            + t.bodyGradientFromColor + ";background-image:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.modal{background-color:#222;border-top:solid 1px #2f2f2f;-webkit-border-radius:1px;-moz-border-radius:1px;border-radius:1px}.modal-header{border-bottom:1px solid "
            + t.tableBorderColor + "}.modal-footer{background-color:#222;border-top:1px solid "
            + t.tableBorderColor + ";-webkit-border-radius:0 0 6px 6px;-moz-border-radius:0 0 6px 6px;border-radius:0 0 6px 6px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.footer{border-top:1px solid "
            + t.tableBorderColor + "}@media(max-width:768px){div.subnav .nav>li+li>a,div.subnav .nav>li:first-child>a{border-top:1px solid "
            + t.tableBorderColor + ";border-left:1px solid "
            + t.tableBorderColor + "}.subnav .nav>li+li>a:hover,.subnav .nav>li:first-child>a:hover{background-color:"
            + t.hoverColor + ";border-bottom:0}}@media(max-width:768px){div.subnav .nav>li+li>a,div.subnav .nav>li:first-child>a{border-top:1px solid "
            + t.tableBorderColor + ";border-left:1px solid "
            + t.tableBorderColor + "}.subnav .nav>li+li>a:hover,.subnav .nav>li:first-child>a:hover{background-color:"
            + t.hoverColor + ";border-bottom:0}}"
            + "@media screen and (max-width:60em){body{ font-weight: 10px !important;} pre code{font-size:8pt}code{font-size:8pt}.js{width:100% !important;}div.well.coffee{width:100% !important;margin-left:0px !important;}.accordion-inner{padding: 5px 1px 0px 1px  !important;}}"
            + "@media screen and (max-width:40em){div.menu{width: 320px !important;}.accordion-inner{padding: 0px !important;}}"
            + ".hide{display:none}.show{display:block}.invisible{visibility:hidden}.affix{position:fixed}pre code{overflow:auto;white-space:pre}.navbar{margin-bottom:0!important}.navbar-inner{min-height:24px!important;padding:0!important;font-size:1.0!important;line-height:24px!important;color:#fff!important}.nav-tabs.nav-stacked>li>a{border:0!important}.logo{margin-right:15px}body .frame .navbar .navbar-inner{padding-left:5px;border-radius:0}"
            + "body .frame .menu.collapse{float:left;width:300px}.menu{margin:0 2px 0 0!important;}body .frame .menu .navbar .navbar-inner{font-size:1.1em;line-height:23px;text-align:center;border-right:0}body .frame .menu .nav-stacked{padding:0}body .frame .menu .nav-stacked{margin:0!important}body .frame .menu .nav-stacked li input{padding:0!important;margin:0!important}body .frame .view{height:100%;overflow:auto;}body .frame .view .navbar .navbar-inner .btn-navbar{display:block;float:left}body .frame .view #content{text-align:justify}code.well{padding:1px!important}a:hover,a:focus{text-decoration:none!important}"
            + ".suiteDesc{padding:2px!important; height: 55px; margin-bottom: 2px !important;}.run-again{margin-left:4px!important}.navbar .btn,.navbar .btn-group{margin-top:10px} div.js{overflow-x: auto;} div.coffee{overflow-x: auto;} div.results{ overflow-x: auto !important;} pre.well {border: none;overflow-x: auto;}.frame{overflow-y: auto !important;}"
            + ".count{border: 1px solid #fff; margin: 0px 0 0px 0 !important;}.autoOverFlow{overflow-x:auto;}"
            + ".headCount{border: 1px solid #fff; height:26px; width: 24px; line-height: 23px !important; margin: 0px 1px 0px 1px !important; text-align:center;}.autoOverFlow{overflow-x:auto;}"
            + ".nicescroll-rails{margin-top:45px !important;} #mocha-stats{display: none;}"
            + "a.logoBtn:active {height: 100%;-webkit-transform: rotate(180deg);-webkit-transition: all .5s linear;}"
            + ".collapseAll {-webkit-transform: rotate(0deg);-webkit-transition: all .5s linear;}"
            + ".expandAll {-webkit-transform: rotate(90deg);-webkit-transition: all .5s linear;} input {margin-right: 1px; width: 100%;border: 0px !important; border-top: dotted 1px !important; border-bottom: dotted 1px !important;height: 30px; } div.accordion-heading span{ margin-left: 5px;} ";


    };
    themeManager.set = function (newTheme) {
        if (newTheme != amplify.store('currentTheme')) {
            amplify.store('currentTheme', newTheme);
            apply();
        }
    };

    themeManager.resetCustomTheme = function (prop, value) {
        amplify.store('customTheme', new theme());
        apply();
    }

    themeManager.updateCustom = function (prop, value) {
        var currentCustomTheme = amplify.store('customTheme');
        if (prop.indexOf('Color') > 0)
            currentCustomTheme[prop] = '#' + value;
        else
            currentCustomTheme[prop] = value;
        amplify.store('customTheme', currentCustomTheme);
        apply();
    }

    if (!amplify.store('currentTheme')) {
        themeManager.set('cyborg');
    } else {
        apply();
    }

    return themeManager;
}());
/*
 RequireJS 2.1.5 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
 */
var requirejs,require,define;
(function(aa){function I(b){return"[object Function]"===L.call(b)}function J(b){return"[object Array]"===L.call(b)}function y(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function M(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function s(b,c){return ga.call(b,c)}function m(b,c){return s(b,c)&&b[c]}function G(b,c){for(var d in b)if(s(b,d)&&c(b[d],d))break}function R(b,c,d,m){c&&G(c,function(c,j){if(d||!s(b,j))m&&"string"!==typeof c?(b[j]||(b[j]={}),R(b[j],
    c,d,m)):b[j]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ba(b){if(!b)return b;var c=aa;y(b.split("."),function(b){c=c[b]});return c}function B(b,c,d,m){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=m;d&&(c.originalError=d);return c}function ha(b){function c(a,f,b){var e,n,c,g,d,S,i,h=f&&f.split("/");e=h;var j=k.map,l=j&&j["*"];if(a&&"."===a.charAt(0))if(f){e=m(k.pkgs,f)?h=[f]:h.slice(0,h.length-1);f=a=e.concat(a.split("/"));
    for(e=0;f[e];e+=1)if(n=f[e],"."===n)f.splice(e,1),e-=1;else if(".."===n)if(1===e&&(".."===f[2]||".."===f[0]))break;else 0<e&&(f.splice(e-1,2),e-=2);e=m(k.pkgs,f=a[0]);a=a.join("/");e&&a===f+"/"+e.main&&(a=f)}else 0===a.indexOf("./")&&(a=a.substring(2));if(b&&j&&(h||l)){f=a.split("/");for(e=f.length;0<e;e-=1){c=f.slice(0,e).join("/");if(h)for(n=h.length;0<n;n-=1)if(b=m(j,h.slice(0,n).join("/")))if(b=m(b,c)){g=b;d=e;break}if(g)break;!S&&(l&&m(l,c))&&(S=m(l,c),i=e)}!g&&S&&(g=S,d=i);g&&(f.splice(0,d,
    g),a=f.join("/"))}return a}function d(a){A&&y(document.getElementsByTagName("script"),function(f){if(f.getAttribute("data-requiremodule")===a&&f.getAttribute("data-requirecontext")===i.contextName)return f.parentNode.removeChild(f),!0})}function z(a){var f=m(k.paths,a);if(f&&J(f)&&1<f.length)return d(a),f.shift(),i.require.undef(a),i.require([a]),!0}function h(a){var f,b=a?a.indexOf("!"):-1;-1<b&&(f=a.substring(0,b),a=a.substring(b+1,a.length));return[f,a]}function j(a,f,b,e){var n,C,g=null,d=f?f.name:
    null,j=a,l=!0,k="";a||(l=!1,a="_@r"+(M+=1));a=h(a);g=a[0];a=a[1];g&&(g=c(g,d,e),C=m(q,g));a&&(g?k=C&&C.normalize?C.normalize(a,function(a){return c(a,d,e)}):c(a,d,e):(k=c(a,d,e),a=h(k),g=a[0],k=a[1],b=!0,n=i.nameToUrl(k)));b=g&&!C&&!b?"_unnormalized"+(Q+=1):"";return{prefix:g,name:k,parentMap:f,unnormalized:!!b,url:n,originalName:j,isDefine:l,id:(g?g+"!"+k:k)+b}}function r(a){var f=a.id,b=m(p,f);b||(b=p[f]=new i.Module(a));return b}function t(a,f,b){var e=a.id,n=m(p,e);if(s(q,e)&&(!n||n.defineEmitComplete))"defined"===
    f&&b(q[e]);else r(a).on(f,b)}function v(a,f){var b=a.requireModules,e=!1;if(f)f(a);else if(y(b,function(f){if(f=m(p,f))f.error=a,f.events.error&&(e=!0,f.emit("error",a))}),!e)l.onError(a)}function w(){T.length&&(ia.apply(H,[H.length-1,0].concat(T)),T=[])}function x(a){delete p[a];delete V[a]}function F(a,f,b){var e=a.map.id;a.error?a.emit("error",a.error):(f[e]=!0,y(a.depMaps,function(e,c){var g=e.id,d=m(p,g);d&&(!a.depMatched[c]&&!b[g])&&(m(f,g)?(a.defineDep(c,q[g]),a.check()):F(d,f,b))}),b[e]=!0)}
    function D(){var a,f,b,e,n=(b=1E3*k.waitSeconds)&&i.startTime+b<(new Date).getTime(),c=[],g=[],h=!1,j=!0;if(!W){W=!0;G(V,function(b){a=b.map;f=a.id;if(b.enabled&&(a.isDefine||g.push(b),!b.error))if(!b.inited&&n)z(f)?h=e=!0:(c.push(f),d(f));else if(!b.inited&&(b.fetched&&a.isDefine)&&(h=!0,!a.prefix))return j=!1});if(n&&c.length)return b=B("timeout","Load timeout for modules: "+c,null,c),b.contextName=i.contextName,v(b);j&&y(g,function(a){F(a,{},{})});if((!n||e)&&h)if((A||da)&&!X)X=setTimeout(function(){X=
        0;D()},50);W=!1}}function E(a){s(q,a[0])||r(j(a[0],null,!0)).init(a[1],a[2])}function K(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function L(){var a;for(w();H.length;){a=H.shift();if(null===a[0])return v(B("mismatch","Mismatched anonymous define() module: "+a[a.length-
        1]));E(a)}}var W,Z,i,N,X,k={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},p={},V={},$={},H=[],q={},U={},M=1,Q=1;N={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=q[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return k.config&&m(k.config,a.map.id)||{}},exports:q[a.map.id]}}};Z=function(a){this.events=
        m($,a.id)||{};this.map=a;this.shim=m(k.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,e){e=e||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=c;this.inited=!0;this.ignore=e.ignore;e.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=
        !0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=this.map.url;U[a]||(U[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;
        var e=this.exports,n=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(I(n)){if(this.events.error)try{e=i.execCb(c,n,b,e)}catch(d){a=d}else e=i.execCb(c,n,b,e);this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==this.exports?e=b.exports:void 0===e&&this.usingExports&&(e=this.exports));if(a)return a.requireMap=this.map,a.requireModules=[this.map.id],a.requireType="define",v(this.error=
            a)}else e=n;this.exports=e;if(this.map.isDefine&&!this.ignore&&(q[c]=e,l.onResourceLoad))l.onResourceLoad(i,this.map,this.depMaps);x(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=j(a.prefix);this.depMaps.push(d);t(d,"defined",u(this,function(e){var n,d;d=this.map.name;var g=this.map.parentMap?this.map.parentMap.name:null,h=
        i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(e.normalize&&(d=e.normalize(d,function(a){return c(a,g,!0)})||""),e=j(a.prefix+"!"+d,this.map.parentMap),t(e,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=m(p,e.id)){this.depMaps.push(e);if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else n=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),n.error=u(this,
        function(a){this.inited=!0;this.error=a;a.requireModules=[b];G(p,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&x(a.map.id)});v(a)}),n.fromText=u(this,function(e,c){var d=a.name,g=j(d),C=O;c&&(e=c);C&&(O=!1);r(g);s(k.config,b)&&(k.config[d]=k.config[b]);try{l.exec(e)}catch(ca){return v(B("fromtexteval","fromText eval for "+b+" failed: "+ca,ca,[b]))}C&&(O=!0);this.depMaps.push(g);i.completeLoad(d);h([d],n)}),e.load(a.name,h,n,k)}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=
        this;this.enabling=this.enabled=!0;y(this.depMaps,u(this,function(a,b){var c,e;if("string"===typeof a){a=j(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(N,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;t(a,"defined",u(this,function(a){this.defineDep(b,a);this.check()}));this.errback&&t(a,"error",this.errback)}c=a.id;e=p[c];!s(N,c)&&(e&&!e.enabled)&&i.enable(a,this)}));G(this.pluginMaps,u(this,function(a){var b=m(p,a.id);b&&!b.enabled&&i.enable(a,
        this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){y(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:k,contextName:b,registry:p,defined:q,urlFetched:U,defQueue:H,Module:Z,makeModuleMap:j,nextTick:l.nextTick,onError:v,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=k.pkgs,c=k.shim,e={paths:!0,config:!0,map:!0};G(a,function(a,b){e[b]?
        "map"===b?(k.map||(k.map={}),R(k[b],a,!0,!0)):R(k[b],a,!0):k[b]=a});a.shim&&(G(a.shim,function(a,b){J(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);c[b]=a}),k.shim=c);a.packages&&(y(a.packages,function(a){a="string"===typeof a?{name:a}:a;b[a.name]={name:a.name,location:a.location||a.name,main:(a.main||"main").replace(ja,"").replace(ea,"")}}),k.pkgs=b);G(p,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=j(b))});if(a.deps||a.callback)i.require(a.deps||[],
        a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(aa,arguments));return b||a.exports&&ba(a.exports)}},makeRequire:function(a,f){function d(e,c,h){var g,k;f.enableBuildCallback&&(c&&I(c))&&(c.__requireJsBuild=!0);if("string"===typeof e){if(I(c))return v(B("requireargs","Invalid require call"),h);if(a&&s(N,e))return N[e](p[a.id]);if(l.get)return l.get(i,e,a,d);g=j(e,a,!1,!0);g=g.id;return!s(q,g)?v(B("notloaded",'Module name "'+g+'" has not been loaded yet for context: '+
        b+(a?"":". Use require([])"))):q[g]}L();i.nextTick(function(){L();k=r(j(null,a));k.skipMap=f.skipMap;k.init(e,c,h,{enabled:!0});D()});return d}f=f||{};R(d,{isBrowser:A,toUrl:function(b){var d,f=b.lastIndexOf("."),g=b.split("/")[0];if(-1!==f&&(!("."===g||".."===g)||1<f))d=b.substring(f,b.length),b=b.substring(0,f);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return s(q,j(b,a,!1,!0).id)},specified:function(b){b=j(b,a,!1,!0).id;return s(q,b)||s(p,b)}});a||(d.undef=function(b){w();var c=
        j(b,a,!0),d=m(p,b);delete q[b];delete U[c.url];delete $[b];d&&(d.events.defined&&($[b]=d.events),x(b))});return d},enable:function(a){m(p,a.id)&&r(a).enable()},completeLoad:function(a){var b,c,e=m(k.shim,a)||{},d=e.exports;for(w();H.length;){c=H.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=m(p,a);if(!b&&!s(q,a)&&c&&!c.inited){if(k.enforceDefine&&(!d||!ba(d)))return z(a)?void 0:v(B("nodefine","No define call for "+a,null,[a]));E([a,e.deps||[],e.exportsFn])}D()},nameToUrl:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           b,c){var e,d,h,g,j,i;if(l.jsExtRegExp.test(a))g=a+(b||"");else{e=k.paths;d=k.pkgs;g=a.split("/");for(j=g.length;0<j;j-=1)if(i=g.slice(0,j).join("/"),h=m(d,i),i=m(e,i)){J(i)&&(i=i[0]);g.splice(0,j,i);break}else if(h){a=a===h.name?h.location+"/"+h.main:h.location;g.splice(0,j,a);break}g=g.join("/");g+=b||(/\?/.test(g)||c?"":".js");g=("/"===g.charAt(0)||g.match(/^[\w\+\.\-]+:/)?"":k.baseUrl)+g}return k.urlArgs?g+((-1===g.indexOf("?")?"?":"&")+k.urlArgs):g},load:function(a,b){l.load(i,a,b)},execCb:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ka.test((a.currentTarget||a.srcElement).readyState))P=null,a=K(a),i.completeLoad(a.id)},onScriptError:function(a){var b=K(a);if(!z(b.id))return v(B("scripterror","Script error",a,[b.id]))}};i.require=i.makeRequire();return i}var l,w,x,D,t,E,P,K,Q,fa,la=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ma=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/\.js$/,ja=/^\.\//;w=Object.prototype;var L=w.toString,ga=w.hasOwnProperty,ia=
    Array.prototype.splice,A=!!("undefined"!==typeof window&&navigator&&document),da=!A&&"undefined"!==typeof importScripts,ka=A&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},r={},T=[],O=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(I(requirejs))return;r=requirejs;requirejs=void 0}"undefined"!==typeof require&&!I(require)&&(r=require,require=void 0);l=requirejs=function(b,c,d,z){var h,
    j="_";!J(b)&&"string"!==typeof b&&(h=b,J(c)?(b=c,c=d,d=z):b=[]);h&&h.context&&(j=h.context);(z=m(F,j))||(z=F[j]=l.s.newContext(j));h&&z.configure(h);return z.require(b,c,d)};l.config=function(b){return l(b)};l.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=l);l.version="2.1.5";l.jsExtRegExp=/^\/|:|\?|\.js$/;l.isBrowser=A;w=l.s={contexts:F,newContext:ha};l({});y(["toUrl","undef","defined","specified"],function(b){l[b]=function(){var c=F._;return c.require[b].apply(c,
    arguments)}});if(A&&(x=w.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))x=w.head=D.parentNode;l.onError=function(b){throw b;};l.load=function(b,c,d){var l=b&&b.config||{},h;if(A)return h=l.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),h.type=l.scriptType||"text/javascript",h.charset="utf-8",h.async=!0,h.setAttribute("data-requirecontext",b.contextName),h.setAttribute("data-requiremodule",c),
    h.attachEvent&&!(h.attachEvent.toString&&0>h.attachEvent.toString().indexOf("[native code"))&&!Y?(O=!0,h.attachEvent("onreadystatechange",b.onScriptLoad)):(h.addEventListener("load",b.onScriptLoad,!1),h.addEventListener("error",b.onScriptError,!1)),h.src=d,K=h,D?x.insertBefore(h,D):x.appendChild(h),K=null,h;if(da)try{importScripts(d),b.completeLoad(c)}catch(j){b.onError(B("importscripts","importScripts failed for "+c+" at "+d,j,[c]))}};A&&M(document.getElementsByTagName("script"),function(b){x||(x=
    b.parentNode);if(t=b.getAttribute("data-main"))return r.baseUrl||(E=t.split("/"),Q=E.pop(),fa=E.length?E.join("/")+"/":"./",r.baseUrl=fa,t=Q),t=t.replace(ea,""),r.deps=r.deps?r.deps.concat(t):[t],!0});define=function(b,c,d){var l,h;"string"!==typeof b&&(d=c,c=b,b=null);J(c)||(d=c,c=[]);!c.length&&I(d)&&d.length&&(d.toString().replace(la,"").replace(ma,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c));if(O){if(!(l=K))P&&"interactive"===P.readyState||M(document.getElementsByTagName("script"),
    function(b){if("interactive"===b.readyState)return P=b}),l=P;l&&(b||(b=l.getAttribute("data-requiremodule")),h=F[l.getAttribute("data-requirecontext")])}(h?h.defQueue:T).push([b,c,d])};define.amd={jQuery:!0};l.exec=function(b){return eval(b)};l(r)}})(this);
/* jquery.nicescroll 3.4.1 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function(e){var D=!1,G=!1,N=5E3,O=2E3,C=0,J,u=document.getElementsByTagName("script"),u=u[u.length-1].src.split("?")[0];J=0<u.split("/").length?u.split("/").slice(0,-1).join("/")+"/":"";Array.prototype.forEach||(Array.prototype.forEach=function(e,d){for(var k=0,s=this.length;k<s;++k)e.call(d,this[k],k,this)});var w=window.requestAnimationFrame||!1,x=window.cancelAnimationFrame||!1;["ms","moz","webkit","o"].forEach(function(e){w||(w=window[e+"RequestAnimationFrame"]);x||(x=window[e+"CancelAnimationFrame"]||
window[e+"CancelRequestAnimationFrame"])});var E=window.MutationObserver||window.WebKitMutationObserver||!1,K={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,
railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:!1,cursordragontouch:!1},H=!1,P=function(j,d){function k(){var c=
b.win;if("zIndex"in c)return c.zIndex();for(;0<c.length&&9!=c[0].nodeType;){var g=c.css("zIndex");if(!isNaN(g)&&0!=g)return parseInt(g);c=c.parent()}return!1}function s(c,g,p){g=c.css(g);c=parseFloat(g);return isNaN(c)?(c=B[g]||0,p=3==c?p?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&c&&(c+=1),p?c:0):c}function n(c,g,p,d){b._bind(c,g,function(b){b=b?b:window.event;var d={original:b,target:b.target||b.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==
b.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1;return!1},stopImmediatePropagation:function(){b.stopImmediatePropagation?b.stopImmediatePropagation():b.cancelBubble=!0}};"mousewheel"==g?(d.deltaY=-0.025*b.wheelDelta,b.wheelDeltaX&&(d.deltaX=-0.025*b.wheelDeltaX)):d.deltaY=b.detail;return p.call(c,d)},d)}function v(c,g,d){var f,e;0==c.deltaMode?(f=-Math.floor(c.deltaX*(b.opt.mousescrollstep/54)),e=-Math.floor(c.deltaY*(b.opt.mousescrollstep/
54))):1==c.deltaMode&&(f=-Math.floor(c.deltaX*b.opt.mousescrollstep),e=-Math.floor(c.deltaY*b.opt.mousescrollstep));g&&(0==f&&e)&&(f=e,e=0);f&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltax+=f,b.debounced("mousewheelx",function(){var c=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(c)},120));if(e){if(b.opt.nativeparentscrolling&&d&&!b.ispage&&!b.zoomactive)if(0>e){if(b.getScrollTop()>=b.page.maxh)return!0}else if(0>=b.getScrollTop())return!0;b.scrollmom&&b.scrollmom.stop();b.lastdeltay+=
e;b.debounced("mousewheely",function(){var c=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(c)},120)}c.stopImmediatePropagation();return c.preventDefault()}var b=this;this.version="3.4.0";this.name="nicescroll";this.me=d;this.opt={doc:e("body"),win:!1};e.extend(this.opt,K);this.opt.snapbackspeed=80;if(j)for(var m in b.opt)"undefined"!=typeof j[m]&&(b.opt[m]=j[m]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?b.opt.win[0].nodeName:
this.doc[0].nodeName);this.haswrapper=!1!==b.opt.win;this.win=b.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=b.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=
this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.checkrtlmode=!1;do this.id="ascrail"+O++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=
this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.overflowx=b.opt.overflowx;this.overflowy=b.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;if(H)m=H;else{m=document.createElement("DIV");var h={haspointerlock:"pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document};h.isopera="opera"in window;h.isopera12=h.isopera&&
"getUserMedia"in navigator;h.isie="all"in document&&"attachEvent"in m&&!h.isopera;h.isieold=h.isie&&!("msInterpolationMode"in m.style);h.isie7=h.isie&&!h.isieold&&(!("documentMode"in document)||7==document.documentMode);h.isie8=h.isie&&"documentMode"in document&&8==document.documentMode;h.isie9=h.isie&&"performance"in window&&9<=document.documentMode;h.isie10=h.isie&&"performance"in window&&10<=document.documentMode;h.isie9mobile=/iemobile.9/i.test(navigator.userAgent);h.isie9mobile&&(h.isie9=!1);
h.isie7mobile=!h.isie9mobile&&h.isie7&&/iemobile/i.test(navigator.userAgent);h.ismozilla="MozAppearance"in m.style;h.iswebkit="WebkitAppearance"in m.style;h.ischrome="chrome"in window;h.ischrome22=h.ischrome&&h.haspointerlock;h.ischrome26=h.ischrome&&"transition"in m.style;h.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;h.hasmstouch=window.navigator.msPointerEnabled||!1;h.ismac=/^mac$/i.test(navigator.platform);h.isios=h.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);
h.isios4=h.isios&&!("seal"in Object);h.isandroid=/android/i.test(navigator.userAgent);h.trstyle=!1;h.hastransform=!1;h.hastranslate3d=!1;h.transitionstyle=!1;h.hastransition=!1;h.transitionend=!1;for(var q=["transform","msTransform","webkitTransform","MozTransform","OTransform"],r=0;r<q.length;r++)if("undefined"!=typeof m.style[q[r]]){h.trstyle=q[r];break}h.hastransform=!1!=h.trstyle;h.hastransform&&(m.style[h.trstyle]="translate3d(1px,2px,3px)",h.hastranslate3d=/translate3d/.test(m.style[h.trstyle]));
h.transitionstyle=!1;h.prefixstyle="";h.transitionend=!1;for(var q="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),A=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),u="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),r=0;r<q.length;r++)if(q[r]in m.style){h.transitionstyle=q[r];h.prefixstyle=A[r];h.transitionend=u[r];break}h.ischrome26&&(h.prefixstyle=A[1]);h.hastransition=
h.transitionstyle;b:{q=["-moz-grab","-webkit-grab","grab"];if(h.ischrome&&!h.ischrome22||h.isie)q=[];for(r=0;r<q.length;r++)if(A=q[r],m.style.cursor=A,m.style.cursor==A){q=A;break b}q="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}h.cursorgrabvalue=q;h.hasmousecapture="setCapture"in m;h.hasMutationObserver=!1!==E;m=null;m=H=h}this.detected=m;var f=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=f.hastransform&&b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=
!1;f.cantouch&&(f.ischrome&&!f.isios&&!f.isandroid)&&(this.istouchcapable=!0,f.cantouch=!1);f.cantouch&&(f.ismozilla&&!f.isios)&&(this.istouchcapable=!0,f.cantouch=!1);b.opt.enablemouselockapi||(f.hasmousecapture=!1,f.haspointerlock=!1);this.delayed=function(c,g,d,f){var e=b.delaylist[c],h=(new Date).getTime();if(!f&&e&&e.tt)return!1;e&&e.tt&&clearTimeout(e.tt);if(e&&e.last+d>h&&!e.tt)b.delaylist[c]={last:h+d,tt:setTimeout(function(){b.delaylist[c].tt=0;g.call()},d)};else if(!e||!e.tt)b.delaylist[c]=
{last:h,tt:0},setTimeout(function(){g.call()},0)};this.debounced=function(c,g,d){var e=b.delaylist[c];(new Date).getTime();b.delaylist[c]=g;e||setTimeout(function(){var g=b.delaylist[c];b.delaylist[c]=!1;g.call()},d)};this.synched=function(c,g){b.synclist[c]=g;b.onsync||(w(function(){b.onsync=!1;for(c in b.synclist){var g=b.synclist[c];g&&g.call(b);b.synclist[c]=!1}}),b.onsync=!0);return c};this.unsynched=function(c){b.synclist[c]&&(b.synclist[c]=!1)};this.css=function(c,g){for(var d in g)b.saved.css.push([c,
d,c.css(d)]),c.css(d,g[d])};this.scrollTop=function(c){return"undefined"==typeof c?b.getScrollTop():b.setScrollTop(c)};this.scrollLeft=function(c){return"undefined"==typeof c?b.getScrollLeft():b.setScrollLeft(c)};BezierClass=function(b,g,d,e,f,h,k){this.st=b;this.ed=g;this.spd=d;this.p1=e||0;this.p2=f||1;this.p3=h||0;this.p4=k||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-
b)*(1-b)*(1-b)},getNow:function(){var b=1-((new Date).getTime()-this.ts)/this.spd,g=this.B2(b)+this.B3(b)+this.B4(b);return 0>b?this.ed:this.st+Math.round(this.df*g)},update:function(b,g){this.st=this.getNow();this.ed=b;this.spd=g;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};f.hastranslate3d&&f.isios&&this.doc.css("-webkit-backface-visibility","hidden");var z=function(){var c=b.doc.css(f.trstyle);return c&&"matrix"==
c.substr(0,6)?c.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1};this.getScrollTop=function(c){if(!c){if(c=z())return 16==c.length?-c[13]:-c[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(c){if(!c){if(c=z())return 16==c.length?-c[12]:-c[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};this.notifyScrollEvent=document.createEvent?function(b){var g=document.createEvent("UIEvents");
g.initUIEvent("scroll",!1,!0,window,1);b.dispatchEvent(g)}:document.fireEvent?function(b){var g=document.createEventObject();b.fireEvent("onscroll");g.cancelBubble=!0}:function(){};f.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(c,g){b.doc.translate.y=c;b.doc.translate.ty=-1*c+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");g||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(c,g){b.doc.translate.x=c;b.doc.translate.tx=-1*c+
"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");g||b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(c,g){b.doc.translate.y=c;b.doc.translate.ty=-1*c+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");g||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(c,g){b.doc.translate.x=c;b.doc.translate.tx=-1*c+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");g||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=
function(){return b.docscroll.scrollTop()},this.setScrollTop=function(c){return b.docscroll.scrollTop(c)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(c){return b.docscroll.scrollLeft(c)};this.getTarget=function(b){return!b?!1:b.target?b.target:b.srcElement?b.srcElement:!1};this.hasParent=function(b,g){if(!b)return!1;for(var d=b.target||b.srcElement||b||!1;d&&d.id!=g;)d=d.parentNode||!1;return!1!==d};var B={thin:1,medium:3,thick:5};this.getOffset=function(){if(b.isfixed)return{top:parseFloat(b.win.css("top")),
left:parseFloat(b.win.css("left"))};if(!b.viewport)return b.win.offset();var c=b.win.offset(),g=b.viewport.offset();return{top:c.top-g.top+b.viewport.scrollTop(),left:c.left-g.left+b.viewport.scrollLeft()}};this.updateScrollBar=function(c){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),b.railh&&b.railh.css({width:b.win.innerWidth()});else{var g=b.getOffset(),d=g.top,e=g.left,d=d+s(b.win,"border-top-width",!0);b.win.outerWidth();b.win.innerWidth();var e=e+(b.rail.align?b.win.outerWidth()-
s(b.win,"border-right-width")-b.rail.width:s(b.win,"border-left-width")),f=b.opt.railoffset;f&&(f.top&&(d+=f.top),b.rail.align&&f.left&&(e+=f.left));b.locked||b.rail.css({top:d,left:e,height:c?c.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:d+1,left:1==b.rail.align?e-20:e+b.rail.width+4});b.railh&&!b.locked&&(d=g.top,e=g.left,c=b.railh.align?d+s(b.win,"border-top-width",!0)+b.win.innerHeight()-b.railh.height:d+s(b.win,"border-top-width",!0),e+=s(b.win,"border-left-width"),b.railh.css({top:c,left:e,
width:b.railh.width}))}};this.doRailClick=function(c,g,d){var e;b.locked||(b.cancelEvent(c),g?(g=d?b.doScrollLeft:b.doScrollTop,e=d?(c.pageX-b.railh.offset().left-b.cursorwidth/2)*b.scrollratio.x:(c.pageY-b.rail.offset().top-b.cursorheight/2)*b.scrollratio.y,g(e)):(g=d?b.doScrollLeftBy:b.doScrollBy,e=d?b.scroll.x:b.scroll.y,c=d?c.pageX-b.railh.offset().left:c.pageY-b.rail.offset().top,d=d?b.view.w:b.view.h,e>=c?g(d):g(-d)))};b.hasanimationframe=w;b.hascancelanimationframe=x;b.hasanimationframe?b.hascancelanimationframe||
(x=function(){b.cancelAnimationFrame=!0}):(w=function(b){return setTimeout(b,15-Math.floor(+new Date/1E3)%16)},x=clearInterval);this.init=function(){b.saved.css=[];if(f.isie7mobile)return!0;f.hasmstouch&&b.css(b.ispage?e("html"):b.win,{"-ms-touch-action":"none"});b.zindex="auto";b.zindex=!b.ispage&&"auto"==b.opt.zindex?k()||"auto":b.opt.zindex;!b.ispage&&"auto"!=b.zindex&&b.zindex>C&&(C=b.zindex);b.isie&&(0==b.zindex&&"auto"==b.opt.zindex)&&(b.zindex="auto");if(!b.ispage||!f.cantouch&&!f.isieold&&
!f.isie9mobile){var c=b.docscroll;b.ispage&&(c=b.haswrapper?b.win:b.doc);f.isie9mobile||b.css(c,{"overflow-y":"hidden"});b.ispage&&f.isie7&&("BODY"==b.doc[0].nodeName?b.css(e("html"),{"overflow-y":"hidden"}):"HTML"==b.doc[0].nodeName&&b.css(e("body"),{"overflow-y":"hidden"}));f.isios&&(!b.ispage&&!b.haswrapper)&&b.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var g=e(document.createElement("div"));g.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px","background-color":b.opt.cursorcolor,
border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});g.hborder=parseFloat(g.outerHeight()-g.innerHeight());b.cursor=g;var d=e(document.createElement("div"));d.attr("id",b.id);d.addClass("nicescroll-rails");var h,j,y=["left","right"],s;for(s in y)j=y[s],(h=b.opt.railpadding[j])?d.css("padding-"+j,h+"px"):b.opt.railpadding[j]=0;d.append(g);d.width=Math.max(parseFloat(b.opt.cursorwidth),
g.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;d.css({width:d.width+"px",zIndex:b.zindex,background:b.opt.background,cursor:"default"});d.visibility=!0;d.scrollable=!0;d.align="left"==b.opt.railalign?0:1;b.rail=d;g=b.rail.drag=!1;b.opt.boxzoom&&(!b.ispage&&!f.isieold)&&(g=document.createElement("div"),b.bind(g,"click",b.doZoom),b.zoom=e(g),b.zoom.css({cursor:"pointer","z-index":b.zindex,backgroundImage:"url("+J+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&
b.bind(b.win,"dblclick",b.doZoom),f.cantouch&&b.opt.gesturezoom&&(b.ongesturezoom=function(c){1.5<c.scale&&b.doZoomIn(c);0.8>c.scale&&b.doZoomOut(c);return b.cancelEvent(c)},b.bind(b.win,"gestureend",b.ongesturezoom)));b.railh=!1;if(b.opt.horizrailenabled){b.css(c,{"overflow-x":"hidden"});g=e(document.createElement("div"));g.css({position:"relative",top:0,height:b.opt.cursorwidth,width:"0px","background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,
"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});g.wborder=parseFloat(g.outerWidth()-g.innerWidth());b.cursorh=g;var l=e(document.createElement("div"));l.attr("id",b.id+"-hr");l.addClass("nicescroll-rails");l.height=Math.max(parseFloat(b.opt.cursorwidth),g.outerHeight());l.css({height:l.height+"px",zIndex:b.zindex,background:b.opt.background});l.append(g);l.visibility=!0;l.scrollable=!0;l.align="top"==b.opt.railvalign?0:1;b.railh=l;b.railh.drag=!1}b.ispage?
(d.css({position:"fixed",top:"0px",height:"100%"}),d.align?d.css({right:"0px"}):d.css({left:"0px"}),b.body.append(d),b.railh&&(l.css({position:"fixed",left:"0px",width:"100%"}),l.align?l.css({bottom:"0px"}):l.css({top:"0px"}),b.body.append(l))):(b.ishwscroll?("static"==b.win.css("position")&&b.css(b.win,{position:"relative"}),c="HTML"==b.win[0].nodeName?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",top:1,right:0,"margin-right":d.width+4}),c.append(b.zoom)),d.css({position:"absolute",top:0}),
d.align?d.css({right:0}):d.css({left:0}),c.append(d),l&&(l.css({position:"absolute",left:0,bottom:0}),l.align?l.css({bottom:0}):l.css({top:0}),c.append(l))):(b.isfixed="fixed"==b.win.css("position"),c=b.isfixed?"fixed":"absolute",b.isfixed||(b.viewport=b.getViewport(b.win[0])),b.viewport&&(b.body=b.viewport,!1==/relative|absolute/.test(b.viewport.css("position"))&&b.css(b.viewport,{position:"relative"})),d.css({position:c}),b.zoom&&b.zoom.css({position:c}),b.updateScrollBar(),b.body.append(d),b.zoom&&
b.body.append(b.zoom),b.railh&&(l.css({position:c}),b.body.append(l))),f.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),f.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true"),f.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"}));!1===b.opt.autohidemode?(b.autohidedom=!1,b.rail.css({opacity:b.opt.cursoropacitymax}),b.railh&&b.railh.css({opacity:b.opt.cursoropacitymax})):!0===b.opt.autohidemode?(b.autohidedom=e().add(b.rail),f.isie8&&
(b.autohidedom=b.autohidedom.add(b.cursor)),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh)),b.railh&&f.isie8&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"scroll"==b.opt.autohidemode?(b.autohidedom=e().add(b.rail),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh))):"cursor"==b.opt.autohidemode?(b.autohidedom=e().add(b.cursor),b.railh&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"hidden"==b.opt.autohidemode&&(b.autohidedom=!1,b.hide(),b.locked=!1);if(f.isie9mobile)b.scrollmom=new L(b),b.onmangotouch=
function(){var c=b.getScrollTop(),d=b.getScrollLeft();if(c==b.scrollmom.lastscrolly&&d==b.scrollmom.lastscrollx)return!0;var g=c-b.mangotouch.sy,e=d-b.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(e,2)+Math.pow(g,2)))){var f=0>g?-1:1,p=0>e?-1:1,h=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);80<h-b.mangotouch.tm||b.mangotouch.dry!=f||b.mangotouch.drx!=p?(b.scrollmom.stop(),b.scrollmom.reset(d,c),b.mangotouch.sy=c,b.mangotouch.ly=c,b.mangotouch.sx=d,b.mangotouch.lx=d,b.mangotouch.dry=
f,b.mangotouch.drx=p,b.mangotouch.tm=h):(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-e,b.mangotouch.sy-g),b.mangotouch.tm=h,g=Math.max(Math.abs(b.mangotouch.ly-c),Math.abs(b.mangotouch.lx-d)),b.mangotouch.ly=c,b.mangotouch.lx=d,2<g&&(b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=!1;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)))}},d=b.getScrollTop(),l=b.getScrollLeft(),b.mangotouch={sy:d,ly:d,dry:0,sx:l,lx:l,drx:0,lazy:!1,tm:0},b.bind(b.docscroll,
"scroll",b.onmangotouch);else{if(f.cantouch||b.istouchcapable||b.opt.touchbehavior||f.hasmstouch){b.scrollmom=new L(b);b.ontouchstart=function(c){if(c.pointerType&&2!=c.pointerType)return!1;if(!b.locked){if(f.hasmstouch)for(var d=c.target?c.target:!1;d;){var g=e(d).getNiceScroll();if(0<g.length&&g[0].me==b.me)break;if(0<g.length)return!1;if("DIV"==d.nodeName&&d.id==b.id)break;d=d.parentNode?d.parentNode:!1}b.cancelScroll();if((d=b.getTarget(c))&&/INPUT/i.test(d.nodeName)&&/range/i.test(d.type))return b.stopPropagation(c);
!("clientX"in c)&&"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);b.forcescreen&&(g=c,c={original:c.original?c.original:c},c.clientX=g.screenX,c.clientY=g.screenY);b.rail.drag={x:c.clientX,y:c.clientY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2,dl:!1};if(b.ispage||!b.opt.directionlockdeadzone)b.rail.drag.dl="f";else{var g=e(window).width(),p=e(window).height(),h=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
k=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),p=Math.max(0,k-p),g=Math.max(0,h-g);b.rail.drag.ck=!b.rail.scrollable&&b.railh.scrollable?0<p?"v":!1:b.rail.scrollable&&!b.railh.scrollable?0<g?"h":!1:!1;b.rail.drag.ck||(b.rail.drag.dl="f")}b.opt.touchbehavior&&(b.isiframe&&f.isie)&&(g=b.win.position(),b.rail.drag.x+=g.left,b.rail.drag.y+=g.top);b.hasmoving=!1;b.lastmouseup=!1;b.scrollmom.reset(c.clientX,c.clientY);if(!f.cantouch&&!this.istouchcapable&&!f.hasmstouch){if(!d||
!/INPUT|SELECT|TEXTAREA/i.test(d.nodeName))return!b.ispage&&f.hasmousecapture&&d.setCapture(),b.cancelEvent(c);/SUBMIT|CANCEL|BUTTON/i.test(e(d).attr("type"))&&(pc={tg:d,click:!1},b.preventclick=pc)}}};b.ontouchend=function(c){if(c.pointerType&&2!=c.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt&&(b.scrollmom.doMomentum(),b.rail.drag=!1,b.hasmoving&&(b.hasmoving=!1,b.lastmouseup=!0,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),!f.cantouch)))return b.cancelEvent(c)};var n=b.opt.touchbehavior&&
b.isiframe&&!f.hasmousecapture;b.ontouchmove=function(c,d){if(c.pointerType&&2!=c.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt){if(f.cantouch&&"undefined"==typeof c.original)return!0;b.hasmoving=!0;b.preventclick&&!b.preventclick.click&&(b.preventclick.click=b.preventclick.tg.onclick||!1,b.preventclick.tg.onclick=b.onpreventclick);c=e.extend({original:c},c);"changedTouches"in c&&(c.clientX=c.changedTouches[0].clientX,c.clientY=c.changedTouches[0].clientY);if(b.forcescreen){var g=c;c={original:c.original?
c.original:c};c.clientX=g.screenX;c.clientY=g.screenY}g=ofy=0;if(n&&!d){var p=b.win.position(),g=-p.left;ofy=-p.top}var h=c.clientY+ofy,p=h-b.rail.drag.y,k=c.clientX+g,j=k-b.rail.drag.x,t=b.rail.drag.st-p;b.ishwscroll&&b.opt.bouncescroll?0>t?t=Math.round(t/2):t>b.page.maxh&&(t=b.page.maxh+Math.round((t-b.page.maxh)/2)):(0>t&&(h=t=0),t>b.page.maxh&&(t=b.page.maxh,h=0));if(b.railh&&b.railh.scrollable){var l=b.rail.drag.sl-j;b.ishwscroll&&b.opt.bouncescroll?0>l?l=Math.round(l/2):l>b.page.maxw&&(l=b.page.maxw+
Math.round((l-b.page.maxw)/2)):(0>l&&(k=l=0),l>b.page.maxw&&(l=b.page.maxw,k=0))}g=!1;if(b.rail.drag.dl)g=!0,"v"==b.rail.drag.dl?l=b.rail.drag.sl:"h"==b.rail.drag.dl&&(t=b.rail.drag.st);else{var p=Math.abs(p),j=Math.abs(j),y=b.opt.directionlockdeadzone;if("v"==b.rail.drag.ck){if(p>y&&j<=0.3*p)return b.rail.drag=!1,!0;j>y&&(b.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==b.rail.drag.ck){if(j>y&&p<=0.3*az)return b.rail.drag=!1,!0;p>y&&(b.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}b.synched("touchmove",
function(){b.rail.drag&&2==b.rail.drag.pt&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(t),b.scrollmom.update(k,h),b.railh&&b.railh.scrollable?(b.setScrollLeft(l),b.showCursor(t,l)):b.showCursor(t),f.isie10&&document.selection.clear())});f.ischrome&&b.istouchcapable&&(g=!1);if(g)return b.cancelEvent(c)}}}b.onmousedown=function(c,d){if(!(b.rail.drag&&1!=b.rail.drag.pt)){if(b.locked)return b.cancelEvent(c);b.cancelScroll();b.rail.drag={x:c.clientX,y:c.clientY,sx:b.scroll.x,
sy:b.scroll.y,pt:1,hr:!!d};var g=b.getTarget(c);!b.ispage&&f.hasmousecapture&&g.setCapture();b.isiframe&&!f.hasmousecapture&&(b.saved.csspointerevents=b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"}));return b.cancelEvent(c)}};b.onmouseup=function(c){if(b.rail.drag&&(f.hasmousecapture&&document.releaseCapture(),b.isiframe&&!f.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),1==b.rail.drag.pt))return b.rail.drag=!1,b.cancelEvent(c)};b.onmousemove=function(c){if(b.rail.drag&&
1==b.rail.drag.pt){if(f.ischrome&&0==c.which)return b.onmouseup(c);b.cursorfreezed=!0;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(c.clientX-b.rail.drag.x);0>b.scroll.x&&(b.scroll.x=0);var d=b.scrollvaluemaxw;b.scroll.x>d&&(b.scroll.x=d)}else b.scroll.y=b.rail.drag.sy+(c.clientY-b.rail.drag.y),0>b.scroll.y&&(b.scroll.y=0),d=b.scrollvaluemax,b.scroll.y>d&&(b.scroll.y=d);b.synched("mousemove",function(){b.rail.drag&&1==b.rail.drag.pt&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*
b.scrollratio.x),b.opt.cursordragspeed):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y),b.opt.cursordragspeed))});return b.cancelEvent(c)}};if(f.cantouch||b.opt.touchbehavior)b.onpreventclick=function(c){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,b.preventclick=!1,b.cancelEvent(c)},b.bind(b.win,"mousedown",b.ontouchstart),b.onclick=f.isios?!1:function(c){return b.lastmouseup?(b.lastmouseup=!1,b.cancelEvent(c)):!0},b.opt.grabcursorenabled&&f.cursorgrabvalue&&(b.css(b.ispage?
b.doc:b.win,{cursor:f.cursorgrabvalue}),b.css(b.rail,{cursor:f.cursorgrabvalue}));else{var m=function(c){if(b.selectiondrag){if(c){var d=b.win.outerHeight();c=c.pageY-b.selectiondrag.top;0<c&&c<d&&(c=0);c>=d&&(c-=d);b.selectiondrag.df=c}0!=b.selectiondrag.df&&(b.doScrollBy(2*-Math.floor(b.selectiondrag.df/6)),b.debounced("doselectionscroll",function(){m()},50))}};b.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=
document.selection.type}:function(){return!1};b.onselectionstart=function(){b.ispage||(b.selectiondrag=b.win.offset())};b.onselectionend=function(){b.selectiondrag=!1};b.onselectiondrag=function(c){b.selectiondrag&&b.hasTextSelected()&&b.debounced("selectionscroll",function(){m(c)},250)}}f.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,"MSPointerMove",
b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,"touchcancel",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(c){b.onmousedown(c,!0)}),b.bind(b.cursorh,
"mouseup",function(c){if(!(b.rail.drag&&2==b.rail.drag.pt))return b.rail.drag=!1,b.hasmoving=!1,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),b.cancelEvent(c)}));if(b.opt.cursordragontouch||!f.cantouch&&!b.opt.touchbehavior)b.rail.css({cursor:"default"}),b.railh&&b.railh.css({cursor:"default"}),b.jqbind(b.rail,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.rail,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&
(b.bind(b.rail,"click",function(c){b.doRailClick(c,!1,!1)}),b.bind(b.rail,"dblclick",function(c){b.doRailClick(c,!0,!1)}),b.bind(b.cursor,"click",function(c){b.cancelEvent(c)}),b.bind(b.cursor,"dblclick",function(c){b.cancelEvent(c)})),b.railh&&(b.jqbind(b.railh,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.railh,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.railh,"click",function(c){b.doRailClick(c,
!1,!0)}),b.bind(b.railh,"dblclick",function(c){b.doRailClick(c,!0,!0)}),b.bind(b.cursorh,"click",function(c){b.cancelEvent(c)}),b.bind(b.cursorh,"dblclick",function(c){b.cancelEvent(c)})));!f.cantouch&&!b.opt.touchbehavior?(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.onmouseup),b.bind(document,"mousemove",b.onmousemove),b.onclick&&b.bind(document,"click",b.onclick),!b.ispage&&b.opt.enablescrollonselection&&(b.bind(b.win[0],"mousedown",b.onselectionstart),b.bind(document,"mouseup",b.onselectionend),
b.bind(b.cursor,"mouseup",b.onselectionend),b.cursorh&&b.bind(b.cursorh,"mouseup",b.onselectionend),b.bind(document,"mousemove",b.onselectiondrag)),b.zoom&&(b.jqbind(b.zoom,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.zoom,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}))):(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.ontouchend),b.bind(document,"mousemove",b.ontouchmove),b.onclick&&b.bind(document,"click",b.onclick),b.opt.cursordragontouch&&
(b.bind(b.cursor,"mousedown",b.onmousedown),b.bind(b.cursor,"mousemove",b.onmousemove),b.cursorh&&b.bind(b.cursorh,"mousedown",b.onmousedown),b.cursorh&&b.bind(b.cursorh,"mousemove",b.onmousemove)));b.opt.enablemousewheel&&(b.isiframe||b.bind(f.isie&&b.ispage?document:b.docscroll,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&(!f.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName))&&(b.win.attr("tabindex")||b.win.attr({tabindex:N++}),
b.jqbind(b.win,"focus",function(c){D=b.getTarget(c).id||!0;b.hasfocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"blur",function(){D=!1;b.hasfocus=!1}),b.jqbind(b.win,"mouseenter",function(c){G=b.getTarget(c).id||!0;b.hasmousefocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"mouseleave",function(){G=!1;b.hasmousefocus=!1}))}b.onkeypress=function(c){if(b.locked&&0==b.page.maxh)return!0;c=c?c:window.e;var d=b.getTarget(c);if(d&&/INPUT|TEXTAREA|SELECT|OPTION/.test(d.nodeName)&&
(!d.getAttribute("type")&&!d.type||!/submit|button|cancel/i.tp))return!0;if(b.hasfocus||b.hasmousefocus&&!D||b.ispage&&!D&&!G){d=c.keyCode;if(b.locked&&27!=d)return b.cancelEvent(c);var g=c.ctrlKey||!1,e=c.shiftKey||!1,f=!1;switch(d){case 38:case 63233:b.doScrollBy(72);f=!0;break;case 40:case 63235:b.doScrollBy(-72);f=!0;break;case 37:case 63232:b.railh&&(g?b.doScrollLeft(0):b.doScrollLeftBy(72),f=!0);break;case 39:case 63234:b.railh&&(g?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),f=!0);break;
case 33:case 63276:b.doScrollBy(b.view.h);f=!0;break;case 34:case 63277:b.doScrollBy(-b.view.h);f=!0;break;case 36:case 63273:b.railh&&g?b.doScrollPos(0,0):b.doScrollTo(0);f=!0;break;case 35:case 63275:b.railh&&g?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);f=!0;break;case 32:b.opt.spacebarenabled&&(e?b.doScrollBy(b.view.h):b.doScrollBy(-b.view.h),f=!0);break;case 27:b.zoomactive&&(b.doZoom(),f=!0)}if(f)return b.cancelEvent(c)}};b.opt.enablekeyboard&&b.bind(document,f.isopera&&
!f.isopera12?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.lazyResize);b.bind(window,"orientationchange",b.lazyResize);b.bind(window,"load",b.lazyResize);if(f.ischrome&&!b.ispage&&!b.haswrapper){var r=b.win.attr("style"),d=parseFloat(b.win.css("width"))+1;b.win.css("width",d);b.synched("chromefix",function(){b.win.attr("style",r)})}b.onAttributeChange=function(){b.lazyResize(250)};!b.ispage&&!b.haswrapper&&(!1!==E?(b.observer=new E(function(c){c.forEach(b.onAttributeChange)}),b.observer.observe(b.win[0],
{childList:!0,characterData:!1,attributes:!0,subtree:!1}),b.observerremover=new E(function(c){c.forEach(function(c){if(0<c.removedNodes.length)for(var d in c.removedNodes)if(c.removedNodes[d]==b.win[0])return b.remove()})}),b.observerremover.observe(b.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(b.bind(b.win,f.isie&&!f.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),f.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange),b.bind(b.win,"DOMNodeRemoved",
function(c){c.target==b.win[0]&&b.remove()})));!b.ispage&&b.opt.boxzoom&&b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.lazyResize);b.checkrtlmode=!0;b.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var q=function(){b.iframexd=!1;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(d){b.iframexd=!0,c=!1}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;b.forcescreen=!0;b.isiframe&&
(b.iframe={doc:e(c),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=e(b.iframe.body));if(!f.isios&&b.opt.iframeautoresize&&!b.isiframe){b.win.scrollTop(0);b.doc.height("");var g=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight);b.doc.height(g)}b.lazyResize(30);f.isie7&&
b.css(e(b.iframe.html),{"overflow-y":"hidden"});b.css(e(b.iframe.body),{"overflow-y":"hidden"});"contentWindow"in this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(c,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(c,f.isopera?"keypress":"keydown",b.onkeypress);if(f.cantouch||b.opt.touchbehavior)b.bind(c,"mousedown",b.onmousedown),b.bind(c,"mousemove",function(c){b.onmousemove(c,!0)}),b.opt.grabcursorenabled&&f.cursorgrabvalue&&
b.css(e(c.body),{cursor:f.cursorgrabvalue});b.bind(c,"mouseup",b.onmouseup);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,"dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){q.call(b.doc[0],!1)},500);b.bind(this.doc,"load",q)}};this.showCursor=function(c,d){b.cursortimeout&&(clearTimeout(b.cursortimeout),b.cursortimeout=0);if(b.rail){b.autohidedom&&(b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),
b.cursoractive=!0);if(!b.rail.drag||1!=b.rail.drag.pt)"undefined"!=typeof c&&!1!==c&&(b.scroll.y=Math.round(1*c/b.scrollratio.y)),"undefined"!=typeof d&&(b.scroll.x=Math.round(1*d/b.scrollratio.x));b.cursor.css({height:b.cursorheight,top:b.scroll.y});b.cursorh&&(!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=!0);b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=
function(c){!b.cursortimeout&&(b.rail&&b.autohidedom)&&(b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=!1;b.cursortimeout=0},c||b.opt.hidecursordelay))};this.noticeCursor=function(c,d,e){b.showCursor(d,e);b.rail.active||b.hideCursor(c)};this.getContentSize=b.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(c,d){if(!b.win)return!1;if(!b.haswrapper&&!b.ispage){if("none"==b.win.css("display"))return b.visibility&&
b.hideRail().hideRailHr(),!1;!b.hidden&&!b.visibility&&b.showRail().showRailHr()}var e=b.page.maxh,f=b.page.maxw,h=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=d?d:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==e&&b.page.maxw==f&&b.view.w==h){if(b.ispage)return b;e=b.win.offset();if(b.lastposition&&(f=b.lastposition,f.top==e.top&&f.left==
e.left))return b;b.lastposition=e}0==b.page.maxh?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=!1):b.rail.scrollable=!0;0==b.page.maxw?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=!1):b.railh.scrollable=!0;b.locked=0==b.page.maxh&&0==b.page.maxw;if(b.locked)return b.ispage||b.updateScrollBar(b.view),!1;!b.hidden&&!b.visibility?b.showRail().showRailHr():
!b.hidden&&!b.railh.visibility&&b.showRailHr();b.istextarea&&(b.win.css("resize")&&"none"!=b.win.css("resize"))&&(b.view.h-=20);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorwidth);b.scrollvaluemax=
b.view.h-b.cursorheight-b.cursor.hborder;b.railh&&(b.railh.width=0<b.page.maxh?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder);b.checkrtlmode&&b.railh&&(b.checkrtlmode=!1,b.opt.rtlmode&&0==b.scroll.x&&b.setScrollLeft(b.page.maxw));b.ispage||b.updateScrollBar(b.view);b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScrollTop(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),
b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&0==b.getScrollTop()&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=b.onResize;this.lazyResize=function(c){c=isNaN(c)?30:c;b.delayed("resize",b.resize,c);return b};this._bind=function(c,d,e,f){b.events.push({e:c,n:d,f:e,b:f,q:!1});c.addEventListener?c.addEventListener(d,e,f||!1):c.attachEvent?c.attachEvent("on"+d,e):c["on"+d]=e};this.jqbind=function(c,d,f){b.events.push({e:c,
n:d,f:f,q:!0});e(c).bind(d,f)};this.bind=function(c,d,e,h){var k="jquery"in c?c[0]:c;"mousewheel"==d?"onwheel"in b.win?b._bind(k,"wheel",e,h||!1):(c="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",n(k,c,e,h||!1),"DOMMouseScroll"==c&&n(k,"MozMousePixelScroll",e,h||!1)):k.addEventListener?(f.cantouch&&/mouseup|mousedown|mousemove/.test(d)&&b._bind(k,"mousedown"==d?"touchstart":"mouseup"==d?"touchend":"touchmove",function(b){if(b.touches){if(2>b.touches.length){var c=b.touches.length?
b.touches[0]:b;c.original=b;e.call(this,c)}}else b.changedTouches&&(c=b.changedTouches[0],c.original=b,e.call(this,c))},h||!1),b._bind(k,d,e,h||!1),f.cantouch&&"mouseup"==d&&b._bind(k,"touchcancel",e,h||!1)):b._bind(k,d,function(c){if((c=c||window.event||!1)&&c.srcElement)c.target=c.srcElement;"pageY"in c||(c.pageX=c.clientX+document.documentElement.scrollLeft,c.pageY=c.clientY+document.documentElement.scrollTop);return!1===e.call(k,c)||!1===h?b.cancelEvent(c):!0})};this._unbind=function(b,d,e,f){b.removeEventListener?
b.removeEventListener(d,e,f):b.detachEvent?b.detachEvent("on"+d,e):b["on"+d]=!1};this.unbindAll=function(){for(var c=0;c<b.events.length;c++){var d=b.events[c];d.q?d.e.unbind(d.n,d.f):b._unbind(d.e,d.n,d.f,d.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&b.preventManipulation();b.cancelBubble=!0;b.cancel=!0;return b.returnValue=!1};this.stopPropagation=
function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;if(b.stopPropagation)return b.stopPropagation();b.cancelBubble&&(b.cancelBubble=!0);return!1};this.showRail=function(){if(0!=b.page.maxh&&(b.ispage||"none"!=b.win.css("display")))b.visibility=!0,b.rail.visibility=!0,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(0!=b.page.maxw&&(b.ispage||"none"!=b.win.css("display")))b.railh.visibility=!0,b.railh.css("display","block");return b};this.hideRail=
function(){b.visibility=!1;b.rail.visibility=!1;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=!1;b.railh.css("display","none");return b};this.show=function(){b.hidden=!1;b.locked=!1;return b.showRail().showRailHr()};this.hide=function(){b.hidden=!0;b.locked=!0;return b.hideRail().hideRailHr()};this.toggle=function(){return b.hidden?b.show():b.hide()};this.remove=function(){b.stop();b.cursortimeout&&clearTimeout(b.cursortimeout);b.doZoomOut();
b.unbindAll();!1!==b.observer&&b.observer.disconnect();!1!==b.observerremover&&b.observerremover.disconnect();b.events=[];b.cursor&&b.cursor.remove();b.cursorh&&b.cursorh.remove();b.rail&&b.rail.remove();b.railh&&b.railh.remove();b.zoom&&b.zoom.remove();for(var c=0;c<b.saved.css.length;c++){var d=b.saved.css[c];d[0].css(d[1],"undefined"==typeof d[2]?"":d[2])}b.saved=!1;b.me.data("__nicescroll","");e.nicescroll.remove(b);for(var f in b)b[f]=null,delete b[f];b=null};this.scrollstart=function(c){this.onscrollstart=
c;return b};this.scrollend=function(c){this.onscrollend=c;return b};this.scrollcancel=function(c){this.onscrollcancel=c;return b};this.zoomin=function(c){this.onzoomin=c;return b};this.zoomout=function(c){this.onzoomout=c;return b};this.isScrollable=function(b){b=b.target?b.target:b;if("OPTION"==b.nodeName)return!0;for(;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var d=e(b),d=d.css("overflowY")||d.css("overflowX")||d.css("overflow")||"";if(/scroll|auto/.test(d))return b.clientHeight!=b.scrollHeight;
b=b.parentNode?b.parentNode:!1}return!1};this.getViewport=function(b){for(b=b&&b.parentNode?b.parentNode:!1;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var d=e(b),f=d.css("overflowY")||d.css("overflowX")||d.css("overflow")||"";if(/scroll|auto/.test(f)&&b.clientHeight!=b.scrollHeight||0<d.getNiceScroll().length)return d;b=b.parentNode?b.parentNode:!1}return!1};this.onmousewheel=function(c){if(b.locked)return!0;if(b.rail.drag)return b.cancelEvent(c);if(!b.rail.scrollable)return b.railh&&b.railh.scrollable?
b.onmousewheelhr(c):!0;var d=+new Date,e=!1;b.opt.preservenativescrolling&&b.checkarea+600<d&&(b.nativescrollingarea=b.isScrollable(c),e=!0);b.checkarea=d;if(b.nativescrollingarea)return!0;if(c=v(c,!1,e))b.checkarea=0;return c};this.onmousewheelhr=function(c){if(b.locked||!b.railh.scrollable)return!0;if(b.rail.drag)return b.cancelEvent(c);var d=+new Date,e=!1;b.opt.preservenativescrolling&&b.checkarea+600<d&&(b.nativescrollingarea=b.isScrollable(c),e=!0);b.checkarea=d;return b.nativescrollingarea?
!0:b.locked?b.cancelEvent(c):v(c,!0,e)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();b.cursorfreezed=!1;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=function(c){var d=Math.round(10*b.opt.scrollspeed);c=Math.min(d,Math.round(c/20*b.opt.scrollspeed));return 20<c?c:0};b.opt.smoothscroll?b.ishwscroll&&f.hastransition&&b.opt.usetransition?(this.prepareTransition=function(c,d){var e=d?20<c?c:0:b.getTransitionSpeed(c),
h=e?f.prefixstyle+"transform "+e+"ms ease-out":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=h)b.lasttransitionstyle=h,b.doc.css(f.transitionstyle,h);return e},this.doScrollLeft=function(c,d){var e=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,e,d)},this.doScrollTop=function(c,d){var e=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(e,c,d)},this.doScrollPos=function(c,d,e){var h=b.getScrollTop(),k=b.getScrollLeft();(0>(b.newscrolly-h)*(d-h)||0>(b.newscrollx-k)*
(c-k))&&b.cancelScroll();!1==b.opt.bouncescroll&&(0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>c?c=0:c>b.page.maxw&&(c=b.page.maxw));if(b.scrollrunning&&c==b.newscrollx&&d==b.newscrolly)return!1;b.newscrolly=d;b.newscrollx=c;b.newscrollspeed=e||!1;if(b.timer)return!1;b.timer=setTimeout(function(){var e=b.getScrollTop(),h=b.getScrollLeft(),k,p;k=c-h;p=d-e;k=Math.round(Math.sqrt(Math.pow(k,2)+Math.pow(p,2)));k=b.newscrollspeed&&1<b.newscrollspeed?b.newscrollspeed:b.getTransitionSpeed(k);b.newscrollspeed&&
1>=b.newscrollspeed&&(k*=b.newscrollspeed);b.prepareTransition(k,!0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);0<k&&(!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:e},request:{x:c,y:d},end:{x:b.newscrollx,y:b.newscrolly},speed:k}),f.transitionend?b.scrollendtrapped||(b.scrollendtrapped=!0,b.bind(b.doc,f.transitionend,b.onScrollEnd,!1)):(b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),b.scrollendtrapped=setTimeout(b.onScrollEnd,
k)),b.timerscroll={bz:new BezierClass(e,b.newscrolly,k,0,0,0.58,1),bh:new BezierClass(h,b.newscrollx,k,0,0,0.58,1)},b.cursorfreezed||(b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)));b.synched("doScroll-set",function(){b.timer=0;b.scrollendtrapped&&(b.scrollrunning=!0);b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return!0;var c=b.getScrollTop(),
d=b.getScrollLeft();b.scrollrunning=!1;f.transitionend||clearTimeout(f.transitionend);b.scrollendtrapped=!1;b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(d);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;b.cursorfreezed=!1;b.showCursor(c,d);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.scrollendtrapped=!1;b.prepareTransition(0);b.timerscroll&&
b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;var c=b.getScrollTop(),d=b.getScrollLeft();b.setScrollTop(c);b.railh&&b.setScrollLeft(d);b.noticeCursor(!1,c,d);b.cursorfreezed=!1;0>c?c=0:c>b.page.maxh&&(c=b.page.maxh);0>d?d=0:d>b.page.maxw&&(d=b.page.maxw);if(c!=b.newscrolly||d!=b.newscrollx)return b.doScrollPos(d,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:d,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=
!1}):(this.doScrollLeft=function(c,d){var e=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,e,d)},this.doScrollTop=function(c,d){var e=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(e,c,d)},this.doScrollPos=function(c,d,e){function f(){if(b.cancelAnimationFrame)return!0;b.scrollrunning=!0;if(n=1-n)return b.timer=w(f)||1;var c=0,d=sy=b.getScrollTop();if(b.dst.ay){var d=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,e=d-sy;if(0>e&&d<b.newscrolly||0<e&&d>b.newscrolly)d=
b.newscrolly;b.setScrollTop(d);d==b.newscrolly&&(c=1)}else c=1;var g=sx=b.getScrollLeft();if(b.dst.ax){g=b.bzscroll?b.dst.px+b.bzscroll.getNow()*b.dst.ax:b.newscrollx;e=g-sx;if(0>e&&g<b.newscrollx||0<e&&g>b.newscrollx)g=b.newscrollx;b.setScrollLeft(g);g==b.newscrollx&&(c+=1)}else c+=1;2==c?(b.timer=0,b.cursorfreezed=!1,b.bzscroll=!1,b.scrollrunning=!1,0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>g?g=0:g>b.page.maxw&&(g=b.page.maxw),g!=b.newscrollx||d!=b.newscrolly?b.doScrollPos(g,d):b.onscrollend&&b.onscrollend.call(b,
{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})):b.timer=w(f)||1}d="undefined"==typeof d||!1===d?b.getScrollTop(!0):d;if(b.timer&&b.newscrolly==d&&b.newscrollx==c)return!0;b.timer&&x(b.timer);b.timer=0;var h=b.getScrollTop(),k=b.getScrollLeft();(0>(b.newscrolly-h)*(d-h)||0>(b.newscrollx-k)*(c-k))&&b.cancelScroll();b.newscrolly=d;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)0>b.newscrolly?b.newscrolly=0:b.newscrolly>b.page.maxh&&(b.newscrolly=b.page.maxh);if(!b.bouncescroll||
!b.railh.visibility)0>b.newscrollx?b.newscrollx=0:b.newscrollx>b.page.maxw&&(b.newscrollx=b.page.maxw);b.dst={};b.dst.x=c-k;b.dst.y=d-h;b.dst.px=k;b.dst.py=h;var j=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,2)));b.dst.ax=b.dst.x/j;b.dst.ay=b.dst.y/j;var l=0,s=j;0==b.dst.x?(l=h,s=d,b.dst.ay=1,b.dst.py=0):0==b.dst.y&&(l=k,s=c,b.dst.ax=1,b.dst.px=0);j=b.getTransitionSpeed(j);e&&1>=e&&(j*=e);b.bzscroll=0<j?b.bzscroll?b.bzscroll.update(s,j):new BezierClass(l,s,j,0,1,0,1):!1;if(!b.timer){(h==
b.page.maxh&&d>=b.page.maxh||k==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();var n=1;b.cancelAnimationFrame=!1;b.timer=1;b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:k,y:h},request:{x:c,y:d},end:{x:b.newscrollx,y:b.newscrolly},speed:j});f();(h==b.page.maxh&&d>=h||k==b.page.maxw&&c>=k)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&x(b.timer);b.timer=0;b.bzscroll=!1;b.scrollrunning=!1;return b}):(this.doScrollLeft=function(c,
d){var e=b.getScrollTop();b.doScrollPos(c,e,d)},this.doScrollTop=function(c,d){var e=b.getScrollLeft();b.doScrollPos(e,c,d)},this.doScrollPos=function(c,d){var e=c>b.page.maxw?b.page.maxw:c;0>e&&(e=0);var f=d>b.page.maxh?b.page.maxh:d;0>f&&(f=0);b.synched("scroll",function(){b.setScrollTop(f);b.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(c,d){var e=0,e=d?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(!0))-c;if(b.bouncescroll){var f=
Math.round(b.view.h/2);e<-f?e=-f:e>b.page.maxh+f&&(e=b.page.maxh+f)}b.cursorfreezed=!1;py=b.getScrollTop(!0);if(0>e&&0>=py)return b.noticeCursor();if(e>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.doScrollTop(e)};this.doScrollLeftBy=function(c,d){var e=0,e=d?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(!0))-c;if(b.bouncescroll){var f=Math.round(b.view.w/2);e<-f?e=-f:e>b.page.maxw+f&&(e=b.page.maxw+f)}b.cursorfreezed=!1;px=b.getScrollLeft(!0);
if(0>e&&0>=px||e>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(e)};this.doScrollTo=function(c,d){d&&Math.round(c*b.scrollratio.y);b.cursorfreezed=!1;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(!1,c)};b.onscroll=function(){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.railh&&(b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)));
b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=!0;b.zoomrestore={style:{}};var d="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),h=b.win[0].style,k;for(k in d){var j=d[k];b.zoomrestore.style[j]="undefined"!=typeof h[j]?h[j]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-
b.win.height()};f.isios4&&(b.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));b.win.css({position:f.isios4?"absolute":"fixed",top:0,left:0,"z-index":C+100,margin:"0px"});d=b.win.css("backgroundColor");(""==d||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(d))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":C+101});b.zoom.css({"z-index":C+102});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=
function(c){if(b.zoomactive)return b.zoomactive=!1,b.win.css("margin",""),b.win.css(b.zoomrestore.style),f.isios4&&e(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.zindex}),b.zoom.css({"z-index":b.zindex}),b.zoomrestore=!1,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:e(window).width()-
b.zoomrestore.padding.w+"px",height:e(window).height()-b.zoomrestore.padding.h+"px"});b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init();e.nicescroll.push(this)},L=function(e){var d=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,j){d.stop();var n=d.time();d.steptime=
0;d.lasttime=n;d.speedx=0;d.speedy=0;d.lastx=e;d.lasty=j;d.lastscrollx=-1;d.lastscrolly=-1};this.update=function(e,j){var n=d.time();d.steptime=n-d.lasttime;d.lasttime=n;var n=j-d.lasty,v=e-d.lastx,b=d.nc.getScrollTop(),m=d.nc.getScrollLeft(),b=b+n,m=m+v;d.snapx=0>m||m>d.nc.page.maxw;d.snapy=0>b||b>d.nc.page.maxh;d.speedx=v;d.speedy=n;d.lastx=e;d.lasty=j};this.stop=function(){d.nc.unsynched("domomentum2d");d.timer&&clearTimeout(d.timer);d.timer=0;d.lastscrollx=-1;d.lastscrolly=-1};this.doSnapy=function(e,
j){var n=!1;0>j?(j=0,n=!0):j>d.nc.page.maxh&&(j=d.nc.page.maxh,n=!0);0>e?(e=0,n=!0):e>d.nc.page.maxw&&(e=d.nc.page.maxw,n=!0);n&&d.nc.doScrollPos(e,j,d.nc.opt.snapbackspeed)};this.doMomentum=function(e){var j=d.time(),n=e?j+e:d.lasttime;e=d.nc.getScrollLeft();var v=d.nc.getScrollTop(),b=d.nc.page.maxh,m=d.nc.page.maxw;d.speedx=0<m?Math.min(60,d.speedx):0;d.speedy=0<b?Math.min(60,d.speedy):0;n=n&&50>=j-n;if(0>v||v>b||0>e||e>m)n=!1;e=d.speedx&&n?d.speedx:!1;if(d.speedy&&n&&d.speedy||e){var h=Math.max(16,
d.steptime);50<h&&(e=h/50,d.speedx*=e,d.speedy*=e,h=50);d.demulxy=0;d.lastscrollx=d.nc.getScrollLeft();d.chkx=d.lastscrollx;d.lastscrolly=d.nc.getScrollTop();d.chky=d.lastscrolly;var q=d.lastscrollx,r=d.lastscrolly,u=function(){var e=600<d.time()-j?0.04:0.02;if(d.speedx&&(q=Math.floor(d.lastscrollx-d.speedx*(1-d.demulxy)),d.lastscrollx=q,0>q||q>m))e=0.1;if(d.speedy&&(r=Math.floor(d.lastscrolly-d.speedy*(1-d.demulxy)),d.lastscrolly=r,0>r||r>b))e=0.1;d.demulxy=Math.min(1,d.demulxy+e);d.nc.synched("domomentum2d",
function(){d.speedx&&(d.nc.getScrollLeft()!=d.chkx&&d.stop(),d.chkx=q,d.nc.setScrollLeft(q));d.speedy&&(d.nc.getScrollTop()!=d.chky&&d.stop(),d.chky=r,d.nc.setScrollTop(r));d.timer||(d.nc.hideCursor(),d.doSnapy(q,r))});1>d.demulxy?d.timer=setTimeout(u,h):(d.stop(),d.nc.hideCursor(),d.doSnapy(q,r))};u()}else d.doSnapy(d.nc.getScrollLeft(),d.nc.getScrollTop())}},z=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(j){var d=e.data(j,"__nicescroll")||!1;return d&&d.ishwscroll?d.getScrollTop():z.call(j)},
set:function(j,d){var k=e.data(j,"__nicescroll")||!1;k&&k.ishwscroll?k.setScrollTop(parseInt(d)):z.call(j,d);return this}};e.fn.scrollTop=function(j){if("undefined"==typeof j){var d=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return d&&d.ishwscroll?d.getScrollTop():z.call(this)}return this.each(function(){var d=e.data(this,"__nicescroll")||!1;d&&d.ishwscroll?d.setScrollTop(parseInt(j)):z.call(e(this),j)})};var B=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(j){var d=e.data(j,"__nicescroll")||
!1;return d&&d.ishwscroll?d.getScrollLeft():B.call(j)},set:function(j,d){var k=e.data(j,"__nicescroll")||!1;k&&k.ishwscroll?k.setScrollLeft(parseInt(d)):B.call(j,d);return this}};e.fn.scrollLeft=function(j){if("undefined"==typeof j){var d=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return d&&d.ishwscroll?d.getScrollLeft():B.call(this)}return this.each(function(){var d=e.data(this,"__nicescroll")||!1;d&&d.ishwscroll?d.setScrollLeft(parseInt(j)):B.call(e(this),j)})};for(var F=function(j){var d=this;
this.length=0;this.name="nicescrollarray";this.each=function(e){for(var j=0,k=0;k<d.length;k++)e.call(d[k],j++);return d};this.push=function(e){d[d.length]=e;d.length++};this.remove=function(e){d.each(function(j){this.id===e.id&&(delete d[j],d.length--)})};this.eq=function(e){return d[e]};if(j)for(a=0;a<j.length;a++){var k=e.data(j[a],"__nicescroll")||!1;k&&(this[this.length]=k,this.length++)}return this},u=F.prototype,M="show hide toggle onResize resize remove stop doScrollPos".split(" "),Q=function(e,
d){e[d]=function(){var e=arguments;return this.each(function(){this[d].apply(this,e)})}},I=0;I<M.length;I++)Q(u,M[I]);e.fn.getNiceScroll=function(j){return"undefined"==typeof j?new F(this):e.data(this[j],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(j){return e.data(j,"__nicescroll")?!0:!1}});e.fn.niceScroll=function(j,d){"undefined"==typeof d&&("object"==typeof j&&!("jquery"in j))&&(d=j,j=!1);var k=new F;"undefined"==typeof d&&(d={});j&&(d.doc=e(j),d.win=e(this));var s=!("doc"in
d);!s&&!("win"in d)&&(d.win=e(this));this.each(function(){var j=e(this).data("__nicescroll")||!1;j||(d.doc=s?e(this):d.doc,j=new P(d,e(this)),e(this).data("__nicescroll",j));k.push(j)});return 1==k.length?k[0]:k};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new F,e.nicescroll.options=K)})(jQuery);

define("BenchmarkViewModel", [], function () {
    var vm = function () {
        this.name = ko.observable('');
        this.expression = ko.observable('');
        this.hz = ko.observable(0);
        this.relativateMarginError = ko.observable('');
        this.timesFaster = ko.observable('pending...');
        this.slowest = ko.observable(false);
        this.fastest = ko.observable(false);
        this.iterationPerSampleCycle = ko.observable(0);
        this.numAnalysisCycles = ko.observable(0);
        this.numSampleCycles = ko.observable(0);
    };

    return vm;
});
define("Spy", [], function () {
    "use strict";
    return function (F) {
        function G() {
            var args = Array.prototype.slice.call(arguments);
            G.calls.push(args);
            F.apply(this, args);
        }

        G.prototype = F.prototype;
        G.calls = [];

        return G;
    };
});
define("Suite", ['Test', 'benchmark', 'SuiteViewModel'], function (Test, Benchmark, sVM) {
    function suite(desc, jsFunc, framework) {
        "use strict";
        var self = this;
        self.vm, self.jsContext;
        self.themeManager = window.ThemeManager;
        self.framework = "itchcork";
        if (framework) {
            self.framework = framework;
        }
        self.highlight = function (code) {
            if (self.framework == "itchcork") {

                return code
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/('.*?')/gm, '<span class="string">$1</span>')
                    .replace(/\bnew *(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
                    .replace(/(function|new|throw|return|var|if|else|prototype|Object|Array|Boolean|-&gt;|@|::|this)/g, '<span class="keyword">$1</span>');
            } else {
                return code;
            }
        };
        self.setupContextBreakdown = function (context, name) {
            console.log(context);
            var jsStr = '', coffeeStr = '';

            for (var prop in context) {
                if (context[prop] instanceof Function) {
                    jsStr = context[prop].toString();
                    try {
                        coffeeStr = Js2coffee.build(jsStr);
                        var tc = { name: name + '.' + prop, jsStr: self.highlight(jsStr), coffeeStr: self.highlight(coffeeStr)};
                        self.vm.testCases.push(tc);
                    } catch (err) {
                        var tc = { name: name + '.' + prop, jsStr: self.highlight(jsStr), coffeeStr: ''};
                        self.vm.testCases.push(tc);
                    }

                } else if (context[prop] instanceof Object) {
                    var tc = { name: name + prop, jsStr: Object.toSource ? context[prop].toSource() : 'is instanceof Object', coffeeStr: ''};
                    self.vm.testCases.push(tc);
                }
                if (context[prop] && context[prop].prototype && prop !== "constructor") {
                    self.setupContextBreakdown(context[prop].prototype, name + '.' + prop + '.prototype');
                }
            }
        };

        self.map = function () {
            self.vm = new sVM();
            self.vm.suiteDesc(desc);
            self.vm.jsContextStr(jsFunc.toString());
            self.vm.coffeeContextStr(self.highlight(Js2coffee.build(self.vm.jsContextStr())));
            self.vm.jsContextStr(self.highlight(self.vm.jsContextStr()));
            self.jsContext = new jsFunc();
            self.setupContextBreakdown(self.jsContext, jsFunc.name);
        };

        self.map(desc);


        self.add = function (shouldEqual, func) {
            if (typeof func == 'function') {
                self.addTestWithBenchmarks(shouldEqual, func, null, false);
            }
            return self;
        }

        self.currentTest;

        self.it = function (describe, func, shouldBe) {
            self.currentTest = self.addTestWithBenchmarks(shouldBe, func, describe, null, true);

            return self;
        };

        self.shouldBe = function shouldBe(val) {
            self.currentTest.shouldEqual = val;
            self.processTest(self.currentTest);
            return self;
        };

        self.processTest = function (test) {
            if (test.run()) {
                self.vm.passedCount(self.vm.passedCount() + 1);
                if (window.suiteView)
                    window.suiteView.incrementPassedCount();
            } else {
                self.vm.failedCount(self.vm.failedCount() + 1);
                if (window.suiteView)
                    window.suiteView.incrementFailedCount();
            }
            self.vm.tests.push(test);
        }

        self.addTestWithBenchmarks = function (shouldEqual, testFunc, describe, name, defer) {
            var test = new Test(shouldEqual, testFunc, new jsFunc(), name, describe);
            if (!defer) {
                self.processTest(test);
            }


            if (name) {
                var fn = (function (context, name) {
                    return function () {
                        context[name]();
                    };
                })(self.jsContext, name);
                self.vm.benchmarkSuite.add({
                    'name': test.expression,
                    'fn': fn,
                    'async': true,
                    'queued': true,
                    'minSamples': 100});
            }
            else {
                self.vm.benchmarkSuite.add(test.expression, function () {
                        testFunc(test.context);
                    },
                    { 'async': true, 'queued': true, 'minSamples': 100});
            }


            return test;
        };

        self.shouldEqual = function (shouldEqual) {
            self.shouldEqualValue = shouldEqual;
            return self;
        };

        self.compareBenchmarks = function () {
            var func = function (c, tc) {
                return c[tc]();
            };
            for (var testcase in self.jsContext) {
                console.log(typeof self.jsContext[testcase]);
                if (typeof self.jsContext[testcase] === 'function') {
                    self.addTestWithBenchmarks(self.shouldEqualValue, func, testcase, false);
                }
            }
            self.benchmark();

            return self;
        };

        self.benchmark = function () {
            self.vm.benchmarkingEnabled(true);
            self.vm.processBenchmarks();
        };

        if (window.suiteView)
            window.suiteView.add(self);
    };
    return suite;
});
define("SuiteView", ['UnitTestFrameworkManager'], function (utfm) {
    function view() {

        var self = this;

        self.unitTestFrameworkManager = new utfm();
        self.unitTestFrameworkManager.init();
        self.menu = document.getElementById('menu');
        self.view = document.getElementById('view');
        self.suites = new ko.observableArray([]);
        self.totalTests = new ko.observable(0);
        self.totalPassed = new ko.observable(0);
        self.totalFailed = new ko.observable(0);
        self.githubAccount = new ko.observable('adamjmoon');
        self.githubRepo = new ko.observable('itchcork');
        self.githubBranch = new ko.observable('master');
        self.contextRoot = new ko.observable('raw.github.com/' + self.githubAccount() + '/' + self.githubRepo() + '/' + self.githubBranch() + '/');
        self.vendorRoot = new ko.observable(self.contextRoot() + 'vendor/');
        self.currentTheme = ko.observable(amplify.store('currentTheme'));
        self.currentView = ko.observable('');
        var customTheme = amplify.store('customTheme');
        self.cto = {};
        for (var prop in customTheme) {
            self.cto[prop] = ko.observable(customTheme[prop]);
        }
        for (var prop in self.cto) {
            self.cto[prop].subscribe(new Function('newValue', "window.ThemeManager.updateCustom('" + prop + "',newValue);")

            );
        }

        self.reset = function () {
            "use strict";
            self.suites([]);
            self.totalTests(0);
            self.totalPassed(0);
            self.totalFailed(0);
        }


        self.setMenuHeight = function () {

            if (self.view.scrollHeight > window.innerHeight) {
                if (self.view.scrollHeight > self.menu.scrollHeight) {
                    self.menu.style.height = self.view.scrollHeight - 45 + 'px';
                }
            }
            else {
                self.menu.style.height = window.innerHeight - 45 + 'px';
            }

        };

        self.add = function (suite) {

            suite.vm.num = self.suites().length + 1;
            self.suites.push(suite.vm);
            if (self.suites().length === 1 && self.unitTestFrameworkManager.getFramework() === 'itchcork') {
                self.bindView();
            }

            suite.vm.benchmarksDone.subscribe(function (newValue) {
                self.setMenuHeight();
            });

        };

        self.incrementPassedCount = function () {
            self.totalTests(self.totalTests() + 1);
            self.totalPassed(self.totalPassed() + 1);
        };

        self.incrementFailedCount = function () {
            self.totalTests(self.totalTests() + 1);
            self.totalFailed(self.totalFailed() + 1);
        };

        self.bindView = function () {

            ko.applyBindings(self, document.getElementById('frame'));
            self.setMenuHeight();
            require([self.vendorRoot() + 'jscolor'], function () {
                jscolor.init();
            });
            self.setupNiceScroll();

        };


        self.setTheme = function (theme) {
            window.ThemeManager.set(theme);
            self.currentTheme(theme);
        };

        self.toggleMenu = function () {
            var menu = document.getElementById('menu');
            if (menu.style.display != 'none') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        };


        self.setupNiceScroll = function () {
            window.scrollTo(0, 0);
            $("html").niceScroll();
            $("#view").niceScroll();
            self.view.onresize = function () {
                self.nice.resize();
            };
        };
        self.scrollToSelector = function (selector) {
            window.scrollTo(0, $(selector).position().top);
        };

        self.collapseAll = function () {
            if ($("#rightCorkCollapse").hasClass('expandAll')) {
                $('div.collapsed').click();
                $("#rightCorkCollapse").removeClass('expandAll').addClass('collapseAll');
            } else {
                $('div.in').siblings().children('.collapseToggle').click();
                $("#rightCorkCollapse").removeClass('collapseAll').addClass('expandAll');
            }
        };

    };
    return view;
});

define("SuiteViewModel", ['benchmark', 'BenchmarkViewModel'], function (Benchmark, bVM) {
    var vm = function () {
        var self = this;
        this.num = 0;
        self.passedCount = ko.observable(0), self.failedCount = ko.observable(0);
        this.suiteDesc = ko.observable('');
        this.jsContextStr = ko.observable('');
        this.coffeeContextStr = ko.observable('');
        this.tests = ko.observableArray([]);
        this.testCases = ko.observableArray([]);
        this.shouldShow = ko.observable(true);
        self.benchmarks = ko.observableArray([]);
        this.benchmarksDone = ko.observable(false);
        this.benchmarkPlatform = ko.observable('');
        this.benchmarkSuite = new Benchmark.Suite();
        this.benchmarkPlatform(Benchmark.platform.description);
        this.benchmarkingEnabled = ko.observable(false);

        this.processBenchmarks = function () {
            self.benchmarksDone(false);
            self.benchmarks.removeAll();
            self.runBenchmarks();
        }

        this.runBenchmarks = function () {
            self.benchmarkSuite.on('cycle', function (event) {
                var b = event.target;

                var bm = new bVM();
                bm.name(b.name);
                bm.expression(b.name.replace(/context\.(.*?)\(\)\;/gi, '$1'));
                bm.hz(b.hz.toFixed(0));
                bm.relativateMarginError(b.stats.rme.toFixed(2) + '%');
                bm.iterationPerSampleCycle(b.count);
                bm.numAnalysisCycles(b.cycles);
                bm.numSampleCycles(b.stats.sample.length);

                self.benchmarks.push(bm);
            })
                .on('complete', function () {

                    self.benchmarks.sort(function (left, right) {
                        var leftHz = parseInt(left.hz());
                        var rightHz = parseInt(right.hz());
                        return leftHz == rightHz ? 0 : (leftHz > rightHz ? -1 : 1)
                    });
                    self.benchmarks()[0].fastest(true);
                    var length = self.benchmarks().length;
                    self.benchmarks()[length - 1].slowest(true);
                    var slowestHz = self.benchmarks()[length - 1].hz();
                    for (var i = 0; i < length; i++) {
                        self.benchmarks()[i].timesFaster((self.benchmarks()[i].hz() / slowestHz).toFixed(3));
                    }
                    self.benchmarksDone(true);
                });


            self.benchmarkSuite.run();
        };


    };

    return vm;
});
define("Test", [], function () {

    var test = function (shouldEqual, func, ctx, testName, describe) {
        'use strict';
        var expressionStr = func.toString().trim(), self = this;
        this.context = ctx;
        this.passed = false;
        this.describe = describe;
        if (testName) {
            this.expression = testName + '()';
            this.actual = func(this.context, testName);

        } else {
            this.expression = expressionStr.replace(/\n/gm, '')
                .replace(/function +?\(c\) +?\{+?return(.*?)\;+?\}/g, '$1')
                .replace(/function +?\(c\) +?\{ +?return(.*?)\; +?\}/g, '$1');


            this.actual = func(this.context);
        }
        this.shouldEqual = shouldEqual;

        this.typeOf = typeof(this.actual);

        this.run = function () {
            self.passed = self.shouldEqual === self.actual;
            return self.passed;
        };
    };

    return test;
});
define("UnitTestFrameworkManager", [], function () {
    return function UnitTestFrameworkManager() {

        UnitTestFrameworkManager.prototype.init = function () {
            if (!amplify.store('currentUnitTestFramework')) {
                this.set('itchcork');
            }
            return this.getFramework();
        }
        UnitTestFrameworkManager.prototype.set = function (framework) {
            if (framework != amplify.store('currentUnitTestFramework')) {
                amplify.store('currentUnitTestFramework', framework);
            }
        };
        UnitTestFrameworkManager.prototype.getFramework = function () {
            return amplify.store('currentUnitTestFramework');
        };
    };
});
define("Verify", [], function () {
    return function (F) {
        'use strict';
        return function () {
            var args = Array.prototype.slice.call(arguments),
                i,
                j,
                call,
                count = 0,
                matched;

            for (i = 0; i < F.calls.length; i += 1) {
                call = F.calls[i];
                matched = true;
                for (j = 0; j < args.length; j += 1) {
                    if (args[j] !== call[j]) {
                        matched = false;
                        break;
                    }
                }
                if (matched) {
                    count += 1;
                }
            }

            return count > 0;
        };
    };
});
define("itchcork", ['Suite', 'Test', 'Spy', 'Verify'], function (Suite, Test, Spy, Verify) {
    'use strict';
    var itchcork = function () {

        itchcork.prototype.Suite = Suite;
        itchcork.prototype.Test = Test;
        itchcork.prototype.Spy = Spy;
        itchcork.prototype.Verify = Verify;
    };
    window.ItchCork = new itchcork();
    return window.ItchCork;
});
require(['SuiteView', 'itchcork', 'context'], function (sv, itchcork) {

    window.suiteView = new sv();
    var context = '';
    if (window.location.pathname && window.location.pathname.length > 1)
        context = window.location.pathname.split('/')[1];
    else if (window.location.hash && window.location.hash.length > 1)
        context = window.location.hash.split('#')[1];

    var suite = context != '' ? window.suiteView.unitTestFrameworkManager.getFramework() + '/' + context : 'all-' + window.suiteView.unitTestFrameworkManager.getFramework();
    var suiteFilePath = suiteView.contextRoot() + 'examples/test';

    requirejs.config({
        baseUrl: 'https://',
        paths: {
            'context': suiteView.contextRoot() + 'examples/all-context',
            'suite': suiteFilePath + "/" + suite,
            'suitePath': suiteFilePath
        }
    });

    $("#topNav").show();
    $('div.frame').show();


    if (window.suiteView.unitTestFrameworkManager.init() === "itchcork") {
        require(['suite'], function () {

        });
    }

});



