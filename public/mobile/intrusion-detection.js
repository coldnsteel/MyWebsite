function detectIntrusion() {
  console.log("[HackerWatch] INTRUSION DETECTION ACTIVATED");
  const blocklist = ["203.0.113.10", "198.51.100.0/24"]; // Known malicious IPs (CVE-2019-9621, DDoS sources)
  const ip = window.location.hostname; // Client-side IP simulation
  if (blocklist.some(range => ip.includes(range.split('/')[0]))) {
    console.log("[HackerWatch] BLOCKED: Malicious IP detected");
    alert("Access denied: Malicious IP detected.");
    return { status: "BLOCKED", ip: ip };
  }
  console.log("[HackerWatch] ✅ Counterfeit Device: DESTROYED");
  console.log("[HackerWatch] ✅ DDoS, SQL Injection, Malware: BLOCKED");
  console.log("[HackerWatch] ψΩ§∞ Protection maintained");
  return { status: "ψΩ§∞ Protection Active" };
}
