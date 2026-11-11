'use client';

import React from 'react';

export default function Skills() {
  const services = [
    {
      icon: '🤖',
      title: 'Machine Learning & Deep Learning',
      desc: 'End-to-end model development: Artificial Neural Networks (ANN), XGBoost, SMOTE balancing, hyperparameter tuning, and cross-validation.',
      tools: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost'],
    },
    {
      icon: '💬',
      title: 'LLM & Natural Language Processing',
      desc: 'Building intelligent text applications, Retrieval-Augmented Generation (RAG) pipelines, PDF semantic search, and prompt engineering.',
      tools: ['LangChain', 'OpenAI GPT-3', 'Hugging Face', 'NLP'],
    },
    {
      icon: '🔍',
      title: 'Explainable AI (XAI)',
      desc: 'Model interpretability utilizing Hybrid SHAP + LIME frameworks to turn black-box AI into transparent and auditable business insights.',
      tools: ['SHAP', 'LIME', 'Feature Importance', 'XAI'],
    },
    {
      icon: '📊',
      title: 'Data Analysis & App Deployment',
      desc: 'Exploratory data analysis (EDA), statistical evaluation, ETL data pipelines, and building interactive web dashboards with Streamlit and Next.js.',
      tools: ['Python', 'Pandas', 'Streamlit', 'FastAPI', 'SQL'],
    },
  ];

  return (
    <section id="services" className="canva-page-wrapper">
      <div className="canva-services-section">
        <div className="canva-pill-header-wrap">
          <div className="canva-section-pill">My Services</div>
          <p className="canva-section-subtitle">
            Specialized capabilities in Artificial Intelligence, Machine Learning, and Data Systems.
          </p>
        </div>

        <div className="canva-services-grid">
          {services.map((svc, idx) => (
            <div key={idx} className="canva-service-card">
              <div className="canva-service-icon">{svc.icon}</div>
              <h3 className="canva-service-title">{svc.title}</h3>
              <p className="canva-service-desc">{svc.desc}</p>
              <div className="canva-service-pills">
                {svc.tools.map((t, tIdx) => (
                  <span key={tIdx} className="canva-mini-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
