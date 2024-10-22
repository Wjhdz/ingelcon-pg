import { LayoutFooterProps } from "./interfaces/layout/layout.ts";
import { FacebookOutlined, InstagramOutlined } from "./tools/icon.ts";

export const titleEnterprise = "INGELCON PG";
export const name = "Jorge";
export const instagramLink = "";
export const facebooklink = "";
export const whatsappLink = "https://wa.me/+573005643431";
export const email = "contacto@ejemplo.com";
export const tel1 = "3216653009";
export const tel2 = "3006787710";
export const direccion = " calle 4 #7-28";
export const city = "Barranquilla";
export const departament = "Atlantico";
export const country = "Colombia";
export const seeMore = "Ver más";

export const socialmedia: LayoutFooterProps[] = [
  {
    link: instagramLink,
    icon: <InstagramOutlined />,
  },
  { link: facebooklink, icon: <FacebookOutlined /> },
];

export const aboutUs = {
  title: "Sobre Nosotros",
  description:
    "En TechInnovate Solutions, nos dedicamos a transformar ideas en soluciones tecnológicas innovadoras. Con un equipo de expertos apasionados, estamos comprometidos a impulsar el éxito de nuestros clientes a través de la excelencia en el desarrollo de software, consultoría IT y ciberseguridad.",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
};
