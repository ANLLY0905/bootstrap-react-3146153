import React from 'react'
import "./App.css"
import { NavBar } from './components/NavBar'
import { FilterBar } from './components/FilterBar'
import { ExtensionCard } from './components/ExtensionCard'
import { LoginForm } from './components/LoginForm'

export const App = () => {
  return (
    <>
    <NavBar/>
    <LoginForm/>
    </>
  )
}
