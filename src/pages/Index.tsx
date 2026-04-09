const Index = () => {
  const addToCalendar = () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//DATE//RU",
      "BEGIN:VEVENT",
      "DTSTART:20260412T170000",
      "DTEND:20260412T213000",
      "SUMMARY:Свидание",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "svidanie.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="page-wrapper">
      <div className="image-container">
        <img
          src="https://cdn.poehali.dev/files/26e64f1e-57fe-409e-898e-5ac907f693ad.png"
          alt="DATE"
          className="main-image"
        />
        <button className="calendar-btn" onClick={addToCalendar}>
          Добавить в календарь
        </button>
      </div>
    </div>
  );
};

export default Index;
