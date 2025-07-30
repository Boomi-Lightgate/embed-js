import { EnvironmentMapExtension, MapExtensionsMapping } from  '../../service';;

export const generateMapExtensionSoapXml = (
  extension: EnvironmentMapExtension,
  accountId: string,
  username: string,
  token: string
): string => {
  const id = extension.id;
  const mappings = extension?.Map?.ExtendedMappings?.Mapping ?? [];

  const mappingXml = mappings
    .map((m: MapExtensionsMapping) => {
      return `<par:Mapping fromXPath="${m.fromXPath}" toXPath="${m.toXPath}" />`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:par="http://partner.api.platform.boomi.com/"
  xmlns:api="http://api.platform.boomi.com/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <soapenv:Header>
    <wsse:Security
      xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
      xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
      <wsse:UsernameToken wsu:Id="UsernameToken">
        <wsse:Username>${username}</wsse:Username>
        <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">${token}</wsse:Password>
      </wsse:UsernameToken>
    </wsse:Security>
  </soapenv:Header>
  <soapenv:Body>
    <par:update>
      <object xsi:type="api:EnvironmentMapExtension" id="${id}">
        <par:Map>
          <par:ExtendedMappings>
            ${mappingXml}
          </par:ExtendedMappings>
          <par:DestinationProfileExtensions/>
        </par:Map>
      </object>
      <accountId>${accountId}</accountId>
    </par:update>
  </soapenv:Body>
</soapenv:Envelope>`;
};
