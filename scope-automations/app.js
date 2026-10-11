const statusToggle = document.getElementById("statusToggle");
const runSearch = document.getElementById("runSearch");
const runList = document.getElementById("runList");

if (statusToggle) {
  statusToggle.addEventListener("click", () => {
    const isOn = statusToggle.classList.toggle("toggle--on");
    statusToggle.setAttribute("aria-pressed", String(isOn));
  });
}

document.querySelectorAll(".nav-item--toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest(".nav-group");
    const isOpen = group.classList.toggle("nav-group--open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.querySelector(".nav-item__chevron").classList.toggle("nav-item__chevron--down", isOpen);
  });
});

runList?.querySelectorAll(".run-row").forEach((row) => {
  const summary = row.querySelector(".run-row__summary");
  const details = row.querySelector(".run-row__details");

  summary?.addEventListener("click", () => {
    const isExpanded = row.classList.toggle("run-row--expanded");
    summary.setAttribute("aria-expanded", String(isExpanded));

    if (details) {
      details.hidden = !isExpanded;
    }

    runList.querySelectorAll(".run-row").forEach((other) => {
      if (other === row) return;
      other.classList.remove("run-row--expanded");
      other.querySelector(".run-row__summary")?.setAttribute("aria-expanded", "false");
      const otherDetails = other.querySelector(".run-row__details");
      if (otherDetails) otherDetails.hidden = true;
    });
  });
});

runSearch?.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();

  runList.querySelectorAll(".run-row").forEach((row) => {
    const text = row.textContent.toLowerCase();
    row.hidden = query.length > 0 && !text.includes(query);
  });
});

document.querySelectorAll(".run-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.closest(".run-tabs")?.querySelectorAll(".run-tab").forEach((t) => {
      t.classList.remove("run-tab--active");
    });
    tab.classList.add("run-tab--active");
  });
});
