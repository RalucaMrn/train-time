import React from 'react';
import { Button } from '@material-ui/core'
import pdfIcon from './../assets/png/file-pdf-box.png'
import docIcon from './../assets/png/file-pdf-box.png'


export default class AdditionalDocuments extends React.Component {
  createDocuments = (documents) => {
    const documentArray = []
    const divStyle = {
      marginRight: "10px"
    };

    documents.forEach((documentObject, i) => {  
      let imgElement = ''
      if (documentObject.type === 'pdf') {
        imgElement = <img src={pdfIcon} />
      } else if (documentObject.type === 'doc') {
        imgElement = <img src={docIcon} />
      }
      
      documentArray.push(<Button key={i} variant="outlined" style={divStyle} href={documentObject.url}>{imgElement}{documentObject.name}</Button>)
    })

    return documentArray
  }

  render()  {
    const documents = this.props.documents

    return(
      <div>
        <h2>Additional information</h2>
        <div>
          {this.createDocuments(documents)}
        </div>
      </div>
    )
  }
}