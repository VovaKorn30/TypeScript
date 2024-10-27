
import $ from 'jquery';

export function placeholder() {
    if (typeof (document.createElement('input')).placeholder !== 'undefined') return $(this);
    $(this).each(function () {
        const $input = $(this).find('input, textarea');
        $input.val($input.attr('placeholder')).addClass('polyfill-placeholder').on('focus blur', function () {
            $(this).toggleClass('polyfill-placeholder', !$(this).val());
        });
    });
    return $(this);
}
