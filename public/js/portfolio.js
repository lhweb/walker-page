$(document).ready(function(){
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