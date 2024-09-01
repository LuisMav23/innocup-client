<script>
    let password = "";
    let repeatpassword = "";
    let email = "";
    let firstname = "";
    let lastname = "";
    let showPassword = false;
    let showRepeatPassword = false;
    let isPasswordFocused = false;

    /**
     * @type {HTMLInputElement}
     */
    let passwordInput;

    /**
     * @type {HTMLInputElement}
     */
    let repeatpasswordInput;

    // Reactive statements to check password policies
    $: hasEightCharacters = password.length >= 8;
    $: hasUppercase = /[A-Z]/.test(password);
    $: hasLowercase = /[a-z]/.test(password);
    $: hasNumber = /[0-9]/.test(password);
    $: hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    function togglePasswordVisibility() {
        if (passwordInput) {
            passwordInput.type = showPassword ? 'password' : 'text';
            showPassword = !showPassword;
        }
    }

    function toggleRepeatPasswordVisibility() {
        if (repeatpasswordInput) {
            repeatpasswordInput.type = showRepeatPassword ? 'password' : 'text';
            showRepeatPassword = !showRepeatPassword;
        }
    }

    function handlePasswordFocus() {
        isPasswordFocused = true;
    }

    function handlePasswordBlur() {
        isPasswordFocused = false;
    }

    function handleSubmit() {
        // Handle form submission
        console.log("Form submitted");
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@600;700&display=swap');

    /* Added fixed position styles for the toggle buttons */
    .toggle-button {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        cursor: pointer;
    }

    /* Prevents the field from resizing when focused */
    .input-field {
        padding-right: 2.5rem; /* Ensures space for the toggle button */
    }
</style>

<div class="min-h-screen min-w-screen flex items-center justify-center bg-[#78A2CA]">
    <div class="bg-white rounded-[45px] p-8 shadow-md" style="width: 810px; height: 650px; margin-left: 40%;">
        <div class="flex justify-between items-center mb-4">
        </div>

        <h2 class="text-2xl font-semibold my-1 text-center font-[Montserrat]">Sign up Now!</h2>
        <h2 class="text-xl font-semibold mb-2 text-left font-[Montserrat]">Welcome!</h2>

        <form on:submit|preventDefault={handleSubmit}>
            <div class="mb-1">
                <input type="string" bind:value={firstname} placeholder="First Name" class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] mb-2" />
                <input type="string" bind:value={lastname} placeholder="Last Name" class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] mb-2" />
                <input type="email" bind:value={email} placeholder="Email" class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] mb-2" />
                <div class="relative mb-3">
                    <input
                        bind:this={passwordInput}
                        type="password"
                        bind:value={password}
                        placeholder="Password"
                        class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] font-[600] input-field mb-"
                        on:focus={handlePasswordFocus}
                        on:blur={handlePasswordBlur} />

                    <button type="button" on:click={togglePasswordVisibility} class="toggle-button">
                        <svg
                            class="w-5 h-5 text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true">
                            {#if showPassword}
                                <!-- Eye icon when password is visible -->
                                <path d="M1.5 12c0-2.7 5.2-7.5 10.5-7.5S22.5 9.3 22.5 12c0 2.7-5.2 7.5-10.5 7.5S1.5 14.7 1.5 12zM12 15.3a3.3 3.3 0 0 0 0-6.6M6.6 12a5.4 5.4 0 0 1 5.4-5.4" />
                            {:else}
                                <!-- Eye-off icon when password is hidden -->
                                <path d="M1.5 12c0-2.7 5.2-7.5 10.5-7.5S22.5 9.3 22.5 12c0 2.7-5.2 7.5-10.5 7.5S1.5 14.7 1.5 12zM6.6 12a5.4 5.4 0 0 1 5.4-5.4M8.4 9.6a3.3 3.3 0 0 0 0 6.6" />
                            {/if}
                        </svg>
                    </button>
                </div>
            </div>

            {#if isPasswordFocused}
                <div class="font-[Montserrat] truncate transition-all duration-300 ease-in-out w-auto text-[14px] p-1 grid grid-cols-2">
                    <div class={hasEightCharacters ? "text-green-500" : "text-gray-400"}>
                        At least eight (8) characters
                    </div>
                    <div class={hasUppercase ? "text-green-500" : "text-gray-400"}>
                        At least one (1) uppercase letter
                    </div>
                    <div class={hasLowercase ? "text-green-500" : "text-gray-400"}>
                        At least one (1) lowercase letter
                    </div>
                    <div class={hasNumber ? "text-green-500" : "text-gray-400"}>
                        At least one (1) number
                    </div>
                    <div class={hasSpecialChar ? "text-green-500" : "text-gray-400"}>
                        At least one (1) special character
                    </div>
                </div>
            {/if}

            <div class="relative mb-3">
                <input
                    bind:this={repeatpasswordInput}
                    type="password"
                    bind:value={repeatpassword}
                    placeholder="Repeat Password"
                    class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] font-[600] input-field mb-2" />

                <button type="button" on:click={toggleRepeatPasswordVisibility} class="toggle-button">
                    <svg
                        class="w-5 h-5 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true">
                        {#if showRepeatPassword}
                            <!-- Eye icon when password is visible -->
                            <path d="M1.5 12c0-2.7 5.2-7.5 10.5-7.5S22.5 9.3 22.5 12c0 2.7-5.2 7.5-10.5 7.5S1.5 14.7 1.5 12zM12 15.3a3.3 3.3 0 0 0 0-6.6M6.6 12a5.4 5.4 0 0 1 5.4-5.4" />
                        {:else}
                            <!-- Eye-off icon when password is hidden -->
                            <path d="M1.5 12c0-2.7 5.2-7.5 10.5-7.5S22.5 9.3 22.5 12c0 2.7-5.2 7.5-10.5 7.5S1.5 14.7 1.5 12zM6.6 12a5.4 5.4 0 0 1 5.4-5.4M8.4 9.6a3.3 3.3 0 0 0 0 6.6" />
                        {/if}
                    </svg>
                </button>
            </div>

            <p class="text-xs text-[#5C6265] mb-4 text-right font-[Montserrat]">
                <span style="opacity: 0.5;">Already have an Account?</span> <a href="http://localhost:5173/signup">Log In</a> 
            </p>
            
            <button
                type="submit"
                class="w-full bg-[#7FB77E] text-white rounded-[30px] font-[Merriweather] font-[700] px-5 py-2 mt-2">
                Sign up
            </button>
        </form>
    </div>
</div>
