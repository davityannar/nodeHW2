const fs = require('fs');
const through = require('through2');
const csv = require('csvtojson');
const Promise = require('bluebird');
const fsPromise = Promise.promisifyAll(require('fs'));
const p = require('path');

const args = require('minimist')(process.argv.slice(2), {
    string: ['action', 'file', 'path', 'help'],
    alias: {a: 'action', f: 'file', p: 'path', h: 'help'}
});

function printHelp() {
    console.info('You can execute script with parameters: \n-a, --action (name of method)\n-f, ' +
        '--file (path to file)\n-p, --path (path to ...)\nMethods: reverse, transform, outputFile, convertFromFile, convertToFile, cssBundler');
}

function exists(filePath) {
    fs.exists(filePath, function (exist) {
        if (!exist) {
            console.log("File not exists!");
            process.exit();
        }
    })
}

const toJson = (file) => {
    return csv().fromFile(file).on("end_parsed", function (jsonData) {
        this.push(jsonData)
    })
};

function reverse() {
    process.stdin.setEncoding('utf8');

    let toUpperCase = through(function (chunk, enc, callback) {
        this.push(chunk.toString().split("").reverse().join("") + '\n');
        callback();
    });
    process.stdin.pipe(toUpperCase).pipe(process.stdout)
}

function transform() {
    process.stdin.setEncoding('utf8');

    let toUpperCase = through(function (chunk, enc, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    });
    process.stdin.pipe(toUpperCase).pipe(process.stdout)
}

function outputFile(file) {
    exists(file);
    let reader = fs.createReadStream(file);
    reader.pipe(process.stdout);
}

function convertFromFile(file) {
    exists(file);
    let reader = fs.createReadStream(file);

    reader.pipe(toJson(file)).pipe(process.stdout);
}

function convertToFile(file) {
    exists(file);
    let reader = fs.createReadStream(file);
    let writer = fs.createWriteStream("../data/streams.json");

    reader.pipe(toJson(file)).pipe(writer);
}

// function cssBundler(path) {
//     let destination = path + '/bundle.css';

//     return fsPromise.readdirAsync(path)
//         .map(file => fsPromise.readFileAsync(p.join(path, file), 'utf8'))
//         .then(contents => fsPromise.writeFileAsync(destination, contents.join('\n')))
// }

switch (args.action) {
    case 'reverse':
        reverse();
    case 'transform':
        transform();
    case 'outputFile':
        outputFile(args.file);
        break;
    case 'convertFromFile':
        convertFromFile(args.file);
        break;
    case 'convertToFile':
        convertToFile(args.file);
        break;
    case 'cssBundler':
        cssBundler(args.path);
        break;
    default:
        printHelp()
}