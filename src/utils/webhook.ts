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
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Webhook submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
