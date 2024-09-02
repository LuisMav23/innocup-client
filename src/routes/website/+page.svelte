<script>
    import { onMount } from 'svelte';

    let message = "";
    let messages = [
        { text: "Is your brother conscious?", from: "ai" },
        { text: "Di makahinga kapatid ko ano gagawin ko", from: "user", avatar: "path/to/user_avatar.jpg" },
        { text: "Yes", from: "user", avatar: "path/to/user_avatar.jpg" },
        { text: "Help him into a comfortable position, ideally sitting upright or leaning slightly forward.", from: "ai" },
    ];

    function sendMessage() {
        if (message.trim()) {
            messages = [...messages, { text: message, from: "user", avatar: "path/to/user_avatar.jpg" }];
            message = "";
            scrollToBottom();
        }
    }

    function scrollToBottom() {
        const container = document.getElementById('messages-container');
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }
    onMount(() => {
        scrollToBottom();
    });

    $: messages, scrollToBottom();

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@600;700&display=swap');
</style>

<div class="max-h-screen-xl bg-[#78A2CC] flex flex-col items-center pt-15 text-white font-[Montserrat] ">
    
    <!-- Header -->
    <div class="flex items-center mb-7 translate-y-8 relative flex-1 flex-col overflow-hidden">
        <div class="flex items-center mb-5">
            <img src="/src/img/lifeline_logo.png" alt="Lifeline Logo" class="mr-4">
        </div>
    </div>

    <!-- Chat Container -->
    <div class="flex flex-col bg-white rounded-[45px] p-4 shadow-lg w-[1245px] h-[630px] md:px-5 lg:px-1 xl:px-5 flex-grow translate-y-16 relative font-[Montserrat]">
        <div id="messages-container" class="overflow-y-auto max-h-[calc(100%-80px)] pb-20">
            {#each messages as { text, from, avatar }}
                <div class="flex my-2 {from === 'ai' ? 'justify-start' : 'justify-end'} items-end">
                    {#if from === 'ai'}
                        <img src={avatar} alt="AI Avatar" class="w-8 h-8 rounded-full mr-2">
                    {/if}
                        <div class="max-w-[650px] p-4 rounded-lg {from === 'ai' ? 'bg-[#D9E5F2] text-black' : 'bg-[#627B94] text-white'}">
                        {text}
                    </div>
                    {#if from === 'user'}
                        <img src={avatar} alt="User Avatar" class="w-8 h-8 rounded-full ml-2">
                    {/if}
                </div>
            {/each}
        </div>

        <!-- Input Container -->
        <div class="flex w-full justify-center items-center absolute bottom-5 left-0 p-4">
            <div class="flex items-center w-full max-w-[903px] bg-white rounded-full outline outline-1 outline-black p-3">
                <input type="text" bind:value={message} placeholder="What's your emergency?" on:keypress={handleKeyPress}
                    class="flex-grow text-black placeholder-gray-400 outline-none">
                <button on:click={sendMessage} class="bg-[#627B94] text-white px-6 py-2 rounded-full ml-2">Send</button>
            </div>
        </div>
    </div>

    <!-- Profile Button --> 
    <div class="self-end mr-[5%] -translate-y-6 translate-x-14">
        <button class="bg-white text-[#5C6265] w-[228px] border-2 border-[#5C6265] rounded-[10px] px-4 py-2">Profile Page</button>
    </div>
</div>
