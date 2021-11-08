---
layout: post
title: DeepLabv3: Rethinking Atrous Convolution for Semantic Image Segmentation
description: Rethinking Atrous Convolution for Semantic Image Segmentation 논문을 리뷰하였습니다.
comments: true
---
안녕하세요 "DeepLab v3"라고 불리는 <a href="https://arxiv.org/abs/1706.05587"><b>Rethinking Atrous Convolution for Semantic Image Segmentation</b></a>에 대해 리뷰하겠습니다.

## Previous Problems
Semantic segmentation에서 DCNNs을 사용할 때에 맞닥뜨리는 두가지 문제가 있다.
첫번째는 계속적인 pooling operation에 의한 feature resolution의 저하 문제이다. 이는 점점 추상화된 feature representation을 얻을 수 있게 하지만 오히려 지역적인 디테일한 정보를 얻는 것을 방해한다.
두번째 문제는 여러 크기의 객체가 존재한다는 점이다.

## Essence
첫번째 문제를 해결하기 위해 atrous convolution을 이용하였다. Dilated convolution으로도 알려진 이것을 이용하면 이를 이용하면 별도의 파라미터 추가 없이 feature response의 해상도를 조절할 수 있다.

두번째 문제를 해결하기 위한 방법으로 크게 4가지 종류로 분류하였다. (1) 각 스케일 입력에 대하여 별도의 feature map을 생성하는 image pyramid 방법, (2) encoder-decoder 구조를 이용하여 encoder에서 추출된 여러 스케일의 정보를 decoder에서 다시 복원하는 방법, (3) 네트워크의 추가로 모듈들을 추가하여 long range information을 이용할 수 있도록 하는 것, (4) 여러 스케일의 필터 혹은 pooling operation으로 생성된 feature map을 이용하는 spatial pyramid pooling 방법이 그것이다.