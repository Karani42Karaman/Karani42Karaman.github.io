---
layout: post
title: Kubernetes Nedir ?
date: 2017-09-12 00:00:00 +0300
description: You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. # Add post description (optional)
img: kübe1.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Productivity, Workflow] # add tag
---
Neden Kubernetes yada neden bir container orchestrator kullanıyoruz ?

Kendimce bu soruyu 2 seçenek ile cevaplıyorum;

## 1 ) Cluster Manager :
 Bizim makine bütünümüz var yani 1000 core luk bir makine halinde değil 8/10/12 vb gibi parçalar halinde, biz uygulamaları bunların üzerinde çalıştırırken uygulamaların nerede çalışacağına da karar vermek istemiyoruz. Bu durumlardan dolayı bütün container orchestratorlar birer cluster manager rolünde. Bunların üzerine bir agent kuruyoruz ve bize uygulamayı yönetme imkanı veriyor. Bizim 20 tane 10 core luk makinemiz varsa ben onları 200 core şeklinde bir bütün olarak görüyorum.

![kübe2]({{site.baseurl}}/assets/img/kübe2.jpg)

## 2) Container Orchestrator or Scheduler : 
Containerları kurduk, 5 tane container çalıştıracağım, bunları aynı VM ler üzerinde değil de farklı VM lerde çalıştrımak istiyorum (best practice) gibi mantıksal tercihlerin yapılması ve aynı zamanda bir önceki maddede belirttiğim makine bütününde kullanılan/kalan core hesaplarının yapılması gibi işlemler içinde pencerenin bütününü gören bir mekanizmaya ihtiyacımız var bu noktada bir container orchestrator ihtiyacımız doğuyor.

![kübe3]({{site.baseurl}}/assets/img/kübe3.jpg)
