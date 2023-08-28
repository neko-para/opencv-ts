import cv from '..'

async function waitInited() {
  if ('getBuildInformation' in cv) {
    return
  }
  return new Promise<void>(resolve  => {
    cv.onRuntimeInitialized = resolve
  })
}

async function main() {
  await waitInited()
  console.log(new cv.Mat())
}

main()
