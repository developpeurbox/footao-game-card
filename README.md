# Readme
[![GitHub Release][releases-shield]][releases]
[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)
[![BuyMeCoffee][buymecoffeebadge]][buymecoffee]

[![Community Forum][forum-shield]][forum]

# Footao Game Card
Carte Lovelace personnalisée pour afficher les matchs Footao avec logos des équipes, chaîne TV et heure du coup d’envoi.

![Homework card example](/doc/images/exmple.png "Footao example").

## Installation
### Via HACS :
Ajouter ce dépôt à HACS

Dépôts personnalisés->Ajouter ce dépôt-> https://github.com/developpeurbox/footao-game-card/

### Ou manuellement:
```txt
via `/config/www`.
```

## Utilisation

```yaml
type: custom:footao-match-card
entity: sensor.footao_lorient
```
***

[readme]: https://github.com/developpeurbox/footao-game-card/readme
[buymecoffee]: https://www.buymeacoffee.com/developpeurbox
[buymecoffeebadge]: https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?style=for-the-badge
[commits-shield]: https://img.shields.io/github/commit-activity/y/custom-components/readme.svg?style=for-the-badge
[commits]: https://github.com/developpeurbox/footao-game-card/readme/commits/main
[hacs]: https://github.com/hacs/integration
[hacsbadge]: https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge
[exampleimg]: example.png
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/
[releases-shield]: https://img.shields.io/github/release/custom-components/readme.svg?style=for-the-badge
[releases]: https://github.com/developpeurbox/footao-game-card/readme/releases
