import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="hdraf"></div>
            {/*<img alt="" className="animated wobble" src=""/></div>https://mir-s3-cdn-cf.behance.net/user/276/094b4248510751.58db92909b563.png */}
        <div className="hdra"><NavLink
            className="navlink"
            activeClassName="is-active"
            to="/"
            exact={true}
        >
            <div className="div_inh"><span className="span_inh_d" >Գլխավոր</span></div>
      </NavLink>
        <NavLink className="navlink" activeClassName="is-active" to="/Team.js">
            <div className="div_inh">Թիմ</div>
      </NavLink>
        <NavLink className="navlink" activeClassName="is-active" to="/Work.js">
            <div className="div_inh">Աշխատանք</div>
      </NavLink>
        <NavLink className="navlink" activeClassName="is-active" to="/Contact.js">
            <div className="div_inh" id="last_nav">Հետադարձ կապ</div>
      </NavLink></div>
    </header>
);

export default Header;
