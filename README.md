[![GitHub Release][releases-shield]][releases]
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)


[![Community Forum][forum-shield]][forum]


# 🏆 **Footao Game Card** 📺

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

### 🎨 Personnalisation

Vous pouvez désormais personnaliser l'apparence du pied de page (*footer*) directement via les options de la carte :

* **Arrière-plan :** Modifiez `footer_bg` (accepte les formats **HEX**, **RGB** ou **RGBA**).
* **Couleur du texte :** Ajustez `footer_color` pour assurer une visibilité optimale selon votre fond

---

## 💬 **Communauté & Support**
🗣️ **Forum Home Assistant** : [Discuter ici](https://community.home-assistant.io/)

☕ **Soutenir le projet** : 

---


[releases-shield]: https://img.shields.io/github/v/release/developpeurbox/footao-game-card?style=for-the-badge
[releases]: https://github.com/developpeurbox/footao-game-card/releases
[hacs-badge]: https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge
[hacs]: https://github.com/hacs/integration
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/

[commits]: https://github.com/developpeurbox/footao-game-card/commits/main
[hacs]: https://github.com/hacs/integration
[hacsbadge]: https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge
[exampleimg]: example.png
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/
[releases-shield]: https://img.shields.io/github/v/release/developpeurbox/footao-game-card?style=for-the-badge
[releases]: https://github.com/developpeurbox/footao-game-card/releases

