import React from 'react';
import ItemNewsWhite from './News/ItemNewsWhite';
import ItemNewsDark from './News/ItemNewsDark';
import newsWhite from '../newsWhite';
import newsDark from '../newsDark';


export default function Main() {
    return (
        <main className='Main'>
            <section className='Main-NewsContainer'>
                <p className='Main-NewsContainer-Title'>ПОСЛЕДНЕЕ</p>
                <div className='Main-NewsContainer-List'>
                    {
                        newsWhite.map((news) =>
                            <ItemNewsWhite key={news.id} img={news.img} data={news.data} theme={news.theme} title={news.title} text={news.text} />
                        )
                    }
                    {
                        newsDark.map((news) =>
                            <ItemNewsDark key={news.id} img={news.img} data={news.data} theme={news.theme} title={news.title} text={news.text} />
                        )
                    }
                    <ItemNewsWhite key={1} img={'https://2.downloader.disk.yandex.by/preview/d6aa5746409d7f3b319c392e4a7721e247d74a1387496beba7f1f15772bd7930/inf/GrGNcA5dEdpoiOEn_rcOotZ8T_AZhlrCwMp5FGZy053J9mS6bp6i6TntJVZzCADifsLFxpij17gD4Ha8t27keQ%3D%3D?uid=418637868&filename=news1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=418637868&tknv=v2&size=1898x932'} data={'Сегодня'} theme={'#БОЛЕЛЬЩИКАМ'} title={'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?'} text={'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...'} />
                </div>
            </section>

        </main >
    )
}
