import React from "react"

interface IProps {
    children: JSX.Element;
}

const Layout = ({children}: IProps) => {
    return (
        <section className="font-sans text-gray-900 antialiased">
            {children}
        </section>
    )
}

export default Layout
