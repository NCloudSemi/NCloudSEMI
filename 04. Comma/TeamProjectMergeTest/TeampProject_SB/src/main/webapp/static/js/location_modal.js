$(()=>{






    //calender
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let startDate =null
    let endDate =null


    const months = [
        '01','02','03','04','05','06','07','08','09','10','11','12',
    ];

    function renderCalendar() {
        $('.calendar-body').empty();
        $('#month-year').text(`${months[month]} ${year}`);

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const firstDayOfMonthNext = new Date(year, month+1, 1).getDay();
        const daysInMonthNext = new Date(year, month + 2, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            $('#cur-calender').append(createEmptyDay());
        }
        for (let i = 1; i <= daysInMonth; i++) {
            $('#cur-calender').append(createDay(year,month,i));
        }

        for (let i = 0; i < firstDayOfMonthNext; i++) {
            $('#next-calendar').append(createEmptyDay());
        }
        for (let i = 1; i <= daysInMonthNext; i++) {
            $('#next-calendar').append(createDay( (month === 11 ? year+1:year) ,(month+1)%12,i));
        }

        if(startDate != null)
        {
            $("#check_in").val(`${startDate.getFullYear()}-${startDate.getMonth() +1}-${startDate.getDate()}`)
        }
        if(endDate != null)
        {
            $("#check_out").val(`${endDate.getFullYear()}-${endDate.getMonth() +1}-${endDate.getDate()}`)
        }

        $("#next-month").text( months[(month+1)%12])
        $("#cur-month").text(months[month])

    }

    function createEmptyDay() {
        return $('<div>').addClass('day');
    }

    function createDay(y,m,d) {
        const div = $('<div>')
            .addClass('day')
            .text(d)
            .on('click',bookingDay);
        let selectedDate = new Date(y, m, d); // Corrected this part
        if (startDate != null && endDate != null &&
            startDate <= selectedDate && selectedDate <= endDate) {
            div.addClass('booked');
        }
        return div
    }

    function bookingDay(){
        const parent_id  = $(this).parent().attr('id')
        $(this).addClass('booked')
        if (startDate == null) {
            if(parent_id ==='next-calendar')
                startDate = new Date(year, (month+1)%12, $(this).text());
            else
                startDate = new Date(year, month, $(this).text());

        }
        else {
            if(parent_id ==='next-calendar')
                endDate = new Date(year, (month+1)%12, $(this).text());
            else
                endDate = new Date(year, month, $(this).text());

        }

        //교환
        if (startDate > endDate) {
            let temp = startDate;
            startDate = endDate;
            endDate = temp;
        }
        console.log(startDate,endDate)
        renderCalendar()
    }


    //각종 이벤트변수 초기화
    initalize_val = ()=>{
        date = new Date();
        month = date.getMonth();
        year = date.getFullYear();
        startDate =null
        endDate =null
    }


    //calender button
    $('#prev').on('click', function () {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        renderCalendar();
    });
    //
    $('#next').on('click', function () {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        renderCalendar();
    });

})