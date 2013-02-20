
                $('#mcq-container').append('<div class="swipe"><ul></ul></div>');
                jQuery.each(questions, function(key,obj) {
                        var question = obj['question'];
                        var options = obj['options'];
                        var li = $('#mcq-container .swipe ul').append('<li></li>').children('li:last-child');
                            li.append(question + '<div class="mcq"></div>');
                            var i = 0;
                        jQuery.each(options, function(num,opt) {
                            label = li.children('div.mcq').append('<label></label>').children('label:last-child');
                            if (obj['answer'] == opt || obj['answer'] == num){label.addClass('correct');}
                            label.append(opt);
                            i++;
                        });
                });
            $('.mcq label').append('<i class="icon-ok"></i>').not(':last-child').after('<br>');
                
                $('.mcq label').each(function(){
                    $(this).on("click", function(){
                    var label = $(this);
                        if( label.hasClass('validated') == false){
                    $(this).toggleClass('checked');
                    $(this).parent('div').children('label').not(label).removeClass('checked');}}
                          )}); 
                    
                    
                    
                    $('#mcq-container').append("<div id='validate-button'>Valider</div>");
                
            $('#validate-button').on("click", function(){
                $('.mcq').addClass('validated');
                $('.mcq label').addClass('validated');
                $('label.checked').not('.correct').children('i').removeClass('icon-ok').addClass('icon-remove');
                $('label.correct').addClass('reveal');
                var score = $('label.correct.checked').length;
                var total = $('#mcq-container li').length;
                $(this).after(score + '/' + total);
            });
