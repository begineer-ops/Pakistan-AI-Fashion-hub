import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with custom user agent and correct API key
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini AI client successfully initialized on backend server.");
  } catch (error) {
    console.error("Error initializing Gemini AI:", error);
  }
} else {
  console.log("Warning: GEMINI_API_KEY environment variable is not defined or is placeholder. Falling back to structured default replies.");
}

// API endpoint for AI Styling Advice
app.post("/api/stylist", async (req, res) => {
  const { occasion, gender, stylePreference, bodyType, budgetRange, query } = req.body;

  const prompt = `
Occasion: ${occasion || "Casual / General"}
Gender Focus: ${gender || "Any"}
Style Category: ${stylePreference || "Modern/Traditional Fusion"}
Body / Fit Preference: ${bodyType || "Standard fit"}
Budget Level (PKR): ${budgetRange || "Flexible"}
User's query/special request: "${query || "What fits best for this occasion in Pakistan?"}"

Recommend the best styling advice. Suggest typical Pakistani elements (such as Shalwar Kameez, Sherwani, Prince Coat, Kurta, Lehenga, Peshawari wear, Raw silk, unstitched Lawn, Karandi, organza, tilla embroidery, or Gota work). Include general coordination and custom accessories (like Peshawari chappals, khussas, dupattas, or pocket squares). Mention that we have 30 top brands (like J., Khaadi, Sapphire, Maria B, HSY, Bareeze, Amir Adnan, Gul Ahmed Ideas, Limelight, Generation, Outfitters, etc.) and custom tailors in Karachi, Lahore, Islamabad, Quetta, Peshawar, Faisalabad. Keep the response encouraging, professional, structured in clean markdown, and easy to read. Output in clear Urdu-English blended or English text. Ensure it is highly readable and aesthetic.
  `;

  if (!ai) {
    // Elegant fallback if API key is not ready
    return res.json({
      text: `### 🌟 Style Recommendation (Local AI Companion mode)

It looks like the **Gemini API Key** is not fully activated yet in Settings > Secrets. No worries! Here is our curated styling advice for you:

#### **👗 Curated Pakistani Styling Strategy (${gender || "Gents & Ladies"})**
- **For ${occasion || "this Special Occasion"}:**
  - **Ladies:** A classic **Chiffon or Organza Kurti** with dynamic Gota work paired with straight pants and an ethnic printed silk dupatta. Look at *Khaadi*, *Sapphire*, or *Maria B.* for this.
  - **Gents:** An elegant slub cotton or wash-and-wear **Shalwar Kameez** with a crisp ban collar. Layer it with a contrasting raw silk **Waistcoat** in Ochre Gold or Navy. Look up *J. Junaid Jamshed*, *Amir Adnan*, or *Royal Tag*.
- **Fabric Highlight:** Opt for light breathable **Lawn** or **Wash-and-Wear Cotton** for summer days, and premium **Karandi** or **Velvet** for luxurious night functions.
- **Accessories:** Complete with handmade Lahore/Peshawar leather **Khussas** or classic **Peshawari Chappals**.

---
*💡 System Note: To unlock real-time Gemini AI personal suggestions, please add your valid \`GEMINI_API_KEY\` inside the Secrets panel.*`
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: `You are the chief "AI Fashion Guru & Couture Consultant" for the Pakistan AI Fashion Hub. 
        You specialize in both Ladies and Gents Pakistani outfits. 
        You are highly expert in traditional Pakistani wear (Sherwanis, Kurta-Shalwar, Prince Coats, Lehenga, Saree, Shalwar Kameez, Peshawari styles) and Western fashion blends (blazers, casual shirts, streetwear).
        Always emphasize nationwide delivery across Pakistan and provide top-notch, respectful styling advice. 
        Represent Pakistani culture beautifully, utilizing gorgeous local terminology (ajrak, phulkari, jamawar, raw silk, lawn, cambric, chiffons, tilla, gota).`
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API call failed:", error);
    res.status(500).json({ error: "Sorry, styling advisor is currently updating. Please try again soon.", details: error.message });
  }
});

// Serve static build or mount Vite in dev mode
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server starting on port ${PORT}...`);
    console.log(`Pakistan Fashion Platform dev environment ready on http://localhost:${PORT}`);
  });
}

startServer();
