(window.webpackJsonpproject1=window.webpackJsonpproject1||[]).push([[0],{127:function(e,t,a){e.exports={main:"Menu_main__3Zkz8",activeLink:"Menu_activeLink__2fQVV"}},128:function(e,t,a){},129:function(e,t,a){e.exports={main:"Profile_main__2fnVk"}},131:function(e,t,a){e.exports={main:"User_main__3wVYA"}},132:function(e,t,a){e.exports={main:"Message_main__2wYxg"}},162:function(e,t,a){e.exports=a(291)},167:function(e,t,a){},168:function(e,t,a){},21:function(e,t,a){e.exports={main:"Friends_main__13uvL",friend:"Friends_friend__1lTq4",avatar:"Friends_avatar__PWJ2h",btnFollow:"Friends_btnFollow__9smQ-",follow:"Friends_follow__3VEU0",unfollow:"Friends_unfollow__3CLJT",followPreloader:"Friends_followPreloader__2JIFJ",pages:"Friends_pages__1T5vq",activePage:"Friends_activePage__2iQ0I"}},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(62),o=a.n(s),i=(a(167),a(9)),c=a(10),l=a(12),u=a(11),p=a(13),f=(a(168),a(30)),m=a(34),d=a(31),h=a(23),g=a.n(h),v=a(37),b=a(125),O=a(27);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=function(e){return{type:"setStatus",status:e}},P=function(e){return{type:"changeFetching",status:e}},j=function(e){return function(t){t(P(!0)),C.getProfile(e).then((function(e){t(P(!1)),t({type:"setProfile",profileInfo:e})}))}},w={profileInfo:null,status:"",posts:[{id:1,post:"hi!!!!!!!!!!!!!",status:"added"},{id:2,post:"Hellooooooo!",status:"added"},{id:3,post:"I'm Andrew!",status:"added"}],isFetching:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_post":return E({},e,{posts:[].concat(Object(O.a)(e.posts),[{id:8,post:t.newPost,status:"added"}])});case"setProfile":return E({},e,{profileInfo:t.profileInfo});case"setStatus":return E({},e,{status:t.status});case"changeFetching":return E({},e,{isFetching:t.status});default:return e}},F=b.create({withCredentials:!0,headers:{"API-KEY":"07d72dd6-c4bd-4a77-837c-92f8a89a5e10"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),k={getUsers:function(){var e=Object(v.a)(g.a.mark((function e(){var t,a,n,r=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,a=r.length>1&&void 0!==r[1]?r[1]:5,e.next=4,F.get("users?page=".concat(t,"&count=").concat(a));case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),follow:function(e){return F.post("follow/".concat(e))},unfollow:function(e){return F.delete("follow/".concat(e))}},C={getProfile:function(e){return F.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return F.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return F.put("profile/status",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),F.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},I=function(){return F.get("auth/me").then((function(e){return e.data}))},N=function(e,t,a,n){return F.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},A=function(){return F.delete("auth/login")},U=function(){return F.get("security/get-captcha-url")},x=a(63);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=function(e){return{type:"changeAuthFetching",status:e}},T=function(e){return{type:"set_captcha",captchaUrl:e}},H=function(){return function(e){e(L(!0)),I().then((function(t){e(L(!1)),e({type:"setUser",dataProfile:t})}))}},z={isAuth:!1,authFetching:!1,dataProfile:null,captchaUrl:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setUser":return M({},e,{dataProfile:t.dataProfile,isAuth:0===t.dataProfile.resultCode});case"set_captcha":return M({},e,{captchaUrl:t.captchaUrl});case"changeAuthFetching":return M({},e,{authFetching:t.status});default:return e}},R=a(8),G=a(127),W=a.n(G),K=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:W.a.main},r.a.createElement("div",null,r.a.createElement("a",{href:"/profile"},"Profile")),r.a.createElement("div",null,r.a.createElement("a",{href:"/friends"},"Users")))}}]),t}(r.a.Component);a(128);var V=a(51),Y=a.n(V),B=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Y.a.main},r.a.createElement("div",{className:Y.a.logo},r.a.createElement("a",{href:"/profile"},r.a.createElement("img",{src:"/logo.png",align:"top"}),r.a.createElement("span",null,"SocialKek"))),r.a.createElement("div",{className:Y.a.search},r.a.createElement("input",{type:"text",placeholder:"\u0418\u0441\u043a\u0430\u0442\u044c \u0437\u0434\u0435\u0441\u044c..."}),r.a.createElement("img",{src:"/search_header.png"})),r.a.createElement("div",{className:Y.a.login},r.a.createElement("a",null,this.props.dataProfile.data.login),r.a.createElement("p",{onClick:this.props.logout},"(\u0432\u044b\u0439\u0442\u0438)")))}}]),t}(r.a.Component),Q=Object(R.b)((function(e){return{dataProfile:e.auth.dataProfile}}),{logout:function(){return function(e){e(L(!0)),A().then((function(t){e(H()),e(T(null)),e(L(!1))}))}}})(B),q=a(129),Z=a.n(q),$=a(16),X=a(52),ee=a.n(X),te=r.a.createRef(),ae=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addPost=a.addPost.bind(Object($.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"addPost",value:function(e){""!=te.current.value&&this.props.addPost(te.current.value),e.preventDefault(),te.current.value=""}},{key:"componentDidMount",value:function(){var e;e=void 0==this.props.urlUserId?this.props.myId:this.props.urlUserId,this.props.getProfile(e)}},{key:"render",value:function(){var e=this,t=void 0===this.props.urlUserId,a=null===this.props.profileInfo||null===this.props.profileInfo.photos.large?"/avatar.jpg":this.props.profileInfo.photos.large,n=this.props.posts.map((function(n,s,o){return r.a.createElement("div",{key:o[o.length-s-1].id,className:ee.a.post},r.a.createElement("div",null,r.a.createElement("img",{src:!1===t?"/avatar.jpg":a,align:"top"})),r.a.createElement("div",{className:ee.a.message},r.a.createElement("p",null,null!=e.props.profileInfo?e.props.profileInfo.fullName:""),r.a.createElement("p",null,o[o.length-s-1].post)))}));return r.a.createElement("div",{className:ee.a.main},t?r.a.createElement("div",null,r.a.createElement("textarea",{placeholder:"Write your Post!",ref:te}),r.a.createElement("a",{href:"#",onClick:function(t){return e.addPost(t)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"),n):r.a.createElement("div",{className:ee.a.noPosts},"No posts"))}}]),t}(r.a.Component),ne=a(38),re=a.n(ne),se=a(68),oe=a.n(se),ie=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={mode:"view",status:a.props.status},a.editStatus=a.editStatus.bind(Object($.a)(a)),a.saveStatus=a.saveStatus.bind(Object($.a)(a)),a.cansel=a.cansel.bind(Object($.a)(a)),a.changeStatus=a.changeStatus.bind(Object($.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.status!=this.props.status&&this.setState({status:this.props.status})}},{key:"editStatus",value:function(e){this.setState({mode:"edit"})}},{key:"saveStatus",value:function(e){this.setState({mode:"view"}),this.props.updateStatus(this.state.status)}},{key:"cansel",value:function(e){this.setState({mode:"view"})}},{key:"changeStatus",value:function(e){this.setState({status:e.currentTarget.value})}},{key:"render",value:function(){var e=null===this.props.status||""===this.props.status?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441":this.props.status;return r.a.createElement("div",{className:oe.a.main},!0===this.props.myProfile?"view"===this.state.mode?r.a.createElement("div",{className:oe.a.status,onClick:this.editStatus},e):r.a.createElement("div",{className:oe.a.editStatus},r.a.createElement("input",{onChange:this.changeStatus,value:this.state.status}),r.a.createElement("span",{onClick:this.saveStatus},"save"),r.a.createElement("span",{onClick:this.cansel},"cansel")):this.props.status)}}]),t}(r.a.Component),ce=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={myProfile:!1,displayChangeAvatar:!1,avatarIsOpen:!1},a.changeAvatar=a.changeAvatar.bind(Object($.a)(a)),a.openAvatar=a.openAvatar.bind(Object($.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e;e=void 0==this.props.urlUserId?this.props.myId:this.props.urlUserId,this.setState({myProfile:e===this.props.myId}),this.props.getProfile(e),this.props.getStatus(e)}},{key:"changeAvatar",value:function(e){this.props.updatePhoto(e.currentTarget.files[0],this.props.myId)}},{key:"openAvatar",value:function(e){this.setState({avatarIsOpen:e})}},{key:"render",value:function(){var e=this,t=null==this.props.profileInfo||null==this.props.profileInfo.photos.large?"/avatar_friend.png":this.props.profileInfo.photos.large;return r.a.createElement("div",{className:re.a.main},r.a.createElement("div",{className:re.a.avatar,onMouseMove:function(){e.setState({displayChangeAvatar:!0})},onMouseLeave:function(){e.setState({displayChangeAvatar:!1})},onClick:function(){return e.openAvatar(!0)}},!1===this.props.isFetching?r.a.createElement("img",{src:t}):r.a.createElement("img",{src:"/preloader.svg"}),this.state.myProfile&&this.state.displayChangeAvatar&&r.a.createElement("span",{className:re.a.changeAvatar,onClick:function(e){return e.stopPropagation()}},r.a.createElement("input",{type:"file",name:"file",id:"file",onChange:this.changeAvatar}),r.a.createElement("label",{for:"file"},"Change avatar"))),null!=this.props.profileInfo&&r.a.createElement("div",{className:re.a.description},r.a.createElement("span",{className:re.a.name},this.props.profileInfo.fullName),r.a.createElement(ie,{status:this.props.status,myProfile:this.state.myProfile,updateStatus:this.props.updateStatus})),this.state.avatarIsOpen&&r.a.createElement("div",{className:re.a.avatarFull,onClick:function(){return e.openAvatar(!1)}},r.a.createElement("img",{src:t}),r.a.createElement("div",null)))}}]),t}(r.a.Component),le=function(e){var t=function(t){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,t),Object(c.a)(a,[{key:"render",value:function(){return!1===this.props.isAuth?r.a.createElement(m.a,{to:"/login"}):r.a.createElement(e,this.props)}}]),a}(r.a.Component);return Object(R.b)((function(e){return{isAuth:e.auth.isAuth}}))(t)};var ue=Object(m.f)(le((function(e){return r.a.createElement("div",{className:Z.a.main},r.a.createElement(ce,{status:e.status,myId:e.myId,isFetching:e.isFetching,profileInfo:e.profileInfo,urlUserId:e.match.params.userid,updateStatus:e.updateStatus,getStatus:e.getStatus,getProfile:e.getProfile,updatePhoto:e.updatePhoto}),r.a.createElement(ae,{posts:e.posts,addPost:e.addPost,myId:e.myId,urlUserId:e.match.params.userid,profileInfo:e.profileInfo,getProfile:e.getProfile}))}))),pe=Object(R.b)((function(e){return{posts:e.profilePage.posts,profileInfo:e.profilePage.profileInfo,myId:e.auth.dataProfile.data.id,isFetching:e.profilePage.isFetching,status:e.profilePage.status}}),{addPost:function(e){return{type:"add_post",newPost:e}},getProfile:j,getStatus:function(e){return function(t){C.getStatus(e).then((function(e){t(y(e))}))}},updateStatus:function(e){return function(t){C.updateStatus(e).then((function(a){t(y(e))}))}},updatePhoto:function(e,t){return function(a){a(P(!0)),C.updatePhoto(e).then((function(e){a(P(!1)),a(j(t))}))}}})(ue),fe=a(69),me=a.n(fe),de=a(131),he=a.n(de);var ge=function(e){return r.a.createElement("div",{className:he.a.main},e.users.map((function(e){return r.a.createElement("a",{href:"#"},e.name)})))},ve=a(132),be=a.n(ve);var Oe=function(e){var t=r.a.createRef();return r.a.createElement("div",{className:be.a.main},e.messages.map((function(e){return r.a.createElement("p",null,e.message)})),r.a.createElement("textarea",{ref:t}),r.a.createElement("a",{href:"#",onClick:function(a){e.addMessage(t.current.value),a.preventDefault(),t.current.value=""}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"))};function _e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_e(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_e(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ye={users:[{id:1,name:"Andrew"},{id:2,name:"Katya"},{id:3,name:"Nastya"},{id:4,name:"Peter"}],messages:[{id:1,message:"Hi, Im fine!"},{id:2,message:"Hello!"},{id:3,message:"How are u?"},{id:4,message:"Where are you from?"},{id:5,message:"It's so cool!"},{id:6,message:"I'm from volgograd"}]},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_message":return Ee({},e,{messages:[].concat(Object(O.a)(e.messages),[{id:7,message:t.message}])});default:return e}};var je=Object(R.b)((function(e){return{messages:e.dialogsPage.messages,users:e.dialogsPage.users}}),{addMessage:function(e){return{type:"add_message",message:e}}})((function(e){return r.a.createElement("div",{className:me.a.main},r.a.createElement("div",{className:me.a.users},r.a.createElement(ge,{users:e.users})),r.a.createElement("div",{className:me.a.dialogs},r.a.createElement(Oe,{messages:e.messages,addMessage:e.addMessage})))})),we=a(21),Se=a.n(we);function Fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Fe(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Fe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ce="friends_reducer/CHANGE_FOLLOW",Ie="friends_reducer/SET_FRIENDS",Ne="friends_reducer/CHANGE_CURRENT_PAGE",Ae="friends_reducer/TOGGLE_IS_FEATCHING",Ue="friends_reducer/TOGGLE_IS_FOLLOW_FEATCHING",xe={friends:[{followed:!1,id:5204,name:"noName",photos:{small:null,large:null},status:null}],pageSize:5,totalUsersCount:1e3,currentPage:1,isFetching:!1,isFollowFetching:[]};function De(e){return{type:Ce,id:e}}function Me(e){return{type:Ae,status:e}}function Le(e){return{type:Ue,id:e}}var Te=a(133),He=a.n(Te),ze=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).followChange=a.followChange.bind(Object($.a)(a)),a.changeCurrentPage=a.changeCurrentPage.bind(Object($.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"changeCurrentPage",value:function(e){this.props.changeCurrentPage(e.selected+1)}},{key:"componentDidUpdate",value:function(e,t){e.currentPage!=this.props.currentPage&&this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"followChange",value:function(e){var t=e.currentTarget.dataset.id,a=e.currentTarget.text;this.props.follow(t,a),e.preventDefault()}},{key:"render",value:function(){var e=this,t=Math.ceil(this.props.totalUsersCount/this.props.pageSize);return r.a.createElement("div",{className:Se.a.main},1==this.props.isFetching?r.a.createElement("img",{src:"/preloader.svg"}):r.a.createElement("div",null,this.props.friends.map((function(t){return r.a.createElement("div",{key:t.id,className:Se.a.friend},r.a.createElement(f.b,{to:"/profile/".concat(t.id)},r.a.createElement("img",{className:Se.a.avatar,src:null==t.photos.small?"/avatar_friend.png":t.photos.small,align:"top"})),r.a.createElement("p",null,t.name,r.a.createElement("br",null),r.a.createElement("br",null),0==e.props.isFollowFetching.some((function(e){return e==t.id}))?r.a.createElement("a",{href:"#",className:"".concat(Se.a.btnFollow," ").concat(t.followed?Se.a.follow:Se.a.unfollow),"data-id":t.id,onClick:e.followChange},t.followed?"follow":"unfollow"):r.a.createElement("img",{className:Se.a.followPreloader,src:"/preloader.svg"})))}))),r.a.createElement(He.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.changeCurrentPage,containerClassName:Se.a.pages,pageClassName:Se.a.page,previousClassName:Se.a.previous,nextClassName:Se.a.next,activeClassName:Se.a.activePage}))}}]),t}(r.a.Component);var Je,Re=Object(R.b)((function(e){return{friends:e.friendsPage.friends,pageSize:e.friendsPage.pageSize,totalUsersCount:e.friendsPage.totalUsersCount,currentPage:e.friendsPage.currentPage,isFetching:e.friendsPage.isFetching,isFollowFetching:e.friendsPage.isFollowFetching}}),{getUsers:function(e,t){return function(){var a=Object(v.a)(g.a.mark((function a(n){var r;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(Me(!0)),a.next=3,k.getUsers(e,t);case 3:r=a.sent,n((s=r.items,{type:Ie,arr:s})),n(Me(!1));case 6:case"end":return a.stop()}var s}),a)})));return function(e){return a.apply(this,arguments)}}()},follow:function(e,t){return function(){var a=Object(v.a)(g.a.mark((function a(n){var r;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n(Le(e)),"follow"!==t){a.next=7;break}return a.next=4,k.unfollow(e);case 4:r=a.sent,a.next=10;break;case 7:return a.next=9,k.follow(e);case 9:r=a.sent;case 10:0==r.data.resultCode&&n(De(e)),n(Le(e));case 12:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},changeCurrentPage:function(e){return{type:Ne,page:e}}})(ze),Ge=a(53),We=a.n(Ge),Ke=a(122),Ve=a(123),Ye=function(e){if(!e)return"The field cannot be empty"},Be=a(134),Qe=a(89),qe=a.n(Qe),Ze=function(e){var t=e.input,a=e.meta,n=a.touched,s=a.error,o=a.active,i=Object(Be.a)(e,["input","meta"]),c=!!(n&!o&void 0!=s);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({},t,i,{className:c&&qe.a.error})),c&&r.a.createElement("div",{className:qe.a.messageError},s))},$e=(Je=5,function(e){if(!(e.length>=Je))return"The field must be at least ".concat(Je," characters")}),Xe=Object(Ve.a)({form:"login"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:We.a.logo},r.a.createElement("img",{src:"/logo.png",align:"top"}),r.a.createElement("span",null,"SocialKek")),r.a.createElement("div",null,r.a.createElement(Ke.a,{placeholder:"login",name:"login",component:Ze,validate:[Ye,$e]})),r.a.createElement("div",null,r.a.createElement(Ke.a,{placeholder:"password",name:"password",component:Ze,validate:[Ye]})),r.a.createElement("div",null,r.a.createElement(Ke.a,{name:"rememberMe",component:"input",type:"checkbox"}),r.a.createElement("span",null,"Remember me")),null!=e.captchaUrl&&r.a.createElement("div",null,r.a.createElement("img",{src:e.captchaUrl}),r.a.createElement(Ke.a,{name:"captcha",component:"input",type:"input"})),r.a.createElement("p",null,"No account? You can create an ",r.a.createElement("a",null,"account")),r.a.createElement("div",null,!1===e.authFetching?r.a.createElement("button",null,"Log in"):r.a.createElement("img",{src:"/preloader"})),e.error&&r.a.createElement("div",{className:We.a.errorMessage},e.error))})),et=Object(R.b)((function(e){return{authFetching:e.auth.authFetching,captchaUrl:e.auth.captchaUrl}}),{postLogin:function(e,t,a,n){return function(r){r(L(!0)),N(e,t,a,n).then((function(e){0===e.data.resultCode?r(H()):(10===e.data.resultCode&&r(function(){var e=Object(v.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:a=e.sent,n=a.data.url,t(T(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r(L(!1)),r(Object(x.a)("login",{_error:e.data.messages[0]})))}))}}})((function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:We.a.main}),r.a.createElement("div",{className:We.a.formOut,style:null!=e.captchaUrl?{height:"450px"}:{}},r.a.createElement(Xe,{captchaUrl:e.captchaUrl,authFetching:e.authFetching,onSubmit:function(t){e.postLogin(t.login,t.password,t.rememberMe=!1,t.captcha)}})))})),tt=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getLogin()}},{key:"render",value:function(){return r.a.createElement(f.a,null,!0===this.props.authFetching?r.a.createElement("img",{src:"/preloader.svg"}):!1===this.props.isAuth?r.a.createElement(et,null):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"menu"},r.a.createElement(K,null)),r.a.createElement("div",{className:"header"},r.a.createElement(Q,null)),r.a.createElement("div",{className:"content"},r.a.createElement(m.b,{path:"/profile/:userid?",render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(je,null)}}),r.a.createElement(m.b,{path:"/friends",render:function(){return r.a.createElement(Re,null)}}))))}}]),t}(r.a.Component),at=Object(R.b)((function(e){return{isAuth:e.auth.isAuth,authFetching:e.auth.authFetching}}),{getLogin:H})(tt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var nt=a(7),rt=a(136),st=a(124),ot=Object(nt.c)({profilePage:S,dialogsPage:Pe,friendsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return ke({},e,{friends:Object(O.a)(e.friends).map((function(e){return t.id==e.id?ke({},e,{followed:1!=e.followed}):e}))});case Ie:return ke({},e,{friends:t.arr});case Ne:return ke({},e,{currentPage:t.page});case Ae:return ke({},e,{isFetching:t.status});case Ue:return ke({},e,{isFollowFetching:!0===Object(O.a)(e.isFollowFetching).some((function(e){return e==t.id}))?Object(O.a)(e.isFollowFetching).filter((function(e){return e!=t.id})):[].concat(Object(O.a)(e.isFollowFetching),[t.id])});default:return e}},auth:J,form:st.a}),it=Object(nt.d)(ot,Object(nt.a)(rt.a));window.myStore=it;var ct=it;o.a.render(r.a.createElement(R.a,{store:ct},r.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,a){e.exports={main:"ProfileInfo_main__1h5Jx",avatar:"ProfileInfo_avatar__2xs63",description:"ProfileInfo_description__3hvaE",name:"ProfileInfo_name__2AK9J",changeAvatar:"ProfileInfo_changeAvatar__2UytI",avatarFull:"ProfileInfo_avatarFull__1DW42"}},51:function(e,t,a){e.exports={main:"Header_main__omlgk",logo:"Header_logo__3tmky",login:"Header_login__2JO7h",search:"Header_search__2pvlk"}},52:function(e,t,a){e.exports={main:"MyPosts_main__1Tj2A",posts:"MyPosts_posts__JOwul",post:"MyPosts_post__3RuiR",message:"MyPosts_message__1Rk0z",noPosts:"MyPosts_noPosts__2-vzP"}},53:function(e,t,a){e.exports={main:"Login_main__mj7iB",formOut:"Login_formOut__LOz4z",logo:"Login_logo__1Oa6F",errorMessage:"Login_errorMessage__3bz4A"}},68:function(e,t,a){e.exports={status:"Status_status__tshw6",editStatus:"Status_editStatus__1jgzY"}},69:function(e,t,a){e.exports={main:"Dialogs_main__7yWJw",users:"Dialogs_users__3yUjH",dialogs:"Dialogs_dialogs__29gAC"}},89:function(e,t,a){e.exports={messageError:"InputControl_messageError__fHQPv",error:"InputControl_error__3t18B"}}},[[162,1,2]]]);
//# sourceMappingURL=main.d3354391.chunk.js.map