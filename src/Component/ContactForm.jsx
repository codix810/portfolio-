// src/Component/ContactForm.jsx

import React from "react";

function ContactForm() {
  return (
    <div>
      <button
        onClick={async () => {
          const res = await fetch("/api/sendMessage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: "Houda",
              email: "houda@mail.com",
              message: "Test message",
            }),
          });

          const data = await res.json();
          alert(data.message);
        }}
      >
        Send Message
      </button>
    </div>
  );
}

export default ContactForm;

