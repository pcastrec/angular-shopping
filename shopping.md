# Exercice : Création d’une page de magasin avec Angular 22

## Objectif

Créer une page de magasin en utilisant **Angular 22**, un service Angular et l’API REST [DummyJSON](https://dummyjson.com/). Le but est de récupérer et d’afficher une liste de produits provenant d’une API externe.

## Travail demandé

1. **Créer un projet Angular 22** avec une interface simple et responsive.
2. **Créer un service `ProductService`** chargé de communiquer avec l’API DummyJSON.
3. Utiliser l’API `https://dummyjson.com/products` pour récupérer la liste des produits.
4. Afficher les produits sous forme de cartes contenant :
   - Une image du produit.
   - Son nom.
   - Son prix.
   - Sa catégorie.
### Bonus
5. Ajouter un champ de recherche permettant de filtrer les produits par nom.
6. Ajouter un indicateur de chargement pendant la récupération des données.
7. Gérer les éventuelles erreurs de communication avec l’API.

## Contraintes techniques

- Utiliser Angular 22.
- Utiliser un service Angular pour centraliser les appels HTTP.
- Utiliser `HttpClient` pour communiquer avec l’API.
- Utiliser les composants Angular pour structurer l’application.
- Utiliser les directives ou le contrôle de flux Angular (@if, @for, ...) pour afficher dynamiquement les produits.
- Séparer la logique métier de l’affichage.

## Résultat attendu

La page doit présenter une liste de produits sous forme de grille. Lors du chargement de la page, les produits sont récupérés depuis DummyJSON et affichés automatiquement.
### bonus
L’utilisateur peut rechercher un produit grâce au champ de recherche.

**API à utiliser :** https://dummyjson.com/products

## Bonus (facultatif)

- Ajouter un filtre par catégorie.
- Permettre le tri des produits par prix croissant ou décroissant.
- Ajouter un bouton « Voir les détails » pour chaque produit.
- Ajouter une pagination ou un chargement progressif des produits.