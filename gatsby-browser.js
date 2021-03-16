import "./node_modules/bootstrap/dist/css/bootstrap.css"
import "./node_modules/bootstrap/dist/css/bootstrap-reboot.css"
import "./node_modules/bootstrap/dist/css/bootstrap-grid.css"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
    `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
