---
title: 'Authorize endpoint'
status: 'published'
author:
  name: 'Markus Ahlstrand'
  picture: 'https://avatars.githubusercontent.com/u/89469?v=4'
slug: 'authorize-endpoint'
description: ''
coverImage: ''
menuPath: ''
publishedAt: '2024-07-18T15:14:37.367Z'
---

# OAuth2 and OIDC `/authorize` Endpoint

 

The `/authorize` endpoint is a crucial part of the OAuth2 and OpenID Connect (OIDC) protocols. It is the entry point for the authorization flow independent if the user for instance logs in with a password or a social login. 

## Required Attributes

### client_id

The `client_id` is a mandatory parameter that identifies the client making the authorization request. It is assigned by the authorization server during the client registration process.

The client_id is the id of the application in the portal.

**Example:**

```
https://authorization-server.com/authorize?client_id=YOUR_CLIENT_ID
```

### state

The `state` parameter is an optional but highly recommended attribute. It is used to maintain state between the request and the callback. It also helps prevent cross-site request forgery (CSRF) attacks by including a value that the client generates.

**Example:**

```
https://authorization-server.com/authorize?state=YOUR_UNIQUE_STATE
```

### redirect_uri

The `redirect_uri` is a required parameter that specifies the URI to which the authorization server will send the user once the authorization process is complete. This URI must match one of the registered URIs for the application.

**Example:**

```
https://authorization-server.com/authorize?redirect_uri=https://your-app.com/callback
```

## Optional Parameters

### login_hint

The `login_hint` parameter can be used to pass a hint to the authorization server about the login identifier the user might use to log in. This is useful for pre-filling the login form or directing the user to a specific authentication flow.

If the user has a existing session with the auth server that matches the login_hint it will be passed on to the redirect_uri directly with a valid token.

**Example:**

```
https://authorization-server.com/authorize?login_hint=user@example.com
```

### prompt=none

The `prompt` parameter specifies whether the authorization server should prompt the user for re-authentication and consent. The value `none` indicates that the server should not display any authentication or consent user interface.

This is used for the silent authentication when logging in on other websites on the same domain using a hidden iframe.

**Example:**

```
https://authorization-server.com/authorize?prompt=none
```

### connection

The `connection` parameter can be used to specify the identity provider (IdP) to use for authentication. This is used to for instance forward the user to the google login.

**Example:**

```
https://authorization-server.com/authorize?connection=google-oauth2
```

### response_mode

The `response_mode` parameter determines how the result of the authorization request is formatted. Common values include `query`, `fragment`, and `form_post`.

- `query`: The authorization response is returned in the query string.
- `fragment`: The authorization response is returned in the fragment part of the URL.
- `form_post`: The authorization response is returned via an HTML form post.

**Example:**

```
https://authorization-server.com/authorize?response_mode=query
```

### response_type

The `response_type` parameter defines the type of response the client expects from the authorization server. Common values include `code`, `token`, and `id_token`.

- `code`: Requests an authorization code.
- `token`: Requests an access token (implicit flow).
- `id_token`: Requests an ID token (OIDC).

**Example:**

```
https://authorization-server.com/authorize?response_type=code
```

## Example Authorization Request

Combining the above parameters, an example authorization request might look like this:

```
https://authorization-server.com/authorize?
client_id=YOUR_CLIENT_ID&
redirect_uri=https://your-app.com/callback&
state=YOUR_UNIQUE_STATE&
login_hint=user@example.com&
prompt=none&
connection=google&
response_mode=query&
response_type=code
```