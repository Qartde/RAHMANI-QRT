// GOOGLE CMD


const axios = require("axios");
const { cmd } = require("../command");

cmd({
    pattern: "google",
    alias: ["gsearch", "search"],
    desc: "Search Google for a query.",
    category: "tools",
    react: "🌐",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Vérifiez si un mot-clé est fourni
        if (args.length === 0) {
            return reply(`❗ *Please provide a search query.*\n\n*Example:*\n.google Rahman md Bot`);
        }

        const query = args.join(" ");
        const apiKey = "AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI"; // Votre clé API Google
        const cx = "baf9bdb0c631236e5"; // Votre ID de moteur de recherche personnalisé
        const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

        // Appel API
        const response = await axios.get(apiUrl);

        // Vérifiez si l'API a renvoyé des résultats
        if (response.status !== 200 || !response.data.items || response.data.items.length === 0) {
            return reply(`❌ *No results found for:* ${query}`);
        }

        // Format et envoi des résultats
        let results = `🔎 *Google Search Results for:* "${query}"\n\n`;
        response.data.items.slice(0, 5).forEach((item, index) => {
            results += `*${index + 1}. ${item.title}*\n${item.link}\n${item.snippet}\n\n`;
        });

        reply(results.trim());
    } catch (error) {
        console.error(error);
        reply(`⚠️ *An error occurred while fetching search results.*\n\n${error.message}`);
    }
});
