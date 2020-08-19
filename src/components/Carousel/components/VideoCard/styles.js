import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  transition: opacity .3s, transform .3s;
  &:hover,
  &:focus {
    opacity: .7;
    transform: scale(1.3);
    transition: .6s
  }
  
  &:not(:first-child) {
    margin-left: 30px;
  }
`;
