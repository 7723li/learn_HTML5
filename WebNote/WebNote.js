/**
 * Created by Administrator on 2017/6/29.
 */

function  saveStorage(id) {
    var data=document.getElementById(id).value;
    var time=new Date().getTime();
    localStorage.setItem(time,data);
    alert('数据已储存');
    loadStroage("msg");
}

function loadStroage(id) {
    var result="<table border='1'>";
    for (var i=0;i<localStorage.length;i++){
        var key=localStorage.key(i);/*和前面WebStroage的GetItem方法一样*/
        var value=localStorage.getItem(key);
        var date=new Date();
        date.setTime(key);
        result+="<tr><td>"+value+"</td><td>"+date+"</td></tr>";
    }
    result+="</table>";
    var target=document.getElementById(id);
    target.innerHTML=result+localStorage.length;
}

function clearStorage() {
    localStorage.clear();
    alert("数据已删除");
    loadStroage("msg");
}