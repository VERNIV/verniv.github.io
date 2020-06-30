---
---
<script>
'use strict';

const mode = 'ir';

{% assign sorted = site.ir | reverse %}
{% for ir in sorted %}
data.push({
    title: "{{ ir.title }}",
    date: "{{ ir.date | date_to_string }}",
    url: "{{ ir.url }}",
    preview: `{{ ir.content | markdownify | strip_html | truncate: 50 }}`,
    content: /*#__PURE__*/React.createElement("div", null, `{{ ir.content | markdownify }}`)
});
{% endfor %}
</script>

<script src="/js/content.min.js"></script>