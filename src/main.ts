import { factory } from "./factory";

let count = factory(5, 8);

function update_count_and_reset_counter() {
  const start_at = parseInt(start_at_control.value) ?? null;
  const step = parseInt(step_control.value) ?? null;

  if (start_at !== null && step !== null) {
    count = factory(start_at, step);
    current_count.textContent = start_at.toString();
  }
}

const start_at_control = document.getElementById(
  "start_at"
) as HTMLInputElement;
const step_control = document.getElementById("step") as HTMLInputElement;
const count_button = document.querySelector(
  ".count_button"
) as HTMLButtonElement;
const current_count = document.querySelector(
  ".current_count"
) as HTMLSpanElement;

start_at_control.addEventListener("change", update_count_and_reset_counter);
step_control.addEventListener("change", update_count_and_reset_counter);

count_button.addEventListener("click", () => {
  const result = count();
  current_count.textContent = result.toString();
});

// Initialize with default values
current_count.textContent = "5";
