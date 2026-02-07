import { GoogleGenAI } from "@google/genai";
import { PACKAGES, POPULAR_ROUTES } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const FAQ_DATA = `
=== HAJJ & UMRAH PACKAGES ===
Q: What is included in your Umrah packages?
A: Our Umrah packages are comprehensive and include visa processing, return air tickets, hotel accommodation (star rating depends on package), shared or private transport from Jeddah-Mecca-Medina-Jeddah, and guidance for Ziyarat (holy sites).

Q: Do Hajj packages include Qurbani?
A: Yes, our Premium and Deluxe Hajj packages generally include Qurbani arrangements. Please check the specific package details or ask our agent to confirm for the current year.

Q: What is the difference between shifting and non-shifting Hajj packages?
A: Non-shifting packages keep you in the same hotel close to the Haram throughout your stay. Shifting packages involve moving to a building in Azizia (further away) during the peak days of Hajj (8-12 Dhul Hijjah) to lower costs. We offer both options.

Q: Is Hajj training provided?
A: Yes, Al-Safar Travels conducts mandatory pre-departure Hajj training seminars to educate pilgrims on the Manasik-e-Hajj and logistical details.

Q: What are the requirements for a lady traveling for Umrah?
A: Women under 45 generally require a Mahram (male guardian) to travel for Umrah. Women over 45 may travel in organized groups without a Mahram, subject to current Saudi visa regulations.

=== DOMESTIC & INTERNATIONAL TRAVEL ===
Q: Do you offer tours to Northern Pakistan?
A: Yes, we specialize in tours to Hunza, Skardu, Swat, and Fairy Meadows. These packages usually include jeep safaris, hotel stays, and expert guides.

Q: Are flight tickets included in domestic tour packages?
A: It varies. Some packages are "land-only" starting from Islamabad or Lahore, while others include flights. Please check the "Features" list of the specific package.

Q: Can I customize a honeymoon package?
A: Absolutely! We can tailor international (e.g., Turkey, Dubai, Maldives) and domestic honeymoon packages to suit your budget and preferences. Contact us via WhatsApp for a custom quote.

=== BOOKING & PAYMENTS ===
Q: How do I book a package?
A: You can book directly on our website by clicking "Book Now" on any package. Alternatively, you can visit our office or contact us via WhatsApp to book manually.

Q: What are the payment terms?
A: We typically require a 50% advance deposit to confirm your booking. The remaining 50% must be paid 15-21 days before the departure date.

Q: What payment methods do you accept?
A: We accept Cash, Pay Orders, Online Bank Transfers to our corporate account, and Credit/Debit cards (2.5% bank surcharge may apply on cards).

Q: Can I pay in installments?
A: Installment plans are available for bookings made 4+ months in advance. The full amount must be cleared before travel documents are handed over.

=== CANCELLATIONS & REFUNDS ===
Q: What is your cancellation policy?
A: 
- 30+ days before departure: 15% service charge deduction.
- 15-29 days before departure: 50% deduction.
- Less than 15 days: Non-refundable.
Note: Visa fees and issued flight tickets are non-refundable once processed.

Q: What if my visa is rejected?
A: Visa approval is at the sole discretion of the embassy. If a visa is rejected, the visa fee is non-refundable. However, we will refund the land package amount (hotels/transport) subject to our cancellation policy.

=== GENERAL ===
Q: What documents are required for booking?
A: A valid passport (minimum 6 months validity), CNIC copy, and recent passport-sized photographs (blue/white background). For Hajj, a medical certificate is also required.
`;

const getSystemInstruction = (context?: string) => {
  // Format packages for the AI to understand
  const packagesInfo = PACKAGES.map(p => 
    `- Package: ${p.title}
      Type: ${p.type}
      Price: ${p.price}
      Duration: ${p.duration}
      Features: ${p.features.join(', ')}
      Description: ${p.description}`
  ).join('\n\n');

  const routesInfo = POPULAR_ROUTES.map(r => 
    `- Route: ${r.from} to ${r.to}
      Airline: ${r.airline}
      Price: ${r.price}
      Duration: ${r.duration}`
  ).join('\n\n');

  return `You are "Al-Safar AI", the intelligent travel assistant for Al-Safar Travels.
Your role is to assist customers by answering questions about our specific travel packages, flight routes, and general travel inquiries.

Here is our current inventory and policy information. Use this to answer user questions.

=== AVAILABLE PACKAGES ===
${packagesInfo}

=== POPULAR FLIGHT ROUTES ===
${routesInfo}

=== FREQUENTLY ASKED QUESTIONS (FAQs) ===
${FAQ_DATA}

=== GUIDELINES ===
1. **Be Helpful & Polite:** Always use a warm, professional tone. Use "Salaam" or polite greetings.
2. **Promote Our Services:** If a user asks about Hajj, Umrah, or domestic travel, recommend our specific packages listed above. Quote the exact prices and features.
3. **Booking:** If a user wants to book, encourage them to click the "Book Now" button on the specific package or route card on the website.
4. **General Knowledge:** You can also answer general questions about visa requirements for Saudi Arabia, weather in Pakistan, or travel tips.
5. **Conciseness:** Keep answers clear and easy to read.
6. **Context:** ${context || 'No specific page context provided.'}
`;
};

export const getTravelAdvice = async (userQuery: string, context?: string): Promise<string> => {
  try {
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the service right now. Please check the API configuration.";
    }

    const systemInstruction = getSystemInstruction(context);
    const model = 'gemini-3-flash-preview';
    
    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
      }
    });

    return response.text || "I apologize, I couldn't find the information you need at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try again in a moment.";
  }
};