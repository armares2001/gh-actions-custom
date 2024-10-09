const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

async function run() {
  core.notice("Hello World");
  //   try {
  //     const token = core.getInput("token");
  //     const octokit = github.getOctokit(token);

  //     // Get the pull request number
  //     const prNumber = github.context.payload.pull_request.number;

  //     // Get the pull request files
  //     const response = await octokit.pulls.listFiles({
  //       owner: github.context.repo.owner,
  //       repo: github.context.repo.repo,
  //       pull_number: prNumber,
  //     });

  //     // Check if the pull request contains a file with the name "package.json"
  //     const hasPackageJson = response.data.some(
  //       (file) => file.filename === "package.json"
  //     );

  //     // If the pull request contains a file with the name "package.json" then run the npm install command
  //     if (hasPackageJson) {
  //       await exec.exec("npm install");
  //     }
  //   } catch (error) {
  //     core.setFailed(error.message);
  //   }
}

run();
