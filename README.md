# CLIV

CLIV simple component creator for vue.js from terminal. 


### Install

    npm i -g cliv

###Use

    cliv -c myComponentName -f src/components/myFolder
    
    //✓ myComponentName.vue
    

###Configuration
```bash

    Usage: cliv [componentNames]

    Options:

    -h, --help        output usage information
    -V, --version     output the version number
    -c, --components  Components name
    -f, --folder      Folder name

```

####If you try to create an existing file it will give you an error message from cliv    

`-f` by default **src/components**
