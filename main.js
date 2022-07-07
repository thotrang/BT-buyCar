let money=100;
const buyCar=(money)=>{
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(money>=1000)   resolve();
            else reject();  
        },1000);
    })
}
buyCar(money)
    .then(()=>{
        console.log('đủ tiền mua xe');
    })
    .catch(()=>{
        console.log('không đủ tiền mua xe');
    })
        
    
