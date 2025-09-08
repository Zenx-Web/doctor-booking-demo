function Footer() {
  const locations = [
    {
      name: "Main Clinic - City Center",
      address: "123 Medical Plaza, Downtown, Mumbai 400001",
      phone: "+91 22 2345 6789",
      email: "citycentre@drsmith.clinic",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM"
    },
    {
      name: "Hospital Branch - Suburban",
      address: "456 Health Avenue, Andheri West, Mumbai 400058", 
      phone: "+91 22 3456 7890",
      email: "suburban@drsmith.clinic",
      hours: "Mon-Sun: 8:00 AM - 10:00 PM"
    },
    {
      name: "Specialty Center - South Mumbai",
      address: "789 Wellness Street, Bandra, Mumbai 400050",
      phone: "+91 22 4567 8901", 
      email: "bandra@drsmith.clinic",
      hours: "Tue-Sat: 10:00 AM - 6:00 PM"
    }
  ];

  return (
    <footer id="contact" className="border-t bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Locations</h2>
          <p className="text-gray-600">Visit us at any of our convenient clinic locations</p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="text-2xl">🏥</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.address}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">📞</span>
                  <a href={`tel:${location.phone}`} className="text-blue-600 hover:underline">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✉️</span>
                  <a href={`mailto:${location.email}`} className="text-green-600 hover:underline">
                    {location.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">🕒</span>
                  <span className="text-gray-600">{location.hours}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-red-600 text-xl">🚨</span>
            <h3 className="font-semibold text-red-800">Emergency Contact</h3>
          </div>
          <p className="text-sm text-red-700">
            For medical emergencies, call: <a href="tel:+919876543210" className="font-semibold underline">+91 98765 43210</a> (24/7)
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Dr. Smith Clinic. All rights reserved.</div>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
