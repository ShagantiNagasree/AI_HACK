document.getElementById("image-btn").addEventListener("click", showImageOptions);
document.getElementById("barcode-btn").addEventListener("click", showBarcodeOptions);

function showImageOptions() {
  document.getElementById("image-options").style.display = "block";
  document.getElementById("barcode-options").style.display = "none";
}

function showBarcodeOptions() {
  document.getElementById("barcode-options").style.display = "block";
  document.getElementById("image-options").style.display = "none";
}

function openFileInput(type) {
  let input = type === 'image' ? document.getElementById("image-input") : document.getElementById("barcode-input");
  input.click();
}

document.getElementById("image-input").addEventListener("change", handleImageUpload);
document.getElementById("barcode-input").addEventListener("change", handleBarcodeUpload);

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const fakeProduct = file.name.includes("fake") ? true : false;

    displayResult({
      productName: "Nike Shoes",
      isFake: fakeProduct,
      ingredients: "Leather, Rubber, Foam"
    });
  }
}

function handleBarcodeUpload(event) {
  const file = event.target.files[0];
  if (file) {
    displayResult({
      productName: "Coca Cola",
      isFake: false,
      ingredients: "Sugar, Water, Carbon Dioxide",
      limitations: "Limit sugar intake: 50g/day",
      governmentApproval: "FDA Approved"
    });
  }
}

function startImageScan() {
  alert("Scanning image (this is a mock scan)");
}

function startBarcodeScan() {
  alert("Scanning barcode (this is a mock scan)");
}

function displayResult(data) {
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";

  resultDiv.innerHTML = `
    <h3>Product: ${data.productName}</h3>
    <p>Status: ${data.isFake ? "Fake Product" : "Real Product"}</p>
    <p>Ingredients: ${data.ingredients}</p>
    <p>Government Approval: ${data.governmentApproval}</p>
    <p>Limitations: <span id="limitations">${data.limitations}</span></p>
    <button onclick="speakLimitations('${data.limitations}')">Read Limitations</button>
    <button onclick="convertLimitationsToTelugu()">Convert Limitations to Telugu</button>
    <button onclick="showMoreDetails()">More Details</button>
    <button onclick="speakLimitationsInTelugu()"> 
      <i class="fas fa-volume-up"></i> Speak in Telugu
    </button>
  `;
}

function speakLimitations(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US"; // English
  window.speechSynthesis.speak(utterance);
}

function convertLimitationsToTelugu() {
  const limitationsText = document.getElementById("limitations").innerText;
  const translatedText = translateToTelugu(limitationsText);
  document.getElementById("limitations").innerText = translatedText;
  alert("Limitations have been converted to Telugu!");
}

function translateToTelugu(text) {
  const translationMap = {
    "Limit sugar intake: 50g/day": "చక్కెర 50 గ్రాములు / రోజు తీసుకోండి"
  };
  return translationMap[text] || text;
}

function speakLimitationsInTelugu() {
  const limitationsText = document.getElementById("limitations").innerText;
  const translatedText = translateToTelugu(limitationsText);
  
  const utterance = new SpeechSynthesisUtterance(translatedText);
  utterance.lang = "te-IN"; // Telugu
  window.speechSynthesis.speak(utterance);
}

function showMoreDetails() {
  alert("More details about ingredients, preparation, and usage.");
}


function myFunction1() {
  window.location.href = 'index.html';
}
 function myFunction2() {
  window.location.href = 'project/flask-api/templates/index.html';
}