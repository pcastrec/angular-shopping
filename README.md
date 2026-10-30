# Initialisation

```
# Execution d'un container node
docker run --rm -it -w /app -v $(pwd):/app -p 4200:4200 node:slim bash
# Creation d'un projet angular
npx @angular/cli new <project>
# Modification des droits sur le dossier
chown -R 1000:1000 <project>
# Sortir du container
exit
# Relancer un container avec des droits non root
docker run --rm -it -w /app -v $(pwd):/app -p 4200:4200 -u 1000:1000 node:slim bash
```

# Shopping

## Rendre accessible sur notre host
```
# package.json
"start": "ng serve --host 0.0.0.0",
```

## Creation d'un service
```
npm run ng g s services/ProductService
```

## Ajout de HttpClient
```
# app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};
```