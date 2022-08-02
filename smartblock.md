- #SmartBlock Render Model (rmod)
    - <%SET:render_model_block_ref,<%CURRENTBLOCKREF%>%><%SET:rmod_graph_query,<%INPUT:Is the url for a model uploaded to a roam graph?%%Yes%%No%>%>
<%SET:render_block_src,<%CURRENTBLOCKCONTENT%>%>
<%IFVAR:rmod_graph_query,Yes%><%SET:render_block_src,<%REPLACE:<%CURRENTBLOCKCONTENT%>,&,%26%>%><%NOBLOCKOUTPUT%>
    - <%NOBLOCKOUTPUT%>#[[Smartblock Comment]] ^^Grabbing the current block content and storing it a variable. Additionally escaping & which causes an issue w/ roam-research firebase urls^^
    - <%SET:iframe_comp_fix,{{iframe-component%><%NOBLOCKOUTPUT%>
    - <%NOBLOCKOUTPUT%>#[[Smartblock Comment]] ^^Fix for leaving presentation as text and not rendering inside block^^
    - <%UPDATEBLOCK:<%GET:render_model_block_ref%>,<%GET:iframe_comp_fix%>: https://ryxai.github.io/roam-model-render/ | <%GET:render_block_src%>,<%INPUT:What is the viewer height (in pixels?)%>,<%INPUT:What is the viewer width (in pixels)? Note the maximum recommended width is 500 pixels to handle sidebars.%>,<%GET:rmod_graph_query%>}}%>
    - <%NOBLOCKOUTPUT%>#[[Smartblock Comment]] ^^Main body of block. Uses https://ryxai.github.io/roam-model-render/  to render the iframe. See the source [here](https://github.com/Ryxai/roam-model-render)^^
    - <%NOBLOCKOUTPUT%>Documentation
        - Usage: Copy paste the link you would like to use into a block then trigger this smart block. If you are loading a model from your uploaded items to Roam please make sure to specify that it is from a graph. 
            - Syntax for passing url
                - **Url**,__height__,__width__,__graph_option__
            - Default settings assumed by server if not provided:
                - Height: 300
                - Width: 300
                - Is from a roam graph: No
        - ^^Note^^: Please note due to the way that modelviewer.js works only glTF/GLB filetypes are supported. There are a number of ways to convert your model to this format should you need. 
        - This smartblock utilizes an external site located on Github [here](https://github.com/Ryxai/roam-model-render).  The source code for this site is completely open and available. This site has no tracking, however as the site is sent the full url to load, it will be likely loaded into Github's logs. If there are any secret details in the URI you may consider using a different method of loading the model than this smartblock. 
        - **Issues?** [Please file them here](https://github.com/Ryxai/roam-model-render/issues)
