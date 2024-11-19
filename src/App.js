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
        <Box sx={{ marginBottom: '30px' }}>
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
        </Box>

        {/* About Me Section */}
        <Grid container justifyContent="center" spacing={3} id="about-me">
          <Grid item xs={12} sm={8} md={15}>
            <Card
              sx={{
                bgcolor: '#9bc0ff',
                color: 'black',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-10px)' },
                marginBottom: '20px',
              }}
            >
              <CardContent>
                <Typography variant="h4" component="div">
                  About Me
                </Typography>
                {/* Dynamic content with toggle */}
                <Box sx={{ marginTop: '10px', textAlign: 'justify' }}>
                  <Box
                    sx={{
                      display: expanded['about-me'] ? 'block' : '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: expanded['about-me'] ? 'none' : 4,
                      overflow: expanded['about-me'] ? 'visible' : 'hidden',
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        marginBottom: '10px',
                        color: 'black',
                        fontSize: '18px',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      I am a passionate and results-driven Data Scientist and AI Specialist with over two years of experience delivering impactful, real-world solutions through innovative applications of data science and AI. My expertise spans Machine Learning, Deep Learning, Generative AI, Computer Vision, Natural Language Processing (NLP), and Time-Series Forecasting, supported by a strong foundation in Statistical Analysis and Data Visualization. I have successfully executed diverse projects, from predictive modeling and real-time dashboards to scalable AI-driven solutions for industries such as manufacturing, healthcare, and finance.
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        marginBottom: '10px',
                        color: 'black',
                        fontSize: '18px',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      In Statistical Analysis, I specialize in uncovering actionable insights through techniques like predictive modeling, hypothesis testing, and network analysis, addressing challenges such as pricing optimization, campaign evaluation, and fraud detection. My Machine Learning skills focus on building robust, interpretable models with advanced feature engineering and performance optimization to ensure actionable results. In Deep Learning, I design and implement neural networks for applications such as speech recognition, image processing, and object detection, emphasizing scalability, accuracy, and deployment readiness.
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        marginBottom: '10px',
                        color: 'black',
                        fontSize: '18px',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      I am proficient in Python, R, SQL, and cloud platforms such as GCP and AWS, with expertise in using deployment tools like Docker, Kubernetes, and FastAPI to create scalable and efficient solutions. My visualization skills include tools like Power BI, Streamlit, and Dash, enabling me to deliver dynamic and user-friendly insights that enhance decision-making and business growth.
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        marginBottom: '10px',
                        color: 'black',
                        fontSize: '18px',
                        fontFamily: 'Inter, sans-serif',
                      }}
                    >
                      My portfolio highlights my ability to merge technical expertise with creativity, including projects like an interactive CryptoTracker Dashboard, a Money Laundering Analysis report, a Customer Churn Predictor, a real-time Object Detection/Segmentation application, a Brain Tumor Detection System, and a Speech Emotion Recognition Model. I focus on leveraging data to deliver actionable insights that drive informed decision-making and innovative solutions. Whether working collaboratively in teams or independently managing projects, I prioritize creating impactful, efficient, and scalable data-driven applications.
                    </Typography>
                  </Box>
                  <Button
                    onClick={() => handleExpandClick('about-me')}
                    sx={{
                      marginTop: '10px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      color: '#0066cc',
                    }}
                  >
                    {expanded['about-me'] ? '...less' : '...more'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>


        {/* Statistical Section */}
        <Grid item xs={12} container id="statistical">
        <Card sx={{bgcolor: '#2c387e', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'white'}}>Statistical Analysis</Typography>
            </CardContent>

            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "Price Optimization", link: "https://github.com/VirendraChavda/Price-Optimizing/tree/main", 
                image: "./Images/price.png", description: "This project focuses on optimizing prices for CPU coolers using Generalized Additive Models (GAMs) to maximize revenue across varied promotional events and seasonal trends. By leveraging GAMs, we capture complex, non-linear relationships between price and demand, allowing for flexible, data-driven pricing strategies that adjust to event-based sensitivities like Black Friday and Amazon Prime Day. The analysis identifies optimal price points with confidence intervals, providing actionable insights into conservative and optimistic pricing strategies. This approach enables precise, revenue-maximizing pricing decisions tailored to each product, highlighting the potential of statistical modeling in dynamic pricing optimization." },
              { name: "A/B Testing for Marketing Campaign Effectiveness", link: "https://github.com/VirendraChavda/Marketing-Effectivenes/blob/main/A_B%20Testing.ipynb", 
                image: "./Images/ab_test.png", description: "This project analyzes the impact of two marketing campaigns (Ad and PSA) on conversion rates using A/B testing. Key statistical tests, including the Chi-Square Test, Point-Biserial Correlation, and Linear Regression, reveal significant differences in conversion rates and a moderate positive link between ad frequency and conversions. However, effect size (Cohen’s d) shows a modest practical impact, suggesting that while increased ad exposure boosts conversions, the effect is limited. These insights guide future campaign optimization to balance ad frequency and conversion potential effectively." },
              { name: "Money Laundering Detection", link: "https://github.com/VirendraChavda/Anti-Money-Laundering", 
                image: "./Images/network.png", description: "This project focuses on detecting money laundering activities in financial networks using advanced network analysis techniques. By analyzing the relationships between accounts and identifying central nodes, the project uncovers suspicious patterns in transaction flows. Key measures such as degree, closeness, and betweenness centrality are used to highlight accounts that play crucial roles in facilitating potentially illicit transactions. Additionally, community detection algorithms like the Girvan-Newman method are employed to isolate clusters of related accounts for deeper investigation. Through this approach, the project provides insights into how network analysis can enhance anti-money laundering efforts by identifying high-risk accounts within complex transaction networks." }
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
              { name: "CryptoTracker - Dash", link: "https://live-tracker-211041938775.europe-west1.run.app/", image: "./Images/report3.png", 
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


        {/* Machine Learning Section */}
        <Grid item xs={12} container id="machine-learning">
        <Card sx={{bgcolor: '#2c387e', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'white'}}>Machine Learning</Typography>
            </CardContent>

            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "Customer Churn Prediction and Analysis", link: "https://customer-churn-211041938775.europe-west1.run.app/", 
                image: "./Images/churn.png", description: "This interactive web application provides businesses with powerful insights into customer churn, enabling data-driven decisions to retain customers effectively. Built using Streamlit, the app offers advanced data visualizations, interactive filters, and detailed churn analysis powered by XGBoost machine learning models. It includes dynamic SHAP-based feature impact explanations to interpret predictions and highlights key patterns in customer behavior. Users can explore churn trends, identify high-risk customer groups, and predict churn probability for filtered datasets." },
              { name: "Weather Forecast Application", link: "https://weather-app-1058693665617.europe-west1.run.app/", 
                image: "./Images/weather.png", description: "This application predicts weather parameters such as temperature, precipitation, wind speed, snowfall, and cloud cover with high accuracy. Using machine learning models like Gradient Boosting and Random Forest, the app leverages advanced feature scaling for improved predictions. Developed with FastAPI for seamless API integration and a Dash-based dashboard for dynamic user interaction, it is hosted on Google Cloud Platform (GCP) with BigQuery for efficient data handling. This project highlights expertise in Time Series Forecasting, Data Engineering, and Cloud Computing." },
              { name: "Music Recommender System", link: "https://music-recommendation-1058693665617.europe-west1.run.app/", 
                image: "./Images/spotify.png", description: "The Music Recommender System is an intelligent web app designed to help users discover new music based on the content of their favorite songs. Using a combination of Python, Machine Learning, NLP, Streamlit, and Spotify’s API, this app leverages content-based recommendation algorithms to analyze and match musical attributes, providing a personalized listening experience. Simply select a song from the dropdown, and the app will suggest a curated collection of similar tracks, each displayed with album art for easy browsing. Each recommendation includes a clickable album cover that takes you directly to the song on Spotify, enabling seamless music exploration." },
              { name: "Optimizing Cancer Classification With Gene Expression", link: "https://github.com/VirendraChavda/Predicting-Invasive-cancer/tree/main",
                image: "./Images/gene.jpg", description: "This project uses machine learning to classify invasive and non-invasive cancer types based on gene expression data. By applying dimensionality reduction techniques such as two-sample t-tests, LASSO regression, and variance-based selection, the study tackles high-dimensional biological data. Supervised models like KNN, SVM, and Logistic Regression were validated through K-fold cross-validation and bootstrapping, showing significant accuracy improvements, with KNN and SVM achieving near-perfect results. Unsupervised methods like clustering and PCA were also explored to uncover underlying data patterns, offering valuable insights for cancer classification." },
              { name: "Car Price Prediction", link: "https://github.com/VirendraChavda/Price-Prediction",
                image: "./Images/car.jpeg", description: "This project focuses on predicting the prices of cars based on features such as brand, model, year of manufacture, mileage, fuel type, and more. By employing machine learning techniques, the system aims to provide accurate price estimates for used cars. Key steps include data preprocessing (handling missing values, encoding categorical variables, and feature scaling), exploratory data analysis to identify patterns and trends, and training regression models like Linear Regression, Decision Trees, and Random Forest. Model performance is evaluated using metrics such as R², Mean Absolute Error (MAE), and Root Mean Square Error (RMSE)." },
              { name: "Treatment Prediction", link: "https://huggingface.co/spaces/VirendraChavda/Drug_Classifier",
                image: "./Images/drug.png", description: "This machine learning project focuses on predicting personalized treatment plans for diabetic patients based on key health indicators such as age, sex, blood pressure, cholesterol levels, and sodium-to-potassium ratio. By leveraging advanced machine learning algorithms, the model analyzes patient data to recommend optimal treatment strategies, improving the decision-making process for healthcare providers. The project aims to enhance patient outcomes by providing data-driven insights into diabetes management, allowing for more accurate and tailored treatment recommendations. This approach highlights the potential of AI in transforming personalized healthcare for diabetic patients." }
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
        <Grid item xs={12} container id="deep-learning">
        <Card sx={{bgcolor: '#9bc0ff', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'black'}}>Deep Learning</Typography>
            </CardContent>

            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "SmartVision", link: "https://smart-vision-1058693665617.europe-west1.run.app/",
                image: "./Images/yolo1.gif", description: "The SmartVision app is a powerful web application designed to enable users to perform object detection, object segmentation, and pose estimation on images and videos. Built with Streamlit for an intuitive user interface and leveraging state-of-the-art YOLOv11 models, the app supports real-time processing and live predictions. It also integrates tools like OpenCV and Pillow for image and video handling. Deployed on Google Cloud Run, the app is a robust, cloud-native solution for computer vision tasks, offering functionality to upload, process, and download annotated files effortlessly." },
              { name: "Brain Tumor Detection and Segmentation", link: "https://github.com/VirendraChavda/TumorSegmentation",
                image: "./Images/tumor.jpg", description: "This project focuses on developing a deep learning-based solution for detecting brain tumors using MRI images. The application incorporates advanced computer vision techniques to achieve high accuracy in tumor detection, segmentation, and classification. Leveraging frameworks such as PyTorch and YOLOv11, it evaluates performance metrics through detailed confusion matrices and visualizes results with insightful plots, including bounding box annotations and feature distribution maps. Key highlights include end-to-end model training, performance analysis, and visual presentation of predictions. The system is designed to assist medical practitioners with a reliable, automated diagnostic tool."},
              { name: "Traffic Sign Recognition", link: "https://github.com/VirendraChavda/TrafficSignDetection",
                image: "./Images/traffic.jpg", description: "This project implements a deep learning-based traffic sign recognition system designed to classify and localize various traffic signs from images. Utilizing advanced frameworks such as YOLOv11 and PyTorch, it detects over 50 distinct classes of traffic signs with high precision. The project includes comprehensive data analysis with detailed confusion matrices and insightful visualizations like bounding box predictions, feature distributions, and class-level comparisons. The system is trained and evaluated using real-world datasets, ensuring practical applications in autonomous driving and road safety systems." },
              { name: "High Frequency Time Series Forecasting with Advanced Methods", link: "https://github.com/VirendraChavda/Bitcoin-Time-Series-Forecasting/tree/main",
                image: "./Images/bitcoin.png", description: "This project explores the application of cutting-edge machine learning and deep learning techniques to forecast hourly Bitcoin prices, focusing on hybrid models and innovative architectures like Temporal Kolmogorov-Arnold Networks (TKAN). By integrating time series decomposition methods such as Empirical Mode Decomposition (EMD) and wavelet analysis, the project achieves exceptional predictive accuracy, with models like Seasonal OLS Hybrid and TKAN outperforming traditional and standalone deep learning approaches. Comprehensive evaluation and residual analysis validate the robustness of the predictions, showcasing a practical solution for tackling the challenges of high-frequency cryptocurrency forecasting." },
              { name: "Speech Emotion Recognition", link: "https://github.com/VirendraChavda/Emotion-Detection/tree/main",
                image: "./Images/emotion.png", description: "This project explores the application of deep learning to recognize emotions from speech audio data. It processes audio files to extract features such as spectrograms and MFCCs (Mel-Frequency Cepstral Coefficients) and trains a neural network to classify speech into emotional categories like happiness, sadness, anger, and fear. By leveraging detailed visualizations such as waveforms, spectrograms, accuracy/loss curves, and confusion matrices, the project provides insights into both the modeling process and classification performance. The system is designed for applications in sentiment analysis, virtual assistants, and enhancing human-computer interaction. " },
              { name: "Sound Analysis and Classification", link: "https://github.com/VirendraChavda/Acoustic-Classification/tree/main",
                image: "./Images/sound.png", description: "This project focuses on classifying audio samples into predefined categories using deep learning techniques. By extracting features such as MFCCs (Mel Frequency Cepstral Coefficients) from audio data, a fully connected neural network is trained to recognize and categorize sounds. Advanced training optimizations like early stopping and learning rate adjustments are implemented to enhance model performance. The project also includes visualizations of accuracy, loss curves, and a confusion matrix to evaluate the classification results comprehensively. " },
              { name: "Customer Sentiment Analysis for SkyTrax British Airlines Reviews", link: "https://github.com/VirendraChavda/British-Airways/tree/main",
                image: "./Images/british.jpeg", description: "This project explores customer sentiment analysis by mining and processing user reviews for British Airways from the SkyTrax dataset. The goal is to classify reviews as positive or negative using natural language processing (NLP) and machine learning techniques. Key steps include text preprocessing (tokenization, stop-word removal, and stemming), feature extraction (TF-IDF vectorization), and classification using machine learning algorithms like Logistic Regression and Support Vector Machines. Visualizations such as word clouds highlight frequent keywords, while performance metrics like accuracy, precision, and recall evaluate the models. This project demonstrates practical applications of data mining and NLP in customer feedback analysis, providing insights for enhancing customer experience in the aviation industry." },
              { name: "Fake News Detection", link: "https://github.com/VirendraChavda/Fake-News-Detection",
                image: "./Images/fake_news.jpeg", description: "This project aims to classify news articles as either real or fake using machine learning techniques. By leveraging textual data from news articles, the system processes, analyzes, and trains a classification model to detect misinformation. Key features include natural language processing techniques such as TF-IDF vectorization, word clouds for visual representation of the most common terms, and machine learning models like Logistic Regression for classification. The model's performance is evaluated using metrics such as accuracy, confusion matrices, and precision-recall scores. This project showcases practical applications of machine learning in combating misinformation, with a potential for real-world use in media and journalism." },
              { name: "Rocket Launcher Game Neural Network", link: "https://github.com/VirendraChavda/Spaceship-Lander/tree/main",
                image: "./Images/game.gif", description: "This project showcases the development of a custom neural network from scratch using Python and NumPy to predict gameplay outcomes and optimize decision-making in the Rocket Launcher Game. The model analyzes gameplay data, including rocket launch angles and velocities, to forecast hits, misses, and trajectory accuracy. Advanced techniques such as mini-batch gradient descent and ReLU activation functions were implemented to optimize training. Beyond predictions, the project visualizes rocket trajectories, compares predicted vs actual results, and provides a foundation for integrating AI-driven gameplay strategies. It's a hands-on exploration of neural network principles applied to gaming analytics and decision optimization." }
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

        {/* Gen AI Section */}
        <Grid item xs={12} container id="gen-ai">
        <Card sx={{bgcolor: '#2c387e', marginBottom: '20px'}}>
            <CardContent>
            <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'white'}}>Generative AI</Typography>
            </CardContent>

            <Grid container justifyContent="center" spacing={3}>
            {[
              { name: "Quick Product Reviews from YouTube", link: "https://review-summary-198222048398.europe-west1.run.app",
                image: "./Images/youtube.png", description: "This app leverages Streamlit for an interactive interface, AssemblyAI for transcription, and YouTube Data API for video search, enabling users to extract essential insights from YouTube review videos. Simply enter a product name, select relevant videos, and the app analyzes and summarizes the key Pros and Cons, saving you time and minimizing information overload. Built with Python, this tool provides concise, AI-driven insights for informed decision-making; perfect for anyone who wants a quick summary without watching hours of content." },
              { name: "Smart Digital Marketing Tool", link: "https://huggingface.co/spaces/VirendraChavda/SmartMarketing",
                image: "./Images/smart_marketing.png", description: "'Smart Digital Marketing Tool' is a cutting-edge web application crafted to assist marketing professionals in generating high-quality digital marketing content. Utilizing Python and Streamlit for its frontend, and hosted on Hugging Face Spaces, this app integrates Gemini by Google for advanced text generation and OpenAI's image generation API for creating custom logos. With features that produce detailed blog posts, professional client emails, persuasive marketing emails, LinkedIn posts, ad scripts, and unique logo designs, this tool combines the power of AI-driven content creation with a user-friendly interface to boost efficiency and creativity in digital marketing."},
              { name: "Trascription and translation app", link: "https://virendrachavda.github.io/scriber/",
                image: "./Images/translate.jpeg", description: "The project is a React-based transcription and translation app that utilizes machine learning models (Whisper, Xenova) directly in the browser via web workers. The app allows users to upload audio, which is transcribed in real-time, or translate text between supported languages. Key technologies include React, Vite, Tailwind CSS, and xenova/transformers." },
              { name: "Medical Transcription Analysis", link: "https://github.com/VirendraChavda/medical-transcription",
                image: "./Images/medisnap.png", description: "The Medical Transcription Analysis Application is a web-based tool for real-time transcription and analysis of medical audio data using Flask, Socket.IO, and AssemblyAI APIs. It identifies and categorizes key entities such as Protected Health Information (PHI), medical history, anatomy, medications, and procedures, with color-coded formatting for easy visualization. The application features a responsive interface, live transcript display, and the ability to download analyzed data as Excel files, streamlining medical transcription workflows efficiently." },
              { name: "Image Denoising", link: "https://github.com/VirendraChavda/Image-Denoising",
                image: "./Images/denoise.png", description: "This project focuses on reducing noise in images through advanced deep learning techniques. It involves training convolutional neural networks (CNNs) to identify and remove noise from images while preserving fine details and features. The workflow includes preprocessing noisy and clean image pairs, feeding them into the model for training, and evaluating performance on a separate test set. Metrics such as Peak Signal-to-Noise Ratio (PSNR) and Structural Similarity Index Measure (SSIM) are used to quantify the quality of the denoised images. This project highlights the potential of deep learning in image restoration tasks, with practical applications in photography, medical imaging, and surveillance systems." },
              { name: "Art Generation Using Evolutionary Algorithms", link: "https://github.com/VirendraChavda/Evolutionary-Algorithms",
                image: "./Images/evolutionary.png", description: "This project explores the application of evolutionary algorithms for generating abstract art. Inspired by natural selection, the system creates and evolves digital paintings through iterative processes involving mutation, crossover, and selection. Starting from random shapes, colors, and patterns, the algorithm optimizes the composition based on fitness criteria such as aesthetic appeal or similarity to a target image. The project uses Python for implementing the evolutionary framework and visualization libraries to render the generated artworks. " }
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
      <Box sx={{ bgcolor: '#9bc0ff', color: 'black', textAlign: 'center', padding: '10px', marginTop: 'auto' }}>
        <Typography variant="body2">Copyright © Virendrasinh Chavda. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default App;

{/* One video analysis project */}
{/* One voice analysis/recognition project */}
{/* One nlp project */}
{/* One LLM project */}
