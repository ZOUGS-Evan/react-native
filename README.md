📱 react-b2lp-mobile

Application mobile développée avec React Native + Expo, permettant d’interagir avec une API REST pour afficher des billets, gérer l’authentification et consulter le contenu.

⚙️ Stack technique
Technologie	Version
Node.js	22.21.1
npm	10.9.4
React	19.2.3
React Native	0.85.3
Expo	56.0.8
Expo CLI	56.1.13
React Navigation	7.2.5
React Navigation Native Stack	7.16.0
AsyncStorage	3.1.1
React Native Gesture Handler	2.31.2
React Native Reanimated	4.3.1
React Native Safe Area Context	5.7.0
React Native Screens	4.25.2
React Native Web	0.21.2
🌐 API utilisée
export const API_BASE = "https://evanzougs.fr/b2lp/api";
📦 Installation
git clone https://github.com/ZOUGS-Evan/react-native.git
cd react-b2lp-mobile
npm install
🚀 Lancement du projet
npm start

Option Android :

npm run android

Option iOS :

npm run ios

Option Web :

npm run web
🧱 Structure du projet
react-b2lp-mobile/
├── assets/                      # Images, icônes, fonts
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Header global de l’app
│   │   └── Post.tsx            # Affichage d’un billet
│   │
│   ├── lib/
│   │   └── auth.ts             # Gestion authentification (token)
│   │
│   ├── navigation/
│   │   └── AppNavigator.tsx    # Navigation principale
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx      # Liste des billets
│   │   ├── LoginScreen.tsx     # Connexion utilisateur
│   │   ├── RegisterScreen.tsx  # Inscription utilisateur
│   │   └── BilletScreen.tsx    # Détail d’un billet
│   │
│   ├── services/
│   │   └── billetService.ts    # Appels API (billets, login, etc.)
│   │
│   ├── types/                  # Types TypeScript (modèles API)
│   └── utils/                  # Fonctions utilitaires
│
├── App.tsx                     # Entry point React Native
├── index.ts                    # Bootstrap Expo
├── app.json                   # Configuration Expo
├── package.json
├── tsconfig.json
├── LICENSE
├── AGENTS.md
├── CLAUDE.md
└── .gitignore
🧠 Architecture

L’application est organisée en 4 couches :

Screens → pages principales de l’application
Components → composants UI réutilisables
Services → logique API centralisée
Lib / Utils → gestion auth + fonctions globales
🔐 Authentification
Login via API REST
Token stocké dans AsyncStorage
Ajout automatique dans les headers :
Authorization: Bearer <token>
📡 API Backend

Base URL :

https://evanzougs.fr/b2lp/api

Fonctionnalités :

Authentification utilisateur
Récupération des billets
Détail d’un billet
Système de commentaires (via service)
