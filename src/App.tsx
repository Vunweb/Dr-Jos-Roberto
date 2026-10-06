/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutDoctor } from './components/AboutDoctor';
import { ServicesSection } from './components/ServicesSection';
import { Differentials } from './components/Differentials';
import { ClinicGallery } from './components/ClinicGallery';
import { CardioRiskQuiz } from './components/CardioRiskQuiz';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { LocationAndContact } from './components/LocationAndContact';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';
import { createWhatsAppBookingUrl } from './utils/whatsapp';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>();

  const handleOpenBooking = (service?: string) => {
    setSelectedServiceForModal(service);
    setBookingModalOpen(true);
  };

  const handleFloatingWhatsApp = () => {
    const url = createWhatsAppBookingUrl({
      source: 'Botão Flutuante de WhatsApp'
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans-clean text-slate-800">
      {/* 3-Zone Navigation Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 1. Hero Section with Dr. José Roberto portrait & motion animations */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Medical Presentation / About Doctor */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Core Specialties & Diagnostic Exams */}
        <ServicesSection onSelectService={(service) => handleOpenBooking(service)} />

        {/* 4. Clinical Differentiators */}
        <Differentials />

        {/* 5. Clinic Gallery & Facilities (User Photos) */}
        <ClinicGallery />

        {/* 6. Interactive Prevention Risk Quiz */}
        <CardioRiskQuiz />

        {/* 7. Patient Testimonials */}
        <Testimonials />

        {/* 8. Frequently Asked Questions & Insurance Reimbursement */}
        <FaqSection />

        {/* 9. Location in SP (Jardins) & Contact Form */}
        <LocationAndContact />

        {/* 10. Final Call to Action */}
        <FinalCta onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Complete Footer with CFM compliance */}
      <Footer />

      {/* Discreet WhatsApp Floating Button (Mobile Sticky Compliant) */}
      <WhatsAppFloatingButton onClick={handleFloatingWhatsApp} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedServiceForModal}
      />
    </div>
  );
}
