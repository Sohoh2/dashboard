import React, { useState } from 'react';
import Commonstyles from '../../common/css/common.module.css';
import { PageHeader } from 'antd';
import { Link } from 'react-router-dom';

const Presenter = (props) => {
  return (
      <>
    <Link to='/main'>
      <PageHeader
        className="site-page-header"
        title="SUNNY"
        subTitle="I'm here for you"
      />
      </Link>
      <div className={Commonstyles.Banner} style={{ margin: 'auto 0' }}>
        <div className={Commonstyles.BannerTitleBox}>
          <div className={Commonstyles.BannerTitle}>Contact Sunny Care</div>
        </div>
      </div>{' '}
    </>
  );
};

export default Presenter;
