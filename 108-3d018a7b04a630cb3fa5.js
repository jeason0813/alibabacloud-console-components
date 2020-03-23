(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{dm66:function(e,n,t){"use strict";t.r(n),t.d(n,"demoMeta",(function(){return i})),t.d(n,"_demoSrcFiles",(function(){return s}));var a=t("mXGw"),r=t.n(a),l=t("BgHK"),o=l.Form.Item,c=l.Select.Option,m={labelCol:{span:6},wrapperCol:{span:14}};n.default=function(){return r.a.createElement(l.Form,m,r.a.createElement(o,{label:"Input Error：",validateState:"error",help:"Please enter a numeric and alphabetic string"},r.a.createElement(l.Input,{defaultValue:"Invalid choice"})),r.a.createElement(o,{label:"Loading：",hasFeedback:!0,validateState:"loading",help:"Information Checking..."},r.a.createElement(l.Input,{defaultValue:"Checking"})),r.a.createElement(o,{label:"Success：",hasFeedback:!0,validateState:"success"},r.a.createElement(l.Input,{defaultValue:"Successful verification"})),r.a.createElement(o,{label:"Datepicker：",validateState:"error",help:"Please select the correct date"},r.a.createElement(l.DatePicker,null)),r.a.createElement(o,{label:"Timepicker：",validateState:"error",help:"Please select the correct time"},r.a.createElement(l.TimePicker,null)),r.a.createElement(o,{label:"Select：",validateState:"error",help:"Please select a country"},r.a.createElement(l.Select,{placeholder:"Please select a country"},r.a.createElement(c,{value:"china"},"China"),r.a.createElement(c,{value:"use"},"United States"),r.a.createElement(c,{value:"japan"},"Japan"),r.a.createElement(c,{value:"korean"},"South Korea"),r.a.createElement(c,{value:"Thailand"},"Thailand"))),r.a.createElement(o,{label:"NumberPicker：",validateState:"error"},r.a.createElement(l.NumberPicker,{defaultValue:0})))};var i={zhName:"校验提示",zhDesc:"为 `<FormItem>` 定义 `state` 属性控制三种校验状态。\n\n\t如果是  `<Input>` 组件, 可在`<FormItem>`上面添加 `hasFeedback` 控制图标的展示\n\t\n\t**注意**: 反馈图标只对 `<Input />` 有效。"},s={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo10";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/styles.less":"","src/demo/demo10.js":'import React from \'react\'\nimport {\n  Form,\n  Input,\n  DatePicker,\n  TimePicker,\n  NumberPicker,\n  Select,\n} from \'@alicloud/console-components\'\n\nconst FormItem = Form.Item\n\nconst { Option } = Select\n\nconst formItemLayout = {\n  labelCol: {\n    span: 6,\n  },\n  wrapperCol: {\n    span: 14,\n  },\n}\n\nconst Demo10 = () => (\n  <Form {...formItemLayout}>\n    <FormItem\n      label="Input Error："\n      validateState="error"\n      help="Please enter a numeric and alphabetic string"\n    >\n      <Input defaultValue="Invalid choice" />\n    </FormItem>\n\n    <FormItem\n      label="Loading："\n      hasFeedback\n      validateState="loading"\n      help="Information Checking..."\n    >\n      <Input defaultValue="Checking" />\n    </FormItem>\n\n    <FormItem label="Success：" hasFeedback validateState="success">\n      <Input defaultValue="Successful verification" />\n    </FormItem>\n\n    <FormItem\n      label="Datepicker："\n      validateState="error"\n      help="Please select the correct date"\n    >\n      <DatePicker />\n    </FormItem>\n\n    <FormItem\n      label="Timepicker："\n      validateState="error"\n      help="Please select the correct time"\n    >\n      <TimePicker />\n    </FormItem>\n\n    <FormItem\n      label="Select："\n      validateState="error"\n      help="Please select a country"\n    >\n      <Select placeholder="Please select a country">\n        <Option value="china">China</Option>\n        <Option value="use">United States</Option>\n        <Option value="japan">Japan</Option>\n        <Option value="korean">South Korea</Option>\n        <Option value="Thailand">Thailand</Option>\n      </Select>\n    </FormItem>\n\n    <FormItem label="NumberPicker：" validateState="error">\n      <NumberPicker defaultValue={0} />\n    </FormItem>\n  </Form>\n)\n\nexport default Demo10\n\nexport const demoMeta = {\n  zhName: `校验提示`,\n  zhDesc: `为 \\`<FormItem>\\` 定义 \\`state\\` 属性控制三种校验状态。\n\n\t如果是  \\`<Input>\\` 组件, 可在\\`<FormItem>\\`上面添加 \\`hasFeedback\\` 控制图标的展示\n\t\n\t**注意**: 反馈图标只对 \\`<Input />\\` 有效。`,\n}\n',"demoMeta.json":'{"entryPath":"src/demo/demo10.js"}'}}}]);
//# sourceMappingURL=108-3d018a7b04a630cb3fa5.js.map