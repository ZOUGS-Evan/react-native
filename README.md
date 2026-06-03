react-b2lp-mobile

Application mobile développée avec React Native et Expo, ciblant iOS, Android et le web.
Elle communique avec une API REST pour gérer les données et l’authentification des utilisateurs.

Description

react-b2lp-mobile est une application mobile qui utilise React Native et Expo pour l’interface, et AsyncStorage pour le stockage local. Elle consomme une API REST pour afficher des données et permettre aux utilisateurs connectés de poster des commentaires.

API Base URL :

export const API_BASE = "https://evanzougs.fr/b2lp/api";
Stack technique et versions
Couche / Technologie	Version
Node.js	22.21.1
npm	10.9.4
React	19.2.3
React DOM	19.2.3
React Native	0.85.3
Expo	56.0.8
Expo CLI	56.1.13
Expo Status Bar	56.0.4
React Navigation (native)	7.2.5
React Navigation (native-stack)	7.16.0
Async Storage (@react-native-async-storage/async-storage)	3.1.1
React Native Gesture Handler	2.31.2
React Native Reanimated	4.3.1
React Native Safe Area Context	5.7.0
React Native Screens	4.25.2
React Native Web	0.21.2

Prérequis :

Node.js >= 22
npm >= 10
Structure du projet
react-b2lp-mobile/
├── android/                 # Code Android
├── ios/                     # Code iOS
├── src/
│   ├── assets/              # Fonts, images
│   │   ├── fonts/
│   │   └── images/
│   ├── components/          # Composants UI réutilisables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx
│   │   ├── Comment.tsx
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── screens/             # Écrans principaux
│   │   ├── HomeScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── PostDetailScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── navigation/          # Stack & navigation
│   │   └── AppNavigator.tsx
│   ├── services/            # Appels API
│   │   ├── api.ts
│   │   └── postService.ts
│   └── utils/               # Fonctions utilitaires
│       ├── helpers.ts
│       └── auth.ts
├── App.js                    # Entrée principale
├── package.json              # Dépendances et scripts
├── tsconfig.json             # TypeScript config
├── babel.config.js           # Babel config
├── metro.config.js           # Metro bundler config
├── tailwind.config.js        # NativeWind / Tailwind CSS
└── README.md                 # Ce fichier
Installation
Cloner le projet :
git clone https://github.com/ZOUGS-Evan/react-native.git
cd react-b2lp-mobile
Installer les dépendances :
npm install
# ou si yarn est installé :
yarn install
Lancer le projet (développement)
npm start          # Expo DevTools — choisir la plateforme
npm run android    # Lancer sur Android
npm run ios        # Lancer sur iOS
npm run web        # Lancer dans le navigateur

TypeScript / Tests :

npx tsc --noEmit   # Vérifier les types
npx jest           # Lancer les tests
API Backend

Base URL : https://evanzougs.fr/b2lp/api

Routes publiques
Méthode	Endpoint	Description
GET	/posts	Récupère tous les billets
POST	/login	Connexion utilisateur
POST	/register	Inscription utilisateur
Routes protégées (token Bearer requis)
Méthode	Endpoint	Description
GET	/posts/{id}	Détail d’un billet + commentaires
GET	/user	Informations utilisateur connecté
POST	/comments	Créer un commentaire

Particularité : le token retourné par /login est un texte brut. Stocké dans AsyncStorage pour les routes protégées.

Architecture

L’application suit le pattern Screen / Component / Service / Utils :

Screens (src/screens/) : wrappers minimalistes, gèrent la navigation et délèguent l’affichage aux composants.
Components (src/components/) : UI et logique de rendu, formulaires, listes, cartes…
Services (src/services/) : centralisation des appels API.
Utils (src/utils/) : fonctions transversales, gestion de l’authentification, helpers.
