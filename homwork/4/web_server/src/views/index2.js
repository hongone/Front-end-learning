module.exports=function (templateParams) {
	var _cssList=['vendor'];
    var webAssetsHelp=require('./webAssetsHelp.js')(templateParams,_cssList);
    var scriptshow = '' + webAssetsHelp.scriptshow;
    scriptshow = scriptshow.replace(/\/public\//g,'/')  
   // console.log(scriptshow);
    var localStorage = '<script type=\'text/javascript\' >' +
    '    (function(window){' +
    '        var scriptShow=[' + scriptshow + '];' +
    '        var storage=window.localStorage;' +
    '        if(storage){' +
    '            let flag = false;' +
    '            for(let i = 0; i < scriptShow.length; i++){' +
    '                let name = scriptShow[i].name;' +
    '                let hash = scriptShow[i].hash;' +
    '                let localhash = storage.getItem(name);' +
    '                if(hash===localhash){' +
    '                  let script = storage.getItem(hash);' +
    '                  $("<scr" + "ipt >" + script + "</scr" + "ipt >" ).attr({"type":"text/javascript","id" : i}).appendTo("body").remove("#" + i);' +
    '                }else{' +
    '                   flag= true;break; ' +
    '                }' +
    '            }' +
    '            if(flag){' + 
    '               storage.clear();  ' +
    '               for(let i = 0; i < scriptShow.length; i++){' +
    '                 let name = scriptShow[i].name;' +
    '                 let hash = scriptShow[i].hash;' +
    '                 let path = scriptShow[i].path; ' +
    '                 axios.get(path).' +
    '                 then(function(data){' + 
    '                        storage.setItem(name,hash);' +
    '                        storage.setItem(hash,data.data);' +
   // '                        $("<scr" + "ipt >"  + data.data + "</scr" + "ipt >" ).attr({"type":"text/javascript","id" : i}).appendTo("body").remove("#" + i);' +
    '                       ' +
    '                 });' +  
    '               }' +
    '             }' +
    '         LazyLoad.js(scriptShow.map(v => v.path), function (arg) {  console.log(arg);});' +
 
    '        }else{' +
    '                ' +
    '        }' +
    '    })(window); ' +
    ' </script>';
   
	var _html="{% extends './layout.html' %}"+
              "{% block title %}thumb{% endblock %}"+
              "{% block styles %}"+
              webAssetsHelp.styles.replace(/\/public\//g,'/')+
              "{% endblock %}"+
              "{% block content %}{% include '../widget/index.html' %}{% endblock %}"+
              "{% block script %}"+
            //  webAssetsHelp.scripts.replace(/src=\'\/public\//g,'src=\'/')+
              localStorage +
              "{% endblock %}";

              return _html;
}
