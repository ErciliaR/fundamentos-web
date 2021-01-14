let nav = document.getElementById('navbar-changing-color');


window.addEventListener('scroll', function (event) {
    event.preventDefault();
    if (window.scrollY <= nav.scrollHeight) {
        nav.style.backgroundColor = 'transparent';
    } else {
        nav.style.backgroundColor = '#324028';
        nav.style.transition = 'background-color 200ms linear'
    }
});

function searchOpening() {
    if (document.getElementById("form").style.display === "none") {
        document.getElementById("form").style.display = "block";
    } else {
        document.getElementById("form").style.display = "none";
    }
}

function FindKey(event) {
    if (event.which == 13 || event.keyCode == 13) {
        function FindNext() {
            let str = document.getElementById("textSearch");
            if (str == "") {
                alert("Please enter some text to search!");
                return;
            }

            if (window.find) { // Firefox, Google Chrome, Safari
                var found = window.find(str);
                if (!found) {
                    alert("The following text was not found:\n" + str);
                }
            } else {
                alert("Your browser does not support this example!");
            }
        };
    }
    return true;
};