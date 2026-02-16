/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // invalid hours
  if (typeof hours !== "number" || Number.isNaN(hours) || hours <= 0) {
    return -1;
  }

  // invalid vehicle type
  if (
    vehicleType !== "car" &&
    vehicleType !== "motorcycle" &&
    vehicleType !== "bus"
  ) {
    return -1;
  }

  const chargedHours = Math.ceil(hours);

  let firstHour, extraPerHour, maxDaily;

  if (vehicleType === "car") {
    firstHour = 5;
    extraPerHour = 3;
    maxDaily = 30;
  } else if (vehicleType === "motorcycle") {
    firstHour = 3;
    extraPerHour = 2;
    maxDaily = 18;
  } else {
    // bus
    firstHour = 10;
    extraPerHour = 7;
    maxDaily = 60;
  }

  let cost = firstHour;
  if (chargedHours > 1) {
    cost += (chargedHours - 1) * extraPerHour;
  }

  return Math.min(cost, maxDaily);
}
