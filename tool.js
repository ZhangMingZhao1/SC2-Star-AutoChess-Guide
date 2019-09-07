const item = require('./itemsko.js');
const fs = require('fs');
const ko = [];
item.items.map((v,k)=>{
    console.log(v.name);
    // ko.push.v.name.toSting();
});
fs.writeFileSync('name.js',JSON.stringify(ko),'utf8');
