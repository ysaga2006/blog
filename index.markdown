---
layout: default
title: Home
---
<section id="home">
    <ul id="post-list" class="post-list">
        {% for post in site.posts %}
            <li>
                <a href="{{ post.url | relative_url }}">
                    <h2>{{ post.title }}</h2>
                    <p class="post-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y年%m月%d日" }}</time></p>
                </a>
            </li>
        {% endfor %}
    </ul>
</section>
