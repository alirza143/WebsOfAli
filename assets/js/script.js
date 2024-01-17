// Wait for jQuery to load,
jQuery(document).ready(function() {
    // when #button-1 is clicked,
    jQuery(".work-box").click(function () {
        // save the value of #checkbox-1 as a variable,
        var myValue = $(this).attr("id");
        // and test it to confirm it worked.
        console.log(myValue);
    });
});