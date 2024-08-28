<script lang="ts">
    import { chatStore } from "$lib/stores/chatStore";
    import ChatBubble from "$lib/components/chatBubble.svelte";

</script>


<div>
    {#each $chatStore.messages as message}
        <ChatBubble sender={message['sender']} message={message['message']} position={message['position']} />
    {/each}
</div>