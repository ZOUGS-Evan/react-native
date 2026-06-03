# 📱 B2LP Mobile — Documentation technique

Application mobile développée avec React Native + Expo dans le cadre du projet B2LP.

**Auteur :** Evan Zougs  
**Dépôt GitHub :** https://github.com/ZOUGS-Evan/react-native  
**API :** https://evanzougs.fr/b2lp/api

---

## 📌 Présentation

B2LP Mobile est une application mobile développée avec **React Native 0.85.3** et **Expo 56** permettant :

- La consultation de billets
- L'authentification utilisateur
- L'accès à des contenus dynamiques via une API REST

L'application est compatible :

- 🤖 Android
- 🍎 iOS
- 🌐 Web (via Expo / React Native Web)

Le backend est une API REST disponible ici : 👉 **https://evanzougs.fr/b2lp/api**

---

## ⚙️ Fonctionnalités

### 👤 Visiteur
- Consulter la liste des billets
- Consulter le détail d'un billet
- Accéder aux écrans de connexion et d'inscription

### 🔐 Utilisateur authentifié
- Connexion via API REST
- Stockage du token (AsyncStorage)
- Accès aux routes protégées
- Déconnexion

### 🧪 Compte de démonstration

Pour tester l'application sans créer de compte :

```
Email :    demo@b2lp.fr
Mot de passe : Demo1234!
```

---

## 🧱 Technologies utilisées

| Couche | Technologie | Version |
|--------|-------------|---------|
| Mobile Framework | React Native | 0.85.3 |
| Framework | Expo | 56.0.8 |
| CLI Expo | Expo CLI | 56.1.13 |
| Interface utilisateur | React | 19.2.3 |
| Navigation | React Navigation | 7.2.5 |
| Stack Navigation | Native Stack | 7.16.0 |
| Stockage local | AsyncStorage | 3.1.1 |
| Gestures | React Native Gesture Handler | 2.31.2 |
| Animations | React Native Reanimated | 4.3.1 |
| Safe Area | React Native Safe Area Context | 5.7.0 |
| Screens | React Native Screens | 4.25.2 |
| Web Support | React Native Web | 0.21.2 |
| Runtime | Node.js | 22.21.1 |
| Package Manager | npm | 10.9.4 |

---

## 🏗️ Architecture

Le projet repose sur une architecture modulaire :

### 📂 Navigation
- `src/navigation/AppNavigator.tsx` → navigation principale

### 📱 Screens
- `HomeScreen.tsx` → liste des billets
- `BilletScreen.tsx` → détail d'un billet
- `LoginScreen.tsx` → connexion utilisateur
- `RegisterScreen.tsx` → inscription utilisateur

### 🧩 Components
- `Header.tsx` → barre de navigation
- `Post.tsx` → affichage d'un billet

### 🌐 Services
- `billetService.ts` → appels API

### 🔐 Lib
- `auth.ts` → gestion du token (AsyncStorage)

### 🛠 Utils
- Fonctions utilitaires globales

---

## 📁 Structure du projet

```
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
```

---

## 🌐 API

### Base URL

```
https://evanzougs.fr/b2lp/api
```

### Endpoints principaux

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/billets` | Liste des billets |
| GET | `/billets/{id}` | Détail d'un billet |
| POST | `/login` | Authentification |
| POST | `/register` | Création d'un compte |
| GET | `/user` | Informations utilisateur |

---

## 🔐 Authentification

L'authentification repose sur un token Bearer.

### Fonctionnement

1. L'utilisateur saisit son email et son mot de passe
2. L'API retourne un token brut
3. Le token est stocké côté client via **AsyncStorage**
4. Les requêtes protégées incluent automatiquement :
   ```
   Authorization: Bearer <token>
   ```

**Note :** Les utilisateurs non authentifiés ne peuvent pas accéder aux pages protégées.

---

## 🚀 Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/ZOUGS-Evan/react-native.git
cd react-native
```

### 2. Installer les dépendances

```bash
npm install
```

---

## ▶️ Lancer l'application

### Démarrage global

```bash
npm start
```

### Plateformes spécifiques

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Web
```bash
npm run web
```

---

## 📋 Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm start` | Lance Expo |
| `npm run android` | Lancer l'application sur Android |
| `npm run ios` | Lancer l'application sur iOS |
| `npm run web` | Lancer sur navigateur |

---

## 👤 Auteur

**Evan Zougs**

Projet réalisé dans le cadre d'une application React Native + Expo.
