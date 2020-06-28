---
---
{% assign sorted = site.notices | reverse %}
<ul>
{% for notice in sorted %}
<li style="padding-bottom: 1px;">
<a href="{{ notice.url }}">
<h3 class="content-title">{{ notice.title }}&emsp;<span
                        style="font-size: 0.6em;">{{ notice.date | date_to_string }}</span></h3>
<p>{{ notice.content | markdownify | strip_html | truncate: 50 }}</p>
</a>
</li>
{% endfor %}
</ul>