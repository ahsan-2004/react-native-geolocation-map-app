# Interactive Geolocation & Authentication Mobile App (React Native & Expo)

A cross-platform mobile application built with **React Native**, **Expo**, and **Leaflet.js (`react-native-leaflet-kit`)** featuring form authentication and interactive dark-mode geolocation map rendering centered on Lahore, Pakistan.

## ✨ Key Features
- **Cross-Platform Authentication Flow:** Responsive Login screen built with `SafeAreaView` and `KeyboardAvoidingView` for seamless iOS and Android input handling.
- **Interactive Geolocation Map:** Powered by `react-native-leaflet-kit` (`MapContainer`, `TileLayer`, `Marker`) rendering dark-mode tiles and custom location markers (`lat: 31.5204, lng: 74.3587` — Lahore).
- **Clean State Architecture:** State-driven screen transitions (`useState`) between authentication and interactive map views.

## 🛠️ Tech Stack
- **Framework:** React Native (`0.81.5`) & Expo (`~54.0.35`)
- **UI & Core:** React (`19.1.0`), `StyleSheet`, `SafeAreaView`, `KeyboardAvoidingView`
- **Maps Integration:** `react-native-leaflet-kit`

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the Expo development server:**
   ```bash
   npx expo start
   ```

3. **Run on Mobile / Emulator:**
   - Scan the QR code using the **Expo Go** app on Android or iOS, or press `a` for Android Emulator / `w` for Web.

---
**Developed by:** [Ahsan Malik](https://github.com/ahsan-2004)
