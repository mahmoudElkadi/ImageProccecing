import supertest from 'supertest';
import app from '../index';
import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';
import sharpFunc from '../utilities/utilities';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get(
      '/api/image?imageName=encenadaport&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });
});

it('test image processing', () => {
  const image = sharp(path.resolve('./images/encenadaport.jpg'))
    .resize(100, 100)
    .toFile(
      path.resolve('./resized-image/encenadaport-Width=200-height=200.jpg')
    );
  expect(image).toBeDefined();
});


it ('test sharp func',()=>{
  const h= sharpFunc("encenadaport",200,200)
  expect (h).toBeDefined
})

it('test image after resize', () => {
  const image = fs.open(
    path.resolve('./resized-image/encenadaport-Width=500-height=500.jpg')
  );
  expect(image).toBeDefined();
});
