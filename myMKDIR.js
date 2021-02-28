#!/usr/bin/env node

let fs=require('fs');

(function(){
let n=process.argv[2]
let name=process.argv[3]

if(isNaN(n)|| typeof(name)!="string" || n<0){
    console.log("Invalid Input")
}else{
    for(let i=1;i<=n;i++){
        if(fs.existsSync(`${name}-${i}`)){
            fs.rmdirSync(`${name}-${i}`)
        }else{
            fs.mkdirSync(`${name}-${i}`)
        }
    }
}
})();