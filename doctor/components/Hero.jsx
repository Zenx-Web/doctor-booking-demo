function Hero() {
  return (
    <section className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-3">Book with Dr. Smith in minutes</h2>
          <p className="text-gray-600 mb-6">Choose a service, pick a time slot, and get reminders by email/SMS. Secure online payment supported.</p>
          <a href="#/booking" className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg">Book now</a>
        </div>
        <div className="hidden md:block">
          <div className="aspect-video rounded-xl border bg-gray-100 flex items-center justify-center text-gray-400">Calendar Preview</div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
