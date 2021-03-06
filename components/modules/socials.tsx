import React from 'react'
import Row from '~/components/abstracts/row'
import SectionContainer from '~/components/abstracts/section-container'
import SectionTitle from '~/components/elements/section-title'
import SocialLink from '~/components/elements/social-link'

function Socials() {
  return (
    <SectionContainer id="socials">
      <SectionTitle>Socials</SectionTitle>
      <Row space={24}>
        <SocialLink
          href="https://github.com/ymkz"
          aria-label="Link to GitHub"
          svg={require('~/static/images/icons/github.svg?include')}
        />
        <SocialLink
          href="https://twitter.com/ymkzly"
          aria-label="Link to Twitter"
          svg={require('~/static/images/icons/twitter.svg?include')}
        />
        <SocialLink
          href="https://facebook.com/ymkzly"
          aria-label="Link to Facebook"
          svg={require('~/static/images/icons/facebook.svg?include')}
        />
      </Row>
    </SectionContainer>
  )
}

export default Socials
