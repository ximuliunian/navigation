// 进行选取加载器图片
axios.get("./json/loading.json").then(function (resp) {
    let r = resp.data;
    r = r[Math.floor(Math.random() * r.length)];
    document.getElementById("loading").style.backgroundColor = r.bgcolor;
    document.getElementById("loadingImg").src = r.img;
})

// 读取背景JSON文件
axios.get("./json/image.json").then(function (resp) {
    let r = resp.data;
    document.getElementById("backgroundImage").src = r[Math.floor(Math.random() * r.length)];
})

// 当页面图片加载好之后
function loadingOk() {
    document.getElementById("loading").remove();
}