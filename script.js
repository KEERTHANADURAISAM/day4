var request=new XMLHttpRequest();
console.log(request);
request.open("get","https://restcountries.com/v3.1/all")
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data);
// console.log(result[0].area);
for(var i=0;i<result.length;i++){
    console.log(result[i]);
}
}
