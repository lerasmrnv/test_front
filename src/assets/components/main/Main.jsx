import React from 'react';
import ItemNewsWhite from './News/ItemNewsWhite';
import ItemNewsDark from './News/ItemNewsDark';
import newsWhite from '../newsWhite';
import newsDark from '../newsDark';
import Quotes from './Quotes/Quotes';
import quotes from '../quotes';
import BannerFirst from './BannerFirst/BannerFirst';

export default function Main() {
    return (
        <main className='Main'>
            <section className='Main-NewsContainer'>
                <p className='Main-NewsContainer-Title'>ПОСЛЕДНЕЕ</p>
                <div className='Main-NewsContainer-List'>
                    {
                        newsWhite.map((news) =>
                            <ItemNewsWhite className='ItemNewsWhite' key={news.id} img={news.img} data={news.data} theme={news.theme} title={news.title} text={news.text} />
                        )
                    }
                    {
                        newsDark.map((news) =>
                            <ItemNewsDark key={news.id} img={news.img} data={news.data} theme={news.theme} title={news.title} text={news.text} />
                        )
                    }
                    <ItemNewsWhite key={1} img={'https://2.downloader.disk.yandex.by/preview/d6aa5746409d7f3b319c392e4a7721e247d74a1387496beba7f1f15772bd7930/inf/GrGNcA5dEdpoiOEn_rcOotZ8T_AZhlrCwMp5FGZy053J9mS6bp6i6TntJVZzCADifsLFxpij17gD4Ha8t27keQ%3D%3D?uid=418637868&filename=news1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=418637868&tknv=v2&size=1898x932'} data={'Сегодня'} theme={'#БОЛЕЛЬЩИКАМ'} title={'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?'} text={'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...'} />
                </div>
                <div className='Main-QuotesContainer'>
                    {
                        quotes.map((quote) =>
                            <Quotes key={quote.id} img={quote.img} name={quote.name} post={quote.post} text={quote.text} />
                        )
                    }
                </div>
                <div className='Main-NewsContainer-List'>
                    <ItemNewsWhite key={2} img={'https://3.downloader.disk.yandex.by/preview/439e475f26bc9c70b3349fd57923d67e6ae8cf0591747b7c6b8f91257540ea3c/inf/rByuVtzKvV7Car5RibWv9NZ8T_AZhlrCwMp5FGZy053hxvRlRePTjbq3o6Auh6BS6Ffim54Mdfz7QcIPcweaqg%3D%3D?uid=418637868&filename=news2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=418637868&tknv=v2&size=1898x932'} data={'09.07.19'} theme={'#ЛЮБИТЕЛЬСКИЙ_СПОРТ'} title={'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?'} text={'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...'} />
                    {
                        newsDark.map((news) =>
                            <ItemNewsDark key={news.id} img={news.img} data={news.data} theme={news.theme} title={news.title} text={news.text} />
                        )
                    }
                </div>
            </section>
            <section>
                <BannerFirst />
            </section>

        </main >
    )
}
