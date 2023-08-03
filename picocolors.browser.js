const v=new Proxy((s) => s,{get:()=>v});
module.exports=v
