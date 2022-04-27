# roam-model-render
A simple site to act as a renderer for modelviewer for roam-research

In order to use this most effectively please utilize the following smartblock [here](https://raw.githubusercontent.com/Ryxai/roam-model-render/main/smartblock.md). You will need the [SmartBlocks extension](https://roamjs.com/extensions/smartblocks) to use it. 

**Status in the Smartblock Store**: **Available**

The syntax for the website should you choose to use it independently is 

`{{iframe-component: https://ryxai.github.io/roam-model-render/ | **URL**,height,width,graph}}`

Where the variables use the following structure:
 * Height: pixels
 * Width: pixels
 * Graph: Either Yes or No, represents whether the url is from a file uploaded to your roam graph (has a firebase url). 

Example

 `{{iframe-component: https://ryxai.github.io/roam-model-render/ | https://modelviewer.devshared-assets/models/NeilArmstrong.glb,300,300,No}}`
  
  
