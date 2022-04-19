window.onload = () => {
 const params = (new URL(document.location)).searchParams;
 const opts = params.get("opts");
 var graph = false;
 var height, width = 300;
 var model_url = opts;
 if (opts.lastIndexOf(',') > 0){
   graph = opts.slice(opts.lastIndexOf(',') + 1);
   model_url = opts.slice(0,opts.lastIndexOf(','));
   if (model_url.lastIndexOf(',') > 0){
     width = model_url.slice(model_url.lastIndexOf(',') + 1);
     model_url = model_url.slice(0,model_url.lastIndexOf(','));
     if (model_url.lastIndexOf(',') > 0){
     height = model_url.slice(model_url.lastIndexOf(',') + 1);
     model_url = model_url.slice(0,model_url.lastIndexOf(','));
     }
   }
 }
 graph = graph === 'Yes';
 if (graph) {
   model_url = model_url.replace(/imgs\/app\/([a-z0-9\-A-Z_]+)\//,(a,b) => {return "imgs%2Fapp%2F" + b + "%2F"});
 }
 const model = '<div><model-viewer src="' + model_url + '" seamless-poster shadow-intensity="1" camera-controls enable-pan style="width: ' + width + 'px;height: ' + height + 'px;"></model-viewer></div>'
 document.body.innerHTML += model;
};
