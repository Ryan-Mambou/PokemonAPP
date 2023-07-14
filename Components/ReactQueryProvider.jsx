"use client"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'

const queryClient = new QueryClient();

function ReactQueryProvider({children}) {
  //const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider