function Header() {
  const [user, setUser] = React.useState(null);
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  React.useEffect(() => {
    const currentUser = window.MockAuth.getCurrentUser();
    setUser(currentUser);
  }, []);

  function handleLogout() {
    window.MockAuth.logout();
    setUser(null);
    window.location.hash = '#/';
  }

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🩺</span>
          <div>
            <h1 className="text-lg font-semibold">Dr. Smith Clinic</h1>
            <p className="text-sm text-gray-500">Compassionate care, convenient booking</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#/" className="hover:text-gray-900">Home</a>
            <a href="#/booking" className="hover:text-gray-900">Book</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-blue-600">
                    {user.name?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
                <span className="hidden md:block">{user.name}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border z-50">
                  <a
                    href={user.role === 'doctor' ? '#/admin' : '#/dashboard'}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3 text-sm">
              <a
                href="#/login"
                className="text-gray-700 hover:text-gray-900"
              >
                Login
              </a>
              <a
                href="#/register"
                className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700"
              >
                Sign Up
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
window.Header = Header;
