📱 B2LP Mobile — Documentation technique

Application mobile développée avec React Native + Expo dans le cadre du projet B2LP.

Auteur : Evan Zougs
Dépôt GitHub : https://github.com/ZOUGS-Evan/react-native
API : https://evanzougs.fr/b2lp/api

Présentation

B2LP Mobile est une application mobile développée avec React Native et Expo permettant la consultation de billets, l’authentification utilisateur et l’accès à des contenus dynamiques via une API REST.

L’application est compatible avec :

Android
iOS
Web (via Expo / React Native Web)

Le backend est une API REST accessible à l’adresse :

https://evanzougs.fr/b2lp/api
Fonctionnalités
Utilisateur non authentifié
Consulter la liste des billets
Consulter le détail d’un billet
Accéder à l’écran de connexion
Accéder à l’écran d’inscription
Utilisateur authentifié
Connexion via API REST
Stockage du token (AsyncStorage)
Accès aux routes protégées
Déconnexion
Technologies utilisées
Couche	Technologie	Version
Mobile	React Native	0.85.3
Framework	Expo	56.0.8
CLI Expo	Expo CLI	56.1.13
Interface	React	19.2.3
Navigation	React Navigation	7.2.5
Stack Navigation	Native Stack	7.16.0
Stockage local	AsyncStorage	3.1.1
Gestures	React Native Gesture Handler	2.31.2
Animations	Reanimated	4.3.1
Safe Area	Safe Area Context	5.7.0
Screens	React Native Screens	4.25.2
Web	React Native Web	0.21.2
Runtime	Node.js	22.21.1
Package Manager	npm	10.9.4
Architecture

Le projet est structuré de manière simple et modulaire.

Navigation
AppNavigator.tsx
Gestion de la navigation principale de l’application
Screens
HomeScreen → liste des billets
BilletScreen → détail d’un billet
LoginScreen → connexion utilisateur
RegisterScreen → inscription utilisateur
Components
Header → barre de navigation
Post → affichage d’un billet
Services
billetService → gestion des appels API
Lib
auth → gestion du token (AsyncStorage)
Utils
fonctions utilitaires globales
Structure du projet
react-b2lp-mobile/
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
│   │   ├── BilletScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   └── RegisterScreen.tsx
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
API utilisée

L’application communique avec une API REST.

Base URL
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

Fonctionnement
L’utilisateur se connecte via l’API
L’API retourne un token brut
Le token est stocké dans AsyncStorage
Il est injecté dans les requêtes protégées
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
Auteur

Evan Zougs

Projet réalisé dans le cadre d’un projet React Native + Expo.
