import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ServicePicker from "../components/Booking/ServicePicker.jsx";
import DatePicker from "../components/Booking/DatePicker.jsx";
import SlotGrid from "../components/Booking/SlotGrid.jsx";
import PatientForm from "../components/Booking/PatientForm.jsx";
import Summary from "../components/Booking/Summary.jsx";

const SERVICES = [
  { id: 'consult', name: 'General Consultation', durationMin: 30, price: 50 },
  { id: 'followup', name: 'Follow-up', durationMin: 20, price: 35 },
  { id: 'tele', name: 'Telemedicine', durationMin: 25, price: 40 },
];

function classNames(...args) {
  return args.filter(Boolean).join(' ');
}

export default function BookingDemo() {
  const [serviceId, setServiceId] = React.useState('');
  const service = SERVICES.find((s) => s.id === serviceId);

  const [date, setDate] = React.useState(null);
  const [selectedStartIso, setSelectedStartIso] = React.useState(null);

  const [patient, setPatient] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  function canProceed() {
    return !!(service && date && selectedStartIso && patient.name && patient.email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!canProceed()) return;
    setSubmitted(true);
  }

  return (
    <div>
      <Header />
      <section id="booking" className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border bg-white p-4 space-y-4">
              <h2 className="text-lg font-semibold">Book an appointment</h2>
              <ServicePicker services={SERVICES} serviceId={serviceId} setServiceId={setServiceId} />
              <DatePicker date={date} setDate={(d)=>{ setDate(d); setSelectedStartIso(null); }} />
              <SlotGrid date={date} service={service} selectedStartIso={selectedStartIso} setSelectedStartIso={setSelectedStartIso} />
            </div>

            <div className="rounded-lg border bg-white p-4 space-y-4">
              <h3 className="text-lg font-semibold">Your details</h3>
              <PatientForm patient={patient} setPatient={setPatient} />
            </div>
          </div>

          <div className="space-y-4">
            <Summary service={service} startIso={selectedStartIso} />
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className={classNames(
                'w-full rounded-lg px-4 py-2 font-medium',
                canProceed() ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              )}
            >
              Continue to payment
            </button>
            {submitted && (
              <div className="rounded-lg border bg-green-50 text-green-800 p-3 text-sm">
                Demo only: This would create the booking, send notifications to both patient and doctor, and redirect to payment.
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
