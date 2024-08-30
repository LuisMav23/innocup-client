<script>
    import { onMount } from 'svelte';
    import Swiper from 'swiper';
    import { Navigation, Pagination } from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    let carouselData = [
        {
            type: 'emergency',
            title: 'In case of Emergency',
            content: {
                name: 'Krishane Calisay',
                relation: 'Mother',
                phoneNumber: '+639326598147'
            }
        },
        {
            type: 'personal',
            title: 'Personal Information',
            content: {
                birthdate: 'Jun 18, 2000',
                age: '24 years old',
                maritalStatus: 'Widowed',
                gender: 'Male',
                phoneNumber: '09634985217',
                philhealthNo: '02-035959-433'
            }
        }
    ];

    let hotlines = [
        { name: 'Philippine Red Cross', action: 'Call' },
        { name: 'Philippine National Police (PNP)', action: 'Call' },
        { name: 'Bureau of Fire Protection (BFP)', action: 'Call' },
    ];

    let swiperContainer;
    let swiper;
    let isInformationVisible = true;

    onMount(() => {
        initSwiper();
    });

    function initSwiper() {
        swiper = new Swiper(swiperContainer, {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    function toggleInformation() {
        isInformationVisible = !isInformationVisible;
        if (isInformationVisible && !swiper) {
            setTimeout(initSwiper, 0);
        } else if (!isInformationVisible && swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }
</script>

<div class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-lg max-w-md w-full">
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-4">LifeLine Chat</h2>
            
            <div class="bg-gray-200 rounded-lg p-4 mb-4">
                <div class="flex items-center mb-2">
                    <div class="w-16 h-16 bg-gray-300 rounded-full mr-4 overflow-hidden">
                        <img src="/api/placeholder/64/64" alt="Santos, Cedrick P." class="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 class="font-semibold">Santos, Cedrick P.</h3>
                        <p class="text-sm text-gray-600">666 J Planas St, Tondo, Gagalangin, Manila, 1013</p>
                    </div>
                </div>
                <button class="bg-red-500 text-white px-4 py-2 rounded-full w-full">Emergency Call</button>
            </div>

            {#if isInformationVisible}
                <div class="mb-4 relative">
                    <div bind:this={swiperContainer} class="swiper">
                        <div class="swiper-wrapper">
                            {#each carouselData as slide}
                                <div class="swiper-slide">
                                    <div class="bg-blue-100 p-4 rounded-lg">
                                        <h3 class="font-semibold mb-2">{slide.title}</h3>
                                        {#if slide.type === 'emergency'}
                                            <p><span class="font-semibold">Name:</span> {slide.content.name}</p>
                                            <p><span class="font-semibold">Relation:</span> {slide.content.relation}</p>
                                            <p><span class="font-semibold">Phone Number:</span> {slide.content.phoneNumber}</p>
                                        {:else if slide.type === 'personal'}
                                            <p><span class="font-semibold">Birthdate:</span> {slide.content.birthdate}</p>
                                            <p><span class="font-semibold">Age:</span> {slide.content.age}</p>
                                            <p><span class="font-semibold">Marital Status:</span> {slide.content.maritalStatus}</p>
                                            <p><span class="font-semibold">Gender:</span> {slide.content.gender}</p>
                                            <p><span class="font-semibold">Phone Number:</span> {slide.content.phoneNumber}</p>
                                            <p><span class="font-semibold">Philhealth No:</span> {slide.content.philhealthNo}</p>
                                        {/if}
                                    </div>
                                </div>
                            {/each}
                        </div>
                        <div class="swiper-pagination absolute bottom-0 left-0 right-0"></div>
                        <div class="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 w-4 h-4"></div>
                        <div class="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 w-4 h-4"></div>
                    </div>
                </div>
            {/if}

            <button on:click={toggleInformation} class="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full mb-4">
                {isInformationVisible ? 'Hide Information' : 'Show Information'}
            </button>

            <div>
                <h3 class="font-semibold mb-2">Hotlines:</h3>
                {#each hotlines as hotline}
                    <div class="flex justify-between items-center mb-2">
                        <span>{hotline.name}</span>
                        <button class="bg-red-500 text-white px-4 py-1 rounded-full text-sm">{hotline.action}</button>
                    </div>
                {/each}
            </div>
        </div>

        <div class="bg-gray-200 p-4 rounded-b-lg">
            <button class="bg-blue-500 text-white px-4 py-2 rounded-full w-full flex items-center justify-center">
                <span class="mr-2">📱</span> Chat with Lifeline!
            </button>
        </div>
    </div>
</div>

<style>
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';

    :global(.swiper-button-next),
    :global(.swiper-button-prev) {
        color: #3B82F6; /* Tailwind blue-500 */
        width: 1rem; /* Smaller width */
        height: 1rem; /* Smaller height */
    }

    :global(.swiper-pagination-bullet-active) {
        background-color: #3B82F6; /* Tailwind blue-500 */
    }
</style>
