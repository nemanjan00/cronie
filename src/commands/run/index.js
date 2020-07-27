const { spawn } = require("child_process");
const cron = require("node-cron");

module.exports = (argv) => {
	argv = JSON.parse(JSON.stringify(argv._));

	// Remove "run command"
	argv.shift();

	// Time to run at
	const time = argv.shift();

	const command = argv;
	const program = command.shift();

	const valid = cron.validate(time);

	if(!valid) {
		console.error(`Cron descriptor '${time}' is not valid... `);
		process.exit(1);
	}

	cron.schedule(time, () => {
		const shell = spawn(program, command);

		shell.stdout.pipe(process.stdout);

		shell.stderr.pipe(process.stderr);

		shell.on("error", (event) => {
			console.error(event);
		});
	});
};

