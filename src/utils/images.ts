export interface ObjectImage {
  src: string;
  link: string;
  index: number;
}

export const imagesCarousel: Array<string> = [
  "https://www.theparking.com.co/web/portals/0/City1.jpg",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
];

export const imagesCarouselv2: Array<ObjectImage> = [
  { src: "https://via.placeholder.com/300", link: "/", index: 0 },
  { src: "https://via.placeholder.com/300", link: "/about", index: 1 },
];
