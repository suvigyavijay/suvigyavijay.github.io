// This file contains description about some of the projects I have worked upon 
// and some competitions I have participated in during college.

class Projects {
    constructor() {
        this.info = 'List of Projects';
    }

    getProjects(projectId) {
        let projects = [
// Alignment Hack for Mobiles, anyways indentation in Javascript is the least of the concerns.
{
    'projectId': 1,
    'name': 'Deep Localisation',
    'desc': 'A project with highly accurate single-object localisation model, with a mix of snapshot ensembles and attention on various fine-tuned imagenet architectures.'
},
{
    'projectId': 2,
    'name': 'Deep Recommender',
    'desc': 'An implementation of the paper "Training Deep AutoEncoders for Collaborative Filtering" using Tensorflow and Keras on Netflix Prize Dataset and OMDb.'
},
{
    'projectId': 3,
    'name': 'Latch - The Location Based Chat',
    'desc': 'A cross-platform hybrid location-based chat application including features such as group chat, SOS alerts, chatbot service and end-to-end encryption for chat messages. Built using Ionic Framework and a combination of NodeJS and Django.'
},
{
    'projectId': 4,
    'name': 'Stock Price Movement Analysis',
    'desc': 'Analyzed correlation of stock price movement with ad-campaigns using sentiment analysis on Twitter data. Scraped Twitter data with Selenium and sentiment analysis was performed by using SciPy.'
},
{
    'projectId': 5,
    'name': 'Adrift',
    'desc': 'An augmented reality app focusing on visualizing textbook models in 3D for an enhanced education experience of school students.'
}
        ];
        
        return projects[projectId - 1];
    }
}

class Competitions {
    constructor() {
        this.info = 'List of Competitions';
    }

    getCompetitions(compId) {
        let competitions = [
{
    'compId': 1,
    'name': 'Flipkart GRiD Datathon',
    'year': 2019,
    'position': 'Finalist',
    'info': 'Finalist among the Top 10 teams across the 2800+ teams registered from top engineering colleges in India, securing a leaderboard score(Mean IoU) of 93.89%. Finals were held at Flipkart Headquarters, Bangalore.'
},
{
    'compId': 2,
    'name': 'Schneider Electric Go Green in the City',
    'year': 2018,
    'position': 'Global Finalist',
    'info': 'Finalist among the Top 10 teams across 180 countries and 24,000+ participants, who pitched their ideas to senior executives of Schneider in Atlanta, USA. Developed an incentive-based waste management system for a smart city based in future.'
},
{
    'compId': 3,
    'name': 'ITC Infotech iTech',
    'year': 2017,
    'position': 'Winner',
    'info': 'Annual Technology Innovation Co-creation Platform hosted by ITC lnfotech. It was open to all codeathon including students, graduates and software developers. Winner amongst 4000+ teams across India and was awarded 4200 USD.'
}
        ];

        return competitions[compId - 1];
    }
}


