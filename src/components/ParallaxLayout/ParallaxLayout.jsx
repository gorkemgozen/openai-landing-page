import React, { useRef, useEffect, useState } from 'react';
import './ParallaxLayout.css';

const ParallaxLayout = () => {
  return (
    <div className="parallax-container">
      <div className="left-sticky">
        <video
          src="https://cdn.openai.com/ctf-cdn/AgentsLaunch_Compressed_1920x1080_4mb_16x9_ArtCard_DZ_v49.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="main-video"
        />
        <div className="text-icin-bisey">
          <span className='left-sticky-baslik'>Karşınızda ChatGPT ajanı</span>
          <div className="left-sticky-kucuk-baslik">
            <span className='left-sticky-span'>Ürün</span> <span className='left-sticky-span' style={{ color: '#666666', marginLeft: '0.6em' }}>11 dakika okuma</span>
          </div>
        </div>
      </div>

      <div className="right-scroll">
        <div className="right-card">
          <img src="https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=1200&q=90&fm=png" alt="" />
          <p>Sam ve Jony'nin mektubu</p>
          <div className="left-sticky-kucuk-baslik">
            <span className='left-sticky-span'>Şirket</span> <span className='left-sticky-span' style={{ color: '#666666', marginLeft: '0.6em' }}>3 dakika okuma</span>
          </div>
        </div>
        <div className="right-card">
          <video src="https://cdn.openai.com/ctf-cdn/250515_Codex_Index_ArtCard_1-1_AB_2xRes_1.mp4" autoPlay loop muted playsInline className="side-video" />
          <p>Karşınızda Codex</p>
            <div className="left-sticky-kucuk-baslik">
            <span className='left-sticky-span'>Lansman</span> <span className='left-sticky-span' style={{ color: '#666666', marginLeft: '0.6em' }}>12 dakika okuma</span>
          </div>
        </div>
        <div className="right-card">
          <img src="https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=1200&q=90&fm=png" alt="" />
          <p>ChatGPT destekli, kişiye özel bir matematik eğitmeni tasarlamak </p>
            <div className="left-sticky-kucuk-baslik">
            <span className='left-sticky-span'>ChatGPT</span> <span className='left-sticky-span' style={{ color: '#666666', marginLeft: '0.6em' }}>4 dakika okuma</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ParallaxLayout;
