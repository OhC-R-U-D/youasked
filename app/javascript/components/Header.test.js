import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header"
import MockSession from "./mockSession"

Enzyme.configure({ adapter: new Adapter() });

describe("testing header component", () =>{
    it("header renders content", () => {
      const header = shallow(<Header {...MockSession}/>);
      expect(header.length).toEqual(1);
      expect(header.find("Navbar").length).toEqual(1);
      expect(header.find("NavLink").length).toEqual(2);
    });
})
