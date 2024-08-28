const fs = require("fs");
const execa = require("execa");
const chalk = require("chalk");

const run = (bin, args, opts = {}) =>
  execa(bin, args, { stdio: "inherit", ...opts });

const yarn = fs.existsSync("yarn.lock");
const npm = fs.existsSync("package-lock.json");
if (yarn || npm) {
  console.log();
  console.log(chalk.red.bold("WARNING:"));
  console.log(
    `This project uses ${chalk.bold("pnpm")}. Installing its dependencies with ${chalk.bold(name)} may result in errors`,
  );
  console.log(
    `Please remove ${chalk.bold(lock)} and try again, with pnpm this time`,
  );
  console.log(`See ${chalk.bold("https://pnpm.io/")}`);
  console.log();
  run("npx", ["lint-staged"]);
  process.exit(1);
}
