"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[313],{2313:function(t,e,a){a.r(e),a.d(e,{default:function(){return rt}});var l=a(6768),s=a(4232),r=a(5130);const o={class:"shoppingGroup container"},i={key:0,class:"shopping-cart"},n=(0,l.Lk)("h3",{class:"cart-title"},"購物車",-1),d={key:0,class:"empty-cart"},u=(0,l.Lk)("p",null,"購物車為空",-1),c=[u],m={key:1},p={class:"cart-itemsGroup"},h=["src"],k={class:"item-details"},L={class:"item-actions"},v={class:"quantity-control"},b=["onClick"],g=["onUpdate:modelValue","onChange"],f=["onClick"],y=["onClick"],C={class:"item-price"},x={class:"cart-summary"},_={class:"summary-item"},F={key:1,class:"consumerGroup"},q=(0,l.Lk)("h3",null,"填寫訂單資料",-1),E={class:"mb-3"},I=(0,l.Lk)("label",{for:"name",class:"form-label"},"姓名",-1),S={class:"mb-3"},V=(0,l.Lk)("label",{for:"email",class:"form-label"},"Email",-1),$={class:"mb-3"},X=(0,l.Lk)("label",{for:"phone",class:"form-label"},"電話",-1),w={class:"mb-3"},D=(0,l.Lk)("label",{for:"address",class:"form-label"},"地址",-1),A=(0,l.Lk)("label",{for:"message",class:"form-label"},"留言",-1),G={class:"buttonGroup"},P={key:2,class:"checkOrderGroup"},U={class:"col-md-6"},N={class:"table align-middle"},B=(0,l.Lk)("thead",null,[(0,l.Lk)("th",null,"品名"),(0,l.Lk)("th",null,"數量"),(0,l.Lk)("th",null,"單價")],-1),K={class:"text-end"},Q=(0,l.Lk)("td",{colspan:"2",class:"text-end"},"總計",-1),T={class:"text-end"},J={class:"table"},O=(0,l.Lk)("th",{width:"100"},"Email",-1),j=(0,l.Lk)("th",null,"姓名",-1),z=(0,l.Lk)("th",null,"收件人電話",-1),H=(0,l.Lk)("th",null,"收件人地址",-1),M=(0,l.Lk)("th",null,"付款狀態",-1),R={key:0,class:"text-success"},W={key:1,class:"text-danger"},Y=(0,l.Lk)("div",null,[(0,l.Lk)("button",{class:"btn btn-danger disabled"},"確認付款去")],-1);function Z(t,e,a,u,Z,tt){const et=(0,l.g2)("Navbar"),at=(0,l.g2)("ToastList"),lt=(0,l.g2)("Loading"),st=(0,l.g2)("Field"),rt=(0,l.g2)("error-message"),ot=(0,l.g2)("Form"),it=(0,l.g2)("Footer");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(et),(0,l.bF)(at),(0,l.bF)(lt,{active:Z.isLoading},null,8,["active"]),(0,l.Lk)("div",o,[1==Z.currentStep?((0,l.uX)(),(0,l.CE)("div",i,[n,0===Z.cartItems.length?((0,l.uX)(),(0,l.CE)("div",d,c)):((0,l.uX)(),(0,l.CE)("div",m,[(0,l.Lk)("div",p,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(Z.cartItems,((t,e)=>((0,l.uX)(),(0,l.CE)("div",{class:"cart-item",key:e},[(0,l.Lk)("img",{src:t.product.imageUrl,alt:"Product Image",class:"item-image"},null,8,h),(0,l.Lk)("div",k,[(0,l.Lk)("h3",null,(0,s.v_)(t.product.title),1),(0,l.Lk)("p",null,(0,s.v_)(t.product.description),1),(0,l.Lk)("div",L,[(0,l.Lk)("div",v,[(0,l.Lk)("button",{onClick:e=>tt.countBack(t)},"−",8,b),(0,l.bo)((0,l.Lk)("input",{type:"text","onUpdate:modelValue":e=>t.qty=e,onChange:e=>tt.changeCount(t),class:"quantity-input"},null,40,g),[[r.Jo,t.qty,void 0,{number:!0}]]),(0,l.Lk)("button",{onClick:e=>tt.countPush(t)},"+",8,f)]),(0,l.Lk)("button",{onClick:e=>tt.deleteItem(t.id),class:"remove-button"},"删除",8,y)]),(0,l.Lk)("div",C,"加總: "+(0,s.v_)(t.total),1)])])))),128))]),(0,l.Lk)("div",x,[(0,l.Lk)("div",_,[(0,l.Lk)("span",null,"總價 : "+(0,s.v_)(Z.totalPrice),1),(0,l.Lk)("button",{class:"summaryBtn",onClick:e[0]||(e[0]=(...t)=>tt.nextStep&&tt.nextStep(...t))},"填寫訂單資料")])])]))])):(0,l.Q3)("",!0),2==Z.currentStep?((0,l.uX)(),(0,l.CE)("div",F,[q,(0,l.bF)(ot,{onSubmit:tt.checkout},{default:(0,l.k6)((({errors:t,values:a,validate:r})=>[(0,l.Lk)("div",E,[I,(0,l.bF)(st,{id:"name",name:"name",type:"text",class:"form-control",placeholder:"請輸入姓名",rules:"required",modelValue:Z.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=t=>Z.form.user.name=t)},null,8,["modelValue"]),(0,l.bF)(rt,{name:"name",class:"invalid-feedback"})]),(0,l.Lk)("div",S,[V,(0,l.bF)(st,{id:"email",name:"email",type:"email",class:(0,s.C4)(["form-control",{"is-invalid":t["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:Z.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=t=>Z.form.user.email=t)},null,8,["class","modelValue"]),(0,l.bF)(rt,{name:"email",class:"invalid-feedback"})]),(0,l.Lk)("div",$,[X,(0,l.bF)(st,{id:"phone",name:"phone",type:"text",class:"form-control",placeholder:"請輸入電話",rules:"required",modelValue:Z.form.user.tel,"onUpdate:modelValue":e[3]||(e[3]=t=>Z.form.user.tel=t)},null,8,["modelValue"]),(0,l.bF)(rt,{name:"phone",class:"invalid-feedback"})]),(0,l.Lk)("div",w,[D,(0,l.bF)(st,{id:"address",name:"address",type:"text",class:"form-control",placeholder:"請輸入地址",rules:"required",modelValue:Z.form.user.address,"onUpdate:modelValue":e[4]||(e[4]=t=>Z.form.user.address=t)},null,8,["modelValue"]),(0,l.bF)(rt,{name:"name",class:"invalid-feedback"})]),A,(0,l.Lk)("textarea",(0,l.v6)({class:"form-control"},Z.form.user.message,{id:"floatingTextarea2",style:{height:"100px"},name:"message"}),null,16),(0,l.Lk)("div",G,[(0,l.Lk)("button",{class:"btn btn-primary mt-3",type:"submit",onClick:e[5]||(e[5]=t=>tt.checkout())}," 確定 ")])])),_:1},8,["onSubmit"])])):(0,l.Q3)("",!0),3==Z.currentStep?((0,l.uX)(),(0,l.CE)("div",P,[(0,l.Lk)("form",U,[(0,l.Lk)("table",N,[B,(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(Z.orderData.products,((t,e)=>((0,l.uX)(),(0,l.CE)("tr",{key:e},[(0,l.Lk)("td",null,(0,s.v_)(t.product.title),1),(0,l.Lk)("td",null,(0,s.v_)(t.qty)+"/"+(0,s.v_)(t.product.unit),1),(0,l.Lk)("td",K,(0,s.v_)(t.final_total)+" 元",1)])))),128))]),(0,l.Lk)("tfoot",null,[(0,l.Lk)("tr",null,[Q,(0,l.Lk)("td",T,(0,s.v_)(Z.orderData.total)+" 元",1)])])]),(0,l.Lk)("table",J,[(0,l.Lk)("tbody",null,[(0,l.Lk)("tr",null,[O,(0,l.Lk)("td",null,(0,s.v_)(Z.orderData.user?.email||"N/A"),1)]),(0,l.Lk)("tr",null,[j,(0,l.Lk)("td",null,(0,s.v_)(Z.orderData.user?.name||"N/A"),1)]),(0,l.Lk)("tr",null,[z,(0,l.Lk)("td",null,(0,s.v_)(Z.orderData.user?.tel||"N/A"),1)]),(0,l.Lk)("tr",null,[H,(0,l.Lk)("td",null,(0,s.v_)(Z.orderData.user?.address||"N/A"),1)]),(0,l.Lk)("tr",null,[M,(0,l.Lk)("td",null,[Z.orderData.is_paid?((0,l.uX)(),(0,l.CE)("span",R,"付款完成")):((0,l.uX)(),(0,l.CE)("span",W,"尚未付款"))])])])]),Y])])):(0,l.Q3)("",!0)]),(0,l.bF)(it)],64)}var tt=a(2160),et=(a(3063),a(8996)),at={data(){return{currentStep:1,steps:[{id:1,name:"購物車"},{id:2,name:"填寫顧客資料"},{id:3,name:"確認訂單"},{id:4,name:"結帳"}],cartItemsGroup:{},cartItems:[],totalPrice:0,isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""},orderId:"",orderData:""}},components:{Navbar:tt.A,Footer:et.A},methods:{countBack(t){if(t.qty<=1)return;const e=`https://vue3-course-api.hexschool.io/api/kerwin2-api/cart/${t.id}`,a={product_id:t.product_id,qty:t.qty-1};this.$http.put(e,{data:a}).then((t=>{console.log(t),this.getCart()}))},countPush(t){if(t.qty>99)return alert("數量過多"),void this.getCart();const e=`https://vue3-course-api.hexschool.io/api/kerwin2-api/cart/${t.id}`,a={product_id:t.product_id,qty:t.qty+1};this.$http.put(e,{data:a}).then((t=>{console.log(t),this.getCart()}))},getCart(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/kerwin2-api/cart";this.$http.get(t).then((t=>{t.data.success&&(console.log(t.data),this.cartItemsGroup=t.data,this.cartItems=t.data.data.carts,this.totalPrice=t.data.data.final_total),this.isLoading=!1}))},changeCount(t){if(t.qty<=0)return void this.getCart();if(t.qty>99)return alert("數量過多"),void this.getCart();const e=`https://vue3-course-api.hexschool.io/api/kerwin2-api/cart/${t.id}`,a={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:a}).then((t=>{console.log(t),this.getCart()}))},deleteItem(t){const e=`https://vue3-course-api.hexschool.io/api/kerwin2-api/cart/${t}`;this.$http.delete(e).then((t=>{this.getCart()}))},nextStep(){this.currentStep<this.steps.length&&this.currentStep++},prevStep(){this.currentStep>1&&this.currentStep--},isPhone(t){const e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的電話號碼"},checkout(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/kerwin2-api/order";this.$http.post(t,{data:{user:this.form.user,message:this.form.user.message}}).then((t=>{this.orderId=t.data.orderId,this.orderCheck()})),this.nextStep()},orderCheck(){const t=`https://vue3-course-api.hexschool.io/api/kerwin2-api/order/${this.orderId}`;this.$http.get(t).then((t=>{console.log(t),this.orderData=t.data.order,this.isLoading=!1}))}},created(){this.getCart()}},lt=a(1241);const st=(0,lt.A)(at,[["render",Z]]);var rt=st}}]);
//# sourceMappingURL=313.2e0b3c5f.js.map