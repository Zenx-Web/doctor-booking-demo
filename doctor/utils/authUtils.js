// Protected Booking Page Helper
function requireAuth() {
  const user = window.MockAuth.getCurrentUser();
  if (!user) {
    alert('Please login to book an appointment');
    window.location.hash = '#/login';
    return false;
  }
  return user;
}

function prefillUserData(user) {
  return {
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || ''
  };
}

window.AuthUtils = {
  requireAuth,
  prefillUserData
};
