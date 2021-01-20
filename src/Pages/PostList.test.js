import React from 'react';
import PostList from "./PostList";
import { useQuery } from "react-query";
import { render, screen } from '@testing-library/react';

jest.mock("react-query");

// Arrange Act Assertion
describe("PostList", () => {

    it("when is Loading is true loading text should be display", () => {
        // useQuery.mockRestore()
        //Arrange
        useQuery.mockReturnValue({
            isLoading: true,
            error: null,
            data: null
        })

        // Act
        render(<PostList isDrawerOpen={false} closeDrawer={jest.fn()} />)
        
        // Assertion
        const text = screen.queryByText("Loading...").innerHTML;
        expect(text).toBe("Loading...")
    })

    // it("when isLoading is false and data exit render list of data", ()=>{

    // })
})