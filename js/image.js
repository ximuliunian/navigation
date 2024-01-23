// 进行选取加载器图片
let r =
    [
        {
            "img": "../../img/loading/loading1.gif",
            "bgcolor": "rgb(41, 41, 41)"
        },
        {
            "img": "../../img/loading/loading2.gif",
            "bgcolor": "rgb(77, 182, 172)"
        }
    ];

r = r[Math.floor(Math.random() * r.length)];
document.getElementById("loading").style.backgroundColor = r.bgcolor;
document.getElementById("loadingImg").src = r.img;

// 读取背景JSON文件
axios.get("./json/image.json").then(function (resp) {
    let r = resp.data;
    document.getElementById("backgroundImage").src = r[Math.floor(Math.random() * r.length)];
})

// 当页面图片加载好之后
function loadingOk() {
    document.getElementById("loading").remove();
}