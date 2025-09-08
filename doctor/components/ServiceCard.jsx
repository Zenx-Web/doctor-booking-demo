function ServiceCard({ title, desc, price, duration }) {
  return (
    <div className="rounded-lg border bg-white p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <div className="mt-2 text-sm text-gray-800">{duration} min • ₹{price}</div>
    </div>
  );
}
window.ServiceCard = ServiceCard;
