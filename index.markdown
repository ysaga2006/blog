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
                        <span class="post-word-count">
  {% assign char_count = post.content | strip_html | size %}
  {% if char_count < 400 %}
    {{ char_count }} 字程度
  {% else %}
    {% assign rounded_count = char_count | divided_by: 100 | times: 100 %}
    {{ rounded_count }} 字程度
  {% endif %}
</span>
                    </div>
                </a>
            </li>
        {% endfor %}
    </ul>
</section>
