export interface Elements {
  data: {
    id: number;
    attributes: ElementsAttributes;
  }
}

export interface ElementsAttributes {
  contact_button: string;
  buy_button: string;
  footer_ration: string;
  footer_services: string;
  footer_calltime: string;
  footer_callus: string;
  item_delivery_date: string;
  item_kcal: string;
  item_prots: string;
  item_fats: string;
  item_carbs: string;
  header_menu: [
    {
      id: number;
      title: string;
      url: string;
    }
  ]
  footer_menu: [
    {
      id: number;
      title: string;
      url: string;
    }
  ]
  }