$(document).ready(
    function(){
        
        $('#main_menu>li>.sub').hide();
        $('#main_menu,.drop_box').mouseover(function(){       
            $('.drop_box,.sub').stop().slideDown();
            // $(this).find('.sub').stop().slideDown();
        
        });
        $('#main_menu,.drop_box').mouseleave(function(){       
            $('.drop_box,.sub').stop().slideUp();
            // $(this).find('.sub').stop().slideUp();
        
        });

        // 모바일 메뉴 창------------------------------------
        // $('.m_box').hide();
        // $('.menu_btn').click(function(){
        //     $('.m_box').stop().slideToggle(500);
        //     return false;
            
            
        // });
        $('.menu_btn').click(function(){            
            if($('.m_box').hasClass('active')){
                $('.m_box .sub').hide();
                $('.m_box').removeClass('active');

    
                $('i').removeClass('fa-xmark');
                $('i').addClass('fa-bars');
            }
    
            else{
                $('.m_box').addClass('active');
    
                $('i').removeClass('fa-bars');
                $('i').addClass('fa-xmark');
                
            }
            return false;

        });

        

        
        
        $('.m_box .sub').hide();
        $('#m_main_menu>li>a').click(function(){
            $(this).next('.m_box .sub').stop().slideToggle('slow');
            return false;
        });


        // $('.blur').hide();
        $('.menu_btn').click(function(){
            // $('.blur').stop().slideToggle('slow');
            // return false
            if($('.blur').hasClass('active')){
                $('.blur').removeClass('active');
            }
            else{
                $('.blur').addClass('active');
            }
            return false
        });



        // 슬라이더
        $('.slide_img img:gt(0)').hide();
        // 반복
        setInterval(()=> {
            $('.slide_img img:first').fadeOut(3000).next().fadeIn(3000).end().appendTo('.slide_img');
        },8000);
    });
    
   
