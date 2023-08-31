---
title: 'Autoregressive Diffusion'
date: '2023-09-01'
tags: ['Machine Learning', 'Multimodal Learning', 'Medical Imaging', 'PyTorch']
description: 'Autoregressive Diffusion for Long-Term Controllable Motion Synthesis.'
featured: true
---

## Poster
![image](/files/auto-diffusion/auto-diffusion.png)
View a PDF version of the poster [here](/files/auto-diffusion/diffusion-poster.pdf).

## Overview
Long-term generation of realistic human motion is a difficult problem, with applications in human-computer interaction, computer animation, robotics, and more. Most approaches run the following problems:
- Unrealistic physical interactions (e.g. foot sliding) 
- Repetitive or degenerate outputs (i.e. frozen motion) 
- Limited interactive controllability

Current Findings:
- The main difficulty in the autoregressive mode is preserving the data’s distribution when sampling multiple times across multiple strides.
- Prenoising imposes an extra constraint across strides that helps make more consistent motions across strides.
- Inpaint training and guided inference help make the training and inference tasks more similar, improving performance.
- There remains more to be desired with the strength of trajectory control and real-time diffusion.



## Publication

In the works.