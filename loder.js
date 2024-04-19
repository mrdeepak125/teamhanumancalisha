// document.addEventListener("DOMContentLoaded", function () {
//     // Hide the loading overlay when the DOM content is loaded
//     var preloader = document.getElementById("preloader");
//     preloader.style.display = "none";
// });
// document.addEventListener("DOMContentLoaded", function() {
//     // Simulating image loading, replace this with your actual image loading code
//     var images = document.images;
//     var imagesCount = images.length;
//     var loadedImages = 0;

//     function imageLoaded() {
//         loadedImages++;
//         if (loadedImages === imagesCount) {
//             hideLoader();
//         }
//     }

//     for (var i = 0; i < imagesCount; i++) {
//         images[i].addEventListener("load", imageLoaded);
//     }

//     // Function to hide loader and show content
//     function hideLoader() {
//         document.querySelector(".preloader").style.visibility = "hidden";
//         document.querySelector(".content").style.display = "block";
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Hide the loading overlay when the DOM content is loaded
//     var preloader = document.getElementById("preloader");
//     preloader.style.display = "none";
// });

document.addEventListener("DOMContentLoaded", function() {
    // Simulating image loading, replace this with your actual image loading code
    var images = document.images;
    var imagesCount = images.length;
    var loadedImages = 0;

    function imageLoaded() {
        loadedImages++;
        if (loadedImages === imagesCount) {
            hideLoader();
        }
    }

    for (var i = 0; i < imagesCount; i++) {
        images[i].addEventListener("load", imageLoaded);
    }

    // Function to hide loader and show content
    function hideLoader() {
        document.getElementById("preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }
});
