window.generateSlots = function generateSlots(date, startHour = 9, endHour = 17, stepMin = 10, busy = []) {
  const slots = [];
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate(), startHour, 0, 0, 0);
  while (d.getHours() < endHour || (d.getHours() === endHour && d.getMinutes() === 0)) {
    const iso = d.toISOString();
    const isPast = d < new Date();
    const isBusy = busy.some((b) => new Date(b).getTime() === d.getTime());
    slots.push({ iso, isPast, isBusy });
    d.setMinutes(d.getMinutes() + stepMin);
  }
  return slots;
}

window.formatTime = function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

window.addMinutes = function addMinutes(iso, minutes) {
  const d = new Date(iso);
  d.setMinutes(d.getMinutes() + minutes);
  return d.toISOString();
}
