(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,n){e.exports=n(443)},207:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(41),l=n.n(o),c=n(17),i=n(45),s=n(179),u=n(24),p=n(25),h=n(28),m=n(26),d=n(27),f=n(447),b=(n(207),n(208),new(n(227).App)({apiKey:"bd8644854b19417dacdfa3adba21aab1"}));function E(e){return"#"===e.charAt(0)?e.substring(1,7):e}function O(e){return e=parseInt(e,10),isNaN(e)?"00":(e=Math.max(0,Math.min(e,255)),"0123456789ABCDEF".charAt((e-e%16)/16)+"0123456789ABCDEF".charAt(e%16))}var g=function(e){return function(t){b.models.predict("eeed0b6733a644cea07cf4c60f87ebb7",e).then(function(e){var n=[];e.outputs[0].data.colors.map(function(e){return n.push(e.raw_hex.slice(1,e.raw_hex.length))}),fetch("/api/colormind?colors="+n).then(function(e){return e.json()}).then(function(e){for(var n,r,a,o=[],l=e,c=0;c<l.length;c++)o.push({hexColor:(n=l[c][0],r=l[c][1],a=l[c][2],"#"+O(n)+O(r)+O(a)),alpha:1});t({type:"ANALYZE_IMAGE",payload:o})})}).catch(function(e){console.log(e),t({type:"ANALYZE_IMAGE_ERROR",error:e.data.status.details})})}},C=function(e){return function(t){var n=parseInt(E(e).substring(0,2),16),r=function(e){return parseInt(E(e).substring(2,4),16)}(e),a=function(e){return parseInt(E(e).substring(4,6),16)}(e);t({type:"SEND_COLOR_INFO",info:[e,n,r,a]})}},I=function(e){return function(t){t({type:"SELECTED_COLOR",selectedColor:e})}},y=function(e){return{type:"MAIN_IMAGE",url:e}},v=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.analyzeImage(this.props.url)}},{key:"componentDidUpdate",value:function(e){this.props.url!==e.url&&this.props.analyzeImage(this.props.url)}},{key:"handleOnClickSquare",value:function(e,t){this.props.sendSelectedColor(e),this.props.sendColorInfo(e),this.props.sendPositionInfo(t)}},{key:"renderBorder",value:function(e,t,n){return this.props.position===e?{border:"4px solid black",backgroundColor:t,opacity:n}:{backgroundColor:t,opacity:n}}},{key:"colorsRender",value:function(){var e=this;return this.props.colors.length>=1?this.props.colors.map(function(t,n){return a.a.createElement("div",{key:t.hexColor,className:"color-square",style:e.renderBorder(n,t.hexColor,t.alpha),onClick:function(){return e.handleOnClickSquare(t.hexColor,n)}})}):a.a.createElement("div",null,this.props.error)}},{key:"render",value:function(){return a.a.createElement("div",null,this.colorsRender())}}]),t}(r.Component),j=Object(c.b)(function(e){return console.log(e),{colors:e.colors.colors,selectedColor:e.colorInfo.selectedColor,position:e.colorInfo.position,url:e.url.url,error:e.error}},{analyzeImage:g,sendColorInfo:C,sendPositionInfo:function(e){return function(t){t({type:"SEND_POSITION_INFO",position:e})}},sendSelectedColor:I})(v),N=Object(c.b)(function(e){return{url:e.url.url}})(function(e){var t=e.url;return a.a.createElement("img",{className:"sample-img",src:t,alt:"analyze main"})}),x=n(446),A=n(180),R=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={input:""},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"submitURL",value:function(e){e.preventDefault(),console.log(this.state.input),this.props.analyzeImage(this.state.input),this.props.changeMainImage(this.state.input),this.props.addImageSelection(this.state.input),this.setState({input:""})}},{key:"render",value:function(){var e=this;return a.a.createElement(A.a,{trigger:a.a.createElement("button",{className:"modal-btn"}," Try Your Own Image "),modal:!0,closeOnDocumentClick:!0},function(t){return a.a.createElement("div",null,a.a.createElement("h3",null,"Try your own image"),a.a.createElement("form",null,a.a.createElement("div",{className:"ui action input"},a.a.createElement("input",{className:"url-input",type:"text",onChange:function(t){return e.setState({input:t.target.value})},value:e.state.input,placeholder:"Copy and paste Url..."}),a.a.createElement("button",{onClick:function(n){e.submitURL(n),t()},className:"ui button"},"Submit"))))})}}]),t}(r.Component),_=Object(c.b)(null,{analyzeImage:g,changeMainImage:y,addImageSelection:function(e){return{type:"ADD_URL",url:e}}})(R),k=function(){return a.a.createElement("div",{className:"save-pallette"},a.a.createElement(x.a,{content:"Save Palette"}))},w=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"renderImages",value:function(){var e=this;return this.props.exampleUrl.map(function(t){return a.a.createElement("div",{key:t},a.a.createElement("img",{className:"image-selection",src:t,alt:"selection",onClick:function(){return e.props.changeMainImage(t)}}))})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("div",{className:"images-container"},this.renderImages()),a.a.createElement(_,null),a.a.createElement(x.a,{className:"regen-btn",content:"Regenerate",onClick:function(){return e.props.analyzeImage(e.props.url)}}),a.a.createElement(k,null))}}]),t}(r.Component),D=Object(c.b)(function(e){return{url:e.url.url,exampleUrl:e.url.exampleImages}},{changeMainImage:y,analyzeImage:g})(w),S=n(189),M=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).handleChange=function(e,t){var r=n.props.colors,a={hexColor:e.hex.toUpperCase(),alpha:e.rgb.a};r[n.props.position]=a,n.props.updateHexColor(r),n.props.sendColorInfo(e.hex),n.props.sendSelectedColor(e.hex),n.props.sendAlphaInfo(e.rgb.a)},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.colors.length>=1?a.a.createElement("div",{className:"color-picker"},a.a.createElement(S.ChromePicker,{className:"chrome-picker",style:{marginRight:"4em"},color:{r:this.props.R,g:this.props.G,b:this.props.B,a:this.props.colors[this.props.position].alpha},onChange:this.handleChange})):null}}]),t}(r.Component),B=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,a:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{updateHexColor:function(e){return function(t){t({type:"UPDATE_HEX_COLOR",newColorSet:e})}},sendColorInfo:C,sendSelectedColor:I,sendAlphaInfo:function(e){return function(t){t({type:"SEND_ALPHA_INFO",alpha:e})}}})(M),L=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"color-info"},a.a.createElement("h5",null,"Hex: ",this.props.hexColor),a.a.createElement("p",{className:"info-text"},"R: ",this.props.R),a.a.createElement("p",{className:"info-text"},"G: ",this.props.G),a.a.createElement("p",{className:"info-text"},"B: ",this.props.B))}}]),t}(r.Component),G=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B}},{})(L),H=function(e){e.url;return a.a.createElement("div",{className:"footer"},"\xa9 2019")},U=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App container"},a.a.createElement("div",{className:"header"},a.a.createElement("h2",null,"Choose a picture and analyze")),a.a.createElement(f.a,{celled:!0},a.a.createElement(f.a.Row,null,a.a.createElement(f.a.Column,{width:3},a.a.createElement(D,null)),a.a.createElement(f.a.Column,{width:13},a.a.createElement(N,null)))),a.a.createElement(f.a,{celled:!0},a.a.createElement(f.a.Row,null,a.a.createElement(f.a.Column,{width:16},a.a.createElement(j,null)))),a.a.createElement(f.a,{celled:!0},a.a.createElement(f.a.Row,null,a.a.createElement(f.a.Column,{width:5},a.a.createElement(G,null)),a.a.createElement(f.a.Column,{width:11,className:"color-picker-grid"},a.a.createElement(B,null)))),a.a.createElement(H,null))}}]),t}(r.Component),P=n(20),z={colors:[]},F={url:"https://images.unsplash.com/photo-1552664622-2cdfdf76ed0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",exampleImages:["https://images.unsplash.com/photo-1552664622-2cdfdf76ed0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80","https://images.unsplash.com/photo-1429497612798-1f189166a08a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"],random_url:""},T={hexColor:"",R:"",G:"",B:"",alpha:"",position:0,selectedColor:""},q=Object(i.c)({colors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYZE_IMAGE":return Object(P.a)({},e,{colors:t.payload});case"UPDATE_HEX_COLOR":return Object(P.a)({},e,{colors:function(e,t){return e.map(function(e,n){return n!==t.index?e:Object(P.a)({},e,t.item)})}(e.colors,t.newColorSet)});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYZE_IMAGE_ERROR":return t.error;default:return e}},url:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN_IMAGE":return Object(P.a)({},e,{url:t.url});case"RANDOM_IMAGE":return Object(P.a)({},e,{url:t.url,random_url:t.url});case"ADD_URL":return Object(P.a)({},e,{exampleImages:e.exampleImages.concat(t.url)});default:return e}},colorInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_COLOR_INFO":return Object(P.a)({},e,{hexColor:t.info[0],R:t.info[1],G:t.info[2],B:t.info[3]});case"SEND_POSITION_INFO":return Object(P.a)({},e,{position:t.position});case"SEND_ALPHA_INFO":return Object(P.a)({},e,{alpha:t.alpha});case"SELECTED_COLOR":return Object(P.a)({},e,{selectedColor:t.selectedColor});default:return e}}}),J=Object(i.d)(q,Object(i.a)(s.a));l.a.render(a.a.createElement(c.a,{store:J},a.a.createElement(U,null)),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.7cf906dd.chunk.js.map