const API_BASE = "https://evanzougs.fr/b2lp/api";

/**
 * 🧠 Formatage propre des erreurs API Laravel
 */
function formatError(data: any): string {
  if (!data) return "Erreur inconnue";

  return (
    data.message ||
    (data.errors && Object.values(data.errors).flat()[0]) ||
    "Erreur inconnue"
  );
}

export class BilletService {

  // 🔐 LOGIN
  static async login(email: string, password: string) {
    const res = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    let data: any;

    try {
      data = await res.json();
    } catch {
      throw new Error("Erreur serveur");
    }

    if (!res.ok) {
      throw new Error(formatError(data));
    }

    if (!data?.auth_token) {
      throw new Error("Token invalide reçu du serveur");
    }

    return data.auth_token;
  }

  // 🧾 REGISTER
  static async register(name: string, email: string, password: string) {
    const res = await fetch(`${API_BASE}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    let data: any;

    try {
      data = await res.json();
    } catch {
      throw new Error("Erreur serveur");
    }

    if (!res.ok) {
      throw new Error(formatError(data));
    }

    return data;
  }

  // 📄 GET ALL BILLETS
  static async getBillets(token: string) {
    const res = await fetch(`${API_BASE}/billets`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(formatError(data));
    }

    return res.json();
  }

  // 📄 GET ONE BILLET
  static async getBilletById(id: string | number, token: string) {
    const res = await fetch(`${API_BASE}/billets/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(formatError(data));
    }

    return res.json();
  }

  // 🚪 LOGOUT (frontend only)
  static async logout() {
    // ici tu peux ajouter API logout si backend plus tard
    return true;
  }
}
