  (function(window){        var scriptShow=[{'name' : 'vendor','path':'http://127.0.0.1:8888/javascript/common/vendor-67c05.min.js','hash':'b69f5252d4fe1e0497c3'},{'name' : 'index','path':'http://127.0.0.1:8888/javascript/index-67c05.js','hash':'ed5de624d02e2fd0a1bb'},{'name' : 'tag','path':'http://127.0.0.1:8888/javascript/tag-67c05.js','hash':'028317b40e40f512f9fd'}];        var storage=window.localStorage;        if(storage){            for(let i = 0; i < scriptShow.length; i++){                let name = scriptShow[i].name;                let hash = scriptShow[i].hash;                let localhash = storage.getItem(name);                if(hash===localhash){                  let script = storage.getItem(hash);                  $("<scr" + "ipt >" + script + "</scr" + "ipt >" ).attr({"type":"text/javascript","id" : i}).appendTo("body").remove("#" + i);                }else{                  let path = scriptShow[i].path;                  $.get(path, function(data){                        storage.setItem(name,hash);                        storage.setItem(hash,data);                        $("<scr" + "ipt >"  + data + "</scr" + "ipt >" ).attr({"type":"text/javascript","id" : i}).appendTo("body").remove("#" + i);                                           },"text");                }            }    })(window);  