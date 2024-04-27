$(document).ready(() => {

    $('#product').on('click', (e) => {
        e.preventDefault()
        $('.product-dropdown').slideToggle()
    })

    $('.product-dropdown').on('mouseleave', () => {
        $('.product-dropdown').hide()
    });

    $('#company').on('click', (e) => {
        e.preventDefault();
        $('.company-dropdown').slideToggle()
    });

    $('.company-dropdown').on('mouseleave', () => {
        $('.company-dropdown').hide()
    });

    $('#connect').on('click', (e) => {
        e.preventDefault();
        $('.connect-dropdown').slideToggle()
    });

    $('.connect-dropdown').on('mouseleave', () => {
        $('.connect-dropdown').hide()
    });

    $('.open').on('click', (e) => {
        $(e.currentTarget).toggle();
        $('.close').toggle();
        $('.nav-items').slideToggle();
    })

    $('.close').on('click', (e) => {
        $(e.currentTarget).toggle();
        $('.open').toggle();
        $('.nav-items').slideToggle();
    })
})