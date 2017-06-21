/**
 * pulltorefresh-h5-iscroll - 一款基于IScroll5的H5下拉刷新实现，包括多种皮肤的实现
 * @version v3.0.0
 * @author 
 */
!function(e,o){function n(e){if("string"==typeof e&&(e=document.querySelector(e)),o.os.ejs||o.os.dd){var n=e;n.classList.remove("mui-scroll-wrapper");var t=n.querySelector(".mui-scroll");t&&t.classList.remove("mui-scroll")}}function t(e){if(null==e||"string"!=typeof e)return null;var o,n=document.createElement("div"),t=document.createDocumentFragment();for(n.innerHTML=e;o=n.firstChild;)t.appendChild(o);return t}function l(){var e=0;return e="CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight}function u(){var e=0,o=0,n=0;return document.body&&(o=document.body.scrollTop||0),document.documentElement&&(n=document.documentElement.scrollTop||0),e=o>n?o:n}function i(){var e=0,o=0,n=0;return document.body&&(o=document.body.scrollHeight),document.documentElement&&(n=document.documentElement.scrollHeight),e=o-n>0?o:n}function r(e,n){var t=this;t.loadingUp=!1,t.finished=!1,t.options=n,"string"==typeof e&&(e=document.querySelector(e)),t.elem=e,t.elem.classList.add("pulltorefresh-native-type"),c(),t.options.down&&(o.os.dd?dd.ui.pullToRefresh.enable({onSuccess:function(){t.options.down.callback&&t.options.down.callback()},onFail:function(){dd.ui.pullToRefresh.stop()}}):ejs.nativeUI.pullToRefresh.enable(function(){t.options.down.callback&&t.options.down.callback()}))}function c(){var e=0,o=0,n=0,t=document.body,r=a?"touchstart":"mousedown";t.addEventListener(r,function(l){var u;u=a?l.touches[0]:l,e=Number(u.pageX),o=Number(u.pageY),n=t.scrollTop,d=!0});var c=a?"touchend":"mouseup";t.addEventListener(c,function(e){d=!1,m=!1});var f=a?"touchmove":"mousemove";t.addEventListener(f,function(e){var l;l=a?e.touches[0]:e;var u=(Number(l.pageX),Number(l.pageY));d&&(u-o>30&&0==t.scrollTop&&(m||(console.log("PullDown"),m=!0)),o-u>100&&n==t.scrollTop&&(p.loadingUp||p.finished||p.options.up&&(s(!0),p.options.up.callback&&p.options.up.callback())))});var h=function(){var e=u();document.getElementById("sliderSegmentedControl");e+l()===i()&&(p.loadingUp||p.finished||p.options.up&&(s(!0),p.options.up.callback&&p.options.up.callback()))};document.onscroll=h}function s(e){var o=p.elem;if(o)if(e){if(!p.loadingUp){var n=p.options.up.contentrefresh||"正在加载...";h=h.replace("{{contentrefresh}}",n),o.appendChild(t(h)),p.loadingUp=!0}}else if(p.loadingUp){var l=o.querySelector(".mui-pull-bottom-tips");l&&l.parentNode.removeChild(l),p.loadingUp=!1}}var p,a="ontouchend"in document,d=!1,m=!1,f={down:{callback:o.noop},up:{auto:!1,show:!0,contentrefresh:"正在加载...",callback:o.noop},element:"#pullrefresh"},h='<div class="mui-pull-bottom-tips mui-pull-bottom-tips2"><i class="mui-spinner"></i><span class="mui-pull-loading">{{contentrefresh}}</span></div>';r.prototype.pullupLoading=function(){p.options.up&&(s(!0),p.options.up.callback&&p.options.up.callback())},r.prototype.endPullUpToRefresh=function(e){e&&(this.finished=!0),p.options.up&&s(!1)},r.prototype.endPullDownToRefresh=function(){o.os.dd?dd.ui.pullToRefresh.stop():o.os.ejs&&ejs.nativeUI.pullToRefresh.stop()},r.prototype.refresh=function(e){this.finished=!1},e.initPullToRefresh=function(e,t){if(p)return p;t=o.extend(!0,{},f,t);var l;return"object"!=typeof e?l=e:(t=e,l=t.element),l=l||f.element,"string"==typeof l&&(l=document.querySelector(l)),l?(n(l||"#pullrefresh"),p=new r(l,t),t.up&&t.up.auto&&p.pullupLoading(),p):(console.error("错误,下拉刷新容器为空!"),null)},e.init=e.initPullToRefresh,o.namespace("skin.natives",e)}({},PullToRefreshTools);