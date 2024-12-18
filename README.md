# PMPML Bus Tracker

A React Native mobile application for tracking PMPML (Pune Mahanagar Parivahan Mahamandal Ltd) buses in real-time.

## Features

- Real-time bus tracking with interactive maps
- Complete route and stop information
- Search functionality for routes and stops
- Live updates for bus locations
- Detailed route information with start and end points
- Material design user interface

## Screenshots

(Add screenshots here)

## Technologies Used

- React Native
- React Navigation
- React Native Maps
- Vector Icons
- Google Maps Integration

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- React Native CLI
- Android Studio / Xcode

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pmpml-tracker.git
cd pmpml-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Add your Google Maps API key:
- Open `android/app/src/main/AndroidManifest.xml`
- Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key

4. Run the app:
```bash
# For Android
npx react-native run-android

# For iOS
npx react-native run-ios
```

## Building Release APK

1. Generate a keystore:
```bash
cd android/app
keytool -genkeypair -v -storetype PKCS12 -keystore pmpml-tracker.keystore -alias pmpml-tracker -keyalg RSA -keysize 2048 -validity 10000
```

2. Build the release APK:
```bash
cd android
./gradlew assembleRelease
```

The APK will be available at `android/app/build/outputs/apk/release/app-release.apk`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- PMPML for providing the inspiration
- React Native community
- All contributors

## Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/pmpml-tracker](https://github.com/yourusername/pmpml-tracker)
