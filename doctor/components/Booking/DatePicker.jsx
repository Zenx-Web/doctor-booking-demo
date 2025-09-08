// uses global classNames defined in utils/classNames.js

function DatePicker({ date, setDate, daysToShow = 14 }) {
  const days = React.useMemo(() => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return Array.from({ length: daysToShow }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }, [daysToShow]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Date</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
        {days.map((d) => {
          const selected = date && d.toDateString() === date.toDateString();
          return (
            <button
              key={d.toISOString()}
              onClick={() => setDate(d)}
              className={classNames(
                'rounded-lg border px-3 py-2 text-sm',
                selected ? 'bg-brand-600 text-white border-brand-600' : 'bg-white hover:bg-gray-50'
              )}
            >
              <div className="font-medium">{d.toLocaleDateString([], { weekday: 'short' })}</div>
              <div>{d.getMonth() + 1}/{d.getDate()}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
window.DatePicker = DatePicker;
