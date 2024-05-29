
function warnAbout2sxcOlderThanDemo(){
    if(!$2sxc.sysinfo || $2sxc.sysinfo.version < "08.10.00")
        alert("you're using a 2sxc version below 08.10\n\n"
            + "the REST before 08.10 were a bit different. They still work, but this tutorial app uses the newest conventions.\n"
            + "because of this, this tutorial will fail for you. You can either \n"
            + "1. upgrade to a newer 2sxc \n"
            + "2. download the older tutorial app \n"
            + "3. or manually change the urls to the old style (see https://github.com/2sic/2sxc/wiki/WebApi)")
}

warnAbout2sxcOlderThanDemo();


// standard error handling
// this is just a standard "show ajax error"
// we put it here to simplify the in-page code 
function alertAboutError(jqXHR, textStatus, errorThrown){
    alert("Error:" + errorThrown);
}


function clear(selector) {
    $(selector).html("");
}