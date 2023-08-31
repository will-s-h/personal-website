---
title: 'Computing Shared Structure in Language With Multitask Learning'
date: '2023-06-01'
tags: ['Machine Learning', 'Multitask Learning']
description: 'Final project for CS 229. Improving upon conflicting gradients problem via GradNorm, PCGrad, and CAGrad.'
featured: true
---

## Overview

In this project, we explore the paradigm of multitask learning, where multiple related tasks are learned by one model. One common problem with this approach is conflicting gradients, which occur when the gradients from two tasks cancel each other out, resulting in poor model performance. Several methods have been proposed to help mitigate this issue, the chief three of which are gradient surgery (PCGrad), gradient normalization (GradNorm), and conflict-averse gradient descent (CAGrad). We apply these methods to the context of natural language processing with the related tasks of paraphrase detection and semantic textual similarity. When compared to two individually trained models and a vanilla multitask model, we find that PCGrad, GradNorm, and CAGrad all significantly improve accuracy by mitigating conflicting gradients. Investigation of the loss curves shows that all three methods robustly resolve the conflicting gradients problem, but GradNorm and CAGrad are slightly more effective than PCGrad. 

## Poster
![image](/files/multitask-learning/229_poster.png)
View the PDF version [here](/files/multitask-learning/229_poster.pdf).

## Source Code

Soon to be open source on GitHub.