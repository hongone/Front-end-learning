var cmd=require('node-cmd');

//cmd.run('npm audit');

cmd.get('start cmd /k "npm audit"',

	function(data){

		console.log(data)

	}
);

process.stdout.write("npm audit");