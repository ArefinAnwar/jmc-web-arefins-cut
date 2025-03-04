import { GraphQLClient } from "graphql-request";

const HYGRAPH_ENDPOINT = "https://ap-south-1.cdn.hygraph.com/content/cm7qeh00c00ov08uvxmdglajs/master"; // Replace with your Hygraph API URL

export async function fetchArticles() {
  const query = `
    {
      jmcWebs{
        slug
        articleTitle
        articleBody
        articleImage {
          url
        }
      }
    }
  `;

  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  console.log("api")
  console.log(data)
  return data.jmcWebs;
}
