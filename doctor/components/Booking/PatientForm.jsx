function PatientForm({ patient, setPatient }) {
  function update(field, value) {
    setPatient((p) => ({ ...p, [field]: value }));
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div>
        <label className="block text-sm font-medium">Full name</label>
        <input className="w-full border rounded-lg px-3 py-2" value={patient.name || ''} onChange={(e)=>update('name', e.target.value)} placeholder="Jane Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input className="w-full border rounded-lg px-3 py-2" value={patient.email || ''} onChange={(e)=>update('email', e.target.value)} placeholder="jane@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input className="w-full border rounded-lg px-3 py-2" value={patient.phone || ''} onChange={(e)=>update('phone', e.target.value)} placeholder="+1 555 123 4567" />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium">Notes (optional)</label>
        <textarea className="w-full border rounded-lg px-3 py-2" rows="2" value={patient.notes || ''} onChange={(e)=>update('notes', e.target.value)} placeholder="Any concerns or preferences?" />
      </div>
    </div>
  );
}
window.PatientForm = PatientForm;
