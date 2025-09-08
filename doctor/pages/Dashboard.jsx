function Dashboard() {
  const [user, setUser] = React.useState(null);
  const [appointments, setAppointments] = React.useState([]);

  React.useEffect(() => {
    const currentUser = window.MockAuth.getCurrentUser();
    if (!currentUser) {
      window.location.hash = '#/login';
      return;
    }
    setUser(currentUser);

    // Mock appointments data
    const mockAppointments = [
      {
        id: 1,
        service: 'General Consultation',
        date: '2025-09-15',
        time: '10:00 AM',
        status: 'confirmed',
        price: 500
      },
      {
        id: 2,
        service: 'Follow-up',
        date: '2025-09-20',
        time: '2:30 PM',
        status: 'pending',
        price: 350
      }
    ];
    setAppointments(mockAppointments);
  }, []);

  function handleLogout() {
    window.MockAuth.logout();
  }

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <window.Header />
      <section className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Welcome Header */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome, {user.name}!</h1>
                <p className="text-gray-600 mt-1">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <a href="#/booking" className="bg-brand-600 text-white p-6 rounded-lg hover:bg-brand-700 transition-colors">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold">Book Appointment</h3>
              <p className="text-sm text-brand-100">Schedule new consultation</p>
            </a>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl mb-2">📋</div>
              <h3 className="font-semibold">Medical History</h3>
              <p className="text-sm text-gray-600">View past visits</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl mb-2">💳</div>
              <h3 className="font-semibold">Payments</h3>
              <p className="text-sm text-gray-600">View receipts</p>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Your Appointments</h2>
            </div>
            <div className="p-6">
              {appointments.length > 0 ? (
                <div className="space-y-4">
                  {appointments.map(apt => (
                    <div key={apt.id} className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{apt.service}</h3>
                        <p className="text-sm text-gray-600">{apt.date} at {apt.time}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                          apt.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {apt.status}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹{apt.price}</div>
                        <button className="text-sm text-brand-600 hover:text-brand-800">Reschedule</button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-4">📅</div>
                  <p>No appointments scheduled</p>
                  <a href="#/booking" className="text-brand-600 hover:text-brand-800 font-medium">Book your first appointment</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <window.Footer />
    </div>
  );
}
window.Dashboard = Dashboard;
