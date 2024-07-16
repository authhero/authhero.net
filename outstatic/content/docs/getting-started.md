---
title: 'Getting started'
status: 'published'
author:
  name: 'Andre Vitorio'
  picture: 'https://avatars.githubusercontent.com/u/1417109?v=4'
slug: 'getting-started'
description: 'Get started with Outstatic'
coverImage: ''
menuPath: 'Getting started'
startPagePrio: '1'
publishedAt: '2024-06-24T17:34:15.000Z'
---

Here's how you can get started with AuthHero.

### **Hosted environment**

The fastest way to try it out is to just hit the Sign Up button in top right.

### **Local Setup**

There is a CLI tool for setting up your local environment:

```bash
npm create authhero
```

It will by default setup a sqlite database and seed it with a tenant and an admin user.

Run `npm start` to start the server on http://localhost:3000 and open [https://local.authhero.net](https://local) to open the admin portal pointing to you local server. The api docs are available on https://localhost:3000/docs