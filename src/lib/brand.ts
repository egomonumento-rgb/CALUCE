export interface BrandConfig {
  name: string;
  logoUrl: string;
  supportEmail: string;
}

export const currentBrand: BrandConfig = {
  name: "CALUCE", // Aquí pondremos el nombre del cliente en el futuro
  logoUrl: "/logo.png",      // La ruta al logo que usará la app
  supportEmail: "soporte@seniortrack.com",
};
