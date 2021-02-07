# ProjektEPSIC

# Backend  

## Installation nécessaire :

Redis

### Installation de Redis :

D'abord installer un packet manager (chocolatey) à l&#39;aide de cette commande sur powershell en mode administrateur :

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString(&#39;https://chocolatey.org/install.ps1&#39;))
```

Ensuite sur la même console :

```powershell
choco install redis-64 --version=3.0.501 -y
```

Dans un command prompt écrire la ligne suivante :

```powershell
Redis-server
Redis-cli
```

Utiliser la commande : 

```powershell
ping
```

pour vérifier que tout fonctionne (retour pong)   

# Frontend  
  
Afin de faire fonctionner le frontend il faut passer par les étapes du backend précédement indiqué.  
  
### Angular  
  
Une fois sur angular, dans un terminal réaliser la commande suivante :  
```powershell
npm install
```  
  
Afin d'installer toute les dépendances du client  

Le client étant encore buggé veuillez passer par l'inspecteur HTML afin de supprimer la balise :  
```html
<ngx-spinner _ngcontent-ftf-c31="" _nghost-ftf-c22="" class="ng-tns-c22-0"><div _ngcontent-ftf-c22="" class="overlay ng-tns-c22-0 ng-trigger ng-trigger-fadeIn ng-star-inserted" style="background-color: rgba(255, 255, 255, 0.7); z-index: 99999; position: fixed; opacity: 1;"><div _ngcontent-ftf-c22="" class="ng-tns-c22-0 la-3x la-pacman ng-star-inserted" style="color: rgb(51, 51, 51);"><div _ngcontent-ftf-c22="" class="ng-tns-c22-0 ng-star-inserted"></div><div _ngcontent-ftf-c22="" class="ng-tns-c22-0 ng-star-inserted"></div><div _ngcontent-ftf-c22="" class="ng-tns-c22-0 ng-star-inserted"></div><div _ngcontent-ftf-c22="" class="ng-tns-c22-0 ng-star-inserted"></div><div _ngcontent-ftf-c22="" class="ng-tns-c22-0 ng-star-inserted"></div><div _ngcontent-ftf-c22="" class="ng-tns-c22-0 ng-star-inserted"></div><!--bindings={
  "ng-reflect-ng-for-of": "0,1,2,3,4,5"
}--></div><!--bindings={
  "ng-reflect-ng-if": "true"
}--><!--bindings={
  "ng-reflect-ng-if": null
}--><div _ngcontent-ftf-c22="" class="loading-text ng-tns-c22-0" style="z-index: 99999;"><h3 _ngcontent-ftf-c31="" class="ng-tns-c22-0">Chargement ...</h3></div></div><!--bindings={
  "ng-reflect-ng-if": "true"
}--></ngx-spinner>
```  

Si vous désirez voir les items dans le shop, cela est possible, par contre aucun checkout login ou register ne fonctionne, je suis en train d'investiguer ou est mon erreur afin de trouver la solution.  

# Bon code review El Professors  
