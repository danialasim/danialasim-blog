export interface ProjectStats {
  [key: string]: string | number
}

export interface Project {
  title: string
  description: string
  image: string
  longDescription: string
  tags: string[]
  github?: string
  huggingface?: string
  liveDemo?: string
  stats: ProjectStats
}

export const projects: Project[] = [
    {
    title: "Fraud Detection",
    description: "A comprehensive fraud detection system using machine learning.",
    image: "/projects/fraud_detection.png",
    longDescription: "A complete end-to-end fraud detection system featuring ML model training, API deployment, real-time detection, and a user-friendly dashboard. Built with XGBoost for model training and Flask for API deployment.",
    tags: [
      "Ensemble Learning",
      "XGBoost",
      "Deep Learning",
      "Neural Networks",
      "Fraud Detection"
    ],
    github: "https://github.com/danialasim/fraud-detection-ml-system",
    huggingface: "https://huggingface.co/spaces/DanialAsim/fraud-detection-system",
    stats: {
      accuracy: "92%",
      Precision: "85%+",
      models: 3
    }
  },
    {
    title: "Movie Recommendation System",
    description: "A comprehensive movie recommendation system using machine learning models (SAE and RBM) with Docker containerization, FastAPI, and Prometheus/Grafana monitoring.",
    image: "/projects/movie_recommendations.png",
    longDescription: "A state-of-the-art movie recommendation system that leverages collaborative filtering and content-based filtering techniques. Built with FastAPI for the backend and Docker for containerization.",
    tags: [
      "Machine Learning",
      "Recommendation Systems",
      "Deep Learning",
      "Restricted Boltzmann Machine",
      "AutoEncoder"
    ],
    github: "https://github.com/danialasim/movie-recommendation-system",
    huggingface: "https://huggingface.co/spaces/DanialAsim/recommendation-system",
    stats: {
      RMSE: "0.901",
      Parameters: "127.5K",
      models: 2
    }
  },
  {
    title: "Wine Quality Prediction",
    description: "Predicting wine quality using machine learning.",
    image: "/projects/wine_quality_predictor.png",
    longDescription: "A comprehensive wine quality prediction system that utilizes various machine learning algorithms to predict the quality of wine based on its chemical properties. Built with Scikit-learn and Flask.",
    tags: [
      "Machine Learning",
      "Regression",
      "Scikit-learn",
      "Flask"
    ],
    github: "https://github.com/danialasim/machinelearningproject",
    liveDemo: "https://dagshub.com/danialasimbashir/machinelearningproject.mlflow/",
    stats: {
      rmse: "0.75",
      mae: "0.59",
      models: 1
    }
  },
  {
    title: "Text Summarization With Fine-Tuning",
    description: "Advanced conversational AI using transformer models and context-aware response generation.",
    image: "/projects/text_summarization.png",
    longDescription: "An end-to-end Text Summarization project built with modern MLOps practices using Hugging Face Transformers, PEGASUS model, and modular architecture. This project demonstrates production-ready machine learning pipeline with proper configuration management, logging, and reproducible experiments.",
    tags: ["Transformers", "NLP", "PyTorch", "Sequence"],
    github: "https://github.com/danialasim/textsummarizer",
    huggingface: "https://huggingface.co/spaces/DanialAsim/text-summarization",
    stats: {
      ROUGE1: "0.47+",
      languages: 1,
      model: "PEGASUS model"
    }
  },
  {
    title: "Portfolio Website",
    description: "End-to-end automated machine learning pipeline for model training, testing, and deployment.",
    image: "/projects/web-project.png",
    longDescription: "A modern portfolio website built with React, Next.js, and TailwindCSS. Features include responsive design, server-side rendering, and continuous deployment with Vercel. Optimized for performance and SEO.",
    tags: ["React", "Next.js", "TailwindCSS", "Vercel"],
    github: "https://github.com/danialasim/danialasim-blog",
    huggingface: "https://www.danialasim.com/",
    stats: {
      deployments: 100,
      uptime: "99.9%",
      performance: "100%"
    }
  }
] 