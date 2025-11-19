# Class Units et ses dérivés

Le parent pour toutes les unitées :
```c#
public class Units : MonoBehaviour
```

Toutes les unitées doivent en dérivé exemple :
```c#
public class Keronas : Units
```

Une unité de base (non commandante) ressemblera le plus souvent à ça :
```c#
public class Cavalier : Units
{
   protected override void Start()
   {
       speed = 10f;
       totalHealth = 80;
       damagePerAttack = 25;
       entityTag = "Enemy"; // Le tag Contre qui le Champion va se battre
       base.Start();	// rappel de la méthode start de la class Units
   }
}
```

Le reste du travail (par exemple le déplacement) sera fait dans la class Units.

Pour les commandants, il y a la méthode Capacite() qui peut être overwrite pour permettre au commandant de faire des actions supplémentaires.
```c#
public class Keronas : Units
{
   protected override void Start()
   {
       speed = 3f;
       totalHealth = 150;
       damagePerAttack = 25;
       entityTag = "Enemy";
       base.Start();
   }


   protected override void Capacite()
   {
	// do something
   }
}
```

# Prefab

Pour créer un prefab d’une entité, il faut :
- Un GameObject parent (KeronasPrefab, ChevalierPrefab etc.),
- Un Canvas pour la bar de PV (HealthBar)
- Le modèle 3D du Champion (Entity Model).
- Le manager de son de l’entité.

D'autres éléments peuvent également être ajoutés si besoin.
Les prefabs d’entité (Champions & Enemy) peuvent être copier-coller depuis EntityPrefab.

![EntityPrefab](docs/techniques/images/EntityPrefab.png)


Par exemple: KeronasPrefab possède le script de l’entité :

![KeronasPrefab](docs/techniques/images/KeronasPrefab.png)

Les 3 éléments importants sont : 
- Nav Mesh Agent
- Hp Bar Canvas
- Model Position

Les autres éléments seront définis dans le code des unités.

---

Dans le prefabs, il faut ajouter un Layer dans le GameObject parent : 6 Champion.
Cela permettra aux entités de pouvoir se déplacer dans le map grâce au NavMesh.
Pour le Tag, il faut mettre entities.

![KeronasPrefabTag](docs/techniques/images/KeronasPrefabTag.png)

Dans le GameObject “Entity Model”, le Tag doit être soit “Champion”, soit “Enemy”.

![EntityModelTag](docs/techniques/images/EntityModelTag.png)

Dans l’Animator du modèle 3D, faite en sorte que “Apply Root Motion” soit désactivé. Sinon l’entité se déplacera 2x plus vite que prévu :

![Apply Root Motion](docs/techniques/images/ApplyRootMotionExample.png)

Les prefabs d’entités peuvent être copier-coller depuis ce prefab (EntityPrefab) :

![EntityPrefab Copy and past](docs/techniques/images/EntityPrefabCopyAndPast.png)
