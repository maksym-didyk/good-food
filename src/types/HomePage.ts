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
  faq_tabs: [
    {
      id: number;
      title: string;
      questions: [
        {
          id: number;
          question: string;
          answer: string;
        }
      ]
    }
  ]
  about_string: [
    {
      id: number;
      string: string;
    }
  ]
  howitwork: [
    {
      id: number;
      title: string;
      content: string;
      image: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string;
            url: string;
          }
        }
      }
    }
  ]
  howitwork_image: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string;
        url: string;
        formats: {
          large: {
            url: string;
          }
        }
      }
    }
  }
}

export interface HomePageType {
id: number;
attributes: HomePageAttributes;
}
