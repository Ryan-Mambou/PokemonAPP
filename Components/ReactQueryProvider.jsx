"use client"
import { QueryClientProvider, QueryClient } from 'react-query';
import React from 'react'

const queryClient = new QueryClient();

function ReactQueryProvider({children}) {

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider