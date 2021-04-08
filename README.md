# Overview

This section should contain an overview of the data provided and the API purpose.

#### USING THE API

We built this API to have an to have access to the pure unadulterated power of the [Magic 8-ball](https://github.com/KegenGuyll/Magic-8-Ball-api) application.
If you find yourself overwhelmed, we organized this documentation into two major areas.

- [Getting started](#getting-started) introduces you to the operations offered by the API.
- [API calls](#api-calls) gives you examples of those operations

&nbsp;
&nbsp;
&nbsp;

# Getting Started

The current version of the API lives at `https://magic-8-ball.p.rapidapi.com/`

&nbsp;
&nbsp;
&nbsp;

#### Endpoints

| Endpoint                     |                         What it does                          |
| ---------------------------- | :-----------------------------------------------------------: |
| `POST` [`/8-ball`](#/8-ball) | Returns a object that contains a `question`, `answer`, `type` |

&nbsp;
&nbsp;
&nbsp;

# Types

| Type          |
| ------------- |
| affirmative   |
| non-committal |
| negative      |

&nbsp;
&nbsp;
&nbsp;

# API calls

This API supports a data response in JSON format.

### /8-ball

### \*requires question in body example:

```json
{
  "question": "Will betty white live forever?"
}
```

```json
{
  "success": true,
  "body": {
    "question": "Will betty white live forever?",
    "answer": "It is certain.",
    "type": "affirmative"
  }
}
```
