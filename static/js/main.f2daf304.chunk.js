(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{132:function(e,t,s){},133:function(e,t,s){},15:function(e,t,s){e.exports={all:"Users_all__WLH-d",img:"Users_img__1r7mR",first:"Users_first__3uvuM",second:"Users_second__3wDZh",status:"Users_status__1TqPX",fullName:"Users_fullName__3UshI",third:"Users_third__2tQFm",country:"Users_country__35kZ8",city:"Users_city__Je4_l",pages:"Users_pages__2DvP8",selected_pages:"Users_selected_pages__YRvHM",preloader:"Users_preloader__26UuL"}},20:function(e,t,s){e.exports={content:"Profile_content__28Ks9",description:"Profile_description__29nkE",name:"Profile_name__2Oo5L",profilePhoto:"Profile_profilePhoto__1BbE8",content__myposts:"Profile_content__myposts__3Qixj",content__img:"Profile_content__img__2BW7X",content__photo:"Profile_content__photo__AclxU",content__post:"Profile_content__post__1ckhg",content__OtherPosts:"Profile_content__OtherPosts__3EWen"}},241:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),a=s(47),c=s.n(a),o=s(22),i=s(102),l=s(2),u=s(101),A=s.n(u).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"d1f936df-146d-4493-8fec-3465cd184491"}}),d=function(e){return A.get("users?page=".concat(e,"&count=10")).then((function(e){return e.data}))},j=function(){return A.get("auth/me").then((function(e){return e.data}))},h=function(e){return A.get("profile/".concat(e)).then((function(e){return e.data}))},p=function(e){return A.post("follow/".concat(e),{}).then((function(e){return e.data}))},g=function(e){return A.delete("follow/".concat(e)).then((function(e){return e.data}))},O=function(e){return A.get("profile/status/".concat(e)).then((function(e){return e.data}))},m=function(e){return A.put("profile/status",{status:e}).then((function(e){return e.data}))},b="ADD-POST",f="ON-CHANGE",x="SET_USERS_PROFILE",P="SET_STATUS",S={Posts:[{text:"Hello!"},{text:"YO YO YO!"}],NewPostText:"",profile:null,status:"No status"},N=function(e){return{type:P,status:e}},v=function(e){return function(t){return h(e).then((function(e){return t({type:x,profile:e})}))}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var s={text:e.NewPostText},n=Object(l.a)({},e);return n.Posts.push(s),n.NewPostText="",n;case f:var r=Object(l.a)({},e);return r.NewPostText=t.text,r;case x:var a=Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});return a;case P:var c=Object(l.a)(Object(l.a)({},e),{},{status:t.status?t.status:"----"});return c;default:return e}},y="ON-CHANGE-MESSAGE",w="SEND-MESSAGE",k={Dialogs:[{id:1,name:"Roman"},{id:2,name:"Petro"},{id:3,name:"Vasyl"},{id:4,name:"Bogdan"},{id:5,name:"D"}],Messages:[{id:1,message:"Hello world"},{id:2,message:"How are you?"},{id:3,message:"Tell me about IT-Incubator"},{id:4,message:"Call me please"},{id:5,message:"Thanks for reply :-)"}],NewMessageText:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var s=Object(l.a)({},e);return s.NewMessageText=t.text,s;case w:var n={id:6,message:e.NewMessageText},r=Object(l.a)({},e);return r.Messages.push(n),r.NewMessageText="",r;default:return e}},V=s(11),J={users:[],usersCount:0,currentPage:1,isFetching:!1,followProgress:!1,followInProgress:[]},G=function(e){return{type:"CHANGE-FOLLOW",id:e}},I=function(e){return{type:"SET-USERS",users:e}},E=function(e){return{type:"SET-USERS-COUNT",usersCount:e}},U=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},R=function(e,t){return{type:"FOLLOW-IN-PROGRESS",isFetching:e,userId:t}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-FOLLOW":var s=Object(V.a)(e.users);s=s.map((function(e){return e.id===t.id?(e.followed=!e.followed,e):e}));var n=Object(l.a)(Object(l.a)({},e),{},{users:Object(V.a)(s)});return n;case"SET-USERS":var r=Object(l.a)(Object(l.a)({},e),{},{users:Object(V.a)(t.users)});return r;case"SET-USERS-COUNT":var a=Object(l.a)(Object(l.a)({},e),{},{usersCount:t.usersCount});return a;case"SET-CURRENT-PAGE":var c=Object(l.a)(Object(l.a)({},e),{},{currentPage:t.NewValue});return c;case"TOGGLE-IS-FETCHING":var o=Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});return o;case"FOLLOW-IN-PROGRESS":return e.followProgress?Object(l.a)(Object(l.a)({},e),{},{followProgress:t.isFetching,followInProgress:e.followInProgress.filter((function(e){return e!==t.userId}))}):Object(l.a)(Object(l.a)({},e),{},{followProgress:t.isFetching,followInProgress:[].concat(Object(V.a)(e.followInProgress),[t.userId])});default:return e}},D="SET_USER_DATA",Q={userId:null,email:null,login:null,isAuth:!1},q=function(){return function(e){j().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,r=s.email,a=s.login;e(function(e,t,s){return{type:D,data:{userId:e,email:t,login:s}}}(n,r,a))}}))}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.data),{},{isAuth:!0});default:return e}},F=Object(o.b)({profilePage:M,dialogsPage:T,usersPage:L,auth:Z}),C=Object(o.d)(F,Object(o.a)(i.a)),K=(s(132),s(12)),X=s(7),B=(s(133),s(67)),W=s.n(B),H=s(1),Y=function(){return Object(H.jsx)("div",{className:W.a.sidebars,children:Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:W.a.sidebars__items,children:[Object(H.jsx)("div",{children:Object(H.jsx)(K.b,{to:"/Profile",children:"My profile"})}),Object(H.jsx)("div",{children:Object(H.jsx)(K.b,{to:"/News",children:"News"})}),Object(H.jsx)("div",{children:Object(H.jsx)(K.b,{to:"/Messages",children:"Messages"})}),Object(H.jsx)("div",{children:Object(H.jsx)(K.b,{to:"/Users",children:"Users"})}),Object(H.jsx)("div",{children:Object(H.jsx)(K.b,{to:"/About",children:"About us"})})]})})})},z=function(){return Object(H.jsx)("div",{children:"News"})},_=s(3),$=s(4),ee=s(8),te=s(9),se=s(20),ne=s.n(se),re=s(15),ae=s.n(re),ce=s.p+"static/media/preloader.9dd581ae.gif",oe=function(){return Object(H.jsxs)("div",{className:ae.a.preloader,children:[Object(H.jsx)("img",{src:ce}),"\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u043f\u0456\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0438 VPN!"]})},ie=function(e){Object(ee.a)(s,e);var t=Object(te.a)(s);function s(){var e;Object(_.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1,status:e.props.status},e.activeEditMode=function(){e.setState({editMode:!0})},e.deActiveEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object($.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(H.jsxs)("div",{className:ne.a.name,children:[Object(H.jsxs)("div",{children:[" ",this.props.fullName]}),!this.state.editMode&&Object(H.jsx)("div",{children:Object(H.jsx)("span",{onDoubleClick:this.activeEditMode,children:this.props.status})}),this.state.editMode&&Object(H.jsx)("div",{children:Object(H.jsx)("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deActiveEditMode,value:this.state.status,type:"text"})})]})}}]),s}(r.a.Component),le="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUSGBgYGBgYGBgaFRgYGBgYGBoZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjQkISE0NDQ0MTQ0NDQ0NDExNDQ0NDQ0NDQ0NDE0NDQxNDQ0NDE0NDQ0NDQ0MTQ0MTE0PzQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAECAwQGBwj/xABAEAABAwIEAwUGAwYDCQAAAAABAAIRAwQSITFBBVFhBiJxgZETMqGx0fAUQsEHI1JicoIVM+EWJDRDY5KissL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQADAQACAgICAgMAAAAAAAAAAQIRAyESMUFRBDITIjNCcf/aAAwDAQACEQMRAD8A9PCdMouqAKjMmnCyuvWjdVniLOaQ8ZuSWNt+w7q9tZp0KAxlkp1GU6YhJJSmQApSSVF1dspjE97WDmTHoN0hrv0XJLmrvthSGVNj3nme4345/BD39qLh2jKbR4F3zKh3K+TVcFv4O0JUHPXKUe0VX8zaZ8AQtlPjTXe8C0+o9ULkl/IPhtfAZdVVD66HvulQ6uq8iVAU/EJxXQj2hTiql5FeAXFZSFVCRWT/AIhPyF4hf2iQchTblXMuUeRPiwimKytuFY2qnosLVAp8SYoEMkpJI0Cm54mBkENq3jnbrKkobNplIm555qJKZOkWPJVjLhw0KqSQJ4FbXihGTkXo3LXaFcmVZSuHNORVJkVC+DrlVdXTKbS97mtaNz8hzPRArjtGykyX5ujJo3PXkFwvFeMVLh+J5090bNHJo/VN0kEcNU8Ok4z2xcSWUBh/nPvem3zXNOqPqHG9znE7uMrJbsLij1haTqubktnpcX48yjPa2hdqitOyjKFtoW4A0W6mwLndNmzSBlO06KYtOSKNpJFnIRKXZDSBeDClK2VaULM9kLSOVrpmV8KrtEJSlMmXUuzkfXTHLkxcmTEJiJBykHlQTFAF7axWilcIfKk0oJaDVKqrw5B6NVb6VRWmZUsNMpKGJJMkAgp5VZeEvaDmEsNyxIKvGDuEgQN0YBYks77pg1cFV/iLP4gjANqqurkMaXHbQczyVbLxh0cEF41dY3QD3W5eJ3SY5WswXNw6o4lx1P2E1KlJUFqsm5+Kwqjv4ozDXbUQDkugsqWWQyQu0p5j78l0NszJc9PTdvCbGFaKTFJjPBXtYkkQ6E0JOarWsTvaqwnTI9iy1KeyJmmqXsUuQVAarRP3zVIKMFmSGXFOCteG8eMw5o3tFUpKKaV14cZNRlMmRgEpTEppTSjALGvhaqNZYQpNfCYPsK+1SWH2qSZGAUu6qL6gaJJhZLy9bTEkrleIcWe8wDAVGwbvePhmTMyhbu0FUnM5ckGLk2JBJ0dvxAP1OfUrUuSxxoiVjxIjuv8AVAsDgMJqjlXjBAI3UC+VlZrxIuatto3vBY7UyURtjmY5rno9GfQesqecoxQZlmhVmYAGsRMIhRJBMmRlA5ee6yB9hKiyPotDQNwfVY2OIVzaxVJoypNmwNHVRLR9hZ33EBVCuSm6RPgzYGrPWaFaHqDxKmuwXRnwZLHXZK3u0WWqFPoGBniDCip3OTyqiV3w9lHFSxkk0qJcmxKiSUpSoymxIAlKQKjKaUAWYklXKSAw8xubpz3S4+SzlQlKU9KHJUSkmKNEPKSZRJRoBbhdckEE5D9VuLjoNdVz1rclriARnAzMSZ0Ru3rA55ToRPqMllRvw4b6FUjP1RDh1WTJyz5+SC1Hx5qgcZZTy7zndIEeZWXi36OqrU+zvrTilPFhLgOcx6I1QuGPPdc3bdeQ1u1GLVkx/P8AQKVHtbhzDCDuQ7XxlL+JmL/Ik9vYAQtFJgIXknCu3wbk4kbd6YHmJXecL48+q0PYym8cxVPp7hScOfY1yqvR0DrUFTbbABDKfEaxd/kDL/q/ViGcS7ZU6Mhwa0jXvggHlJACUyn6CqpezpX4W6kDfVZKl0zOHtPnovOLztlSqvn2rsIg4Q0mY3JgLRR4/QdmajyJH5CPgPmm4r6M/wCafs7v24cMiDseioqvyQfh1/QMNDzJ0D3Rrpk4fJbzLZBIPLzWdS17NJua9A65d3yqiU1V3fIGwE+aaV2cX6I5r/ZjkpkpTStCcHlIqJSlAYSlKVGU0oFhKUlGUkAeUkpgkU0oGTTJiUyBCWizDZLnCQ0THVZ0Q4NBeQdx8iFNejTiSdpM0UCxwxNDZ8BI6JVGjECMpPodkrm3wEvblmcQ88ilSGJkCZ28QsEzq5YSpGW/u3ta4OYWiYDtiNyOuS50lHeNNeGNDjOc89QUCIWk+jk5m97GBTt+8kysptk/PwCsxLmUgSQY6GcvNdJ2G4w+i97WguDsIDZyxEwM9lymJdT2DoYq7SRvMeGii3/V6bcEurSR6LxXiVyy3e51EMDoaXtqh2GebcIPSRzXi93cOe5znEkknXYTovf762bVovpnIOYR1B/KfUBfP1em4Oe0iC0memeiz4Gmn9mv5UtNd9EGOVvtjlB9D8FQpNiDMztH6rc4wtYXTnDB3j01+C7Ds32lc0OpO75wkskiREZFx2gz5LgrQTIz9dl0HZy3abmkwiQS7EJOgY86jPUBReNdlzqaa9na2VOqWmq7A4vOrdO6S2J3iNVF15Gq13NN7KdJlLuML5dlJOJxdEnTMoDePl7/AOoqeK/Lr6Onl4/GVX2FG3YVrbgHdAQ9SbUIW5z6dAHqUoPRu1vpXIKB6aVGUwcmlAyUpJpSQI8rJTJymKZJIlMSpKMoAUqy1rYHsd/MAfA5KtzoCzG4kgAbj5qX6HNeLTOzdQlsEe8Pmh1GGnDy+q2ue97BhMFsHzH5UPLhjP8AV8Fgj0eZp40Nxe3xMy+yMx+q5hw8l2zIMtOhVVTss+v3mubpAJMdGzlmBCpUl7Obk4nXcnGQpsC7Kj+zm6cc3UW9S5x+AC6ThP7NKTCHV6jqn8g7rJ6kZkT4IfJP2ZLhtv0eaWPDXVDMd0au28PFdp2boBldkaDVF+Oimz93SaABkA0AAAcoUOydvieZ0UVTpHocXDPHn2zu3s7pK8n/AGh8DNOp7Zg7lTvOjZ+/19eS9gNPuhsrFXsWVWupVQC0/DlB2KxmnNaTyyrWM+diE0L0bj/7M6zCX2xbVaZOGQ1w6AHIrmP9lLsPLTb1O7uQWtPgXRK6laZ59cbQJsD3wu57F2hL31T7jGYQdi90H4NH/msHA+xV1UfLqRpNGWN4AAzzIbMuPw6rv6nD2W9FtFnuyGk7uc90OceplZ8lr0XEP2y+8dhpsc7RrQ8+Md0epXEOcSSeZldN2wvD3KbYDYkx0yb+q5aU+GcW/Zf5F+TU/RIlKVGUpW2nOWAq6lUhZpT4kaAaoVpC0yg1CtCI0qkpaUjRKShKSNGeYJglKQK1IHTJ5TEoDCNTQocDBRIofUEEqaQmdrw65a9gdpLRPiNVkqNh5J0Jn1XNWt65nunLkdEX4beOqOdijINj6fBZOTqXMqlL5DDG5HVdXwN8MBOn6oBQb7o5558joi9w8MDGjUgnpsB81nXaw6JOttHlxyUuLV3Bjg3lnGv39Vgp1ixga0HERKy17twBBdJ3HLLTRYymy/JJnLcQucBmCZGwJPwRLsXxOmX4SQCdJy8lVc2uMktG05HQb/fgsdLsy4vD2Pc1wh2XvR1bHQrbE0K+TvUesOrsExyyM7oW+7GISypDsg7D3Z9Z+CCW1d7A0vMu92dv6gPNbWVHDPEeRzmOg5D6rJozTDVbEwB7ZjIvb8yFqp3Ac2eY0QmnxSIaRMgQdemfLRTt34Xxs4SB/CdxPxUeiumjbVd3TBXP3ILnsB3cD5AyjFTPcx0Qa+qYHteXEAAydNAY+SF2zOn8nKcbucdZ52BwjwGSHp3vxEk7kn1KguxLFhx09ekpTyoJAqhE5SlRJTIAsBWy2rwsAKk1ykYb/EJIP7YpIGccUySaVuIkEpSCZAhLDcarcsVyM0qEylEOD1MLyJiR8vsoerbd0PaeoUP0EvGjvrOp7uWgjr0OaJX78T6W/djnGeq56wuZwzGXXnluidarD2PIBAjUmPh4LFo71XR29rQLiZnMNjyC5Xi1N9Ophc18mSHbGdANpzmF13Dq4cxpBE6SCJicvks/aO1Y5pa9rXMcM5GjtfEHRZT0+y5XkwNaXDgcXsK8kxOD82eWSLU7hky6nUbtnkRlGjhG6wcOtaTYDa13SIIIis59NpiC8sdMk+YXW2LXgS2+oPxH/mUmk6QB3Ht5ct1t4S+0yaqo9yD/APdjhc1zspyiSfGcufqoPdSBkh4EZS0RHkideroH1LNx3wWznuy/vIEoHdgucS0NDCO9+6YzvA5YIkga6k+SipS+SuPb/wBX/wBNVOlTfGB7SRmRInnELdTZ32jkZjrBnfqhvCOH02GW02TmcUDF/wBwRqmIJcYgbn0WTXZNz410QeIJ5b/Rcv2qf+7/ALh85C6GrUHez1357Lje1N1JazcEuI5bJ8c7SMbrJYASTApSuvDl0cJJpSRgaOkmlJGBo8p5UUkYGk5SUEkYGnKlRTlMVppQ4KdRSRoh1TcU5zVqSTAHlsKVL3h4hXXISsmS9vqpYJdpBOzuiDhJymTkug9uHsEETt/LnkSR4Ln7q1PvN1Ga1WNyMpjMdMo81n7OlbLxnXdneIfkxTyGc76D0XWXb8bC3flqctV5nwy5DKvegTEfrB8Ml3nDbgPyiBpuY5SDusqnOzWK7wHNZLy0OEtyIJ0/0Rqzdh95ukZyIG6hccPaTLhnnB+/L1UGWmE4mzGQ89Brvrmknp1fytTgXo3jBmCwzyIPLVKs0PdJI6ActdFlpWWPJ3OcgRllGaKWduxoAAg5T1RWmL5Xukg0MGEAZ9ddvVZ7ytlg8Onj9+HNX1XCZBGpGuuunJAbm7BdiJEAa6kbwT4AqcMKonxW+axhLjhwtmcshoVwL7o1XF5306DYIf2q42az8LCSxpzzPedufBV8MvGuGGYPL6Lp448Vpy3XkwnKdRlKVoQOEpUZSLkAPiSlQxKJegC3EmxKkvV1ESgB8SZafY9EyBajkCmTlRKZoMpKKkgQpSVbqoCodUJy0S0TYqz5PgruHHvjqssKy3fhc08iEq9Dh5SZ1LG5rNe2Ud5s56gLawSJWikJETnssEz0nKpHPMqHUEmMx/qfJdTwTihdIEyIOknLeI8c+iCX9kQcTRM6j6KmzrOY6WmD8p6eKp4znaqWem/4hIgjQeuRIyHVPZ3Di4kwJ90Z55fPX0XL2nEJaCcRjCCcjAO7d+WyKsvMRBBHePMiNCPIwRzyUeOGi5V6Z2tu8wTLczGZmJ2HoVnqNc0d2Zz9ARIGk5IZRuR/F3RBmcticvGPVSZxQHIAmC4GP4gcnephLNM3aRZxa9wEkB3ugjPUiIAnTx8VzXF8ZtqjmTiLSQAO8SYJy5CSEQFL2r8biSPd9JJyOxjXqtNzTOEtZkcJjbNS6SM0nR4rQdCuc2MwjPaLhrcq9MEMfOWsOHvj1Qag6ciuqaTMblyErDikd158HfVFw4LknshabPiLmZHNvLkqJ06SVFxWKjxNjt4PVaBUB0IKBknOUHPUXOVT3JgyTnojw8ygz3rVZXOFJE16OlwhOh/48JKjHGceUlBzuiZoJQdDocvHmmezLNTDYTOSJdGR4TsyBPl6pnKThDR1KAZYGjCoYFazRRQxHXcEtzVpAg5junxC2ssXIZ2Nu8NQsOjxl/UNPgusrUSDoua/60elw26lGOnwsvAgief1QjiXAXtMmAQutsKRyhGzwwPbDoPlz6qfIqtZ5YzhdYHux4/Vb6FlXDh3QSeTiM8s/gF244T7N0tGJu4OR/1ROnYyAcHwGSl2zKo04OiHsIa5lSN85GumWZy580YsabySDptGsHQGAPuUcu+FPcMsMDmlZ2JA7xJI2G/mpdNiXGkVUqAaAQBMYQY/RVXfdDjya4/AorUp6ZDLQfog/H6gZQqv5MdHiQQAo9svMQBt7D2nD/dBJa94O4GMkR5FeauZheRyML2nhVpht2MLdKQB6EtEryTjdvgqHxI9DC6eJ9sy5Z2d+jLUbIWUhbG6KmoxdJxaZ3BJjyNCQncExSKNDL14/NK0M4j/ABBDkkD0J/imndIVOSGqTHkIAI/iSksntEkAaXUio4YWgFSVEaZpUHBXmmNslF1IoGDH6rRcthrVQWnFBG61XQ7vgkD9jUM2pPCjZu1Cue1AFtnWLHNc0wWkEeIXqtnctrU2vbo4Z9DuPVeR0yuj7McXNu5xONzCBiYADvBcPATos+SfJG/BfjWfZ3Vt3HdPkuosnAgLmmVWVGipSdiafXzGxRfhVbZcrR6DylqC76UqFsYyWwMkSqn00mZ6Qe8FQYwKZplTpDwSzQ+DHXbC5/jdMVHMojOXB7xyY1wmfGEa4tdNpMfUeYDASfIShHZ6i5zTc1MWOsA6CIDGZ4GDyzPUlCXyJ99G4OHI5ggRtkvJe1tGHv6PPoV6teMBjIg4hoVxPbPhsgvBnFkct9iq46xleGy19o4OnoneFCmreq7keVSxmZzVWWrS5ipcEwTKUknJJFClJMnlIB5STJIALylKjKdUQPKkFUCpgoAdzQdRPkq6lLEIVgKdBQPZQcx0xI5jNaHBaVW9u6AMZRPhN17Oox5EgHvDm05OHoVgq009JyT7WDTaeo9Tq8GJAfbVCw+8G6sfPMeZ05prfiFWkZfRcY94Mzd1LW/nHhn0Q3sRxiR+Hec25sJ3GZLfLZdk1gcdM/BcVNy8o9WMudnoI8G41RrNGB7SdMMw4HkWnMFEiufqcIoPjHTaT/EJa8dQ9sEKqpwN1ItdRurpoDhFN7/aNdOQaMWe/NHT9Gblp9nRVSq6VZkxiGWvRAqtnxER+9phsgFz6XrkDnly3UuB2lxScXPfTeS4uDw2BBAEFpnkTM7ozH2Huf69g3j7XXdcW7A4UmFr6z4Ia4aim3nOp6Iv7aBhjIfCMkUNMYYOvND7igFFGkL7MVd8lo7upyJgGAfisl/ah9N7I1GXitb2gOAnUEDKZ89lKEvo0Xs8QuaRY97Ts4qLUa7ZWuC5dAgP7wQMFd8Vspnk88+NtEp5rLVKnVeqyFWmaRWmTuUUih0kydAhJJkkAGAolOkqJEnSSQAgpjRJJAx0z/dPmkkkBTV0PkqKadJIYc7Mf8VR/r/+SvXbfVJJcnP+x6X4n+M3O0Cp4z/lf3M/9wkkpj2XyhG69xng75qqgkkr5P2Mfx/0J1NVkrpJLJm8mB3vf2/qk9JJJ/Ba9nmn7RP85n9K5F6SS7OL9Eed+T/kZSUkklojnIOUCkkhgOk1JJAyaSSSAP/Z",ue=function(e){var t=r.a.createRef();return e.profile?Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:ne.a.content,children:[Object(H.jsx)("div",{className:ne.a.content__img,children:Object(H.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})}),Object(H.jsx)("div",{className:ne.a.profilePhoto,children:Object(H.jsx)("img",{src:e.profile.photos.large?e.profile.photos.large:le,alt:""})}),Object(H.jsx)("div",{className:ne.a.description,children:Object(H.jsx)(ie,{fullName:e.profile.fullName,aboutMe:e.profile.aboutMe,status:e.status,updateStatus:e.updateStatus})}),Object(H.jsxs)("div",{className:ne.a.content__myposts,children:[Object(H.jsx)("div",{className:ne.a.content__photo,children:Object(H.jsx)("img",{src:e.profile.photos.small?e.profile.photos.small:le,alt:"Photo"})}),Object(H.jsxs)("div",{className:ne.a.content__post,children:[Object(H.jsx)("textarea",{ref:t,onChange:function(){var s,n=null===(s=t.current)||void 0===s?void 0:s.value;n?e.OnChange(n):e.OnChange("")},placeholder:"What`s new",value:e.NewPostText}),Object(H.jsx)("button",{onClick:function(){e.AddPost()},className:ne.a.Add,children:"Add"})]}),e.Posts.map((function(t,s){return Object(H.jsxs)("div",{className:ne.a.content__OtherPosts,children:[Object(H.jsx)("div",{className:ne.a.content__photo,children:Object(H.jsx)("img",{src:e.profile.photos.small?e.profile.photos.small:le,alt:"Photo"})}),Object(H.jsx)("div",{children:t.text})]},s)}))]})]})}):Object(H.jsx)(oe,{})},Ae=s(21),de=function(e){Object(ee.a)(s,e);var t=Object(te.a)(s);function s(){return Object(_.a)(this,s),t.apply(this,arguments)}return Object($.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=23386),this.props.getUser(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(H.jsx)(ue,Object(l.a)({},this.props))}}]),s}(r.a.Component),je=Object(X.e)(de),he=Object(o.c)(Object(Ae.b)((function(e){return{NewPostText:e.profilePage.NewPostText,Posts:e.profilePage.Posts,profile:e.profilePage.profile,status:e.profilePage.status}}),(function(e){return{OnChange:function(t){e(function(e){return{type:f,text:e}}(t))},AddPost:function(){e({type:b})},getUser:function(t){var s=v(t);e(s)},getStatus:function(t){var s=function(e){return function(t){return O(e).then((function(e){t(N(e))}))}}(t);e(s)},updateStatus:function(t){var s=function(e){return function(t){return m(e).then((function(s){0===s.resultCode&&t(N(e))}))}}(t);e(s)}}})))(je),pe=s(53),ge=s.n(pe),Oe=function(e){var t=r.a.createRef();return Object(H.jsxs)("div",{className:ge.a.content,children:[Object(H.jsx)("div",{className:ge.a.content_name,children:e.Dialogs.map((function(e){return Object(H.jsx)("div",{children:Object(H.jsx)(K.b,{to:e.name,children:e.name})})}))}),Object(H.jsx)("div",{className:ge.a.content_message,children:e.Messages.map((function(e){return Object(H.jsx)("div",{children:e.message})}))}),Object(H.jsx)("textarea",{onChange:function(){var s,n=null===(s=t.current)||void 0===s?void 0:s.value;n?e.OnChangeMessage(n):e.OnChangeMessage("")},ref:t,value:e.NewMessageText,placeholder:"Enter text: "}),Object(H.jsx)("button",{onClick:function(){e.NewMessage()},children:" Send "})]})},me=Object(o.c)(Object(Ae.b)((function(e){return{NewMessageText:e.dialogsPage.NewMessageText,Messages:e.dialogsPage.Messages,Dialogs:e.dialogsPage.Dialogs}}),(function(e){return{OnChangeMessage:function(t){e({type:y,text:t})},NewMessage:function(){e({type:w})}}})))(Oe),be=function(e){for(var t=[],s=(Math.ceil(e.usersCount/10),1);s<11;s++)t[s]=s;return Object(H.jsxs)("div",{children:[e.users.map((function(t){return Object(H.jsxs)("div",{className:ae.a.all,children:[Object(H.jsxs)("div",{className:ae.a.first,children:[Object(H.jsx)(K.b,{to:"/Profile/"+t.id,children:Object(H.jsx)("img",{className:ae.a.img,src:null===t.photos.small?le:t.photos.small,alt:"Nagiev"})}),t.followed?Object(H.jsx)("button",{disabled:e.followInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)},children:"UnFollow"}):Object(H.jsx)("button",{disabled:e.followInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})]}),Object(H.jsxs)("div",{className:ae.a.second,children:[Object(H.jsx)("div",{className:ae.a.fullName,children:t.name}),Object(H.jsx)("div",{className:ae.a.status,children:t.status})]}),Object(H.jsxs)("div",{className:ae.a.third,children:[Object(H.jsx)("div",{className:ae.a.country}),Object(H.jsx)("div",{className:ae.a.city})]})]},t.id)})),Object(H.jsxs)("div",{className:ae.a.pages,children:[t.map((function(t){return Object(H.jsxs)("span",{onClick:function(){return e.setCurrentPage(t)},className:e.currentPage===t?ae.a.selected_pages:"",children:[t," "]})})),Object(H.jsx)("span",{children:"..."})]})]})},fe=function(e){Object(ee.a)(s,e);var t=Object(te.a)(s);function s(){var e;Object(_.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).setCurrentPage=function(t){e.props.setCurrentPage(t),e.props.getUsers(t)},e}return Object($.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage)}},{key:"render",value:function(){return Object(H.jsxs)(H.Fragment,{children:[this.props.isFetching?Object(H.jsx)(oe,{}):"",Object(H.jsx)(be,{usersCount:this.props.usersCount,users:this.props.users,changeFollow:this.props.changeFollow,setUsers:this.props.setUsers,setUsersCount:this.props.setUsersCount,setCurrentPage:this.setCurrentPage,currentPage:this.props.currentPage,toggleIsFetching:this.props.toggleIsFetching,followProgress:this.props.followProgress,toggleFollowInProgress:this.props.toggleFollowInProgress,followInProgress:this.props.followInProgress,follow:this.props.follow,unFollow:this.props.unFollow})]})}}]),s}(r.a.Component),xe=Object(o.c)(Object(Ae.b)((function(e){return{users:e.usersPage.users,usersCount:e.usersPage.usersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followProgress:e.usersPage.followProgress,followInProgress:e.usersPage.followInProgress}}),(function(e){return{changeFollow:function(t){e(G(t))},setUsers:function(t){e(I(t))},setUsersCount:function(t){e(E(t))},setCurrentPage:function(t){e(function(e){return{type:"SET-CURRENT-PAGE",NewValue:e}}(t))},toggleIsFetching:function(t){e(U(t))},toggleFollowInProgress:function(t,s){e(R(t,s))},getUsers:function(t){var s=function(e){return function(t){t(U(!0)),d(e).then((function(e){t(U(!1)),t(I(e.items)),t(E(e.totalCount))}))}}(t);e(s)},follow:function(t){var s,n=(s=t,function(e){e(R(!0,s)),p(s).then((function(t){0===t.resultCode&&e(G(s)),e(R(!1,s))}))});e(n)},unFollow:function(t){var s,n=(s=t,function(e){e(R(!0,s)),g(s).then((function(t){0===t.resultCode&&e(G(s)),e(R(!1,s))}))});e(n)}}})))(fe),Pe=s(35),Se=s.n(Pe),Ne=function(e){return Object(H.jsxs)("div",{className:Se.a.header,children:[Object(H.jsx)("div",{className:Se.a.header__img,children:Object(H.jsx)("img",{src:"data:image/png;base64,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",alt:"\u041d\u0435\u043c\u0430"})}),Object(H.jsx)("div",{className:Se.a.header__text,children:"\u0414\u043e \u043a\u0456\u043d\u0446\u044f 2022 \u0440\u043e\u043a\u0443 \u044f \u0431\u0443\u0434\u0443 \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0432 IT \u0441\u0444\u0435\u0440\u0456"}),Object(H.jsx)("div",{children:e.isAuth?Object(H.jsx)(K.b,{className:Se.a.loginBlock,to:"/login",children:e.login}):Object(H.jsx)(K.b,{className:Se.a.loginBlock,to:"/login",children:"Login"})})]})},ve=function(e){Object(ee.a)(s,e);var t=Object(te.a)(s);function s(){return Object(_.a)(this,s),t.apply(this,arguments)}return Object($.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuth()}},{key:"render",value:function(){return Object(H.jsx)(Ne,Object(l.a)({},this.props))}}]),s}(r.a.Component),Me=Object(Ae.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),(function(e){return{getAuth:function(){var t=q();e(t)}}}))(ve),ye=s(55),we=s(29),ke=s(54),Te=s.n(ke),Ve=ye.a().shape({name:ye.b().min(2,"Must be longer than 2 characters").max(20,"Nice try, nobody has a first name that long").required("Required"),password:ye.b().min(8,"Must be longer than 8 characters").required("Required")}),Je=function(){return Object(H.jsxs)("div",{className:Te.a.all,children:[Object(H.jsx)("h1",{children:"Login"}),Object(H.jsx)(we.d,{initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={email:""};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(e){console.log(e)},validationSchema:Ve,children:function(){return Object(H.jsxs)(we.c,{children:[Object(H.jsx)("div",{children:Object(H.jsx)(we.b,{type:"text",name:"email",placeholder:"E-mail"})}),Object(H.jsx)(we.a,{className:Te.a.error,name:"email",component:"div"}),Object(H.jsx)("div",{children:Object(H.jsx)(we.b,{type:"password",name:"password",placeholder:"Password"})}),Object(H.jsx)(we.a,{className:Te.a.error,name:"password",component:"div"}),Object(H.jsxs)("div",{children:[Object(H.jsx)(we.b,{type:"checkbox",name:"rememberMe"}),Object(H.jsx)("label",{htmlFor:"rememberMe",children:" Remember me "})]}),Object(H.jsx)("button",{type:"submit",children:"Login"})]})}})]})};var Ge=function(){return Object(H.jsx)(K.a,{children:Object(H.jsxs)("div",{className:"wrapper",children:[Object(H.jsx)(Me,{}),Object(H.jsx)(Y,{}),Object(H.jsxs)("div",{children:[Object(H.jsx)(X.a,{path:"/Profile/:userId?",render:function(){return Object(H.jsx)(he,{})}}),Object(H.jsx)(X.a,{path:"/Messages",render:function(){return Object(H.jsx)(me,{})}}),Object(H.jsx)(X.a,{path:"/News",render:function(){return Object(H.jsx)(z,{})}}),Object(H.jsx)(X.a,{path:"/Users",render:function(){return Object(H.jsx)(xe,{})}}),Object(H.jsx)(X.a,{path:"/login",render:function(){return Object(H.jsx)(Je,{})}})]})]})})},Ie=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,242)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),r(e),a(e),c(e)}))};c.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(Ae.a,{store:C,children:Object(H.jsx)(Ge,{})})}),document.getElementById("root")),Ie()},35:function(e,t,s){e.exports={header:"Header_header__2HsJp",header__text:"Header_header__text__3Pt4a",header__img:"Header_header__img__a49Fm",loginBlock:"Header_loginBlock__AvrKe"}},53:function(e,t,s){e.exports={content:"Dialogs_content__rsDVY"}},54:function(e,t,s){e.exports={all:"login_all__18GKH",error:"login_error___wCyU"}},67:function(e,t,s){e.exports={sidebars:"Sidebars_sidebars__1D-bE",sidebars__items:"Sidebars_sidebars__items__3gibH"}}},[[241,1,2]]]);
//# sourceMappingURL=main.f2daf304.chunk.js.map