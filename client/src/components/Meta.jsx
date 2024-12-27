import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Meta = (props) => {
  return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
            </Helmet>
        </HelmetProvider>
    </>
  )
}

export default Meta