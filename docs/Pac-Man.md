---
layout: default
title: 吃豆人
parent: 实验题目
nav_order: 4
---
# 吃豆人-强化学习

## 1.实验背景
随着人工智能和机器学习技术的迅速发展，强化学习（Reinforcement Learning）作为一种重要的学习范式，在解决现实世界中复杂问题方面取得了显著的成果。强化学习通过智能体（agent）与环境（environment）的交互，通过学习合适的动作来最大化累积奖励，是人工智能领域中的热门研究方向之一。

路径规划是强化学习在实际应用中的一个典型场景，尤其在无人驾驶、机器人导航、游戏AI等领域具有重要意义。在这些应用中，智能体需要在复杂的环境中找到最优路径，以便高效地到达目的地。传统的路径规划算法面临着环境复杂性增加时计算复杂度急剧上升的问题，而强化学习算法能够通过与环境的交互学习到适应不同环境的最优路径，具有很好的适应性和泛化能力。

本实验基于经典的吃豆人（Pacman）游戏，逐步实现强化学习核心算法，从基础的值迭代，到更高级的Q-Learning和近似Q-Learning，最终目标是让智能体在吃豆人游戏中中自主学习最优策略。通过对参数的调整和理解算法原理，掌握让智能体找到最优动作的方法。
<img src = "../assets/images/Pac-Man/PacMan.png">

## 2.实验要求
（1）掌握强化学习中的值迭代算法、Q-Learning和近似Q-Learning算法

（2）掌握强化学习中的策略，学会设计策略

（3）需要补全给的示例代码，并提交完整代码，代码中需要有必要的中文注释

（4）理解并熟悉提供的代码结构和实现逻辑

## 3.参考资料
（1）Reinforcement Learning: An Introduction：[https://web.archive.org/web/20230417150626/https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf](https://web.archive.org/web/20230417150626/https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf)

（2）马尔可夫决策过程：[马尔可夫决策过程](https://hrl.boyuai.com/chapter/1/马尔可夫决策过程/)

（3）Q-Learning算法详解（CSDN）：[【强化学习】Q-Learning算法详解_qlearning算法详解-CSDN博客](https://blog.csdn.net/qq_30615903/article/details/80739243)



