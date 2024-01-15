import axios, { AxiosRequestConfig } from 'axios';

class APIServiceImplementation {
  // Create a static reference of the Class
  static instance: APIServiceImplementation;

  static getInstance() {
    if (!APIServiceImplementation.instance) {
      APIServiceImplementation.instance = new APIServiceImplementation();
    }
    return APIServiceImplementation.instance;
  }
  static baseURL = 'http://192.168.1.3';
  static port = '3000';
  static apis_version = '/apis/v1';

  getBaseURL() {
    return (
      APIServiceImplementation.baseURL +
      ':' +
      APIServiceImplementation.port +
      APIServiceImplementation.apis_version
    );
  }
  //   http://192.168.1.14:3000/apis/v1/auth/login
  constructEndPoint(controller_name: string, endPoint: string) {
    return this.getBaseURL() + '/' + controller_name + '/' + endPoint;
  }

  getOptions(options?: AxiosRequestConfig): AxiosRequestConfig {
    options = options || {};
    return options;
  }
  async get(
    controller_name: string,
    endPoint: string,
    options?: AxiosRequestConfig
  ) {
    const response = await axios.get(
      this.constructEndPoint(controller_name, endPoint),
      this.getOptions(options)
    );

    if (response && response.status == 200) {
      return response.data;
    }

    console.log(`${JSON.stringify(response)}`);
  }

  async post(
    controller_name: string,
    endPoint: string,
    data: { [key: string]: any } | undefined,
    options?: AxiosRequestConfig
  ) {
    try {
      console.log('Inside API service Post method');
      const response = await axios.post(
        this.constructEndPoint(controller_name, endPoint),
        data,
        this.getOptions(options)
      );
      if (response && (response.status === 200 || response.status === 201)) {
        return response.data;
      }
      console.error(`${JSON.stringify(response)}`);
    } catch (error) {
      console.error(`${JSON.stringify(error)}`);
    }
  }
}

export const APIService = APIServiceImplementation.getInstance();
