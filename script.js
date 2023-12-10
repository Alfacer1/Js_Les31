document.addEventListener('DOMContentLoaded', function () {
    var myInput = document.getElementById('myInput');
    var myDiv = document.getElementById('myDiv');

    myInput.addEventListener('focus', function () {
        myDiv.style.display = 'block';
    });

    myInput.addEventListener('blur', function () {
        myDiv.style.display = 'none';
    });
});
