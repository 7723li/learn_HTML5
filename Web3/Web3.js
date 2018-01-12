/**
 * Created by Administrator on 2017/6/29.
 */

function saveStorage() {
    var data = new Object;
    data.name=document.getElementById("name").value;
    data.email=document.getElementById("email").value;
    data.tel=document.getElementById("tel").value;
    data.rem=document.getElementById("rem").value;
    var str=JSON.stringify(data);
    localStorage.setItem(data.name,str);
    alert("数据已保存");
}

function findStorage(id) {
    var find=document.getElementById('find').value;
    var str=localStorage.getItem(find);
    var data=JSON.parse(str);
    var result="name:"+data.name+"<br>";
        result+="email:"+data.email+"<br>";
        result+="tel:"+data.tel+"<br>";
        result+="rem:"+data.rem+"<br>";
    var targrt=document.getElementById(id);
    targrt.innerHTML=result;
}
