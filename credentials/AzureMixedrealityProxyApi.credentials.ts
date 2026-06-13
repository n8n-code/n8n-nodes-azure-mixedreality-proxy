import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMixedrealityProxyApi implements ICredentialType {
        name = 'N8nDevAzureMixedrealityProxyApi';

        displayName = 'Azure Mixedreality Proxy API';

        icon: Icon = { light: 'file:../nodes/AzureMixedrealityProxy/azure-mixedreality-proxy.png', dark: 'file:../nodes/AzureMixedrealityProxy/azure-mixedreality-proxy.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Mixedreality Proxy API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
