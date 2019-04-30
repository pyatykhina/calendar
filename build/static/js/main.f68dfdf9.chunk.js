(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/main.87e9f354.svg"},function(e,t,a){e.exports=a.p+"static/media/diary.0a561c51.svg"},function(e,t,a){e.exports=a.p+"static/media/chat.a51fa3ce.svg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/logout.0749877d.svg"},function(e,t,a){e.exports=a.p+"static/media/add.9ba568b5.svg"},,function(e,t,a){e.exports=a(38)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),i=a.n(s),m=(a(28),a(41)),l=a(44),c=a(43),o=a(4),d=a(5),u=a(7),h=a(6),_=a(8),p=a(40),E=(a(29),a(30),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).id="modal",a.div=document.createElement("div"),a.div.id=a.id,document.body.insertAdjacentElement("beforeend",a.div),a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"componentWillUnmount",value:function(){this.div.parentNode.removeChild(this.div)}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.children;return t&&i.a.createPortal(a,document.getElementById(this.id))}}]),t}(n.Component)),f=a(11),g=a.n(f),v=a(12),N=a.n(v),y=a(13),b=a.n(y),M=a(19),S=a.n(M),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",isShowModal:!1,name:"",description:"",projects:[]},a.saveData=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},a.loadData=function(e){return JSON.parse(window.localStorage.getItem(e))},a.logout=function(){window.localStorage.removeItem("userID"),window.localStorage.removeItem("username")},a.removeMember=function(e,t){fetch("/api/removeMember",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectID:e,memberID:t})}).then(function(e){return 200===e.status&&a.fetchProjects()})},a.fetchProjects=function(){fetch("/api/getProjects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:a.loadData("userID")})}).then(function(e){return 200!==e.status?Promise.reject(e):e.json()}).then(function(e){return a.setState({projects:e})})},a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){new URLSearchParams(this.props.location.search).get("userID")&&this.saveData("userID",new URLSearchParams(this.props.location.search).get("userID")),new URLSearchParams(this.props.location.search).get("username")&&this.saveData("username",new URLSearchParams(this.props.location.search).get("username")),this.setState({username:this.loadData("username")}),new URLSearchParams(this.props.location.search).get("modal-msg")&&this.setState({isShowModal:!0}),this.fetchProjects()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},r.a.createElement(p.a,{to:"/main",className:"header__logo-link"},"Calendar")),r.a.createElement("button",{className:"header__add-button",onClick:function(){return e.setState({isShowModal:!0})}},"Create a new project"),r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"header__user"},this.state.username),r.a.createElement("form",{action:"/api/logout",method:"POST"},r.a.createElement("button",{className:"nav__item-logout",type:"submit",onClick:this.logout},r.a.createElement("img",{src:S.a,alt:"logout",className:"nav__item"}))),r.a.createElement(p.a,{to:"/main"},r.a.createElement("img",{src:g.a,alt:"main",className:"nav__item"})),r.a.createElement(p.a,{to:"/diary"},r.a.createElement("img",{src:N.a,alt:"diary",className:"nav__item"})),r.a.createElement(p.a,{to:"/chat"},r.a.createElement("img",{src:b.a,alt:"chat",className:"nav__item"})))),r.a.createElement("div",{className:"main"},r.a.createElement("ul",{className:"main__projects"},this.state.projects.map(function(t){return r.a.createElement("li",{className:"main__projects-item"},r.a.createElement("header",{className:"main__projects-header",style:{backgroundColor:t.color}},r.a.createElement("h2",{className:"main__projects-header-name"},t.name)),r.a.createElement("div",{className:"main__projects-main"},r.a.createElement("p",{className:"main__projects-description"},t.description),r.a.createElement("h3",{className:"main__projects-subtitle"},"Members: "),r.a.createElement("ul",{className:"main__projects-members"},t.members.map(function(a){return r.a.createElement("li",{className:"main__projects-members-item"},r.a.createElement("div",{className:"main__projects-members-item-user"},r.a.createElement("div",{className:"main__projects-members-item-user-name"},a.name),r.a.createElement("div",{className:"main__projects-members-item-user-email"},a.email)),r.a.createElement("button",{className:"main__projects-members-item-close",onClick:function(){return e.removeMember(t._id,a._id)}},"\u2716"))})),r.a.createElement("h3",{className:"main__projects-subtitle"},"Add a member: "),r.a.createElement("div",{className:"main__projects-msg"},new URLSearchParams(e.props.location.search).get("proj-msg")),r.a.createElement("form",{action:"/api/addMember",method:"POST",className:"main__projects-form"},r.a.createElement("input",{name:"email",type:"text",className:"main__projects-form-item",placeholder:"Email"}),r.a.createElement("input",{name:"projectID",style:{display:"none"},value:t._id}),r.a.createElement("input",{type:"submit",className:"main__projects-form-button",value:"Add"}))))}))),this.state.isShowModal&&this.renderModal())}},{key:"renderModal",value:function(){var e=this;return r.a.createElement(E,{show:this.state.isShowModal},r.a.createElement("div",{className:"mainModal"},r.a.createElement("header",{className:"mainModal__header"},r.a.createElement("h2",{className:"mainModal__header-title"},"Create a new project"),r.a.createElement("button",{className:"mainModal__header-close",onClick:function(){return e.setState({isShowModal:!1})}},"\u2716")),r.a.createElement("div",{className:"mainModal__msg"},new URLSearchParams(this.props.location.search).get("modal-msg")),r.a.createElement("form",{action:"/api/createProject",method:"POST",className:"mainModal__form"},r.a.createElement("input",{name:"userID",style:{display:"none"},value:this.loadData("userID")}),r.a.createElement("input",{name:"name",type:"text",className:"mainModal__form-item",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})},placeholder:"Name"}),r.a.createElement("textarea",{name:"description",type:"text",className:"mainModal__form-item mainModal__form-item-textarea",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})},placeholder:"Description"}),r.a.createElement("input",{type:"submit",className:"mainModal__form-button",value:"Create"}))))}}]),t}(n.Component),w=(a(33),a(9)),k=a.n(w),O=a(20),P=a.n(O),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isShowModal:!1,title:"",timeStart:k()(),timeEnd:k()(),project:"",projects:[],tasks:[],days:[],numberOfWeek:""},a.loadData=function(e){return JSON.parse(window.localStorage.getItem(e))},a.fetchProjects=function(){fetch("/api/getProjects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:a.loadData("userID")})}).then(function(e){return 200!==e.status?Promise.reject(e):e.json()}).then(function(e){a.setState({projects:e}),a.fetchTasks()})},a.fetchTasks=function(){var e=[];a.state.projects.map(function(t){return e.push(t._id)}),fetch("/api/getTasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({projectsID:e})}).then(function(e){return 200!==e.status?Promise.reject(e):e.json()}).then(function(e){return a.setState({tasks:e})})},a.getDays=function(){for(var e=k()().add("M",-6).isoWeekday(1),t=k()().add("M",6).isoWeekday(7);e<=t;)a.state.days.push(k()(e)),e=k()(e).add("day",1);a.setState({numberOfWeek:a.state.days[182].format("W")})},a.slideToLeft=function(){a.setState({numberOfWeek:a.state.numberOfWeek-1});var e=document.getElementsByClassName("diary__grid-column"),t=!0,n=!1,r=void 0;try{for(var s,i=e[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var m=s.value;m.style.right="calc(".concat(m.style.right," - 100%)")}}catch(l){n=!0,r=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}},a.slideToRight=function(){a.setState({numberOfWeek:a.state.numberOfWeek- -1});var e=document.getElementsByClassName("diary__grid-column"),t=!0,n=!1,r=void 0;try{for(var s,i=e[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var m=s.value;m.style.right="calc(".concat(m.style.right," + 100%)")}}catch(l){n=!0,r=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}},a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchProjects(),this.getDays()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},r.a.createElement(p.a,{to:"/main",className:"header__logo-link"},"Calendar")),r.a.createElement("div",{className:"header__buttons"},r.a.createElement("button",{className:"header__buttons-button",onClick:this.slideToLeft},"\u2190"),r.a.createElement("h2",{className:"header__buttons-title"},"Week ",this.state.numberOfWeek),r.a.createElement("button",{className:"header__buttons-button",onClick:this.slideToRight},"\u2192")),r.a.createElement("nav",{className:"nav"},r.a.createElement("button",{className:"nav__item-add",onClick:function(){return e.setState({isShowModal:!0})}},r.a.createElement("img",{src:P.a,alt:"logout",className:"nav__item"})),r.a.createElement(p.a,{to:"/main"},r.a.createElement("img",{src:g.a,alt:"main",className:"nav__item"})),r.a.createElement(p.a,{to:"/diary"},r.a.createElement("img",{src:N.a,alt:"diary",className:"nav__item"})),r.a.createElement(p.a,{to:"/chat"},r.a.createElement("img",{src:b.a,alt:"chat",className:"nav__item"})))),r.a.createElement("main",{className:"diary"},r.a.createElement("ul",{className:"diary__time"},r.a.createElement("li",{className:"diary__time-item"},"12 AM"),r.a.createElement("li",{className:"diary__time-item"},"1 AM"),r.a.createElement("li",{className:"diary__time-item"},"2 AM"),r.a.createElement("li",{className:"diary__time-item"},"3 AM"),r.a.createElement("li",{className:"diary__time-item"},"4 AM"),r.a.createElement("li",{className:"diary__time-item"},"5 AM"),r.a.createElement("li",{className:"diary__time-item"},"6 AM"),r.a.createElement("li",{className:"diary__time-item"},"7 AM"),r.a.createElement("li",{className:"diary__time-item"},"8 AM"),r.a.createElement("li",{className:"diary__time-item"},"9 AM"),r.a.createElement("li",{className:"diary__time-item"},"10 AM"),r.a.createElement("li",{className:"diary__time-item"},"11 AM"),r.a.createElement("li",{className:"diary__time-item"},"12 PM"),r.a.createElement("li",{className:"diary__time-item"},"1 PM"),r.a.createElement("li",{className:"diary__time-item"},"2 PM"),r.a.createElement("li",{className:"diary__time-item"},"3 PM"),r.a.createElement("li",{className:"diary__time-item"},"4 PM"),r.a.createElement("li",{className:"diary__time-item"},"5 PM"),r.a.createElement("li",{className:"diary__time-item"},"6 PM"),r.a.createElement("li",{className:"diary__time-item"},"7 PM"),r.a.createElement("li",{className:"diary__time-item"},"8 PM"),r.a.createElement("li",{className:"diary__time-item"},"9 PM"),r.a.createElement("li",{className:"diary__time-item"},"10 PM"),r.a.createElement("li",{className:"diary__time-item"},"11 PM")),r.a.createElement("ul",{className:"diary__grid"},this.state.days.map(function(t){return r.a.createElement("li",{className:"diary__grid-column",style:{right:"2600%"}},r.a.createElement("h3",{className:"diary__grid-title"},"".concat(t.format("MMM")," ").concat(t.format("DD"),",    ").concat(t.format("ddd"))),r.a.createElement("div",{className:"diary__grid-tasks"},e.state.tasks.map(function(e){return e.timeStart.split("T")[0]===t.format("YYYY-MM-DD")&&r.a.createElement("div",{className:"diary__grid-tasks-task",style:{backgroundColor:e.project.color,top:"".concat(51*e.timeStart.split("T")[1].split(":")[0]+e.timeStart.split("T")[1].split(":")[1]/60*51,"px"),height:"".concat(51*e.timeEnd.split("T")[1].split(":")[0]-51*e.timeStart.split("T")[1].split(":")[0]+e.timeEnd.split("T")[1].split(":")[1]/60*51-e.timeStart.split("T")[1].split(":")[1]/60*51,"px")}},e.title)})))})),this.state.isShowModal&&this.renderModal()))}},{key:"renderModal",value:function(){var e=this;return r.a.createElement(E,{show:this.state.isShowModal},r.a.createElement("div",{className:"addModal"},r.a.createElement("header",{className:"addModal__header"},r.a.createElement("h2",{className:"addModal__header-title"},"Add a task"),r.a.createElement("button",{className:"addModal__header-close",onClick:function(){return e.setState({isShowModal:!1})}},"\u2716")),r.a.createElement("div",{className:"addModal__msg"},new URLSearchParams(this.props.location.search).get("modal-msg")),r.a.createElement("form",{action:"/api/addTask",method:"POST",className:"addModal__form"},r.a.createElement("input",{name:"title",type:"text",className:"addModal__form-item",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})},placeholder:"Title"}),r.a.createElement("div",{className:"addModal__form-time"},r.a.createElement("input",{name:"timeStart",type:"datetime-local",className:"addModal__form-time-item",value:this.state.timeStart.format("YYYY-MM-DDTHH:mm"),onChange:function(t){return e.setState({timeStart:k()(t.target.value)})}}),r.a.createElement("b",null,"\u2014"),r.a.createElement("input",{name:"timeEnd",type:"datetime-local",className:"addModal__form-time-item",value:this.state.timeEnd.format("YYYY-MM-DDTHH:mm"),onChange:function(t){return e.setState({timeEnd:k()(t.target.value)})}})),r.a.createElement("select",{name:"project",className:"addModal__form-item",value:this.state.project,onChange:function(t){return e.setState({project:t.target.value})},placeholder:"Project"},this.state.projects.map(function(e){return r.a.createElement("option",{value:e._id},e.name)})),r.a.createElement("input",{type:"submit",className:"addModal__form-button",value:"Add"}))))}}]),t}(n.Component),D=a(21),T=(a(35),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={messages:[],messageInput:""},a.changeInputMessage=function(e){a.setState({messageInput:e.target.value})},a.sendMessageOnEnter=function(e){"Enter"===e.key&&a.state.messageInput&&a.setState(function(e){return{messages:[].concat(Object(D.a)(e.messages),[{text:e.messageInput}]),messageInput:""}})},a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.messages&&this.messages.scrollIntoView()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},r.a.createElement(p.a,{to:"/main",className:"header__logo-link"},"Calendar")),r.a.createElement("nav",{className:"nav"},r.a.createElement(p.a,{to:"/main"},r.a.createElement("img",{src:g.a,alt:"main",className:"nav__item"})),r.a.createElement(p.a,{to:"/diary"},r.a.createElement("img",{src:N.a,alt:"diary",className:"nav__item"})),r.a.createElement(p.a,{to:"/chat"},r.a.createElement("img",{src:b.a,alt:"chat",className:"nav__item"})))),r.a.createElement("main",{className:"chat"},r.a.createElement("div",{className:"chat__left"}),r.a.createElement("div",{className:"chat__right"},r.a.createElement("ul",{className:"chat__right-messages"},this.state.messages.map(function(e,t){return r.a.createElement("li",{key:t,className:"chat__right-messages-message"},e.text)}),r.a.createElement("div",{ref:function(t){e.messages=t}})),r.a.createElement("input",{placeholder:"Enter your message",className:"chat__right-input",value:this.state.messageInput,onChange:this.changeInputMessage,onKeyPress:this.sendMessageOnEnter}))))}}]),t}(n.Component)),I=a(42),A=(a(36),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={mode:"authorization",name:"",email:"",password:"",isAuthorized:""},a}return Object(_.a)(t,e),Object(d.a)(t,[{key:"loadData",value:function(e){return JSON.parse(window.localStorage.getItem(e))}},{key:"componentDidMount",value:function(){var e=this;this.loadData("userID")&&fetch("/api/isAuthorized",{method:"POST"}).then(function(t){200===t.status?e.setState({isAuthorized:!0}):e.setState({isAuthorized:!1})})}},{key:"render",value:function(){return this.state.isAuthorized?r.a.createElement(I.a,{to:"/main"}):this.renderForm()}},{key:"renderForm",value:function(){return"authorization"===this.state.mode?this.renderAuthorizationMode():this.renderRegistrationMode()}},{key:"renderAuthorizationMode",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},"Calendar")),r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__form"},r.a.createElement("h2",{className:"login__form-title"},r.a.createElement("button",{className:"login__form-title-item-active",onClick:function(){return e.setState({mode:"authorization"})}},"Authorization"),r.a.createElement("div",{className:"login__form-title-slash"},"/"),r.a.createElement("button",{className:"login__form-title-item",onClick:function(){return e.setState({mode:"registration"})}},"Registration")),r.a.createElement("div",{className:"login__msg"},new URLSearchParams(this.props.location.search).get("msg")),r.a.createElement("form",{action:"/api/auth",method:"POST",className:"login__form-main"},r.a.createElement("input",{name:"email",type:"text",className:"login__form-main-item",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("input",{name:"password",type:"password",className:"login__form-main-item",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("input",{type:"submit",className:"login__form-main-button",value:"Log in"})))))}},{key:"renderRegistrationMode",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__logo"},"Calendar")),r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"login__form"},r.a.createElement("h2",{className:"login__form-title"},r.a.createElement("button",{className:"login__form-title-item",onClick:function(){return e.setState({mode:"authorization"})}},"Authorization"),r.a.createElement("div",{className:"login__form-title-slash"},"/"),r.a.createElement("button",{className:"login__form-title-item-active",onClick:function(){return e.setState({mode:"registration"})}},"Registration")),r.a.createElement("div",{className:"login__msg"},new URLSearchParams(this.props.location.search).get("msg")),r.a.createElement("form",{action:"/api/reg",method:"POST",className:"login__form-main"},r.a.createElement("input",{name:"name",type:"text",className:"login__form-main-item",placeholder:"Name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),r.a.createElement("input",{name:"email",type:"text",className:"login__form-main-item",placeholder:"Email",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("input",{name:"password",type:"password",className:"login__form-main-item",placeholder:"Password",value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("input",{type:"submit",className:"login__form-main-button",value:"Register"})))))}}]),t}(n.Component)),x=function(){return r.a.createElement("div",null,"404 Not found")};i.a.render(r.a.createElement(function(){return r.a.createElement(m.a,null,r.a.createElement(l.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:A}),r.a.createElement(c.a,{path:"/main",component:j}),r.a.createElement(c.a,{path:"/diary",component:C}),r.a.createElement(c.a,{path:"/chat",component:T}),r.a.createElement(c.a,{path:"*",component:x})))},null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.f68dfdf9.chunk.js.map