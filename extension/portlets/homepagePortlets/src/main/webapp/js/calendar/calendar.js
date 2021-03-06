(function ($) {

    function init(initKey){
        $('.jz').on("click", '.uiIconDel', function () {
            var calId = $(this).parent().children("input").val();
            $('div.CalendarPortletContainer').jzLoad(
                    "CalendarPortletController.deleteCalendar()",
                    {"calendarId":calId});
        });

        $('.jz').on("click", '.uiIconAdd', function () {
            var calId = $(this).parent().children("input").val();
            $('div.CalendarPortletContainer').jzLoad(
                    "CalendarPortletController.addCalendar()",
                    {"calendarId":calId});
        });

        $('.jz').on('mouseover', '.calendarItem', function() {
            var button= $(this).children("a.addButton");
            button.css("display","block");
        });

        $('.jz').on('mouseout', '.calendarItem', function() {
            var button= $(this).children("a.addButton");
            button.css("display","none");
        });

        $('.jz').on("click", 'input.PLFcalendarSearchKey', function () {
            var initKey = $('input.PLFcalendarSearchKey').val();
            var seakey = $(this).val();
            if (seakey == initKey) {
                seakey = "";
                $(this).val("");
            }
            $('div.NonDisplayedCalendar').jzLoad(
                    "CalendarPortletController.getSearchResult()",
                    {"key":seakey});
        });

        $('.jz').on('show', 'input.PLFcalendarSearchKey', function () {
            var seakey = $(this).val();
            $('div.NonDisplayedCalendar').jzLoad(
                    "CalendarPortletController.getSearchResult()",
                    {"key":seakey});
        });

        $('.jz').on("keydown", 'input.PLFcalendarSearchKey', function () {
            var seakey = $(this).val();
            $('div.NonDisplayedCalendar').jzLoad(
                    "CalendarPortletController.getSearchResult()",
                    {"key":seakey});
        });

        $('.jz').on("keypress", 'input.PLFcalendarSearchKey', function () {
            var seakey = $(this).val();
            $('div.NonDisplayedCalendar').jzLoad(
                    "CalendarPortletController.getSearchResult()",
                    {"key":seakey});
        });

        $('.jz').on("keyup", 'input.PLFcalendarSearchKey', function () {
            var seakey = $(this).val();
            $('div.NonDisplayedCalendar').jzLoad(
                    "CalendarPortletController.getSearchResult()",
                    {"key":seakey});
        });

        $('.jz').on("focus", 'input.PLFcalendarSearchKey', function () {
            var initKey = $('input.PLFcalendarSearchKey').val();
            if ($(this).val() == initKey) {
                $(this).val("");
            }
        });

        $('.jz').on("blur", 'input.PLFcalendarSearchKey', function () {
            var initKey = $('input.PLFcalendarSearchKey').val();
            if ($(this).val() == "") {
                $(this).val(initKey);
            }
        });

        $('.jz').on('click', '.btn', function(){
            $('div.CalendarPortletContainer').jzLoad(
                    "CalendarPortletController.calendarHome()");
        });

    };

    init();

    $('.jz').on("click", '.prevDate', function() {
        $('div.CalendarPortletContainer').jzLoad(
                "CalendarPortletController.decDate()",
                {"nbClick":"1"});
    });
    $('.jz').on("click", '.nextDate', function() {
        $('div.CalendarPortletContainer').jzLoad(
                "CalendarPortletController.incDate()",
                {"nbClick":"1"});
    });
    $('.jz').on("click", '.settingsLink', function(){
        $('.CalendarPortletContainer').jzLoad(
                "CalendarPortletController.setting()");
    });

    $('.jz').on('mouseover', '.calendarPortlet', function () {
        $('.settingsContainerPage').children("a").css("display", "block");

    });
    $('.jz').on('mouseout', '.calendarPortlet', function () {
        $('.settingsContainerPage').children("a").css("display", "none");
    });

    setTimeout(function(){
        $('div.CalendarPortletContainer').jzLoad("CalendarPortletController.calendarHome()");
    },100);
})($);
