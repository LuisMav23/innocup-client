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

<div class="bg-white max-w-md w-full max-h-screen flex items-center justify-center p-5">
    <div class="bg-white rounded-lg  max-w-md w-full overflow-y-auto">
        <div class="p-1">
            <div class="rounded-lg p-4 mb-4">
                <div class="flex items-center mb-2">
                    <div class="w-16 h-16 bg-gray-300 rounded-full mr-4 overflow-hidden">
                        <img src="src\img\new year 1.jpg" alt="Santos, Cedrick P." class="w-full h-full object-cover outline outline-1" />
                    </div>
                    <div>
                        <h3 class="font-semibold">Santos, Cedrick P.</h3>
                        <p class="text-sm text-gray-600">666 J Planas St, Tondo,Gagalangin, Manila, 1013</p>
                        <button class="bg-[#DA0202] text-white  w-[157px] h-[23px] font-bold  text-[15px]">Emergency Call</button>
                    </div>
                </div>
                
            </div>

            {#if isInformationVisible}
                <div class="mb-4 relative">
                    <div bind:this={swiperContainer} class="swiper">
                        <div class="swiper-wrapper">
                            {#each carouselData as slide}
                                <div class="swiper-slide">
                                    {#if slide.type === 'emergency'}
                                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                            <div class="bg-[#78A2CC] p-2 text-center text-white font-semibold">
                                                {slide.title}
                                            </div>
                                            <div class="bg-white p-4">
                                                <div class="flex justify-between">
                                                    <span class="text-gray-500">Name</span>
                                                    <span class="font-semibold text-black  w-[200px] text-left">{slide.content.name}</span>
                                                </div>
                                                <div class="flex justify-between mt-2">
                                                    <span class="text-gray-500">Relation</span>
                                                    <span class="font-semibold text-black w-[200px] text-left">{slide.content.relation}</span>
                                                </div>
                                                <div class="flex justify-between mt-2">
                                                    <span class="text-gray-500">Phone Number</span>
                                                    <span class="font-semibold text-black w-[200px] text-left">{slide.content.phoneNumber}</span>
                                                </div>
                                            </div>
                                        </div>
                                    {:else if slide.type === 'personal'}
                                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                                            <div class="bg-[#78A2CC] p-2 text-center text-white font-semibold">
                                                {slide.title}
                                            </div>
                                            <div class="bg-white p-4 ">
                                                <div class="flex justify-between">
                                                    <span class="text-gray-500">Birthdate</span>
                                                    <span class="font-semibold text-black w-[200px] text-left">{slide.content.birthdate}</span>
                                                </div>
                                                <div class="flex justify-between mt-1">
                                                    <span class="text-gray-500">Age</span>
                                                    <span class="font-semibold text-black w-[200px] text-left">{slide.content.age}</span>
                                                </div>
                                                <div class="flex justify-between mt-1">
                                                    <span class="text-gray-500">Marital Status</span>
                                                    <span class="font-semibold text-black w-[200px] text-left">{slide.content.maritalStatus}</span>
                                                </div>
                                                <div class="flex justify-between mt-1">
                                                    <span class="text-gray-500">Gender</span>
                                                    <span class="font-semibold text-black w-[200px] text-left">{slide.content.gender}</span>
                                                </div>
                                                <div class="flex justify-between mt-1">
                                                    <span class="text-gray-500">Phone Number</span>
                                                    <span class="font-semibold text-black w-[200px] text-left">{slide.content.phoneNumber}</span>
                                                </div>
                                                <div class="flex justify-between mt-1">
                                                    <span class="text-gray-500">Philhealth No</span>
                                                    <span class="font-semibold text-black w-[200px] text-left">{slide.content.philhealthNo}</span>
                                                </div>
                                            </div>
                                        </div>
                                    {/if}
                                </div>
                            {/each}
                        </div>
                        <div class="swiper-pagination absolute bottom-0 left-0 right-0"></div>
                        
                    </div>
                </div>
            {/if}

            <button on:click={toggleInformation} class="bg-white w-[365px] h-[35px] outline  outline-[#78A2CC] outline-3 font-bold text-xl text-[#78A2CC] rounded-[3px] w-full mb-4">
                {isInformationVisible ? 'Hide Information' : 'Show Information'}
            </button>

            <div>
                <h3 class="font-semibold mb-2 opacity-0.5">Hotlines:</h3>
                {#each hotlines as hotline}
                    <div class="flex justify-between items-center mb-2 ">
                        <span class="text-gray-500 font-light">{hotline.name}</span>
                        <button class="bg-[#DA0202] font-bold text-white px-4 py-1 rounded-[4px] text-sm">{hotline.action}</button>
                    </div>
                {/each}
            </div>
            <div class="h-[2.5px] w-[328px] rounded-full bg-[#A4C3D2] place-self-center"></div>
        </div>

<!--Health Conditions-->
       <div class="bg-[#007FFE] w-[206px] text-xl h-[34px] rounded-[6px]  text-white shadow-2xl flex items-center justify-center mt-1">Health Conditions</div>
<!--Blood Type-->
    <div class="bg-white w-[365px] rounded-lg shadow-md overflow-auto my-2">
         <div class="bg-[#78A2CC] w-full h-[22.25px] p-2  rounded-t-[25px] text-white font-semibold flex items-center justify-center">
            Blood Type
            </div>
        <div class="bg-white p-4 w-full ">
                <div class="flex justify-between h-[34px]">
                    <span class="font-semibold text-black  w-[200px] text-left">acute sinusitis</span>
                </div>
                <div class="h-[2.5px]  rounded-full bg-[#A4C3D2] place-self-center"></div>
                <div class="flex justify-between mt-2">
                    <span class="font-semibold text-black w-[200px] text-left">acute sinusitis</span>
                </div>
                <div class="h-[2.5px] rounded-full bg-[#A4C3D2] place-self-center"></div>
                <div class="flex justify-between mt-2">
                    <span class="font-semibold text-black w-[200px] text-left">acute sinusitis</span>
                </div>
                <div class="h-[2.5px] w-[328px] rounded-full bg-[#A4C3D2] place-self-center"></div>
        </div>
    </div>
<!--Chronic Conditions-->
    <div class="bg-white w-[365px] rounded-lg shadow-md overflow-auto my-2">
        <div class="bg-[#78A2CC] w-full h-[22.25px] p-2  rounded-t-[25px] text-white font-semibold flex items-center justify-center">
           Chronic Conditions
           </div>
       <div class="bg-white p-4 w-full ">
               <div class="flex justify-between h-[34px]">
                   <span class="font-semibold text-black  w-[200px] text-left">acute sinusitis</span>
               </div>
               <div class="h-[2.5px] w-[328px] rounded-full bg-[#A4C3D2] place-self-center"></div>
               <div class="flex justify-between mt-2">
                   <span class="font-semibold text-black w-[200px] text-left">acute sinusitis</span>
               </div>
               <div class="h-[2.5px] w-[full] rounded-full bg-[#A4C3D2] place-self-center"></div>
               <div class="flex justify-between mt-2">
                   <span class="font-semibold text-black w-[200px] text-left">acute sinusitis</span>
               </div>
               <div class="h-[2.5px] w-[328px] rounded-full bg-[#A4C3D2] place-self-center"></div>
       </div>
   </div>

<!--Medical Documents & Records-->
<div class="bg-[#007FFE] w-[344px] text-xl h-[34px] rounded-[6px]  text-white shadow-2xl flex items-center justify-center">Medical Documents & Records</div>
<!--Medical Documents-->
    <div class="bg-white w-[365px] rounded-lg shadow-md overflow-auto my-2">
         <div class="bg-[#78A2CC] w-full h-[22.25px] p-2  rounded-t-[25px] text-white font-semibold flex items-center justify-center">
            Medical Documents
            </div>
        <div class="bg-white p-4 w-full ">
                <div class="flex justify-between h-[34px]">
                    <span class="font-semibold text-black  w-[200px] text-left">acute sinusitis</span>
                </div>
                <div class="h-[2.5px]  rounded-full bg-[#A4C3D2] place-self-center"></div>
                <div class="flex justify-between mt-2">
                    <span class="font-semibold text-black w-[200px] text-left">acute sinusitis</span>
                </div>
                <div class="h-[2.5px] rounded-full bg-[#A4C3D2] place-self-center"></div>
                <div class="flex justify-between mt-2">
                    <span class="font-semibold text-black w-[200px] text-left">acute sinusitis</span>
                </div>
                <div class="h-[2.5px] w-[328px] rounded-full bg-[#A4C3D2] place-self-center"></div>
        </div>
    </div>
<!--Medical Records-->
    <div class="bg-white w-[365px] rounded-lg shadow-md overflow-auto my-2">
        <div class="bg-[#78A2CC] w-full h-[22.25px] p-2  rounded-t-[25px] text-white font-semibold flex items-center justify-center">
            Medical Records
           </div>
       <div class="bg-white p-4 w-full ">
               <div class="flex justify-between h-[34px]">
                   <span class="font-semibold text-black  w-[200px] text-left">acute sinusitis</span>
               </div>
               <div class="h-[2.5px] w-[328px] rounded-full bg-[#A4C3D2] place-self-center"></div>
               <div class="flex justify-between mt-2">
                   <span class="font-semibold text-black w-[200px] text-left">acute sinusitis</span>
               </div>
               <div class="h-[2.5px] w-[full] rounded-full bg-[#A4C3D2] place-self-center"></div>
               <div class="flex justify-between mt-2">
                   <span class="font-semibold text-black w-[200px] text-left">acute sinusitis</span>
               </div>
               <div class="h-[2.5px] w-[328px] rounded-full bg-[#A4C3D2] place-self-center"></div>
       </div>
   </div>



        <div class="bg-[#78A2CC]  w-full p-4 rounded-b-[30px] flex flex-col gap-y-2">
            <div class="h-[5px] w-[130px] rounded-full bg-[#FAFAFA] place-self-center"></div>
            <button class="bg-white text-black px-4 py-2 h-[42px] rounded-full w-full flex items-center justify-start font-[Merriweather]">
                <span class="mr-2"><img class="w-[33px] h-[29px]" src="src\img\chatbot_logo.png"></span> Chat with Lifeline!
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
        color: #ffffff; 
        width: 1rem; 
        height: 1rem; 
    }

    :global(.swiper-pagination-bullet-active) {
        background-color: #54575c; 
    }

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@600;700&display=swap');
</style>
