# VOIDHAVEN V0 — Page Specification

> **File**: `docs/design/page-spec.md`  
> **Purpose**: V0 前端逐页施工 Source of Truth  
> **Product source**: `docs/product/VOIDHAVEN V0 前端开发说明.md`  
> **Visual source**: `docs/design/design01.md`  
> **Scope rule**: 本文只提取既有产品规格；不新增产品功能，不重新进行 UX / UI 设计。`design01.md` 仅用于理解视觉系统与响应式表现，不得覆盖产品信息架构。

## Status Convention

- **[冻结]**：已确认产品决策；实现不得自行修改产品含义或删除。
- **[默认]**：当前推荐方案；允许工程级调整，但不得改变业务目标。若调整，应记录理由。
- **[待定]**：尚未决策；不得自行脑补为正式需求，应记录为 `OPEN_QUESTION`。

## Source Precedence

发生冲突时按以下顺序处理：

1. `[冻结]` 产品决策
2. V0 核心用户路径
3. 前后端接口契约
4. 可用性与响应式体验
5. `design01.md` 的视觉系统
6. 工程实现便利

`design01.md` 只能约束视觉表达和响应式呈现，不能新增、删除或重排产品页面与业务信息架构。

责任划分：产品说明解决业务冲突；`page-spec.md` 解决逐页结构冲突；`design01.md` 解决视觉冲突。

---

# Route

`GLOBAL` — Global Page Shell / all primary routes

## Page Goal

[冻结]

为所有主要页面提供统一的品牌识别、全局导航、主内容容器、Footer 与响应式外壳；保证用户无需登录即可访问 V0 核心信息。

## Page Structure

[冻结]

1. Header / Navigation
2. Main Page Content Slot
3. Footer

Header：
- 左侧：Logo、`VOIDHAVEN`，可辅以“求索袋底洞”。
- 右侧主导航：竞赛、组队、投稿、加入我们、关于。
- Logo / 品牌点击返回首页。
- 当前页面导航项存在可识别 active 状态。

Footer：
- Footer 在主要页面统一存在。
- Footer 的具体信息组织以产品规格为准；视觉上保持克制，不得因 `design01.md` 的参考图而删除产品规格要求的入口。

## Required Information

Header [冻结]：
- Logo
- `VOIDHAVEN`
- 可选中文副标“求索袋底洞”
- 竞赛
- 组队
- 投稿
- 加入我们
- 关于

Footer [默认，来源于“建议至少包含”]：
- 品牌：求索袋底洞 · VOIDHAVEN
- Slogan：`A haven for seekers.`
- 探索：竞赛、组队、投稿
- 项目：关于、加入我们、GitHub
- 连接：VOIDHAVEN 社群 / 联系入口
- 版权：`© 2026 VOIDHAVEN`

## Primary Actions

[冻结]

- Logo / 品牌 → `/`
- 竞赛 → `/competitions`
- 组队 → `/teams`
- 投稿 → `/submit`
- 加入我们 → `/join`
- 关于 → `/about`

## Secondary Actions

[默认]

- Footer 中的 GitHub / 社群 / 项目联系入口。
- active navigation 仅表达当前位置，不增加新的业务操作。

## States

[冻结工程要求]

- Header / Footer 不能因页面数据 Loading / Empty / Error 消失。
- 主要数据页面必须支持 Loading / Success / Empty / Error。
- 未匹配路由进入 404 表现。

## Responsive Behavior

[冻结]

必须支持 Desktop / Tablet / Mobile，产品功能和内容语义不因设备变化，仅改变布局。

Desktop：
- 品牌位于左侧。
- 完整主导航位于右侧。

Mobile：
- 品牌保留。
- 主导航折叠为菜单。
- 不允许导航横向溢出。

Tablet：
- 必须可用。
- 具体 breakpoint 属于工程实现细节，不在本文件冻结。

视觉实现遵循 `design01.md`：
- 轻量、克制、编辑式 / 工具型视觉。
- 桌面使用居中内容壳层。
- 移动端单列。
- 不从视觉参考中推断新的页面结构。

`design01.md` 的“两栏桌面 / 单栏移动”仅冻结为首页主要信息区的布局规则；竞赛列表、竞赛详情、组队列表与组队详情按本文件的逐页信息结构布局，不强制套用双栏。

## Privacy / Business Constraints

[冻结]

- V0 不显示普通用户登录 / 注册入口。
- 公开页面不得直接展示投稿者、老师、负责人或学生的私人联系方式。
- Header / Footer 不新增 Resource、Blog、AI、Login 等 V0 外导航。

## Out of Scope

[冻结]

- 普通学生注册 / 登录
- 评论、点赞、收藏、私信、即时聊天
- 论坛
- 完整博客系统
- 完整资源中心
- 完整 Talent Pool
- AI Assistant / AI 推荐
- 复杂权限 / 复杂实名认证

## Acceptance Criteria

- AC-G01：用户无需登录即可浏览核心信息。
- AC-G02：所有主导航页面可通过 Header 或 Footer 正常到达。
- AC-G03：主要页面在 Desktop / Tablet / Mobile 不出现明显布局溢出或核心信息遮挡。
- AC-G04：所有数据页面存在 Loading / Empty / Error 表现。
- AC-G07：V0 页面不显示普通用户登录 / 注册入口。
- AC-G08：公开页面不直接显示私人联系方式。

---

# Route

`/` — Home

## Page Goal

[冻结]

用户进入首页后 3–5 秒内明白：

> 这里可以找比赛、找队友、找机会。

并立即看到真实、可行动的信息。

## Page Structure

[冻结]

1. Global Header
2. Compact Hero
3. 近期竞赛 + 正在组队
4. 投稿 CTA
5. Global Footer

Desktop 主体：
- “近期竞赛”与“正在组队”左右双栏。
- 两栏业务权重同级。

Mobile 主体：
1. 近期竞赛
2. 查看全部竞赛
3. 正在组队
4. 查看全部组队

## Required Information

Compact Hero [冻结方向]：
- `A haven for seekers.`
- “找比赛 · 找队友 · 找机会”
- 极短产品说明
- “浏览竞赛”入口
- “寻找队伍”入口

Hero 约束 [冻结方向]：
- 不占满整个首屏。
- 常见桌面尺寸下，首屏最好已能看到真实信息区标题或首张内容。
- 不展示完整项目故事。

首页竞赛卡 [冻结核心信息]：
- 最突出：报名截止时间
- 最突出：当前组队状态 / 数量

首页竞赛卡推荐字段 [默认]：
- 比赛名称
- 类型
- 适用对象（仅在信息可靠时）
- 截止时间
- 组队状态

首页组队卡 [冻结]：
- 必须从卡片层面区分：
  - `团队找成员`
  - `学生找队伍`

团队找成员推荐字段 [默认]：
- 类型标签
- 团队 / 发起方名称
- 关联竞赛
- 核心需求
- 缺口人数（如提供）
- 截止时间（如提供）

学生找队伍推荐字段 [默认]：
- 类型标签
- 年级 / 学院等非敏感信息
- 目标竞赛
- 能力摘要
- 状态

## Primary Actions

[冻结]

- 浏览竞赛 → `/competitions`
- 寻找队伍 → `/teams`
- 竞赛卡 → `/competitions/:id`
- 组队卡 → `/teams/:id`
- 查看全部竞赛 → `/competitions`
- 查看全部组队 → `/teams`
- 投稿 → `/submit`

## Secondary Actions

[冻结 / Global]

- Logo → `/`
- Header / Footer 全局导航
- Footer 中项目与社群入口

## States

[冻结工程要求]

首页两个数据区至少分别考虑：
- Loading
- Success
- Empty
- Error

不得因某一栏为空而让整个首页失去结构。

具体 Empty / Error 文案未冻结。

## Responsive Behavior

[冻结]

Desktop：
- 近期竞赛 | 正在组队
- 双栏并列，业务权重同级。

Mobile：
- 近期竞赛在前，正在组队在后。
- 双栏改为纵向单列。
- Hero 操作按 `design01.md` 的移动端视觉规则适配，但不改变操作语义。

Tablet：
- 必须可用。
- 具体双栏切单栏 breakpoint 未冻结。

## Privacy / Business Constraints

[冻结]

- 首页真实信息优先于品牌故事。
- 首页不展示完整品牌 / 创始人故事。
- 首页组队卡不得展示微信号、手机号、私人邮箱、QQ 等私人联系方式。
- 竞赛与组队必须保持业务联动，不得表现为两个完全无关模块。

## Out of Scope

[冻结]

- 首页大段项目故事
- 登录 / 注册
- 热门算法 / 热门排行
- 资源中心
- 博客
- AI 助手
- 评论 / 社区动态
- 私人联系方式直出

## Acceptance Criteria

- AC-H01：首页首次可见区域能识别 VOIDHAVEN 品牌，但品牌不压倒真实信息。
- AC-H02：首页可直接找到“浏览竞赛”和“寻找队伍”。
- AC-H03：Desktop 首页“近期竞赛”和“正在组队”双栏呈现。
- AC-H04：Mobile 首页两部分纵向排列。
- AC-H05：竞赛卡至少突出截止时间与组队状态 / 数量。
- AC-H06：组队卡无需进入详情即可识别“团队找成员 / 学生找队伍”。
- AC-H07：首页提供“查看全部竞赛”和“查看全部组队”。

---

# Route

`/competitions` — Competition List

## Page Goal

[冻结]

提供完整竞赛浏览入口，回答：

> 我想系统地看目前有哪些比赛。

首页负责“发现”；本页负责完整浏览与筛选。

## Page Structure

[默认]

- 页面标题
- 简短说明
- 状态筛选
- 可选类型筛选
- 当前结果数量
- 竞赛列表
- Empty / Error State

不得从 `design01.md` 的双栏参考推断本页需要新增双栏产品结构。

## Required Information

每条竞赛信息应能快速回答：
- 这是什么比赛？
- 现在还能不能参加？
- 什么时候截止？
- 有没有组队信息？

状态筛选 [默认]：
- 全部
- 报名中
- 即将开始
- 已结束

类型筛选 [默认，可根据 Mock 数据规模简化]：
- 算法 / 程序设计
- 数学建模
- 创新创业
- 设计 / 工程
- 其他

排序 [冻结方向]：
- 时间驱动
- 优先考虑报名中、截止时间较近
- 不构建“热门竞赛”算法

## Primary Actions

[冻结]

- 点击竞赛项 → `/competitions/:id`

## Secondary Actions

[默认]

- 切换状态筛选
- 切换类型筛选（如本阶段启用）
- 浏览结果数量

## States

[冻结工程要求]

- Loading
- Success
- Empty
- Error

边界情况：
- 字段缺失
- 可选信息为空
- 已结束 / 过期竞赛
- 5 条 / 50 条数据
- 长竞赛名称 / 长标签

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 均需可用。
- 产品结构与筛选语义不因设备改变。
- 不允许横向溢出。
- 具体控件折行 / 收拢方式属于工程实现，不在本文件新增 UX 决策。
- 视觉层遵循 `design01.md` 的紧凑列表 / 卡片、轻边框、单列移动端原则。

## Privacy / Business Constraints

[冻结]

- 不依赖站内摘要替代官方来源。
- 公开列表不得出现私人联系方式。
- 不虚构热度。
- 不把 Mock 字段自动视为正式 API 字段。

## Out of Scope

[冻结]

- 热门排行算法
- 推荐系统
- 收藏 / 点赞
- 登录后个性化
- 复杂人才搜索
- 新增未在规格中定义的竞赛分类体系

## Acceptance Criteria

- AC-C01：用户可以浏览完整竞赛列表。
- AC-C02：至少存在可理解的状态区分。
- AC-C03：默认排序以时间 / 截止紧迫度为主要依据，不使用虚构热度。
- AC-C04：每条竞赛可进入对应详情页。
- AC-C05：列表为空时显示明确 Empty State，而非空白页面。

---

# Route

`/competitions/:id` — Competition Detail

## Page Goal

[冻结]

帮助用户完成对一个竞赛的完整判断，并自然进入下一步行动。

## Page Structure

[默认，除“当前组队”为冻结]

1. Hero / Summary
2. 时间信息
3. 适用对象
4. 官方信息
5. 简介
6. 参赛条件 / 规则摘要
7. 当前组队 [冻结]
8. 元信息

## Required Information

Hero / Summary [默认]：
- 比赛名称
- 状态
- 类型
- 级别（如信息可靠）
- 关键日期

时间信息 [默认]：
- 报名开始
- 报名截止
- 比赛日期

适用对象 [默认]：
- 年级
- 专业
- 地域 / 学校限制
- 其他重要资格

官方信息 [默认]：
- 官方网站
- 官方报名入口
- 官方通知 / 文件来源

简介 [默认]：
- 比赛是什么
- 大致做什么
- 适合怎样的学生

参赛条件 / 规则摘要 [默认]：
- 仅作阅读辅助
- 官方规则优先于站内摘要

当前组队 [冻结]：
- 直接展示与当前 Competition 关联的组队信息
- 必须覆盖：
  - 团队找成员
  - 学生找队伍

元信息 [默认]：
- 信息来源
- 最后更新时间

## Primary Actions

[冻结]

- 打开官方链接 / 官方信息
- 点击关联组队 → `/teams/:id`

## Secondary Actions

[冻结]

- 返回竞赛列表
- 当无组队信息时，可看到“提交组队信息”入口

## States

[冻结工程要求]

- Loading
- Success
- Error
- 不存在 ID → 404
- 字段缺失
- 可选信息为空
- 已结束 / 过期竞赛

组队子区域：
- 有关联组队
- 无关联组队 → 明确 Empty State

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 保持同一信息语义与顺序。
- 不从 `design01.md` 的首页双栏参考推导本详情页新的多栏业务结构。
- 长标题、长规则摘要、长官方链接必须具备内容韧性。

## Privacy / Business Constraints

[冻结]

- 官方来源是权威信息基准；站内摘要不得替代官方规则。
- 竞赛与组队必须直接联动。
- 关联组队区域不得直接展示私人联系方式。
- 若组队为空，不能要求用户重新到组队页搜索同一比赛。

## Out of Scope

[冻结]

- 评论
- 收藏
- 点赞
- 用户报名状态
- 个性化推荐
- AI 竞赛解读
- 直接展示团队私人联系方式

## Acceptance Criteria

- AC-CD01：页面能回答比赛是什么、什么时候、谁能参加、官方信息在哪里。
- AC-CD02：官方链接与站内说明视觉上可区分。
- AC-CD03：存在相关组队时，直接在竞赛详情内显示。
- AC-CD04：不存在组队时明确显示暂无组队，并允许用户看到提交组队信息入口。
- AC-CD05：用户可从竞赛详情直接进入组队详情，无需重新搜索比赛。

---

# Route

`/teams` — Team List

## Page Goal

[冻结]

让用户既可以找到正在招人的团队，也可以看到正在寻找队伍的学生。

## Page Structure

[冻结核心分类 + 默认筛选]

- 页面标题 / 简短说明
- 一级分类
- 可选筛选
- 组队列表
- Empty / Error State

一级分类 [冻结]：
- 全部
- 团队找成员
- 学生找队伍

可选筛选 [默认]：
- 按关联竞赛
- 按状态
- 按截止时间

## Required Information

Team Seeking Members [冻结]：
- `[团队找成员]`
- 发起团队 / 老师 / 负责人
- 关联竞赛
- 核心需求
- 还缺多少人（如有）
- 截止时间

Student Seeking Team [冻结]：
- `[学生找队伍]`
- 非敏感基本背景
- 目标竞赛
- 技能 / 能力摘要
- 希望加入怎样的团队

## Primary Actions

[冻结]

- 点击组队信息 → `/teams/:id`

## Secondary Actions

[冻结 / 默认]

- 切换“全部 / 团队找成员 / 学生找队伍” [冻结]
- 使用关联竞赛 / 状态 / 截止时间筛选 [默认，如启用]

## States

[冻结工程要求]

- Loading
- Success
- Empty
- Error
- 字段缺失
- 可选信息为空
- 过期招募
- 长文本
- 5 条 / 50 条数据

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 保持相同分类与业务语义。
- Mobile 不允许横向溢出。
- 不从视觉参考图新增人才卡、多列人才池等结构。
- 视觉呈现可遵循 `design01.md` 的紧凑列表行、轻边框、低阴影原则。

## Privacy / Business Constraints

[冻结]

列表页绝不直接展示：
- 微信
- 手机号
- 私人邮箱
- QQ号
- 其他可直接用于骚扰的私人联系方式

两种组队类型必须保持明显区分。

## Out of Scope

[冻结]

- 完整 Talent Pool
- 简历库
- 用户能力画像
- 复杂人才搜索
- 私信
- 登录
- 直接联系方式曝光

## Acceptance Criteria

- AC-T01：组队列表至少支持“全部 / 团队找成员 / 学生找队伍”。
- AC-T02：两种类型具有明显可辨识标签。
- AC-T03：卡片不出现私人联系方式。
- AC-T04：每条信息可进入详情。

---

# Route

`/teams/:id` — Team Detail

## Page Goal

[冻结]

帮助用户判断：

> 我适不适合和这个团队 / 学生建立联系？

## Page Structure

[默认]

1. 类型 / Summary
2. 关联竞赛
3. 状态与时间
4. 详情内容（根据组队类型）
5. 联系 CTA

## Required Information

公共字段 [默认]：
- 类型
- 关联竞赛
- 状态
- 发布时间 / 截止时间

团队找成员详情 [默认]：
- 团队 / 发起方介绍
- 已有成员情况
- 需要人数
- 需要的能力
- 不要求什么（仅在投稿者提供时）
- 预计投入时间
- 当前准备阶段
- 其他要求

学生找队伍详情 [默认]：
- 年级 / 学院等非敏感背景
- 想参加的竞赛
- 个人技能
- 已有经验
- 可投入时间
- 希望寻找怎样的队伍
- 自我介绍

联系 CTA [冻结]：
页面可以表达：
- “我想加入”
- “建立联系”
- “进入 VOIDHAVEN 联系流程”

具体 CTA 文案可由工程实现选择，但不得改变“平台中转、不直出私人联系方式”的业务含义。

## Primary Actions

[冻结]

- 进入 VOIDHAVEN 联系中转流程

## Secondary Actions

[未冻结]

- 规格要求页面说明“关联竞赛”，但未明确冻结“关联竞赛是否必须可点击返回竞赛详情”。

如实现需要决定该行为，记录 `OPEN_QUESTION`，不得自行升级为正式产品规则。

## States

[冻结工程要求]

- Loading
- Success
- Error
- 不存在 ID → 404
- 字段缺失
- 可选信息为空
- 过期招募

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 保持同一信息语义。
- 不从视觉参考新增双栏详情、个人档案侧栏、人才简历布局等产品结构。
- 长自我介绍、长需求文本需具备内容韧性。

## Privacy / Business Constraints

[冻结]

- 页面不得直接暴露私人联系方式。
- 联系动作必须进入 VOIDHAVEN 中转。
- 具体中转形式为 [待定]，当前规格允许的候选包括：
  - 社群入口
  - 管理员中转
  - 申请说明
- 不得自行实现复杂实名认证或私信系统。

## Out of Scope

[冻结]

- 私信
- 直接微信 / 手机号 / QQ / 私人邮箱展示
- 完整个人主页
- 完整 Talent Pool
- 简历展示系统
- 复杂用户身份体系

## Acceptance Criteria

- AC-TD01：用户明确知道当前是“团队找成员”还是“学生找队伍”。
- AC-TD02：页面说明关联竞赛。
- AC-TD03：信息足够支持用户判断是否值得进一步联系。
- AC-TD04：联系 CTA 进入 VOIDHAVEN 中转流程，不直接暴露私人联系方式。

---

# Route

`/submit` — Submit

## Page Goal

[冻结]

即使 V0 暂时没有正式投稿后台，也要让用户知道：

> 这个平台允许我贡献信息，而且提交有规范。

## Page Structure

[冻结类型 + 默认内容组织]

- 页面说明
- 三类投稿入口 / 说明
  1. 提交竞赛信息
  2. 团队找成员
  3. 学生找队伍
- 每类投稿所需信息清单
- 审核说明
- V0 指定提交渠道

三类内容具体使用 Tab、Card、Accordion 或连续 Section 展示，现有产品规格未冻结；不得在本文件自行决定。

## Required Information

投稿类型 [冻结]：
1. 提交竞赛信息
2. 团队找成员
3. 学生找队伍

竞赛提交规范 [默认]：
- 竞赛名称
- 官方链接
- 官方通知来源
- 报名时间
- 比赛时间
- 适用对象
- 重要说明

团队招募提交规范 [默认]：
- 关联竞赛
- 团队介绍
- 当前人数
- 需要人数
- 需要能力
- 截止时间
- 提交人身份
- 供管理员核验的联系方式

学生找队提交规范 [默认]：
- 目标竞赛
- 学院 / 年级
- 技能
- 经验
- 可投入时间
- 希望寻找的团队
- 供管理员核验的联系方式

审核说明 [冻结]：
- 信息需经过管理员审核后发布。

## Primary Actions

[冻结流程，渠道待定]

阅读投稿规范
→ 通过指定渠道提交
→ 管理员人工审核
→ 管理员代发布

## Secondary Actions

无新增冻结操作。

## States

非数据主页面。

至少考虑：
- 正常可访问
- 外部提交渠道不可用时的错误反馈（具体表现未冻结）

不需要：
- 投稿状态列表
- 审核进度状态页

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 均需可读、可操作。
- 三类投稿语义不能因设备变化。
- 不从 `design01.md` 推断新的多栏投稿工作台。

## Privacy / Business Constraints

[冻结]

- V0 不要求用户创建账户才能了解投稿方式。
- 供管理员核验的联系方式属于提交信息，不应公开展示。
- 管理员人工审核后代发布。
- 页面不得变成完整 Contributor Dashboard。

## Out of Scope

[冻结]

- 投稿账户
- 登录
- 投稿后台
- 审核后台
- 投稿状态工作流界面
- 自动发布
- 复杂身份认证

## Acceptance Criteria

- AC-S01：投稿页明确区分三类投稿。
- AC-S02：每种投稿提供所需信息清单。
- AC-S03：页面明确说明信息需经管理员审核后发布。
- AC-S04：用户无需创建账户即可了解投稿方式。

---

# Route

`/join` — Join Us

## Page Goal

[冻结]

用于未来组建 VOIDHAVEN 团队。

## Page Structure

[默认]

- 页面介绍：为什么需要团队
- 当前需要的角色
- 各角色可以贡献什么
- 协作方式
- GitHub
- 加入 / 联系入口

## Required Information

[默认]

潜在角色可包含：
- 前端
- 后端
- UI / UX
- 竞赛信息维护
- 内容运营
- 社群运营
- 内容贡献者

以及：
- 为什么需要团队
- 每种角色可以贡献什么
- 协作方式
- GitHub
- 加入 / 联系入口

## Primary Actions

[默认]

- 打开 GitHub
- 进入加入 / 联系入口

## Secondary Actions

[冻结关系]

- 通过 Header / Footer 到达本页。
- 本页与 About 独立存在。

## States

非数据主页面。

至少考虑：
- 正常内容
- 外部 GitHub / 联系入口不可用时的错误反馈（具体表现未冻结）

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 保持同一内容语义。
- 不从视觉参考图推导新的团队招募流程或申请系统。

## Privacy / Business Constraints

[冻结]

- Join 必须是独立页面。
- 首页不展开完整团队招募故事。
- 不因“加入团队”自行引入账户、申请后台或个人档案系统。

## Out of Scope

[冻结]

- 招聘 ATS
- 用户账户
- 简历库
- 完整申请工作流
- 权限后台
- 自动审批

## Acceptance Criteria

- AC-J01：Join 与 About 独立存在。
- AC-J03：Join 页面能让潜在贡献者知道可以如何参与。
- AC-J04：GitHub / 项目联系方式存在清晰入口。

---

# Route

`/about` — About

## Page Goal

[冻结]

承载完整品牌与项目故事。

## Page Structure

[默认]

- 名称与品牌含义
- Slogan
- 为什么发起
- 想解决什么问题
- 开源 / 分享 / 传承理念
- 项目阶段
- GitHub / 项目入口

## Required Information

[默认]

- 求索袋底洞 / VOIDHAVEN 名称含义
- `A haven for seekers.`
- 为什么发起
- 想解决什么问题
- 开源、分享、传承理念
- 项目当前阶段
- GitHub / 项目入口

## Primary Actions

[默认]

- 打开 GitHub / 项目入口

## Secondary Actions

[冻结关系]

- 通过 Header / Footer 到达。
- 完整项目故事放在 About，而非 Home。

## States

非数据主页面。

至少考虑：
- 正常内容
- 外部项目入口不可用时的错误反馈（具体表现未冻结）

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 保持内容语义。
- `design01.md` 只约束视觉表现，不得据此增删品牌内容结构。

## Privacy / Business Constraints

[冻结]

- About 是完整品牌 / 项目故事的主要承载位置。
- 不将完整项目故事回流到首页主体。

## Out of Scope

[冻结]

- 创始人社交主页体系
- 博客
- 项目动态流
- 评论
- 用户社区功能

## Acceptance Criteria

- AC-J01：About 与 Join 独立存在。
- AC-J02：完整项目故事主要存在于 About，而非首页。
- AC-J04：GitHub / 项目联系方式存在清晰入口。

---

# Route

`N/A` — Loading State

## Page Goal

[冻结工程要求]

在数据请求未完成时保持页面结构可理解，避免空白或结构跳失。

## Page Structure

不得新增独立业务页面。

Loading 作为以下页面 / 模块的内嵌状态：
- Home 数据区域
- Competition List
- Competition Detail
- Team List
- Team Detail

具体 Skeleton / Spinner 形式未冻结，由视觉系统与工程实现决定。

## Required Information

- 明确表达“内容正在加载”的状态。
- 不需要伪造真实业务数据。

## Primary Actions

通常无。

## Secondary Actions

未冻结。

## States

当前即 Loading。

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 均不能因 Loading 状态发生明显溢出或核心壳层丢失。

## Privacy / Business Constraints

- 不显示虚假的私人信息。
- 不把 Mock 内容伪装成已加载真实内容。

## Out of Scope

- 新业务入口
- 个性化推荐
- 广告
- 登录提示

## Acceptance Criteria

- AC-G04：所有数据页面存在 Loading 表现。
- Header / Footer 与页面基本结构在 Loading 时保持可理解。

---

# Route

`N/A` — Empty State

## Page Goal

[冻结工程要求]

当数据查询成功但结果为空时，明确告诉用户“当前没有内容”，而不是显示空白页面。

## Page Structure

Empty 作为数据区域内嵌状态，不新增独立产品页面。

必须覆盖：
- Competition List 空结果
- Team List 空结果
- Competition Detail 的“当前组队为空”
- Home 单个数据区为空的情况

具体文案与插画形式未冻结。

## Required Information

- 明确“当前无内容 / 无匹配结果”。
- Competition Detail 无组队时，应让用户看到提交组队信息入口 [冻结]。

## Primary Actions

[冻结，仅 Competition Detail 特例]

- 无组队信息 → 可看到“提交组队信息”入口。

其他 Empty State 的主操作未冻结。

## Secondary Actions

未冻结。

## States

当前即 Empty。

## Responsive Behavior

[冻结 Global]

- Empty State 不改变页面核心语义。
- Desktop / Tablet / Mobile 不出现异常大片空白或布局溢出。

## Privacy / Business Constraints

- 不为填充页面而虚构内容。
- 不自动引入推荐算法或额外业务入口。

## Out of Scope

- 虚构推荐
- 热门内容兜底
- AI 推荐
- 登录提示

## Acceptance Criteria

- AC-G04：所有数据页面存在 Empty 表现。
- AC-C05：竞赛列表为空时显示明确 Empty State。
- AC-CD04：竞赛无组队时明确展示暂无组队，并允许看到提交组队信息入口。

---

# Route

`N/A` — Error State

## Page Goal

[冻结工程要求]

当数据加载或页面依赖失败时，提供明确文本错误反馈，不让用户面对空白或不可理解界面。

## Page Structure

Error 作为页面或数据区域内嵌状态。

具体错误组件、重试按钮样式与错误文案未冻结。

## Required Information

[默认可访问性要求]

- 有文本错误反馈。
- 不仅依赖颜色表达错误。

## Primary Actions

重试 / 返回等操作未在产品规格中冻结。

如实现需要决定，保持最简单、可替换，并记录非阻塞实现说明；不得新增业务流程。

## Secondary Actions

Global Header / Footer 仍可用于离开当前页面。

## States

当前即 Error。

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 均可读。
- 错误内容不得造成横向溢出。

## Privacy / Business Constraints

- 错误信息不得泄露私人联系方式或后端敏感实现细节。
- 不将错误状态变成登录 / 注册引导。

## Out of Scope

- 复杂故障诊断 UI
- 用户工单系统
- 登录兜底
- AI 排障助手

## Acceptance Criteria

- AC-G04：所有数据页面存在 Error 表现。
- 可访问性 [默认]：存在文本错误反馈，不仅依赖颜色表达状态。

---

# Route

`UNMATCHED_ROUTE` — 404

## Page Goal

[冻结工程要求]

当用户访问不存在的路由，或详情页 ID 不存在时，明确表达资源 / 页面不存在，并允许用户返回有效页面。

## Page Structure

- 404 / Not Found 标识
- 简短说明
- 返回有效页面的入口

404 的独立 URL、是否保留原地址、Router fallback 具体实现均未冻结。

## Required Information

- 页面 / 资源不存在
- 可返回有效页面

具体文案未冻结。

## Primary Actions

返回何处未在产品规格中明确冻结。

实现前见 `OPEN_QUESTION OQ-003`。

## Secondary Actions

Global Header / Footer 可继续提供有效导航（若当前实现保留 Global Shell）。

## States

当前即 404。

详情页必须覆盖：
- 不存在 Competition ID
- 不存在 Team ID

## Responsive Behavior

[冻结 Global]

- Desktop / Tablet / Mobile 可读、可操作。
- 不发生布局溢出。

## Privacy / Business Constraints

- 不暴露内部路由、数据库 ID 规则或后端异常细节。
- 不新增推荐内容、登录流程或其他 V0 外功能。

## Out of Scope

- 404 推荐算法
- 个性化内容推荐
- AI 搜索
- 登录兜底

## Acceptance Criteria

- 全局状态要求：不存在 ID / 路由必须有 404 表现。
- Competition Detail / Team Detail 的不存在 ID 不得显示为普通 Empty State。
- 页面不能出现明显 Console Error。

---

# OPEN_QUESTION

以下内容在现有规格中仍为 [待定] 或未冻结。本文件不自行决定。

## OQ-001 — Team Detail 联系中转的最终形式

**状态**：`[待定]`

现有规格允许候选：
- 社群入口
- 管理员中转
- 申请说明

**影响**：
- `/teams/:id` 联系 CTA 最终跳转目标 / 行为。

**处理要求**：
- 不得直接暴露私人联系方式。
- 不得擅自升级为私信、账户、复杂申请系统。

---

## OQ-002 — Submit 的 V0 指定提交渠道

**状态**：`[待定]`

当前只冻结流程：

`阅读投稿规范 → 通过指定渠道提交 → 管理员人工审核 → 管理员代发布`

但“指定渠道”的具体形式尚未冻结。

**影响**：
- `/submit` 最终 CTA 的 target / href / 外部入口。

**处理要求**：
- 不得自行增加投稿账户、Contributor Dashboard 或审核后台。

---

## OQ-003 — 404 的最终路由与返回目标

**状态**：未冻结

现有规格只要求：
- 存在 404；
- 不存在 ID 必须进入 404 表现。

未明确：
- 是否使用独立 `/404`；
- unmatched route 是否保持原 URL；
- 404 主按钮固定返回首页还是返回上一有效层级。

**影响**：
- Router fallback 与 404 主操作。

**处理要求**：
- 作为路由工程细节保留，不改变 V0 产品信息架构。

---

## OQ-004 — Team Detail 的关联竞赛是否必须可点击

**状态**：未冻结

现有规格冻结“页面能说明关联竞赛”，但未冻结关联竞赛本身必须可点击跳回 `/competitions/:id`。

**影响**：
- Team Detail 的 Secondary Action。

**处理要求**：
- 不在本文件擅自升级为冻结交互。

---

# Final Guardrails

实现 `page-spec.md` 时保持以下最高优先级约束：

1. 用户进入后先看到有用信息，而不是大段品牌故事。
2. 竞赛是发现机会的入口。
3. 竞赛与组队直接联动。
4. 组队同时支持“团队找成员 / 学生找队伍”。
5. 平台承担连接与中转，但公开页面不暴露私人联系方式。
6. `design01.md` 只控制视觉关系，不改变页面信息架构。
7. `[默认]` 不得在实现过程中自动升级为 `[冻结]`。
8. `[待定]` 与未冻结行为保留为 `OPEN_QUESTION`。
