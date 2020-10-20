import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Callout from "../components/callout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container pt-5 pb-5">
      <h1>LCN Bio Informatics</h1>
      <p>A bioinformatics consulting company offering state of the art transcriptomics analyses,
      bioinformatics support and educational materials for your lab or business.</p>
      <p>
      LCN Bioinformatics is dedicated to implementing the most innovative bioinformatic
      approaches for your RNA-Seq analysis needs. I provide a range of academic and
      corporate services to help accelerate the scientific discovery process for both model
      and non-model systems. You will find my services useful and cost-effective whether you
      require a great deal of help or just a little.
      </p>
      <a className="btn btn-primary" href="#contact">Contact Us</a>
    </div>

    


    <section style={{ background: '#dde8ff' }} className="pt-4 pb-4">
      <div className="container">
        <h2 id="services" className="text-center mb-4 mt-3">Services</h2>
        <div className="row">
          <Callout
            title="Transcriptomics"
            items={[
              'RNA-Seq data quality assessment and pre-processing',
              'De novo and reference guided transcriptome assembly',
              'Read alignment',
              'Transcript abundance enumeration',
              'Differential expression analysis',
              'Variant detection',
              'Co-expression network analysis, hub gene detection and visualization',
              'Gene expression-meta data correlation analysis'
            ]} />
          <Callout
            title="Gene Annotation and Analyses"
            items={[
              'Sequence annotation using a variety of data bases such as NCBI and TAIR10',
              'Functional annotation using various approaches such as Gene Ontology and Map Man',
              'Biochemical pathway analysis using data bases and tools such as KEGG and Reactome',
              'Gene set enrichment analysis',
              'Over-representation analysis'
            ]} />

          <Callout
              title="Statistical Analyses"
              items={[
                'Survival analysis',
                'Principal component analysis',
                'ANOVA',
                'Regression analysis',
                'Hypothesis testing'
              ]} />
          <Callout
            title="Other services"
            items={[
              'Production of publication quality figures',
              'Manuscript review for publications, including help with reviewer comments',
              'Educational materials and scripts for any service offered',
              'Virtual training for any services offered',
              'Free post-project support',
              '-25% academic discount for customers who agree to be a public reference and to acknowledge my services in ensuing research articles (authorship not required)'
            ]} />
        </div>
      </div>
      
    </section>

    <section className="pt-5 pb-5">
      <div className="container">
        <h2 id="how" className="text-center">How It Works</h2>
      </div>
    </section>


    <section className="pt-5 pb-5">
      <div className="container">
        <h2 className="text-center mb-5" id="why">Why LCN Bioinformatics?</h2> 

        <div className="row">
          <div className="col col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
            <ul className="list-group text-lg">
            <li className="list-group-item">Specific to your research needs</li>
            <li className="list-group-item">High quality</li>
            <li className="list-group-item">Low cost</li>
            <li className="list-group-item">Effective use of time</li>
            <li className="list-group-item">Security and privacy</li>
            <li className="list-group-item">Communication</li>
          </ul>
          </div>
          
        </div>
        
      </div>
      
    </section>

    <section style={{ background: '#dde8ff'}} className="pt-5 pb-5">
      <div className="container">
        <div className="row">

          <div className="col col-12 col-md-6 text-center">
            <h2 className="mb-3" id="contact">Contact Us</h2>
            <p>
              Let’s get in touch! Please feel free to contact me if you have any inquiries or if you are interested in my consulting service.
            </p>
          </div>

          <div className="col col-12 col-md-6">
            <div className="card shadow rounded-lg">
              <div className="card-body">
                <h6 className="card-title text-center">Louisa C. Normington
                  <a className="btn btn-outline-primary p-1 mr-3 ml-3" href="facebook" title="LCN Facebook Profile">
                    <i className="fa fa-fw fa-facebook" />
                  </a>
                  <a className="btn btn-outline-primary p-1" href="linkedin" title="LCN LinkedIn Profile">
                    <i className="fa fa-fw fa-linkedin" />
                  </a>
                </h6>
                
                
                <a href="mailto:lcnbioinformatics@gmail.com">
                  <i className="fa fa-fw fa-envelope-open mr-2" />lcnbioinformatics@gmail.com
                </a>
                <br />
                <a href="tel:780-995-1386">
                  <i className="fa fa-fw fa-phone mr-2" />780-995-1386
                </a>
                <br />
                <span>
                  <i className="fa fa-fw fa-map-marker mr-2" />LCN Bioinformatics, LLC, 2 Greenwood Ave, PO Box 212, Prides Crossing, MA 01965
                </span>
                <br/>
                
              </div>
            
            </div>
            
          </div>
        </div>
        
        
      </div>
    </section>
  </Layout>
)

export default IndexPage
