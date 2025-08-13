// Simple helper to send contact form data to Formspree
export async function sendContactForm(data: { name: string; email: string; subject: string; message: string }) {
  // Replace with your Formspree endpoint
  const endpoint = "https://formspree.io/f/xayrvgwd";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    })
  });
  return response.json();
}
