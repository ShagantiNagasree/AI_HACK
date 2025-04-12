// Mock product data
const mockProducts = [
  {
      barcode: "8901234567893",
      name: "Parle-G",
      approved: "FSSAI Approved",
      safeConsumption: "Safe in moderation",
      consumptionLimit: "Good to consume upto 2 packets per day",
      warnings: [
          "High sugar intake can cause diabetes and obesity.",
          "Palm oil may contribute to high cholesterol levels."
      ],
      ingredients: [
          { name: "Wheat Flour (Maida)", description: "Refined wheat flour, low in fiber." },
          { name: "Sugar (Sucrose)", description: "Can cause diabetes and obesity if consumed in excess." },
          { name: "Edible Vegetable Oil (Palm Oil)", description: "May contribute to high cholesterol levels." },
          { name: "Milk Solids", description: "Dairy-based ingredient, provides protein and calcium." },
          { name: "Invert Syrup", description: "A sweetener used for texture and taste." },
          { name: "Salt", description: "Common seasoning and preservative." },
          { name: "Raising Agents (INS 500ii, INS 503ii)", description: "Used for baking and texture enhancement." },
          { name: "Emulsifier (INS 322)", description: "Lecithin, commonly used for mixing ingredients." },
          { name: "Artificial Vanilla Flavour", description: "Enhances taste and aroma." }
      ],
      dangerousIngredients: [
          { name: "Sugar (Sucrose)", reason: "High sugar intake can cause diabetes and obesity." },
          { name: "Palm Oil", reason: "May contribute to high cholesterol levels." },
          { name: "Refined Wheat (Maida)", reason: "Low fiber content, may cause digestive issues." }
      ]
  },
  {
    "barcode": "8901234567894",
    "name": "Britannia Marie Gold",
    "approved": "FSSAI Approved",
    "safeConsumption": "Safe in moderation",
    "consumptionLimit": "Up to 2 packets per day",
    "warnings": [
        "High in refined wheat"
    ],
    "alternatives": [
        "Whole grain biscuits",
        "Oats biscuits"
    ],
    "affectedGroups": [
        "Gluten-intolerant individuals"
    ],
    "ingredients": [
        { "name": "Wheat Flour (Maida)", "description": "Refined wheat flour, low in fiber." },
        { "name": "Sugar (Sucrose)", "description": "Excess sugar intake increases diabetes risk." },
        { "name": "Edible Vegetable Oil (Palm Oil)", "description": "May contribute to heart disease." },
        { "name": "Milk Solids", "description": "Dairy-based ingredient, provides protein and calcium." },
        { "name": "Raising Agents (INS 500ii, INS 503ii)", "description": "Used for baking and texture enhancement." },
        { "name": "Salt", "description": "Common seasoning and preservative." },
        { "name": "Emulsifier (INS 322)", "description": "Lecithin, commonly used for mixing ingredients." }
    ],
    "dangerousIngredients": [
        { "name": "Sugar (Sucrose)", "reason": "Excess sugar intake increases diabetes risk." },
        { "name": "Palm Oil", "reason": "May contribute to heart disease." }
    ]
},
{
  "barcode": "8902233445567",
  "name": "Clinic Plus Shampoo",
  "approved": "FDA Approved",
  "safeConsumption": "Safe for regular use",
  "consumptionLimit": "Use 2-3 times a week",
  "warnings": [
      "Contains sulfates, may cause dryness"
  ],
  "alternatives": [
      "Sulfate-free shampoo",
      "Herbal shampoo"
  ],
  "affectedGroups": [
      "People with dry scalp"
  ],
  "ingredients": [
      { "name": "Aqua", "description": "Water-based ingredient for hydration." },
      { "name": "Sodium Laureth Sulfate (SLES)", "description": "Cleansing agent, may cause dryness." },
      { "name": "Cocamidopropyl Betaine", "description": "Mild surfactant, improves foam." },
      { "name": "Dimethicone", "description": "Silicone-based conditioner for smoothness." },
      { "name": "Sodium Chloride", "description": "Thickening agent, common in shampoos." },
      { "name": "Perfume", "description": "Fragrance ingredient for scent." },
      { "name": "Citric Acid", "description": "Balances pH, enhances shine." },
      { "name": "Methylchloroisothiazolinone", "description": "Preservative to prevent microbial growth." },
      { "name": "Methylisothiazolinone", "description": "Preservative, may cause skin sensitivity." }
  ],
  "dangerousIngredients": [
      { "name": "Sodium Laureth Sulfate (SLES)", "reason": "May cause scalp dryness and irritation." },
      { "name": "Methylisothiazolinone", "reason": "Linked to skin allergies in sensitive individuals." }
  ]
},
{
  "barcode": "8901030869020",
  "name": "Ponds Powder",
  "approved": "FDA Approved",
  "safeConsumption": "Safe for external use",
  "consumptionLimit": "Apply as needed, avoid excessive use",
  "warnings": [
      "May cause irritation for sensitive skin",
      "Avoid inhalation"
  ],
  "alternatives": [
      "Herbal talc",
      "Fragrance-free powder"
  ],
  "affectedGroups": [
      "People with sensitive skin",
      "Asthma patients"
  ],
  "ingredients": [
      { "name": "Talc", "description": "Primary ingredient, provides smooth texture." },
      { "name": "Titanium Dioxide", "description": "Used for UV protection and brightening effect." },
      { "name": "Fragrance", "description": "Adds scent but may cause allergies in sensitive individuals." },
      { "name": "Zinc Oxide", "description": "Common in skincare, provides protection and soothes skin." },
      { "name": "Calcium Carbonate", "description": "Absorbs moisture and improves product consistency." }
  ],
  "dangerousIngredients": [
      { "name": "Talc", "reason": "Possible contamination with asbestos in unregulated sources." },
      { "name": "Fragrance", "reason": "May cause allergies or skin irritation in sensitive individuals." }
  ]
}



];

// The rest of the code remains unchanged...

  
  // DOM Elements
  const screens = {
    initial: document.getElementById('initial-screen'),
    scan: document.getElementById('scan-screen'),
    camera: document.getElementById('camera-screen'),
    result: document.getElementById('result-screen')
  };
  
  const elements = {
    startScan: document.getElementById('start-scan'),
    uploadButton: document.getElementById('upload-button'),
    cameraButton: document.getElementById('camera-button'),
    fileInput: document.getElementById('file-input'),
    cameraFeed: document.getElementById('camera-feed'),
    captureButton: document.getElementById('capture-button'),
    cancelCamera: document.getElementById('cancel-camera'),
    barcodeNumber: document.getElementById('barcode-number'),
    productInfo: document.getElementById('product-info'),
    ingredientsContainer: document.getElementById('ingredients-container'),
    ingredientsList: document.getElementById('ingredients-list'),
    ingredientInfo:document.getElementById('ingredients-info'),
    showDetails: document.getElementById('show-details'),
    tryAgain: document.getElementById('try-again')

  };
  // (Existing element references)

// State management
let showingDetails = false;

// Helper functions
function showScreen(screenId) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenId].classList.remove('hidden');
}

function resetState() {
    showingDetails = false;
    elements.ingredientsContainer.classList.add('hidden');
    if (elements.showDetails) {
        elements.showDetails.textContent = 'Show Details';
    }
}

// ... existing code ...

function displayResult(barcode, isBarcode = true) {
  const product = mockProducts.find(p => p.barcode === barcode);
  elements.barcodeNumber.textContent = `Barcode: ${barcode}`;

  if (!isBarcode) {
      elements.productInfo.innerHTML = '<p class="error-message">Not a valid barcode image</p>';
      elements.showDetails.classList.add('hidden');
      return;
  }

  if (product) {
      elements.productInfo.innerHTML = `
          <p class="product-name">${product.name}</p>
          <p class="approval-status">${product.approved}</p>
          <p class="limits">${product.consumptionLimit}</p>
          <p class="warnings">${product.warnings.join("<br>")}</p>
      `;

      // Create containers for both lists
      elements.productInfo.innerHTML += `
          <div id="ingredients-section" class="details-section hidden">
              <h3>Ingredients:</h3>
              <div class="ingredients-list">
                  ${product.ingredients.map(ingredient => `
                      <div class="ingredient-item">
                          <h4>${ingredient.name}</h4>
                          <p>${ingredient.description}</p>
                      </div>
                  `).join('')}
              </div>
              
              <h3>Dangerous Ingredients:</h3>
              <div class="dangerous-ingredients-list">
                  ${product.dangerousIngredients.map(ingredient => `
                      <div class="dangerous-ingredient-item">
                          <h4>${ingredient.name}</h4>
                          <p class="warning-text">${ingredient.reason}</p>
                      </div>
                  `).join('')}
              </div>
          </div>
      `;

      elements.showDetails.classList.remove('hidden');
  } else {
      elements.productInfo.innerHTML = '<p class="error-message">This barcode data is not available in our database</p>';
      elements.showDetails.classList.add('hidden');
  }
}

// Update show details button click handler
elements.showDetails.addEventListener('click', () => {
  const detailsSection = document.getElementById('ingredients-section');
  const isHidden = detailsSection.classList.contains('hidden');
  
  detailsSection.classList.toggle('hidden');
  
  // Update button text and icon
  elements.showDetails.innerHTML = isHidden ? 
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
      <span>Hide Details</span>` :
      `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
      <span>Show Details</span>`;
});

// ... rest of the code ...
document.addEventListener("DOMContentLoaded", function () {
  const showDetailsBtn = document.getElementById("show-details");
  const ingredientsContainer = document.getElementById("ingredients-container");
  const ingredientsList = document.getElementById("ingredients-list");
  const productInfo = document.getElementById("product-info"); // Example

  // Simulating product details (Replace with real data fetching logic)


  // Display product info (Modify as per real API response)
  if (productData) {
      document.getElementById("barcode-number").textContent = `Barcode: ${productData.barcode}`;
      productInfo.innerHTML = `<p><strong>Name:</strong> ${productData.name}</p>`;

      // Add ingredients if available
      if (productData.ingredients.length > 0) {
          ingredientsList.innerHTML = productData.ingredients.map(ing => `<p>${ing}</p>`).join("");
          showDetailsBtn.classList.remove("hidden"); // Ensure button appears
      }
  }
  elements.showDetails.onclick = function () {
    document.getElementById("ingredients-container").classList.remove("hidden");
    ingredientInfo.classList.remove("hidden");
};

  // Show/Hide Details Button Logic
  showDetailsBtn.addEventListener("click", function () {
    if (ingredientsContainer.classList.contains("hidden")) {
        // Show both sections
        ingredientsContainer.classList.remove("hidden");
        dangerousIngredientsContainer.classList.remove("hidden");
        showDetailsBtn.innerHTML = `Hide Details`;
    } else {
        // Hide both sections
        ingredientsContainer.classList.add("hidden");
        dangerousIngredientsContainer.classList.add("hidden");
        showDetailsBtn.innerHTML = `Show Details`;
    }
});
});



// Camera handling
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        elements.cameraFeed.srcObject = stream;
    } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access camera. Please ensure you have granted camera permissions.');
        showScreen('scan');
    }
}

function stopCamera() {
    const stream = elements.cameraFeed.srcObject;
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        elements.cameraFeed.srcObject = null;
    }
}

// Event listeners
elements.startScan.addEventListener('click', () => showScreen('scan'));
elements.uploadButton.addEventListener('click', () => elements.fileInput.click());
elements.cameraButton.addEventListener('click', () => { showScreen('camera'); startCamera(); });
elements.fileInput.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate barcode detection
      const reader = new FileReader();
    reader.onload = function(e) {
        Quagga.decodeSingle({
            src: e.target.result,
            numOfWorkers: 0,
            inputStream: { size: 800 },
            decoder: { readers: ["ean_reader"] }
        }, function(result) {
            if (result && result.codeResult) {
                showScreen('result');
                displayResult(result.codeResult.code);
            } else {
                showScreen('result');
                displayResult('', false);
            }
        });
    };
    reader.readAsDataURL(file);
    }
  });
elements.captureButton.addEventListener('click', () => {
    const mockBarcode = "8901234567893"; // Simulated barcode detection from camera
    stopCamera();
    showScreen('result');
    displayResult(mockBarcode);
});
elements.cancelCamera.addEventListener('click', () => { stopCamera(); showScreen('scan'); });
elements.showDetails.addEventListener('click', () => {
    showingDetails = !showingDetails;
    elements.ingredientsContainer.classList.toggle('hidden');
    elements.showDetails.textContent = showingDetails ? 'Hide Details' : 'Show Details';
});
elements.tryAgain.addEventListener('click', () => { resetState(); showScreen('initial'); });
function myFunction1() {
    window.location.href = 'scan1.html';
  }