const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, './index.html')
const html = fs.readFileSync(htmlPath)

// 修改index.html中的发布时间
fs.writeFileSync(path.join(__dirname, './dist/index.html'), html.toString().replace('{{DEPLOYMENT_TIME}}', new Date().toLocaleString()))