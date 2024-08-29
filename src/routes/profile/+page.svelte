<script>
  let dateOfBirth = null;

  function handleSubmit() {
    // Handle form submission logic here
    console.log('Date of Birth:', dateOfBirth);
  }
</script>

<main class="p-6 bg-blue-300 min-h-screen flex flex-col items-center">
  <!-- Profile and Emergency Call Section -->
  <div class="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between w-full max-w-4xl">
    <div class="flex items-center space-x-4">
      <img src="/path/to/profile.jpg" alt="Profile" class="w-20 h-20 rounded-full object-cover shadow-md">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Santos, Cedrick P.</h1>
        <p class="text-sm text-gray-500">666 J.Plana St. Tondo, Gagalangin, Manila, 1013</p>
      </div>
    </div>
    <button class="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors shadow-md">
      EMERGENCY CALL
    </button>
  </div>

  <!-- Personal Information Section -->
  <div class="bg-white p-6 mt-6 rounded-xl shadow-lg grid grid-cols-2 gap-6 w-full max-w-4xl">
    <div>
      <label class="block text-sm font-medium text-gray-700">Birthdate</label>
      <input
        type="date"
        class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        bind:value={dateOfBirth}
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Marital Status</label>
      <select class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm">
        <option>Widowed</option>
        <option>Single</option>
        <option>Married</option>
        <!-- Other Options -->
      </select>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Phone Number</label>
      <input type="text" class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" placeholder="+63">
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">In Case of Emergency</label>
      <div class="flex space-x-3">
        <input type="text" class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm">
        <input type="text" class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" placeholder="+63">
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">PhilHealth No.</label>
      <input type="text" class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm">
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Age</label>
      <input type="text" class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" placeholder="?? yrs old">
    </div>
    <div>
        <button class="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg">
            Add Information
        </button>
    </div>
  </div>

  

  <!-- Health Conditions Section -->
  <div class="bg-white p-6 mt-6 rounded-xl shadow-lg w-full max-w-4xl">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Health Conditions</h2>
    <div class="grid grid-cols-3 gap-6">
      <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
        <label class="block text-sm font-medium text-gray-700">Blood Type</label>
        <!-- Blood Type Selector -->
      </div>
      <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
        <label class="block text-sm font-medium text-gray-700">Chronic Conditions</label>
        <!-- Chronic Conditions Input -->
      </div>
      <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
        <label class="block text-sm font-medium text-gray-700">Allergies</label>
        <!-- Allergies Input -->
      </div>
      <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
        <label class="block text-sm font-medium text-gray-700">Medications</label>
        <!-- Medications Input -->
      </div>
      <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
        <label class="block text-sm font-medium text-gray-700">Health Risks</label>
        <input type="text" class="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Smoking">
      </div>
      <div class="bg-gray-100 p-4 rounded-lg shadow-sm">
        <label class="block text-sm font-medium text-gray-700">Past Surgeries</label>
        <!-- Past Surgeries Input -->
      </div>
    </div>
  </div>

  <!-- Medical Documents and Records Section -->
  <div class="grid grid-cols-2 gap-6 mt-6 w-full max-w-4xl">
    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-800">Medical Documents</h2>
        <button class="text-blue-500 font-semibold hover:underline">Add files</button>
      </div>
      <!-- Document List -->
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-800">Medical Records</h2>
        <button class="text-blue-500 font-semibold hover:underline">Add record</button>
      </div>
      <div class="mt-4">
        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Date</label>
            <select class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm">
              <!-- Date Selector -->
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Symptoms</label>
            <input type="text" class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Lower Back Pain">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Specialist</label>
            <input type="text" class="mt-2 block w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm" value="Dr. Jane Eslabra">
          </div>
        </div>
      </div>
    </div>
  </div>

  <button class="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg">
    CHAT WITH LIFELINE
  </button>
</main>