# Images Directory

## Configuration des Images

Les images sont maintenant configurées dans `src/config/images.js`. 

### Comment changer les images :

1. **Pour utiliser vos propres images locales** :
   - Placez vos images dans ce dossier (`public/images/`)
   - Modifiez `src/config/images.js` et remplacez les URLs par des chemins locaux :
     ```javascript
     franceLandscape: '/images/votre-image.jpg',
     ```

2. **Pour utiliser des images depuis Unsplash** :
   - Les URLs Unsplash sont déjà configurées dans `src/config/images.js`
   - Vous pouvez les remplacer par d'autres URLs Unsplash
   - Format : `https://images.unsplash.com/photo-[ID]?w=[width]&h=[height]&fit=crop&q=80`

3. **Pour utiliser d'autres services d'images** :
   - Remplacez simplement les URLs dans `src/config/images.js`

### Images actuellement configurées :

- **Header & Hero** : Logo et image hero
- **Home Page** : Paysage français, campagne, villages
- **French Lifestyle** : Mode de vie, café, marché, repas
- **Habits** : Habitudes, baguette, salutation, équilibre vie-travail
- **Culture** : Culture, art, langue, traditions
- **Living in France** : Logement, transport, santé
- **Paris vs Real France** : Comparaisons Paris/régions
- **French Paradox** : Vin, fromage, régime, santé
- **Cost of Living** : Courses, loyer, services
- **Retirement** : Retraite, pension, seniors
- **About & Contact** : Images de présentation

### Note importante :

Les images SVG dans ce dossier sont des placeholders. Le système utilise maintenant les URLs configurées dans `src/config/images.js` qui pointent vers Unsplash par défaut. Vous pouvez facilement les remplacer par vos propres images en modifiant ce fichier de configuration.




