# digo-coffee-script
[digo](https://github.com/digojs/digo) 插件：使用 [coffeescript](https://github.com/jashkenas/coffeescript) 编译 CoffeeScript。

## 安装
```bash
npm install digo-coffee-script -g
```

## 用法
### 编译 CoffeeScript 并重命名为 JS
```js
digo.src("*.coffee").pipe("digo-coffee-script");
```

### 源映射(Source Map)
本插件支持生成源映射，详见 [源映射](https://github.com/digojs/digo/wiki/源映射)。

## 选项
```js
digo.src("*.coffee").pipe("digo-coffee-script", {
	bare: false,
	header: false,
	literate: false,
	filename: "",
	sourceMap: "",
	sourceRoot: false,
	generatedFile: "",
	sourceFiles: [""]
    // 选项...
});
```

另参考: [https://github.com/jashkenas/coffeescript/](https://github.com/jashkenas/coffeescript/)。
