import React from 'react';
import { Box, Typography } from '@mui/material';
import AppContainer from '@/components/layout/AppContainer';

export default function MasterSubscriptionAgreement() {
  return (
    <Box
      sx={{
        color: 'deep-blue.secondary',
        marginTop: { md: '200px', xs: '120px' },
      }}
    >
      <AppContainer sx={{ px: { md: '215px', xs: '15px' } }}>
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
            <br className={'tw-block md:tw-hidden'} />
            Master Service
            <br className={'tw-block md:tw-hidden'} /> Agreement
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
            December 19, 2022
          </Typography>

          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 400,
              color: 'dark-purple.main',
              textAlign: 'center',
            }}
          >
            You can find our previous terms as of December 19, 2022
            <span>
              {' '}
              <a className="tw-text-blue tw-underline" href="#">
                here
              </a>
            </span>
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
            You can find our previous terms as of October 27, 2023
            <span>
              {' '}
              <a className="tw-text-blue tw-underline" href="#">
                here
              </a>
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            mt: { xs: '40px', lg: '80px' },
            mb: { xs: '80px', lg: '100px' },
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
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              This Vanta Master Subscription Agreement (“MSA”) is effective as of the effective date
              of an applicable signed order form ( “Order Form” and such date the “Effective Date”)
              and is by and between Vanta Inc., a Delaware corporation with a place of business at
              369 Hayes St, San Francisco, CA 94102 (“Vanta”), and the customer (i) set forth on the
              Order Form or (ii) who registers for the Services on a free trial basis (“Trial
              Services”) and accepts this MSA (each, a “Customer”) (each a “Party” and together the
              “Parties”). In the event of any inconsistency or conflict between the terms of the MSA
              and the terms of any Order Form, the terms of the Order Form control. If Customer is
              provided with access to the Services on a free trial basis, the section of this
              Agreement entitled “Free Trial Services” will govern such access and, unless as
              otherwise indicated on an applicable Order Form, certain of Vanta’s obligations under
              this MSA will not apply, as further described below.
            </Typography>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">Section 1. Services. </span>The “Services” mean the
              products and services that are ordered by Customer from Vanta in an Order Form
              referencing this MSA or, if applicable, the Trial Services that are made available to
              Customer. Services exclude any products or services provided by third parties, even if
              Customer has connected those products or services to the Services. Subject to the
              terms and conditions of this MSA, Vanta will make the Services available to Customer
              during the Term
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              Section 2. Fees and Payment.{' '}
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">2.1. Fees. </span>
              Customer will pay the fees specified in the Order Form (the “Fees”).
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">2.2. Payment; Taxes. </span>
              Customer shall keep a payment method on file with Vanta for payment of Fees. Vanta
              shall invoice Customer for Fees, either within the Services or directly, within thirty
              (30) days of the Effective Date, the start of the Renewal Term (as defined below), or
              otherwise as specified in the Order Form. Customer shall pay all invoiced Fees (i)
              charged automatically via the payment method associated with your Vanta Account or
              (ii) if agreed otherwise in writing by both parties, upon receipt of such invoice. In
              the event of non-payment of Fees by Customer for thirty (30) days after the due date
              of an invoice, Customer’s access to the Services may be immediately suspended and
              Customer must pay the entire remaining balance of Fees to regain access to the
              Services. Fees do not include local, state, or federal taxes or duties of any kind and
              any such taxes will be assumed and paid by Customer, except for taxes on Vanta based
              on Vanta’s income or receipts.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">2.3. Price Changes. </span>
              Vanta may change prices for the Services from time to time, in its sole discretion.
              Any price changes will be effective upon the commencement of Customer’s next Renewal
              Term; provided, that Vanta shall provide Customer with reasonable notice of any such
              fee increase prior to the expiration of the Term or any Renewal Term.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">2.4. Discounts and Promotional Pricing. </span>
              Prices specified in the Order Form may include discounts or promotional pricing. These
              discounts or promotional pricing amounts may be temporary and may expire upon the
              commencement of a Renewal Term, without additional notice. Vanta reserves the right to
              discontinue or modify any promotion, sale, or special offer at its sole and reasonable
              discretion.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">2.5. Free Trial Services. </span>
              If Customer is granted access to Trial Services, Vanta will make the applicable Trial
              Services available to Customer pursuant to this MSA starting from the time that
              Customer registers and is approved for such Trial Services until the earlier of: (a)
              the end of the Trial Services period communicated to Customer; (b) the start date of
              any Order Form executed by Customer for Service(s) in exchange for payment; or (c)
              termination by Vanta in its sole discretion.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              ANY CUSTOMER INFORMATION THAT CUSTOMER PROVIDES OR MAKES AVAILABLE TO VANTA DURING THE
              PROVISION OF TRIAL SERVICES MAY BE PERMANENTLY DELETED, AT VANTA’S DISCRETION, UNLESS
              CUSTOMER EXECUTES AN ORDER FORM FOR THE SAME SERVICES AS THOSE COVERED BY THE TRIAL
              SERVICES OR EXPORTS SUCH CUSTOMER INFORMATION BEFORE THE END OF THE TRIAL SERVICES
              PERIOD.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              NOTWITHSTANDING THE “REPRESENTATIONS, WARRANTIES AND DISCLAIMERS” SECTION AND
              “INDEMNIFICATION” SECTION BELOW, FREE TRIAL SERVICES ARE PROVIDED “AS-IS” WITHOUT ANY
              WARRANTY AND VANTA SHALL HAVE NO INDEMNIFICATION OBLIGATIONS NOR LIABILITY OF ANY TYPE
              WITH RESPECT TO THE TRIAL SERVICES UNLESS SUCH EXCLUSION OF LIABILITY IS NOT
              ENFORCEABLE UNDER APPLICABLE LAW IN WHICH CASE VANTA’S LIABILITY WITH RESPECT TO THE
              TRIAL SERVICES SHALL NOT EXCEED $1,000.00. NOTWITHSTANDING ANYTHING TO THE CONTRARY IN
              THE “LIMITATION OF LIABILITY” SECTION BELOW, CUSTOMER SHALL BE FULLY LIABLE UNDER THIS
              AGREEMENT TO VANTA AND ITS AFFILIATES FOR ANY DAMAGES ARISING OUT OF CUSTOMER’S USE OF
              THE TRIAL SERVICES, ANY BREACH BY CUSTOMER OF THIS AGREEMENT AND ANY OF CUSTOMER’S
              INDEMNIFICATION OBLIGATIONS HEREUNDER.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              Section 3. Term and Termination.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">3.1. Term and Renewal. </span>
              This MSA commences on the Effective Date and will remain in effect through the term
              specified in the Order Form (or, in the case of Trial Services, for the period of time
              as agreed upon between Vanta and Customer), and will renew as specified in the Order
              Form unless otherwise terminated in accordance with this Section (collectively the
              “Term”). If the Order Form does not specify, the Term will be one year and will
              automatically renew for successive one-year periods unless Customer provides Vanta
              with notice of termination at least thirty (30) days prior to the end of the Term (a
              “Renewal Term”).
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">3.2. Termination for Cause. </span>A Party may
              terminate this MSA for cause (a) upon notice to the other Party of a material breach
              if such breach remains uncured after ten (10) days from the date of the breaching
              Party’s receipt of such notice; (b) if the other Party becomes the subject of a
              petition in bankruptcy or any other proceeding relating to insolvency, receivership,
              liquidation or assignment for the benefit of creditors; or (c) immediately by Vanta if
              Customer makes one of the Prohibited Uses below. Non-payment of Fees by Customer for
              sixty (60) days after issuance of an invoice, and any violation of the Prohibited Uses
              clause below will be considered material breaches of this MSA.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">3.3. Effect of Termination and Survival. </span>Upon
              termination of an Order Form or this MSA (a) with respect to termination of the entire
              MSA, all Order Forms will concurrently terminate, (b) Customer will have no further
              right to use the Services under the terminated or cancelled Order Forms and Vanta will
              remove Customer’s access to same, and (c) unless otherwise specified in writing,
              Customer will not be entitled to any refund of fees paid. The following Sections will
              survive termination: Section 2 (Fees and Payment), Section 4 (Ownership), Section 5
              (Confidentiality), Section 7.3 (Disclaimers), Section 8 (Indemnification), Section 9
              (Limitation of Liability), and Section 10 (Miscellaneous). Termination of this MSA
              will not limit a Party’s liability for obligations accrued as of or prior to such
              termination or for any breach of this MSA.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              Section 4. Ownership, License, and Use of the Services.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">4.1. Ownership. </span>Each Party will retain all
              rights, title and interest in any of its patents, inventions, copyrights, trademarks,
              domain names, trade secrets, know-how and any other intellectual property and/or
              proprietary rights (“Intellectual Property Rights”). Vanta will retain Intellectual
              Property Rights in the Services and all components of, or used to, provide the
              Services or created by the Services or by Vanta in the course of providing the
              Services (the “Services Information”). Customer will retain Intellectual Property
              Rights in all information it provides to Vanta as part of this MSA (other than
              Feedback as described below), including but not limited to in the course of its use of
              the Services (the “Customer Information”).
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">4.2. Licenses. </span>
              Vanta hereby grants Customer a non-exclusive, non-transferable, non-sublicensable
              right to and license to access and use the Services as set forth in the Order Form or
              on a Trial Services basis all subject to the terms and conditions of this MSA and the
              Order Form (if applicable). Customer hereby grants Vanta a non-exclusive,
              non-transferable, non-sublicensable right and license to use the Customer Information
              solely to provide the Services to Customer.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">4.3. Authorized Users. </span>Customer may designate
              and provide access to the Services to employees, agents, or authorized contractors
              (each an “Authorized User”). Customer is responsible for all use and misuse of the
              Services by Authorized Users and for adherence to all terms of this MSA by any
              Authorized Users, and references to Customer herein will be deemed to apply to
              Authorized Users as necessary and applicable. Customer agrees to promptly notify Vanta
              of any unauthorized access or use of which Customer becomes aware. Authorized Users
              are strictly prohibited from sharing their accounts or account passwords and their
              doing so is a material breach of this MSA by Customer.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">4.4. Prohibited Uses. </span>Customer and Authorized
              Users will not: (a) “frame,” distribute, resell, or permit access to the Services by
              any third party other than as allowed by the features and functionality of the
              Services; (b) use the Services in violation of applicable laws; (c) interfere with,
              disrupt, or gain unauthorized access to the Services; (d) successfully or otherwise,
              attempt to: decompile, disassemble, reverse engineer, discover the underlying source
              code or structure of, or copy the Services; (e) provide Vanta any Customer Information
              or Feedback that is unlawful, defamatory, harassing, discriminatory, or infringing of
              third party intellectual property rights; (f) transfer to the Services or otherwise
              use on the Services any code, exploit, or undisclosed feature that is designed to
              delete, disable, deactivate, interfere with or otherwise harm or provide unauthorized
              access to the Services; (g) use any robot, spider, data scraping, or extraction tool
              or similar mechanism with respect to the Services; (h) provide access to the Services
              to an individual associated with a Vanta Competitor (defined below);  (i) extract
              information from the Services in furtherance of competing with Vanta; (j) encumber,
              sublicense, transfer, rent, lease, time-share or use the Services in any service
              bureau arrangement or otherwise for the benefit of any third party; (k) copy,
              distribute, manufacture, adapt, create derivative works of, translate, localize, port
              or otherwise modify any aspect of the Services; (l) introduce into the Services any
              software containing a virus, worm, “back door,” Trojan horse or similarly harmful
              code; or (m) permit any third party to engage in any of the foregoing proscribed acts.
              A “Vanta Competitor” is any entity that provides the same or similar goods and
              services to those provided by Vanta, as would be determined by a commercially
              reasonable individual. Customer will promptly notify Vanta of any violations of the
              above prohibited uses by an Authorized User or a third party and require such
              Authorized User or third party to immediately cease any such use. Vanta reserves the
              right to suspend Customer and/or Authorized User’s access to the Services in the event
              Vanta suspects Customer or an Authorized User is in breach of this MSA.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">Section 5. Confidentiality. </span>If the parties have
              a separate mutual nondisclosure agreement, that agreement will control (the “Separate
              MNDA”). Otherwise, as used herein, the “Confidential Information” of a Party (the
              “Disclosing Party”) means all financial, technical, or business information of the
              Disclosing Party that the Disclosing Party designates as confidential at the time of
              disclosure to the other Party (the “Receiving Party”) or that the Receiving Party
              reasonably should understand to be confidential based on the nature of the information
              or the circumstances surrounding its disclosure. Services Information and Customer
              Information are Confidential Information under this MSA, or confidential under the
              Separate MNDA, as applicable. Except as expressly permitted in this MSA, the Receiving
              Party will not disclose, duplicate, publish, transfer or otherwise make available
              Confidential Information of the Disclosing Party in any form to any person or entity
              without the Disclosing Party’s prior written consent. The Receiving Party will not use
              the Disclosing Party’s Confidential Information except to perform its obligations
              under this MSA, such obligations including, in the case of Vanta, to provide the
              Services. Notwithstanding the foregoing, the Receiving Party may disclose Confidential
              Information to the extent required by law, provided that the Receiving Party: (a)
              gives the Disclosing Party prior written notice of such disclosure so as to afford the
              Disclosing Party a reasonable opportunity to appear, object, and obtain a protective
              order or other appropriate relief regarding such disclosure (if such notice is not
              prohibited by applicable law); (b) uses diligent efforts to limit disclosure and to
              obtain confidential treatment or a protective order; and (c) allows the Disclosing
              Party to participate in the proceeding. Further, Confidential Information does not
              include any information that: (i) is or becomes generally known to the public without
              the Receiving Party&apos;s breach of any obligation owed to the Disclosing Party; (ii)
              was independently developed by the Receiving Party without the Receiving Party&apos;s
              breach of any obligation owed to the Disclosing Party; or (iii) is received from a
              third party who obtained such Confidential Information without any third party&apos;s
              breach of any obligation owed to the Disclosing Party.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">Section 6. Privacy and Security Practices. </span>
              Vanta operates the Services and handles Customer information, pursuant to the privacy
              policy available at https://vanta.com/privacy (the “Privacy Policy”). Vanta’s current
              security and data protection practices are set forth at https://www.vanta.com/security
              (the “Security Statement”).
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              Section 7. Representations, Warranties, and Disclaimers.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">7.1. Authority. </span>Each Party represents that it
              has validly entered into this MSA and has the legal power to do so.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">7.2. Warranties. </span>Vanta warrants that during an
              applicable Term (a) the Security Statement accurately describes the applicable
              administrative, physical, and technical safeguards for protection of the security,
              confidentiality, and integrity of Customer Information; and (b) the Services will
              perform materially in accordance with any applicable documentation provided to
              Customer. For any breach of a warranty in this section, Customer’s exclusive remedies
              are those described in Section 3 (Term and Termination) herein.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">7.3. Disclaimers. </span>EXCEPT AS SPECIFICALLY SET
              FORTH IN THIS SECTION, THE SERVICES, INCLUDING ALL SERVER AND NETWORK COMPONENTS, ARE
              PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND TO
              THE FULLEST EXTENT PERMITTED BY LAW, AND VANTA EXPRESSLY DISCLAIMS ANY AND ALL
              WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED
              WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. CUSTOMER ACKNOWLEDGES THAT VANTA DOES NOT WARRANT THAT THE SERVICES
              WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE, OR FREE FROM VIRUSES OR OTHER
              MALICIOUS SOFTWARE, AND NO INFORMATION OR ADVICE OBTAINED BY CUSTOMER FROM VANTA OR
              THROUGH THE SERVICES SHALL CREATE ANY WARRANTY NOT EXPRESSLY STATED IN THIS MSA. THE
              PARTIES ADDITIONALLY AGREE THAT VANTA WILL HAVE NO LIABILITY OR RESPONSIBILITY FOR
              CLIENT’S VARIOUS COMPLIANCE PROGRAMS, AND THAT THE SERVICES, TO THE EXTENT APPLICABLE,
              ARE ONLY TOOLS FOR ASSISTING CLIENT IN MEETING THE VARIOUS COMPLIANCE OBLIGATIONS FOR
              WHICH IT SOLELY IS RESPONSIBLE.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              Section 8. Indemnification.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">8.2. Indemnification by Customer. </span> Customer
              will indemnify and hold Vanta harmless against any third party claim arising out of
              (a) Prohibited Uses in breach of this MSA as set forth above; or (b) alleging that
              Customer Information infringes or misappropriates a third party’s valid patent,
              copyright, trademark, or trade secret; provided (i) Vanta promptly notifies Customer
              of the threat or notice of such claim; (ii) Customer will have the sole and exclusive
              control and authority to select defense attorneys, and defend and/or settle any such
              claim (however, Customer will not settle or compromise any claim that results in
              liability or admission of any liability by Vanta without prior written consent); and
              (iii) Vanta fully cooperates in connection therewith.
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">Section 9. Limitation of Liability. </span>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES AND UNDER NO
              LEGAL THEORY (WHETHER IN CONTRACT, TORT, NEGLIGENCE OR OTHERWISE) WILL EITHER PARTY TO
              THIS MSA, OR THEIR AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SERVICE
              PROVIDERS, SUPPLIERS OR LICENSORS BE LIABLE TO THE OTHER PARTY OR ANY AFFILIATE FOR
              ANY LOST PROFITS, LOST SALES OR BUSINESS, LOST DATA (BEING DATA LOST IN THE COURSE OF
              TRANSMISSION VIA CUSTOMER’S SYSTEMS OR OVER THE INTERNET THROUGH NO FAULT OF VANTA),
              BUSINESS INTERRUPTION, LOSS OF GOODWILL, COSTS OF COVER OR REPLACEMENT, OR FOR ANY
              TYPE OF INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL OR PUNITIVE LOSS OR
              DAMAGES, OR ANY OTHER INDIRECT LOSS OR DAMAGES INCURRED BY THE OTHER PARTY OR ANY
              AFFILIATE IN CONNECTION WITH THIS MSA OR THE SERVICES REGARDLESS OF WHETHER SUCH PARTY
              HAS BEEN ADVISED OF THE POSSIBILITY OF OR COULD HAVE FORESEEN SUCH DAMAGES.
              NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS MSA, EITHER PARTY’S AGGREGATE
              LIABILITY TO THE OTHER PARTY OR ANY THIRD PARTY ARISING OUT OF THIS MSA OR THE
              SERVICES WILL IN NO EVENT EXCEED THE FEES PAID BY CUSTOMER DURING THE TWELVE (12)
              MONTHS PRIOR TO THE FIRST EVENT OR OCCURRENCE GIVING RISE TO SUCH LIABILITY; PROVIDED
              THAT LIABILITY UNDER THE PARTIES’ INDEMNIFICATION OBLIGATIONS, FOR BREACHES OF
              CONFIDENTIALITY, OR FOR DAMAGES DUE TO PROHIBITED USES WILL NOT IN THE AGGREGATE
              EXCEED TEN TIMES THAT AMOUNT. FOR CLARITY, NOTHING IN THIS MSA WILL LIMIT OR EXCLUDE
              EITHER PARTY’S LIABILITY FOR GROSS NEGLIGENCE OR INTENTIONAL MISCONDUCT OF A PARTY.
              CUSTOMER ACKNOWLEDGES AND AGREES THAT THE ESSENTIAL PURPOSE OF THIS SECTION IS TO
              ALLOCATE THE RISKS UNDER THIS MSA BETWEEN THE PARTIES AND LIMIT POTENTIAL LIABILITY
              GIVEN THE FEES, WHICH WOULD HAVE BEEN SUBSTANTIALLY HIGHER IF VANTA WERE TO ASSUME ANY
              FURTHER LIABILITY OTHER THAN AS SET FORTH HEREIN. VANTA HAS RELIED ON THESE
              LIMITATIONS IN DETERMINING WHETHER TO PROVIDE CUSTOMER WITH THE RIGHTS TO ACCESS AND
              USE THE SERVICES PROVIDED FOR IN THIS MSA. THE DISCLAIMERS, EXCLUSIONS, AND
              LIMITATIONS OF LIABILITY UNDER THIS AGREEMENT WILL NOT APPLY TO THE EXTENT PROHIBITED
              BY APPLICABLE LAW.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                mt: '80px',
                mb: '20px',
                fontSize: '18px',
                fontWeight: 700,
                color: 'dark-purple.main',
                textAlign: 'left',
              }}
            >
              Section 10. Miscellaneous.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.1. Entire Agreement. </span>This MSA, any active
              Order Forms, and the Separate MNDA, if applicable, constitute the entire agreement,
              and supersede all prior agreements, between Vanta and Customer regarding the subject
              matter hereof.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.2. Assignment. </span>Either Party may, without the
              consent of the other Party, assign this MSA to any affiliate or in connection with any
              merger, change of control, or the sale of all or substantially all of such Party’s
              assets provided that (1) the other Party is provided prior notice of such assignment
              and (2) any such successor agrees to fulfill its obligations pursuant to this MSA.
              Subject to the foregoing restrictions, this MSA will be fully binding upon, inure to
              the benefit of, and be enforceable by the Parties and their respective successors and
              assigns.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.3. Severability. </span>If any provision in this
              MSA is held by a court of competent jurisdiction to be unenforceable, such provision
              will be modified by the court and interpreted so as to best accomplish the original
              provision to the fullest extent permitted by law, and the remaining provisions of this
              MSA will remain in effect.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.4. Relationship of the Parties. </span>The Parties
              are independent contractors. This MSA does not create a partnership, franchise, joint
              venture, agency, fiduciary, or employment relationship between the Parties.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.5. Notices. </span>All notices provided by Vanta to
              Customer under this MSA may be delivered in writing (a) by nationally recognized
              overnight delivery service (“Courier”) or U.S. mail to the contact mailing address
              provided by Customer on the Order Form; or (b) electronic mail to the electronic mail
              address provided for Customer’s account owner. Customer must give notice to Vanta
              either in writing by Courier or U.S. mail to 369 Hayes St, San Francisco, CA 94102
              Attn: Legal Department or by email to legal@vanta.com. All notices shall be deemed to
              have been given immediately upon delivery by electronic mail; or, if otherwise
              delivered upon the earlier of receipt or two (2) business days after being deposited
              in the mail or with a Courier as permitted above.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.6. Governing Law, Jurisdiction, Venue. </span>This
              MSA will be governed by the laws of the State of California, without reference to
              conflict of laws principles. Any disputes under this MSA shall be resolved in a court
              of general jurisdiction in San Francisco County, California. Customer hereby expressly
              agrees to submit to the exclusive personal jurisdiction and venue of such courts for
              the purpose of resolving any dispute relating to this MSA or access to or use of the
              Services by Customer, its agents, or Authorized Users.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.7. Export Compliance. </span>The Services and other
              software or components of the Services that Vanta may provide or make available to
              Customer are subject to U.S. export control and economic sanctions laws as
              administered and enforced by the Office of Foreign Assets and Control of the United
              States Department of Treasury. Customer will not access or use the Services if
              Customer or any Authorized Users are located in any jurisdiction in which the
              provision of the Services, software, or other components is prohibited under U.S. or
              other applicable laws or regulations (a “Prohibited Jurisdiction”) and Customer will
              not provide access to the Services to any government, entity, or individual located in
              any Prohibited Jurisdiction. Customer represents and warrants that (a) it is not named
              on any U.S. government list of persons or entities prohibited from receiving U.S.
              exports, or transacting with any U.S. person; (b) it is not a national of, or a
              company registered in, any Prohibited Jurisdiction; (c) it will not permit any
              individuals under its control to access or use the Services in violation of any U.S.
              or other applicable export embargoes, prohibitions or restrictions; and (d) it will
              comply with all applicable laws regarding the transmission of technical data exported
              from the United States and the countries in which it and Authorized Users are located.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.8. Anti-Corruption. </span>Customer represents and
              agrees that it has not received or been offered any illegal or improper bribe,
              kickback, payment, gift, or thing of value from any of Vanta’s employees or agents in
              connection with this MSA. Reasonable gifts and entertainment provided in the ordinary
              course of business do not violate the above restriction. If Customer learns of any
              violation of the above restriction, Customer will use reasonable efforts to promptly
              give notice to Vanta.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.9. Publicity and Marketing. </span>Vanta may use
              Customer’s name, logo, and trademarks solely to identify Customer as a client of Vanta
              on Vanta’s website and other marketing materials and in accordance with Customer’s
              trademark usage guidelines. Vanta may share aggregated and/or anonymized information
              regarding use of the Services with third parties for marketing purposes to develop and
              promote Services. Vanta never will disclose aggregated and/or anonymized information
              to a third party in a manner that would identify Customer or any identifiable
              individual as the source of the information.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.10. Amendments. </span>Vanta may amend this MSA
              from time to time, in which case the new MSA will supersede prior versions. Vanta will
              notify Customer not less than ten (10) days prior to the effective date of any such
              amendment and Customer’s continued use of the Services following the effective date of
              any such amendment may be relied upon by Vanta as consent to any such amendment.
            </Typography>

            <Typography
              sx={{
                mb: '20px',
                fontSize: '18px',
                fontWeight: 400,
                color: 'dark-purple.main',
              }}
            >
              <span className="tw-font-[700]">10.11. Waiver. </span>Vanta’s failure to enforce at
              any time any provision of this MSA does not constitute a waiver of that provision or
              of any other provision of this MSA.
            </Typography>
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
}
