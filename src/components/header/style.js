import styled from 'styled-components'

const Container = styled.div`
width: 1172px;
margin: 0 auto;
@media (max-width: 768px) {
    width: 100%;
  }
`

Container.Header = styled.header`
display: flex;
justify-content: space-between;
color: #fff;
padding: 16px 0;
@media (max-width: 768px) {
  padding: 16px 10px;
  text-align: center;
  }
`

Container.Greeting =styled.h3`

`
Container.Info = styled.div`
display: flex;
gap: 20px;
`
Container.Language = styled.h3``
Container.Login = styled.h3``


export {Container}