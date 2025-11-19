# Class BugTracker

BugTracker va écrire dans un fichier de log tout ce qui se passe dans le jeu.

### Comment l’utiliser ?

Voici les 4 fonctions importantes :

```c#
public static void Error(string msg); // qlq chose qui se bloque, pas forcément de crash.
public static void Warning(string msg); // qlq chose d’anormal mais qui ne bloque pas le jeu.
public static void Info(string msg);
public static void Critical(string msg); // erreur fatale, l’app peut planter
```

Elles permettent d’écrire dans le fichier de log différent type d’information avec différent niveau de gravité.

Voici un exemple d’implémentation :

```c#
protected virtual void Start() {
       BugTracker.Info("New entity '" + gameObject.name + "' created.");
   }
```

Voici l’output :
```c
[2025-11-16 17:09:10] [Info]: New entity 'KeronasPrefab' created.
```

Pensez à mettre un maximum d'informations.
Vous pourrez retrouver le chemin vers le fichier bugtracker.log depuis la console dans Unity.

