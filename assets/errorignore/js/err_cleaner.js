//cards.search
$(document).ready(function() {
    $("#myINPUTSEARCH1").on("keydown", function() {
        var value = $(this).val().toLowerCase();
        $("#myDIVCARDS div.col-md-3").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
//cards.search
$(document).ready(function() {
    $("#err_search").on("keydown", function() {
        var value = $(this).val().toLowerCase();
        $("#myDIVCARDS div.col-md-3").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
//root.remove
$(document).ready(function() {
    $(".err-ng-streem").remove();
});

$(document).ready(function() {
	$("div.err-search-button").click(function() {
    $(".err-transform").toggle();
});
});

															$(document).ready(function() {
															$("div.err-search-button").click(function() {
															$("div.cards-catalog").toggle();
															});
															});

															$(document).ready(function() {
															$("div.err-search-button").click(function() {
															$(".sidenav").toggle();
															});
															});

															$(document).ready(function() {
															$("div.err-search-button").click(function() {
															$(".page-informer").toggle();
															});
															});


															$(document).ready(function() {
															$("div.err-search-button").click(function() {
															$(".page-description-text").toggle();
															});
															});




