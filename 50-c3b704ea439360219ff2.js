(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"eS/v":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return r})),t.d(n,"_demoSrcFiles",(function(){return c}));var a=t("mXGw"),s=t.n(a),l=t("BgHK");t("aQWq");function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var r=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).state={value:[],data:[],multiple:!1},t.handleCheck=t.handleCheck.bind(o(t)),t.handleChange=t.handleChange.bind(o(t)),t}t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var r=a.prototype;return r.componentDidMount=function(){var e=this;fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json").then((function(e){return e.json()})).then((function(n){return e.setState({data:n,value:["2975"]})})).catch((function(e){return console.log(e)}))},r.handleCheck=function(){this.setState({multiple:!this.state.multiple,value:[]})},r.handleChange=function(e,n,t){console.log(e,n,t),this.setState({value:e})},r.render=function(){return s.a.createElement("div",{className:"search-demo"},s.a.createElement("label",{className:"multiple-check"},s.a.createElement(l.Checkbox,{value:this.state.multiple,onChange:this.handleCheck}),s.a.createElement("span",{className:"multiple-text"},"Multiple select")),s.a.createElement(l.CascaderSelect,{style:{width:"302px"},showSearch:!0,multiple:this.state.multiple,value:this.state.value,dataSource:this.state.data,onChange:this.handleChange}))},a}(s.a.Component),c={".babelrc":'{\n  "presets": ["env"],\n  "plugins": [\n    "transform-runtime",\n    [\n      "transform-react-jsx",\n      {\n        "pragma": "React.createElement"\n      }\n    ],\n    "@babel/plugin-proposal-class-properties"\n  ],\n  "parserOpts": {\n    "plugins": ["dynamicImport"]\n  }\n}\n',"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Parcel Sandbox</title>\n    <meta charset="UTF-8" />\n  </head>\n\n  <body>\n    <div id="app"></div>\n\n    <script src="src/index.jsx"><\/script>\n  </body>\n</html>\n',"package.json":'{\n  "name": "parcel-sandbox",\n  "version": "1.0.0",\n  "description": "Simple Parcel Sandbox",\n  "main": "index.html",\n  "scripts": {\n    "start": "parcel index.html --open",\n    "build": "parcel build index.html"\n  },\n  "dependencies": {\n    "react": "16.8.6",\n    "react-dom": "16.8.6",\n    "@alicloud/console-components": "latest",\n    "styled-components": "^4.2.0",\n    "moment": "^2.21.0",\n    "react-copy-to-clipboard": "^5.0.1",\n    "react-dnd": "^8.0.0",\n    "react-dnd-html5-backend": "^8.0.0"\n  },\n  "devDependencies": {\n    "@babel/core": "7.2.0",\n    "parcel-bundler": "^1.6.1",\n    "typescript": "^3.7.2",\n    "@types/styled-components": "^4.1.8",\n    "@types/react": "16.8.8",\n    "@types/react-dom": "16.8.2"\n  }\n}\n',"src/styles.less":"","sandbox.config.json":'{\n  "infiniteLoopProtection": true,\n  "hardReloadOnChange": false,\n  "view": "browser"\n}',"src/index.jsx":'import * as React from "react";\nimport { render } from "react-dom";\nimport "@alicloud/console-components/dist/wind.css";\nimport App from "./demo/demo6";\nimport "./styles.less";\n\nconst rootElement = document.getElementById("app");\nrender(<App />, rootElement);\n',"src/demo/demo6.js":"import React from 'react'\nimport { Checkbox, CascaderSelect } from '@alicloud/console-components'\nimport './demo6.less'\n\nexport default class Demo6 extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      value: [],\n      data: [],\n      multiple: false\n    }\n\n    this.handleCheck = this.handleCheck.bind(this)\n    this.handleChange = this.handleChange.bind(this)\n  }\n\n  componentDidMount() {\n    fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')\n    .then(response => response.json())\n    .then(data => this.setState({ data, value: ['2975'] }))\n    .catch(e => console.log(e))\n  }\n\n  handleCheck() {\n    this.setState({\n      multiple: !this.state.multiple,\n      value: []\n    })\n  }\n\n  handleChange(value, data, extra) {\n    console.log(value, data, extra)\n    this.setState({\n      value\n    })\n  }\n\n  render() {\n    return (\n      <div className=\"search-demo\">\n        <label className=\"multiple-check\">\n          <Checkbox value={this.state.multiple} onChange={this.handleCheck} />\n          <span className=\"multiple-text\">Multiple select</span>\n        </label>\n        <CascaderSelect \n          style={{ width: '302px' }} \n          showSearch \n          multiple={this.state.multiple} \n          value={this.state.value} \n          dataSource={this.state.data} \n          onChange={this.handleChange} />\n      </div>\n    )\n  }\n}","src/demo/demo6.less":".search-demo .multiple-check {\n    display: block;\n    margin-bottom: 10px;\n}\n\n.search-demo .multiple-text {\n    display: inline-block;\n    margin-left: 10px;\n    vertical-align: middle;\n    color: #666;\n    font-size: 14px;\n}","demoMeta.json":'{"entryPath":"src/demo/demo6.js"}'}}}]);
//# sourceMappingURL=50-c3b704ea439360219ff2.js.map