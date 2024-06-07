window.addEventListener('resize', function() {
    const gallery = document.querySelector('.gallery');
    if (window.innerWidth <= 768) {
        gallery.style.flexWrap = 'wrap';
    } else {
        gallery.style.flexWrap = 'nowrap';
    }
});

// Initial check
if (window.innerWidth <= 768) {
    document.querySelector('.gallery').style.flexWrap = 'wrap';
}
