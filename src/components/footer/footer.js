import React from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div class="component fpc-grid container-fluid">
          <div class="row">
            <div class="col">
              <div class="component fpc-grid container">
                <div class="row">
                  <div class="col">
                    <p class="h4 colour-fg--white">Tramix</p>
                    <div class="fpc-footer__row-one row">
                      <div class="col-12 col-lg-4">
                        <div class="component fpc-wysiwyg colour-fg--white">
                          <p class="text-small">
                            Tramix acknowledges the Traditional Custodians of the land which our business operates.
                            We pay our respects to Aboriginal and Torres Strait Islanders Elders’ past, present and future
                          </p>
                        </div>
                      </div>
                      <div class="col-12 col-lg-3 offset-lg-5">
                        <div class="component fpc-wysiwyg colour-fg--white">
                          <p class="colour-fg--grey-700 mb-0"><strong>For all enquiries</strong></p>
                          <p><a href="mailto:sales@maajinteriors.org">sales@maajinteriors.org</a></p>
                          <p class="colour-fg--grey-700 mb-0"><strong>A part of</strong></p>
                          <p>Tramix Pty Ltd</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer;
