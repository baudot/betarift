import React from 'react';
import Gallery_block from './gallery_block.jsx';
import QR_code_block from "./qr_code_block.jsx";

class Persistent_column extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        The Persistent Column!
        <Gallery_block />
        <QR_code_block />
      </div>
    );
  }
};

export default Persistent_column;