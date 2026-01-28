# Configuration EmailJS pour TheRealFrance

## 🚀 Guide de configuration rapide

### Étape 1 : Créer un compte EmailJS

1. Allez sur https://www.emailjs.com
2. Créez un compte gratuit (1000 emails/mois)
3. Connectez-vous à votre dashboard

### Étape 2 : Configurer un service email

1. Dans le dashboard, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur (Gmail recommandé)
4. Suivez les instructions pour connecter votre compte email
5. **Copiez le Service ID** (ex: `service_go62bxn`)

### Étape 3 : Créer un template d'email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template de base :

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Date: {{date}}
Reply to: {{reply_to}}
```

4. **Important** : Dans les paramètres du template, ajoutez :
   - **To Email** : votre email de réception (ex: `contact@therealfrance.com`)
   - **From Name** : `TheRealFrance`
5. **Copiez le Template ID** (ex: `template_sirltvl`)

### Étape 4 : Obtenir votre clé publique

1. Allez dans **Account** > **General**
2. **Copiez votre Public Key** (ex: `gBCd9v4gii2QckAgK`)

### Étape 5 : Configurer dans le fichier .env

**Important :** Dans Vite, les variables d'environnement doivent être préfixées par `VITE_` pour être accessibles côté client.

1. Créez un fichier `.env` à la racine du projet (ou modifiez-le s'il existe déjà)
2. Ajoutez vos clés EmailJS avec le préfixe `VITE_` :

```env
VITE_EMAILJS_SERVICE_ID=service_go62bxn
VITE_EMAILJS_TEMPLATE_ID=template_sirltvl
VITE_EMAILJS_PUBLIC_KEY=gBCd9v4gii2QckAgK
VITE_EMAILJS_TO_EMAIL=contact@therealfrance.com
```

**Explication :**
- `VITE_EMAILJS_SERVICE_ID` : Votre Service ID EmailJS
- `VITE_EMAILJS_TEMPLATE_ID` : Votre Template ID EmailJS
- `VITE_EMAILJS_PUBLIC_KEY` : Votre Public Key EmailJS
- `VITE_EMAILJS_TO_EMAIL` : L'email où vous voulez recevoir les messages (optionnel, par défaut: contact@therealfrance.com)

3. **Redémarrez le serveur de développement** après avoir modifié le `.env` :
   - Arrêtez le serveur (Ctrl+C)
   - Relancez : `npm run dev`

**Note :** Le code lit automatiquement ces variables depuis le `.env`. Vous n'avez plus besoin de modifier `Contact.jsx` directement.

**Email de destination :** Vous pouvez aussi l'ajouter dans le `.env` avec `VITE_EMAILJS_TO_EMAIL` (voir ci-dessus), ou le modifier directement dans `src/pages/Contact.jsx` ligne 109.

### Étape 6 : Tester

1. Lancez votre site : `npm run dev`
2. Allez sur la page Contact
3. Remplissez le formulaire
4. Envoyez un message
5. Vérifiez votre boîte email !

## ✅ Vérification

- [ ] Compte EmailJS créé
- [ ] Service email configuré (Service ID copié)
- [ ] Template créé avec les variables (Template ID copié)
- [ ] Public Key copiée
- [ ] Variables d'environnement configurées dans `.env` (avec préfixe VITE_)
- [ ] Serveur redémarré après modification du `.env`
- [ ] Email de destination configuré
- [ ] Test d'envoi réussi

## 🎉 C'est prêt !

Votre formulaire de contact est maintenant fonctionnel avec EmailJS !

## 📚 Ressources

- Documentation EmailJS : https://www.emailjs.com/docs/
- Support : https://www.emailjs.com/support/



