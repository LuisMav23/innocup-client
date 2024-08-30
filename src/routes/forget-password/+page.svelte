<script>
  let email = "";

  function handleSubmit() {
    // Handle form submission
    console.log("Reset password for:", email);
  }

  function usePhoneInstead() {
    // Switch to phone number input
    console.log("Switching to phone number input");
  }
</script>

<div class="min-h-screen bg-blue-300 flex items-center justify-center p-4">
  <div class="w-full max-w-4xl flex">
    <!-- Logo and title section -->
    <div class="flex-1 flex flex-col justify-center items-start pr-8">
      <div class="text-white text-4xl font-bold flex items-center">
        <img src="/src/img/lifeline_logo.png" alt="Lifeline Logo">
      </div>
    </div>

    <!-- Reset password form -->
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
      <div class="flex items-center mb-6">
        <button class="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 class="text-2xl font-semibold ml-4">Reset Password</h2>
      </div>

      <form on:submit|preventDefault={handleSubmit}>
        <p class="text-gray-600 mb-4">Enter your email to reset password</p>
        <input 
          type="email" 
          bind:value={email} 
          placeholder="Email address" 
          class="w-full p-3 border border-gray-300 rounded-md mb-4" 
        />
        <button 
          type="submit" 
          class="w-full bg-blue-500 text-white p-3 rounded-md font-semibold mb-4"
        >
          Next
        </button>
      </form>

      <button 
        on:click={usePhoneInstead} 
        class="text-blue-500 text-sm"
      >
        Use phone number instead
      </button>
    </div>
  </div>
</div>