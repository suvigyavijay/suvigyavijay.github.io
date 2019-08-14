'''
Hi there, I'm Suvigya. I'm a developer currently living in Bangalore, India. 

Currently, I'm a Data Science Intern at Flipkart in the Planning team.

While I love my work, I'm always curious about tech, anything related to computers, and interested in design. Apart from machine learning and neural networks, I have tried out multiple domains including graphic designing, web and app development, deployment, and have given a shot at numerous software tools.
'''
class SuvigyaVijay:
    def __init__(self):
        self.name = 'Suvigya Vijay'
        self.dateOfBirthTimestamp = 816660072012
        self.email = 'suvigyavijay@gmail.com'
    
    def workExperience(self):
        return {
            'May 2019 - now': 'Data Science Intern @ Flipkart',
            'May 2017 - Aug 2017': 'Google Summer of Code Student @ Performance Co-Pilot',
            'Dec 2016 - Jan 2017': 'Front-end Developer @ PrimaryKey'
        }

    def education(self):
        return [
            { '2015 - now': 'M.Sc. in Economics at Birla Institute of Technology and Science' },
            { '2015 - now': 'B.E. in Electronics and Instrumentation at Birla Institute of Technology and Science' }
        ]

    def responsibilities(self):
        return {
            'Neural Networks and Fuzzy Logic': 'Teaching Assistant',
            'Dept. of Visual Media, BITS Pilani': 'Coordinator'
        }

    def getResume(self):
        return 'https://suvigyavijay.me/resume.pdf'


