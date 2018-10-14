module.exports=function (templateParams) {
	var _cssList=['vendor'];
    var webAssetsHelp=require('./webAssetsHelp.js')(templateParams,_cssList);
  
    var localStorage = '<script type=\'text/javascript\' >' +
    '    (function(window){' +
    '        var scriptShow=[' + webAssetsHelp.scriptshow + '];' +
    '        var storage=window.localStorage;' +
    '        if(storage){' +
    '            alert("浏览器支持localstorage");' +
    '            return false;' +
    '        }else{' +
    '            for(let i = 0; i < scriptShow.length; i++){' +
    '                let url=scriptShow[i];' +
    '                let scirpt = storage.getItem(url);' +
    '                if(scirpt){' +
    '                  $("body").append("<script type=\'text/javascript\' id=\'" + i + "\'>" + scirpt + "</scirpt>").remove("#" + i);' +
    '                }else{' +
    '                    $.get(url, function(data){' +
    '                        storage.setItem(url,data);' +
    '                        $("body").append("<script type=\'text/javascript\' id=\'" + i + "\'>" + data + "</scirpt>");' +
    '                       ' +
    '                    },"text");' +
    '                }' +
    '            }' +
    '        }' +
    '    })(window); ' +
    ' </scirpt>';
   
	var _html="{% extends './layout.html' %}"+
              "{% block title %}thumb{% endblock %}"+
              "{% block styles %}"+
              webAssetsHelp.styles+
              "{% endblock %}"+
              "{% block content %}{% include '../widget/index.html' %}{% endblock %}"+
              "{% block script %}"+
              webAssetsHelp.scripts+
              localStorage +
              "{% endblock %}";

              return _html;
}
