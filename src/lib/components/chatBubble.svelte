<script lang="ts">
    export let sender: string;
    export let message: string;
    export let position: boolean;
</script>

<div class=" flex flex-row w-fit px-5 py-3 rounded-md {position ? 'bg-accent-2' : 'bg-accent-1 justify-end'}">
    <div class="flex flex-col {position ? '' : 'items-end'}">
        <h3 class=" text-lg font-semibold {position ? ' text-gray-800' : ' text-secondary'}">{sender}</h3>
        <p class=" text-md font-normal {position ? '  text-gray-800' : ' text-secondary'}">{message}</p>
    </div>
</div>