---
layout: default
title: 值迭代算法
parent: 吃豆人
nav_order: 2
---
### 1.值迭代算法（Value Iteration）
理解马尔可夫决策过程和贝尔曼方程，并在valueIterationAgents.py文件中编写值迭代算法，让智能体通过反复计算每个状态的价值，找到最优的行动策略。通过不断更新每个位置的价值，直到这些价值稳定下来（例如，计算100次），最后根据价值选择最佳路径。利用公式反复计算，确保每一步都基于前一步的结果。

在提供的参考代码中，可以看到一个网格世界，智能体回根据计算出来的价值自动导航到出口。

值迭代状态更新公式：
$$
V_{k+1}(s) \leftarrow \max_a \sum_{s'} T(s, a, s') [R(s, a, s') + \gamma V_k(s')]
$$
操作命令：

- （1）测试算法算法正确性：

  - ```
    python autograder.py -q q1
    ```

- （2）可视化价值迭代结果

  - 采用下面的命令加载ValueIterationAgent中的代码，计算策略并执行10次。

  - ```
    python gridworld.py -a value -i 100 -k 10
    ```

- （3）快速查看5次迭代后价值（示例输出）

  - ```
    python gridworld.py -a value -i 5
    ```
