import os
import cv2
import numpy as np
import joblib
import pygame
from flask import Flask, request, render_template, jsonify
from deep_translator import GoogleTranslator
from gtts import gTTS
import base64
import io
from PIL import Image

app = Flask(__name__)

UPLOAD_FOLDER = "static/uploads"
AUDIO_FOLDER = "static/audio"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(AUDIO_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["AUDIO_FOLDER"] = AUDIO_FOLDER

# Load the trained model
model = joblib.load("model/fake_product_model.pkl")

# Function to extract features from image
def extract_features(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    img = cv2.resize(img, (100, 100))
    features = img.flatten()
    return np.array(features).reshape(1, -1)

@app.route("/", methods=["GET", "POST"])
def upload_image():
    if request.method == "POST":
        if "file" in request.files:
            file = request.files["file"]
            if file.filename == "":
                return "No file selected"
            file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
            file.save(file_path)
        elif "captured_image" in request.form:
            image_data = request.form["captured_image"].split(",")[1]
            image = Image.open(io.BytesIO(base64.b64decode(image_data)))
            file_path = os.path.join(app.config["UPLOAD_FOLDER"], "captured_image.jpg")
            image.save(file_path)
        else:
            return "No image provided"

        features = extract_features(file_path)
        prediction = model.predict(features)[0]
        result_en = "Original Product ✅" if prediction == 1 else "Fake Product ❌"
        translator = GoogleTranslator(source="en", target="te")
        result_te = translator.translate(result_en)

        return render_template("index.html", result_en=result_en, result_te=result_te, image=os.path.basename(file_path))
    
    return render_template("index.html", result_en=None, result_te=None)

@app.route("/text-to-speech", methods=["POST"])
def text_to_speech():
    data = request.json
    text = data.get("text", "")
    lang = data.get("lang", "en")
    if not text:
        return jsonify({"error": "No text provided"}), 400
    try:
        tts = gTTS(text=text, lang=lang, slow=True)
        audio_filename = f"result_{lang}.mp3"
        audio_path = os.path.join(AUDIO_FOLDER, audio_filename)
        tts.save(audio_path)
        return jsonify({"audio_url": "/" + audio_path})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    pygame.init()
    app.run(debug=True)
