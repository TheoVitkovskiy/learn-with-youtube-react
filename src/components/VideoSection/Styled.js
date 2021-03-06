/**
 * External dependencies
 */
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { styleConst } from 'const';
import { Block } from 'components/Styled';

const { COLORS, FONT_SIZES } = styleConst;

const VideoContainer = Block.extend``;

const IFrame = styled.iframe`
  width: 100%;
  margin: 3rem 0;
`;

const VideoTitle = styled.h2`
  font-size: FONT_SIZES.S;
  font-weight: 400;
`;

export { VideoContainer, IFrame, VideoTitle };
