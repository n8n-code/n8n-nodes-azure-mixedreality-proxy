import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMixedrealityProxy implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Mixedreality Proxy',
                name: 'N8nDevAzureMixedrealityProxy',
                icon: { light: 'file:./azure-mixedreality-proxy.png', dark: 'file:./azure-mixedreality-proxy.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Mixed Reality Resource Provider Proxy API',
                defaults: { name: 'Azure Mixedreality Proxy' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMixedrealityProxyApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
