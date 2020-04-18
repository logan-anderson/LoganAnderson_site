import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

function AlertDismissibleExample() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          This website is currently under development So everything may not look as indented
        </Alert>
      );
    }  else {
        return(
            <div>

            </div>
        )
    }
  }
  
export default AlertDismissibleExample