import type { FunctionComponent, ReactElement } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaSchool } from 'react-icons/fa';
import { FaBookOpenReader } from 'react-icons/fa6';
import { IoMdSchool } from 'react-icons/io';
import { MdGrade } from 'react-icons/md';

import styles from './EducationPage.module.css';

interface EducationPageProps {}

const EDUCATION_QUALIFICATIONS = {
  BE: {
    qualification: 'Bachelor of Engineering',
    collegeName: 'Vasvai College of Engineering',
    collegeLink: 'https://www.vce.ac.in/',
    grade: '8.97 GPA',
    courseName: 'Information Technology',
    startYear: 2018,
    endYear: 2022,
    location: 'Hyderabad, Telangana',
  },
  intermediate: {
    qualification: 'Board of Intermediate Education (12th)',
    collegeName: 'Narayana Junior College',
    collegeLink: 'https://www.narayanagroup.com/',
    grade: '97.7%',
    courseName: 'Maths Physics Chemistry (MPC-NCERT)',
    startYear: 2016,
    endYear: 2018,
    location: 'Hyderabad, Telangana',
  },
  SSC: {
    qualification: 'Secondary School Certificate (10th)',
    collegeName: 'Neo Vivekananda High School',
    collegeLink: undefined,
    grade: '9.8 GPA',
    courseName: 'State Syllabus',
    startYear: 2015,
    endYear: 2016,
    location: 'Jogipet, Telangana',
  },
};

const EducationPage: FunctionComponent<
  EducationPageProps
> = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        {Object.keys(EDUCATION_QUALIFICATIONS).map((eachEdInst, ind) => {
          const educationQualification =
            EDUCATION_QUALIFICATIONS[
              eachEdInst as keyof typeof EDUCATION_QUALIFICATIONS
            ];
          return (
            <div
              key={ind}
              className={styles.boxWrapper}
              style={{ gridArea: `box${ind + 1}` }}
            >
              <div className={styles.innerBox}>
                <div className={styles.qualificationSection}>
                  <div className={styles.qualificationTitle}>
                    {educationQualification.qualification}
                  </div>
                  <div className={styles.gradeBox}>
                    <div className={styles.grade}>
                      {educationQualification.grade}
                    </div>
                    <div className={styles.gradeIcon}>
                      <MdGrade size={24} color={'#FFBF00'} />
                    </div>
                  </div>
                </div>
                <div className={styles.courseSection}>
                  <div className={styles.courseNameSection}>
                    <div className={styles.courseNameIcon}>
                      <FaBookOpenReader size={22} />
                    </div>
                    <div className={styles.courseName}>
                      <i className={styles.courseDef}>Stream: </i>
                      {educationQualification.courseName}
                    </div>
                  </div>
                  <div className={styles.passoutInfo}>
                    {educationQualification.startYear}-
                    {educationQualification.endYear}
                  </div>
                </div>
                <div className={styles.collegeSection}>
                  <div className={styles.collegeInfo}>
                    <div className={styles.collegeIcon}>
                      <FaSchool size={22} />
                    </div>
                    <a
                      href={educationQualification.collegeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className={styles.collegeName}>
                        {educationQualification.collegeName}
                      </div>
                    </a>
                  </div>
                  <div className={styles.locationSection}>
                    <CiLocationOn size={20} />
                    <div className={styles.locationName}>
                      {educationQualification.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.icon}>
                <IoMdSchool size={40} color={'#000000'} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationPage;
