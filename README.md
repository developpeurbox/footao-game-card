# 🏆 **Footao Game Card** 📺
[![PayPal](https://img.shields.io/badge/paypal-me-blue.svg?style=for-the-badge&color=purple&logo=paypal&logoColor=ccc&link=https%3A%2F%2Fpaypal.me%2hlaissus/5)](https://paypal.me/hlaissus/5)
[![GitHub Release]( https://img.shields.io/github/v/release/developpeurbox/footao-game-card?style=for-the-badge)](https://github.com/developpeurbox/footao-game-card/releases)
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
[![Community Forum]( https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge)](https://community.home-assistant.io)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/developpeurbox/footao-game-card/blob/main/LICENSE)

[![HACS Action](https://github.com/developpeurbox/footao-game-card/actions/workflows/hacs.yml/badge.svg?style=for-the-badge)](https://github.com/developpeurbox/footao-game-card/actions/workflows/hacs.yml)  




**Carte Lovelace personnalisée pour afficher les matchs Footao** avec les logos des équipes, la chaîne TV et l'heure du coup d'envoi.

🔗 **Pour la création des capteurs (sensors)**, consultez [ce dépôt](https://github.com/developpeurbox/hass-footao/blob/main/README.md).


![Exemple Footao Game Card](/doc/images/example.png "Exemple d'affichage")


---

## 📥 **Installation**

### **Via HACS (recommandé)** 🔄
1. Ajoutez ce dépôt à HACS :
   **Dépôts personnalisés** → **Ajouter un dépôt personnalisé** → `https://github.com/developpeurbox/footao-game-card/`

### **Ou manuellement** 🛠️
1. Téléchargez le fichier depuis [les releases](https://github.com/developpeurbox/footao-game-card/releases).
2. Placez-le dans le dossier `/config/www/`.

---

## 🎯 **Utilisation**
Ajoutez simplement ce code dans votre configuration:

```yaml
type: custom:footao-game-card
entity: sensor.footao_lorient  # Remplacez par votre entité de capteur
footer_bg: "rgba(0,0,0,0.6)"   # Couleur d'arrière-plan du pied de page
footer_color: "#ffffff"        # Couleur du texte du pied de page

```
Pour avoir toutes vos matches
```yaml
type: custom:auto-entities
card:
  type: entities
  colum: 2
  square: false
filter:
  include:
    - options:
        type: custom:footao-game-card
      entity_id: sensor.footao*
      sort:
        method: attribute
        attribute: date
grid_options:
  columns: 12
  rows: auto
```

![Exemple Footao Game Card](/doc/images/all.png "Tous les matchs")

### 🎨 Personnalisation

Vous pouvez désormais personnaliser l'apparence du pied de page (*footer*) directement via les options de la carte :

* **Arrière-plan :** Modifiez `footer_bg` (accepte les formats **HEX**, **RGB** ou **RGBA**).
* **Couleur du texte :** Ajustez `footer_color` pour assurer une visibilité optimale selon votre fond

---
## 📭 **Aucun match prévu**

Lorsque aucun match n'est trouvé pour l'équipe configurée (match passé ou calendrier vide), la carte affiche automatiquement un état simplifié : le logo de l'équipe, son nom, et un message d'information.

![Carte aucun match](/doc/images/example_no_game.png "Affichage sans match prévu")

> **Aucun match prévu prochainement** s'affiche à la place des informations de diffusion habituelles. Dès qu'un prochain match est disponible dans le capteur, la carte reprend son affichage normal automatiquement.

---
## 💬 **Communauté & Support**
🗣️ **Forum Home Assistant** : [Discuter ici](https://forum.hacf.fr/t/carte-lovelace-integration-footao-le-programme-tv-foot-arrive-dans-home-assistant/84145)

---
