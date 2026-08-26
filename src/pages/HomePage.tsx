// 主页页面

export function HomePage() {
  return (
    <section className="page page--centered" aria-labelledby="home-title">
      <p className="eyebrow">VOIDHAVEN · V0</p>
      <h1 id="home-title">
        求索袋底洞
        <span>VOIDHAVEN</span>
      </h1>
      <p className="page-intro">
        为探索者连接竞赛、项目与协作机会。当前仅完成工程骨架，下一阶段将接入前端 Mock Data
        Contract。
      </p>
    </section>
  );
}
