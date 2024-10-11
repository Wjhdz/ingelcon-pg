export const titleEnterprise: string = "INGELCON PG";
export const name: string = "Jorge";
export const instagramLink: string = "";
export const facebooklink: string = "";
export const tiktoklink: string = "";
export const whatsappLink: string = "https://wa.me/+573005643431";
export const email: string = "contacto@ejemplo.com";
export const tel1: string = "3216653009";
export const tel2: string = "3006787710";
export const direccion = "Calle Ejemplo 123, Ciudad, País";

export interface ObjectImage {
  src: string;
  link: string;
  index: number;
}

export const imagesCarouselv2: Array<ObjectImage> = [
  { src: "https://via.placeholder.com/300", link: "/", index: 0 },
  { src: "https://via.placeholder.com/300", link: "/about", index: 1 },
  { src: " hola", link: "/ASDAS", index: 1 },
];

export interface ObjectText {
  text: string;
  index: number;
}

export const textcontent: Array<ObjectText> = [
  { text: " Hola bienvenido a esta pagina", index: 0 },
  { text: " Hola bienvenido a esta pagina 2", index: 1 },
];
