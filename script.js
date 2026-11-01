
$(document).ready(function () {
    console.log("jQuery is ready!");

    let currentPage = window.location.pathname.split("/").pop();

    $("nav a").each(function () {
        if ($(this).attr("href") === currentPage) {
            $(this).addClass("active");
        }
    });

    $("#testButton").click(function () {
        $("#testResult").text("jQuery is working!");
    });

    $("#idButton").click(function () {
        $("#idText").text("The text has changed!");
    });

    $("#classButton").click(function () {
        $(".classText").css("color", "#3f7568");
        $(".classText").css("font-weight", "bold");
    });

    $("#tagButton").click(function () {
        $("h3").html("<i>Heading changed with jQuery!</i>");
    });

    $("#hideButton").click(function () {
        $("#hideText").hide();
    });

    $("#showButton").click(function () {
        $("#hideText").show();
    });

    $("#toggleButton").click(function () {
        $("#hideText").toggle();
    });

    $("#fadeOutButton").click(function () {
        $("#fadeImage").fadeOut();
    });

    $("#fadeInButton").click(function () {
        $("#fadeImage").fadeIn();
    });

    $("#fadeToggleButton").click(function () {
        $("#fadeImage").fadeToggle();
    });

    $("#slideUpButton").click(function () {
        $("#slidePanel").slideUp();
    });

    $("#slideDownButton").click(function () {
        $("#slidePanel").slideDown();
    });

    $("#slideToggleButton").click(function () {
        $("#slidePanel").slideToggle();
    });


    function updateItems() {
        $("#itemList li").each(function (index) {
            let type = $(this).attr("data-type");
            let name = "Item " + (index + 1);

            if (type) {
                name += " (" + type + ")";
            }

            $(this).text(name);
        });
    }

    $("#addButton").click(function () {
        $("#itemList").append('<li data-type="Added at bottom"></li>');
        updateItems();
    });

    $("#prependButton").click(function () {
        $("#itemList").prepend('<li data-type="Added at top"></li>');
        updateItems();
    });

    $("#removeButton").click(function () {
        $("#itemList li").last().remove();
        updateItems();
    });


    $("#imageButton").click(function () {
        $("#changeImage").attr("src", "https://picsum.photos/id/1025/320/200");
    });

    $("#linkButton").click(function () {
        $("#changeLink").attr("href", "https://developer.mozilla.org/");
        $("#changeLink").text("Visit MDN");
    });

    $("#nameInput").on("input", function () {
        $("#nameResult").text($("#nameInput").val());
    });

    $("#emailInput").on("input", function () {
        $("#emailResult").text($("#emailInput").val());
    });

    $("#userForm").submit(function (event) {
        event.preventDefault();
    });

    $("#animateButton").click(function () {
        $("#box1").stop(true, true);
        $("#box1").css({
            left: "0px",
            width: "80px",
            height: "80px"
        });

        $("#box1").animate({
            left: "200px",
            width: "130px",
            height: "130px"
        }, 700);
    });

    $("#resetButton1").click(function () {
        $("#box1").stop(true, true);
        $("#box1").css({
            left: "0px",
            width: "80px",
            height: "80px"
        });
    });

    $("#sequenceButton").click(function () {
        $("#box2").stop(true, true);
        $("#box2").css({
            left: "0px",
            top: "0px",
            width: "80px",
            height: "80px"
        });

        $("#box2")
            .animate({ left: "200px" }, 500)
            .animate({ top: "80px" }, 500)
            .animate({
                width: "50px",
                height: "50px"
            }, 500)
            .animate({
                left: "0px",
                top: "0px",
                width: "80px",
                height: "80px"
            }, 500);
    });

    $("#resetButton2").click(function () {
        $("#box2").stop(true, true);
        $("#box2").css({
            left: "0px",
            top: "0px",
            width: "80px",
            height: "80px"
        });
    });

    $("#combinedButton").click(function () {
        $("#box3").stop(true, true);
        $("#box3").css({
            left: "0px",
            top: "0px",
            width: "80px",
            height: "80px",
            opacity: 1
        });

        $("#box3").animate({
            left: "180px",
            top: "50px",
            width: "120px",
            height: "120px",
            opacity: 0.3
        }, 1000);
    });

    $("#resetButton3").click(function () {
        $("#box3").stop(true, true);
        $("#box3").css({
            left: "0px",
            top: "0px",
            width: "80px",
            height: "80px",
            opacity: 1
        });
    });

    $(".accordionTitle").click(function () {
        $(".accordionContent").not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });
});
