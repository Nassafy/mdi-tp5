# ESIR-TP5 - Authentification

## Lancer le serveur
Après avoir cloner ce projet utiliser les commandes suivantes pour le lancer:
```console
npm install
npm start
```
### Authentification
Pour accéder aux route autres que celle d'authentification un token jwt est necéssaire.
Pour l'obtenir utiliser la route login avec {"login" : "rose", "password" : "vert".

## Test
Pour lancer les différents tests utiliser:
```console
npm test
```

Pour avoir des plus d'informations sur les tests, tel que la couverture de code utilisé:
```console
npm run test-report
```