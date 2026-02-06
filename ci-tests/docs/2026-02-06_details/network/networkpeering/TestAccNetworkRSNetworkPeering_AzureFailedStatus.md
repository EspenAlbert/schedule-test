# network/networkpeering/TestAccNetworkRSNetworkPeering_AzureFailedStatus Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-29 00:42](#error-2026-01-29t0042370000) | NO_CAPACITY /api/atlas/v2/groups/697aab88f4a2a16d1a68cd96/containers | dev |  | 6.02s
[2026-02-03 00:43](#error-2026-02-03t0043220000) | NO_CAPACITY /api/atlas/v2/groups/698143b4b2e54ee99590060c/containers | dev |  | 6.03s
[2026-02-04 01:37](#error-2026-02-04t0137440000) |  | dev | timeout | 3729.08s
[2026-02-05 00:45](#error-2026-02-05t0045000000) | NO_CAPACITY /api/atlas/v2/groups/6983e698b0f8d5bab818c933/containers | dev |  | 6.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09 PASS 3 minutes
- 2026-01-10 PASS 3 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 3 minutes
- 2026-01-13 PASS 3 minutes
- 2026-01-14 PASS 3 minutes
- 2026-01-15 PASS 8 minutes
- 2026-01-16 PASS 3 minutes
- 2026-01-17 PASS 8 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20 PASS 3 minutes
- 2026-01-21 PASS 3 minutes
- 2026-01-22 PASS 4 minutes
- 2026-01-23 PASS 3 minutes
- 2026-01-24 PASS 3 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 minutes
- 2026-01-27 PASS 3 minutes
- 2026-01-28 PASS 3 minutes
- 2026-01-29

### Error 2026-01-29T00:42:37+00:00
```
2026-01-29T00:42:37.8483937Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-01-29T00:42:37.8488999Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-01-29T00:42:37.8535980Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-01-29T00:42:37.8536871Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-29T00:42:37.8537419Z         
2026-01-29T00:42:37.8539341Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab88f4a2a16d1a68cd96/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 697aab88f4a2a16d1a68cd96. Reason: Conflict. Params: [AZURE 697aab88f4a2a16d1a68cd96], BadRequestDetail: 
2026-01-29T00:42:37.8540966Z         
2026-01-29T00:42:37.8541344Z           with mongodbatlas_network_container.first,
2026-01-29T00:42:37.8542078Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-01-29T00:42:37.8542770Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-01-29T00:42:37.8543135Z         
2026-01-29T00:42:37.8545275Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab88f4a2a16d1a68ce2d/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 697aab88f4a2a16d1a68ce2d. Reason: Conflict. Params: [AZURE 697aab88f4a2a16d1a68ce2d], BadRequestDetail: 
2026-01-29T00:42:37.8546657Z         
2026-01-29T00:42:37.8547032Z           with mongodbatlas_network_container.second,
2026-01-29T00:42:37.8547759Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-01-29T00:42:37.8548463Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-01-29T00:42:37.8549000Z         
2026-01-29T00:42:37.8549342Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (6.21s)
```

- 2026-01-30 PASS 3 minutes
- 2026-01-31 PASS 3 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 3 minutes
- 2026-02-03

### Error 2026-02-03T00:43:22+00:00
```
2026-02-03T00:43:22.1611836Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-03T00:43:22.1616471Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-03T00:43:22.1700169Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-03T00:43:22.1700897Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:43:22.1701411Z         
2026-02-03T00:43:22.1703363Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b4b2e54ee99590060c/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 698143b4b2e54ee99590060c. Reason: Conflict. Params: [AZURE 698143b4b2e54ee99590060c], BadRequestDetail: 
2026-02-03T00:43:22.1704719Z         
2026-02-03T00:43:22.1705092Z           with mongodbatlas_network_container.first,
2026-02-03T00:43:22.1705814Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_network_container" "first":
2026-02-03T00:43:22.1706502Z           18: 		resource "mongodbatlas_network_container" "first" {
2026-02-03T00:43:22.1706855Z         
2026-02-03T00:43:22.1709087Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b4e3c7fce2317dc63c/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AZURE capacity for group 698143b4e3c7fce2317dc63c. Reason: Conflict. Params: [AZURE 698143b4e3c7fce2317dc63c], BadRequestDetail: 
2026-02-03T00:43:22.1710442Z         
2026-02-03T00:43:22.1710816Z           with mongodbatlas_network_container.second,
2026-02-03T00:43:22.1711538Z           on terraform_plugin_test.tf line 41, in resource "mongodbatlas_network_container" "second":
2026-02-03T00:43:22.1712227Z           41: 		resource "mongodbatlas_network_container" "second" {
2026-02-03T00:43:22.1712582Z         
2026-02-03T00:43:22.1725198Z    test_name=TestAccNetworkNetworkPeering_timeouts test_terraform_path=/home/runner/work/_temp/ebd67da4-db6a-45b7-973f-46e1534798c5/terraform test_working_directory=/tmp/plugintest2146211379
2026-02-03T00:43:22.1734052Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (6.30s)
```

- 2026-02-04

### Error 2026-02-04T01:37:44+00:00
```
2026-02-04T01:37:44.2576053Z === RUN   TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-04T01:37:44.2581340Z === CONT  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-04T01:37:44.2647474Z === NAME  TestAccNetworkRSNetworkPeering_AzureFailedStatus
2026-02-04T01:37:44.2648273Z     resource_test.go:87: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-04T01:37:44.2648832Z         
2026-02-04T01:37:44.2650135Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'ADDING_PEER', timeout: 1h0m0s)
2026-02-04T01:37:44.2651654Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-02-04T01:37:44.2652353Z         
2026-02-04T01:37:44.2652726Z           with mongodbatlas_network_peering.first,
2026-02-04T01:37:44.2653459Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "first":
2026-02-04T01:37:44.2654166Z           25: 		resource "mongodbatlas_network_peering" "first" {
2026-02-04T01:37:44.2654544Z         
2026-02-04T01:37:44.2655871Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'ADDING_PEER', timeout: 1h0m0s)
2026-02-04T01:37:44.2657366Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-02-04T01:37:44.2658049Z         
2026-02-04T01:37:44.2658429Z           with mongodbatlas_network_peering.second,
2026-02-04T01:37:44.2659167Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_network_peering" "second":
2026-02-04T01:37:44.2660191Z           48: 		resource "mongodbatlas_network_peering" "second" {
2026-02-04T01:37:44.2660740Z         
2026-02-04T01:37:44.2661581Z --- FAIL: TestAccNetworkRSNetworkPeering_AzureFailedStatus (3729.80s)
```

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

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 8 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 3 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 8 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 7 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
