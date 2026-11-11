<div align="center">

# 王果 (Wang Guo)
### Voice AI & Agent Systems Architect · Independent Builder

[![GitHub](https://img.shields.io/badge/GitHub-@wangguode-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/wangguode)
[![Zhihu](https://img.shields.io/badge/知乎-@王果ai_(1.2w+_关注)-0084FF?style=flat-square&logo=zhihu&logoColor=white)](https://www.zhihu.com/people/wang-guo-ha-53)
[![Email](https://img.shields.io/badge/Email-17768113090@163.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:17768113090@163.com)

<br/>

Focused on **Autonomous Agent Architectures (Harness & Loops)**, **Full-Duplex Voice AI (52ms Interruption)**, and **Deterministic Systems**.<br/>
专注 **AI Agent 智能体底层架构**、**全双工低延迟实时语音引擎 (Voice Agent)** 与 **确定性金融/工具系统**。<br/>
坚持以可运行的代码与真实产品说话，知乎专栏 1.2w+ 关注，《OpenClaw 深度解析》作者。

</div>

---

### 🚀 精选开源与在线作品 (Featured Open-Source Projects)

#### 🎙️ [HardCall · 52ms Full-Duplex Voice Interruption Cockpit / 高压语音面试官](https://hardcall.153557421.workers.dev)
> 专治通用大模型的“无限礼貌讨好”，基于 52ms 毫秒级抢话打断算法，为全双工实时语音交互与高压演练打造的开源解决方案。
> Built for zero-tolerance latency in conversational AI — sub-52ms acoustic barge-in, eliminating synthetic polite hallucinations.

- **毫秒级全双工抢话 (52ms Barge-In)**：自研声学级静音检测 (VAD) + 环形缓冲区快速截断，支持说话中随时自然插话，告别等待转录完成的机械迟滞。
- **全端体验与实战考场**：覆盖 FAANG 系统架构答辩、破 $160K 薪资谈判与 YC Demo Day 商业路演，支持 Web 免提开麦，同步提供 Swift 6 + Apple Speech 原生 macOS 客户端。
- **直达链接**：[🌐 在线体验 (Live Demo)](https://hardcall.153557421.workers.dev) · [💻 GitHub 源码](https://github.com/wangguode/hardcall)

<br/>

#### 📊 [StatementFlow AI · 跨境银行对账单 & 发票解析 Micro-SaaS (Deterministic Parser)](https://statementflow-ai.153557421.workers.dev)
> 结合 LLM 语义提取与 TypeScript 确定性代数校验的智能对账引擎，杜绝传统 OCR 错乱与大模型财务算术幻觉。
> Deterministic financial statement reconciliation combining schema-constrained extraction with zero-hallucination math validation.

- **双引擎代数校验**：Schema 约束语义识别 + 本地确定性借贷校验 (`期初 + 贷方 - 借方 = 期末`)，算力纯客户端执行保护商业隐私。
- **格式秒级转换**：秒级解析杂乱 PDF 账单，一键导出清洗完备的多工作表 Excel 及 QuickBooks / Xero 标准格式 CSV。
- **直达链接**：[🌐 在线使用 (Live Demo)](https://statementflow-ai.153557421.workers.dev) · [💻 GitHub 源码](https://github.com/wangguode/statementflow-ai)

<br/>

#### 🌐 [TERRA-OASIS · 交互式多模态世界模型操作系统 (Interactive Causal World Model)](https://terra.153557421.workers.dev)
> 基于潜空间因果推演与 3D 物理碰撞模拟的交互式世界模型，提供 Apple 官方旗舰级交互体验、API 开发者文档与前沿科研论文。
> Interactive causal world model powered by neural radiation latents and real-time physical simulation with Apple Developer grade documentation and ML research papers.

- **Apple 级官方旗舰设计**：深度对标 Apple 极简工业设计，内置全双工 AI 智能小抽屉助手、中英双语无缝切换、多模态时空交互视口。
- **完整开发者与科研矩阵**：完全对标 Apple Developer API 声明与多语言代码调用规格 (`/docs`)，以及 Apple ML Research 会议收录论文与消融基准实验 (`/research`)。
- **直达链接**：[🌐 在线体验 (Live Demo)](https://terra.153557421.workers.dev) · [💻 GitHub 源码](https://github.com/wangguode/terra-world-travel)

<br/>

#### 🧩 [zhishu-agent · 通用智能体 Harness 架构与单测自修复闭环 (Agentic Harness)](https://github.com/wangguode/zhishu-agent)
> 面向生产环境的通用智能体 Harness 架构库：单文件零依赖模式库 + Java 17 / Python 双引擎工作台。
> Production-ready agentic harness: dynamic context compression, sandbox interceptors, and self-healing test loops.

- **单测自修复闭环 (Self-Healing Loop)**：测试套件与执行环境实时捕获运行时报错，基于 AST 与诊断上下文自驱动修正代码直至用例全部收敛通过。
- **核心工程底座**：3 层沙箱权限拦截（PreToolUse / PostToolUse）、两级 `/compact` 结构化上下文压缩、Git Worktree 多智能体并发隔离池。
- **直达链接**：[💻 GitHub 源码](https://github.com/wangguode/zhishu-agent)

---

### 🛠️ 核心研究与工程实验室 (Research & Labs)

#### 🎙️ voice-agent-rtp-gateway · [🧪 开源打断算法实验室](https://github.com/wangguode/ai-agent-voice/tree/main/01-voice-agent-rtp-bargein)
> 企业级实时语音智能体网关：FreeSWITCH 8kHz RTP 直连 + Pipecat 全双工编排 + SenseVoice 语义打断（60ms 极速响应）。
- **底层支撑**：SOXR VHQ 无损重采样、256 帧出站环形缓冲区、0.16ms clearAudio 瞬时清空与全链路可观测体系。
- **直达链接**：[🧪 查看开源算法实现](https://github.com/wangguode/ai-agent-voice/tree/main/01-voice-agent-rtp-bargein)

<br/>

#### 📚 [ai-agent-voice · 体系化实战专栏与代码实验室 (100+ Deep Dives)](https://github.com/wangguode/ai-agent-voice)
> 完整覆盖 Voice Agent 全栈实战、Agent 七层架构、Harness 工程学与 RAG 评测模型的 100+ 篇深度专栏与可运行实验室。
- **核心沉淀**：全双工实时语音网关演进、Loop 工程学与自验证闭环、混合检索 + GraphRAG 实战落地。
- **直达链接**：[💻 GitHub 源码与全套代码](https://github.com/wangguode/ai-agent-voice)

---

### 📝 精选深度长文 (Top Articles)

1. 🔥 [Harness Engineering 和 Loop Engineering —— 一部 Agent 工程的血泪史 (470+ 赞)](https://zhuanlan.zhihu.com/p/2051682264325546663)
2. 🔥 [Graph Engineering 刷屏了，但先问一个问题：你的 Agent Loop 收敛过吗？](https://zhuanlan.zhihu.com/p/2064476217709949350)
3. 🎙️ [Agent-语音机器人篇(5)：Voice Agent 全栈架构深度解析](https://zhuanlan.zhihu.com/p/2081779542469906860)
4. 🧠 [从“能聊”到“能干”：深度拆解 Function Calling、MCP 与 Anthropic Skills 的演进之路](https://zhuanlan.zhihu.com/p/78345307884)

---

### 📬 技术交流与联系 (Connect)

- **GitHub**：[@wangguode](https://github.com/wangguode)
- **知乎专栏**：[@王果ai](https://www.zhihu.com/people/wang-guo-ha-53)
- **电子邮箱**：[17768113090@163.com](mailto:17768113090@163.com)
