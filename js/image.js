// 读取背景JSON文件
axios.get("./json/image.json").then(function (resp) {
    let r = resp.data;
    document.getElementById("backgroundImage").src = r[Math.floor(Math.random() * r.length)];
})

// 当页面图片加载好之后
function loadingOk() {
    document.getElementById("loading").remove();
}