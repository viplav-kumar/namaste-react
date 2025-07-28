# 🗒️ Important Notes

---

## 🧠 Key Concepts / Learnings

- There are multiple **package.json** and **package-lock.json** file within a node project/app.
  Each dependencies/package may or may not have their own set of dev dependencies and dependencies.
  And if any dependencies/package has other package as their dependencies then they will have their - 
  own package.json and package-lock.json.
  Let's say we have installed "A" package via npm as a dependency of our project, but "A" package - 
  needs "B" package as its dependency and "B" package needs "C" package as its dependency and so on..
  This is known as **Transitive dependency**.
  So we'll have multiple package.json and package-lock.json based on the nested dependency and this will
  create like a dependency tree. That is why node modules are usually so big with lots of packages/libraries.

- Do not put any such thing on **git** which can be regenerated like **node_modules** folder because using 
  package.json and package-lock.json we can regenerate the exact same node_modules folder by **npm install** command.

---

