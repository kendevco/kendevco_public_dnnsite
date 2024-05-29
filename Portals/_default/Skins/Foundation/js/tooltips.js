
$(document).ready(function () {
    // Add the Tooltip
    $('.ui').on('mouseover', '.has-tooltip', function () {
        // Don't dup the tooltip
        if ($('.tooltip-info').length <= 0) {
            var el = '';
            var tooltipText = '';

            // Check if we're getting our title attr from a label,
            // otherwise, get it from the p
            if ($(this).find('label').length > 0) {
                tooltipText = $(this).find('label').attr('title');
            } else {
                tooltipText = $(this).find('p').attr('title');
            }
            if ($(this).find('span').not('.required-input').length > 0) {
                el = $(this).find('span');
                el.append('<span class="tooltip-info">' + tooltipText +'</span>');
                $('.tooltip-info').css('left', (el.width() + 70));
            } 
            if ($(this).find('p').length > 0) {
                el = $(this).find('p');
                el.append('<span class="tooltip-info">' + tooltipText + '</span>');
                $('.tooltip-info').css('left', (el.width() + 60));
            }
        }
    });

    // Remove the tooltip
    $('.ui').on('mouseleave', '.has-tooltip', function () {
        if ($('.tooltip-info').length > 0) {
            $('.tooltip-info').remove();
        }
    });
});