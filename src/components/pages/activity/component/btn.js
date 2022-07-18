export function btnJS(data) {
    // get the button
    var mybutton = document.getElementById("goTopBtn");
    // when the user scrolls dowm ?px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // when the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    mybutton.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}