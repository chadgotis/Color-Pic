(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(e,t,n){e.exports=n(550)},549:function(e,t,n){},550:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(74),l=n.n(r),c=n(20),i=n(62),s=n(245),u=n(17),p=n(18),h=n(22),m=n(19),d=n(21),f=n(50),C=n(63),E=n(560),b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={},n.handleItemClick=function(e,t){var a=t.name;return n.setState({activeItem:a})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return o.a.createElement(E.a,{stackable:!0},o.a.createElement(f.b,{to:"/"},o.a.createElement(E.a.Item,{name:"Color Pic",active:"Color Pic"===e,onClick:this.handleItemClick},"Color Pic")),o.a.createElement(f.b,{to:"/MyPallettes"},o.a.createElement(E.a.Item,{name:"My Palettes",active:"My Palettes"===e,onClick:this.handleItemClick},"My Palettes")),o.a.createElement(f.b,{to:"/About"},o.a.createElement(E.a.Item,{name:"About",active:"About"===e,onClick:this.handleItemClick},"About")))}}]),t}(a.Component),O=n(565),y=function(){return o.a.createElement(O.a,{as:"h1",className:"header"},"Choose a picture and analyze")},v=n(65),g=n.n(v),k=new(n(398).App)({apiKey:"bd8644854b19417dacdfa3adba21aab1"});function I(e){return"#"===e.charAt(0)?e.substring(1,7):e}function j(e){return e=parseInt(e,10),isNaN(e)?"00":(e=Math.max(0,Math.min(e,255)),"0123456789ABCDEF".charAt((e-e%16)/16)+"0123456789ABCDEF".charAt(e%16))}var N=function(e){return function(t){k.models.predict("eeed0b6733a644cea07cf4c60f87ebb7",e).then(function(e){var n=[];e.outputs[0].data.colors.map(function(e){return n.push(e.raw_hex.slice(1,e.raw_hex.length))}),fetch("/api/colormind?colors="+n).then(function(e){return e.json()}).then(function(e){for(var n,a,o,r=[],l=e,c=0;c<l.length;c++)r.push({hexColor:(n=l[c][0],a=l[c][1],o=l[c][2],"#"+j(n)+j(a)+j(o)),alpha:1});t({type:"ANALYZE_IMAGE",payload:r})})}).catch(function(e){console.log(e),t({type:"ANALYZE_IMAGE_ERROR",error:e.data.status.details})})}},S=function(e,t){return function(n){var a=parseInt(I(e).substring(0,2),16),o=function(e){return parseInt(I(e).substring(2,4),16)}(e),r=function(e){return parseInt(I(e).substring(4,6),16)}(e);n({type:"SEND_COLOR_INFO",hexColor:e,R:a,G:o,B:r,alpha:t})}},R=function(){return function(e){e({type:"CLEAR_RECIEVED",status:""})}},A=function(e){return function(t){t({type:"SEND_POSITION_INFO",position:e})}},P=function(){return function(e){e({type:"CLEAR_POSITION_INFO",position:0})}},x=function(){return function(e){e({type:"CLEAR_COLORS",colors:[]})}},D=function(e){return function(t){t({type:"SELECTED_COLOR",selectedColor:e})}},_=function(e){return function(t){t({type:"SEND_ALPHA_INFO",alpha:e})}},w=function(e){return{type:"MAIN_IMAGE",url:e}},L=n(66),M=n(564),B=n(556),G=n(563),T=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.clearRecieved(),this.props.clearColorList(),this.props.analyzeImage(this.props.url)}},{key:"componentDidUpdate",value:function(e){if(this.props.url!==e.url&&(this.props.clearColorList(),this.props.analyzeImage(this.props.url)),"recieved"===this.props.status){var t=this.props.colors[0].hexColor,n=this.props.position;this.handleOnClickSquare(t,n,1),this.props.clearRecieved()}}},{key:"handleOnClickSquare",value:function(e,t,n){this.props.sendSelectedColor(e),this.props.sendColorInfo(e,n),this.props.sendPositionInfo(t)}},{key:"renderColor",value:function(e,t){return{backgroundColor:e,opacity:t,cursor:"pointer"}}},{key:"renderCarot",value:function(e){return e===this.props.position?{color:"black"}:{color:"white"}}},{key:"colorsRender",value:function(){var e=this;return this.props.colors.length>=1?this.props.colors.map(function(t,n){return o.a.createElement("div",{key:t.hexColor,className:"color-square-container"},o.a.createElement("div",{className:"color-square",style:e.renderColor(t.hexColor,t.alpha),onClick:function(){return e.handleOnClickSquare(t.hexColor,n,t.alpha)}}),o.a.createElement("div",{style:e.renderCarot(n),className:"carot-container"},o.a.createElement(L.a,{size:"big",name:"caret up"})))}):o.a.createElement("div",{className:"color-loader"},o.a.createElement(M.a,{active:!0,inverted:!0},o.a.createElement(B.a,{size:"big",inverted:!0},"Loading Colors")))}},{key:"render",value:function(){return o.a.createElement(G.a.Column,{width:16},this.colorsRender())}}]),t}(a.Component),U=Object(c.b)(function(e){return{colors:e.colors.colors,selectedColor:e.colorInfo.selectedColor,position:e.colorInfo.position,url:e.url.url,error:e.error,status:e.colors.status}},{analyzeImage:N,sendColorInfo:S,sendPositionInfo:A,sendSelectedColor:D,clearRecieved:R,clearColorList:x})(T),q=n(263),z=Object(c.b)(function(e){return{url:e.url.url}})(function(e){var t=e.url;return o.a.createElement(G.a.Column,{mobile:16,computer:13},o.a.createElement(q.a,{className:"sample-img",src:t,alt:"analyze main"}))}),H=n(557),F=n(165),J=n(121),Q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={input:"",open:!1,error:!1},n.close=function(){n.setState({input:"",open:!1})},n.closeConfigShow=function(e,t){return function(){n.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0})}},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"submitURL",value:function(e){e.preventDefault(),this.props.analyzeImage(this.state.input),this.props.changeMainImage(this.state.input),this.props.addImageSelection(this.state.input),this.setState({input:""}),this.close()}},{key:"handleInput",value:function(e){this.setState({input:e.target.value,error:!1})}},{key:"setError",value:function(){this.setState({error:!0})}},{key:"renderURLinput",value:function(){var e=this;return!0===this.state.error?o.a.createElement(H.a,{className:"url-input",type:"text",onChange:function(t){return e.handleInput(t)},value:this.state.input,placeholder:"Please enter a url...",error:!0}):o.a.createElement(H.a,{className:"url-input",type:"text",onChange:function(t){return e.handleInput(t)},value:this.state.input,placeholder:"Copy and paste image url..."})}},{key:"renderSubmitButton",value:function(){var e=this;return""===this.state.input?o.a.createElement(F.a,{onClick:function(){return e.setError()},className:"ui button",color:"blue",style:{opacity:.8}},"Submit"):o.a.createElement(F.a,{onClick:function(t){return e.submitURL(t)},className:"ui button",color:"blue"},"Submit")}},{key:"render",value:function(){var e=this.state,t=e.open,n=e.closeOnEscape,a=e.closeOnDimmerClick;return o.a.createElement("div",null,o.a.createElement(F.a,{onClick:this.closeConfigShow(!1,!0)},"Try your own image"),o.a.createElement(J.a,{open:t,closeOnEscape:n,closeOnDimmerClick:a,onClose:this.close},o.a.createElement(J.a.Content,{className:"add-image-modal"},o.a.createElement("h3",null,"Try your own image"),this.renderURLinput(),this.renderSubmitButton())))}}]),t}(a.Component),W=Object(c.b)(null,{analyzeImage:N,changeMainImage:w,addImageSelection:function(e){return{type:"ADD_URL",url:e}}})(Q),Y=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){this.props.clearRecieved(),this.props.clearPosition(),this.props.changeMainImage(e)}},{key:"renderBorder",value:function(e){return this.props.url===e?{border:"3px solid #0000CC",opacity:1}:null}},{key:"renderImages",value:function(){var e=this;return this.props.exampleUrl.map(function(t){return o.a.createElement("div",{className:"image-wrapper",key:t},o.a.createElement("img",{className:"image-selection",src:t,alt:"selection",style:e.renderBorder(t),onClick:function(){return e.handleClick(t)}}),o.a.createElement("div",{className:"circle"},o.a.createElement("i",{id:"delete-img",className:"fas fa-times-circle"})))})}},{key:"render",value:function(){return o.a.createElement(G.a.Column,{mobile:16,computer:3},o.a.createElement("div",{className:"image-modal-container"},o.a.createElement("div",{className:"images-container"},this.renderImages()),o.a.createElement("div",{className:"modal-container"},o.a.createElement(W,null))))}}]),t}(a.Component),Z=Object(c.b)(function(e){return{url:e.url.url,exampleUrl:e.url.exampleImages}},{changeMainImage:w,clearRecieved:R,clearPosition:P,analyzeImage:N})(Y),V=n(94),X=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e,t){var a=n.props.colors,o={hexColor:e.hex.toUpperCase(),alpha:e.rgb.a};a[n.props.position]=o,n.props.updateHexColor(a),n.props.sendColorInfo(e.hex.toUpperCase()),n.props.sendSelectedColor(e.hex.toUpperCase()),n.props.sendAlphaInfo(e.rgb.a)},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"renderColorPicker",value:function(){return this.props.colors.length>=1?o.a.createElement("div",{className:"color-picker"},o.a.createElement(V.ChromePicker,{className:"chrome-picker",style:{marginRight:"4em"},color:{r:this.props.R,g:this.props.G,b:this.props.B,a:this.props.colors[this.props.position].alpha},onChange:this.handleChange})):o.a.createElement(V.ChromePicker,{className:"color-picker"})}},{key:"render",value:function(){return o.a.createElement(G.a.Column,{mobile:16,computer:10},this.renderColorPicker())}}]),t}(a.Component),K=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,a:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{updateHexColor:function(e){return function(t){t({type:"UPDATE_HEX_COLOR",newColorSet:e})}},sendColorInfo:S,sendSelectedColor:D,sendAlphaInfo:_})(X),$=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){console.log(e.target.value)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"color-info"},o.a.createElement("h5",null,"Hex"),o.a.createElement("input",{className:"hex-info-input",value:this.props.hexColor}),o.a.createElement("p",{className:"info-text"},"R"),o.a.createElement("p",{className:"info-text"},"G"),o.a.createElement("p",{className:"info-text"},"B"),o.a.createElement("p",{className:"info-text"},"a"),o.a.createElement("div",null,o.a.createElement("input",{className:"info-input",value:this.props.R,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("input",{className:"info-input",value:this.props.G,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("input",{className:"info-input",value:this.props.B,onChange:function(t){return e.handleChange(t)}}),o.a.createElement("input",{className:"info-input",value:this.props.a,onChange:function(t){return e.handleChange(t)}})))}}]),t}(a.Component),ee=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,a:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{})($),te=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){this.props.clearColorList(),this.props.clearRecieved(),this.props.clearPosition(),this.props.analyzeImage(e)}},{key:"render",value:function(){var e=this;return o.a.createElement(F.a,{className:"regen-btn",content:"Regenerate",onClick:function(){return e.handleClick(e.props.url)}})}}]),t}(a.Component),ne=Object(c.b)(function(e){return{url:e.url.url}},{analyzeImage:N,clearRecieved:R,clearPosition:P,clearColorList:x})(te),ae=function(){return function(e){console.log("getting colors"),g.a.get("/api/colors").then(function(t){return e({type:"GET_COLORS",payload:t.data})}).catch(function(e){return console.log(e)})}},oe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={input:"",open:!1,error:!1},n.closeConfigShow=function(e,t){return function(){n.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0})}},n.close=function(){n.setState({input:"",open:!1,error:!1})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleInput",value:function(e){this.setState({input:e.target.value,error:!1})}},{key:"handleConfirmClick",value:function(){this.props.newColorPalette({title:this.state.input,colors:this.props.colors}),this.close()}},{key:"setError",value:function(){this.setState({error:!0})}},{key:"renderConfirmButton",value:function(){var e=this;return""===this.state.input?o.a.createElement(F.a,{onClick:function(){return e.setError()},color:"blue",style:{opacity:.8}},"Create New"):o.a.createElement(f.b,{to:"/MyPallettes"},o.a.createElement(F.a,{color:"blue",style:{marginLeft:"0.75em"},onClick:function(){return e.handleConfirmClick()}},"Create New"))}},{key:"renderTitleInput",value:function(){var e=this;return!0===this.state.error?o.a.createElement(H.a,{className:"savepalette-modal-input",label:"Title",value:this.state.input,onChange:function(t){return e.handleInput(t)},placeholder:"Title Required...",error:!0}):o.a.createElement(H.a,{className:"savepalette-modal-input",label:"Title",value:this.state.input,onChange:function(t){return e.handleInput(t)},placeholder:"New Palette Name..."})}},{key:"colorsRender",value:function(){return this.props.colors.map(function(e,t){return o.a.createElement("div",{key:e.hexColor,className:"color-square-container"},o.a.createElement("div",{className:"color-square",style:{backgroundColor:e.hexColor,opacity:e.alpha}}),o.a.createElement("p",null,e.hexColor))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.open,a=t.closeOnEscape,r=t.closeOnDimmerClick;return o.a.createElement("div",null,o.a.createElement(F.a,{onClick:this.closeConfigShow(!0,!1)},"Save Palette"),o.a.createElement(J.a,{open:n,closeOnEscape:a,closeOnDimmerClick:r,onClose:this.close},o.a.createElement(J.a.Content,null,o.a.createElement(O.a,{as:"h2"},"Save Palette"),this.renderTitleInput(),o.a.createElement("div",{className:"colors-render"},this.colorsRender())),o.a.createElement(J.a.Actions,null,o.a.createElement(F.a,{onClick:function(){return e.close()}},"Cancel"),this.renderConfirmButton())))}}]),t}(a.Component),re=Object(c.b)(function(e){return{colors:e.colors.colors}},{newColorPalette:function(e){return function(t){g.a.post("/api/colors",e).then(function(e){return t({type:"ADD_COLORS",payload:e.data})}).catch(function(e){return console.log(e)})}}})(oe),le=function(e){e.url;return o.a.createElement("div",{className:"footer"},"\xa9 2019")},ce=n(558),ie=function(){return o.a.createElement("div",{className:"HomePage"},o.a.createElement(ce.a,{textAlign:"center"},o.a.createElement(y,null),o.a.createElement(G.a,{celled:!0},o.a.createElement(G.a.Row,null,o.a.createElement(Z,null),o.a.createElement(z,null))),o.a.createElement(G.a,{celled:!0},o.a.createElement(G.a.Row,null,o.a.createElement(U,null))),o.a.createElement(G.a,{celled:!0},o.a.createElement(G.a.Row,null,o.a.createElement(K,null),o.a.createElement(G.a.Column,{mobile:16,computer:6},o.a.createElement(ee,null),o.a.createElement("div",{className:"regen-save-buttons"},o.a.createElement(ne,null),o.a.createElement(re,null))))),o.a.createElement(le,null)))},se=n(559),ue=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1},n.show=function(){n.setState({open:!0})},n.handleConfirm=function(){n.props.deleteColorPalette(n.props.objectID),n.setState({open:!1})},n.handleCancel=function(){n.setState({open:!1})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"confirm-delete-modal"},o.a.createElement(L.a,{size:"large",onClick:this.show,name:"trash alternate"}),o.a.createElement(se.a,{open:this.state.open,content:"Are you sure you want to delete ".concat(this.props.title," palette?"),onCancel:this.handleCancel,onConfirm:this.handleConfirm,size:"small"}))}}]),t}(a.Component),pe=Object(c.b)(function(e){return{deleteColor:e.myPalettes.DeleteColor}},{deleteColorPalette:function(e){return function(t){g.a.delete("/api/colors/".concat(e)).then(function(n){return t({type:"DELETE_COLORS",payload:e})}).catch(function(e){return console.log(e)})}}})(ue),he=n(561),me=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,title:"",selectedSet:[]},n.cancel=function(){n.setState({open:!1,title:n.props.title,selectedSet:n.props.data[n.props.colorPosition].colors}),n.props.clearPosition(),n.props.getColors()},n.handleConfirm=function(){n.setState({open:!1});var e={title:n.state.title,colors:n.state.selectedSet};n.props.updateColorPalette(n.props.objectID,e),n.props.clearPosition()},n.handleChange=function(e,t){var a=n.state.selectedSet,o={hexColor:e.hex.toUpperCase(),alpha:e.rgb.a};a[n.props.position]=o,n.setState({selectedSet:a}),n.props.sendColorInfo(e.hex.toUpperCase()),n.props.sendSelectedColor(e.hex.toUpperCase()),n.props.sendAlphaInfo(e.rgb.a)},n.closeConfigShow=function(e,t){return function(){n.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0}),n.props.sendColorInfo(n.state.selectedSet[0].hexColor,n.state.selectedSet[0].alpha)}},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({title:this.props.title,selectedSet:this.props.data[this.props.colorPosition].colors}),this.props.clearPosition()}},{key:"handleInput",value:function(e){this.setState({title:e.target.value})}},{key:"handleOnClickSquare",value:function(e,t,n){this.props.sendSelectedColor(e),this.props.sendColorInfo(e,n),this.props.sendPositionInfo(t)}},{key:"renderColorPicker",value:function(){return o.a.createElement(V.ChromePicker,{className:"chrome-picker",style:{marginRight:"4em"},color:{r:this.props.R,g:this.props.G,b:this.props.B,a:this.props.alpha},onChange:this.handleChange})}},{key:"renderOneColorSet",value:function(){var e=this;return this.state.selectedSet.map(function(t,n){return o.a.createElement("div",{className:"color-square-container",key:t.hexColor},o.a.createElement("div",{className:"color-square",onClick:function(){return e.handleOnClickSquare(t.hexColor,n,t.alpha)},style:{backgroundColor:t.hexColor,opacity:t.alpha,cursor:"pointer"}}),o.a.createElement("div",{style:e.renderCarot(n),className:"carot-container"},o.a.createElement(L.a,{size:"big",name:"caret up"})))})}},{key:"renderCarot",value:function(e){return e===this.props.position?{color:"black"}:{color:"white"}}},{key:"render",value:function(){var e=this,t=this.state,n=t.open,a=t.closeOnEscape,r=t.closeOnDimmerClick,l=t.title;return o.a.createElement("div",{className:"edit-modal"},o.a.createElement(L.a,{size:"large",onClick:this.closeConfigShow(!1,!0),name:"edit"}),o.a.createElement(J.a,{open:n,closeOnEscape:a,closeOnDimmerClick:r,onClose:this.close},o.a.createElement(J.a.Header,null,"Edit Palette"),o.a.createElement(J.a.Content,null,o.a.createElement(H.a,{className:"savepalette-modal-input",label:"Title",value:l,onChange:function(t){return e.handleInput(t)},placeholder:"Edit Palette Name..."}),o.a.createElement("div",{className:"colors-render"},this.renderOneColorSet()),o.a.createElement(G.a,{stackable:!0,columns:2},o.a.createElement(G.a.Column,{width:10},o.a.createElement(he.a,null,this.renderColorPicker())),o.a.createElement(G.a.Column,{width:6},o.a.createElement(he.a,null,o.a.createElement(ee,null))))),o.a.createElement(J.a.Actions,null,o.a.createElement(F.a,{onClick:this.cancel},"Cancel"),o.a.createElement(F.a,{onClick:this.handleConfirm,color:"blue"},"Confirm"))))}}]),t}(a.Component),de=Object(c.b)(function(e){return{data:e.myPalettes.Data,position:e.colorInfo.position,hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,alpha:e.colorInfo.alpha}},{updateColorPalette:function(e,t){return function(n){g.a.put("/api/colors/".concat(e),t).then(function(e){return n({type:"UPDATE_COLORS",payload:t})}).catch(function(e){console.log(e)}).then(function(){g.a.get("/api/colors").then(function(e){return n({type:"GET_COLORS",payload:e.data})}).catch(function(e){return console.log(e)})})}},sendPositionInfo:A,sendSelectedColor:D,sendColorInfo:S,sendAlphaInfo:_,clearPosition:P,getColors:ae})(me),fe=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getColors()}},{key:"renderOneColorSet",value:function(e){return e.map(function(e){return o.a.createElement("div",{className:"color-square-container",key:e.hexColor},o.a.createElement("div",{className:"color-square",style:{backgroundColor:e.hexColor,opacity:e.alpha}}))})}},{key:"renderPalettes",value:function(){var e=this;if(void 0!==this.props.myPalettes)return this.props.myPalettes.map(function(t,n){return o.a.createElement(G.a.Column,{key:t._id,mobile:16,computer:8},o.a.createElement("div",{className:"palette-container"},o.a.createElement("p",null,t.title,o.a.createElement(pe,{title:t.title,objectID:t._id}),o.a.createElement(de,{title:t.title,objectID:t._id,colorPosition:n,selectedSet:t.colors})),e.renderOneColorSet(t.colors)))})}},{key:"render",value:function(){return o.a.createElement(ce.a,null,o.a.createElement(O.a,{as:"h1",className:"header"},"My Color Palettes"),o.a.createElement(G.a,null,this.renderPalettes()))}}]),t}(a.Component),Ce=Object(c.b)(function(e){return console.log(e),{myPalettes:e.myPalettes.Data,addColor:e.myPalettes.AddColor,updateColor:e.myPalettes.UpdateColor}},{getColors:ae})(fe),Ee=function(){return o.a.createElement(O.a,{as:"h1",className:"header"},"About this App")},be=(n(549),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,null,o.a.createElement(b,null),o.a.createElement(C.a,{path:"/",exact:!0,component:ie}),o.a.createElement(C.a,{path:"/MyPallettes",component:Ce}),o.a.createElement(C.a,{path:"/About",component:Ee})))}}]),t}(a.Component)),Oe=n(25),ye={colors:[],status:""},ve={url:"https://images.unsplash.com/photo-1520633946251-dcf52b0276b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",exampleImages:["https://images.unsplash.com/photo-1520633946251-dcf52b0276b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1429497612798-1f189166a08a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]},ge={hexColor:"",R:"",G:"",B:"",alpha:"",position:0,selectedColor:""},ke={Data:[],AddColor:"",DeleteColor:"",UpdateColor:""},Ie=Object(i.c)({colors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYZE_IMAGE":return Object(Oe.a)({},e,{colors:t.payload,status:"recieved"});case"CLEAR_RECIEVED":return Object(Oe.a)({},e,{status:t.status});case"CLEAR_COLORS":return Object(Oe.a)({},e,{colors:t.colors});case"UPDATE_HEX_COLOR":return Object(Oe.a)({},e,{colors:function(e,t){return e.map(function(e,n){return n!==t.index?e:Object(Oe.a)({},e,t.item)})}(e.colors,t.newColorSet)});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYZE_IMAGE_ERROR":return t.error;default:return e}},url:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN_IMAGE":return Object(Oe.a)({},e,{url:t.url});case"RANDOM_IMAGE":return Object(Oe.a)({},e,{url:t.url,random_url:t.url});case"ADD_URL":return Object(Oe.a)({},e,{exampleImages:e.exampleImages.concat(t.url)});default:return e}},colorInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_COLOR_INFO":return Object(Oe.a)({},e,{hexColor:t.hexColor,R:t.R,G:t.G,B:t.B,alpha:t.alpha});case"SEND_POSITION_INFO":case"CLEAR_POSITION_INFO":return Object(Oe.a)({},e,{position:t.position});case"SEND_ALPHA_INFO":return Object(Oe.a)({},e,{alpha:t.alpha});case"SELECTED_COLOR":return Object(Oe.a)({},e,{selectedColor:t.selectedColor});default:return e}},myPalettes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COLORS":return Object(Oe.a)({},e,{Data:t.payload});case"ADD_COLORS":return Object(Oe.a)({},e,{Data:e.Data.concat(t.payload),AddColor:'"'.concat(t.payload.title,'" Created ').concat(t.payload._id)});case"UPDATE_COLORS":return Object(Oe.a)({},e,{UpdateColor:"".concat(t.payload," is the new update")});case"DELETE_COLORS":return Object(Oe.a)({},e,{Data:e.Data.filter(function(e){return e._id!==t.payload}),DeleteColor:"".concat(t.payload," was Deleted")});default:return e}}}),je=Object(i.d)(Ie,Object(i.a)(s.a));l.a.render(o.a.createElement(c.a,{store:je},o.a.createElement(be,null)),document.getElementById("root"))}},[[272,1,2]]]);
//# sourceMappingURL=main.8c43fa67.chunk.js.map