"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[95],{4095:function(o,a,n){n.r(a),n.d(a,{default:function(){return I}});var s=n(6768),e=n(5130);const t={class:"loginWrap"},i={class:"loginBox"},l=(0,s.Lk)("h2",null,"後台登入",-1),r={class:"mb-3"},c=(0,s.Lk)("label",{for:"account",class:"form-label"},"帳號",-1),d={class:"mb-3"},u=(0,s.Lk)("label",{for:"exampleInputPassword1",class:"form-label"},"密碼 ",-1),p={class:"btnGroup"};function b(o,a,n,b,m,f){const k=(0,s.g2)("LoadingSpinner");return(0,s.uX)(),(0,s.CE)("div",t,[(0,s.bF)(k,{visible:m.isLoading},null,8,["visible"]),(0,s.Lk)("div",i,[l,(0,s.Lk)("form",null,[(0,s.Lk)("div",r,[c,(0,s.bo)((0,s.Lk)("input",{type:"email",class:"form-control",id:"account","aria-describedby":"emailHelp","onUpdate:modelValue":a[0]||(a[0]=o=>m.account=o)},null,512),[[e.Jo,m.account]])]),(0,s.Lk)("div",d,[u,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>m.password=o),type:"password",class:"form-control",id:"exampleInputPassword1"},null,512),[[e.Jo,m.password]])]),(0,s.Lk)("div",p,[(0,s.Lk)("button",{type:"submit",class:"btn btn-outline-primary loginBtn btn-lg",onClick:a[2]||(a[2]=(0,e.D$)((o=>f.login()),["prevent"]))}," 登入 ")])])])])}n(4114);const m=o=>((0,s.Qi)("data-v-2a640735"),o=o(),(0,s.jt)(),o),f={key:0,class:"loading-overlay"},k=m((()=>(0,s.Lk)("div",{class:"loading-spinner"},null,-1))),g=[k];function h(o,a,n,e,t,i){return n.visible?((0,s.uX)(),(0,s.CE)("div",f,g)):(0,s.Q3)("",!0)}var v={props:{visible:{type:Boolean,default:!0}}},L=n(1241);const w=(0,L.A)(v,[["render",h],["__scopeId","data-v-2a640735"]]);var x=w,y={components:{LoadingSpinner:x},data(){return{account:"",password:"",isLoading:!0}},mounted(){this.loadBackgroundImage()},methods:{login(){const o="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(o,{username:this.account,password:this.password}).then((o=>{if(console.log(o),o.data.success){const a=o.data.token,n=parseInt(o.data.expired,10),s=new Date(1e3*n),e=s.toUTCString();document.cookie=`backLoginToken=${a}; expires=${e}; path=/`,this.$router.push("/back/products")}else alert("帳號或密碼錯誤")}))},loadBackgroundImage(){const o=new Image;o.src="https://images.unsplash.com/photo-1470526446583-d0fe2363d8cb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",o.onload=()=>{this.isLoading=!1}}}};const B=(0,L.A)(y,[["render",b]]);var I=B}}]);
//# sourceMappingURL=95.5b38f11f.js.map