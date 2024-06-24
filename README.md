# WildEnv 🌍🔧

Bienvenue dans **WildEnv** ! Ce projet est une petite application Node.js qui affiche un message personnalisé en utilisant des variables d'environnement chargées via le paquet dotenv. 🎉 Ce projet est réalisé dans le cadre d'un exercice de la [Wild Code School](https://www.wildcodeschool.com/). 📚

## Prérequis 📋

- Node.js installé sur votre machine. 📦

## Installation et Configuration ⚙️

1. Clonez ce dépôt sur votre machine locale : 
    ```sh
    git clone https://github.com/Dilgo-dev/WildEnv.git
    ```
2. Accédez au répertoire du projet :
    ```sh
    cd WildEnv
    ```
3. Installez les dépendances :
    ```sh
    npm install
    ```
4. Créez un fichier `.env` à la racine du projet en utilisant le modèle `.env.sample` fourni :
    ```sh
    cp .env.sample .env
    ```
5. Ouvrez le fichier `.env` et remplacez les valeurs fictives par vos propres informations :
    ```env
    name="Votre Nom"
    city="Votre Ville"
    language="Votre Langage Favori"
    ```

## Utilisation 🚀

Pour démarrer l'application, utilisez la commande suivante :
```sh
npm start
```

Vous devriez voir apparaître un message personnalisé dans la console :
```
I am <name>, wilder in <city>, and I love <language> 🔥
```

## Fichiers du Projet 📁

- `index.js` : Le fichier principal de l'application.
- `.env.sample` : Le modèle de fichier pour les variables d'environnement.
- `.gitignore` : Pour ignorer les fichiers non pertinents comme `node_modules` et `.env`.

## Exemple de Sortie 🎉

```
I am John Doe, wilder in Paris, and I love JavaScript 🔥
```

Merci d'avoir utilisé **WildEnv** ! 🌟