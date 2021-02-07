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
  
Le token pour le bearer jwt :  
```
eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwiZ2l2ZW5fbmFtZSI6IkFkbWluIiwibmJmIjoxNjEyMzg4NzgwLCJleHAiOjE2MTI5OTM1ODAsImlhdCI6MTYxMjM4ODc4MCwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAxIn0.IGvA7CuN_WWoNf0DZA3qZnk4w2GQK4anQxI57sUjraObCnV-2oa7WEPvFEDCcCM0oIKXNmEy_YcOl7hTUSzOdA
```
  

# Frontend  
  
Afin de faire fonctionner le frontend il faut passer par les étapes du backend précédement indiqué.  
  
### Angular  
  
Une fois sur angular, dans un terminal réaliser la commande suivante :  
```powershell
npm install
```  
  
Afin d'installer toute les dépendances du client  

Le client n'est pas buggé, mais l'API l'est, ce qui retourne une erreur d'autorisation constante que je n'arrive pas à résoudre    

Si vous désirez voir les items dans le shop, cela est possible, par contre aucun checkout login ou register ne fonctionne, je suis en train d'investiguer ou est mon erreur afin de trouver la solution.  

# Bon code review El Professors  
