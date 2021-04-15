import { Button, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderMobileDrawerWrapper =  styled.ul`
    text-align : right;
    display : flex;
    justify-content : center;
    flex-direction: column;
    height : 100%;
    margin : 0;

    li {
        margin : 1rem 0 ;
        list-style : none;
        text-align : right;
    }

    & .header__mobileMenu {
        color : ${props => props.checkDefault("linkColorMobile") ? props.getStyles("linkColorMobile") : 'black'};
        a {
            color : ${props => props.checkDefault("subMenuLinkMobile") ? props.getStyles("subMenuLinkMobile") : "black"}
        }
    }
    & .header__mobileItem {
        a {
            color : ${props => props.checkDefault("linkColorMobile") ? props.getStyles("linkColorMobile") : 'black'};
        }
    }
`


const HeaderMobileDrawer = ({items , actions, ...rest}) => {
    const subMenuRenderChecker = (el , i) => {
        if(el.subMenu.length) return (
            <Menu className="header__mobileMenu" key={i} mode="inline" >
                <SubMenu title={el.name} key={i}>
                    {
                        items.map((el , i) => (
                            <Menu.Item key={i}>
                                <Link to={el.link}>
                                    {el.name}
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </SubMenu>
            </Menu>
        )
        return <li className="header__mobileItem" key={i}><Link to={el.link}>{el.name}</Link></li>     
    }
    return (
        <HeaderMobileDrawerWrapper {...rest} className="header__mobile">
            {actions.map((el , i) => (
                    <Button style={{margin: '5px 0'}} type='outlined' onClick={() => el.handler(el.name)} key={i}>{el.name}</Button>
             ))}
            {items.map(subMenuRenderChecker)}
        </HeaderMobileDrawerWrapper>
    )
}

export default HeaderMobileDrawer;