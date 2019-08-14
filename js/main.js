$('.navbar-btn').on('click', function (event) {
    event.preventDefault();
    $('.nav-active').removeClass('nav-active');
    $(this).addClass('nav-active');
})

function showPage(ref, className) {
    // showLoader(0.3);
    $('.page-visible').removeClass('page-visible');
    console.log(className);
    $('.' + className).addClass('page-visible');
}

function showLoader() {
    $('.loader').removeClass('d-none');
}

function showLoader(numSecs) {
    $('.loader').removeClass('d-none');
    setTimeout(() => {
        hideLoader();
    }, numSecs*1000);
}

function hideLoader() {
    $('.loader').addClass('d-none');
}

$(window).on('load', function () {
    setTimeout(() => {
        $('.page').map((i, e) => $(e).addClass('d-none'));
        hideLoader();
    }, 1000);
})
