import Button from "../components/Button";

async function getData() {
  // Assume fetching data or using environment variables
  return {
    siteType: process.env.SITE_TYPE || "",
  };
}

export default async function Home() {
  const { siteType } = await getData();
  return (
    <h1>
      Welcome to {siteType}
      <Button brand={siteType}>Button Text</Button>
    </h1>
  );
}
