<!-- <script lang="ts">
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
</div> -->

<script>
    import { onMount } from 'svelte';
  
    let name = "Santos, Cedrick P.";
    let address = "666 J.Planas St. Tondo, Gagalangin, Manila, 1013";
    let isListening = false;
  
    function toggleListening() {
      isListening = !isListening;
    }
  
    onMount(() => {
      // Initialize any necessary plugins or libraries here
    });
  </script>
  
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-100 bg-white rounded-[45px] shadow-lg overflow-hidden">
      <div class="p-1 space-y-5 w-[402px] h-[878px] ">
        <!-- Header -->
        <div class="flex items-center space-x-4 ml-2 mt-3">
          <img src="src\img\new year 1.jpg" alt="Profile" class="w-[80px] h-[80px] rounded-full" />
          <div>
            <h2 class="font-semibold text-lg">{name}</h2>
            <p class="text-xs text-gray-500">{address}</p>
          </div>
        </div>
  
        <!-- Emergency Call Button -->
        <button class="w-full bg-red-600 text-white py-2 rounded-lg font-semibold">
          Emergency Call
        </button>
  
        <!-- See Information Section -->
        <div class="bg-white p-3 rounded-lg">
          <button type="submit" class="w-full mb-5 h-[35px] text-white  rounded-[3px] font-semibold bg-[#78A2CA]">
            See information
        </button>
          <div class="space-y-2">
            <span class="text-sm">Hotline</span>
            {#each ['Philippine Red Cross', 'Philippine National Police (PNP)', 'Bureau of Fire Protection (BFP)'] as hotline}
              <div class="flex justify-between items-center">
                <span class="text-sm">{hotline}</span>
                <button class="bg-red-600 text-white text-xs py-1 px-3 rounded">Call</button>
              </div>
            {/each}
          </div>
        </div>
  
        <!-- Lifeline AI Section -->
        <div class="bg-blue-100 p-3 rounded-[45px]">
          <h3 class="text-center text-blue-800 font-semibold mb-2">Lifeline AI</h3>
          <p class="text-center text-sm mb-2">Di maka hinga kapatid ko</p>
          <p class="text-center font-semibold mb-4">What's your emergency?</p>
          <button 
            on:click={toggleListening}
            class="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mx-auto"
          >
            <svg class="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  </style>

  <!-- just to make sure changes will reflect -->