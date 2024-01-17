// 先请求所有的分类
axios.get("./json/allPlates.json").then(function (resp) {
    let allPlates = resp.data;
    let tag_element_div = document.getElementById("tag_element_div");
    // 创建索引
    createDivIndex();
    for (const key in allPlates) {
        createDivTabIndex(key);
    }

    // 遍历对象中的所有键值对
    for (const key in allPlates) {
        createDiv(key);
        createDivTab(key + "_z", allPlates[key]);
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
    div.id = key;
    h2.textContent = key;
    divs.className = "tag_element_div";
    divs.id = key + "_z";
    // 链接数据
    div.appendChild(h2);
    div.appendChild(divs);
    document.getElementById("tag_element").appendChild(div);
}

// 创建索引外壳
var createDivIndex = function () {
    // 创建外壳
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let divs = document.createElement("div");
    // 填充数据
    div.className = "tag_element";
    h2.textContent = "索引";
    divs.className = "tag_element_div_index";
    // 链接数据
    div.appendChild(h2);
    div.appendChild(divs);
    document.getElementById("tag_element").appendChild(div);
}

// 创建索引标签内容
var createDivTabIndex = function (keys) {
    // 创建数据
    let a = document.createElement("a");
    // 填入内容
    a.href = "#" + keys;
    a.textContent = keys;
    // 数据链接
    document.getElementsByClassName("tag_element_div_index")[0].appendChild(a);
}