# VOIDHAVEN V0 — Frontend Mock Data Contract

> **Purpose**：为 V0 前端提供稳定、可替换的业务数据边界。Mock 数据与未来 HTTP 数据都必须映射到本文定义的前端领域模型；页面与展示组件不得依赖 Mock 文件结构、后端 DTO 或直接 `fetch`。
>
> **Scope**：仅覆盖当前 V0 已存在的动态业务数据：竞赛与组队。本文不是数据库设计、Spring Boot API 设计、投稿后台设计或用户账户设计。

## 1. 契约原则

1. **产品含义优先**：字段仅服务于已定义的竞赛发现、竞赛详情、双向组队与公开隐私边界。
2. **Mock 与 HTTP 同形**：页面只认识本文的 `Competition*` 与 `Team*` 类型；切换数据来源时只替换 Service 实现。
3. **不为未来预埋复杂性**：V0 不定义账户、权限、私信、收藏、热度、分页游标、投稿审核状态或人才画像。
4. **公开数据默认安全**：公开领域类型中不允许出现微信、手机号、私人邮箱、QQ 或其他直接联系方式。
5. **结构稳定，内容可缺省**：契约字段必须存在；可靠信息暂缺时使用 `null`，集合使用空数组 `[]`，而不是省略字段。

## 2. 通用约定

```ts
export type EntityId = string; // 不向 UI 暴露数据库规则
export type LocalDate = string; // YYYY-MM-DD，适用于报名、比赛、截止日期
export type IsoDateTime = string; // ISO 8601，适用于创建与更新时间

export interface CompetitionReference {
  id: EntityId;
  name: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}
```

- `EntityId` 是不透明字符串；前端只能用于路由与查询，不得解析其含义。
- `LocalDate` 表示业务日期，不包含时区；展示层负责格式化。
- `IsoDateTime` 用于数据新鲜度等时间戳，不用于替代比赛业务日期。
- 列表与详情共享同一实体 ID。详情不存在时返回 `null`，由路由层渲染 404；空列表返回 `[]`，由页面渲染 Empty State。

## 3. 竞赛领域模型

```ts
export type CompetitionStatus =
  | 'REGISTRATION_OPEN'
  | 'UPCOMING'
  | 'ENDED';

export type CompetitionCategory =
  | 'ALGORITHM_PROGRAMMING'
  | 'MATHEMATICAL_MODELING'
  | 'INNOVATION_ENTREPRENEURSHIP'
  | 'DESIGN_ENGINEERING'
  | 'OTHER';

export interface CompetitionSummary {
  id: EntityId;
  name: string;
  category: CompetitionCategory;
  status: CompetitionStatus;
  registrationDeadline: LocalDate | null;
  eligibleAudienceLabel: string | null;
  teamPostCount: number;
  updatedAt: IsoDateTime;
}

export type OfficialLinkType = 'WEBSITE' | 'REGISTRATION' | 'NOTICE';

export interface OfficialLink extends ExternalLink {
  type: OfficialLinkType;
}

export interface CompetitionDetail extends CompetitionSummary {
  levelLabel: string | null;
  registrationStartsOn: LocalDate | null;
  competitionStartsOn: LocalDate | null;
  competitionEndsOn: LocalDate | null;
  eligibility: {
    grades: string[];
    majors: string[];
    institutionRestrictions: string[];
    otherRequirements: string[];
  };
  officialLinks: OfficialLink[];
  introduction: string | null;
  ruleSummary: string | null;
  source: {
    name: string;
    url: string | null;
  };
}
```

### 字段使用边界

- 首页与竞赛列表只使用 `CompetitionSummary`；`teamPostCount` 是已发布、公开可见且 `status = 'OPEN'` 的当前组队信息数量。
- 竞赛详情使用 `CompetitionDetail`；关联组队不嵌入详情对象，而是通过 `TeamService.list({ competitionId, status: 'OPEN' })` 获取。这避免竞赛详情与组队详情出现两套可漂移的数据副本。
- `status` 是当前用于筛选与展示的前端业务状态；列表默认排序规则为“`REGISTRATION_OPEN` 优先，再按 `registrationDeadline` 从近到远”。不定义热度字段或排行字段。
- `officialLinks` 仅收录官方或明确的信息来源入口；站内 `introduction` 与 `ruleSummary` 只作阅读辅助。

## 4. 组队领域模型

```ts
export type TeamPostType =
  | 'TEAM_SEEKING_MEMBER'
  | 'STUDENT_SEEKING_TEAM';

export type TeamPostStatus = 'OPEN' | 'CLOSED' | 'EXPIRED';

interface TeamPostBase {
  id: EntityId;
  type: TeamPostType;
  status: TeamPostStatus;
  competition: CompetitionReference;
  headline: string;
  createdAt: IsoDateTime;
  updatedAt: IsoDateTime;
  deadline: LocalDate | null;
}

export interface TeamSeekingMemberSummary extends TeamPostBase {
  type: 'TEAM_SEEKING_MEMBER';
  organizerName: string;
  requiredSkills: string[];
  remainingSlots: number | null;
}

export interface StudentSeekingTeamSummary extends TeamPostBase {
  type: 'STUDENT_SEEKING_TEAM';
  backgroundLabel: string;
  skills: string[];
  desiredTeamSummary: string;
}

export type TeamSummary =
  | TeamSeekingMemberSummary
  | StudentSeekingTeamSummary;

export interface TeamSeekingMemberDetail extends TeamSeekingMemberSummary {
  introduction: string | null;
  currentMemberDescription: string | null;
  nonRequirements: string[];
  expectedCommitment: string | null;
  preparationStage: string | null;
  additionalRequirements: string | null;
}

export interface StudentSeekingTeamDetail extends StudentSeekingTeamSummary {
  experienceSummary: string | null;
  availability: string | null;
  introduction: string | null;
}

export type TeamDetail =
  | TeamSeekingMemberDetail
  | StudentSeekingTeamDetail;
```

### 字段使用边界

- `type` 是可判别联合的判别字段；组件必须据此渲染“团队找成员”或“学生找队伍”，不得以标题文本猜测类型。
- `competition` 在每条公开组队信息中均为必需关联，用于首页、列表和详情展示。组队详情是否把它做成可点击链接，仍服从 `page-spec.md` 的 `OQ-004`。
- `headline` 是公开、可扫描的短标题；不承载联系方式或敏感身份信息。
- `TeamPostStatus` 独立于 `deadline`：过期数据可保留并标记为 `EXPIRED`，前端不得仅凭本机日期擅自修改业务状态。
- 两种详情类型只包含规格要求的公开字段；任何管理员核验联系方式都不属于此契约。

## 5. 查询与 Service Contract

```ts
export interface CompetitionListQuery {
  status?: CompetitionStatus;
  category?: CompetitionCategory;
  limit?: number;
}

export interface TeamListQuery {
  type?: TeamPostType;
  status?: TeamPostStatus;
  competitionId?: EntityId;
  deadlineBefore?: LocalDate;
  limit?: number;
}

export interface CompetitionService {
  list(query?: CompetitionListQuery): Promise<CompetitionSummary[]>;
  getById(id: EntityId): Promise<CompetitionDetail | null>;
}

export interface TeamService {
  list(query?: TeamListQuery): Promise<TeamSummary[]>;
  getById(id: EntityId): Promise<TeamDetail | null>;
}
```

### 调用规则

- 首页使用 `CompetitionService.list({ limit })` 与 `TeamService.list({ status: 'OPEN', limit })` 获取两个同级信息区；不新增首页专用聚合接口。
- 竞赛详情使用 `CompetitionService.getById(id)`，并使用 `TeamService.list({ competitionId: id, status: 'OPEN' })` 获取当前组队。
- 竞赛与组队列表将“全部”映射为不传相应筛选字段，而不是传递虚构的 `ALL` 枚举值。
- V0 的 `list` 返回所有匹配结果；不定义分页、游标、总数、热度或推荐参数。页面的“当前结果数量”由返回数组长度得到。
- Mock Service 可以异步延迟或抛出受控错误以验证 Loading / Error；成功空结果必须返回 `[]`。

## 6. 静态内容与明确排除项

下列内容在 V0 中由前端静态内容或外部配置提供，不进入动态 Mock Service：

- Header / Footer 的固定导航和品牌文案；
- 首页 Hero 文案与 CTA 文案；
- `/submit` 的三类投稿说明、审核说明与信息清单；
- `/join` 与 `/about` 的项目介绍和角色说明；
- GitHub、社群、联系、投稿渠道等外部 URL。

其中 `page-spec.md` 的以下问题仍保持 `OPEN_QUESTION`：

- `OQ-001`：Team Detail 联系中转的最终形式；
- `OQ-002`：Submit 的 V0 指定提交渠道；
- `OQ-003`：404 的最终路由与返回目标；
- `OQ-004`：Team Detail 的关联竞赛是否必须可点击。

在得到产品决定前，Mock Contract 不定义提交 Payload、联系人字段、私信模型、账户模型或审核状态模型。

## 7. Mock Fixture 与状态覆盖

Mock 数据必须至少覆盖以下可重复场景：

| 场景 | 最小覆盖 |
|---|---|
| 竞赛列表 | 三种 `CompetitionStatus`、五类分类中的多个示例、长名称、缺失的可选字段、已结束竞赛。 |
| 竞赛详情 | 含三类官方链接的详情；一个存在关联组队的竞赛；一个 `teamPostCount = 0` 的竞赛。 |
| 组队列表 | 两种 `TeamPostType`、`OPEN` / `CLOSED` / `EXPIRED` 状态、长技能或需求文本、缺失的截止日期或剩余人数。 |
| 组队详情 | 两种判别联合的详情字段；不含任何私人联系方式。 |
| 页面状态 | 空数组、未知 ID 返回 `null`、受控 Service 错误、异步延迟。 |

Fixture 中的 `teamPostCount` 必须与同一份 Mock 组队数据中、按 `competition.id` 关联且 `status = 'OPEN'` 的公开记录数一致。

## 8. 实现与未来 HTTP 替换

建议目录职责如下：

```text
src/
├── types/          # 本文的领域类型与查询类型
├── services/       # CompetitionService / TeamService 接口
├── mock/           # fixtures 与 Mock*Service 实现
└── features/       # 页面组合多个 Service；组件只接收领域类型
```

- `MockCompetitionService` 与 `MockTeamService` 实现本文接口，作为 V0 开发默认数据源。
- 后续 `HttpCompetitionService` 与 `HttpTeamService` 同样实现本文接口，在 Service 内部将 HTTP DTO 映射为本文类型。
- UI 组件、页面路由和筛选控件不得导入 Mock fixture、HTTP DTO 或直接发起网络请求。
- 后端开始对接时，如真实接口字段无法映射到本文契约，应先更新正式 API Contract 并评审影响；不得让展示组件兼容多套数据形状。

## 9. 验收清单

- 首页、竞赛列表、竞赛详情、组队列表、组队详情仅消费本文定义的领域类型。
- 四个关键类型 `CompetitionSummary`、`CompetitionDetail`、`TeamSummary`、`TeamDetail` 可完整支持既有页面要求。
- Mock 数据不含任何私人联系方式，也不伪造账户、私信、审核、热度或推荐能力。
- 同一页面切换 Mock Service 与 HTTP Service 时，展示组件与路由无需修改。
- Loading、Empty、Error、404 与长文本 / 缺省字段均可通过受控 Mock 场景验证。
