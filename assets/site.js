/* Set public links here before publishing, if desired. */
const siteConfig = { githubUrl: "", cvUrl: "" };

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
menuButton?.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

function enableConfiguredLink(selector, url) {
  if (!url) return;
  const link = document.querySelector(selector);
  link.href = url;
  link.classList.remove("is-hidden");
}
enableConfiguredLink("#github-link", siteConfig.githubUrl);
enableConfiguredLink("#cv-link", siteConfig.cvUrl);
document.querySelector("#year").textContent = new Date().getFullYear();
