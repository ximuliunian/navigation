# navigation
## 介绍

使用原生 js 书写的页面导航栏，包括搜索框支持更换搜索引擎，主要是通过 JSON 进行解析并渲染到页面进行展示

### 使用方法

要是自定义的话只需要对其JSON文件夹里面的内容进行更改即可

### 文件介绍

`searchEngine.json`：里面是搜索引擎的地址信息

`image`：里面存放的是背景图片的地址信息

`allPlates`：里面存放的是具体的分类

`display_content文件夹`：里面存放的是具体的标签信息

### JSON介绍

#### searchEngine

```json
{
    "name": "名字",
    "icon": "图标位置",
    "URL": "具体链接"
}
```

#### image

```json
[
    "https://xxxxx.png",
    "https://xxxxx.png",
    "这里存放的是被背景图片链接，会随机展示其中的背景"
]
```

#### allPlates

```json
{
    "模块名称": "模块内的导航标签的json位置",
    "模块名称": "模块内的导航标签的json位置"
}
```

#### display_content文件夹

这个文件夹里面存放的都是导航标签的具体信息JSON

```json
{
    "name": "标签名称",
    "icon": "标签图标",
    "URL": "标签网址"
}
```

