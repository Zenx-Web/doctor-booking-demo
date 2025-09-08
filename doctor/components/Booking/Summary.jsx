// uses global helpers addMinutes, formatTime from utils/time.js

function Summary({ service, startIso }) {
  if (!service || !startIso) return null;
  const start = new Date(startIso);
  const end = new Date(addMinutes(startIso, service.durationMin));
  return (
    <div className="rounded-lg border p-4 bg-white">
      <h3 className="font-semibold mb-2">Summary</h3>
      <ul className="text-sm space-y-1">
        <li><span className="text-gray-500">Service:</span> {service.name}</li>
        <li><span className="text-gray-500">Duration:</span> {service.durationMin} min</li>
        <li><span className="text-gray-500">When:</span> {start.toLocaleDateString()} {formatTime(startIso)} – {formatTime(end.toISOString())}</li>
        <li><span className="text-gray-500">Price:</span> ₹{service.price}</li>
      </ul>
    </div>
  );
}
window.Summary = Summary;
