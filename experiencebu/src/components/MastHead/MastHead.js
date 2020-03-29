import React from 'react';
import { Page, PageHeader, PageSidebar, PageSection, PageSectionVariants } from '@patternfly/react-core';

HorizontalPage = () => {
  const logoProps = {
    href: 'https://patternfly.org',
    onClick: () => console.log('clicked logo'),
    target: '_blank'
  };
  const Header = (
    <PageHeader logo="Logo" logoProps={logoProps} toolbar="Toolbar" avatar=" | Avatar" topNav="Navigation" />
  );

  return (
    <Page header={Header}>
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
};