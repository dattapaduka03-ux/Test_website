import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import eventsData from '@/data/events.json';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function EventsPage() {
  const { language, t } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const eventsRef = useScrollAnimation({ threshold: 0.2 });

  const events = useMemo(() => {
    return eventsData.events.map(event => ({
      ...event,
      name: event.name[language as keyof typeof event.name] || event.name.en,
      description: event.description[language as keyof typeof event.description] || event.description.en,
      location: event.location[language as keyof typeof event.location] || event.location.en,
    }));
  }, [language]);

  const upcomingEvents = events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div key={language} className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 gradient-primary-shiny text-white text-center scroll-fade-in-up">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('events.title')}</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">{t('events.content')}</p>
        </div>
      </section>

      {/* Events Grid */}
      <section ref={eventsRef} className="py-12 sm:py-20 bg-background spiritual-section scroll-fade-in-up">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text">{t('events.upcomingEvents')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105 transform"
              >
                {/* Event Header with Category Badge */}
                <div className="bg-gradient-to-r from-[#FB8F1C] via-[#FB6922] to-[#FCBB16] p-4 text-white">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{event.name}</h3>
                    <span className="bg-white text-[#FB8F1C] px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category === 'puja' ? 'Puja' : 'Festival'}
                    </span>
                  </div>
                  <p className="text-sm opacity-90">{new Date(event.date).toLocaleDateString(language === 'en' ? 'en-US' : language === 'hi' ? 'hi-IN' : 'en-IN')}</p>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-700">
                      <span className="font-semibold w-24">{t('events.time')}:</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="font-semibold w-24">{t('events.duration')}:</span>
                      <span>{event.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="font-semibold w-24">{t('events.location')}:</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Expandable Description */}
                  {selectedEvent === event.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                      <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  )}

                  {/* Click to expand indicator */}
                  <div className="text-center mt-4">
                    <button className="text-[#FB8F1C] font-semibold text-sm hover:text-[#FB6922] transition-colors">
                      {selectedEvent === event.id ? '- Hide Details' : '+ View Details'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-background to-[#FFF8F0]">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text">Festival Calendar</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Timeline View */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Timeline</h3>
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-[#FB8F1C] to-[#FCBB16] rounded-full"></div>
                      {index < upcomingEvents.length - 1 && (
                        <div className="w-1 h-16 bg-gradient-to-b from-[#FB8F1C] to-transparent mt-2"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{event.name}</p>
                      <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Statistics */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Festival Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#FB8F1C] to-[#FB6922] text-white rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold">{upcomingEvents.length}</p>
                    <p className="text-sm opacity-90">Total Events</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#FCBB16] to-[#FB8F1C] text-white rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold">{upcomingEvents.filter(e => e.category === 'puja').length}</p>
                    <p className="text-sm opacity-90">Pujas</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#FB6922] to-[#FCBB16] text-white rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold">{upcomingEvents.filter(e => e.category === 'festival').length}</p>
                    <p className="text-sm opacity-90">Festivals</p>
                  </div>
                  <div className="bg-gradient-to-br from-[#FB8F1C] to-[#FCBB16] text-white rounded-lg p-6 text-center">
                    <p className="text-3xl font-bold">
                      {Math.ceil(upcomingEvents.reduce((sum, e) => {
                        const hours = parseInt(e.duration.split(' ')[0]);
                        return sum + (isNaN(hours) ? 0 : hours);
                      }, 0) / 24)}
                    </p>
                    <p className="text-sm opacity-90">Days of Celebration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 gradient-primary-shiny text-white text-center">
        <div className="container">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Celebrations</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the divine blessings and spiritual energy of our sacred festivals and pujas
          </p>
          <button className="bg-white text-[#FB8F1C] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
