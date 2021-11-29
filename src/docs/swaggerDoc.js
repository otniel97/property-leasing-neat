const options = {
  'openapi': '3.0.1',
  'info': {
    'title': 'Property Leasing API',
    'version': '1.0.0',
    'description': 'Property Leasing API',
    'contact': {
      'name': 'Otniel Pérez',
      'email': 'otnielperez2015@gmail.com',
      'url': '',
    },
    'termsOfService': 'termsOfService',
    'license': {
      'name': 'license name',
      'url': 'license.com',
    },
  },
  'servers': [
    {
      'url': 'http://localhost:3000/api/v1',
      'description': 'local server',
    },
    {
      'url': 'https://property-leasing-neat.herokuapp.com/api/v1',
      'description': 'heroku staging server',
    },
  ],
  'tags': [
    {
      'name': 'portfolio',
      'description': 'Everything about your Portfolios',
      'externalDocs': {
        'description': 'Find out more',
        'url': 'http://swagger.io',
      },
    },
    {
      'name': 'property',
      'description': 'Everything about your Properties',
      'externalDocs': {
        'description': 'Find out more',
        'url': 'http://swagger.io',
      },
    },
    {
      'name': 'propertyType',
      'description': 'Everything about your Property Types',
      'externalDocs': {
        'description': 'Find out more',
        'url': 'http://swagger.io',
      },
    },
    {
      'name': 'contract',
      'description': 'Everything about your Contracts',
      'externalDocs': {
        'description': 'Find out more',
        'url': 'http://swagger.io',
      },
    },
    {
      'name': 'user',
      'description': 'Operations about user',
      'externalDocs': {
        'description': 'Find out more about our store',
        'url': 'http://swagger.io',
      },
    },
  ],
  'paths': {
    '/portfolio': {
      'get': {
        'tags': [
          'portfolio',
        ],
        'summary': 'Get all existing portfolio',
        'operationId': 'getAllPortfolio',
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Portfolio',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
      'post': {
        'tags': [
          'portfolio',
        ],
        'summary': 'Add a new portfolio to the store',
        'operationId': 'addPortfolio',
        'requestBody': {
          'description': 'Portfolio object that needs to be added to the store',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'name': {
                    'type': 'string',
                  },
                  'description': {
                    'type': 'string',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Portfolio',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/portfolio/{id}': {
      'put': {
        'tags': [
          'portfolio',
        ],
        'summary': 'Update an existing portfolio',
        'operationId': 'updatePortfolio',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'id that need to be updated',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'requestBody': {
          'description': 'Portfolio object that needs to be added to the store',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'name': {
                    'type': 'string',
                  },
                  'description': {
                    'type': 'string',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'items': {
                    '$ref': '#/components/schemas/Portfolio',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Portfolio not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
      'get': {
        'tags': [
          'portfolio',
        ],
        'summary': 'Find portfolio by ID',
        'description': 'Returns a single portfolio',
        'operationId': 'getPortfolioById',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of portfolio to return',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Portfolio',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Portfolio not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
      },
    },
    '/portfolio/{id}/profit': {
      'get': {
        'tags': [
          'portfolio',
        ],
        'summary': 'Find profit portfolio by ID',
        'description': 'Returns profit',
        'operationId': 'getProfitPortfolioById',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of portfolio to return',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
          {
            'name': 'firstDate',
            'in': 'query',
            'description': 'first date invoice contract of portfolio to return',
            'required': true,
            'schema': {
              'type': 'string',
              'format': 'date',
            },
          },
          {
            'name': 'secondDate',
            'in': 'query',
            'description': 'Second date invoice contract of portfolio to return',
            'required': true,
            'schema': {
              'type': 'string',
              'format': 'date',
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Portfolio',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Portfolio not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
      },
    },
    '/portfolio/{id}/idealProfit': {
      'get': {
        'tags': [
          'portfolio',
        ],
        'summary': 'Find ideal profit portfolio by ID',
        'description': 'Returns ideal profit',
        'operationId': 'getIdealProfitPortfolioById',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of portfolio to return',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
          {
            'name': 'firstDate',
            'in': 'query',
            'description': 'first date invoice contract of portfolio to return',
            'required': true,
            'schema': {
              'type': 'string',
              'format': 'date',
            },
          },
          {
            'name': 'secondDate',
            'in': 'query',
            'description': 'Second date invoice contract of portfolio to return',
            'required': true,
            'schema': {
              'type': 'string',
              'format': 'date',
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Portfolio',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Portfolio not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
      },
    },
    '/portfolio/{id}/noPaymentPercent': {
      'get': {
        'tags': [
          'portfolio',
        ],
        'summary': 'Find no Payment Percent portfolio by ID',
        'description': 'Returns no Payment Percent',
        'operationId': 'getNoPaymentPercentPortfolioById',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of portfolio to return',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
          {
            'name': 'firstDate',
            'in': 'query',
            'description': 'first date invoice contract of portfolio to return',
            'required': true,
            'schema': {
              'type': 'string',
              'format': 'date',
            },
          },
          {
            'name': 'secondDate',
            'in': 'query',
            'description': 'Second date invoice contract of portfolio to return',
            'required': true,
            'schema': {
              'type': 'string',
              'format': 'date',
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Portfolio',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Portfolio not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
      },
    },
    '/portfolio/{id}/status': {
      'put': {
        'tags': [
          'portfolio',
        ],
        'summary': 'Update status an existing portfolio',
        'operationId': 'updateStatusPortfolio',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'id that need to be updated',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'requestBody': {
          'description': 'Portfolio object that needs to be added to the store',
          'content': {
          },
          'required': false,
        },
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Portfolio',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Portfolio not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/portfolio/status/{status}': {
      'get': {
        'tags': [
          'portfolio',
        ],
        'summary': 'Finds Portfolios by status',
        'description': 'Multiple status values can be provided with comma separated strings',
        'operationId': 'findPortfoliosByStatus',
        'parameters': [
          {
            'name': 'status',
            'in': 'path',
            'description': 'Status values that need to be considered for filter',
            'required': true,
            'style': 'form',
            'explode': true,
            'schema': {
              'type': 'boolean',
              'example': true,
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Portfolio',
                  },
                },
              },
            },
          },
          '400': {
            'description': 'Invalid status value',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Invalid status value',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'rolestore_auth': [
              'write:roles',
              'read:roles',
            ],
          },
        ],
      },
    },
    '/propertyType': {
      'get': {
        'tags': [
          'propertyType',
        ],
        'summary': 'Get all existing propertyType',
        'operationId': 'getAllPropertyType',
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/PropertyType',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
      'post': {
        'tags': [
          'propertyType',
        ],
        'summary': 'Add a new propertyType to the store',
        'operationId': 'addPropertyType',
        'requestBody': {
          'description': 'PropertyType object that needs to be added to the store',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'name': {
                    'type': 'string',
                  },
                  'description': {
                    'type': 'string',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/PropertyType',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/propertyType/{id}': {
      'put': {
        'tags': [
          'propertyType',
        ],
        'summary': 'Update an existing propertyType',
        'operationId': 'updatePropertyType',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'id that need to be updated',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'requestBody': {
          'description': 'PropertyType object that needs to be added to the store',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'name': {
                    'type': 'string',
                  },
                  'description': {
                    'type': 'string',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'items': {
                    '$ref': '#/components/schemas/PropertyType',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'PropertyType not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
      'get': {
        'tags': [
          'propertyType',
        ],
        'summary': 'Find propertyType by ID',
        'description': 'Returns a single propertyType',
        'operationId': 'getPropertyTypeById',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of propertyType to return',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/PropertyType',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'PropertyType not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
      },
    },
    '/propertyType/{id}/status': {
      'put': {
        'tags': [
          'propertyType',
        ],
        'summary': 'Update status an existing propertyType',
        'operationId': 'updateStatusPropertyType',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'id that need to be updated',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'requestBody': {
          'description': 'PropertyType object that needs to be added to the store',
          'content': {
          },
          'required': false,
        },
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/PropertyType',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'PropertyType not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/propertyType/status/{status}': {
      'get': {
        'tags': [
          'propertyType',
        ],
        'summary': 'Finds PropertyTypes by status',
        'description': 'Multiple status values can be provided with comma separated strings',
        'operationId': 'findPropertyTypesByStatus',
        'parameters': [
          {
            'name': 'status',
            'in': 'path',
            'description': 'Status values that need to be considered for filter',
            'required': true,
            'style': 'form',
            'explode': true,
            'schema': {
              'type': 'boolean',
              'example': true,
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/PropertyType',
                  },
                },
              },
            },
          },
          '400': {
            'description': 'Invalid status value',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Invalid status value',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'rolestore_auth': [
              'write:roles',
              'read:roles',
            ],
          },
        ],
      },
    },
    '/property': {
      'get': {
        'tags': [
          'property',
        ],
        'summary': 'Get all existing property',
        'operationId': 'getAllProperty',
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Property',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
      'post': {
        'tags': [
          'property',
        ],
        'summary': 'Add a new property to the store',
        'operationId': 'addProperty',
        'requestBody': {
          'description': 'Property object that needs to be added to the store',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'name': {
                    'type': 'string',
                  },
                  'description': {
                    'type': 'string',
                  },
                  'cost': {
                    'type': 'number',
                  },
                  'income': {
                    'type': 'number',
                  },
                  'portfolioId': {
                    'type': 'integer',
                  },
                  'propertyTypeId': {
                    'type': 'integer',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Property',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/property/{id}': {
      'put': {
        'tags': [
          'property',
        ],
        'summary': 'Update an existing property',
        'operationId': 'updateProperty',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'id that need to be updated',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'requestBody': {
          'description': 'Property object that needs to be added to the store',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'name': {
                    'type': 'string',
                  },
                  'description': {
                    'type': 'string',
                  },
                  'cost': {
                    'type': 'number',
                  },
                  'income': {
                    'type': 'number',
                  },
                  'portfolioId': {
                    'type': 'integer',
                  },
                  'propertyTypeId': {
                    'type': 'integer',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'items': {
                    '$ref': '#/components/schemas/Property',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Property not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
      'get': {
        'tags': [
          'property',
        ],
        'summary': 'Find property by ID',
        'description': 'Returns a single property',
        'operationId': 'getPropertyById',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of property to return',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Property',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Property not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
      },
    },
    '/property/{id}/status': {
      'put': {
        'tags': [
          'property',
        ],
        'summary': 'Update status an existing property',
        'operationId': 'updateStatusProperty',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'id that need to be updated',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'requestBody': {
          'description': 'Property object that needs to be added to the store',
          'content': {
          },
          'required': false,
        },
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Property',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Property not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/property/status/{status}': {
      'get': {
        'tags': [
          'property',
        ],
        'summary': 'Finds Properties by status',
        'description': 'Multiple status values can be provided with comma separated strings',
        'operationId': 'findPropertiesByStatus',
        'parameters': [
          {
            'name': 'status',
            'in': 'path',
            'description': 'Status values that need to be considered for filter',
            'required': true,
            'style': 'form',
            'explode': true,
            'schema': {
              'type': 'boolean',
              'example': true,
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Property',
                  },
                },
              },
            },
          },
          '400': {
            'description': 'Invalid status value',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Invalid status value',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'rolestore_auth': [
              'write:roles',
              'read:roles',
            ],
          },
        ],
      },
    },
    '/user': {
      'post': {
        'tags': [
          'user',
        ],
        'summary': 'Add a new user to the store',
        'operationId': 'addUser',
        'requestBody': {
          'description': 'User object that needs to be added to the store',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'email': {
                    'type': 'string',
                  },
                  'password': {
                    'type': 'string',
                  },
                  'passwordConfirm': {
                    'type': 'string',
                  },
                  'role': {
                    'type': 'string',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/User',
                },
              },
            },
          },
          '400': {
            'description': 'Bad request (passwords do not match or validation fields or email exists)',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Bad request (passwords do not match or validation fields or email exists)',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/auth/signin': {
      'post': {
        'tags': [
          'auth',
        ],
        'summary': 'SignIn user into the system',
        'operationId': 'loginUser',
        'requestBody': {
          'description': 'SignIn user into the system',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'email': {
                    'type': 'string',
                  },
                  'password': {
                    'type': 'string',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/User',
                  'token': {
                    'type': 'string',
                  },
                },
              },
            },
          },
          '400': {
            'description': 'Bad request (passwords do not match or validation fields)',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Bad request (passwords do not match or validation fields)',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'User or password incorrect',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'User or password incorrect',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/contract': {
      'get': {
        'tags': [
          'contract',
        ],
        'summary': 'Get all existing contract',
        'operationId': 'getAllContract',
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Contract',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
      'post': {
        'tags': [
          'contract',
        ],
        'summary': 'Add a new contract to the store',
        'operationId': 'addContract',
        'requestBody': {
          'description': 'Contract object that needs to be added to the store',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'date': {
                    'type': 'string',
                    'format': 'date',
                  },
                  'description': {
                    'type': 'string',
                  },
                  'propertyId': {
                    'type': 'integer',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Contract',
                  },
                },
              },
            },
          },
          '400': {
            'description': 'Bad request (validation fields)',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Bad request (validation fields)',
                    },
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/contract/{id}': {
      'get': {
        'tags': [
          'contract',
        ],
        'summary': 'Find contract by ID',
        'description': 'Returns a single contract',
        'operationId': 'getContractById',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of contract to return',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Contract',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Contract not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
      },
    },
    '/contract/status/{status}': {
      'get': {
        'tags': [
          'contract',
        ],
        'summary': 'Finds Contracts by status',
        'description': 'Multiple status values can be provided with comma separated strings',
        'operationId': 'findContractsByStatus',
        'parameters': [
          {
            'name': 'status',
            'in': 'path',
            'description': 'Status values that need to be considered for filter',
            'required': true,
            'style': 'form',
            'explode': true,
            'schema': {
              'type': 'boolean',
              'example': true,
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Contract',
                  },
                },
              },
            },
          },
          '400': {
            'description': 'Invalid status value',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Invalid status value',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'rolestore_auth': [
              'write:roles',
              'read:roles',
            ],
          },
        ],
      },
    },
    '/contract/{id}/status': {
      'put': {
        'tags': [
          'contract',
        ],
        'summary': 'Update status an existing contract',
        'operationId': 'updateStatusContract',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'id that need to be updated',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'requestBody': {
          'description': 'Contract object that needs to be added to the store',
          'content': {
          },
          'required': false,
        },
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Contract',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Contract not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/invoice': {
      'get': {
        'tags': [
          'invoice',
        ],
        'summary': 'Get all existing invoice',
        'operationId': 'getAllInvoice',
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Invoice',
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
      'post': {
        'tags': [
          'invoice',
        ],
        'summary': 'Add a new invoice to the store',
        'operationId': 'addInvoice',
        'requestBody': {
          'description': 'Invoice object that needs to be added to the store',
          'content': {
            'application/json': {
              'schema': {
                'type': 'object',
                'properties': {
                  'invoiceDate': {
                    'type': 'string',
                    'format': 'date',
                  },
                  'description': {
                    'type': 'string',
                  },
                  'cost': {
                    'type': 'number',
                  },
                  'income': {
                    'type': 'number',
                  },
                  'contractId': {
                    'type': 'integer',
                  },
                },
              },
            },
          },
          'required': true,
        },
        'responses': {
          '200': {
            'description': 'Success',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Invoice',
                  },
                },
              },
            },
          },
          '400': {
            'description': 'Bad request (validation fields)',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Bad request (validation fields)',
                    },
                  },
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
    '/invoice/{id}': {
      'get': {
        'tags': [
          'invoice',
        ],
        'summary': 'Find invoice by ID',
        'description': 'Returns a single invoice',
        'operationId': 'getInvoiceById',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'ID of invoice to return',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Invoice',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Invoice not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
      },
    },
    '/invoice/paid/{isPaid}': {
      'get': {
        'tags': [
          'invoice',
        ],
        'summary': 'Finds Invoices by isPaid',
        'description': 'Multiple isPaid values can be provided with comma separated strings',
        'operationId': 'findInvoicesByIsPaid',
        'parameters': [
          {
            'name': 'isPaid',
            'in': 'path',
            'description': 'IsPaid values that need to be considered for filter',
            'required': true,
            'style': 'form',
            'explode': true,
            'schema': {
              'type': 'boolean',
              'example': true,
            },
          },
        ],
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'array',
                  'items': {
                    '$ref': '#/components/schemas/Invoice',
                  },
                },
              },
            },
          },
          '400': {
            'description': 'Invalid status value',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Invalid status value',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'rolestore_auth': [
              'write:roles',
              'read:roles',
            ],
          },
        ],
      },
    },
    '/invoice/{id}/paid': {
      'put': {
        'tags': [
          'invoice',
        ],
        'summary': 'Update paid an existing invoice',
        'operationId': 'updatePaidInvoice',
        'parameters': [
          {
            'name': 'id',
            'in': 'path',
            'description': 'id that need to be updated',
            'required': true,
            'schema': {
              'type': 'integer',
            },
          },
        ],
        'requestBody': {
          'description': 'Invoice object that needs to be added to the store',
          'content': {
          },
          'required': false,
        },
        'responses': {
          '200': {
            'description': 'successful operation',
            'content': {
              'application/json': {
                'schema': {
                  '$ref': '#/components/schemas/Invoice',
                },
              },
            },
          },
          '401': {
            'description': 'Access token is missing or invalid',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Forbidden! No tiene header de autenticación',
                    },
                  },
                },
              },
            },
          },
          '404': {
            'description': 'Invoice not found',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Not found! Registro de ${entity} no encontrado',
                    },
                  },
                },
              },
            },
          },
          '500': {
            'description': 'Validation exception or server error',
            'content': {
              'application/json': {
                'schema': {
                  'type': 'object',
                  'properties': {
                    'ok': {
                      'type': 'boolean',
                      'example': false,
                    },
                    'message': {
                      'type': 'string',
                      'example': 'Validation exception or server error',
                    },
                  },
                },
              },
            },
          },
        },
        'security': [
          {
            'bearerAuthJWT': [],
          },
        ],
        'x-codegen-request-body-name': 'body',
      },
    },
  },
  'components': {
    'schemas': {
      'User': {
        'required': [
          'email',
          'password',
          'role',
          'status',
        ],
        'type': 'object',
        'properties': {
          'id': {
            'type': 'integer',
          },
          'email': {
            'type': 'string',
          },
          'password': {
            'type': 'string',
          },
          'role': {
            'type': 'string',
          },
          'status': {
            'type': 'boolean',
          },
          'createdAt': {
            'type': 'string',
            'format': 'date',
          },
          'updatedAt': {
            'type': 'string',
            'format': 'date',
          },
          'deletedAt': {
            'type': 'string',
            'format': 'date',
          },
        },
      },
      'Portfolio': {
        'required': [
          'name',
          'description',
          'status',
        ],
        'type': 'object',
        'properties': {
          'id': {
            'type': 'integer',
          },
          'name': {
            'type': 'string',
            'example': 'name',
          },
          'description': {
            'type': 'string',
            'example': 'description',
          },
          'status': {
            'type': 'boolean',
            'description': 'status',
            'example': true,
          },
          'createdAt': {
            'type': 'string',
            'format': 'date',
          },
          'updatedAt': {
            'type': 'string',
            'format': 'date',
          },
          'deletedAt': {
            'type': 'string',
            'format': 'date',
          },
        },
        'xml': {
          'name': 'Portfolio',
        },
      },
      'PropertyType': {
        'required': [
          'name',
          'description',
          'status',
        ],
        'type': 'object',
        'properties': {
          'id': {
            'type': 'integer',
          },
          'name': {
            'type': 'string',
            'example': 'name',
          },
          'description': {
            'type': 'string',
            'example': 'description',
          },
          'status': {
            'type': 'boolean',
            'description': 'status',
            'example': true,
          },
          'createdAt': {
            'type': 'string',
            'format': 'date',
          },
          'updatedAt': {
            'type': 'string',
            'format': 'date',
          },
          'deletedAt': {
            'type': 'string',
            'format': 'date',
          },
        },
        'xml': {
          'name': 'PropertyType',
        },
      },
      'Property': {
        'required': [
          'name',
          'description',
          'status',
          'cost',
          'income',
          'portfolioId',
          'propertyTypeId',
        ],
        'type': 'object',
        'properties': {
          'id': {
            'type': 'integer',
          },
          'name': {
            'type': 'string',
            'example': 'name',
          },
          'description': {
            'type': 'string',
            'example': 'description',
          },
          'status': {
            'type': 'boolean',
            'description': 'status',
            'example': true,
          },
          'cost': {
            'type': 'float',
          },
          'income': {
            'type': 'float',
          },
          'portfolioId': {
            'type': 'integer',
          },
          'propertyTypeId': {
            'type': 'integer',
          },
          'createdAt': {
            'type': 'string',
            'format': 'date',
          },
          'updatedAt': {
            'type': 'string',
            'format': 'date',
          },
          'deletedAt': {
            'type': 'string',
            'format': 'date',
          },
        },
        'xml': {
          'name': 'PropertyType',
        },
      },
      'Contract': {
        'required': [
          'date',
          'description',
          'status',
          'userId',
          'propertyId',
        ],
        'type': 'object',
        'properties': {
          'id': {
            'type': 'integer',
          },
          'date': {
            'type': 'string',
            'example': 'date',
          },
          'description': {
            'type': 'string',
            'example': 'description',
          },
          'status': {
            'type': 'boolean',
            'description': 'status',
            'example': true,
          },
          'userId': {
            'type': 'integer',
          },
          'propertyeId': {
            'type': 'integer',
          },
          'createdAt': {
            'type': 'string',
            'format': 'date',
          },
          'updatedAt': {
            'type': 'string',
            'format': 'date',
          },
          'deletedAt': {
            'type': 'string',
            'format': 'date',
          },
        },
        'xml': {
          'name': 'PropertyType',
        },
      },
      'Invoice': {
        'required': [
          'isPaid',
          'invoiceDate',
          'description',
          'status',
          'cost',
          'income',
          'contractId',
        ],
        'type': 'object',
        'properties': {
          'id': {
            'type': 'integer',
          },
          'isPaid': {
            'type': 'boolean',
            'description': 'paid contract',
            'example': true,
          },
          'invoiceDate': {
            'type': 'string',
            'example': 'date',
          },
          'description': {
            'type': 'string',
            'example': 'description',
          },
          'status': {
            'type': 'boolean',
            'description': 'status',
            'example': true,
          },
          'cost': {
            'type': 'float',
          },
          'income': {
            'type': 'float',
          },
          'contractId': {
            'type': 'integer',
          },
          'createdAt': {
            'type': 'string',
            'format': 'date',
          },
          'updatedAt': {
            'type': 'string',
            'format': 'date',
          },
          'deletedAt': {
            'type': 'string',
            'format': 'date',
          },
        },
        'xml': {
          'name': 'PropertyType',
        },
      },
      'ApiResponse': {
        'type': 'object',
        'properties': {
          'code': {
            'type': 'integer',
            'format': 'int32',
          },
          'ok': {
            'type': 'boolean',
          },
          'type': {
            'type': 'string',
          },
          'message': {
            'type': 'string',
          },
        },
      },
    },
    'securitySchemes': {
      'bearerAuthJWT': {
        'type': 'http',
        'scheme': 'bearer',
        'bearerFormat': 'JWT',
        'in': 'header',
      },
    },
  },
};

module.exports = {
  options,
};
