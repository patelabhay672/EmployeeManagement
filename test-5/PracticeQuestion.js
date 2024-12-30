// fetch("https://randomuser.me/api/")
// .then(raw=>raw.json())
// .then(readable=>console.log(readable.results[0].gender));

// const res=new Promise(function(resolve, reject){
//     fetch("https://randomuser.me/api/")
//     .then(raw=>raw.json())
//     .then(result=>{
//         if(result.results[0].gender==="male")
//             resolve()
//         else
//         reject()
//     })
// })

// res
// .then(function(){
//     console.log("Male");
// })
// .catch(function(){
//     console.log("Female")
// })

async function Demo() {
    let a=await fetch("https://randomuser.me/api/")
    a=await a.json()
    console.log(a)
}
Demo()
