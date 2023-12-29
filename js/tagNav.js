// 先请求所有的分类
axios.get("./json/allPlates.json").then(function (resp) {
    let allPlates = resp.data;
    let tag_element_div = document.getElementById("tag_element_div");
    // 遍历对象中的所有键值对
    for (const key in allPlates) {
        createDiv(key);
        createDivTab(key, allPlates[key]);
    }
});

// 创建标签内容
var createDivTab = function (keys, val) {
    let key = document.getElementById(keys);
    // 请求内容
    axios.get(val).then(function (resp) {
        let re = resp.data;
        for (let i = 0; i < re.length; i++) {
            // 创建数据
            let div = document.createElement("div");
            let a = document.createElement("a");
            let img = document.createElement("img");
            let span = document.createElement("span");

            // 填入内容
            a.href = re[i].URL;
            a.target = "_blank";
            img.src = re[i].icon;
            span.textContent = re[i].name;

            // 数据链接
            a.appendChild(img);
            a.appendChild(span);
            div.appendChild(a);
            key.appendChild(div);
        }
    })
}

// 创建大框架
var createDiv = function (key) {
    // 创建外壳
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let divs = document.createElement("div");
    // 填充数据
    div.className = "tag_element";
    h2.textContent = key;
    divs.className = "tag_element_div";
    divs.id = key;
    // 链接数据
    div.appendChild(h2);
    div.appendChild(divs);
    document.getElementById("tag_element").appendChild(div);
}