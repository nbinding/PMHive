---
layout: default
title: Home
---

# Welcome to PMHive

Your comprehensive hub for product management resources. Explore the different categories to find articles, guides, templates, and tools, and join a community of professionals sharing insights and best practices to excel in product management.

## Categories

{% for item in site.data.navigation %}
- [{{ item.title }}]({{ item.url }})
{% endfor %}
