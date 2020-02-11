import request from './request';

const notifyMe = ({ name, email, itemId }: INotifyMeArgs): Promise<IResponse> => {
  const formData = new FormData();
  formData.append('notifymeClientName', name);
  formData.append('notifymeClientEmail', email);
  formData.append('notifymeIdSku', `${itemId}`);

  return request('/no-cache/AviseMe.aspx', {
    method: 'POST',
    body: formData,
  });
};

export default notifyMe;
