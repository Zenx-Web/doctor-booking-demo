import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import Footer from "../components/Footer.jsx";

const SERVICES = [
  { id: 'consult', name: 'General Consultation', durationMin: 30, price: 50, desc: 'Initial assessment and advice.' },
  { id: 'followup', name: 'Follow-up', durationMin: 20, price: 35, desc: 'Review progress and adjust treatment.' },
  { id: 'tele', name: 'Telemedicine', durationMin: 25, price: 40, desc: 'Virtual video consultation.' },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <section id="services" className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SERVICES.map(s => (
            <ServiceCard key={s.id} title={s.name} desc={s.desc} price={s.price} duration={s.durationMin} />
          ))}
        </div>
      </section>

      <section className="bg-white border-t">
        <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-4">
          <div className="rounded-lg border p-4">
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="font-semibold mb-1">Slot-wise booking</h3>
            <p className="text-sm text-gray-600">Pick precise time slots that fit your day.</p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold mb-1">Smart reminders</h3>
            <p className="text-sm text-gray-600">Email and SMS notifications for both patient and doctor.</p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold mb-1">Secure payments</h3>
            <p className="text-sm text-gray-600">Online payment with receipts and confirmations.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
