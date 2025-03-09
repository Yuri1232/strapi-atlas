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

export interface FeaturesColor extends Schema.Component {
  collectionName: 'components_features_colors';
  info: {
    description: '';
    displayName: 'Color';
    icon: 'cube';
  };
  attributes: {
    color: Attribute.Component<'features.color-name', true>;
  };
}

export interface FeaturesColorName extends Schema.Component {
  collectionName: 'components_features_color_names';
  info: {
    displayName: 'color_name';
  };
  attributes: {};
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
      'features.color': FeaturesColor;
      'features.color-name': FeaturesColorName;
      'map.map': MapMap;
      'nab-bar.navbar': NabBarNavbar;
      'social-media.social': SocialMediaSocial;
    }
  }
}
