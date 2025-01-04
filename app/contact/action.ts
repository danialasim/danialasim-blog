"use server"

export async function submitContact(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true, message: "Message sent successfully!" }
}

