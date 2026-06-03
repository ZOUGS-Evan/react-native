📱 B2LP Mobile — Documentation technique

Application mobile développée avec React Native + Expo dans le cadre du projet B2LP.

Auteur : Evan Zougs
Dépôt GitHub : https://github.com/ZOUGS-Evan/react-native
API : https://evanzougs.fr/b2lp/api

Présentation

B2LP Mobile est une application mobile développée avec React Native et Expo permettant aux utilisateurs de consulter des billets, de se connecter à un compte et d’accéder à des contenus dynamiques via une API REST.

L’application est compatible :

Android
iOS
Web (via React Native Web / Expo)

Le backend est une API REST accessible via https://evanzougs.fr/b2lp/api.

Fonctionnalités
Utilisateur non connecté
Consulter la liste des billets
Accéder aux détails d’un billet
Accéder à l’écran de connexion / inscription
Utilisateur connecté
Connexion via API
Stockage du token (AsyncStorage)
Accès aux contenus protégés
Déconnexion
Technologies utilisées
Couche	Technologie	Version
Framework mobile	React Native	0.85.3
Framework	Expo	56.0.8
CLI Expo	Expo CLI	56.1.13
Interface UI	React	19.2.3
Navigation	React Navigation	7.2.5
Navigation Stack	Native Stack	7.16.0
Stockage local	AsyncStorage	3.1.1
Gestures	React Native Gesture Handler	2.31.2
Animations	React Native Reanimated	4.3.1
UI Safe Area	React Native Safe Area Context	5.7.0
Screens	React Native Screens	4.25.2
Web support	React Native Web	0.21.2
Runtime	Node.js	22.21.1
Package manager	npm	10.9.4
Architecture

L’application suit une architecture simple et modulaire :

Navigation
Navigation centralisée dans src/navigation/AppNavigator.tsx
Screens (écrans)
HomeScreen → liste des billets
LoginScreen → connexion utilisateur
RegisterScreen → inscription utilisateur
BilletScreen → détail d’un billet
Components (UI réutilisable)
Header → barre de navigation
Post → affichage d’un billet
Services (API)
billetService.ts → gestion des appels API
Lib
auth.ts → gestion du token (AsyncStorage)
Utils
fonctions utilitaires globales
Structure du projet
react-b2lp-mobile/
│
├── assets/                     # Images, icônes, fonts
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Post.tsx
│   │
│   ├── lib/
│   │   └── auth.ts            # Authentification (token)
│   │
│   ├── navigation/
│   │   └── AppNavigator.tsx   # Navigation principale
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   └── BilletScreen.tsx
│   │
│   ├── services/
│   │   └── billetService.ts   # Appels API
│   │
│   ├── types/
│   └── utils/
│
├── App.tsx                    # Entry point
├── index.ts                   # Bootstrap Expo
├── app.json                   # Config Expo
├── package.json
├── tsconfig.json
└── LICENSE
API utilisée

Base URL :

https://evanzougs.fr/b2lp/api
Endpoints principaux
Méthode	Endpoint	Description
GET	/billets	Liste des billets
GET	/billets/{id}	Détail d’un billet
POST	/login	Connexion
POST	/register	Inscription
GET	/user	Utilisateur connecté
Authentification

L’authentification repose sur un système de token Bearer.

Fonctionnement :
Login via API
Réponse : token brut
Stockage dans AsyncStorage
Ajout automatique dans les requêtes :
Authorization: Bearer <token>
Installation du projet
Cloner le projet
git clone https://github.com/ZOUGS-Evan/react-native.git
cd react-b2lp-mobile
Installer les dépendances
npm install
Lancement du projet
npm start
Android
npm run android
iOS
npm run ios
Web
npm run web
Commandes utiles
Commande	Description
npm start	Lance Expo
npm run android	Lance sur Android
npm run ios	Lance sur iOS
npm run web	Lance sur navigateur
Sécurité
Authentification via token Bearer
Stockage sécurisé avec AsyncStorage
Routes protégées côté API
Validation des données côté backend
Auteur

Evan Zougs

Projet développé dans le cadre d’un projet React Native / Expo.
