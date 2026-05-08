const checkInDate = document.getElementById("check-in");
const checkOutDate = document.getElementById("check-out");
const sortbyArray = document.querySelectorAll('#sort-options .dropdown-item');
const selectedSort = document.getElementById('selected-sort');

const checkInPicker = flatpickr(checkInDate, {
        altInput: true,
        altFormat: "M j, Y",
        dateFormat: "Y-m-d",
        minDate: "today", // Can't book in the past
        onChange: function(selectedDates, dateStr) {
            // When check-in is picked, set the minimum date for check-out
            checkOutPicker.set("minDate", dateStr);
        }
    });

const checkOutPicker = flatpickr(checkOutDate, {
    altInput: true,
    altFormat: "M j, Y",
    dateFormat: "Y-m-d",
    minDate: "today"
});

function changeSortBy (e) {
    e.preventDefault();
    // Remove active class from all options
    sortbyArray.forEach(option => option.classList.remove('active'));
    this.classList.add('active');
    selectedSort.textContent = this.getAttribute('data-value');
}

sortbyArray.forEach(item => {
    item.addEventListener('click', changeSortBy);   
});
