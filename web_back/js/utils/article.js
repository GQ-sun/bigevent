
var article={
    show:function(param,callBack){
        $.get(URLIST.article_show,param,function(res){
            callBack(res);
        })
    },
    del:function(id,callBack){
        $.get(URLIST.article_del,{id:id},function(res){
            callBack(res);
        })
    },
    add:function(fd,callBack){
        $.ajax({
            type:'post',
            url:URLIST.article_add,
            data: fd,
            success: function (res) {
                callBack(res);
            },
            processData:false,//让JQuery不要处理数据，它无法处理formdata
            contentType:false//不要额外设置请求头
        });
    }
}