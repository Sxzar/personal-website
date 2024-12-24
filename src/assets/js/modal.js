let modals = document.querySelectorAll('.ps__modal');


modals.forEach((modal) => {
    let modalClose = modal.querySelector('.ps__modal--close');
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
        var iframe = document.querySelector('iframe'); // Replace with your iframe selector
        var url = new URL(iframe.src);
        url.search = "";
        var videoSrc = url.href;
        iframe.src = videoSrc;
    });
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
            var iframe = document.querySelector('iframe'); // Replace with your iframe selector
            var url = new URL(iframe.src);
            url.search = "";
            var videoSrc = url.href;
            iframe.src = videoSrc;
        }
    });
    // add event listener to close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            var iframe = document.querySelector('iframe'); // Replace with your iframe selector
            var url = new URL(iframe.src);
            url.search = "";
            var videoSrc = url.href;
            iframe.src = videoSrc;
        }
    });
});
