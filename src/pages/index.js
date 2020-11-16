import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Callout from "../components/callout"

import video from '../video/video.mp4'

import { handleAnchorLink } from '../utility'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="hero position-relative">
        <video style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: -1,
          objectFit: 'cover'
        }} width="100%" height="100%" autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      <div className="container pt-5 pb-5">
        <div className="rounded-lg bg-white p-5 mt-5 mb-5 mr-auto ml-auto" style={{ maxWidth: '700px', boxShadow: '6px 6px 0 #18ebe8'}}>
          <h1>LCN Bioinformatics</h1>
          <p>A bioinformatics consulting company offering state of the art transcriptomics analyses,
          bioinformatics support and educational materials for your lab or business.</p>
          <p className="mb-0">
          LCN Bioinformatics is dedicated to implementing the most innovative bioinformatic
          approaches for your RNA-Seq analysis needs. I provide a range of academic and
          corporate services to help accelerate the scientific discovery process for both model
          and non-model systems. You will find my services useful and cost-effective whether you
          require a great deal of help or just a little.
          </p>
          {/* <a className="btn btn-primary" href="#contact" onClick={handleAnchorLink}>Contact Us</a> */}
        </div>
        
      </div>
    </div>
    

    


    <section style={{ background: '#dde8ff' }} className="pt-4 pb-4">
      <div className="container">
        <h2 id="services" className="text-center mb-1 mt-3">Services</h2>
        <div className="text-center mb-4">
          <small><i>(These lists are not exhaustive & are solely examples)</i></small>
        </div>
        
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
            <ul className="list-group text-lg shadow-lg">
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

          <div className="col col-12 col-md-6 text-center mb-3">
            <h2 className="mb-3" id="contact">Contact Us</h2>
            <p>
              Let’s get in touch! Please feel free to contact me if you have any inquiries or if you are interested in my consulting service.
            </p>
          </div>

          <div className="col col-12 col-md-6">
            <div className="card shadow-lg rounded-lg">
              <div className="card-body">
                <h5 className="d-inline-block mr-2"><b>LCN Bioinformatics, LLC</b></h5>
                
                <h6 className="d-inline-block">Louisa C. Normington
                </h6>
                
                <a href="mailto:lcnbioinformatics@gmail.com" className="d-flex align-items-start mb-2">
                  <i className="fa fa-fw fa-envelope-open mr-2 mt-1 flex-shrink-0" />
                  <span>
                    lcnbioinformatics@gmail.com
                  </span>
                </a>

                <a href="tel:780-995-1386" className="d-flex align-items-start mb-2">
                  <i className="fa fa-fw fa-phone mr-2 mt-1" />
                  <span>
                    780-995-1386
                  </span>
                </a>

                <div className="d-flex align-items-start">
                  <i className="fa fa-fw fa-map-marker mr-2 mt-1 flex-shrink-0" />
                  <span className="flex-shrink-1">
                    LCN Bioinformatics, LLC
                    <br />
                    2 Greenwood Ave, PO Box 212
                    <br />
                    Prides Crossing, MA 01965
                  </span>
                </div>

                <div className="mt-2">
                  <a className="btn btn-outline-primary p-1 mr-3" target="_blank" href="https://www.facebook.com/LCNBioinformatics/" title="LCN Facebook Profile">
                    <i className="fa fa-fw fa-facebook" />
                  </a>
                  <a className="btn btn-outline-primary p-1" target="_blank" href="https://www.linkedin.com/company/lcn-bioinformatics-llc" title="LCN LinkedIn Profile">
                    <i className="fa fa-fw fa-linkedin" />
                  </a>
                </div>
                
              </div>
            
            </div>
            
          </div>
        </div>
        
        
      </div>
    </section>
  </Layout>
)

export default IndexPage
