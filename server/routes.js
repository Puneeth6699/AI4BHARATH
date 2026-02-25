const express = require('express');
const router = express.Router();

// Mock Data
const MOCK_IDEAS = [
    {
        id: 1,
        title: "The Shift to AI-Powered Workplaces",
        description: "Explore how AI tools are reshaping daily workflows, reducing repetitive tasks, and enabling employees to focus on creative problem-solving.",
        angle: "Future of Work"
    },
    {
        id: 2,
        title: "Why Soft Skills Matter in an AI World",
        description: "As AI takes over technical tasks, human skills like empathy, leadership, and emotional intelligence become the new currency of value.",
        angle: "Career Development"
    },
    {
        id: 3,
        title: "AI as a Collaborator, Not a Replacement",
        description: "Debunking the fear of job loss by highlighting success stories of teams that use AI to augment their capabilities rather than replace staff.",
        angle: "Industry Trends"
    }
];

const MOCK_OUTLINE = [
    { id: 1, title: 'Introduction', content: 'Hook: The changing landscape of work. Thesis: AI is not replacing jobs, but upgrading roles.' },
    { id: 2, title: 'The Efficiency Gains', content: 'Discuss how automation handles repetitive tasks (data entry, scheduling).' },
    { id: 3, title: 'The Creativity Boom', content: 'Explain how employees can focus on strategy and innovation.' },
    { id: 4, title: 'Real-world Examples', content: 'Case studies of companies using AI tools effectively.' },
    { id: 5, title: 'Conclusion', content: 'Call to action: Embrace the tools or get left behind.' }
];

const MOCK_CONTENT = {
    linkedin: "🚀 The future of work isn't just about remote vs. office—it's about how we leverage AI to amplify human potential.\n\nWe're seeing a massive shift where automation handles the mundane, freeing us up for big-picture strategy. Are you ready to adapt?\n\n#FutureOfWork #AI #Leadership #Innovation",
    instagram: "AI + Human Creativity = 💥\n.\n.\nThe workplace is changing fast. It's time to stop fearing replacement and start mastering collaboration with new tools.\n.\nWhat's your take? 👇\n.\n#AI #TechTrends #WorkLife",
    blog: "## The Shift to AI-Powered Workplaces\n\nArtificial Intelligence is no longer a futuristic concept—it's here, and it's reshaping how we work daily. But contrary to popular belief, it's not here to take jobs, but to upgrade them.\n\n### The Efficiency Gains\nImagine a world where data entry, scheduling, and basic reports are handled instantly..."
};

// Routes
router.post('/generate-ideas', (req, res) => {
    // Simulate AI delay
    setTimeout(() => {
        res.json(MOCK_IDEAS);
    }, 1000);
});

router.post('/generate-outline', (req, res) => {
    setTimeout(() => {
        res.json(MOCK_OUTLINE);
    }, 1000);
});

router.post('/generate-content', (req, res) => {
    setTimeout(() => {
        res.json(MOCK_CONTENT);
    }, 1500);
});

module.exports = router;
