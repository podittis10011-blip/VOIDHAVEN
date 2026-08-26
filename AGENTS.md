# VOIDHAVEN V0

## 规范优先级

1. `docs/spec/spec-governance.md`
2. `docs/spec/VOIDHAVEN V0 前端开发说明.md` 中的 `[冻结]` 决策
3. `docs/spec/page-spec.md` 的逐页结构
4. `docs/spec/design01.md` 的视觉规则
5. `docs/spec/mock-data-contract.md` 的前端类型与 Service 边界

## 实施边界

- 仅实现 V0 已确认功能。
- 不实现后端、数据库、登录、账户、私信、审核后台或部署。
- 所有竞赛和组队业务数据必须通过 Mock Service 提供。
- 组件不得直接读取 fixture、硬编码业务内容或直接请求 HTTP API。
- 公开页面不得包含私人联系方式。
- `OPEN_QUESTION` 保持可配置占位，不自行决定。