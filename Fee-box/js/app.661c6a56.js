(function(t){function e(e){for(var n,s,r=e[0],c=e[1],u=e[2],p=0,m=[];p<r.length;p++)s=r[p],a[s]&&m.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Fee-box/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0442":function(t,e,i){},"1afb":function(t,e,i){},"1eb7":function(t,e,i){"use strict";var n=i("6347"),a=i.n(n);a.a},"2dbb":function(t,e,i){"use strict";var n=i("4721"),a=i.n(n);a.a},4721:function(t,e,i){},"55cf":function(t,e,i){"use strict";var n=i("1afb"),a=i.n(n);a.a},5699:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"toast"}}),i("Login",{class:{show:t.showLogin},on:{"close-login":t.closeLogin}}),i("Header",{on:{"search-opt":t.searchOpt,"clear-opt":t.clearOpt,"login-opt":t.loginOpt}}),i("Box",{attrs:{leftRight:t.leftRight,upDown:t.upDown},on:{"to-movie":t.downOpt}},[i("template",{slot:"publish"},[i("Publish",{attrs:{leftRight:t.leftRight,upDown:t.upDown},on:{back:t.backOpt}})],1),i("template",{slot:"detail"},[i("Detail",{attrs:{leftRight:t.leftRight,upDown:t.upDown}})],1)],2),i("Footer",{attrs:{leftRight:t.leftRight,upDown:t.upDown},on:{"pre-opt":t.preOpt,"next-opt":t.nextOpt,"back-opt":t.backOpt,"home-opt":t.homeOpt}})],1)},o=[],s=i("c93e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-wrapper"},[i("div",{staticClass:"form"},[t.userInfo&&t.userInfo.nickname?i("div",{staticClass:"btn btn1",on:{click:t.logoutOpt}},[t._v(t._s(t.userInfo.nickname))]):i("div",{staticClass:"btn btn1",on:{click:t.loginOpt}},[t._v("登录")]),i("div",{staticClass:"input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"input",attrs:{type:"text",placeholder:"电影名称"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t.keywords?i("span",{staticClass:"clear",attrs:{title:"清除"},on:{click:t.clearOpt}},[t._v("X")]):t._e()]),i("div",{staticClass:"btn",on:{click:t.searchOpt}},[t._v("搜索")])])])},c=[],u=(i("a481"),i("2f62")),l={name:"Header",data:function(){return{keywords:""}},computed:Object(u["d"])(["userInfo"]),methods:Object(s["a"])({},Object(u["c"])(["clearUserInfo"]),{clearOpt:function(){this.keywords="",this.$emit("clear-opt")},searchOpt:function(){this.$emit("search-opt",this.keywords.replace(/(^\s*)|(\s*$)/,""))},loginOpt:function(){this.$emit("login-opt")},logoutOpt:function(){this.clearUserInfo(),this.$toast({title:"退出登录"})}})},p=l,m=(i("5cf1"),i("2877")),v=Object(m["a"])(p,r,c,!1,null,"945c61f6",null);v.options.__file="Header.vue";var d=v.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box-wrapper",style:{transform:"rotateX("+t.upDown+"deg) rotateY("+t.leftRight+"deg)"}},[i("div",{staticClass:"box box1"},t._l(t.movieData.list1,function(e,n){return i("Movie",{key:n,attrs:{movie:e},on:{"to-movie":t.toMovie}})})),i("div",{staticClass:"box box2"},t._l(t.movieData.list2,function(e,n){return i("Movie",{key:n,attrs:{movie:e},on:{"to-movie":t.toMovie}})})),i("div",{staticClass:"box box3"},t._l(t.movieData.list3,function(e,n){return i("Movie",{key:n,attrs:{movie:e},on:{"to-movie":t.toMovie}})})),i("div",{staticClass:"box box4"},t._l(t.movieData.list4,function(e,n){return i("Movie",{key:n,attrs:{movie:e},on:{"to-movie":t.toMovie}})})),i("div",{staticClass:"box box5"},[t._t("publish")],2),i("div",{staticClass:"box box6"},[t._t("detail")],2)])},h=[],g=(i("c5f6"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movie-wrapper",attrs:{title:t.movie.title},on:{click:function(e){t.toMovie(t.movie)}}},[i("div",{staticClass:"poster",style:{backgroundImage:"url("+t.movie.poster+")"}},[i("div",{staticClass:"score"},[t._v(t._s(t.movie.score))])]),i("div",{staticClass:"title"},[t._v(t._s(t.movie.title))]),i("div",{staticClass:"time"},[t._v("更新于："+t._s(t.formatTime(t.movie.createdAt)))])])}),b=[];i("4917"),i("3b2b");function w(t){var e=document.getElementById("toast")||null;if(e&&""===e.className){var i={duration:t.duration||2e3,title:t.title||""};e.innerHTML=i.title,e.className="show",setTimeout(function(){e.className="",e.innerHTML=""},i.duration)}}function _(t,e,i){i||(i=1);var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3),document.cookie=t+"="+escape(e)+";expires="+n.toGMTString()}function D(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return document.cookie.match(e)?unescape(document.cookie.match(e)[2]):null}function k(t){var e=new Date;e.setTime(e.getTime()-1);var i=D(t);i&&(document.cookie=t+"="+i+";expires="+e.toGMTString())}function x(t,e){localStorage.setItem(t,e)}function y(t){return localStorage.getItem(t)}function C(t){var e,i,n,a,o,s,r,c,u,l,p,m,v=new Date(t),d=new Date;return e=parseInt(v.getFullYear()),i=parseInt(v.getMonth())+1,n=parseInt(v.getDate()),a=parseInt(v.getHours()),o=parseInt(v.getMinutes()),s=parseInt(v.getSeconds()),r=parseInt(d.getFullYear()),c=parseInt(d.getMonth())+1,u=parseInt(d.getDate()),l=parseInt(d.getHours()),p=parseInt(d.getMinutes()),m=parseInt(d.getSeconds()),r-e>1?r-e+"年前"+i+"月"+n+"号"+a+"点":r-e>0?"去年"+i+"月"+n+"号"+a+"点":c-i>0?"今年"+i+"月"+n+"号"+a+"点":u-n>1?u-n+"天前"+a+"点":u-n>0?"昨天"+a+"点":l-a>0?l-a+"小时前":p-o>0?p-o+"分钟前":m-s>0?m-s+"秒前":"刚刚"}var O={name:"Movie",props:{movie:{type:Object,default:function(){return{}}}},methods:{formatTime:C,toMovie:function(t){this.$emit("to-movie",t)}}},M=O,I=(i("d7da"),Object(m["a"])(M,g,b,!1,null,"22971ef4",null));I.options.__file="Movie.vue";var $=I.exports,P={name:"Box",components:{Movie:$},props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},computed:Object(u["d"])(["movieData"]),methods:Object(s["a"])({},Object(u["c"])(["setThisMovie"]),{toMovie:function(t){this.setThisMovie(t),this.$emit("to-movie")}})},j=P,R=(i("55cf"),Object(m["a"])(j,f,h,!1,null,"07c94ece",null));R.options.__file="Box.vue";var N=R.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-wrapper"},[i("div",{staticClass:"btn big",on:{click:t.preOpt}},[t._v("上一页")]),90===t.upDown?i("div",{staticClass:"btn",on:{click:function(e){t.backOpt("2")}}},[t._v("返回")]):i("div",{staticClass:"btn",on:{click:function(e){t.backOpt("1")}}},[t._v(t._s(-90===t.upDown?"返回":"发布"))]),i("div",{staticClass:"btn",on:{click:t.homeOpt}},[t._v("首页")]),i("div",{staticClass:"btn big",on:{click:t.nextOpt}},[t._v("下一页")])])},L=[],A={name:"Footer",props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},methods:{preOpt:function(){0!==this.leftRight&&this.$emit("pre-opt")},nextOpt:function(){this.$emit("next-opt")},backOpt:function(t){this.$emit("back-opt",t)},homeOpt:function(){this.$emit("home-opt")}}},E=A,S=(i("2dbb"),Object(m["a"])(E,T,L,!1,null,"1a4f8b7c",null));S.options.__file="Footer.vue";var H=S.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"publish-wrapper",style:{transform:"rotateZ("+t.leftRight+"deg)"}},[-90===t.upDown?[i("div",{staticClass:"movie-title"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.title,expression:"movie.title"}],staticClass:"title",attrs:{type:"text",placeholder:"电影名称（必填）"},domProps:{value:t.movie.title},on:{input:function(e){e.target.composing||t.$set(t.movie,"title",e.target.value)}}})]),i("div",{staticClass:"movie-info"},[i("div",{staticClass:"poster",style:{backgroundImage:"url("+t.movie.poster+")"}},[i("input",{staticClass:"poster-input",attrs:{type:"file",accept:"*.png,*.jpg,*.jpeg"},on:{change:function(e){return e.stopPropagation(),t.changePoster(e)}}}),""===t.movie.poster?i("span",{staticClass:"plus"},[t._v("+")]):t._e(),""===t.movie.poster?i("span",[t._v("添加海报")]):t._e()]),i("div",{staticClass:"info"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.director,expression:"movie.director"}],staticClass:"info-item",attrs:{type:"text",placeholder:"导演（必填）"},domProps:{value:t.movie.director},on:{input:function(e){e.target.composing||t.$set(t.movie,"director",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.actor,expression:"movie.actor"}],staticClass:"info-item",attrs:{type:"text",placeholder:"主演（必填）"},domProps:{value:t.movie.actor},on:{input:function(e){e.target.composing||t.$set(t.movie,"actor",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.type,expression:"movie.type"}],staticClass:"info-item",attrs:{type:"text",placeholder:"类型（必填）"},domProps:{value:t.movie.type},on:{input:function(e){e.target.composing||t.$set(t.movie,"type",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.country,expression:"movie.country"}],staticClass:"info-item",attrs:{type:"text",placeholder:"制片国家/地区（必填）"},domProps:{value:t.movie.country},on:{input:function(e){e.target.composing||t.$set(t.movie,"country",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.duration,expression:"movie.duration"}],staticClass:"info-item",attrs:{type:"text",placeholder:"片长（必填）"},domProps:{value:t.movie.duration},on:{input:function(e){e.target.composing||t.$set(t.movie,"duration",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.showtime,expression:"movie.showtime"}],staticClass:"info-item",attrs:{type:"text",placeholder:"上映日期（必填）"},domProps:{value:t.movie.showtime},on:{input:function(e){e.target.composing||t.$set(t.movie,"showtime",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.movie.score,expression:"movie.score"}],staticClass:"info-item",attrs:{type:"text",placeholder:"评分（必填）"},domProps:{value:t.movie.score},on:{input:function(e){e.target.composing||t.$set(t.movie,"score",e.target.value)}}})])]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.movie.desc,expression:"movie.desc"}],staticClass:"movie-desc",attrs:{cols:"30",rows:"4",placeholder:"简介（必填）"},domProps:{value:t.movie.desc},on:{input:function(e){e.target.composing||t.$set(t.movie,"desc",e.target.value)}}}),t._l(t.movie.download,function(e,n){return i("div",{key:n,staticClass:"movie-link"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"name",attrs:{type:"text",placeholder:"资源描述（选填）"},domProps:{value:e.name},on:{input:function(i){i.target.composing||t.$set(e,"name",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"item.link"}],staticClass:"link",attrs:{type:"text",placeholder:"资源网站或链接（必填）"},domProps:{value:e.link},on:{input:function(i){i.target.composing||t.$set(e,"link",i.target.value)}}}),n>0?i("div",{staticClass:"btn",on:{click:function(e){t.delOpt(n)}}},[t._v("删除")]):t._e(),i("div",{staticClass:"btn",on:{click:t.addOpt}},[t._v("新添")])])}),i("div",{staticClass:"save-btn",on:{click:t.saveOpt}},[t._v("保存")])]:t._e()],2)},U=[],X=(i("b54a"),i("96cf"),i("3040")),F=i("6ca8"),K=i.n(F),z={name:"Publish",props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},data:function(){return{movie:{title:"",poster:"",director:"",actor:"",type:"",country:"",duration:"",showtime:"",score:"",desc:"",download:[{name:"",link:""}]}}},methods:Object(s["a"])({},Object(u["b"])(["addMovie"]),{initData:function(){this.movie={title:"",poster:"",director:"",actor:"",type:"",country:"",duration:"",showtime:"",score:"",desc:"",download:[{name:"",link:""}]}},changePoster:function(){var t=this;K()(event.currentTarget.files[0]).then(function(e){t.movie.poster=e.base64}).catch(function(){t.$toast("图片上传失败")})},delOpt:function(t){this.movie.download.splice(t,1)},addOpt:function(){this.movie.download.push({name:"",link:""})},saveOpt:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(){var e,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(""!==this.movie.title.replace(/\s/gi,"")){t.next=3;break}return this.$toast({title:"请填写电影名称"}),t.abrupt("return");case 3:if(""!==this.movie.poster){t.next=6;break}return this.$toast({title:"请添加海报"}),t.abrupt("return");case 6:if(""!==this.movie.director.replace(/\s/gi,"")){t.next=9;break}return this.$toast({title:"请填写电影导演"}),t.abrupt("return");case 9:if(""!==this.movie.actor.replace(/\s/gi,"")){t.next=12;break}return this.$toast({title:"请填写电影主演"}),t.abrupt("return");case 12:if(""!==this.movie.type.replace(/\s/gi,"")){t.next=15;break}return this.$toast({title:"请填写电影类型"}),t.abrupt("return");case 15:if(""!==this.movie.country.replace(/\s/gi,"")){t.next=18;break}return this.$toast({title:"请填写电影制片国家/地区"}),t.abrupt("return");case 18:if(""!==this.movie.duration.replace(/\s/gi,"")){t.next=21;break}return this.$toast({title:"请填写电影片长"}),t.abrupt("return");case 21:if(""!==this.movie.showtime.replace(/\s/gi,"")){t.next=24;break}return this.$toast({title:"请填写电影上映时间"}),t.abrupt("return");case 24:if(""!==this.movie.score.replace(/\s/gi,"")){t.next=27;break}return this.$toast({title:"请填写电影评分"}),t.abrupt("return");case 27:if(""!==this.movie.desc.replace(/\s/gi,"")){t.next=30;break}return this.$toast({title:"请填写电影简介"}),t.abrupt("return");case 30:e=0;case 31:if(!(e<this.movie.download.length)){t.next=39;break}if(i=this.movie.download[e],""!==i.link.replace(/\s/gi,"")){t.next=36;break}return this.$toast({title:"请填写完整的资源网站或链接"}),t.abrupt("return");case 36:e++,t.next=31;break;case 39:return t.next=41,this.addMovie(this.movie);case 41:n=t.sent,n&&(this.$toast({title:"发布成功"}),this.initData(),this.$emit("back","1"));case 43:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})},J=z,q=(i("1eb7"),Object(m["a"])(J,B,U,!1,null,null,null));q.options.__file="Publish.vue";var G=q.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"publish-wrapper detail-wrapper",style:{transform:"rotateZ("+-t.leftRight+"deg)"}},[90===t.upDown?[i("div",{staticClass:"movie-title"},[i("div",{staticClass:"title"},[t._v(t._s(t.thisMovie.title))])]),i("div",{staticClass:"movie-info"},[i("div",{staticClass:"poster",style:{backgroundImage:"url("+t.thisMovie.poster+")"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"info-item",attrs:{title:"导演："+t.thisMovie.director}},[i("span",[t._v("导演：")]),t._v(t._s(t.thisMovie.director))]),i("div",{staticClass:"info-item",attrs:{title:"主演："+t.thisMovie.actor}},[i("span",[t._v("主演：")]),t._v(t._s(t.thisMovie.actor))]),i("div",{staticClass:"info-item",attrs:{title:"类型："+t.thisMovie.type}},[i("span",[t._v("类型：")]),t._v(t._s(t.thisMovie.type))]),i("div",{staticClass:"info-item",attrs:{title:"制片国家/地区："+t.thisMovie.country}},[i("span",[t._v("制片国家/地区：")]),t._v(t._s(t.thisMovie.country))]),i("div",{staticClass:"info-item",attrs:{title:"片长："+t.thisMovie.duration}},[i("span",[t._v("片长：")]),t._v(t._s(t.thisMovie.duration))]),i("div",{staticClass:"info-item",attrs:{title:"上映日期："+t.thisMovie.showtime}},[i("span",[t._v("上映日期：")]),t._v(t._s(t.thisMovie.showtime))]),i("div",{staticClass:"info-item",attrs:{title:"评分："+t.thisMovie.score}},[i("span",[t._v("评分：")]),t._v(t._s(t.thisMovie.score))])])]),i("div",{staticClass:"movie-desc"},[i("span",[t._v("简介：")]),t._v(t._s(t.thisMovie.desc))]),t.userInfo?i("div",{staticClass:"link-btn"},[i("span",[t._v("资源链接：")]),t._l(t.thisMovie.download,function(e,n){return i("a",{key:n,staticClass:"btn",attrs:{href:e.link,target:"_blank"}},[i("div",[t._v(t._s(e.name?e.name:"资源链接"+(n+1)))])])})],2):t._e(),i("div",{staticClass:"comment-form"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"input",attrs:{cols:"30",rows:"4",placeholder:"不超过100字"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}}),i("div",{staticClass:"btn",on:{click:t.commentOpt}},[t._v("留言")])]),t._l(t.commentData.list,function(e,n){return i("div",{key:n,staticClass:"comment-list"},[i("div",{staticClass:"list"},[i("span",[t._v(t._s(e.user.nickname)+"：")]),t._v(t._s(e.comment))]),i("div",{staticClass:"time-wrapper"},[i("div",{staticClass:"time"},[t._v("—— "+t._s(t.formatTime(e.createdAt)))])])])}),t.commentData.total<=0?i("div",{staticClass:"tip"},[t._v("一起来吐槽 ~")]):t.commentData.total>0&&t.commentData.isEnding?i("div",{staticClass:"tip"},[t._v("到底啦 ~")]):t._e()]:t._e()],2)},Z=[],Q={name:"Detail",props:{leftRight:{type:Number,default:0},upDown:{type:Number,default:0}},data:function(){return{comment:""}},computed:Object(u["d"])(["userInfo","thisMovie","commentData"]),watch:{upDown:function(t){90===t&&this.getCommon()}},mounted:function(){var t=this;this.$nextTick(function(){document.querySelector(".detail-wrapper").addEventListener("scroll",function(){var e=Object(X["a"])(regeneratorRuntime.mark(function e(i){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:i.target.offsetHeight+i.target.scrollTop+100>=i.target.scrollHeight&&!t.commentData.isEnding&&t.getCommon({pageDown:!0});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())})},methods:Object(s["a"])({},Object(u["b"])(["getCommon","commentBlog"]),{formatTime:C,commentOpt:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.userInfo){t.next=3;break}return this.$toast({title:"请先登录"}),t.abrupt("return");case 3:if(e=this.comment.replace(/(^\s*)|(\s*$)/,""),""!==e){t.next=6;break}return t.abrupt("return");case 6:if(!(e.length>100)){t.next=9;break}return this.$toast({title:"留言不超过100字"}),t.abrupt("return");case 9:return t.next=11,this.commentBlog({comment:e});case 11:i=t.sent,i&&(this.comment="");case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()})},V=Q,W=(i("72e1"),Object(m["a"])(V,Y,Z,!1,null,"3f73215f",null));W.options.__file="Detail.vue";var tt=W.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-wrapper",on:{click:t.closeLogin}},[i("div",{staticClass:"login-form",on:{click:t.stopPro}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"input",attrs:{type:"text",placeholder:"账号"},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"input",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.loginOpt("1")},input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),i("div",{staticClass:"btn",on:{click:function(e){e.stopPropagation(),t.loginOpt("1")}}},[t._v("登录")])])])},it=[],nt=i("6821"),at=i.n(nt),ot=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/,st=/^[a-z0-9]{6,11}$/,rt={name:"Login",data:function(){return{formData:{phone:y("Movie_phone")||"",password:""}}},methods:Object(s["a"])({},Object(u["b"])(["login","regist"]),{stopPro:function(t){t.stopPropagation()},closeLogin:function(){this.formData.password="",this.$emit("close-login")},loginOpt:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(e){var i,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(ot.test(this.formData.phone)){t.next=3;break}return this.$toast({title:"请填写正确的手机号"}),t.abrupt("return");case 3:if(st.test(this.formData.password)){t.next=6;break}return this.$toast({title:"请填写正确的密码"}),t.abrupt("return");case 6:if(i={username:this.formData.phone,password:at()(this.formData.password),nickname:"游客"+at()(this.formData.phone).substr(0,6)},n=null,a="1"===e?"登录":"注册","1"!==e){t.next=15;break}return t.next=12,this.login(i);case 12:n=t.sent,t.next=18;break;case 15:return t.next=17,this.regist(i);case 17:n=t.sent;case 18:n&&(this.$toast({title:"".concat(a,"成功")}),this.closeLogin(),x("Movie_phone",this.formData.phone));case 19:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()})},ct=rt,ut=(i("ba10"),Object(m["a"])(ct,et,it,!1,null,"cb36f6d0",null));ut.options.__file="Login.vue";var lt=ut.exports,pt={name:"app",components:{Header:d,Box:N,Footer:H,Publish:G,Detail:tt,Login:lt},data:function(){return{leftRight:0,upDown:0,showLogin:!1}},computed:Object(u["d"])(["userInfo"]),created:function(){this.getMovie()},methods:Object(s["a"])({},Object(u["b"])(["getMovie"]),Object(u["c"])(["setPageData","setKeywords"]),{preOpt:function(){this.upDown=0,this.leftRight+=90,this.leftRight%360===0&&(this.setPageData("1"),this.getMovie())},nextOpt:function(){this.upDown=0,this.leftRight-=90,this.leftRight%360===0&&(this.setPageData("2"),this.getMovie())},backOpt:function(t){if("1"===t){if(0===this.upDown&&!this.userInfo)return void this.$toast({title:"请先登录"});if(0===this.upDown&&this.userInfo&&"1"!==this.userInfo.type)return void this.$toast({title:"权限不足"});this.upDown=-90-this.upDown}else"2"===t&&(this.upDown=0)},downOpt:function(){this.upDown=90-this.upDown},homeOpt:function(){this.leftRight=0,this.upDown=0},searchOpt:function(t){this.setKeywords(t),this.homeOpt(),this.getMovie()},clearOpt:function(){this.setKeywords(),this.getMovie()},loginOpt:function(){this.showLogin=!0},closeLogin:function(){this.showLogin=!1}})},mt=pt,vt=(i("7c55"),Object(m["a"])(mt,a,o,!1,null,null,null));vt.options.__file="App.vue";var dt=vt.exports,ft=(i("f751"),"https://api.leancloud.cn"),ht={baseAPI:ft,loginAPI:"".concat(ft,"/1.1/login"),userAPI:"".concat(ft,"/1.1/users"),movieAPI:"".concat(ft,"/1.1/classes/movie"),commentAPI:"".concat(ft,"/1.1/classes/comment")},gt={appId:"QklUiCErP7xfkBMUV2ecI5Df-gzGzoHsz",appKey:"XXnTn83FoCjXAeIPKH1BPcTJ",masterKey:"zUl4I0O9bB8vuvu89c4TdaXl"},bt=(i("6b54"),i("bc3a")),wt=i.n(bt),_t=(new Date).getTime(),Dt=wt.a.create({baseURL:ht.baseAPI,headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json","X-LC-Id":gt.appId,"X-LC-Sign":"".concat(at()(_t.toString()+gt.appKey),",").concat(_t)},timeout:5e3}),kt={},xt=["get","post","put","delete"];xt.forEach(function(t){kt[t]=function(e,i,n){return new Promise(function(a,o){Dt[t](e,i,n).then(function(t){t.status>=200&&t.status<300?a(t.data):(w({title:"请求错误"}),o(t))}).catch(function(t){w({title:t.response.data&&t.response.data.error||"请求错误"}),o(t)})})}});var yt=kt;n["a"].use(u["a"]);var Ct=new u["a"].Store({state:{userInfo:D("Movie_userInfo")&&JSON.parse(D("Movie_userInfo"))||null,keywords:"",movieData:{list1:[],list2:[],list3:[],list4:[]},pageData:{per:16,page:1,total:0},thisMovie:{},commentData:{page:1,per:15,total:0,isEnding:!1,list:[]}},mutations:{setUserInfo:function(t,e){t.userInfo={nickname:e.nickname||"",userid:e.objectId||"",sessionToken:e.sessionToken||"",createdAt:e.createdAt||"",updatedAt:e.updatedAt||"",type:e.type||""},_("Movie_userInfo",JSON.stringify(t.userInfo))},clearUserInfo:function(t){t.userInfo=null,k("Movie_userInfo")},setMovieData:function(t,e){t.pageData.total=e.count,e.results.length>12?(t.movieData.list4=e.results.slice(12,e.results.length),t.movieData.list3=e.results.slice(8,12),t.movieData.list2=e.results.slice(4,8),t.movieData.list1=e.results.slice(0,4)):e.results.length>8&&e.results.length<=12?(t.movieData.list4=[],t.movieData.list3=e.results.slice(8,e.results.length),t.movieData.list2=e.results.slice(4,8),t.movieData.list1=e.results.slice(0,4)):e.results.length>4&&e.results.length<=8?(t.movieData.list4=[],t.movieData.list3=[],t.movieData.list2=e.results.slice(4,e.results.length),t.movieData.list1=e.results.slice(0,4)):e.results.length>0&&e.results.length<=4?(t.movieData.list4=[],t.movieData.list3=[],t.movieData.list2=[],t.movieData.list1=e.results.slice(0,e.results.length)):(t.movieData.list4=[],t.movieData.list3=[],t.movieData.list2=[],t.movieData.list1=[])},setThisMovie:function(t,e){t.thisMovie=e},setPageData:function(t,e){"1"===e&&t.pageData.page>1?t.pageData.page--:"2"===e&&t.pageData.total-t.pageData.page*t.pageData.per>0&&t.pageData.page++},setKeywords:function(t,e){var i=e||"";t.keywords=i},setCommentList:function(t,e){t.commentData.list=e},setCommentPage:function(t,e){t.commentData.page=e},setCommentTotal:function(t,e){t.commentData.total=e},setCommentEnding:function(t,e){t.commentData.isEnding=e}},actions:{regist:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(e,i){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,yt.post(ht.userAPI,i);case 4:return a=t.sent,n("setUserInfo",Object.assign(i,a)),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,i){return t.apply(this,arguments)}}(),login:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(e,i){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,yt.post(ht.loginAPI,i);case 4:return a=t.sent,n("setUserInfo",a),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,i){return t.apply(this,arguments)}}(),getMovie:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(e){var i,n,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.state,n=e.commit,t.prev=1,a={params:{order:"-createdAt",limit:i.pageData.page*i.pageData.per,skip:(i.pageData.page-1)*i.pageData.per,count:1,where:{title:{$regex:i.keywords,$options:"sxi"}}}},t.next=5,yt.get(ht.movieAPI,a);case 5:return o=t.sent,o&&o.results&&n("setMovieData",o),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t["catch"](1),t.abrupt("return",!1);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));return function(e){return t.apply(this,arguments)}}(),addMovie:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(e,i){var n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,t.prev=1,t.next=4,yt.post(ht.movieAPI,i);case 4:return a=t.sent,a&&n("getMovie"),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,i){return t.apply(this,arguments)}}(),getCommon:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(e,i){var n,a,o,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.state,a=e.commit,t.prev=1,o={params:{where:{blog:{__type:"Pointer",className:"movie",objectId:n.thisMovie.objectId}},include:"user",order:"-createdAt",limit:n.commentData.per,skip:0,count:1}},!i||!i.pageDown){t.next=12;break}if(o.params.limit=(n.commentData.page+1)*n.commentData.per,o.params.skip=n.commentData.page*n.commentData.per,!(n.commentData.total<=o.params.skip)){t.next=9;break}return a("setCommentEnding",!0),t.abrupt("return",!0);case 9:a("setCommentPage",n.commentData.page+1),t.next=14;break;case 12:a("setCommentEnding",!1),a("setCommentPage",1);case 14:return t.next=16,yt.get(ht.commentAPI,o);case 16:return s=t.sent,a("setCommentTotal",s.count||0),r=s&&s.results||[],i&&i.pageDown?a("setCommentList",n.commentData.list.concat(r)):a("setCommentList",r),t.abrupt("return",!0);case 23:return t.prev=23,t.t0=t["catch"](1),t.abrupt("return",!1);case 26:case"end":return t.stop()}},t,this,[[1,23]])}));return function(e,i){return t.apply(this,arguments)}}(),commentBlog:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(e,i){var n,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,a=e.dispatch,t.prev=1,o={blog:{__type:"Pointer",className:"movie",objectId:n.thisMovie.objectId},user:{__type:"Pointer",className:"_User",objectId:n.userInfo.userid},comment:i.comment},t.next=5,yt.post(ht.commentAPI,o);case 5:return a("getCommon"),t.abrupt("return",!0);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",!1);case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,i){return t.apply(this,arguments)}}()}});n["a"].config.productionTip=!1,n["a"].prototype.$toast=w,new n["a"]({store:Ct,render:function(t){return t(dt)}}).$mount("#app")},"5cf1":function(t,e,i){"use strict";var n=i("e2fa"),a=i.n(n);a.a},6347:function(t,e,i){},"72e1":function(t,e,i){"use strict";var n=i("5699"),a=i.n(n);a.a},"7c55":function(t,e,i){"use strict";var n=i("d3dd"),a=i.n(n);a.a},ba10:function(t,e,i){"use strict";var n=i("0442"),a=i.n(n);a.a},c54a:function(t,e,i){},d3dd:function(t,e,i){},d7da:function(t,e,i){"use strict";var n=i("c54a"),a=i.n(n);a.a},e2fa:function(t,e,i){}});
//# sourceMappingURL=app.661c6a56.js.map