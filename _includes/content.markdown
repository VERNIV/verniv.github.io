<script>
'use strict';

{% for data in sorted %}
data.push({
    title: "{{ data.title }}",
    date: "{{ data.date | date_to_string }}",
    url: "{{ data.url }}",
    preview: `{{ data.content | markdownify | strip_html }}`,
    content: /*#__PURE__*/React.createElement("div", null, `{{ data.content | markdownify }}`)
});
{% endfor %}
</script>