function toggleTracklist(btn) {
    var body = btn.nextElementSibling;
    body.classList.toggle('open');
    btn.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tracklist-toggle').forEach(function(btn) {
        btn.classList.add('open');
        btn.nextElementSibling.classList.add('open');
    });
});