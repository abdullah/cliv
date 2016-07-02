'use strict';

const process = require('process');

const program 	= require('commander');
const path 		= require('path');
const cwd 		= process.cwd();
const _PCK_JSON = path.join(cwd ,'/package.json');
const app 		= require(_PCK_JSON);
const fs 		= require('fs');
const colors 	= require('colors');


const template = fs.readFileSync(path.join(__dirname,'template.vue'), { encoding: 'utf-8' });
const _path = app.cliv_path ? path.join(cwd,app.cliv_path) : path.join(cwd,"/src/components");


program
  .version(app.version)
  .option('[name]', 'Add new components')
  .parse(process.argv);
 

 if (program.args.length) {
 	program.args.map(function(index, elem) {
		const file = path.join(_path,index+'.vue');
		fs.writeFile(file,template,function (e) {
			if (e) console.log("Oh no !",e)
			console.log("Success",file.green);	
		})
 	})
 }else{
 	console.log("Please component name mate!")
 }
