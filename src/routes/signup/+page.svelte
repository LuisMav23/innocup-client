<!-- design subject to change-->
<!-- Initial design inspired by login/signup form used by airbnb -->

<script>
  let password = "";
  let email = "";
  let showPassword = false;
  /**
   * @type {HTMLInputElement}
   */
  let passwordInput;

  function togglePasswordVisibility() {
      if (passwordInput) {
          passwordInput.type = showPassword ? 'password' : 'text';
          showPassword = !showPassword;
      }
  }

  function handleSubmit() {
    // Handle form submission
    console.log("Form submitted");
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@600;700&display=swap');
  </style>
  
<div class="min-h-screen min-w-screen  flex items-center justify-center bg-[#78A2CA]" >
  <div class="bg-white rounded-[45px] p-8 shadow-md" style="width: 800px; height: 650px; margin-left: 40%;">
    <div class="flex justify-between items-center mb-4">
    </div>

    <h2 class="text-2xl font-semibold my-1 text-center font-[Montserrat]" >Log in or sign up</h2>
    <h2 class="text-xl font-semibold mb-2 text-left font-[Montserrat] " >Welcome!</h2>

    <form on:submit|preventDefault={handleSubmit}>
      <div class="mb-1">
        <input type="email" bind:value={email} placeholder="Email" class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat]" />
      </div>
      
<div class="relative mb-3">
  <input
      bind:this={passwordInput}
      type="password" 
      bind:value={password}
      placeholder="Password"
      class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] font-[600] pr-10"
  />
  <button
      type="button"
      on:click={togglePasswordVisibility}
      style="position: absolute; top: 50%; right: 3%; transform: translateY(-50%); cursor: pointer;"
  >
      <svg
          class="w-5 h-5 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
      >
          {#if showPassword}
              <!-- Eye icon when password is visible -->
              <path d="M1.5 12c0-2.7 5.2-7.5 10.5-7.5S22.5 9.3 22.5 12c0 2.7-5.2 7.5-10.5 7.5S1.5 14.7 1.5 12zM12 15.3a3.3 3.3 0 0 0 0-6.6M6.6 12a5.4 5.4 0 0 1 5.4-5.4"/>
          {:else}
              <!-- Eye-off icon when password is hidden -->
              <path d="M1.5 12c0-2.7 5.2-7.5 10.5-7.5S22.5 9.3 22.5 12c0 2.7-5.2 7.5-10.5 7.5S1.5 14.7 1.5 12zM6.6 12a5.4 5.4 0 0 1 5.4-5.4M8.4 9.6a3.3 3.3 0 0 0 0 6.6"/>
          {/if}
      </svg>
  </button>
</div>
      <p class="text-xs text-[#5C6265] mb-4 text-right font-[Montserrat]">
          Forgot Password
      </p>
      <button type="submit" class="w-full text-white p-3 rounded-md font-semibold bg-[#78A2CA]">
        Continue
    </button>
    </form>

    <div class="flex items-center justify-center mt-4">
      <div class="flex-1 h-[2px] bg-[#A4C3D2]"></div>
      <span class="mx-2 text-center text-[#A4C3D2] font-[Montserrat]">or</span>
      <div class="flex-1 h-[2px] bg-[#A4C3D2]"></div>
  </div>
  

    <div class="space-y-2 mt-4">
       <!-- Button for Facebook -->
<button class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md flex items-center justify-between space-x-2">
  <svg class="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m23 12c0-6.07578-4.9242-11-11-11-6.07578 0-11 4.92422-11 11 0 5.4914 4.02187 10.0418 9.2812 10.8668v-7.6871h-2.79292v-3.1797h2.79292v-2.42344c0-2.75644 1.6415-4.27968 4.1551-4.27968 1.2032 0 2.4621.21484 2.4621.21484v2.70703h-1.3879c-1.3664 0-1.7917.84863-1.7917 1.71875v2.0625h3.0507l-.4877 3.1797h-2.563v7.6871c5.2593-.825 9.2812-5.3754 9.2812-10.8668z" fill="#1877f2"/>
    <path d="m16.2818 15.1797.4877-3.1797h-3.0507v-2.0625c0-.87012.4253-1.71875 1.7917-1.71875h1.3879v-2.70703s-1.2589-.21484-2.4621-.21484c-2.5136 0-4.1551 1.52324-4.1551 4.27968v2.42344h-2.79292v3.1797h2.79292v7.6871c.5608.0881 1.1344.1332 1.7188.1332s1.158-.0451 1.7188-.1332v-7.6871z" fill="#fff"/>
  </svg>
  <span class="grow text-center font-[Montserrat] text-[15px]">Continue with Facebook</span>
</button>

<!-- Button for Google -->
<button class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md flex items-center justify-between space-x-2">
  <svg class="w-8 h-8 flex-shrink-0" viewBox="0 0 65 35" xmlns="http://www.w3.org/2000/svg">
    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
    <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
    <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
    <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
  </svg>
  <span class="grow text-center font-[Montserrat] text-[15px]">Continue with Google</span>
</button>

<!-- Button for Email -->
<button class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md flex items-center justify-between space-x-2">
  <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
  </svg>
  <span class="grow text-center font-[Montserrat] text-[15px] w-3 " >Continue with email</span>
</button>
      
    </div>
  </div>
</div>