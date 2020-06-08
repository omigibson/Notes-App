(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(4),c=n.n(o),l=(n(15),n(7)),s=n(2),r=n(1),d=n(5),u=n(6),h=n(9),p=n(8);var m=function(t){return a.a.createElement("button",{type:"button",className:t.cls,onClick:function(){return t.onClick(t.noteId)}},t.buttonText)};n(16);var f=function(t){return a.a.createElement("section",null,a.a.createElement("h2",null,"All Notes"),a.a.createElement("ul",{className:"notes-list"},t.notes.map((function(e,n){return a.a.createElement("li",{key:n,className:"note"},a.a.createElement("div",null,t.editNote.editing===e.id?a.a.createElement("input",{id:"editTitle","aria-label":"Title",onChange:t.onInput,value:t.editNote.editTitle}):a.a.createElement("h3",null,e.title)),a.a.createElement("div",null,t.editNote.editing===e.id?a.a.createElement("input",{id:"editDescription","aria-label":"Description",onChange:t.onInput,value:t.editNote.editDescription}):a.a.createElement("p",null,e.description)),t.editNote.editing===e.id?a.a.createElement(m,{cls:"save",noteId:e.id,onClick:t.onSaveClick,buttonText:"Save"}):a.a.createElement(m,{cls:"edit",noteId:e.id,onClick:t.onEditClick,buttonText:"Edit"}),a.a.createElement(m,{cls:"delete",noteId:e.id,onClick:t.onDeleteClick,buttonText:"Delete"}))}))))};n(17);var E=function(t){return a.a.createElement("section",null,a.a.createElement("h2",null,"Add Note"),a.a.createElement("form",null,a.a.createElement("label",{htmlFor:"addTitle"},"Title"),a.a.createElement("input",{id:"addTitle",value:t.note.addTitle?t.note.addTitle:"",onChange:t.onInput}),a.a.createElement("label",{htmlFor:"addDescription"},"Description"),a.a.createElement("input",{id:"addDescription",value:t.note.addDescription?t.note.addDescription:"",onChange:t.onInput}),a.a.createElement("button",{type:"button",className:"add",onClick:t.onSaveClick},"Save")))},v=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).handleInput=function(t){t.target.id.includes("add")?i.setState({newNote:Object(r.a)(Object(r.a)({},i.state.newNote),{},Object(s.a)({},t.target.id,t.target.value))}):i.setState({editNote:Object(r.a)(Object(r.a)({},i.state.editNote),{},Object(s.a)({},t.target.id,t.target.value))})},i.handleSave=function(t){t.preventDefault(),fetch("https://timesheet-1172.appspot.com/a529f225/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i.state.newNote.addTitle,description:i.state.newNote.addDescription})}).then((function(t){return t.json()})).then((function(t){i.setState({newNote:{},notesList:i.state.notesList.concat(t)})})).catch((function(t){return console.error(t)}))},i.handleEdit=function(t){var e=i.state.notesList.find((function(e){return e.id===t}));i.setState({editNote:Object(r.a)(Object(r.a)({},i.state.editNote),{},{editing:t,editTitle:e.title,editDescription:e.description})})},i.handleSaveEdit=function(t){fetch("https://timesheet-1172.appspot.com/a529f225/notes/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i.state.editNote.editTitle,description:i.state.editNote.editDescription})}).then((function(t){return t.json()})).then((function(e){var n=Object(l.a)(i.state.notesList),a=i.state.notesList.find((function(e){return e.id===t})),o=i.state.notesList.indexOf(a),c=Object(r.a)({},n[o]);c.id=e.id,c.title=e.title,c.description=e.description,n[o]=c,i.setState({editNote:{},notesList:n})})).catch((function(t){return console.error(t)}))},i.handleDelete=function(t){fetch("https://timesheet-1172.appspot.com/a529f225/notes/".concat(t),{method:"DELETE"}).then((function(e){e.ok&&i.setState((function(e){return{notesList:e.notesList.filter((function(e){return e.id!==t}))}}))})).catch((function(t){return console.error(t)}))},i.state={newNote:{},notesList:[],editNote:{}},i}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://timesheet-1172.appspot.com/a529f225/notes").then((function(t){return t.json()})).then((function(e){t.setState({notesList:e})})).catch(console.log)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("header",null,a.a.createElement("h1",null,"Notes App")),a.a.createElement("main",null,a.a.createElement(E,{onInput:this.handleInput,note:this.state.newNote,onSaveClick:this.handleSave}),a.a.createElement(f,{notes:this.state.notesList,onEditClick:this.handleEdit,editNote:this.state.editNote,onInput:this.handleInput,onSaveClick:this.handleSaveEdit,onDeleteClick:this.handleDelete})))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.2bd5451e.chunk.js.map