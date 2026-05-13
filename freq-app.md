---
layout: page
title: 글자 빈도 분석
permalink: /freq-app/
---

<form id="freq-form">
    <p>분석할 글:</p>
    <textarea id="text-input" rows="3" cols="50"></textarea>
    <p>셀 글자(쉼표로 구분):</p>
    <input id="target-input" type="text" value="이,의,날,개,소">
    <button type="submit">분석</button>
</form>
<ul id="freq-list"></ul>
<p id="top-char"></p>
<script src="/assets/js/freq-app.js"></script>

