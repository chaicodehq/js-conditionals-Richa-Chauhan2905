/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  if (typeof password !== "string" || password.length == 0){
    return "weak"
  }

  let criteria = 0;
  
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSpecial = false;
  
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
  for(let char of password) {
    if(char >= "A" && char <= "Z") hasUpper = true;
    if(char >= "a" && char <= "z") hasLower = true;
    if(char >= "0" && char <= "9") hasNumber = true;
    if(specialChars.includes(char)) hasSpecial =true;
  }
  
  
    if(password.length >= 8) {
      criteria++
    }
  if(hasLower) criteria++
  if(hasUpper) criteria++
  if(hasNumber) criteria++
  if(hasSpecial) criteria++

  if(criteria <= 1) return "weak"
  if(criteria <= 3) return "medium"
  if(criteria === 4) return "strong"
  return "very strong"
}
