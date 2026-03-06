# network/networkcontainer/TestMigNetworkContainer_basicAzure Test Details
# Found 24 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 17) FAIL(x 7)
Success rate: 70.83%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-13 00:51](#error-2026-02-13t0051380000) | NO_CAPACITY /api/atlas/v2/groups/698e731ee8046ccdbd570c9f/containers | dev | 1.08s
[2026-02-16 00:49](#error-2026-02-16t0049450000) | NO_CAPACITY /api/atlas/v2/groups/69926735fca6e0756f2b34be/containers | dev | 1.06s
[2026-02-17 14:19](#error-2026-02-17t1419140000) |  | dev | 178.01s
[2026-02-17 17:55](#error-2026-02-17t1755250000) | NO_CAPACITY /api/atlas/v2/groups/6994a9136947a790bd117b11/containers | dev | 1.07s
[2026-02-20 00:47](#error-2026-02-20t0047000000) | NO_CAPACITY /api/atlas/v2/groups/6997ac8e73841e1a88a5a5ba/containers | dev | 1.04s
[2026-02-23 00:49](#error-2026-02-23t0049340000) | NO_CAPACITY /api/atlas/v2/groups/699ba1a88decccf9757c61d7/containers | dev | 1.05s
[2026-03-04 00:48](#error-2026-03-04t0048270000) | NO_CAPACITY /api/atlas/v2/groups/69a77edba0aca1fefeeaee75/containers | dev | 2.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 2 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 2 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 2 minutes
- 2026-02-12: MISSING
- 2026-02-13

### Error 2026-02-13T00:51:38+00:00
```
2026-02-13T00:51:38.9329939Z === RUN   TestMigNetworkContainer_basicAzure
2026-02-13T00:51:38.9340368Z   
2026-02-13T00:51:38.9340933Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-02-13T00:51:38.9341464Z         
2026-02-13T00:51:38.9343399Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698e731ee8046ccdbd570c9f/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 698e731ee8046ccdbd570c9f. Reason: Conflict. Params: [AZURE 698e731ee8046ccdbd570c9f], BadRequestDetail: 
2026-02-13T00:51:38.9344758Z         
2026-02-13T00:51:38.9345138Z           with mongodbatlas_network_container.test,
2026-02-13T00:51:38.9345853Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-02-13T00:51:38.9346536Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-02-13T00:51:38.9346901Z         
2026-02-13T00:51:38.9347414Z --- FAIL: TestMigNetworkContainer_basicAzure (1.85s)
```

- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T00:49:45+00:00
```
2026-02-16T00:49:45.0077546Z === RUN   TestMigNetworkContainer_basicAzure
2026-02-16T00:49:45.0085845Z    test_name=TestMigNetworkContainer_basicAzure test_step_number=1 test_terraform_path=/home/runner/work/_temp/04b3bf35-0e20-4513-bcf8-7e4348884893/terraform
2026-02-16T00:49:45.0086905Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-02-16T00:49:45.0087418Z         
2026-02-16T00:49:45.0089612Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69926735fca6e0756f2b34be/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69926735fca6e0756f2b34be. Reason: Conflict. Params: [AZURE 69926735fca6e0756f2b34be], BadRequestDetail: 
2026-02-16T00:49:45.0091029Z         
2026-02-16T00:49:45.0091404Z           with mongodbatlas_network_container.test,
2026-02-16T00:49:45.0092142Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-02-16T00:49:45.0092837Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-02-16T00:49:45.0093195Z         
2026-02-16T00:49:45.0093481Z --- FAIL: TestMigNetworkContainer_basicAzure (1.58s)
```

- 2026-02-17
  - FAIL 2 minutes

### Error 2026-02-17T14:19:14+00:00
```
2026-02-17T14:19:14.4423675Z === RUN   TestMigNetworkContainer_basicAzure
2026-02-17T14:19:14.4440032Z   
2026-02-17T14:19:14.4441009Z     resource_network_container_migration_test.go:46: TestStep 2/2 running init: exit status 1
2026-02-17T14:19:14.4441933Z         
2026-02-17T14:19:14.4442659Z         Error: Failed to query available provider packages
2026-02-17T14:19:14.4443318Z         
2026-02-17T14:19:14.4444155Z         Could not retrieve the list of available versions for provider
2026-02-17T14:19:14.4445789Z         mongodb/mongodbatlas: could not connect to registry.terraform.io: failed to
2026-02-17T14:19:14.4446775Z         request discovery document: Get
2026-02-17T14:19:14.4447938Z         "https://registry.terraform.io/.well-known/terraform.json": net/http: request
2026-02-17T14:19:14.4449736Z         canceled while waiting for connection (Client.Timeout exceeded while awaiting
2026-02-17T14:19:14.4450628Z         headers)
2026-02-17T14:19:14.4451084Z         
2026-02-17T14:19:14.4452140Z         To see which modules are currently depending on mongodb/mongodbatlas and what
2026-02-17T14:19:14.4453294Z         versions are specified, run the following command:
2026-02-17T14:19:14.4454111Z             terraform providers
2026-02-17T14:19:14.4454986Z --- FAIL: TestMigNetworkContainer_basicAzure (178.11s)
```

  - FAIL a second

### Error 2026-02-17T17:55:25+00:00
```
2026-02-17T17:55:25.1103139Z === RUN   TestMigNetworkContainer_basicAzure
2026-02-17T17:55:25.1120694Z   
2026-02-17T17:55:25.1121698Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-02-17T17:55:25.1122610Z         
2026-02-17T17:55:25.1126089Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6994a9136947a790bd117b11/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6994a9136947a790bd117b11. Reason: Conflict. Params: [AZURE 6994a9136947a790bd117b11], BadRequestDetail: 
2026-02-17T17:55:25.1128514Z         
2026-02-17T17:55:25.1129197Z           with mongodbatlas_network_container.test,
2026-02-17T17:55:25.1130715Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-02-17T17:55:25.1132129Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-02-17T17:55:25.1132792Z         
2026-02-17T17:55:25.1133318Z --- FAIL: TestMigNetworkContainer_basicAzure (1.70s)
```

- 2026-02-18 PASS 2 minutes
- 2026-02-19: MISSING
- 2026-02-20

### Error 2026-02-20T00:47:00+00:00
```
2026-02-20T00:47:00.6523885Z === RUN   TestMigNetworkContainer_basicAzure
2026-02-20T00:47:00.6531380Z    test_working_directory=/tmp/plugintest2727688919 test_name=TestMigNetworkContainer_basicAzure test_terraform_path=/home/runner/work/_temp/32fd9a85-4a87-4c5d-bc90-164a5b5c742f/terraform
2026-02-20T00:47:00.6532588Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-02-20T00:47:00.6533618Z         
2026-02-20T00:47:00.6535677Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6997ac8e73841e1a88a5a5ba/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6997ac8e73841e1a88a5a5ba. Reason: Conflict. Params: [AZURE 6997ac8e73841e1a88a5a5ba], BadRequestDetail: 
2026-02-20T00:47:00.6537359Z         
2026-02-20T00:47:00.6537768Z           with mongodbatlas_network_container.test,
2026-02-20T00:47:00.6538574Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-02-20T00:47:00.6539300Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-02-20T00:47:00.6539680Z         
2026-02-20T00:47:00.6539993Z --- FAIL: TestMigNetworkContainer_basicAzure (1.38s)
```

- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23

### Error 2026-02-23T00:49:34+00:00
```
2026-02-23T00:49:34.8571520Z === RUN   TestMigNetworkContainer_basicAzure
2026-02-23T00:49:34.8582040Z   
2026-02-23T00:49:34.8582608Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-02-23T00:49:34.8583131Z         
2026-02-23T00:49:34.8585465Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699ba1a88decccf9757c61d7/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 699ba1a88decccf9757c61d7. Reason: Conflict. Params: [AZURE 699ba1a88decccf9757c61d7], BadRequestDetail: 
2026-02-23T00:49:34.8587628Z         
2026-02-23T00:49:34.8588056Z           with mongodbatlas_network_container.test,
2026-02-23T00:49:34.8588785Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-02-23T00:49:34.8589471Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-02-23T00:49:34.8589837Z         
2026-02-23T00:49:34.8590139Z --- FAIL: TestMigNetworkContainer_basicAzure (1.51s)
```

- 2026-02-24: MISSING
- 2026-02-25 PASS 2 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 2 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-03-03: MISSING
- 2026-03-04

### Error 2026-03-04T00:48:27+00:00
```
2026-03-04T00:48:27.7576942Z === RUN   TestMigNetworkContainer_basicAzure
2026-03-04T00:48:27.7591618Z   
2026-03-04T00:48:27.7592508Z     resource_network_container_migration_test.go:46: Step 1/2 error: Error running apply: exit status 1
2026-03-04T00:48:27.7593032Z         
2026-03-04T00:48:27.7595040Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77edba0aca1fefeeaee75/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69a77edba0aca1fefeeaee75. Reason: Conflict. Params: [AZURE 69a77edba0aca1fefeeaee75], BadRequestDetail: 
2026-03-04T00:48:27.7596760Z         
2026-03-04T00:48:27.7597138Z           with mongodbatlas_network_container.test,
2026-03-04T00:48:27.7597853Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_network_container" "test":
2026-03-04T00:48:27.7598534Z           14: 		resource "mongodbatlas_network_container" "test" {
2026-03-04T00:48:27.7598903Z         
2026-03-04T00:48:27.7599205Z --- FAIL: TestMigNetworkContainer_basicAzure (2.51s)
```

- 2026-03-05: MISSING
- 2026-03-06 PASS 2 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 2 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 2 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 2 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 2 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 2 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 2 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
