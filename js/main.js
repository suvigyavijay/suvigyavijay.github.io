$('.navbar-btn').on('click', function (event) {
    event.preventDefault();
    $('.nav-active').removeClass('nav-active');
    $(this).addClass('nav-active');
})

function showPage(pgId) {
    showLoader(0);
    $('.pages').html(pages[pgId]);
    Prism.fileHighlight();
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
    if ($('.pages').text().search('Loading...') != -1) {
        setTimeout(hideLoader, 500);
        return;
    }
    $('.loader').addClass('d-none');
}

let pages = [
    `<div class="page about page-visible">
        <pre data-src="about.py"></pre>
    </div>`,
    `<div class="page work">
        <pre data-src="work.js"></pre>
    </div>`,
    `<div class="page thoughts">
        <pre data-src="thoughts.cpp"></pre>
    </div>`
];

$(window).on('load', function () {
    $('.overlay').height($(window).height() - $('.navbar').height() - $('footer').height());
    showPage(0);
    setTimeout(hideLoader, 1500);
})    
