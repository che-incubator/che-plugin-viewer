/* eslint-disable react/no-did-update-set-state */
import * as React from 'react';
import PropTypes from 'prop-types';

import { CatalogItemHeader } from 'patternfly-react-extensions/dist/esm/components/CatalogItemHeader';
import {
  PropertiesSidePanel,
  PropertyItem
} from 'patternfly-react-extensions/dist/esm/components/PropertiesSidePanel';
import { Button } from 'patternfly-react/dist/esm/components/Button';
import { Modal } from 'patternfly-react/dist/esm/components/Modal';
import { Alert } from 'patternfly-react/dist/esm/components/Alert'

const notAvailable = (
  <span className="properties-side-panel-pf-property-label">N/A</span>
);

const CatalogItemDetailsDialog = ({
  detailsItem,
  onShowCreateInstance,
  onClose,
  infoDismissed
}) => (
    <Modal
      show
      backdrop
      onHide={onClose}
      className="right-side-modal-pf"
      bsSize="lg"
    >
      <Modal.Header>
        <Modal.CloseButton onClick={onClose} />
        <CatalogItemHeader
          className="catalog-modal__item-header"
          iconImg={detailsItem.icon}
          title={detailsItem.name}
          vendor={`${detailsItem.version} provided by ${detailsItem.provider}`}
        />
      </Modal.Header>
      <Modal.Body>
        <div className="catalog-modal__body">
          <PropertiesSidePanel>
            <Button
              bsStyle="primary"
              className="catalog-modal__subscribe"
              onClick={onShowCreateInstance}
            >
              Preview
           </Button>
            <PropertyItem
              label="Operator Version"
              value={detailsItem.version || notAvailable}
            />
            <PropertyItem
              label="Certified Level"
              value={detailsItem.certifiedLevel || notAvailable}
            />
            <PropertyItem
              label="Provider"
              value={detailsItem.provider || notAvailable}
            />
            <PropertyItem
              label="Health Index"
              value={detailsItem.healthIndex || notAvailable}
            />
            <PropertyItem
              label="Repository"
              value={detailsItem.url || notAvailable}
            />
            <PropertyItem
              label="Container Image"
              value={detailsItem.containerImage || notAvailable}
            />
            <PropertyItem
              label="Created At"
              value={detailsItem.createdAt || notAvailable}
            />
            <PropertyItem
              label="Support"
              value={detailsItem.support || notAvailable}
            />
          </PropertiesSidePanel>
          <div className="catalog-modal__item catalog-modal__description">
            <div key="desc">
              <Alert type="info" onDismiss={infoDismissed}>
                Go to Eclipse che dashboard then select workspace.
                Select the workspace on which you want to activate the plugin.
                Click on plugins to see the list of plugins and activate the required plugin.
              </Alert>
              <h2>Overview</h2>
                {detailsItem.overview || notAvailable}
              <h2 key="desc-1">Features</h2>
                {detailsItem.features || notAvailable}
              <h2 key="desc-2">Screenshots/Videos</h2>
              <img src={require('./scr1.png')} height='110px' />
              <h2 key="desc-3">Configuration</h2>
                {detailsItem.configuration || notAvailable}
              <h2 key="desc-4">Documentation</h2>
              <a key="link-1" href={detailsItem.documentation}>
              {detailsItem.documentation || notAvailable}
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );

CatalogItemDetailsDialog.propTypes = {
  detailsItem: PropTypes.object.isRequired,
  onShowCreateInstance: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onShowDialog: PropTypes.func.isRequired,
  infoDismissed: PropTypes.func.isRequired
};

export default CatalogItemDetailsDialog;
