import cv2
import numpy as np
import os
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

# 📌 Step 1: Extract features from an image (logo, size, color)
def extract_features(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    img = cv2.resize(img, (100, 100))  # Resize for consistency
    features = img.flatten()  # Convert to 1D array
    return features

# 📌 Step 2: Load dataset (you need to collect real vs fake product images)
real_images = "dataset/real"  # Folder containing original product images
fake_images = "dataset/fake"  # Folder containing fake product images

X = []  # Features
y = []  # Labels (0 = Fake, 1 = Original)

# Load real product images
for file in os.listdir(real_images):
    X.append(extract_features(os.path.join(real_images, file)))
    y.append(1)  # Label: Original

# Load fake product images
for file in os.listdir(fake_images):
    X.append(extract_features(os.path.join(fake_images, file)))
    y.append(0)  # Label: Fake

# 📌 Step 3: Train model
X = np.array(X)
y = np.array(y)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 📌 Step 4: Save the model
joblib.dump(model, "model/fake_product_model.pkl")
print("✅ Model trained and saved successfully!")
