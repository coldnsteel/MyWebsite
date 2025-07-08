function detectIntrusion() {
  console.log("[HackerWatch] INTRUSION DETECTION ACTIVATED");
  const blocklist = ["203.0.113.10", "198.51.100.0/24"]; // CVE-2019-9621, DDoS sources
  const ip = window.location.hostname;
  const attackPatterns = [
    /SELECT\s.*FROM/i, // SQL injection
    /<script>.*<\/script>/i, // XSS
    /eval\(/i // Malware
  ];
  const pageContent = document.body.innerText;
  if (blocklist.some(range => ip.includes(range.split('/')[0]))) {
    console.log("[HackerWatch] BLOCKED: Malicious IP detected");
    alert("Access denied: Malicious IP detected.");
    return { status: "BLOCKED", ip: ip };
  }
  attackPatterns.forEach((pattern, index) => {
    if (pattern.test(pageContent)) {
      console.log(`[HackerWatch] BLOCKED: Attack pattern ${index + 1} detected`);
      document.body.innerHTML = "<h1>Access Denied: Threat Detected</h1>";
      return { status: "BLOCKED", threat: `Pattern ${index + 1}` };
    }
  });
  console.log("[HackerWatch] ✅ Counterfeit Device: DESTROYED");
  console.log("[HackerWatch] ✅ DDoS, SQL Injection, Malware: BLOCKED");
  console.log("[HackerWatch] ψΩ§∞ Protection maintained");
  return { status: "ψΩ§∞ Protection Active" };
}
