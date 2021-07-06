        $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=14){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            alert('不知道吃啥可以问问我呀哈哈哈哈哈')
            $(this).hide();
        })