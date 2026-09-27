const shops = {
  bakery: {
    name: "Harbor Bakehouse",
    copy: "A one-page sketch: morning hours, weekend loaves, and a map pin. No real bakery is claimed here.",
  },
  garage: {
    name: "Cedar Street Garage",
    copy: "A one-page sketch: service list, drop-off hours, and a call button. No real shop is claimed here.",
  },
  clinic: {
    name: "Elm Neighborhood Clinic",
    copy: "A one-page sketch: hours, what to bring, and how to arrive. No real clinic is claimed here.",
  },
};

document.getElementById("preview-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const shop = shops[new FormData(event.target).get("shop")];
  document.getElementById("shop-name").textContent = shop.name;
  const sketch = document.getElementById("sketch");
  sketch.hidden = false;
  sketch.innerHTML = `<h3>${shop.name}</h3><p>${shop.copy}</p>`;
});

document.getElementById("request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const subject = encodeURIComponent("DeployLocal walkthrough request");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("note")}`,
  );
  const status = document.getElementById("request-status");
  status.hidden = false;
  status.textContent =
    "This page does not send mail. Your mail client will open with a draft.";
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});
