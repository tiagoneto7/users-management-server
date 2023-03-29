import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as fs from "fs";
import * as cors from "cors";

export interface User {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  companyName: string;
}

export interface Address {
  city: string;
  street: string;
  zipcode: string;
}

export let users: User[] = JSON.parse(fs.readFileSync("./users.json", "utf8"));

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

app.get("/users/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.post("/users", (req: Request, res: Response) => {
  const user: User = req.body;
  user.id = users.length + 1;
  users.push(user);
  fs.writeFileSync("./users.json", JSON.stringify(users));
  res.send(user);
});

app.put("/users/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    const user: User = req.body;
    user.id = id;
    users[index] = user;
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.delete("/users/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    res.status(404).send(`User with id ${id} not found`);
  } else {
    users.splice(index, 1);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.send(`User with id ${id} deleted`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
