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
                    <div class="post-meta-container">
                        <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y年%m月%d日" }}</time>
                        <span class="post-word-count">{{ post.content | strip_html | size }} 文字</span>
                    </div>
                </a>
            </li>
        {% endfor %}
    </ul>
</section>
