async function getData() {
  // Assume fetching data or using environment variables
  return {
    siteType: process.env.SITE_TYPE || "Banana",
  };
}

export default async function Home() {
  const { siteType } = await getData();
  return (
    <h1
      style={{
        backgroundColor: `var(--${siteType.toLowerCase()}-brand-color-primary)`,
      }}
    >
      Welcome to {siteType || "Default"}
    </h1>
  );
}
