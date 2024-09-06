<script lang="ts">
    import { writable } from "svelte/store";
    import { slide } from "svelte/transition";
    
    import ChatBubble from "$lib/components/chatBubble.svelte";
    import CollapsibleList from "$lib/components/collapsibleList.svelte";
    
    // Store variables
    let isChronicConditionsOpen = writable(false);
    let isAllergiesOpen = writable(false);
    let isMedicationsOpen = writable(false);
    let isHealthRisksOpen = writable(false);
    let isPastSurgeriesOpen = writable(false);
    
    // Message variables
    let message = "";
    let chatMessages = writable([
        { sender: "user", message: "Hello World aosdfj;aolisdjflkajdfklasflaskldfjlajsdf aolisdjflkajdfklasflaskl dfjlajsdf aolisdjflka jdfklasflaskldfjlajsdf aolisdjfl aolisdjf" },
        { sender: "bot", message: "Helloaosdfj;aolisdjflkajdfklasflaskldfjlajsdf aolisdjflkajdfklasflaskl dfjlajsdf aolisdjflka jdfklasflaskldfjlajsdf aolisdjfl aolisdjflkajdfklasflaskldfjlajsdf aolisdjflkajdfklasflaskldfjlajsdf kajdfklasflaskldfjlajsdf World" }
    ]);

    function sendMessage() {
        if (message.trim() === "") return; // Avoid sending empty messages
        chatMessages.update(messages => [...messages, { sender: "user", message }]);
        message = ""; // Clear the input after sending
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission if inside a form
            sendMessage();
        }
    }
</script>

<!-- MAIN CONTAINER -->
<div class="bg-primary flex flex-col md:flex-row justify-center items-center p-2 md:p-6 md:h-screen overflow-hidden">
    <!-- PROFILE -->
    <div class="bg-secondary flex flex-col justify-start items-center h-full w-full md:w-5/12 lg:w-4/12 rounded-lg mb-2 md:mr-3 md:mb-0 p-5">
        <!-- PROFILE PICTURE AND NAME MAIN CONTAINER -->
        <div class="flex flex-row justify-start items-center w-full">
            <!-- PROFILE PICTURE -->
            <div class="flex self-start mr-5">
                <img src="src/img/new year 1.jpg" alt="Profile Picture" class="w-16 h-16 rounded-full object-cover" />
            </div>
            <!-- NAME AND ADDRESS -->
            <div class="flex flex-col justify-center items-start">
                <h1 class="text-lg font-semibold">Luis Maverick L. Gabriel</h1>
                <p class="text-xs font-normal text-gray-500">58 M. Ablola St. Tangos South, Navotas City</p>
            </div>
        </div>

        <div class="flex w-full h-1 bg-primary my-5 rounded-full"></div>

        <!-- PROFILE DETAILS -->
        <div class="flex flex-row items-start h-auto md:h-40 w-full justify-start">
            <!-- HEALTH INFO -->
            <div class="flex flex-col w-full sm:w-4/12">
                <div class="flex flex-col justify-start items-center">
                    <!-- CHRONIC CONDITIONS -->
                    <CollapsibleList state={$isChronicConditionsOpen} title={'Chronic Conditions'} items={[
                        'Acute Sinusitis',
                        'Tuberculosis',
                        'Kidney Stones'
                    ]} />

                    <!-- ALLERGIES -->
                    <CollapsibleList state={$isAllergiesOpen} title={'Allergies'} items={[
                        'Crabs',
                        'Paracetamol',
                        'Peanut'
                    ]} />

                    <!-- MEDICATIONS -->
                    <CollapsibleList state={$isMedicationsOpen} title={'Medications'} items={[
                        'Fixcom 4',
                        'Tascit',
                    ]} />

                    <!-- HEALTH RISKS -->
                    <CollapsibleList state={$isHealthRisksOpen} title={'Health Risks'} items={[
                        'Smoking',
                        'Obesity',
                        'Alcohol Usage'
                    ]} />

                    <!-- PAST SURGERIES -->
                    <CollapsibleList state={$isPastSurgeriesOpen} title={'Past Surgeries'} items={[
                        'Kidney Transplant',
                        'Appendicitis Removal',
                    ]} />
                </div>
                
                <div class="flex w-full h-1 bg-primary my-5 rounded-full"></div>
            </div>
            <!-- Emergency Contacts -->
            <div class="flex flex-col justify-start items-start px-2 md:px-2 sm:px-8 h-48 sm:h-44 md:h-40 w-full sm:w-8/12 overflow-auto">
                <div class="flex flex-col w-full h-auto justify-center items-start">
                    <h2 class="text-base font-bold">Mary Grace Gabriel</h2>
                    <h3 class="text-xs font-thin">09334564717</h3>
                    <p class="text-xs font-thin">Mother</p>
                </div>
                <!-- Repeat emergency contacts as needed -->
            </div>
        </div>

        <div class="flex w-full h-1 bg-primary my-5 rounded-full"></div>
    </div>

    <!-- CHAT -->
    <div class="bg-secondary flex flex-col justify-between items-center p-6 w-full md:w-7/12 lg:w-8/12 h-full  rounded-lg mt-2 md:ml-3 md:mt-0 overflow-hidden">
        <div class="flex flex-col h-full w-full overflow-auto">
            <!-- Chat messages container -->
            <div class="flex flex-col flex-grow overflow-auto p-2">
                {#each $chatMessages as { sender, message }}
                    <ChatBubble sender={sender} position={sender === "bot"} message={message} />
                {/each}
            </div>
            <!-- Input container -->
            <div class="flex w-full bg-secondary p-4 border-t border-gray-300">
                <div class="flex items-center w-full bg-white rounded-full outline outline-1 outline-black p-3">
                    <input
                        type="text"
                        bind:value={message}
                        placeholder="What's your emergency?"
                        class="flex-grow text-black placeholder-gray-400 outline-none"
                        on:keydown={handleKeydown}
                    >
                    <button on:click={sendMessage} class="bg-[#627B94] text-white px-6 py-2 rounded-full ml-2">Send</button>
                </div>
            </div>
        </div>
    </div>
</div>
