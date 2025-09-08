function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isDoctor, setIsDoctor] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    
    const result = window.MockAuth.login(email, password, isDoctor ? 'doctor' : 'patient');
    
    if (result.success) {
      // Redirect based on role
      window.location.hash = isDoctor ? '#/admin' : '#/dashboard';
    } else {
      setError(result.error);
    }
  }

  return (
    <div>
      <window.Header />
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <span className="text-4xl">🩺</span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{' '}
              <a href="#/register" className="font-medium text-brand-600 hover:text-brand-500">
                create a new account
              </a>
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
                  placeholder="patient@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Enter any password (demo)"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="doctor-login"
                  checked={isDoctor}
                  onChange={(e) => setIsDoctor(e.target.checked)}
                  className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                />
                <label htmlFor="doctor-login" className="ml-2 block text-sm text-gray-900">
                  Login as Doctor/Admin
                </label>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
            >
              Sign in
            </button>

            <div className="text-xs text-gray-500 text-center">
              Demo: Use any email and password to login
            </div>
          </form>
        </div>
      </section>
      <window.Footer />
    </div>
  );
}
window.Login = Login;
