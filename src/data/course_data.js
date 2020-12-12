import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: `This course is about learning to stitch a single garment like Saree blouse, Salwar Kameez, Skirt & Top etc
      In this course,the student learns about measurements of a specific garment and the way to measure a person for the same. Guidance on Instructions and calculations for drafting and then Drafting of the pattern on the paper and then on fabric and the method to cut and stitch the fabric without lining and with lining would be taught.`,
    media: '/static/images/products/product_1.png',
    title: 'Short Term Single Garment ',
    price: '594',
    duration: '1 month'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: `This is a very useful course designed for people who wish to learn various design patterns to make garments.
      Here all the necessary and important dresses for everyday use is taught. Pursuing this course will enable a person to understand the different aspects of pattern making and tailoring in a shorter time frame.`,
    media: '/static/images/products/product_2.png',
    title: 'Two Months Basic Class in Tailoring',
    price: '625',
    duration: '3 month'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: `This course is designed to teach the various nuances of pattern making and fashion dress designing in a comprehensive manner.The patterns cater to both standard measurements & personal . By learning different types of patterns, a student would be able to stylishly design her own dress according to the latest trends.

      This course is useful for persons who wish to start their own business such as establishing a tailoring unit or a Boutique as well as for Professional garment design opportunities in the Industry.`,
    media: '/static/images/products/product_3.png',
    title: 'Six Months Diploma Course in Tailoring',
    price: '857',
    duration: '6 month'
  }
];
