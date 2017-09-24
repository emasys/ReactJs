import React from 'react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import {Link} from 'react-router-dom';

const getBlocks = ({blocks}) => {
  if (blocks) {
    return blocks.map((block) => {
      return (
        <Reveal
          key={block.id}
          effect=" animated fadeInUp"
          className={`item ${block.type}`}>
          <div className="veil"></div>
          <div
            className="image"
            style={{
            background: `url(/images/blocks/${block.image}) no-repeat`
          }}></div>
          <div className="title">
            <Link to={block.link}>{block.title}</Link>
          </div>
        </Reveal>
      )
    })
  }
}
const Blocks = (props) => {
  return (
    <div className="home_block">
      {getBlocks(props)}
    </div>
  );
}

export default Blocks;