(function(t){function s(s){for(var e,o,c=s[0],r=s[1],l=s[2],d=0,v=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(s);while(v.length)v.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,s=0;s<a.length;s++){for(var i=a[s],e=!0,c=1;c<i.length;c++){var r=i[c];0!==n[r]&&(e=!1)}e&&(a.splice(s--,1),t=o(o.s=i[0]))}return t}var e={},n={app:0},a=[];function o(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,s,i){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)o.d(i,e,function(s){return t[s]}.bind(null,e));return i},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=r;a.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"034f":function(t,s,i){"use strict";var e=i("85ec"),n=i.n(e);n.a},"04bb":function(t,s,i){},"0a99":function(t,s,i){},"1caa":function(t,s,i){"use strict";var e=i("4147"),n=i.n(e);n.a},2680:function(t,s,i){"use strict";var e=i("da67"),n=i.n(e);n.a},"2ebd":function(t,s,i){"use strict";var e=i("7e06"),n=i.n(e);n.a},3430:function(t,s,i){},"3aa4":function(t,s,i){"use strict";var e=i("872b"),n=i.n(e);n.a},4147:function(t,s,i){},4549:function(t,s,i){"use strict";var e=i("0a99"),n=i.n(e);n.a},"539d":function(t,s,i){"use strict";var e=i("04bb"),n=i.n(e);n.a},"54e3":function(t,s,i){"use strict";var e=i("f6a6"),n=i.n(e);n.a},"56d7":function(t,s,i){"use strict";i.r(s);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],o=(i("034f"),i("2877")),c={},r=Object(o["a"])(c,n,a,!1,null,null,null),l=r.exports,u=i("8c4f"),d=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"home"},[t._m(0),i("div",{class:1==t.qrcode?"yes":"no",staticStyle:{position:"fixed",left:"0px",bottom:"40px"},on:{click:function(s){return t.setqrcode()}}},[i("img",{staticStyle:{width:"37px",height:"40px"},attrs:{src:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/001.png"}})]),t._m(1),i("div",{class:0==t.qrcode?"yes":"no",staticStyle:{position:"fixed",left:"0px",bottom:"36px",transition:"display 2s"},attrs:{id:"qrcode"}},[i("div",{staticStyle:{display:"flex"},attrs:{id:"qrcodediv"}},[i("div",{staticStyle:{"padding-top":"119px","z-index":"10"},on:{click:function(s){return t.setqrcode()}}},[i("img",{staticStyle:{width:"20px"},attrs:{src:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/006.png"}})]),t._m(2)])])])},v=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("img",{staticStyle:{width:"100%"},attrs:{src:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/004.jpg"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticStyle:{position:"fixed",right:"0px",bottom:"40px"}},[i("a",{attrs:{href:"http://m.study.163.com/provider/480000002169546/index.htm?share=2&shareId=480000002169546"}},[i("img",{staticStyle:{width:"48px",height:"40px"},attrs:{src:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/003.png"}})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticStyle:{"margin-left":"-7px","z-index":"9"}},[i("img",{staticStyle:{width:"130px"},attrs:{src:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/h5/005.png"}})])}],p={data:function(){return{qrcode:!0}},methods:{setqrcode:function(){1==this.qrcode?this.qrcode=!1:this.qrcode=!0}}},h=p,f=(i("cccb"),Object(o["a"])(h,d,v,!1,null,null,null)),_=f.exports,m=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._v(" 福克斯大家 "),i("ej-question")],1)},g=[],x=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",[t._v(" "+t._s(t.subjet[0].title)+" ")]),i("div",[i("ul",t._l(t.subjet[0].option,(function(s,e){return i("li",{key:e},[i("van-row",[i("van-col",{attrs:{span:"3"}},[i("i",{class:s.bainclass},[t._v("")])]),i("van-col",{attrs:{span:"21"}},[i("div",{on:{click:function(s){return t.slelect(e)}}},[t._v(" "+t._s(s.sorts)+t._s(s.title)+" ")])])],1)],1)})),0)])])},b=[],k={props:["subjet"],watch:{subjet:function(t){window.console.log(t);for(var s=0;s<t[0].option.length;s++)t[0].option[s].bainclass="icon-xxx iconfont lefts";return t}},methods:{slelect:function(t){if(window.console.log(this.subjet[0].right_key),window.console.log(this.subjet[0].option[t].sorts),this.subjet[0].right_key==this.subjet[0].option[t].sorts)this.subjet[0].option[t].bainclass="icon-xxx iconfont yes";else{this.subjet[0].option[t].bainclass="icon-xxx iconfont error";for(var s=0;s<this.subjet[0].option.length;s++)this.subjet[0].option[s].sorts==this.subjet[0].right_key&&(this.subjet[0].option[s].bainclass="icon-xxx iconfont yes")}window.console.log(this.subjet),this.$forceUpdate()}}},y=k,w=(i("ef6a"),Object(o["a"])(y,x,b,!1,null,"ab788962",null)),j=w.exports,C=(i("d3b7"),i("bc3a")),S=i.n(C),F=i("4328"),q=i.n(F);function $(t,s){return new Promise((function(i,e){S.a.get(t,{params:s}).then((function(t){i(t.data)})).catch((function(t){e(t.data)}))}))}function O(t,s){return S.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8",new Promise((function(i,e){S.a.post(t,q.a.stringify(s)).then((function(t){i(t.data)})).catch((function(t){e(t.data)}))}))}S.a.defaults.timeout=1e5,S.a.defaults.headers.post["Content-Type"]="application/json; charset=UTF-8";var B=function(t){return O("/api/register",t)},E=function(t){return O("/api/login",t)},N=function(t){return $("/api/oneday",t)},T=function(t){return $("/api/addcollection",t)},I=function(t){return $("/api/deletcollection",t)},P=function(t){return $("/api/queryrecord",t)},L=function(t){return $("/api/getquestion",t)},R={created:function(){var t=this;N().then((function(s){window.console.log(s),t.list=s.data}))},components:{EjQuestion:j},data:function(){return{list:""}}},z=R,U=Object(o["a"])(z,m,g,!1,null,"c3a73a7e",null),J=U.exports,D=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("Bg1",[i("div",{staticClass:"title"},[i("h3",[t._v("书鱼题库")]),i("van-row",{attrs:{type:"flex",justify:"center"}},[i("van-col",{staticStyle:{margin:"12px 0"},attrs:{span:"1"}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#FFFFFF"}},[t._v("")])]),i("van-col",{attrs:{span:"19"}},[i("marquee",[i("p",{staticStyle:{"font-size":"12px",color:"#FFFFFF"}},[t._v("书鱼课堂最新计算机二级Web课程已上线，详情关注...")])])],1)],1)],1),i("div",{staticClass:"empty_blank",staticStyle:{"margin-top":"-10px"}},[i("van-row",{staticStyle:{"line-height":"3"},attrs:{type:"flex",justify:"center"}},[i("van-col",{attrs:{span:"4"}},[i("img",{staticStyle:{width:"80%",margin:"20px 0"},attrs:{src:t.clock}})]),i("van-col",{staticStyle:{margin:"2px 0"},attrs:{span:"13"}},[i("p",{staticStyle:{"font-size":"16px","font-weight":"500",color:"rgba(51,51,51,1)","font-family":"PingFang SC"}},[t._v("Python二级真题模拟(一)")])]),i("van-col",{staticStyle:{margin:"7px 0"},attrs:{span:"6"}},[i("p",{staticStyle:{"font-size":"14px","font-family":"PingFang SC",color:"rgba(51,51,51,1)"}},[t._v("已答22题 "),i("van-icon",{staticStyle:{bottom:"-2px","font-size":"16px"},attrs:{name:"arrow"}})],1)])],1)],1),i("div",[i("div",{staticClass:"daily_test"},[i("router-link",{attrs:{to:"/dailytest"}},[i("img",{attrs:{src:t.daily,width:"93.75%"}})])],1),i("van-row",{staticStyle:{"margin-top":"-10px"},attrs:{type:"flex",justify:"center"}},[i("van-col",{staticStyle:{"margin-left":"3px"},attrs:{span:"11"}},[i("router-link",{attrs:{to:"/lists"}},[i("img",{attrs:{src:t.real,width:"100%"}})])],1),i("van-col",{staticStyle:{"margin-left":"5px"},attrs:{span:"11"}},[i("van-row",[i("van-col",{attrs:{span:"24"}},[i("router-link",{attrs:{to:"/test"}},[i("img",{attrs:{src:t.my,width:"100%"}})])],1),i("van-col",{staticStyle:{"margin-top":"-7px"},attrs:{span:"24"}},[i("router-link",{attrs:{to:"/test"}},[i("img",{attrs:{src:t.errow,width:"100%"}})])],1)],1)],1)],1)],1)])],1)},M=[],A=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"gray_background"},[i("div",{staticClass:"blue_title"},[t._t("default")],2)])])},G=[],H={data:function(){return{}}},Q=H,W=(i("8ffa"),Object(o["a"])(Q,A,G,!1,null,"a26e8bda",null)),K=W.exports,V={data:function(){return{clock:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/Clock.png",daily:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/DailyTest.png",real:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/RealTest.png",my:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/MyFavorite.png",errow:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/ErrowBook.png"}},components:{Bg1:K}},X=V,Y=(i("5d34"),Object(o["a"])(X,D,M,!1,null,"159b0c11",null)),Z=Y.exports,tt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("LGbg",[i("div",{staticClass:"input_list"},[i("div",{staticClass:"border"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input_txt",attrs:{placeholder:"请填写手机号",type:"tel"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),i("div",{staticClass:"border"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input_txt",attrs:{placeholder:"请填写密码",type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),i("button",{staticClass:"commit_btn",on:{click:t.login}},[t._v("登录")]),i("div",{staticClass:"go_register",on:{click:t.go_register}},[i("p",[t._v("立即注册")])])])])],1)},st=[],it=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"blue_bg"},[i("div",{staticClass:"input_box_bg"},[i("div",{staticClass:"input_bg"},[t._t("default")],2)])])])},et=[],nt={},at=nt,ot=(i("54e3"),Object(o["a"])(at,it,et,!1,null,"4026a655",null)),ct=ot.exports,rt={data:function(){return{username:"",password:""}},components:{LGbg:ct},methods:{login:function(){var t=this;if(""!=this.username){var s=/^1[3|4|5|7|8][0-9]{9}$/;if(0!=s.test(this.username))if(""!=this.password){this.$toast.loading({message:"登录中。。。",forbidClick:!0,loadingType:"spinner"});var i={username:this.username,password:this.password};E(i).then((function(s){"201"==s.code?t.$toast(s.msg):"200"==s.code&&(t.$toast.clear(),t.$toast(s.msg),localStorage.setItem("userid",s.userid),t.$router.push({path:"/index"}))}))}else this.$toast("请输入密码");else this.$toast("请输入正确的手机号")}else this.$toast("请输入手机号")},go_register:function(){this.$router.push({path:"/register"})}}},lt=rt,ut=(i("ff41"),Object(o["a"])(lt,tt,st,!1,null,"41b788a6",null)),dt=ut.exports,vt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("LGbg",[i("div",{staticClass:"input_list"},[i("div",{staticClass:"border"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input_txt",attrs:{placeholder:"请填写手机号",type:"tel"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}})]),i("div",{staticClass:"border"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input_txt",attrs:{placeholder:"请填写密码",type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),i("div",{staticClass:"border"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.invitation_code,expression:"invitation_code"}],staticClass:"input_txt",attrs:{placeholder:"请填写邀请码"},domProps:{value:t.invitation_code},on:{input:function(s){s.target.composing||(t.invitation_code=s.target.value)}}})]),i("button",{staticClass:"commit_btn",on:{click:t.regist}},[t._v("立即注册")]),i("div",{staticClass:"go_login",on:{click:t.go_login}},[i("p",[t._v("已有账号？登陆")])])])])],1)},pt=[],ht={data:function(){return{username:"",password:"",invitation_code:"",totalTime:3}},components:{LGbg:ct},methods:{regist:function(){var t=this;if(""!=this.username){var s=/^1[3|4|5|7|8][0-9]{9}$/;if(0!=s.test(this.username))if(""!=this.password)if(this.password.length<6)this.$toast("密码至少6位数");else if(this.password.length>13)this.$toast("密码最多13位数");else if(""!=this.invitation_code){this.$toast.loading({message:"注册中。。。",forbidClick:!0,loadingType:"spinner"});var i={username:this.username,password:this.password,invitation_code:this.invitation_code};B(i).then((function(s){if("201"==s.code)t.$toast(s.msg);else if("200"==s.code){t.$toast.clear(),t.$toast(s.msg+"3秒后自动返回登录页");var i=window.setInterval((function(){t.totalTime--,0==t.totalTime&&(window.clearInterval(i),t.$router.push({path:"/login"}))}),1e3)}}))}else this.$toast("请输入注册码");else this.$toast("请输入密码");else this.$toast("请输入正确的手机号")}else this.$toast("请输入手机号")},go_login:function(){this.$router.push({path:"/login"})}}},ft=ht,_t=(i("c365"),Object(o["a"])(ft,vt,pt,!1,null,"9deb0b0e",null)),mt=_t.exports,gt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticStyle:{"overflow-y":"scroll"}},[i("Bg2",[i("div",[i("van-row",[i("van-col",{attrs:{span:"4"}},[i("div",{staticClass:"back_icon",on:{click:t.go_back}},[i("van-icon",{attrs:{name:"arrow-left",color:"#ffffff",size:"0.6rem"}})],1)]),i("van-col",{staticClass:"title",attrs:{span:"16"}},[i("p",[t._v("每日一练")])])],1),i("Head")],1)])],1)},xt=[],bt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"gray_background"},[i("div",{staticClass:"blue_title"},[t._t("default")],2)])])},kt=[],yt={data:function(){return{}}},wt=yt,jt=(i("2680"),Object(o["a"])(wt,bt,kt,!1,null,"1b404d4d",null)),Ct=jt.exports,St=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"head_bg"},[i("van-row",[i("van-col",{attrs:{span:"11"}},[i("van-row",[i("van-col",{attrs:{offset:"4",span:"6"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.unlike,expression:"unlike"}],staticClass:"like_icon",on:{click:t.changeLike}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#83B6FF"}},[t._v("")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.liked,expression:"liked"}],staticClass:"like_icon",on:{click:t.changeUnlike}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#66A1F2"}},[t._v("")])])]),i("van-col",{attrs:{span:"12"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.unlike,expression:"unlike"}],staticClass:"add_like",on:{click:t.changeLike}},[i("p",[t._v("收藏此题")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.liked,expression:"liked"}],staticClass:"add_like",on:{click:t.changeUnlike}},[i("p",[t._v("取消收藏")])])])],1)],1),i("van-col",{attrs:{span:"2"}},[i("div",{staticClass:"blue_down_line"})]),i("van-col",{attrs:{span:"11"}},[i("van-row",[i("van-col",{attrs:{offset:"2",span:"6"}},[i("div",{staticClass:"like_icon",on:{click:function(s){t.show=!0}}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#83B6FF"}},[t._v("")])])]),i("van-col",{attrs:{span:"12"}},[i("div",{staticClass:"add_like",on:{click:function(s){t.show=!0}}},[i("p",[t._v("跳转试题")])])])],1)],1)],1),i("van-overlay",{attrs:{show:t.show}},[i("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"block"},[t._l(t.lists,(function(s,e){return i("div",{key:e,staticClass:"num_list"},[i("span",{staticClass:"num",class:t.active==e+1?"blueNum":"num",on:{click:function(s){return t.selected(e)}}},[t._v(t._s(e+1))])])})),i("div",{staticStyle:{clear:"both"}})],2),i("div",{staticStyle:{"margin-top":"20px"},on:{click:function(s){t.show=!1}}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#FFFFFF","font-size":"40px"}},[t._v("")])])])])],1),t.question?i("div",{staticClass:"question_body"},[i("div",{staticClass:"question_text"},[i("p",[t._m(0),t._v(t._s(t.active+"、"+t.question[0].title))])]),i("div",{staticClass:"question_text",staticStyle:{"margin-top":"20px"}},t._l(t.question[0].option,(function(s,e){return i("van-row",{key:e,staticStyle:{padding:"5px 20px 5px 20px"},on:{click:function(s){return t.selectItem(e)}}},[i("van-col",{attrs:{span:"1"}},[i("div",{staticStyle:{"margin-top":"18px"}},[i("i",{class:s.bindclass},[t._v("")])])]),i("van-col",{attrs:{span:"22"}},[i("div",[i("p",[t._v(t._s(s.sorts+"."+s.title))])])])],1)})),1),i("div",{staticClass:"test_num"},[i("p",[t._v(t._s("第"+t.active+"题/共"+t.limit+"题"))])]),""!=t.checked?i("div",{staticClass:"test_desc question_text",staticStyle:{"margin-bottom":"100px"}},[i("p",[t._v("试题解析")]),i("p",[t._v("【答案】"+t._s(t.question[0].right_key))]),i("p",[t._v(t._s(t.question[0].analysis))])]):t._e()]):t._e(),i("div",{staticClass:"prve_next"},[i("van-row",[i("van-col",{attrs:{span:"11"}},[i("van-row",[i("van-col",{attrs:{offset:"6",span:"6"}},[i("div",{staticClass:"like_icon",on:{click:t.go_prve}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#C1C1C1"}},[t._v("")])])]),i("van-col",{attrs:{span:"8"}},[i("div",{staticClass:"add_like",on:{click:t.go_prve}},[i("p",{staticStyle:{color:"#C1C1C1"}},[t._v("上一题")])])])],1)],1),i("van-col",{attrs:{span:"2"}},[i("div",{staticClass:"blue_down_line"})]),t.active<30?i("van-col",{attrs:{span:"11"}},[i("van-row",[i("van-col",{attrs:{offset:"4",span:"6"}},[i("div",{staticClass:"like_icon",on:{click:t.go_next}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#83B6FF"}},[t._v("")])])]),i("van-col",{attrs:{span:"8"}},[i("div",{staticClass:"add_like",on:{click:t.go_next}},[i("p",[t._v("下一题")])])])],1)],1):t._e(),30==t.active?i("van-col",{attrs:{span:"11"}},[i("van-row",[i("van-col",{attrs:{offset:"4",span:"6"}},[i("div",{staticClass:"like_icon",on:{click:t.go_more}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#83B6FF"}},[t._v("")])])]),i("van-col",{attrs:{span:"8"}},[i("div",{staticClass:"add_like",on:{click:t.go_more}},[i("p",[t._v("继续刷题")])])])],1)],1):t._e()],1)],1)])},Ft=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[i("img",{attrs:{src:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/SingleBox.png"}})])}],qt={data:function(){return{liked:!1,unlike:!0,show:!1,active:1,right_key:"",checked:"",score:0,finalresult:"",question:"",lists:[],userid:"",addid:"",page:1,limit:30,subjectid:0}},mounted:function(){var t=[];localStorage.setItem("array",JSON.stringify(t))},created:function(){var t=this;N().then((function(s){t.lists=s.data,t.question=t.lists[0],t.right_key=t.question[0].right_key;for(var i=0;i<t.question[0].option.length;i++)t.question[0].option[i].bindclass="icon-xxx iconfont checkbox"}));var s=localStorage.getItem("userid");this.userid=s},methods:{changeLike:function(){var t=this;this.liked=!0,this.unlike=!1;var s={userid:this.userid,subjectid:this.question[0].id};T(s).then((function(s){window.console.log(s),t.subjectid=s.data.id,t.$toast("收藏成功！")}))},changeUnlike:function(){var t=this;this.liked=!1,this.unlike=!0;var s={id:this.subjectid};I(s).then((function(s){window.console.log(s),t.$toast("取消收藏成功！")}))},showList:function(){this.show=!0},selected:function(t){this.active=t+1,this.question=this.lists[t],this.show=!1,this.checked="",this.right_key="";for(var s=JSON.parse(localStorage.getItem("array")),i=0;i<this.question[0].option.length;i++)this.question[0].option[i].bindclass="icon-xxx iconfont checkbox";for(var e=0;e<s.length;e++)if(this.question[0].id==s[e].subject_id){this.checked=s[e].subject_item,this.right_key=s[e].right_key;for(var n=0;n<this.question[0].option.length;n++)this.question[0].option[n].sorts==s[e].subject_right?this.question[0].option[n].bindclass="icon-xxx iconfont checkedbox":this.question[0].option[n].sorts==s[e].subject_item&&(this.question[0].option[n].bindclass="icon-xxx iconfont checedfalse")}},selectItem:function(t){if(""==this.checked){if(this.question[0].right_key==this.question[0].option[t].sorts)this.question[0].option[t].bindclass="icon-xxx iconfont checkedbox";else{this.question[0].option[t].bindclass="icon-xxx iconfont checedfalse";for(var s=0;s<this.question[0].option.length;s++)this.question[0].option[s].sorts==this.question[0].right_key&&(this.question[0].option[s].bindclass="icon-xxx iconfont checkedbox")}this.score+=1,this.checked=this.question[0].option[t].sorts,this.right_key=this.question[0].right_key;var i={subject_id:this.question[0].id,subject_item:this.checked,subject_right:this.right_key},e=JSON.parse(localStorage.getItem("array"));e.push(i),localStorage.setItem("array",JSON.stringify(e)),this.$forceUpdate()}},go_prve:function(){if(1!=this.active){var t=this.active-2;this.selected(t)}else this.$toast("已经是第一题了！")},go_next:function(){if(this.active<30){var t=this.active;this.selected(t)}else this.$toast("已经是最后一题了！")},go_more:function(){var t=this;N().then((function(s){t.lists=s.data,t.question=t.lists[0],t.right_key=t.question[0].right_key;for(var i=0;i<t.question[0].option.length;i++)t.question[0].option[i].bindclass="icon-xxx iconfont checkbox"})),localStorage.clear(),this.$toast("已经刷新题目！")}}},$t=qt,Ot=(i("4549"),Object(o["a"])($t,St,Ft,!1,null,"694fbaa4",null)),Bt=Ot.exports,Et={data:function(){return{subjectlist:"",activesubjec:[],activecode:0}},components:{Bg2:Ct,Head:Bt},methods:{go_back:function(){this.$router.push("/index")},last:function(){0==this.activecode?alert("已经是第一题了"):this.activecode-=1,window.console.log(this.activecode)},next:function(){this.activecode==this.subjectlist.length-1?alert("已经是最后一题了"):this.activecode+=1,window.console.log(this.activecode)}}},Nt=Et,Tt=(i("8a21"),Object(o["a"])(Nt,gt,xt,!1,null,"56691313",null)),It=Tt.exports,Pt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticStyle:{"overflow-y":"scroll"}},[i("Bg3",[i("van-row",[i("van-col",{attrs:{span:"4"}},[i("div",{staticClass:"back_icon",on:{click:t.go_back}},[i("van-icon",{attrs:{name:"arrow-left",color:"#ffffff",size:"0.6rem"}})],1)]),i("van-col",{staticClass:"title",attrs:{span:"16"}},[i("p",[t._v("真题模拟")])])],1),i("second-list")],1)],1)},Lt=[],Rt=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"gray_background"},[i("div",{staticClass:"blue_title"},[t._t("default")],2)])])},zt=[],Ut={data:function(){return{}}},Jt=Ut,Dt=(i("1caa"),Object(o["a"])(Jt,Rt,zt,!1,null,"2a9b52dc",null)),Mt=Dt.exports,At=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",t._l(t.subject,(function(s,e){return i("div",{key:e},[i("div",{staticClass:"empty_blank"},[i("van-row",[i("van-col",{attrs:{span:"4"}},[i("div",{staticClass:"blue_down_line"})]),i("van-col",{attrs:{span:"14"}},[i("div",{staticClass:"test_name"},[i("p",[t._v(t._s(s.answer))])]),i("div",{staticClass:"test_progress"},[i("van-row",[i("van-col",{attrs:{span:"8"}},[i("div",{staticClass:"list_sub"},[i("p",[t._v(t._s(7200==s.times?"未开始":"100%"==s.percentage?"已考完":"已考"+s.percentage))])])]),i("van-col",{attrs:{span:"16"}},[i("div",{staticClass:"list_sub"},[i("p",[t._v(t._s("100%"==s.percentage?s.rate+"正确率":"剩余时间："+s.times/60+":"+(7200-s.times)))])])])],1)],1)]),i("van-col",{attrs:{span:"4"}},[i("div",{staticClass:"go_test",on:{click:function(i){return t.goRealTest(s)}}},[i("p",[t._v(t._s("100%"==s.percentage?"重考":"去考试"))])])])],1)],1)])})),0)},Gt=[],Ht={data:function(){return{subject:"",userid:"",minutes:0,seconds:0,gettime:7200}},mounted:function(){var t=localStorage.getItem("userid");this.userid=t,this.getRealTest()},created:function(){},methods:{getRealTest:function(){var t=this,s={userid:this.userid};P(s).then((function(s){t.subject=s.data}))},goRealTest:function(t){this.$router.push({path:"/RealTest",query:{name:t.answer}})}}},Qt=Ht,Wt=(i("a5de"),Object(o["a"])(Qt,At,Gt,!1,null,"dfeb5406",null)),Kt=Wt.exports,Vt={components:{Bg3:Mt,SecondList:Kt},methods:{go_back:function(){this.$router.push("/index")}}},Xt=Vt,Yt=(i("2ebd"),Object(o["a"])(Xt,Pt,Lt,!1,null,"6200273e",null)),Zt=Yt.exports,ts=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticStyle:{"overflow-y":"scroll"}},[i("Bg2",[i("div",[i("van-row",[i("van-col",{attrs:{span:"4"}},[i("div",{staticClass:"back_icon",on:{click:t.go_back}},[i("van-icon",{attrs:{name:"arrow-left",color:"#ffffff",size:"0.6rem"}})],1)]),i("van-col",{staticClass:"title",attrs:{span:"16"}},[i("p",[t._v("真题模拟")])])],1),i("Body",{attrs:{name:t.name}})],1)])],1)},ss=[],is=(i("b0c0"),function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"head_bg"},[i("van-row",{staticStyle:{"line-height":"2"}},[t.showAdd?i("van-col",{attrs:{span:"11"}},[i("van-row",[i("van-col",{attrs:{offset:"4",span:"6"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.unlike,expression:"unlike"}],staticClass:"like_icon",on:{click:t.changeLike}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#83B6FF"}},[t._v("")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.liked,expression:"liked"}],staticClass:"like_icon",on:{click:t.changeUnlike}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#66A1F2"}},[t._v("")])])]),i("van-col",{attrs:{span:"12"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.unlike,expression:"unlike"}],staticClass:"add_like",on:{click:t.changeLike}},[i("p",{staticStyle:{color:"#85B8FD",margin:"10px 0 14px 0"}},[t._v("收藏此题")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.liked,expression:"liked"}],staticClass:"add_like",on:{click:t.changeUnlike}},[i("p",{staticStyle:{color:"#85B8FD",margin:"10px 0 14px 0"}},[t._v("取消收藏")])])])],1)],1):t._e(),t.showRed?i("van-col",{attrs:{span:"11"}},[i("van-row",[i("van-col",{attrs:{offset:"2",span:"6"}},[i("div",{staticClass:"like_icon",on:{click:function(s){t.show=!0}}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#83B6FF"}},[t._v("")])])]),i("van-col",{attrs:{span:"12"}},[i("div",{staticClass:"add_like",on:{click:function(s){t.show=!0}}},[i("p",{staticStyle:{color:"#85B8FD",margin:"10px 0 14px 0"}},[t._v("跳转试题")])])])],1)],1):t._e(),i("van-col",{attrs:{span:"2"}},[i("div",{staticClass:"blue_down_line"})]),i("van-col",{attrs:{span:"11"}},[i("van-row",[i("van-col",{attrs:{offset:"2",span:"6"}},[i("div",{staticClass:"like_icon",on:{click:function(s){t.show=!0}}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#83B6FF"}},[t._v("")])])]),i("van-col",{attrs:{span:"12"}},[i("div",{staticClass:"add_like",on:{click:function(s){t.show=!0}}},[i("p",{staticStyle:{color:"#85B8FD",margin:"10px 0 14px 0"}},[t._v("跳转试题")])])])],1)],1)],1),t.showResult?i("div",{staticClass:"test_result"},[i("h2",[t._v(t._s("正确率: "+t.score+" %"))])]):t._e(),i("van-overlay",{attrs:{show:t.show}},[i("div",{staticClass:"wrapper",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"block"},[t._l(t.lists,(function(s,e){return i("div",{key:e,staticClass:"num_list"},[i("span",{staticClass:"num",class:t.active==e+1?"blueNum":"num",on:{click:function(s){return t.selected(e)}}},[t._v(t._s(e+1))])])})),i("div",{staticStyle:{clear:"both"}})],2),i("div",{staticStyle:{"margin-top":"20px"},on:{click:function(s){t.show=!1}}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#FFFFFF","font-size":"40px"}},[t._v("")])])])])],1),t.question?i("div",{staticClass:"question_body"},[i("div",{staticClass:"question_text"},[i("p",[t._m(0),t._v(t._s(t.active+"、"+t.question[0].title))])]),i("div",{staticClass:"question_text",staticStyle:{"margin-top":"20px"}},t._l(t.question[0].option,(function(s,e){return i("van-row",{key:e,staticStyle:{padding:"5px 20px 5px 20px"},on:{click:function(s){return t.selectItem(e)}}},[i("van-col",{attrs:{span:"1"}},[i("div",{staticStyle:{"margin-top":"18px"}},[i("i",{class:s.bindclass},[t._v("")])])]),i("van-col",{attrs:{span:"22"}},[i("div",[i("p",[t._v(t._s(s.sorts+"."+s.title))])])])],1)})),1),i("div",{staticClass:"test_num"},[i("p",[t._v(t._s("第"+t.active+"题/共"+t.limit+"题"))])])]):t._e(),i("div",{staticClass:"prve_next"},[i("van-row",[i("van-col",{attrs:{span:"7"}},[i("van-row",[i("van-col",{attrs:{offset:"3",span:"6"}},[i("div",{staticClass:"like_icon",on:{click:t.go_prve}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#FFFFFF"}},[t._v("")])])]),i("van-col",{attrs:{span:"12"}},[i("div",{staticClass:"add_like",on:{click:t.go_prve}},[i("p",{staticStyle:{color:"#FFFFFF"}},[t._v("上一题")])])])],1)],1),i("van-col",{staticStyle:{background:"#FFFFFF"},attrs:{span:"10"}},[i("van-row",[i("van-col",{staticStyle:{margin:"12px 0","text-align":"right"},attrs:{span:"7"}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#85B8FD"}},[t._v("")])]),i("van-col",{attrs:{span:"14"}},[i("van-count-down",{attrs:{time:t.time,format:"倒计时:mm:ss"}})],1)],1)],1),t.active<100?i("van-col",{attrs:{span:"7"}},[i("van-row",[i("van-col",{attrs:{offset:"3",span:"6"}},[i("div",{staticClass:"like_icon",on:{click:t.go_next}},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#FFFFFF"}},[t._v("")])])]),i("van-col",{attrs:{span:"12"}},[i("div",{staticClass:"add_like",on:{click:t.go_next}},[i("p",[t._v("下一题")])])])],1)],1):t._e(),100==t.active?i("van-col",{attrs:{span:"7"}},[i("van-row",[i("van-col",{attrs:{offset:"4",span:"6"}},[i("div",{staticClass:"like_icon"},[i("i",{staticClass:"iconfont icon-xxx",staticStyle:{color:"#FFFFFF"}},[t._v("")])])]),i("van-col",{attrs:{span:"8"}},[i("div",{staticClass:"add_like",on:{click:t.commit_test}},[i("p",{staticStyle:{color:"#FFFFFF"}},[t._v("交卷")])])])],1)],1):t._e()],1)],1)])}),es=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[i("img",{attrs:{src:"https://jisuanjierji.oss-cn-beijing.aliyuncs.com/sucai/SingleBox.png"}})])}],ns={props:["name"],data:function(){return{liked:!1,unlike:!0,show:!1,active:1,right_key:"",checked:"",score:0,finalresult:"",question:"",lists:[],userid:"",addid:"",subjectid:0,title:"",limit:100,testname:"",percentage:"",time:72e5,showResult:!0,showRed:!1,showAdd:!0}},mounted:function(){var t=[];localStorage.setItem("array",JSON.stringify(t));var s=this.$route.query.name;this.testname=s,this.getRealTest()},methods:{changeLike:function(){var t=this;this.liked=!0,this.unlike=!1;var s={userid:this.userid,subjectid:this.question[0].id};T(s).then((function(s){t.subjectid=s.data.id,t.$toast("收藏成功！")}))},getRealTest:function(){var t=this,s={questionname:this.testname};L(s).then((function(s){t.lists=s.data,t.question=t.lists[0],t.right_key=t.question[0].right_key;for(var i=0;i<t.question[0].option.length;i++)t.question[0].option[i].bindclass="icon-xxx iconfont checkbox"}));var i=localStorage.getItem("userid");this.userid=i},changeUnlike:function(){var t=this;this.liked=!1,this.unlike=!0;var s={id:this.subjectid};I(s).then((function(s){window.console.log(s),t.$toast("取消收藏成功！")}))},showList:function(){this.show=!0},selected:function(t){this.active=t+1,this.question=this.lists[t],this.show=!1,this.checked="",this.right_key="";for(var s=JSON.parse(localStorage.getItem("array")),i=0;i<this.question[0].option.length;i++)this.question[0].option[i].bindclass="icon-xxx iconfont checkbox";for(var e=0;e<s.length;e++)if(this.question[0].id==s[e].subject_id)for(var n=0;n<this.question[0].option.length;n++)this.question[0].option[n].sorts==s[e].subject_item&&(this.question[0].option[n].bindclass="icon-xxx iconfont checkedbox")},selectItem:function(t){if(""==this.checked){this.question[0].right_key==this.question[0].option[t].sorts?(this.score+=1,this.question[0].option[t].bindclass="icon-xxx iconfont checkedbox"):this.question[0].option[t].bindclass="icon-xxx iconfont checkedbox",this.checked=this.question[0].option[t].sorts,this.right_key=this.question[0].right_key;var s={subject_id:this.question[0].id,subject_item:this.checked,subject_right:this.right_key,subject_index:t+1},i=JSON.parse(localStorage.getItem("array"));i.push(s),localStorage.setItem("array",JSON.stringify(i)),this.$forceUpdate()}},go_prve:function(){if(1!=this.active){var t=this.active-2;this.selected(t)}else this.$toast("已经是第一题了！")},go_next:function(){if(this.active<100){var t=this.active;this.selected(t)}else this.$toast("已经是最后一题了！")},commit_test:function(){}}},as=ns,os=(i("539d"),Object(o["a"])(as,is,es,!1,null,"5bdee0ab",null)),cs=os.exports,rs={data:function(){return{subjectlist:"",activesubjec:[],activecode:0,name:""}},components:{Bg2:Ct,Body:cs},mounted:function(){var t=this.$route.query.name;this.name=t},methods:{go_back:function(){this.$router.push("/lists")}}},ls=rs,us=(i("3aa4"),Object(o["a"])(ls,ts,ss,!1,null,"71ab6e0a",null)),ds=us.exports;e["a"].use(u["a"]);var vs=[{path:"/",name:"home",component:_},{path:"/test",name:"test",component:J},{path:"/extension",name:"home",component:_},{path:"/index",name:"index",component:Z},{path:"/login",name:"login",component:dt},{path:"/register",name:"register",component:mt},{path:"/dailytest",name:"dailytest",component:It},{path:"/lists",name:"lists",component:Zt},{path:"/realtest",name:"realtest",component:ds}],ps=new u["a"]({mode:"history",base:"/",routes:vs}),hs=ps,fs=i("2f62");e["a"].use(fs["a"]);var _s=new fs["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ms=(i("499a"),i("9f14")),gs=i("e27c"),xs=i("d1e1"),bs=i("9ffb"),ks=i("ad06"),ys=i("565f"),ws=i("7744"),js=i("34e9"),Cs=i("6e47"),Ss=i("7a82");i("157a");e["a"].use(ms["a"]).use(gs["a"]).use(xs["a"]).use(bs["a"]).use(ks["a"]).use(ys["a"]).use(ws["a"]).use(js["a"]).use(Cs["a"]).use(Ss["a"]),e["a"].config.productionTip=!1,new e["a"]({router:hs,store:_s,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,s,i){},"5d34":function(t,s,i){"use strict";var e=i("82bb"),n=i.n(e);n.a},"7e06":function(t,s,i){},"82bb":function(t,s,i){},8316:function(t,s,i){},"85ec":function(t,s,i){},"872b":function(t,s,i){},"8a21":function(t,s,i){"use strict";var e=i("b985"),n=i.n(e);n.a},"8ffa":function(t,s,i){"use strict";var e=i("c925"),n=i.n(e);n.a},a5de:function(t,s,i){"use strict";var e=i("3430"),n=i.n(e);n.a},b985:function(t,s,i){},c365:function(t,s,i){"use strict";var e=i("fa5e"),n=i.n(e);n.a},c925:function(t,s,i){},cccb:function(t,s,i){"use strict";var e=i("5ced"),n=i.n(e);n.a},da67:function(t,s,i){},ef6a:function(t,s,i){"use strict";var e=i("f987"),n=i.n(e);n.a},f6a6:function(t,s,i){},f987:function(t,s,i){},fa5e:function(t,s,i){},ff41:function(t,s,i){"use strict";var e=i("8316"),n=i.n(e);n.a}});
//# sourceMappingURL=app.47d9f9a3.js.map