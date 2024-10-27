import { breakpoints } from './modules/breakpoints/breakpoints';
import { initBrowser } from './modules/browser/browser.min';
import { utils } from './modules/utils/util';

(($) => {
    // Використання breakpoints
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px']
    });

    // Ініціалізація функцій для браузера
    initBrowser();

    // Використання utility функцій
    utils.someUtilityFunction();
})(jQuery);
