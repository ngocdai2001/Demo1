
document.getElementById('next').onclick = function() {
    let lists = document.querySelectorAll('.testimonial-item');
    document.getElementById('content-testimonial').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function() {
    let lists = document.querySelectorAll('.testimonial-item');
    document.getElementById('content-testimonial').prepend(lists [lists.length - 1]);
}