export type LeadPayload = {
  [key: string]: string | boolean | number | null | undefined;
};

const leadEndpoint = "/api/lead";

export async function submitLeadForm(payload: LeadPayload) {
  const response = await fetch(leadEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with ${response.status}`);
  }

  return response;
}
