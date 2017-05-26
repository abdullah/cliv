# CLIV

CLIV simple component creator for vue.js from terminal.


### Install

`npm i -g cliv`


#### Use

```bash
  cliv -c myComponentName -f src/components/myFolder
  src/components/myFolder/myComponentName.vue ✓
 ```

If you need a reverse template like; `script`, `template`, `style` order? You can use -r  option.

```bash
  cliv -c myComponentName -f src/components/myFolder -r
  src/components/myFolder/myComponentName.vue ✓

```

### Options

```bash

  Usage: cliv [componentNames]

  Options:

  -h, --help        output usage information
  -V, --version     output the version number
  -c, --components  Components name
  -f, --folder      Folder name
  -s, --super       Super template
  -r, --reverse     Reverse field order in template

```

If you try to create an existing file it will give you an error message from cliv

`-f` by default **src/components**

