import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home() {
    return (
        <div className=''>
            <Head>
                <title>
                    AirBnB 2
                </title>

                <link rel='icon' href='/airbnb.png'/>
            </Head>

            <Header />
            <Banner />

            <main>
                <section className='pt-4'>
                    <h1 className='text-3xl font-bold pb-5 ml-5'>
                        Explore Nearby
                    </h1>
                </section>
            </main>
        </div>
    )
}
