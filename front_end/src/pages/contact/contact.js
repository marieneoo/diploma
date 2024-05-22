import React from 'react';
import ContactMain from '../../components/contact/contact_main.js';
import HomeForms from '../../components/contact/contact_forms.js';
import ContactMap from '../../components/contact/contact_map.js';
export default function Contact() {
    return (
      <div className="contact">
        <ContactMain/>
        <HomeForms/>
        <ContactMap/>
      </div>
    );
  }