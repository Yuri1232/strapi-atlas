import type { Attribute, Schema } from '@strapi/strapi';

export interface CardCard extends Schema.Component {
  collectionName: 'components_card_card_s';
  info: {
    description: '';
    displayName: 'card ';
    icon: 'bulletList';
  };
  attributes: {
    category: Attribute.String;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactContact extends Schema.Component {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Phone_number: Attribute.String;
  };
}

export interface DropDownDropdown extends Schema.Component {
  collectionName: 'components_drop_down_dropdowns';
  info: {
    displayName: 'Dropdown';
    icon: 'connector';
  };
  attributes: {
    catagory: Attribute.String;
  };
}

export interface FeaturesAbout extends Schema.Component {
  collectionName: 'components_features_abouts';
  info: {
    description: '';
    displayName: 'About';
  };
  attributes: {};
}

export interface FeaturesColor extends Schema.Component {
  collectionName: 'components_features_colors';
  info: {
    description: '';
    displayName: 'features';
    icon: 'cube';
  };
  attributes: {
    color: Attribute.Component<'features.color-name', true>;
  };
}

export interface FeaturesColorName extends Schema.Component {
  collectionName: 'components_features_color_names';
  info: {
    description: '';
    displayName: 'color_name';
  };
  attributes: {
    color: Attribute.String;
    quality: Attribute.Boolean;
    quantity: Attribute.String;
    ram: Attribute.String;
    storage: Attribute.String;
  };
}

export interface FeaturesFeatures extends Schema.Component {
  collectionName: 'components_features_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    color: Attribute.String;
    quality: Attribute.Boolean;
    quantity: Attribute.String;
    ram: Attribute.String;
    storage: Attribute.String;
  };
}

export interface FeaturesInformation extends Schema.Component {
  collectionName: 'components_features_information';
  info: {
    description: '';
    displayName: 'Information';
  };
  attributes: {
    description: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface FeaturesRam extends Schema.Component {
  collectionName: 'components_features_rams';
  info: {
    description: '';
    displayName: 'ram';
    icon: 'oneToMany';
  };
  attributes: {
    size: Attribute.Component<'features.size', true>;
  };
}

export interface FeaturesSize extends Schema.Component {
  collectionName: 'components_features_sizes';
  info: {
    displayName: 'size';
  };
  attributes: {
    model: Attribute.String;
  };
}

export interface FeaturesStorage extends Schema.Component {
  collectionName: 'components_features_storages';
  info: {
    displayName: 'storage';
    icon: 'database';
  };
  attributes: {
    size: Attribute.Component<'features.size', true>;
  };
}

export interface MapMap extends Schema.Component {
  collectionName: 'components_map_maps';
  info: {
    description: '';
    displayName: 'Map';
  };
  attributes: {
    address: Attribute.Text;
    location_map_link: Attribute.Text;
  };
}

export interface NabBarNavbar extends Schema.Component {
  collectionName: 'components_nab_bar_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bulletList';
  };
  attributes: {
    dropdown: Attribute.Component<'drop-down.dropdown', true>;
    name: Attribute.String;
  };
}

export interface ProductProduct extends Schema.Component {
  collectionName: 'components_product_product_s';
  info: {
    description: '';
    displayName: 'Product ';
  };
  attributes: {
    category: Attribute.String;
    discount: Attribute.Boolean;
    discount_price: Attribute.String;
    features: Attribute.Component<'features.features'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    name: Attribute.String;
    price: Attribute.String;
  };
}

export interface SocialMediaSocial extends Schema.Component {
  collectionName: 'components_social_media_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    facebook_link: Attribute.String;
    instagram_link: Attribute.String;
    tiktok_link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.card': CardCard;
      'contact.contact': ContactContact;
      'drop-down.dropdown': DropDownDropdown;
      'features.about': FeaturesAbout;
      'features.color': FeaturesColor;
      'features.color-name': FeaturesColorName;
      'features.features': FeaturesFeatures;
      'features.information': FeaturesInformation;
      'features.ram': FeaturesRam;
      'features.size': FeaturesSize;
      'features.storage': FeaturesStorage;
      'map.map': MapMap;
      'nab-bar.navbar': NabBarNavbar;
      'product.product': ProductProduct;
      'social-media.social': SocialMediaSocial;
    }
  }
}
