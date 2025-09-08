// Mock authentication using localStorage
window.MockAuth = {
  // Check if user is logged in
  isLoggedIn() {
    return !!localStorage.getItem('mockUser');
  },

  // Get current user
  getCurrentUser() {
    const user = localStorage.getItem('mockUser');
    return user ? JSON.parse(user) : null;
  },

  // Login user
  login(email, password, role = 'patient') {
    // Mock validation - in real app, this would be API call
    if (email && password) {
      const user = {
        id: Date.now(),
        email,
        role,
        name: email.split('@')[0],
        loginAt: new Date().toISOString()
      };
      localStorage.setItem('mockUser', JSON.stringify(user));
      return { success: true, user };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  // Register new user
  register(name, email, phone, password, role = 'patient') {
    // Mock registration
    if (name && email && password) {
      const user = {
        id: Date.now(),
        name,
        email,
        phone,
        role,
        registeredAt: new Date().toISOString()
      };
      localStorage.setItem('mockUser', JSON.stringify(user));
      return { success: true, user };
    }
    return { success: false, error: 'Please fill all fields' };
  },

  // Logout user
  logout() {
    localStorage.removeItem('mockUser');
    window.location.hash = '#/';
  },

  // Check if user has role
  hasRole(role) {
    const user = this.getCurrentUser();
    return user && user.role === role;
  }
};
