/**
 * Created by Administrator on 2017/6/29.
 */

// function  saveStroage( id){
//     var target=document.getElementById(id);
//     var str=target.value;
// //  保存数据的方法key value,键值对
//     sessionStorage.setItem('message',str)
// }
//
// function  loadStroage(id) {
//    var target=document.getElementById(id);
//    //读取数据
//    var msg=sessionStorage.getItem("message")
//     target.innerHTML=msg
// }

function saveStroage(id) {
    var target=document.getElementById(id);
    var str=target.value;
    localStorage.setItem('message',str)
}

function  loadStroage(id) {
   var target=document.getElementById(id);
   //读取数据
   var msg=localStorage.getItem("message")
    target.innerHTML=msg
}