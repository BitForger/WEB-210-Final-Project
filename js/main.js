/**
 * Created by noahk on 12/3/15.
 */
(function($) {
    var $window = $(window),
        $img = $('#zoom'),
        $vert = $('.vert');

    function resize() {
        if ($window.width() > 700) {
            return $img.addClass('zoom') && $vert.addClass('vert');
        }
        $vert.removeClass('vert');
        $img.removeClass('zoom');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);