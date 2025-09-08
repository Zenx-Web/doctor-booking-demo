function Payment() {
  const [loading, setLoading] = React.useState(false);

  function handlePay() {
    setLoading(true);
    setTimeout(() => {
      window.location.hash = '#/success';
    }, 800);
  }

  return (
    <div>
      <window.Header />
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="rounded-lg border bg-white p-6 space-y-4">
          <h2 className="text-xl font-semibold">Payment</h2>
          <p className="text-sm text-gray-600">Demo payment screen. In production, this would redirect to Stripe Checkout.</p>
          <button onClick={handlePay} disabled={loading} className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-4 py-2">
            {loading ? 'Processing…' : 'Pay now'}
          </button>
        </div>
      </section>
      <window.Footer />
    </div>
  );
}
window.Payment = Payment;
