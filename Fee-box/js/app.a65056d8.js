(function(t){function e(e){for(var i,r,a=e[0],c=e[1],u=e[2],p=0,m=[];p<a.length;p++)r=a[p],o[r]&&m.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},s=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Fee-box/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0589":function(t,e,n){"use strict";var i=n("3096"),o=n.n(i);o.a},"1eb7":function(t,e,n){"use strict";var i=n("6347"),o=n.n(i);o.a},"2dbb":function(t,e,n){"use strict";var i=n("4721"),o=n.n(i);o.a},3096:function(t,e,n){},4721:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"toast"}}),n("Login",{class:["1"===t.showLogin?"show":"","2"===t.showLogin?"hide":""],on:{"close-login":t.closeLogin}}),n("Header",{on:{"search-opt":t.searchOpt,"clear-opt":t.clearOpt,"login-opt":t.loginOpt}}),n("Box",{attrs:{leftRight:t.leftRight,upDown:t.upDown},on:{"to-movie":t.viewMovie,"edit-movie":t.editMovie}},[n("template",{slot:"publish"},[n("Publish",{attrs:{leftRight:t.leftRight,upDown:t.upDown},on:{back:t.backOpt}})],1),n("template",{slot:"detail"},[n("Detail",{attrs:{leftRight:t.leftRight,upDown:t.upDown}})],1)],2),n("Footer",{attrs:{leftRight:t.leftRight,upDown:t.upDown},on:{"pre-opt":t.preOpt,"next-opt":t.nextOpt,"back-opt":t.backOpt,"home-opt":t.homeOpt}})],1)},s=[],r=(n("96cf"),n("3040")),a=n("c93e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-wrapper"},[n("div",{staticClass:"form"},[t.userInfo&&t.userInfo.nickname?n("div",{staticClass:"btn btn1",attrs:{title:"点击退出登录"},on:{click:t.logoutOpt}},[t._v(t._s(t.userInfo.nickname))]):n("div",{staticClass:"btn btn1",attrs:{title:"登录资源可见"},on:{click:t.loginOpt}},[t._v("登录")]),n("div",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"input",attrs:{type:"text",placeholder:"影视名称"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t.keywords?n("span",{staticClass:"clear",attrs:{title:"清除"},on:{click:t.clearOpt}},[t._v("✕")]):t._e()]),n("div",{staticClass:"btn",on:{click:t.searchOpt}},[t._v("搜索")])])])},u=[],l=(n("a481"),n("2f62")),p={name:"Header",data:function(){return{keywords:""}},computed:Object(l["d"])(["userInfo"]),methods:Object(a["a"])({},Object(l["c"])(["clearUserInfo"]),{clearOpt:function(){this.keywords="",this.$emit("clear-opt")},searchOpt:function(){this.$emit("search-opt",this.keywords.replace(/(^\s*)|(\s*$)/,""))},loginOpt:function(){this.$emit("login-opt")},logoutOpt:function(){this.clearUserInfo(),this.$toast({title:"退出登录"})}})},m=p,v=(n("0589"),n("2877")),d=Object(v["a"])(m,c,u,!1,null,"828107ee",null);d.options.__file="Header.vue";var h=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-wrapper",style:{transform:"rotateX("+t.upDown+"deg) rotateY("+t.leftRight+"deg)"}},[n("div",{staticClass:"box box1"},t._l(t.movieData.list1,function(e,i){return n("Movie",{key:i,attrs:{movie:e},on:{"to-movie":t.toMovie,"edit-movie":t.editMovie}})})),n("div",{staticClass:"box box2"},t._l(t.movieData.list2,function(e,i){return n("Movie",{key:i,attrs:{movie:e},on:{"to-movie":t.toMovie,"edit-movie":t.editMovie}})})),n("div",{staticClass:"box box3"},t._l(t.movieData.list3,function(e,i){return n("Movie",{key:i,attrs:{movie:e},on:{"to-movie":t.toMovie,"edit-movie":t.editMovie}})})),n("div",{staticClass:"box box4"},t._l(t.movieData.list4,function(e,i){return n("Movie",{key:i,attrs:{movie:e},on:{"to-movie":t.toMovie,"edit-movie":t.editMovie}})})),n("div",{staticClass:"box box5"},[t._t("publish")],2),n("div",{staticClass:"box box6"},[t._t("detail")],2)])},g=[],b=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movie-wrapper",on:{click:function(e){t.toMovie(t.movie)}}},[n("div",{staticClass:"poster",style:{backgroundImage:"url("+t.movie.poster+")"}},[n("div",{staticClass:"score"},[t._v(t._s(t.movie.score))]),t.userInfo&&"1"===t.userInfo.type?n("div",{staticClass:"edit",on:{click:function(e){e.stopPropagation(),t.editMovie(t.movie)}}},[n("div",[t._v("编辑")])]):t._e()]),n("div",{staticClass:"title",attrs:{title:t.movie.title}},[t._v(t._s(t.movie.title))]),n("div",{staticClass:"time"},[t._v("更新于："+t._s(t.formatTime(t.movie.createdAt)))])])}),w=[];n("4917"),n("3b2b");function k(t){var e=document.getElementById("toast")||null;if(e&&""===e.innerHTML&&(""===e.className||"hide"===e.className)){var n={duration:t.duration||2e3,title:t.title||""};e.innerHTML=n.title,e.className="show",setTimeout(function(){e.className="hide",setTimeout(function(){e.innerHTML=""},400)},n.duration)}}function x(t,e,n){n||(n=1);var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),document.cookie=t+"="+escape(e)+";expires="+i.toGMTString()}function D(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return document.cookie.match(e)?unescape(document.cookie.match(e)[2]):null}function _(t){var e=new Date;e.setTime(e.getTime()-1);var n=D(t);n&&(document.cookie=t+"="+n+";expires="+e.toGMTString())}function y(t,e){localStorage.setItem(t,e)}function C(t){return localStorage.getItem(t)}function O(t){var e,n,i,o,s,r,a,c,u,l,p,m,v=new Date(t),d=new Date;return e=parseInt(v.getFullYear()),n=parseInt(v.getMonth())+1,i=parseInt(v.getDate()),o=parseInt(v.getHours()),s=parseInt(v.getMinutes()),r=parseInt(v.getSeconds()),a=parseInt(d.getFullYear()),c=parseInt(d.getMonth())+1,u=parseInt(d.getDate()),l=parseInt(d.getHours()),p=parseInt(d.getMinutes()),m=parseInt(d.getSeconds()),a-e>1?a-e+"年前"+n+"月"+i+"号"+o+"点":a-e>0?"去年"+n+"月"+i+"号"+o+"点":c-n>0?"今年"+n+"月"+i+"号"+o+"点":u-i>1?u-i+"天前"+o+"点":u-i>0?"昨天"+o+"点":l-o>0?l-o+"小时前":p-s>0?p-s+"分钟前":m-r>0?m-r+"秒前":"刚刚"}var I={name:"Movie",props:{movie:{type:Object,default:function(){return{}}}},computed:Object(l["d"])(["userInfo"]),methods:{formatTime:O,toMovie:function(t){this.$emit("to-movie",t)},editMovie:function(t){this.$emit("edit-movie",t)}}},M=I,j=(n("72d3"),Object(v["a"])(M,b,w,!1,null,"360d3aa4",null));j.options.__file="Movie.vue";var P=j.exports,$={name:"Box",components:{Movie:P},props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},computed:Object(l["d"])(["movieData"]),methods:Object(a["a"])({},Object(l["c"])(["setThisMovie"]),{toMovie:function(t){this.setThisMovie(t),this.$emit("to-movie")},editMovie:function(t){this.setThisMovie(t),this.$emit("edit-movie")}})},R=$,T=(n("b02d"),Object(v["a"])(R,f,g,!1,null,"5f1f93a0",null));T.options.__file="Box.vue";var L=T.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-wrapper"},[n("div",{staticClass:"btn big",on:{click:t.preOpt}},[t._v("上一页")]),90===t.upDown?n("div",{staticClass:"btn",on:{click:function(e){t.backOpt("2")}}},[t._v("返回")]):n("div",{staticClass:"btn",on:{click:function(e){t.backOpt("1")}}},[t._v(t._s(-90===t.upDown?"返回":"发布"))]),n("div",{staticClass:"btn",on:{click:t.homeOpt}},[t._v("首页")]),n("div",{staticClass:"btn big",on:{click:t.nextOpt}},[t._v("下一页")])])},A=[],S={name:"Footer",props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},methods:{preOpt:function(){0!==this.leftRight&&this.$emit("pre-opt")},nextOpt:function(){this.$emit("next-opt")},backOpt:function(t){this.$emit("back-opt",t)},homeOpt:function(){this.$emit("home-opt")}}},E=S,U=(n("2dbb"),Object(v["a"])(E,N,A,!1,null,"1a4f8b7c",null));U.options.__file="Footer.vue";var X=U.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"publish-wrapper",style:{transform:"rotateZ("+t.leftRight+"deg)"}},[-90===t.upDown?[n("div",{staticClass:"movie-title"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.title,expression:"movie.title"}],staticClass:"title",attrs:{type:"text",placeholder:"影视名称（必填）"},domProps:{value:t.movie.title},on:{input:function(e){e.target.composing||t.$set(t.movie,"title",e.target.value)}}})]),n("div",{staticClass:"movie-info"},[n("div",{staticClass:"poster"},[n("div",{staticClass:"poster-show",style:{backgroundImage:"url("+t.movie.poster+")"}},[""===t.movie.poster?n("span",[t._v("海报展示区")]):t._e()]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.poster,expression:"movie.poster"}],staticClass:"poster-input",attrs:{type:"text",placeholder:"海报链接（必填）"},domProps:{value:t.movie.poster},on:{input:function(e){e.target.composing||t.$set(t.movie,"poster",e.target.value)}}})]),n("div",{staticClass:"info"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.director,expression:"movie.director"}],staticClass:"info-item",attrs:{type:"text",placeholder:"导演（必填）"},domProps:{value:t.movie.director},on:{input:function(e){e.target.composing||t.$set(t.movie,"director",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.actor,expression:"movie.actor"}],staticClass:"info-item",attrs:{type:"text",placeholder:"主演（必填）"},domProps:{value:t.movie.actor},on:{input:function(e){e.target.composing||t.$set(t.movie,"actor",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.type,expression:"movie.type"}],staticClass:"info-item",attrs:{type:"text",placeholder:"类型（必填）"},domProps:{value:t.movie.type},on:{input:function(e){e.target.composing||t.$set(t.movie,"type",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.country,expression:"movie.country"}],staticClass:"info-item",attrs:{type:"text",placeholder:"制片国家/地区（必填）"},domProps:{value:t.movie.country},on:{input:function(e){e.target.composing||t.$set(t.movie,"country",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.duration,expression:"movie.duration"}],staticClass:"info-item",attrs:{type:"text",placeholder:"片长（必填）"},domProps:{value:t.movie.duration},on:{input:function(e){e.target.composing||t.$set(t.movie,"duration",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.showtime,expression:"movie.showtime"}],staticClass:"info-item",attrs:{type:"text",placeholder:"上映日期（必填）"},domProps:{value:t.movie.showtime},on:{input:function(e){e.target.composing||t.$set(t.movie,"showtime",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.score,expression:"movie.score"}],staticClass:"info-item",attrs:{type:"text",placeholder:"评分（必填）"},domProps:{value:t.movie.score},on:{input:function(e){e.target.composing||t.$set(t.movie,"score",e.target.value)}}})])]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.movie.desc,expression:"movie.desc"}],staticClass:"movie-desc",attrs:{cols:"30",rows:"4",placeholder:"简介（必填）"},domProps:{value:t.movie.desc},on:{input:function(e){e.target.composing||t.$set(t.movie,"desc",e.target.value)}}}),t._l(t.movie.download,function(e,i){return n("div",{key:i,staticClass:"movie-link"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"name",attrs:{type:"text",placeholder:"资源描述（选填）"},domProps:{value:e.name},on:{input:function(n){n.target.composing||t.$set(e,"name",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"item.link"}],staticClass:"link",attrs:{type:"text",placeholder:"资源网站或链接（必填）"},domProps:{value:e.link},on:{input:function(n){n.target.composing||t.$set(e,"link",n.target.value)}}}),i>0?n("div",{staticClass:"btn",on:{click:function(e){t.delOpt(i)}}},[t._v("删除")]):t._e(),n("div",{staticClass:"btn",on:{click:t.addOpt}},[t._v("新添")])])}),n("div",{staticClass:"save-btn",on:{click:t.saveOpt}},[t._v("保存")])]:t._e()],2)},F=[],B=(n("b54a"),{name:"Publish",props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},data:function(){return{type:"1",movie:{title:"",poster:"",director:"",actor:"",type:"",country:"",duration:"",showtime:"",score:"",desc:"",download:[{name:"",link:""}]}}},computed:Object(l["d"])(["userInfo","thisMovie"]),watch:{thisMovie:function(t){if(this.initData(),-90===this.upDown&&t&&t.download)for(var e in this.type="2",this.movie)this.movie.hasOwnProperty(e)&&(this.movie[e]=t[e]||"")}},methods:Object(a["a"])({},Object(l["b"])(["addMovie","updateMovie"]),{initData:function(){this.movie={title:"",poster:"",director:"",actor:"",type:"",country:"",duration:"",showtime:"",score:"",desc:"",download:[{name:"",link:""}]}},delOpt:function(t){this.movie.download.splice(t,1)},addOpt:function(){this.movie.download.push({name:"",link:""})},saveOpt:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.userInfo){t.next=3;break}return this.$toast({title:"请先登录"}),t.abrupt("return");case 3:if(""!==this.movie.title.replace(/\s/gi,"")){t.next=6;break}return this.$toast({title:"请填写电影名称"}),t.abrupt("return");case 6:if(""!==this.movie.poster.replace(/\s/gi,"")){t.next=9;break}return this.$toast({title:"请添加海报"}),t.abrupt("return");case 9:if(""!==this.movie.director.replace(/\s/gi,"")){t.next=12;break}return this.$toast({title:"请填写电影导演"}),t.abrupt("return");case 12:if(""!==this.movie.actor.replace(/\s/gi,"")){t.next=15;break}return this.$toast({title:"请填写电影主演"}),t.abrupt("return");case 15:if(""!==this.movie.type.replace(/\s/gi,"")){t.next=18;break}return this.$toast({title:"请填写电影类型"}),t.abrupt("return");case 18:if(""!==this.movie.country.replace(/\s/gi,"")){t.next=21;break}return this.$toast({title:"请填写电影制片国家/地区"}),t.abrupt("return");case 21:if(""!==this.movie.duration.replace(/\s/gi,"")){t.next=24;break}return this.$toast({title:"请填写电影片长"}),t.abrupt("return");case 24:if(""!==this.movie.showtime.replace(/\s/gi,"")){t.next=27;break}return this.$toast({title:"请填写电影上映时间"}),t.abrupt("return");case 27:if(""!==this.movie.score.replace(/\s/gi,"")){t.next=30;break}return this.$toast({title:"请填写电影评分"}),t.abrupt("return");case 30:if(""!==this.movie.desc.replace(/\s/gi,"")){t.next=33;break}return this.$toast({title:"请填写电影简介"}),t.abrupt("return");case 33:e=0;case 34:if(!(e<this.movie.download.length)){t.next=42;break}if(n=this.movie.download[e],""!==n.link.replace(/\s/gi,"")){t.next=39;break}return this.$toast({title:"请填写完整的资源网站或链接"}),t.abrupt("return");case 39:e++,t.next=34;break;case 42:if(i="1"===this.type?"发布":"更新",o=null,"1"!==this.type){t.next=50;break}return t.next=47,this.addMovie(this.movie);case 47:o=t.sent,t.next=54;break;case 50:if("2"!==this.type){t.next=54;break}return t.next=53,this.updateMovie(this.movie);case 53:o=t.sent;case 54:o&&(this.$toast({title:"".concat(i,"成功")}),this.initData(),this.$emit("back","1"));case 55:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})}),J=B,K=(n("1eb7"),Object(v["a"])(J,H,F,!1,null,null,null));K.options.__file="Publish.vue";var z=K.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"publish-wrapper detail-wrapper",style:{transform:"rotateZ("+-t.leftRight+"deg)"}},[90===t.upDown?[n("div",{staticClass:"movie-title"},[n("div",{staticClass:"title"},[t._v(t._s(t.thisMovie.title))])]),n("div",{staticClass:"movie-info"},[n("div",{staticClass:"poster",style:{backgroundImage:"url("+t.thisMovie.poster+")"}}),n("div",{staticClass:"info"},[n("div",{staticClass:"info-item",attrs:{title:"导演："+t.thisMovie.director}},[n("span",[t._v("导演：")]),t._v(t._s(t.thisMovie.director))]),n("div",{staticClass:"info-item",attrs:{title:"主演："+t.thisMovie.actor}},[n("span",[t._v("主演：")]),t._v(t._s(t.thisMovie.actor))]),n("div",{staticClass:"info-item",attrs:{title:"类型："+t.thisMovie.type}},[n("span",[t._v("类型：")]),t._v(t._s(t.thisMovie.type))]),n("div",{staticClass:"info-item",attrs:{title:"制片国家/地区："+t.thisMovie.country}},[n("span",[t._v("制片国家/地区：")]),t._v(t._s(t.thisMovie.country))]),n("div",{staticClass:"info-item",attrs:{title:"片长："+t.thisMovie.duration}},[n("span",[t._v("片长：")]),t._v(t._s(t.thisMovie.duration))]),n("div",{staticClass:"info-item",attrs:{title:"上映日期："+t.thisMovie.showtime}},[n("span",[t._v("上映日期：")]),t._v(t._s(t.thisMovie.showtime))]),n("div",{staticClass:"info-item",attrs:{title:"评分："+t.thisMovie.score}},[n("span",[t._v("评分：")]),t._v(t._s(t.thisMovie.score))])])]),n("div",{staticClass:"movie-desc"},[n("span",[t._v("简介：")]),t._v(t._s(t.thisMovie.desc))]),t.userInfo&&t.thisMovie.download?n("div",{staticClass:"link-btn"},[n("span",[t._v("资源链接：")]),t._l(t.thisMovie.download,function(e,i){return n("a",{key:i,staticClass:"btn",attrs:{href:e.link,target:"_blank",title:"点击下载"}},[n("div",[t._v(t._s(e.name?e.name:"资源链接"+(i+1)))])])})],2):t._e(),n("div",{staticClass:"comment-form"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"input",attrs:{cols:"30",rows:"4",placeholder:"不超过100字"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),n("div",{staticClass:"btn",on:{click:t.commentOpt}},[t._v("留言")])]),t._l(t.commentData.list,function(e,i){return n("div",{key:i,staticClass:"comment-list"},[n("div",{staticClass:"list"},[n("span",[t._v(t._s(e.user.nickname)+"：")]),t._v(t._s(e.comment))]),n("div",{staticClass:"time-wrapper"},[t.userInfo&&t.userInfo.userid===e.user.objectId?n("div",{staticClass:"del-btn",attrs:{title:"点击删除评论"},on:{click:function(n){n.stopPropagation(),t.delCommentOpt(e)}}},[t._v("删除评论")]):t._e(),n("div",{staticClass:"time"},[t._v("—— "+t._s(t.formatTime(e.createdAt)))])])])}),t.commentData.total<=0?n("div",{staticClass:"tip"},[t._v("一起来吐槽 ~")]):t.commentData.total>0&&t.commentData.isEnding?n("div",{staticClass:"tip"},[t._v("到底啦 ~")]):t._e()]:t._e()],2)},G=[],Y={name:"Detail",props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},data:function(){return{comment:""}},computed:Object(l["d"])(["userInfo","thisMovie","commentData"]),watch:{userInfo:function(t){90===this.upDown&&t&&this.getDownload()}},mounted:function(){var t=this;this.$nextTick(function(){document.querySelector(".detail-wrapper").addEventListener("scroll",function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n.target.offsetHeight+n.target.scrollTop+100>=n.target.scrollHeight&&!t.commentData.isEnding&&t.getCommon({pageDown:!0});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())})},methods:Object(a["a"])({},Object(l["b"])(["getCommon","commentMovie","getDownload","commentDel"]),{formatTime:O,commentOpt:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.userInfo){t.next=3;break}return this.$toast({title:"请先登录"}),t.abrupt("return");case 3:if(e=this.comment.replace(/(^\s*)|(\s*$)/,""),""!==e){t.next=6;break}return t.abrupt("return");case 6:if(!(e.length>100)){t.next=9;break}return this.$toast({title:"留言不超过100字"}),t.abrupt("return");case 9:return t.next=11,this.commentMovie({comment:e});case 11:n=t.sent,n&&(this.comment="");case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),delCommentOpt:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=window.confirm("确认删除该条评论？"),!n){t.next=6;break}return t.next=4,this.commentDel({commentId:e.objectId});case 4:i=t.sent,i&&(this.$toast({title:"删除成功"}),this.getCommon());case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()})},Z=Y,Q=(n("cbda"),Object(v["a"])(Z,q,G,!1,null,"02042109",null));Q.options.__file="Detail.vue";var V=Q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-wrapper",on:{click:t.closeLogin}},[n("div",{staticClass:"login-form",on:{click:t.stopPro}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",attrs:{type:"text",placeholder:"账号"},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.loginOpt("1")},input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),n("div",{staticClass:"btn",on:{click:function(e){e.stopPropagation(),t.loginOpt("1")}}},[t._v("登录")])])])},tt=[],et=n("6821"),nt=n.n(et),it=/^(0|86|17951)?(1[23456789][012356789])[0-9]{8}$/,ot=/^[a-z0-9]{6,11}$/,st={name:"Login",data:function(){return{formData:{phone:C("Movie_phone")||"",password:""}}},methods:Object(a["a"])({},Object(l["b"])(["login","regist"]),{stopPro:function(t){t.stopPropagation()},closeLogin:function(){this.formData.password="",this.$emit("close-login")},loginOpt:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(it.test(this.formData.phone)){t.next=3;break}return this.$toast({title:"请填写正确的手机号"}),t.abrupt("return");case 3:if(ot.test(this.formData.password)){t.next=6;break}return this.$toast({title:"请填写正确的密码"}),t.abrupt("return");case 6:if(n={username:this.formData.phone,password:nt()(this.formData.password),nickname:"游客"+nt()(this.formData.phone).substr(0,6)},i=null,o="1"===e?"登录":"注册","1"!==e){t.next=15;break}return t.next=12,this.login(n);case 12:i=t.sent,t.next=18;break;case 15:return t.next=17,this.regist(n);case 17:i=t.sent;case 18:i&&(this.$toast({title:"".concat(o,"成功")}),this.closeLogin(),y("Movie_phone",this.formData.phone));case 19:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()})},rt=st,at=(n("9915"),Object(v["a"])(rt,W,tt,!1,null,"2cb40dd4",null));at.options.__file="Login.vue";var ct=at.exports,ut={name:"app",components:{Header:h,Box:L,Footer:X,Publish:z,Detail:V,Login:ct},data:function(){return{leftRight:0,upDown:0,showLogin:""}},computed:Object(l["d"])(["userInfo"]),created:function(){this.getMovieList()},methods:Object(a["a"])({},Object(l["b"])(["getMovie","getUserToken","getDownload","getCommon"]),Object(l["c"])(["setPageData","setKeywords","setThisMovie"]),{getMovieList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getMovie();case 2:return t.next=4,this.getUserToken();case 4:e=t.sent,e||this.$toast({title:"您的账号已在异地登录，请重新登录"});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),preOpt:function(){this.upDown=0,this.leftRight+=90,(this.leftRight-90)%360!==0&&0!==this.leftRight||(this.setPageData("1"),this.getMovieList())},nextOpt:function(){this.upDown=0,this.leftRight-=90,this.leftRight%360===0&&(this.setPageData("2"),this.getMovieList())},backOpt:function(t){if("1"===t){if(0===this.upDown&&!this.userInfo)return void this.$toast({title:"请先登录"});if(0===this.upDown&&this.userInfo&&"1"!==this.userInfo.type)return void this.$toast({title:"权限不足"});this.upDown=-90-this.upDown}else this.upDown=0;0===this.upDown&&(this.setThisMovie({}),this.getMovieList())},viewMovie:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.upDown=90-this.upDown,90!==this.upDown){t.next=7;break}if(!this.userInfo){t.next=5;break}return t.next=5,this.getDownload();case 5:return t.next=7,this.getCommon();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),editMovie:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.backOpt("1"),-90!==this.upDown){t.next=4;break}return t.next=4,this.getDownload();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),homeOpt:function(){this.setPageData("0"),this.leftRight=0,this.upDown=0,this.getMovieList()},searchOpt:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.homeOpt(),this.setKeywords(e),t.next=4,this.getMovieList();case 4:n=t.sent,n&&n.count<=0&&this.$toast({title:"很抱歉，没有找到您想要的"});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),clearOpt:function(){this.setKeywords(),this.getMovieList()},loginOpt:function(){this.showLogin="1"},closeLogin:function(){this.showLogin="2"}})},lt=ut,pt=(n("7c55"),Object(v["a"])(lt,o,s,!1,null,null,null));pt.options.__file="App.vue";var mt=pt.exports,vt=(n("f751"),"https://api.leancloud.cn"),dt={baseAPI:vt,loginAPI:"".concat(vt,"/1.1/login"),userAPI:"".concat(vt,"/1.1/users"),movieAPI:"".concat(vt,"/1.1/classes/movie"),commentAPI:"".concat(vt,"/1.1/classes/comment"),downloadAPI:"".concat(vt,"/1.1/classes/download")},ht={appId:"QklUiCErP7xfkBMUV2ecI5Df-gzGzoHsz",appKey:"XXnTn83FoCjXAeIPKH1BPcTJ"},ft=(n("6b54"),n("323e")),gt=n.n(ft),bt=n("bc3a"),wt=n.n(bt),kt=(new Date).getTime(),xt=wt.a.create({baseURL:dt.baseAPI,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json","X-LC-Id":ht.appId,"X-LC-Sign":"".concat(nt()(kt.toString()+ht.appKey),",").concat(kt)},timeout:5e3}),Dt={},_t=["get","post","put","delete"];_t.forEach(function(t){Dt[t]=function(e,n,i){return new Promise(function(o,s){gt.a.start(),xt[t](e,n,i).then(function(t){gt.a.done(),t.status>=200&&t.status<300?o(t.data):(k({title:"请求错误"}),s(t))}).catch(function(t){gt.a.done(),k({title:t.response&&t.response.data&&t.response.data.error||"请求错误，稍候尝试"}),s(t)})})}});var yt=Dt;i["a"].use(l["a"]);var Ct=new l["a"].Store({state:{userInfo:D("Movie_userInfo")&&JSON.parse(D("Movie_userInfo"))||null,keywords:"",movieData:{list1:[],list2:[],list3:[],list4:[]},pageData:{per:16,page:1,total:0},thisMovie:{},commentData:{page:1,per:15,total:0,isEnding:!1,list:[]}},mutations:{setUserInfo:function(t,e){t.userInfo={nickname:e.nickname||"",userid:e.objectId||"",sessionToken:e.sessionToken||"",createdAt:e.createdAt||"",updatedAt:e.updatedAt||"",type:e.type||"",token:e.token||""},x("Movie_userInfo",JSON.stringify(t.userInfo))},clearUserInfo:function(t){t.userInfo=null,_("Movie_userInfo")},setMovieData:function(t,e){t.pageData.total=e.count,e.results.length>12?(t.movieData.list4=e.results.slice(12,e.results.length),t.movieData.list3=e.results.slice(8,12),t.movieData.list2=e.results.slice(4,8),t.movieData.list1=e.results.slice(0,4)):e.results.length>8&&e.results.length<=12?(t.movieData.list4=[],t.movieData.list3=e.results.slice(8,e.results.length),t.movieData.list2=e.results.slice(4,8),t.movieData.list1=e.results.slice(0,4)):e.results.length>4&&e.results.length<=8?(t.movieData.list4=[],t.movieData.list3=[],t.movieData.list2=e.results.slice(4,e.results.length),t.movieData.list1=e.results.slice(0,4)):e.results.length>0&&e.results.length<=4?(t.movieData.list4=[],t.movieData.list3=[],t.movieData.list2=[],t.movieData.list1=e.results.slice(0,e.results.length)):(t.movieData.list4=[],t.movieData.list3=[],t.movieData.list2=[],t.movieData.list1=[])},setThisMovie:function(t,e){t.thisMovie=e},setDownload:function(t,e){var n=JSON.parse(JSON.stringify(t.thisMovie));t.thisMovie=Object.assign(n,e)},setPageData:function(t,e){"0"===e?t.pageData.page=1:"1"===e&&t.pageData.page>1?t.pageData.page--:"2"===e&&t.pageData.total-t.pageData.page*t.pageData.per>0&&t.pageData.page++},setKeywords:function(t,e){var n=e||"";t.keywords=n},setCommentList:function(t,e){t.commentData.list=e},setCommentPage:function(t,e){t.commentData.page=e},setCommentTotal:function(t,e){t.commentData.total=e},setCommentEnding:function(t,e){t.commentData.isEnding=e}},actions:{regist:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.prev=1,t.next=4,yt.post(dt.userAPI,n);case 4:return o=t.sent,i("setUserInfo",Object.assign(n,o)),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,n){return t.apply(this,arguments)}}(),login:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.dispatch,t.prev=1,t.next=4,yt.post(dt.loginAPI,n);case 4:return o=t.sent,i("updateUserToken",o),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,n){return t.apply(this,arguments)}}(),updateUserToken:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.prev=1,o={token:nt()((new Date).getTime())},t.next=5,yt.put("".concat(dt.userAPI,"/").concat(n.objectId),o,{headers:{"X-LC-Session":n.sessionToken}});case 5:return i("setUserInfo",Object.assign(n,o)),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,n){return t.apply(this,arguments)}}(),getUserToken:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,i,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.state,i=e.commit,t.prev=1,!n.userInfo){t.next=15;break}return o={headers:{"X-LC-Session":n.userInfo.sessionToken},params:{keys:"token"}},t.next=6,yt.get("".concat(dt.userAPI,"/").concat(n.userInfo.userid),o);case 6:if(s=t.sent,!s||!s.token||s.token!==n.userInfo.token){t.next=11;break}return t.abrupt("return",!0);case 11:return i("clearUserInfo"),t.abrupt("return",!1);case 13:t.next=16;break;case 15:return t.abrupt("return",!0);case 16:t.next=22;break;case 18:return t.prev=18,t.t0=t["catch"](1),i("clearUserInfo"),t.abrupt("return",!1);case 22:case"end":return t.stop()}},t,this,[[1,18]])}));return function(e){return t.apply(this,arguments)}}(),getMovie:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,i,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,i=e.commit,t.prev=1,o={params:{order:"-createdAt",limit:n.pageData.page*n.pageData.per,skip:(n.pageData.page-1)*n.pageData.per,count:1,where:{title:{$regex:n.keywords,$options:"sxi"}}}},t.next=5,yt.get(dt.movieAPI,o);case 5:return s=t.sent,s&&s.results&&i("setMovieData",s),t.abrupt("return",s);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",!1);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),addMovie:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var i,o,s,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,o=e.dispatch,t.prev=1,s={download:n.download},delete n.download,t.next=6,yt.post(dt.movieAPI,n,{headers:{"X-LC-Session":i.userInfo.sessionToken}});case 6:return r=t.sent,s.movie={__type:"Pointer",className:"movie",objectId:r.objectId},t.next=10,yt.post(dt.downloadAPI,s,{headers:{"X-LC-Session":i.userInfo.sessionToken}});case 10:return a=t.sent,r&&a&&o("getMovie"),t.abrupt("return",!0);case 15:return t.prev=15,t.t0=t["catch"](1),t.abrupt("return",!1);case 18:case"end":return t.stop()}},t,this,[[1,15]])}));return function(e,n){return t.apply(this,arguments)}}(),updateMovie:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var i,o,s,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,o=e.dispatch,t.prev=1,s={download:n.download},delete n.download,t.next=6,yt.put("".concat(dt.movieAPI,"/").concat(i.thisMovie.objectId),n,{headers:{"X-LC-Session":i.userInfo.sessionToken}});case 6:return r=t.sent,t.next=9,yt.put("".concat(dt.downloadAPI,"/").concat(i.thisMovie.downloadId),s,{headers:{"X-LC-Session":i.userInfo.sessionToken}});case 9:return a=t.sent,r&&a&&o("getMovie"),t.abrupt("return",!0);case 14:return t.prev=14,t.t0=t["catch"](1),t.abrupt("return",!1);case 17:case"end":return t.stop()}},t,this,[[1,14]])}));return function(e,n){return t.apply(this,arguments)}}(),getDownload:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n,i,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,i=e.commit,t.prev=1,o={headers:{"X-LC-Session":n.userInfo.sessionToken},params:{where:{movie:{__type:"Pointer",className:"movie",objectId:n.thisMovie.objectId}}}},t.next=5,yt.get(dt.downloadAPI,o);case 5:return s=t.sent,s&&s.results&&s.results[0]&&i("setDownload",{download:s.results[0].download,downloadId:s.results[0].objectId}),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",!1);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),getCommon:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var i,o,s,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.state,o=e.commit,t.prev=1,s={params:{where:{movie:{__type:"Pointer",className:"movie",objectId:i.thisMovie.objectId}},include:"user",order:"-createdAt",limit:i.commentData.per,skip:0,count:1}},!n||!n.pageDown){t.next=12;break}if(s.params.limit=(i.commentData.page+1)*i.commentData.per,s.params.skip=i.commentData.page*i.commentData.per,!(i.commentData.total<=s.params.skip)){t.next=9;break}return o("setCommentEnding",!0),t.abrupt("return",!0);case 9:o("setCommentPage",i.commentData.page+1),t.next=14;break;case 12:o("setCommentEnding",!1),o("setCommentPage",1);case 14:return t.next=16,yt.get(dt.commentAPI,s);case 16:return r=t.sent,o("setCommentTotal",r.count||0),a=r&&r.results||[],n&&n.pageDown?o("setCommentList",i.commentData.list.concat(a)):o("setCommentList",a),t.abrupt("return",!0);case 23:return t.prev=23,t.t0=t["catch"](1),t.abrupt("return",!1);case 26:case"end":return t.stop()}},t,this,[[1,23]])}));return function(e,n){return t.apply(this,arguments)}}(),commentMovie:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var i,o,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,o=e.dispatch,t.prev=1,s={movie:{__type:"Pointer",className:"movie",objectId:i.thisMovie.objectId},user:{__type:"Pointer",className:"_User",objectId:i.userInfo.userid},comment:n.comment},t.next=5,yt.post(dt.commentAPI,s,{headers:{"X-LC-Session":i.userInfo.sessionToken}});case 5:return o("getCommon"),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,n){return t.apply(this,arguments)}}(),commentDel:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,t.prev=1,t.next=4,yt.delete("".concat(dt.commentAPI,"/").concat(n.commentId),{headers:{"X-LC-Session":i.userInfo.sessionToken}});case 4:return t.abrupt("return",!0);case 7:return t.prev=7,t.t0=t["catch"](1),t.abrupt("return",!1);case 10:case"end":return t.stop()}},t,this,[[1,7]])}));return function(e,n){return t.apply(this,arguments)}}()}});n("ee40");i["a"].config.productionTip=!1,i["a"].prototype.$toast=k,new i["a"]({store:Ct,render:function(t){return t(mt)}}).$mount("#app")},6347:function(t,e,n){},"72d3":function(t,e,n){"use strict";var i=n("cea6"),o=n.n(i);o.a},"7c55":function(t,e,n){"use strict";var i=n("d3dd"),o=n.n(i);o.a},"967a":function(t,e,n){},9915:function(t,e,n){"use strict";var i=n("d71a"),o=n.n(i);o.a},abe7:function(t,e,n){},b02d:function(t,e,n){"use strict";var i=n("967a"),o=n.n(i);o.a},cbda:function(t,e,n){"use strict";var i=n("abe7"),o=n.n(i);o.a},cea6:function(t,e,n){},d3dd:function(t,e,n){},d71a:function(t,e,n){},ee40:function(t,e,n){}});
//# sourceMappingURL=app.a65056d8.js.map