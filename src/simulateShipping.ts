import request from './request';

const simulateShipping = ({
  postalCode, items, sc = 1,
}: ISimulateShippingArgs): Promise<IResponse> => (
  request(`/api/checkout/pub/orderForms/simulation?sc=${sc}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items,
      postalCode: `${postalCode}`.replace(/[^0-9]/g, ''),
      country: 'BRA',
    }),
  })
);

export default simulateShipping;
