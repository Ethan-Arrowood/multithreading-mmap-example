const fs = require('fs')
const mmap = require('mmap-io')
const { parentPort, workerData, threadId } = require('worker_threads')
const { swapRecords } = require('./helpers')

// destructure workerData arguments
const { size, fdArgs, swapItemPos, recordSize } = workerData
// open file
const fd = fs.openSync(...fdArgs)
// memory map file contents to buffer
const buffer = mmap.map(size, mmap.PROT_WRITE, mmap.MAP_SHARED, fd)
// swap records in buffer
swapRecords(buffer, recordSize, swapItemPos[0], swapItemPos[1])
// memory map sync to finalize write
mmap.sync(buffer)
// close file
fs.closeSync(fd)
// post message to main thread on completion
parentPort.postMessage({ threadId })