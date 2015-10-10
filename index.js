var coffeeScript = require("coffee-script");

module.exports = function Coffee(file, options) {

    // 设置默认值。
    options = Object.assign({
        bare: false,
        header: false,
        literate: /\.(litcoffee|coffee\.md)$/i.test(file.name),
        filename: file.srcName,
        sourceMap: file.sourceMap,
        sourceRoot: false,
        generatedFile: file.srcPath,
        sourceFiles: [file.srcPath]
    }, options);

    // 更改扩展名。
    file.ext = ".js";

    // 生成。
    var result;
    try {
        result = coffeeScript.compile(file.content, options);
    } catch (e) {
        return file.error({
            plugin: Coffee.name,
            error: e,
            line: e.location && e.location.first_line,
            column: e.location && e.location.first_column,
            endLine: e.location && e.location.last_line,
            endColumn: e.location && e.location.last_column + 1
        });
    }

    // 保存。
    file.content = result.js || result;
    if (result.v3SourceMap) {
        file.applySourceMap(result.v3SourceMap);
    }

};
