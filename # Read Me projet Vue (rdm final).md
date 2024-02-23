# Read Me projet Vue.JS
 `https://github.com/Clement-Besnard/MicrosoftMails`

`


Ceci sera le read.me concernant notre projet en VueJS consistant à la réalisation d'un système de connection ainsi que d'un répertoire d'adresse mail en utilisant des applications et logiciels externes tels que 'vue'.

## Prérequis pour le bon fonctionnement du site:

### Vue (JS)

    Vue JS est un framework JavaScript permettant de construire des interfaces utilisateur intéractives. Grâce à sa réactivité, les changements de données dans le code se reflettent directement sur l'interface, facilitant son développement Web dynamique.

### Microsoft Oauth et Google Oauth 2

Microsoft OAuth et Google OAuth2 sont des protocoles d'authentification permettant à des applications tierces d'obtenir un accès sécurisé aux services Microsoft et Google au nom de l'utilisateur (ce qui permet le fonctionnement des boutons de connexion et dde récupération des données d'utilisateur dans la base de donnée). Ces protocoles impliquent un processus d'autorisation où l'utilisateur donne son consentement, et en retour, l'application reçoit un jeton d'accès pour interagir avec les services de manière sécurisée. 

# Comment installer vue à travers un terminal

- Dans vôtre terminal commencez par écrire la commande:

`npm install -g @vuecli`;

- Une fois l'installation terminée écrivez:

`vue create nom-du-projet`;

Ce qui permettra ensuite de créer vôtre projet Vue en lui donnant un nom et les fichiers nécessaire suivi par:

`cd nom-du-projet (créer votre projet)`;

- Pour terminer et pouvoir lancer le local:

`npm run serve`;

Ceci vous lancera vôtre localhost, vous permettant d'avoir un aperçu de vôtre projet comme un simulateur.

# Fonctionnement 


- Il y a deux moyens de se connecter, soit par Google, soit par Microsoft (les deux utilisent leur authentificator respectifs). Une fois connecté, vôtre nom sera affiché en haut à droite de vôtre écran, juste à côté du bouton déconnexion.

- Les authentificateurs Microsoft et Google permettent de récupérer et de stocker les informations d'utilisateur, le composant goMail permet d'afficher le nom de l'utilisateur connecté.

- Une fois connecté, vous pourrez accéder au bouton Mail et rentrer des informations qui peuvent être stockée et/ou suprrimée (si vous n'êtes pas connecté, le local vous rendra le message erreur 'Vous devez être connecté').

- 

