import { WEBHOOK_URL } from '../config';

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  service_type?: string;
  project_description?: string;
  preferred_date?: string;
  additional_notes?: string;
  selected_items?: Array<{ item: string; price: number }>;
  subtotal?: number;
  estimated_total?: number;
  source: 'contact_form' | 'quote_calculator';
  timestamp: string;
}

export async function submitLead(data: LeadData): Promise<{ success: boolean; error?: string }> {
  console.log('Submitting lead to webhook:', WEBHOOK_URL);
  console.log('Lead data:', data);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Webhook response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unable to read error response');
      console.error('Webhook error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.text();
    console.log('Webhook success response:', responseData);

    return { success: true };
  } catch (error) {
    console.error('Webhook submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
