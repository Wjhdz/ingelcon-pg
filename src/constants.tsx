import { ConstServices } from "../src/interfaces/const/const.ts";

import { LayoutFooterProps } from "./interfaces/layout/layout.ts";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  CodeIcon,
  LightbulbIcon,
  ShieldIcon,
} from "./tools/icon.ts";

const nameCompany = "INGELCON PG";

const instagramLink = "";
const facebooklink = "";
const whatsappLink = "https://wa.me/+573005643431";
const email = "contacto@ejemplo.com";
const tel1 = "3216653009";
const tel2 = "3006787710";
const adress = " calle 4 #7-28";
const city = "Barranquilla";
const departament = "Atlantico";
const country = "Colombia";
const slogan = "";
export const seeMore = "Ver más";

export const networksLinks = {
  instagram: instagramLink,
  facebook: facebooklink,
  whatsapp: whatsappLink,
};
export const InfoCompany = {
  nameCompany: nameCompany,
  adress: adress,
  email: email,
  phone1: tel1,
  phone2: tel2,
  city: city,
  departament: departament,
  country: country,
  slogan: slogan,
};
export const services: ConstServices[] = [
  {
    title: "Desarrollo de Software",
    description:
      "Creamos soluciones de software personalizadas para impulsar su negocio.",
    icon: <CodeIcon size={48} />,
  },
  {
    title: "Consultoría IT",
    description:
      "Asesoramiento experto para optimizar su infraestructura tecnológica.",
    icon: <LightbulbIcon size={48} />,
  },
  {
    title: "Ciberseguridad",
    description:
      "Protegemos sus activos digitales contra amenazas cibernéticas.",
    icon: <ShieldIcon size={48} />,
  },
];

export const projects = [
  {
    title: "Sistema de Gestión Empresarial",
    description:
      "Desarrollo de un ERP personalizado para una empresa líder en logística.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Plataforma de E-learning",
    description:
      "Creación de una plataforma educativa en línea para una universidad prestigiosa.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "App de Salud y Bienestar",
    description:
      "Desarrollo de una aplicación móvil para seguimiento de hábitos saludables.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];
export const socialmedia: LayoutFooterProps[] = [
  {
    link: instagramLink,
    icon: <InstagramOutlined />,
  },
  { link: facebooklink, icon: <FacebookOutlined /> },
  { link: whatsappLink, icon: <WhatsAppOutlined /> },
];
export const aboutUs = {
  title: "Sobre Nosotros",
  description:
    "En TechInnovate Solutions, nos dedicamos a transformar ideas en soluciones tecnológicas innovadoras. Con un equipo de expertos apasionados, estamos comprometidos a impulsar el éxito de nuestros clientes a través de la excelencia en el desarrollo de software, consultoría IT y ciberseguridad.",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
};
