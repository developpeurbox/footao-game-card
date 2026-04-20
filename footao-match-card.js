/* ========================================================
   Footao Match Card  — v1.2
   ======================================================== */

/* --- LitElement fournie par Home Assistant --- */
const _LitEl =
  customElements.get("ha-panel-lovelace")
    ? Object.getPrototypeOf(customElements.get("ha-panel-lovelace"))
    : Object.getPrototypeOf(customElements.get("home-assistant-main") || HTMLElement);

const _html = _LitEl?.prototype?.html ?? ((s, ...v) => s.reduce((a, c, i) => a + (v[i - 1] ?? "") + c));

/* ========================================================
   CARTE PRINCIPALE
   ======================================================== */

class FootaoMatchCard extends HTMLElement {

  setConfig(config) {
    if (!config.entity) throw new Error("Vous devez définir une entité.");
    this._config = config;
  }

  set hass(hass) {
    if (!this._config) return;

    const state = hass.states[this._config.entity];
    if (!state) {
      this.innerHTML = `<ha-card style="padding:16px;color:red">Entité introuvable : ${this._config.entity}</ha-card>`;
      return;
    }

    const a = state.attributes;

    // Si display=false → carte masquée
    if (a.display === false) {
      this.innerHTML = "";
      return;
    }

    // Noms des attributs publiés par l'intégration footao
    const logoDom  = a.logoDomicile  || a.team_domicile_logo  || "";
    const logoExt  = a.logoExterieur || a.team_exterieur_logo || "";
    const gameName = a.game          || a.event_name          || "";
    const chaine   = a.chaine        || state.state            || "";
    const heure    = a.heure         || "";
    const date     = a.date          || "";
    const sprite   = a.logo          || "";

    this.innerHTML = `
      <ha-card>
        <style>
          .foot-card {
            background: #1e1e2e;
            border-radius: 16px;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,.07);
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          }

          /* ── Zone haute : logos en arrière-plan ──────────── */
          .foot-top {
            position: relative;
            padding: 18px 16px 14px;
          }

          /* Les logos BG sont confinés dans .foot-top */
          .foot-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
            pointer-events: none;
            overflow: hidden;
          }
          .foot-bg img {
            position: absolute;
            top: -10px;
            width: 180px;
            height: 180px;
            object-fit: contain;
            opacity: .15;
            filter: grayscale(40%) blur(1px);
          }
          .bg-left  { left: -30px; }
          .bg-right { right: -30px; }

          /* Contenu au-dessus des logos BG */
          .foot-body {
            position: relative;
            z-index: 1;
          }

          .foot-game {
            text-align: center;
            font-weight: 700;
            color: #e0e0f0;
            margin-bottom: 20px;
            font-size: 14px;
          }
          .teams {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .team-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            width: 80px;
          }
          .team-logo {
            width: 72px;
            height: 72px;
            object-fit: contain;
            filter: drop-shadow(0 4px 14px rgba(0,0,0,.7));
          }
          .team-name {
            font-size: 11px;
            color: rgba(255,255,255,.55);
            text-align: center;
            line-height: 1.2;
          }
          .center {
            text-align: center;
            flex: 1;
          }
          .sprite {
            width: 64px;
            height: 18px;
            margin: 0 auto 4px;
          }
          .chaine {
            font-size: 10px;
            color: rgba(255,255,255,.4);
            margin-bottom: 4px;
          }
          .heure {
            font-size: 28px;
            font-weight: 800;
            color: #fff;
          }

          /* ── Pied de carte : fond plus sombre, logos exclus ── */
          .foot-footer {
            background: rgba(0,0,0,.45);
            border-top: 1px solid rgba(255,255,255,.07);
            padding: 11px 16px;
            text-align: center;
            color: #c8a96e;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .3px;
            /* pas de position:relative nécessaire — il est hors .foot-bg */
          }
        </style>

        <div class="foot-card">

          <!-- Zone haute avec logos BG confinés ici -->
          <div class="foot-top">

            <div class="foot-bg">
              ${logoDom ? `<img class="bg-left"  src="${logoDom}">` : ""}
              ${logoExt ? `<img class="bg-right" src="${logoExt}">` : ""}
            </div>

            <div class="foot-body">
              <div class="foot-game">${gameName}</div>

              <div class="teams">

                <div class="team-block">
                  ${logoDom ? `<img class="team-logo" src="${logoDom}">` : `<div style="width:72px;height:72px"></div>`}
                  <span class="team-name">${a.domicile || ""}</span>
                </div>

                <div class="center">
                  ${sprite ? `<div class="sprite" style="${sprite}"></div>` : ""}
                  <div class="chaine">${chaine}</div>
                  <div class="heure">${heure}</div>
                </div>

                <div class="team-block">
                  ${logoExt ? `<img class="team-logo" src="${logoExt}">` : `<div style="width:72px;height:72px"></div>`}
                  <span class="team-name">${a.exterieur || ""}</span>
                </div>

              </div>
            </div>
          </div>

          <!-- Pied de carte HORS de .foot-top → logos BG ne débordent pas ici -->
          ${date ? `<div class="foot-footer">${date}</div>` : ""}

        </div>
      </ha-card>
    `;
  }

  static getConfigElement() {
    return document.createElement("footao-match-card-editor");
  }

  static getStubConfig() {
    return { entity: "sensor.footao_marseille" };
  }

  getCardSize() { return 3; }
}

customElements.define("footao-match-card", FootaoMatchCard);

/* ========================================================
   ÉDITEUR GRAPHIQUE
   ======================================================== */

class FootaoMatchCardEditor extends HTMLElement {

  constructor() {
    super();
    this._config = {};
    this._hass   = null;
    this.attachShadow({ mode: "open" });
  }

  set hass(hass) {
    this._hass = hass;
    this._render();
  }

  setConfig(config) {
    this._config = config || {};
    this._render();
  }

  _render() {
    if (!this._hass) return;

    // On cherche toutes les entités sensor.footao_*
    const entities = Object.keys(this._hass.states)
      .filter(e => e.startsWith("sensor.footao_"))
      .sort();

    const current = this._config?.entity || "";

    this.shadowRoot.innerHTML = `
      <style>
        .editor { padding: 16px; }
        label   { display:block; margin-bottom:6px; font-size:13px; color:var(--primary-text-color,#fff); }
        select  {
          width: 100%;
          padding: 8px 10px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,.2);
          background: var(--card-background-color, #1e1e2e);
          color: var(--primary-text-color, #fff);
          font-size: 14px;
          cursor: pointer;
        }
      </style>
      <div class="editor">
        <label>Sensor Footao</label>
        <select id="entity-select">
          <option value="">-- Choisir un sensor --</option>
          ${entities.map(e => `<option value="${e}" ${e === current ? "selected" : ""}>${e}</option>`).join("")}
        </select>
      </div>
    `;

    this.shadowRoot.getElementById("entity-select")
      .addEventListener("change", (ev) => {
        const value = ev.target.value;
        if (!value) return;
        this._config = { ...this._config, entity: value };
        this.dispatchEvent(new CustomEvent("config-changed", {
          bubbles: true,
          composed: true,
          detail: { config: this._config },
        }));
      });
  }
}

customElements.define("footao-match-card-editor", FootaoMatchCardEditor);
                        
