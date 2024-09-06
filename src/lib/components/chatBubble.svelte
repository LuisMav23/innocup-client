<script lang="ts">
    import image from "$lib/img/chatbot_logo.png";

    export let sender: string;
    export let message: string;
    export let position: boolean;
</script>

<div class="flex fled-row items-start w-full mb-4 {position ? 'justify-start': 'justify-end'}">
    {#if position}
        <div class="w-14 h-14 object-cover rounded-full overflow-hidden mr-2">
            <img src={image} alt="pic">
        </div>
    {/if}
    <div class=" flex flex-row w-fit max-w-[70%] px-5 py-3 rounded-md overflow-auto {position ? 'bg-accent-2' : 'bg-accent-1 justify-end'}">
        <div class="flex flex-col {position ? '' : 'items-end'}">
            <h3 class=" text-lg font-semibold {position ? ' text-gray-800' : ' text-secondary'}">{sender}</h3>
            <p class=" text-md font-normal {position ? '  text-gray-800' : ' text-secondary'}">{message}</p>
        </div>
    </div>
</div>