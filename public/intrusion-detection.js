function detectIntrusion() {
  console.log("[HackerWatch] INTRUSION DETECTION ACTIVATED");
  const blocklist = ["203.0.113.10"]; // Known malicious IPs (e.g., CVE-2019-9621)
  const ip = window.location.hostname; // Simulate IP detection (client-side)
  if (blocklist.includes(ip)) {
    console.log("[HackerWatch] BLOCKED: Malicious IP detected");
    alert("Access denied: Malicious IP detected.");
    return { status: "BLOCKED", ip: ip };
  }
  console.log("[HackerWatch] ✅ Counterfeit Device: DESTROYED");
  console.log("[HackerWatch] ψΩ§∞ Protection maintained");
  return { status: "ψΩ§∞ Protection Active" };
}
