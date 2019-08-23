import React from 'react'
import PropTypes from 'prop-types'
import { SectionPostTemplate } from '../../templates/section-post'

const SectionPostPreview = ({ entry, widgetFor }) => (
  <SectionPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

SectionPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SectionPostPreview
