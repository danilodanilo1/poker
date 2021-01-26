import styled from 'styled-components'

export const Div = styled.div`
    margin-top:10%;
    >button{
            border-radius: 40px;
            outline:none;
            padding:5px 20px;
            background-color:#ce9595;
        }
    >div{
        display:flex;
        flex-direction:row;
        margin:5px;
        align-items:center;
        >input{
            width:300px;
            height:30px;
        }
        >p{
            margin-right:15px;
        }

    }
`

export const Select = styled.select`
  width:200px;
`