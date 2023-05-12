
'use client'
import { Container } from './styledComponents/Container';
import { CardLogin } from '@/components/organism/CardLogin';



export default function Home() {
  return (
    <main>
      <Container blue hScreen>
        <CardLogin />
      </Container>
    </main>

  )
}

