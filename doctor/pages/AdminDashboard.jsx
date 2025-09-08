function AdminDashboard() {
  const [user, setUser] = React.useState(null);
  const [appointments, setAppointments] = React.useState([]);

  React.useEffect(() => {
    const currentUser = window.MockAuth.getCurrentUser();
    if (!currentUser || currentUser.role !== 'doctor') {
      window.location.hash = '#/login';
      return;
    }
    setUser(currentUser);

    // Mock doctor appointments data
    const mockAppointments = [
      {
        id: 1,
        patientName: 'John Doe',
        patientEmail: 'john@example.com',
        service: 'General Consultation',
        date: '2025-09-15',
        time: '10:00 AM',
        status: 'confirmed',
        price: 500
      },
      {
        id: 2,
        patientName: 'Jane Smith',
        patientEmail: 'jane@example.com',
        service: 'Follow-up',
        date: '2025-09-15',
        time: '2:30 PM',
        status: 'pending',
        price: 350
      },
      {
        id: 3,
        patientName: 'Mike Johnson',
        patientEmail: 'mike@example.com',
        service: 'Telemedicine',
        date: '2025-09-16',
        time: '11:00 AM',
        status: 'confirmed',
        price: 400
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
        <div className="max-w-6xl mx-auto px-4">
          {/* Doctor Header */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back, Dr. {user.name}</p>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl mb-2">📅</div>
              <h3 className="font-semibold">Today's Appointments</h3>
              <p className="text-2xl font-bold text-brand-600">3</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold">Total Patients</h3>
              <p className="text-2xl font-bold text-green-600">127</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-semibold">Today's Revenue</h3>
              <p className="text-2xl font-bold text-yellow-600">₹1,250</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-2xl mb-2">⏰</div>
              <h3 className="font-semibold">Available Slots</h3>
              <p className="text-2xl font-bold text-blue-600">7</p>
            </div>
          </div>

          {/* Appointments Management */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Appointments</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm bg-brand-600 text-white rounded-md hover:bg-brand-700">
                    Set Availability
                  </button>
                  <button className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                    Export
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              {appointments.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {appointments.map(apt => (
                        <tr key={apt.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="font-medium text-gray-900">{apt.patientName}</div>
                              <div className="text-sm text-gray-500">{apt.patientEmail}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{apt.service}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {apt.date}<br/>{apt.time}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                              apt.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {apt.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{apt.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-brand-600 hover:text-brand-900 mr-3">View</button>
                            <button className="text-gray-600 hover:text-gray-900">Reschedule</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-4">📅</div>
                  <p>No appointments scheduled</p>
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
window.AdminDashboard = AdminDashboard;
