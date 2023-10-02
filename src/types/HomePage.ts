export interface HomePageAttributes {
  hero_title: string;
  hero_content: string;
  menu_title: string;
  about_title: string;
  about_content: string;
  howitwork_title: string;
  delivery_title: string;
  delivery_content: string;
  delivery_time: string;
  faq_title: string;
  feedback_title: string;
}

export interface HomePageType {
id: number;
attributes: HomePageAttributes;
}
