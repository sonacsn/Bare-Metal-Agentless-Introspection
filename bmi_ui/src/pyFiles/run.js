var PythonShell = require('python-shell');

export function run() {
    PythonShell.run('abc.py', function (err) {
        if (err) throw err;
        console.log('finished');
    });
}
