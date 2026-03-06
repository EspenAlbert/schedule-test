# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 8)
Success rate: 78.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 00:45](#error-2026-02-05t0045000000) | NO_CAPACITY /api/atlas/v2/groups/6983e698b0f8d5bab818c933/containers | dev |  | 6.06s
[2026-02-16 00:49](#error-2026-02-16t0049450000) | NO_CAPACITY /api/atlas/v2/groups/6992673cfca6e0756f2b82bd/containers | dev |  | 5.08s
[2026-02-17 17:55](#error-2026-02-17t1755250000) | NO_CAPACITY /api/atlas/v2/groups/6994a91834398663d0bc8138/containers | dev |  | 7.02s
[2026-02-19 00:45](#error-2026-02-19t0045500000) | NO_CAPACITY /api/atlas/v2/groups/69965bc999696b9761bc41c9/containers | dev |  | 6.08s
[2026-02-24 00:43](#error-2026-02-24t0043140000) | NO_CAPACITY /api/atlas/v2/groups/699cf2afae2412ce6211e914/containers | dev |  | 7.10s
[2026-02-26 00:42](#error-2026-02-26t0042560000) | NO_CAPACITY /api/atlas/v2/groups/699f9597b9916b47c8811648/containers | dev |  | 9.01s
[2026-03-03 00:45](#error-2026-03-03t0045480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 205.03s
[2026-03-04 00:48](#error-2026-03-04t0048270000) | NO_CAPACITY /api/atlas/v2/groups/69a77ee1c7d3cdfdfb6354c0/containers | dev |  | 7.10s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T00:45:00+00:00
```
2026-02-05T00:45:00.9637151Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-05T00:45:00.9642422Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-05T00:45:00.9655802Z   
2026-02-05T00:45:00.9686669Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-05T00:45:00.9687762Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-05T00:45:00.9688632Z         
2026-02-05T00:45:00.9691727Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e698b0f8d5bab818c933/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6983e698b0f8d5bab818c933. Reason: Conflict. Params: [AZURE 6983e698b0f8d5bab818c933], BadRequestDetail: 
2026-02-05T00:45:00.9693107Z         
2026-02-05T00:45:00.9693531Z           with mongodbatlas_network_container.first,
2026-02-05T00:45:00.9694259Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-02-05T00:45:00.9694973Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-02-05T00:45:00.9695584Z         
2026-02-05T00:45:00.9697748Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e698b0f8d5bab818c916/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6983e698b0f8d5bab818c916. Reason: Conflict. Params: [AZURE 6983e698b0f8d5bab818c916], BadRequestDetail: 
2026-02-05T00:45:00.9699054Z         
2026-02-05T00:45:00.9699444Z           with mongodbatlas_network_container.second,
2026-02-05T00:45:00.9700163Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-02-05T00:45:00.9701071Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-02-05T00:45:00.9701451Z         
2026-02-05T00:45:00.9701814Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (6.58s)
```

- 2026-02-06 PASS 3 minutes
- 2026-02-07 PASS 3 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 minutes
- 2026-02-10 PASS 8 minutes
- 2026-02-11 PASS 3 minutes
- 2026-02-12 PASS 8 minutes
- 2026-02-13 PASS 8 minutes
- 2026-02-14 PASS 8 minutes
- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T00:49:45+00:00
```
2026-02-16T00:49:45.0125994Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-16T00:49:45.0130320Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-16T00:49:45.0155671Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-16T00:49:45.0156409Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-16T00:49:45.0156942Z         
2026-02-16T00:49:45.0159006Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6992673cfca6e0756f2b82bd/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6992673cfca6e0756f2b82bd. Reason: Conflict. Params: [AZURE 6992673cfca6e0756f2b82bd], BadRequestDetail: 
2026-02-16T00:49:45.0160395Z         
2026-02-16T00:49:45.0160774Z           with mongodbatlas_network_container.first,
2026-02-16T00:49:45.0161502Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-02-16T00:49:45.0162195Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-02-16T00:49:45.0162554Z         
2026-02-16T00:49:45.0164715Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6992673cfca6e0756f2b82b8/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6992673cfca6e0756f2b82b8. Reason: Conflict. Params: [AZURE 6992673cfca6e0756f2b82b8], BadRequestDetail: 
2026-02-16T00:49:45.0166085Z         
2026-02-16T00:49:45.0166460Z           with mongodbatlas_network_container.second,
2026-02-16T00:49:45.0167190Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-02-16T00:49:45.0167898Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-02-16T00:49:45.0168249Z         
2026-02-16T00:49:45.0168584Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (5.78s)
```

- 2026-02-17
  - PASS 4 minutes
  - PASS 3 minutes
  - FAIL 7 seconds

### Error 2026-02-17T17:55:25+00:00
```
2026-02-17T17:55:25.1171672Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-17T17:55:25.1175806Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-17T17:55:25.1224451Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-17T17:55:25.1225214Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-17T17:55:25.1225747Z         
2026-02-17T17:55:25.1227677Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6994a91834398663d0bc8138/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6994a91834398663d0bc8138. Reason: Conflict. Params: [AZURE 6994a91834398663d0bc8138], BadRequestDetail: 
2026-02-17T17:55:25.1229031Z         
2026-02-17T17:55:25.1230022Z           with mongodbatlas_network_container.first,
2026-02-17T17:55:25.1231427Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-02-17T17:55:25.1232241Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-02-17T17:55:25.1232628Z         
2026-02-17T17:55:25.1235079Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6994a9186947a790bd118503/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 6994a9186947a790bd118503. Reason: Conflict. Params: [AZURE 6994a9186947a790bd118503], BadRequestDetail: 
2026-02-17T17:55:25.1237062Z         
2026-02-17T17:55:25.1237456Z           with mongodbatlas_network_container.second,
2026-02-17T17:55:25.1238185Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-02-17T17:55:25.1238880Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-02-17T17:55:25.1239253Z         
2026-02-17T17:55:25.1239852Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (7.18s)
```

- 2026-02-18 PASS 8 minutes
- 2026-02-19

### Error 2026-02-19T00:45:50+00:00
```
2026-02-19T00:45:50.2854818Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-19T00:45:50.2859787Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-19T00:45:50.2904403Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-19T00:45:50.2905227Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-19T00:45:50.2905767Z         
2026-02-19T00:45:50.2907685Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bc999696b9761bc41c9/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69965bc999696b9761bc41c9. Reason: Conflict. Params: [AZURE 69965bc999696b9761bc41c9], BadRequestDetail: 
2026-02-19T00:45:50.2909048Z         
2026-02-19T00:45:50.2909421Z           with mongodbatlas_network_container.first,
2026-02-19T00:45:50.2910130Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-02-19T00:45:50.2911125Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-02-19T00:45:50.2911491Z         
2026-02-19T00:45:50.2913630Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bc95b4417cf65b85e37/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69965bc95b4417cf65b85e37. Reason: Conflict. Params: [AZURE 69965bc95b4417cf65b85e37], BadRequestDetail: 
2026-02-19T00:45:50.2915040Z         
2026-02-19T00:45:50.2915422Z           with mongodbatlas_network_container.second,
2026-02-19T00:45:50.2916151Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-02-19T00:45:50.2916843Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-02-19T00:45:50.2917206Z         
2026-02-19T00:45:50.2917548Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (6.83s)
```

- 2026-02-20 PASS 8 minutes
- 2026-02-21 PASS 8 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 minutes
- 2026-02-24

### Error 2026-02-24T00:43:14+00:00
```
2026-02-24T00:43:14.4926000Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-24T00:43:14.4931337Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-24T00:43:14.4976809Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-24T00:43:14.4978019Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-24T00:43:14.4979211Z         
2026-02-24T00:43:14.4982603Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2afae2412ce6211e914/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 699cf2afae2412ce6211e914. Reason: Conflict. Params: [AZURE 699cf2afae2412ce6211e914], BadRequestDetail: 
2026-02-24T00:43:14.4984061Z         
2026-02-24T00:43:14.4984516Z           with mongodbatlas_network_container.first,
2026-02-24T00:43:14.4985369Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-02-24T00:43:14.4986127Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-02-24T00:43:14.4986495Z         
2026-02-24T00:43:14.4989299Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2af8dfec41eaa8508ce/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 699cf2af8dfec41eaa8508ce. Reason: Conflict. Params: [AZURE 699cf2af8dfec41eaa8508ce], BadRequestDetail: 
2026-02-24T00:43:14.4990719Z         
2026-02-24T00:43:14.4991155Z           with mongodbatlas_network_container.second,
2026-02-24T00:43:14.4992178Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-02-24T00:43:14.4992949Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-02-24T00:43:14.4993321Z         
2026-02-24T00:43:14.4993669Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (7.99s)
```

- 2026-02-25 PASS 8 minutes
- 2026-02-26

### Error 2026-02-26T00:42:56+00:00
```
2026-02-26T00:42:56.8129979Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-26T00:42:56.8135256Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-26T00:42:56.8180160Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-26T00:42:56.8181026Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-26T00:42:56.8181553Z         
2026-02-26T00:42:56.8183723Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f9597b9916b47c8811648/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 699f9597b9916b47c8811648. Reason: Conflict. Params: [AZURE 699f9597b9916b47c8811648], BadRequestDetail: 
2026-02-26T00:42:56.8185091Z         
2026-02-26T00:42:56.8185470Z           with mongodbatlas_network_container.first,
2026-02-26T00:42:56.8186193Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-02-26T00:42:56.8186869Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-02-26T00:42:56.8187221Z         
2026-02-26T00:42:56.8189371Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f9597b9916b47c881170a/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 699f9597b9916b47c881170a. Reason: Conflict. Params: [AZURE 699f9597b9916b47c881170a], BadRequestDetail: 
2026-02-26T00:42:56.8190721Z         
2026-02-26T00:42:56.8191091Z           with mongodbatlas_network_container.second,
2026-02-26T00:42:56.8191957Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-02-26T00:42:56.8192642Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-02-26T00:42:56.8193209Z         
2026-02-26T00:42:56.8193563Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (9.07s)
```

- 2026-02-27 PASS 4 minutes
- 2026-02-28 PASS 8 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 7 minutes
  - PASS 3 minutes
- 2026-03-03

### Error 2026-03-03T00:45:48+00:00
```
2026-03-03T00:45:48.9473801Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-03-03T00:45:48.9479218Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-03-03T00:45:48.9497783Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-03-03T00:45:48.9498526Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-03-03T00:45:48.9499050Z         
2026-03-03T00:45:48.9499489Z         Error: error creating project: test-acc-tf-p-9711088503952941
2026-03-03T00:45:48.9499856Z         
2026-03-03T00:45:48.9500188Z           with mongodbatlas_project.second,
2026-03-03T00:45:48.9500848Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_project" "second":
2026-03-03T00:45:48.9501641Z           36: 		resource "mongodbatlas_project" "second" {
2026-03-03T00:45:48.9501973Z         
2026-03-03T00:45:48.9502471Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-03T00:45:48.9503157Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-03T00:45:48.9503775Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:45:48.9509069Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (205.31s)
```

- 2026-03-04

### Error 2026-03-04T00:48:27+00:00
```
2026-03-04T00:48:27.7631857Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-03-04T00:48:27.7635960Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-03-04T00:48:27.7682057Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-03-04T00:48:27.7682831Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-03-04T00:48:27.7683360Z         
2026-03-04T00:48:27.7685598Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77ee1c7d3cdfdfb6354c0/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69a77ee1c7d3cdfdfb6354c0. Reason: Conflict. Params: [AZURE 69a77ee1c7d3cdfdfb6354c0], BadRequestDetail: 
2026-03-04T00:48:27.7687001Z         
2026-03-04T00:48:27.7687380Z           with mongodbatlas_network_container.first,
2026-03-04T00:48:27.7688097Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-03-04T00:48:27.7688780Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-03-04T00:48:27.7689138Z         
2026-03-04T00:48:27.7691477Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77ee1c7d3cdfdfb6354c4/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 69a77ee1c7d3cdfdfb6354c4. Reason: Conflict. Params: [AZURE 69a77ee1c7d3cdfdfb6354c4], BadRequestDetail: 
2026-03-04T00:48:27.7692858Z         
2026-03-04T00:48:27.7693233Z           with mongodbatlas_network_container.second,
2026-03-04T00:48:27.7693951Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-03-04T00:48:27.7694644Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-03-04T00:48:27.7695011Z         
2026-03-04T00:48:27.7695352Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (7.96s)
```

- 2026-03-05 PASS 4 minutes
- 2026-03-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 3 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 8 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 3 minutes
  - PASS 7 minutes
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
- 2026-03-01 PASS 8 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 7 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
