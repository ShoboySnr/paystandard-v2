/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import type { Metadata } from 'next';
import AppContainer from '@/components/layout/AppContainer';
import { Box, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'PayStandards Terms of Service',
  description:
    'These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and PayStandards Inc., “we”, “us”, or “our”), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”)',
};

export default function TermsOfService() {
  return (
    <Box
      sx={{
        color: 'deep-blue.secondary',
        marginTop: { md: '80px', xs: '60px' },
      }}
    >
      <AppContainer sx={{ px: { md: '106px', xs: '15px' } }}>
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
            PayStandards <br className={'tw-block md:tw-hidden'} />
            Terms of Service
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
            mt: { xs: '40px', md: '80px' },
            mb: { xs: '80px', md: '100px' },
            padding: { xs: '30px 30px 50px', md: '50px 60px 70px' },
            color: 'dark-purple.main',
            backgroundColor: 'white.main',
          }}
        >
          <Box>
            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              IMPORTANT – THIS IS A LEGAL AGREEMENT BETWEEN YOU ("You" or the
              "Authorized User") AND PAYSTANDARDS INC. ("PayStandards," "We," or
              the "Company"). BEFORE ACCESSING OR USING ANY PART OF THE
              www.paystandards.com WEBSITE, YOU SHOULD READ CAREFULLY THE
              FOLLOWING TERMS AND CONDITIONS CONTAINED IN THIS TERMS OF SERVICE
              AGREEMENT (the or this "TOS") AS THEY GOVERN YOUR ACCESS TO AND
              USE OF THIS PAYSTANDARDS WEB SITE AND ANY PROGRAMS, SERVICES,
              TOOLS, MATERIALS, OR INFORMATION AVAILABLE THROUGH THE
              PAYSTANDARDS WEBSITE OR USED IN CONNECTION THEREWITH
              (collectively, the "WebSite"). PAYSTANDARDS IS WILLING TO LICENSE
              AND ALLOW THE USE OF THIS WEBSITE ONLY ON THE CONDITION THAT YOU
              ACCEPT AND AGREE TO ALL OF THE TERMS AND CONDITIONS CONTAINED IN
              THIS TOS. IF YOU DO NOT AGREE WITH THIS TOS, YOU ARE NOT GRANTED
              PERMISSION TO ACCESS OR OTHERWISE USE THE WEBSITE AND ARE
              INSTRUCTED TO EXIT THE WEBSITE IMMEDIATELY.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                mt: '70px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              TERMS AND CONDITIONS
            </Typography>
          </Box>
          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              1. LICENSE GRANT.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              This WebSite is provided by PayStandards, and this TOS provides to
              you a personal, revocable, limited, non-exclusive, royalty-free,
              non-transferable license to use the WebSite and any programs,
              services, tools, materials, or information made available through
              or from the WebSite conditioned on your continued compliance with
              the terms and conditions of this TOS. This TOS permits you to use
              and access for personal or business purposes only the WebSite (i)
              on a single laptop, workstation, or computer and (ii) from the
              Internet or through an on-line network. You may also load
              information from the WebSite into your laptop's, workstation's, or
              computer's temporary memory (RAM) and print and download materials
              and information from the WebSite solely for your personal or
              business use, provided that all hard copies contain all copyright
              and other applicable notices contained in such materials and
              information. If you are using the WebSite on behalf of a company
              or other form of entity, please note that such a company or entity
              may have a separate agreement with Company regarding access and
              usage privileges for the WebSite, including, without limitation, a
              member services agreement with Company. Nevertheless, your
              personal use of the WebSite will be subject to the obligations and
              restrictions regarding use of the WebSite as set forth in this
              TOS.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              2. RESTRICTIONS.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              The foregoing license is limited. You may not use, copy, store,
              reproduce, transmit, distribute, display, rent, lease, sell,
              modify, alter, license, sublicense, or commercially exploit any
              data provided by PayStandards through the WebSite in any manner
              not expressly permitted by this TOS. In addition, you may not
              modify, translate, decompile, create any derivative work(s) of,
              copy, distribute, disassemble, broadcast, transmit, publish,
              remove or alter any proprietary notices or labels, license,
              sublicense, transfer, sell, mirror, frame, exploit, rent, lease,
              private label, grant a security interest in, or otherwise use in
              any manner not expressly permitted herein the WebSite. Moreover,
              you may not (i) use any "deep link," "page scrape," "robot,"
              "spider," or other automatic device, program, script, algorithm,
              or methodology, or any similar or equivalent manual process, to
              access, acquire, copy, or monitor any portion of the WebSite or in
              any way reproduce or circumvent the navigational structure or
              presentation of the WebSite to obtain or attempt to obtain any
              materials, documents, or information through any means not
              purposely made available through the WebSite, (ii) attempt to gain
              unauthorized access to any portion or feature of the WebSite,
              including, without limitation, the account of any other Authorized
              User(s), or any other systems or networks connected to the WebSite
              or to any Company server or to any of the services offered on or
              through the WebSite, by hacking, password "mining," or any other
              illegitimate or prohibited means, (iii) probe, scan, or test the
              vulnerability of the WebSite or any network connected to the
              WebSite, nor breach the security or authentication measures on the
              WebSite or any network connected to the WebSite, (iv) reverse
              look-up, trace, or seek to trace any information on any other
              Authorized User of or visitor to the WebSite, (v) take any action
              that imposes an unreasonable or disproportionately large load on
              the infrastructure of the WebSite or Company's systems or networks
              or any systems or networks connected to the WebSite, (vi) use any
              device, software, or routine to interfere with the proper working
              of the WebSite or any transaction conducted on the WebSite, or
              with any other person's use of the WebSite, (vii) forge headers,
              impersonate a person, or otherwise manipulate identifiers in order
              to disguise your identity or the origin of any message or
              transmittal you send to Company on or through the WebSite, (viii)
              use the WebSite to harvest or collect e-mail addresses or other
              contact information; (ix) market, co-brand, private label,
              separately distribute, resell, or otherwise permit third parties
              to access and use the WebSite (or any part thereof) without
              Company express, separate, and prior written permission, or (x)
              use the WebSite in an unlawful manner or in a manner that could
              damage, disparage, or otherwise negatively impact Company.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              3. USER OBLIGATIONS.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              By downloading, accessing, or using the WebSite in order to view
              our information and materials or submit information of any kind,
              you represent that you are at least the legal age of majority and
              will, at all times, provide true, accurate, current, and complete
              information when submitting information or materials on the
              WebSite, including, without limitation, when you provide
              information via a WebSite registration or submission form. If you
              provide any false, inaccurate, untrue, or incomplete information,
              Company reserves the right to terminate immediately your access to
              and use of the WebSite. In addition, you agree to abide by all
              applicable local, state, national, and international laws and
              regulations with respect to your use of the WebSite. Without
              limiting the generality of the foregoing, you agree that you shall
              not use nor disclose to any other party in a manner not permitted
              by this TOS any personally identifiable information, which you
              receive or which is made available from Company in connection with
              this TOS. This TOS is also expressly made subject to any
              applicable export laws, orders, restrictions, or regulations. You
              shall not export the WebSite (or access thereto) without complying
              with such laws, orders, restrictions, or regulations. In addition,
              you also acknowledge and agree that use of the Internet and access
              to or transmissions or communications with the WebSite is solely
              at your own risk. While PayStandards has endeavored to create a
              secure and reliable WebSite, you should understand that the
              confidentiality of any communication or material transmitted
              to/from the WebSite over the Internet or other form of global
              communication network cannot be guaranteed. Accordingly,
              PayStandards is not responsible for the security of any
              information transmitted to or from the WebSite. You agree to
              assume all responsibility concerning activities related to your
              use of the WebSite, including, providing any support or meeting
              any requirements of your contracts with third parties, obtaining
              and paying for all licenses and costs for third-party software and
              hardware necessary for implementation of the WebSite, and
              maintaining and backing up any data. Any support, training,
              updates, upgrades, or maintenance of or for the WebSite shall only
              be available through the sole discretion of PayStandards or
              pursuant to the terms and conditions of a separate written
              agreement with PayStandards.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              4. DELIVERY OF INFORMATION.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              When using and/or to facilitate the operation of certain features
              of the WebSite, you may provide PayStandards with additional
              content or information (a "Posting"). In connection with
              delivering and providing to PayStandards any such Posting, you
              hereby and automatically grant to PayStandards a non-exclusive,
              worldwide, perpetual, irrevocable, royalty-free, sublicensable
              right and license (through multiple tiers) to copy, distribute,
              create derivative works from, display, modify, reformat, transmit,
              and otherwise use any such content or information as necessary in
              connection with the WebSite and PayStandards’ service obligations
              in any form, media, or technology now known or later developed for
              the full term of any rights that may exist in such content or
              information. With respect to any such content or information, you
              must also obtain at your sole expense all necessary consents,
              rights, permissions, and clearances (and provide PayStandards with
              reasonable proof thereof (if requested)) required for PayStandards
              to use such content or information in connection with
              PayStandards’ services and the WebSite. Notwithstanding the
              foregoing, you acknowledge and agree that PayStandards shall not
              be responsible for any failures, inoperability, delays, or
              problems caused by your failure to obtain the necessary rights,
              clearance or permission or to provide any necessary content or
              information for your use of the WebSite in a timely or accurate
              manner. Moreover, PayStandards assumes no responsibility for the
              deletion of or failure to store any content or information.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              5. OTHER TERMS AND CONDITIONS.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              Additional notices, terms, and conditions may apply to membership,
              receipt of services, participation in a particular program,
              conference, training, or seminar, Authorized User registration
              with the WebSite, whether existing now or in the future, and/or to
              other specific portions or features of the WebSite, all of which
              are made a part of this TOS by this reference. In particular, this
              TOS, in and of itself, shall not entitle you to any of
              PayStandards membership benefits until you execute and
              PayStandards accepts an applicable member services agreement with
              PayStandards. You agree to abide by such other notices, terms, and
              conditions. If there is a conflict between this TOS and the terms
              posted for or applicable to a specific portion of the WebSite, the
              latter terms shall control with respect to your use of that
              portion of the WebSite. PayStandards' obligations, if any, with
              respect to its programs, services, tools, materials, or
              information are governed solely by the terms, conditions, notices,
              and agreements pursuant to which they are provided, and nothing on
              this TOS should be construed to alter such terms, conditions,
              notices, and agreements.{' '}
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              6. USER NAME HANDLING POLICY.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              Registration as an Authorized User for access to certain areas of
              the WebSite that may now or in the future be reserved for certain
              approved individuals, may require both a user name and a password.
              Only one Authorized User can use one user name and password and,
              thus, one account. By limiting access, it helps avoid unauthorized
              usage by other persons or entities because anyone with knowledge
              of both your user name and password can gain entry to the WebSite
              and to your account. Accordingly, by using the WebSite, you agree
              to consider your user name and password as confidential
              information and to keep your user name and password confidential.
              You also agree not to use another Authorized User's user name and
              password. You will immediately notify PayStandards if you become
              aware of any loss or theft of your password or any unauthorized
              use of your user name and password. PayStandards cannot and will
              not be liable for any loss or damage arising from your failure to
              comply with these obligations. PayStandards reserves the right to
              delete or change (with notice) a user name or password at any time
              and for any reason.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              7. PRIVACY POLICY.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              You understand, acknowledge, and agree that the operation of
              certain programs, services, tools, materials, or information of
              the WebSite requires the submission, use, and dissemination of
              various personal identifying information. Accordingly, if you wish
              to access and use those programs, services, tools, materials, or
              information of the WebSite, you acknowledge and agree that your
              use of the WebSite will constitute acceptance of PayStandards'
              personal identifying information collection and use practices.
              Please see PayStandards' Privacy Policy for a summary of
              PayStandards' personal identifying information collection and use
              practices.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              8. POSTINGS.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              This WebSite may contain blogs, message boards, comment areas,
              questionnaires, chat rooms, and other interactive features where
              Authorized Users can share and display certain Postings. To the
              extent that the WebSite contains such communication forums
              (collectively, “Forums”), you agree that by using the WebSite or
              providing or making any Postings you will not post or transmit any
              of the following materials on the WebSite or any of the Forums:
            </Typography>
            <Typography
              component="ul"
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
                pl: '40px',
                listStyleType: 'lower-alpha',
                '& li': {
                  marginBottom: '15px',
                },
              }}
              className="tw-list-disc"
            >
              <li>
                Anything that interferes with or disrupts the Website or the
                operation thereof
              </li>
              <li>
                Statements or material that defames, harasses, abuses, stalks,
                threatens, intimidates, or in any way infringes on the rights of
                others
              </li>
              <li>
                Unauthorized copyrighted materials or any other material that
                infringes on the intellectual property rights, trade secrets, or
                privacy of others
              </li>
              <li>
                Statements or material that violates other contractual or
                fiduciary rights, duties, or agreements
              </li>
              <li>
                Statements or material that is bigoted, hateful, or racially
                offensive
              </li>
              <li>
                Statements or material that encourages criminal conduct or that
                would give rise to civil liability or otherwise violates any law
                or regulation in any jurisdiction
              </li>
              <li>
                Statements or material that constitutes anti-competitive
                collaboration and/or antitrust violations
              </li>
              <li>
                Statements or material that contains vulgar, obscene, profane,
                or otherwise objectionable language or images that typically
                would not be considered socially or professionally responsible
                or appropriate in person
              </li>
              <li>Statements or material that harms minors</li>
              <li>
                Statements or material that impersonates any other person or
                entity, whether actual or fictitious, including, without
                limitation, employees and representatives of PayStandards
              </li>
              <li>
                Statements or material that misrepresents your affiliation with
                any entity and/or PayStandards
              </li>
              <li>
                Anything that violates the privacy or publicity rights of any
                other person, including, without limitation, displaying any
                personal identifying information of another individual
              </li>
              <li>Chain letters or pyramid schemes</li>
              <li>
                Statements or material that constitutes junk mail, spam, or
                unauthorized advertising or promotional materials
              </li>
              <li>
                Statements or material that are “off-topic” for a designated
                Forum
              </li>
              <li>
                Files that contain malicious code, viruses, corrupted files, or
                any other similar software or programs that may damage the
                operation of another’s computer, network, or the Website
              </li>
              <Typography
                sx={{
                  textAlign: 'justify',
                  fontSize: '18px',
                  fontWeight: 400,
                  color: 'dark-purple.main',
                }}
              >
                As Forums are public, the Authorized User experience is enhanced
                if you follow the foregoing and following guidelines. Please use
                netiquette. Please do not post any content or information of a
                personal nature, such as video or audio of friends and family.
                Please be succinct and stay on topic within a particular Forum.
                Please remember to respect others and their opinions.
                PayStandards encourages open and sincere communication, but
                urges all Authorized Users to remember that Forums are intended
                to be a resource for all.{' '}
              </Typography>
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              9. PERMISSION TO USE POSTINGS.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              You represent that you have all necessary rights to make the
              Posting available to PayStandards and a Forum, and you also
              acknowledge that such Postings are non-confidential for all
              purposes and that PayStandards has no control over the extent to
              which any idea or information may be used by any party or person
              once it is posted or displayed. Accordingly, notwithstanding this
              right and license, it is understood that by merely permitting your
              information, content, and materials to appear on the WebSite,
              PayStandards has not become and is not a publisher of such
              information, content, and materials and is merely functioning as
              an intermediary to enable you to provide and display a Posting.
              Moreover, PayStandards assumes no responsibility for the deletion
              of or failure to store any Posting and recommends that you do not
              post, display, or transmit any confidential or sensitive
              information.
            </Typography>
          </Box>
          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              10. NO PRE-SCREENING OF POSTINGS.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              PayStandards is not responsible for screening, policing, editing,
              or monitoring your or another Authorized User’s Postings and
              encourages all of its Authorized Users to use reasonable
              discretion and caution in evaluating or reviewing any Posting.
              Moreover, and except as provided below with respect to
              PayStandards' right and ability to delete or remove a Posting (or
              any part thereof), PayStandards does not endorse, oppose, or edit
              any opinion or information provided by you or another Authorized
              User and does not make any representation with respect to, nor
              does it endorse the accuracy, completeness, timeliness, or
              reliability of any advice, opinion, statement, or other material
              displayed, uploaded, or distributed by you or any other Authorized
              User. Nevertheless, PayStandards reserves the right to delete or
              take other action with respect to Postings (or parts thereof) that
              PayStandards believes in good faith violate this TOS and/or are,
              or are potentially, unlawful or harmful to PayStandards or its
              products, services, and goodwill or harmful to others in its sole
              discretion. If you violate this TOS, PayStandards may, in its sole
              discretion, delete the unacceptable content from your Posting,
              remove or delete the Posting in its entirety, issue you a warning,
              and/or terminate your use of the WebSite. Moreover, it is a policy
              of PayStandards to take appropriate actions under the Digital
              Millennium Copyright Act under U.S. Copyright Law and other
              applicable intellectual property laws. If you become aware of
              Postings that violate these rules regarding acceptable behavior or
              content, you may contact PayStandards as provided below.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              11. PROPRIETARY RIGHTS.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              This TOS provides only a limited license to access and use the
              WebSite. Accordingly, you expressly acknowledge and agree that
              PayStandards transfers no ownership or intellectual property
              interest or title in and to the WebSite to you or anyone else. All
              text, graphics, user interfaces, visual interfaces, photographs,
              sounds, artwork, computer code (including html code), programs,
              software, products, information, and documentation as well as the
              design, structure, selection, coordination, expression, "look and
              feel," and arrangement of any content contained on or available
              through the WebSite, unless otherwise indicated, are owned,
              controlled, and licensed by PayStandards and its successors and
              assigns and are protected by law including, but not limited to,
              United States copyright, trade secret, patent, and trademark law,
              as well as other state, national, and international laws and
              regulations. Except as expressly provided herein, PayStandards
              does not grant any express or implied right to you or any other
              person under any intellectual or proprietary rights. Accordingly,
              your unauthorized use of the WebSite may violate intellectual
              property or other proprietary rights laws as well as other laws,
              regulations, and statutes. Please be aware that PayStandards does
              enforce its intellectual property rights to the fullest extent of
              the law and, in particular and without limitation, with respect to
              illegal use of terms confusingly similar to any of PayStandards'
              trademarks. This WebSite is Copyright © 2024 PayStandards Inc.
              All rights reserved. PayStandards also owns a copyright in the
              contents of the WebSite as collective work and/or compilation and
              in the selection, coordination, arrangement, and enhancement of
              the content of the WebSite. Any downloadable or printable
              programs, directories, databases, information, or materials
              available through the WebSite and all copyrights, trade secrets,
              and know-how related thereto, unless otherwise indicated, are
              owned by PayStandards. PayStandards, PayStandards logos, and all
              other names, logos, and icons identifying PayStandards and its
              programs, products, and services are proprietary trademarks of
              PayStandards, and any use of such marks, including, without
              limitation, as domain names, without the express written
              permission of PayStandards is strictly prohibited. Other service
              and entity names mentioned herein may be the trademarks and/or
              service marks of their respective owners.
            </Typography>
          </Box>
          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              12. FEEDBACK AND SUBMISSIONS.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              PayStandards welcomes your feedback and suggestions about
              PayStandards' products or services or the WebSite. By transmitting
              any suggestions, information, material, or other content
              (collectively, "feedback") to PayStandards, you represent and
              warrant that such feedback does not infringe or violate the
              intellectual property or proprietary rights of any third party
              (including, without limitation, patents, copyrights, or trademark
              rights) and that you have all rights necessary to convey to
              PayStandards and enable PayStandards to use such feedback. In
              addition, any feedback received through the WebSite will be deemed
              to include a royalty-free, perpetual, irrevocable, transferable,
              non-exclusive right and license for PayStandards to adopt,
              publish, reproduce, disseminate, transmit, distribute, copy, use,
              create derivative works, and display (in whole or in part)
              worldwide, or act on such feedback without additional approval or
              consideration, in any form, media, or technology now known or
              later developed for the full term of any rights that may exist in
              such content, and you hereby waive any claim to the contrary.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              13. LINKS TO OTHER SITES.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              PayStandards may provide links, in its sole discretion, to other
              sites on the World Wide Web for your convenience in locating or
              accessing related information, products, and services. These sites
              have not necessarily been reviewed by PayStandards and are
              maintained by third parties over which PayStandards exercises no
              control. Accordingly, PayStandards expressly disclaims any
              responsibility for the content, the materials, the accuracy of the
              information, and/or the quality of the products or services
              provided by, available through, or advertised on these third-party
              Web sites. Moreover, these links do not imply an endorsement with
              respect to any third party or any Web site or the products or
              services provided by any third party.
            </Typography>
          </Box>
          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              14. THIRD-PARTY PRODUCTS/SERVICES.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              PayStandards, in its sole discretion, may post the advertisements
              of third parties on the WebSite and/or feature materials,
              programs, products, and services provided by third parties,
              including, without limitation, PayStandards' members or
              affiliates. PayStandards makes no representations with respect to,
              nor does it guarantee or endorse, the quality, non-infringement,
              accuracy, completeness, timeliness, reliability, or correct
              sequencing of such third-party materials, programs, products, and
              services or any other materials, programs, products, and services
              which such third-party materials, products, and services may
              access. Your correspondence or any other dealings with third
              parties found on the WebSite are solely between you and such third
              party. Accordingly, PayStandards expressly disclaims
              responsibility and liability for all third-party provided
              materials, programs, products, and services contained on or
              accessed through the WebSite, and you agree that PayStandards
              shall not be responsible for any loss or damage of any sort
              incurred as a result of any such dealings or as the result of the
              presence of such third parties on the WebSite.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              15. DISCLAIMER.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              WHILE PAYSTANDARDS ENDEAVORS TO PROVIDE RELIABLE INFORMATION,
              SERVICES, PROGRAMS, SOFTWARE, AND MATERIALS, THE INFORMATION,
              SERVICES, PROGRAMS, SOFTWARE, AND MATERIALS AVAILABLE ON OR
              THROUGH THE PAYSTANDARDS WEBSITE ARE PROVIDED ON AN "AS-IS" AND
              "AS AVAILABLE" BASIS AND MAY INCLUDE ERRORS, OMISSIONS, OR OTHER
              INACCURACIES. PAYSTANDARDS IS ALSO NOT RESPONSIBLE FOR ANY
              POSTINGS PROVIDED BY YOU THAT ARE AVAILABLE THROUGH OR FROM THE
              PAYSTANDARDS WEBSITE. MOREOVER, PAYSTANDARDS MAY MAKE
              MODIFICATIONS AND/OR CHANGES IN THE PAYSTANDARDS WEBSITE OR IN THE
              INFORMATION, SERVICES, PROGRAMS, SOFTWARE, AND MATERIALS AVAILABLE
              ON THE PAYSTANDARDS WEBSITE AT ANY TIME AND FOR ANY REASON. YOU
              ASSUME THE SOLE RISK OF MAKING USE AND/OR RELYING ON THE
              INFORMATION, SERVICES, PROGRAMS, AND MATERIALS AVAILABLE ON THE
              PAYSTANDARDS WEBSITE. PAYSTANDARDS MAKES NO REPRESENTATIONS OR
              WARRANTIES ABOUT THE RESULTS THAT CAN BE ACHIEVED FROM OR THE
              SUITABILITY, COMPLETENESS, TIMELINESS, RELIABILITY, LEGALITY, OR
              ACCURACY OF THE INFORMATION, SERVICES, PROGRAMS, AND MATERIALS
              AVAILABLE ON THE PAYSTANDARDS WEBSITE FOR ANY PURPOSE, AND
              EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING,
              WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, OR NON-INFRINGEMENT OR ANY OTHER IMPLIED
              WARRANTY UNDER THE UNIFORM COMPUTER INFORMATION TRANSACTIONS ACT
              AS ENACTED BY ANY STATE. PAYSTANDARDS ALSO MAKES NO REPRESENTATION
              OR WARRANTY THAT THE PAYSTANDARDS WEBSITE WILL OPERATE ERROR FREE
              OR IN AN UNINTERRUPTED FASHION OR THAT ANY FILES OR INFORMATION
              THAT YOU DOWNLOAD FROM THE SITE WILL BE FREE OF VIRUSES OR
              CONTAMINATION OR DESTRUCTIVE FEATURES.
            </Typography>
          </Box>
          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              16. LIMITATION OF LIABILITY.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              You expressly absolve and release PayStandards from any claim of
              harm resulting from a cause beyond PayStandards’ control,
              including, but not limited to, failure of electronic or mechanical
              equipment or communication lines, telephone or other connection
              problems, computer viruses, unauthorized access, theft, operator
              errors, severe weather, earthquakes, or natural disasters,
              strikes, or other labor problems, wars, or governmental
              restrictions. MOREOVER, IN NO EVENT SHALL PAYSTANDARDS BE LIABLE
              FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL
              DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE
              PAYSTANDARDS WEBSITE, WITH THE DELAY OR INABILITY TO USE THE
              PAYSTANDARDS WEBSITE, OR FOR ANY INFORMATION, SERVICES, PROGRAMS,
              PRODUCTS, AND MATERIALS AVAILABLE THROUGH THE PAYSTANDARDS
              WEBSITE, WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY, OR
              OTHERWISE, EVEN IF PAYSTANDARDS HAS BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO
              NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR
              CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT
              APPLY. NOTWITHSTANDING THE FOREGOING, TOTAL LIABILITY OF
              PAYSTANDARDS FOR ANY REASON WHATSOEVER RELATED TO USE OF THE
              PAYSTANDARDS WEBSITE SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU
              TO PAYSTANDARDS IN CONNECTION WITH THE SUBJECT MATTER OF THE
              PARTICULAR DISPUTE DURING THE PRIOR THREE MONTHS.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              17. INDEMNITY.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              You agree to defend, indemnify, and hold harmless PayStandards and
              affiliates and all of their respective employees, agents,
              directors, officers, shareholders, attorneys, successors, and
              assigns from and against any and all claims, proceedings, damages,
              injuries, liabilities, losses, costs, and expenses (including
              reasonable attorneys' fees and litigation expenses) relating to or
              arising from any breach by you of this TOS.{' '}
            </Typography>
          </Box>
          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              18. NOTICE OF SECURITY BREACH.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              In addition to the foregoing indemnification obligation, if you
              discover or are notified of a breach or potential breach of
              security with respect to any personally identifiable information
              provided or made available by PayStandards, you shall immediately
              (i) notify PayStandards of such breach or such potential breach
              and (ii) if the applicable data was in your possession or control,
              including, without limitation, in instances where such possession
              or control was permitted by this TOS at the time of such breach or
              potential breach, you shall immediately (a) investigate such
              breach or such potential breach, (b) inform PayStandards of the
              results of such investigation, (c) assist PayStandards using
              commercially reasonable efforts in maintaining the confidentiality
              of such information, and (d) assist PayStandards as reasonably
              necessary to enforce PayStandards' rights and to enable
              PayStandards to comply with any state or federal law requiring the
              provision of notice of any security breach with respect to any
              personally identifiable information of the affected or impacted
              data subjects.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              19. GOVERNING LAW.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              This TOS has been made in and will be construed and enforced
              solely in accordance with the laws of the United States of America
              and the State of New York, U.S.A. as applied to agreements entered
              into and completely performed in the State of New York. You and
              PayStandards each agree to submit to exclusive subject matter
              jurisdiction, personal jurisdiction, and venue of the courts in
              the State of New York for any disputes between us under or arising
              out of this TOS. You also agree to waive any right to a jury trial
              in connection with any action or litigation in any way arising out
              of or related to this TOS and acknowledge that either party may
              seek attorney's fees in any proceeding. Any claim you might have
              against PayStandards must be brought within two (2) years after
              the cause of action arises, or such claim or cause of action is
              barred. You also acknowledge and agree that any applicable state
              law implementation of the Uniform Computer Information
              Transactions Act (including any available remedies or laws) shall
              not apply to this TOS and is hereby disclaimed. PayStandards makes
              no representation that the WebSite is appropriate or available for
              use in other locations outside the State of New York, and access
              to the WebSite from sates, territories, or nations where any
              aspect of the WebSite is illegal is prohibited. You access the
              WebSite on your own volition and are responsible for compliance
              with all applicable local laws with respect to your access and use
              of the WebSite. A printed version of this TOS and of any related
              notice given in electronic form shall be admissible in judicial or
              administrative proceedings based upon or relating to this TOS to
              the same extent and subject to the same conditions as other
              business documents and records originally generated and maintained
              in printed form. Please contact PayStandards if you wish to
              receive a printed copy of this TOS.
            </Typography>
          </Box>
          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              20. ENFORCING SECURITY ON THE SITE.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              Actual or attempted unauthorized use of the WebSite may result in
              criminal and/or civil prosecution, including, without limitation,
              punishment under the Computer Fraud and Abuse Act of 1986 under
              U.S. federal law. PayStandards reserves the right to view,
              monitor, and record activity on the WebSite without notice or
              permission from you, including, without limitation, by archiving
              notices or communications sent by you through the WebSite. Any
              information obtained by monitoring, reviewing, or recording is
              subject to review by law enforcement organizations in connection
              with investigation or prosecution of possible criminal or unlawful
              activity on the WebSite as well as to disclosures required by or
              under applicable law or related government agency actions.
              PayStandards will also comply with all court orders involving
              requests for such information. In addition to the foregoing,
              PayStandards reserves the right, at any time and without notice,
              to modify, suspend, terminate, or interrupt operation of or access
              to the WebSite, or any portion of the WebSite, in order to protect
              the WebSite, PayStandards, or PayStandards' business.
            </Typography>
          </Box>

          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              21. TERM AND TERMINATION.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              This TOS and your right to use the WebSite will take effect at the
              moment you install, access, or use the WebSite and is effective
              until terminated as set forth below. In addition, PayStandards
              reserves the right at any time and on reasonable grounds, which
              shall include, without limitation, any reasonable belief of
              fraudulent or unlawful activity or actions or omissions that
              violate any term or condition of this TOS, to deny your access to
              the WebSite or to any portion thereof in order to protect its name
              and goodwill, its business, and/or other Authorized Users, and
              this TOS will also terminate automatically if you fail to comply
              with this TOS, subject to the survival rights of certain
              provisions identified below. Termination will be effective without
              notice. You may also terminate this TOS at any time by ceasing to
              use the WebSite, but all applicable provisions of this TOS will
              survive termination, as identified below. Upon termination, you
              must destroy all copies of any aspect of the WebSite in your
              possession. In addition to the miscellaneous section below, the
              provisions concerning PayStandards' proprietary rights, feedback,
              indemnity, disclaimers of warranty, limitation of liability, and
              governing law will survive the termination of this TOS for any
              reason.
            </Typography>
          </Box>
          <Box sx={{ mt: '50px', mb: '20px' }}>
            <Typography
              sx={{
                display: 'inline',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              22. MISCELLANEOUS.
            </Typography>

            <Typography
              sx={{
                display: 'inline',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              {' '}
              You acknowledge that any breach, threatened or actual, of this TOS
              will cause irreparable injury to PayStandards, such injury would
              not be quantifiable in monetary damages, and PayStandards would
              not have an adequate remedy at law. You therefore agree that
              PayStandards shall be entitled, in addition to other available
              remedies, to seek and be awarded an injunction or other
              appropriate equitable relief from a court of competent
              jurisdiction restraining any breach, threatened or actual, of your
              obligations under any provision of this TOS. Accordingly, you
              hereby waive any requirement that PayStandards post any bond or
              other security in the event any injunctive or equitable relief is
              sought by or awarded to PayStandards to enforce any provision of
              this TOS. The parties agree that this TOS is for the benefit of
              the parties hereto as well as PayStandards' licensors.
              Accordingly, this TOS is personal to you, and you may not assign
              your rights or obligations to any other person or entity without
              PayStandards' prior written consent. Failure by PayStandards to
              insist on strict performance of any of the terms and conditions of
              this TOS will not operate as a waiver by PayStandards of that or
              any subsequent default or failure of performance. If any provision
              (or part thereof) contained in this TOS is determined to be void,
              invalid, or otherwise unenforceable by a court of competent
              jurisdiction or on account of a conflict with an applicable
              government regulation, such determination shall not affect the
              remaining provisions (or parts thereof) contained herein and the
              illegal, invalid, or unenforceable clause shall be modified in
              compliance with applicable law in a manner that most closely
              matches the intent of the original language. No joint venture,
              partnership, employment, or agency relationship exists between you
              and PayStandards as result of this TOS or your utilization of the
              WebSite. Headings herein are for convenience only. This TOS, along
              with PayStandards' Privacy Policy, represents the entire agreement
              between you and PayStandards with respect to use of the WebSite,
              and it supersedes all prior or contemporaneous communications and
              proposals, whether electronic, oral, or written between you and
              PayStandards with respect to the WebSite.
            </Typography>
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
}
