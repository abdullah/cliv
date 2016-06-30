'use strict';

const program 	= require('commander');
const path 		= require('path');
const _PWD 		= process.env.PWD;
const _PCK_JSON = path.join(_PWD ,'package.json');
console.log(_PCK_JSON)
const app 		= require(_PCK_JSON);
const fs 		= require('fs');
const colors 	= require('colors');


const template = fs.readFileSync(path.join('./template.vue'), { encoding: 'utf-8' });
const _path = app.cliv_path ? path.join(_PWD,app.cliv_path) : path.join(_PWD,"app/components");


program
  .version(app.version)
  .option('[name]', 'Add new components')
  .parse(process.argv);
 

 if (program.args.length) {
 	program.args.map(function(index, elem) {
		var file = path.join(_path,index+'.vue');
		fs.writeFile(file,template,function (e) {
			if (e) console.log("Oh no !")
			console.log("Success",file.green);	
		})
 	})
 }else{
 	console.log("Please component name mate!")
 }
