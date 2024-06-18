---
title: 'Cross-domain Adaptation of Vision-Language Foundation Models for Medical Applications'
date: '2023-08-01'
tags: ['Machine Learning', 'Multimodal', 'Computer Vision', 'NLP', 'Medical AI']
description: 'Investigation of effectiveness of general image-text pretraining and finetuning on medical vision-language transformers.'
featured: true
---

## Overview

Vision-language models that understand interactions between medical images and text reports could enable various useful applications in healthcare. However, developing such medical models is challenging due to insufficient training data, unlike natural images. The study examines different pretrained VL models, including those trained on general image-text data (coarse-grained) and those finetuned on object detection (fine-grained), as starting points. It then explores adapting these natural models to the medical domain using self-supervised pretraining on medical image-text data and finetuning on medical report generation. The adapted models are evaluated on retrieval and report generation tasks. Results show both pretraining and finetuning assist adaptation, with coarse-grained natural models demonstrating the best transferability. The investigation provides guidance for harnessing VL models across domains with limited data.

## Paper
![image](/files/medical-ai/paper_preview.png)
View a PDF of the paper [here](/files/medical-ai/medical_ai.pdf).

## Source Code

Not publicly available.