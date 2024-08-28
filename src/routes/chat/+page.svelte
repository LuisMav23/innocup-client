<script lang="ts">
    import { chatStore } from "$lib/stores/chatStore";
    import { writable } from "svelte/store";
    import ChatBubble from "$lib/components/chatBubble.svelte";

    let newMessage = writable('');

    function sendMessage() {
        chatStore.update(store => {
            store.messages.push({
                sender: 'user',
                message: $newMessage,
                position: false
            });
            return store;
        });
        newMessage.set(''); // Clear the input field
    }

</script>


<div class=" bg-primary w-full h-screen flex flex-col justify-center items-center ">
    <h1 class="text-4xl font-semibold text-secondary m-10">Lifeline</h1>
    <div class="flex flex-col w-fit h-full px-11 p-6 rounded-md bg-secondary">
        <div class="flex flex-col h-full">
            {#each $chatStore.messages as message}
                <div class="flex w-auto mb-3 {message['position'] ? 'justify-start': 'justify-end'}">
                    <ChatBubble sender={message['sender']} message={message['message']} position={message['position']} />
                </div>
            {/each}
        </div>
        <div class="flex flex-row w-full px-3 py-2 rounded-full border border-gray-800 ">
            <input type="text" bind:value={$newMessage} class="w-full px-2 py-1 mr-4 rounded-full" placeholder="Type a message..." />
            <button class="bg-primary px-5 py-2 rounded-full text-secondary font-semibold" on:click={sendMessage}>send</button>
        </div>  
    </div>
</div>