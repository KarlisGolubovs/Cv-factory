import React from 'react';
import { Document, Page, Text, View, Font } from '@react-pdf/renderer';
import { IoMdMail, IoMdCall, IoMdMap, IoMdGlobe, IoMdBriefcase, IoMdSchool } from 'react-icons/IO';

// Register the Roboto font
Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxP.ttf', // URL to the Roboto Regular font
});

interface JobExperience {
    company: string;
    date: string;
    jobTitle: string;
    description: string;
  }
  
  interface Education {
    school: string;
    educationDate: string;
    degree: string;
    gpa: string;
    additionalInfo?: string;
  }
  
  interface PdfDocumentProps {
    name: string;
    objective: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    jobExperiences: JobExperience[];
    educations: Education[];
  }
  
  const PdfDocument: React.FC<PdfDocumentProps> = ({
    name,
    objective,
    email,
    phone,
    location,
    website,
    jobExperiences,
    educations,
  }) => (
    <Document>
    <Page style={{ fontFamily: 'Roboto', padding: 24, backgroundColor: '#f0f0f0' }}>
      <View style={{ backgroundColor: 'white', padding: 12, borderRadius: 8 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>{name}</Text>
        <Text style={{ fontSize: 14, marginBottom: 12 }}>{objective}</Text>
        <Text style={{ fontSize: 12, marginBottom: 8 }}>
          <IoMdMail size={12} style={{ marginRight: 4 }} />
          {email}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 8 }}>
          <IoMdCall size={12} style={{ marginRight: 4 }} />
          {phone}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 8 }}>
          <IoMdMap size={12} style={{ marginRight: 4 }} />
          {location}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 12 }}>
          <IoMdGlobe size={12} style={{ marginRight: 4 }} />
          {website}
        </Text>

        {/* Work Experience */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
            <IoMdBriefcase size={24} style={{ marginRight: 8 }} />
            Work Experience
          </Text>
          {jobExperiences.map((experience, index) => (
            <View key={`job-${index}`} style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{experience.company}</Text>
              <Text>{experience.date}</Text>
              <Text style={{ fontSize: 16 }}>{experience.jobTitle}</Text>
              <Text style={{ marginBottom: 4 }}>Responsibilities:</Text>
              <View>
                {experience.description.split('\n').map((item, i) => (
                  <Text key={i} style={{ marginBottom: 2 }}>
                    {item.trim()}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
            <IoMdSchool size={24} style={{ marginRight: 8 }} />
            Education
          </Text>
          {educations.map((education, index) => (
            <View key={`education-${index}`} style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{education.school}</Text>
              <Text>{education.educationDate}</Text>
              <Text>{education.degree}</Text>
              <Text style={{ marginBottom: 4 }}>GPA: {education.gpa}</Text>
              {education.additionalInfo && <Text>{education.additionalInfo}</Text>}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);


export default PdfDocument;
