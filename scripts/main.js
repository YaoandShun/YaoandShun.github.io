let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/com.apple.iphone-3g.png'){
        myImage.setAttribute('src', 'images/com.apple.iphone-4-white.png')
    }else{
        myImage.setAttribute('src', 'images/com.apple.iphone-3g.png')
    }
}




// 1.输入用户名
// 2.原先有用户名
// 3.原先没有

function setUserName(){
    // 弹出提示框
    // 输入名字
    // 保存名字
    let name = prompt('请输入您的名称：')
    localStorage.setItem('name',name)
    


}

let nameStore = localStorage.getItem('name')
nameStore = localStorage.getItem('name')

if(!localStorage.getItem('name') || nameStore===null || nameStore===""){
    setUserName();
}else{
    document.querySelector('h1').textContent = localStorage.getItem('name')+'再一次，改变世界！'
}


// 通常写法
// document.querySelector('button').onclick = function(){
//     setUserName();
// }


// 如果我这样写就是 onclick 获取了 setUserName函数 的 执行后的返回值，为 null
// document.querySelector('button').onclick = setUserName();


// 这样写效果就跟匿名函数的作用一样了，大不了有名字了
document.querySelector('button').onclick = setUserName;

