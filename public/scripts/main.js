document.addEventListener('DOMContentLoaded', function() {
    const seats = document.querySelectorAll('.seat');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('occupied')) {
                seat.classList.toggle('selected');
                updateSelectedSeats();
            }
        });
    });

    function updateSelectedSeats() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const selectedSeatsCount = selectedSeats.length;
        const selectedSeatText = document.getElementById('countSeat');
        const totalPriceText = document.getElementById('totalPrice');
        const totalAmountText = document.getElementById('totalAmount');
        const ticketPriceText = document.getElementById('ticketPrice');
        const totalPayText = document.getElementById('totalPay');
        const selectedSeatsNames = Array.from(selectedSeats).map(seat => seat.textContent);
        const selectedSeatsString = selectedSeatsNames.join(', ');

        selectedSeatText.innerText = selectedSeatsCount;
        totalPriceText.innerText = selectedSeatsCount * 200; 

        const ticketPrice = selectedSeatsCount * 200; 
        ticketPriceText.innerText = ticketPrice;

        const transactionFee = 0; 
        const totalAmount = ticketPrice + transactionFee;

        totalAmountText.innerText = totalAmount;

        const totalAmountValue = parseInt(totalAmountText.innerText); 
        totalPayText.innerText = totalAmountValue;

        document.getElementById('nameSeat').innerText = selectedSeatsString;
    }

    function isTermsAgreed() {
        const agreeTermsCheckbox = document.getElementById('agreeTerms');
        return agreeTermsCheckbox.checked;
    }
    
    document.querySelector('.cancel-button').addEventListener('click', function() {
        resetBooking();
    });
    
    function resetBooking() {
        // Làm sạch danh sách ghế đã chọn
        const selectedSeats = document.querySelectorAll('.seat.selected');
        selectedSeats.forEach(seat => {
            seat.classList.remove('selected');
        });
    
        document.getElementById('fullName').value = '';
        document.getElementById('phoneNumber').value = '';
        document.getElementById('email').value = '';
    
        document.getElementById('pickupLocation').selectedIndex = 0;
        document.getElementById('dropoffLocation').selectedIndex = 0;
    
        document.getElementById('agreeTerms').checked = false;
    
        document.getElementById('ticketPrice').innerText = '0';
        document.getElementById('transactionFee').innerText = '0';
        document.getElementById('totalAmount').innerText = '0';
        document.getElementById('totalPay').innerText = '0';
        document.getElementById('countSeat').innerText = '0';
        document.getElementById('totalPrice').innerText = '0';
        document.getElementById('nameSeat').innerText = ' ';
        
    }


    document.querySelector('.submit-button').addEventListener('click', function(event) {
        if (!isTermsAgreed()) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit
            alert('Vui lòng chấp nhận điều khoản và điều kiện trước khi tiếp tục.');
        }
    });
});
