const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("this is middleware 2");
  next();
});

// routes

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((u) => `<li>${u.first_name}</li>`).join("")}
    </ul>`;

  res.send(html);
});

app.get("/api/users", (req, res) => {
  res.setHeader("testAlok", "scammer");
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // todo Add the patch
    const id = Number(req.params.id);
    const newData = req.body;
    const userindex = users.find((user) => user.id === id);

    users[userindex] = { ...users[userindex], ...newData };
    // Save updated users array to file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error updating user" });
      return res.json({ status: "success", user: users[userindex] });
    });
  })
  .delete((req, res) => {
    // todo Add the patch
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  // todo Create the user
  const body = req.body;
  console.log(body);
  users.push({ ...body, id: users.length + 1 });
  fs.appendFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: 201, id: users.length });
  });
});

app.listen(PORT, () =>
  console.log(`app is listining on http://localhost:${PORT}`)
);
