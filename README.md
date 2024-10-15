# JSON Schema Form App

This React application dynamically generates a user input form based on a JSON Schema using @rjsf/core and the Ant Design (antd) theme.

## Features

### Dynamic Form Generation: 

The form fields are generated from a JSON schema.

### Ant Design Integration: 

The app uses Ant Design for modern, clean UI components.

### Schema Validation: 

Supports validation via the ajv8 JSON schema validator.

### TypeScript Support: 

Full TypeScript support for better developer experience and type safety.

## Prerequisites

Ensure you have Node.js and npm installed on your machine.

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/json-schema-form-app.git
cd json-schema-form-app
```

### Install dependencies:

```bash
npm install
```

## Running the App

To run the app in development mode:

```bash
npm start
```

This will start the app and open it in your browser at http://localhost:3000.

## JSON Schema Example

The app uses a predefined JSON schema to generate the form. Example schema:

```json
{
  "$schema": "http://json-schema.org/draft-2020-12/schema",
  "type": "object",
  "properties": {
    "id": { "type": "string", "description": "Unique identifier of the product" },
    "name": { "type": "string", "description": "Name of the product" },
    "status": { "type": "string", "enum": ["draft", "active"], "description": "Status of the product" }
  },
  "required": ["id", "name", "status"]
}
```

## Key Dependencies

- React: Frontend framework for building the UI.
- @rjsf/core: Library for generating forms from JSON schema.
- @rjsf/antd: Ant Design integration for @rjsf/core.
- @rjsf/validator-ajv8: JSON Schema validator.

# License
This project is licensed under the MIT License.
