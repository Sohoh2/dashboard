import React, { useState } from 'react';
import Commonstyles from '../../common/css/common.module.css';
import { PageHeader } from 'antd';

const Presenter = (props) => {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="SUNNY"
        subTitle="I'm here for you"
      />
      <div className={Commonstyles.Banner} style={{ margin: 'auto 0' }}>
        <div className={Commonstyles.BannerTitleBox}>
          <div className={Commonstyles.BannerTitle}>Contact Sunny Care</div>
        </div>
      </div>{' '}
    </>
  );
};

export default Presenter;
