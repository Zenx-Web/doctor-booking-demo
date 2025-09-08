function ServicePicker({ services, serviceId, setServiceId }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Service</label>
      <select
        className="w-full border rounded-lg px-3 py-2"
        value={serviceId}
        onChange={(e) => setServiceId(e.target.value)}
      >
        <option value="">Select a service</option>
        {services.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name} — {s.durationMin} min — ₹{s.price}
          </option>
        ))}
      </select>
    </div>
  );
}
window.ServicePicker = ServicePicker;
