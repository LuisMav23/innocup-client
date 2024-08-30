<script>
    let otp = ['', '', '', ''];
    let otpError = '';
  
    function handleOtpInput(e, index) {
      const value = e.target.value;
      if (/^\d?$/.test(value)) {
        otp[index] = value;
        otpError = '';
        if (value && index < 3) {
          document.getElementById(`otp-${index + 1}`).focus();
        }
      }
    }
  
    function submitOtp() {
      const otpCode = otp.join('');
      if (otpCode.length === 4) {
        // handle OTP submission
        alert(`Submitted OTP: ${otpCode}`);
      } else {
        otpError = 'Please enter all 4 digits of the OTP';
      }
    }
  </script>
  
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div class="max-w-md w-full bg-white shadow-2xl rounded-xl p-8 space-y-8">
      <div class="text-center">
        <div class="flex items-center justify-center h-16 w-16 mx-auto bg-indigo-100 rounded-full">
            <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V12a6 6 0 00-5-5.917V4a3 3 0 10-6 0v2.083A6 6 0 002 12v2.158c0 .417-.162.82-.595 1.437L0 17h5m10 0a3 3 0 11-6 0h6z"></path>
            </svg>
          </div>
        <h2 class="text-3xl font-bold text-gray-800 mt-4">Verify Your Phone</h2>
      </div>
      <p class="text-gray-500 text-center">
        Enter the 4-digit code sent to your mobile number.
      </p>
      <div class="flex justify-center space-x-3 mt-6">
        {#each otp as digit, index}
          <input
            id={`otp-${index}`}
            type="text"
            inputmode="numeric"
            maxlength="1"
            class="w-14 h-14 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-2xl bg-gray-50 shadow-inner"
            bind:value={otp[index]}
            on:input={(e) => handleOtpInput(e, index)}
          />
        {/each}
      </div>
      {#if otpError}
        <p class="text-red-500 text-sm text-center mt-2">{otpError}</p>
      {/if}
      <div class="flex justify-center mt-6">
        <button
          class="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition duration-300 transform hover:-translate-y-1 hover:scale-105"
          on:click={submitOtp}
        >
          Verify Account
        </button>
      </div>
      <div class="text-center text-sm mt-4">
        <p class="text-gray-500">
          Didn't receive the code? <a href="#" class="text-indigo-600 hover:underline">Resend</a>
        </p>
      </div>
    </div>
  </div>
  