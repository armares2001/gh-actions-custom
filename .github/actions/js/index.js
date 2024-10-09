const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

async function run() {
  core.notice("Hello World");
  const script = core.getInput("script");
  await exec.exec(script);
}

run();
