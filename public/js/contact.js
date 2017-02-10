$(document).ready(function(){
    (function(){
        var $submit = $('#submit');
        var val = $submit.val();
        $submit.on('click',handleClick);
        function handleClick(){
            var username = $('.username').val();
            var email = $('.email').val();
            var message = $('.message').val();
            if(!username||!email||!message){
                alert('输入有误请检查');
                return;
            };
            if(!(/^\w*[@]\w*(\.com)$/.test(email))){
                alert('邮箱输入有误，请重新输入');
                $('.email').val('').focus();
                return;
            };
            //  移除事件
            $submit.off('click',handleClick);
            $submit.val('提交中...');
            $.ajax({
                type: 'POST',
                url: '/contact/inputmessage',
                data: {username:username,email:email,message:message},
                success: function(data){
                    $submit.on('click',handleClick);
                    $submit.val(val);
                    if(data === 'success'){
                        alert('数据提交成功');
                        $('.username').val('');
                        $('.email').val('');
                        $('.message').val('');
                    }else if(data === 'fail'){
                        alert('小伙子，名字撞了，换一个.');
                        $('.username').val('').focus();
                        //$('.email').val('');
                        //$('.message').val('');
                    }
                }
            });
        }
    })();
});