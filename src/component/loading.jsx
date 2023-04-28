import { LoadingButton } from "@mui/lab"
import { CircularProgress} from "@mui/material"

import React from 'react'

const Loading = () => {
  return (
    <div>
         <LoadingButton className="mt-10" loadingIndicator={<CircularProgress color="primary" />} loading/>
    </div>
  )
}

export default Loading