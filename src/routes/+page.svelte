<script>
  import { goto } from '$app/navigation';
</script>

<div class="w-screen h-screen bg-primary px-11 flex flex-col justify-center items-center">
    <img src="/src/img/lifeline_logo.png" alt="Lifeline Logo"/>
    <div class="flex items-center justify-center mt-11">
        <button class="bg-accent-1 text-secondary text-2xl px-4 py-3 rounded-lg shadow-lg font-medium md:text-5xl md:px-7 md:py-5" on:click={()=> {goto('/login')}}>Get Started</button>
    </div>
</div>
