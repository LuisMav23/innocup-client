<script>
  let authCode = ['', '', '', ''];

  function handleSubmit() {
    console.log("Verification submitted with code:", authCode.join(''));
  }

  function handleInput(index, event) {
    if (event.target.value.length > 1) {
      event.target.value = event.target.value.slice(0, 1);
    }
    authCode[index] = event.target.value;
    if (event.target.value && index < 3) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  }

  function handleKeyDown(index, event) {
    if (event.key === 'Backspace' && !authCode[index] && index > 0) {
      document.getElementById(`code-${index - 1}`).focus();
    }
  }

  function resendCode() {
    console.log("Resending verification code");
  }
</script>

<div class="min-h-screen bg-blue-300 flex items-center justify-center p-4">
  <div class="w-full max-w-4xl flex items-center">
    <div class="w-1/2 text-white p-8">
      <div class="flex items-center mb-4">
        <img src="/src/img/lifeline_logo.png" alt="Lifeline Logo">
      </div>
    </div>
    <div class="w-1/2">
      <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <div class="flex items-center mb-6">
          <button class="text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 class="text-xl font-semibold ml-4">Verify your Account</h2>
        </div>
        <p class="mb-4 text-gray-600">Please enter the authentication code</p>
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div class="flex justify-between">
            {#each Array(4) as _, i}
              <input
                id="code-{i}"
                type="text"
                inputmode="numeric"
                maxlength="1"
                class="w-14 h-14 text-center text-2xl border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                bind:value={authCode[i]}
                on:input={(e) => handleInput(i, e)}
                on:keydown={(e) => handleKeyDown(i, e)}
              />
            {/each}
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Verify Account
          </button>
        </form>
        <p class="mt-4 text-center text-sm text-gray-600">
          Didn't receive the code? <button on:click={resendCode} class="text-blue-500 hover:underline focus:outline-none">Resend</button>
        </p>
      </div>
    </div>
  </div>
</div>