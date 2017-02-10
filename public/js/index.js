$(document).ready(function(){
    //  slider数据请求
    (function(){
        $.ajax({
            type: 'POST',
            url: '/index/slider',
            success: function(html){
                $('#camera_wrap_2').html(html);

                // start slider
                (function(){
                    $('#camera_wrap_2').camera({
                        loaderColor:'#EA5A4B',
                        loaderBgColor:'#ffffff',
                        loader: 'pie',
                        pagination: false,
                        thumbnails: true,
                        pieDiameter: 50,
                        //rows:50,
                        //slicedCols: 50,
                        //slicedRows: 50,
                        // portrait:true,  // 视窗模式
                        // navigation: false,  // 是否有耳朵
                    });
                })();
            }
        });
    })();

    //  grid数据请求
    (function(){
        $.ajax({
            type: 'POST',
            url: '/index/grid',
            success: function(html){
                $('.main > .grids_1_of_3').html(html);
            }
        });
    })();


    //  请求impression数据
    (function(){
        $.ajax({
            type: 'POST',
            url: '/index/impression',
            success: function(html){
                $('#portfoliolist').html(html);
                // start过滤
                (function(){
                    //  过滤筛选配置
                    var filterList = {

                        init: function () {

                            // MixItUp plugin
                            // http://mixitup.io
                            $('#portfoliolist').mixitup({
                                targetSelector: '.portfolio',
                                filterSelector: '.filter',
                                effects: ['fade'],
                                easing: 'snap',
                                // call the hover effect
                                onMixEnd: filterList.hoverEffect()
                            });

                        },

                        hoverEffect: function () {

                            // Simple parallax effect
                            $('#portfoliolist .portfolio').hover(
                                function () {
                                    $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                                    $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
                                },
                                function () {
                                    $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                                    $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
                                }
                            );

                        }

                    };

                    // Run the show!
                    filterList.init();
                })();
                // start show detail
                (function(){
                    $('.popup-with-zoom-anim').click(function(){
                        var _this = $(this);
                        var imgSrc = _this.children().first().attr('src');
                        $('.pop_up > img').attr('src',imgSrc);
                        $('.pop_up > .title').text(_this.siblings().find('.text-title').eq(0).text());
                        $('.pop_up > .para').text(_this.data('para'));
                    });
                })();

                //
                (function(){
                    $('.popup-with-zoom-anim').magnificPopup({
                        type: 'inline',
                        fixedContentPos: false,
                        fixedBgPos: true,
                        overflowY: 'auto',
                        closeBtnInside: true,
                        preloader: false,
                        midClick: true,
                        removalDelay: 300,
                        mainClass: 'my-mfp-zoom-in'
                    });
                })();
            }
        })
    })();



});

