import { fetchArticles } from "../../../lib/hygraph";

export async function GET() {
    try {
        const articles = await fetchArticles(); // Fetch from Hygraph
        // console.log(articles)
        return Response.json(articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        return Response.json({ error: "Failed to fetch articles" }, { status: 500 });
    }
}