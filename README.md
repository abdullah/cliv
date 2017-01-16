# CLIV

CLIV simple component creator for vue.js from terminal. 


### Install

    npm i -g cliv

###Use

    cliv App
    // Success ...root/App.vue
    //Done!

###Configuration

Our need only one key for component dir ,  use the package.json. For example ;
#####package.json

    ...
    "cliv_path": "app/components", // relative path project root
    or
	"cliv_path": "src/mycomponents", // relative path project root
    ...

cliv_path by default **app/components**
