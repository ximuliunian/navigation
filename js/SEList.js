// 点击的时候出现搜索框
document.getElementById("SE").onclick = function () {
    let list = document.getElementById("SEList");
    if (list.style.display == "flex") {
        list.style.animation = "fadenumDN 0.5s";
        // 等待 0.5 秒之后进行消失
        setTimeout(() => {
            list.style.display = "none";
        }, 500);
    } else {
        // 显示页面
        list.style.animation = "fadenumUP 0.5s";
        list.style.display = "flex";
    }
}

// 获取父元素
let slist = document.getElementById("SEList");

// 获取点击发送的按钮
document.getElementById("clickSearch").onclick = function () {
    sendURL();
};

let search = document.getElementsByName("search")[0];

// 获取焦点事件
search.onkeydown = function (even) {
    if (even.which == 13) {
        sendURL();
    }
}


// 发送信息
let sendURL = function () {
    if (search.value != "")
        open(
            document.getElementById("search_button").getAttribute("data-URL") +
            search.value
        );
    search.value = "";
}

// 获取点击发送的按钮的子元素
let clickSearchImg = document.querySelector("#clickSearch>img");
let clickSearchSpan = document.querySelector("#clickSearch>span");

// 读取搜索栏JSON文件
axios.get("./json/searchEngine.json").then(function (resp) {
    let searchEngine = resp.data;
    // 循环加入数据
    for (let i = 0; i < searchEngine.length; i++) {
        // 创建元素
        let div = document.createElement("div");
        let img = document.createElement("img");
        let span = document.createElement("span");

        // 向元素中添加数据
        div.className = "SEList";
        img.src = searchEngine[i].icon;
        span.textContent = searchEngine[i].name;

        // 注册监听点击事件
        div.addEventListener("click", function () {
            clickSearchImg.src = img.src;
            clickSearchSpan.innerHTML = span.innerText;

            // 切换搜索链接
            document.getElementById("search_button").setAttribute("data-URL", searchEngine[i].URL);

            // 关闭页面
            let list = document.getElementById("SEList");
            list.style.animation = "fadenumDN 0.5s";
            // 等待 0.5 秒之后进行消失
            setTimeout(() => {
                list.style.display = "none";
            }, 500);
        });

        // 添加到元素中
        div.appendChild(img);
        div.appendChild(span);
        slist.appendChild(div);
    }
})