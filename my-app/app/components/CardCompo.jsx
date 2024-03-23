'use client'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '/styles.module.css';

const player = [
  {
    url: 'https://s3-alpha-sig.figma.com/img/ceed/8067/dc33760174d3f67737f6e318d0f118ff?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gRi10t64DHbb7CKAQ32uZ8r5GgEveA16AhaoyJEq5xxP-SI1b7CiBLkszXQXdS713LL7XKUWF8lKLmJUBIHFgNwgoxU7Q9nUnTlunB5FYP~lcjUv94Cz3te24QyiQnWAXIYz8fW7GX3EBT4Fm9fCAf3N4UG9T9VBZmPdj48aJydkpc4ghL1a~Vxl2ffVb60sIf7aGozJWUMLb19ldALA1PIcnDhX4fLianO0lSzhCaZqBocge45saoIJsWh-Namu5euhcgWNzj4jjaLFrh40McHoPYSz2FJkcgSqcfGTQhpa9-5YidZ0H6j-Uo2C~uB2DgFW5uPwJWNq~9Ow~j12qQ__',
    name: 'Sacramento River Cats'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__',
    name: 'Las Vegas Aviators'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__',
    name: 'Las Vegas Aviators'
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/a24a/d1e0/76e2b366b2456bbd169b0c3c9525252c?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nkp1Is~dcRKVSVj8GNhxNLMJ7gTEzNDkf8VtD-OryJ0sykh1lwmV-ewiigHPS4njhKjcfYNYHzNtka9sa6DQdjxPUZR6L9ziTFWXse30L5RapCCt5H7T5jsZsMoP09PSNj4-HiVCjoqXwVAVEAhZm~f924bZogIfzfxFc0gC3OPjXnfM2b3~W2jRmsFQJYQxHVAHE2c0YUjzBlbFgDwCD5VY6C~tF71RtERjrsoOZMrojXSQzoPhqcCyNZY5lTX7IFlGbpi-1d4QbKSqih3hrizl6afTuUEfMU-y2fpz3lLyQ3EWMCMLQ8RwiBLAvOcsMkDiPhzFhKCJR0~L6GgGBQ__',
    name: 'Las Vegas Aviators'
  },
];

const CardCompo = () => {
  return (
    <div className={styles.container}>
      {player.map((item, index) => (
        <Card key={index} className={styles['custom-card']} style={{ width: '15rem' }}>
          <Card.Img className={styles['card-img-top']} variant="top" src={item.url} />
          <Card.Body className={styles['card-body']}>
            <Card.Title className={styles['card-title']}>{item.name}</Card.Title>
            <div className={styles.smallRectangle}>{/* Small rectangle container */}
              <div className={styles.content}>
                <div className={styles['group-1991']}>
                  <span>Total Events</span>
                  <span>28 Events</span>
                </div>
                <div className={styles['group-1990']}>
                  <span>Sport</span>
                  <span>Baseball</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardCompo;
