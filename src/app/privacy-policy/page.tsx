import React from 'react';
import { Box, Typography } from '@mui/material';
import AppContainer from '@/components/layout/AppContainer';
import { Grid } from '@mui/system';

export default function PrivacyPolicy() {
  return (
    <Box
      sx={{
        color: 'deep-blue.secondary',
        marginTop: { md: '200px', xs: '120px' },
      }}
    >
      <AppContainer>
        <Box>
          <Typography
            sx={{
              mb: { xs: '15px', md: '0' },
              fontSize: { md: '40px', xs: '32px' },
              fontWeight: 400,
              color: 'dark-purple.main',
              textAlign: 'center',
            }}
          >
            PayStandards
            <br className={'tw-block md:tw-hidden'} /> Privacy Policy
          </Typography>

          <Typography
            sx={{
              mb: '20px',
              fontSize: '18px',
              fontWeight: 400,
              color: 'dark-purple.main',
              textAlign: 'center',
            }}
          >
            <span className="tw-font-[700]">Last revised: </span>
            October 27, 2023
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: '0', lg: '80px' },
          }}
        >
          <Grid container spacing={'20px'}>
            <Grid
              container
              size={{
                md: 8,
                xs: 12,
              }}
              sx={{
                order: { xs: 2, md: 1 },
              }}
            >
              <Box
                sx={{
                  mb: { xs: '80px', lg: '100px' },
                  padding: { xs: '30px 30px 50px', md: '50px 60px 70px' },
                  color: 'dark-purple.main',
                  backgroundColor: 'white.main',
                  width: '100%',
                }}
              >
                <Box id="introduction">
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Introduction
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    PayStandards Inc. is an enterprise software company that empowers organizations
                    to achieve pay equity.
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    We understand that you are aware of and care about your own personal privacy
                    interests, and we take that seriously. This Privacy Notice describes the
                    PayStandards Inc.’s policies and practices regarding its collection and use of
                    your personal data, and sets forth your privacy rights. We recognize that
                    information privacy is an ongoing responsibility, and so we will from time to
                    time update this Privacy Notice as we undertake new personal data practices or
                    adopt new privacy policies.
                  </Typography>
                </Box>

                <Box id="data-protection-officer">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Data Protection Officer
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    PayStandards Inc. is headquartered in New York, in the United States.
                    PayStandards Inc. has appointed an internal data protection officer for you to
                    contact if you have any questions or concerns about PayStandards Inc.’s personal
                    data policies or practices. If you would like to exercise your privacy rights,
                    please direct your query to PayStandards Inc.’s data protection officer.
                    PayStandards Inc.’s data protection officer’s name and contact information are
                    as follows:
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    John Kelly
                    <br />
                    PayStandards Inc.
                    <br />
                    40 Wall Street, #2706, New York, NY 10005
                    <br />
                    john@paystandards.com
                    <br />
                    (917) 822-8308
                  </Typography>
                </Box>

                <Box id="how-we-collect-and-use-your-personal-info">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    How we collect and use (process) your personal information{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    PayStandards Inc. collects personal information about its website visitors and
                    customers. With a few exceptions, this information is generally limited to:
                  </Typography>
                  <Typography
                    component="ul"
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                      pl: '30px',
                    }}
                    className="tw-list-disc"
                  >
                    <li>name</li>
                    <li>job title</li>
                    <li>employer name</li>
                    <li>work address</li>
                    <li>work email</li>
                    <li>work phone number</li>
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    We use this information to provide prospects and customers with services.
                  </Typography>{' '}
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    We do not sell personal information to anyone and only share it with third
                    parties who are facilitating the delivery of our services.{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    From time to time, PayStandards Inc. receives personal information about
                    individuals from third parties. Typically, information collected from third
                    parties will include further details on your employer or industry. We may also
                    collect your personal data from a third party website (e.g. LinkedIn)
                  </Typography>
                </Box>

                <Box id="use-of-the-paystandards-website">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Use of the PayStandards Inc. Website{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    automatically and stores it in log files. The information may include internet
                    protocol (IP) addresses, the region or general location where your computer or
                    device is accessing the internet, browser type, operating system and other usage
                    information about the use of PayStandards Inc.’s website, including a history of
                    the pages you view. We use this information to help us design our site to better
                    suit our users’ needs. We may also use your IP address to help diagnose problems
                    with our server and to administer our website, analyze trends, track visitor
                    movements, and gather broad demographic information that assists us in
                    identifying visitor preferences.
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    PayStandards Inc. has a legitimate interest in understanding how members,
                    customers and potential customers use its website. This assists PayStandards
                    Inc. with providing more relevant products and services, with communicating
                    value to our sponsors and corporate members, and with providing appropriate
                    staffing to meet member and customer needs.{' '}
                  </Typography>{' '}
                </Box>

                <Box id="cookies-and-tracking-technologies">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Cookies and tracking technologies{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    PayStandards Inc. makes available a comprehensive COOKIE_NOTICE that describes
                    the cookies and tracking technologies used on PayStandards Inc. website and
                    provides information on how users can accept or reject them. To view the notice,
                    just click COOKIE_NOTICE.
                  </Typography>
                </Box>

                <Box id="sharing-information-with-third-parties">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Sharing information with third parties{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    The personal information PayStandards Inc. collects from you is stored in one or
                    more databases hosted by third parties located in the United States. These third
                    parties do not use or have access to your personal information for any purpose
                    other than cloud storage and retrieval.
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    We do not otherwise reveal your personal data to non-PayStandards Inc. persons
                    or businesses for their independent use unless: (1) you request or authorize it;
                    (2) it’s in connection with PayStandards Inc.-hosted and PayStandards Inc.
                    co-sponsored conferences as described above; (3) the information is provided to
                    comply with the law (for example, compelled by law enforcement to comply with a
                    search warrant, subpoena, or court order), enforce an agreement we have with
                    you, or to protect our rights, property or safety, or the rights, property or
                    safety of our employees or others; (4) the information is provided to our
                    agents, vendors or service providers who perform functions on our behalf; (5) to
                    address emergencies or acts of God; (6) to address disputes, claims, or to
                    persons demonstrating legal authority to act on your behalf; or (7) in
                    connection with and to a successor of PayStandards Inc. by way of merger or sale
                    of all or substantially all of its assets, provided that such successor agrees
                    as a condition thereof to the restrictions on use and disclosure of such
                    personal data substantially consistent as described in this Privacy Statement.
                    We may also gather aggregated data derived from personal data, data on our
                    services and website visitors and freely use, make available, retain, display or
                    disclose the results of such aggregated (but not personally identifiable)
                    information to our partners, service providers, advertisers, and/or other third
                    parties for marketing,  promotional or business purposes (including, without
                    limitation, for purposes of improving, testing, or operating the services and
                    PayStandards Inc.’s other offerings).
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    The PayStandards Inc. website connects with third party services such as
                    Facebook, LinkedIn, Twitter and others. If you choose to share information from
                    the PayStandards Inc. website through these services, you should review the
                    privacy policy of that service. If you are a member of a third party service,
                    the aforementioned connections may allow that service to connect your visit to
                    our site to your personal data.
                  </Typography>
                </Box>

                <Box id="transferring-personal-data-to-the-us">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Transferring personal data to the U.S.{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    PayStandards Inc. has its headquarters in the United States. Information we
                    collect about you will be processed in the United States. By using PayStandards
                    Inc.’s services, you acknowledge that your personal information will be
                    processed in the United States. The United States has not sought nor received a
                    finding of “adequacy” from the European Union under Article 45 of the GDPR.
                    Pursuant to Article 46 of the GDPR, PayStandards Inc. is providing for
                    appropriate safeguards by entering binding, standard data protection clauses,
                    enforceable by data subjects in the EEA and the UK. These clauses have been
                    enhanced based on the guidance of the European Data Protection Board and will be
                    updated when the new draft model clauses are approved.
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    Depending on the circumstance, PayStandards Inc. also collects and transfers to
                    the U.S. personal data with consent; to perform a contract with you; or to
                    fulfill a compelling legitimate interest of PayStandards Inc. in a manner that
                    does not outweigh your rights and freedoms. PayStandards Inc. endeavors to apply
                    suitable safeguards to protect the privacy and security of your personal data
                    and to use it only consistent with your relationship with PayStandards Inc. and
                    the practices described in this Privacy Statement. PayStandards Inc. also enters
                    into data processing agreements and model clauses with its vendors whenever
                    feasible and appropriate. Since it was founded, PayStandards Inc. has received
                    zero government requests for information.
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    For more information or if you have any questions, please contact us at
                    privacy@paystandards.com.
                  </Typography>
                </Box>

                <Box id="data-subject-rights">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Data subject rights{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    The European Union’s General Data Protection Regulation (GDPR) and other
                    countries’ privacy laws provide certain rights for data subjects. Data Subject
                    rights under GDPR include the following:
                  </Typography>
                  <Typography
                    component="ul"
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                      pl: '30px',
                    }}
                    className="tw-list-disc"
                  >
                    <li>Right to be informed</li>
                    <li>Right of access</li>
                    <li>Right to rectification</li>
                    <li>Right to erasure</li>
                    <li>Right to restrict processing</li>
                    <li>Right of data portability</li>
                    <li>Right to object</li>
                    <li>Rights related to automated decision making including profiling</li>
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    This Privacy Notice is intended to provide you with information about what
                    personal data PayStandards Inc. collects about you and how it is used.
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    If you wish to confirm that PayStandards Inc. is processing your personal data,
                    or to have access to the personal data PayStandards Inc. may have about you,
                    please contact us.
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    You may also request information about: the purpose of the processing; the
                    categories of personal data concerned; who else outside PayStandards Inc. might
                    have received the data from PayStandards Inc.; what the source of the
                    information was (if you didn’t provide it directly to PayStandards Inc.); and
                    how long it will be stored. You have a right to correct (rectify) the record of
                    your personal data maintained by PayStandards Inc. if it is inaccurate. You may
                    request that PayStandards Inc. erase that data or cease processing it, subject
                    to certain exceptions. You may also request that PayStandards Inc. cease using
                    your data for direct marketing purposes. In many countries, you have a right to
                    lodge a complaint with the appropriate data protection authority if you have
                    concerns about how PayStandards Inc. processes your personal data. When
                    technically feasible, PayStandards Inc. will—at your request—provide your
                    personal data to you.
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    Reasonable access to your personal data will be provided at no cost. If access
                    cannot be provided within a reasonable time frame, PayStandards Inc. will
                    provide you with a date when the information will be provided. If for some
                    reason access is denied, PayStandards Inc. will provide an explanation as to why
                    access has been denied.
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    For questions or complaints concerning the processing of your personal data, you
                    can email us at privacy@paystandards.com. Alternatively, if you are located in
                    the European Union, you can also have recourse to the European Data Protection
                    Supervisor or with your nation’s data protection authority.
                  </Typography>
                </Box>

                <Box id="data-storage-and-retention">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Data storage and retention{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    Your personal data is stored by the PayStandards Inc. on its servers, and on the
                    servers of the cloud-based database management services the PayStandards Inc.
                    engages, located in the United States. The PayStandards Inc. retains service
                    data for the duration of the customer’s business relationship with the
                    PayStandards Inc. and for a period of time thereafter, to analyze the data for
                    PayStandards Inc.’s own operations, and for historical and archiving purposes
                    associated with PayStandards Inc.’s services. PayStandards Inc. retains prospect
                    data until such time as it no longer has business value and is purged from
                    PayStandards Inc. systems. All personal data that PayStandards Inc. controls may
                    be deleted upon verified request from Data Subjects or their authorized agents.
                    For more information on where and how long your personal data is stored, and for
                    more information on your rights of erasure and portability, please contact us
                    at: privacy@paystandards.com
                  </Typography>
                </Box>

                <Box id="childrens-data">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Children’s data{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    We do not knowingly attempt to solicit or receive information from children.
                  </Typography>
                </Box>

                <Box id="question-concerns-or-complaints">
                  <Typography
                    sx={{
                      mt: '60px',
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'dark-purple.main',
                      textAlign: 'left',
                    }}
                  >
                    Questions, concerns or complaints{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    If you have questions, concerns, complaints, or would like to exercise your
                    rights, please contact us at:{' '}
                  </Typography>
                  <Typography
                    sx={{
                      mb: '20px',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: 'dark-purple.main',
                    }}
                  >
                    PayStandards Inc.
                    <br />
                    John Kelly
                    <br />
                    40 Wall Street, #2706, New York, NY 10005
                    <br />
                    john@paystandards.com
                    <br />
                    (917) 822-8308
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              container
              size={{
                md: 4,
                xs: 12,
              }}
              sx={{
                order: { xs: 1, md: 2 },
              }}
            >
              <Box
                sx={{
                  mb: { xs: '0', lg: '0' },
                  padding: { xs: '30px 30px 50px', md: '50px 40px 60px' },
                  color: 'dark-purple.main',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    mb: '20px',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'dark-purple.main',
                    textAlign: 'left',
                  }}
                >
                  Table of Contents{' '}
                </Typography>

                <Typography
                  component="ul"
                  sx={{
                    mb: '20px',
                    fontSize: '18px',
                    fontWeight: 400,
                    color: 'dark-purple.main',
                    pl: '30px',
                  }}
                  className="tw-list-disc"
                >
                  <li>
                    <a href="#introduction">Introduction</a>
                  </li>
                  <li>
                    <a href="#data-protection-officer">Data Protection Officer</a>
                  </li>
                  <li>
                    <a href="#how-we-collect-and-use-your-personal-info">
                      How we collect and use (process) your personal information
                    </a>
                  </li>
                  <li>
                    <a href="#use-of-the-paystandards-website">
                      Use of the paystandards.com website
                    </a>
                  </li>
                  <li>
                    <a href="#cookies-and-tracking-technologies">
                      Cookies and tracking technologies
                    </a>
                  </li>
                  <li>
                    <a href="#use-of-the-paystandards-website">
                      Use of the PayStandards Inc. services
                    </a>
                  </li>
                  <li>
                    <a href="#sharing-information-with-third-parties">
                      When and how we share information with third parties
                    </a>
                  </li>
                  <li>
                    <a href="#transferring-personal-data-to-the-us">
                      Transferring personal data to the U.S.
                    </a>
                  </li>
                  <li>
                    <a href="#data-subject-rights">Data Subject rights</a>
                  </li>
                  <li>
                    <a href="#data-subject-rights">Security of your information</a>
                  </li>
                  <li>
                    <a href="#data-storage-and-retention">Data storage and retention</a>
                  </li>
                  <li>
                    <a href="#question-concerns-or-complaints">
                      Questions, concerns, or complaints
                    </a>
                  </li>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </AppContainer>
    </Box>
  );
}
