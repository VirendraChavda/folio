import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Box, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Lottie from 'react-lottie';
import * as aiAnimation from './animations/ai.json';   // AI Animation
import * as mlAnimation from './animations/ml.json';   // ML Animation
import * as backgroundAnimation from './animations/backgroundAnimation.json';   // Background Animation

function App() {
  const [expanded, setExpanded] = useState({});  // Store expanded state for each item

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

        {/* About Me Section */}
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12} sm={8} md={15}>
            <Card sx={{bgcolor: '#9bc0ff', color: 'black', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, marginBottom: '5px' }}>
              <CardContent>
                <Typography variant="h4" component="div">About Me</Typography>
                <Typography variant="body2" sx={{ marginTop: '10px',  color: 'black', fontSize: '18px', fontFamily: 'Inter, sans-serif', textAlign: 'justify' }}>
                I am a data science professional with over 2 years of experience in developing and deploying machine learning models, predictive analytics, scalable AI solutions, and interactive dashboards. Proficient in Python, R, SQL, and cloud platforms like GCP and AWS, I have expertise in frameworks such as TensorFlow, PyTorch, and FastAPI. I specialize in time-series forecasting, Bayesian optimization, computer vision, NLP, generative models, and have applied these skills to improve operational efficiency through predictive maintenance systems and AI-driven error detection. Additionally, I have experience with Docker, Kubernetes, and deploying machine learning models in cloud environments. My work involves collaborating with cross-functional teams to build data pipelines, automate processes, and deliver actionable insights through tools like Streamlit and Power BI. I am committed to leveraging data science to solve complex problems and enhance decision-making in dynamic business environments.
                </Typography>
              </CardContent>
            </Card>
          </Grid>


          {/* Dashboard Section */}
          <Grid item xs={12}>
          <Card sx={{bgcolor: '#2c387e', marginBottom: '5px'}}>
              <CardContent>
              <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'white'}}>Visualisation</Typography>
              </CardContent>
              <Grid container justifyContent="center" spacing={4}>
              {[
                { name: "HESA Dashboard", link: "https://huggingface.co/spaces/VirendraChavda/Hesa_Dashboard", image: "./Images/dash2.png", description: "Dashboard made using Streamlit, for analysis of HESA financial data for 120+ UK higher education institutions, identifying key trends in surplus, expenses, and admissions. Integrated with GCP APIs for automated data handling and dynamic comment section for stakeholders. Implemented OAuth 2.0 and encryption to secure sensitive financial data." },
                { name: "Marketing Dashboard", link: "https://opensource-dashboard2.com", image: "./Images/dash2.png", description: "A dashboard tracking marketing KPIs and conversion rates." },
                { name: "Sales Dashboard", link: "https://opensource-dashboard3.com", image: "./Images/sales_dashboard.jpg", description: "A dashboard tracking sales metrics and trends." }
              ].map((dashboard, index) => (
                <Grid item xs={12} sm={10} md={3.8} key={index}>
                  <Card sx={{marginBottom: '40px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                    <Link href={dashboard.link} target="_blank">
                      <CardMedia
                        component="img"
                        height="220"
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
                          WebkitLineClamp: expanded[index] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                          WebkitBoxOrient: 'vertical',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleExpandClick(index)}
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

          {/* Statistical Analysis */}
          <Grid item xs={12}>
          <Card sx={{bgcolor: '#9bc0ff', marginBottom: '5px'}}>
              <CardContent>
              <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'black'}}>Data Analysis</Typography>
              </CardContent>

              <Grid container justifyContent="center" spacing={4}>
              {[
                { name: "Money Laundering Detection", link: "https://github.com/VirendraChavda/Anti-Money-Laundering", image: "./Images/network.png", description: "This project focuses on detecting money laundering activities in financial networks using advanced network analysis techniques. By analyzing the relationships between accounts and identifying central nodes, the project uncovers suspicious patterns in transaction flows. Key measures such as degree, closeness, and betweenness centrality are used to highlight accounts that play crucial roles in facilitating potentially illicit transactions. Additionally, community detection algorithms like the Girvan-Newman method are employed to isolate clusters of related accounts for deeper investigation. Through this approach, the project provides insights into how network analysis can enhance anti-money laundering efforts by identifying high-risk accounts within complex transaction networks." },
                { name: "Time Series Analysis", link: "https://opensource-analysis2.com", image: "./Images/time_series.jpg", description: "A tool for analyzing time-series data." },
                { name: "Time Series Analysis", link: "https://opensource-analysis2.com", image: "./Images/time_series.jpg", description: "A tool for analyzing time-series data." }
              ].map((analysis, index) => (
                <Grid item xs={12} sm={6} md={3.8} key={index}>
                  <Card sx={{ marginBottom: '40px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                    <Link href={analysis.link} target="_blank">
                      <CardMedia
                        component="img"
                        height="220"
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
                          WebkitLineClamp: expanded[index + 7] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                          WebkitBoxOrient: 'vertical',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleExpandClick(index + 7)}
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

          
          {/* Machine Learning Section */}
          <Grid item xs={12}>
          <Card sx={{bgcolor: '#2c387e', marginBottom: '5px'}}>
              <CardContent>
              <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'white'}}>Machine Learning</Typography>
              </CardContent>

              <Grid container justifyContent="center" spacing={4}>
              {[
                { name: "Stock Prediction Model", link: "https://opensource-mlmodel1.com", image: "./Images/stock_model.jpg", description: "A model predicting stock prices using historical data." },
                { name: "Optimizing Cancer Classification With Gene Expression", link: "https://github.com/VirendraChavda/Predicting-Invasive-cancer/tree/main", image: "./Images/gene.jpg", description: "This project uses machine learning to classify invasive and non-invasive cancer types based on gene expression data. By applying dimensionality reduction techniques such as two-sample t-tests, LASSO regression, and variance-based selection, the study tackles high-dimensional biological data. Supervised models like KNN, SVM, and Logistic Regression were validated through K-fold cross-validation and bootstrapping, showing significant accuracy improvements, with KNN and SVM achieving near-perfect results. Unsupervised methods like clustering and PCA were also explored to uncover underlying data patterns, offering valuable insights for cancer classification." },
                { name: "Treatment Prediction", link: "https://huggingface.co/spaces/VirendraChavda/Drug_Classifier", image: "./Images/drug.png", description: "This machine learning project focuses on predicting personalized treatment plans for diabetic patients based on key health indicators such as age, sex, blood pressure, cholesterol levels, and sodium-to-potassium ratio. By leveraging advanced machine learning algorithms, the model analyzes patient data to recommend optimal treatment strategies, improving the decision-making process for healthcare providers. The project aims to enhance patient outcomes by providing data-driven insights into diabetes management, allowing for more accurate and tailored treatment recommendations. This approach highlights the potential of AI in transforming personalized healthcare for diabetic patients." }
              ].map((model, index) => (
                <Grid item xs={12} sm={6} md={3.8} key={index}>
                  <Card sx={{ marginBottom: '40px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                    <Link href={model.link} target="_blank">
                      <CardMedia
                        component="img"
                        height="220"
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
                          WebkitLineClamp: expanded[index + 3] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                          WebkitBoxOrient: 'vertical',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleExpandClick(index + 3)}
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
          <Grid item xs={12}>
          <Card sx={{bgcolor: '#9bc0ff', marginBottom: '5px'}}>
              <CardContent>
              <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'black'}}>Deep Learning</Typography>
              </CardContent>

              <Grid container justifyContent="center" spacing={4}>
              {[
                { name: "Art Generation Model", link: "https://opensource-aimodel1.com", image: "./Images/art_generation.jpg", description: "A generative AI model creating art." },
                { name: "Text Summarization Model", link: "https://opensource-aimodel2.com", image: "./Images/text_summarization.jpg", description: "An NLP model for text summarization." },
                { name: "Text Summarization Model", link: "https://opensource-aimodel2.com", image: "./Images/text_summarization.jpg", description: "An NLP model for text summarization." }
              ].map((ai, index) => (
                <Grid item xs={12} sm={6} md={3.8} key={index}>
                  <Card sx={{ marginBottom: '40px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                    <Link href={ai.link} target="_blank">
                      <CardMedia
                        component="img"
                        height="220"
                        image={ai.image}  // Linking to local images
                        alt={ai.name}
                      />
                    </Link>
                    <CardContent>
                      <Typography>{ai.name}</Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          textAlign: 'justify',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: expanded[index + 5] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                          WebkitBoxOrient: 'vertical',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleExpandClick(index + 5)}
                      >
                        {ai.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            </Card>
          </Grid>

          {/* Gen AI Section */}
          <Grid item xs={12}>
          <Card sx={{bgcolor: '#2c387e', marginBottom: '5px'}}>
              <CardContent>
              <Typography variant="h4" component="div"  sx={{fontFamily: 'Inter, sans-serif', color: 'white'}}>Generative AI</Typography>
              </CardContent>

              <Grid container justifyContent="center" spacing={4}>
              {[
                { name: "Stock Prediction Model", link: "https://opensource-mlmodel1.com", image: "./Images/stock_model.jpg", description: "A model predicting stock prices using historical data." },
                { name: "Optimizing Cancer Classification With Gene Expression", link: "https://github.com/VirendraChavda/Predicting-Invasive-cancer/tree/main", image: "./Images/gene.jpg", description: "This project uses machine learning to classify invasive and non-invasive cancer types based on gene expression data. By applying dimensionality reduction techniques such as two-sample t-tests, LASSO regression, and variance-based selection, the study tackles high-dimensional biological data. Supervised models like KNN, SVM, and Logistic Regression were validated through K-fold cross-validation and bootstrapping, showing significant accuracy improvements, with KNN and SVM achieving near-perfect results. Unsupervised methods like clustering and PCA were also explored to uncover underlying data patterns, offering valuable insights for cancer classification." },
                { name: "Treatment Prediction", link: "https://huggingface.co/spaces/VirendraChavda/Drug_Classifier", image: "./Images/drug.png", description: "This machine learning project focuses on predicting personalized treatment plans for diabetic patients based on key health indicators such as age, sex, blood pressure, cholesterol levels, and sodium-to-potassium ratio. By leveraging advanced machine learning algorithms, the model analyzes patient data to recommend optimal treatment strategies, improving the decision-making process for healthcare providers. The project aims to enhance patient outcomes by providing data-driven insights into diabetes management, allowing for more accurate and tailored treatment recommendations. This approach highlights the potential of AI in transforming personalized healthcare for diabetic patients." }
              ].map((model, index) => (
                <Grid item xs={12} sm={6} md={3.8} key={index}>
                  <Card sx={{ marginBottom: '40px', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-10px)' }, backgroundColor: 'lavender'}}>
                    <Link href={model.link} target="_blank">
                      <CardMedia
                        component="img"
                        height="220"
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
                          WebkitLineClamp: expanded[index + 3] ? 'none' : 1,  // Show full description if expanded, otherwise show 2 lines
                          WebkitBoxOrient: 'vertical',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleExpandClick(index + 3)}
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



        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#2c387e', color: 'white', textAlign: 'center', padding: '10px', marginTop: 'auto' }}>
        <Typography variant="body2">© Untitled. All rights reserved.</Typography>
      </Box>
    </Box>
  );
}

export default App;
