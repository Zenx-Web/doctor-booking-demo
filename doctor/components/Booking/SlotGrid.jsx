// uses global helpers: addMinutes, formatTime, generateSlots, classNames from utils

function SlotGrid({ date, service, selectedStartIso, setSelectedStartIso }) {
  const busy = React.useMemo(() => {
    if (!date) return [];
    const b = [];
    const sample = new Date(date);
    sample.setHours(11, 0, 0, 0);
    b.push(sample.toISOString());
    const sample2 = new Date(date);
    sample2.setHours(14, 30, 0, 0);
    b.push(sample2.toISOString());
    return b;
  }, [date]);

  const slots = React.useMemo(() => {
    if (!date) return [];
    return generateSlots(date, 9, 17, 10, busy);
  }, [date, busy]);

  const duration = service?.durationMin ?? 0;

  function isSlotAvailable(startIso) {
    if (!duration) return false;
    const endIso = addMinutes(startIso, duration);
    const start = new Date(startIso);
    const end = new Date(endIso);
    if (end.getHours() > 17 || (end.getHours() === 17 && end.getMinutes() > 0)) return false;
    for (let t = new Date(start); t < end; t.setMinutes(t.getMinutes() + 10)) {
      const iso = t.toISOString();
      if (slots.some((s) => s.iso === iso && (s.isBusy || s.isPast))) return false;
    }
    return true;
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Time</label>
      {!date ? (
        <p className="text-sm text-gray-500">Pick a date first</p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-2">
          {slots.map((slot) => {
            const available = isSlotAvailable(slot.iso);
            const selected = selectedStartIso === slot.iso;
            return (
              <button
                key={slot.iso}
                disabled={!available}
                onClick={() => setSelectedStartIso(slot.iso)}
                className={classNames(
                  'rounded-lg border px-2 py-1 text-xs sm:text-sm',
                  selected && 'bg-brand-600 text-white border-brand-600',
                  !selected && available && 'bg-white hover:bg-gray-50',
                  !available && 'bg-gray-100 text-gray-400 cursor-not-allowed'
                )}
                title={available ? 'Available' : slot.isPast ? 'Past time' : 'Booked'}
              >
                {formatTime(slot.iso)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
window.SlotGrid = SlotGrid;
