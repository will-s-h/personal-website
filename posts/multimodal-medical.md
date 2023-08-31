---
title: 'Vision-Language Learning for Medical Applications'
date: '2023-08-01'
tags: ['Machine Learning', 'Multimodal Learning', 'Medical Imaging', 'PyTorch']
description: 'Cross-domain Adaptation of Self-supervised Vision-language Representation Learning for Medical Applciations.'
featured: true
---

## Overview

Recently, foundation models have shown a lot of success in many domains including vision-language understanding. By pre-training the multimodal models through self-supervision, the learned multimodal representations can be generalized to different downstream tasks via finetuning. Although such pretraining-finetuning scheme have been studied a lot for natural image and language understanding, few works have investigated this for medical domain tasks, where the multimodal data commonly exists. In this paper, we study in a schematic way how the self-supervised pre-training model can help with medical vision-language understanding. To be specific, we study the effectiveness of different self-supervised loss functions in cross-modal learning. Especially, we demonstrate how the optimal transport loss can promote the cross-model local alignment for medical vision-language understanding. Then we apply the pre-trained model to different recognitive and generative medical vision-language tasks via efficient fine-tuning, including image-report retrieval and medical report generation.

## Publications

Submitted to AAAI 2024.