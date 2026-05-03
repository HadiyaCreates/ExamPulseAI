const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 AI ANALYSIS (NO HARDCODE SUBJECT)
app.post("/api/analyze", (req, res) => {
  try {
    const { text } = req.body;

    if (!text || text.length < 50) {
      return res.json({
        subject: "Unknown",
        sortedTopics: [],
        studyPlan: [],
        focusScore: 0,
      });
    }

    // 🔥 CLEAN TEXT
    const words = text
      .replace(/[^a-zA-Z ]/g, "")
      .split(/\s+/);

    // 🔥 WORD FREQUENCY
    const freq = {};

    words.forEach((word) => {
      if (word.length > 5) {
        freq[word] = (freq[word] || 0) + 1;
      }
    });

    // 🔥 SORT TOPICS
    const sortedTopics = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([topic, count]) => ({
        topic,
        count,
        priority:
          count > 15 ? "HIGH" :
          count > 7 ? "MEDIUM" : "LOW",
      }));

    // 🔥 AUTO SUBJECT (NO HARDCODE)
    const subject =
      sortedTopics.length > 0
        ? sortedTopics[0].topic
        : "General";

    // 🔥 STUDY PLAN
    const studyPlan = sortedTopics.map((t, i) => ({
      day: `Day ${i + 1}`,
      topic: t.topic,
    }));

    const focusScore =
      sortedTopics.length > 0
        ? Math.min(100, sortedTopics[0].count * 5)
        : 0;

    res.json({
      subject,
      sortedTopics,
      studyPlan,
      focusScore,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error" });
  }
});

app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);