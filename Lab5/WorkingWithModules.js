const module = {
  id: "M101",
  name: "Introduction to Web Development",
  description:
    "Learn the basics of web development including HTML, CSS, and JavaScript",
  course: "CS5610",
};

export default function WorkingWithModules(app) {
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });
}
