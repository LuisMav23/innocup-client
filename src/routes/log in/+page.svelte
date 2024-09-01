<script>
    let password = "";
    let repeatpassword = "";
    let email = "";
    let firstname = "";
    let lastname = "";
    let birthday = "";
    let phonenumber = "";
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

    .logo {
        margin-right: 2rem; 
    }

    .form-container {
        display: flex;
        flex-direction: column;
        max-height: 750px; 
        width: 810px;
        background: white;
        border-radius: 45px;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }

    .form-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .input-field {
        padding-right: 2.5rem;
    }

    .toggle-button {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        cursor: pointer;
    }

    .submit-button {
        margin-top: auto; 
        
    }

    @media (max-width: 768px) {
        .form-container {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
            padding: 16px;
        }
    }
</style>

<div class="min-h-screen min-w-screen flex items-center justify-center bg-[#78A2CA]">
    <div class="logo">
        <img src="/src/img/lifeline_logo.png" alt="Lifeline Logo">
    </div>
    <div class="form-container">
        <h2 class="text-2xl font-semibold my-1 text-center font-[Montserrat]">Sign up Now!</h2>
        <h2 class="text-xl font-semibold mb-2 text-left font-[Montserrat]">Welcome!</h2>

        <form on:submit|preventDefault={handleSubmit} class="form-content">
            <div class="mb-1">
                <input type="string" bind:value={firstname} placeholder="First Name" class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] mb-2" />
                <input type="string" bind:value={lastname} placeholder="Last Name" class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] mb-2" />
                <input type="date" bind:value={birthday} class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] mb-2" />
                <input type="tel" pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}" bind:value={phonenumber} placeholder="0912-354-9786" class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] mb-2" />
                <input type="email" bind:value={email} placeholder="Email" class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] mb-2" />
                <div class="relative mb-1">
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
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true">
                            {#if showPassword}
                                <!-- Eye icon when password is visible -->
                                <path d="m1 12s4-8 11-8 11 8 11 8"/><path d="m1 12s4 8 11 8 11-8 11-8"/><circle cx="12" cy="12" r="3"/>
                            {:else}
                                <!-- Eye-off icon when password is hidden -->
                                <path d="m6.71277 6.7226c-3.04798 2.07267-4.71277 5.2774-4.71277 5.2774s3.63636 7 10 7c2.0503 0 3.8174-.7266 5.2711-1.7116m-6.2711-12.23018c.3254-.03809.6588-.05822 1-.05822 6.3636 0 10 7 10 7s-.6918 1.3317-2 2.8335"/>
                                <path d="m14 14.2362c-.5308.475-1.2316.7639-2 .7639-1.6569 0-3-1.3431-3-3 0-.8237.33193-1.5698.86932-2.11192"/>
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
                    class="w-full p-3 border-[#A4C3D2] border-[3px] rounded-md font-[Montserrat] font-[600] input-field mb-" />

                    <button type="button" on:click={toggleRepeatPasswordVisibility} class="toggle-button">
                        <svg
                            class="w-5 h-5 text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true">
                            {#if showRepeatPassword}
                                <!-- Eye icon when password is visible -->
                                <path d="m1 12s4-8 11-8 11 8 11 8"/><path d="m1 12s4 8 11 8 11-8 11-8"/><circle cx="12" cy="12" r="3"/>
                            {:else}
                                <!-- Eye-off icon when password is hidden -->
                                <path d="m6.71277 6.7226c-3.04798 2.07267-4.71277 5.2774-4.71277 5.2774s3.63636 7 10 7c2.0503 0 3.8174-.7266 5.2711-1.7116m-6.2711-12.23018c.3254-.03809.6588-.05822 1-.05822 6.3636 0 10 7 10 7s-.6918 1.3317-2 2.8335"/>
                                <path d="m14 14.2362c-.5308.475-1.2316.7639-2 .7639-1.6569 0-3-1.3431-3-3 0-.8237.33193-1.5698.86932-2.11192"/>
                            {/if}
                        </svg>
                    </button>
                    
            </div>

            <p class="text-xs text-[#5C6265] mb-4 text-right font-[Montserrat]">
                <span style="opacity: 0.5;">Already have an Account?</span> <a href="http://localhost:5173/signup">Log In</a> 
            </p>

            <div class="submit-button flex justify-center items-center">
                <button
                    type="submit"
                    class="w-[300px] bg-[#7FB77E] text-white rounded-md font-[Merriweather] font-[700] px-5 py-2">
                    Sign up
                </button>
            </div>
        </form>
    </div>
</div>
