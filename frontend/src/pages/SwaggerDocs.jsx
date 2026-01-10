import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function SwaggerDocs() {
  return (
    <div>
      <SwaggerUI url="/openapi.yaml" />
    </div>
  );
}

export default SwaggerDocs;
