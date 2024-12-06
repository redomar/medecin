// src/data/journeyData.ts

type JourneyStep = {
  title: string;
  description: string;
};

type JourneyData = {
  title: string;
  subtitle: string;
  steps: JourneyStep[];
};

export const journeyData: Record<"public" | "corporate", JourneyData> = {
  public: {
    title: "Your Homecare Journey",
    subtitle:
      "Reach out to us to book an appointment within minutes with our simple 3-step process",
    steps: [
      {
        title: "Call the Hotline",
        description:
          "The patient initiates the process by calling the dedicated hotline at 86121. A friendly and knowledgeable customer service representative will answer the call and assist with any initial inquiries.",
      },
      {
        title: "Book an Appointment",
        description:
          "During the call, the patient will speak with an admin to discuss their healthcare needs and select the appropriate service. Once the required service is confirmed, the admin will book a convenient appointment for home care.",
      },
      {
        title: "Receive Care at Home",
        description:
          "A qualified doctor will be dispatched to the patient's location. The patient will receive an estimated arrival time, ensuring they know when to expect care. The doctor will provide medical services in the comfort of home.",
      },
    ],
  },
  corporate: {
    title: "Your Corporate Care Journey",
    subtitle:
      "Reach out to us to book an appointment within minutes with our simple 3-step process",
    steps: [
      {
        title: "Corporate Login",
        description:
          "Corporate clients can initiate their healthcare request by either contacting the hotline at 86121 or through their insurance provider. Our team will verify corporate coverage and confirm eligibility for services.",
      },
      {
        title: "Select a Service",
        description:
          "Once verified, clients can choose from a range of tailored medical services designed specifically for corporate needs, including wellness checks, diagnostics, and on-site treatments.",
      },
      {
        title: "Appointment Booked",
        description:
          "After selecting the service, an appointment is scheduled. A qualified doctor will be dispatched to the corporate location, and the client will receive an estimated arrival time, ensuring prompt, on-site care delivery.",
      },
    ],
  },
};
