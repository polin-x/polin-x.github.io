        $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=10){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            alert('不知道吃啥可以问问我呀')
            $(this).hide();
        })