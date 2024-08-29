<!-- design subject to change-->
<!-- Initial design inspired by login/signup form used by airbnb -->

<script>
    let phoneNumber = "";
  
    function handleSubmit() {
      // Handle form submission
      console.log("Form submitted");
    }
  </script>
  
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div class="flex justify-between items-center mb-6">
        <img src="src\img\icon.png" alt="Lifeline" class="h-8" />
      </div>
  
      <h2 class="text-2xl font-semibold mb-6">Log in or sign up</h2>
  
      <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-4">
          <input type="tel" bind:value={phoneNumber} placeholder="Phone number" class="w-full p-3 border border-gray-300 rounded-md" />
        </div>
        <p class="text-xs text-gray-500 mb-4">
          We'll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
        </p>
        <button type="submit" class="w-full bg-pink-500 text-white p-3 rounded-md font-semibold">
          Continue
        </button>
      </form>
  
      <div class="mt-4 text-center text-gray-500">or</div>
  
      <div class="space-y-2 mt-4">
        <button class="w-full p-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2">
          <svg class="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          <span>Continue with Facebook</span>
        </button>
        <button class="w-full p-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2">
          <svg class="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/></svg>
          <span>Continue with Google</span>
        </button>
        <button class="w-full p-3 border border-gray-300 rounded-md flex items-center justify-center space-x-2">
          <svg class="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
          <span>Continue with email</span>
        </button>
      </div>
    </div>
  </div>
