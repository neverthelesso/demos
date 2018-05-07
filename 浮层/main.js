$(clickMe).on('click',function () {
    if($(popover).is(':hidden')){  //若浮层是关闭的，点击按钮则打开
        $(popover).show();
    }else {
        $(popover).hide();  //和上面相反
    }
    $(document).one('click',function () {
        $(popover).hide();
    });
});
$(wrapper).on('click',function(e){
    e.stopPropagation();  
});