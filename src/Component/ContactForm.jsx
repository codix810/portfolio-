import React from "react";

function ContactForm() {
  return (
    <div>
      <h2>Contact Information</h2>
      <button
        onClick={async () => {
          console.log("Button Clicked");

          try {
            const res = await fetch("/api/sendMessage", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: "Houda",
                email: "houda@mail.com",
                message: "Test message",
              }),
            });

            const text = await res.text();

            if (!res.ok) {
              throw new Error(text);
            }

            alert("✅ Success: " + text);
          } catch (err) {
            console.error("❌ Error:", err.message);
            alert("❌ Server Error: " + err.message);
          }
        }}
      >
        Send Message
      </button>
    </div>
  );
}

export default ContactForm;
