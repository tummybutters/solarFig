export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const webhookUrl =
    process.env.ZAPIER_WEBHOOK_URL ||
    process.env.ZAPIER_LEAD_WEBHOOK_URL ||
    process.env.ZAPIER_HOOK_URL ||
    "";

  if (!webhookUrl) {
    return res.status(500).json({ error: "missing_webhook_url" });
  }

  let payload = req.body;

  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      return res.status(400).json({ error: "invalid_json" });
    }
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return res.status(400).json({ error: "invalid_payload" });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const details = await upstream.text().catch(() => "");
      return res.status(502).json({
        error: "upstream_failed",
        status: upstream.status,
        details: details.slice(0, 300),
      });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: "network_error" });
  }
}
