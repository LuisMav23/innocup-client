<script>
  let dateOfBirth = null;
  let age = ''

  function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }
    
    age = calculatedAge;
  }

  function handleSubmit() {
    // Handle form submission logic here
    console.log('Date of Birth:', dateOfBirth);
  }
</script>

<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet">
</head>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap');
</style>

<main class=" bg-[#FAFAFA] w-[1920px] h-[1080px] flex flex-col items-center">
  <!-- Main Content Container -->
  <div class="flex flex-row lg:flex-row gap-4 w-full ml-[5%]">    
    <!-- Left Side: Profile, Personal Information, Health Conditions -->
    <div class="flex-none">
      


       <!-- Profile and Emergency & Personal Information Section -->
       <div class="bg-white p-6 mt-6 rounded-xl shadow-lg w-[1050px] h-[349px] ">
        <!-- Profile and Emergency Call Section -->
        <div class="flex items-center space-x-4">
          <img src="src\img\new year 1.jpg" alt="Profile" class="w-20 h-20 rounded-full object-cover shadow-md">
          <div class="flex flex-col gap-y-2 w-[250px]">
          <div class="outline outline-2">
            <input type="text" class="text-2xl w-full text-blacks font-['Montserrat']">
          </div>
          <div class="outline outline-2">
            <input type="text" class="text-sm w-full h-[50px] p-2.5 text-gray-500 font-['Montserrat'] place-items-start">
          </div>
        </div>
          <button class="bg-[#DA0202] w-[205px] h-[56px] text-white font-medium  drop-shadow-[0px_0px_7px_#E83232] hover:bg-red-600 transition-colors font-[SourceSerif4] " style="margin-left: auto;">
            EMERGENCY CALL
          </button>
        </div>
      
        <!-- Divider -->
        <div class="flex items-center justify-center my-4">
          <div class="flex-1 w-[1000px] h-[5.5px] bg-[#A4C3D2]"></div>
        </div>
      
        <!-- Main Grid: Personal Information + Emergency Section -->
        <div class="grid grid-cols-3 gap-6">



          <!-- Personal Information Section -->
<div class="grid grid-cols-3 gap-2 col-span-2">
  <div>
    <label class="block text-sm font-medium text-gray-700 opacity-50">Birthdate</label>
    <input
      type="date"
      class="text-[13px] mt-2 block w-[150px] h-[24px] p-3 border border-gray-300 font-['Montserrat'] focus:ring-blue-500 focus:border-blue-500 shadow-sm"
      bind:value={dateOfBirth}
      on:change={() => calculateAge(dateOfBirth)}
    />
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 opacity-50">Marital Status</label>
    <select class="mt-2 block w-[110px] h-[24px] font-[Montserrat] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-[15px]">
      <option>Widowed</option>
      <option>Single</option>
      <option>Married</option>
    </select>
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 opacity-50">Phone Number</label>
    <input
      type="text"
      class="mt-2 block w-[130px] h-[24px] p-1 border border-gray-300 font-[Montserrat] focus:ring-blue-500 focus:border-blue-500 shadow-sm"
      placeholder="+63"
    />
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 opacity-50">Age</label>
    <input
      type="text"
      class="mt-2 block w-[90px] h-[24px] p-1 text-sm border border-gray-300 font-[Montserrat] focus:ring-blue-500 focus:border-blue-500 shadow-sm"
      placeholder="?? yrs old"
      value={age}
      readonly
    />
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700 opacity-50">Gender</label>
    <select class="mt-2 block w-[110px] h-[24px] font-[Montserrat] border border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm">
      <option>Male</option>
      <option>Female</option>
      <option>Prefer not to say</option>
    </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 opacity-50">PhilHealth No.</label>
              <input type="text" class="mt-2 block w-[150px] h-[24px] p-1 border border-gray-300  focus:ring-blue-500 focus:border-blue-500 shadow-sm text-center" placeholder="__-_________-_">
            </div>
          </div>
      
          <!-- In Case of Emergency Section -->
          <div class="flex flex-col gap-2 mt-0 ml-[30%]">
            <label class="block text-sm font-medium text-gray-700 font-[Montserrat]">IN CASE OF EMERGENCY</label>
            <input type="text" class="block w-[155px] h-[24px] p-3 border border-gray-300  focus:ring-blue-500 focus:border-blue-500 shadow-sm" placeholder="Name">
            <input type="text" class="block w-[155px] h-[24px] p-3 border border-gray-300  focus:ring-blue-500 focus:border-blue-500 shadow-sm" placeholder="Relation">
            <input type="text" class="block w-[155px] h-[24px] p-3 border border-gray-300  focus:ring-blue-500 focus:border-blue-500 shadow-sm" placeholder="+63">
          </div>
        </div>
      </div>
      

      <!-- Health Conditions Section -->
      <div class="bg-white p-6 mt-5 rounded-[25px] shadow-lg  w-[1050px] h-[593px] ">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Health Conditions</h2>
        <div class="grid grid-cols-3 gap-6">
          <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label class="block text-sm font-medium text-gray-700">Blood Type</label>
            <input type="text" class="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Smoking">
            <!-- Blood Type Selector -->
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label class="block text-sm font-medium text-gray-700">Chronic Conditions</label>
            <input type="text" class="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Smoking">
            <!-- Chronic Conditions Input -->
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label class="block text-sm font-medium text-gray-700">Allergies</label>
            <input type="text" class="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Smoking">
            <!-- Allergies Input -->
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label class="block text-sm font-medium text-gray-700">Medications</label>
            <input type="text" class="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Smoking">
            <!-- Medications Input -->
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label class="block text-sm font-medium text-gray-700">Health Risks</label>
            <input type="text" class="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Smoking">
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
            <label class="block text-sm font-medium text-gray-700">Past Surgeries</label>
            <input type="text" class="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Smoking">
            <!-- Past Surgeries Input -->
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side: Medical Documents and Records -->
    <div class=" w-auto h-auto">
      <!-- Medical Documents and Records Section -->
      <div class="flex flex-col gap-8"  >
        <div class="bg-white p-6 rounded-xl shadow-lg w-[686px] h-[458px]" style="margin-top: 20px;">
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-semibold text-gray-800">Medical Documents</h2>
            <button class="text-blue-500 font-semibold hover:underline">Add files</button>
          </div>
          <!-- Document List -->
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg w-[686px] h-[471px] ">
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-semibold text-gray-800">Medical Records</h2>
            <button class="text-blue-500 font-semibold hover:underline">Add record</button>
          </div>
          <div class="mt-4">
            <div class="grid grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" class="mt-2 block w-full h-15 p-3 border-[2px] border-[#A4C3D2] rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Symptoms</label>
                <input type="text" class="mt-2 block w-full p-3  border-[2px] border-[#A4C3D2] rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Lower Back Pain">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700">Specialist</label>
                <input type="text" class="mt-2 block w-full p-3 border-[2px] border-[#A4C3D2] rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Dr. Jane Eslabra">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Save Details Button -->
  <div class="flex justify-end mt-4 ml-[80%] ">
    <button class="bg-[#78A2CC] text-white px-10 py-2  w-[228px] h-[60px] rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg">
      Save Details
    </button>
  </div>
</main>
