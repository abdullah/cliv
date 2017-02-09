#!/usr/bin/env node

var program = require('commander');
var commandLineArgs = require('command-line-args')
var path = require('path');
var fs = require('fs');
var colors 	= require('colors');
var shell = require('shelljs');


program
  .version('1.0.7')
  .usage('[componentNames]')
  .option('-c, --components', 'Components name')
  .option('-f, --folder', 'Folder name')
  .parse(process.argv)


var args = program.args
var cwd = process.cwd();


var optionDefinitions = [
  { name: 'components', alias: 'c', type: String, multiple: true },
  { name: 'folder', alias: 'f', type: String}
]

var options = commandLineArgs(optionDefinitions)

if (options.components && options.components.length) {
  createComponent()
}else{
  console.log("You should type the component name".red)
}


function createComponent() {

  var componentNames = options.components;
  var optionFolder = options.folder;

  var clivTemplate = fs.readFileSync(path.join(__dirname,'template.vue'), { encoding: 'utf-8' });
  var componentPath = path.join(cwd,optionFolder ? optionFolder : "/src/components");
  

  if (!fs.existsSync(componentPath)){
	shell.mkdir('-p', componentPath);
  }

  componentNames.forEach( function(fileName) {
  	  var file = path.join(componentPath , fileName +  '.vue');
  	  
  	  	if (!fs.existsSync(file)) {
		  
		  fs.writeFile(file,clivTemplate,function (e) {
		      if (e) console.log(e)

		      console.log(("✓ "+fileName+'.vue').green);  
		  })

		}else{
		      console.log(("File is exist => ").red + file);  
		} 

  });


}
