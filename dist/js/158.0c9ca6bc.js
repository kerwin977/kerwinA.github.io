"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[158],{4158:function(t,s,e){e.r(s),e.d(s,{default:function(){return w}});var i=e(6768),a=e(4232);const o={class:"containerBox"},c=(0,i.Lk)("h5",null,"產品分類",-1),l={class:"contentGroup"},r={class:"category"},n={class:"listGroup"},u=["onClick"],h={class:"products"},d=["src"],g={class:"title"},p={class:"priceGroup"},v=["onClick"],L=(0,i.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"#ffffff",class:"bi bi-cart4",viewBox:"0 0 18 18"},[(0,i.Lk)("path",{d:"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"})],-1);function k(t,s,e,k,m,f){const C=(0,i.g2)("Navbar"),y=(0,i.g2)("Loading"),I=(0,i.g2)("ToastList"),b=(0,i.g2)("Footer");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(C),(0,i.bF)(y,{active:m.isLoading},null,8,["active"]),(0,i.bF)(I),(0,i.Lk)("div",o,[c,(0,i.Lk)("div",l,[(0,i.Lk)("div",r,[(0,i.Lk)("ul",n,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(m.categories,((t,s)=>((0,i.uX)(),(0,i.CE)("li",{key:s,class:(0,a.C4)({active:m.activeIndex===s}),onClick:t=>f.changeCategory(s)},(0,a.v_)(t),11,u)))),128))])]),(0,i.Lk)("div",h,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(m.selectListCategory,((t,s)=>((0,i.uX)(),(0,i.CE)("div",{class:"product",key:t.id},[(0,i.Lk)("img",{src:t.imageUrl,alt:""},null,8,d),(0,i.Lk)("div",g,(0,a.v_)(t.title),1),(0,i.Lk)("p",null,(0,a.v_)(t.content),1),(0,i.Lk)("div",p,[(0,i.Lk)("h6",null,"售價："+(0,a.v_)(t.price),1),(0,i.Lk)("small",null,(0,a.v_)(t.origin_price),1)]),(0,i.Lk)("button",{onClick:s=>f.addCart(t)},[L,(0,i.eW)(" 加入購物車 ")],8,v)])))),128))])])]),(0,i.bF)(b)],64)}var m=e(9129),f=e(3063),C=e(8996),y={components:{Navbar:m.A,ToastList:f.A,Footer:C.A},data(){return{activeIndex:0,isLoading:!1,products:[],categories:[],selectListCategory:[]}},methods:{addCart(t){const s="https://vue3-course-api.hexschool.io/api/kerwin2-api/cart";this.$http.post(s,{data:{product_id:t.id,qty:1}}).then((t=>{console.log(t),t.data.success&&this.$root.emitter.emit("push-message",{style:"success",message:"已加入購物車",content:""})}))},isActive(t){return this.$route.path===t.path},filterItemList(t,s){return t.filter((t=>t.category===s)).length},changeCategory(t){this.activeIndex=t,this.selectListCategory=0===this.activeIndex?this.products:this.products.filter((s=>s.category===this.categories[t].split(" ")[0]))}},created(){const t="https://vue3-course-api.hexschool.io/api/kerwin2-api/products";this.isLoading=!0,this.$http.get(t).then((t=>{if(console.log(t),t.data.success){const s=t.data.products;this.products=s,this.isLoading=!1,this.categories=[`全部商品 All (${s.length})`,`飛行眼鏡 Aviator Sunglasses (${this.filterItemList(s,"飛行眼鏡")})`,`方形眼鏡 Square Sunglasses (${this.filterItemList(s,"方形眼鏡")})`,`圓形眼鏡 Round Sunglasses (${this.filterItemList(s,"圓形眼鏡")})`,`偏光眼鏡 Polarized Sunglasses (${this.filterItemList(s,"偏光眼鏡")})`,`造型眼鏡 Styling Sunglasses (${this.filterItemList(s,"造型眼鏡")})`],this.selectListCategory=this.products}}))}},I=e(1241);const b=(0,I.A)(y,[["render",k]]);var w=b}}]);
//# sourceMappingURL=158.0c9ca6bc.js.map