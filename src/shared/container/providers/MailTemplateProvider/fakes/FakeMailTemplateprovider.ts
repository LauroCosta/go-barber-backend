import IMailTemplateProvider from '../models/IMailTemplateprovider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail Content';
  }
}

export default FakeMailTemplateProvider;
