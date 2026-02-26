"use server";

export interface BookingFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitBooking(
  _prevState: BookingFormState,
  formData: FormData
): Promise<BookingFormState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const message = formData.get("message") as string;

  // Validation
  const errors: Record<string, string> = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Please enter your full name";
  }
  if (!phone || !/^[6-9]\d{9}$/.test(phone.replace(/\s/g, ""))) {
    errors.phone = "Please enter a valid 10-digit phone number";
  }
  if (!service) {
    errors.service = "Please select a service";
  }
  if (!date) {
    errors.date = "Please select a preferred date";
  }
  if (!time) {
    errors.time = "Please select a preferred time";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors below",
      errors,
    };
  }

  // Simulate saving to database
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("New Booking:", {
    name,
    phone,
    service,
    date,
    time,
    message,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message:
      "Your appointment has been booked successfully! We will confirm via WhatsApp shortly.",
  };
}