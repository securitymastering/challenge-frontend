"use client"

import { styled } from "styled-components"

import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInput } from "./primary-input"
import { CartButton } from "./cart-button"

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin']
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 28px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`

export function Header(){
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div>
                <PrimaryInput placeholder="Procurando por algo específico?"></PrimaryInput>
                <CartButton/>
            </div>
        </TagHeader>
    )
}