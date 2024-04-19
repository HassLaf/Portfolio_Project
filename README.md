# Project Portfolio Backend

## Description

Ce projet représente la partie backend du portfolio développé dans le cadre de notre TP de la matière Fullstack.

## Installation

Voici les instructions pour installer votre projet :

Cloner le dépôt : git clone https://github.com/HassLaf/Portfolio_Project.git
Naviguer jusqu'au répertoire du projet : cd Portfolio_Project
Installer les dépendances : pnpm install
Creation d'un point .env contenant ces infos:

PORT = "Ton Port"
DATABASE_URL ="adresse de ta base"
ACCESS_TOKEN_SECRET = "ton secret pour jwt"
REFRESH_TOKEN_SECRET = "ton secret pour jwtrefresh"

Exécuter node server.js

## Usage

Ce projet est une application de gestion de portfolios, offrant des fonctionnalités telles que la récupération, l'ajout, la modification et la suppression de projets. Les utilisateurs peuvent se connecter via la route /login et ajouter de nouveaux utilisateurs via /addUser. Les projets peuvent être ajoutés via /addProject, récupérés via /projects, et gérés individuellement par leur ID via les routes /projects/:projectID. Les fonctionnalités de modification et de suppression des projets nécessitent une authentification via un jeton.



