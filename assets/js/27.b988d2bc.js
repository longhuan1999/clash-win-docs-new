(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{421:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixin"}},[t._v("#")]),t._v(" Mixin")]),t._v(" "),s("h2",{attrs:{id:"版本要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本要求"}},[t._v("#")]),t._v(" 版本要求")]),t._v(" "),s("p",[t._v("0.9.5 版本更新后，支持向所有配置文件中注入公共属性设置")]),t._v(" "),s("h2",{attrs:{id:"配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),s("p",[t._v("例如：在配置文件中统一添加"),s("code",[t._v("dns")]),t._v("字段，操作如下：")]),t._v(" "),s("ol",[s("li",[t._v("进入 Settings 页面")]),t._v(" "),s("li",[t._v("滚动至 Profile Mixin 栏")]),t._v(" "),s("li",[t._v("点击 YAML 右边 Edit 小字打开编辑界面")]),t._v(" "),s("li",[t._v("在修改编辑界面内容为："),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nameserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 8.8.8.8\n")])])])]),t._v(" "),s("li",[t._v("点击编辑器右下角保存")])]),t._v(" "),s("p",[t._v("在启动或切换配置时，上面内容将会替换到原有配置文件中进行覆盖")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("配置文件内容不会被修改，混合行为只会发生在内存中")]),t._v(" "),s("p",[t._v("可以通过任务栏图标菜单开关这个行为")])]),t._v(" "),s("h2",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[t._v("#")]),t._v(" JavaScript")]),t._v(" "),s("p",[t._v("0.10.1 版本更新后，支持使用 JavaScript 进行 mixin 配置，需要传入一个字符串（yaml 多行字符串使用"),s("code",[t._v("｜")]),t._v("）")]),t._v(" "),s("p",[t._v("具体步骤如上，只需要将代码填入 JavaScript 栏中，并将 Type 设置成 JavaScript 即可：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("parse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" axios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" yaml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" notify "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" extra "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      enable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      listen"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":53"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      nameserver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8.8.8.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("extra "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),s("p",[t._v("CFW 调用用户定义的"),s("code",[t._v("parse")]),t._v("方法时，会传入 2 个参数，分别是"),s("strong",[t._v("配置文件元数据")]),t._v("以及"),s("strong",[t._v("工具类对象/方法")])]),t._v(" "),s("h4",{attrs:{id:"配置文件元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件元数据"}},[t._v("#")]),t._v(" 配置文件元数据")]),t._v(" "),s("p",[t._v("包括：")]),t._v(" "),s("ol",[s("li",[t._v("content：yaml 格式化后的 JavaScript 对象")]),t._v(" "),s("li",[t._v("name：配置文件文件名")]),t._v(" "),s("li",[t._v("url：配置文件下载地址")])]),t._v(" "),s("h4",{attrs:{id:"工具类对象-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具类对象-方法"}},[t._v("#")]),t._v(" 工具类对象/方法")]),t._v(" "),s("p",[t._v("包括：")]),t._v(" "),s("ol",[s("li",[t._v("axios：网络请求框架，"),s("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("yaml：yaml 框架，"),s("a",{attrs:{href:"https://github.com/eemeli/yaml",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("notify：发出系统通知方法，签名为"),s("code",[t._v("function notify(title:string, message:string, silent:bool)")])])]),t._v(" "),s("h3",{attrs:{id:"返回说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回说明"}},[t._v("#")]),t._v(" 返回说明")]),t._v(" "),s("p",[s("code",[t._v("parse")]),t._v("方法需要返回一个对象，CFW 会将返回的对象序列化后直接载入")])])}),[],!1,null,null,null);a.default=e.exports}}]);