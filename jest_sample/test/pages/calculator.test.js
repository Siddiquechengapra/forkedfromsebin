import React from "react";
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Calculator from '@/pages/calculator'

describe('calculator test', () => {
    // it('renders 19 buttons', () => {
    //     render(<Calculator />)
    //     const buttons = screen.getAllByRole('button')
    //     expect(buttons).toHaveLength(19)
    // })
    // it('renders 19 buttons', () => {
    //     render(<Calculator />)
    //     const buttons = screen.getByRole('button')
    //     expect(buttons).tobe
    // })
    // it('Checking for header', () => {
    //     render(<Calculator />)
    //     const header = screen.getByRole('heading')
    //     expect(header).toHaveTextContent('CALCULATOR')
    // })
    // it('renders 0 buttons', () => {
    //     render(<Calculator />)
    //     const button = screen.getAllByRole('button')
    //     button = screen.getByText('0')
    //     fireEvent.click(button)
    //     expect(buttons).toBeInTheDocument()
    // })
    // it('Add numbers using the add method', () => {
    //     expect(Calculator.numClickHandler2('9', '9')).toBe(9)
    // })

    it("renders a calculator", () => {
        render(<Calculator />);
        expect(screen.getByTestId("result")).toBeInTheDocument();
        expect(screen.getByTestId("num1")).toBeInTheDocument();
        expect(screen.getByTestId("num2")).toBeInTheDocument();
        expect(screen.getByTestId("add")).toBeInTheDocument();
        expect(screen.getByTestId("subtract")).toBeInTheDocument();
        expect(screen.getByTestId("multiply")).toBeInTheDocument();
        expect(screen.getByTestId("divide")).toBeInTheDocument();
    });

    it("adds numbers", () => {
        render(<Calculator />);
        const num1input = screen.getByTestId("num1");
        const num2input = screen.getByTestId("num2");
        const addButton = screen.getByTestId("add");
        const resultArea = screen.getByTestId("result");
        fireEvent.change(num1input, { target: { value: 5 } });
        fireEvent.change(num2input, { target: { value: 8 } });
        fireEvent.click(addButton);
        expect(resultArea).toHaveTextContent("13");
    });

    it("subtracts numbers", () => {
        render(<Calculator />);
        const num1input = screen.getByTestId("num1");
        const num2input = screen.getByTestId("num2");
        const subtractButton = screen.getByTestId("subtract");
        const resultArea = screen.getByTestId("result");
        fireEvent.change(num1input, { target: { value: 8 } });
        fireEvent.change(num2input, { target: { value: 5 } });
        fireEvent.click(subtractButton);

        expect(resultArea).toHaveTextContent("3");
    });
    it("multiplies numbers", () => {
        render(<Calculator />);
        const num1input = screen.getByTestId("num1");
        const num2input = screen.getByTestId("num2");
        const multiplyButton = screen.getByTestId("multiply");
        const resultArea = screen.getByTestId("result");
        fireEvent.change(num1input, { target: { value: 5 } });
        fireEvent.change(num2input, { target: { value: 8 } });
        fireEvent.click(multiplyButton);

        expect(resultArea).toHaveTextContent("40");
    });

    it("divides numbers", () => {
        render(<Calculator />);
        const num1input = screen.getByTestId("num1");
        const num2input = screen.getByTestId("num2");
        const divideButton = screen.getByTestId("divide");
        const resultArea = screen.getByTestId("result");
        fireEvent.change(num1input, { target: { value: 20 } });
        fireEvent.change(num2input, { target: { value: 2 } });
        fireEvent.click(divideButton);

        expect(resultArea).toHaveTextContent("10");
    });

    it("Has all 5 butons", () => {
        render(<Calculator />);
        const buttons = screen.getAllByRole('button')
        expect(buttons).toHaveLength(5)

    });
    it("Has all 2 textfields", () => {
        render(<Calculator />);
        const inputs = screen.getAllByRole('textbox')
        expect(inputs).toHaveLength(2)

    });

})
