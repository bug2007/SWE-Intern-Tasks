const sortbyArray = document.querySelectorAll('#sort-options .dropdown-item');
const selectedSort = document.getElementById('selected-sort');
const navbarLight = document.querySelector('.change-navbar-light');
const navbarDark = document.querySelector('.change-navbar-dark');
const locationInput = document.querySelector('input[list="locations"]');
const checkInInput = document.getElementById('check-in');
const checkOutInput = document.getElementById('check-out');
const guestInput = document.getElementById('guests');
const locationInput2 = document.querySelector('input[list="locations2"]');
const checkInInput2 = document.getElementById('check-in2');
const checkOutInput2 = document.getElementById('check-out2');
const guestInput2 = document.getElementById('guests2');
const searchButton = document.getElementById('search');
const searchResults = [locationInput2, checkInInput2, checkOutInput2, guestInput2];
const continueEmailBtn = document.getElementById('continue-with-email');
const forms = document.querySelectorAll('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const emailDisplay = document.getElementById('email-display');
const locationDisplay = document.getElementById('location-display');
const loadMoreBtn = document.getElementById('load-more-btn');
const searchResultsList = document.getElementById('search-results-list');
const completeBookingBtn = document.getElementById('completeBookingBtn');
const checkOutForm = document.getElementById('checkout-form');
const paymentForm = document.getElementById('payment-form');
const countryCode = document.getElementById("countrycode");

let passwordsMatched = false;

const savedEmail = localStorage.getItem('email');
if (savedEmail && emailDisplay) {
    emailDisplay.textContent = savedEmail;
}

const savedData = localStorage.getItem('lastSearch');
if (savedData) {
    const searchDetails = JSON.parse(savedData);
    searchResults.forEach((input, index) => {
        if (!input) return;
        const val = searchDetails[index];
            if (input._flatpickr) {
                input._flatpickr.setDate(val);
            } else {
                input.value = val || "";
            }
    });
    if (locationDisplay) locationDisplay.textContent = searchDetails[0] ? `${searchDetails[0]} : ` : "";

}

const checkOutPickers = flatpickr(".checkout-dates", {
    altInput: true,   // hides the original input and creates a new one for display
    altFormat: "M j, Y", // format for the new display input
    dateFormat: "Y-m-d", // how date is saved in database (and what the original input holds)
    minDate: "today"
});

const checkInPickers = flatpickr(".checkin-dates", {
    altInput: true,
    altFormat: "M j, Y",
    dateFormat: "Y-m-d",
    minDate: "today",
    onChange: function(selectedDates, dateStr) {  // triggered when user clicks a date in the check-in calendar. selectedDates is an array of Date objects, dateStr is the chosen date as a string ("2026-05-20")
        // If no date is selected, do nothing
        if (selectedDates.length === 0) return;
        const checkoutArray = Array.isArray(checkOutPickers) ? checkOutPickers : [checkOutPickers]; // an array of all checkout flatpickrinstances
        checkoutArray.forEach(fp => {
            // Set the minimum checkout date to the exact check-in date string
            fp.set("minDate", dateStr);
        });
    }
});

function changeNavbarBackground() {
    if (window.scrollY > 0) {
        if (navbarLight) {
            navbarLight.classList.add('navbar-scroll-light');
        }
        if (navbarDark) {
            navbarDark.classList.add('navbar-scroll-dark');
        }
    } else {
        if (navbarLight) {
            navbarLight.classList.remove('navbar-scroll-light');
        }
        if (navbarDark) {
            navbarDark.classList.remove('navbar-scroll-dark');
        }
    }
}

function search() {
    let searchDetails;
    if (this.classList.contains('second-search')) {
        searchDetails = [locationInput2.value.trim(),
            checkInInput2.value,
            checkOutInput2.value,
            guestInput2.value.trim()];
    } else {
        searchDetails = [locationInput.value.trim(),
            checkInInput.value,
            checkOutInput.value,
            guestInput.value.trim()];
    }
    localStorage.setItem('lastSearch', JSON.stringify(searchDetails));    
    window.location.href = 'search-results.html';
}

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

function passwordsMatch() {
    if (password1El.value === password2El.value) {
        passwordsMatched = true;
        return true;
    }
    passwordsMatched = false;
    return false; 
}    

function handleForm(e) {
    e.preventDefault();
    const form = this;
    // console.log('Form submitted:', form.id);
    if (form.id === 'sign-in') {
        window.location.href = 'home.html';
    } else if (form.id === 'register') {
        window.location.href = 'register-2.html';
    } else if (form.id === 'create-password') {
        if (passwordsMatch()) {
            window.location.href = 'home.html';
        } else {
            alert('Passwords do not match. Please try again.');
        }
    } else if (form.id === 'forgot-password') {
        localStorage.setItem('email', form.email.value.trim());
        window.location.href = 'check-inbox.html';
    }    
}       

window.addEventListener('scroll', changeNavbarBackground);
forms.forEach(form => {
    form = form;
    form.addEventListener('submit', handleForm);
});

if (loadMoreBtn && searchResultsList) {
    loadMoreBtn.addEventListener('click', function() {
        // double up the content of search results by cloning the existing list items and appending them to the list
        const currentResults = searchResultsList.innerHTML;
        searchResultsList.insertAdjacentHTML('beforeend', currentResults);
    });
}

window.intlTelInput(countryCode, {
  initialCountry: "au", // Sets default to Australia (+61)
  separateDialCode: true,
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

if (searchButton) {
    searchButton.addEventListener('click', search);
};

if (completeBookingBtn) {
    const bookingSuccessOverlay = document.getElementById('bookingSuccessOverlay');
    const inputs = document.querySelectorAll('#checkout-form input, #payment-form input');
    completeBookingBtn.addEventListener('click', function() {
        let isAllValid = true;

        inputs.forEach(input => {
            const container = input.closest('.d-flex') || input.parentElement;
            const tickImg = container.querySelector('img'); 

            if (input.checkValidity()) {
                if (tickImg) {
                    tickImg.classList.remove('d-none');
                    tickImg.classList.add('d-inline'); 
                }
                input.classList.remove('is-invalid');
            } else {
                isAllValid = false;
                if (tickImg) {
                    tickImg.classList.add('d-none');
                }
                input.classList.add('is-invalid');
            }
        });

        if (isAllValid) {
            bookingSuccessOverlay.classList.remove('d-none');
            bookingSuccessOverlay.classList.add('d-block');
            // console.log('Booking complete');
        } else {
            // for the first error found
            checkOutForm.reportValidity() || paymentForm.reportValidity();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const container = input.closest('.d-flex') || input.parentElement;
            const tickImg = container.querySelector('img');

            // Hide the tick when user start typing
            if (tickImg) {
                tickImg.classList.add('d-none');
            }
            input.classList.remove('is-invalid');
        });
    });
}
