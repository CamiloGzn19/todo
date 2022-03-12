import styled from 'styled-components'

export const OpNav = styled.nav`
    width:100%;
    padding: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color:  hsl(0, 0%, 98%);
    border-radius: 0 0 5px 5px;
    position: sticky;
    bottom: 0;
    -webkit-box-shadow: 0px 13px 17px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 13px 17px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 13px 17px 0px rgba(0,0,0,0.3);
    .dark &{
        background-color: hsl(235, 24%, 19%);
    }
    >div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    >p, button{
        font-size: 13px;
        font-weight: 500;
        color: hsl(236, 9%, 61%);
        .dark &{
            color: hsl(234, 11%, 52%);
        }
    }
    button{
        border: none;
        background:none;
        text-transform: capitalize;
        &:nth-child(1){
            color:hsl(220, 98%, 61%);
            font-weight: 600;
            &:hover{
                color:hsl(220, 98%, 61%);
            }
        }
        &:nth-child(2){
            margin: 0 10px;
        }
        &:hover{
            font-weight: 600;
            color:hsl(235, 19%, 35%);
            .dark &{
                color: hsl(234, 39%, 85%);
            }
        }
        &:nth-child(1){
            color:hsl(220, 98%, 61%);
            font-weight: 600;
            &:hover{
                color:hsl(220, 98%, 61%);
            }
        }
    }
    .active, .completed{
        button:nth-child(1){
            font-weight: 500;
            color: hsl(236, 9%, 61%);
            .dark &{
                color: hsl(234, 11%, 52%);
            }
            &:hover{
                font-weight: 600;
                color:hsl(235, 19%, 35%);
                .dark &{
                    color: hsl(234, 39%, 85%);
                }
            }
        }
    }
    .active{
        button:nth-child(2){
            color:hsl(220, 98%, 61%);
            font-weight: 600;
            &:hover{
                color:hsl(220, 98%, 61%);
            }
        }
    }
    .completed{
        button:nth-child(3){
            color:hsl(220, 98%, 61%);
            font-weight: 600;
            &:hover{
                color:hsl(220, 98%, 61%);
            }
        }
    }
    @media screen and (max-width: 510px){
        position: relative;
        >div{
            width: 100%;
            padding: 13px;
            background-color: hsl(0, 0%, 98%);
            border-radius: 5px;
            position: absolute;
            bottom: -70px;
            left:0;
            -webkit-box-shadow: 0px 9px 17px 0px rgba(0,0,0,0.3);
            -moz-box-shadow: 0px 9px 17px 0px rgba(0,0,0,0.3);
            box-shadow: 0px 9px 17px 0px rgba(0,0,0,0.3);
            .dark &{
                background-color: hsl(235, 24%, 19%);
            }
        }
    }
`