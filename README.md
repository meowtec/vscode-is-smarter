vscode-is-smart
===============

### 简介
关于如何正确使用 VSCode 的 JavaScript 智能提示。

### 使用说明
直接下载此 repo 到本地，用 VSCode 打开，编辑 [index.js](https://github.com/meowtec/vscode-is-smarter/blob/master/index.js)，就能看到智能提示了。

#### jsconfig.json
这是针对 JavaScript 的配置文件，没啥好改的地方，这样就行了。如果写 TypeScript，需要配置 tsconfig.json，那个就有点复杂。

#### tsd.json
VSCode 的智能提示依靠 `d.ts` 文件，而除了最基本的 API，VSCode 是不提供更多 `d.ts` 文件的，需要用户自己添加。我预先添加了 `nodejs` 和 `jquery` 的 `d.ts` 文件，在 typings 目录中。

管理 `d.ts` 有专门的工具，[tsd](http://definitelytyped.org/tsd/) 和 [typings](https://github.com/typings/typings)。大多数情况下是不需要用户手动添加的。
我使用的是 tsd。typings 是新出的，兼容 tsd，功能更强大。
这个项目的 d.ts 文件是 tsd 自动生成的，tsd 的配置文件为 tsd.json。

#### tsd
```
npm i tsd -g
tsd install jquery --save
```

### 其他
实际项目中最好将 typings 添加到 .gitignore
