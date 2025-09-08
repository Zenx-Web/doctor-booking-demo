function Success() {
  return (
    <div>
      <window.Header />
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="rounded-lg border bg-white p-6 space-y-3">
          <h2 className="text-xl font-semibold text-green-700">Booking confirmed</h2>
          <p className="text-sm text-gray-700">You’ll receive email and SMS notifications. The doctor also gets notified.</p>
          <div className="text-sm text-gray-600">This page simulates a successful payment and confirmation.</div>
          <div className="pt-2">
            <a href="#/" className="inline-block text-sm text-brand-600 hover:text-brand-700">Back to Home</a>
          </div>
        </div>
      </section>
      <window.Footer />
    </div>
  );
}
window.Success = Success;
