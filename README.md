<div align="center">

# 王果 (Wang Guo)

**AI Agent 架构师 · 生产级工程实践 · 独立开发者 (Independent Builder)**

[![Zhihu](https://img.shields.io/badge/知乎-@王果ai_(1.2w+_关注)-0084FF?style=flat-square&logo=zhihu&logoColor=white)](https://www.zhihu.com/people/wang-guo-ha-53)
[![Articles](https://img.shields.io/badge/专栏长文-100+_篇体系化实战-10B981?style=flat-square)](https://github.com/wangguode/ai-agent-voice)
[![Book](https://img.shields.io/badge/书籍出版-《OpenClaw_深度解析》作者-FF6F00?style=flat-square)](https://github.com/wangguode)
[![Email](https://img.shields.io/badge/Email-17768113090@163.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:17768113090@163.com)
[![GitHub](https://img.shields.io/badge/GitHub-wangguode-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/wangguode)

<br/>

专注 **工业级 AI Agent 架构与 Harness 工程学**、**全双工低延迟语音交互系统 (Voice Agent)** 与 **空间世界模型商业化落地**。<br/>
坚持以**工业级生产指标、可验证闭环与高可用架构**说话。知乎专栏 1.2w+ 关注，《OpenClaw 深度解析》书籍作者。

</div>

---

### 🏛️ 核心架构与工程能力矩阵 (Architecture & Engineering Matrix)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           AI Agent 工业级工程架构体系                       │
├───────────────────┬────────────────────────────┬─────────────────────────┤
│   Runtime & Loop   │     Safety & Reliability   │    Streaming & Voice    │
│  - 状态收敛控制机  │  - AST 级工具调用沙箱拦截  │  - 全双工毫秒级语义打断 │
│  - 两级上下文压缩  │  - 确定性模式校验与单测环  │  - 环形缓冲与低抖动传输 │
│  - 多 Agent 隔离池 │  - 优雅降级与状态快照恢复  │  - 客户端轻量 VAD/滤波  │
└───────────────────┴────────────────────────────┴─────────────────────────┘
```

---

### 🚀 工业级作品与在线系统 (Featured Systems & Demos)

#### 🎙️ [HardCall // 生产级 AI 全双工高压面试与路演评测引擎](https://hardcall.153557421.workers.dev)
> 攻克大模型语音交互中的“回声误打断”与“虚假礼貌”，基于毫秒级抢话打断与流式全双工流水线构建的高拟真评测系统。

- **生产级架构**：自研双层打断管道（能量 VAD 快速门控 + 轻量音素语义过滤），杜绝语气词误打断；支持 0.16ms 瞬时清空音频缓冲。
- **评测指标**：覆盖 FAANG 行为与系统架构答辩，提供实时口癖词频雷达与 $200K+ 高管级话术建议。
- **端到端体验**：全免提流式网页端 + Swift 6 原生 macOS 客户端 (.dmg)。
- **直达链接**：[🌐 在线体验 (Live Demo)](https://hardcall.153557421.workers.dev) · [💻 GitHub 源码](https://github.com/wangguode/hardcall)

<br/>

#### 📊 [StatementFlow AI // 跨境金融对账单解析与复式平账 Micro-SaaS](https://statementflow-ai.153557421.workers.dev)
> 面向跨境电商与出海企业的财务级精准解析引擎，彻底解决传统 OCR 错位与纯 LLM 算术幻觉。

- **双引擎强校验**：Schema 约束结构化提取 + 确定性复式记账校验 (`期初余额 + 贷方 - 借方 = 期末余额`)，平账失败自动回溯重试。
- **零信任隐私架构**：核心财务解析完全运行于客户端沙箱，数据不落地；毫秒级导出标准复式 Excel 与 QuickBooks CSV。
- **直达链接**：[🌐 在线使用 (Live Demo)](https://statementflow-ai.153557421.workers.dev) · [💻 GitHub 源码](https://github.com/wangguode/statementflow-ai)

<br/>

#### 🌍 [TERRA // 物理空间世界模型 · 跨国落地生存操作系统](https://terra-world-travel.153557421.workers.dev)
> 融合 3D 高斯点云 (3DGS) 第一视角动线推演与时空孪生，解决跨国入境 120 分钟极度信息不对称痛点。

- **空间渲染架构**：轻量级 Web 3DGS 点云流式加载，支持首尔 (ICN)、北京 (PKX)、东京 (HND) 等国际枢纽机场第一视角动线漫游。
- **PWA 原生体验**：桌面端沉浸体验，手机端秒级转化为 120Hz 离线 PWA 应用。
- **直达链接**：[🌐 在线体验 (Live Demo)](https://terra-world-travel.153557421.workers.dev) · [💻 GitHub 源码](https://github.com/wangguode/terra-world-travel)

---

### 🛠️ 工业级开源基础设施与设计模式

#### 🧩 [zhishu-agent // 知枢工业级智能体 Harness 架构与模式库](https://github.com/wangguode/zhishu-agent)
> 单文件零依赖模式库 + 全栈生产级工作台，沉淀复杂智能体工程核心模式：

- **Loop 收敛控制**：动作重复度与信息熵监测，杜绝智能体死循环；动态 Step Budgeting 机制。
- **生产级安全网**：3 层沙箱拦截（PreToolUse / PostToolUse）、两级结构化上下文压缩（Token 预算控制）。
- **隔离执行池**：Git Worktree 原生隔离的多 Agent 并行工作区，保障工作目录整洁与无污染执行。
- **直达链接**：[💻 GitHub 源码与模式库](https://github.com/wangguode/zhishu-agent)

<br/>

#### 📚 [ai-agent-voice // 生产级 Agent 与实时语音工程全景实战](https://github.com/wangguode/ai-agent-voice)
> 100+ 篇深度体系化工程长文 + 生产级代码实验室，知乎高赞专栏配套工程库。

- **核心模块**：全双工流式流水线设计、Harness Loop 工程学、GraphRAG 与混合检索评测体系。
- **直达链接**：[💻 GitHub 源码与全套代码](https://github.com/wangguode/ai-agent-voice)

---

### 📝 精选深度长文 (Top Articles)

1. 🔥 [Harness Engineering 和 Loop Engineering —— 一部 Agent 工程的血泪史 (479+ 赞)](https://zhuanlan.zhihu.com/p/2051682264325546663)
2. 🔥 [Graph Engineering 刷屏了，但先问一个问题：你的 Agent Loop 收敛过吗？](https://zhuanlan.zhihu.com/p/2064476217709949350)
3. 🎙️ [Agent-语音机器人篇(5)：Voice Agent 全栈架构深度解析](https://zhuanlan.zhihu.com/p/2081779542469906860)
4. 🧠 [从“能聊”到“能干”：深度拆解 Function Calling、MCP 与 Anthropic Skills 的演进之路](https://zhuanlan.zhihu.com/p/78345307884)

---

### 📬 技术交流与合作 (Contact & Consulting)

- **电子邮箱**：[17768113090@163.com](mailto:17768113090@163.com)
- **知乎专栏**：[@王果ai (1.2w+ 关注)](https://www.zhihu.com/people/wang-guo-ha-53)
- **业务合作**：AI Agent 工业级架构咨询、技术大会/企业内训、技术图书与专业专栏合作。
