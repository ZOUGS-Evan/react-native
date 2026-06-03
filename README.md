📱 B2LP Mobile — Documentation technique

Application mobile développée avec React Native + Expo dans le cadre du projet B2LP.

Auteur : Evan Zougs
Dépôt GitHub : https://github.com/ZOUGS-Evan/react-native
API : https://evanzougs.fr/b2lp/api

📌 Présentation

B2LP Mobile est une application mobile développée avec React Native et Expo permettant de :

consulter des billets
se connecter à un compte
accéder à des contenus dynamiques via une API REST

L’application est compatible :

Android
iOS
Web (via Expo / React Native Web)

Le backend est une API REST disponible ici :
👉 https://evanzougs.fr/b2lp/api

⚙️ Fonctionnalités
👤 Utilisateur non connecté
Consulter la liste des billets
Consulter le détail d’un billet
Accéder à l’écran de connexion
Accéder à l’écran d’inscription
🔐 Utilisateur connecté
Authentification via API
Stockage du token (AsyncStorage)
Accès aux routes protégées
Déconnexion
🧱 Technologies utilisées
Couche	Technologie	Version
Framework mobile	React Native	0.85.3
Framework	Expo	56.0.8
CLI Expo	Expo CLI	56.1.13
React	React	19.2.3
Navigation	React Navigation	7.2.5
Stack navigation	Native Stack	7.16.0
Stockage local	AsyncStorage	3.1.1
Gestures	React Native Gesture Handler	2.31.2
Animations	Reanimated	4.3.1
Safe Area	Safe Area Context	5.7.0
Screens	React Native Screens	4.25.2
Web support	React Native Web	0.21.2
Runtime	Node.js	22.21.1
Package manager	npm	10.9.4
🏗️ Architecture du projet

L’application suit une architecture simple et modulaire :

📂 Navigation
src/navigation/AppNavigator.tsx
→ Gestion des écrans
📱 Screens (pages)
HomeScreen.tsx → liste des billets
LoginScreen.tsx → connexion utilisateur
RegisterScreen.tsx → inscription utilisateur
BilletScreen.tsx → détail d’un billet
🧩 Components
Header.tsx → barre de navigation
Post.tsx → affichage d’un billet
🌐 Services
billetService.ts → appels API
🔐 Lib
auth.ts → gestion du token (AsyncStorage)
🛠 Utils
fonctions utilitaires globales
📁 Structure du projet
react-b2lp-mobile/
│
├── assets/
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Post.tsx
│   │
│   ├── lib/
│   │   └── auth.ts
│   │
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   └── BilletScreen.tsx
│   │
│   ├── services/
│   │   └── billetService.ts
│   │
│   ├── types/
│   └── utils/
│
├── App.tsx
├── index.ts
├── app.json
├── package.json
├── tsconfig.json
└── LICENSE
🌐 API
Base URL
https://evanzougs.fr/b2lp/api
Endpoints
Méthode	Endpoint	Description
GET	/billets	Liste des billets
GET	/billets/{id}	Détail d’un billet
POST	/login	Connexion
POST	/register	Inscription
GET	/user	Utilisateur connecté
🔐 Authentification
Système basé sur token Bearer
Token reçu après login
Stockage via AsyncStorage
Ajout automatique dans les requêtes :
Authorization: Bearer <token>
🚀 Installation
Cloner le projet
git clone https://github.com/ZOUGS-Evan/react-native.git
cd react-b2lp-mobile
Installer les dépendances
npm install
▶️ Lancement
npm start
Android
npm run android
iOS
npm run ios
Web
npm run web
👤 Auteur

Evan Zougs

Projet réalisé avec React Native + Expo.
