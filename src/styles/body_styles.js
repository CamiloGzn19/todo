import styled from "styled-components";

export const Main = styled.div`
    width:500px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    form{
        width: 100%;
        margin: 40px 0;
        padding: 18px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background-color:  hsl(0, 0%, 98%);
        -webkit-box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        .dark &{
            background-color: hsl(235, 24%, 19%);
        }
        &::before{
            content: "";
            width: 20px;
            height: 20px;
            margin: 0 20px;
            border: solid 1px hsl(233, 11%, 84%);
            border-radius: 50%;
            .dark &{
                border-color: hsl(237, 14%, 26%);
            }
        }
        input{
            margin-right: 10px;
            flex-grow: 1;
            border: none;
            background-color: transparent;
            color: hsl(235, 19%, 35%);
            font-family: 'Josefin Sans', sans-serif;
            font-size: 18px;
            &:focus{
                outline:none;
            }
            &::placeholder{
                color: hsl(236, 9%, 61%);
            }
            .dark &{
                color: hsl(234, 39%, 85%);
                &::placeholder{
                    color: hsl(234, 11%, 52%);
                }
            }
        }
    }
    >div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-color:  hsl(0, 0%, 98%);
        border-radius: 5px 5px 0 0;
        -webkit-box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        box-shadow: 0px 4px 17px 0px rgba(0,0,0,0.3);
        .dark &{
            background-color: hsl(235, 24%, 19%);
        }
        div{
            width: 100%;
            padding: 18px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border-bottom: solid 1px hsl(236, 33%, 92%);
            .dark &{
               border-color: hsl(237, 14%, 26%);
            }
            .btn-select{
                width: 20px;
                height: 20px;
                margin: 0 20px;
                border: solid 1px hsl(233, 11%, 84%);
                border-radius: 50%;
                background: none;
                img{
                    visibility: hidden;
                }
                .dark &{
                    border-color: hsl(237, 14%, 26%);
                }
                &:hover{
                    border: solid 2px transparent;
                    background-image: linear-gradient(hsl(0, 0%, 98%), hsl(0, 0%, 98%)), linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                    background-origin: border-box;
                    background-clip:content-box, border-box;
                    .dark &{
                        background-image: linear-gradient(hsl(235, 24%, 19%), hsl(235, 24%, 19%)), linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                    }
                }
            }
            p{
                margin-right: 10px;
                flex-grow: 1;
                border: none;
                background-color: transparent;
                color: hsl(235, 19%, 35%);
                font-family: 'Josefin Sans', sans-serif;
                font-size: 18px;
                .dark &{
                    color: hsl(234, 39%, 85%);
                }
                &.no-notes{
                    text-align: center;
                    font-size: 14px;
                }
            }
            .btn-close{
                width: 20px;
                height: 20px;
                margin: 0 10px;
                background: none;
                border: none;
                visibility: hidden;
            }
            &.completed{
                .btn-select{
                    background-image: linear-gradient(45deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                    border:none;
                    img{
                        visibility: visible;
                    }
                    &:hover{
                        border:none;
                        background-image: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
                    }
                }
                p{
                    text-decoration: line-through;
                    color: hsl(236, 9%, 61%);
                    .dark &{
                        color: hsl(234, 11%, 52%);
                    }
                }
            }
            &:hover{
                .btn-close{
                    visibility: visible;
                }
            }
        }
    }
    @media screen and (max-width: 510px){
        width: 95%;
    }
`
