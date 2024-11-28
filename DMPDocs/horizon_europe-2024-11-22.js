horizon_europe= {"horizon_europe":`<div id="horizon_europe" >
    <div class="content-page">
        <br />
        <center>
            <div class="p-2" id="vis-parent" style="margin: auto;">

                <div id="vis" style=" width:100%;max-height:600px;  aspect-ratio : 1 / 1;"></div>

            </div>
            <br />
            <div class="p-2" style="margin: auto;">


                <div class="c2 text-center">
                    <h1>Data Management Plan of the Horizon Europe Project $_PROJECTNAME</h1>
                </div>

                <div class="d-flex justify-content-center">


                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h3>Action Number: </h3>
                                </td>
                                <td>
                                    <h3> $_FUNDINGPROGRAMME </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>Action Acronym:</h3>
                                </td>
                                <td>
                                     <h3> #if!$_ACRONYM  $_PROJECTNAME   #endif!$_ACRONYM   #if$_ACRONYM   $_ADDACRONYM #endif$_ACRONYM </h3> 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h3>Action Title:</h3>
                                </td>
                                <td>
                                    <h3> $_PROJECTNAME</h3>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <h2>Creation Date:</h2>
                                </td>
                                <td>
                                    <h3>$_CREATIONDATE</h3>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <h3>Modification Date:</h2>
                                </td>
                                <td>
                                    <h3>$_MODIFICATIONDATE</h3>
                                </td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <br>

            </div>

        </center>

        <h1 class="c13"><span class="c2">Introduction</span></h1>
        <p class="c0"><span class="c1"> basicInfo-isEu-en text-not-only-but-fair-en basicInfo-isProtected-en
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                 text-intro-en
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                The detailed DMP instructs how data will be handled during and after the project. The $_PROJECTNAME DMP
                is modified according to the Horizon Europe and Horizon Europe online Manual. #if$_UPDATE It will be
                updated/its validity checked during the
                $_PROJECTNAME project several times. At the very least, this will happen at month $_UPDATEMONTH.
                #endif$_UPDATE</span>
        </p>

        <h2 class="c9" ><span class="c4">1.&nbsp; &nbsp; Data Summary</span></h2>
        <p class="c0"><span class="c3">Will you re-use any existing data and what will you re-use it for? State the
                reasons if re-use of any existing data has been considered but discarded.</span></p>
        <p class="c0">

            <span class="c1">
                list-reuse-en
            </span>
        </p>
        <p class="c0"><span class="c3">What types and formats of data will the project generate or re-use?</span>
        </p>


        <p class="c0">
            <span class="c1">
                list-dataCollection-en
            </span>
        </p>

        <p class="c0"><span class="c3">What is the purpose of the data generation or re-use and its relation to the
                objectives of the project?</span></p>
        <p class="c0">
            <span class="c1">
                text-aim-intro-en
            </span>
        </p>


        <p class="c0"><span class="c3">What is the expected size of the data that you intend to generate or
                re-use?</span></p>
        <p class="c0"><span class="c1">We expect to generate raw data in the range of $_RAWDATA GB of data. The size
                of the derived data will be about $_DERIVEDDATA GB.</span></p>

        <p class="c0"><span class="c3">What is the origin/provenance of the data, either generated or
                re-used?</span></p>
        <p class="c0"><span class="c1">Public data will be extracted as described in the previous paragraph. For $_PROJECTNAME, specific data sets will be generated by the consortium partners.</span></p>


        <p class="c0">
            <span class="c1"> Data of different types or representing different domains will be generated using
                unique approaches. For example:</span>
        </p>
        list-dataType-en


        #if$_PREVIOUSPROJECTS&nbsp;
        <p class="c0"><span class="c1"> Data from previous projects such as $_PREVIOUSPROJECTS will be considered.
            </span></p>
        #endif$_PREVIOUSPROJECTS

        <p class="c0"><span class="c3">To whom might it be useful ('data utility'), outside your project?</span></p>
        <p class="c0">
            <span class="c1">
                The data will initially benefit $_PROJECTNAME partners, but will also be made available to selected
                stakeholders closely involved in the project, and then the scientific community working on
                $_STUDYOBJECT. $_DATAUTILITY In addition, the general public interested in $_STUDYOBJECT can also
                use the data after publication. The data will be disseminated according to $_PROJECTNAME's
                dissemination and communication plan #if$_DATAPLANT , which aligns with DataPLANT platform or other means #endif$_DATAPLANT.
            </span>
        </p>

        <h2 class="c9"><span class="c4">2&nbsp; &nbsp; FAIR data</span></h2>
        <h3 class="c14"><span class="c7">2.1. Making data findable, including provisions for metadata</span></h3>
        <p class="c0">
            <span class="c3">
                Will data be identified by a persistent identifier?
            </span>
        </p>
        <p class="c0">
            <span class="c1">All data sets will receive unique identifiers, and they will be annotated with
                metadata.
            </span>
        </p>

        <p class="c0">
            <span class="c3">Will rich metadata be provided to allow discovery? What metadata will be created? What
                disciplinary or general standards will be followed? In case metadata standards do not exist in your
                discipline, please outline what type of metadata will be created and how.
            </span>
        </p>
        <p class="c0">
            text-standards-long-en
        </p>
        <p class="c0"><span class="c3">Will search keywords be provided in the metadata to optimize the possibility
                for discovery and then potential re-use?</span></p>
        <p class="c0">
            <span class="c1">
                Keywords about the experiment and the general consortium will be included, as well as an abstract
                about the data, where useful. In addition, certain keywords can be auto-generated from dense
                metadata and its
                underlying ontologies. #if$_DATAPLANT Here, DataPLANT strives to complement these with standardized
                DataPLANT ontologies that are supplemented where the ontology does not yet include the variables.
                #endif$_DATAPLANT
            </span>
        </p>
        <p class="c0"><span class="c3">Will metadata be offered in such a way that it can be harvested and
                indexed?</span></p>
        <p class="c0">
            <span class="c1">
                To maintain data integrity and to be able to re-analyze data, data sets will get version numbers
                where this is useful (e.g. raw data must not be changed and will not get a version number and is
                considered
                immutable). #if$_DATAPLANT This is automatically supported by the ARC Git DataPLANT infrastructure.
                #endif$_DATAPLANT</span>

            <span class="c1">
                Data variables will be allocated standard names. For example, genes, proteins and metabolites will
                be named according to approved nomenclature and conventions. These will also be linked to functional
                ontologies where possible. Datasets will also be named I a meaningful way to ensure readability by
                humans. Plant names will include traditional names, binomials, and all
                strain/cultivar/subspecies/variety identifiers.</span>
        </p>



        <h2 class="c9" ><span class="c4">2.2.&nbsp; &nbsp; Making data accessible</span></h2>
        <p class="c0"><span class="c3">Repository</span></p>
        <p class="c0"><span class="c3">Will the data be deposited in a trusted repository?</span></p>

        <p class="c0">
            text-repository-long-en
        </p>


        <p class="c0"><span class="c3">Have you explored appropriate arrangements with the identified repository
                where your data will be deposited? </span></p>
        <p class="c0">
            <span class="c1">
                The submission is for free, and it is the goal (at least of ENA) to obtain as much data as possible.
                Therefore, arrangements are neither necessary nor useful. Catch-all repositories are not required.
                #if$_DATAPLANT For DataPLANT, this has been agreed upon, as all the omics repositories of
                International Nucleotide Sequence Database Collaboration (INSDC) will be used. #endif$_DATAPLANT
                #issuewarning If no data management platform such as DataPLANT is used, then you need to find
                appropriate repository to store or archive your data after publication. #endissuewarning
            </span>
        </p>

        <p class="c0"><span class="c3">Does the repository ensure that the data is assigned an identifier? Will the
                repository resolve the identifier to a digital object? </span></p>
        <p class="c0">
            <span class="c1">
                
                <p class="c0">
                text-repository-short-en
                </p> 
                <p class="c0">
                    <span class="c1">
                In the case of unstructured less standardized data (e.g. experimental
                phenotypic measurements), these will be metadata annotated and if complete given a digital object
                identifier (DOI) #if$_DATAPLANT and the whole data sets wrapped into an ARC will get DOIs as well
                #endif$_DATAPLANT .
                </span>
                </p> 
            </span>
        </p>
        Those repositories are the most appropriate ones.
        <br>
        <br>
        <p class="c0"><span class="c3">Data:</span></p>
        <p class="c0"><span class="c3">Will all data be made openly available? If certain datasets cannot be shared
                (or need to be shared under restricted access conditions), explain why, clearly separating legal and
                contractual reasons from intentional restrictions. Note that in multi-beneficiary projects it is
                also possible for specific beneficiaries to keep their data closed if opening their data goes
                against their legitimate interests or other constraints as per the Grant Agreement.</span></p>
        <p class="c0">
            <span class="c1">
                By default, all data sets from $_PROJECTNAME will be shared with the community and made openly
                available. However, before the data are released, all will be provided with an opportunity to check
                for potential IP (according to the consortium agreement and background IP rights). #if$_INDUSTRY
                This applies in particular to data pertaining to the industry. #endif$_INDUSTRY IP protection will
                be prioritized for datasets that offer the potential for exploitation.
            </span>
        </p>
        <p class="c0">
            <span class="c3">
                Note that in multi-beneficiary projects it is also possible for specific beneficiaries to keep their
                data closed if relevant provisions are made in the consortium agreement and are in line with the
                reasons
                for opting out.
            </span>
        </p>

        <p class="c0">
        <span class="c3">If an embargo is applied to give time to publish or seek protection of the
                intellectual property (e.g. patents), specify why and how long this will apply, bearing in mind that
                research data should be made available as soon as possible.</span></p>
        <p class="c0">
            <span class="c1">
                #if$_EARLY Some raw data is made public as soon as it is collected and processed. #endif$_EARLY
                #if$_BEFOREPUBLICATION Relevant processed datasets are made public when the research findings are
                published. #endif$_BEFOREPUBLICATION #if$_ENDOFPROJECT At the end of the project, all data without
                embargo period will be published. #endif$_ENDOFPROJECT #if$_EMBARGO Data, which is subject to an
                embargo period, is not publicly accessible until the end of embargo period. #endif$_EMBARGO
                #if$_REQUEST Data is made available upon request, allowing controlled sharing while ensuring
                responsible use. #endif$_REQUEST #if$_IPISSUE IP issues will be checked before publication.
                #endif$_IPISSUE All consortium partners will be
                encouraged to make data available before publication, openly and/or under pre-publication agreements
                #if$_GENOMIC such as those started in Fort Lauderdale and set forth by the Toronto International
                Data
                Release Workshop #endif$_GENOMIC . This will be implemented as soon as IP-related checks are
                complete.
            </span>
        </p>

        <p class="c0"><span class="c3">Will the data be accessible through a free and standardized access protocol?
            </span></p>
        <p class="c0">
            <span class="c1">
                #if$_DATAPLANT DataPLANT stores data in the ARC, which is a git repo. The DataHUB shares data and
                metadata as a gitlab instance. The "Git" and "Web" protocol are opensourced and freely accessible.
                In addition, #endif$_DATAPLANT Zenodo and the endpoint repositories will also be used for access. In
                General, web-based protocols are free and standardized for access.
            </span>
        </p>

        <p class="c0"><span class="c3">If there are restrictions on use, how will access be provided to the data,
                both during and after the end of the project?
            </span></p>
        <p class="c0">
            <span class="c1">
                There are no restrictions, beyond the aforementioned IP checks, which are in line with e.g. European
                open data policies.
            </span>
        </p>


        <p class="c0"><span class="c3">How will the identity of the person accessing the data be ascertained?
            </span></p>
        <p class="c0">
            <span class="c1">
                In case data is only shared within the consortium, if the data is not yet finished or under IP
                checks, the data is hosted internally and username and password will be required (see also our GDPR
                rules). In the case data is made public under final EU or US repositories, completely anonymous
                access is normally allowed. This is the case for ENA as well and both are in line with GDPR
                requirements.
                #if$_DATAPLANT Currently, data management relies on the annotated research context ARC. It is
                password protected, so before any data can be obtained or samples generated an authentication needs
                to take place. #endif$_DATAPLANT

            </span>
        </p>
        <p class="c0"><span class="c3">Is there a need for a data access committee (e.g. to evaluate/approve access
                requests to personal/sensitive data)?
            </span></p>
        <p class="c0">
            <span class="c1">
                Consequently, there is no need for a committee.

            </span>
        </p>
        <p class="c0">
            <span class="c3">
                Metadata:
            </span>
        </p>
        <p class="c0">
            <span class="c3">
                Will metadata be made openly available and licenced under a public domain dedication CC0, as per the
                Grant Agreement? If not, please clarify why. Will metadata contain information to enable the user to
                access the data?
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                Yes, where possible, e.g. CC REL will be used for data not submitted to specialized repositories
                such as ENA.
            </span>
        </p>
        <p class="c0">
            <span class="c3">
                How long will the data remain available and findable? Will metadata be guaranteed to remain
                available after data is no longer available?
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                <p class="c0"><span class="c1">The data will be made available for many years#if$_DATAPLANT and
                        ideally indefinitely after the end of the project #endif$_DATAPLANT.
                        In any case data submitted to repositories (as detailed above) e.g. ENA /PRIDE would be
                        subject to local data storage regulation.

                    </span></p>

            </span>
        </p>

        <p class="c0">
            <span class="c3">
                Will documentation or reference about any software be needed to access or read the data be included?
                Will it be possible to include the relevant software (e.g. in open source code)?
            </span>
        </p>
        <p class="c0">
            text-dataplant-tools-en
        </p>

        <h3><span class="c7"> 2.3. Making data interoperable </span></h3>
        <p class="c0">
            <span class="c3">
                What data and metadata vocabularies, standards, formats or methodologies will you follow to make
                your data interoperable to allow data exchange and re-use within and across disciplines? Will you
                follow community-endorsed interoperability best practices? Which ones?
            </span>
        </p>
        <p class="c0">
            text-standards-short-en
        </p>
        <span class="c1">Whenever possible, data will be stored in common and openly defined formats including all the necessary
        metadata to interpret and analyze data in a biological context. By default, no proprietary formats will be
        used. However, Microsoft Excel files (according to ISO/IEC 29500-1:2016) might be used as intermediates by
        the consortium#if$_DATAPLANT and by some ARC components #endif$_DATAPLANT. In addition, text files might be
        edited in text processor files, but will be shared as pdf.
        Open ontologies will be used where they are mature. As stated above, some ontologies and controlled
        vocabularies might need to be extended. #if$_DATAPLANT Here, $_PROJECTNAME will build on the advanced
        ontologies integrated in DataPLANT. #endif$_DATAPLANT
        </span>

        </span>
        </p>



        <p class="c0">
            <span class="c3">
                In case it is unavoidable that you use uncommon or generate project specific ontologies or
                vocabularies, will you provide mappings to more commonly used ontologies? Will you openly publish
                the generated ontologies or vocabularies to allow reusing, refining or extending them?
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                Common and open ontologies will be used. In fact, open biomedical ontologies will be used where they
                are mature. As stated in the previous question, sometimes ontologies and controlled vocabularies
                might have to be extended. #if$_DATAPLANT Here, $_PROJECTNAME will build on the DataPLANT biology
                ontology (DPBO) developed in DataPLANT. #endif$_DATAPLANT Ontology databases such as OBO Foundry
                will be used to publish ontology. #if$_DATAPLANT The DPBO is also published in GitHub
                https://github.com/nfdi4plants/nfdi4plants_ontology #endif$_DATAPLANT.

            </span>
        </p>

        <p class="c0">
            <span class="c3">
                Will your data include qualified references to other data (e.g. other data from your project, or
                datasets from previous research)?
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                The references to other data will be made in the form of DOI and ontology terms.
            </span>
        </p>

        <h3><span class="c7"> 2.4. Increase data re-use </span></h3>
        <p class="c0"><span class="c3">How will you provide documentation needed to validate data analysis and
                facilitate data re-use (e.g. readme files with information on methodology, codebooks, data cleaning,
                analyses, variable definitions, units of measurement, etc.)?</span></p>

        <p class="c0">
            <span class="c1">
                The documentation will be provided in the form of ISA (Investigation Study Assay) and CWL (Common
                Workflow Language). #if$_DATAPLANT Here, $_PROJECTNAME will build on the ARC container, which
                includes all the data, metadata, and documentations. #endif$_DATAPLANT
            </span>
        </p>
        <p class="c0"><span class="c3">Will your data be made freely available in the public domain to permit the
                widest re-use possible? Will your data be licensed using standard reuse licenses, in line with the
                obligations set out in the Grant Agreement?
            </span></p>

        <p class="c0">
            <span class="c1">
                Yes, our data will be made freely available in the public domain to permit the widest re-use
                possible. Open licenses, such as Creative Commons (CC), will be used whenever possible.
            </span>
        </p>
        <p class="c0"><span class="c3">Will the data produced in the project be useable by third parties, in
                particular after the end of the project?
            </span></p>

        <p class="c0">
            <span class="c1">
                There will be no restrictions once the data is made public.
            </span>
        </p>
        <p class="c0"><span class="c3">Will the provenance of the data be thoroughly documented using the
                appropriate standards?
            </span></p>

        <p class="c0">
            <span class="c1">
                text-standards-en
                text-aim-intro-en
            </span>
        </p>

        <p class="c0"><span class="c3">Describe all relevant data quality assurance processes. Further to the FAIR
                principles, DMPs should also address research outputs other than data, and should carefully consider
                aspects related to the allocation of resources, data security and ethical aspects.
            </span></p>

        <p class="c0">
            <span class="c1">
                text-quality-control-en

            </span>
        </p>
        <h2 class="c9"><span class="c4">3&nbsp; &nbsp; Other research outputs</span></h2>
        <p class="c0"><span class="c3">In addition to the management of data, beneficiaries should also consider and
                plan for the management of other research outputs that may be generated or re-used throughout their
                projects. Such outputs can be either digital (e.g. software, workflows, protocols, models, etc.) or
                physical (e.g. new materials, antibodies, reagents, samples, etc.).

            </span></p>
        <p class="c0">
            <span class="c1">
                In the current data management plan, any digital output including but not limited to software,
                workflows, protocols, models, documents, templates, notebooks are all treated as data. Therefore,
                all aforementioned digital objects are already described in detail. For the non-digital objects, the
                data management plan will be closely connected to the digitalisation of the physical objects. #if$_DATAPLANT $_PROJECTNAME will build a workflow which connects the ARC with an electronic lab
                notebook in order to also manage the physical objects. #endif$_DATAPLANT

            </span>
        </p>

        <p class="c0"><span class="c3">Beneficiaries should consider which of the questions pertaining to FAIR data
                above, can apply to the management of other research outputs, and should strive to provide
                sufficient detail on how their research outputs will be managed and shared, or made available for
                re-use, in line with the FAIR principles.

            </span></p>
        <p class="c0">
            <span class="c1">
                Open licenses, such as Creative Commons CC, will be used whenever possible even on the other digital
                objects.

            </span>
        </p>





        <h2 class="c9"><span class="c4">4.&nbsp; &nbsp; Allocation of resources</span></h2>
        <p class="c10"><span class="c3">What will the costs be for making data or other research outputs FAIR in
                your project (e.g. direct and indirect costs related to storage, archiving, re-use, security,
                etc.)?</span></p>
        <p class="c0"><span class="c1">$_PROJECTNAME will bear the costs of data curation, #if$_DATAPLANT ARC
                consistency checks, #endif$_DATAPLANT and data maintenance/security before transfer to public
                repositories. Subsequent costs are then borne by the operators of these repositories.</span></p>
        <p class="c0">
            <span class="c1">
                Additionally, costs for after publication storage are incurred by end-point repositories (e.g. ENA)
                but not charged against $_PROJECTNAME or its members but by the operation budget of these
                repositories.
            </span>
        </p>
        <p class="c10">
            <span class="c3">How will these be covered? Note that costs related to research data/output management
                are eligible as part of the Horizon Europe grant (if compliant with the Grant Agreement
                conditions)</span>
        </p>
        <p class="c0"><span class="c1">The data related cost of $_PROJECTNAME are covered by the project funding.
                Pre-existing structures #if$_DATAPLANT such as structures, tools, and knowledge laid down in the
                DataPLANT consortium #endif$_DATAPLANT will also be used.</span></p>
        <p class="c10"><span class="c3">Who will be responsible for data management in your project?</span></p>
        <p class="c0"><span class="c1">The responsible person will be $_DATAOFFICER of $_PROJECTNAME.</span></p>
        <p class="c10"><span class="c3">How will long term preservation be ensured? Discuss the necessary resources
                to accomplish this (costs and potential value, who decides and how, what data will be kept and for
                how long)?</span></p>
        <p class="c0">
            <span class="c1">
                The data officer #if$_PARTNERS or $_PARTNERS #endif$_PARTNERS will ultimately decide on the
                strategy to preserve data that are not submitted to end-point subject area repositories
                #if$_DATAPLANT or ARCs in DataPLANT #endif$_DATAPLANT when the
                project ends. This will be in line with EU guidlines, institute policies, and data sharing based on
                EU and international standards.
            </span>
        </p>
        <h2 class="c9" ><span class="c4">5.&nbsp; &nbsp; Data security</span></h2>
        <p class="c10"><span class="c3">What provisions are or will be in place for data security (including data
                recovery as well as secure storage/archiving and transfer of sensitive data)?</span></p>
        <p class="c20">
            <span class="c1">
                Online platforms will be protected by vulnerability scanning, two-factor authorization and daily
                automatic backups allowing immediate recovery. All partners holding confidential project data will use secure platforms with automatic backups and offsite secure copies.
                #if$_DATAPLANT As ARCs are stored in the PLANTDataHUB of DataPLANT, data security will be imposed.
                This comprises secure storage, and the use of password and usernames is generally transferred via
                separate safe media. #endif$_DATAPLANT
            </span>
        </p>
        <p class="c10"><span class="c3">Will the data be safely stored in trusted repositories for long term
                preservation and curation?</span></p>
    
                <p class="c0">
                   text-repository-short-en
                </p>
        <h2 class="c9" ><span class="c4">6.&nbsp; &nbsp; Ethics</span></h2>
        <p class="c10">
            <span class="c3">
                Are there, or could there be, any ethics or legal issues that can have an impact on data sharing?
                These can also be discussed in the context of the ethics review. If relevant, include references to
                ethics deliverables and ethics chapter in the Description of the Action (DoA).
            </span>
        </p>
        <p class="c0">
            <span class="c1">
                At the moment, we do not anticipate ethical or legal issues with data sharing. In terms of ethics,
                since this is plant data, there is no need for an ethics committee, however, diligence for plant
                resource benefit
                sharing is considered. #issuewarning Please ensure that you complete any necessary due diligence. Currently, we are awaiting clarification on whether the Nagoya Protocol (🡺 see Nagoya Protocol) will encompass sequence information. Regardless, if you use material from a country other than your own (or that of your partner), and you conduct physical or biochemical characterization (e.g., metabolites, proteome, RNASeq, etc.), this may constitute an action relevant under the Nagoya Protocol. Exceptions might include materials from countries such as the U.S. (non-partner), Ireland (has not signed—still contact them), etc., though other laws could apply.
                #endissuewarning
            </span>
        </p>
        <p class="c10"><span class="c3">Will informed consent for data sharing and long term preservation be
                included in questionnaires dealing with personal data?</span></p>
        <p class="c0">
            <span class="c1">
                The only personal data that will potentially be stored is the submitter name and affiliation in the
                metadata for data. In addition, personal data will be collected for dissemination and communication
                activities using specific methods and procedures developed by $_PROJECTNAME partners to adhere to
                data protection. #issuewarning You need to inform and better get WRITTEN consent that you store
                emails and
                names or even pseudonyms such as twitter handles, we are very sorry about these issues we didn’t
                invent them #endissuewarning
            </span>
        </p>
        <h2 class="c9" ><span class="c4">7.&nbsp; &nbsp; Other issues</span></h2>
        <p class="c0"><span class="c3">Do you, or will you, make use of other national/funder/sectorial/departmental
                procedures for data management? If yes, which ones (please list and briefly describe them)?</span>
        </p>
        <p class="c0"><span class="c1 list-to-remove-comma">Yes, $_PROJECTNAME will use common Research Data Management (RDM) infrastructures #if$_DATAPLANT|$_NFDI|$_FRENCH|$_EOSC developed by #endif$_DATAPLANT|$_NFDI|$_FRENCH|$_EOSC #if$_DATAPLANT|$_NFDI the NFDI of Germany, #endif$_DATAPLANT|$_NFDI #if$_FRENCH INRAe from France, #endif$_FRENCH #if$_EOSC EOSC (European Open Science Cloud), #endif$_EOSC .
                    </span></p>
        <p class="c0"><span class="c1"></span></p>
        <p class="c6"><span class="c1"></span></p>
        <h1 class="c13" ><span class="c2">3&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="c15">
            </span><span class="c12 c2">Annexes</span></h1>
        <p class="c0"><span class="c1"></span></p>
        <h2 class="c9" ><span class="c11 c18">3.1&nbsp;&nbsp;&nbsp;&nbsp;</span><span
                class="c15"> </span><span class="c4">Abbreviations</span></h2>
        <p class="c0"><span class="c1"></span></p>
        #if$_DATAPLANT  <span class="c11">  ARC </span> <span class="c1"> Annotated Research Context</span> <br>  #endif$_DATAPLANT 

        <span class="c11"> CC</span><span class="c1"> Creative Commons</span> <br>
        <span class="c11"> CC CEL</span><span class="c1"> Creative Commons Rights Expressio Language</span> <br>
        #if$_PROTEOMIC #if$_CHEBI <span class="c11"> ChEBI</span><span class="c1"> Chemical Entities of Biological Interest </span> <br>  #endif$_CHEBI #endif$_PROTEOMIC      
        <span class="c11"> DDBJ</span><span class="c1"> DNA Data Bank of Japan</span> <br>
        <span class="c11"> DMP</span><span class="c1"> Data Management Plan</span> <br>
        <span class="c11"> DoA</span><span class="c1"> Description of Action</span> <br>
        <span class="c11"> DOI</span><span class="c1"> Digital Object Identifier</span> <br>
        <span class="c11"> EBI</span><span class="c1"> European Bioinformatics Institute</span> <br>
        #if$_PHENOTYPIC #if$_EDAL  <span class="c11"> e!DAL-PGP</span><span class="c1"> Plant Genomics & Phenomics Research Data Repository</span> <br>  #endif$_EDAL   #endif$_PHENOTYPIC  
        #if$_GENETIC  #if$_ENA   <span class="c11">  ENA </span> <span class="c1"> European Nucleotide Archive </span> <br>  #endif$_ENA        #endif$_GENETIC   
        <span class="c11"> EU </span><span class="c1">European Union</span> <br>
        <span class="c11"> FAIR </span><span class="c1">Findable Accessible Interoperable Reproducible</span> <br>
        <span class="c11"> GDPR</span><span class="c1"> General data protection regulation (of the EU)</span> <br>
        #if$_TRANSCRIPTOMIC|$_GENETIC #if$_GEO  <span class="c11"> GEO</span><span class="c1"> Gene Expression Omnibus </span>  <br>  #endif$_GEO   #endif$_TRANSCRIPTOMIC|$_GENETIC   
        #if$_IMAGE #if$_IDR  <span class="c11"> IDR</span><span class="c1"> Image Data Resource </span>  <br>  #endif$_IDR  #endif$_IMAGE 
        <span class="c11"> IP</span><span class="c1"> Intellectual Property</span> <br>
        <span class="c11"> ISO</span><span class="c1"> International Organization for Standardization</span>  <br>
        #if$_TRANSCRIPTOMIC #if$_MIAME <span class="c11"> MIAME</span><span class="c1"> Minimum Information About a Microarray Experiment</span> <br>  #endif$_MIAME  #endif$_TRANSCRIPTOMIC  
        #if$_METABOLOMIC #if$_MMIAMET <span class="c11"> MIAMET</span><span class="c1"> Minimum Information About a METabolomics experiment</span> <br>  #endif$_MMIAMET   #endif$_METABOLOMIC  
        #if$_PROTEOMIC #if$_MIAPE <span class="c11"> MIAPE</span><span class="c1"> Minimum Information About a Proteomics Experiment</span> <br>  #endif$_MIAPE  #endif$_PROTEOMIC  
        #if$_PHENOTYPIC #if$_MIAPPE <span class="c11"> MIAPPE</span><span class="c1"> Minimum Information about Plant Phenotyping Experiment</span> <br>  #endif$_MIAPPE  #endif$_PHENOTYPIC 
        #if$_GENOMIC|$_GENETIC #if$_MIGSEU <span class="c11"> MigsEu </span><span class="c1"> Minimum Information about a Genome Sequence: Eucaryote </span> <br>  #endif$_MIGSEU  
        #if$_MIGSORG <span class="c11"> MigsOrg </span><span class="c1"> Minimum Information about a Genome Sequence: Organelle </span> <br>  #endif$_MIGSORG  
        #if$_MIMAG <span class="c11"> MIMAG </span><span class="c1"> Minimum Information about Metagenome-Assembled Genome </span> <br>  #endif$_MIMAG  
        #if$_MIMARKSSPECIMEN <span class="c11"> MIMARKSSpecimen</span><span class="c1"> Minimal Information about a Marker Specimen: Specimen </span> <br>  #endif$_MIMARKSSPECIMEN 
        #if$_MIMARKSSURVEY  <span class="c11">  MIMARKSSurvey </span><span class="c1"> Minimal Information about a Marker Specimen: Survey </span> <br>  #endif$_MIMARKSSURVEY    #endif$_GENOMIC|$_GENETIC  
        #if$_PROTEOMIC #if$_MIMIX <span class="c11"> MIMIX</span><span class="c1"> The Minimum Information required for reporting a Molecular Interaction Experiment </span> <br>  #endif$_MIMIX   #endif$_PROTEOMIC 
        #if$_GENOMIC|$_GENETIC #if$_MIMS  <span class="c11">  MIMS</span><span class="c1"> Molecular Interactions </span> <br>  #endif$_MIMS    #endif$_GENOMIC|$_GENETIC 
        #if$_TRANSCRIPTOMIC|$_GENOMIC #if$_MINSEQE <span class="c11"> MinSEQe</span><span class="c1"> Minimum Information about a high-throughput Sequencing Experiment</span> <br>  #endif$_MINSEQE #endif$_TRANSCRIPTOMIC|$_GENOMIC 
        #if$_GENOMIC|$_GENETIC #if$_MISAG <span class="c11"> MISAG</span><span class="c1"> Minimum Information about a Single Amplified Genome </span> <br>  #endif$_MISAG
        #if$_MIXS <span class="c11"> MIxS</span><span class="c1"> Minimum Information about any (X) Sequence </span> <br>  #endif$_MIXS #endif$_GENOMIC|$_GENETIC 
        <span class="c11"> NCBI</span><span class="c1"> National Center for Biotechnology Information</span> <br>
        <span class="c11"> NFDI</span><span class="c1"> National Research Data Infrastructure (of Germany)</span> <br>
        <span class="c11"> NGS</span><span class="c1"> Next Generation Sequencing</span> <br>
        #if$_PROTEOMIC #if$_PRIDE  <span class="c11"> PRIDE</span><span class="c1"> PRoteomics IDEntifications Database</span> <br>  #endif$_PRIDE
        #if$_PDB  <span class="c11"> PDB</span><span class="c1"> Protein Data Bank </span> <br>  #endif$_PDB #endif$_PROTEOMIC
        <span class="c11"> RDM</span><span class="c1"> Research Data Management</span> <br>
        #if$_IMAGE  #if$_REMBI  <span class="c11"> REMBI</span><span class="c1"> Recommended Metadata for Biological Images </span> <br>  #endif$_REMBI #endif$_IMAGE 

        #if$_RNASEQ  <span class="c11"> RNASeq</span><span class="c1"> RNA Sequencing</span> <br>  #endif$_RNASEQ 
        <span class="c11"> SOP</span><span class="c1"> Standard Operating Procedures</span>  <br>
        #if$_GENETIC #if$_SRA  <span class="c11"> SRA</span><span class="c1"> Sequence Read Archive</span> <br>  #endif$_SRA #endif$_GENETIC
        #if$_DATAPLANT  <span class="c11">  SWATE</span><span class="c1"> Swate Workflow Annotation Tool for Excel</span> <br>  #endif$_DATAPLANT 
        <span class="c11"> ONP</span><span class="c1"> Oxford Nanopore</span>  <br>
        <span class="c11"> qRT</span> <span class="c11"> PCR</span><span class="c1"> quantitative real time polymerase chain reaction</span>  <br>
        <span class="c11"> WP</span><span class="c1"> Work Package</span>  <br>
        <p class="c0"><span class="c1"></span></p>
        <p class="c0"><span class="c1"></span></p>
        <p class="c0"><span class="c1"></span></p>
        <p class="c22"><span class="c1"></span></p>

    </div>
</div>`}