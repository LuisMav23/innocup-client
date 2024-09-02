<script>
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
        }
    }
</script>

<div class="max-h-screen-xl bg-[#627B94] flex flex-col items-center pt-15 text-white font-[Montserrat] ">
    
    <!-- Header -->
    <div class="flex items-center mb-7 translate-y-8 relative flex-1 flex-col overflow-hidden">
        <div class="flex items-center mb-5">
            <img src="/src/img/lifeline_logo.png" alt="Lifeline Logo" class="mr-4">
        </div>
    </div>

    <!-- Chat Container -->
<div class="flex flex-col bg-white rounded-lg p-4 shadow-lg w-[1245px] h-[630px] md:px-5 lg:px-1 xl:px-5 flex-grow translate-y-16 relative">
    <div class="overflow-y-auto max-h-[60vh]">
        {#each messages as { text, from, avatar }}
            <div class="flex my-2 {from === 'ai' ? 'justify-start' : 'justify-end'}">
                <div class="max-w-[650px] p-4 rounded-lg {from === 'ai' ? 'bg-[#D9E5F2] text-black' : 'bg-[#627B94] text-white'}">
                    {text}
                    {#if from === 'user'}
                        <div class="flex items-center mt-2">
                            <img src={avatar} alt="User Avatar" class="w-8 h-8 rounded-full ml-2">
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>

    <!-- Input Container -->
    <div class="flex w-full justify-center items-center absolute bottom-5 left-0 p-4">
        <div class="flex items-center w-full max-w-[903px] bg-white rounded-full outline outline-1 outline-black p-3">
            <input type="text" bind:value={message} placeholder="What's your emergency?"
                class="flex-grow text-black placeholder-gray-400 outline-none">
            <button on:click={sendMessage} class="bg-[#627B94] text-white px-6 py-2 rounded-full ml-2">Send</button>
        </div>
    </div>
</div>


    <!-- Profile Button --> 
    <div class="self-end mr-[5%] -translate-y-6  translate-x-14">
        <button class="bg-white text-[#5C6265] w-[228px] border-2 border-[#5C6265] rounded-lg px-4 py-2">Profile Page</button>
    </div>
</div>

