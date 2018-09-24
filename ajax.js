
let myAjax = function(url, options, callback) {
    let xhr = new XMLHttpRequest();

    let method = options.method || 'GET';
    xhr.open('GET', url, true);
    xhr.send();

    xhr.onreadystatechange = function() {
        callback(xhr);
    }
}

var api = 'http://localhost:8080/data.json';
myAjax(api, {}, (res)=>{

    console.log('api返回结果', res.readyState, res);
    console.log('返回结果', res.response);

    document.getElementById("root").innerText = res.responseText;

    //document.getElementById("root").innerHTML = res.readyState;

});