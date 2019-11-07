# Data Binding - (Les liaisons de données)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## string-interpolation - (Interpolation de chaîne de caractères)
```
ng generate component string-interpolation --skipTests=true -s
```
> *Here, we use a basic interpolation with {{ }}*

## property-binding - (La liaison de propriété)
```
ng generate component property-binding --skipTests=true --inlineStyle=true
```
> *Here, we use a property-binding with [attribut]="myProperty" -> myProperty is a variable*

## event-binding - (La liaison d'évènement)
```
ng generate component event-binding --skipTests=true
```

## two-way-data-binding - (Le double data-binding)
```
ng generate component two-way-data-binding --skipTests=true -s -t
```

## Run Development server

Run ``` ng serve ``` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

or

Run ``` ng serve --port 9999 ``` for a dev server. Navigate to `http://localhost:9999/`. The app will automatically reload if you change any of the source files.