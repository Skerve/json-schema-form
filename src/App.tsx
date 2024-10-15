import React from 'react';
import { Form } from '@rjsf/antd';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import './styles.css';

interface ProductData {
  id: string;
  name: string;
  issuer: string;
  version: string;
} 

// This is the data selected by user OnClick of a product
// loaded from product store
const data: ProductData = {
  "id": "1",
  "name": "Product 1",
  "issuer": "Issuer 1",
  "version": "1.0.0",
}

const schema: RJSFSchema = {
  $schema: "http://json-schema.org/draft-2020-12/schema",
  $id: "grasp-labs$abstract-product-schema$1.0.0.json",
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "Unique identifier of the product",
    },
    issuer: {
      type: "string",
      description: "Issuer of the product",
    },
    name: {
      type: "string",
      description: "Name of the product",
    },
    version: {
      type: "string",
      description: "Version of the product",
    },
    description: {
      type: "string",
      description: "Description of the product",
    },
    status: {
      type: "string",
      enum: ["draft", "active", "suspended", "rejected", "deleted"],
      description: "Status of the product",
      default: "draft",
    },
    delimiter: {
      type: "string",
      enum: [",", ";", "\t"],
      description: "Delimiter for CSV files",
      default: ",",
    },
    port: {
      type: "integer",
      description: "Port number for the product",
      minimum: 21,
      maximum: 65535,
      default: 22,
    },
    created_at: {
      type: "string",
      format: "date-time",
      description: "Timestamp when the product was created",
    },
    modified_at: {
      type: "string",
      format: "date-time",
      description: "Timestamp when the product was modified",
    },
    created_by: {
      type: "string",
      description: "User who created the product",
    },
    modified_by: {
      type: "string",
      description: "User who last modified the product",
    },
    product_group_id: {
      type: "string",
      description: "Unique identifier of the product group",
    },
  },
  required: [
    "id",
    "issuer",
    "name",
    "version",
    "status",
    "created_at",
    "modified_at",
    "created_by",
    "modified_by",
    "product_group_id",
  ],
};

const uiSchema: UiSchema = {
  'ui:classNames': 'custom-css-class',
};

// Log helper function
const log = (type: string) => console.log.bind(console, type);

const App: React.FC = () => {
  return (
    <div className='this-form'>
      <h1>Product Input Form</h1>
      <Form
        schema={schema}
        validator={validator}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
        formData={data}
        uiSchema={uiSchema}
      />
    </div>
  );
};

export default App;
