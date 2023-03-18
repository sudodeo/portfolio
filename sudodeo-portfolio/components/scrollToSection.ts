export default function scrollToSection(e: any, id: string) {
  e.preventDefault();
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
}
