import React, { useState } from 'react';

const Notifications = () => {
  const [email, setEmail] = useState('');
  const [reportContent, setReportContent] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/notifications/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, reportContent }),
    });
    if (response.ok) {
      alert('Notification sent successfully!');
    }
  };

  return (
    <div>
      <h2>Send Notifications</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Recipient Email"
        />
        <textarea
          name="reportContent"
          value={reportContent}
          onChange={(e) => setReportContent(e.target.value)}
          placeholder="Report Content"
        />
        <button type="submit">Send Notification</button>
      </form>
    </div>
  );
};

export default Notifications;
