// Your javascript code here

$(document).ready(function () {

    /* Search */
    /* ========================================================== */
    $("#btnSearch").on("click", function () {
        openSearchPage();
    });
    $('#txtSearch').bind('keydown', function (e) {
        //on keydown for all textboxes
        if (e.keyCode == 13) { //if this is enter key
            e.preventDefault();
            openSearchPage();
            return false;//prevent postback
        }
        else
            return true;
    });
    function openSearchPage() {
        var searchText = $("#txtSearch").val();
        if (searchText != "") {
            window.location.href = "/Search-Results?Search=" + searchText;
        }
    }

    
    //add envelop-icon into Submit Button of Contact Form   
    $(".envelop-icon").appear(function () {
        $(this).prepend("<i class=\"icon icon_mail_alt\">&nbsp;</i>");       
    });
});