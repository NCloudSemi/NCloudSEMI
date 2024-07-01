document.addEventListener('DOMContentLoaded', function () {
    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('month-year');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    function renderCalendar() {
        calendarBody.innerHTML = '';
        monthYear.textContent = `${months[month]} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarBody.appendChild(createEmptyDay());
        }

        for (let i = 1; i <= daysInMonth; i++) {
            calendarBody.appendChild(createDay(i));
        }
    }

    function createEmptyDay() {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('day');
        return emptyDay;
    }

    function createDay(day) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        dayElement.addEventListener('click', function () {
            this.classList.toggle('booked');
        });
        return dayElement;
    }

    prevBtn.addEventListener('click', function () {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        renderCalendar();
    });

    nextBtn.addEventListener('click', function () {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        renderCalendar();
    });

    renderCalendar();
});