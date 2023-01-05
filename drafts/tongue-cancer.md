---
title: 'Tongue Cancer Classification'
date: '2023-01-04'
tags: ['CNN', 'Neural Network', 'PyTorch', Medical AI']
description: 'Convolutional neural networks custom built to identify tongue cancer and a tumor''s maligancy.'
draft: true
featured: false
---

## Overview

Working with oral pathology professor Julia Chang of the National Taiwan University, I developed and trained convolutional neural networks in PyTorch to classify tongue cancer images of the malignant, benign, and normal varieties. Our final model was able to achieve 93.5% accuracy even when given a 224x224 pixel crop (or smaller) of a picture of the mouth and tongue.

## In-Depth Project Description

### Problem Statement and Dataset

The dataset consists of 1078 images of the tongue (and sometimes teeth and mouth) from patients with normal tongues, benign tumors on their tongues, pre-cancer tissue on their tongues, and fully cancerous tissue. The goal of this research project is to create a machine learning model that can take an image of arbitrary dimension and determine whether the tongue pictured has cancer, pre-cancerous cells, a benign tumor, or simply normal tissue.

### Model Architecture

Because we were working with images, a fully connected neural network takes much longer to train and often leads to overfitting and poorer results. Therefore, we used Convolutional Neural Networks (CNNs), which harness spatial intuition to reduce the number of connections required, while maintaining the flexibility and learning capabilities of neural networks. In particular, we used the Resnet-50 model architecture, which uses convolutional kernels to consider the spatial surroundings of each pixel and max pooling layers to extract higher-order complex features after every layer. The fully connected layer at the output end of the Resnet-50 model was modified to output 4 values corresponding to the 4 classes.

### Training

Of the 1078 images, 755 were used for training, satisfying a roughly 70-30 train-test split. We used the cross entropy loss function, a common loss function for multiclass classification problems. We also used the Adam optimizer with a variable learning rate.

Our model is designed for a 224x224 pixel input image, so we encounter a problem when we try to classify images of arbitrary dimension. Therefore, we did some pre-processing that doubled as data augmentation, preventing overfitting. While training, we randomly cropped a random part of the training image with anywhere from 8% to 100% of the image, and resized the image to fit the 224x224 input. This data augmentation allowed for the model to learn and classify cancerous tissues with more generality than the default 755 training images.

### Results

When comparing normal tongues and tongues with benign tumors with cancerous or pre-cancerous tongue tissue, our model was able to discern between the two groups with great accuracy. Of the 323 test cases, the following confusion matrix shows how our model classified the test patients:
![Gropued Confusion Matrix](/files/tongue-cancer/grouped_confusion_matrix.png)

When trying to discern between the general four classes, the model does not do quite as well. In particular, there seems to be problems in making a general model that differentiates between cancer and pre-cancer tissue.
![General Confusion Matrix](/files/tongue-cancer/general_confusion_matrix.png)

### Conclusion

We developed a convolutional neural network able to discern between generally cancerous tissue (cancer/pre-cancer) and generally benign tissue (benign/normal) with high accuracy and generality (93.5% accuracy, any image dimensions). Future work could train neural networks to find feature-full regions of images for strategic cropping. A more standardized dataset with images of the same size and patients treated in similar environments would also benefit the rigor of our model.

## Source Code

The source code used for this research project is fully open source and available on my GitHub [here](https://github.com/will-s-h/tongue-cnn). Note: raw image data used in this project is not included.