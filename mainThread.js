const fs = require('fs')
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')
const { getRecord } = require('./helpers')

// Open File
const fdArgs = ['./data_test', 'r+']
const fd = fs.openSync(...fdArgs)
// Get Size
const size = fs.fstatSync(fd).size
console.log(`size: ${size}`)
// Close File
fs.closeSync(fd)
// Define record size in bytes
const recordSize = 64
// Calculate number of records in file
const nRecords = parseInt((size + 1) / recordSize)
console.log(`nRecords: ${nRecords}`)

const worker = new Worker('./workerThread.js', {
  workerData: {
    size,
    fdArgs,
    recordSize,
    swapItemPos: [3, 11]
  }
});

worker.on('message', res => {
  console.log(`Response from thread: ${res.threadId}`)
});

worker.on('error', err => {
  console.error(err)
});

worker.on('exit', (code) => {
  if (code !== 0)
    throw new Error(`Worker stopped with exit code ${code}`)
})
