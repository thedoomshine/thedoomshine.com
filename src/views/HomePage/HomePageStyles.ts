import styled from '@emotion/styled'

import floral from '../../assets/images/floral.png'

export const StyledContainer = styled.section`
  align-items: center;
  background-attachment: fixed;
  background-image: url(${floral});
  background-size: 8rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;
`

export const StyledMain = styled.main`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0 1rem 2rem rgba(${({ theme }) => theme.colors.black}, 0.32);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 1rem auto;
  min-height: 100%;
  min-width: 16rem;
  max-width: calc(100% - 4rem);
  position: relative;
  width: 40rem;
`
