(function(t){function e(e){for(var n,s,r=e[0],c=e[1],u=e[2],p=0,m=[];p<r.length;p++)s=r[p],o[s]&&m.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Fee-box/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0578":function(t,e,i){"use strict";var n=i("1938"),o=i.n(n);o.a},1938:function(t,e,i){},"1d7d":function(t,e,i){},"1eb7":function(t,e,i){"use strict";var n=i("6347"),o=i.n(n);o.a},"2dbb":function(t,e,i){"use strict";var n=i("4721"),o=i.n(n);o.a},3662:function(t,e,i){"use strict";var n=i("e795"),o=i.n(n);o.a},4721:function(t,e,i){},"55ab":function(t,e,i){"use strict";var n=i("bc7c"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"toast"}}),i("Login",{class:["1"===t.showLogin?"show":"","2"===t.showLogin?"hide":""],on:{"close-login":t.closeLogin}}),i("Header",{on:{"search-opt":t.searchOpt,"clear-opt":t.clearOpt,"login-opt":t.loginOpt}}),i("Box",{attrs:{leftRight:t.leftRight,upDown:t.upDown},on:{"to-movie":t.viewMovie,"edit-movie":t.editMovie}},[i("template",{slot:"publish"},[i("Publish",{attrs:{leftRight:t.leftRight,upDown:t.upDown},on:{back:t.backOpt}})],1),i("template",{slot:"detail"},[i("Detail",{attrs:{leftRight:t.leftRight,upDown:t.upDown}})],1)],2),i("Footer",{attrs:{leftRight:t.leftRight,upDown:t.upDown},on:{"pre-opt":t.preOpt,"next-opt":t.nextOpt,"back-opt":t.backOpt,"home-opt":t.homeOpt}})],1)},a=[],s=(i("96cf"),i("3040")),r=i("c93e"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-wrapper"},[i("div",{staticClass:"form"},[t.userInfo&&t.userInfo.nickname?i("div",{staticClass:"btn btn1",attrs:{title:"点击退出登录"},on:{click:t.logoutOpt}},[t._v(t._s(t.userInfo.nickname))]):i("div",{staticClass:"btn btn1",on:{click:t.loginOpt}},[t._v("登录")]),i("div",{staticClass:"input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"input",attrs:{type:"text",placeholder:"影视名称"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t.keywords?i("span",{staticClass:"clear",attrs:{title:"清除"},on:{click:t.clearOpt}},[t._v("✕")]):t._e()]),i("div",{staticClass:"btn",on:{click:t.searchOpt}},[t._v("搜索")])])])},u=[],l=(i("a481"),i("2f62")),p={name:"Header",data:function(){return{keywords:""}},computed:Object(l["d"])(["userInfo"]),methods:Object(r["a"])({},Object(l["c"])(["clearUserInfo"]),{clearOpt:function(){this.keywords="",this.$emit("clear-opt")},searchOpt:function(){this.$emit("search-opt",this.keywords.replace(/(^\s*)|(\s*$)/,""))},loginOpt:function(){this.$emit("login-opt")},logoutOpt:function(){this.clearUserInfo(),this.$toast({title:"退出登录"})}})},m=p,v=(i("7e89"),i("2877")),d=Object(v["a"])(m,c,u,!1,null,"2c92589c",null);d.options.__file="Header.vue";var h=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box-wrapper",style:{transform:"rotateX("+t.upDown+"deg) rotateY("+t.leftRight+"deg)"}},[i("div",{staticClass:"box box1"},t._l(t.movieData.list1,function(e,n){return i("Movie",{key:n,attrs:{movie:e},on:{"to-movie":t.toMovie,"edit-movie":t.editMovie}})})),i("div",{staticClass:"box box2"},t._l(t.movieData.list2,function(e,n){return i("Movie",{key:n,attrs:{movie:e},on:{"to-movie":t.toMovie,"edit-movie":t.editMovie}})})),i("div",{staticClass:"box box3"},t._l(t.movieData.list3,function(e,n){return i("Movie",{key:n,attrs:{movie:e},on:{"to-movie":t.toMovie,"edit-movie":t.editMovie}})})),i("div",{staticClass:"box box4"},t._l(t.movieData.list4,function(e,n){return i("Movie",{key:n,attrs:{movie:e},on:{"to-movie":t.toMovie,"edit-movie":t.editMovie}})})),i("div",{staticClass:"box box5"},[t._t("publish")],2),i("div",{staticClass:"box box6"},[t._t("detail")],2)])},g=[],b=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movie-wrapper",on:{click:function(e){t.toMovie(t.movie)}}},[i("div",{staticClass:"poster",style:{backgroundImage:"url("+t.movie.poster+")"}},[i("div",{staticClass:"score"},[t._v(t._s(t.movie.score))]),t.userInfo&&"1"===t.userInfo.type?i("div",{staticClass:"edit",on:{click:function(e){e.stopPropagation(),t.editMovie(t.movie)}}},[i("div",[t._v("编辑")])]):t._e()]),i("div",{staticClass:"title"},[t._v(t._s(t.movie.title))]),i("div",{staticClass:"time"},[t._v("更新于："+t._s(t.formatTime(t.movie.createdAt)))])])}),w=[];i("4917"),i("3b2b");function x(t){var e=document.getElementById("toast")||null;if(e&&""===e.innerHTML&&(""===e.className||"hide"===e.className)){var i={duration:t.duration||2e3,title:t.title||""};e.innerHTML=i.title,e.className="show",setTimeout(function(){e.className="hide",setTimeout(function(){e.innerHTML=""},400)},i.duration)}}function D(t,e,i){i||(i=1);var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),document.cookie=t+"="+escape(e)+";expires="+n.toGMTString()}function _(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return document.cookie.match(e)?unescape(document.cookie.match(e)[2]):null}function k(t){var e=new Date;e.setTime(e.getTime()-1);var i=_(t);i&&(document.cookie=t+"="+i+";expires="+e.toGMTString())}function y(t,e){localStorage.setItem(t,e)}function M(t){return localStorage.getItem(t)}function O(t){var e,i,n,o,a,s,r,c,u,l,p,m,v=new Date(t),d=new Date;return e=parseInt(v.getFullYear()),i=parseInt(v.getMonth())+1,n=parseInt(v.getDate()),o=parseInt(v.getHours()),a=parseInt(v.getMinutes()),s=parseInt(v.getSeconds()),r=parseInt(d.getFullYear()),c=parseInt(d.getMonth())+1,u=parseInt(d.getDate()),l=parseInt(d.getHours()),p=parseInt(d.getMinutes()),m=parseInt(d.getSeconds()),r-e>1?r-e+"年前"+i+"月"+n+"号"+o+"点":r-e>0?"去年"+i+"月"+n+"号"+o+"点":c-i>0?"今年"+i+"月"+n+"号"+o+"点":u-n>1?u-n+"天前"+o+"点":u-n>0?"昨天"+o+"点":l-o>0?l-o+"小时前":p-a>0?p-a+"分钟前":m-s>0?m-s+"秒前":"刚刚"}var C={name:"Movie",props:{movie:{type:Object,default:function(){return{}}}},computed:Object(l["d"])(["userInfo"]),methods:{formatTime:O,toMovie:function(t){this.$emit("to-movie",t)},editMovie:function(t){this.$emit("edit-movie",t)}}},I=C,j=(i("55ab"),Object(v["a"])(I,b,w,!1,null,"0b724f57",null));j.options.__file="Movie.vue";var $=j.exports,P={name:"Box",components:{Movie:$},props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},computed:Object(l["d"])(["movieData"]),methods:Object(r["a"])({},Object(l["c"])(["setThisMovie"]),{toMovie:function(t){this.setThisMovie(t),this.$emit("to-movie")},editMovie:function(t){this.setThisMovie(t),this.$emit("edit-movie")}})},R=P,N=(i("0578"),Object(v["a"])(R,f,g,!1,null,"680e04ae",null));N.options.__file="Box.vue";var T=N.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-wrapper"},[i("div",{staticClass:"btn big",on:{click:t.preOpt}},[t._v("上一页")]),90===t.upDown?i("div",{staticClass:"btn",on:{click:function(e){t.backOpt("2")}}},[t._v("返回")]):i("div",{staticClass:"btn",on:{click:function(e){t.backOpt("1")}}},[t._v(t._s(-90===t.upDown?"返回":"发布"))]),i("div",{staticClass:"btn",on:{click:t.homeOpt}},[t._v("首页")]),i("div",{staticClass:"btn big",on:{click:t.nextOpt}},[t._v("下一页")])])},L=[],E={name:"Footer",props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},methods:{preOpt:function(){0!==this.leftRight&&this.$emit("pre-opt")},nextOpt:function(){this.$emit("next-opt")},backOpt:function(t){this.$emit("back-opt",t)},homeOpt:function(){this.$emit("home-opt")}}},S=E,H=(i("2dbb"),Object(v["a"])(S,A,L,!1,null,"1a4f8b7c",null));H.options.__file="Footer.vue";var U=H.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"publish-wrapper",style:{transform:"rotateZ("+t.leftRight+"deg)"}},[-90===t.upDown?[i("div",{staticClass:"movie-title"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.title,expression:"movie.title"}],staticClass:"title",attrs:{type:"text",placeholder:"影视名称（必填）"},domProps:{value:t.movie.title},on:{input:function(e){e.target.composing||t.$set(t.movie,"title",e.target.value)}}})]),i("div",{staticClass:"movie-info"},[i("div",{staticClass:"poster"},[i("div",{staticClass:"poster-show",style:{backgroundImage:"url("+t.movie.poster+")"}},[""===t.movie.poster?i("span",[t._v("海报展示区")]):t._e()]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.poster,expression:"movie.poster"}],staticClass:"poster-input",attrs:{type:"text",placeholder:"海报链接（必填）"},domProps:{value:t.movie.poster},on:{input:function(e){e.target.composing||t.$set(t.movie,"poster",e.target.value)}}})]),i("div",{staticClass:"info"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.director,expression:"movie.director"}],staticClass:"info-item",attrs:{type:"text",placeholder:"导演（必填）"},domProps:{value:t.movie.director},on:{input:function(e){e.target.composing||t.$set(t.movie,"director",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.actor,expression:"movie.actor"}],staticClass:"info-item",attrs:{type:"text",placeholder:"主演（必填）"},domProps:{value:t.movie.actor},on:{input:function(e){e.target.composing||t.$set(t.movie,"actor",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.type,expression:"movie.type"}],staticClass:"info-item",attrs:{type:"text",placeholder:"类型（必填）"},domProps:{value:t.movie.type},on:{input:function(e){e.target.composing||t.$set(t.movie,"type",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.country,expression:"movie.country"}],staticClass:"info-item",attrs:{type:"text",placeholder:"制片国家/地区（必填）"},domProps:{value:t.movie.country},on:{input:function(e){e.target.composing||t.$set(t.movie,"country",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.duration,expression:"movie.duration"}],staticClass:"info-item",attrs:{type:"text",placeholder:"片长（必填）"},domProps:{value:t.movie.duration},on:{input:function(e){e.target.composing||t.$set(t.movie,"duration",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.showtime,expression:"movie.showtime"}],staticClass:"info-item",attrs:{type:"text",placeholder:"上映日期（必填）"},domProps:{value:t.movie.showtime},on:{input:function(e){e.target.composing||t.$set(t.movie,"showtime",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.score,expression:"movie.score"}],staticClass:"info-item",attrs:{type:"text",placeholder:"评分（必填）"},domProps:{value:t.movie.score},on:{input:function(e){e.target.composing||t.$set(t.movie,"score",e.target.value)}}})])]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.movie.desc,expression:"movie.desc"}],staticClass:"movie-desc",attrs:{cols:"30",rows:"4",placeholder:"简介（必填）"},domProps:{value:t.movie.desc},on:{input:function(e){e.target.composing||t.$set(t.movie,"desc",e.target.value)}}}),t._l(t.movie.download,function(e,n){return i("div",{key:n,staticClass:"movie-link"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"name",attrs:{type:"text",placeholder:"资源描述（选填）"},domProps:{value:e.name},on:{input:function(i){i.target.composing||t.$set(e,"name",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"item.link"}],staticClass:"link",attrs:{type:"text",placeholder:"资源网站或链接（必填）"},domProps:{value:e.link},on:{input:function(i){i.target.composing||t.$set(e,"link",i.target.value)}}}),n>0?i("div",{staticClass:"btn",on:{click:function(e){t.delOpt(n)}}},[t._v("删除")]):t._e(),i("div",{staticClass:"btn",on:{click:t.addOpt}},[t._v("新添")])])}),i("div",{staticClass:"save-btn",on:{click:t.saveOpt}},[t._v("保存")])]:t._e()],2)},X=[],B=(i("b54a"),{name:"Publish",props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},data:function(){return{type:"1",movie:{title:"",poster:"",director:"",actor:"",type:"",country:"",duration:"",showtime:"",score:"",desc:"",download:[{name:"",link:""}]}}},computed:Object(l["d"])(["userInfo","thisMovie"]),watch:{thisMovie:function(t){if(this.initData(),-90===this.upDown&&t&&t.download)for(var e in this.type="2",this.movie)this.movie.hasOwnProperty(e)&&(this.movie[e]=t[e]||"")}},methods:Object(r["a"])({},Object(l["b"])(["addMovie","updateMovie"]),{initData:function(){this.movie={title:"",poster:"",director:"",actor:"",type:"",country:"",duration:"",showtime:"",score:"",desc:"",download:[{name:"",link:""}]}},delOpt:function(t){this.movie.download.splice(t,1)},addOpt:function(){this.movie.download.push({name:"",link:""})},saveOpt:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.userInfo){t.next=3;break}return this.$toast({title:"请先登录"}),t.abrupt("return");case 3:if(""!==this.movie.title.replace(/\s/gi,"")){t.next=6;break}return this.$toast({title:"请填写电影名称"}),t.abrupt("return");case 6:if(""!==this.movie.poster.replace(/\s/gi,"")){t.next=9;break}return this.$toast({title:"请添加海报"}),t.abrupt("return");case 9:if(""!==this.movie.director.replace(/\s/gi,"")){t.next=12;break}return this.$toast({title:"请填写电影导演"}),t.abrupt("return");case 12:if(""!==this.movie.actor.replace(/\s/gi,"")){t.next=15;break}return this.$toast({title:"请填写电影主演"}),t.abrupt("return");case 15:if(""!==this.movie.type.replace(/\s/gi,"")){t.next=18;break}return this.$toast({title:"请填写电影类型"}),t.abrupt("return");case 18:if(""!==this.movie.country.replace(/\s/gi,"")){t.next=21;break}return this.$toast({title:"请填写电影制片国家/地区"}),t.abrupt("return");case 21:if(""!==this.movie.duration.replace(/\s/gi,"")){t.next=24;break}return this.$toast({title:"请填写电影片长"}),t.abrupt("return");case 24:if(""!==this.movie.showtime.replace(/\s/gi,"")){t.next=27;break}return this.$toast({title:"请填写电影上映时间"}),t.abrupt("return");case 27:if(""!==this.movie.score.replace(/\s/gi,"")){t.next=30;break}return this.$toast({title:"请填写电影评分"}),t.abrupt("return");case 30:if(""!==this.movie.desc.replace(/\s/gi,"")){t.next=33;break}return this.$toast({title:"请填写电影简介"}),t.abrupt("return");case 33:e=0;case 34:if(!(e<this.movie.download.length)){t.next=42;break}if(i=this.movie.download[e],""!==i.link.replace(/\s/gi,"")){t.next=39;break}return this.$toast({title:"请填写完整的资源网站或链接"}),t.abrupt("return");case 39:e++,t.next=34;break;case 42:if(n="1"===this.type?"发布":"更新",o=null,"1"!==this.type){t.next=50;break}return t.next=47,this.addMovie(this.movie);case 47:o=t.sent,t.next=54;break;case 50:if("2"!==this.type){t.next=54;break}return t.next=53,this.updateMovie(this.movie);case 53:o=t.sent;case 54:o&&(this.$toast({title:"".concat(n,"成功")}),this.initData(),this.$emit("back","1"));case 55:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})}),J=B,K=(i("1eb7"),Object(v["a"])(J,F,X,!1,null,null,null));K.options.__file="Publish.vue";var z=K.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"publish-wrapper detail-wrapper",style:{transform:"rotateZ("+-t.leftRight+"deg)"}},[90===t.upDown?[i("div",{staticClass:"movie-title"},[i("div",{staticClass:"title"},[t._v(t._s(t.thisMovie.title))])]),i("div",{staticClass:"movie-info"},[i("div",{staticClass:"poster",style:{backgroundImage:"url("+t.thisMovie.poster+")"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-item",attrs:{title:"导演："+t.thisMovie.director}},[i("span",[t._v("导演：")]),t._v(t._s(t.thisMovie.director))]),i("div",{staticClass:"info-item",attrs:{title:"主演："+t.thisMovie.actor}},[i("span",[t._v("主演：")]),t._v(t._s(t.thisMovie.actor))]),i("div",{staticClass:"info-item",attrs:{title:"类型："+t.thisMovie.type}},[i("span",[t._v("类型：")]),t._v(t._s(t.thisMovie.type))]),i("div",{staticClass:"info-item",attrs:{title:"制片国家/地区："+t.thisMovie.country}},[i("span",[t._v("制片国家/地区：")]),t._v(t._s(t.thisMovie.country))]),i("div",{staticClass:"info-item",attrs:{title:"片长："+t.thisMovie.duration}},[i("span",[t._v("片长：")]),t._v(t._s(t.thisMovie.duration))]),i("div",{staticClass:"info-item",attrs:{title:"上映日期："+t.thisMovie.showtime}},[i("span",[t._v("上映日期：")]),t._v(t._s(t.thisMovie.showtime))]),i("div",{staticClass:"info-item",attrs:{title:"评分："+t.thisMovie.score}},[i("span",[t._v("评分：")]),t._v(t._s(t.thisMovie.score))])])]),i("div",{staticClass:"movie-desc"},[i("span",[t._v("简介：")]),t._v(t._s(t.thisMovie.desc))]),t.userInfo&&t.thisMovie.download?i("div",{staticClass:"link-btn"},[i("span",[t._v("资源链接：")]),t._l(t.thisMovie.download,function(e,n){return i("a",{key:n,staticClass:"btn",attrs:{href:e.link,target:"_blank",title:"点击下载"}},[i("div",[t._v(t._s(e.name?e.name:"资源链接"+(n+1)))])])})],2):t._e(),i("div",{staticClass:"comment-form"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"input",attrs:{cols:"30",rows:"4",placeholder:"不超过100字"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),i("div",{staticClass:"btn",on:{click:t.commentOpt}},[t._v("留言")])]),t._l(t.commentData.list,function(e,n){return i("div",{key:n,staticClass:"comment-list"},[i("div",{staticClass:"list"},[i("span",[t._v(t._s(e.user.nickname)+"：")]),t._v(t._s(e.comment))]),i("div",{staticClass:"time-wrapper"},[i("div",{staticClass:"time"},[t._v("—— "+t._s(t.formatTime(e.createdAt)))])])])}),t.commentData.total<=0?i("div",{staticClass:"tip"},[t._v("一起来吐槽 ~")]):t.commentData.total>0&&t.commentData.isEnding?i("div",{staticClass:"tip"},[t._v("到底啦 ~")]):t._e()]:t._e()],2)},G=[],Y={name:"Detail",props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},data:function(){return{comment:""}},computed:Object(l["d"])(["userInfo","thisMovie","commentData"]),watch:{userInfo:function(t){90===this.upDown&&t&&this.getDownload()}},mounted:function(){var t=this;this.$nextTick(function(){document.querySelector(".detail-wrapper").addEventListener("scroll",function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(i){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:i.target.offsetHeight+i.target.scrollTop+100>=i.target.scrollHeight&&!t.commentData.isEnding&&t.getCommon({pageDown:!0});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())})},methods:Object(r["a"])({},Object(l["b"])(["getCommon","commentMovie","getDownload"]),{formatTime:O,commentOpt:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.userInfo){t.next=3;break}return this.$toast({title:"请先登录"}),t.abrupt("return");case 3:if(e=this.comment.replace(/(^\s*)|(\s*$)/,""),""!==e){t.next=6;break}return t.abrupt("return");case 6:if(!(e.length>100)){t.next=9;break}return this.$toast({title:"留言不超过100字"}),t.abrupt("return");case 9:return t.next=11,this.commentMovie({comment:e});case 11:i=t.sent,i&&(this.comment="");case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})},Z=Y,Q=(i("8c7d"),Object(v["a"])(Z,q,G,!1,null,"58a8d3d7",null));Q.options.__file="Detail.vue";var V=Q.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-wrapper",on:{click:t.closeLogin}},[i("div",{staticClass:"login-form",on:{click:t.stopPro}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",attrs:{type:"text",placeholder:"账号"},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.loginOpt("1")},input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),i("div",{staticClass:"btn",on:{click:function(e){e.stopPropagation(),t.loginOpt("1")}}},[t._v("登录")])])])},tt=[],et=i("6821"),it=i.n(et),nt=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,ot=/^[a-z0-9]{6,11}$/,at={name:"Login",data:function(){return{formData:{phone:M("Movie_phone")||"",password:""}}},methods:Object(r["a"])({},Object(l["b"])(["login","regist"]),{stopPro:function(t){t.stopPropagation()},closeLogin:function(){this.formData.password="",this.$emit("close-login")},loginOpt:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var i,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(nt.test(this.formData.phone)){t.next=3;break}return this.$toast({title:"请填写正确的手机号"}),t.abrupt("return");case 3:if(ot.test(this.formData.password)){t.next=6;break}return this.$toast({title:"请填写正确的密码"}),t.abrupt("return");case 6:if(i={username:this.formData.phone,password:it()(this.formData.password),nickname:"游客"+it()(this.formData.phone).substr(0,6)},n=null,o="1"===e?"登录":"注册","1"!==e){t.next=15;break}return t.next=12,this.login(i);case 12:n=t.sent,t.next=18;break;case 15:return t.next=17,this.regist(i);case 17:n=t.sent;case 18:n&&(this.$toast({title:"".concat(o,"成功")}),this.closeLogin(),y("Movie_phone",this.formData.phone));case 19:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()})},st=at,rt=(i("3662"),Object(v["a"])(st,W,tt,!1,null,"e85d1904",null));rt.options.__file="Login.vue";var ct=rt.exports,ut={name:"app",components:{Header:h,Box:T,Footer:U,Publish:z,Detail:V,Login:ct},data:function(){return{leftRight:0,upDown:0,showLogin:""}},computed:Object(l["d"])(["userInfo"]),created:function(){this.getMovie()},methods:Object(r["a"])({},Object(l["b"])(["getMovie","getDownload","getCommon"]),Object(l["c"])(["setPageData","setKeywords","setThisMovie"]),{preOpt:function(){this.upDown=0,this.leftRight+=90,this.leftRight%360===0&&(this.setPageData("1"),this.getMovie())},nextOpt:function(){this.upDown=0,this.leftRight-=90,this.leftRight%360===0&&(this.setPageData("2"),this.getMovie())},backOpt:function(t){if("1"===t){if(0===this.upDown&&!this.userInfo)return void this.$toast({title:"请先登录"});if(0===this.upDown&&this.userInfo&&"1"!==this.userInfo.type)return void this.$toast({title:"权限不足"});this.upDown=-90-this.upDown}else this.upDown=0;0===this.upDown&&(this.setThisMovie({}),this.getMovie())},viewMovie:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.upDown=90-this.upDown,90!==this.upDown){t.next=7;break}if(!this.userInfo){t.next=5;break}return t.next=5,this.getDownload();case 5:return t.next=7,this.getCommon();case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),editMovie:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.backOpt("1"),-90!==this.upDown){t.next=4;break}return t.next=4,this.getDownload();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),homeOpt:function(){this.leftRight=0,this.upDown=0},searchOpt:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.homeOpt(),this.setKeywords(e),t.next=4,this.getMovie();case 4:i=t.sent,i&&i.count<=0&&this.$toast({title:"很抱歉，没有找到您想要的"});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),clearOpt:function(){this.setKeywords(),this.getMovie()},loginOpt:function(){this.showLogin="1"},closeLogin:function(){this.showLogin="2"}})},lt=ut,pt=(i("7c55"),Object(v["a"])(lt,o,a,!1,null,null,null));pt.options.__file="App.vue";var mt=pt.exports,vt=(i("f751"),"https://api.leancloud.cn"),dt={baseAPI:vt,loginAPI:"".concat(vt,"/1.1/login"),userAPI:"".concat(vt,"/1.1/users"),movieAPI:"".concat(vt,"/1.1/classes/movie"),commentAPI:"".concat(vt,"/1.1/classes/comment"),downloadAPI:"".concat(vt,"/1.1/classes/download")},ht={appId:"QklUiCErP7xfkBMUV2ecI5Df-gzGzoHsz",appKey:"XXnTn83FoCjXAeIPKH1BPcTJ"},ft=(i("6b54"),i("323e")),gt=i.n(ft),bt=i("bc3a"),wt=i.n(bt),xt=(new Date).getTime(),Dt=wt.a.create({baseURL:dt.baseAPI,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json","X-LC-Id":ht.appId,"X-LC-Sign":"".concat(it()(xt.toString()+ht.appKey),",").concat(xt)},timeout:5e3}),_t={},kt=["get","post","put","delete"];kt.forEach(function(t){_t[t]=function(e,i,n){return new Promise(function(o,a){gt.a.start(),Dt[t](e,i,n).then(function(t){gt.a.done(),t.status>=200&&t.status<300?o(t.data):(x({title:"请求错误"}),a(t))}).catch(function(t){gt.a.done(),x({title:t.response.data&&t.response.data.error||"请求错误"}),a(t)})})}});var yt=_t;n["a"].use(l["a"]);var Mt=new l["a"].Store({state:{userInfo:_("Movie_userInfo")&&JSON.parse(_("Movie_userInfo"))||null,keywords:"",movieData:{list1:[],list2:[],list3:[],list4:[]},pageData:{per:16,page:1,total:0},thisMovie:{},commentData:{page:1,per:15,total:0,isEnding:!1,list:[]}},mutations:{setUserInfo:function(t,e){t.userInfo={nickname:e.nickname||"",userid:e.objectId||"",sessionToken:e.sessionToken||"",createdAt:e.createdAt||"",updatedAt:e.updatedAt||"",type:e.type||""},D("Movie_userInfo",JSON.stringify(t.userInfo))},clearUserInfo:function(t){t.userInfo=null,k("Movie_userInfo")},setMovieData:function(t,e){t.pageData.total=e.count,e.results.length>12?(t.movieData.list4=e.results.slice(12,e.results.length),t.movieData.list3=e.results.slice(8,12),t.movieData.list2=e.results.slice(4,8),t.movieData.list1=e.results.slice(0,4)):e.results.length>8&&e.results.length<=12?(t.movieData.list4=[],t.movieData.list3=e.results.slice(8,e.results.length),t.movieData.list2=e.results.slice(4,8),t.movieData.list1=e.results.slice(0,4)):e.results.length>4&&e.results.length<=8?(t.movieData.list4=[],t.movieData.list3=[],t.movieData.list2=e.results.slice(4,e.results.length),t.movieData.list1=e.results.slice(0,4)):e.results.length>0&&e.results.length<=4?(t.movieData.list4=[],t.movieData.list3=[],t.movieData.list2=[],t.movieData.list1=e.results.slice(0,e.results.length)):(t.movieData.list4=[],t.movieData.list3=[],t.movieData.list2=[],t.movieData.list1=[])},setThisMovie:function(t,e){t.thisMovie=e},setDownload:function(t,e){var i=JSON.parse(JSON.stringify(t.thisMovie));t.thisMovie=Object.assign(i,e)},setPageData:function(t,e){"1"===e&&t.pageData.page>1?t.pageData.page--:"2"===e&&t.pageData.total-t.pageData.page*t.pageData.per>0&&t.pageData.page++},setKeywords:function(t,e){var i=e||"";t.keywords=i},setCommentList:function(t,e){t.commentData.list=e},setCommentPage:function(t,e){t.commentData.page=e},setCommentTotal:function(t,e){t.commentData.total=e},setCommentEnding:function(t,e){t.commentData.isEnding=e}},actions:{regist:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,i){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,yt.post(dt.userAPI,i);case 4:return o=t.sent,n("setUserInfo",Object.assign(i,o)),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,i){return t.apply(this,arguments)}}(),login:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,i){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,yt.post(dt.loginAPI,i);case 4:return o=t.sent,n("setUserInfo",o),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,i){return t.apply(this,arguments)}}(),getMovie:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var i,n,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,n=e.commit,t.prev=1,o={params:{order:"-createdAt",limit:i.pageData.page*i.pageData.per,skip:(i.pageData.page-1)*i.pageData.per,count:1,where:{title:{$regex:i.keywords,$options:"sxi"}}}},t.next=5,yt.get(dt.movieAPI,o);case 5:return a=t.sent,a&&a.results&&n("setMovieData",a),t.abrupt("return",a);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",!1);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),addMovie:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,i){var n,o,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,t.prev=1,o={download:i.download},delete i.download,t.next=6,yt.post(dt.movieAPI,i);case 6:return a=t.sent,o.movie={__type:"Pointer",className:"movie",objectId:a.objectId},t.next=10,yt.post(dt.downloadAPI,o);case 10:return s=t.sent,a&&s&&n("getMovie"),t.abrupt("return",!0);case 15:return t.prev=15,t.t0=t["catch"](1),t.abrupt("return",!1);case 18:case"end":return t.stop()}},t,this,[[1,15]])}));return function(e,i){return t.apply(this,arguments)}}(),updateMovie:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,i){var n,o,a,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,o=e.dispatch,t.prev=1,a={download:i.download},delete i.download,t.next=6,yt.put("".concat(dt.movieAPI,"/").concat(n.thisMovie.objectId),i);case 6:return s=t.sent,t.next=9,yt.put("".concat(dt.downloadAPI,"/").concat(n.thisMovie.downloadId),a);case 9:return r=t.sent,s&&r&&o("getMovie"),t.abrupt("return",!0);case 14:return t.prev=14,t.t0=t["catch"](1),t.abrupt("return",!1);case 17:case"end":return t.stop()}},t,this,[[1,14]])}));return function(e,i){return t.apply(this,arguments)}}(),getDownload:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var i,n,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,n=e.commit,t.prev=1,o={params:{where:{movie:{__type:"Pointer",className:"movie",objectId:i.thisMovie.objectId}}}},t.next=5,yt.get(dt.downloadAPI,o);case 5:return a=t.sent,a&&a.results&&a.results[0]&&n("setDownload",{download:a.results[0].download,downloadId:a.results[0].objectId}),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",!1);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),getCommon:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,i){var n,o,a,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.state,o=e.commit,t.prev=1,a={params:{where:{movie:{__type:"Pointer",className:"movie",objectId:n.thisMovie.objectId}},include:"user",order:"-createdAt",limit:n.commentData.per,skip:0,count:1}},!i||!i.pageDown){t.next=12;break}if(a.params.limit=(n.commentData.page+1)*n.commentData.per,a.params.skip=n.commentData.page*n.commentData.per,!(n.commentData.total<=a.params.skip)){t.next=9;break}return o("setCommentEnding",!0),t.abrupt("return",!0);case 9:o("setCommentPage",n.commentData.page+1),t.next=14;break;case 12:o("setCommentEnding",!1),o("setCommentPage",1);case 14:return t.next=16,yt.get(dt.commentAPI,a);case 16:return s=t.sent,o("setCommentTotal",s.count||0),r=s&&s.results||[],i&&i.pageDown?o("setCommentList",n.commentData.list.concat(r)):o("setCommentList",r),t.abrupt("return",!0);case 23:return t.prev=23,t.t0=t["catch"](1),t.abrupt("return",!1);case 26:case"end":return t.stop()}},t,this,[[1,23]])}));return function(e,i){return t.apply(this,arguments)}}(),commentMovie:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,i){var n,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,o=e.dispatch,t.prev=1,a={movie:{__type:"Pointer",className:"movie",objectId:n.thisMovie.objectId},user:{__type:"Pointer",className:"_User",objectId:n.userInfo.userid},comment:i.comment},t.next=5,yt.post(dt.commentAPI,a);case 5:return o("getCommon"),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,i){return t.apply(this,arguments)}}()}});i("ee40");n["a"].config.productionTip=!1,n["a"].prototype.$toast=x,new n["a"]({store:Mt,render:function(t){return t(mt)}}).$mount("#app")},6347:function(t,e,i){},"7c55":function(t,e,i){"use strict";var n=i("d3dd"),o=i.n(n);o.a},"7e89":function(t,e,i){"use strict";var n=i("faa5"),o=i.n(n);o.a},"8c7d":function(t,e,i){"use strict";var n=i("1d7d"),o=i.n(n);o.a},bc7c:function(t,e,i){},d3dd:function(t,e,i){},e795:function(t,e,i){},ee40:function(t,e,i){},faa5:function(t,e,i){}});
//# sourceMappingURL=app.d175a96f.js.map