// Simple hash-based router for static prototype
function Router() {
  const [route, setRoute] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Lazy import pages via script tags would be complex without bundler; instead, inline dynamic import using window globals
  const Home = window.__Pages_Home;
  const BookingDemo = window.__Pages_BookingDemo;
  const Payment = window.Payment;
  const Success = window.Success;
  const Login = window.Login;
  const Register = window.Register;
  const Dashboard = window.Dashboard;
  const AdminDashboard = window.AdminDashboard;

  if (route.startsWith('#/booking')) return <BookingDemo />;
  if (route.startsWith('#/payment')) return <Payment />;
  if (route.startsWith('#/success')) return <Success />;
  if (route.startsWith('#/login')) return <Login />;
  if (route.startsWith('#/register')) return <Register />;
  if (route.startsWith('#/dashboard')) return <Dashboard />;
  if (route.startsWith('#/admin')) return <AdminDashboard />;
  return <Home />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
