"use server"

export async function submitContact(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, message: "All fields are required" }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.toString())) {
    return { success: false, message: "Please enter a valid email address" }
  }

  // Simulate API call (in production, you would send an actual email here)
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Log the contact attempt (remove in production)
  console.log(`Contact form submission from ${name} (${email}): ${message}`)

  return { success: true, message: "Message sent successfully!" }
}
