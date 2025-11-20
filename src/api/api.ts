// api.ts — arquivo central que escolhe qual API usar

// ❗ Escolha apenas um dos dois importes abaixo:

 import api from "./api.dev";   // → usar quando testar no CELULAR REAL (Wi-Fi)
// import api from "./api.emu";      // → usar quando testar no EMULADOR ANDROID

export default api;
