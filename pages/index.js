import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCards from '../components/SmallCards';
import MediumCards from '../components/MediumCards';

export default function Home({exploreData, cardsData}) {
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

            <main className='max-w-7xl mx-auto px-8 sm:px-16'>
                <section className='pt-4'>
                    <h1 className='text-3xl font-bold pb-5'>
                        Explore nearby
                    </h1>

                {/*SERVER API*/}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            exploreData?.map(({img, distance, location}) => (
                                <SmallCards
                                    key={img}
                                    img={img}
                                    distance={distance}
                                    location={location}
                                />
                            ))
                        }
                    </div>
                </section>

                <section>
                    <h2 className='text-3xl font-bold py-8'>
                        Live anywhere
                    </h2>

                    {
                        cardsData.map(item => (
                            <MediumCards
                                key={item.img}
                                img={item.img}
                                title={item.title}
                            />
                        ))
                    }
                </section>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());

    const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json());

    return {
        props: {
            exploreData,
            cardsData
        }
    }
}
