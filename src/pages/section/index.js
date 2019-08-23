import React from 'react'

import Layout from '../../components/Layout'
import SectionRoll from '../../components/SectionRoll'

export default class SectionIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <SectionRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
