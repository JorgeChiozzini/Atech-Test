(function(){"use strict";var e={5245:function(e,n,s){var t=s(5130),o=s(6768);const r={id:"app"},a={class:"navbar navbar-expand-lg navbar-light bg-light"},i=(0,o.Lk)("a",{class:"navbar-brand",href:"#"},"ATECH TEST",-1),l={class:"collapse navbar-collapse"},u={class:"navbar-nav mr-auto"},c={class:"nav-item"},d={class:"nav-item"},p={class:"nav-item"},m={class:"container mt-3"};function h(e,n,s,t,h,f){const v=(0,o.g2)("router-link"),P=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("nav",a,[i,(0,o.Lk)("div",l,[(0,o.Lk)("ul",u,[(0,o.Lk)("li",c,[(0,o.bF)(v,{to:"/",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1})]),(0,o.Lk)("li",d,[(0,o.bF)(v,{to:"/persons",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Pessoas")])),_:1})]),(0,o.Lk)("li",p,[(0,o.bF)(v,{to:"/persons/new",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Nova Pessoa")])),_:1})])])])]),(0,o.Lk)("div",m,[(0,o.bF)(P)])])}var f={name:"App"},v=s(1241);const P=(0,v.A)(f,[["render",h]]);var b=P,k=s(1387);const L={class:"home"},E=(0,o.Lk)("h1",{class:"title"},"Gerenciador de Pessoas",-1),g=(0,o.Lk)("p",null,"Use o menu para navegar pelas funcionalidades do aplicativo.",-1),y=[E,g];function C(e,n,s,t,r,a){return(0,o.uX)(),(0,o.CE)("div",L,y)}var _={name:"HomePage"};const $=(0,v.A)(_,[["render",C]]);var S=$;function O(e,n,s,t,r,a){const i=(0,o.g2)("PersonList",!0);return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(i,{onDeletePerson:a.deletePerson},null,8,["onDeletePerson"])])}s(4114);var w=s(4232);const A=(0,o.Lk)("h1",{class:"title"},"Lista de Pessoas",-1),D={class:"mb-3"},F={class:"list-group"},N=["onClick"],T=(0,o.Lk)("i",{class:"fas fa-eye"},null,-1),x=["onClick"],W=(0,o.Lk)("i",{class:"fas fa-edit"},null,-1),X=["onClick"],U=(0,o.Lk)("i",{class:"fas fa-trash-alt"},null,-1),j=(0,o.Lk)("i",{class:"fas fa-plus"},null,-1);function R(e,n,s,r,a,i){return(0,o.uX)(),(0,o.CE)("div",null,[A,(0,o.Lk)("div",D,[(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>a.searchQuery=e),placeholder:"Buscar pessoa...",class:"form-control",onInput:n[1]||(n[1]=(...e)=>i.searchPersons&&i.searchPersons(...e))},null,544),[[t.Jo,a.searchQuery]])]),(0,o.Lk)("ul",F,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.filteredPersons,(n=>((0,o.uX)(),(0,o.CE)("li",{key:n.id,class:"list-group-item d-flex justify-content-between align-items-center"},[(0,o.Lk)("div",null,[(0,o.Lk)("h5",null,(0,w.v_)(n.name),1),(0,o.Lk)("p",null,(0,w.v_)(n.email),1)]),(0,o.Lk)("div",null,[(0,o.Lk)("button",{class:"btn btn-secondary btn-sm",onClick:s=>e.$router.push(`/persons/${n.id}`)},[T,(0,o.eW)(" Ver Detalhes ")],8,N),(0,o.Lk)("button",{class:"btn btn-info btn-sm",onClick:s=>e.$router.push(`/persons/${n.id}/edit`)},[W,(0,o.eW)(" Editar ")],8,x),(0,o.Lk)("button",{class:"btn btn-danger btn-sm",onClick:e=>i.handleDelete(n.id)},[U,(0,o.eW)(" Excluir ")],8,X)])])))),128))]),(0,o.Lk)("button",{class:"btn btn-primary mt-3",onClick:n[2]||(n[2]=n=>e.$router.push("/persons/new"))},[j,(0,o.eW)(" Adicionar Pessoa ")])])}var H=s(782),I={name:"PersonList",data(){return{searchQuery:""}},computed:{...(0,H.aH)(["persons"]),filteredPersons(){return this.persons.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())||e.email.toLowerCase().includes(this.searchQuery.toLowerCase())))}},methods:{...(0,H.i0)(["deletePerson"]),handleDelete(e){confirm("Tem certeza de que deseja excluir esta pessoa?")&&this.deletePerson(e)},searchPersons(){}},created(){this.$store.dispatch("fetchPersons")}};const J=(0,v.A)(I,[["render",R]]);var V=J,Q={components:{PersonList:V},methods:{deletePerson(e){this.$store.dispatch("deletePerson",e),this.$store.dispatch("savePersons")}}};const q=(0,v.A)(Q,[["render",O]]);var z=q;function B(e,n,s,t,r,a){const i=(0,o.g2)("PersonDetails",!0);return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(i)])}const G=(0,o.Lk)("h2",null,"Detalhes da Pessoa",-1),K=(0,o.Lk)("strong",null,"Nome:",-1),M=(0,o.Lk)("strong",null,"Email:",-1),Y=(0,o.Lk)("strong",null,"Telefone:",-1);function Z(e,n,s,t,r,a){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",null,[G,(0,o.Lk)("p",null,[K,(0,o.eW)(" "+(0,w.v_)(a.person.name),1)]),(0,o.Lk)("p",null,[M,(0,o.eW)(" "+(0,w.v_)(a.person.email),1)]),(0,o.Lk)("p",null,[Y,(0,o.eW)(" "+(0,w.v_)(a.person.phone),1)]),(0,o.Lk)("button",{onClick:n[0]||(n[0]=(...e)=>a.editPerson&&a.editPerson(...e)),class:"btn btn-warning"},"Editar"),(0,o.bF)(i,{to:{name:"PersonList"},class:"btn btn-primary"},{default:(0,o.k6)((()=>[(0,o.eW)("Voltar para Lista")])),_:1})])}var ee={computed:{...(0,H.aH)(["persons"]),person(){return this.persons.find((e=>e.id===Number(this.$route.params.id)))||{}}},methods:{editPerson(){this.$router.push(`/persons/${this.$route.params.id}/edit`)}},created(){this.$store.dispatch("fetchPersons")}};const ne=(0,v.A)(ee,[["render",Z]]);var se=ne,te={components:{PersonDetails:se}};const oe=(0,v.A)(te,[["render",B]]);var re=oe;function ae(e,n,s,t,r,a){const i=(0,o.g2)("PersonForm",!0);return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.bF)(i,{onAddPerson:a.addPerson,onUpdatePerson:a.updatePerson},null,8,["onAddPerson","onUpdatePerson"])])}const ie={class:"title"},le={class:"form-group"},ue=(0,o.Lk)("label",{for:"name"},"Nome Completo",-1),ce={class:"form-group"},de=(0,o.Lk)("label",{for:"email"},"E-mail",-1),pe={class:"form-group"},me=(0,o.Lk)("label",{for:"phone"},"Telefone",-1),he=(0,o.Lk)("button",{type:"submit",class:"btn btn-success mt-3"},"Salvar",-1);function fe(e,n,s,r,a,i){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("h1",ie,(0,w.v_)(i.isEdit?"Editar Pessoa":"Adicionar Pessoa"),1),(0,o.Lk)("form",{onSubmit:n[4]||(n[4]=(0,t.D$)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"]))},[(0,o.Lk)("div",le,[ue,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>a.person.name=e),required:""},null,512),[[t.Jo,a.person.name]])]),(0,o.Lk)("div",ce,[de,(0,o.bo)((0,o.Lk)("input",{type:"email",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=e=>a.person.email=e),required:""},null,512),[[t.Jo,a.person.email]])]),(0,o.Lk)("div",pe,[me,(0,o.bo)((0,o.Lk)("input",{type:"tel",class:"form-control","onUpdate:modelValue":n[2]||(n[2]=e=>a.person.phone=e)},null,512),[[t.Jo,a.person.phone]])]),he,(0,o.Lk)("button",{type:"button",class:"btn btn-secondary mt-3",onClick:n[3]||(n[3]=n=>e.$router.push("/persons"))},"Cancelar")],32)])}var ve={name:"PersonForm",data(){return{person:{name:"",email:"",phone:""}}},computed:{isEdit(){return!!this.$route.params.id},...(0,H.aH)(["persons"])},methods:{...(0,H.i0)(["addPerson","updatePerson"]),handleSubmit(){this.isEdit?this.updatePerson(this.person):this.addPerson(this.person),this.$router.push("/persons")}},created(){if(this.isEdit){const e=this.persons.find((e=>e.id===parseInt(this.$route.params.id)));e&&(this.person={...e})}}};const Pe=(0,v.A)(ve,[["render",fe]]);var be=Pe,ke={components:{PersonForm:be},methods:{addPerson(e){this.$store.dispatch("addPerson",e),this.$store.dispatch("savePersons")},updatePerson(e){this.$store.dispatch("updatePerson",e),this.$store.dispatch("savePersons")}}};const Le=(0,v.A)(ke,[["render",ae]]);var Ee=Le;const ge=[{path:"/",name:"HomePage",component:S},{path:"/persons",name:"PersonList",component:z},{path:"/persons/new",name:"PersonFormAdd",component:Ee},{path:"/persons/:id",name:"PersonDetails",component:re},{path:"/persons/:id/edit",name:"PersonFormEdit",component:Ee}],ye=(0,k.aE)({history:(0,k.LA)("/"),routes:ge});var Ce=ye;const _e=(0,H.y$)({state:{persons:[]},mutations:{ADD_PERSON(e,n){e.persons.push(n)},UPDATE_PERSON(e,n){const s=e.persons.findIndex((e=>e.id===n.id));-1!==s&&(e.persons[s]=n)},DELETE_PERSON(e,n){e.persons=e.persons.filter((e=>e.id!==n))},SET_PERSONS(e,n){e.persons=n}},actions:{addPerson({commit:e,dispatch:n},s){s.id=Date.now(),e("ADD_PERSON",s),n("savePersons")},updatePerson({commit:e,dispatch:n},s){e("UPDATE_PERSON",s),n("savePersons")},deletePerson({commit:e,dispatch:n},s){e("DELETE_PERSON",s),n("savePersons")},fetchPersons({commit:e}){const n=JSON.parse(localStorage.getItem("persons")||"[]");e("SET_PERSONS",n)},savePersons({state:e}){localStorage.setItem("persons",JSON.stringify(e.persons))}}});var $e=_e,Se=s(8950),Oe=s(2353),we=s(292);Se.Yv.add(Oe.X7I);const Ae=(0,t.Ef)(b);Ae.use(Ce),Ae.use($e),Ae.component("font-awesome-icon",we.gc),Ae.mount("#app")}},n={};function s(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={exports:{}};return e[t].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(n,t,o,r){if(!t){var a=1/0;for(c=0;c<e.length;c++){t=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,l=0;l<t.length;l++)(!1&r||a>=r)&&Object.keys(s.O).every((function(e){return s.O[e](t[l])}))?t.splice(l--,1):(i=!1,r<a&&(a=r));if(i){e.splice(c--,1);var u=o();void 0!==u&&(n=u)}}return n}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[t,o,r]}}(),function(){s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,{a:n}),n}}(),function(){s.d=function(e,n){for(var t in n)s.o(n,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};s.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,r,a=t[0],i=t[1],l=t[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var c=l(s)}for(n&&n(t);u<a.length;u++)r=a[u],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(c)},t=self["webpackChunkvue_crud_app"]=self["webpackChunkvue_crud_app"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=s.O(void 0,[504],(function(){return s(5245)}));t=s.O(t)})();
//# sourceMappingURL=app.e0d7e4f2.js.map