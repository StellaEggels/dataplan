bmel_dmp = { "bmel-dmp" : `<div id="bmel-dmp" class="">
    <div  class="content-page" id="text_start">
        <h1 class="text-center">
            <p class="text-center h1">
                <center>Title: $_PROJECTNAME Forschungsdatenmanagementplan für BMEL </center>
            </p>
        </h1>
        <p class="c0"><span class="c3"><b>Kurzbeschreibung: $_ADDACRONYM &nbsp;</b></span></p>
        <p class="c0"><span class="c3"><b>Projektkoordinator</b>: #if$_PROJECTCOORDINATOR $_ADDPROJECTCOORDINATOR #endif$_PROJECTCOORDINATOR &nbsp; #if!$_PROJECTCOORDINATOR $_DATAOFFICER #endif!$_PROJECTCOORDINATOR</span></p>
        <p class="c0"><span class="c3"><b>Skizzen- bzw. Antragseinreicher</b>: $_DATAOFFICER&nbsp;</span></p>
         <p class="c0"><span class="c3"><b>Kontakt</b>: $_EMAIL&nbsp;</span></p>
        <p class="c0"><span class="c3"><b>Forschungsf&ouml;rderer</b>: Bundesministerium f&uuml;r Erna&uuml;hrung und Landwirtschaft</span></p>
        <p class="c0"><span class="c3"><b>F&ouml;rderprogramm:</b> $_FUNDINGPROGRAMME&nbsp;</span></p>
        <p class="c0"><span class="c3"><b>FKZ: $_DMPVERSION&nbsp;</b></span></p>
        <p class="c0"><span class="c3"><b>Erstellungsdatum:</b> $_CREATIONDATE&nbsp; </span></p>
        <p class="c0"><span class="c3"><b>&Auml;nderungsdatum:</b> $_MODIFICATIONDATE&nbsp;</span></p>
        

       
        <p class="c0"><span class="c3"><b>Projektbeschreibung</b>:


                <p class="c0"> <span class="c1">
                        Das $_PROJECTNAME hat folgendes Ziel: $_PROJECTAIM. Daher sind Datenerhebung #if!$_VVISUALIZATION und Integration #endif!$_VVISUALIZATION #if$_VVISUALIZATION , Integration und Visualisierung
                        #endif$_VVISUALIZATION #if$_DATAPLANT unter Verwendung der DataPLANT ARC-Struktur absolut
                        notwendig #endif$_DATAPLANT #if!$_DATAPLANT durch einen standardisierten
                        Datenmanagementprozess absolut notwendig #endif!$_DATAPLANT da die Daten nicht nur zum
                        Verständnis von Prinzipien verwendet werden, sondern auch über die Herkunft der analysierten
                        Daten informiert werden muss. Stakeholder müssen ebenfalls über die Herkunft der Daten
                        informiert werden. Es ist daher notwendig sicherzustellen, dass die Daten gut generiert und
                        auch gut mit Metadaten unter Verwendung offener Standards annotiert werden, wie im nächsten
                        Abschnitt dargelegt.

                        </span>
                    </p>
                    
                <p class="c0">
                    <span class="c3">
                        <b>Welche Daten werden in dem Forschungsvorhaben erzeugt, erhoben und ausgewertet?</b>:
                     </span>
                    </p>
                        <p class="c0">
                            <span class="c1">
                        Das $_PROJECTNAME wird die folgenden Arten von Rohdaten sammeln und/oder generieren:
                        #if$_GENETIC genetische Daten, #endif$_GENETIC  
                        #if$_GENOMIC genomische Daten, #endif$_GENOMIC
                #if$_PANGENOMIC Pangenomische Daten, #endif$_PANGENOMIC 
                        #if$_CLONED-DNA geklonte DNA Daten, #endif$_CLONED-DNA 
                        #if$_TRANSCRIPTOMIC transkriptomische Daten, #endif$_TRANSCRIPTOMIC
                #if$_SPATIALTRANSCRIPTOMIC räumliche Transkriptomik-Daten, #endif$_SPATIALTRANSCRIPTOMIC  
                        #if$_RNASEQ RNA-Seq-Daten, #endif$_RNASEQ 
                #if$_SCRNASEQ Einzelzell RNA-Seq-Daten, #endif$_SCRNASEQ
 
                        #if$_METABOLOMIC metabolomische Daten, #endif$_METABOLOMIC  
                        #if$_PROTEOMIC proteomische Daten, #endif$_PROTEOMIC 
                        #if$_PHENOTYPIC Pflanzenphänotypische Daten, #endif$_PHENOTYPIC  
                        #if$_TARGETED gezielte Tests (z. B. Glukose- und Fruktosegehalt), #endif$_TARGETED  
                        #if$_IMAGE Bilddatensätze, #endif$_IMAGE  
                        #if$_MODELS Modellausgänge, #endif$_MODELS 
                        #if$_CODE Rechencode, #endif$_CODE  
                        #if$_EXCEL Excel-Daten, #endif$_EXCEL Daten, die sich auf $_STUDYOBJECT
                        beziehen. Zusätzlich werden die Rohdaten auch durch analytische Pipelines verarbeitet und
                        modifiziert, was zu unterschiedlichen Ergebnissen führen kann oder ad-hoc-Datenanalyse-Teile
                        umfassen kann. #if$_DATAPLANT Diese Pipelines werden im DataPLANT ARC
                        verfolgt. #endif$_DATAPLANT Daher wird darauf geachtet, diese Ressourcen (einschließlich der
                        analytischen Pipelines) zu dokumentieren und zu archivieren#if$_DATAPLANT unter Rückgriff
                        auf die Expertise im DataPLANT-Konsortium #endif$_DATAPLANT .
                               
                        </span>
                    </p>
                            <p class="c0 c2"><span class="c3"><b>Wie werden die Daten erfasst und ausgewertet/prozessiert?</b></span></p>

        <p class="c0 c2"><span class="c1">
                <p class="c0"><span class="c1">Öffentliche Daten werden wie im vorherigen Absatz beschrieben
                        extrahiert. Für das $_PROJECTNAME werden spezifische Datensätze von den Konsortialpartnern
                        generiert.</span></p>


                <p class="c0">
                    <span class="c1"> Daten unterschiedlicher Typen oder aus verschiedenen Bereichen werden mit
                        einzigartigen Ansätzen generiert. Zum Beispiel:</span>
                </p>
                <ul style="list-style-type:disc;">
                    
                    #if$_GENETIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Genetische Daten werden durch Kreuzungen und Zuchtexperimente
                                generiert und umfassen Rekombinationsfrequenzen und Crossover-Ereignisse, die
                                genetische Marker und quantitative Merkmalsloci positionieren können, die mit
                                physischen genomischen Markern/Varianten assoziiert werden können. </span>
                        </p>
                    </li>
                    #endif$_GENETIC

                                        #if$_GENOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Genomische Daten werden aus Sequenzdaten erstellt, die verarbeitet
                                werden, um Gene, regulatorische Elemente, transponierbare Elemente und physikalische
                                Marker wie SNPs, Mikrosatelliten und strukturelle Varianten zu identifizieren.
                            </span>
                        </p>
                    </li>
                    
                    #if$_PANGENOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Pangenomische Daten werden durch Sequenzierung der Genome mehrerer Individuen innerhalb einer Gruppe erhoben. Anschließend werden die Sequenzen zusammengefügt und ausgerichtet, um eine umfassende Genreferenz zu erstellen. 
                            </span>
                        </p>
                    </li>
                    #endif$_PANGENOMIC
                    #endif$_GENOMIC
                    #if$_CLONED-DNA&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Der Ursprung und die Zusammenstellung der klonierten DNA umfassen (a)
                                die Quelle der ursprünglichen Vektorsequenz mit Add-Gene-Referenz, sofern verfügbar,
                                und die Quelle der Insert-DNA (z.B. Amplifikation durch PCR aus einer bestimmten
                                Probe oder aus einer vorhandenen Bibliothek), (b) die Klonierungsstrategie (z.B.
                                Restriktionsendonuklease-Verdau/Ligation, PCR, TOPO-Klonierung, Gibson-Assembly,
                                LR-Rekombination), und (c) die verifizierte DNA-Sequenz des finalen rekombinanten
                                Vektors.</span>
                        </p>
                    </li>
                    #endif$_CLONED-DNA

                    #if$_TRANSCRIPTOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Methoden zur Erfassung von Transkriptomik-Daten werden aus
                                Mikroarrays, quantitativer PCR, Northern Blotting, RNA-Immunpräzipitation und
                                Fluoreszenz-in-situ-Hybridisierung ausgewählt. RNA-Seq-Daten werden mit separaten
                                Methoden gesammelt.</span>
                        </p>
                    </li>
                    

                            #if$_SPATIALTRANSCRIPTOMIC&nbsp; 
                    <li>

                            <span class="c1">Räumliche Transkriptomikdaten werden mit Hilfe von Methoden gesammelt, die RNA-Moleküle räumlich ihren genauen Gewebestandorten zuordnen, wodurch die Erhaltung von RNA-Daten zusammen mit umfassenden Metadaten über ihre Herkunft gewährleistet wird.</span>

                    </li>
                    #endif$_SPATIALTRANSCRIPTOMIC&nbsp; 
                    #endif$_TRANSCRIPTOMIC
                    

                    #if$_RNASEQ&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> RNA-Sequenzierung wird unter Verwendung von Short-Read- oder
                                Long-Read-Plattformen entweder intern oder an akademische Einrichtungen oder
                                kommerzielle Dienste ausgelagert und die Rohdaten werden mit etablierten
                                bioinformatischen Pipelines verarbeitet. </span>
                        </p>
                    </li>
                   
                    #if$_SCRNASEQ&nbsp; 
                    <li>

                            <span class="c1"> Einzelzell-RNA-seq-Daten werden durch die Isolierung einzelner Zellen, die Extraktion und das Barcoding von RNA, die Vorbereitung von Sequenzierungsbibliotheken und die Erzeugung hochwertiger transkriptomischer Daten mit Hilfe von Plattformen wie Illumina gesammelt, wobei die Metadaten sorgfältig aufgezeichnet werden.</span>

                    </li>
                    #endif$_SCRNASEQ&nbsp;
                    #endif$_RNASEQ

                    #if$_METABOLOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Metabolomische Daten werden durch gekoppelte Chromatographie und
                                Massenspektrometrie unter Verwendung gezielter oder ungezielter Ansätze
                                generiert.</span>
                        </p>
                    </li>
                    #endif$_METABOLOMIC #if$_PROTEOMIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Proteomische Daten werden durch gekoppelte Chromatographie und
                                Massenspektrometrie zur Analyse der Proteinmenge und -identifikation sowie durch
                                zusätzliche Techniken zur Strukturanalyse, zur Identifizierung posttranslationaler
                                Modifikationen und zur Charakterisierung von Proteininteraktionen generiert.</span>
                        </p>
                    </li>
                    #endif$_PROTEOMIC

                    #if$_PHENOTYPIC&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Phänotypische Daten werden mit Hilfe von Phänotypisierungsplattformen
                                und entsprechenden Ontologien generiert, einschließlich Anzahl/Größe von Organen wie
                                Blätter, Blumen, Knospen usw., Größe der gesamten Pflanze,
                                Stängel/Wurzel-Architektur (Anzahl der seitlichen Zweige/Wurzeln usw.),
                                Organstrukturen/Morphologien, quantitativen Metriken wie Farbe, Turgor,
                                Gesundheits-/Nährstoffindikatoren und anderen. </span>
                        </p>
                    </li>
                    #endif$_PHENOTYPIC



                    #if$_TARGETED&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Gezielte Assays-Daten (z. B. Glukose- und Fruktosekonzentrationen oder
                                Produktions-/Nutzungsraten) werden mit spezifischen Geräten und Methoden generiert,
                                die im Laborbuch vollständig dokumentiert sind. </span>
                        </p>
                    </li>
                    #endif$_TARGETED

                    #if$_IMAGE&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Bilddaten werden durch Geräte wie Kameras, Scanner und Mikroskope in
                                Kombination mit Software generiert. Originalbilder, die Metadaten wie
                                EXIF-Fotoinformationen enthalten, werden archiviert.</span>
                        </p>
                    </li>
                    #endif$_IMAGE

                    #if$_MODELS&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Modelldaten werden durch Softwaresimulationen generiert. Der
                                vollständige Workflow, einschließlich der Umgebung, Laufzeit, Parameter und
                                Ergebnisse, wird dokumentiert und archiviert. </span>
                        </p>
                    </li>
                    #endif$_MODELS

                    #if$_CODE&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Computercode wird von Programmierern erstellt. </span>
                        </p>
                    </li>
                    #endif$_CODE

                    #if$_EXCEL&nbsp;
                    <li>
                        <p class="c0">
                            <span class="c1"> Excel-Tabellen werden durch Ausfüllen spezifischer Dateien erstellt,
                                die Feldbeobachtungen oder andere digitale Erhebungen enthalten. </span>
                        </p>
                    </li>
                    #endif$_EXCEL

                    

                    
                </ul>

                #if$_PREVIOUSPROJECTS&nbsp;
                <p class="c0"><span class="c1"> Daten aus früheren Projekten wie $_PREVIOUSPROJECTS werden
                        berücksichtigt. </span></p>
                #endif$_PREVIOUSPROJECTS

                <p class="c0"><span class="c1">Wir erwarten die Erzeugung von $_RAWDATA GB Rohdaten und bis zu
                        $_DERIVEDDATA GB verarbeiteten Daten.</span></p>
                <p class="c0"><span class="c3"></span></p>

            </span></p>
                </span>
            </p>

                <p class="c0"><span class="c3"><b>Wie werden die Daten während der Projektlaufzeit verwaltet, gespeichert und gesichert?</b> </span></p>

        <p class="c0">
            <span class="c1">
                #if$_DATAPLANT In DataPLANT, die Datenspeicherung basiert auf dem Annotated Research Context (ARC).
                Dieser ist passwortgeschützt, daher muss vor dem Erhalt von Daten oder der Generierung von Proben
                eine Authentifizierung erfolgen. #endif$_DATAPLANT
            </span>
        </p>


        <p class="c20">
            <span class="c1">
                Online-Plattformen werden durch Schwachstellen-Scans, Zwei-Faktor-Authentifizierung und tägliche
                automatische Backups geschützt, die eine sofortige Wiederherstellung ermöglichen. Alle Partner, die
                vertrauliche Projektdaten halten, nutzen sichere Plattformen mit automatischen Backups und sicheren
                externen Kopien.
                #if$_DATAPLANT DataHUB und ARCs wurden in DataPLANT generiert, Datensicherheit wird durchgesetzt.
                Dies umfasst sichere Speicherung, und die Verwendung von Passwörtern und Benutzernamen wird generell
                über separate sichere Medien übertragen. #endif$_DATAPLANT
            </span>
        </p>

        <p class="c0 "><span class="c1">
               


               <p class="c0"><span class="c3"><b>Wie, wo und für welchen Zeitraum sollen die Daten für die Nachnutzung bereitgestellt werden? Den Regeln der guten wissenschaftlichen Praxis folgend, sollten Forschungsdaten in der eigenen Einrichtung oder in einer fachlich einschlägigen, überregionalen Infrastruktur für mindestens zehn Jahre archiviert werden. </b> </span></p>
               
               <p class="c0">
                    <span class="c1">Wir erwarten, dass wir Rohdaten im Bereich von $_RAWDATA GB an Daten
                        generieren. Die Größe der abgeleiteten Daten wird etwa $_DERIVEDDATA GB betragen.
                    </span>
                </p>


                <p class="c0">
                    #if$_DATAPLANT Da das $_PROJECTNAME eng mit DataPLANT abgestimmt ist, werden der ARC-Konverter und
                    DataHUB verwendet, um die Endpunkt-Repositories zu finden und die Daten automatisch in die
                    Repositories hochzuladen. #endif$_DATAPLANT

                    <span class="c1"> </span>
                </p>
                <p class="c0">
                    <span class="c1">
                        Die Daten werden über die $_PROJECTNAME-Plattform mit einer benutzerfreundlichen Oberfläche
                        verfügbar gemacht, die eine Datenvisualisierung ermöglicht. Die Endpunkt-Repositories sind:
                        #if$_GENETIC #if$_GENBANK NCBI-GenBank, #endif$_GENBANK
                        #if$_ENA EBI-ENA, #endif$_ENA #if$_ARRAYEXPRESS EBI-ArrayExpress, #endif$_ARRAYEXPRESS
                        #endif$_GENETIC #if$_TRANSCRIPTOMIC|$_GENETIC #if$_SRA NCBI-SRA, #endif$_SRA #if$_GEO
                        NCBI-GEO, #endif$_GEO #endif$_TRANSCRIPTOMIC|$_GENETIC #if$_TRANSCRIPTOMIC #if$_ARRAYEXPRESS
                        EBI-ArrayExpress, #endif$_ARRAYEXPRESS #endif$_TRANSCRIPTOMIC #if$_IMAGE #if$_BIOIMAGE
                        EBI-BioImage Archive, #endif$_BIOIMAGE #if$_IDR IDR, #endif$_IDR
                        #endif$_IMAGE #if$_METABOLOMIC #if$_METABOLIGHTS EBI-MetaboLights, #endif$_METABOLIGHTS
                        #if$_METAWORKBENCH Metabolomics Workbench, #endif$_METAWORKBENCH #if$_INTACT IntAct
                        (Molecular interactions) #endif$_INTACT #endif$_METABOLOMIC #if$_PROTEOMIC #if$_PRIDE
                        EBI-PRIDE, #endif$_PRIDE #if$_PDB PDB, #endif$_PDB #if$_CHEBI
                        Chebi, #endif$_CHEBI #endif$_PROTEOMIC #if$_PHENOTYPIC #if$_EDAL e!DAL-PGP,
                        #endif$_EDAL #endif$_PHENOTYPIC.

                        #if$_OTHEREP und $_OTHEREP werden auch verwendet, um Daten zu speichern und die Daten werden
                        dort ebenfalls verarbeitet. #endif$_OTHEREP

                    </span>
                </p>
                <p class="c0">
                    <span class="c1">
                        Die Einreichung ist kostenlos, und es ist das Ziel (zumindest von ENA), so viele Daten wie
                        möglich zu erhalten. Daher sind Absprachen weder notwendig noch sinnvoll.
                        Catch-all-Repositories sind nicht erforderlich.
                        #if$_DATAPLANT Für DataPLANT wurde dies vereinbart. #endif$_DATAPLANT #issuewarning Wenn
                        keine Datenmanagementplattform wie DataPLANT verwendet wird, müssen Sie ein geeignetes
                        Repository finden, um Ihre Daten nach der Veröffentlichung zu speichern oder zu archivieren.
                        #endissuewarning

                    </span>
                </p>

            </span></p>
                <span class="c1">
                    Es wird sichergestellt, dass Daten, die in internationalen, disziplinspezifischen Repositories
                    gespeichert werden können, die spezialisierte Technologien nutzen:<br>

                   
                        <span class="c1 list-to-remove-comma">#if$_GENETIC|$_GENOMIC|$_RNASEQ Für genetische Daten: #if$_GENBANK
                            NCBI-GenBank, #endif$_GENBANK #if$_SRA NCBI-SRA, #endif$_SRA #if$_ENA
                            EBI-ENA, #endif$_ENA #if$_ARRAYEXPRESS EBI-ArrayExpress, #endif$_ARRAYEXPRESS
                            #if$_GEO NCBI-GEO, #endif$_GEO . <br> #endif$_GENETIC|$_GENOMIC|$_RNASEQ </span>
                   

                    
                        <span class="c1  list-to-remove-comma">#if$_TRANSCRIPTOMIC Für Transkriptomdaten: #if$_SRA
                            NCBI-SRA, #endif$_SRA #if$_GEO NCBI-GEO, #endif$_GEO #if$_ARRAYEXPRESS
                            EBI-ArrayExpress, #endif$_ARRAYEXPRESS . <br> #endif$_TRANSCRIPTOMIC</span>
                   

                   
                        <span class="c1 list-to-remove-comma">#if$_IMAGE Für Bilddaten: #if$_BIOIMAGE EBI-BioImage
                            Archive #endif$_BIOIMAGE #if$_IDR IDR (Image Data Resource), #endif$_IDR .
                            <br> #endif$_IMAGE</span>
                   

                   
                        <span class="c1 list-to-remove-comma">#if$_METABOLOMIC Für Metabolomdaten: #if$_METABOLIGHTS
                            EBI-Metabolights, #endif$_METABOLIGHTS #if$_METAWORKBENCH Metabolomics
                            Workbench, #endif$_METAWORKBENCH #if$_INTACT IntAct (Molecular
                            interactions), #endif$_INTACT . <br> #endif$_METABOLOMIC</span>
                   
                    
                        <span class="c1 list-to-remove-comma">#if$_PROTEOMIC Für Proteomikdaten: #if$_PRIDE
                            EBI-PRIDE, #endif$_PRIDE #if$_PDB PDB, #endif$_PDB
                            #if$_CHEBI Chebi,  #endif$_CHEBI .
                             <br> #endif$_PROTEOMIC</span>
                   

                    
                        <span class="c1 list-to-remove-comma">#if$_PHENOTYPIC Für phänotypische Daten: #if$_EDAL e!DAL-PGP (Plant
                            Genomics & Phenomics Research Data Repository), #endif$_EDAL . <br> #endif$_PHENOTYPIC
                        </span>
                    

                
                    #if$_OTHEREP und $_OTHEREP werden auch verwendet, um Daten zu speichern und die Daten werden
                    dort ebenfalls verarbeitet. #endif$_OTHEREP

                </span>


            </span></p>

  
        


        <p class="c0"><span class="c3"><b>Wie wird sichergestellt, dass die Daten auffindbar, zugänglich und nachnutzbar sind?</b>:</span></p>
        <p class="c0">
            <span class="c1">
                Datenvariablen werden mit Standardnamen versehen. Zum Beispiel werden Gene, Proteine und Metaboliten
                gemäß anerkannter Nomenklatur und Konventionen benannt. Diese werden nach Möglichkeit auch mit
                funktionalen Ontologien verknüpft. Datensätze werden ebenfalls sinnvoll benannt, um die Lesbarkeit
                durch Menschen zu gewährleisten. Pflanzennamen umfassen traditionelle Namen, Binomialnamen und alle
                Stamm-/Kultivar-/Unterart-/Sortenbezeichner.
            </span>
        </p>
        <p class="c0">
            <span class="c1">Wir verwenden die Investigation, Study, Assay (ISA) Spezifikation zur
                Metadaten-Erstellung. #if$_RNASEQ|$_GENOMIC
 Für spezifische Daten (z.B. RNASeq oder genomische
                Daten) verwenden wir Metadatentemplates der Endpunkt-Repositorien. </span><span
                class="c1">#if$_MINSEQE The Minimum Information About a Next-generation Sequencing Experiment
                (MinSEQe) wird ebenfalls verwendet. #endif$_MINSEQE #endif$_RNASEQ|$_GENOMIC
&nbsp;</span>
            <span class="c1">
                Die folgenden Metadaten-/Mindestinformationsstandards werden zur Sammlung von Metadaten verwendet:
                    <span class="list-to-remove-comma">
                    
                        #if$_GENOMIC|$_GENETIC #if$_MIXS MIxS (Minimum Information about any (X) Sequence), #endif$_MIXS
                        #if$_MIGSEU MigsEu (Minimum Information about a Genome Sequence: Eucaryote), #endif$_MIGSEU
                        #if$_MIGSORG MigsOrg (Minimum Information about a Genome Sequence: Organelle), #endif$_MIGSORG
                        #if$_MIMS MIMS (Minimum Information about Metagenome or Environmental), #endif$_MIMS
                        #if$_MIMARKSSPECIMEN MIMARKSSpecimen (Minimal Information about a Marker Specimen:
                        Specimen), #endif$_MIMARKSSPECIMEN
                        #if$_MIMARKSSURVEY MIMARKSSurvey (Minimal Information about a Marker Specimen:
                        Survey), #endif$_MIMARKSSURVEY
                        #if$_MISAG MISAG (Minimum Information about a Single Amplified Genome), #endif$_MISAG
                        #if$_MIMAG MIMAG (Minimum Information about Metagenome-Assembled Genome), #endif$_MIMAG
                        #endif$_GENOMIC|$_GENETIC
                        #if$_TRANSCRIPTOMIC
                        #if$_MINSEQE MINSEQE (Minimum Information about a high-throughput SEQuencing
                        Experiment), #endif$_MINSEQE 
                         #if$_MIAME MIAME (Minimum Information About a Microarray
                        Experiment), #endif$_MIAME #endif$_TRANSCRIPTOMIC
                        #if$_IMAGE
                        #if$_REMBI REMBI (Recommended Metadata for Biological Images), #endif$_REMBI
                        #endif$_IMAGE
                        #if$_RNASEQ|$_GENOMIC
 
                        #if$_MINSEQE
                            MinSEQe (Minimum Information about a high-throughput Sequencing Experiment),
                        #endif$_MINSEQE 
                        #endif$_RNASEQ|$_GENOMIC

                        #if$_METABOLOMIC
                        #if$_MMIAMET
                        MIAMET (Minimum Information About a METabolomics experiment),
                        #endif$_MMIAMET
                        #endif$_METABOLOMIC
                        #if$_PROTEOMIC
                        #if$_MIAPE MIAPE (Minimum Information About a Proteomics Experiment), #endif$_MIAPE
                        #if$_MIMIX MIMix (The Minimum Information required for reporting a Molecular Interaction Experiment), #endif$_MIMIX
                        #endif$_PROTEOMIC .
                        </span>

                #if$_METABOLOMIC #if$_METABOLIGHTS Metabolights-Einreichungskonforme Standards werden für
                metabolomische Daten verwendet, wo dies von den Konsortialpartnern akzeptiert wird.#issuewarning
                Einige Metabolomik-Partner betrachten Metabolights nicht als akzeptierten Standard.#endissuewarning
                #endif$_METABOLIGHTS #endif$_METABOLOMIC Als Teil der Pflanzenforschungsgemeinschaft verwenden wir
                #if$_MIAPPE MIAPPE für Phänotypisierungsdaten im weitesten Sinne, werden aber auch auf
                #endif$_MIAPPE spezifische SOPs für zusätzliche Annotationen #if$_DATAPLANT zurückgreifen, die
                fortgeschrittene DataPLANT-Annotationen und Ontologien berücksichtigen. #endif$_DATAPLANT


            </span>
        </p>
        <p class="c0"><span class="c1">
                In dem Fall, dass einige Metadaten noch fehlen, werden diese von den experimentellen
                Wissenschaftlern und dem Datenbeauftragten dokumentiert. #if$_DATAPLANT Rohdaten-Identifier und
                Parser, die von DataPLANT bereitgestellt werden, um
                Metadaten direkt aus der Rohdatei zu extrahieren. Die aus der Rohdatei gesammelten Metadaten können
                auch verwendet werden, um die zuvor gesammelten Metadaten zu validieren, falls Fehler auftreten.
                #endif$_DATAPLANT Wir sehen vor, #if$_RNASEQ|$_GENOMIC
 z.B.#if$_MINSEQE MinSEQe für
                Sequenzierungsdaten zu verwenden und #endif$_MINSEQE #endif$_RNASEQ|$_GENOMIC
 Metabolights-kompatible
                Formulare für Metaboliten sowie MIAPPE für phänotypische Daten.
                Letzteres ermöglicht die Integration von Daten über Projekte hinweg und stellt sicher, dass
                etablierte und getestete Protokolle wiederverwendet werden. Darüber hinaus werden wir
                Ontologiebegriffe verwenden, um die Datensätze mit freien und offenen Ontologien anzureichern.
                Zusätzlich könnten zusätzliche Ontologiebegriffe erstellt und während des $_PROJECTNAME kanonisiert
                werden. #if$_DATAPLANT
                DataPLANT bietet Open-Source-Datenkurationswerkzeuge wie das <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arcitect/">ARC-Verwaltungstool ARCitect</a>, das Kommandozeilentool <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/arc-commander/">ARCcommander</a>, die <a target="_blank" href="https://github.com/nfdi4plants/nfdi4plants_ontology">DataPLANT Biological Ontology (DPBO)</a>, das <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/swate/">Metadaten-Annotationstool Swate</a>, das <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/metadata-quiz/">Metadata Quiz</a> und den <a target="_blank" href="https://nfdi4plants.github.io/nfdi4plants.knowledgebase/resources/dataplan/">DataPLAN DMP-Generator</a> an.
                #endif$_DATAPLANT</span></p>


        <p class="c0"><span class="c3"><b>Welche Daten sind ggf. nicht oder nur eingeschränkt durch Dritte nachnutzbar? Warum? An welche Bedingungen ist die Bereitstellung und Nachnutzung durch Dritte ggf. geknüpft?</b></span></p>
         <p class="c0 c2"><span class="c1">
                <p class="c20">
                    <span class="c1">
                        Falls Daten nur innerhalb des Konsortiums geteilt werden, wenn die Daten noch nicht fertig
                        sind oder sich in der IP-Prüfung befinden, werden die Daten intern gehostet und der
                        Benutzername und das Passwort werden benötigt (siehe auch unsere GDPR-Regeln).
                        Wenn Daten unter finalen EU- oder US-Repositorys öffentlich gemacht werden, ist
                        normalerweise ein vollständig anonymer Zugang erlaubt. Dies ist auch bei ENA der Fall und
                        beide entsprechen den GDPR-Anforderungen.

                    </span>
                </p>
                <p class="c0">
                    <span class="c1">Es wird keine Einschränkungen geben, sobald die Daten öffentlich gemacht
                        werden.</span>
                    <span class="c1">
                        #if$_EARLY Einige Rohdaten werden sofort nach ihrer Erfassung und Verarbeitung öffentlich
                        gemacht. #endif$_EARLY #if$_BEFOREPUBLICATION Relevante verarbeitete Datensätze werden
                        öffentlich gemacht, wenn die Forschungsergebnisse veröffentlicht
                        werden. #endif$_BEFOREPUBLICATION #if$_ENDOFPROJECT Am Ende des Projekts werden alle Daten
                        ohne Sperrfrist veröffentlicht. #endif$_ENDOFPROJECT #if$_EMBARGO Daten, die einer Sperrfrist
                        unterliegen, sind bis zum Ende der Sperrfrist nicht öffentlich zugänglich. #endif$_EMBARGO
                        #if$_REQUEST Daten werden auf Anfrage verfügbar gemacht, was eine kontrollierte Weitergabe
                        ermöglicht und gleichzeitig eine verantwortungsvolle Nutzung sicherstellt. #endif$_REQUEST
                        #if$_IPISSUE IP-Probleme werden vor der Veröffentlichung überprüft. #endif$_IPISSUE Alle
                        Konsortialpartner werden ermutigt,
                        Daten vor der Veröffentlichung zugänglich zu machen, offen und/oder unter
                        Vorveröffentlichungsvereinbarungen #if$_GENOMIC wie die in Fort Lauderdale gestarteten und
                        durch den Toronto International Data Release Workshop festgelegten Vereinbarungen
                        #endif$_GENOMIC . Dies wird umgesetzt, sobald die IP-bezogenen Überprüfungen abgeschlossen
                        sind.
                    </span>
                </p>


                <p class="c0">
                    <span class="c1">
                        Die Daten werden zunächst den $_PROJECTNAME Partnern zugutekommen, aber auch ausgewählten
                        Stakeholdern, die eng in das Projekt eingebunden sind, und dann der wissenschaftlichen
                        Gemeinschaft, die an $_STUDYOBJECT arbeitet. $_DATAUTILITY Darüber hinaus können auch die
                        allgemeine Öffentlichkeit, die an $_STUDYOBJECT interessiert ist, die Daten nach der
                        Veröffentlichung nutzen. Die Daten werden gemäß dem Verbreitungs- und Kommunikationsplan des
                        $_PROJECTNAME verbreitet, #if$_DATAPLANT der sich mit der DataPLANT-Plattform oder anderen
                        Mitteln abstimmt #endif$_DATAPLANT.

                    </span>
                </p>
            </span></p>
                <p class="c0"><span class="c1">#if$_EU Das $_PROJECTNAME ist Teil der Open Data Initiative (ODI) der EU.
                #endif$_EU Um optimal von offenen Daten zu profitieren, ist es notwendig, die Daten nicht nur zu
                speichern, sondern sie auch auffindbar, zugänglich, interoperabel und wiederverwendbar (FAIR) zu
                machen. #if$_PROTECT Wir unterstützen offene und FAIR-Daten, berücksichtigen jedoch auch die
                Notwendigkeit, einzelne Datensätze zu schützen. #endif$_PROTECT 
            </span>
        </p>
        <p class="c0"><span class="c1">#if$_DATAPLANT Durch die Implementierung von DataPLANT können Forscher
                sicherstellen, dass alle relevanten Richtlinien und Anforderungen im Zusammenhang mit dem
                Datenmanagement eingehalten werden, was zu einer höheren Qualität und Zuverlässigkeit der
                Forschungsdaten führt. #endif$_DATAPLANT&nbsp; </span>
        </p>
        
        
        <p class="c0"><span class="c3"><b>Gibt es Daten, die aus rechtlichen, patentrechtlichen, urheberrechtlichen, wettbewerblichen oder ethischen Gründen sowie aufgrund von Regelungen, die sich aus internationalem Recht ergeben, nicht zur Nachnutzung bereitgestellt werden können? Wenn ja, welche und warum?</b></span></p>



        <p class="c0"><span class="c1">
                <p class="c0">
                    <span class="c1">
                        Im Moment erwarten wir keine ethischen oder rechtlichen Probleme beim Datenaustausch. In
                        Bezug auf Ethik, da es sich um Pflanzendaten handelt, ist kein Ethikkomitee erforderlich,
                        jedoch wird Sorgfalt bei der Aufteilung der Vorteile von Pflanzenressourcen berücksichtigt.
                        #issuewarning Sie müssen sicherstellen, dass Sie die erforderliche Sorgfaltspflicht erfüllen. Derzeit warten wir auf eine Klärung, ob das Nagoya-Protokoll (🡺 siehe Nagoya-Protokoll) auch Sequenzinformationen umfasst. Unabhängig davon kann die Nutzung von Material aus einem anderen Land als Ihrem eigenen (oder dem Ihres Partners) und dessen physikalische oder biochemische Charakterisierung (z.B. Metaboliten, Proteom, RNASeq, etc.) eine relevante Handlung im Sinne des Nagoya-Protokolls darstellen. Ausnahmen könnten Materialien aus Ländern wie den USA (Nicht-Partner), Irland (hat nicht unterzeichnet—trotzdem kontaktieren), usw. sein, wobei jedoch andere Gesetze Anwendung finden könnten. #endissuewarning
                    </span>
                </p>
                <p class="c0">
                    <span class="c1">
                        Die einzigen personenbezogenen Daten, die möglicherweise gespeichert werden, sind der Name
                        und die Zugehörigkeit des Einreichers in den Metadaten der Daten. Darüber hinaus werden
                        personenbezogene Daten für Verbreitungs- und Kommunikationsaktivitäten gesammelt, wobei
                        spezifische Methoden und Verfahren verwendet werden, die von den $_PROJECTNAME-Partnern
                        entwickelt wurden, um den Datenschutz einzuhalten. #issuewarning Sie müssen informieren und
                        besser eine SCHRIFTLICHE Zustimmung einholen, dass Sie E-Mails und Namen oder sogar
                        Pseudonyme wie Twitter-Handles speichern, wir entschuldigen uns sehr für diese Probleme, die
                        wir nicht erfunden haben. #endissuewarning
                    </span>
                </p>


            </span></p>

        
       
        <p class="c0"><span class="c3"><b>Welche Ausgaben/Kosten sind mit dem Forschungsdatenmanagement zur Laufzeit des Projektes und mit der Bereitstellung zur Nachnutzung verbunden und wie erfolgt die Finanzierung? Hin-weis: Für das Forschungsdatenmanagement während der Projektlaufzeit können notwendige, projektspezifische Ausgaben/Kosten auf Antragsebene beantragt werden. Die veranschlagten Ausgaben/Kosten sind bereits auf Skizzenebene im Finanzierungsplan / der Vorkalkulation zu berücksichtigen.</b></span></p>
        <p class="c0 c2"><span class="c1">
                 <p class="c0"><span class="c1">Das $_PROJECTNAME trägt die Kosten für die Datenkuratierung,
                        #if$_DATAPLANT ARC-Konsistenzprüfungen, #endif$_DATAPLANT und die Datenwartung/-sicherheit
                        vor der Übertragung an öffentliche Repositorien. Nachfolgende Kosten werden dann von den
                        Betreibern dieser Repositorien getragen.</span></p>

                <p class="c0">
                    <span class="c1">
                        Zusätzlich werden Kosten für die Speicherung nach der Veröffentlichung von den
                        Endpunkt-Repositorien (z.B. ENA) getragen, jedoch nicht vom $_PROJECTNAME oder seinen
                        Mitgliedern, sondern durch das Betriebsbudget dieser Repositorien.
                    </span>
                </p>
                <p class="c0">
                    <span class="c1">Wir erwarten, dass wir Rohdaten im Bereich von $_RAWDATA GB an Daten
                        generieren. Die Größe der abgeleiteten Daten wird etwa $_DERIVEDDATA GB betragen.
                    </span>
                </p>


                <p class="c0">
                    #if$_DATAPLANT Da das $_PROJECTNAME eng mit DataPLANT abgestimmt ist, werden der ARC-Konverter und
                    DataHUB verwendet, um die Endpunkt-Repositories zu finden und die Daten automatisch in die
                    Repositories hochzuladen. #endif$_DATAPLANT

                    <span class="c1"> </span>
                </p>
                <p class="c0">
                    <span class="c1">
                        Die Daten werden über die $_PROJECTNAME-Plattform mit einer benutzerfreundlichen Oberfläche
                        verfügbar gemacht, die eine Datenvisualisierung ermöglicht. Die Endpunkt-Repositories sind:
                        #if$_GENETIC #if$_GENBANK NCBI-GenBank, #endif$_GENBANK
                        #if$_ENA EBI-ENA, #endif$_ENA #if$_ARRAYEXPRESS EBI-ArrayExpress, #endif$_ARRAYEXPRESS
                        #endif$_GENETIC #if$_TRANSCRIPTOMIC|$_GENETIC #if$_SRA NCBI-SRA, #endif$_SRA #if$_GEO
                        NCBI-GEO, #endif$_GEO #endif$_TRANSCRIPTOMIC|$_GENETIC #if$_TRANSCRIPTOMIC #if$_ARRAYEXPRESS
                        EBI-ArrayExpress, #endif$_ARRAYEXPRESS #endif$_TRANSCRIPTOMIC #if$_IMAGE #if$_BIOIMAGE
                        EBI-BioImage Archive, #endif$_BIOIMAGE #if$_IDR IDR, #endif$_IDR
                        #endif$_IMAGE #if$_METABOLOMIC #if$_METABOLIGHTS EBI-MetaboLights, #endif$_METABOLIGHTS
                        #if$_METAWORKBENCH Metabolomics Workbench, #endif$_METAWORKBENCH #if$_INTACT IntAct
                        (Molecular interactions) #endif$_INTACT #endif$_METABOLOMIC #if$_PROTEOMIC #if$_PRIDE
                        EBI-PRIDE, #endif$_PRIDE #if$_PDB PDB, #endif$_PDB #if$_CHEBI
                        Chebi, #endif$_CHEBI #endif$_PROTEOMIC #if$_PHENOTYPIC #if$_EDAL e!DAL-PGP,
                        #endif$_EDAL #endif$_PHENOTYPIC.

                        #if$_OTHEREP und $_OTHEREP werden auch verwendet, um Daten zu speichern und die Daten werden
                        dort ebenfalls verarbeitet. #endif$_OTHEREP

                    </span>
                </p>
                <p class="c0">
                    <span class="c1">
                        Die Einreichung ist kostenlos, und es ist das Ziel (zumindest von ENA), so viele Daten wie
                        möglich zu erhalten. Daher sind Absprachen weder notwendig noch sinnvoll.
                        Catch-all-Repositories sind nicht erforderlich.
                        #if$_DATAPLANT Für DataPLANT wurde dies vereinbart. #endif$_DATAPLANT #issuewarning Wenn
                        keine Datenmanagementplattform wie DataPLANT verwendet wird, müssen Sie ein geeignetes
                        Repository finden, um Ihre Daten nach der Veröffentlichung zu speichern oder zu archivieren.
                        #endissuewarning

                    </span>
                </p>

            </span></p>
    </div>
</div>
</div>`};