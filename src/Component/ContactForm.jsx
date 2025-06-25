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

      const text = await res.text(); // ← هناخد الرد كنص مش json

      if (!res.ok) {
        throw new Error(text); // هنطبع نص الخطأ الحقيقي
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


export default ContactForm;

