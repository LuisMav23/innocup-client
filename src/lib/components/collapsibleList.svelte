<script lang="ts">
  import { slide } from "svelte/transition";

    export let state: boolean;
    export let title: string;
    export let items: string[];

</script>



<div class=" h-auto w-full flex flex-col rounded-md shadow-lg mb-2">
    <button
        class="flex justify-center items-center bg-gray-600 rounded-t-md transition-all ease-in py-1 text-secondary font-semibold {!state ? 'rounded-b-md': ''}"
        on:click={() => state = !state}
        >
        <h2 class=" text-sm md:text-xs">{title}</h2>
    </button>
    {#if state}
    <div
        class="flex flex-col items-start justify-start overflow-hidden px-4 py-2 md:px-2 md:py-1"
        transition:slide
        >
        <ul>
            {#each items as item}
                <li class="text-xs md:text-[0.50 rem] font-semibold my-1">{item}</li>
            {/each}
        </ul>
    </div>
    {/if}
</div>