function getRecord(buffer, recordSize, n) {
  let c = recordSize * n
  return buffer.slice(c, c + recordSize)
}

function setRecord(buffer, recordSize, record, n) {
  buffer.write(record.toString(), recordSize * n)
}

function swapRecords(buffer, recordSize, n, m) {
  const t = Buffer.from(getRecord(buffer, recordSize, n))
  setRecord(buffer, recordSize, getRecord(buffer, recordSize, m), n)
  setRecord(buffer, recordSize, t, m)
}

module.exports.getRecord = getRecord
module.exports.setRecord = setRecord
module.exports.swapRecords = swapRecords