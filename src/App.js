import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Box, IconButton, Link, Button  } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Lottie from 'react-lottie';
import * as aiAnimation from './animations/ai.json';   // AI Animation
import * as mlAnimation from './animations/ml.json';   // ML Animation
import * as backgroundAnimation from './animations/backgroundAnimation.json';   // Background Animation

function App() {
  const [expanded, setExpanded] = useState({});  // Store expanded state for each item

  // Array of section names and IDs
  const sections = [
    { name: 'About Me', id: 'about-me' },
    { name: 'Statistical Analysis', id: 'statistical' },
    { name: 'Dashboards', id: 'dashboard' },
    { name: 'Database Management', id: 'database' },
    { name: 'Machine Learning', id: 'machine-learning' },
    { name: 'Deep Learning', id: 'deep-learning' },
    { name: 'Gen AI', id: 'gen-ai' }
  ];

  // Scroll to section by ID
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle expand/collapse for description
  const handleExpandClick = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Lottie Animation Options
  const aiOptions = {
    loop: true,
    autoplay: true,
    animationData: aiAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const mlOptions = {
    loop: true,
    autoplay: true,
    animationData: mlAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const backgroundOptions = {
    loop: true,
    autoplay: true,
    animationData: backgroundAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,  // Place the background animation behind content
        }}
      >
        <Lottie options={backgroundOptions} height="100%" width="100%" />
      </Box>

      {/* Centralized Main Content */}
      <Container sx={{ textAlign: 'center', flex: '1', zIndex: 1, position: 'relative' }}>
        {/* Header */}
        <Box sx={{ bgcolor: '#2c387e', color: 'white', padding: '10px', marginBottom: '30px', borderRadius: '10px', transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.05)' }, 
        fontFamily: 'Inter, sans-serif'}}>
          <Typography variant="h2">Virendrasinh Chavda</Typography>
          <Typography variant="h6" sx={{color: 'white'}}>Data Science | ML | Statistics | Computer Vision | Speech Recognition | GenAI | NLP</Typography>
          {/* Social Media Links */}
          <Box sx={{ marginTop: '10px' }}>
            <IconButton component="a" href="https://www.linkedin.com/in/vc-ds" target="_blank" color="inherit" sx={{ transition: 'color 0.3s ease', '&:hover': { color: '#0a66c2' } }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href="https://github.com/VirendraChavda" target="_blank" color="inherit" sx={{ transition: 'color 0.3s ease', '&:hover': { color: '#6e5494' } }}>
              <GitHubIcon />
            </IconButton>
            <IconButton component="a" href="mailto:virendrasinh.chavda01@yahoo.in" target="_blank" color="inherit" sx={{ transition: 'color 0.3s ease', '&:hover': { color: '#6e5494' } }}>
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Contents Section */}
        {/* <Box sx={{ marginBottom: '30px' }}>
          <Typography variant="h4" sx={{ marginBottom: '10px' }}>Contents</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {sections.map((section) => (
              <Button 
                key={section.id} 
                variant="contained" 
                color="primary" 
                onClick={() => scrollToSection(section.id)}
              >
                {section.name}
              </Button>
            ))}
          </Box>
        </Box> */}

        {/* About Me Section */}
        <Grid container justifyContent="center" spacing={3} id="about-me">
          <Grid item xs={12} sm={8} md={15}>
            <Card sx={{bgcolor: '#9bc0ff', color: 'black', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, marginBottom: '20px' }}>
              <CardContent>
                <Typography variant="h4" component="div">About Me</Typography>
                <Typography variant="body2" sx={{ marginTop: '10px',  color: 'black', fontSize: '18px', fontFamily: 'Inter, sans-serif', textAlign: 'justify' }}>
                I am a data science professional with over 2 years of experience in developing and deploying machine learning models, predictive analytics, scalable AI solutions, and interactive dashboards. Proficient in Python, R, SQL, and cloud platforms like GCP and AWS, I have expertise in frameworks such as TensorFlow, PyTorch, and FastAPI. I specialize in time-series forecasting, Bayesian optimization, computer vision, NLP, generative models, and have applied these skills to improve operational efficiency through predictive maintenance systems and AI-driven error detection. Additionally, I have experience with Docker, Kubernetes, and deploying machine learning models in cloud environments. My work involves collaborating with cross-functional teams to build data pipelines, automate processes, and deliver actionable insights through tools like Streamlit and Power BI. I am committed to leveraging data science to solve complex problems and enhance decision-making in dynamic business environments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          </Grid>


        {/* Statistical Section */}
        <Grid item xs={12} container id="statistical">
        <Card sx={{bgcolor: '#9bc0ff', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'black'}}>Statistical Analysis</Typography>
            </CardContent>

            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "Money Laundering Detection", link: "https://github.com/VirendraChavda/Anti-Money-Laundering", 
                image: "./Images/network.png", description: "This project focuses on detecting money laundering activities in financial networks using advanced network analysis techniques. By analyzing the relationships between accounts and identifying central nodes, the project uncovers suspicious patterns in transaction flows. Key measures such as degree, closeness, and betweenness centrality are used to highlight accounts that play crucial roles in facilitating potentially illicit transactions. Additionally, community detection algorithms like the Girvan-Newman method are employed to isolate clusters of related accounts for deeper investigation. Through this approach, the project provides insights into how network analysis can enhance anti-money laundering efforts by identifying high-risk accounts within complex transaction networks." },
              { name: "Price Optimization", link: "https://github.com/VirendraChavda/Price-Optimizing/tree/main", 
                image: "./Images/price.png", description: "This project focuses on optimizing prices for CPU coolers using Generalized Additive Models (GAMs) to maximize revenue across varied promotional events and seasonal trends. By leveraging GAMs, we capture complex, non-linear relationships between price and demand, allowing for flexible, data-driven pricing strategies that adjust to event-based sensitivities like Black Friday and Amazon Prime Day. The analysis identifies optimal price points with confidence intervals, providing actionable insights into conservative and optimistic pricing strategies. This approach enables precise, revenue-maximizing pricing decisions tailored to each product, highlighting the potential of statistical modeling in dynamic pricing optimization." },
              { name: "A/B Testing for Marketing Campaign Effectiveness", link: "https://github.com/VirendraChavda/Marketing-Effectivenes/blob/main/A_B%20Testing.ipynb", 
                image: "./Images/ab_test.png", description: "This project analyzes the impact of two marketing campaigns (Ad and PSA) on conversion rates using A/B testing. Key statistical tests, including the Chi-Square Test, Point-Biserial Correlation, and Linear Regression, reveal significant differences in conversion rates and a moderate positive link between ad frequency and conversions. However, effect size (Cohen’s d) shows a modest practical impact, suggesting that while increased ad exposure boosts conversions, the effect is limited. These insights guide future campaign optimization to balance ad frequency and conversion potential effectively." }
            ].map((analysis, index) => (
              <Grid item xs={12} sm={6} md={3.8} key={`stats-${index}`}>
                <Card sx={{ marginBottom: '10px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                  <Link href={analysis.link} target="_blank">
                    <CardMedia
                      component="img"
                      height="180"
                      image={analysis.image}  // Linking to local images
                      alt={analysis.name}
                    />
                  </Link>
                  <CardContent>
                    <Typography>{analysis.name}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        textAlign: 'justify',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: expanded[`stats-${index}`] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                        WebkitBoxOrient: 'vertical',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleExpandClick(`stats-${index}`)}
                    >
                      {analysis.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          </Card>
        </Grid>

        {/* Dashboard Section */}
        <Grid item xs={12} container id="dashboard">
        <Card sx={{bgcolor: '#9bc0ff', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'black'}}>Dashboards</Typography>
            </CardContent>
            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "CryptoTracker - Dash", link: "https://crypto-tracker-live.nw.r.appspot.com/", image: "./Images/report3.png", 
                description: "CryptoTracker is a sophisticated crypto tracking and analysis platform built using Python, Plotly, and Dash, and deployed on Google Cloud Platform's App Engine. It allows users to monitor real-time cryptocurrency prices and historical data, providing dynamic and interactive visualizations for in-depth market analysis. Leveraging powerful Plotly graphs, the app ensures an intuitive and visually appealing experience for users to analyze trends, patterns, and price fluctuations. With its scalable GCP deployment, CryptoTracker offers fast performance and is accessible to a wide range of users for data-driven decision-making in the crypto space." },
              { name: "Financial Data Analysis Dashboard for UK HE Institutions - Streamlit", link: "https://huggingface.co/spaces/VirendraChavda/Hesa_Dashboard", 
                image: "./Images/dash2.png", description: "Dashboard made using Streamlit, for analysis of HESA financial data for 120+ UK higher education institutions, identifying key trends in surplus, expenses, and admissions. Integrated with GCP APIs for automated data handling and dynamic comment section for stakeholders. Implemented OAuth 2.0 and encryption to secure sensitive financial data." },
              { name: "Customer Performance Insights - Power BI", link: "https://app.powerbi.com/view?r=eyJrIjoiNjM5MGZhNGItMTBmYi00YzI0LWEzYTUtZjg1Yjg3MzhmMTlkIiwidCI6ImVjYjc2ODNjLTkyY2UtNDczYy1hZDZkLWM1ZThiMTgzMTU0NCJ9", 
                image: "./Images/report2.png", description: "This Power BI report with light and dark mode, provides a detailed overview of customer demographics, purchasing behavior, and revenue segmentation. It showcases key insights such as customer age distribution, earnings by gender, and revenue contributions segmented by age groups. The dashboard also highlights the top-performing customers and their purchasing profiles. Power Query was utilized for data transformation, ensuring clean and structured data, while DAX expressions were employed to manipulate data and create insightful metrics. The sleek, dark-themed interface enhances readability and makes it easy to interpret important trends and patterns in customer data." },
              { name: "Crime Analysis Report - Power BI", link: "https://app.powerbi.com/view?r=eyJrIjoiMTFmMzIxOGEtZGM1Yy00MzRlLWJiYzQtZGE4Yjk3MTA0OGNiIiwidCI6ImVjYjc2ODNjLTkyY2UtNDczYy1hZDZkLWM1ZThiMTgzMTU0NCJ9", 
                image: "./Images/report5.png", description: "This interactive Power BI dashboard provides an in-depth analysis of crime patterns, offering insights into crime frequency by year, month, time, and location. The dashboard highlights key crime metrics such as total crimes, dangerous crime times, and resolution rates, while also allowing users to filter data by various factors like country and time of day. With dynamic visuals, such as heatmaps, bar charts, and trend lines, it presents a comprehensive view of crime occurrences, helping law enforcement and decision-makers identify high-risk periods and areas." },
              { name: "Blinkit Sales Analysis - Power BI", link: "https://app.powerbi.com/view?r=eyJrIjoiZmIzZGMzYTktZTM0ZS00MTZjLTk2OTctOGU0MWI1ZjJjOGJkIiwidCI6ImVjYjc2ODNjLTkyY2UtNDczYy1hZDZkLWM1ZThiMTgzMTU0NCJ9", 
                image: "./Images/report4.png", description: "This Power BI dashboard provides an interactive analysis of Blinkit’s sales performance. Key metrics such as total sales, average sales, items sold, and customer ratings are displayed alongside visual breakdowns of sales by product type, outlet size, and location tiers. The report also features insightful trends in outlet establishment and sales growth across various product categories. With dynamic charts and filters, this dashboard helps users quickly identify patterns and make data-driven decisions to improve operations." },
              { name: " IT Spending Analysis - Power BI", link: "https://app.powerbi.com/view?r=eyJrIjoiOTUyNzVhNDctZmMwNi00YTg2LWJmNmYtYWFhMDJlOGZlOGQyIiwidCI6ImVjYjc2ODNjLTkyY2UtNDczYy1hZDZkLWM1ZThiMTgzMTU0NCJ9", 
                image: "./Images/report1.png", description: "This Power BI dashboard provides a comprehensive analysis of IT spending across various regions and departments for the year 2020. It features a detailed comparison of actual spending against forecasts and budgets, highlighting key variances by geography and IT function. The visuals include line charts tracking monthly trends, gauge charts for year-to-date performance, and breakdowns of cost elements such as labor, CAPEX, and administrative expenses. Additionally, regional insights and cost element group analysis help stakeholders identify areas of overspending or efficiency to guide decision-making in IT budgeting." }
            ].map((dashboard, index) => (
              <Grid item xs={12} sm={10} md={3.8} key={`dashboard-${index}`}>
                <Card sx={{marginBottom: '10px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                  <Link href={dashboard.link} target="_blank">
                    <CardMedia
                      component="img"
                      height="180"
                      image={dashboard.image}  // Linking to local images
                      alt={dashboard.name}
                    />
                  </Link>
                  <CardContent>
                    <Typography>{dashboard.name}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        textAlign: 'justify',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: expanded[`dashboard-${index}`] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                        WebkitBoxOrient: 'vertical',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleExpandClick(`dashboard-${index}`)}
                    >
                      {dashboard.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          </Card>
        </Grid>

        {/* Database Section */}
        {/* <Grid item xs={12} container id="database">
        <Card sx={{bgcolor: '#2c387e', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'white'}}>Database Management</Typography>
            </CardContent>
            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "CryptoTracker - Dash", link: "https://crypto-tracker-live.nw.r.appspot.com/", image: "./Images/report3.png", 
                description: "CryptoTracker is a sophisticated crypto tracking and analysis platform built using Python, Plotly, and Dash, and deployed on Google Cloud Platform's App Engine. It allows users to monitor real-time cryptocurrency prices and historical data, providing dynamic and interactive visualizations for in-depth market analysis. Leveraging powerful Plotly graphs, the app ensures an intuitive and visually appealing experience for users to analyze trends, patterns, and price fluctuations. With its scalable GCP deployment, CryptoTracker offers fast performance and is accessible to a wide range of users for data-driven decision-making in the crypto space." },
              { name: "Financial Data Analysis Dashboard for UK HE Institutions - Streamlit", link: "https://huggingface.co/spaces/VirendraChavda/Hesa_Dashboard", 
                image: "./Images/dash2.png", description: "Dashboard made using Streamlit, for analysis of HESA financial data for 120+ UK higher education institutions, identifying key trends in surplus, expenses, and admissions. Integrated with GCP APIs for automated data handling and dynamic comment section for stakeholders. Implemented OAuth 2.0 and encryption to secure sensitive financial data." },
              { name: "Customer Performance Insights - Power BI", link: "https://app.powerbi.com/view?r=eyJrIjoiNjM5MGZhNGItMTBmYi00YzI0LWEzYTUtZjg1Yjg3MzhmMTlkIiwidCI6ImVjYjc2ODNjLTkyY2UtNDczYy1hZDZkLWM1ZThiMTgzMTU0NCJ9", 
                image: "./Images/report2.png", description: "This Power BI report with light and dark mode, provides a detailed overview of customer demographics, purchasing behavior, and revenue segmentation. It showcases key insights such as customer age distribution, earnings by gender, and revenue contributions segmented by age groups. The dashboard also highlights the top-performing customers and their purchasing profiles. Power Query was utilized for data transformation, ensuring clean and structured data, while DAX expressions were employed to manipulate data and create insightful metrics. The sleek, dark-themed interface enhances readability and makes it easy to interpret important trends and patterns in customer data." }
            ].map((dashboard, index) => (
              <Grid item xs={12} sm={10} md={3.8} key={`dashboard-${index}`}>
                <Card sx={{marginBottom: '10px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                  <Link href={dashboard.link} target="_blank">
                    <CardMedia
                      component="img"
                      height="180"
                      image={dashboard.image}  // Linking to local images
                      alt={dashboard.name}
                    />
                  </Link>
                  <CardContent>
                    <Typography>{dashboard.name}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        textAlign: 'justify',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: expanded[`dashboard-${index}`] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                        WebkitBoxOrient: 'vertical',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleExpandClick(`dashboard-${index}`)}
                    >
                      {dashboard.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          </Card>
        </Grid> */}

        {/* Machine Learning Section */}
        <Grid item xs={12} container id="machine-learning">
        <Card sx={{bgcolor: '#9bc0ff', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'black'}}>Machine Learning</Typography>
            </CardContent>

            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "Optimizing Cancer Classification With Gene Expression", link: "https://github.com/VirendraChavda/Predicting-Invasive-cancer/tree/main", image: "./Images/gene.jpg", description: "This project uses machine learning to classify invasive and non-invasive cancer types based on gene expression data. By applying dimensionality reduction techniques such as two-sample t-tests, LASSO regression, and variance-based selection, the study tackles high-dimensional biological data. Supervised models like KNN, SVM, and Logistic Regression were validated through K-fold cross-validation and bootstrapping, showing significant accuracy improvements, with KNN and SVM achieving near-perfect results. Unsupervised methods like clustering and PCA were also explored to uncover underlying data patterns, offering valuable insights for cancer classification." },
              { name: "Treatment Prediction", link: "https://huggingface.co/spaces/VirendraChavda/Drug_Classifier", image: "./Images/drug.png", description: "This machine learning project focuses on predicting personalized treatment plans for diabetic patients based on key health indicators such as age, sex, blood pressure, cholesterol levels, and sodium-to-potassium ratio. By leveraging advanced machine learning algorithms, the model analyzes patient data to recommend optimal treatment strategies, improving the decision-making process for healthcare providers. The project aims to enhance patient outcomes by providing data-driven insights into diabetes management, allowing for more accurate and tailored treatment recommendations. This approach highlights the potential of AI in transforming personalized healthcare for diabetic patients." }
            ].map((model, index) => (
              <Grid item xs={12} sm={6} md={3.8} key={`ml-${index}`}>
                <Card sx={{ marginBottom: '10px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                  <Link href={model.link} target="_blank">
                    <CardMedia
                      component="img"
                      height="180"
                      image={model.image}  // Linking to local images
                      alt={model.name}
                    />
                  </Link>
                  <CardContent>
                    <Typography>{model.name}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        textAlign: 'justify',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: expanded[`ml-${index}`] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                        WebkitBoxOrient: 'vertical',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleExpandClick(`ml-${index}`)}
                    >
                      {model.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          </Card>
        </Grid>
        

        {/* Deep Learning Models Section */}
        {/* <Grid item xs={12} container id="deep-learning">
        <Card sx={{bgcolor: '#2c387e', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'white'}}>Deep Learning</Typography>
            </CardContent>

            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "Quick Product Reviews from YouTube", link: "https://review-summary-198222048398.europe-west1.run.app",
                image: "./Images/youtube.png", description: "This app leverages Streamlit for an interactive interface, AssemblyAI for transcription, and YouTube Data API for video search, enabling users to extract essential insights from YouTube review videos. Simply enter a product name, select relevant videos, and the app analyzes and summarizes the key Pros and Cons, saving you time and minimizing information overload. Built with Python, this tool provides concise, AI-driven insights for informed decision-making; perfect for anyone who wants a quick summary without watching hours of content." },
              { name: "Smart Digital Marketing Tool", link: "https://huggingface.co/spaces/VirendraChavda/SmartMarketing",
                image: "./Images/smart_marketing.png", description: "'Smart Digital Marketing Tool' is a cutting-edge web application crafted to assist marketing professionals in generating high-quality digital marketing content. Utilizing Python and Streamlit for its frontend, and hosted on Hugging Face Spaces, this app integrates Gemini by Google for advanced text generation and OpenAI's image generation API for creating custom logos. With features that produce detailed blog posts, professional client emails, persuasive marketing emails, LinkedIn posts, ad scripts, and unique logo designs, this tool combines the power of AI-driven content creation with a user-friendly interface to boost efficiency and creativity in digital marketing."},
              { name: "Trascription and translation app", link: "https://virendrachavda.github.io/scriber/",
                image: "./Images/translate.jpeg", description: "The project is a React-based transcription and translation app that utilizes machine learning models (Whisper, Xenova) directly in the browser via web workers. The app allows users to upload audio, which is transcribed in real-time, or translate text between supported languages. Key technologies include React, Vite, Tailwind CSS, and xenova/transformers." }
            ].map((model, index) => (
              <Grid item xs={12} sm={6} md={3.8} key={`gai-${index}`}>
                <Card sx={{ marginBottom: '10px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                  <Link href={model.link} target="_blank">
                    <CardMedia
                      component="img"
                      height="180"
                      image={model.image}  // Linking to local images
                      alt={model.name}
                    />
                  </Link>
                  <CardContent>
                    <Typography>{model.name}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        textAlign: 'justify',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: expanded[`gai-${index}`] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                        WebkitBoxOrient: 'vertical',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleExpandClick(`gai-${index}`)}
                    >
                      {model.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          </Card>
        </Grid> */}

        {/* Gen AI Section */}
        <Grid item xs={12} container id="gen-ai">
        <Card sx={{bgcolor: '#9bc0ff', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'black'}}>Generative AI</Typography>
            </CardContent>

            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "Quick Product Reviews from YouTube", link: "https://review-summary-198222048398.europe-west1.run.app",
                image: "./Images/youtube.png", description: "This app leverages Streamlit for an interactive interface, AssemblyAI for transcription, and YouTube Data API for video search, enabling users to extract essential insights from YouTube review videos. Simply enter a product name, select relevant videos, and the app analyzes and summarizes the key Pros and Cons, saving you time and minimizing information overload. Built with Python, this tool provides concise, AI-driven insights for informed decision-making; perfect for anyone who wants a quick summary without watching hours of content." },
              { name: "Smart Digital Marketing Tool", link: "https://huggingface.co/spaces/VirendraChavda/SmartMarketing",
                image: "./Images/smart_marketing.png", description: "'Smart Digital Marketing Tool' is a cutting-edge web application crafted to assist marketing professionals in generating high-quality digital marketing content. Utilizing Python and Streamlit for its frontend, and hosted on Hugging Face Spaces, this app integrates Gemini by Google for advanced text generation and OpenAI's image generation API for creating custom logos. With features that produce detailed blog posts, professional client emails, persuasive marketing emails, LinkedIn posts, ad scripts, and unique logo designs, this tool combines the power of AI-driven content creation with a user-friendly interface to boost efficiency and creativity in digital marketing."},
              { name: "Trascription and translation app", link: "https://virendrachavda.github.io/scriber/",
                image: "./Images/translate.jpeg", description: "The project is a React-based transcription and translation app that utilizes machine learning models (Whisper, Xenova) directly in the browser via web workers. The app allows users to upload audio, which is transcribed in real-time, or translate text between supported languages. Key technologies include React, Vite, Tailwind CSS, and xenova/transformers." }
            ].map((model, index) => (
              <Grid item xs={12} sm={6} md={3.8} key={`gai-${index}`}>
                <Card sx={{ marginBottom: '10px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                  <Link href={model.link} target="_blank">
                    <CardMedia
                      component="img"
                      height="180"
                      image={model.image}  // Linking to local images
                      alt={model.name}
                    />
                  </Link>
                  <CardContent>
                    <Typography>{model.name}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '15px',
                        textAlign: 'justify',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: expanded[`gai-${index}`] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                        WebkitBoxOrient: 'vertical',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleExpandClick(`gai-${index}`)}
                    >
                      {model.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          </Card>
        </Grid>
        
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#2c387e', color: 'white', textAlign: 'center', padding: '10px', marginTop: 'auto' }}>
        <Typography variant="body2">Copyright © Virendrasinh Chavda. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default App;

