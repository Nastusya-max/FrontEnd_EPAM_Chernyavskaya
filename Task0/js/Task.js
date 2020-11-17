// Функция проверки данных на валидность
function validate(){
    var x = document.forms["form"]["name"].value;
    var y = document.forms["form"]["user"].value;
    var z = document.forms["form"]["lock"].value;
    at=y.indexOf("@");
    dot=y.indexOf(".");
    //В случае незаполненности поля или отсутствия изменений в нем, срабатывает alert
    if (x.length==0 || x == "Имя") {
        alert("Необходимо ввести имя");
        return false;
    }
    //В случае незаполненности поля или отсутствия изменений в нем, срабатывает alert
    if (y.length==0 || y == "Логин"){
        alert("Необходимо ввести логин");
        return false;
    }
    //Логин введён неверно, если отсутствует "." или "@"
    if (at<1 || dot <1){
        alert("Логин введён неверно");
        return false;
    }
    //В случае незаполненности поля или отсутствия изменений в нем, срабатывает alert
    if (z.length==0 || z == "Пароль"){
        alert("Необходимо ввести пароль");
        return false;
    }
 }
//Функция преобразования данных формы в JSON
 function submitform(){
    let form = document.forms[0];
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    var j = {
        "name": namef.value,
        "user": userf.value,
        "lock": lockf.value
    };
    xhr.send(JSON.stringify(j));
}