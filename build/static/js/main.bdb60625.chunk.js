(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(26),s=n.n(c),i=n(15),o=n(4),a=n(1),l=function(){return Object(a.jsx)("a",{href:"https://drive.google.com/file/d/11hrYiCTcYSqAmt1URhHW0QmwyhxcBHC_/view?usp=sharing ",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("p",{className:"logo-p",children:"Rishabh Jain"})})},h=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsxs)("div",{className:"Main-Content slide-left",children:[Object(a.jsx)("h1",{className:"heading",children:"Let me Introduce myself "}),Object(a.jsxs)("p",{className:"About-paragraph",children:["Myself Rishabh Jain ,currently studying computer science at Guru Gobind Singh Indraprastha University, New Delhi, India. ",Object(a.jsx)("br",{}),"You can find me playing around the web and sometimes , you can catch me solving coding problems on different platforms such as"," ",Object(a.jsx)("a",{href:"https://www.codechef.com/users/rishabh_0906",target:"_blank",rel:"noreferrer",children:"codechef"}),",",Object(a.jsx)("a",{href:"https://codeforces.com/profile/rishabhj945",target:"_blank",rel:"noreferrer",children:"codeforces"}),",",Object(a.jsx)("a",{href:"https://leetcode.com/rishabh_0906/",target:"_blank",rel:"noreferrer",children:"leetcode"}),"and many more . I like to explore new technologies and always try to find something from nothing . I started competitive programming in month of November-December , 2020 and i recently started doing web development. Around 1 month of learning React ,HTML ,CSS and Javascript .",Object(a.jsx)("br",{})," I created many projects to enhance my skills and always looking for opportunity to switch from development to production mode.",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{}),"I hope you like this website!! ","\ud83d\ude04"]})]})]})},j=(n(33),function(){return Object(a.jsxs)("div",{className:"Contact-Pallete",children:[Object(a.jsx)("a",{href:"https://www.linkedin.com/in/rishabh-jain-69a1181a8/",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:"linkedin-dark.png",alt:"linkedin",onMouseEnter:function(e){e.currentTarget.src="linkedin.png"},onMouseLeave:function(e){e.currentTarget.src="linkedin-dark.png"}})}),Object(a.jsx)("a",{href:"mailto:rishabhj945@gmail.com",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{alt:"google",src:"google.png",onMouseEnter:function(e){e.currentTarget.src="search.png"},onMouseLeave:function(e){e.currentTarget.src="google.png"}})}),Object(a.jsx)("a",{href:"https://github.com/rishabh0906",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{alt:"github",src:"github-dark.png",onMouseEnter:function(e){e.currentTarget.src="github.png"},onMouseLeave:function(e){e.currentTarget.src="github-dark.png"}})})]})}),d=n(14),b=function(e){return Object(a.jsxs)("figure",{onClick:function(t){e.setZoom(e.content.URL)},onMouseEnter:function(e){e.currentTarget.children[1].style.display="flex"},onMouseLeave:function(e){e.currentTarget.children[1].style.display="none"},children:[Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:e.content.URL,alt:"logo"})}),Object(a.jsx)("div",{className:"caption",children:Object(a.jsxs)("figcaption",{children:[" ",e.content.Caption," "]})})]})},u=n(17);n(41),n(40);u.a.initializeApp({apiKey:"AIzaSyAhVZltkKgfZlXIWek_2pr55enPa7YvUpE",authDomain:"portfolio-cb9a2.firebaseapp.com",projectId:"portfolio-cb9a2",storageBucket:"portfolio-cb9a2.appspot.com",messagingSenderId:"355213087102",appId:"1:355213087102:web:75bdcf90c71fb7e346e32f"});var p=u.a.firestore(),m=(u.a.storage(u.a.app()),u.a,function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(null),i=Object(d.a)(s,2),o=i[0],h=i[1];return Object(r.useEffect)((function(){p.collection("images").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c(t)}))}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsxs)("div",{className:"Main-Content Gallery slide-left",onScroll:function(e){var t=e.currentTarget.scrollTop;e.currentTarget.firstChild.style.top="".concat(t+80,"px")},children:[Object(a.jsx)("div",{style:{display:null==o?"none":"block"},onClick:function(){h(null)},className:"Zoomed-pic",children:Object(a.jsx)("img",{src:null==o?"":o,alt:"Zoomed"})}),Object(a.jsx)("h1",{className:"heading",children:"Although, I am not a Dweeb !!"}),Object(a.jsx)("div",{className:"AllPhotos-div",children:null==n?"Loading...":n.map((function(e){return Object(a.jsx)(b,{content:e,setZoom:h})}))})]})]})}),f=function(){return Object(a.jsxs)("div",{className:"NavBar",children:[Object(a.jsx)("p",{children:Object(a.jsx)(i.b,{to:"/about",children:"About"})}),Object(a.jsx)("p",{children:Object(a.jsx)(i.b,{to:"/projects",children:"Projects"})}),Object(a.jsx)("p",{children:Object(a.jsx)(i.b,{to:"/gallery",children:"Gallery"})}),Object(a.jsx)("p",{children:Object(a.jsx)(i.b,{to:"/resume",children:"Resume"})})]})},g=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsxs)("div",{className:"Main-Content project slide-left",children:[Object(a.jsx)("h1",{className:"heading",children:"Let me show you my work"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:"https://github.com/rishabh0906/Reel-or-Real.git",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("h3",{children:"Real-or-Reel"})}),Object(a.jsx)("p",{children:"This project is based on React and firebase in which i try to make instagram reels clone in which person can watch reels of different users and also able to upload reels as well.A user can give like or comment to another users.Firebase is used to store all posts and comments of the users and also provide authentication functionality."}),Object(a.jsx)("a",{href:"https://rishabh0906.github.io/excel-clone/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("h3",{children:"Excel Clone"})}),Object(a.jsx)("p",{children:"This project is based on html , css , Javascript , indexdb . I implemented functions of ms excel or google sheets . Logic behind the sheets are implemented using graph theory like indegree and outdegree and algorithms like cycle detection to remove circular references.Indexdb is used to store the data ."}),Object(a.jsx)("a",{href:" https://rishabh0906.github.io/Camera-App/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("h3",{children:"Camera App"})}),Object(a.jsx)("p",{children:"This project is based on html , css , Javascript , indexdb. In this app i implemented camera and video recorder using access of media devices and also implement filters. Indexdb is used to store photos."}),Object(a.jsx)("a",{href:"https://rishabh0906.github.io/Jira--ticket-Clone/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("h3",{children:"Jira--ticket-clone"})}),Object(a.jsx)("p",{children:"This project is based on html , css , Javascript , localstorage. This is a todo app whixh keep the track of tasks in the form of tickets and colors code assigned to them . You can prioritze the task on basis of color (black- lowest, pink- second lowest , blue- highest ,green- second highest)."})]})]})]})},x=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsxs)("div",{className:"Main-Content slide-left",children:[Object(a.jsx)("h1",{className:"heading",children:"Resume"}),Object(a.jsx)("embed",{src:"Resume_Rishabh_Jain (1).pdf#navpanes=0&toolbar=0&scrollbar=0"})]})]})},O=function(e){var t=Object(r.useState)(!0),n=Object(d.a)(t,2),c=n[0],s=n[1];Object(r.useEffect)((function(){setTimeout((function(){s(!1)}),100+100*e.obj.index)}));return Object(a.jsx)("text",{className:!1===c?"show":"",fill:"#333",x:window.outerWidth>765?40+e.obj.index*("i"===e.obj.item?31:30):15+e.obj.index*("i"===e.obj.item?16:15.5),y:"86",children:e.obj.item})},v=function(){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],s="I'm Rishabh Jain.".split("");return Object(r.useEffect)((function(){setTimeout((function(){c(!1)}),2e3)}),[]),Object(a.jsx)("div",{className:"Main-Content-2",children:Object(a.jsxs)("div",{className:"Home-Animation",children:[Object(a.jsx)("svg",{height:"130",width:"500",children:s.map((function(e,t){return Object(a.jsx)(O,{obj:{item:e,index:t}})}))}),Object(a.jsx)("p",{className:n?"":"show-p",children:"You can find me around the web !!"})]})})};var k=function(){return console.log("hi !!"),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(f,{}),Object(a.jsx)(j,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/about",children:Object(a.jsx)(h,{})}),Object(a.jsx)(o.a,{path:"/gallery",children:Object(a.jsx)(m,{})}),Object(a.jsx)(o.a,{path:"/resume",children:Object(a.jsx)(x,{})}),Object(a.jsx)(o.a,{path:"/projects",children:Object(a.jsx)(g,{})}),Object(a.jsx)(o.a,{path:"/",children:Object(a.jsx)(v,{})})]})]})})};s.a.render(Object(a.jsx)(k,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.bdb60625.chunk.js.map